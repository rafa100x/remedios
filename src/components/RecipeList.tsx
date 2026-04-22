import { motion } from 'motion/react';
import { Recipe } from '../data/recipes';

interface RecipeListProps {
  recipes: Recipe[];
  onSelectRecipe: (recipe: Recipe) => void;
  favorites: number[];
  toggleFavorite: (id: number) => void;
}

export function RecipeList({ recipes, onSelectRecipe, favorites, toggleFavorite }: RecipeListProps) {
  const getShortPurpose = (purpose: string) => {
    // Intentamos extraer la frase exacta de "para qué sirve" directamente de la descripción
    // Ej: "Formulación tradicional diseñada específicamente para aliviar la tos. Su..." -> "Aliviar la tos"
    const match = purpose.match(/para\s+([^.]+)\./i);
    if (match && match[1]) {
      const extracted = match[1].trim();
      return extracted.charAt(0).toUpperCase() + extracted.slice(1);
    }

    // Fallback por si alguna descripción no sigue el patrón
    const lower = purpose.toLowerCase();
    if (lower.includes('tos') || lower.includes('mucosidad') || lower.includes('respiratoria') || lower.includes('nasal')) return 'Para vías respiratorias';
    if (lower.includes('estoma') || lower.includes('digest') || lower.includes('gases') || lower.includes('espasmos')) return 'Para la digestión';
    if (lower.includes('piel') || lower.includes('acné') || lower.includes('irritada') || lower.includes('quemadur')) return 'Cuidado de la piel';
    if (lower.includes('nervios') || lower.includes('dormir') || lower.includes('ansiedad')) return 'Para calmar';
    if (lower.includes('dolor') || lower.includes('inflama') || lower.includes('articul')) return 'Alivio del dolor';
    return 'Bienestar General';
  };

  return (
    <div className="relative pt-8 pb-24">
      {/* Shelf background pattern */}
      <div className="absolute inset-0 bg-[#3a2215] rounded-xl shadow-[inset_0_10px_40px_rgba(30,15,5,0.9)] border-t border-[#ffffff15] pointer-events-none overflow-hidden">
        <div className="absolute top-0 w-full h-10 bg-gradient-to-b from-[#5c3716] to-transparent bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] mix-blend-overlay opacity-60"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-30 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 flex flex-wrap justify-center gap-x-4 gap-y-16 px-4 py-12 pb-24">
        {recipes.length > 0 ? (
          recipes.map((recipe, index) => {
            const isFav = favorites.includes(recipe.id);
            return (
              <motion.div
                key={recipe.id}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.03 }}
                onClick={() => onSelectRecipe(recipe)}
                className="relative group cursor-pointer w-[140px] h-[210px] flex flex-col items-center"
              >
                {/* Drop shadow on shelf */}
                <div className="absolute bottom-[-5px] w-[110%] h-6 bg-black/60 blur-[6px] rounded-[100%] transition-opacity duration-300 group-hover:opacity-80"></div>
                
                {/* Jar Body with Image */}
                <div className="relative w-full h-[210px] flex flex-col items-center justify-end transition-transform duration-300 group-hover:-translate-y-3">
                  
                  {/* The Image (Mix Blend Screen to remove black backing, making the bright glass pop in the dark shelf) */}
                  <div className="absolute inset-x-0 bottom-[60px] top-0 flex items-center justify-center">
                    <img 
                      src={`/frascos/botica-frasco-${recipe.id.toString().padStart(3, '0')}.jpg`} 
                      alt={recipe.title} 
                      className="w-full max-h-full object-contain mix-blend-screen opacity-90 drop-shadow-2xl transition-all duration-300 group-hover:opacity-100 group-hover:drop-shadow-[0_15px_15px_rgba(255,255,255,0.1)]"
                      onError={(e) => {
                        // Fallback generic dark jar if the image is missing
                        (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 150"><rect width="100" height="150" fill="%231a0f08" rx="20"/><rect x="30" y="-10" width="40" height="30" fill="%230a0502" rx="5"/></svg>';
                        (e.target as HTMLImageElement).classList.remove('mix-blend-screen');
                      }}
                    />
                    
                    {/* Inner jar warm glow to create glass effect from behind */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#d4af37]/10 to-transparent mix-blend-overlay pointer-events-none rounded-[20px]"></div>
                  </div>

                  {/* Favorite Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(recipe.id);
                    }}
                    className={`absolute -right-1 top-4 z-20 w-8 h-8 rounded-full flex items-center justify-center transition-all bg-[#1a0f08] border border-[#d4af37]/30 shadow-xl ${
                      isFav 
                        ? 'text-[#d4af37]' 
                        : 'text-white/30 hover:text-white/60'
                    }`}
                  >
                    <svg className="w-[14px] h-[14px] fill-current" viewBox="0 0 24 24">
                      {isFav ? (
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      ) : (
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      )}
                    </svg>
                  </button>

                  {/* Info Label Below Jar */}
                  <div className="w-full flex flex-col items-center mt-auto text-center translate-y-4">
                     <span className="font-accent italic text-[#d4af37] text-[10px] tracking-[0.15em] font-medium mb-1 drop-shadow-md">Nº {recipe.id.toString().padStart(3, '0')}</span>
                     <span className="font-sans font-bold text-[#f4ead0]/60 text-[8px] uppercase tracking-widest line-clamp-1 w-full max-w-[120px] mb-1">
                        {getShortPurpose(recipe.purpose)}
                     </span>
                     <h3 className="font-headline font-bold text-[#fdfaf2] text-[12px] leading-tight line-clamp-2 w-full max-w-[130px] drop-shadow-md">
                        {recipe.title}
                     </h3>
                  </div>

                </div>
              </motion.div>
            );
          })
        ) : (
          <div className="w-full py-24 text-center">
            <p className="font-accent italic text-xl text-[#d4af37]/40">La estantería está vacía. No hay resultados...</p>
          </div>
        )}
      </div>
    </div>
  );
}
