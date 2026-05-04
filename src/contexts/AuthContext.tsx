import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, onAuthStateChanged, signInWithPopup, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc, setDoc, serverTimestamp, onSnapshot, increment, collection } from 'firebase/firestore';
import { auth, googleProvider, db, handleFirestoreError } from '../lib/firebase';

interface AuthContextType {
  user: User | null;
  isAdmin: boolean;
  purchasedBooks: string[];
  hasGuruAccess: boolean;
  bookProgress: Record<string, string>;
  bookmarks: Record<string, string[]>;
  exp: number;
  loading: boolean;
  signIn: () => Promise<void>;
  logOut: () => Promise<void>;
  signInWithEmail: (email: string, pass: string) => Promise<void>;
  registerWithEmail: (email: string, pass: string) => Promise<void>;
  simulatePurchase: (bookId: string) => Promise<void>;
  purchaseGuruAccess: () => Promise<void>;
  updateProgress: (bookId: string, chapterId: string) => Promise<void>;
  toggleBookmark: (bookId: string, chapterId: string) => Promise<void>;
  awardExp: (points: number) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [purchasedBooks, setPurchasedBooks] = useState<string[]>([]);
  const [hasGuruAccess, setHasGuruAccess] = useState(false);
  const [bookProgress, setBookProgress] = useState<Record<string, string>>({});
  const [bookmarks, setBookmarks] = useState<Record<string, string[]>>({});
  const [exp, setExp] = useState(0);
  const [loading, setLoading] = useState(true);

  const [isDemo] = useState(() => {
    return typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('demo') === 'true';
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        const adminEmails = ['rafaelvidetta@gmail.com', 'rafaelvidetta32@gmail.com', 'marc.zbrun@gmail.com'];
        const isUserAdmin = adminEmails.includes((user.email || '').trim().toLowerCase()) || user.uid === 'jEFywPT0xVP7lA1U6wN095uP3Bn2' || user.uid === 'T6n6G9x3NfR11IUMC79ynxrb7qk1';
        setIsAdmin(isUserAdmin);
        const allPremiumBooks = ['presion', 'arte_preparar', 'menopausia', 'botiquin'];
        
        if (isUserAdmin) {
          setPurchasedBooks(allPremiumBooks);
        }

        // Fetch user profile from Firestore or create it
        const userRef = doc(db, 'users', user.uid);
        
        // Listen to changes in real-time so purchases unlock instantly
        const unsubscribeDoc = onSnapshot(userRef, async (docSnap) => {
            if (docSnap.exists()) {
              const data = docSnap.data();
              setPurchasedBooks(isUserAdmin ? Array.from(new Set([...(data.purchasedBooks || []), ...allPremiumBooks])) : (data.purchasedBooks || []));
              setHasGuruAccess(isUserAdmin || !!data.hasGuruAccess);
              setBookProgress(data.bookProgress || {});
              setBookmarks(data.bookmarks || {});
              setExp(data.exp || 0);
              
              // Handle admin document creation to bypass rules token issues
              if (isUserAdmin) {
                try {
                  const adminRef = doc(db, 'admins', user.uid);
                  await setDoc(adminRef, {
                    email: user.email,
                    updatedAt: serverTimestamp()
                  }, { merge: true });
                } catch (e) {
                  console.error('Error saving admin state:', e);
                }
              }

              // Session Tracking
              const currentSessionId = sessionStorage.getItem('grimorio_session_id');
              const currentSessionStart = sessionStorage.getItem('grimorio_session_start');
              
              if (!currentSessionId) {
                // New session
                const newSessionId = Date.now().toString();
                sessionStorage.setItem('grimorio_session_id', newSessionId);
                sessionStorage.setItem('grimorio_session_start', newSessionId);
                
                try {
                  const sessionRef = doc(collection(db, 'users', user.uid, 'sessions'), newSessionId);
                  await setDoc(sessionRef, {
                    startedAt: serverTimestamp(),
                    updatedAt: serverTimestamp()
                  });
                  
                  // Also update lastLoginAt on user doc
                  await setDoc(userRef, {
                    lastLoginAt: serverTimestamp(),
                    loginCount: increment(1),
                    updatedAt: serverTimestamp()
                  }, { merge: true });
                } catch(err) {
                  console.error('Error tracking session start:', err);
                }
              } else if (currentSessionStart) {
                // We have an active session, let's update the duration and endedAt periodically
                // but doing it on every snapshot is too much, so we debounce it or just do it once here if needed
                const start = parseInt(currentSessionStart, 10);
                const durationMinutes = Math.round((Date.now() - start) / 60000);
                
                try {
                  const sessionRef = doc(collection(db, 'users', user.uid, 'sessions'), currentSessionId);
                  await setDoc(sessionRef, {
                    endedAt: serverTimestamp(),
                    durationMinutes: durationMinutes,
                    updatedAt: serverTimestamp()
                  }, { merge: true });
                } catch(err) {
                  console.error('Error updating session:', err);
                }
              }

              // Handle window close to record final session time
              const handleBeforeUnload = () => {
                 const storedSession = sessionStorage.getItem('grimorio_session_id');
                 const storedStart = sessionStorage.getItem('grimorio_session_start');
                 if (storedSession && storedStart) {
                    const start = parseInt(storedStart, 10);
                    const durationMinutes = Math.round((Date.now() - start) / 60000);
                    const sessionRef = doc(collection(db, 'users', user.uid, 'sessions'), storedSession);
                    // use keepalive or fire-and-forget
                    setDoc(sessionRef, {
                      endedAt: serverTimestamp(),
                      durationMinutes: durationMinutes,
                      updatedAt: serverTimestamp()
                    }, { merge: true }).catch(console.error);
                 }
              };
              
              window.addEventListener('beforeunload', handleBeforeUnload);
              
              // Only remove listener, don't unsubscribeDoc here because this is inside the snapshot callback
              return () => {
                window.removeEventListener('beforeunload', handleBeforeUnload);
              };
            } else {
              const newUserData = {
                email: user.email || '',
                purchasedBooks: isUserAdmin ? allPremiumBooks : [],
                hasGuruAccess: isUserAdmin,
                bookProgress: {},
                bookmarks: {},
                exp: 0,
                createdAt: serverTimestamp(),
                updatedAt: serverTimestamp(),
                lastLoginAt: serverTimestamp(),
                loginCount: 1
              };
              try {
                await setDoc(userRef, newUserData);
                setPurchasedBooks(isUserAdmin ? allPremiumBooks : []);
                setHasGuruAccess(isUserAdmin);
                setBookProgress({});
                setBookmarks({});
                setExp(0);
                const newSessionId = Date.now().toString();
                sessionStorage.setItem('grimorio_session_id', newSessionId);
                sessionStorage.setItem('grimorio_session_start', newSessionId);
              } catch (err: any) {
                console.error('Error creating user profile in Firestore:', err);
              }
            }
        }, (error) => {
            console.error('onSnapshot listener error:', error);
        });

        setLoading(false);
        return () => unsubscribeDoc();
      } else {
        if (isDemo) {
          // Mock a user for demo preview
          setUser({
            uid: 'demo-user',
            email: 'demo@grimorio.app',
            displayName: 'Explorador',
            photoURL: ''
          } as User);
          setIsAdmin(false);
          setPurchasedBooks([]);
          setHasGuruAccess(false);
          setBookProgress({});
          setBookmarks({});
          setExp(0);
          setLoading(false);
        } else {
          setUser(null);
          setIsAdmin(false);
          setPurchasedBooks([]);
          setHasGuruAccess(false);
          setBookProgress({});
          setBookmarks({});
          setExp(0);
          setLoading(false);
        }
      }
    });

    return unsubscribe;
  }, [isDemo]);

  const awardExp = async (points: number) => {
    if (!user || user.uid === 'demo-user') return;
    try {
      const userRef = doc(db, 'users', user.uid);
      await setDoc(userRef, {
        exp: increment(points)
      }, { merge: true });
    } catch (err) {
      console.error('Error awarding exp:', err);
    }
  };

  const updateProgress = async (bookId: string, chapterId: string) => {
    if (!user) return;
    try {
      const userRef = doc(db, 'users', user.uid);
      await setDoc(userRef, {
        bookProgress: {
          [bookId]: chapterId
        }
      }, { merge: true });
    } catch (err) {
      console.error('Error updating progress:', err);
    }
  };

  const toggleBookmark = async (bookId: string, chapterId: string) => {
    if (!user) return;
    try {
      const currentBookmarks = bookmarks[bookId] || [];
      const isBookmarked = currentBookmarks.includes(chapterId);
      
      const newBookmarks = isBookmarked 
        ? currentBookmarks.filter(id => id !== chapterId)
        : [...currentBookmarks, chapterId];

      const userRef = doc(db, 'users', user.uid);
      await setDoc(userRef, {
        bookmarks: {
          [bookId]: newBookmarks
        }
      }, { merge: true });
    } catch (err) {
      console.error('Error toggling bookmark:', err);
    }
  };

  const signIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error: any) {
      console.error('Error signing in', error);
      if (error.code === 'auth/popup-closed-by-user') {
          return; // silent ignore if they just closed it
      }
      alert(`Error al iniciar sesión: ${error.message}. Por favor, verifica que habilitaste el proveedor "Google" en la sección de Authentication de tu consola de Firebase.`);
      throw error;
    }
  };

  const signInWithEmail = async (email: string, pass: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, pass);
    } catch (error: any) {
      console.error('Error signing in with email', error);
      throw error;
    }
  };

  const registerWithEmail = async (email: string, pass: string) => {
    try {
      await createUserWithEmailAndPassword(auth, email, pass);
    } catch (error: any) {
      console.error('Error registering with email', error);
      throw error;
    }
  };

  const logOut = async () => {
    try {
      sessionStorage.removeItem('grimorio_session_id');
      sessionStorage.removeItem('grimorio_session_start');
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out', error);
      throw error;
    }
  };

  const simulatePurchase = async (bookId: string) => {
    if (!user) return;
    try {
        const intentRef = doc(collection(db, 'purchaseIntents'));
        await setDoc(intentRef, {
            userId: user.uid,
            email: user.email,
            bookId: bookId,
            status: 'pending',
            createdAt: serverTimestamp()
        });
        
        alert("Hemos registrado tu intención de compra. Serás redirigido a Mercado Pago para abonar.");
        window.location.href = 'https://mpago.la/2axbeHK';
    } catch (e: any) {
      console.error('Error in purchase:', e);
      alert("Error al iniciar la compra: " + e.message);
    }
  };

  const purchaseGuruAccess = async () => {
    if (!user) return;
    try {
        const intentRef = doc(collection(db, 'purchaseIntents'));
        await setDoc(intentRef, {
            userId: user.uid,
            email: user.email,
            bookId: 'guru',
            status: 'pending',
            createdAt: serverTimestamp()
        });
        
        alert("Hemos registrado tu intención de compra. Serás redirigido a Mercado Pago para abonar.");
        window.location.href = 'https://mpago.la/2axbeHK';
    } catch (e: any) {
      console.error('Error purchasing Guru:', e);
      alert("Error al iniciar la compra: " + e.message);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isAdmin, purchasedBooks, hasGuruAccess, bookProgress, bookmarks, exp, loading, signIn, signInWithEmail, registerWithEmail, logOut, simulatePurchase, purchaseGuruAccess, updateProgress, toggleBookmark, awardExp }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

