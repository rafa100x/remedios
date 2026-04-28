import { Search, Bookmark, ShoppingBag, LibraryBig, LogIn, UserCircle, LogOut, Info, Home, Sparkles, Users } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  onShowFavorites: () => void;
  onShowShoppingList: () => void;
  onShowLibrary: () => void;
  onShowProfile: () => void;
  onShowAdmin?: () => void;
  onShowGuru?: () => void;
  onHome: () => void;
  onShowInfo?: () => void;
  isFavoritesView: boolean;
  isLibraryView: boolean;
  shoppingListCount: number;
  hideSearch?: boolean;
}

export function Header({ searchQuery, setSearchQuery, onShowFavorites, onShowShoppingList, onShowLibrary, onShowProfile, onShowAdmin, onShowGuru, onHome, onShowInfo, isFavoritesView, isLibraryView, shoppingListCount, hideSearch }: HeaderProps) {
  const { user, isAdmin, signIn, logOut } = useAuth();
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <>
      {/* 
        TOP HEADER 
        Desktop: Full nav
        Mobile: Logo, Search, and User Profile 
      */}
      <header className={`fixed top-0 left-0 right-0 z-40 bg-[#fdfaf2] shadow-sm border-b border-[#d6c7af] px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between transition-all ${hideSearch ? 'h-[70px] sm:h-20' : 'h-[110px] sm:h-20'}`}>
        
        {/* Top Row (Mobile & Desktop) */}
        <div className="w-full sm:w-auto flex items-center justify-between py-3 sm:py-0">
          <button onClick={onHome} className="font-headline text-2xl md:text-3xl font-bold text-[#201004] hover:text-[#8a3c1f] transition-colors">
            El Grimorio
          </button>

          {/* Mobile Auth/Info (Desktop has it on the right) */}
          <div className="flex sm:hidden items-center gap-3">
             <button 
                onClick={onShowInfo}
                className="flex items-center gap-1.5 text-[#5a3a22] font-accent italic bg-[#f4ead0] px-3 py-1.5 rounded-full text-sm"
             >
                <Info className="w-4 h-4" />
                <span>Ayuda</span>
             </button>

             {user ? (
               <div className="relative z-[60]">
                 <button onClick={() => setShowUserMenu(!showUserMenu)} className="w-9 h-9 rounded-full bg-[#f4ead0] overflow-hidden border border-[#8a6a4b] flex items-center justify-center">
                    {user.photoURL ? <img src={user.photoURL} alt="User" /> : <UserCircle className="w-6 h-6 text-[#5a3a22]" />}
                 </button>
                 <AnimatePresence>
                    {showUserMenu && (
                          <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          className="absolute right-0 top-12 w-48 bg-white rounded-lg shadow-[0_4px_20px_rgba(44,22,0,0.15)] border border-[#d6c7af] overflow-hidden flex flex-col py-2 z-50"
                        >
                          <button onClick={() => { onShowProfile(); setShowUserMenu(false); }} className="flex items-center gap-2 px-4 py-3 text-sm font-bold text-[#5a3a22] hover:bg-[#fdfaf2] border-b border-[#d6c7af]">
                             <UserCircle className="w-5 h-5" /> Mi Perfil
                          </button>
                          {isAdmin && onShowAdmin && (
                            <button onClick={() => { onShowAdmin(); setShowUserMenu(false); }} className="flex items-center gap-2 px-4 py-3 text-sm font-bold text-[#201004] hover:bg-[#fdfaf2] border-b border-[#d6c7af]">
                               <Search className="w-5 h-5" /> Admin Dashboard
                            </button>
                          )}
                          <button onClick={() => { logOut(); setShowUserMenu(false); }} className="flex items-center gap-2 px-4 py-3 text-sm font-bold text-[#8a3c1f] hover:bg-[#fdfaf2]">
                             <LogOut className="w-5 h-5" /> Cerrar Sesión
                          </button>
                        </motion.div>
                    )}
                 </AnimatePresence>
               </div>
             ) : (
               <button onClick={signIn} className="text-[#8a3c1f] font-bold text-sm bg-[#8a3c1f]/10 px-3 py-1.5 rounded-full">
                  Ingresar
               </button>
             )}
          </div>
        </div>

        {/* Search Bar - Center on Desktop, Bottom Row on Mobile */}
        {!hideSearch && (
          <div className="w-full sm:max-w-md md:max-w-lg relative mb-3 sm:mb-0 sm:mx-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8a6a4b]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por Ej: tos, estómago..."
              className="w-full bg-white border border-[#d6c7af] text-[#2c1600] font-body py-2.5 pl-10 pr-4 rounded-xl focus:outline-none focus:border-[#8a6a4b] transition-colors placeholder:text-[#8a6a4b]/60 text-base"
            />
          </div>
        )}

        {/* Desktop Nav Actions */}
        <div className="hidden sm:flex items-center gap-6">
            <button onClick={onShowGuru} className="flex items-center gap-2 text-[#d4af37] hover:text-[#e4c042] font-bold transition-colors">
              <Sparkles className="w-5 h-5" />
              <span className="drop-shadow-sm">Gurú</span>
            </button>
            <button onClick={onShowInfo} className="flex items-center gap-2 text-[#5a3a22] hover:text-[#8a3c1f] font-bold transition-colors">
              <Info className="w-5 h-5" />
              <span>Ayuda</span>
            </button>
            <button onClick={onShowLibrary} className={`flex items-center gap-2 font-bold transition-colors ${isLibraryView ? 'text-[#8a3c1f]' : 'text-[#5a3a22] hover:text-[#8a3c1f]'}`}>
              <LibraryBig className="w-5 h-5" />
              <span>Biblioteca</span>
            </button>
            <button onClick={onShowShoppingList} className="relative flex items-center gap-2 text-[#5a3a22] hover:text-[#8a3c1f] font-bold transition-colors">
              <div className="relative">
                 <ShoppingBag className="w-5 h-5" />
                 {shoppingListCount > 0 && (
                   <span className="absolute -top-1.5 -right-1.5 bg-[#8a3c1f] text-white text-[11px] w-4.5 h-4.5 flex items-center justify-center rounded-full font-bold px-1">
                     {shoppingListCount}
                   </span>
                 )}
              </div>
              <span>Comprar</span>
            </button>
            <button onClick={onShowFavorites} className={`flex items-center gap-2 font-bold transition-colors ${isFavoritesView ? 'text-[#8a3c1f]' : 'text-[#5a3a22] hover:text-[#8a3c1f]'}`}>
              <Bookmark className="w-5 h-5" />
              <span>Mis Recetas</span>
            </button>

            <div className="w-[1px] h-8 bg-[#d6c7af]"></div>

            {/* Desktop Auth */}
            <div className="relative z-[60]">
                {user ? (
                    <div className="relative">
                        <button 
                            onClick={() => setShowUserMenu(!showUserMenu)}
                            className="flex items-center gap-2 bg-[#f4ead0] pl-2 pr-4 py-1.5 rounded-full hover:bg-[#e8dbc3] transition-colors"
                        >
                           <div className="w-8 h-8 rounded-full overflow-hidden border border-[#8a6a4b]">
                             {user.photoURL ? <img src={user.photoURL} alt="User" /> : <UserCircle className="w-full h-full text-[#5a3a22]" />}
                           </div>
                           <span className="font-bold text-[#5a3a22] text-sm max-w-[100px] truncate">{user.displayName?.split(' ')[0] || 'Perfil'}</span>
                        </button>
                        <AnimatePresence>
                           {showUserMenu && (
                               <motion.div
                                 initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                 animate={{ opacity: 1, y: 0, scale: 1 }}
                                 exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                 className="absolute right-0 top-12 w-48 bg-white rounded-lg shadow-[0_4px_20px_rgba(44,22,0,0.15)] border border-[#d6c7af] overflow-hidden flex flex-col py-2 z-50"
                               >
                                 <button onClick={() => { onShowProfile(); setShowUserMenu(false); }} className="flex items-center gap-2 px-4 py-3 text-sm font-bold text-[#5a3a22] hover:bg-[#fdfaf2] border-b border-[#d6c7af]">
                                    <UserCircle className="w-5 h-5" /> Mi Perfil
                                 </button>
                                 {isAdmin && onShowAdmin && (
                                   <button onClick={() => { onShowAdmin(); setShowUserMenu(false); }} className="flex items-center gap-2 px-4 py-3 text-sm font-bold text-[#201004] hover:bg-[#fdfaf2] border-b border-[#d6c7af]">
                                      <Search className="w-5 h-5" /> Admin Dashboard
                                   </button>
                                 )}
                                 <button onClick={() => { logOut(); setShowUserMenu(false); }} className="flex items-center gap-2 px-4 py-3 text-sm font-bold text-[#8a3c1f] hover:bg-[#fdfaf2]">
                                    <LogOut className="w-5 h-5" /> Cerrar Sesión
                                 </button>
                               </motion.div>
                           )}
                        </AnimatePresence>
                    </div>
                ) : (
                    <button onClick={signIn} className="flex items-center gap-2 font-bold text-white bg-[#8a3c1f] hover:bg-[#5a2714] px-5 py-2 rounded-full transition-all">
                        <LogIn className="w-4 h-4" /> Ingresar
                    </button>
                )}
            </div>
        </div>
      </header>

      {/* 
        MOBILE BOTTOM NAVIGATION BAR 
        Highly accessible, large text, fixed to bottom.
      */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#1a0f08] border-t border-[#8a6a4b]/30 h-[70px] pb-safe pt-1 px-2 flex justify-around items-start shadow-[0_-10px_30px_rgba(0,0,0,0.3)]">
          
          <button onClick={onHome} className={`flex flex-col items-center p-2 min-w-[60px] ${!isFavoritesView && !isLibraryView && !searchQuery ? 'text-[#d4af37]' : 'text-[#f4ead0]/60'}`}>
             <Home className="w-6 h-6 mb-1" />
             <span className="text-[10px] font-bold tracking-wide">Inicio</span>
          </button>
          
          <button onClick={onShowLibrary} className={`flex flex-col items-center p-2 min-w-[60px] ${isLibraryView ? 'text-[#d4af37]' : 'text-[#f4ead0]/60'}`}>
             <LibraryBig className="w-6 h-6 mb-1" />
             <span className="text-[10px] font-bold tracking-wide">Biblioteca</span>
          </button>

          <button onClick={onShowGuru} className="flex flex-col items-center p-2 min-w-[60px] text-[#d4af37]/80 hover:text-[#d4af37]">
             <Sparkles className="w-6 h-6 mb-1" />
             <span className="text-[10px] font-bold tracking-wide">Gurú</span>
          </button>

          <button onClick={onShowShoppingList} className="flex flex-col items-center p-2 min-w-[60px] text-[#f4ead0]/60">
             <div className="relative">
                <ShoppingBag className="w-6 h-6 mb-1" />
                {shoppingListCount > 0 && (
                  <span className="absolute -top-1 -right-2 bg-[#d4af37] text-[#1a0f08] text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
                    {shoppingListCount}
                  </span>
                )}
             </div>
             <span className="text-[10px] font-bold tracking-wide">Comprar</span>
          </button>

          <button onClick={onShowFavorites} className={`flex flex-col items-center p-2 min-w-[60px] ${isFavoritesView ? 'text-[#d4af37]' : 'text-[#f4ead0]/60'}`}>
             <Bookmark className="w-6 h-6 mb-1" />
             <span className="text-[10px] font-bold tracking-wide">Guardardos</span>
          </button>

      </div>
    </>
  );
}
