import { useState, useMemo } from 'react';
import { Category, Recipe, categories } from './data/recipes';
import { Hero } from './components/Hero';
import { Cabinet } from './components/Cabinet';
import { CategoryDetail } from './components/CategoryDetail';
import { RecipeModal } from './components/RecipeModal';
import { Header } from './components/Header';
import { RecipeList } from './components/RecipeList';
import { useUserData } from './hooks/useUserData';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [view, setView] = useState<'home' | 'favorites'>('home');

  const { favorites, toggleFavorite, ratings, rateRecipe } = useUserData();

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

  return (
    <div className="min-h-screen bg-surface text-tertiary font-body relative overflow-x-hidden selection:bg-primary-container selection:text-primary pt-20">
      <div className="bg-grain absolute inset-0 pointer-events-none z-50"></div>
      
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onShowFavorites={handleShowFavorites}
        onHome={handleHome}
        isFavoritesView={view === 'favorites' && !searchQuery}
      />

      {searchQuery.trim() ? (
        <main className="max-w-7xl mx-auto px-4 md:px-12 py-12">
          <h2 className="font-headline text-4xl text-primary mb-8">Resultados de la búsqueda</h2>
          <RecipeList
            recipes={searchResults}
            onSelectRecipe={setSelectedRecipe}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />
        </main>
      ) : view === 'favorites' ? (
        <main className="max-w-7xl mx-auto px-4 md:px-12 py-12">
          <h2 className="font-headline text-4xl text-primary mb-8">Fórmulas Guardadas</h2>
          <RecipeList
            recipes={favoriteRecipes}
            onSelectRecipe={setSelectedRecipe}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />
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
        />
      )}
    </div>
  );
}
