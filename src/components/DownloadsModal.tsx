import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, Download } from 'lucide-react';

interface DownloadsModalProps {
  onClose: () => void;
}

export function DownloadsModal({ onClose }: DownloadsModalProps) {
  const materials = [
    {
      id: 'guia-basica',
      title: 'Guía Básica de Recolección',
      description: 'Aprende los principios fundamentales para recolectar plantas medicinales de forma sostenible y segura en la naturaleza.',
      type: 'PDF',
      size: '2.5 MB'
    },
    {
      id: 'calendario-lunar',
      title: 'Calendario Lunar de Cosecha',
      description: 'El momento óptimo para recolectar hojas, flores y raíces según las fases de la luna para potenciar sus principios activos.',
      type: 'PDF',
      size: '1.8 MB'
    },
    {
      id: 'dosificacion',
      title: 'Tabla de Dosificación Segura',
      description: 'Guía de referencia rápida para calcular las dosis correctas de infusiones, tinturas y jarabes según la edad y el peso.',
      type: 'PDF',
      size: '1.2 MB'
    }
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="relative w-full h-full md:h-auto md:max-h-[85vh] max-w-4xl bg-[#fdfaf2] md:rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-[#d6c7af]"
        >
          {/* Header */}
          <div className="flex-shrink-0 bg-[#3a2215] text-[#fdfaf2] p-6 relative flex flex-col items-center text-center">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-20 mix-blend-overlay pointer-events-none"></div>
             
             <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-[#fdfaf2]/70 hover:text-[#fdfaf2] hover:bg-white/10 rounded-full transition-colors z-20"
            >
              <X size={24} />
            </button>

             <FileText className="w-12 h-12 text-[#c5a880] mb-3 relative z-10" />
             <h2 className="font-headline text-3xl font-bold text-[#c5a880] relative z-10">Material Descargable</h2>
             <p className="font-body text-[#fdfaf2]/80 mt-2 max-w-lg relative z-10">
               Guías en PDF y material complementario gratuito para profundizar tus conocimientos en herbolaria tradicional.
             </p>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6 md:p-10 relative">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-30 pointer-events-none mix-blend-multiply"></div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                {materials.map((item) => (
                    <div key={item.id} className="bg-white/50 border border-[#d6c7af] rounded-xl p-5 hover:bg-white transition-colors group">
                        <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                                <h3 className="font-headline text-lg font-bold text-[#2c1600] mb-1">{item.title}</h3>
                                <div className="flex items-center gap-2 mb-3">
                                   <span className="text-xs font-bold px-2 py-0.5 bg-[#8a3c1f]/10 text-[#8a3c1f] rounded uppercase">{item.type}</span>
                                   <span className="text-xs font-medium text-[#5a3a22] opacity-70">{item.size}</span>
                                </div>
                                <p className="font-body text-sm text-[#5a3a22] leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                            <button className="flex-shrink-0 w-10 h-10 rounded-full bg-[#8a3c1f]/5 text-[#8a3c1f] flex items-center justify-center group-hover:bg-[#8a3c1f] group-hover:text-white transition-colors">
                                <Download size={18} />
                            </button>
                        </div>
                    </div>
                ))}
             </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
