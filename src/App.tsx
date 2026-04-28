import { useState, useMemo, useEffect } from 'react';
import { Category, Recipe, categories } from './data/recipes';
import { Hero } from './components/Hero';
import { Cabinet } from './components/Cabinet';
import { CategoryDetail } from './components/CategoryDetail';
import { RecipeModal } from './components/RecipeModal';
import { Header } from './components/Header';
import { RecipeList } from './components/RecipeList';
import { useUserData } from './hooks/useUserData';
import { ShoppingListModal } from './components/ShoppingListModal';
import { Library } from './components/Library';
import { PaymentModal } from './components/PremiumBookModal';
import { BookReader } from './components/BookReader';
import { InfoModal } from './components/InfoModal';
import { DownloadsModal } from './components/DownloadsModal';
import { trackEvent } from './lib/analytics';
import { useAuth } from './contexts/AuthContext';
import { LoginScreen } from './components/LoginScreen';
import { ProfileView } from './components/ProfileView';
import { AdminDashboard } from './components/AdminDashboard';
import { GuruAI } from './components/GuruAI';

export default function App() {
  const { user } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [selectedBook, setSelectedBook] = useState<any>(null); // Type any for now to avoid importing interface if not exported
  const [readingBookId, setReadingBookId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [view, setView] = useState<'home' | 'favorites' | 'library' | 'profile' | 'admin' | 'guru'>('home');
  const [showShoppingList, setShowShoppingList] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [showDownloads, setShowDownloads] = useState(false);

  const { favorites, toggleFavorite, shoppingList, toggleShoppingList, ratings, rateRecipe } = useUserData();

  const allRecipes = useMemo(() => categories.flatMap(c => c.recipes), []);

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    
    const normalize = (str: string) => {
      return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    };
    
    const q = normalize(searchQuery);

    return allRecipes.filter(r =>
      normalize(r.title).includes(q) ||
      normalize(r.purpose).includes(q) ||
      (r.instructions && normalize(r.instructions).includes(q)) ||
      (r.notes && normalize(r.notes).includes(q)) ||
      r.ingredients.some(i => normalize(i.es).includes(q) || normalize(i.la).includes(q))
    );
  }, [searchQuery, allRecipes]);

  const favoriteRecipes = useMemo(() => {
    return allRecipes.filter(r => favorites.includes(r.id));
  }, [favorites, allRecipes]);

  const shoppingRecipes = useMemo(() => {
    return allRecipes.filter(r => shoppingList.includes(r.id));
  }, [shoppingList, allRecipes]);

  const handleHome = () => {
    setSearchQuery('');
    setView('home');
    setSelectedCategory(null);
    trackEvent('view_home', { event_category: 'navigation' });
  };

  const handleShowFavorites = () => {
    setSearchQuery('');
    setView('favorites');
    setSelectedCategory(null);
    trackEvent('view_favorites', { event_category: 'navigation' });
  };

  const handleShowLibrary = () => {
    setSearchQuery('');
    setView('library');
    setSelectedCategory(null);
    trackEvent('view_library', { event_category: 'navigation', event_label: 'Biblioteca' });
  };

  const handleShowProfile = () => {
    setSearchQuery('');
    setView('profile');
    setSelectedCategory(null);
    trackEvent('view_profile', { event_category: 'navigation' });
  };

  const handleShowAdmin = () => {
    setSearchQuery('');
    setView('admin');
    setSelectedCategory(null);
    trackEvent('view_admin', { event_category: 'navigation' });
  };

  const handleShowGuru = () => {
    setSearchQuery('');
    setView('guru');
    setSelectedCategory(null);
    trackEvent('view_guru', { event_category: 'navigation' });
  };

  useEffect(() => {
    if (searchQuery.trim().length > 2) {
      const timeout = setTimeout(() => {
        trackEvent('search', { search_term: searchQuery });
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [searchQuery]);

  useEffect(() => {
    if (selectedRecipe) {
      trackEvent('view_recipe', { event_category: 'engagement', event_label: selectedRecipe.title });
    }
  }, [selectedRecipe]);

  if (!user) {
    return <LoginScreen />;
  }

  return (
    <div className="min-h-screen bg-surface text-tertiary font-body relative overflow-x-hidden selection:bg-primary-container selection:text-primary pt-[110px] sm:pt-20 pb-24 sm:pb-0">
      <div className="bg-grain absolute inset-0 pointer-events-none z-50"></div>
      
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onShowFavorites={handleShowFavorites}
        onShowShoppingList={() => setShowShoppingList(true)}
        onShowLibrary={handleShowLibrary}
        onShowProfile={handleShowProfile}
        onShowAdmin={handleShowAdmin}
        onShowGuru={handleShowGuru}
        onHome={handleHome}
        onShowInfo={() => setShowInfo(true)}
        isFavoritesView={view === 'favorites' && !searchQuery}
        isLibraryView={view === 'library' && !searchQuery}
        shoppingListCount={shoppingList.length}
      />

      {searchQuery.trim() ? (
        <main className="max-w-7xl mx-auto px-4 md:px-12 py-12 relative z-10 bg-[#1a0f08] min-h-screen">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')] opacity-30 mix-blend-overlay pointer-events-none z-0"></div>
          <h2 className="font-headline text-4xl text-[#d4af37] mb-8 relative z-10 text-center border-b border-[#d4af37]/20 pb-4">Resultados de la búsqueda</h2>
          <RecipeList
            recipes={searchResults}
            onSelectRecipe={setSelectedRecipe}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />
        </main>
      ) : view === 'favorites' ? (
        <main className="max-w-7xl mx-auto px-4 md:px-12 py-12 relative z-10 bg-[#1a0f08] min-h-screen">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')] opacity-30 mix-blend-overlay pointer-events-none z-0"></div>
          <h2 className="font-headline text-4xl text-[#d4af37] mb-8 relative z-10 text-center border-b border-[#d4af37]/20 pb-4">Fórmulas Guardadas</h2>
          <RecipeList
            recipes={favoriteRecipes}
            onSelectRecipe={setSelectedRecipe}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />
        </main>
      ) : view === 'library' ? (
        <main className="w-full">
            <Library onSelectBook={setSelectedBook} onShowDownloads={() => setShowDownloads(true)} />
        </main>
      ) : view === 'profile' ? (
        <main className="w-full">
            <ProfileView />
        </main>
      ) : view === 'admin' ? (
        <main className="w-full">
            <AdminDashboard />
        </main>
      ) : view === 'guru' ? (
        <main className="w-full relative z-10 bg-[#1a0f08] min-h-screen">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')] opacity-30 mix-blend-overlay pointer-events-none z-0"></div>
            <div className="relative z-10">
               <GuruAI onSelectRecipe={setSelectedRecipe} />
            </div>
        </main>
      ) : !selectedCategory ? (
        <>
          <Hero onNavigateToLibrary={handleShowLibrary} />
          <Cabinet onSelectCategory={setSelectedCategory} />
        </>
      ) : (
        <CategoryDetail 
          category={selectedCategory} 
          onBack={() => setSelectedCategory(null)}
          onSelectRecipe={setSelectedRecipe}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />
      )}

      {selectedRecipe && (
        <RecipeModal 
          recipe={selectedRecipe} 
          onClose={() => setSelectedRecipe(null)} 
          rating={ratings[selectedRecipe.id] || 0}
          onRate={(rating) => {
            rateRecipe(selectedRecipe.id, rating);
            trackEvent('rate_recipe', { event_category: 'engagement', event_label: selectedRecipe.title, value: rating });
          }}
          isFavorite={favorites.includes(selectedRecipe.id)}
          onToggleFavorite={() => {
            toggleFavorite(selectedRecipe.id);
            trackEvent(favorites.includes(selectedRecipe.id) ? 'remove_favorite' : 'add_favorite', { event_category: 'engagement', event_label: selectedRecipe.title });
          }}
          isShopping={shoppingList.includes(selectedRecipe.id)}
          onToggleShopping={() => {
            toggleShoppingList(selectedRecipe.id);
            trackEvent(shoppingList.includes(selectedRecipe.id) ? 'remove_from_shopping_list' : 'add_to_shopping_list', { event_category: 'ecommerce', event_label: selectedRecipe.title });
          }}
        />
      )}

      {selectedBook && (
          <PaymentModal
             book={selectedBook}
             onClose={() => setSelectedBook(null)}
             onRead={(bookId) => {
                 setSelectedBook(null);
                 setReadingBookId(bookId);
                 trackEvent('read_book', { event_category: 'engagement', event_label: selectedBook.title || bookId });
             }}
          />
      )}

      {readingBookId && (
          <BookReader 
             bookId={readingBookId}
             onClose={() => setReadingBookId(null)}
          />
      )}

      {showShoppingList && (
        <ShoppingListModal 
          recipes={shoppingRecipes}
          onClose={() => setShowShoppingList(false)}
        />
      )}

      {showInfo && (
        <InfoModal onClose={() => setShowInfo(false)} />
      )}

      {showDownloads && (
        <DownloadsModal onClose={() => setShowDownloads(false)} />
      )}
    </div>
  );
}
