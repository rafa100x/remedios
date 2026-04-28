import express from "express";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import path from "path";
import "dotenv/config";
import { MercadoPagoConfig, Preference, Payment } from 'mercadopago';
import { initializeApp, cert, getApps, getApp } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';

// Initialize Firebase Admin (Safe fallback if missing envs)
let firebaseApp = null;
try {
    if (process.env.FIREBASE_PROJECT_ID && process.env.FIREBASE_PRIVATE_KEY && process.env.FIREBASE_CLIENT_EMAIL) {
        if (!getApps().length) {
            firebaseApp = initializeApp({
                credential: cert({
                    projectId: process.env.FIREBASE_PROJECT_ID,
                    privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
                    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
                })
            });
        } else {
            firebaseApp = getApp();
        }
        console.log("Firebase Admin initialized securely.");
    } else {
        console.warn("Missing Firebase Admin credentials in .env");
    }
} catch (e) {
    console.error("Failed to initialize Firebase Admin:", e);
}

let ai: GoogleGenAI | null = null;
const imageCache = new Map<string, string>();

try {
  // Try env first (this is what the deployed shell does), fallback to hardcoded for the local node process
  const apiKey = process.env.GEMINI_API_KEY || "AIzaSyAYbp3d_dlp-L1JgV_1r4ahvx7el-bPNDI";
  if (apiKey) {
    ai = new GoogleGenAI({ apiKey });
    console.log("GoogleGenAI initialized with API key.");
  } else {
    console.warn("GEMINI_API_KEY is not set in the environment.");
  }
} catch (e) {
  console.error("Failed to initialize GoogleGenAI:", e);
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: '10mb' }));

  // --- MERCADO PAGO INTEGRATION ---
  
  app.post("/api/create-preference", async (req, res) => {
      try {
          if (!process.env.MP_ACCESS_TOKEN) {
              return res.status(500).json({ error: "Mercado Pago Token not configured in .env" });
          }

          const { bookId, title, price, userId } = req.body;
          if (!bookId || !userId) return res.status(400).json({ error: "Missing required fields" });

          const mpConfig = new MercadoPagoConfig({ accessToken: process.env.MP_ACCESS_TOKEN });
          const preference = new Preference(mpConfig);

          // We use external_reference to securely pass the format userId_bookId
          // This ensures that when the webhook returns, we know EXACTLY who bought WHAT.
          const newPreference = await preference.create({
              body: {
                  items: [
                      {
                          id: bookId,
                          title: title,
                          quantity: 1,
                          unit_price: Number(price.replace(/[^0-9.-]+/g,"")) || 5000, 
                          currency_id: 'ARS'
                      }
                  ],
                  external_reference: `${userId}_${bookId}`,
                  back_urls: {
                      success: process.env.APP_URL || "http://localhost:3000",
                      failure: process.env.APP_URL || "http://localhost:3000",
                      pending: process.env.APP_URL || "http://localhost:3000"
                  },
                  auto_return: "approved",
              }
          });

          return res.json({ init_point: newPreference.init_point });

      } catch (error: any) {
          console.error("MP Preference Error:", error);
          res.status(500).json({ error: "Error creating preference" });
      }
  });

  app.post("/api/webhooks/mercadopago", async (req, res) => {
      // Return 200 immediately to MercadoPago so it doesn't retry infinitely
      res.status(200).send("OK");
  
      try {
          if (!process.env.MP_ACCESS_TOKEN || !firebaseApp) {
              console.error("Webhook received but secrets/firebase not configured.");
              return;
          }

          const { type, data } = req.body;

          // Only listen for approved payments
          if (type === 'payment' && data && data.id) {
              const mpConfig = new MercadoPagoConfig({ accessToken: process.env.MP_ACCESS_TOKEN });
              const paymentClient = new Payment(mpConfig);
              const paymentState = await paymentClient.get({ id: data.id });

              if (paymentState.status === 'approved' && paymentState.external_reference) {
                   // Split `userId_bookId` from the reference we created earlier
                   const parts = paymentState.external_reference.split('_');
                   if (parts.length === 2) {
                       const [userId, bookId] = parts;

                       // By using Admin SDK, we bypass Firestore Security Rules (Inquebrantable!)
                       console.log(`Unlocking item [${bookId}] for user [${userId}]`);
                       
                       const updateData: any = {};
                       if (bookId === 'guru') {
                           updateData.hasGuruAccess = true;
                       } else {
                           updateData.purchasedBooks = FieldValue.arrayUnion(bookId);
                       }

                       await getFirestore().collection('users').doc(userId).update(updateData);
                       console.log("Database updated successfully.");
                   }
              }
          }
      } catch (error) {
          console.error("Webhook processing error:", error);
      }
  });

  app.post("/api/unlock-code", async (req, res) => {
    try {
      const { userId, code } = req.body;
      if (!userId || !code) return res.status(400).json({ error: "Missing parameters" });
      
      const cleanCode = code.trim().toUpperCase();
      if (cleanCode === 'GURU-MAGICO' || cleanCode === 'GURU-2026') {
         if (firebaseApp) {
             await getFirestore().collection('users').doc(userId).update({
                 hasGuruAccess: true,
                 updatedAt: FieldValue.serverTimestamp()
             });
             return res.json({ success: true });
         } else {
             return res.status(500).json({ error: "Firebase Admin not initialized" });
         }
      } else {
          return res.status(400).json({ error: "El código ingresado no es válido." });
      }
    } catch (e: any) {
      console.error(e);
      return res.status(500).json({ error: "Error interno al procesar el código" });
    }
  });

  // --- GEMINI CHAT API ---
  app.post("/api/guru-chat", async (req, res) => {
    try {
      const { contents, instruction } = req.body;
      if (!contents) return res.status(400).json({ error: "Missing contents" });

      if (!ai && process.env.GEMINI_API_KEY) {
         try {
           ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
         } catch (e) {
           console.error("Failed to dynamically initialize AI:", e);
         }
      }

      if (!ai) {
        return res.status(500).json({ error: "API key not configured." });
      }

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents,
        config: { systemInstruction: instruction },
      });

      return res.json({ text: response.text });
    } catch (e: any) {
      console.error("Guru Chat error:", e);
      return res.status(500).json({ error: e.message || "Failed to generate content" });
    }
  });

  // --- GEMINI IMAGE API ---

  app.post("/api/generate-image", async (req, res) => {
    try {
      const { prompt } = req.body;
      if (!prompt) {
        return res.status(400).json({ error: "Prompt is required" });
      }

      // Check if API key exists in env when ai is null, to allow dynamic reloading
      if (!ai && process.env.GEMINI_API_KEY) {
         try {
           ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
           console.log("Dynamically initialized GoogleGenAI with new env key.");
         } catch (e) {
           console.error("Failed to dynamically initialize AI:", e);
         }
      }

      if (!ai) {
        return res.status(500).json({ error: "API key not configured or initialized properly. Check Secrets panel." });
      }

      if (imageCache.has(prompt)) {
        console.log("Serving image from cache for prompt:", prompt.substring(0, 50) + "...");
        return res.json({ image: imageCache.get(prompt) });
      }

      console.log("Generating image for prompt:", prompt);
      const enhancedPrompt = prompt + ". Illustration style of an ancestral botanical encyclopedia. Highly detailed, vintage mystical grimoire aesthetic. MUST include apothecary glass jars or bottles containing the ingredients. All names, labels, and text MUST be in Spanish. Do not use Latin or English.";
      
      const response = await ai.models.generateImages({
        model: 'imagen-3.0-generate-002',
        prompt: enhancedPrompt,
        config: {
          numberOfImages: 1,
          outputMimeType: 'image/jpeg',
          aspectRatio: '3:4',
        },
      });

      const base64Image = `data:image/jpeg;base64,${response.generatedImages[0].image.imageBytes}`;
      imageCache.set(prompt, base64Image);
      res.json({ image: base64Image });
    } catch (error: any) {
      console.error("Image generation error:", error);
      res.status(500).json({ error: error.message || "Failed to generate image" });
    }
  });

  const distPath = path.join(process.cwd(), 'dist');
  const fs = await import('fs');
  const hasDist = fs.existsSync(path.join(distPath, 'index.html'));

  if (!hasDist && process.env.NODE_ENV !== "production") {
    console.log("Starting in development mode with Vite middleware...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Serving static files from dist...");
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
