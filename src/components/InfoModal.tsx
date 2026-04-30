import { X, Search, Bookmark, ShoppingBag, LibraryBig, Home, PlayCircle } from 'lucide-react';

interface InfoModalProps {
  onClose: () => void;
  onShowTutorial?: () => void;
}

export function InfoModal({ onClose, onShowTutorial }: InfoModalProps) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-sm">
      <div className="bg-[#fdfaf2] w-full max-w-2xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden relative border border-[#d6c7af]">
        
        {/* Header */}
        <div className="bg-[#1a0f08] px-6 py-5 flex justify-between items-center shrink-0 border-b border-[#8a6a4b]">
          <h2 className="font-headline text-2xl md:text-3xl text-[#d4af37]">Cómo usar El Grimorio</h2>
          <button 
            onClick={onClose}
            className="w-10 h-10 rounded-full flex items-center justify-center text-[#d4af37] hover:bg-[#d4af37]/10 transition-colors"
            aria-label="Cerrar"
          >
             <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 overflow-y-auto font-body text-[#2c1600] text-lg leading-relaxed space-y-8">
           
           <section>
             <h3 className="font-headline text-2xl font-bold text-[#8a3c1f] mb-3">Tus primeros pasos</h3>
             <p className="mb-4">
               El Grimorio es una colección de recetas botánicas y remedios naturales. 
               Puedes buscar recetas por enfermedad (ej: tos), ingrediente (ej: miel) o navegar por nuestras categorías.
             </p>
             {onShowTutorial && (
               <button 
                 onClick={() => { onClose(); onShowTutorial(); }}
                 className="mt-2 w-full flex items-center justify-center gap-2 bg-[#1a0f08] text-[#d4af37] hover:text-[#e4c042] font-bold py-3 px-6 rounded-xl transition-all border border-[#d4af37]"
               >
                 <PlayCircle className="w-5 h-5" /> Iniciar tour guiado
               </button>
             )}
           </section>

           <section className="space-y-4">
             <h3 className="font-headline text-2xl font-bold text-[#8a3c1f] mb-4">¿Para qué sirve cada botón?</h3>
             
             <div className="flex items-start gap-4 bg-white p-4 rounded-xl border border-[#d6c7af] shadow-sm">
                <div className="bg-[#1a0f08] p-3 rounded-lg text-[#d4af37] shrink-0 mt-1">
                  <Home className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Inicio</h4>
                  <p className="text-base text-[#5a3a22]">Te lleva siempre a la pantalla principal donde puedes ver nuestro botiquín y buscar remedios.</p>
                </div>
             </div>

             <div className="flex items-start gap-4 bg-white p-4 rounded-xl border border-[#d6c7af] shadow-sm">
                <div className="bg-[#1a0f08] p-3 rounded-lg text-[#d4af37] shrink-0 mt-1">
                  <LibraryBig className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Biblioteca</h4>
                  <p className="text-base text-[#5a3a22]">Aquí guardamos los libros digitales completos y guías detalladas para leer tranquilos.</p>
                </div>
             </div>

             <div className="flex items-start gap-4 bg-white p-4 rounded-xl border border-[#d6c7af] shadow-sm">
                <div className="bg-[#1a0f08] p-3 rounded-lg text-[#d4af37] shrink-0 mt-1">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Comprar (Lista de Insumos)</h4>
                  <p className="text-base text-[#5a3a22]">Cuando encuentras una receta, puedes añadir "A Insunmos". Aquí se guardará una lista como la del supermercado con las hierbas que necesitas comprar.</p>
                </div>
             </div>

             <div className="flex items-start gap-4 bg-white p-4 rounded-xl border border-[#d6c7af] shadow-sm">
                <div className="bg-[#1a0f08] p-3 rounded-lg text-[#d4af37] shrink-0 mt-1">
                  <Bookmark className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Mis Recetas (Guardadas)</h4>
                  <p className="text-base text-[#5a3a22]">Si te gusta un remedio puedes guardarlo pulsando la estrella o el botón guardar. Se guardarán todos aquí para que no los pierdas.</p>
                </div>
             </div>
           </section>

           <div className="mt-8 bg-[#f4ead0] p-5 rounded-xl text-center border border-[#d6c7af]">
             <p className="text-sm font-bold text-[#8a3c1f] uppercase tracking-wider mb-2">Un consejo de seguridad</p>
             <p className="text-base italic text-[#5a3a22]">Toda receta es orientativa. No dudes en consultar a un especialista en salud ante dolencias persistentes.</p>
           </div>
        </div>
        
        {/* Footer Actions */}
        <div className="p-4 bg-white border-t border-[#d6c7af] flex justify-center pb-safe">
           <button 
             onClick={onClose}
             className="w-full md:w-auto px-8 py-3 bg-[#8a3c1f] text-white font-bold rounded-xl text-lg hover:bg-[#5a2714] transition-colors"
           >
             Entendido, regresar
           </button>
        </div>

      </div>
    </div>
  );
}
