import { motion, AnimatePresence } from 'motion/react';
import { Recipe } from '../data/recipes';
import { useEffect, useState } from 'react';

interface RecipeModalProps {
  recipe: Recipe;
  onClose: () => void;
  rating: number;
  onRate: (rating: number) => void;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

const BOTICARIO_FACTS = [
  "Las antiguas curanderas recolectaban las raíces florales en fase lunar creciente para potenciar todos sus principios activos naturales.",
  "En las boticas del siglo XIX, este tipo de extractos maduraban en sótanos sumamente oscuros para preservar intacta su virtud curativa.",
  "Los boticarios medievales creían firmemente que la forma de la hoja indicaba exactamente el órgano específico que curarían.",
  "El uso estricto de cristal ámbar o cobalto en los envases era esencial en la alquimia para proteger estos frágiles elixires de la luz solar.",
  "Las recetas ancestrales puras siempre se preparaban en recipientes de barro, vidrio grueso o madera, evitando a toda costa los metales.",
  "Se recomendaba tradicionalmente que el paciente estuviera en un estado de calma contemplativa antes de ingerir el remedio para una mejor absorción integral.",
  "Muchas de las proporciones alquímicas originales se medían no en gramos, sino en 'puñados' o 'pizcas', dependiendo de las manos del maestro boticario."
];

export function RecipeModal({ recipe, onClose, rating, onRate, isFavorite, onToggleFavorite }: RecipeModalProps) {
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Derive "Dónde conseguir" based on ingredients roughly
  const getSourcing = () => {
    const names = recipe.ingredients.map(i => i.es.toLowerCase());
    const places = new Set<string>();
    
    names.forEach(name => {
      if (name.includes('vino') || name.includes('miel') || name.includes('vinagre') || name.includes('ajo') || name.includes('cebolla') || name.includes('limón') || name.includes('café')) places.add('Almacén o Mercado local');
      if (name.includes('eucalipto') || name.includes('llantén') || name.includes('gordolobo') || name.includes('melisa') || name.includes('valeriana') || name.includes('sauco') || name.includes('caléndula')) places.add('Herboristería Tradicional');
      if (name.includes('alcohol') || name.includes('glicerina') || name.includes('aceite de almendras') || name.includes('cera') || name.includes('arcilla')) places.add('Farmacia Botánica');
    });

    if (places.size === 0) places.add('Herboristería Especializada');
    return Array.from(places).join(' • ');
  };

  const fact = BOTICARIO_FACTS[recipe.id % BOTICARIO_FACTS.length];

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  useEffect(() => {
    let isMounted = true;
    
    async function fetchImage() {
      setIsGenerating(true);
      setError(null);
      try {
        const res = await fetch('/api/generate-image', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ prompt: recipe.imagePrompt })
        });
        const data = await res.json();
        if (isMounted) {
          if (data.image) {
            setGeneratedImage(data.image);
          } else {
            if (data.error && data.error.includes("API key not valid")) {
              setError("Clave de API inválida. Configura tu GEMINI_API_KEY en el panel de Secrets.");
            } else {
              setError("No se pudo generar la ilustración.");
            }
          }
        }
      } catch (e) {
        console.error(e);
        if (isMounted) setError("Error de conexión con el Gremio.");
      } finally {
        if (isMounted) setIsGenerating(false);
      }
    }

    fetchImage();

    return () => { isMounted = false; };
  }, [recipe.imagePrompt]);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6 lg:p-12">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#0a0502]/90 backdrop-blur-md"
        ></motion.div>

        {/* Modal Content - Book/Magazine Layout */}
        <motion.div 
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.98 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full h-full md:h-[92vh] max-w-6xl shadow-2xl md:rounded-lg overflow-hidden bg-[#f4ead0] flex flex-col"
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 md:top-8 md:right-8 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-[#f4ead0]/20 text-[#f4ead0] hover:bg-[#f4ead0] hover:text-[#2c1600] backdrop-blur-md transition-all shadow-lg border border-[#f4ead0]/30"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Header Image Area (2/5 of height) */}
          <div className="relative h-[35vh] md:h-80 shrink-0 bg-[#1a0f08] border-b border-[#8a6a4b]/30">
            {isGenerating ? (
               <div className="w-full h-full flex flex-col items-center justify-center gap-4 relative z-10">
                  <div className="w-10 h-10 border-[3px] border-[#8a6a4b] border-t-transparent rounded-full animate-spin"></div>
                  <div className="animate-pulse text-[#d6c7af] font-accent italic text-lg tracking-widest">Alquimizando Sabiduría...</div>
               </div>
            ) : (
                <img 
                  src={generatedImage || `https://images.unsplash.com/photo-1615554867919-482245b73e3a?q=80&w=1200&auto=format&fit=crop`} 
                  className="w-full h-full object-cover opacity-60 mix-blend-luminosity brightness-75 transition-opacity duration-1000"
                  alt={`Ilustración para ${recipe.title}`}
                />
            )}
            
            {/* Fade overlay at bottom of image */}
            <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-[#f4ead0] via-[#f4ead0]/60 to-transparent"></div>
            <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-r from-[#f4ead0] via-[#f4ead0]/20 to-transparent"></div>

            {/* Title Overlay */}
            <div className="absolute bottom-0 left-0 w-full px-6 md:px-16 pb-8 md:pb-12 flex items-end justify-between">
                <div className="max-w-3xl">
                    <span className="font-accent italic text-[#8a6a4b] text-lg mb-2 block tracking-widest relative z-10">
                      RECETA NO. {recipe.id.toString().padStart(3, '0')}
                    </span>
                    <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold text-[#201004] leading-[0.9] mb-4 drop-shadow-md">
                      {recipe.title}
                    </h1>
                    <div className="flex items-center gap-4 relative z-10 bg-[#f4ead0]/60 px-4 py-2 rounded-full backdrop-blur-sm border border-[#8a6a4b]/20 w-fit">
                        <span className="font-accent italic text-[#5a3a22] text-sm uppercase tracking-widest">Eficacia Probada</span>
                        <div className="flex">
                           {[1, 2, 3, 4, 5].map((star) => (
                             <button
                               key={star}
                               onClick={() => onRate(star)}
                               className={`transition-colors ${star <= rating ? 'text-[#8a6a4b]' : 'text-[#8a6a4b]/30 hover:text-[#8a6a4b]/70'}`}
                             >
                               <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                 <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                               </svg>
                             </button>
                           ))}
                        </div>
                    </div>
                </div>

                <div className="hidden md:block">
                   {/* Favorite Button Large */}
                   <button
                     onClick={onToggleFavorite}
                     className={`w-16 h-16 rounded-full flex items-center justify-center transition-all border ${
                       isFavorite 
                         ? 'bg-[#1a0f08] border-[#bf953f] text-[#bf953f] shadow-lg shadow-[#bf953f]/30' 
                         : 'bg-white/50 backdrop-blur-md border-[#8a6a4b]/30 text-[#5a3a22] hover:bg-white'
                     }`}
                   >
                     <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                       {isFavorite ? (
                         <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                       ) : (
                         <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                       )}
                     </svg>
                   </button>
                </div>
            </div>
          </div>

          {/* Scrollable Content Area */}
          <div className="flex-1 overflow-y-auto relative bg-[#f4ead0]">
             {/* Paper grain/texture */}
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-40 pointer-events-none mix-blend-multiply"></div>
             
             <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-20 p-6 md:p-12 lg:p-16 max-w-7xl mx-auto">
                 
                 {/* Left Column (Purpose, Ingredients, Sourcing) */}
                 <div className="w-full lg:w-5/12 space-y-12">
                     <section>
                         <h3 className="flex items-center gap-3 font-accent italic text-[#8a6a4b] text-xl mb-4">
                             <div className="w-6 h-[1px] bg-[#8a6a4b]/50"></div>
                             LA AFECCIÓN
                         </h3>
                         <p className="font-body text-[#3a2211] text-2xl font-light leading-snug italic">
                            "{recipe.purpose}"
                         </p>
                     </section>

                     <section>
                         <h3 className="flex items-center gap-3 font-accent italic text-[#8a6a4b] text-xl mb-6">
                             <div className="w-6 h-[1px] bg-[#8a6a4b]/50"></div>
                             LOS BOTÁNICOS
                         </h3>
                         <ul className="space-y-4">
                            {recipe.ingredients.map((ing, i) => (
                                <li key={i} className="flex flex-col border-b border-[#8a6a4b]/20 pb-3">
                                   <div className="flex items-baseline gap-2">
                                     <span className="font-headline font-bold text-[#2a1308] text-xl">{ing.es}</span>
                                     <span className="font-accent italic text-[#8a6a4b] text-sm">/ {ing.la}</span>
                                   </div>
                                </li>
                            ))}
                         </ul>
                     </section>

                     {/* Sourcing Section */}
                     <section className="bg-[#e9deb8] p-6 rounded-sm border border-[#8a6a4b]/30 shadow-inner relative overflow-hidden">
                         <div className="absolute -right-4 -top-4 text-[#8a6a4b]/10">
                            <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
                         </div>
                         <h4 className="font-headline font-bold text-[#3a2211] text-sm uppercase tracking-widest mb-3 relative z-10 flex items-center gap-2">
                             <svg className="w-4 h-4 text-[#8a6a4b]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                             Adquisición de Insumos
                         </h4>
                         <p className="font-body text-[#4a2e15] text-lg font-medium relative z-10">{getSourcing()}</p>
                     </section>
                 </div>

                 {/* Right Column (Preparation, Dosage, Warning, Fun Fact) */}
                 <div className="w-full lg:w-7/12 space-y-12">
                     <section>
                         <h3 className="flex items-center gap-3 font-accent italic text-[#8a6a4b] text-xl mb-4">
                             <div className="w-6 h-[1px] bg-[#8a6a4b]/50"></div>
                             LA PREPARACIÓN
                         </h3>
                         <p className="font-body text-[#3a2211] text-xl leading-relaxed whitespace-pre-wrap">
                             {recipe.instructions}
                         </p>
                     </section>

                     <section>
                         <h3 className="flex items-center gap-3 font-accent italic text-[#8a6a4b] text-xl mb-4">
                             <div className="w-6 h-[1px] bg-[#8a6a4b]/50"></div>
                             EL TRATAMIENTO
                         </h3>
                         <p className="font-body text-[#3a2211] text-xl font-medium leading-relaxed bg-[#8a6a4b]/5 p-5 rounded-sm border-l-4 border-[#8a6a4b]">
                             {recipe.dosage}
                         </p>
                     </section>

                     {(recipe.notes && recipe.notes !== "N/A" && recipe.notes.toLowerCase() !== "uso seguro") && (
                       <section className="mt-8 border-t border-red-900/10 pt-8">
                           <h4 className="font-headline font-bold text-red-900 text-sm uppercase tracking-widest mb-3 flex items-center gap-2">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                              Recomendación Estricta
                           </h4>
                           <p className="font-body text-[#591c1c] text-lg italic">
                               {recipe.notes}
                           </p>
                       </section>
                     )}

                     {/* Dato de Boticario */}
                     <section className="mt-16 bg-[#2a1308] text-[#f4ead0] p-8 md:p-10 rounded-xl relative overflow-hidden shadow-2xl">
                         <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                            <svg className="w-32 h-32 fill-current" viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2zm0 4.14L18.17 19H5.83L12 6.14zM11 10h2v5h-2v-5zm0 7h2v2h-2v-2z"/></svg>
                         </div>
                         <div className="flex items-start gap-6 relative z-10">
                              <div className="shrink-0 w-12 h-12 rounded-full border border-[#bf953f]/50 flex items-center justify-center text-[#bf953f]">
                                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                              </div>
                              <div>
                                  <h4 className="font-accent italic text-[#bf953f] text-lg uppercase tracking-widest mb-2">Apunte del Boticario</h4>
                                  <p className="font-body text-[#d6c7af] text-lg font-light leading-relaxed">
                                      {fact}
                                  </p>
                              </div>
                         </div>
                     </section>

                 </div>
             </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
