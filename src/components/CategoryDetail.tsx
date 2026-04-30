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
      className="min-h-screen py-12 px-4 md:px-12 lg:px-24 bg-[#f8f6f0] relative"
    >
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-60 mix-blend-multiply pointer-events-none z-0"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-[#8a6a4b] hover:text-[#5a3a22] transition-colors mb-8 font-accent italic cursor-pointer font-bold tracking-wider"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
          Volver al Índice
        </button>

        <div className="mb-12 text-center border-b border-[#d6c7af] pb-8 pt-4">
           <span className="font-accent font-bold italic text-[#8a3c1f] text-lg mb-2 block tracking-[0.2em] uppercase">Recetas {category.range[0].toString().padStart(3, '0')} a {category.range[1].toString().padStart(3, '0')}</span>
          <h2 className="font-headline font-black uppercase text-5xl md:text-6xl text-[#556b3e] mb-6 drop-shadow-sm tracking-tight">{category.name}</h2>
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
