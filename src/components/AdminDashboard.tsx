import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { ShieldAlert, Users, BookOpen, Activity, ShoppingCart, CheckCircle, Clock, Download, List } from 'lucide-react';
import { trackEvent } from '../lib/analytics';
import { collection, getDocs, orderBy, query, updateDoc, doc, getDoc, serverTimestamp, deleteDoc, addDoc } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';
import { ErrorBoundary } from './ErrorBoundary';

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
    if (!window.confirm(`¿Confirmar la compra de "${intent.bookId}" para el usuario ${intent.email}?`)) return;
    
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
              if(!window.confirm('¿Generar mensajes de comunidad?')) return;
              try {
                const { collection, addDoc } = await import('firebase/firestore');
                const users = [
                  { userName: "Luna M.", uid: "mock-uid-1" },
                  { userName: "Carlos S.", uid: "mock-uid-2" },
                  { userName: "María Paz", uid: "mock-uid-3" },
                  { userName: "Javier C.", uid: "mock-uid-4" },
                  { userName: "Ana G.", uid: "mock-uid-5" },
                  { userName: "Diego R.", uid: "mock-uid-6" }
                ];
                const messages = [
                  { 
                    id: 'msg1',
                    userIndex: 0, 
                    text: "Hola a todos, ¿alguien probó la receta de valeriana y manzanilla para dormir? Llevo días con insomnio y quería saber si hace efecto rápido." 
                  },
                  { 
                    id: 'msg2',
                    userIndex: 1, 
                    text: "A mi me funciona muy bien. Media hora antes de acostarme es la clave, pero le agrego un poquito de miel silvestre para endulzar.", 
                    replyToId: 'msg1', 
                    replyToName: 'Luna', 
                    replyToText: 'Hola a todos, ¿alguien probó la receta de valeriana y manzanilla para dormir?' 
                  },
                  { 
                    id: 'msg3',
                    userIndex: 2, 
                    text: "Totalmente de acuerdo con la miel. De todas formas, te recomiendo que también pongas unas ramitas de lavanda debajo de tu almohada o uses aceite esencial para potenciarlo.",
                    replyToId: 'msg2',
                    replyToName: 'Carlos',
                    replyToText: 'A mi me funciona muy bien. Media hora antes de acostarme es la clave...'
                  },
                  { 
                    id: 'msg4',
                    userIndex: 3, 
                    text: "La infusión de pasiflora también es un santo remedio. Tienen que probarla si aún no lo hicieron, a mí me deja totalmente relajado, mucho más que la valeriana pura.",
                    replyToId: 'msg1',
                    replyToName: 'Luna',
                    replyToText: 'Llevo días con insomnio y quería saber si hace efecto rápido.'
                  },
                  { 
                    id: 'msg5',
                    userIndex: 0, 
                    text: "¡Gracias por el dato de la pasiflora! Voy a preparar justo esa infusión esta noche a ver qué tal me va, le sumaré la miel también.",
                    replyToId: 'msg4',
                    replyToName: 'Javier',
                    replyToText: 'La infusión de pasiflora también es un santo remedio. Tienen que probarla si aún no lo hicieron'
                  },
                  { 
                    id: 'msg6',
                    userIndex: 4, 
                    text: "Hablando de plantas relajantes, a mi marido le estuve dando toronjil (melisa) y mejoró muchísimo su ansiedad del día a día, igual no la combinamos con la pasiflora, no sé si se podrá."
                  },
                  { 
                    id: 'msg7',
                    userIndex: 5, 
                    text: "¡Qué maravilla la melisa! Mi abuela siempre me la preparaba cuando tenía exámenes en la facultad y mágicamente se me iban todos los nervios.",
                    replyToId: 'msg6',
                    replyToName: 'Ana',
                    replyToText: 'a mi marido le estuve dando toronjil (melisa) y mejoró muchísimo su ansiedad'
                  },
                  { 
                    id: 'msg8',
                    userIndex: 1, 
                    text: "¡Qué hermosa comunidad! Me emociona mucho poder leer y compartir todos estos saberes ancestrales que muchas veces se pierden con el tiempo." 
                  }
                ];
                let msgsAdded = 0;
                for (let i = 0; i < messages.length; i++) {
                  const m = messages[i];
                  const u = users[m.userIndex];
                  const pastTime = new Date(Date.now() - (messages.length - i) * 15 * 60000);
                  
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
                alert(`¡Se generaron ${msgsAdded} mensajes con éxito!`);
              } catch(e:any) {
                console.error(e);
                alert("Error: " + e.message);
              }
            }}
            className="mt-4 sm:mt-0 flex items-center gap-2 bg-[#d6c7af]/10 hover:bg-[#d6c7af]/20 text-[#d6c7af] px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            <Users className="w-4 h-4" /> Generar Tribu
          </button>
          
          <button
            onClick={async () => {
              if(!window.confirm('¿Estás seguro de que quieres ELIMINAR todos los mensajes de la comunidad?')) return;
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
            Borrar Tribu
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
             <div className="overflow-x-auto">
               <table className="w-full text-left border-collapse min-w-full">
                  <thead>
                    <tr className="border-b border-[#d6c7af]/20 text-tertiary/70 text-sm">
                      <th className="py-3 px-4 font-medium">Término</th>
                      <th className="py-3 px-4 font-medium">Usuario</th>
                      <th className="py-3 px-4 font-medium">Fecha</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-tertiary">
                    {searchEvents.slice(0, 10).map((event) => (
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
                           {processingId === intent.id ? 'Marcando...' : 'Marcar Comprado'}
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
                              <ul className="space-y-2 text-sm">
                                {user.sessions.map(session => (
                                  <li key={session.id} className="flex justify-between items-center bg-white/5 p-2 rounded">
                                    <span className="text-primary font-medium">
                                      {formatDate(session.startedAt)}
                                    </span>
                                    <span className="text-secondary">
                                      {session.durationMinutes !== undefined 
                                        ? `${session.durationMinutes} minutos` 
                                        : (session.endedAt ? 'Cerrada' : 'En curso')}
                                    </span>
                                  </li>
                                ))}
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
