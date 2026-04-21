import express from "express";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import path from "path";
import "dotenv/config";

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

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
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
