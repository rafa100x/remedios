import { motion, AnimatePresence } from 'motion/react';
import { Lock, BookOpen, ExternalLink, X, Unlock } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

import { collection, doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';

interface PremiumBook {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    price: string;
    coverUrl: string;
    badge?: string;
    paymentLink?: string;
}

interface PaymentModalProps {
    book: PremiumBook;
    onClose: () => void;
    onRead?: (bookId: string) => void;
}

export function PaymentModal({ book, onClose, onRead }: PaymentModalProps) {
    const { user, signIn, purchasedBooks, simulatePurchase } = useAuth();
    const isUnlocked = purchasedBooks.includes(book.id);

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-[#0a0502]/90 backdrop-blur-sm"
                    onClick={onClose}
                ></motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className={`relative w-full max-w-lg bg-[#f4ead0] rounded-xl shadow-2xl overflow-hidden border-2 transition-colors duration-500 ${isUnlocked ? 'border-[#3a1a0f]' : 'border-[#d6c7af]'}`}
                >
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] mix-blend-multiply pointer-events-none opacity-50"></div>
                    
                    <button 
                        onClick={onClose}
                        className="absolute top-[calc(env(safe-area-inset-top,0px)+16px)] right-4 z-20 text-[#8a6a4b] hover:text-[#5c3716] transition-colors bg-[#f4ead0]/80 rounded-full p-1"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    <div className="relative h-48 sm:h-56 overflow-hidden bg-[#1a0f08]">
                        {book.badge && (
                            <div className="absolute top-4 right-[-30px] z-30 rotate-45">
                                <div className="bg-gradient-to-br from-[#d4af37] to-[#aa7c11] text-[#fff] text-[12px] font-bold py-1.5 px-10 shadow-lg border-y border-[#f4ead0]/40 font-accent uppercase tracking-wider">
                                    {book.badge}
                                </div>
                            </div>
                        )}
                        <img 
                            loading="lazy"
                            src={book.coverUrl} 
                            alt={book.title} 
                            className={`w-full h-full object-cover transition-all duration-700 ${!book.badge ? 'mix-blend-luminosity' : ''} ${isUnlocked ? 'opacity-100 sepia-0' : 'opacity-80 saturate-50'}`} 
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${!book.badge ? 'from-[#f4ead0]' : 'from-[#f4ead0]/90 via-[#f4ead0]/20'} to-transparent`}></div>
                        {!book.badge && (
                            <div className="absolute bottom-4 left-6 right-6">
                                <span className="font-accent italic text-[#8a3c1f] text-sm tracking-widest uppercase block mb-1">
                                    {book.subtitle}
                                </span>
                                <h2 className="font-headline text-3xl sm:text-4xl text-[#2c1600] font-bold leading-none drop-shadow-sm">
                                    {book.title}
                                </h2>
                            </div>
                        )}
                    </div>

                    <div className="relative p-6 sm:p-8 z-10 flex flex-col items-center text-center">
                        {isUnlocked ? (
                            <Unlock className="w-8 h-8 text-[#5c3716] mb-4 opacity-100" />
                        ) : (
                            <Lock className="w-8 h-8 text-[#8a6a4b] mb-4 opacity-70" />
                        )}
                        
                        <p className="font-body text-[#5a3a22] text-base sm:text-lg italic leading-relaxed mb-6">
                            "{book.description}"
                        </p>

                        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#8a6a4b]/30 to-transparent mb-6"></div>

                        {isUnlocked ? (
                            <div className="flex flex-col items-center">
                                <span className="block font-accent text-lg text-[#5c3716] uppercase tracking-wider mb-4 font-bold">¡Volumen Desbloqueado!</span>
                                <button 
                                    onClick={() => {
                                        if (onRead) {
                                            onRead(book.id);
                                        } else {
                                            onClose();
                                        }
                                    }}
                                    className="px-8 py-3 bg-[#5c3716] text-[#f4ead0] rounded font-headline hover:bg-[#3a2211] transition-colors"
                                >
                                    Abrir Libro
                                </button>
                            </div>
                        ) : (
                            <>
                                <div className="mb-6">
                                    <span className="block font-accent text-sm text-[#8a6a4b] uppercase tracking-wider mb-1">Inversión Única</span>
                                    <span className="font-headline text-3xl text-[#1a0f08] font-bold">{book.price}</span>
                                </div>

                                {!user ? (
                                    <button 
                                        onClick={signIn}
                                        className="w-full relative flex items-center justify-center gap-3 bg-[#1a0f08] hover:bg-[#3a2211] text-[#f4ead0] py-4 px-6 rounded-lg font-sans font-semibold text-lg transition-all shadow-md"
                                    >
                                        Inicia sesión para comprar
                                    </button>
                                ) : (
                                    <button 
                                        onClick={async () => {
                                            try {
                                                const intentRef = doc(collection(db, 'purchaseIntents'));
                                                await setDoc(intentRef, {
                                                    userId: user.uid,
                                                    email: user.email,
                                                    bookId: book.id,
                                                    status: 'pending',
                                                    createdAt: serverTimestamp()
                                                });
                                            } catch (e) {
                                                console.error("Error logging intent:", e);
                                            }

                                            if (book.paymentLink) {
                                                // User provided a literal MP link
                                                window.open(book.paymentLink, '_blank');
                                                // Optionally, you might want to automatically unlock it here 
                                                // or wait for manual verification if the webhook isn't tied to this.
                                                // simulatePurchase(book.id);
                                            } else {
                                                try {
                                                    const res = await fetch('/api/create-preference', {
                                                        method: 'POST',
                                                        headers: { 'Content-Type': 'application/json' },
                                                        body: JSON.stringify({ 
                                                            bookId: book.id, 
                                                            title: book.title, 
                                                            price: book.price,
                                                            userId: user.uid
                                                        })
                                                    });
                                                    
                                                    if (!res.ok) throw new Error('Network response was not ok');
                                                    
                                                    const data = await res.json();
                                                    if (data.init_point) {
                                                        // Navigate to MercadoPago
                                                        window.location.href = data.init_point;
                                                    } else {
                                                        simulatePurchase(book.id);
                                                    }
                                                } catch (error) {
                                                    console.error("Error connecting to server:", error);
                                                    simulatePurchase(book.id);
                                                }
                                            }
                                        }}
                                        className="w-full group relative flex items-center justify-center gap-3 bg-[#009EE3] hover:bg-[#008ACB] text-white py-4 px-6 rounded-lg font-sans font-semibold text-lg transition-all shadow-[0_4px_14px_rgba(0,158,227,0.4)] hover:shadow-[0_6px_20px_rgba(0,158,227,0.6)] hover:-translate-y-0.5"
                                    >
                                        <span>Desbloquear con Mercado Pago</span>
                                        <ExternalLink className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
                                    </button>
                                )}
                                
                                <p className="mt-4 font-body text-xs text-[#8a6a4b]/80 max-w-[80%]">
                                    Al completar el pago, recibirás acceso perpetuo a este volumen botánico y todos sus remedios.
                                </p>
                            </>
                        )}
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
