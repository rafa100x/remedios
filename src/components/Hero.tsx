import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative min-h-[95vh] flex flex-col items-center justify-center overflow-hidden py-16 px-4">
      
      {/* Background: Estantería oscura con frascos en alta resolución - HECHA MÁS CLARA */}
      <div className="absolute inset-0 z-0 bg-[#2b1f18]">
         <img 
           src="https://images.unsplash.com/photo-1596704017254-9b121068fb29?q=80&w=2574&auto=format&fit=crop" 
           alt="Apothecary shelves and jars" 
           className="w-full h-full object-cover opacity-50 mix-blend-luminosity sepia-[.2] contrast-100 blur-[1px]"
           referrerPolicy="no-referrer"
         />
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#3a2c2222_0%,_#1d140e_100%)] opacity-80"></div>
      </div>

      <div className="relative z-10 w-full flex flex-col items-center justify-center mt-6">
         
         {/* Placa decorativa central inspirada fielmente en la portada del libro */}
         <motion.div 
           initial={{ opacity: 0, scale: 0.95, y: 20 }}
           animate={{ opacity: 1, scale: 1, y: 0 }}
           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
           className="relative overflow-hidden bg-[#f8f6f0] w-full max-w-[480px] mx-auto rounded-[24px] sm:rounded-[30px] p-6 sm:p-10 md:p-12 shadow-[0_40px_80px_rgba(0,0,0,0.7),inset_0_0_30px_rgba(200,180,150,0.2)] border-[3px] sm:border-[4px] border-[#e8dcc4] text-center flex flex-col items-center"
         >
            <div className="absolute inset-0 rounded-[22px] sm:rounded-[26px] bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-60 mix-blend-multiply pointer-events-none z-10"></div>

            {/* Ilustraciones Botánicas Decorativas (Romero, Ajo, Jenjibre, Orégano) */}
            <div className="absolute inset-0 opacity-[0.12] pointer-events-none mix-blend-multiply z-0">
               {/* Romero (Top Left) */}
               <img src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Rosmarinus_officinalis_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-123.jpg" alt="Romero" className="absolute -top-10 -left-10 w-32 h-32 sm:w-48 sm:h-48 object-cover rounded-full rotate-45 grayscale contrast-125" />
               {/* Ajo (Top Right) */}
               <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Allium_sativum_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-008.jpg" alt="Ajo" className="absolute -top-12 -right-8 w-28 h-28 sm:w-40 sm:h-40 object-cover rounded-full -rotate-12 grayscale contrast-125" />
               {/* Jenjibre (Bottom Left) */}
               <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Zingiber_officinale_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-283.jpg" alt="Jenjibre" className="absolute -bottom-8 -left-10 w-32 h-32 sm:w-44 sm:h-44 object-cover rounded-full rotate-[120deg] grayscale contrast-125" />
               {/* Orégano/Hierbas (Bottom Right) */}
               <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Mentha_x_piperita_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-093.jpg" alt="Mentha/Orégano" className="absolute -bottom-10 -right-12 w-32 h-32 sm:w-48 sm:h-48 object-cover rounded-full -rotate-45 grayscale contrast-125" />
            </div>

            {/* Marco interno estilo vintage */}
            <div className="absolute inset-[8px] sm:inset-3 rounded-[16px] sm:rounded-[18px] border-[1px] sm:border-[1.5px] border-[#8a6a4b]/30 pointer-events-none z-20">
                <div className="absolute -top-[5px] sm:-top-[6px] left-1/2 -translate-x-1/2 w-16 sm:w-20 h-[8px] sm:h-[10px] bg-[#f8f6f0] border-[1px] sm:border-[1.5px] border-[#8a6a4b]/30 text-white rounded-full"></div>
                <div className="absolute -bottom-[5px] sm:-bottom-[6px] left-1/2 -translate-x-1/2 w-16 sm:w-20 h-[8px] sm:h-[10px] bg-[#f8f6f0] border-[1px] sm:border-[1.5px] border-[#8a6a4b]/30 text-white rounded-full"></div>
            </div>

            {/* Tipografía de la portada original adaptada a Mobile */}
            <div className="relative z-30 w-full flex flex-col items-center mt-2 sm:mt-0">
                <h3 className="font-headline italic text-[20px] sm:text-2xl md:text-[28px] text-[#36322d] mb-3 sm:mb-4">
                  Los 200
                </h3>
                
                {/* REMEDIOS NATURALES - Color Verde Oliva */}
                <h1 className="font-headline font-black text-[28px] sm:text-[38px] md:text-[46px] text-[#556b3e] leading-[1] sm:leading-[0.95] tracking-tight mb-2 uppercase drop-shadow-sm w-full">
                  Remedios<br/>Naturales
                </h1>
                
                {/* OLVIDADOS - Color Marrón Rojizo/Cobrizo */}
                <h2 className="font-headline font-bold text-[24px] sm:text-[32px] md:text-[40px] text-[#a1532f] leading-[1.1] uppercase mb-4 tracking-wide drop-shadow-sm">
                  Olvidados
                </h2>
                
                <div className="flex items-center gap-2 sm:gap-4 w-full justify-center mb-4 opacity-80">
                  <div className="h-[1px] w-8 sm:w-12 bg-[#36322d]"></div>
                  <span className="font-accent italic text-[#36322d] text-base sm:text-lg">de la</span>
                  <div className="h-[1px] w-8 sm:w-12 bg-[#36322d]"></div>
                </div>
                
                {/* ABUELA - Color Marrón Rojizo/Cobrizo, tamaño gigante */}
                <h1 className="font-headline font-black text-[46px] sm:text-[56px] md:text-[70px] text-[#a1532f] leading-[0.9] uppercase tracking-tighter mb-6 sm:mb-8 drop-shadow-md">
                  Abuela
                </h1>

                <div className="w-16 sm:w-20 h-[2px] bg-[#d1c0a5] mb-4 sm:mb-6"></div>

                <p className="font-body italic text-[#36322d] text-[13px] sm:text-[15px] md:text-[17px] font-medium leading-snug max-w-[280px]">
                  La Guía Completa de Remedios Que Sanaron Generaciones
                </p>
            </div>
         </motion.div>

         {/* Texto inferior según la portada */}
         <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1, delay: 0.6 }}
           className="mt-8 sm:mt-12 text-center relative z-20"
         >
            <div className="font-headline tracking-[0.2em] sm:tracking-[0.3em] font-medium text-[#d1c0a5] uppercase text-[12px] sm:text-[14px] mb-6 sm:mb-8 drop-shadow-md text-shadow-glow">
               REMEDIOS ANCESTRALES
            </div>
            
            <button
              onClick={() => document.getElementById('cabinet')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative bg-[#8a3c1f] hover:bg-[#6e2e16] text-[#f8f6f0] border border-[#d1c0a5]/20 px-8 sm:px-10 py-3 sm:py-4 font-headline tracking-[0.15em] sm:tracking-[0.2em] uppercase text-xs sm:text-sm shadow-[0_0_20px_rgba(138,60,31,0.4)] transition-all hover:scale-105 active:scale-95 rounded-sm overflow-hidden"
            >
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-20 mix-blend-overlay"></div>
              <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                Abrir la Botica
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
         </motion.div>

      </div>
    </section>
  );
}
