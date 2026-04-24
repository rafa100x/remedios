import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import { Recipe } from '../data/recipes';
import { extractImageFromHtml } from '../utils/imageUtils';

interface RecipeListProps {
  recipes: Recipe[];
  onSelectRecipe: (recipe: Recipe) => void;
  favorites: string[];
  toggleFavorite: (id: string) => void;
}

export function RecipeList({ recipes, onSelectRecipe, favorites, toggleFavorite }: RecipeListProps) {
  const getShortPurpose = (purpose: string) => {
    const lower = purpose.toLowerCase();
    if (lower.includes('tos') || lower.includes('mucosidad') || lower.includes('respiratoria') || lower.includes('nasal') || lower.includes('infecc') || lower.includes('garganta') || lower.includes('bronqui')) return 'Vías Respiratorias';
    if (lower.includes('estoma') || lower.includes('digest') || lower.includes('gases') || lower.includes('espasmos') || lower.includes('hepat') || lower.includes('higado') || lower.includes('vesicula') || lower.includes('hígado')) return 'Salud Digestiva';
    if (lower.includes('piel') || lower.includes('acné') || lower.includes('irritada') || lower.includes('quemadur') || lower.includes('herida') || lower.includes('cicatriz')) return 'Cuidado de la Piel';
    if (lower.includes('nervios') || lower.includes('dormir') || lower.includes('ansiedad') || lower.includes('estrés') || lower.includes('relajante')) return 'Relajación y Sueño';
    if (lower.includes('dolor') || lower.includes('inflama') || lower.includes('articul') || lower.includes('cabeza') || lower.includes('reuma') || lower.includes('muscula')) return 'Alivio del Dolor';
    if (lower.includes('urinari') || lower.includes('vejiga') || lower.includes('renal') || lower.includes('riñones') || lower.includes('prostata') || lower.includes('próstata')) return 'Sistema Urinario';
    if (lower.includes('mujer') || lower.includes('menstrua') || lower.includes('fertil') || lower.includes('reproductor') || lower.includes('hormon')) return 'Salud Femenina';
    if (lower.includes('circula') || lower.includes('venas') || lower.includes('varices') || lower.includes('corazon') || lower.includes('corazón') || lower.includes('sangre')) return 'Circulación';
    if (lower.includes('pelo') || lower.includes('cabello') || lower.includes('capilar')) return 'Cuidado Capilar';
    if (lower.includes('inmune') || lower.includes('defensas') || lower.includes('fortalec') || lower.includes('vitalidad')) return 'Sistema Inmune';
    return 'Bienestar General';
  };

  const getNumber = (id: string) => {
    const num = String(parseInt(id, 36) % 1000).padStart(3, '0');
    return `Nº ${num}`;
  };

  return (
    <div className="bg-[#2c1600] rounded-xl p-8 sm:p-12 shadow-2xl relative border-8 border-[#3d1f00]">
      {/* Wood texture overlay */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1550684376-efcbd6e3f031?auto=format&fit=crop&q=80')`,
          backgroundSize: 'cover'
        }}
      />
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-16 gap-x-8 relative z-10">
        {recipes.map((recipe, index) => {
          const isFav = favorites.includes(recipe.id);
          const imageUrl = extractImageFromHtml(recipe.htmlContent);
          
          return (
            <div key={recipe.id} className="flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.03 }}
                onClick={() => onSelectRecipe(recipe)}
                className="relative group cursor-pointer w-[160px] h-[240px] flex flex-col items-center"
              >
                {/* Drop shadow on shelf */}
                <div className="absolute bottom-[-5px] w-[110%] h-6 bg-black/60 blur-[6px] rounded-[100%] transition-opacity duration-300 group-hover:opacity-80"></div>
                
                {/* Jar Body with Image */}
                <div className="relative w-full h-[240px] flex flex-col items-center justify-end transition-transform duration-300 group-hover:-translate-y-3">
                  
                  {/* The Image (Mix Blend Screen to remove black backing, making the bright glass pop in the dark shelf) */}
                  <div className="absolute inset-x-0 bottom-[60px] top-0 flex items-center justify-center">
                    {imageUrl ? (
                       <img 
                         src={imageUrl} 
                         alt={recipe.title} 
                         className="h-full w-full object-contain filter drop-shadow-xl saturate-150 contrast-125"
                         style={{ mixBlendMode: 'screen' }} 
                       />
                    ) : (
                       <div className="w-24 h-32 bg-amber-900/30 rounded-full blur-md border border-amber-500/20" />
                    )}
                  </div>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(recipe.id);
                    }}
                    className={`absolute top-4 right-2 p-2 rounded-full border shadow-sm transition-all z-20 ${
                      isFav 
                        ? 'bg-[#8a3c1f] border-[#8a3c1f] text-[#fdfaf2]' 
                        : 'bg-black/50 border-[#8a3c1f] text-[#8a3c1f] hover:bg-[#8a3c1f] hover:text-[#fdfaf2]'
                    }`}
                  >
                    <Heart className="w-4 h-4" fill={isFav ? "currentColor" : "none"} />
                  </button>
                </div>
              </motion.div>

              {/* Label below the Jar */}
              <div className="mt-4 text-center px-2 z-10 h-16 w-full relative">
                {/* Vintage metallic plate background */}
                <p className="font-serif italic text-amber-500 text-sm mb-1 opacity-90 drop-shadow-md">
                  {getNumber(recipe.id)}
                </p>
                <div className="flex flex-col gap-1 items-center w-full px-2">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-amber-300/70 border-b border-amber-500/30 pb-1 px-2 whitespace-nowrap overflow-hidden text-ellipsis w-full max-w-full">
                    {getShortPurpose(recipe.purpose)}
                  </span>
                  <h3 className="font-headline font-bold text-[#fdfaf2] text-sm leading-tight drop-shadow-md line-clamp-2">
                    {recipe.title}
                  </h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {recipes.length === 0 && (
        <div className="text-center py-20 relative z-10">
          <p className="text-amber-500/70 font-serif italic text-lg">
            No se han encontrado pociones en estos estantes.
          </p>
        </div>
      )}
    </div>
  );
}
