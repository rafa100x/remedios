import { motion } from 'motion/react';
import { categories, Category } from '../data/recipes';

interface CabinetProps {
  onSelectCategory: (category: Category) => void;
}

export function Cabinet({ onSelectCategory }: CabinetProps) {
  return (
    <section id="cabinet" className="relative min-h-screen py-24 px-4 md:px-12 lg:px-24 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="font-headline text-4xl md:text-5xl text-primary mb-4">Índice Visual</h2>
          <p className="font-accent italic text-xl text-tertiary/60">La Gran Estantería</p>
        </div>

        <div className="flex flex-col gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
              onClick={() => onSelectCategory(category)}
              className="group relative cursor-pointer"
            >
              {/* Shelf Base */}
              <div className="absolute bottom-0 left-0 right-0 h-4 bg-surface-container-high shadow-[0_10px_20px_rgba(0,0,0,0.5)] border-t ghost-border wood-highlight"></div>
              
              <div className="relative flex items-end justify-between px-8 pb-6 pt-12 bg-surface-container-low/50 hover:bg-surface-container transition-colors duration-500">
                <div className="flex flex-col gap-2 z-10">
                  <span className="font-accent italic text-secondary/60 text-sm">Estante {index + 1}</span>
                  <h3 className="font-headline text-2xl md:text-3xl text-tertiary group-hover:text-primary transition-colors duration-500">
                    {category.name}
                  </h3>
                </div>
                
                <div className="flex items-center gap-4 z-10">
                  <span className="font-headline text-primary/40 text-lg">
                    {category.range[0].toString().padStart(3, '0')} - {category.range[1].toString().padStart(3, '0')}
                  </span>
                  <div className="w-12 h-12 rounded-full border border-outline-variant/30 flex items-center justify-center group-hover:border-primary/50 transition-colors duration-500">
                    <svg className="w-5 h-5 text-primary/50 group-hover:text-primary transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                {/* Abstract Jar Representations */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none">
                  {[...Array(20)].map((_, i) => (
                    <div 
                      key={i} 
                      className="w-3 h-12 md:w-4 md:h-16 rounded-t-sm bg-gradient-to-t from-black to-primary/30"
                      style={{ height: `${Math.random() * 20 + 40}px` }}
                    ></div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
