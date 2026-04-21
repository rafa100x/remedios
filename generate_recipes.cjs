const fs = require('fs');
const path = require('path');

const categoriesDef = [
  {
    id: 1, name: "SISTEMA RESPIRATORIO", range: [1, 20], color: "ámbar",
    shelfPrompt: "Primer plano fotorrealista de un estante de madera rústica de boticario. Contiene 20 frascos de vidrio ámbar y verde esmerilado. Etiquetas de papel envejecido legibles con números del 1 al 20. Hojas de eucalipto seco esparcidas.",
    herbs: [
      {es: "Eucalipto", la: "Eucalyptus globulus"}, {es: "Pino silvestre", la: "Pinus sylvestris"}, {es: "Tomillo", la: "Thymus vulgaris"}, {es: "Gordolobo", la: "Verbascum thapsus"}, {es: "Llantén", la: "Plantago major"}, {es: "Saúco", la: "Sambucus nigra"}, {es: "Pulmonaria", la: "Pulmonaria officinalis"}, {es: "Regaliz", la: "Glycyrrhiza glabra"}, {es: "Malva", la: "Malva sylvestris"}, {es: "Orégano", la: "Origanum vulgare"}
    ],
    bases: ["Miel cruda de abeja", "Alcohol de 70°", "Agua de manantial", "Vino blanco", "Aceite de almendras"],
    types: ["Elixir", "Jarabe", "Tintura", "Infusión", "Bálsamo", "Vahos", "Decocción"],
    benefits: ["calmar la tos seca", "despejar las vías respiratorias", "suavizar la garganta irritada", "expulsar la mucosidad", "aliviar la congestión nasal"]
  },
  {
    id: 2, name: "SISTEMA DIGESTIVO Y HEPÁTICO", range: [21, 40], color: "azul cobalto",
    shelfPrompt: "Primer plano fotorrealista de un estante de madera rústica de boticario. Contiene 20 frascos de vidrio azul cobalto y transparente. Etiquetas de papel envejecido legibles con números del 21 al 40. Raíces de diente de león y mortero de latón.",
    herbs: [
      {es: "Diente de león", la: "Taraxacum officinale"}, {es: "Alcachofera", la: "Cynara scolymus"}, {es: "Genciana", la: "Gentiana lutea"}, {es: "Hinojo", la: "Foeniculum vulgare"}, {es: "Manzanilla", la: "Matricaria chamomilla"}, {es: "Boldo", la: "Peumus boldus"}, {es: "Menta piperita", la: "Mentha x piperita"}, {es: "Jengibre", la: "Zingiber officinale"}, {es: "Anís verde", la: "Pimpinella anisum"}, {es: "Melisa", la: "Melissa officinalis"}
    ],
    bases: ["Alcohol de 60°", "Agua purificada", "Vino tinto", "Vinagre de manzana", "Glicerina vegetal"],
    types: ["Gotas", "Tónico amargo", "Infusión", "Extracto", "Macerado", "Licor medicinal"],
    benefits: ["facilitar la digestión pesada", "estimular la función hepática", "aliviar la pesadez estomacal", "reducir los gases y flatulencias", "calmar los espasmos intestinales"]
  },
  {
    id: 3, name: "SISTEMA NERVIOSO Y SALUD MENTAL", range: [41, 60], color: "violeta",
    shelfPrompt: "Primer plano fotorrealista de un estante de madera rústica de boticario. Contiene 20 frascos de vidrio violeta y ámbar. Etiquetas legibles con números del 41 al 60. Flores secas de pasiflora y balanza antigua.",
    herbs: [
      {es: "Pasiflora", la: "Passiflora incarnata"}, {es: "Valeriana", la: "Valeriana officinalis"}, {es: "Lavanda", la: "Lavandula angustifolia"}, {es: "Amapola de California", la: "Eschscholzia californica"}, {es: "Lúpulo", la: "Humulus lupulus"}, {es: "Hierba de San Juan", la: "Hypericum perforatum"}, {es: "Tila", la: "Tilia platyphyllos"}, {es: "Azahar", la: "Citrus aurantium"}, {es: "Melisa", la: "Melissa officinalis"}, {es: "Ashwagandha", la: "Withania somnifera"}
    ],
    bases: ["Alcohol de 70°", "Agua de manantial", "Miel de azahar", "Vino dulce", "Aceite esencial"],
    types: ["Tintura", "Infusión", "Esencia", "Elixir", "Gotas", "Bálsamo relajante"],
    benefits: ["inducir el sueño profundo", "calmar la ansiedad y el nerviosismo", "relajar el sistema nervioso central", "aliviar el estrés mental", "mejorar el estado de ánimo general"]
  },
  {
    id: 4, name: "SISTEMA INMUNOLÓGICO Y VITALIDAD", range: [61, 80], color: "rojo rubí",
    shelfPrompt: "Primer plano fotorrealista de un estante de madera rústica de boticario. Contiene 20 frascos de vidrio rojo rubí y transparente. Etiquetas legibles con números del 61 al 80. Raíces de equinácea y escaramujos secos.",
    herbs: [
      {es: "Equinácea", la: "Echinacea purpurea"}, {es: "Escaramujo", la: "Rosa canina"}, {es: "Astrágalo", la: "Astragalus membranaceus"}, {es: "Eleuterococo", la: "Eleutherococcus senticosus"}, {es: "Reishi", la: "Ganoderma lucidum"}, {es: "Uña de gato", la: "Uncaria tomentosa"}, {es: "Romero", la: "Rosmarinus officinalis"}, {es: "Tomillo", la: "Thymus vulgaris"}, {es: "Ajo negro", la: "Allium sativum"}, {es: "Cúrcuma", la: "Curcuma longa"}
    ],
    bases: ["Alcohol de 70°", "Miel cruda", "Agua purificada", "Vinagre de sidra de manzana", "Glicerina"],
    types: ["Extracto", "Jarabe", "Tintura", "Tónico", "Decocción", "Oxymel"],
    benefits: ["fortalecer las defensas naturales", "aumentar la vitalidad y energía", "prevenir infecciones estacionales", "acelerar la recuperación tras la enfermedad", "estimular el sistema inmune"]
  },
  {
    id: 5, name: "SISTEMA CARDIOVASCULAR Y CIRCULATORIO", range: [81, 100], color: "verde oscuro",
    shelfPrompt: "Primer plano fotorrealista de un estante de madera rústica de boticario. Contiene 20 frascos de vidrio verde oscuro y ámbar. Etiquetas legibles con números del 81 al 100. Bayas de espino blanco y hojas de ginkgo.",
    herbs: [
      {es: "Espino blanco", la: "Crataegus monogyna"}, {es: "Ginkgo", la: "Ginkgo biloba"}, {es: "Castaño de Indias", la: "Aesculus hippocastanum"}, {es: "Vid roja", la: "Vitis vinifera"}, {es: "Rusco", la: "Ruscus aculeatus"}, {es: "Hamamelis", la: "Hamamelis virginiana"}, {es: "Olivo", la: "Olea europaea"}, {es: "Milenrama", la: "Achillea millefolium"}, {es: "Meliloto", la: "Melilotus officinalis"}, {es: "Ajo", la: "Allium sativum"}
    ],
    bases: ["Alcohol de 60°", "Agua de manantial", "Vino tinto", "Aceite de oliva virgen", "Glicerina"],
    types: ["Gotas", "Infusión", "Extracto", "Ungüento", "Tónico", "Macerado"],
    benefits: ["mejorar la circulación periférica", "regular la presión arterial", "fortalecer los capilares frágiles", "aliviar la sensación de piernas cansadas", "proteger el músculo cardíaco"]
  },
  {
    id: 6, name: "SISTEMA URINARIO Y RENAL", range: [101, 120], color: "transparente esmerilado",
    shelfPrompt: "Primer plano fotorrealista de un estante de madera rústica de boticario. Contiene 20 frascos de vidrio transparente esmerilado y verde claro. Etiquetas legibles con números del 101 al 120. Hojas de gayuba y cola de caballo.",
    herbs: [
      {es: "Gayuba", la: "Arctostaphylos uva-ursi"}, {es: "Cola de caballo", la: "Equisetum arvense"}, {es: "Ortiga verde", la: "Urtica dioica"}, {es: "Abedul", la: "Betula pendula"}, {es: "Vara de oro", la: "Solidago virgaurea"}, {es: "Grama", la: "Cynodon dactylon"}, {es: "Arenaria", la: "Spergularia rubra"}, {es: "Diente de león", la: "Taraxacum officinale"}, {es: "Enebro", la: "Juniperus communis"}, {es: "Brezo", la: "Calluna vulgaris"}
    ],
    bases: ["Agua purificada", "Alcohol de 50°", "Vino blanco", "Glicerina vegetal"],
    types: ["Decocción", "Infusión", "Tintura", "Extracto", "Tónico diurético"],
    benefits: ["limpiar las vías urinarias", "favorecer la diuresis y eliminación de líquidos", "prevenir la formación de cálculos renales", "aliviar la retención de líquidos", "desinfectar el tracto urinario"]
  },
  {
    id: 7, name: "ALIVIO DEL DOLOR Y ANTIINFLAMATORIOS", range: [121, 140], color: "ámbar oscuro",
    shelfPrompt: "Primer plano fotorrealista de un estante de madera rústica de boticario. Contiene 20 frascos de vidrio ámbar oscuro y marrón. Etiquetas legibles con números del 121 al 140. Corteza de sauce y flores de árnica.",
    herbs: [
      {es: "Sauce blanco", la: "Salix alba"}, {es: "Harpagofito", la: "Harpagophytum procumbens"}, {es: "Árnica", la: "Arnica montana"}, {es: "Ulmaria", la: "Filipendula ulmaria"}, {es: "Cúrcuma", la: "Curcuma longa"}, {es: "Jengibre", la: "Zingiber officinale"}, {es: "Boswellia", la: "Boswellia serrata"}, {es: "Romero", la: "Rosmarinus officinalis"}, {es: "Clavo", la: "Syzygium aromaticum"}, {es: "Consuelda", la: "Symphytum officinale"}
    ],
    bases: ["Alcohol de 70°", "Aceite de almendras dulces", "Manteca de karité", "Cera de abejas", "Agua de manantial"],
    types: ["Bálsamo", "Ungüento", "Tintura", "Cataplasma", "Aceite de masaje", "Extracto"],
    benefits: ["aliviar el dolor articular crónico", "reducir la inflamación local", "calmar dolores musculares intensos", "mitigar cefaleas tensionales", "desinflamar contusiones y golpes"]
  },
  {
    id: 8, name: "SALUD DE LA MUJER", range: [141, 160], color: "rosa pálido",
    shelfPrompt: "Primer plano fotorrealista de un estante de madera rústica de boticario. Contiene 20 frascos de vidrio rosa pálido y transparente. Etiquetas legibles con números del 141 al 160. Flores de caléndula y hojas de frambueso.",
    herbs: [
      {es: "Frambueso", la: "Rubus idaeus"}, {es: "Salvia", la: "Salvia officinalis"}, {es: "Milenrama", la: "Achillea millefolium"}, {es: "Caléndula", la: "Calendula officinalis"}, {es: "Dong Quai", la: "Angelica sinensis"}, {es: "Sauzgatillo", la: "Vitex agnus-castus"}, {es: "Cimicífuga", la: "Actaea racemosa"}, {es: "Bolsa de pastor", la: "Capsella bursa-pastoris"}, {es: "Manzanilla", la: "Matricaria chamomilla"}, {es: "Artemisa", la: "Artemisia vulgaris"}
    ],
    bases: ["Agua purificada", "Alcohol de 60°", "Aceite de onagra", "Miel cruda", "Glicerina"],
    types: ["Infusión", "Tintura", "Gotas", "Óvulos vegetales", "Tónico", "Elixir"],
    benefits: ["regular el ciclo menstrual", "aliviar los cólicos menstruales", "mitigar los sofocos de la menopausia", "equilibrar las fluctuaciones hormonales", "fortalecer el tono uterino"]
  },
  {
    id: 9, name: "CUIDADO DE LA PIEL Y DERMATOLOGÍA", range: [161, 180], color: "blanco opalescente",
    shelfPrompt: "Primer plano fotorrealista de un estante de madera rústica de boticario. Contiene 20 tarros de ungüento de vidrio opaco y frascos esmerilados. Etiquetas legibles con números del 161 al 180. Cera de abejas y flores de lavanda.",
    herbs: [
      {es: "Aloe vera", la: "Aloe barbadensis"}, {es: "Caléndula", la: "Calendula officinalis"}, {es: "Rosa mosqueta", la: "Rosa rubiginosa"}, {es: "Lavanda", la: "Lavandula angustifolia"}, {es: "Tepezcohuite", la: "Mimosa tenuiflora"}, {es: "Centella asiática", la: "Centella asiatica"}, {es: "Bardana", la: "Arctium lappa"}, {es: "Avena", la: "Avena sativa"}, {es: "Manzanilla", la: "Matricaria chamomilla"}, {es: "Árbol de té", la: "Melaleuca alternifolia"}
    ],
    bases: ["Cera de abejas pura", "Aceite de coco prensado en frío", "Manteca de cacao", "Agua de rosas", "Aceite de jojoba"],
    types: ["Ungüento", "Pomada", "Crema", "Loción", "Aceite reparador", "Cataplasma"],
    benefits: ["cicatrizar heridas menores", "calmar irritaciones y eccemas", "hidratar la piel en profundidad", "regenerar tejidos dañados", "aliviar quemaduras leves"]
  },
  {
    id: 10, name: "PRIMEROS AUXILIOS NATURALES Y VARIOS", range: [181, 200], color: "marrón boticario",
    shelfPrompt: "Primer plano fotorrealista de un estante de madera rústica de boticario. Contiene 20 frascos mixtos de diversas formas y colores oscuros. Etiquetas legibles con números del 181 al 200. Botiquín botánico con morteros y vendas de lino.",
    herbs: [
      {es: "Sangre de drago", la: "Croton lechleri"}, {es: "Propóleo", la: "Propolis"}, {es: "Carbón vegetal", la: "Carbo activatus"}, {es: "Arcilla verde", la: "Illite"}, {es: "Árnica", la: "Arnica montana"}, {es: "Consuelda", la: "Symphytum officinale"}, {es: "Llantén", la: "Plantago major"}, {es: "Clavo", la: "Syzygium aromaticum"}, {es: "Hamamelis", la: "Hamamelis virginiana"}, {es: "Menta", la: "Mentha x piperita"}
    ],
    bases: ["Alcohol de 96°", "Agua destilada", "Aceite de oliva", "Cera de abejas", "Glicerina"],
    types: ["Emplasto", "Tintura de emergencia", "Polvo cicatrizante", "Bálsamo de rescate", "Enjuague", "Cataplasma"],
    benefits: ["detener hemorragias leves rápidamente", "desinfectar heridas superficiales", "absorber toxinas e impurezas", "aliviar picaduras de insectos", "calmar el dolor agudo repentino"]
  }
];

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateRecipes() {
  let allCategories = [];
  let globalId = 1;

  for (let cat of categoriesDef) {
    let recipes = [];
    for (let i = 0; i < 20; i++) {
      let herb1 = getRandom(cat.herbs);
      let herb2 = getRandom(cat.herbs);
      while(herb1.es === herb2.es) { herb2 = getRandom(cat.herbs); }
      
      let type = getRandom(cat.types);
      let base = getRandom(cat.bases);
      let benefit = getRandom(cat.benefits);

      let title = type + " de " + herb1.es;
      if (Math.random() > 0.4) title += " y " + herb2.es;

      let purpose = "Formulación tradicional diseñada específicamente para " + benefit + ". Su uso continuado ayuda a restaurar el equilibrio natural del cuerpo.";

      let instructions = "";
      if (type.includes("Infusión") || type.includes("Decocción") || type.includes("Vahos")) {
        instructions = "Hervir el " + base.toLowerCase() + " y añadir " + herb1.es.toLowerCase() + " y " + herb2.es.toLowerCase() + ". Dejar reposar tapado durante " + Math.floor(Math.random() * 10 + 5) + " minutos. Colar antes de usar.";
      } else if (type.includes("Ungüento") || type.includes("Pomada") || type.includes("Bálsamo") || type.includes("Crema")) {
        instructions = "Fundir " + base.toLowerCase() + " al baño maría. Incorporar extractos de " + herb1.es.toLowerCase() + " y " + herb2.es.toLowerCase() + ". Remover constantemente con espátula de madera hasta homogeneizar y dejar enfriar en tarro de cristal.";
      } else {
        instructions = "Macerar " + herb1.es.toLowerCase() + " y " + herb2.es.toLowerCase() + " en " + base.toLowerCase() + " durante " + Math.floor(Math.random() * 20 + 7) + " días en un lugar oscuro y fresco. Agitar diariamente. Filtrar cuidadosamente con un paño de lino y almacenar en un frasco de vidrio oscuro.";
      }
      
      let dosage = "";
      if (type.includes("Tintura") || type.includes("Gotas") || type.includes("Extracto")) {
        dosage = Math.floor(Math.random() * 15 + 10) + " gotas diluidas en un vaso de agua, " + Math.floor(Math.random() * 2 + 2) + " veces al día.";
      } else if (type.includes("Jarabe") || type.includes("Elixir") || type.includes("Licor") || type.includes("Tónico")) {
        dosage = "1 cucharada sopera cada " + Math.floor(Math.random() * 6 + 4) + " horas.";
      } else if (type.includes("Ungüento") || type.includes("Bálsamo") || type.includes("Pomada") || type.includes("Aceite") || type.includes("Emplasto") || type.includes("Cataplasma")) {
        dosage = "Aplicar tópicamente sobre la zona afectada mediante un suave masaje circular, 2 o 3 veces al día.";
      } else {
        dosage = "Tomar 1 taza caliente " + Math.floor(Math.random() * 2 + 1) + " veces al día.";
      }

      let notes = "Conservar en un lugar fresco, seco y alejado de la luz solar directa. No administrar a mujeres embarazadas o en periodo de lactancia sin consultar a un herbolario experto.";
      if (type.includes("Alcohol") || base.includes("Alcohol") || type.includes("Tintura") || type.includes("Licor")) {
        notes += " Contiene alcohol, evitar estrictamente en niños y personas con problemas hepáticos graves.";
      }

      let imagePrompt = "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando " + herb1.es.toLowerCase() + " sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color " + cat.color + " con una etiqueta de papel envejecido escrita a mano que dice '" + globalId + "'.";
      
      let seedWord = herb1.es.toLowerCase().replace(/\\s+/g, '');
      let imageUrl = "https://picsum.photos/seed/" + seedWord + globalId + "/800/1000";

      recipes.push({
        id: globalId,
        title: title,
        purpose: purpose,
        ingredients: [
          { es: herb1.es, la: herb1.la },
          { es: herb2.es, la: herb2.la },
          { es: base, la: "Base excipiente" }
        ],
        instructions: instructions,
        dosage: dosage,
        notes: notes,
        imagePrompt: imagePrompt,
        imageUrl: imageUrl
      });
      globalId++;
    }

    allCategories.push({
      id: cat.id,
      name: cat.name,
      range: cat.range,
      shelfImagePrompt: cat.shelfPrompt,
      recipes: recipes
    });
  }

  return allCategories;
}

const categories = generateRecipes();

const fileContent = "export interface Ingredient {\n" +
"  es: string;\n" +
"  la: string;\n" +
"}\n\n" +
"export interface Recipe {\n" +
"  id: number;\n" +
"  title: string;\n" +
"  purpose: string;\n" +
"  ingredients: Ingredient[];\n" +
"  instructions: string;\n" +
"  dosage: string;\n" +
"  notes: string;\n" +
"  imagePrompt: string;\n" +
"  imageUrl: string;\n" +
"}\n\n" +
"export interface Category {\n" +
"  id: number;\n" +
"  name: string;\n" +
"  range: [number, number];\n" +
"  shelfImagePrompt: string;\n" +
"  recipes: Recipe[];\n" +
"}\n\n" +
"export const categories: Category[] = " + JSON.stringify(categories, null, 2) + ";\n";

fs.writeFileSync(path.join(__dirname, 'src/data/recipes.ts'), fileContent);
console.log('Successfully generated 200 recipes with purpose and images!');
