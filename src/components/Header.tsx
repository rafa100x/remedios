import { Search, Bookmark } from 'lucide-react';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  onShowFavorites: () => void;
  onHome: () => void;
  isFavoritesView: boolean;
}

export function Header({ searchQuery, setSearchQuery, onShowFavorites, onHome, isFavoritesView }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-surface/80 backdrop-blur-md border-b border-outline-variant/20 px-4 md:px-12 h-20 flex items-center justify-between">
      <div className="flex items-center gap-4 cursor-pointer" onClick={onHome}>
        <span className="font-headline text-2xl text-primary">El Grimorio</span>
      </div>

      <div className="flex-1 max-w-xl mx-4 md:mx-8 relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-tertiary/40" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Buscar por receta, dolencia o ingrediente..."
          className="w-full bg-surface-container-lowest border border-outline-variant/30 text-tertiary font-body py-2 pl-10 pr-4 focus:outline-none focus:border-primary/50 transition-colors placeholder:text-tertiary/30 italic"
        />
      </div>

      <button
        onClick={onShowFavorites}
        className={`flex items-center gap-2 font-accent italic transition-colors ${isFavoritesView ? 'text-primary' : 'text-tertiary/60 hover:text-primary'}`}
      >
        <Bookmark className="w-5 h-5" />
        <span className="hidden md:inline">Fórmulas Guardadas</span>
      </button>
    </header>
  );
}
