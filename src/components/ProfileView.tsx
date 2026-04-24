import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { UserCircle, Mail, BookOpen, Crown } from 'lucide-react';
import { trackEvent } from '../lib/analytics';

const PREMIUM_BOOKS = [
  { id: 'presion', title: 'Tensión Cero: Hipertensión' },
  { id: 'arte_preparar', title: 'El Arte de Preparar' },
  { id: 'menopausia', title: 'Armonía Natural: Menopausia' },
  { id: 'botiquin', title: 'Mi Botiquín Natural' }
];

export function ProfileView() {
  const { user, purchasedBooks, logOut } = useAuth();

  const handleLogout = () => {
    logOut();
    trackEvent('logout');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center gap-4 mb-8">
        <Crown className="w-10 h-10 text-primary" />
        <h2 className="font-headline text-4xl md:text-5xl text-primary text-shadow-glow">Mi Perfil</h2>
      </div>

      <div className="glass-panel ghost-border rounded-xl p-8 mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] rounded-full pointer-events-none"></div>
        
        <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
          <div className="w-24 h-24 rounded-full bg-surface-container flex items-center justify-center shrink-0 overflow-hidden shadow-inner border border-outline-variant/30">
            {user?.photoURL ? (
              <img src={user.photoURL} alt="Perfil" className="w-full h-full object-cover" />
            ) : (
              <UserCircle className="w-16 h-16 text-primary" />
            )}
          </div>
          
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-primary mb-2">
              {user?.displayName || 'Explorador Natural'}
            </h3>
            <div className="flex items-center gap-2 text-secondary mb-6 font-medium">
              <Mail className="w-4 h-4" />
              <span>{user?.email || 'Sin correo asociado'}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {/* Progress / Stats */}
               <div className="bg-surface-container rounded-lg p-4 shadow-sm border border-outline-variant/30">
                  <div className="flex items-center gap-2 mb-2 text-primary font-bold">
                    <BookOpen className="w-5 h-5" />
                    <span>Libros Desbloqueados</span>
                  </div>
                  <p className="text-3xl font-headline text-secondary">
                    {purchasedBooks.length} <span className="text-sm font-body text-tertiary">/ {PREMIUM_BOOKS.length}</span>
                  </p>
               </div>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-primary mb-6">Estado de la Colección Premium</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {PREMIUM_BOOKS.map(book => {
          const isUnlocked = purchasedBooks.includes(book.id);
          return (
            <div key={book.id} className={`p-4 rounded-xl border transition-all ${isUnlocked ? 'glass-panel border-primary/30 shadow-md' : 'bg-surface-container border-outline-variant/20 opacity-80'}`}>
              <div className="flex justify-between items-start mb-2">
                <BookOpen className={`w-6 h-6 ${isUnlocked ? 'text-primary' : 'text-tertiary/40'}`} />
                {isUnlocked && <Crown className="w-5 h-5 text-accent" />}
              </div>
              <h4 className={`font-bold text-lg mb-1 leading-tight ${isUnlocked ? 'text-primary' : 'text-tertiary/60'}`}>{book.title}</h4>
              <p className={`text-sm font-medium ${isUnlocked ? 'text-secondary' : 'text-tertiary/50'}`}>
                {isUnlocked ? 'Desbloqueado' : 'Bloqueado'}
              </p>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center border-t border-outline-variant/40 pt-8">
        <button 
          onClick={handleLogout}
          className="bg-red-900/20 hover:bg-red-900/30 text-red-400 font-bold py-3 px-8 rounded-full border border-red-900/30 transition-colors"
        >
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
}
