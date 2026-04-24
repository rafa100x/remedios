import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { LogIn, UserPlus, BookOpen, Lock, Mail, Key } from 'lucide-react';
import { trackEvent } from '../lib/analytics';

export function LoginScreen() {
  const { signIn, signInWithEmail, registerWithEmail } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    
    try {
      if (isLogin) {
        await signInWithEmail(email, password);
        trackEvent('login', { method: 'email' });
      } else {
        await registerWithEmail(email, password);
        trackEvent('sign_up', { method: 'email' });
      }
    } catch (err: any) {
      if (err.code === 'auth/email-already-in-use') {
        setError('Este correo electrónico ya está registrado.');
      } else if (err.code === 'auth/wrong-password' || err.code === 'auth/user-not-found' || err.code === 'auth/invalid-credential') {
        setError('Email o contraseña incorrectos.');
      } else if (err.code === 'auth/weak-password') {
        setError('La contraseña debe tener al menos 6 caracteres.');
      } else {
        setError('Hubo un error. Por favor intenta nuevamente.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signIn();
      trackEvent('login', { method: 'google' });
    } catch (err) {
      // Error is handled in AuthContext
    }
  };

  return (
    <div className="min-h-screen bg-surface flex items-center justify-center p-4 relative overflow-hidden font-body text-tertiary">
      {/* Background aesthetics */}
      <div className="bg-grain absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="glass-panel ghost-border p-8 md:p-12 max-w-md w-full relative z-10 transition-all duration-300 rounded-2xl">
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(246,187,128,0.3)] wood-highlight">
            <BookOpen className="w-8 h-8 text-surface-container-lowest" />
          </div>
        </div>
        
        <h1 className="font-headline text-4xl text-center text-primary mb-2 text-shadow-glow">
          Maestro Ancestral
        </h1>
        <p className="text-secondary text-center mb-8 font-medium">
          {isLogin ? 'Ingresa para acceder a tus conocimientos' : 'Descubre los secretos de la medicina natural'}
        </p>

        {error && (
          <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-3 mb-6 flex items-center gap-2 text-sm rounded">
            <Lock className="w-4 h-4 shrink-0" />
            <p>{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-primary mb-1">Correo Electrónico</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-tertiary/50" />
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-surface-container-lowest border border-outline-variant/30 text-tertiary px-10 py-3 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder:text-tertiary/30"
                placeholder="tu@correo.com"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold text-primary mb-1">Contraseña</label>
            <div className="relative">
              <Key className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-tertiary/50" />
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-surface-container-lowest border border-outline-variant/30 text-tertiary px-10 py-3 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder:text-tertiary/30"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full btn-primary font-bold py-3 px-4 flex justify-center items-center gap-2 mt-6 rounded-lg disabled:opacity-70"
          >
            {loading ? (
              <div className="w-6 h-6 border-2 border-surface-container-lowest border-t-transparent rounded-full animate-spin"></div>
            ) : (
               isLogin ? <><LogIn className="w-5 h-5" /> Iniciar Sesión</> : <><UserPlus className="w-5 h-5" /> Crear Cuenta</>
            )}
          </button>
        </form>

        <div className="mt-8 flex items-center">
          <div className="flex-1 border-t border-outline-variant/40"></div>
          <span className="px-4 text-xs font-bold text-tertiary/40 uppercase tracking-wider">O</span>
          <div className="flex-1 border-t border-outline-variant/40"></div>
        </div>

        <button 
          onClick={handleGoogleSignIn}
          type="button"
          className="w-full bg-surface-container hover:bg-surface-container-high border border-outline-variant/40 text-tertiary font-bold py-3 px-4 flex justify-center items-center gap-2 transition-colors mt-6 rounded-lg shadow-sm"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            <path d="M1 1h22v22H1z" fill="none"/>
          </svg>
          Continuar con Google
        </button>

        <p className="mt-8 text-center text-sm">
          {isLogin ? '¿No tienes cuenta? ' : '¿Ya tienes una cuenta? '}
          <button 
            type="button"
            onClick={() => setIsLogin(!isLogin)} 
            className="text-primary hover:text-secondary font-bold underline underline-offset-4 decoration-primary/30 hover:decoration-secondary transition-colors"
          >
            {isLogin ? 'Regístrate aquí' : 'Inicia Sesión'}
          </button>
        </p>
      </div>
    </div>
  );
}
