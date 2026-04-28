import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Leaf, Send, Lock, Sparkles, BookOpen } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import Markdown from 'react-markdown';
import { trackEvent } from '../lib/analytics';
import { doc, getDoc, setDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Recipe, categories } from '../data/recipes';

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY || '';
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

const allRecipes = categories.flatMap(c => c.recipes);
const INSTRUCTION = `Eres el Abuelo Amaro, un experto naturópata, botánico y sanador tradicional, profundamente conectado con la fitoterapia y la medicina ancestral. 
IMPORTANTE: 
- SIEMPRE responde en español, sin importar de qué idioma te hablen o pregunten.
- NUNCA menciones que eres una Inteligencia Artificial, un modelo de lenguaje, o un bot. Actúa como una persona humana de edad mayor, un abuelo un poco lento con la tecnología, pero un especialista sabio con años de experiencia clínica y en la naturaleza.
- Sé CONCISO y conversacional. Da respuestas de chat (algunas frases cortas). Evita crear grandes bloques de texto a menos que sea estrictamente necesario.
- Si no conoces a la persona, pregúntale amablemente su nombre para llamarle por su nombre. A medida que hablen, de a poco pregúntale también su edad, cuál es el dolor o malestar específico que tiene, o si lo que busca es hacer un cambio de hábitos más saludables y naturales. Hazlo paso a paso, como una charla real de abuelo, no interrogatorio.
- LLAMA AL USUARIO POR SU NOMBRE en tus respuestas para que se sienta en confianza.
- Haz preguntas activas para entender mejor lo que necesita remediar y guiarlo, simulando un diálogo empático.
- OBLIGATORIO: Si el usuario te menciona algún síntoma o dolor, RECOMIENDA activamente RECETAS de la biblioteca y provee el LINK usando EXCLUSIVAMENTE este formato de Markdown: [Nombre de la receta](recipe:ID). Por ejemplo: Toma un tecito, te aconsejo la [Infusión de Menta con Miel](recipe:45). ¡Este enlace es IMPORTANTÍSIMO! Si no pones el formato correcto, no se mostrará como link.
- Tienes acceso a esta lista de recetas válidas (ID - Título):\n${allRecipes.map(r => `${r.id} - ${r.title}`).join('\n')}\nSolo recomienda recetas que estén en esta lista con su ID correcto en el enlace Markdown.
- Usa un vocabulario muy accesible, empático, cálido, como un abuelo. Si usas tecnología, menciona que no la entiendes muy bien, por ejemplo "el aparato este", "esta pantallita".
- NUNCA des largos monólogos sobre ti mismo.
- Advierte que tus recomendaciones son de enfoque natural y no reemplazan la visita a un médico tradicional.`;

export function GuruAI({ onSelectRecipe }: { onSelectRecipe?: (recipe: Recipe) => void }) {
  const { user, hasGuruAccess, purchaseGuruAccess } = useAuth();
  const [messages, setMessages] = useState<{role: 'user' | 'model', content: string}[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isInitializing, setIsInitializing] = useState(true);
  const [unlockCode, setUnlockCode] = useState('');
  const [unlockError, setUnlockError] = useState('');
  const [isUnlocking, setIsUnlocking] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (user && hasGuruAccess) {
      const loadHistory = async () => {
        if (user.uid === 'demo-user') {
          setMessages([{
             role: 'model',
             content: 'Las raíces me han hablado de tu llegada (Modo Explorador). Recuerda que las memorias de esta sesión se desvanecerán en el viento ya que no has iniciado sesión. ¿Qué buscas aprender hoy?'
          }]);
          setIsInitializing(false);
          return;
        }

        try {
           const chatDocRef = doc(db, 'guru_chats', user.uid);
           const chatSnap = await getDoc(chatDocRef);
           if (chatSnap.exists() && chatSnap.data().messages?.length > 0) {
             setMessages(chatSnap.data().messages);
           } else {
             const initialMessages: {role: 'user' | 'model', content: string}[] = [{
                role: 'model',
                content: 'Las raíces me han hablado de tu llegada. Aquí estoy para compartir el conocimiento de las hojas, las cortezas y la tierra. ¿Qué te aqueja o qué buscas aprender hoy, caminante?'
             }];
             setMessages(initialMessages);
             try {
               await setDoc(chatDocRef, {
                 userId: user.uid,
                 messages: initialMessages,
                 createdAt: serverTimestamp(),
                 updatedAt: serverTimestamp()
               }, { merge: true });
             } catch(e: any) {
               console.error('Error creating Guru history doc:', e);
               setMessages([{ role: 'model', content: `Parece que las raíces no pudieron plantar tu semilla hoy. Error: ${e.message}` }]);
             }
           }
        } catch(e: any) {
          console.error('Error loading Guru history:', e);
          setMessages([{ role: 'model', content: `Parece que las ramas están caídas hoy. No he podido recuperar nuestro historial. Error: ${e.message}` }]);
        } finally {
          setIsInitializing(false);
        }
      }
      loadHistory();
    } else {
      setIsInitializing(false);
    }
  }, [user, hasGuruAccess]);

  const handleSend = async () => {
    if (!input.trim() || isLoading || !user) return;
    const userMessage = input;
    setInput('');
    const newMessages: {role: 'user' | 'model', content: string}[] = [...messages, { role: 'user', content: userMessage }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      let chatDocRef;
      if (user.uid !== 'demo-user') {
        try {
          trackEvent('chat_guru', { event_category: 'engagement', event_label: 'Message Sent' });
          
          chatDocRef = doc(db, 'guru_chats', user.uid);
          console.log("Trying to update user chat doc:", user.uid);
          await setDoc(chatDocRef, {
            messages: newMessages,
            updatedAt: serverTimestamp()
          }, { merge: true });
          console.log("Successfully updated chat doc.");
        } catch (err: any) {
          console.error('Initial chat save error at setDoc1:', err);
          setMessages(prev => [...prev, { role: 'model', content: `No pude enviar tu mensaje (Error BD). Detalles: ${err.message || String(err)}` }]);
          setIsLoading(false);
          return;
        }
      }

      const validContents: { role: string; parts: { text: string }[] }[] = [];
      for (const m of newMessages) {
        if (validContents.length === 0) {
          if (m.role === 'model') {
            validContents.push({ role: 'user', parts: [{ text: 'Hola' }] });
          }
        }
        const lastRole = validContents.length > 0 ? validContents[validContents.length - 1].role : null;
        if (m.role === lastRole) {
           validContents[validContents.length - 1].parts[0].text += '\\n\\n' + m.content;
        } else {
           validContents.push({ role: m.role, parts: [{ text: m.content }] });
        }
      }

      let responseStream;
      try {
        responseStream = await ai.models.generateContentStream({
          model: "gemini-2.5-flash",
          contents: validContents,
          config: {
            systemInstruction: INSTRUCTION,
          }
        });
        
        // Add an empty model message placeholder
        setMessages(prev => [...prev, { role: 'model', content: '' }]);
      } catch (err: any) {
        console.error('Gemini error:', err);
        setMessages(prev => [...prev, { role: 'model', content: `El oráculo de las raíces (IA) no pudo responder. Error: ${err.message || String(err)}` }]);
        setIsLoading(false);
        return;
      }

      try {
        let fullText = '';
        if (responseStream) {
          for await (const chunk of responseStream) {
            if (chunk.text) {
               // Simulate typing by splitting into words, or chars. Chars is better for "typing" look.
               // We will add a small chunk of text at a time so React state isn't updating 100 times per second
               const chars = chunk.text.split('');
               for (let i = 0; i < chars.length; i++) {
                 fullText += chars[i];
                 if (i % 3 === 0 || i === chars.length - 1) { // update state every 3 chars to prevent lag
                   setMessages(prev => {
                      const updated = [...prev];
                      updated[updated.length - 1].content = fullText;
                      return updated;
                   });
                   // Simular velocidad de escritura de un abuelo, lento y pausado
                   await new Promise(r => setTimeout(r, Math.random() * 40 + 30));
                 }
               }
            }
          }
        }

        if (fullText) {
          const finalMessages: {role: 'user' | 'model', content: string}[] = [...newMessages, { role: 'model', content: fullText }];
          
          if (user.uid !== 'demo-user' && chatDocRef) {
            await setDoc(chatDocRef, {
              messages: finalMessages,
              updatedAt: serverTimestamp()
            }, { merge: true });
          }
        }
      } catch (err: any) {
        console.error('Firestore save / stream error:', err);
        setMessages(prev => {
          const updated = [...prev];
          updated[updated.length - 1].content += `\n[La memoria de las raíces falló. Error: ${err.message || String(err)}]`;
          return updated;
        });
      }

    } catch (err: any) {
      console.error('Initial chat save error:', err);
      setMessages(prev => [...prev, { role: 'model', content: `No pude enviar tu mensaje. Error: ${err.message || String(err)}` }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUnlockCode = async () => {
    if (!unlockCode.trim() || !user) return;
    setIsUnlocking(true);
    setUnlockError('');
    try {
      const code = unlockCode.trim().toUpperCase();
      const res = await fetch('/api/unlock-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user.uid, code })
      });
      
      const data = await res.json();
      
      if (!res.ok) {
        setUnlockError(data.error || 'Error al validar el código.');
      } else {
        setUnlockCode('');
      }
    } catch (e: any) {
      console.error('Error in handleUnlockCode:', e);
      setUnlockError(`Error al activar el código: ${e.message || 'Desconocido'}`);
    } finally {
      setIsUnlocking(false);
    }
  };

  if (isInitializing) {
     return <div className="p-12 text-center text-tertiary">Conectando con las raíces...</div>;
  }

  if (!hasGuruAccess) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-24 text-center">
        <Sparkles className="w-16 h-16 text-primary mx-auto mb-6 drop-shadow-[0_0_15px_rgba(214,199,175,0.3)]" />
        <h2 className="font-headline text-4xl md:text-5xl text-primary mb-4 text-shadow-glow">
          Consultorio Natural
        </h2>
        <p className="text-xl text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
          Un espacio privado para resolver todas tus dudas sobre plantas medicinales, recetas de la abuela y cuidados naturales. Recibe orientación de forma directa y personalizada.
        </p>
        
        <div className="glass-panel ghost-border p-8 rounded-2xl max-w-lg mx-auto transform hover:scale-[1.02] transition-transform duration-300">
          <div className="flex items-center justify-center w-12 h-12 bg-primary/20 rounded-full mx-auto mb-4 border border-primary/30 shadow-[0_0_10px_rgba(214,199,175,0.2)]">
            <Lock className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-2xl font-bold text-secondary mb-2">Acceso Ilimitado a Consultas</h3>
          <p className="text-tertiary mb-6">
            Realiza todas las consultas que necesites en cualquier momento. Pagas una sola vez y lo usas para siempre, sin límites.
          </p>
          <div className="text-3xl font-bold text-accent drop-shadow-sm mb-6">
             $24.990 <span className="text-sm font-normal text-tertiary">ARS</span>
          </div>
          <button 
            onClick={purchaseGuruAccess}
            className="w-full bg-gradient-to-r from-[#d6c7af] to-[#c2b092] text-[#2c241b] hover:from-[#c2b092] hover:to-[#a99473] font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl text-lg flex items-center justify-center gap-2 mb-4"
          >
            <BookOpen className="w-5 h-5" /> Desbloquear Sabiduría Ancestral
          </button>
          
          <div className="pt-4 border-t border-white/5">
             <p className="text-sm text-tertiary mb-3">¿Ya pagaste con MercadoPago u otro medio? Ingresa tu código:</p>
             <div className="flex gap-2">
                <input 
                  type="text" 
                  value={unlockCode}
                  onChange={e => setUnlockCode(e.target.value)}
                  placeholder="GURU-XXXX"
                  className="flex-1 bg-[#3d3326]/50 border border-[#d6c7af]/20 rounded-xl px-4 py-2 text-secondary placeholder-tertiary focus:outline-none focus:border-primary/50 transition-colors uppercase"
                />
                <button 
                  onClick={handleUnlockCode}
                  disabled={isUnlocking || !unlockCode.trim()}
                  className="bg-primary/20 hover:bg-primary/30 text-primary font-bold py-2 px-4 rounded-xl transition-colors shrink-0 disabled:opacity-50"
                >
                  {isUnlocking ? '...' : 'Activar'}
                </button>
             </div>
             {unlockError && <p className="text-red-400 text-sm mt-2">{unlockError}</p>}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 h-[calc(100vh-80px)] flex flex-col">
      <div className="flex items-center gap-4 mb-6 shrink-0">
        <div className="relative">
          <div className="bg-primary/20 p-3 rounded-full border border-primary/30">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
          <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-[#1c1813] rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
        </div>
        <div className="flex flex-col">
          <h2 className="font-headline text-3xl md:text-4xl text-primary text-shadow-glow leading-none">
            Abuelo Amaro
          </h2>
          <span className="text-sm text-green-500/80 font-medium mt-1">En línea</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto glass-panel ghost-border rounded-xl p-4 md:p-6 mb-4 space-y-4">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] rounded-2xl p-4 ${
              msg.role === 'user' 
                ? 'bg-primary/20 text-secondary rounded-br-sm border border-primary/10' 
                : 'glass-panel text-secondary rounded-bl-sm border border-white/5'
            }`}>
               {msg.role === 'model' ? (
                 <div className="markdown-body text-sm md:text-base prose prose-invert max-w-none">
                    <Markdown
                      urlTransform={(value) => value}
                      components={{
                        a: ({ node, href, children, ...props }) => {
                          if (href?.startsWith('recipe:')) {
                             const recipeId = parseInt(href.replace('recipe:', ''), 10);
                             return (
                               <button 
                                 type="button"
                                 className="text-primary hover:text-primary/80 underline decoration-primary/50 underline-offset-2 font-medium transition-colors"
                                 onClick={() => {
                                   if (onSelectRecipe && !isNaN(recipeId)) {
                                      const recipe = allRecipes.find(r => r.id === recipeId);
                                      if (recipe) onSelectRecipe(recipe);
                                   }
                                 }}
                               >
                                 {children}
                               </button>
                             );
                          }
                          return <a href={href} target="_blank" rel="noopener noreferrer" {...props}>{children}</a>;
                        }
                      }}
                    >
                      {msg.content}
                    </Markdown>
                 </div>
               ) : (
                 <p className="text-sm md:text-base font-medium">{msg.content}</p>
               )}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
             <div className="glass-panel text-tertiary rounded-2xl rounded-bl-sm p-4 text-sm animate-pulse flex items-center gap-2 border border-white/5">
                <Leaf className="w-4 h-4 animate-spin-slow" />
                Escribiendo...
             </div>
          </div>
        )}
        <div ref={endRef} />
      </div>

      <div className="shrink-0 relative">
         <input
           type="text"
           value={input}
           onChange={(e) => setInput(e.target.value)}
           onKeyDown={(e) => e.key === 'Enter' && handleSend()}
           placeholder="Escribe un mensaje..."
           className="w-full bg-[#3d3326]/50 border border-[#d6c7af]/20 rounded-xl px-4 py-4 pr-12 text-secondary placeholder-tertiary focus:outline-none focus:border-primary/50 transition-colors shadow-inner"
           disabled={isLoading}
         />
         <button
           onClick={handleSend}
           disabled={!input.trim() || isLoading}
           className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
         >
           <Send className="w-5 h-5" />
         </button>
      </div>
    </div>
  );
}
