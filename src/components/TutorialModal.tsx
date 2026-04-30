import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, LibraryBig, Sparkles, Heart, ChevronRight, ChevronLeft, X } from 'lucide-react';

interface TutorialModalProps {
  onClose: () => void;
}

export function TutorialModal({ onClose }: TutorialModalProps) {
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: "¡Bienvenido a El Grimorio! 🌿",
      description: "Tu compendio de sabiduría botánica ancestral. Vamos a dar un rápido paseo para que le saques el máximo provecho a la aplicación.",
      icon: <img src="https://cdn.shopify.com/s/files/1/0988/7904/5945/files/mockup-producto-principal_d05515f3-5c0a-4718-8b0a-bc2d0054df44.jpg?v=1775521634" alt="El Grimorio" className="w-full h-40 object-cover rounded-lg mb-4" />
    },
    {
      title: "🔍 Busca por síntomas",
      description: "Si tienes un malestar o buscas una planta específica, simplemente escríbelo en el buscador superior (Ej: 'acidez', 'dolor de muela').",
      icon: <div className="w-20 h-20 bg-[#d4af37]/20 rounded-full flex items-center justify-center mb-6 mx-auto"><Search className="w-10 h-10 text-[#d4af37]" /></div>
    },
    {
      title: "📚 Explora la Biblioteca",
      description: "Navega por tomos de herbolaria ordenados por categoría para descubrir cientos de remedios paso a paso. En la biblioteca también está el material para descargar y nuevos libros que vamos sacando.",
      icon: <div className="w-20 h-20 bg-[#d4af37]/20 rounded-full flex items-center justify-center mb-6 mx-auto"><LibraryBig className="w-10 h-10 text-[#d4af37]" /></div>
    },
    {
      title: "✨ Consulta al Gurú",
      description: "¿No encuentras lo que buscas o necesitas algo específico? Consulta al gurú, nuestro botánico virtual, y también tendrás acceso a la comunidad.",
      icon: <div className="w-20 h-20 bg-[#d4af37]/20 rounded-full flex items-center justify-center mb-6 mx-auto"><Sparkles className="w-10 h-10 text-[#d4af37]" /></div>
    },
    {
      title: "❤️ Guarda y Comparte",
      description: "Guarda recetas en favoritas, crea listas de compras y comparte remedios por WhatsApp con tus seres queridos. ¡Comencemos!",
      icon: <div className="w-20 h-20 bg-[#d4af37]/20 rounded-full flex items-center justify-center mb-6 mx-auto"><Heart className="w-10 h-10 text-[#d4af37]" /></div>
    }
  ];

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      onClose();
    }
  };

  const handlePrev = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-[#0a0604]/80 backdrop-blur-md"
        onClick={onClose}
      />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-md bg-[#251a14] border border-[#d4af37]/30 rounded-2xl shadow-2xl overflow-hidden shadow-[#000000]/50"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-[#1a0f08]">
           <motion.div 
             className="h-full bg-[#d4af37]" 
             animate={{ width: `${((step + 1) / steps.length) * 100}%` }}
             transition={{ duration: 0.3 }}
           />
        </div>

        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-[#8a6a4b] hover:text-[#d4af37] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8 pb-6 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              {steps[step].icon}
              <h3 className="text-2xl font-headline text-[#d4af37] mb-3">{steps[step].title}</h3>
              <p className="text-[#d6c7af]/80 font-body text-sm leading-relaxed mb-8">
                {steps[step].description}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-between gap-4 mt-4">
            <button
              onClick={handlePrev}
              disabled={step === 0}
              className={`flex-1 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${step === 0 ? 'opacity-0 pointer-events-none' : 'bg-[#1a0f08] text-[#8a6a4b] hover:text-[#d6c7af]'}`}
            >
               Atrás
            </button>

            <div className="flex gap-1.5">
               {steps.map((_, i) => (
                 <div key={i} className={`w-2 h-2 rounded-full transition-all ${i === step ? 'bg-[#d4af37] w-6' : 'bg-[#d4af37]/20'}`} />
               ))}
            </div>

            <button
              onClick={handleNext}
              className="flex-1 bg-gradient-to-r from-[#d6c7af] to-[#c2b092] text-[#2c241b] hover:from-[#c2b092] hover:to-[#a99473] py-3 rounded-xl font-bold flex items-center justify-center transition-all shadow-lg text-sm"
            >
              {step === steps.length - 1 ? '¡Comenzar!' : 'Siguiente'}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
