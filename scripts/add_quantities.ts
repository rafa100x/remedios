import fs from 'fs';
import path from 'path';

const recipesPath = path.join(process.cwd(), 'src/data/recipes.ts');
let content = fs.readFileSync(recipesPath, 'utf8');

// Use a regex to parse out the categories array
const match = content.match(/export const categories: Category\[\] = (\[[\s\S]*\]);?/);
if (!match) {
  console.error("Could not find categories array");
  process.exit(1);
}

const categoriesArrayString = match[1];
// Avoid evaluating featuredCategory because it's imported.
// It might be easier to just match from the first brace { 'id': 1
let cleanString = categoriesArrayString.replace(/featuredCategory,/, '');
let categories = eval(`(${cleanString})`);

for (let c of categories) {
  if (!c) continue;
  for (let r of c.recipes) {
    let isJarabe = r.title.toLowerCase().includes('jarabe');
    let isTintura = r.title.toLowerCase().includes('tintura');
    let isInfusion = r.title.toLowerCase().includes('infusión');
    let isDecoccion = r.title.toLowerCase().includes('decocción');
    let isCataplasma = r.title.toLowerCase().includes('cataplasma');
    let isUnguento = r.title.toLowerCase().includes('ungüento');
    
    for (let i of r.ingredients) {
      if (i.la === 'Base excipiente' || i.la === 'Base' || i.es.toLowerCase().includes('vino') || i.es.toLowerCase().includes('miel') || i.es.toLowerCase().includes('agua') || i.es.toLowerCase().includes('aceite')) {
        if (isJarabe) i.quantity = '1 litro';
        else if (isTintura) i.quantity = '500 ml';
        else if (isInfusion || isDecoccion) i.quantity = '250 ml (1 taza)';
        else if (isCataplasma) i.quantity = 'Cantidad necesaria';
        else if (isUnguento) i.quantity = '100 gramos';
        else i.quantity = '1 vaso / 250 ml';
      } else {
        if (isJarabe) i.quantity = '100 gramos';
        else if (isTintura) i.quantity = '50 gramos';
        else if (isInfusion || isDecoccion) i.quantity = '1 cucharada sopera';
        else if (isCataplasma) i.quantity = '2 puñados grandes';
        else if (isUnguento) i.quantity = '30 gramos';
        else i.quantity = '15 gramos';
      }
    }
  }
}

const newContent = content.substring(0, match.index) + 
  'export const categories: Category[] = [\n  featuredCategory,\n' + JSON.stringify(categories.filter(c => c), null, 2).slice(1) + ';\n';

fs.writeFileSync(recipesPath, newContent);
console.log("Recipes updated with quantities");
