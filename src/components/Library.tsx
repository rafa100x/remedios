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
    paymentLink?: string;
    badge?: string;
}

export const PREMIUM_BOOKS: PremiumBook[] = [
    {
        id: 'presion',
        title: 'Protocolo Natural para la Presión',
        subtitle: 'Bajar la presión sin pastillero diario',
        description: 'El plan exacto para bajar la presión sin pastillero diario. Plantas, infusiones y hábitos que las abuelas usaban antes de que existiera el enalapril. Basado en remedios ancestrales comprobados.',
        price: '$ 7.999 ARS',
        coverUrl: 'https://cdn.shopify.com/s/files/1/0988/7904/5945/files/maestro-presion-v1.jpg?v=1776702706',
        paymentLink: 'https://mpago.la/2pktwf7',
        badge: '¡Disponible!'
    },
    {
        id: 'arte_preparar',
        title: 'El Arte de Preparar Remedios',
        subtitle: 'Guía Maestra de Preparaciones Ancestrales',
        description: 'No alcanza con saber qué planta usar. El secreto está en cómo prepararla. Una infusión mal hecha pierde el 80% de su efecto. Esta guía te enseña lo que las curanderas aprendían de memoria: Cómo preparar cada tipo de remedio, dosis exactas, conservación y contraindicaciones clave.',
        price: '$ 14.999 ARS',
        coverUrl: 'https://cdn.shopify.com/s/files/1/0988/7904/5945/files/maestro-arte-preparar-v1.jpg?v=1776702621',
        paymentLink: 'https://mpago.la/1rLW3p8',
        badge: '¡Disponible!'
    },
    {
        id: 'menopausia',
        title: 'Remedios para la Menopausia',
        subtitle: 'Guía Ancestral',
        description: 'Calores, insomnio, cambios de humor, sequedad. Lo que ningún ginecólogo te recetó: 30 remedios naturales específicos para cada síntoma de la menopausia. Para mujeres que no quieren depender de hormonas artificiales.',
        price: '$ 9.999 ARS',
        coverUrl: 'https://cdn.shopify.com/s/files/1/0988/7904/5945/files/maestro-menopausia-v1.jpg?v=1776702645',
        paymentLink: 'https://mpago.la/1rLW3p8',
        badge: '¡Disponible!'
    },
    {
        id: 'botiquin',
        title: 'El Botiquín Natural de Emergencia',
        subtitle: '12 remedios esenciales',
        description: '12 remedios que toda mujer debería tener siempre listos en casa. Para cuando duele la cabeza a las 3am, sube la fiebre, o viene la tos. Soluciones inmediatas sin salir corriendo a la farmacia en medio de la noche.',
        price: '$ 5.999 ARS',
        coverUrl: 'https://cdn.shopify.com/s/files/1/0988/7904/5945/files/maestro-botiquin-v1_6597c620-dc38-4363-afca-cfd434e80ef5.jpg?v=1776702782',
        paymentLink: 'https://mpago.la/22TKgMQ',
        badge: '¡Disponible!'
    }
];

interface LibraryProps {
    onSelectBook: (book: PremiumBook) => void;
    onShowDownloads: () => void;
}

export function Library({ onSelectBook, onShowDownloads }: LibraryProps) {
    const { purchasedBooks } = useAuth();

    return (
        <div className="relative pt-8 pb-24 min-h-[80vh]">
            <div className="text-center mb-12">
                <h2 className="font-headline text-4xl md:text-5xl text-primary mb-4">La Biblioteca Secreta</h2>
                <p className="font-body text-tertiary/80 italic max-w-2xl mx-auto px-4">
                    Volúmenes de conocimiento herbal avanzado. Aquí podrás adquirir y desbloquear nuevos recetarios para expandir tu práctica botánica.
                </p>
                
                <div className="mt-8 flex justify-center">
                    <button 
                        onClick={onShowDownloads}
                        className="bg-gradient-to-r from-[#8a3c1f] to-[#5a2714] text-[#fdfaf2] px-6 py-3 rounded-full font-bold flex items-center gap-2 shadow-xl hover:scale-105 transition-transform"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                        Bóveda de Descargas y Bonos
                    </button>
                </div>
            </div>

            {/* Shelf background pattern */}
            <div className="absolute inset-0 bg-[#2a1a10] border-t border-[#ffffff15] pointer-events-none overflow-hidden -z-10">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-20 mix-blend-overlay"></div>
                <div className="absolute top-0 w-full h-[500px] bg-gradient-to-b from-black/60 via-black/20 to-transparent"></div>
            </div>

            {/* Books Grid */}
            <div className="relative z-10 max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
                    {PREMIUM_BOOKS.map((book, index) => {
                        const isUnlocked = purchasedBooks.includes(book.id);

                        return (
                            <motion.div
                                key={book.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="relative group cursor-pointer perspective-[1000px]"
                                onClick={() => onSelectBook(book)}
                            >
                                {/* Platform shadow */}
                                <div className="absolute -bottom-4 left-4 right-4 h-8 bg-black/80 blur-[15px] rounded-full group-hover:bg-black group-hover:blur-[20px] transition-all"></div>
                                
                                {/* 3D Book Container */}
                                <div className={`relative w-full aspect-[2/3] rounded-r-lg rounded-l-sm overflow-hidden shadow-2xl transition-all duration-500 transform-style-3d group-hover:rotate-y-[-5deg] group-hover:translate-x-2 group-hover:-translate-y-4 ${isUnlocked ? 'ring-2 ring-[#d4af37]/50' : 'ring-1 ring-black/50'}`}>
                                    
                                    {/* Availability Badge */}
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
                                               {isUnlocked ? 'Volumen Abierto' : 'Descubre más'}
                                           </span>
                                           {!isUnlocked && (
                                                <>
                                                    <span className="block mt-1 font-headline font-bold text-[#d4af37] drop-shadow-md text-sm">
                                                        {book.price}
                                                    </span>
                                                    <span className="block mt-1 text-[10px] text-[#f4ead0]/60 uppercase tracking-widest">
                                                        (Toca para ver info)
                                                    </span>
                                                </>
                                           )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
