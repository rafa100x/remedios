import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { UserCircle, Mail, BookOpen, Crown, Star } from 'lucide-react';
import { trackEvent } from '../lib/analytics';
import { calculateRank, getNextRank } from '../lib/gamification';

const PREMIUM_BOOKS = [
  { id: 'presion', title: 'Tensión Cero: Hipertensión' },
  { id: 'arte_preparar', title: 'El Arte de Preparar' },
  { id: 'menopausia', title: 'Armonía Natural: Menopausia' },
  { id: 'botiquin', title: 'Mi Botiquín Natural' }
];

export function ProfileView() {
  const { user, purchasedBooks, logOut, exp } = useAuth();
  
  const currentRank = calculateRank(exp);
  const nextRank = getNextRank(currentRank);
  
  const progressToNext = nextRank 
    ? Math.min(100, Math.max(0, ((exp - currentRank.minExp) / (nextRank.minExp - currentRank.minExp)) * 100))
    : 100;

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
          <div className="w-24 h-24 rounded-full bg-surface-container flex items-center justify-center shrink-0 overflow-hidden shadow-inner border border-outline-variant/30 relative">
            {user?.photoURL ? (
              <img src={user.photoURL} alt="Perfil" className="w-full h-full object-cover" />
            ) : (
              <UserCircle className="w-16 h-16 text-primary" />
            )}
            <div className="absolute -bottom-2 -right-2 bg-accent text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-md border-2 border-surface">
              {currentRank.level}
            </div>
          </div>
          
          <div className="flex-1 w-full">
            <h3 className="text-2xl font-bold text-primary mb-2">
              {user?.displayName || 'Explorador Natural'}
            </h3>
            <div className="flex items-center gap-2 text-secondary mb-6 font-medium">
              <Mail className="w-4 h-4" />
              <span>{user?.email || 'Sin correo asociado'}</span>
            </div>

            <div className="bg-surface-container/50 rounded-xl p-5 border border-outline-variant/30 mb-6">
              <div className="flex justify-between items-end mb-2">
                <div>
                  <span className="text-sm font-bold text-tertiary uppercase tracking-wider mb-1 block">Nivel Actual</span>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{currentRank.icon}</span>
                    <span className="text-xl font-bold text-primary">{currentRank.title}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black text-secondary">{exp}</span>
                  <span className="text-sm font-medium text-tertiary ml-1">XP</span>
                </div>
              </div>
              
              {nextRank && (
                <div className="mt-4">
                  <div className="flex justify-between text-xs font-medium text-tertiary mb-1">
                    <span>{exp - currentRank.minExp} XP conseguidos</span>
                    <span>{nextRank.minExp - exp} XP para {nextRank.title}</span>
                  </div>
                  <div className="h-2 w-full bg-surface rounded-full overflow-hidden border border-outline-variant/20">
                    <div 
                      className="h-full bg-gradient-to-r from-secondary to-primary rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${progressToNext}%` }}
                    />
                  </div>
                </div>
              )}
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
