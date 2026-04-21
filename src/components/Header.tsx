import { Search, Bookmark, ShoppingBag, LibraryBig, LogIn, UserCircle, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  onShowFavorites: () => void;
  onShowShoppingList: () => void;
  onShowLibrary: () => void;
  onHome: () => void;
  isFavoritesView: boolean;
  isLibraryView: boolean;
  shoppingListCount: number;
}

export function Header({ searchQuery, setSearchQuery, onShowFavorites, onShowShoppingList, onShowLibrary, onHome, isFavoritesView, isLibraryView, shoppingListCount }: HeaderProps) {
  const { user, signIn, logOut } = useAuth();
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-surface/80 backdrop-blur-md border-b border-outline-variant/20 px-4 md:px-12 h-20 flex flex-wrap sm:flex-nowrap items-center justify-between">
      <div className="flex items-center gap-4 cursor-pointer pt-2 sm:pt-0" onClick={onHome}>
        <span className="font-headline text-xl sm:text-2xl text-primary flex items-center gap-2">
            El Grimorio
        </span>
      </div>

      <div className="flex-1 w-full order-last sm:order-none mt-2 sm:mt-0 max-w-xl mx-0 sm:mx-8 relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-tertiary/40" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Buscar receta, dolencia..."
          className="w-full bg-surface-container-lowest border border-outline-variant/30 text-tertiary font-body py-2 pl-10 pr-4 focus:outline-none focus:border-primary/50 transition-colors placeholder:text-tertiary/30 italic text-sm sm:text-base rounded-md"
        />
      </div>

      <div className="flex items-center gap-4 sm:gap-6 pt-2 sm:pt-0">
          {/* USER AUTH AREA */}
          <div className="relative">
              {user ? (
                  <div className="relative">
                      <button 
                          onClick={() => setShowUserMenu(!showUserMenu)}
                          className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 overflow-hidden border border-primary/20 hover:border-primary transition-colors"
                      >
                         {user.photoURL ? (
                             <img src={user.photoURL} alt={user.displayName || 'User'} className="w-full h-full object-cover" />
                         ) : (
                             <UserCircle className="w-6 h-6 text-primary" />
                         )}
                      </button>
                      <AnimatePresence>
                         {showUserMenu && (
                             <motion.div
                               initial={{ opacity: 0, y: 10, scale: 0.95 }}
                               animate={{ opacity: 1, y: 0, scale: 1 }}
                               exit={{ opacity: 0, y: 10, scale: 0.95 }}
                               className="absolute right-0 top-12 w-48 bg-[#fdfaf2] rounded-lg shadow-xl border border-[#d6c7af] overflow-hidden flex flex-col py-2"
                             >
                               <div className="px-4 py-2 border-b border-[#d6c7af]/50 mb-1">
                                  <p className="font-headline text-sm font-bold text-[#2c1600] truncate">{user.displayName}</p>
                                  <p className="font-body text-xs text-[#8a6a4b] truncate">{user.email}</p>
                               </div>
                               <button 
                                 onClick={() => { logOut(); setShowUserMenu(false); }}
                                 className="flex items-center gap-2 px-4 py-2 text-sm text-[#8a3c1f] hover:bg-[#8a3c1f]/10 transition-colors"
                               >
                                  <LogOut className="w-4 h-4" />
                                  <span>Cerrar Sesión</span>
                               </button>
                             </motion.div>
                         )}
                      </AnimatePresence>
                  </div>
              ) : (
                  <button 
                      onClick={signIn}
                      className="flex items-center gap-2 font-accent italic text-primary hover:text-white bg-primary/10 hover:bg-primary border border-primary/30 px-3 py-1.5 rounded-full transition-all text-sm"
                  >
                      <LogIn className="w-4 h-4" />
                      <span className="hidden sm:inline">Ingresar</span>
                  </button>
              )}
          </div>
          <div className="w-[1px] h-6 bg-tertiary/20"></div>

          {/* MENUS */}
          <button
            onClick={onShowLibrary}
            className={`flex items-center gap-2 font-accent italic transition-colors ${isLibraryView ? 'text-primary' : 'text-tertiary/60 hover:text-primary'}`}
            title="Biblioteca de Grimorios"
          >
            <LibraryBig className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="hidden lg:inline text-sm">Biblioteca</span>
          </button>

          <button
            onClick={onShowShoppingList}
            className={`relative flex items-center gap-2 font-accent italic transition-colors text-tertiary/60 hover:text-primary`}
            title="Lista de Insumos"
          >
            <div className="relative">
               <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6" />
               {shoppingListCount > 0 && (
                 <span className="absolute -top-1 -right-1 bg-[#8a3c1f] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-sans font-bold">
                   {shoppingListCount}
                 </span>
               )}
            </div>
            <span className="hidden lg:inline text-sm">Insumos</span>
          </button>
          
          <button
            onClick={onShowFavorites}
            className={`flex items-center gap-2 font-accent italic transition-colors ${isFavoritesView ? 'text-primary' : 'text-tertiary/60 hover:text-primary'}`}
            title="Fórmulas Guardadas"
          >
            <Bookmark className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="hidden lg:inline text-sm">Guardadas</span>
          </button>
      </div>
    </header>
  );
}
