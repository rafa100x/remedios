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

      <div className="relative z-10 flex flex-wrap justify-center gap-x-4 gap-y-16 px-4 py-8">
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
                
                {/* Jar Body */}
                <div className="relative w-full h-full bg-gradient-to-tr from-[#2a1308] to-[#6a3a14] rounded-b-[10px] rounded-t-[30px] shadow-[inset_-6px_-6px_15px_rgba(0,0,0,0.7),inset_3px_3px_10px_rgba(255,255,255,0.1)] border-x border-[#ffffff15] transition-transform duration-300 group-hover:-translate-y-3 group-hover:scale-[1.02] flex flex-col items-center">
                  
                  {/* Glass reflection */}
                  <div className="absolute top-1 left-2 w-4 h-[95%] bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-3 rounded-l-[30px] pointer-events-none"></div>

                  {/* Neck & Lid */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-[60px] h-4 bg-[#1f0d01] rounded-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]"></div>
                  <div className="absolute -top-[22px] left-1/2 -translate-x-1/2 w-[54px] h-[10px] bg-[#3a2211] rounded-t-sm shadow-inner overflow-hidden border-b border-black">
                      <div className="w-full h-[1px] bg-black/40 mt-[2px]"></div>
                      <div className="w-full h-[1px] bg-black/20 mt-[2px]"></div>
                  </div>

                  {/* Favorite Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(recipe.id);
                    }}
                    className={`absolute -right-2 -top-4 z-20 w-7 h-7 rounded-full flex items-center justify-center transition-all shadow-xl border ${
                      isFav 
                        ? 'bg-[#311c0f] border-[#bf953f] text-[#bf953f] shadow-[#bf953f]/20' 
                        : 'bg-[#1a0f08] border-[#ffffff20] text-white/30 hover:text-white/60'
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

                  {/* Paper Label */}
                  <div className="absolute inset-x-[12px] top-[45px] bottom-[20px] bg-[#fdfaf2] rounded-sm p-[4px] flex flex-col items-center justify-start text-center shadow-[0_2px_8px_rgba(0,0,0,0.5)] border border-[#d6c7af]">
                    <div className="w-full h-full border-[1.5px] border-[#8a6a4b]/40 flex flex-col pt-3 pb-1 px-1 relative bg-[#fdfaf2]">
                      
                      {/* Qué cura (The illness/purpose) */}
                      <span className="font-accent italic text-[#5c3716] text-[9.5px] uppercase tracking-widest mb-2 line-clamp-3 leading-snug border-b border-[#8a6a4b]/30 pb-2 w-[90%] mx-auto relative z-10 flex-shrink-0">
                        {getShortPurpose(recipe.purpose)}
                      </span>
                      
                      {/* Qué es (The preparation name) */}
                      <div className="flex-grow flex items-center justify-center w-[95%] mx-auto">
                        <h3 className="font-headline font-bold text-[#1f0d01] text-[13px] leading-[1.15] relative z-10 drop-shadow-sm line-clamp-4">
                          {recipe.title}
                        </h3>
                      </div>

                      {/* Number */}
                      <div className="w-[90%] mx-auto bg-transparent border-t border-[#8a6a4b]/30 pt-1.5 mt-2 relative z-10">
                         <span className="font-accent italic text-[#8a6a4b] text-[10px] tracking-[0.1em] font-medium">Nº {recipe.id.toString().padStart(3, '0')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })
        ) : (
          <div className="w-full py-24 text-center">
            <p className="font-accent italic text-xl text-tertiary/40">La estantería está vacía. No hay resultados...</p>
          </div>
        )}
      </div>
    </div>
  );
}
