import { useState, useMemo } from 'react';
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

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [selectedBook, setSelectedBook] = useState<any>(null); // Type any for now to avoid importing interface if not exported
  const [readingBookId, setReadingBookId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [view, setView] = useState<'home' | 'favorites' | 'library'>('home');
  const [showShoppingList, setShowShoppingList] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const { favorites, toggleFavorite, shoppingList, toggleShoppingList, ratings, rateRecipe } = useUserData();

  const allRecipes = useMemo(() => categories.flatMap(c => c.recipes), []);

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    return allRecipes.filter(r =>
      r.title.toLowerCase().includes(q) ||
      r.purpose.toLowerCase().includes(q) ||
      r.ingredients.some(i => i.es.toLowerCase().includes(q) || i.la.toLowerCase().includes(q))
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
  };

  const handleShowFavorites = () => {
    setSearchQuery('');
    setView('favorites');
    setSelectedCategory(null);
  };

  const handleShowLibrary = () => {
    setSearchQuery('');
    setView('library');
    setSelectedCategory(null);
  };

  return (
    <div className="min-h-screen bg-surface text-tertiary font-body relative overflow-x-hidden selection:bg-primary-container selection:text-primary pt-[110px] sm:pt-20 pb-24 sm:pb-0">
      <div className="bg-grain absolute inset-0 pointer-events-none z-50"></div>
      
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onShowFavorites={handleShowFavorites}
        onShowShoppingList={() => setShowShoppingList(true)}
        onShowLibrary={handleShowLibrary}
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
            <Library onSelectBook={setSelectedBook} />
        </main>
      ) : !selectedCategory ? (
        <>
          <Hero />
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
          onRate={(rating) => rateRecipe(selectedRecipe.id, rating)}
          isFavorite={favorites.includes(selectedRecipe.id)}
          onToggleFavorite={() => toggleFavorite(selectedRecipe.id)}
          isShopping={shoppingList.includes(selectedRecipe.id)}
          onToggleShopping={() => toggleShoppingList(selectedRecipe.id)}
        />
      )}

      {selectedBook && (
          <PaymentModal
             book={selectedBook}
             onClose={() => setSelectedBook(null)}
             onRead={(bookId) => {
                 setSelectedBook(null);
                 setReadingBookId(bookId);
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
    </div>
  );
}
