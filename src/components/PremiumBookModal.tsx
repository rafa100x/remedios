import { motion, AnimatePresence } from 'framer-motion';
import { X, Lock, CheckCircle2, ChevronRight, BookOpen } from 'lucide-react';
import { useState } from 'react';

interface PremiumBook {
    id: string;
    title: string;
    description: string;
    price: string;
    coverUrl: string;
    badge?: string;
    paymentLink?: string;
}

interface PaymentModalProps {
    book: PremiumBook | null;
    onClose: () => void;
    onRead: (bookId: string) => void;
}

export function PaymentModal({ book, onClose, onRead }: PaymentModalProps) {
    // Simulating user logic
    // true if the user purchased it, false otherwise
    const [hasPurchased, setHasPurchased] = useState(false);

    if (!book) return null;

    const handlePurchase = () => {
         // This is where Stripe/Payment integration would go
         // Simulating a successful purchase for now:
         window.open('https://buy.stripe.com/test_123', '_blank');
         
         // Mocking that the user bought it after clicking the link 
         // In a real app this state comes from the backend/database
         setTimeout(() => {
             setHasPurchased(true);
         }, 2000);
    }

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
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
                    className="relative w-full max-w-2xl bg-[#fdfaf2] rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden border border-[#d6c7af]"
                >
                    {/* Left Column - Image */}
                    <div className="w-full md:w-2/5 md:h-auto h-48 bg-[#3a2215] relative">
                         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-20 mix-blend-overlay"></div>
                         <img 
                            src={book.coverUrl} 
                            alt={book.title} 
                            className="w-full h-full object-cover object-center relative z-10"
                         />
                         {book.badge && (
                              <div className="absolute top-4 left-4 z-20 bg-[#c5a880] text-[#2c1600] px-3 py-1 rounded-full text-xs font-bold shadow-md">
                                 {book.badge}
                              </div>
                         )}
                    </div>

                    {/* Right Column - Content */}
                    <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col relative text-[#2c1600]">
                         <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 text-[#8a3c1f] hover:bg-[#8a3c1f]/10 rounded-full transition-colors z-20"
                         >
                            <X size={20} />
                         </button>

                         <h3 className="font-headline text-2xl font-bold mb-2 pr-8">{book.title}</h3>
                         <p className="font-body text-[#5a3a22] text-sm mb-6 leading-relaxed">
                            {book.description}
                         </p>

                         {hasPurchased ? (
                             <div className="mt-auto space-y-4">
                                <div className="bg-green-100/50 border border-green-200 text-green-800 px-4 py-3 rounded-lg flex items-center gap-3">
                                   <CheckCircle2 className="text-green-600" size={20} />
                                   <p className="text-sm font-medium">¡Libro adquirido con éxito!</p>
                                </div>
                                <button
                                    onClick={() => onRead(book.id)}
                                    className="w-full py-3 px-4 bg-[#8a3c1f] hover:bg-[#703018] text-[#fdfaf2] rounded-xl font-medium transition-colors flex items-center justify-center gap-2"
                                >
                                    <BookOpen size={20} />
                                    Leer Libro Ahora
                                </button>
                             </div>
                         ) : (
                             <div className="mt-auto space-y-6">
                                <div className="space-y-3">
                                   <div className="flex items-center gap-3 text-sm text-[#5a3a22]">
                                      <CheckCircle2 size={16} className="text-[#c5a880]" />
                                      <span>Acceso ilimitado de por vida</span>
                                   </div>
                                    <div className="flex items-center gap-3 text-sm text-[#5a3a22]">
                                      <CheckCircle2 size={16} className="text-[#c5a880]" />
                                      <span>Formatos PDF y EPUB disponibles</span>
                                   </div>
                                    <div className="flex items-center gap-3 text-sm text-[#5a3a22]">
                                      <CheckCircle2 size={16} className="text-[#c5a880]" />
                                      <span>Actualizaciones gratuitas</span>
                                   </div>
                                </div>

                                <div className="pt-6 border-t border-[#d6c7af]">
                                    <div className="flex items-end gap-2 mb-4">
                                       <span className="text-3xl font-bold text-[#8a3c1f]">{book.price}</span>
                                       <span className="text-sm text-[#5a3a22] pb-1 uppercase font-medium">USD</span>
                                    </div>
                                    
                                    <button
                                        onClick={handlePurchase}
                                        className="relative w-full py-3.5 px-4 bg-[#8a3c1f] hover:bg-[#703018] text-[#fdfaf2] rounded-xl font-medium transition-all group overflow-hidden"
                                    >
                                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none"></div>
                                        <div className="relative flex items-center justify-center gap-2">
                                            <Lock size={18} className="opacity-70" />
                                            <span>Desbloquear Libro</span>
                                            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </button>
                                    <p className="text-center text-xs text-[#8a3c1f] mt-3 font-medium">
                                        Pago seguro • Acceso instantáneo
                                    </p>
                                </div>
                             </div>
                         )}

                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
