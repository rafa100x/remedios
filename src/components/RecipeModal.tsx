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
  isShopping?: boolean;
  onToggleShopping?: () => void;
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

export function RecipeModal({ recipe, onClose, rating, onRate, isFavorite, onToggleFavorite, isShopping = false, onToggleShopping = () => {} }: RecipeModalProps) {
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

   const handleShareWhatsApp = () => {
      let text = `*${recipe.title}*\n_${getShortPurpose(recipe.purpose)}_\n\n`;
      text += `*🍃 Los Botánicos:*\n`;
      recipe.ingredients.forEach(ing => {
         text += `• ${ing.amount} ${ing.es} (${ing.la})\n`;
      });
      text += `\n*🥣 La Preparación:*\n`;
      recipe.instructions.forEach((inst, i) => {
         text += `${i + 1}. ${inst}\n`;
      });
      text += `\n*Tratamiento (Dosis):*\n${recipe.dosage}\n\n`;
      text += `*${getSourcing()}*\n\n`;
      text += `Compartido desde El Grimorio 🌿`;
      
      const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank');
   };

  const handlePrintPDF = () => {
     const win = window.open('', '', 'width=900,height=700');
     if (!win) return;
     win.document.write(`
       <html>
         <head>
           <title>${recipe.title}</title>
           <style>
             body { font-family: 'Georgia', serif; padding: 40px; color: #1a1a1a; line-height: 1.6; max-width: 800px; margin: auto; }
             h1 { font-family: 'Times New Roman', serif; font-size: 38px; color: #2c1600; margin-bottom: 5px; }
             h2 { font-family: 'Georgia', serif; font-size: 22px; color: #5a3a22; margin-top: 35px; border-bottom: 1px solid #ddd; padding-bottom: 5px; }
             .meta { font-family: 'Georgia', serif; color: #666; font-style: italic; font-size: 16px; }
             p, li { font-size: 18px; color: #222; }
             .fact { margin-top: 50px; padding: 20px; background: #f9f9f9; border-left: 4px solid #8a6a4b; font-style: italic; }
             .warning { margin-top: 20px; color: #8b0000; font-weight: bold; }
             @media print {
               body { padding: 0; }
               button { display: none; }
             }
           </style>
         </head>
         <body>
           <div class="meta">Grimorio de Salud - Remedio Nº ${recipe.id.toString().padStart(3, '0')}</div>
           <h1>${recipe.title}</h1>
           <p class="meta">Uso: ${recipe.purpose}</p>
           
           <h2>Los Botánicos (Ingredientes)</h2>
           <ul>
             ${recipe.ingredients.map(i => `<li><strong>${i.es}</strong> <em>(${i.la})</em></li>`).join('')}
           </ul>

           <h2>La Preparación</h2>
           <p>${recipe.instructions}</p>

           <h2>El Tratamiento</h2>
           <p>${recipe.dosage}</p>
           
           ${recipe.notes && recipe.notes !== 'N/A' && recipe.notes.toLowerCase() !== 'uso seguro' ? `<p class="warning">⚠️ Precaución: ${recipe.notes}</p>` : ''}
           
           <div class="fact">
             <strong>Apunte del Boticario:</strong><br/>
             ${fact}
           </div>
         </body>
       </html>
     `);
     win.document.close();
     win.focus();
     setTimeout(() => {
       win.print();
     }, 600);
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

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
          {/* Top Actions */}
          <div className="absolute top-4 right-4 md:top-8 md:right-8 z-50 flex items-center gap-2 md:gap-3">
             <button
                onClick={handleShareWhatsApp}
                className="bg-[#25D366]/90 backdrop-blur aspect-square opacity-100 border border-[#25D366]/30 text-white hover:bg-[#128C7E] w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all shadow-md"
                title="Compartir por WhatsApp"
             >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.274-.101-.473-.15-.673.15-.197.295-.771.963-.944 1.162-.175.195-.349.21-.646.06-.297-.15-1.265-.462-2.406-1.485-.888-.79-1.486-1.76-1.656-2.059-.173-.298-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
             </button>
             <button
                onClick={handlePrintPDF}
                className="bg-[#f4ead0]/80 backdrop-blur aspect-square opacity-90 border border-[#8a6a4b]/30 text-[#8a6a4b] hover:bg-white hover:text-[#2c1600] w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all shadow-md"
                title="Descargar en PDF / Imprimir"
             >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
             </button>
             <button 
               onClick={onClose}
               className="bg-[#f4ead0]/80 backdrop-blur opacity-90 border border-[#8a6a4b]/30 text-[#8a6a4b] hover:bg-[#8a3c1f] hover:text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all shadow-md"
             >
               <svg className="w-6 h-6 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
               </svg>
             </button>
          </div>

          {/* Header Image Area (2/5 of height) */}
          <div className="relative h-[35vh] md:h-80 shrink-0 bg-[#1a0f08] border-b border-[#8a6a4b]/30">
            <img 
              src={`/recetas/Botica-receta-${recipe.id.toString().padStart(2, '0')}.jpg`} 
              className="w-full h-full object-cover opacity-60 mix-blend-luminosity brightness-75 transition-opacity duration-1000"
              alt={`Ilustración para ${recipe.title}`}
              onError={(e) => {
                // Fallback in case not all 200 are uploaded right away
                (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1615554867919-482245b73e3a?q=80&w=1200&auto=format&fit=crop`;
              }}
            />
            
            {/* Fade overlay at bottom of image */}
            <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-[#f4ead0] via-[#f4ead0]/60 to-transparent"></div>
            <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-r from-[#f4ead0] via-[#f4ead0]/20 to-transparent"></div>

            {/* Title Overlay */}
            <div className="absolute bottom-0 left-0 w-full px-5 sm:px-8 md:px-16 pb-6 md:pb-12 flex items-end justify-between">
                <div className="max-w-3xl">
                    <span className="font-accent italic text-[#8a6a4b] text-[15px] md:text-lg mb-1 md:mb-2 block tracking-widest relative z-10">
                      RECETA NO. {recipe.id.toString().padStart(3, '0')}
                    </span>
                    <h1 className="font-headline text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#201004] leading-[1.05] md:leading-[0.9] mb-3 md:mb-4 drop-shadow-md">
                      {recipe.title}
                    </h1>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 relative z-10 w-fit">
                        <div className="flex items-center gap-2 bg-[#f4ead0]/60 px-4 py-2 rounded-full backdrop-blur-sm border border-[#8a6a4b]/20">
                            <span className="font-accent italic text-[#5a3a22] text-[11px] sm:text-sm uppercase tracking-widest">Eficacia Probada</span>
                            <div className="flex">
                               {[1, 2, 3, 4, 5].map((star) => (
                                 <button
                                   key={star}
                                   onClick={() => onRate(star)}
                                   className={`transition-colors ${star <= rating ? 'text-[#8a6a4b]' : 'text-[#8a6a4b]/30 hover:text-[#8a6a4b]/70'}`}
                                 >
                                   <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
                                     <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                   </svg>
                                 </button>
                               ))}
                            </div>
                        </div>
                        {/* Mobile Actions built into header */}
                        <div className="flex items-center gap-2 md:hidden">
                           <button 
                             onClick={onToggleFavorite}
                             className={`flex items-center justify-center gap-2 px-4 py-2 rounded-full text-xs font-accent tracking-wider border transition-colors ${
                               isFavorite 
                                 ? 'bg-[#311c0f] text-[#bf953f] border-[#bf953f]/50' 
                                 : 'bg-[#f4ead0]/60 text-[#5a3a22] border-[#8a6a4b]/20 backdrop-blur-sm'
                             }`}
                           >
                              {isFavorite ? 'Guardado' : 'Guardar'}
                           </button>
                           <button 
                             onClick={onToggleShopping}
                             className={`flex items-center justify-center gap-2 px-4 py-2 rounded-full text-xs font-accent tracking-wider border transition-colors ${
                               isShopping 
                                 ? 'bg-[#556b3e] text-[#f4ead0] border-[#556b3e]/50' 
                                 : 'bg-[#f4ead0]/60 text-[#5a3a22] border-[#8a6a4b]/20 backdrop-blur-sm'
                             }`}
                           >
                              {isShopping ? 'En Insumos' : '+ Insumos'}
                           </button>
                        </div>
                    </div>
                </div>

                <div className="hidden md:flex flex-col gap-3">
                   {/* Shopping Button Large */}
                   <button
                     onClick={onToggleShopping}
                     title="Añadir a Lista de Insumos"
                     className={`w-14 h-14 rounded-full flex items-center justify-center transition-all shadow-xl border ${
                       isShopping 
                         ? 'bg-[#556b3e] border-[#556b3e] text-[#f4ead0] shadow-[0_0_15px_rgba(85,107,62,0.4)]' 
                         : 'bg-[#f4ead0] border-[#8a6a4b]/30 text-[#8a6a4b] hover:bg-white hover:scale-105'
                     }`}
                   >
                     <svg className="w-5 h-5" fill={isShopping ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                         <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                     </svg>
                   </button>
                   {/* Favorite Button Large */}
                   <button
                     onClick={onToggleFavorite}
                     className={`w-14 h-14 rounded-full flex items-center justify-center transition-all shadow-xl border ${
                       isFavorite 
                         ? 'bg-[#311c0f] border-[#bf953f] text-[#bf953f] shadow-[0_0_15px_rgba(191,149,63,0.3)]' 
                         : 'bg-[#f4ead0] border-[#8a6a4b]/30 text-[#8a6a4b] hover:bg-white hover:scale-105'
                     }`}
                   >
                     <svg className="w-6 h-6" fill={isFavorite ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                         <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                     </svg>
                   </button>
                </div>
            </div>
          </div>

          {/* Scrollable Content Area */}
          <div className="flex-1 overflow-y-auto relative bg-[#f4ead0]">
             {/* Paper grain/texture */}
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-40 pointer-events-none mix-blend-multiply"></div>
             
             <div className="relative z-10 flex flex-col lg:flex-row gap-10 lg:gap-20 p-5 sm:p-8 md:p-12 lg:p-16 max-w-7xl mx-auto">
                 
                 {/* Left Column (Purpose, Ingredients, Sourcing) */}
                 <div className="w-full lg:w-5/12 space-y-10 md:space-y-12">
                     <section>
                         <h3 className="flex items-center gap-2 md:gap-3 font-accent italic text-[#8a6a4b] text-lg md:text-xl mb-3 md:mb-4">
                             <div className="w-6 h-[1px] bg-[#8a6a4b]/50"></div>
                             LA AFECCIÓN
                         </h3>
                         <p className="font-body text-[#3a2211] text-[20px] md:text-2xl font-light leading-snug italic">
                            "{recipe.purpose}"
                         </p>
                     </section>

                     <section>
                         <h3 className="flex items-center gap-2 md:gap-3 font-accent italic text-[#8a6a4b] text-lg md:text-xl mb-4 md:mb-6">
                             <div className="w-6 h-[1px] bg-[#8a6a4b]/50"></div>
                             LOS BOTÁNICOS
                         </h3>
                         <ul className="space-y-3 md:space-y-4">
                            {recipe.ingredients.map((ing, i) => (
                                <li key={i} className="flex flex-col border-b border-[#8a6a4b]/20 pb-3">
                                   <div className="flex items-baseline gap-2">
                                     <span className="font-headline font-bold text-[#2a1308] text-[18px] md:text-xl">{ing.es}</span>
                                     <span className="font-accent italic text-[#8a6a4b] text-[13px] md:text-sm">/ {ing.la}</span>
                                   </div>
                                </li>
                            ))}
                         </ul>
                     </section>

                     {/* Sourcing Section */}
                     <section className="bg-[#e9deb8] p-5 md:p-6 rounded-sm border border-[#8a6a4b]/30 shadow-inner relative overflow-hidden">
                         <div className="absolute -right-4 -top-4 text-[#8a6a4b]/10">
                            <svg className="w-20 md:w-24 h-20 md:h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
                         </div>
                         <h4 className="font-headline font-bold text-[#3a2211] text-[12px] md:text-sm uppercase tracking-widest mb-2 md:mb-3 relative z-10 flex items-center gap-2">
                             <svg className="w-4 h-4 text-[#8a6a4b]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                             Adquisición de Insumos
                         </h4>
                         <p className="font-body text-[#4a2e15] text-base md:text-lg font-medium relative z-10">{getSourcing()}</p>
                     </section>
                 </div>

                 {/* Right Column (Preparation, Dosage, Warning, Fun Fact) */}
                 <div className="w-full lg:w-7/12 space-y-10 md:space-y-12">
                     <section>
                         <h3 className="flex items-center gap-2 md:gap-3 font-accent italic text-[#8a6a4b] text-lg md:text-xl mb-3 md:mb-4">
                             <div className="w-6 h-[1px] bg-[#8a6a4b]/50"></div>
                             LA PREPARACIÓN
                         </h3>
                         <p className="font-body text-[#3a2211] text-[18px] md:text-xl leading-relaxed whitespace-pre-wrap">
                             {recipe.instructions}
                         </p>
                     </section>

                     <section>
                         <h3 className="flex items-center gap-2 md:gap-3 font-accent italic text-[#8a6a4b] text-lg md:text-xl mb-3 md:mb-4">
                             <div className="w-6 h-[1px] bg-[#8a6a4b]/50"></div>
                             EL TRATAMIENTO
                         </h3>
                         <p className="font-body text-[#3a2211] text-[18px] md:text-xl font-medium leading-relaxed bg-[#8a6a4b]/5 p-4 md:p-5 rounded-sm border-l-[3px] md:border-l-4 border-[#8a6a4b]">
                             {recipe.dosage}
                         </p>
                     </section>

                     {(recipe.notes && recipe.notes !== "N/A" && recipe.notes.toLowerCase() !== "uso seguro") && (
                       <section className="mt-8 border-t border-red-900/10 pt-6 md:pt-8">
                           <h4 className="font-headline font-bold text-red-900 text-[12px] md:text-sm uppercase tracking-widest mb-2 md:mb-3 flex items-center gap-2">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                              Recomendación Estricta
                           </h4>
                           <p className="font-body text-[#591c1c] text-base md:text-lg italic">
                               {recipe.notes}
                           </p>
                       </section>
                     )}

                     {/* Dato de Boticario */}
                     <section className="mt-12 md:mt-16 bg-[#2a1308] text-[#f4ead0] p-6 sm:p-8 md:p-10 rounded-xl relative overflow-hidden shadow-2xl">
                         <div className="absolute top-0 right-0 p-6 md:p-8 opacity-10 pointer-events-none">
                            <svg className="w-24 md:w-32 h-24 md:h-32 fill-current" viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2zm0 4.14L18.17 19H5.83L12 6.14zM11 10h2v5h-2v-5zm0 7h2v2h-2v-2z"/></svg>
                         </div>
                         <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6 relative z-10">
                              <div className="shrink-0 w-10 md:w-12 h-10 md:h-12 rounded-full border border-[#bf953f]/50 flex items-center justify-center text-[#bf953f] mb-2 sm:mb-0">
                                  <svg className="w-5 md:w-6 h-5 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                              </div>
                              <div>
                                  <h4 className="font-accent italic text-[#bf953f] text-base md:text-lg uppercase tracking-widest mb-1 md:mb-2">Apunte del Boticario</h4>
                                  <p className="font-body text-[#d6c7af] text-base md:text-lg font-light leading-relaxed">
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
