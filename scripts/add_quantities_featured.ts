import fs from 'fs';
import path from 'path';

const featuredPath = path.join(process.cwd(), 'src/data/featured.ts');
let content = fs.readFileSync(featuredPath, 'utf8');

const match = content.match(/export const featuredCategory: Category = (\{[\s\S]*\}\s*);/);
if (!match) {
  console.error("Could not find featuredCategory object");
  process.exit(1);
}

let featuredObjStr = match[1];
let objRaw;
try {
  objRaw = eval(`(${featuredObjStr})`);
} catch(e) {
  console.error(e);
  process.exit(1);
}

for (let r of objRaw.recipes) {
  let isJarabe = r.title.toLowerCase().includes('jarabe');
  let isTintura = r.title.toLowerCase().includes('tintura');
  let isInfusion = r.title.toLowerCase().includes('infusión');
  let isDecoccion = r.title.toLowerCase().includes('decocción');
  let isCataplasma = r.title.toLowerCase().includes('cataplasma');
  let isUnguento = r.title.toLowerCase().includes('ungüento');
  let isMiel = r.title.toLowerCase().includes('miel');
  let isJugo = r.title.toLowerCase().includes('jugo');
  let isAgua = r.title.toLowerCase().includes('agua');
  let isTonico = r.title.toLowerCase().includes('tónico') || r.title.toLowerCase().includes('amoxicilina');

  for (let i of r.ingredients) {
    if (i.la === 'Base excipiente' || i.la === 'Base' || i.es.toLowerCase().includes('vino') || i.es.toLowerCase().includes('miel') || i.es.toLowerCase().includes('agua') || i.es.toLowerCase().includes('aceite') || i.es.toLowerCase().includes('alcohol') || i.es.toLowerCase().includes('vinagre')) {
      if (isJarabe) i.quantity = '1 litro';
      else if (isTintura) i.quantity = '500 ml';
      else if (isInfusion || isDecoccion || isAgua) i.quantity = '250 ml (1 taza)';
      else if (isCataplasma) i.quantity = 'Cantidad necesaria';
      else if (isUnguento) i.quantity = '100 gramos';
      else if (isMiel) i.quantity = '500 ml';
      else if (isJugo) i.quantity = '1/2 vaso';
      else if (isTonico) i.quantity = '1 litro';
      else i.quantity = '250 ml';
    } else {
      if (isJarabe) i.quantity = '100 gramos';
      else if (isTintura) i.quantity = '50 gramos';
      else if (isInfusion || isDecoccion || isAgua) i.quantity = '1 cucharada sopera';
      else if (isCataplasma) i.quantity = '2 puñados grandes';
      else if (isUnguento) i.quantity = '30 gramos';
      else if (isMiel) i.quantity = '1 unidad/pieza';
      else if (isJugo) i.quantity = '1 puñado';
      else if (isTonico) i.quantity = '1 unidad/pieza';
      else i.quantity = '15 gramos';
    }
  }
}

const newContent = content.substring(0, match.index) + 
  'export const featuredCategory: Category = ' + JSON.stringify(objRaw, null, 2) + ';\n';

fs.writeFileSync(featuredPath, newContent);
console.log("Featured recipes updated with quantities");
