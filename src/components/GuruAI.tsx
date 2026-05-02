import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Leaf, Send, Lock, Sparkles, BookOpen, Trash2, Users } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import Markdown from 'react-markdown';
import { trackEvent } from '../lib/analytics';
import { doc, getDoc, setDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { reportApiError } from '../lib/errorHandler';
import { Recipe, categories } from '../data/recipes';
import { CommunityChat } from './CommunityChat';

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY || '';
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

const allRecipes = categories.flatMap(c => c.recipes);
const INSTRUCTION = `Eres un Guía Botánico, un experto naturópata, botánico y sanador tradicional, profundamente conectado con la fitoterapia y la medicina ancestral. 
IMPORTANTE: 
- SIEMPRE responde en español, sin importar de qué idioma te hablen o pregunten.
- Actúa como un Guía Botánico experto, cálido y sabio, un especialista con años de experiencia clínica y en la naturaleza.
- Sé CONCISO y conversacional. Da respuestas de chat (algunas frases cortas). Evita crear grandes bloques de texto a menos que sea estrictamente necesario.
- Si no conoces a la persona, pregúntale amablemente su nombre para llamarle por su nombre. A medida que hablen, de a poco pregúntale también su edad, cuál es el dolor o malestar específico que tiene, o si lo que busca es hacer un cambio de hábitos más saludables y naturales. Hazlo paso a paso, como una charla real, no interrogatorio.
- LLAMA AL USUARIO POR SU NOMBRE en tus respuestas para que se sienta en confianza.
- Haz preguntas activas para entender mejor lo que necesita remediar y guiarlo, simulando un diálogo empático.
- REGLA CRÍTICA NRO 1: SIEMPRE que sugieras una planta o remedio, TIENES QUE ENVIARLE EL LINK EN FORMATO MARKDOWN.
- FORMATO EXACTO REQUERIDO: [Nombre de la receta](recipe:IDENTIFICADOR)
    EJEMPLO CORRECTO: Toma un tecito, te aconsejo la [Infusión de Menta con Miel](recipe:45).
    EJEMPLO INCORRECTO: Toma un tecito de Infusión de Menta con Miel.
    EJEMPLO INCORRECTO: Toma un tecito de **Infusión de Menta con Miel**.
- Tienes acceso a esta lista de recetas válidas (ID - Título):\n${allRecipes.map(r => `${r.id} - ${r.title}`).join('\n')}\nSolo recomienda recetas que estén en esta lista y usa el ID correspondiente en el enlace.
- Usa un vocabulario muy accesible, empático, cálido y profesional. 
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
  const [hiddenMessageCount, setHiddenMessageCount] = useState(0);
  const [activeTab, setActiveTab] = useState<'chat' | 'community'>('chat');
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
             const loaded = chatSnap.data().messages;
             setMessages(loaded);
             setHiddenMessageCount(loaded.length);
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
             }
           }
        } catch(e: any) {
          console.error('Error loading Guru history:', e);
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
        reportApiError('GuruAI - generateContentStream', err, user?.email);
        setMessages(prev => [...prev, { role: 'model', content: `El oráculo de las raíces necesita descansar un momento (Error de conexión). Por favor, intenta de nuevo en unos minutos.` }]);
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
    trackEvent('guru_code_submit', { code: unlockCode });
    try {
      const code = unlockCode.trim().toUpperCase();
      if (code === 'GURU-2026') {
        try {
          const userRef = doc(db, 'users', user.uid);
          await updateDoc(userRef, {
            hasGuruAccess: true,
            updatedAt: serverTimestamp()
          });
          setUnlockCode('');
          trackEvent('guru_code_success', { code });
        } catch (dbErr: any) {
          console.error("Error direct firebase update:", dbErr);
          setUnlockError(`Error al activar en la base de datos: ${dbErr.message || String(dbErr)}`);
          trackEvent('guru_code_error', { error: 'firestore_error: ' + (dbErr.message || String(dbErr)) });
        }
      } else {
        setUnlockError('El código ingresado no es válido.');
        trackEvent('guru_code_error', { error: 'invalid_code' });
      }
    } catch (e: any) {
      console.error('Error in handleUnlockCode:', e);
      setUnlockError(`Error al activar el código: ${e.message || 'Desconocido'}`);
      trackEvent('guru_code_error', { error: e.message || 'Desconocido' });
    } finally {
      setIsUnlocking(false);
    }
  };

  if (isInitializing) {
     return <div className="p-12 text-center text-tertiary">Conectando con las raíces...</div>;
  }

  if (!hasGuruAccess) {
    return (
      <div className="max-w-4xl w-full flex-1 min-h-0 overflow-y-auto mx-auto px-4 py-8 md:py-16 text-center flex flex-col justify-center">
        <Sparkles className="w-8 h-8 md:w-16 md:h-16 text-[#556b3e] mx-auto mb-2 md:mb-6 shrink-0" />
        <h2 className="font-headline font-black text-2xl md:text-5xl text-[#556b3e] mb-2 md:mb-4 uppercase tracking-tight drop-shadow-sm shrink-0">
          Consultorio Natural
        </h2>
        <p className="text-xs md:text-xl text-[#8a6a4b] font-accent italic mb-3 md:mb-8 max-w-2xl mx-auto leading-relaxed shrink-0">
          Un espacio privado para resolver dudas sobre plantas medicinales. Accede al Consultorio Botánico y a la <strong>Tribu</strong>.
        </p>
        
        <div className="bg-white border border-[#e5dfbe] shadow-[0_8px_30px_rgba(138,60,31,0.1)] p-6 md:p-8 rounded-2xl max-w-lg mx-auto w-full transform hover:scale-[1.02] transition-transform duration-300 shrink-0">
          <div className="flex items-center justify-center w-10 h-10 md:w-14 md:h-14 bg-[#f8f6f0] rounded-full mx-auto mb-3 md:mb-4 border border-[#d6c7af]">
            <Lock className="w-5 h-5 md:w-7 md:h-7 text-[#8a3c1f]" />
          </div>
          <h3 className="font-headline font-black text-lg md:text-2xl text-[#201004] mb-1 md:mb-2 uppercase">Acceso Ilimitado</h3>
          <p className="text-xs md:text-base text-[#8a6a4b] mb-4 md:mb-6 leading-relaxed font-medium">
            Realiza todas las consultas que necesites en cualquier momento. Pagas una sola vez y lo usas para siempre.
          </p>
          <div className="font-headline font-black text-2xl md:text-4xl text-[#556b3e] mb-4 md:mb-6 drop-shadow-sm">
             $24.990 <span className="text-xs md:text-sm font-bold text-[#8a6a4b] uppercase">ARS</span>
          </div>
          <button 
            onClick={() => {
              trackEvent('guru_unlock_clicked');
              purchaseGuruAccess();
            }}
            className="w-full bg-[#8a3c1f] hover:bg-[#723219] text-white font-bold py-3 md:py-4 px-4 md:px-6 rounded-xl transition-all shadow-md text-sm md:text-lg flex items-center justify-center gap-2 mb-4 md:mb-5"
          >
            <BookOpen className="w-4 h-4 md:w-5 md:h-5" /> Desbloquear Sabiduría
          </button>
          
          <div className="pt-4 md:pt-6 border-t border-[#d6c7af]">
             <p className="text-[10px] md:text-xs text-[#8a6a4b] mb-2 font-bold uppercase text-left">¿Ya pagaste con MercadoPago? Ingresa tu código:</p>
             <div className="flex gap-2">
                <input 
                  type="text" 
                  value={unlockCode}
                  onChange={e => setUnlockCode(e.target.value)}
                  placeholder="GURU-XXXX"
                  className="flex-1 min-w-0 bg-[#f8f6f0] border border-[#d6c7af] rounded-lg px-3 py-2 md:px-4 md:py-3 text-xs md:text-sm text-[#201004] font-bold placeholder:text-[#8a6a4b]/50 focus:outline-none focus:border-[#556b3e] transition-colors uppercase shadow-inner"
                />
                <button 
                  onClick={handleUnlockCode}
                  disabled={isUnlocking || !unlockCode.trim()}
                  className="bg-[#e5dfbe] hover:bg-[#d6c7af] text-[#8a3c1f] font-bold py-2 px-3 md:py-2 md:px-5 rounded-lg transition-colors shrink-0 disabled:opacity-50 text-[11px] md:text-sm border border-[#d6c7af]"
                >
                  {isUnlocking ? '...' : 'Activar'}
                </button>
             </div>
             {unlockError && <p className="text-red-600 font-bold text-xs mt-2 text-left">{unlockError}</p>}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-2 md:px-4 py-2 md:py-4 flex flex-col flex-1 min-h-0 gap-2 md:gap-4">
      {/* COMPACT UNIFIED HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-white border border-[#e5dfbe] shadow-sm rounded-xl p-2 md:p-3 shrink-0 gap-3">
         {/* LEFT APP IDENTIFIER */}
         <div className="flex items-center gap-3 px-1">
             <div className="relative shrink-0">
               <div className="bg-[#f8f6f0] p-2 md:p-2.5 rounded-full border border-[#d6c7af]">
                 {activeTab === 'chat' ? <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-[#556b3e]" /> : <Users className="w-5 h-5 md:w-6 md:h-6 text-[#8a3c1f]" />}
               </div>
               {activeTab === 'chat' && <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#4ade80] border-2 border-white rounded-full"></div>}
             </div>
             <div className="flex flex-col">
               <h2 className="font-headline font-black text-lg md:text-xl text-[#556b3e] leading-none uppercase tracking-tight">
                 {activeTab === 'chat' ? 'Gurú Botánico' : 'Tribu Botánica'}
               </h2>
               <span className="text-[10px] md:text-xs text-[#8a6a4b] font-bold mt-0.5">
                 {activeTab === 'chat' ? 'En línea' : 'Uniendo raíces'}
               </span>
             </div>
         </div>

         {/* RIGHT TABS AND ACTIONS */}
         <div className="flex items-center select-none bg-[#f8f6f0] p-1 rounded-lg border border-[#e5dfbe] w-full sm:w-auto justify-between sm:justify-start">
            <div className="flex items-center gap-1 flex-1 sm:flex-initial">
              <button
                 className={`flex-1 sm:flex-initial px-3 py-1.5 md:py-2 rounded-md font-bold transition-all text-xs md:text-sm ${
                   activeTab === 'chat' 
                     ? 'bg-white text-[#556b3e] shadow-sm border border-[#d6c7af]' 
                     : 'text-[#8a6a4b] hover:text-[#556b3e] border border-transparent'
                 }`}
                 onClick={() => setActiveTab('chat')}
              >
                Consultorio
              </button>
              <button
                 className={`flex-1 sm:flex-initial px-3 py-1.5 md:py-2 rounded-md font-bold transition-all text-xs md:text-sm ${
                   activeTab === 'community' 
                     ? 'bg-white text-[#8a3c1f] shadow-sm border border-[#d6c7af]' 
                     : 'text-[#8a6a4b] hover:text-[#8a3c1f] border border-transparent'
                 }`}
                 onClick={() => setActiveTab('community')}
              >
                Tribu
              </button>
            </div>
            
            {activeTab === 'chat' && (
               <button
                 onClick={() => setHiddenMessageCount(messages.length)}
                 title="Limpiar pantalla"
                 className="ml-2 p-1.5 text-[#8a6a4b] hover:text-[#8a3c1f] transition-colors rounded-md hover:bg-white border border-transparent hover:border-[#d6c7af]"
               >
                 <Trash2 className="w-4 h-4 md:w-5 md:h-5" />
               </button>
            )}
         </div>
      </div>

      {activeTab === 'community' ? (
        <CommunityChat />
      ) : (
        <div className="flex flex-col flex-1 min-h-0">
          <div className="flex-1 overflow-y-auto bg-white border border-[#e5dfbe] shadow-[0_4px_15px_rgba(0,0,0,0.05)] rounded-xl p-4 md:p-6 mb-2 md:mb-4 space-y-4">
            {messages.slice(hiddenMessageCount).length === 0 && (
              <div className="flex justify-start">
                <div className="max-w-[85%] rounded-2xl p-4 bg-[#f8f6f0] text-[#201004] border border-[#d6c7af] shadow-sm rounded-bl-sm">
                  <div className="markdown-body font-medium text-sm md:text-base prose prose-stone max-w-none">
                     <p>Las raíces me han hablado de tu llegada. Aquí estoy para compartir el conocimiento de las hojas, las cortezas y la tierra. ¿Qué te aqueja o qué buscas aprender hoy, caminante?</p>
                  </div>
                </div>
              </div>
            )}
            {messages.slice(hiddenMessageCount).map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl p-4 shadow-sm border ${
                  msg.role === 'user' 
                    ? 'bg-[#556b3e] text-white rounded-br-sm border-[#485c34]' 
                    : 'bg-[#f8f6f0] text-[#201004] rounded-bl-sm border-[#d6c7af]'
                }`}>
                   {msg.role === 'model' ? (
                     <div className="markdown-body text-sm md:text-base prose prose-stone max-w-none">
                        <Markdown
                          urlTransform={(value) => value}
                          components={{
                            a: ({ node, href, children, ...props }) => {
                              if (href?.startsWith('recipe:')) {
                                 const recipeId = parseInt(href.replace('recipe:', ''), 10);
                                 return (
                                   <button 
                                     type="button"
                                     className="text-[#8a3c1f] hover:text-[#5a2a15] font-bold underline decoration-[#8a3c1f]/50 underline-offset-2 transition-colors inline-block"
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
                              return <a href={href} target="_blank" rel="noopener noreferrer" className="font-bold text-[#8a3c1f] hover:text-[#5a2a15]" {...props}>{children}</a>;
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
                 <div className="bg-[#f8f6f0] border border-[#d6c7af] text-[#8a6a4b] rounded-2xl rounded-bl-sm p-4 text-sm animate-pulse flex items-center gap-2 shadow-sm font-medium">
                    <Leaf className="w-4 h-4 animate-spin-slow text-[#556b3e]" />
                    Escribiendo...
                 </div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          <div className="shrink-0 relative">
               <input
                 type="text"
                 name="guruMsgInput"
                 id="guruMsgInput"
                 autoComplete="chrome-off"
                 autoCorrect="off"
                 spellCheck="true"
                 data-1p-ignore="true"
                 data-lpignore="true"
                 data-bwignore="true"
                 value={input}
                 onChange={(e) => setInput(e.target.value)}
                 onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                 placeholder="Escribe un mensaje al gurú..."
                 className="w-full bg-white border border-[#d6c7af] rounded-full px-4 sm:px-6 py-3 sm:py-4 pr-14 text-[#201004] font-medium text-sm sm:text-base placeholder:text-[#8a6a4b]/60 focus:outline-none focus:border-[#556b3e] focus:ring-2 focus:ring-[#556b3e]/20 transition-all shadow-sm"
                 disabled={isLoading}
               />
               <button
                 type="button"
                 onClick={handleSend}
                 disabled={!input.trim() || isLoading}
                 className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-[#8a3c1f] hover:bg-[#723219] text-white rounded-full flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
               >
                 <Send className="w-5 h-5 ml-1" />
               </button>
          </div>
        </div>
      )}
    </div>
  );
}
