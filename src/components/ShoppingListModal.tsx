import { motion, AnimatePresence } from 'motion/react';
import { Recipe } from '../data/recipes';
import { useState, useEffect } from 'react';

interface ShoppingListModalProps {
  onClose: () => void;
  recipes: Recipe[];
}

interface IngredientGroup {
  category: string;
  items: { name: string; la: string; recipeIds: number[]; recipeTitles: string[] }[];
}

export function ShoppingListModal({ onClose, recipes }: ShoppingListModalProps) {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('grimorio_shopping_checks');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return {};
  });

  useEffect(() => {
    localStorage.setItem('grimorio_shopping_checks', JSON.stringify(checkedItems));
  }, [checkedItems]);

  const toggleCheck = (itemName: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [itemName]: !prev[itemName]
    }));
  };
  // Aggregate ingredients
  const getIngredientCategory = (name: string) => {
    const n = name.toLowerCase();
    if (n.includes('vino') || n.includes('miel') || n.includes('vinagre') || n.includes('ajo') || n.includes('cebolla') || n.includes('limón') || n.includes('café') || n.includes('aceite de oliva')) return 'Almacén/Mercado Local';
    if (n.includes('alcohol') || n.includes('glicerina') || n.includes('aceite de almendras') || n.includes('cera') || n.includes('arcilla')) return 'Farmacia Botánica';
    if (n.includes('eucalipto') || n.includes('llantén') || n.includes('gordolobo') || n.includes('melisa') || n.includes('valeriana') || n.includes('sauco') || n.includes('caléndula') || n.includes('romero') || n.includes('tomillo')) return 'Herboristería Tradicional';
    return 'Herboristería Especializada / Otros';
  };

  const ingredientMap = new Map<string, { la: string, category: string, recipeIds: Set<number>, recipeTitles: Set<string> }>();

  recipes.forEach(recipe => {
    recipe.ingredients.forEach(ing => {
      const key = ing.es;
      if (!ingredientMap.has(key)) {
        ingredientMap.set(key, {
             la: ing.la,
             category: getIngredientCategory(ing.es),
             recipeIds: new Set<number>(),
             recipeTitles: new Set<string>()
        });
      }
      const entry = ingredientMap.get(key)!;
      entry.recipeIds.add(recipe.id);
      entry.recipeTitles.add(recipe.title);
    });
  });

  const categories = Array.from(new Set(Array.from(ingredientMap.values()).map(i => i.category))).sort();

  const groupedIngredients: IngredientGroup[] = categories.map(cat => {
    return {
      category: cat,
      items: Array.from(ingredientMap.entries())
        .filter(([_, data]) => data.category === cat)
        .map(([name, data]) => ({
          name,
          la: data.la,
          recipeIds: Array.from(data.recipeIds),
          recipeTitles: Array.from(data.recipeTitles)
        }))
        .sort((a, b) => a.name.localeCompare(b.name))
    };
  });

  const handleShareWhatsApp = () => {
    if (groupedIngredients.length === 0) return;
    
    let text = `*📦 Lista de Insumos del Boticario - El Grimorio*\n\n`;
    
    groupedIngredients.forEach(group => {
       text += `_${group.category}_\n`;
       group.items.forEach(item => {
           text += `☐ ${item.name} (${item.la})\n`;
           // Commenting out recipes so it doesn't get too long on WA, but let's keep it brief if needed:
           // text += `   (Para: ${item.recipeTitles.join(', ')})\n`;
       });
       text += `\n`;
    });
    
    text += `¡Listo para preparar remedios naturales! 🌱`;

    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const handlePrintPDF = () => {
    const win = window.open('', '', 'width=900,height=700');
    if (!win) return;
    
    let listHTML = '';
    groupedIngredients.forEach(group => {
       listHTML += `<h3>${group.category}</h3><ul>`;
       group.items.forEach(item => {
           listHTML += `<li><input type="checkbox" /> <strong>${item.name}</strong> <em>(${item.la})</em><br/><span class="meta">Para: ${item.recipeTitles.join(', ')}</span></li>`;
       });
       listHTML += `</ul>`;
    });

    win.document.write(`
      <html>
        <head>
          <title>Lista de Insumos - Grimorio de Salud</title>
          <style>
            body { font-family: 'Georgia', serif; padding: 40px; color: #1a1a1a; line-height: 1.6; max-width: 800px; margin: auto; background-color: #d8ceab; }
            h1 { font-family: 'Georgia', serif; font-size: 32px; color: #201004; margin-bottom: 5px; text-align: center; border-bottom: 2px solid #8a6a4b; padding-bottom: 20px;}
            h3 { font-family: 'Georgia', serif; font-size: 20px; color: #5a3a22; margin-top: 30px; border-bottom: 1px solid #c2b694; padding-bottom: 5px; text-transform: uppercase; letter-spacing: 2px;}
            .meta { font-family: 'Georgia', serif; color: #4a331c; font-style: italic; font-size: 14px; display: block; margin-left: 36px; margin-bottom: 10px;}
            li { font-size: 18px; color: #201004; list-style-type: none; margin-bottom: 8px;}
            input[type="checkbox"] { margin-right: 15px; transform: scale(1.4); }
            @media print {
              body { padding: 0; background-color: white; }
              button { display: none; }
            }
          </style>
        </head>
        <body>
          <h1>📦 Lista de Insumos del Boticario</h1>
          ${groupedIngredients.length === 0 ? '<p style="text-align:center;">La lista está vacía.</p>' : listHTML}
        </body>
      </html>
    `);
    win.document.close();
    win.focus();
    setTimeout(() => {
      win.print();
    }, 600);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6 lg:p-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-[#0a0502]/80 backdrop-blur-md"
          onClick={onClose}
        ></motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", bounce: 0, duration: 0.5 }}
          className="relative w-full h-[100dvh] md:h-auto md:max-h-[92vh] max-w-2xl shadow-2xl md:rounded-3xl overflow-hidden bg-[#d8ceaa] flex flex-col"
        >
          {/* Top Actions */}
          <div className="absolute top-4 right-4 md:top-6 md:right-6 z-50 flex items-center justify-end gap-3 w-full pointer-events-none">
             {recipes.length > 0 && (
                 <>
                    <button
                       onClick={handleShareWhatsApp}
                       className="pointer-events-auto bg-[#4ade80] text-white hover:bg-[#3bcf6d] w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center transition-all shadow-sm"
                       title="Compartir por WhatsApp"
                    >
                       <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.274-.101-.473-.15-.673.15-.197.295-.771.963-.944 1.162-.175.195-.349.21-.646.06-.297-.15-1.265-.462-2.406-1.485-.888-.79-1.486-1.76-1.656-2.059-.173-.298-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                       </svg>
                    </button>
                    <button
                       onClick={handlePrintPDF}
                       className="pointer-events-auto bg-[#e5dfbe] text-[#8a6a4b] hover:bg-white w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center transition-all shadow-sm"
                       title="Descargar en PDF / Imprimir"
                    >
                       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                       </svg>
                    </button>
                 </>
             )}
             <button 
               onClick={onClose}
               className="pointer-events-auto bg-[#e5dfbe] text-[#8a6a4b] hover:bg-white w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center transition-all shadow-sm"
             >
               <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
               </svg>
             </button>
          </div>

          <div className="p-6 md:p-12 lg:p-14 pt-20 md:pt-24 relative flex-1 overflow-y-auto">
              <div className="text-center mb-8 md:mb-10">
                  <h1 className="font-headline text-4xl md:text-[2.75rem] font-bold text-[#201004] mb-4 tracking-tight">Lista de Insumos</h1>
                  <p className="font-body text-[#3a2212] italic md:text-lg max-w-xs mx-auto">Tus botánicos seleccionados para adquirir en la botica.</p>
              </div>

              {groupedIngredients.length === 0 ? (
                  <div className="text-center p-12 bg-[#8a6a4b]/5 rounded-xl border border-[#8a6a4b]/20">
                      <p className="font-accent text-[#8a6a4b] italic text-lg mb-4">El fardo está vacío.</p>
                      <button onClick={onClose} className="px-6 py-2 bg-[#8a3c1f] text-white rounded-full font-accent uppercase tracking-widest text-sm hover:bg-[#6e2e16] transition-colors">Volver a las Fórmulas</button>
                  </div>
              ) : (
                  <div className="space-y-8">
                      {groupedIngredients.map((group) => (
                          <section key={group.category} className="bg-[#e5dfbe] p-6 md:p-8 rounded-2xl shadow-[0_2px_10px_rgba(40,20,5,0.05)] border border-[#d2cba0]">
                              <h3 className="font-headline text-[#6a543b] text-sm md:text-base uppercase tracking-[0.2em] border-b border-[#c2b694] pb-3 mb-5 flex items-center gap-3">
                                  <svg className="w-5 h-5 text-[#8a6a4b]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                  {group.category}
                              </h3>
                              <ul className="flex flex-col gap-5">
                                 {group.items.map((item, idx) => (
                                     <li key={idx} className="flex gap-4 cursor-pointer" onClick={() => toggleCheck(item.name)}>
                                         <div className="mt-1 shrink-0">
                                             <div className={`w-6 h-6 md:w-7 md:h-7 rounded border-2 border-[#8a6a4b]/60 flex items-center justify-center transition-colors shadow-inner ${checkedItems[item.name] ? 'bg-[#8a6a4b]' : 'bg-[#d8ceaa]'}`}>
                                                {checkedItems[item.name] && <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
                                             </div>
                                         </div>
                                         <div className={`transition-all ${checkedItems[item.name] ? 'opacity-50' : 'opacity-100'}`}>
                                             <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
                                                 <span className={`font-headline font-bold text-[#2a1308] text-lg md:text-xl ${checkedItems[item.name] ? 'line-through' : ''}`}>{item.name}</span>
                                                 <span className="font-accent italic text-[#8a6a4b] text-sm md:text-md">/ {item.la}</span>
                                             </div>
                                             <div className="font-body text-[#5a422a] text-sm italic mt-1 leading-snug">
                                                 Requerido para: {item.recipeTitles.join(', ')}
                                             </div>
                                         </div>
                                     </li>
                                 ))}
                              </ul>
                          </section>
                      ))}
                  </div>
              )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
