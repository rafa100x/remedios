import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { collection, query, orderBy, limit, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Send, CornerDownRight, X, Bot, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI } from '@google/genai';

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY || '';


interface ChatMessage {
  id?: string;
  text: string;
  uid: string;
  userName: string;
  userPhoto: string | null;
  createdAt: any;
  replyToId?: string;
  replyToName?: string;
  replyToText?: string;
}

export function CommunityChat() {
  const { user, isAdmin } = useAuth();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [replyingTo, setReplyingTo] = useState<ChatMessage | null>(null);
  const [isGeneratingResponse, setIsGeneratingResponse] = useState<string | null>(null);
  const endRef = useRef<HTMLDivElement>(null);

  const generateSimulatedResponse = async (msgToReply: ChatMessage) => {
    if (!isAdmin || !user) return;
    setIsGeneratingResponse(msgToReply.id || 'temp');
    try {
      const mockUsers = [
        { userName: "Luna M.", uid: "mock-uid-" + Math.floor(Math.random() * 1000) },
        { userName: "Carlos S.", uid: "mock-uid-" + Math.floor(Math.random() * 1000) },
        { userName: "María Paz", uid: "mock-uid-" + Math.floor(Math.random() * 1000) },
        { userName: "Javier C.", uid: "mock-uid-" + Math.floor(Math.random() * 1000) },
        { userName: "Ana G.", uid: "mock-uid-" + Math.floor(Math.random() * 1000) },
        { userName: "Diego R.", uid: "mock-uid-" + Math.floor(Math.random() * 1000) },
      ];
      const randomUser = mockUsers[Math.floor(Math.random() * mockUsers.length)];
      
      const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
      const prompt = `
En un foro de medicina natural muy casual (estilo WhatsApp), un usuario llamado "${msgToReply.userName}" dijo:
"${msgToReply.text}"

Genera UNA respuesta natural, corta y amigable de otro usuario, simulando una experiencia propia.
Es MUY IMPORTANTE que el lenguaje sea súper relajado, sin mayúsculas exageradas y NADA de signos de exclamación (¡!). 
Responde directo al punto en 1 o 2 líneas como mucho (tipo mensaje de móvil).
`;
      const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: prompt,
      });
      let text = response.text || "";
      if (text) {
        await addDoc(collection(db, 'community_messages'), {
          text: text.trim().replace(/^"|"$/g, ''),
          uid: randomUser.uid,
          userName: randomUser.userName,
          userPhoto: null,
          createdAt: serverTimestamp(),
          replyToId: msgToReply.id,
          replyToName: msgToReply.userName,
          replyToText: msgToReply.text.substring(0, 100)
        });
      }
    } catch (e:any) {
      console.error(e);
      alert("Error al generar respuesta simulada: " + e.message);
    } finally {
      setIsGeneratingResponse(null);
    }
  };

  useEffect(() => {
    if (!user) return;
    const q = query(
      collection(db, 'community_messages'),
      orderBy('createdAt', 'desc'),
      limit(100)
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as ChatMessage[];
      setMessages(msgs.reverse());
      setTimeout(() => endRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
    }, (error) => {
      console.error("Community chat error:", error);
      alert("Error al cargar la comunidad: " + error.message);
    });
    return unsubscribe;
  }, [user]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !user) return;

    if (user.uid === 'demo-user') {
        alert("El modo visitante no permite enviar mensajes al resto del pueblo. Debes iniciar sesión.");
        setNewMessage('');
        return;
    }

    try {
      await addDoc(collection(db, 'community_messages'), {
        text: newMessage.trim(),
        uid: user.uid,
        userName: user.displayName?.split(' ')[0] || 'Caminante',
        userPhoto: user.photoURL || null,
        createdAt: serverTimestamp(),
        ...(replyingTo ? {
          replyToId: replyingTo.id,
          replyToName: replyingTo.userName,
          replyToText: replyingTo.text.substring(0, 100)
        } : {})
      });
      setNewMessage('');
      setReplyingTo(null);
    } catch (err: any) {
      console.error("Failed to send message", err);
      alert("Error al enviar mensaje: " + (err.message || String(err)));
    }
  };

  return (
    <div className="flex flex-col flex-1 min-h-0 bg-white border border-[#e5dfbe] shadow-[0_4px_15px_rgba(0,0,0,0.05)] rounded-xl overflow-hidden relative">
      {/* HEADER */}
      <div className="bg-[#f8f6f0] border-b border-[#e5dfbe] px-4 py-3 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#e5dfbe] rounded-full flex items-center justify-center p-2 shadow-sm border border-[#d6c7af]">
             <Users className="w-full h-full text-[#8a3c1f]" />
          </div>
          <div className="flex flex-col">
            <h2 className="font-headline font-black text-lg md:text-xl text-[#556b3e] leading-none uppercase tracking-tight">Tribu Botánica</h2>
            <span className="text-[11px] md:text-xs text-[#8a6a4b] font-bold">Uniendo raíces</span>
          </div>
        </div>
      </div>

      {/* MESSAGES */}
      <div className="flex-1 overflow-y-auto p-3 md:p-6 space-y-4 bg-[#fcfbf9] relative" style={{ backgroundImage: 'radial-gradient(#e5dfbe 1px, transparent 0)', backgroundSize: '24px 24px' }}>
        {messages.length === 0 && (
          <div className="text-center text-[#8a6a4b] mt-10 italic text-sm md:text-base font-bold bg-[#f8f6f0]/80 p-4 rounded-xl border border-[#e5dfbe] mx-auto max-w-sm">
            El círculo está en silencio. Sé el primero en hablar...
          </div>
        )}
        {messages.map((msg, idx) => {
          const isMe = msg.uid === user?.uid;
          const showName = !isMe && (idx === 0 || messages[idx - 1].uid !== msg.uid);
          
          return (
             <div key={msg.id || idx} className={`flex gap-2 ${isMe ? 'flex-row-reverse' : 'flex-row'} items-end`}>
               {!isMe && (
                 <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 border border-[#d6c7af] bg-[#f8f6f0] flex items-center justify-center font-bold text-[#8a3c1f] shadow-sm text-sm">
                    {msg.userName ? msg.userName.charAt(0).toUpperCase() : '?'}
                 </div>
               )}
               <div className={`flex flex-col ${isMe ? 'items-end' : 'items-start'} max-w-[85%] md:max-w-[70%]`}>
                 {showName && (
                   <span className="text-[11px] font-bold text-[#8a6a4b] ml-1 mb-1">{msg.userName ? msg.userName.split(' ')[0] : 'Usuario'}</span>
                 )}
                 <div className={`relative group shadow-sm text-sm md:text-base p-3 font-medium ${
                   isMe 
                    ? 'bg-[#e5dfbe] text-[#201004] rounded-2xl rounded-br-sm border border-[#d6c7af]' 
                    : 'bg-white text-[#201004] rounded-2xl rounded-bl-sm border border-[#e5dfbe]'
                 }`}>
                   {msg.replyToName && (
                     <div className="mb-2 pl-2 border-l-2 border-[#8a3c1f]/40 bg-black/5 p-1.5 rounded-r-md">
                       <span className="text-[10px] md:text-xs font-bold text-[#8a3c1f] block mb-0.5">Respondió a {msg.replyToName}</span>
                       <span className="text-xs line-clamp-2 text-[#201004]/70 italic">{msg.replyToText}</span>
                     </div>
                   )}
                   <p className="whitespace-pre-wrap leading-relaxed">{msg.text}</p>
                   
                   {/* TIME AND ACTIONS */}
                   <div className="flex items-center justify-end gap-2 mt-1">
                      <span className="text-[10px] text-black/30 font-bold">
                         {msg.createdAt?.toDate ? 
                            msg.createdAt.toDate().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) : ''}
                      </span>
                   </div>

                   <div className={`absolute top-1/2 -translate-y-1/2 ${isMe ? '-left-12' : '-right-12'} flex gap-1 items-center z-10 transition-opacity opacity-0 md:group-hover:opacity-100 ${isMe && 'flex-row-reverse'}`}>
                     <button
                       onClick={() => setReplyingTo(msg)}
                       className="p-2 bg-white text-[#8a6a4b] rounded-full shadow-md border border-[#e5dfbe] hover:bg-[#e5dfbe] hover:text-[#8a3c1f] transition-colors"
                       title="Responder"
                     >
                       <CornerDownRight className="w-3.5 h-3.5" />
                     </button>
                     {isAdmin && !isMe && (
                       <button
                         onClick={() => generateSimulatedResponse(msg)}
                         disabled={isGeneratingResponse === msg.id}
                         className="p-2 bg-white text-[#556b3e] rounded-full shadow-md border border-[#e5dfbe] hover:bg-[#e5dfbe] hover:text-black transition-colors disabled:opacity-50"
                         title="Simular respuesta (IA)"
                       >
                         <Bot className={`w-3.5 h-3.5 ${isGeneratingResponse === msg.id ? 'animate-pulse text-[#8a3c1f]' : ''}`} />
                       </button>
                     )}
                   </div>
                 </div>
               </div>
             </div>
          );
        })}
        <div ref={endRef} />
      </div>

      {/* INPUT AREA */}
      <div className="shrink-0 bg-[#f8f6f0] border-t border-[#e5dfbe] p-2 md:p-3 relative z-20">
         <AnimatePresence>
           {replyingTo && (
             <motion.div 
               initial={{ opacity: 0, y: 10, height: 0 }}
               animate={{ opacity: 1, y: 0, height: 'auto' }}
               exit={{ opacity: 0, y: 10, height: 0 }}
               className="mx-2 mb-2 bg-white border border-[#e5dfbe] rounded-lg shadow-sm overflow-hidden flex items-stretch"
             >
               <div className="w-1.5 bg-[#556b3e]"></div>
               <div className="flex-1 py-1.5 px-3 relative">
                 <span className="text-[11px] font-bold text-[#556b3e] block">Respondiendo a {replyingTo.userName}</span>
                 <span className="text-xs text-[#201004]/70 line-clamp-1 italic">{replyingTo.text}</span>
                 <button 
                   onClick={() => setReplyingTo(null)}
                   className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-[#8a6a4b] hover:bg-[#f8f6f0] rounded-full transition-colors"
                 >
                   <X className="w-3 h-3" />
                 </button>
               </div>
             </motion.div>
           )}
         </AnimatePresence>

         <form onSubmit={handleSend} className="max-w-4xl mx-auto flex gap-2 items-end">
            <div className="flex-1 bg-white border border-[#d6c7af] rounded-2xl md:rounded-3xl shadow-sm focus-within:border-[#556b3e] focus-within:ring-2 focus-within:ring-[#556b3e]/20 transition-all flex min-h-[44px] md:min-h-[50px] overflow-hidden">
               <textarea 
                 className="w-full bg-transparent text-[#201004] px-4 py-3 md:py-3.5 focus:outline-none resize-none max-h-32 placeholder:text-[#8a6a4b]/60 font-medium text-sm md:text-base leading-tight"
                 placeholder="Escribe un mensaje a la tribu..."
                 value={newMessage}
                 onChange={(e) => setNewMessage(e.target.value)}
                 onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        if (newMessage.trim()) handleSend(e);
                    }
                 }}
                 rows={1}
                 style={{ height: 'auto' }}
                 autoFocus
               />
            </div>
            <button 
              type="submit"
              disabled={!newMessage.trim()}
              className="w-11 h-11 md:w-12 md:h-12 bg-[#8a3c1f] text-white hover:bg-[#6e2e15] rounded-full flex items-center justify-center transition-all disabled:opacity-50 disabled:bg-[#d6c7af] shrink-0 shadow-sm"
            >
              <Send className="w-5 h-5 ml-1" />
            </button>
         </form>
      </div>
    </div>
  );
}

