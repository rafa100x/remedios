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
      let text = `*${recipe.title}*\n_${recipe.purpose}_\n\n`;
      text += `*🍃 Los Botánicos:*\n`;
      recipe.ingredients.forEach(ing => {
         text += `• ${ing.es} (${ing.la})\n`;
      });
      text += `\n*🥣 La Preparación:*\n`;
      text += `${recipe.instructions}\n`;
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
          className="relative w-full h-full md:h-[92vh] max-w-6xl shadow-2xl md:rounded-lg overflow-hidden bg-[#fdfaf2] flex flex-col"
        >
          {/* Top Actions - Floating on top of the scrollable content */}
          <div className="absolute top-4 right-4 md:top-8 md:right-8 z-50 flex items-center gap-2 md:gap-3">
             <button
                onClick={handleShareWhatsApp}
                className="bg-[#25D366]/90 backdrop-blur aspect-square border border-[#25D366]/30 text-white hover:bg-[#128C7E] w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all shadow-md"
                title="Compartir por WhatsApp"
             >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.274-.101-.473-.15-.673.15-.197.295-.771.963-.944 1.162-.175.195-.349.21-.646.06-.297-.15-1.265-.462-2.406-1.485-.888-.79-1.486-1.76-1.656-2.059-.173-.298-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
             </button>
             <button
                onClick={handlePrintPDF}
                className="bg-[#f4ead0]/90 backdrop-blur aspect-square border border-[#8a6a4b]/30 text-[#8a6a4b] hover:bg-white hover:text-[#2c1600] w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all shadow-md"
                title="Imprimir Papiro o Guardar PDF"
             >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
             </button>
            <button 
              onClick={onClose}
              className="bg-[#1a0f0a]/80 backdrop-blur aspect-square border border-[#fff]/10 text-[#f4ead0] hover:bg-[#8a6a4b] hover:text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all shadow-md"
              title="Cerrar Grimorio"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto overflow-x-hidden relative h-full scrollbar-thin scrollbar-thumb-[#8a6a4b] scrollbar-track-[#efe5cc]">
            
            <div className="flex flex-col md:flex-row min-h-full">
              {/* Left Column: Image Area */}
              <div className="relative w-full md:w-[45%] h-[40vh] md:h-auto md:min-h-full bg-black/5 shrink-0">
                {/* Fallback to local image in public folder if model unsplash fails, named mathematically */}
                <img 
                  src={`/recetas/botica-receta-${recipe.id.toString().padStart(3, '0')}.jpg`}
                  alt={recipe.title}
                  className="absolute inset-0 w-full h-full object-cover mix-blend-multiply"
                  onError={(e) => {
                    // Si no existe la imagen en public/recetas/, usamos la de Unsplash o la fallback global
                    const target = e.target as HTMLImageElement;
                    if(target.src.includes('unsplash')) {
                       target.src = "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop";
                    } else {
                       target.src = recipe.imageUrl;
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#fdfaf2] via-transparent to-black/30 md:bg-gradient-to-r md:from-transparent md:to-[#fdfaf2]"></div>
                
                {/* Visual decoration overlay */}
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/aged-paper.png")' }}></div>
              </div>

              {/* Right Column: Copy Area */}
              <div className="relative w-full md:w-[55%] pb-24 md:pb-12 pt-8 md:pt-16 px-6 md:px-12 lg:px-16 flex flex-col items-center text-center">
                
                {/* Tags / Subtitle */}
                <div className="flex gap-2 flex-wrap items-center justify-center mb-6">
                   {/* Create dynamic tags based on keywords */}
                   {recipe.purpose.includes('digestivo') || recipe.purpose.includes('estómago') ? <span className="text-[10px] uppercase tracking-widest text-[#5a3a22] border border-[#a68a6b]/30 bg-[#efe5cc]/50 px-3 py-1 rounded-full">Digestivo</span> : null}
                   {recipe.purpose.includes('inmunológico') || recipe.purpose.includes('viral') ? <span className="text-[10px] uppercase tracking-widest text-[#5a3a22] border border-[#a68a6b]/30 bg-[#efe5cc]/50 px-3 py-1 rounded-full">Defensas</span> : null}
                   {recipe.title.includes('Sueño') || recipe.purpose.includes('ansiedad') ? <span className="text-[10px] uppercase tracking-widest text-[#5a3a22] border border-[#a68a6b]/30 bg-[#efe5cc]/50 px-3 py-1 rounded-full">Relajante</span> : null}
                   {recipe.ingredients.some(i => i.es.toLowerCase().includes('aceite')) ? <span className="text-[10px] uppercase tracking-widest text-[#5a3a22] border border-[#a68a6b]/30 bg-[#efe5cc]/50 px-3 py-1 rounded-full">Uso Externo</span> : <span className="text-[10px] uppercase tracking-widest text-[#5a3a22] border border-[#a68a6b]/30 bg-[#efe5cc]/50 px-3 py-1 rounded-full">Brebaje</span>}
                </div>

                <div className="uppercase tracking-[0.2em] text-[#8a6a4b] text-xs font-serif mb-3 border-b border-[#8a6a4b]/30 pb-2 inline-block">Nro. {recipe.id.toString().padStart(3, '0')}</div>
                <h2 className="text-3xl md:text-5xl font-serif text-[#2c1600] leading-[1.1] mb-6 drop-shadow-sm">{recipe.title}</h2>
                <h3 className="text-lg md:text-xl text-[#5a3a22] italic font-serif leading-relaxed max-w-lg mb-10">
                  {recipe.purpose}
                </h3>

                {/* Rating - Simplified visual */}
                <div className="flex flex-col items-center gap-3 mb-10">
                  <div className="text-[#8a6a4b] text-sm uppercase tracking-widest font-medium">Grado de Efectividad</div>
                  <div className="flex gap-1.5 p-3 rounded-full border border-[#8a6a4b]/10 bg-white/50 shadow-inner">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => onRate(star)}
                        className={`transition-all duration-300 ${rating >= star ? 'text-amber-500 scale-110 drop-shadow-md' : 'text-[#d4c5b0] hover:text-amber-300'}`}
                        aria-label={`Rate ${star} stars`}
                      >
                        <svg className="w-6 h-6 md:w-7 md:h-7" fill={rating >= star ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                      </button>
                    ))}
                  </div>
                </div>

                {/* User Actions */}
                <div className="flex flex-wrap justify-center gap-3 w-full mb-12">
                   <button
                     onClick={onToggleShopping}
                     className={`flex items-center gap-2 px-5 py-2.5 rounded text-sm font-medium transition-all ${
                       isShopping 
                       ? 'bg-[#8a6a4b] text-white shadow-md' 
                       : 'bg-white text-[#5a3a22] border border-[#a68a6b]/30 hover:bg-[#efe5cc]'
                     }`}
                   >
                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                     </svg>
                     {isShopping ? 'Añadido a Insumos' : 'Añadir a Insumos'}
                   </button>
                   <button
                     onClick={onToggleFavorite}
                     className={`flex items-center gap-2 px-5 py-2.5 rounded text-sm font-medium transition-all ${
                       isFavorite
                       ? 'bg-red-50 text-red-700 border border-red-200'
                       : 'bg-white text-[#5a3a22] border border-[#a68a6b]/30 hover:bg-[#efe5cc]'
                     }`}
                   >
                     <svg className="w-5 h-5" fill={isFavorite ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                     </svg>
                     {isFavorite ? 'Guardado' : 'Guardar Receta'}
                   </button>
                </div>

                <div className="w-full max-w-lg mb-10 h-px bg-gradient-to-r from-transparent via-[#8a6a4b]/20 to-transparent"></div>

                <div className="w-full max-w-xl text-left space-y-12">
                  
                  {/* Ingredients Section */}
                  <section>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex-1 h-px bg-[#8a6a4b]/20"></div>
                      <h4 className="text-xl font-serif text-[#2c1600] flex items-center gap-2">
                        <svg className="w-5 h-5 text-[#8a6a4b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                        Los Botánicos
                      </h4>
                      <div className="flex-1 h-px bg-[#8a6a4b]/20"></div>
                    </div>
                    <ul className="space-y-4">
                      {recipe.ingredients.map((ing, idx) => (
                        <li key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between py-1 group">
                          <span className="text-[#3c2514] font-medium text-[17px] group-hover:text-[#8a6a4b] transition-colors">{ing.es}</span>
                          <span className="hidden sm:block border-b border-dotted border-[#8a6a4b]/30 flex-1 mx-4"></span>
                          <span className="text-sm italic text-[#8a6a4b]/80 font-serif whitespace-nowrap">{ing.la}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Sourcing hint */}
                    <div className="mt-6 bg-[#f4ead0]/50 border border-[#8a6a4b]/10 rounded px-4 py-3 text-sm text-[#5a3a22] flex items-start gap-2">
                       <svg className="w-5 h-5 shrink-0 text-[#8a6a4b] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                       </svg>
                       <p><span className="font-semibold block mb-0.5">Dónde conseguir:</span> {getSourcing()}</p>
                    </div>
                  </section>

                  {/* Instructions Section */}
                  <section>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex-1 h-px bg-[#8a6a4b]/20"></div>
                      <h4 className="text-xl font-serif text-[#2c1600] flex items-center gap-2">
                        <svg className="w-5 h-5 text-[#8a6a4b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        La Preparación
                      </h4>
                      <div className="flex-1 h-px bg-[#8a6a4b]/20"></div>
                    </div>
                    <div className="prose prose-stone max-w-none text-lg text-[#3c2514] leading-[1.8] font-serif bg-white/40 p-6 rounded-lg border border-[#8a6a4b]/10 shadow-inner">
                      <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-[#8a6a4b] first-letter:mr-1 first-letter:float-left first-letter:leading-[0.8]">{recipe.instructions}</p>
                    </div>
                  </section>

                  {/* Dosage & Notes Section */}
                  <section className="bg-[#1a0f0a] text-[#fdfaf2] p-8 -mx-6 md:rounded-bl-3xl md:rounded-tr-3xl relative overflow-hidden group">
                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay"></div>
                    <div className="relative z-10">
                      <h4 className="text-xl font-serif text-[#d4c5b0] mb-4 flex items-center gap-2 border-b border-[#d4c5b0]/20 pb-2">
                        <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        El Tratamiento
                      </h4>
                      <p className="text-lg leading-relaxed mb-6 font-serif">{recipe.dosage}</p>

                      {recipe.notes && recipe.notes !== 'N/A' && (
                        <div className="pt-4 border-t border-[#d4c5b0]/20 mt-4">
                          <h5 className="text-[13px] uppercase tracking-widest text-red-300 font-bold mb-2">Advertencia del Boticario:</h5>
                          <p className="text-sm md:text-base text-red-200/90 leading-relaxed italic">{recipe.notes}</p>
                        </div>
                      )}
                    </div>
                  </section>

                  {/* Fun Fact Section */}
                  <section className="border-l-4 border-[#8a6a4b] bg-white/60 p-5 rounded-r">
                    <h5 className="text-[11px] font-bold uppercase tracking-widest text-[#8a6a4b] mb-2 flex items-center gap-1.5">
                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                       Cultura Boticaria
                    </h5>
                    <p className="font-serif italic text-[#5a3a22] text-[15px] leading-relaxed">
                       "{fact}"
                    </p>
                  </section>

                </div>

              </div>
            </div>
            
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
