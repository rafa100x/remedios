import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { collection, query, orderBy, limit, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Send, Users, UserCircle } from 'lucide-react';

interface ChatMessage {
  id?: string;
  text: string;
  uid: string;
  userName: string;
  userPhoto: string | null;
  createdAt: any;
}

export function CommunityChat() {
  const { user } = useAuth();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [newMessage, setNewMessage] = useState('');
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
        createdAt: serverTimestamp()
      });
      setNewMessage('');
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
                 <span className="text-xs text-primary/60 mb-1 px-1">{isMe ? 'Tú' : (msg.userName ? msg.userName.split(' ')[0] : 'Usuario')}</span>
                 <div className={`rounded-2xl p-4 ${
                   isMe 
                    ? 'bg-primary/20 text-secondary rounded-tr-sm border border-primary/10' 
                    : 'glass-panel text-secondary rounded-tl-sm border border-white/5'
                 }`}>
                   <p className="text-sm md:text-base font-medium whitespace-pre-wrap">{msg.text}</p>
                 </div>
               </div>
             </div>
          );
        })}
        <div ref={endRef} />
      </div>

      <div className="shrink-0 p-2 glass-panel rounded-2xl flex items-end gap-2 border border-primary/20">
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
