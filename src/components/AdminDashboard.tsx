import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { ShieldAlert, Users, BookOpen, Activity, ShoppingCart, CheckCircle, Clock, Download, List } from 'lucide-react';
import { trackEvent } from '../lib/analytics';
import { collection, getDocs, orderBy, query, updateDoc, doc, getDoc, serverTimestamp, deleteDoc, addDoc } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';
import { ErrorBoundary } from './ErrorBoundary';
import { GoogleGenAI } from '@google/genai';

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY || '';

interface Intent {
  id: string;
  userId: string;
  email: string;
  bookId: string;
  status: string;
  createdAt: any;
}

interface SessionRecord {
  id: string;
  startedAt: any;
  endedAt?: any;
  durationMinutes?: number;
}

interface UserRecord {
  id: string;
  email: string;
  loginCount?: number;
  lastLoginAt?: any;
  createdAt?: any;
  sessions?: SessionRecord[];
}

interface AnalyticsEvent {
  id: string;
  eventName: string;
  params: Record<string, any>;
  userId: string;
  userEmail: string;
  timestamp: any;
  userAgent?: string;
}

export function AdminDashboard() {
  const { isAdmin, user } = useAuth();
  const [usersList, setUsersList] = useState<UserRecord[]>([]);
  const [usersCount, setUsersCount] = useState<number | null>(null);
  const [intents, setIntents] = useState<Intent[]>([]);
  const [analyticsEvents, setAnalyticsEvents] = useState<AnalyticsEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [processingId, setProcessingId] = useState<string | null>(null);
  const [usersError, setUsersError] = useState<string | null>(null);
  const [analyticsError, setAnalyticsError] = useState<string | null>(null);
  const [expandedUserId, setExpandedUserId] = useState<string | null>(null);
  const [confirmAction, setConfirmAction] = useState<string | null>(null);

  const formatDate = (dateObj: any, onlyDate = false) => {
    if (!dateObj) return '-';
    try {
      let d: Date;
      if (typeof dateObj.toDate === 'function') {
        d = dateObj.toDate();
      } else if (dateObj.seconds) {
        d = new Date(dateObj.seconds * 1000);
      } else {
        d = new Date(dateObj);
      }
      return onlyDate ? d.toLocaleDateString() : d.toLocaleString();
    } catch(e) {
      return '-';
    }
  };

  const getTimeMillis = (dateObj: any) => {
    if (!dateObj) return 0;
    if (typeof dateObj.toMillis === 'function') return dateObj.toMillis();
    if (dateObj.seconds) return dateObj.seconds * 1000;
    return new Date(dateObj).getTime() || 0;
  };

  const toggleUserExpanded = async (userId: string) => {
    if (expandedUserId === userId) {
      setExpandedUserId(null);
      return;
    }
    setExpandedUserId(userId);
    
    // Fetch sessions if not already fetched
    const userIndex = usersList.findIndex(u => u.id === userId);
    if (userIndex >= 0 && !usersList[userIndex].sessions) {
      try {
        const sessionsQuery = query(collection(db, 'users', userId, 'sessions'), orderBy('startedAt', 'desc'));
        const sessionsSnap = await getDocs(sessionsQuery);
        const sessionsData = sessionsSnap.docs.map(doc => ({
           id: doc.id,
           ...doc.data()
        })) as SessionRecord[];
        
        const newUsersList = [...usersList];
        newUsersList[userIndex].sessions = sessionsData;
        setUsersList(newUsersList);
      } catch (err: any) {
        if (err.name === 'AbortError' || err.message?.includes('aborted')) {
          console.log('Session fetching aborted');
        } else {
          console.error('Error fetching sessions:', err);
        }
      }
    }
  };

  useEffect(() => {
    trackEvent('view_admin_dashboard');
    
    const fetchStats = async () => {
      let currentError = null;
      
      if (auth.currentUser) {
        // Force refresh the token to ensure any rules changes or claims update are correctly applied.
        try {
          await auth.currentUser.getIdToken(true);
        } catch (e) {
          console.error('Error refreshing token:', e);
        }
      }

      try {
        const usersSnapshot = await getDocs(collection(db, 'users'));
        setUsersCount(usersSnapshot.size);
        const usersData = usersSnapshot.docs.map(doc => ({
           id: doc.id,
           ...doc.data()
        })) as UserRecord[];
        
        usersData.sort((a, b) => {
           const timeA = a.lastLoginAt ? getTimeMillis(a.lastLoginAt) : (a.createdAt ? getTimeMillis(a.createdAt) : 0);
           const timeB = b.lastLoginAt ? getTimeMillis(b.lastLoginAt) : (b.createdAt ? getTimeMillis(b.createdAt) : 0);
           return timeB - timeA;
        });
        
        setUsersList(usersData);
      } catch (err: any) {
        if (err.name === 'AbortError' || err.message?.includes('aborted')) {
          console.log('User fetching aborted');
        } else {
          console.error('Error fetching users:', err);
          currentError = 'Error usuarios: ' + (err.message || 'Error desconocido');
          setUsersError(currentError);
        }
      }

      try {
        const intentsQuery = query(collection(db, 'purchaseIntents'), orderBy('createdAt', 'desc'));
        const intentsSnap = await getDocs(intentsQuery);
        const intentsData = intentsSnap.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Intent[];
        setIntents(intentsData);
      } catch (err: any) {
        if (err.name === 'AbortError' || err.message?.includes('aborted')) {
          console.log('Intent fetching aborted');
        } else {
          console.error('Error fetching intents:', err);
          setUsersError(prev => (prev ? prev + ' | ' : '') + 'Error intentos: ' + (err.message || 'Error desconocido') + '. Asegúrate de refrescar la sesión.');
        }
      }

      try {
        const analyticsQuery = query(collection(db, 'analytics'));
        const analyticsSnap = await getDocs(analyticsQuery);
        const analyticsData = analyticsSnap.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as AnalyticsEvent[];
        
        // Sort descending by timestamp, handling nulls as "now"
        analyticsData.sort((a, b) => {
          const timeA = a.timestamp ? getTimeMillis(a.timestamp) : Date.now();
          const timeB = b.timestamp ? getTimeMillis(b.timestamp) : Date.now();
          return timeB - timeA;
        });

        setAnalyticsEvents(analyticsData);
      } catch (err: any) {
        if (err.name === 'AbortError' || err.message?.includes('aborted')) {
          console.log('Analytics fetching aborted');
        } else {
          console.error('Error fetching analytics:', err);
          setAnalyticsError(err.message || 'Error desconocido');
        }
      } finally {
        setLoading(false);
      }
    };

    if (isAdmin) {
      fetchStats();
    }
  }, [isAdmin]);

  const handleMarkAsPurchased = async (intent: Intent) => {
    if (confirmAction !== `confirm_${intent.id}`) {
        setConfirmAction(`confirm_${intent.id}`);
        return;
    }
    setConfirmAction(null);
    
    setProcessingId(intent.id);
    try {
      const intentRef = doc(db, 'purchaseIntents', intent.id);
      await updateDoc(intentRef, {
        status: 'completed'
      });

      const userRef = doc(db, 'users', intent.userId);
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) {
        const userData = userSnap.data();
        const currentBooks = userData.purchasedBooks || [];
        if (!currentBooks.includes(intent.bookId)) {
          await updateDoc(userRef, {
            purchasedBooks: [...currentBooks, intent.bookId],
            updatedAt: serverTimestamp()
          });
        }
      }

      setIntents(intents.map(i => i.id === intent.id ? { ...i, status: 'completed' } : i));
    } catch (err) {
      console.error('Error marking as purchased:', err);
      alert('Hubo un error al marcar como comprado. Revisa los permisos de Firestore y la consola.');
    } finally {
      setProcessingId(null);
    }
  };

  const exportUsersCSV = () => {
    const headers = ['Email', 'Fecha Registro', 'Ultimo Ingreso', 'Total Sesiones'];
    const rows = usersList.map(u => [
       u.email, 
       formatDate(u.createdAt, true) || 'Desconocido', 
       formatDate(u.lastLoginAt) || 'Desconocido', 
       u.loginCount || 1
    ]);
    const csvContent = [headers.join(','), ...rows.map(e => e.join(','))].join("\n");
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "usuarios_grimoire.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isAdmin) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center px-4">
        <ShieldAlert className="w-16 h-16 text-red-500 mb-4" />
        <h2 className="text-2xl font-headline text-primary mb-2">Acceso Denegado</h2>
        <p className="text-secondary">No tienes permisos de administrador para ver este panel.</p>
      </div>
    );
  }

  const pendingIntents = intents.filter(i => i.status === 'pending' || !i.status);

  // Analytics Stats Computations
  const searchEvents = analyticsEvents.filter(e => e.eventName === 'search');
  const bookClicks = analyticsEvents.filter(e => e.eventName === 'read_book');
  const sectionViews = analyticsEvents.filter(e => String(e.eventName || '').startsWith('view_'));

  // Group sections by event_category and event_label or eventName
  const sectionsCount: Record<string, number> = {};
  sectionViews.forEach(e => {
     let name = String(e.eventName || '').replace('view_', '') || 'unknown';
     if (e.params?.event_label) {
       name += ` - ${e.params.event_label}`;
     }
     sectionsCount[name] = (sectionsCount[name] || 0) + 1;
  });
  const sortedSections = Object.entries(sectionsCount).sort((a,b) => b[1] - a[1]);

  const booksCount: Record<string, number> = {};
  bookClicks.forEach(e => {
     const bookName = String(e.params?.event_label || 'Desconocido');
     booksCount[bookName] = (booksCount[bookName] || 0) + 1;
  });
  const sortedBooks = Object.entries(booksCount).sort((a,b) => b[1] - a[1]);

  const recipeViews = analyticsEvents.filter(e => e.eventName === 'view_recipe');
  const recipesCount: Record<string, number> = {};
  recipeViews.forEach(e => {
     const recipeName = String(e.params?.event_label || 'Desconocida');
     recipesCount[recipeName] = (recipesCount[recipeName] || 0) + 1;
  });
  const sortedRecipes = Object.entries(recipesCount).sort((a,b) => b[1] - a[1]);

  const libraryIntentCount = analyticsEvents.filter(e => e.eventName === 'view_library').length;

  return (
    <ErrorBoundary>
    <div className="max-w-7xl mx-auto px-4 py-8">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <ShieldAlert className="w-10 h-10 text-primary" />
          <h2 className="font-headline text-4xl md:text-5xl text-primary text-shadow-glow">Panel de Administración</h2>
        </div>
        
        <div className="flex items-center gap-4">
          <button
            onClick={async () => {
              if(!window.confirm('¿Generar mensajes de comunidad con IA?')) return;
              setLoading(true);
              try {
                const { collection, addDoc, getDocs, doc, deleteDoc } = await import('firebase/firestore');
                
                // Get existing real users or use a few simulated names
                const mockUsers = [
                  { userName: "Luna M.", uid: "mock-uid-" + Math.floor(Math.random() * 1000) },
                  { userName: "Carlos S.", uid: "mock-uid-" + Math.floor(Math.random() * 1000) },
                  { userName: "María Paz", uid: "mock-uid-" + Math.floor(Math.random() * 1000) },
                  { userName: "Javier C.", uid: "mock-uid-" + Math.floor(Math.random() * 1000) },
                  { userName: "Ana G.", uid: "mock-uid-" + Math.floor(Math.random() * 1000) },
                  { userName: "Diego R.", uid: "mock-uid-" + Math.floor(Math.random() * 1000) },
                  { userName: "Carmen", uid: "mock-uid-" + Math.floor(Math.random() * 1000) },
                  { userName: "Esteban", uid: "mock-uid-" + Math.floor(Math.random() * 1000) }
                ];

                // Shuffle and pick 5 users
                const selectedUsers = mockUsers.sort(() => 0.5 - Math.random()).slice(0, 5);

                const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
                
                const prompt = `
Genera una conversación realista y fluida para un foro/comunidad online de medicina natural y herboristería, en español.
Queremos entre 6 y 10 mensajes. Los participantes son gente normal (no expertos), así que el lenguaje debe ser súper casual, corto, cotidiano, como si fuera un grupo de WhatsApp o un foro muy relajado. NO uses signos de exclamación exagerados (¡!) y mantén las frases breves, como lo haría alguien desde su celular.
Usa estos nombres de usuario para los autores, elige 5 de ellos aleatoriamente: ${selectedUsers.map(u => u.userName).join(', ')}.

REGLAS MUY IMPORTANTES:
1. Las frases deben ser cotidianas: "alguien probó...", "yo uso esto y me sirve", "sabes si funciona?". NADA de lenguaje robótico ni formal.
2. Algunos deben ser preguntas iniciales y otros deben ser respuestas a esos mensajes.
3. Para marcar que un mensaje responde a otro, usa el campo "replyToId" apuntando al "id" del mensaje previo, y llena "replyToName" (nombre de a quien responde) y "replyToText" (un mini resumen de la frase original, de 5-6 palabras).
4. Genera SOLAMENTE una lista en JSON con este formato exacto, sin markdown extra:
[
  { 
    "id": "gen_msg_1", 
    "userName": "<Nombre>",
    "text": "alguien probó pasiflora para la ansiedad? ando medio mal estos dias",
    "replyToId": null,
    "replyToName": null,
    "replyToText": null
  },
  { 
    "id": "gen_msg_2", 
    "userName": "<Otro Nombre>",
    "text": "yo la tomo en té antes de dormir y me re sirve la verdad",
    "replyToId": "gen_msg_1",
    "replyToName": "<El nombre anterior>",
    "replyToText": "alguien probó pasiflora para la ansiedad?"
  }
]
`;

                const response = await ai.models.generateContent({
                    model: 'gemini-2.5-flash',
                    contents: prompt,
                });
                
                let text = response.text || "[]";
                // Limpiar posibles backticks
                text = text.replace(/^```json\s*/i, '').replace(/\s*```$/i, '').trim();

                const generatedMessages = JSON.parse(text);
                
                let msgsAdded = 0;
                for (let i = 0; i < generatedMessages.length; i++) {
                  const m = generatedMessages[i];
                  // find the user uid
                  let u = selectedUsers.find(u => u.userName === m.userName);
                  if (!u) {
                    // fallback if AI invents a name
                    u = { userName: m.userName || "Caminante", uid: "mock-uid-" + Math.floor(Math.random() * 1000) };
                  }

                  const pastTime = new Date(Date.now() - (generatedMessages.length - i) * 15 * 60000);
                  
                  const payload: any = {
                    uid: u.uid,
                    userName: u.userName,
                    text: m.text,
                    createdAt: pastTime
                  };

                  if (m.replyToId) {
                    payload.replyToId = m.replyToId;
                    payload.replyToName = m.replyToName;
                    payload.replyToText = m.replyToText;
                  }
                  
                  await addDoc(collection(db, "community_messages"), payload);
                  msgsAdded++;
                }
                alert(`¡Se generaron ${msgsAdded} mensajes con IA con éxito!`);
              } catch(e:any) {
                console.error(e);
                alert("Error generando con IA: " + e.message);
              } finally {
                setLoading(false);
              }
            }}
            className="mt-4 sm:mt-0 flex items-center gap-2 bg-[#d6c7af]/10 hover:bg-[#d6c7af]/20 text-[#d6c7af] px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            <Users className="w-4 h-4" /> {confirmAction === 'generate_tribu' ? '¿Confirmar IA?' : 'Generar Tribu'}
          </button>
          
          <button
            onClick={async () => {
              if (confirmAction !== 'delete_tribu') {
                  setConfirmAction('delete_tribu');
                  return;
              }
              setConfirmAction(null);
              try {
                const snap = await getDocs(collection(db, "community_messages"));
                let deletedCount = 0;
                for (const d of snap.docs) {
                  await deleteDoc(doc(db, "community_messages", d.id));
                  deletedCount++;
                }
                alert(`¡Se eliminaron ${deletedCount} mensajes con éxito!`);
              } catch(e:any) {
                console.error(e);
                alert("Error: " + e.message);
              }
            }}
            className="mt-4 sm:mt-0 flex items-center gap-2 bg-red-900/40 hover:bg-red-900/60 text-red-100 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            {confirmAction === 'delete_tribu' ? '¿Confirmar Borrar?' : 'Borrar Tribu'}
          </button>
          <button 
            onClick={async () => {
            setLoading(true);
            setAnalyticsError(null);
            try {
              const analyticsQuery = query(collection(db, 'analytics'));
              const analyticsSnap = await getDocs(analyticsQuery);
              const analyticsData = analyticsSnap.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
              })) as AnalyticsEvent[];
              
              analyticsData.sort((a, b) => {
                const timeA = a.timestamp ? getTimeMillis(a.timestamp) : Date.now();
                const timeB = b.timestamp ? getTimeMillis(b.timestamp) : Date.now();
                return timeB - timeA;
              });

              setAnalyticsEvents(analyticsData);
            } catch (err: any) {
              console.error(err);
              setAnalyticsError(err.message || 'Error desconocido');
            } finally {
              setLoading(false);
            }
          }}
          className="mt-4 sm:mt-0 flex items-center gap-2 bg-[#d6c7af]/10 hover:bg-[#d6c7af]/20 text-[#d6c7af] px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          <Activity className="w-4 h-4" /> Refrescar Métricas
        </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="glass-panel ghost-border p-6 rounded-xl flex flex-col items-center shadow-sm">
          <Users className="w-8 h-8 text-primary mb-2" />
          <h3 className="text-lg font-bold text-secondary mb-1">Usuarios</h3>
          {usersError ? (
            <p className="text-sm text-red-500 font-medium text-center">{usersError}</p>
          ) : (
            <p className="text-4xl font-headline text-accent">
               {loading ? '...' : (usersCount !== null ? usersCount : '0')}
            </p>
          )}
        </div>
        
        <div className="glass-panel ghost-border p-6 rounded-xl flex flex-col items-center shadow-sm relative overflow-hidden">
          <ShoppingCart className="w-8 h-8 text-primary mb-2" />
          <h3 className="text-lg font-bold text-secondary mb-1">Pagos Pendientes</h3>
          <p className="text-4xl font-headline text-accent">
             {loading ? '...' : pendingIntents.length}
          </p>
          {pendingIntents.length > 0 && (
            <div className="absolute top-4 right-4 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
          )}
        </div>

        <div className="glass-panel ghost-border p-6 rounded-xl flex flex-col items-center shadow-sm">
          <BookOpen className="w-8 h-8 text-primary mb-2" />
          <h3 className="text-lg font-bold text-secondary mb-1">Intentos Biblioteca</h3>
          <p className="text-4xl font-headline text-accent">{libraryIntentCount}</p>
        </div>

        <div className="glass-panel ghost-border p-6 rounded-xl flex flex-col items-center shadow-sm">
          <Activity className="w-8 h-8 text-primary mb-2" />
          <h3 className="text-lg font-bold text-secondary mb-1">Total Eventos</h3>
          <p className="text-4xl font-headline text-accent">{analyticsEvents.length}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="glass-panel ghost-border p-8 rounded-xl shadow-sm relative overflow-hidden">
          <h3 className="text-2xl font-bold text-primary mb-6">Métricas de Contenido</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-bold text-secondary mb-3 border-b border-[#d6c7af]/10 pb-2">Secciones Más Visitadas</h4>
              {sortedSections.length === 0 ? <p className="text-sm text-tertiary">Navega por la página web para generar los primeros datos.</p> : (
                <ul className="space-y-2">
                  {sortedSections.slice(0, 5).map(([name, count]) => (
                    <li key={name} className="flex justify-between items-center text-sm">
                      <span className="text-tertiary capitalize">{name}</span>
                      <span className="text-accent font-bold bg-[#d6c7af]/5 px-2 py-0.5 rounded">{count}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div>
              <h4 className="text-lg font-bold text-secondary mb-3 border-b border-[#d6c7af]/10 pb-2">Libros Más Solicitados / Vistos</h4>
              {sortedBooks.length === 0 ? <p className="text-sm text-tertiary">Abre un libro en la biblioteca para ver los datos aquí.</p> : (
                <ul className="space-y-2">
                  {sortedBooks.slice(0, 5).map(([name, count]) => (
                    <li key={name} className="flex justify-between items-center text-sm">
                      <span className="text-tertiary">{name}</span>
                      <span className="text-accent font-bold bg-[#d6c7af]/5 px-2 py-0.5 rounded">{count}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div>
              <h4 className="text-lg font-bold text-secondary mb-3 border-b border-[#d6c7af]/10 pb-2">Recetas Más Vistas</h4>
              {sortedRecipes.length === 0 ? <p className="text-sm text-tertiary">Entra a alguna receta del grimorio para activar esta métrica.</p> : (
                <ul className="space-y-2">
                  {sortedRecipes.slice(0, 5).map(([name, count]) => (
                    <li key={name} className="flex justify-between items-center text-sm">
                      <span className="text-tertiary truncate mr-2" title={name}>{name}</span>
                      <span className="text-accent font-bold bg-[#d6c7af]/5 px-2 py-0.5 rounded">{count}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        <div className="glass-panel ghost-border p-8 rounded-xl shadow-sm relative overflow-hidden">
          <h3 className="text-2xl font-bold text-primary mb-6">Búsquedas Recientes</h3>
          {searchEvents.length === 0 ? (
             <p className="text-secondary italic text-sm">Realiza una búsqueda para verla registrada aquí.</p>
          ) : (
             <div className="overflow-x-auto max-h-[500px] overflow-y-auto">
               <table className="w-full text-left border-collapse min-w-full">
                  <thead className="sticky top-0 bg-[#2b1f18] z-10 shadow-sm">
                    <tr className="border-b border-[#d6c7af]/20 text-tertiary/70 text-sm">
                      <th className="py-3 px-4 font-medium">Término</th>
                      <th className="py-3 px-4 font-medium">Usuario</th>
                      <th className="py-3 px-4 font-medium">Fecha</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-tertiary">
                    {searchEvents.map((event) => (
                      <tr key={event.id} className="border-b border-[#d6c7af]/10 hover:bg-[#d6c7af]/5 transition-colors">
                        <td className="py-3 px-4 font-medium text-secondary">
                          "{event.params?.search_term || 'N/A'}"
                        </td>
                        <td className="py-3 px-4">
                          <span className="truncate max-w-[150px] inline-block" title={event.userEmail}>
                            {event.userEmail !== 'anonymous' ? event.userEmail : 'Anónimo'}
                          </span>
                        </td>
                        <td className="py-3 px-4">{formatDate(event.timestamp)}</td>
                      </tr>
                    ))}
                  </tbody>
               </table>
             </div>
          )}
        </div>
      </div>

      <div className="glass-panel ghost-border p-8 rounded-xl shadow-sm relative overflow-hidden mb-8">
        <h3 className="text-2xl font-bold text-primary mb-6">Registro de Actividad</h3>
        {analyticsError && (
           <p className="text-red-500 text-sm mb-4 bg-red-500/10 p-3 rounded">
             Error al cargar métricas: {analyticsError}
           </p>
        )}
        {analyticsEvents.length === 0 ? (
           <p className="text-secondary italic text-sm">El historial acaba de activarse y empieza desde cero ahora. Navega un poco para llenarlo.</p>
        ) : (
           <div className="space-y-3">
              {analyticsEvents.slice(0, 15).map(event => (
                <div key={event.id} className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#d6c7af]/10 pb-3 last:border-0 last:pb-0">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#d6c7af]/10 flex items-center justify-center">
                      <Activity className="w-4 h-4 text-tertiary" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-secondary capitalize">{String(event.eventName || 'unknown').replace(/_/g, ' ')}</p>
                      <p className="text-xs text-tertiary truncate max-w-[200px]" title={event.userEmail}>
                        {event.userEmail !== 'anonymous' ? String(event.userEmail) : 'Usuario Anónimo'}
                      </p>
                    </div>
                  </div>
                  <div className="text-right mt-2 sm:mt-0">
                    <p className="text-xs text-tertiary">{formatDate(event.timestamp)}</p>
                    {event.params?.event_label && (
                      <p className="text-xs text-accent mt-0.5 truncate max-w-[200px]" title={event.params.event_label}>
                        {event.params.event_label}
                      </p>
                    )}
                  </div>
                </div>
              ))}
           </div>
        )}
      </div>

      <div className="glass-panel ghost-border p-8 rounded-xl shadow-sm relative overflow-hidden mb-8">
        <h3 className="text-2xl font-bold text-primary mb-6">Intentos de Compra Recientes</h3>
        
        {intents.length === 0 ? (
           <p className="text-secondary italic">Aún no hay intentos de compra registrados.</p>
        ) : (
           <div className="overflow-x-auto">
             <table className="w-full text-left border-collapse">
               <thead>
                 <tr className="border-b border-outline-variant/40 text-tertiary">
                   <th className="py-3 px-4 font-bold">Estado</th>
                   <th className="py-3 px-4 font-bold">Email</th>
                   <th className="py-3 px-4 font-bold">Libro</th>
                   <th className="py-3 px-4 font-bold">Fecha</th>
                   <th className="py-3 px-4 font-bold text-right">Acción</th>
                 </tr>
               </thead>
               <tbody>
                 {intents.map((intent, i) => {
                   const isPending = intent.status === 'pending' || !intent.status;
                   return (
                   <tr key={intent.id} className="border-b border-outline-variant/20 hover:bg-surface-container/50 transition-colors">
                     <td className="py-3 px-4">
                        {isPending ? (
                          <span className="flex items-center gap-1 text-yellow-600 font-medium text-sm">
                            <Clock className="w-4 h-4" /> Pendiente
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 text-green-600 font-medium text-sm">
                            <CheckCircle className="w-4 h-4" /> Comprado
                          </span>
                        )}
                     </td>
                     <td className="py-3 px-4 font-medium text-primary">{intent.email}</td>
                     <td className="py-3 px-4 text-secondary">{intent.bookId}</td>
                     <td className="py-3 px-4 text-tertiary text-sm">
                        {formatDate(intent.createdAt)}
                     </td>
                     <td className="py-3 px-4 text-right">
                       {isPending && (
                         <button
                           onClick={() => handleMarkAsPurchased(intent)}
                           disabled={processingId === intent.id}
                           className="bg-[#3a1a0f] hover:bg-[#5c3716] text-[#fdfaf2] text-sm font-bold py-2 px-4 rounded-lg transition-colors disabled:opacity-50"
                         >
                           {processingId === intent.id ? 'Marcando...' : confirmAction === `confirm_${intent.id}` ? '¿Seguro?' : 'Marcar Comprado'}
                         </button>
                       )}
                     </td>
                   </tr>
                 )})}
               </tbody>
             </table>
           </div>
        )}
      </div>
      
      <div className="glass-panel ghost-border p-8 rounded-xl shadow-sm relative overflow-hidden mt-8">
         <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
           <h3 className="text-2xl font-bold text-primary">Usuarios ({usersList.length})</h3>
           <button 
             onClick={exportUsersCSV}
             className="mt-4 sm:mt-0 flex items-center gap-2 bg-[#d6c7af]/10 hover:bg-[#d6c7af]/20 text-[#d6c7af] px-4 py-2 rounded-lg text-sm font-medium transition-colors"
           >
             <Download className="w-4 h-4" /> Exportar CSV
           </button>
         </div>
         
         {usersList.length === 0 ? (
            <p className="text-secondary italic">Aún no hay usuarios.</p>
         ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-outline-variant/40 text-tertiary">
                    <th className="py-3 px-4 font-bold">Email</th>
                    <th className="py-3 px-4 font-bold">Último Ingreso</th>
                    <th className="py-3 px-4 font-bold">Registro</th>
                    <th className="py-3 px-4 font-bold text-right">Sesiones Totales</th>
                  </tr>
                </thead>
                <tbody>
                  {usersList.map((user) => (
                    <React.Fragment key={user.id}>
                      <tr 
                        className="border-b border-outline-variant/20 hover:bg-surface-container/50 transition-colors cursor-pointer"
                        onClick={() => toggleUserExpanded(user.id)}
                      >
                        <td className="py-3 px-4 font-medium text-primary flex items-center justify-between">
                           {user.email}
                        </td>
                        <td className="py-3 px-4 text-secondary text-sm">
                           {formatDate(user.lastLoginAt)}
                        </td>
                        <td className="py-3 px-4 text-tertiary text-sm">
                           {formatDate(user.createdAt, true)}
                        </td>
                        <td className="py-3 px-4 text-right font-bold text-accent text-lg flex items-center justify-end gap-2">
                           {user.loginCount || 1}
                           <span className="text-sm font-normal text-tertiary">{expandedUserId === user.id ? '▼' : '►'}</span>
                        </td>
                      </tr>
                      {expandedUserId === user.id && (
                        <tr className="bg-surface-container/20">
                          <td colSpan={4} className="p-4 border-b border-outline-variant/20">
                            <h4 className="font-bold text-secondary mb-3">Historial de Sesiones</h4>
                            {!user.sessions ? (
                              <p className="text-sm text-tertiary">Cargando...</p>
                            ) : user.sessions.length === 0 ? (
                              <p className="text-sm text-tertiary">No hay sesiones registradas.</p>
                            ) : (
                              <ul className="space-y-3 text-sm">
                                {user.sessions.map(session => {
                                  const sessionStart = getTimeMillis(session.startedAt);
                                  const sessionEnd = session.endedAt ? (getTimeMillis(session.endedAt) + 60000) : Date.now();
                                  
                                  const sessionEvents = analyticsEvents.filter(e => {
                                      if (e.userId !== user.id) return false;
                                      const t = getTimeMillis(e.timestamp);
                                      return t >= sessionStart && t <= sessionEnd;
                                  });
                                  
                                  const relevantEvents = ['read_book', 'search', 'add_favorite', 'remove_favorite', 'share_whatsapp', 'download_recipe', 'add_to_shopping_list', 'remove_from_shopping_list', 'rate_recipe', 'guru_unlock_clicked', 'guru_code_submit', 'guru_code_success', 'guru_code_error'];
                                  const uniqueViews = Array.from(new Set(sessionEvents
                                      .filter(e => e.eventName.startsWith('view_') || relevantEvents.includes(e.eventName))
                                      .map(e => {
                                        const name = e.params?.event_label || e.params?.bookTitle || e.params?.title || e.params?.recipe_name || 'Item';
                                        if (e.eventName === 'search') return `Búsqueda: "${e.params?.search_term || ''}"`;
                                        if (e.eventName === 'read_book' || e.eventName === 'view_recipe') return `Vió: ${name}`;
                                        if (e.eventName === 'add_favorite') return `Guardó: ${name}`;
                                        if (e.eventName === 'remove_favorite') return `Quitó de guardados: ${name}`;
                                        if (e.eventName === 'share_whatsapp') return `Compartió por WhatsApp: ${name}`;
                                        if (e.eventName === 'download_recipe') return `Descargó: ${name}`;
                                        if (e.eventName === 'add_to_shopping_list') return `Añadió a lista de compras: ${name}`;
                                        if (e.eventName === 'remove_from_shopping_list') return `Quitó de lista de compras: ${name}`;
                                        if (e.eventName === 'rate_recipe') return `Calificó (${e.params?.value}★): ${name}`;
                                        if (e.eventName === 'guru_unlock_clicked') return `Intentó comprar desbloqueo (Gurú)`;
                                        if (e.eventName === 'guru_code_submit') return `Ingresó código (Gurú): ${e.params?.code}`;
                                        if (e.eventName === 'guru_code_success') return `Código validado con éxito (Gurú)`;
                                        if (e.eventName === 'guru_code_error') return `Error en código (Gurú): ${e.params?.error}`;
                                        if (e.eventName === 'view_library') return 'Sección: Biblioteca';
                                        if (e.eventName === 'view_guru') return 'Sección: Gurú AI';
                                        if (e.eventName === 'view_community') return 'Sección: Comunidad';
                                        return null;
                                      })
                                      .filter(Boolean)
                                  ));

                                  return (
                                  <li key={session.id} className="flex flex-col bg-white/5 p-3 rounded shadow-sm border border-white/5">
                                    <div className="flex justify-between items-center mb-1">
                                      <span className="text-primary font-medium">
                                        {formatDate(session.startedAt)}
                                      </span>
                                      <span className="text-secondary font-semibold">
                                        {session.durationMinutes !== undefined 
                                          ? `${session.durationMinutes} minutos` 
                                          : (session.endedAt ? 'Cerrada' : 'En curso')}
                                      </span>
                                    </div>
                                    
                                    {uniqueViews.length > 0 ? (
                                      <div className="text-tertiary text-xs mt-2 border-t border-white/10 pt-2">
                                        <div className="text-[#a99473] mb-1 font-medium">Actividad registrada:</div>
                                        <ul className="list-disc list-inside space-y-0.5 ml-1">
                                          {uniqueViews.map((view, idx) => (
                                            <li key={idx} className="text-tertiary/90">{view}</li>
                                          ))}
                                        </ul>
                                      </div>
                                    ) : (
                                      <div className="text-tertiary/40 text-[11px] mt-2 border-t border-white/5 pt-2 italic">Solo navegación (sin interacciones específicas).</div>
                                    )}
                                  </li>
                                  );
                                })}
                              </ul>
                            )}
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
         )}
      </div>
    </div>
    </ErrorBoundary>
  );
}
