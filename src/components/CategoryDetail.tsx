import { motion } from 'motion/react';
import { Category, Recipe } from '../data/recipes';
import { RecipeList } from './RecipeList';

interface CategoryDetailProps {
  category: Category;
  onBack: () => void;
  onSelectRecipe: (recipe: Recipe) => void;
  favorites: number[];
  toggleFavorite: (id: number) => void;
}

export function CategoryDetail({ category, onBack, onSelectRecipe, favorites, toggleFavorite }: CategoryDetailProps) {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className="min-h-screen py-12 px-4 md:px-12 lg:px-24 bg-surface"
    >
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-secondary/60 hover:text-primary transition-colors mb-12 font-accent italic cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
          Volver al Índice
        </button>

        <div className="mb-16">
          <h2 className="font-headline text-5xl md:text-6xl text-primary mb-6">{category.name}</h2>
        </div>

        <RecipeList 
          recipes={category.recipes} 
          onSelectRecipe={onSelectRecipe} 
          favorites={favorites} 
          toggleFavorite={toggleFavorite} 
        />
      </div>
    </motion.section>
  );
}
