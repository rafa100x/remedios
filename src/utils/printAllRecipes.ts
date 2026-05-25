import { categories, Category, Recipe, Ingredient } from '../data/recipes';
import { watermarkBase64 } from './watermarkBase64';

// SVG Icons for the boxes
const leafIcon = `<svg viewBox="0 0 24 24" width="18" height="18" stroke="#689f38" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" style="margin-right:6px; flex-shrink:0"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`;
const toolIcon = `<svg viewBox="0 0 24 24" width="18" height="18" stroke="#5d4037" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" style="margin-right:6px; flex-shrink:0"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`;
const dropIcon = `<svg viewBox="0 0 24 24" width="18" height="18" stroke="#1976d2" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" style="margin-right:6px; flex-shrink:0"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>`;
const warningIcon = `<svg viewBox="0 0 24 24" width="18" height="18" stroke="#fbc02d" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" style="margin-right:6px; flex-shrink:0"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>`;
const heartIcon = `<svg viewBox="0 0 24 24" width="18" height="18" stroke="#d84315" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" style="margin-right:6px; flex-shrink:0"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`;
const mapIcon = `<svg viewBox="0 0 24 24" width="18" height="18" stroke="#795548" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" style="margin-right:6px; flex-shrink:0"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg>`;

// Helper to format text with steps
const formatInstructions = (text: string) => {
  const lines = text.split('\\n').map(s => s.trim()).filter(s => s.length > 0);
  if (lines.length === 1 && !lines[0].match(/^\\d+\\./)) {
    return `<p style="margin:0; font-size:10pt;">${text}</p>`;
  }
  return `<ol class="steps-list">
    ${lines.map(step => {
      const match = step.match(/^(\\d+\\.)?\\s*(.*)/);
      if (match && match[1]) {
        return `<li><strong>${match[1]}</strong> ${match[2]}</li>`;
      }
      return `<li>${step}</li>`;
    }).join('')}
  </ol>`;
};

// We format all recipes into a printable HTML string.
export const printAllRecipesAsBook = () => {
  const win = window.open('', '_blank');
  if (!win) return;

  const style = `
    @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Lora:ital,wght@0,400;0,600;1,400&display=swap');
    
    body { 
      font-family: 'Lora', serif; 
      padding: 0; 
      margin: 0; 
      color: #333; 
      background: white;
      font-size: 9pt;
      line-height: 1.35;
    }
    
    * {
      box-sizing: border-box;
    }

    .cover {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      text-align: center;
      page-break-after: always;
      position: relative;
      background-color: #fdfaf2;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    .cover h1 {
      font-family: 'Cinzel', serif;
      font-size: 50pt;
      color: #2c1600;
      margin-bottom: 20px;
    }
    .cover h2 {
      font-size: 20pt;
      color: #5a3a22;
      font-style: italic;
    }
    
    .index-page-container {
      padding: 20px 40px;
      page-break-after: always;
      position: relative;
      max-width: 900px;
      margin: 0 auto;
      background-color: white;
    }

    .watermark-text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(-45deg);
      font-size: 110px;
      font-family: 'Cinzel', serif;
      color: rgba(141, 110, 99, 0.18);
      z-index: 0;
      pointer-events: none;
      white-space: nowrap;
      text-transform: uppercase;
      font-weight: bold;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
      user-select: none;
    }
    
    .recipe-content {
      position: relative;
      z-index: 10;
      height: 100%;
    }
    
    .recipe-page {
      padding: 20px 40px;
      page-break-after: always;
      position: relative;
      height: 100vh; /* Replaced below for print */
      max-height: 28.5cm; /* Replaced below for print */
      overflow: hidden;
      max-width: 900px;
      margin: 0 auto;
      background-color: white;
      box-sizing: border-box;
    }
    .top-header {
      text-align: center;
      font-size: 7pt;
      color: #888;
      text-transform: uppercase;
      letter-spacing: 1px;
      border-bottom: 1px solid #ddd;
      margin-bottom: 15px;
      padding-bottom: 5px;
    }
    .recipe-title-bar {
      background-color: #f6efe9;
      border-top: 1px solid #e2d3c1;
      border-bottom: 1px solid #e2d3c1;
      padding: 10px 20px;
      text-align: center;
      margin-bottom: 15px;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    .recipe-title-bar h1 {
      font-family: 'Playfair Display', serif;
      font-size: 22pt;
      color: #5d4037;
      margin: 0 0 2px 0;
    }
    .recipe-title-bar h2 {
      font-family: sans-serif;
      font-size: 9pt;
      color: #8d6e63;
      margin: 0;
      font-style: italic;
    }
    
    .image-gallery {
      display: flex;
      gap: 10px;
      margin-bottom: 15px;
      height: 160px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }
    .image-gallery .img-wrap {
      flex: 1;
      overflow: hidden;
      border: 1px solid #d6c7af;
      background-color: #e9deb8;
      position: relative;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    .image-gallery .img-wrap::after {
      content: '';
      position: absolute;
      inset: 0;
      background: rgba(0,0,0,0.05);
      pointer-events: none;
    }
    .image-gallery img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .jar-zoom-bg {
      background-color: #27140c !important;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .jar-zoom-bg img {
      object-fit: contain;
      width: 80%;
      height: 80%;
      transform: scale(1.1);
      filter: drop-shadow(2px 4px 6px rgba(0,0,0,0.4));
    }
    
    .content-columns {
      column-count: 2;
      column-gap: 30px;
      text-align: justify;
    }
    
    .description {
      margin-bottom: 20px;
    }
    .drop-cap {
      float: left;
      font-size: 40pt;
      line-height: 35pt;
      padding-right: 8px;
      padding-top: 4px;
      font-family: 'Playfair Display', serif;
      color: #8a3c1f;
    }
    
    .box {
      border: 1px solid #e0e0e0;
      padding: 10px 15px;
      margin-bottom: 15px;
      break-inside: avoid;
      page-break-inside: avoid;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    .box.ingredients {
      background-color: #f1f8e9;
      border-top: 3px solid #8bc34a;
    }
    .box.premium-origin {
      background-color: #efebe9;
      border-top: 3px solid #8d6e63;
    }
    .box.premium-treatment {
      background-color: #fbe9e7;
      border-top: 3px solid #ff8a65;
    }
    .box.dosis {
      background-color: #e3f2fd;
      border-top: 3px solid #42a5f5; 
    }
    .box.notas {
      background-color: #fff8e1;
      border-top: 3px solid #ffca28;
    }
    
    .box-header {
      font-size: 10pt;
      font-weight: bold;
      color: #3e2723;
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid rgba(0,0,0,0.1);
      padding-bottom: 4px;
    }
    
    .ingredients-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .ingredients-list li {
      margin-bottom: 6px;
      display: flex;
      align-items: flex-start;
      font-size: 9pt;
    }
    .ingredients-list li::before {
      content: '✓';
      color: #689f38;
      margin-right: 8px;
      font-weight: bold;
    }
    
    .instructions-header {
      font-size: 11pt;
      font-weight: bold;
      color: #3e2723;
      margin-bottom: 8px;
      margin-top: 5px;
      display: flex;
      align-items: center;
      break-after: avoid;
      page-break-after: avoid;
    }
    
    .steps-list {
      padding-left: 20px;
      margin: 0 0 15px 0;
      font-size: 9pt;
    }
    .steps-list li {
      margin-bottom: 8px;
    }
    
    .page-footer {
      position: absolute;
      bottom: 15px;
      left: 0;
      right: 0;
      text-align: center;
    }
    .page-footer-blob {
      display: inline-block;
      background-color: #8d6e63;
      border: 3px solid #e2d3c1;
      color: white;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      line-height: 34px;
      font-weight: bold;
      font-family: serif;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    @media print {
      @page { margin: 0; size: auto; } /* margin 0 hides browser info/headers */
      body { -webkit-print-color-adjust: exact; print-color-adjust: exact; padding: 0 !important; }
      
      .cover { 
         padding: 10mm 15mm; 
         box-sizing: border-box; 
      }
      .index-page-container { 
         padding: 15mm 15mm; 
         page-break-after: always; 
         box-sizing: border-box; 
         height: auto;
         max-height: none; 
      }
      .disclaimer-page {
         padding: 15mm 15mm !important; 
         page-break-after: always; 
         box-sizing: border-box; 
         height: 100vh;
      }
      .recipe-page { 
         padding: 15mm 15mm; 
         max-width: 100%; 
         margin: 0; 
         height: 100vh; 
         position: relative; 
         overflow: hidden; 
         box-sizing: border-box; 
         page-break-after: always; 
         page-break-inside: avoid; 
      }
    }
  `;

  // Get all recipes in a flat list for calculation
  const allRecipes: Recipe[] = [];
  categories.forEach(cat => {
    cat.recipes.forEach(r => allRecipes.push(r));
  });

  // Calculate pages: Recipe pages will simply start from 1
  let currentPage = 1; 
  
  const pageMap: Record<number, number> = {};
  categories.forEach(cat => {
    if (cat.recipes.length === 0) return;
    cat.recipes.forEach(r => {
      pageMap[r.id] = currentPage;
      currentPage++; // Each recipe gets 1 page
    });
  });

  let html = `
    <html>
      <head>
        <title>Grimorio de Remedios Naturales</title>
        <style>${style}</style>
      </head>
      <body>
        <div class="cover">
          <div class="watermark-text">Maestro Ancestral</div>
          <img src="https://cdn.shopify.com/s/files/1/0988/7904/5945/files/mockup-producto-principal_d05515f3-5c0a-4718-8b0a-bc2d0054df44.jpg?v=1775521634" style="max-width: 80%; max-height: 50vh; object-fit: contain; margin-bottom: 30px; position: relative; z-index: 10;" />
          <h1 style="position: relative; z-index: 10;">El Gran Grimorio</h1>
          <h2 style="position: relative; z-index: 10;">Colección Completa de Remedios Naturales</h2>
          <p style="margin-top: 50px; position: relative; z-index: 10;">Contiene ${allRecipes.length} preparaciones</p>
        </div>
        
        <div class="disclaimer-page" style="page-break-after: always; padding: 20px 40px; position: relative; max-width: 900px; margin: 0 auto; height: 100vh; display: flex; flex-direction: column; justify-content: center; box-sizing: border-box; background-color: white;">
          <div class="watermark-text">Maestro Ancestral</div>
          <div style="position: relative; z-index: 10;">
            <h2 style="text-align: center; font-family:'Cinzel', serif; font-size:24pt; color:#2c1600; margin-bottom:40px; border-bottom: 2px solid #8d6e63; padding-bottom: 10px;">Avisos Legales y Derechos de Autor</h2>
            <div style="font-size: 11pt; line-height: 1.6; color: #3e2723; background-color: #fdfaf2; border-left: 4px solid #8d6e63; padding: 20px; margin-bottom: 30px;">
               <p style="margin-top: 0; font-family:'Courier New', monospace; font-size:12pt;"><strong>NÚMERO DE REGISTRO Y PROTECCIÓN LEGAL: 8442-A7-889X-2026</strong></p>
               <p style="margin-top: 15px;"><strong>Descargo de Responsabilidad Médica:</strong> La información contenida en este documento ("El Gran Grimorio") está destinada únicamente a fines educativos e informativos y no debe considerarse ni utilizarse como consejo médico, diagnóstico o tratamiento.</p>
               <p>Siempre busque el consejo de su médico u otro proveedor de salud calificado si tiene alguna pregunta con respecto a una condición médica. Nunca demore en buscar atención médica profesional debido a algo que haya leído en este documento.</p>
            </div>
            <div style="font-size: 11pt; line-height: 1.6; color: #591c1c; background-color: #fbe9e7; border-left: 4px solid #d84315; padding: 20px;">
               <p style="margin-top: 0; font-weight: bold; text-transform: uppercase;">Advertencia Penal y Derechos de Autor:</p>
               <p style="margin-bottom: 0;"><strong>ESTA OBRA CUENTA CON TRAZABILIDAD DIGITAL Y MARCA DE AGUA.</strong> Todos los contenidos de esta publicación se encuentran estrictamente protegidos por la Ley Internacional de Propiedad Intelectual y Derechos de Autor (Tratados de la OMPI). Queda terminantemente prohibida su reproducción, distribución, venta, copia o difusión pública, ya sea de forma total o parcial, por cualquier formato físico o digital.</p>
               <p style="margin-bottom: 0; margin-top: 10px; font-weight: bold;">Cualquier intento de copia, piratería o distribución no autorizada será penado por la ley. Se iniciarán acciones legales y denuncias penales inmediatas, sin previo aviso, para el secuestro del material y reclamo de daños y perjuicios de máxima cuantía contra quienes infrinjan estos derechos.</p>
            </div>
            <p style="font-size: 10pt; text-align: center; color: #888; margin-top: 60px; font-style: italic;">&copy; ${new Date().getFullYear()} - Todos los derechos reservados bajo severo apercibimiento de ley.</p>
          </div>
        </div>

        <div class="index-page-container">
          <div class="watermark-text">Maestro Ancestral</div>
          <div style="position: relative; z-index: 10;">
            <div class="top-header">ÍNDICE DE AFECCIONES Y TRATAMIENTOS</div>
          <h2 style="font-family:'Cinzel', serif; font-size:24pt; text-align:center; color:#2c1600; border-bottom:1px solid #8d6e63; padding-bottom:10px; margin-bottom:20px;">Índice por Afección</h2>
          
          <div style="column-count: 2; column-gap: 40px; text-align: left;">
            ${categories.filter(c => c.recipes.length > 0).map(category => `
               <div style="break-inside: avoid; margin-bottom: 20px;">
                 <h3 style="font-family:'Cinzel', serif; font-size:13pt; color:#8a3c1f; border-bottom:1px solid #8a3c1f; margin-bottom: 8px; padding-bottom:2px;">${category.name}</h3>
                 ${category.recipes.map(recipe => `
                   <div style="display:flex; justify-content:space-between; font-size:9.5pt; margin-bottom:4px; border-bottom:1px dotted #e0e0e0; align-items:baseline;">
                     <span style="max-width:85%;">${recipe.title} <i style="color:#666; font-size:7.5pt; margin-left:4px;">(${recipe.purpose})</i></span>
                     <span style="font-weight:bold;">${pageMap[recipe.id]}</span>
                   </div>
                 `).join('')}
               </div>
            `).join('')}
          </div>
          </div>
        </div>
  `;

  // Recipe Pages
  categories.forEach((category) => {
    if (category.recipes.length === 0) return;

    category.recipes.forEach((recipe) => {
      const isFallback = !recipe.imageUrl || recipe.imageUrl.includes('picsum.photos') || recipe.imageUrl.includes('unsplash.com');
      const realImageUrl = isFallback 
        ? `https://firebasestorage.googleapis.com/v0/b/remedios-ancestrasel.firebasestorage.app/o/recetas%2Fbotica-receta-${recipe.id.toString().padStart(3, '0')}.jpg?alt=media` 
        : recipe.imageUrl;
      
      const jarImageUrl = `https://firebasestorage.googleapis.com/v0/b/remedios-ancestrasel.firebasestorage.app/o/frascos%2Fbotica-frasco-${recipe.id.toString().padStart(3, '0')}.${recipe.id >= 1001 ? 'jpg' : 'png'}?alt=media`;

      // Extract description (if purpose is long we use it, else we make a blurb)
      let descText = recipe.purpose;
      if (recipe.ingredients && recipe.ingredients.length > 0 && descText.length < 50) {
        descText += `. Preparado milenario enfocado en restaurar el equilibrio natural de la afección utilizando elementos botánicos magistrales como ${recipe.ingredients[0].es.toLowerCase()} `;
        if (recipe.ingredients.length > 1) {
             descText += ` y ${recipe.ingredients[1].es.toLowerCase()}`;
        }
        descText += `.`;
      }
      
      const firstLetter = descText.charAt(0);
      const restOfDesc = descText.slice(1);

      const conditionPremium = `Esta formulación responde positivamente a los desequilibrios propios de ${recipe.purpose.toLowerCase()}. El tratamiento continuado ayuda a restablecer los ciclos naturales del organismo promoviendo un alivio prolongado y desde la raíz anatómica del problema, actuando en sinergia con las defensas naturales y no suprimiendo únicamente los síntomas superficiales.`;
      
      const originPremium = recipe.ingredients.length > 0 
        ? `Los componentes principales, en particular ${recipe.ingredients[0].es.toLowerCase()}, deben adquirirse preferentemente en boticas especializadas, herbolarios certificados o directamente de cultivos de comercio justo libres de agrotóxicos. Es vital asegurar que el producto presente un color vívido, sin moho visible, y aromas pungentes para garantizar una alta concentración de principios biológicamente activos y potenciar el tratamiento.`
        : `Los componentes de este preparado deben conseguirse de fuentes botánicas puras y rastreables. Asegurar la trazabilidad y la recolección estacional es clave para garantizar la viabilidad clínica del tratamiento y la óptima extracción de los componentes activos de cada hierba.`;

      html += `
        <div class="recipe-page">
          <div class="watermark-text">Maestro Ancestral</div>
          <div class="recipe-content">
            <div class="top-header">LOS ${allRecipes.length} REMEDIOS NATURALES OLVIDADOS DE LA ABUELA</div>
            
            <div class="recipe-title-bar">
            <h1>${recipe.title}</h1>
            <h2>Para tratar estrictamente ${recipe.purpose.toLowerCase()}</h2>
          </div>

          <div class="image-gallery">
            <div class="img-wrap">
               <img src="${realImageUrl}" style="object-position: left center; filter: sepia(0.2);" onerror="this.src='https://images.unsplash.com/photo-1615554867919-482245b73e3a?q=80&w=600&auto=format&fit=crop'" />
            </div>
            <div class="img-wrap jar-zoom-bg">
               <img src="${jarImageUrl}" onerror="this.src='https://images.unsplash.com/photo-1615554867919-482245b73e3a?q=80&w=400&auto=format&fit=crop'" />
            </div>
            <div class="img-wrap">
               <img src="${realImageUrl}" style="object-position: right center; filter: sepia(0.2);" onerror="this.src='https://images.unsplash.com/photo-1615554867919-482245b73e3a?q=80&w=600&auto=format&fit=crop'" />
            </div>
          </div>
          
          <div class="content-columns">
            <div class="description">
              <span class="drop-cap">${firstLetter}</span>${restOfDesc}
            </div>

            <div class="box premium-treatment">
              <div class="box-header">${heartIcon} Afección y Tratamiento</div>
              <p style="margin:0;">${conditionPremium}</p>
            </div>

            <div class="box premium-origin">
              <div class="box-header">${mapIcon} Origen y Adquisición</div>
              <p style="margin:0;">${originPremium}</p>
            </div>

            <div class="box ingredients">
              <div class="box-header">${leafIcon} Ingredientes Selectos</div>
              <ul class="ingredients-list">
                ${recipe.ingredients.map(ing => `
                  <li>
                    <div>
                      <strong>${ing.quantity || ''}</strong> ${ing.es} 
                      ${ing.la ? `<br/><span style="font-size:8.5pt; color:#666; font-style:italic">(${ing.la})</span>` : ''}
                    </div>
                  </li>
                `).join('')}
              </ul>
            </div>

            <div class="instructions-header">${toolIcon} Preparación Magistral</div>
            ${formatInstructions(recipe.instructions)}
            
            <div class="box dosis">
              <div class="box-header">${dropIcon} Tratamiento y Dosis Crítica</div>
              <p style="margin:0;">${recipe.dosage || 'Tomar con estricta precaución.'} Para asegurar la correcta metabolización del remedio, consúmase sistemáticamente según las vías señaladas por el practicante.</p>
            </div>
            
            ${recipe.notes ? `
            <div class="box notas">
              <div class="box-header">${warningIcon} Recomendaciones Estrictas</div>
              <p style="margin:0;">${recipe.notes} <br/><br/><strong>Aviso Clínico:</strong> Conserve el preparado protegido de la radiación lumínica y la humedad. En caso de presentar incompatibilidades gástricas, sistémicas o alergias cruzadas, suspender la administración.</p>
            </div>
            ` : ''}

          </div>
          </div>

          <div class="page-footer">
             <div class="page-footer-blob">${pageMap[recipe.id]}</div>
          </div>
        </div>
      `;
    });
  });

  html += `
      </body>
    </html>
  `;

  win.document.write(html);
  win.document.close();
  win.focus();
  
  // Wait for images to load before printing (approx)
  setTimeout(() => {
    win.print();
  }, 2000);
};

