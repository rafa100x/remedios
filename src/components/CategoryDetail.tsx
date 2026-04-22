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
      className="min-h-screen py-12 px-4 md:px-12 lg:px-24 bg-[#1a0f08] relative"
    >
      {/* Background wood ambient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2a1308]/50 to-[#0a0502]/80 pointer-events-none z-0"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')] opacity-30 mix-blend-overlay pointer-events-none z-0"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-[#d4af37]/80 hover:text-[#d4af37] transition-colors mb-12 font-accent italic cursor-pointer font-bold tracking-wider"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
          Volver al Índice
        </button>

        <div className="mb-16 text-center border-b border-[#d4af37]/20 pb-8">
           <span className="font-accent italic text-[#d4af37] text-lg mb-2 block tracking-[0.2em]">{category.range[0].toString().padStart(3, '0')} - {category.range[1].toString().padStart(3, '0')}</span>
          <h2 className="font-headline text-5xl md:text-6xl text-[#fdfaf2] mb-6 drop-shadow-lg">{category.name}</h2>
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
