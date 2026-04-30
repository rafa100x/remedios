import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, Share } from 'lucide-react';

export function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Check if it's already installed
    if (window.matchMedia('(display-mode: standalone)').matches || (window.navigator as any).standalone) {
      return;
    }

    const hasSeenPrompt = localStorage.getItem('hasSeenInstallPrompt');

    // Listen for beforeinstallprompt (Android / Chrome)
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      if (!hasSeenPrompt) {
        // Show after a delay
        setTimeout(() => setShowPrompt(true), 3000);
      }
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Check for iOS Safari
    const ua = window.navigator.userAgent;
    const webkit = !!ua.match(/WebKit/i);
    const isIPad = !!ua.match(/iPad/i);
    const isIPhone = !!ua.match(/iPhone/i);
    const isIOSSafari = (isIPad || isIPhone) && webkit && !ua.match(/CriOS/i);
    
    if (isIOSSafari && !hasSeenPrompt) {
       setIsIOS(true);
       setTimeout(() => setShowPrompt(true), 3000);
    }

    // In dev, show it sometimes for testing if no prompt fired, but actually let's stick to true detection.
    
    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
         setShowPrompt(false);
         localStorage.setItem('hasSeenInstallPrompt', 'true');
      }
      setDeferredPrompt(null);
    }
  };

  const handleClose = () => {
    setShowPrompt(false);
    localStorage.setItem('hasSeenInstallPrompt', 'true');
  };

  if (!showPrompt) return null;

  return (
    <AnimatePresence>
      {showPrompt && (
        <motion.div
           initial={{ y: 150, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           exit={{ y: 150, opacity: 0 }}
           className="fixed bottom-4 left-4 right-4 sm:left-1/2 sm:-translate-x-1/2 sm:w-[350px] bg-[#f8f6f0] border border-[#d6c7af] rounded-2xl shadow-[0_10px_40px_rgba(138,60,31,0.2)] p-4 sm:p-5 z-[100] flex items-start gap-4"
        >
          <div className="w-12 h-12 bg-[#8a3c1f]/10 rounded-xl flex items-center justify-center shrink-0 border border-[#8a3c1f]/20 shadow-inner">
            <Download className="w-6 h-6 text-[#8a3c1f]" />
          </div>
          <div className="flex-1 pt-0.5">
            <h3 className="font-headline font-bold text-[#201004] text-[17px] leading-tight mb-1" style={{ letterSpacing: '-0.01em' }}>Obtén la App</h3>
            <p className="text-sm font-body text-[#201004]/70 mb-3 leading-snug">
              {isIOS 
                ? 'Agrega El Grimorio a tu pantalla de inicio para acceso más rápido.' 
                : 'Instala El Grimorio en tu dispositivo para tener los remedios siempre a mano.'}
            </p>
            {isIOS ? (
              <div className="text-[13px] font-medium text-[#556b3e] bg-[#556b3e]/10 px-3 py-2 rounded-lg text-center leading-snug border border-[#556b3e]/20">
                 Toca <Share className="w-4 h-4 inline mx-0.5 -mt-0.5" /> y luego selecciona <br/><span className="font-bold">"Agregar a inicio"</span>
              </div>
            ) : (
              <button
                onClick={handleInstallClick}
                className="bg-[#8a3c1f] text-white text-[15px] font-bold px-4 py-2 rounded-xl w-full hover:bg-[#6e2e15] shadow-md transition-all active:scale-[0.98]"
              >
                Instalar ahora
              </button>
            )}
          </div>
          <button onClick={handleClose} className="p-1.5 -mr-2 -mt-2 text-[#201004]/40 hover:text-[#201004] hover:bg-black/5 rounded-full transition-colors">
             <X className="w-5 h-5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
