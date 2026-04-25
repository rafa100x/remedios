import { motion } from 'motion/react';
import { ArrowLeft, BookOpen, Bookmark, BookmarkCheck } from 'lucide-react';
import Markdown from 'react-markdown';
import { BOOK_CONTENTS } from '../data/bookContents';
import { useAuth } from '../contexts/AuthContext';
import { useEffect, useRef } from 'react';

interface BookReaderProps {
    bookId: string;
    onClose: () => void;
}

export function BookReader({ bookId, onClose }: BookReaderProps) {
    const { bookProgress, bookmarks, updateProgress, toggleBookmark } = useAuth();
    const bookContent = BOOK_CONTENTS[bookId];
    
    // Auto-scroll to last read
    const contentRef = useRef<HTMLDivElement>(null);
    const chapterRefs = useRef<Record<string, HTMLElement | null>>({});

    useEffect(() => {
        if (!bookContent) return;
        const lastRead = bookProgress[bookId];
        if (lastRead && chapterRefs.current[lastRead]) {
            setTimeout(() => {
                chapterRefs.current[lastRead]?.scrollIntoView({ behavior: 'smooth' });
            }, 500);
        }
    }, [bookContent, bookId, bookProgress]);

    useEffect(() => {
        if (!bookContent || !contentRef.current) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const chapterId = entry.target.id;
                    updateProgress(bookId, chapterId);
                }
            });
        }, {
            root: contentRef.current,
            threshold: 0.1, // Trigger when 10% of chapter is visible
            rootMargin: '-10% 0px -80% 0px' // Target the top of the viewport
        });

        Object.values(chapterRefs.current).forEach(ref => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, [bookContent, bookId, updateProgress]);

    if (!bookContent) {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-[#f4ead0] text-[#5c3716]">
                <h2 className="text-2xl font-headline mb-4">Grimorio no encontrado.</h2>
                <button onClick={onClose} className="px-6 py-2 bg-[#5c3716] text-[#f4ead0] rounded">
                    Volver a la Biblioteca
                </button>
            </div>
        );
    }

    const currentBookmarks = bookmarks[bookId] || [];

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#fdfaf2] overflow-hidden flex flex-col"
        >
            {/* Header */}
            <header className="flex-none bg-[#1a0f08] border-b-2 border-[#3a1a0f]/50 text-[#f4ead0] p-4 flex items-center justify-between shadow-md relative z-20">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')] opacity-20 pointer-events-none mix-blend-overlay"></div>
                <button 
                    onClick={onClose}
                    className="relative z-10 flex items-center gap-2 hover:text-[#d4af37] transition-colors font-accent tracking-widest text-sm uppercase"
                >
                    <ArrowLeft className="w-5 h-5" />
                    <span>Volver</span>
                </button>
                <div className="relative z-10 flex items-center gap-3">
                    <BookOpen className="w-5 h-5 text-[#d4af37]" />
                    <h1 className="font-headline font-bold text-lg sm:text-xl md:text-2xl tracking-wide">
                        {bookContent.title}
                    </h1>
                </div>
                <div className="w-20"></div> {/* Spacer for centering */}
            </header>

            {/* Read Area Wrapper */}
            <div className="flex-1 overflow-hidden relative flex bg-[#f4ead0]">
                {/* Vintage paper texture over entire reader body */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/rice-paper-3.png')] opacity-60 mix-blend-multiply pointer-events-none z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#e8dcb8]/40 via-transparent to-[#e8dcb8]/40 pointer-events-none z-10"></div>
                
                {/* Content Area - Scrollable */}
                <div ref={contentRef} className="flex-1 overflow-y-auto scroll-smooth p-6 pb-32 relative z-20 selection:bg-[#5c3716]/20">
                    <div className="max-w-3xl mx-auto">
                        
                        <div className="text-center mb-16 pt-10">
                            <h1 className="font-headline text-5xl md:text-6xl text-[#2c1600] font-bold drop-shadow-sm mb-6">{bookContent.title}</h1>
                            <div className="w-24 h-1 bg-[#8a3c1f]/40 mx-auto rounded-full"></div>
                        </div>

                        {bookContent.chapters.map((chapter) => {
                            const isBookmarked = currentBookmarks.includes(chapter.id);
                            return (
                            <section 
                                key={chapter.id} 
                                id={chapter.id} 
                                ref={(el) => { chapterRefs.current[chapter.id] = el; }}
                                className="mb-20"
                            >
                                <div className="flex items-center justify-between border-b border-[#3a1a0f]/20 pb-4 mb-8">
                                    <h2 className="font-headline text-3xl md:text-4xl text-[#3a1a0f] font-bold">
                                        {chapter.title}
                                    </h2>
                                    <button 
                                        onClick={() => toggleBookmark(bookId, chapter.id)}
                                        className={`p-2 rounded-full transition-colors ${isBookmarked ? 'bg-[#d4af37]/20 text-[#d4af37]' : 'hover:bg-[#8a3c1f]/10 text-[#8a3c1f]/50'}`}
                                        title={isBookmarked ? "Quitar Marcador" : "Añadir Marcador"}
                                    >
                                        {isBookmarked ? <BookmarkCheck className="w-6 h-6" /> : <Bookmark className="w-6 h-6" />}
                                    </button>
                                </div>
                                
                                <div className="font-body text-[#1a0f08] text-lg leading-relaxed space-y-6 markdown-content
                                    [&>h2]:font-headline [&>h2]:text-2xl [&>h2]:text-[#5c3716] [&>h2]:mt-10 [&>h2]:mb-4
                                    [&>h3]:font-accent [&>h3]:text-xl [&>h3]:text-[#8a3c1f] [&>h3]:font-bold [&>h3]:mt-8 [&>h3]:mb-3
                                    [&>p]:mb-6 [&>p>strong]:font-bold [&>p>strong]:text-[#3a1a0f]
                                    [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ul>li]:mb-2 [&>ul>li]:marker:text-[#8a3c1f]
                                    [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-6 [&>ol>li]:mb-2 [&>ol>li]:marker:text-[#8a3c1f]
                                    [&>blockquote]:border-l-4 [&>blockquote]:border-[#8a3c1f]/50 [&>blockquote]:pl-6 [&>blockquote]:italic [&>blockquote]:text-[#5a3a22] [&>blockquote]:bg-[#e8dcb8]/30 [&>blockquote]:py-4 [&>blockquote]:rounded-r-lg [&>blockquote]:my-8
                                ">
                                    <Markdown>{chapter.content}</Markdown>
                                </div>
                                <div className="flex justify-center mt-12 opacity-30">
                                   <BookOpen className="w-6 h-6 text-[#8a3c1f]" />
                                </div>
                            </section>
                            );
                        })}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
