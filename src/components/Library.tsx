import { motion } from 'motion/react';
import { BookOpen, Lock, Unlock } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface PremiumBook {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    price: string;
    coverUrl: string;
    paymentLink?: string; // Add optional direct payment link
    badge?: string;
}

export const PREMIUM_BOOKS: PremiumBook[] = [
    {
        id: 'presion',
        title: 'Protocolo Natural para la Presión',
        subtitle: 'Bajar la presión sin pastillero diario',
        description: 'El plan exacto para bajar la presión sin pastillero diario. Plantas, infusiones y hábitos que las abuelas usaban antes de que existiera el enalapril. Basado en remedios ancestrales comprobados.',
        price: 'Consultar precio',
        coverUrl: 'https://cdn.shopify.com/s/files/1/0988/7904/5945/files/maestro-presion-v1.jpg?v=1776702706',
        paymentLink: 'https://mpago.la/2pktwf7',
        badge: '¡Disponible!'
    },
    {
        id: 'arte_preparar',
        title: 'El Arte de Preparar Remedios',
        subtitle: 'Guía Maestra de Preparaciones Ancestrales',
        description: 'No alcanza con saber qué planta usar. El secreto está en cómo prepararla. Una infusión mal hecha pierde el 80% de su efecto. Esta guía te enseña lo que las curanderas aprendían de memoria: Cómo preparar cada tipo de remedio, dosis exactas, conservación y contraindicaciones clave.',
        price: 'Consultar precio',
        coverUrl: 'https://cdn.shopify.com/s/files/1/0988/7904/5945/files/maestro-arte-preparar-v1.jpg?v=1776702621',
        paymentLink: 'https://mpago.la/1WcUYqH',
        badge: '¡Disponible!'
    },
    {
        id: 'menopausia',
        title: 'Remedios para la Menopausia',
        subtitle: 'Guía Ancestral',
        description: 'Calores, insomnio, cambios de humor, sequedad. Lo que ningún ginecólogo te recetó: 30 remedios naturales específicos para cada síntoma de la menopausia. Para mujeres que no quieren depender de hormonas artificiales.',
        price: 'Consultar precio',
        coverUrl: 'https://cdn.shopify.com/s/files/1/0988/7904/5945/files/maestro-menopausia-v1.jpg?v=1776702645',
        paymentLink: 'https://mpago.la/1rLW3p8',
        badge: '¡Disponible!'
    },
    {
        id: 'botiquin',
        title: 'El Botiquín Natural de Emergencia',
        subtitle: '12 remedios esenciales',
        description: '12 remedios que toda mujer debería tener siempre listos en casa. Para cuando duele la cabeza a las 3am, sube la fiebre, o viene la tos. Soluciones inmediatas sin salir corriendo a la farmacia en medio de la noche.',
        price: 'Consultar precio',
        coverUrl: 'https://cdn.shopify.com/s/files/1/0988/7904/5945/files/maestro-botiquin-v1_6597c620-dc38-4363-afca-cfd434e80ef5.jpg?v=1776702782',
        paymentLink: 'https://mpago.la/22TKgMQ',
        badge: '¡Disponible!'
    }
];

interface LibraryProps {
    onSelectBook: (book: PremiumBook) => void;
}

export function Library({ onSelectBook }: LibraryProps) {
    const { purchasedBooks } = useAuth();

    return (
        <div className="relative pt-8 pb-24 min-h-[80vh]">
            <div className="text-center mb-12">
                <h2 className="font-headline text-4xl md:text-5xl text-primary mb-4">La Biblioteca Secreta</h2>
                <p className="font-body text-tertiary/80 italic max-w-2xl mx-auto px-4">
                    Volúmenes de conocimiento herbal avanzado. Aquí podrás adquirir y desbloquear nuevos recetarios para expandir tu práctica botánica.
                </p>
            </div>

            {/* Shelf background pattern */}
            <div className="absolute inset-x-0 bottom-0 top-32 bg-[#3a2215] rounded-xl shadow-[inset_0_10px_40px_rgba(30,15,5,0.9)] border-t border-[#ffffff15] pointer-events-none overflow-hidden -z-10">
                <div className="absolute top-0 w-full h-10 bg-gradient-to-b from-[#5c3716] to-transparent bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] mix-blend-overlay opacity-60"></div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-30 mix-blend-overlay"></div>
            </div>

            <div className="relative z-10 flex flex-wrap justify-center gap-x-8 gap-y-16 px-4 py-8 max-w-6xl mx-auto">
                {PREMIUM_BOOKS.map((book, index) => {
                    const isUnlocked = purchasedBooks.includes(book.id);
                    return (
                        <motion.div
                            key={book.id}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onClick={() => onSelectBook(book)}
                            className="relative group cursor-pointer w-[200px] sm:w-[240px] flex flex-col items-center"
                        >
                            {/* Drop shadow on shelf */}
                            <div className="absolute bottom-[-10px] w-[110%] h-8 bg-black/80 blur-[8px] rounded-[100%] transition-opacity duration-300 group-hover:opacity-100"></div>
                            
                            {/* Book Body */}
                            <div className={`relative w-full aspect-[2.5/3.5] rounded-r-md rounded-l-sm transition-transform duration-500 group-hover:-translate-y-4 group-hover:rotate-1 flex flex-col items-center shadow-[inset_4px_0_10px_rgba(255,255,255,0.3),_8px_8px_20px_rgba(0,0,0,0.8)] overflow-hidden border-l-[6px] ${isUnlocked ? 'border-[#3a1a0f]' : 'border-[#1a0f08]'}`}>
                                
                                {book.badge && (
                                    <div className="absolute top-0 right-0 z-30">
                                        <div className="bg-gradient-to-br from-[#d4af37] to-[#aa7c11] text-[#fff] text-[11px] font-bold py-1.5 px-6 shadow border-b border-l border-[#f4ead0]/40 rounded-bl-lg font-accent uppercase tracking-wider relative overflow-hidden">
                                            <div className="absolute inset-0 bg-white/20 w-full h-full animate-[sheen_2s_infinite]"></div>
                                            {book.badge}
                                        </div>
                                    </div>
                                )}

                                {/* Book Cover Image */}
                                <div className={`absolute inset-0 ${isUnlocked ? 'bg-[#5c2a16]' : 'bg-[#2a1308]'}`}>
                                    <img src={book.coverUrl} alt={book.title} className={`w-full h-full object-cover transition-all duration-300 ${isUnlocked ? 'opacity-100' : 'opacity-80 saturate-50'}`} />
                                    <div className={`absolute inset-0 bg-gradient-to-t ${isUnlocked ? 'from-[#3a1a0f] via-transparent to-transparent' : 'from-[#1a0f08] via-transparent to-transparent'}`}></div>
                                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/leather.png')] opacity-20 mix-blend-overlay"></div>
                                </div>
                                
                                {/* Book Spine reflection */}
                                <div className="absolute top-0 left-0 bottom-0 w-4 bg-gradient-to-r from-white/20 to-transparent pointer-events-none"></div>

                                {/* Book Content */}
                                <div className="relative z-10 w-full h-full flex flex-col justify-end p-4 text-center">
                                    {/* Only show standard title if there's no badge, assuming badge ones are custom covers */}
                                    {!book.badge && (
                                        <div className="space-y-2 mt-4 mb-auto">
                                            <div className="mx-auto w-8 h-[2px] bg-[#d6c7af]/50"></div>
                                            <h3 className={`font-headline text-xl font-bold leading-tight drop-shadow-md ${isUnlocked ? 'text-white' : 'text-[#fdfaf2]'}`}>
                                                {book.title}
                                            </h3>
                                            <div className="mx-auto w-12 h-[1px] bg-[#d6c7af]/30"></div>
                                        </div>
                                    )}
                                    
                                    <div className={`mb-4 ${book.badge ? 'mt-auto' : ''}`}>
                                       <div className={`w-12 h-12 mx-auto rounded-full border flex items-center justify-center backdrop-blur-sm shadow-xl transition-transform ${
                                           isUnlocked ? 'bg-[#5c2a16]/80 border-[#d6c7af]/80 scale-110 group-hover:scale-125 text-white' : 'bg-[#1a0f08]/80 border-[#8a6a4b]/50 group-hover:scale-110 text-[#d6c7af]'
                                       }`}>
                                          {isUnlocked ? <BookOpen className="w-5 h-5" /> : <Lock className="w-5 h-5" />}
                                       </div>
                                       <span className={`block mt-3 font-accent italic text-sm tracking-wider ${isUnlocked ? 'text-white' : 'text-[#d6c7af]'}`}>
                                           {isUnlocked ? 'Volumen Abierto' : 'Volumen Cerrado'}
                                       </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
