import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { collection, query, orderBy, limit, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Send, Users, UserCircle, CornerDownRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

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
  const { user } = useAuth();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [replyingTo, setReplyingTo] = useState<ChatMessage | null>(null);
  const endRef = useRef<HTMLDivElement>(null);

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
    <div className="flex flex-col flex-1 min-h-0 gap-4">
      <div className="flex-1 overflow-y-auto glass-panel ghost-border rounded-xl p-4 md:p-6 space-y-4">
        {messages.length === 0 && (
          <div className="text-center text-primary/60 mt-10 italic">
            El círculo está en silencio. Sé el primero en hablar...
          </div>
        )}
        {messages.map((msg, idx) => {
          const isMe = msg.uid === user?.uid;
          return (
             <div key={msg.id || idx} className={`flex gap-3 ${isMe ? 'flex-row-reverse' : ''}`}>
               {!isMe && (
                 <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 border border-primary/20 bg-primary/10 flex items-center justify-center font-bold text-primary">
                    {msg.userName ? msg.userName.charAt(0).toUpperCase() : '?'}
                 </div>
               )}
               <div className={`flex flex-col ${isMe ? 'items-end' : 'items-start'} max-w-[80%]`}>
                 <div className="flex items-center gap-2 mb-1 px-1">
                   {isMe && <span className="text-xs text-primary/60">Tú</span>}
                   {!isMe && (
                     <>
                       <span className="text-xs text-primary/60">{msg.userName ? msg.userName.split(' ')[0] : 'Usuario'}</span>
                     </>
                   )}
                 </div>
                 <div className={`rounded-2xl p-4 relative group ${
                   isMe 
                    ? 'bg-primary/20 text-secondary rounded-tr-sm border border-primary/10' 
                    : 'glass-panel text-secondary rounded-tl-sm border border-white/5'
                 }`}>
                   {msg.replyToName && (
                     <div className="mb-2 pl-3 border-l-2 border-primary/30 text-xs italic text-primary/70 bg-primary/5 p-2 rounded-r-md">
                       <span className="font-semibold block mb-0.5">Respondiendo a {msg.replyToName}</span>
                       <span className="line-clamp-2">{msg.replyToText}</span>
                     </div>
                   )}
                   <p className="text-sm md:text-base font-medium whitespace-pre-wrap">{msg.text}</p>
                   <button
                     onClick={() => setReplyingTo(msg)}
                     className={`absolute -bottom-2 ${isMe ? '-left-8' : '-right-8'} p-1.5 bg-surface text-primary opacity-0 group-hover:opacity-100 transition-opacity rounded-full shadow hover:bg-primary hover:text-white`}
                     title="Responder"
                   >
                     <CornerDownRight className="w-3 h-3" />
                   </button>
                 </div>
               </div>
             </div>
          );
        })}
        <div ref={endRef} />
      </div>

      <div className="shrink-0 p-2 glass-panel rounded-2xl flex flex-col gap-2 border border-primary/20 relative">
         <AnimatePresence>
           {replyingTo && (
             <motion.div 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -10 }}
               className="mx-3 mt-2 pl-3 pr-8 py-2 border-l-2 border-primary bg-primary/5 rounded-r-md relative"
             >
               <span className="text-xs font-bold text-primary block mb-0.5">Respondiendo a {replyingTo.userName}</span>
               <span className="text-xs text-secondary line-clamp-1 italic">{replyingTo.text}</span>
               <button 
                 onClick={() => setReplyingTo(null)}
                 className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-primary hover:bg-primary/20 rounded-full"
               >
                 <X className="w-3 h-3" />
               </button>
             </motion.div>
           )}
         </AnimatePresence>
         <form onSubmit={handleSend} className="w-full flex gap-2">
            <input 
              className="flex-1 bg-transparent text-secondary p-3 focus:outline-none resize-none mx-2 placeholder:text-secondary/30 font-medium"
              placeholder="Comparte tu sabiduría..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              autoFocus
            />
            <button 
              type="submit"
              disabled={!newMessage.trim()}
              className="p-3 bg-primary/20 text-primary hover:bg-primary/30 rounded-xl transition-all disabled:opacity-50 disabled:hover:bg-primary/20"
            >
              <Send className="w-5 h-5" />
            </button>
         </form>
      </div>
    </div>
  );
}
