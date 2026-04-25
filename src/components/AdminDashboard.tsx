import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { ShieldAlert, Users, BookOpen, Activity, ShoppingCart, CheckCircle, Clock } from 'lucide-react';
import { trackEvent } from '../lib/analytics';
import { collection, getDocs, orderBy, query, updateDoc, doc, getDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';

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

export function AdminDashboard() {
  const { isAdmin, user } = useAuth();
  const [usersList, setUsersList] = useState<UserRecord[]>([]);
  const [usersCount, setUsersCount] = useState<number | null>(null);
  const [intents, setIntents] = useState<Intent[]>([]);
  const [loading, setLoading] = useState(true);
  const [processingId, setProcessingId] = useState<string | null>(null);
  const [usersError, setUsersError] = useState<string | null>(null);
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
        console.error('Error fetching sessions:', err);
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
        console.error('Error fetching users:', err);
        currentError = 'Error usuarios: ' + (err.message || 'Error desconocido');
        setUsersError(currentError);
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
        console.error('Error fetching intents:', err);
        setUsersError(prev => (prev ? prev + ' | ' : '') + 'Error intentos: ' + (err.message || 'Error desconocido') + '. Asegúrate de refrescar la sesión.');
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

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      
      {user && (
        <div className="mb-6 mx-auto w-full max-w-3xl bg-[#1a0d06] border border-[#d6c7af]/20 rounded p-4 font-mono text-xs text-[#d6c7af]/50 space-y-1">
           <div><strong className="text-[#d6c7af]">Debug Auth Info</strong></div>
           <div className="break-all select-all">UID: {user.uid}</div>
           <div>Email: {user.email}</div>
           <div>Verified: {user.emailVerified ? 'Yes' : 'No'}</div>
           <div className="mt-2 text-red-400">Si sigues viendo el error, confirma que este UID ("{user.uid}") esté escrito exactamente igual en las reglas de Firestore o que el mail esté en la lista permitida.</div>
        </div>
      )}

      <div className="flex items-center gap-4 mb-8">
        <ShieldAlert className="w-10 h-10 text-primary" />
        <h2 className="font-headline text-4xl md:text-5xl text-primary text-shadow-glow">Panel de Administración</h2>
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
          <h3 className="text-lg font-bold text-secondary mb-1">Premium</h3>
          <p className="text-4xl font-headline text-accent">4</p>
        </div>

        <div className="glass-panel ghost-border p-6 rounded-xl flex flex-col items-center shadow-sm">
          <Activity className="w-8 h-8 text-primary mb-2" />
          <h3 className="text-lg font-bold text-secondary mb-1">Sistema</h3>
          <p className="text-xl font-bold text-green-600 mt-2">Online</p>
        </div>
      </div>

      <div className="glass-panel ghost-border p-8 rounded-xl shadow-sm relative overflow-hidden">
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
         <h3 className="text-2xl font-bold text-primary mb-6">Usuarios ({usersList.length})</h3>
         
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
  );
}
