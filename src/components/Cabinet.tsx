import { motion } from 'motion/react';
import { categories, Category } from '../data/recipes';
import { Star, Wind, Coffee, Moon, ShieldPlus, HeartPulse, Droplet, Activity, Flower2, Stethoscope } from 'lucide-react';

interface CabinetProps {
  onSelectCategory: (category: Category) => void;
}

const CategoryDecorations: Record<number, { Icon: any, img: string }> = {
  0: { Icon: Star, img: "https://images.unsplash.com/photo-1596435017006-2581622315cc?w=400&q=70&fit=crop" },
  1: { Icon: Wind, img: "https://images.unsplash.com/photo-1628157745778-98e3bda7e31d?w=400&q=70&fit=crop" },
  2: { Icon: Coffee, img: "https://images.unsplash.com/photo-1555562094-1a2b724458df?w=400&q=70&fit=crop" },
  3: { Icon: Moon, img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&q=70&fit=crop" },
  4: { Icon: ShieldPlus, img: "https://images.unsplash.com/photo-1625316708584-6014eeae0af9?w=400&q=70&fit=crop" },
  5: { Icon: HeartPulse, img: "https://images.unsplash.com/photo-1536640706530-5882672fa9ff?w=400&q=70&fit=crop" },
  6: { Icon: Droplet, img: "https://images.unsplash.com/photo-1506544777-64cf8f2b38f8?w=400&q=70&fit=crop" },
  7: { Icon: Activity, img: "https://images.unsplash.com/photo-1564032890695-12a20b721867?w=400&q=70&fit=crop" },
  8: { Icon: Flower2, img: "https://images.unsplash.com/photo-1610444391216-7ffba214d026?w=400&q=70&fit=crop" },
  9: { Icon: Stethoscope, img: "https://images.unsplash.com/photo-1556228578-831e5fdf56f9?w=400&q=70&fit=crop" },
};

export function Cabinet({ onSelectCategory }: CabinetProps) {
  return (
    <section id="cabinet" className="relative min-h-screen py-16 px-4 md:px-12 lg:px-24 bg-[#f8f6f0]">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-60 mix-blend-multiply pointer-events-none z-0"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-12 text-center">
          <h2 className="font-headline font-black text-4xl md:text-5xl text-[#556b3e] mb-4 drop-shadow-sm uppercase tracking-tight">Los 200 Remedios</h2>
          <p className="font-accent italic text-xl text-[#8a3c1f] max-w-lg mx-auto">Selecciona la categoría para abrir el recetario de la abuela.</p>
        </div>

        <div className="flex flex-col gap-6">
          {categories.map((category, index) => {
            const decoration = CategoryDecorations[category.id] || CategoryDecorations[0];
            const Icon = decoration.Icon;
            
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.05, ease: [0.4, 0, 0.2, 1] }}
                onClick={() => onSelectCategory(category)}
                className="group relative cursor-pointer"
              >
                <div className="relative overflow-hidden flex min-h-[120px] flex-col sm:flex-row sm:items-center justify-between px-6 py-6 bg-white hover:bg-[#fdfbf4] rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.03)] border border-[#e5dfbe] transition-all duration-500 transform group-hover:-translate-y-1 group-hover:shadow-[0_12px_30px_rgba(138,60,31,0.1)] gap-4">
                  
                  {/* Background Image Watermark */}
                  <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none fade-mask">
                     <img src={decoration.img} className="w-full h-full object-cover mix-blend-multiply opacity-20 filter sepia-[.3]" alt="" />
                     <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 z-10 w-full relative">
                    <div className="w-16 h-16 shrink-0 rounded-full bg-[#fdfaf2] flex items-center justify-center border-2 border-[#d6c7af] shadow-inner group-hover:border-[#8a3c1f] transition-colors duration-500 relative overflow-hidden">
                      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] mix-blend-multiply"></div>
                      <Icon className="w-7 h-7 text-[#8a3c1f] relative z-10 group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    
                    <div className="flex flex-col">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-accent italic font-bold tracking-widest text-[#8a6a4b] text-xs sm:text-sm uppercase">
                          {category.id === 0 ? "Colección Especial" : `Recetas ${(category.range[0]).toString().padStart(3, '0')} a ${(category.range[1]).toString().padStart(3, '0')}`}
                        </span>
                      </div>
                      <h3 className="font-headline font-black text-[#201004] text-xl sm:text-2xl uppercase tracking-tight leading-none group-hover:text-[#556b3e] transition-colors duration-300">
                        {category.name}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-end z-10 shrink-0 relative">
                    <div className="w-12 h-12 rounded-full border border-[#d6c7af] flex items-center justify-center group-hover:bg-[#556b3e] group-hover:border-[#556b3e] transition-all duration-300 bg-white shadow-sm">
                      <svg className="w-6 h-6 text-[#8a6a4b] group-hover:text-white transition-colors duration-300 transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
