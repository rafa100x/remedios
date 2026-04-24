import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { doc, getDoc, setDoc, serverTimestamp, onSnapshot } from 'firebase/firestore';
import { auth, googleProvider, db, handleFirestoreError } from '../lib/firebase';

interface AuthContextType {
  user: User | null;
  purchasedBooks: string[];
  loading: boolean;
  signIn: () => Promise<void>;
  logOut: () => Promise<void>;
  simulatePurchase: (bookId: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [purchasedBooks, setPurchasedBooks] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user);
      if (user) {
        const adminEmails = ['rafaelvidetta@gmail.com', 'rafaelvidetta32@gmail.com'];
        const isAdmin = adminEmails.includes((user.email || '').trim().toLowerCase());
        const allPremiumBooks = ['presion', 'arte_preparar', 'menopausia', 'botiquin'];
        
        if (isAdmin) {
          setPurchasedBooks(allPremiumBooks);
        }

        // Fetch user profile from Firestore or create it
        const userRef = doc(db, 'users', user.uid);
        
        // Listen to changes in real-time so purchases unlock instantly
        const unsubscribeDoc = onSnapshot(userRef, async (docSnap) => {
            if (docSnap.exists()) {
              const data = docSnap.data();
              setPurchasedBooks(isAdmin ? Array.from(new Set([...(data.purchasedBooks || []), ...allPremiumBooks])) : (data.purchasedBooks || []));
            } else {
              // Create user profile
              const newUserData = {
                email: user.email || '',
                purchasedBooks: isAdmin ? allPremiumBooks : [],
                createdAt: serverTimestamp(),
                updatedAt: serverTimestamp()
              };
              try {
                await setDoc(userRef, newUserData);
                setPurchasedBooks(isAdmin ? allPremiumBooks : []);
              } catch (err: any) {
                console.error('Error creating user profile in Firestore:', err);
                // Optionally handle/log with handleFirestoreError if needed,
                // but don't break the whole app experience
              }
            }
        }, (error) => {
            console.error('onSnapshot listener error:', error);
            // Catch permission denied explicitly
        });

        setLoading(false);
        return () => unsubscribeDoc();
      } else {
        setPurchasedBooks([]);
        setLoading(false);
      }
    });

    return unsubscribe;
  }, []);

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

  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out', error);
      throw error;
    }
  };

  const simulatePurchase = async (bookId: string) => {
      alert("Configura tu mercado pago. Mientras tanto, tu libro se desbloqueará temporalmente con propósitos de prueba.");
      setPurchasedBooks(prev => [...prev, bookId]);
  };

  return (
    <AuthContext.Provider value={{ user, purchasedBooks, loading, signIn, logOut, simulatePurchase }}>
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
