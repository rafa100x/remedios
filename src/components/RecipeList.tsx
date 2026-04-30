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
    const lower = purpose.toLowerCase();
    if (lower.includes('tos') || lower.includes('mucosidad') || lower.includes('respiratoria') || lower.includes('nasal') || lower.includes('infecc') || lower.includes('garganta') || lower.includes('bronqui')) return 'Vías Respiratorias';
    if (lower.includes('estoma') || lower.includes('digest') || lower.includes('gases') || lower.includes('espasmos') || lower.includes('hepat') || lower.includes('higado') || lower.includes('vesicula') || lower.includes('hígado')) return 'Salud Digestiva';
    if (lower.includes('piel') || lower.includes('acné') || lower.includes('irritada') || lower.includes('quemadur') || lower.includes('herida') || lower.includes('cicatriz')) return 'Cuidado de la piel';
    if (lower.includes('nervios') || lower.includes('dormir') || lower.includes('ansiedad') || lower.includes('estrés') || lower.includes('relajante')) return 'Relajación y Sueño';
    if (lower.includes('dolor') || lower.includes('inflama') || lower.includes('articul') || lower.includes('cabeza') || lower.includes('reuma') || lower.includes('muscula')) return 'Alivio del Dolor';
    if (lower.includes('urinari') || lower.includes('vejiga') || lower.includes('renal') || lower.includes('riñones') || lower.includes('prostata') || lower.includes('próstata')) return 'Sistema Urinario';
    if (lower.includes('mujer') || lower.includes('menstrua') || lower.includes('fertil') || lower.includes('reproductor') || lower.includes('hormon')) return 'Salud Femenina';
    if (lower.includes('circula') || lower.includes('venas') || lower.includes('varices') || lower.includes('corazon') || lower.includes('corazón') || lower.includes('sangre')) return 'Circulación';
    if (lower.includes('pelo') || lower.includes('cabello') || lower.includes('capilar')) return 'Cuidado Capilar';
    if (lower.includes('inmune') || lower.includes('defensas') || lower.includes('fortalec') || lower.includes('vitalidad')) return 'Sistema Inmune';
    return 'Bienestar General';
  };

  return (
    <div className="relative pt-8 pb-24">
      {/* Shelf background pattern */}
      <div className="absolute inset-0 bg-[#e5dfbe] rounded-xl shadow-[inset_0_10px_40px_rgba(138,60,31,0.1)] border border-[#d6c7af] pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 w-full h-10 bg-gradient-to-b from-[#d6c7af] to-transparent bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-60"></div>
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
                className="relative group cursor-pointer flex flex-col items-center"
              >
                {/* Polaroid Card container */}
                <div className="bg-[#fcfbf8] w-[140px] md:w-[160px] p-2 pb-14 rounded-sm shadow-[0_4px_10px_rgba(0,0,0,0.08)] border border-[#e5dfbe] flex flex-col relative transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_12px_25px_rgba(138,60,31,0.15)] group-hover:rotate-1">
                  
                  {/* Photo Area with dark background matching the jars */}
                  <div className="relative w-full aspect-[4/5] overflow-hidden rounded-sm bg-[#0a0502] flex items-center justify-center">
                    <img 
                      loading="lazy"
                      src={`https://firebasestorage.googleapis.com/v0/b/remedios-ancestrasel.firebasestorage.app/o/frascos%2Fbotica-frasco-${recipe.id.toString().padStart(3, '0')}.${recipe.id >= 1001 ? 'jpg' : 'png'}?alt=media`} 
                      alt={recipe.title} 
                      className="w-[95%] h-[95%] object-contain drop-shadow-xl transition-all duration-500 group-hover:scale-105"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1615554867919-482245b73e3a?q=80&w=400&auto=format&fit=crop';
                      }}
                    />
                  </div>

                  {/* Favorite Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(recipe.id);
                    }}
                    className={`absolute right-1 top-1 z-20 w-8 h-8 rounded-full flex items-center justify-center transition-all bg-[#0a0502]/40 backdrop-blur-sm border border-[#d4af37]/30 hover:bg-[#0a0502]/80 ${
                      isFav 
                        ? 'text-[#d4af37]' 
                        : 'text-white/50 hover:text-white'
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

                  {/* Text on Polaroid */}
                  <div className="absolute inset-x-0 bottom-2 md:bottom-3 flex flex-col items-center text-center px-1">
                     <span className="font-accent italic text-[#8a3c1f] text-[9px] md:text-[10px] tracking-widest block mb-0.5">Nº {recipe.id.toString().padStart(3, '0')}</span>
                     <h3 className="font-headline font-bold text-[#3a2211] text-[11px] md:text-[12px] leading-tight line-clamp-2 px-1">
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
