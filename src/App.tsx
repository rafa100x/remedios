import { useState, useMemo, useEffect } from 'react';
import ReactGA from 'react-ga4';
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

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [selectedBook, setSelectedBook] = useState<any>(null);
  const [readingBookId, setReadingBookId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [view, setView] = useState<'home' | 'favorites' | 'library'>('home');
  const [showShoppingList, setShowShoppingList] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [showDownloads, setShowDownloads] = useState(false);

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

  // --- GOOGLE ANALYTICS : Seguimiento de pantallas (Pageviews) ---
  useEffect(() => {
    let path = '/';
    if (searchQuery.trim()) {
      path = `/search?q=${encodeURIComponent(searchQuery)}`;
    } else if (view === 'favorites') {
      path = '/favorites';
    } else if (view === 'library') {
      path = '/library';
    } else if (selectedCategory) {
      path = `/category/${selectedCategory.id}`;
    }
    
    // Registra la visita con Google Analytics
    ReactGA.send({ hitType: "pageview", page: path });
  }, [view, selectedCategory, searchQuery]);

  // --- GOOGLE ANALYTICS : Seguimiento de apertura de recetas (Eventos) ---
  useEffect(() => {
    if (selectedRecipe) {
      ReactGA.event({
        category: 'Recipe',
        action: 'View',
        label: selectedRecipe.title
      });
    }
  }, [selectedRecipe]);

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
    <div className="min-h-screen bg-[#fdfaf2] text-[#2c1600] pb-20 sm:pb-0 pt-[110px] sm:pt-20">
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onShowFavorites={handleShowFavorites}
        onShowShoppingList={() => setShowShoppingList(true)}
        onShowLibrary={handleShowLibrary}
        onHome={handleHome}
        onShowInfo={() => setShowInfo(true)}
        isFavoritesView={view === 'favorites'}
        isLibraryView={view === 'library'}
        shoppingListCount={shoppingRecipes.length}
      />

      {searchQuery ? (
        <main className="max-w-6xl mx-auto px-4 py-8 md:py-12">
          <div className="mb-8 border-b-2 border-[#8a3c1f] pb-4 px-4 inline-block">
             <h2 className="font-headline text-3xl font-bold text-[#8a3c1f]">Resultados de Búsqueda</h2>
             <p className="font-body text-[#5a3a22] font-medium mt-1">« {searchQuery} »</p>
          </div>
          <RecipeList
            recipes={searchResults}
            onSelectRecipe={setSelectedRecipe}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />
        </main>
      ) : view === 'favorites' ? (
        <main className="max-w-6xl mx-auto px-4 py-8 md:py-12">
          <div className="mb-8 border-b-2 border-[#8a3c1f] pb-4 px-4 inline-block">
             <h2 className="font-headline text-3xl font-bold text-[#8a3c1f]">Mis Fórmulas Guardadas</h2>
             <p className="font-body text-[#5a3a22] font-medium mt-1">Tu colección personal de remedios.</p>
          </div>
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

      {showDownloads && (
        <DownloadsModal onClose={() => setShowDownloads(false)} />
      )}
    </div>
  );
}
