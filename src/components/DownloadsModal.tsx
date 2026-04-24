import { motion, AnimatePresence } from 'motion/react';
import { Download, FileText, Gift, X, ArrowLeft, Eye } from 'lucide-react';
import { useEffect, useState } from 'react';

interface DownloadsModalProps {
  onClose: () => void;
}

const PRINCIPAL_FILES = [
  { id: 'botiquin_ansiedad', title: 'Botiquín Herbal para la Ansiedad', filename: 'Botiquin-Herbal-Ansiedad.pdf' },
  { id: 'botiquin_magico', title: 'Botiquín Mágico Herbal', filename: 'Botiquin-Magico-Herbal.pdf' },
  { id: 'botiquin_dolores', title: 'Botiquín Herbal: Dolores e Inflamación', filename: 'Botiquin-Herbal-Dolores-Inflamacion.pdf' },
  { id: 'botiquin_sueno', title: 'Botiquín Herbal: Sueño Profundo', filename: 'Botiquin-Herbal-Sueno-Profundo.pdf' },
];

const BONUS_FILES = [
  { id: 'bono1', title: 'Bonus 1 - Check-List herbal imprimible', filename: 'Bono-1-Checklist.pdf' },
  { id: 'bono2', title: 'Bonus 2 - Calendario de Infusiones 7 Días Detox y Energía', filename: 'Bono-2-Calendario-Infusiones.pdf' },
  { id: 'bono3', title: 'Bonus 3 - 10 jugos herbales', filename: 'Bono-3-Jugos-Herbales.pdf' },
  { id: 'bono4', title: 'Bonus 4 - Recolección de Plantas Medicinales', filename: 'Bono-4-Recoleccion-Plantas.pdf' },
  { id: 'bono5', title: 'Bonus 5 - Cultivo y producción de plantas medicinales (Varios Autores)', filename: 'Bono-5-Cultivo-Produccion.pdf' },
  { id: 'bono6', title: 'Bonus 6 - El huerto medicinal. Pequeño manual de plantas medicinales', filename: 'Bono-6-Huerto-Medicinal.pdf' },
];

export function DownloadsModal({ onClose }: DownloadsModalProps) {
  const [selectedPdf, setSelectedPdf] = useState<{ title: string, url: string } | null>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[110] flex items-center justify-center p-0 md:p-6 lg:p-12">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#0a0502]/90 backdrop-blur-md"
        />

        <motion.div 
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="relative w-full h-full md:h-auto md:max-h-[90vh] max-w-5xl bg-[#fdfaf2] md:rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-[#d6c7af]"
        >
          {/* Header */}
          <div className="flex-shrink-0 bg-[#3a2215] text-[#fdfaf2] p-6 relative flex flex-col items-center text-center">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-20 mix-blend-overlay pointer-events-none"></div>
             
             {selectedPdf && (
               <button 
                 onClick={() => setSelectedPdf(null)}
                 className="absolute top-4 left-4 z-20 px-3 py-2 rounded-lg bg-black/20 flex items-center gap-2 hover:bg-black/40 transition-colors"
               >
                 <ArrowLeft className="w-5 h-5 text-[#d4af37]" />
                 <span className="hidden sm:inline font-bold">Volver</span>
               </button>
             )}

             <button 
               onClick={onClose}
               className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/20 flex items-center justify-center hover:bg-black/40 transition-colors"
             >
               <X className="w-6 h-6 text-[#d4af37]" />
             </button>

             {selectedPdf ? (
               <div className="w-full mt-10 md:mt-2 px-8 flex flex-col items-center">
                 <h2 className="font-headline text-2xl md:text-3xl font-bold relative z-10 line-clamp-1 max-w-[80%]">{selectedPdf.title}</h2>
                 <a 
                   href={selectedPdf.url} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 bg-[#d4af37] text-[#3a2215] font-bold rounded-full hover:bg-[#ffe38a] transition-transform hover:scale-105 active:scale-95 shadow-lg"
                 >
                   <Download className="w-5 h-5" />
                   Descargar Archivo Original
                 </a>
               </div>
             ) : (
               <>
                 <FileText className="w-12 h-12 text-[#d4af37] mb-3 relative z-10" />
                 <h2 className="font-headline text-3xl font-bold relative z-10">La Bóveda de Descargas</h2>
                 <p className="font-body text-[#d6c7af] mt-2 relative z-10 max-w-lg">
                    Aquí tienes acceso directo a todos tus manuales principales y los 6 bonos especiales. Visualiza o descarga los PDFs para leerlos cuando quieras.
                 </p>
               </>
             )}
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto relative bg-[#e8e1d5] flex flex-col">
             {!selectedPdf && <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-30 pointer-events-none mix-blend-multiply"></div>}
             
             {selectedPdf ? (
               <div className="w-full h-full min-h-[60vh] md:min-h-[70vh] flex-1">
                 <iframe 
                   src={`${selectedPdf.url}#view=FitH`} 
                   className="w-full h-full border-0 bg-white/50 backdrop-blur-sm"
                   title={selectedPdf.title}
                 />
               </div>
             ) : (
               <div className="p-6 md:p-10 space-y-12 relative z-10">
                  {/* Material Principal */}
                  <section>
                     <div className="flex items-center gap-3 mb-6 border-b border-[#8a6a4b]/20 pb-3">
                         <FileText className="w-6 h-6 text-[#8a3c1f]" />
                         <h3 className="font-headline text-2xl font-bold text-[#3a2215]">Material Principal</h3>
                     </div>
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                         {PRINCIPAL_FILES.map(file => (
                             <button 
                                key={file.id}
                                onClick={() => setSelectedPdf({ title: file.title, url: `https://firebasestorage.googleapis.com/v0/b/remedios-ancestrasel.firebasestorage.app/o/pdfs%2F${encodeURIComponent(file.filename)}?alt=media` })}
                                className="text-left flex items-center justify-between w-full bg-[#fdfaf2] border border-[#d6c7af] rounded-lg p-4 hover:shadow-md hover:border-[#8a6a4b] transition-all group"
                             >
                                 <div className="flex flex-col pr-4">
                                    <span className="font-bold text-[#3a2215] leading-tight group-hover:text-[#8a3c1f] transition-colors">{file.title}</span>
                                    <span className="text-xs text-[#8a6a4b] mt-1 font-mono">{file.filename}</span>
                                 </div>
                                 <div className="shrink-0 flex gap-2">
                                   <div className="w-10 h-10 rounded-full bg-[#f4ead0] flex items-center justify-center text-[#8a3c1f] group-hover:bg-[#8a3c1f] group-hover:text-white transition-colors" title="Visualizar el PDF">
                                      <Eye className="w-5 h-5" />
                                   </div>
                                 </div>
                             </button>
                         ))}
                     </div>
                  </section>
 
                  {/* Bonos */}
                  <section>
                     <div className="flex items-center gap-3 mb-6 border-b border-[#d4af37]/40 pb-3">
                         <Gift className="w-6 h-6 text-[#d4af37]" />
                         <h3 className="font-headline text-2xl font-bold text-[#3a2215]">Bonos Especiales</h3>
                     </div>
                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                         {BONUS_FILES.map(file => (
                             <button 
                                key={file.id}
                                onClick={() => setSelectedPdf({ title: file.title, url: `https://firebasestorage.googleapis.com/v0/b/remedios-ancestrasel.firebasestorage.app/o/pdfs%2F${encodeURIComponent(file.filename)}?alt=media` })}
                                className="text-left flex items-center justify-between w-full bg-gradient-to-br from-[#fdfaf2] to-[#f4ead0] border border-[#d4af37]/40 rounded-lg p-4 hover:shadow-md hover:border-[#d4af37] transition-all group"
                             >
                                 <div className="flex flex-col pr-4">
                                    <span className="font-bold text-[#5c3716] leading-tight group-hover:text-[#3a2215] transition-colors">{file.title}</span>
                                    <span className="text-xs text-[#8a6a4b] mt-1 font-mono opacity-80">{file.filename}</span>
                                 </div>
                                 <div className="shrink-0 flex gap-2">
                                   <div className="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-white transition-colors" title="Visualizar el PDF">
                                      <Eye className="w-4 h-4" />
                                   </div>
                                 </div>
                             </button>
                         ))}
                     </div>
                  </section>
               </div>
             )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
