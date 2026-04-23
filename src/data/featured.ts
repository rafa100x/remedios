import { Category } from './recipes';

export const featuredCategory: Category = {
  id: 0,
  name: "RECOMENDADAS Y MÁS BUSCADAS",
  range: [1001, 1025],
  shelfImagePrompt: "Un estante iluminado y destacado con letras doradas, lleno de los elixires más populares de la botica de la abuela.",
  recipes: [
    {
      id: 1001,
      title: "Miel Herbal Antiviral",
      purpose: "Un elixir maestro diseñado específicamente para fortalecer las defensas y acelerar la recuperación viral.",
      ingredients: [
        { es: "Ajo fresco molido", la: "Allium sativum" },
        { es: "Limón orgánico en rodajas finas", la: "Citrus limon" },
        { es: "Jengibre crudo troceado", la: "Zingiber officinale" },
        { es: "Miel cruda (pura)", la: "Apis mellifera" }
      ],
      instructions: "Mezcla todos los ingredientes frescos picados en un frasco de vidrio previamente esterilizado. Cubre los ingredientes sólidos completamente con la miel pura. Revuelve pacientemente con una cuchara de madera. Tapa y deja reposar la mezcla en el refrigerador o en un lugar fresco y muy oscuro durante al menos 3 días.",
      dosage: "1 a 2 cucharaditas al día como prevención tomadas directamente, o disueltas en una infusión tibia para un efecto reconfortante.",
      notes: "Apto para toda la familia. Uso Seguro. No des miel cruda bajo ninguna circunstancia a niños menores de 1 año (riesgo de botulismo).",
      imagePrompt: "Un frasco de vidrio rústico con miel dorada rebosante mezclada con ajo, jengibre y finas rodajas de limón. Estilo botánica antigua.",
      imageUrl: "https://images.unsplash.com/photo-1556684841-86fbf8c5d8a9?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: 1002,
      title: "Agua de Laurel para Apoyo Digestivo",
      purpose: "Infusión suave diseñada específicamente para regular el apetito, deshinchar el estómago y mejorar las digestiones pesadas.",
      ingredients: [
        { es: "Hojas secas de Laurel", la: "Laurus nobilis" },
        { es: "Agua caliente purificada", la: "Aqua" }
      ],
      instructions: "Trocea las hojas secas de laurel en pedazos pequeños para facilitar la liberación de sus compuestos digestivos. Lava y hierve el agua en una pequeña olla. Una vez hirviendo, añade el laurel. Inmediatamente apaga el fuego, tapa firmemente y deja reposar toda la noche o durante unas 4 horas. Cuela el líquido a la mañana siguiente.",
      dosage: "Beber de 1 a 2 tazas (240ml) al día durante la jornada diurna. Se puede tomar fría o a temperatura ambiente como agua de uso.",
      notes: "Usa estrictamente laurel real culinario (Laurus nobilis) y siempre seco, ya que fresco puede ser tóxico en grandes cantidades.",
      imagePrompt: "Un vaso de cristal transparente y elegante con agua dorada, rodeado por unas preciosas hojas verdes oscuras de laurel seco.",
      imageUrl: "https://images.unsplash.com/photo-1606751214041-356a42253818?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: 1003,
      title: "Tintura Calmante para la Ansiedad",
      purpose: "Extracto relajante potente diseñado específicamente para aliviar crisis de ansiedad y estabilizar la respuesta nerviosa frente al estrés.",
      ingredients: [
        { es: "Escutelaria americana (Skullcap)", la: "Scutellaria lateriflora" },
        { es: "Albahaca sagrada (Tulsi)", la: "Ocimum tenuiflorum" },
        { es: "Verbena azul", la: "Verbena hastata" },
        { es: "Alcohol (Vodka) o Glicerina", la: "Etanol botánico" }
      ],
      instructions: "En un tarro de cristal oscuro de boca ancha, incorpora la mezcla a pares iguales de las tres plantas deshidratadas, llenando el frasco un 30%. Rellena el resto 70% con el alcohol o glicerina hasta el tope. Sella con tapa segura. Almacena en la despensa, agitando diariamente en la oscuridad durante 6 semanas. Filtra el fluido botánico a través de muselina prensando vigorosamente, hacia botellitas gotero ámbar.",
      dosage: "Toma de 30 a 60 gotas sublinguales o disueltas en un poquito de agua directamente en el punto pico de una crisis de ansiedad, o como preventivo 2 veces al día.",
      notes: "Produce un profundo efecto de somnolencia natural. No operar maquinaria pesada. Evitar tomar antes de conducir trayectos largos.",
      imagePrompt: "Un frasco cuentagotas color ámbar oscuro reposando junto a brotes morados de albahaca sagrada y hojitas de verbena sobre una antigua mesa.",
      imageUrl: "https://images.unsplash.com/photo-1585860268571-00d98acba7b5?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: 1004,
      title: "La «Amoxicilina» de la Naturaleza",
      purpose: "Tónico fuerte ('Sidra de fuego') diseñado específicamente para cortar infecciones de raíz combatiendo patógenos como un inmunomodulador.",
      ingredients: [
        { es: "Vinagre de Sidra de Manzana", la: "Malus domestica" },
        { es: "Raíz de rábano picante y Ajo", la: "Armoracia / Allium" },
        { es: "Cebolla y Cúrcuma fresca", la: "Allium cepa / Curcuma" },
        { es: "Jengibre y un chile picante", la: "Zingiber / Capsicum" }
      ],
      instructions: "Pica finamente o ralla todas las raíces frescas, ajos, cebolla y chile picante orgánicos. Vuelca la preparación aromática en un frasco grande tipo Mason jar. Vierte generosamente el vinagre crudo cubriéndolo varios centímetros por encima. Coloca un papel encerado bajo la tapa de metal (para que no se oxide) y cierra bien. Deja fermentar por 4 semanas agitando todos los días. Filtra.",
      dosage: "Como prevención: 1 a 2 cucharadas diarias. Ante enfermedad latente: un chupito pequeño (15-30 ml) cada 4 horas.",
      notes: "Tónico extremadamente avinagrado y picante. Se puede diluir en un vaso con agua fresca y un poquito de miel para amortiguar el estómago.",
      imagePrompt: "Un misterioso vaso corto rebosante de líquido amarillento intenso y rústico; acompañado de raíces, ajos y finos chiles.",
      imageUrl: "https://images.unsplash.com/photo-1615554867919-482245b73e3a?q=80&w=1200&auto=format&fit=crop"
    },
    {
       id: 1005,
       title: "Infusión de Canela para la Presión Arterial",
       purpose: "Bebida caliente diseñada específicamente para generar vasodilatación y apoyar la salud circulatoria relajando las presiones altas.",
       ingredients: [
         { es: "Astilla de auténtica canela de Ceylán", la: "Cinnamomum verum" },
         { es: "Agua filtrada", la: "Aqua" }
       ],
       instructions: "Vierte 1 vaso abundante de agua sola en un cazo de peltre pequeño. Echa directamente dentro el pedazo grueso astillado de corteza de canela (roto en partes para exponer el interior). Lleva a un hervor amable y de inmediato disminuye a un hervor mínimo imperceptible, tapando la decocción por 12 minutos. Sirve filtrando la canela.",
       dosage: "Consumir una vez por día o hasta 2 tazas calientes o frías de forma regular.",
       notes: "Se recomienda enfáticamente y exclusivamente la canela de Ceylán (verdadera) sobre la canela Cassia clásica comercial de supermercado para evitar toxicidad en el largo plazo.",
       imagePrompt: "Una delicada y lujosa taza transparente de té, conteniendo un licor rubí o ámbar claro perfumado con elegantes ramas de canela de ceylán finas.",
       imageUrl: "https://images.unsplash.com/photo-1596708453448-6a3c613bfb86?q=80&w=1200&auto=format&fit=crop"
    },
    {
       id: 1006,
       title: "Jugo de Remolacha y Aronia",
       purpose: "Terapia liquida rica en óxido nítrico y antioxidantes antocianos que reduce inflamación coronaria apoyando el sistema cardiovascular.",
       ingredients: [
         { es: "Remolacha cruda pelada en cubos", la: "Beta vulgaris" },
         { es: "Bayas oscuras de Aronia", la: "Aronia melanocarpa" },
         { es: "Agua (o agua de coco si prefieres)", la: "Aqua" }
       ],
       instructions: "Pela gentilmente la remolacha media y machaca muy bien las bayas de aronia silvestres. Empuja las frutas al fondo de la licuadora americana potente añadiendo un par de vasos grandes de líquido para facilitar la máquina botánica. Tritura agresivamente 1-2 minutos. Sirve rústico para usar fibra completa natural (o cuela a través de malla metálica).",
       dosage: "Bebe mínimo medio vaso o una taza diaria completa recién exprimido en la mañana para abrir paso circulatorio del día.",
       notes: "Precaución inofensiva: Los pigmentos intensos botánicos rubí harán que los deshechos en la orina aparezcan temporalmente totalmente rojizos.",
       imagePrompt: "Jarra cristalina de un tono muy rojo intenso oscuro tipo borgoña. Rodeando el mesón hay bayas negruzcas purpúreas y la rica remolacha cruda.",
       imageUrl: "https://images.unsplash.com/photo-1587848496841-a201c10712a4?q=80&w=1200&auto=format&fit=crop"
    },
    {
       id: 1007,
       title: "Bebida Herbal para el Reflujo Ácido",
       purpose: "Pocion balsámica suave gelatinosa diseñada para forrar las paredes viscerales estomacales y anular acidez sin omeprazol químico.",
       ingredients: [
         { es: "Gel libre de hojas de Aloe Vera", la: "Aloe barbadensis" },
         { es: "Taza de infusión templada de Manzanilla", la: "Matricaria chamomilla" },
         { es: "Raíz de regaliz o malvavisco (polvo)", la: "Glycyrrhiza glabra" }
       ],
       instructions: "Extrae un corte hermoso puro y transparente interno de aloe vera (cerciorándose escrupulosamente y profundamente de purgar lavando la sustancia amarilla amarga previa). Añade ese gel a una infusión reposada fría concentrada de matricalia/manzanilla y si se tiene el regaliz. Licúa el producto levemente.",
       dosage: "Ingerir unos 30 ml o pequeños buches al resentir reflujo, o media taza metódica cada que vayas a la cama de noche.",
       notes: "Las grandes cantidades potentes continuas pueden presentar virtudes laxantes sorpresivas.",
       imagePrompt: "Bebida verde cristalina amarillenta esmeralda fresca dentro de una frasca, posada junto a hierba humeda y corte de cactacea de aloe.",
       imageUrl: "https://images.unsplash.com/photo-1579564251785-5b8d2ed1f83c?q=80&w=1200&auto=format&fit=crop"
    },
    {
       id: 1008,
       title: "Té de Seda de Maíz",
       purpose: "Poderoso extracto sutil milenario para afecciones serias de próstata y limpieza absoluta tracto-vejiga profunda calmar sus espasmos.",
       ingredients: [
         { es: "Hebra purificada estigma Zea (seda de maíz)", la: "Zea mays" },
         { es: "Miel o estevia silvestre", la: "Stevia rebaudiana" }
       ],
       instructions: "Pon a infusionar hebras muy gruesas generosas equivalentes 2 cucharadas rasas secas o verdes puras sedas de maicillo dentro agua apunto de explotar a hervor. Apaga, aísla con tapa hermética para evitar evapotranspirar sus ligeras cetonas delicadas aromáticas unos 15 minutos en quietud absoluta. Decanta o cuele.",
       dosage: "Consumo abundante diario. Usar raciones al menos 2 tazas sin límite temporal grave.",
       notes: "Ideal acompañar el periodo de consumos con agua adicional externa total. Apto largo plazo.",
       imagePrompt: "Mazorca abierta derramando largos hilos dorados de seda alrededor de un té amarronado limpio dentro una botica iluminada.",
       imageUrl: "https://images.unsplash.com/photo-1599388316208-8df04dbadd6f?q=80&w=1200&auto=format&fit=crop"
    },
    {
       id: 1009,
       title: "Elixir de Armonía Hormonal y la Felicidad",
       purpose: "Infu-Macerado herbal cálido que estimula suavemente y bio-químicamente la oxitocina del apego y neuro-cuerpos del bienestar.",
       ingredients: [
         { es: "Hierba menta gatera (Nepeta cataria)", la: "Nepeta cataria" },
         { es: "Flores pasiflora botánica", la: "Passiflora incarnata" },
         { es: "Capullos de Manzanilla puros", la: "Matricaria chamomilla" }
       ],
       instructions: "Acopia las tres valiosas especies místicas relajantes en el depósito central tipo de filtro suelto (cucharadita al ras equitativa por cada hierba principal por persona usuaria). Báñalos todos con cascada de agua recién hervida, abrigándolo todo celosamente con cubierta fuerte unos bellos 10 min a 30 min. Luego remueve material duro sirviendo.",
       dosage: "Deleita los paladares y sistema una sola y fundamental gran taza una (1) precisa hora por la tarde u hora vespertina antes de cierre biológica nocturna de sueño para profunda sedación mental y risas ligeras.",
       notes: "Por presencia pasiflora, está terminante y formalmente desaconsejado unida su consumición si existen gravidez-embarazo vigentes o infantes.",
       imagePrompt: "Magnífico elíxir ambar luminoso muy resplandesciente entre hermosas matas de manzanillas floridas en frascos, flores violáceas frescas pasiflora y luz tenue alegre.",
       imageUrl: "https://images.unsplash.com/photo-1556041753-1596708453448?q=80&w=1200&auto=format&fit=crop"
    },
    {
       id: 1010,
       title: "Tónico de Ajo y Limón para el Colesterol",
       purpose: "Depuración milenaria de placa densa arterial, apoyando perfiles hepáticos lipídicos usando activos pesados y bio-flavonoides.",
       ingredients: [
         { es: "Vaso de ajos crudos picados enteros puros", la: "Allium sativum" },
         { es: "Limones carnosos gruesos con piel y semilla", la: "Citrus x limon" }
       ],
       instructions: "Con todo muy asépticamente empapado procede al trituramiento brutal de licuadora alta de 3-4 limones partidos brutos integrales con 4-5 crudos dientes desvestidos del fuerte ajo. Echa agua pura extra. Pon esa masa botánica viscosa amarilla blanca en cazuela grande metálica al fuego mediano; justo cuando se asome la primera micro burbuja de hervor, CORTAR de inmediato de raíz el calor! para cuidar que nutrientes aguanten intactos potentes. Extraer y refrigerarlo botellado de boca chica.",
       dosage: "Tomarlo devota y religiosamente como chupitín de licor fuerte al alba en ayunas 30 días, pausa un ciclo corto y se retoma para bajar valores lípidos.",
       notes: "Mantener perpetuamente y sin discusiones dentro clima refrigerada, por tener base bio-activa orgánica. Agítese potente anterior en su botellita.",
       imagePrompt: "Una botella antigua botánica de etiqueta blanca de número 118 rodeada puramente con los insumos limones en cortes asimétricos con finos gajos crueles del ajo blanco.",
       imageUrl: "https://images.unsplash.com/photo-1597871181285-d621df6504ab?q=80&w=1200&auto=format&fit=crop"
    },
    {
       id: 1011,
       title: "Jarabe Milagroso para las Migrañas",
       purpose: "Tónico resinoso para atacar con aspirina natural de origen y extractos de planta los fuertes y tortuosos auras intensos de las cefaleas agudas.",
       ingredients: [
         { es: "Botánica de matricaria, altamisa silvestre", la: "Tanacetum parthenium" },
         { es: "Rascada fina y virutas Sauce blanco", la: "Salix alba" },
         { es: "Cuerpo glicérico dulce para jarabe puro", la: "Glycerina" }
       ],
       instructions: "Pone infusión doble de máxima concentración fuerte reductora en los fuegos controlados para la altamisa y nobleza de ese duro tronco o virutas finas del sauce milagre. Concentra mermando un tercio líquido el te natural. Transfórmalo jarabe casando toda infusión al lado de jarabe edulcorante botánico vegetal natural vegetal denso.",
       dosage: "Tomar muy a prisa o bien preventivamente en dos porciones completas gruesas cucharadas sopa de maderas apenas los estímulos fotofóbicos (aura luces).",
       notes: "Contrindicadísimo con gente de uso o historial alergénico al asido y compuestos derivados a base de Aspirina salicilos.",
       imagePrompt: "Un tarro jarabero gótico denso posando la botella rojiza ámbar sobre madera donde se depositan miles hojas en forma de botón flor de matricaria bellamente retratadas.",
       imageUrl: "https://images.unsplash.com/photo-1591544607715-e23e20ec42c0?q=80&w=1200&auto=format&fit=crop"
    },
    {
       id: 1012,
       title: "Vapor de Eucalipto para la Congestión",
       purpose: "Nebulización casera que abré pulmones bronquios densos e hidrata el pasaje naso taponado y seca los fuertes focos mucosos del mal de garganto-pulmón.",
       ingredients: [
         { es: "Hoja de eucalipto fresca gruesa cortada", la: "Eucalyptus globulus" },
         { es: "Olla con agua en máxima ebullición", la: "Aqua" }
       ],
       instructions: "Utilizar ollita profunda ancha verter en recipiente que aguantan gran calor. Agregar sin piedad los grandes puñados rústicos eucalipticos aromáticos que se puedan encima. Coger la toallita del regazo posarla detrás craneal de los parientes creando casita o choza vapor. Concentrarse 10 a grandes duraciones de minutos sobre cuenco hirviendo respirar inmensamente con ojos firmes fuertemente cerrados.",
       dosage: "Práctica por periodísticas y sucesiones hasta mejoría evidente de alivios pulmonares profundas crónicas. Puede y permitirse realizable diario ante enfermedades duras.",
       notes: "Distancias a centímetros prudencia del vapor vivo caliente no es apto acercarse pegado se queman las hermosas pieles tiernas del rostro, cuidar extremó con bebecitos lactantes de que se haga con alejamiento seguro ambiental.",
       imagePrompt: "La estampa botánica vaporización etérea. Profundamente purificados olores salen y ascienden hojas de eucalitpo botánico azulino pálidos sobre humos vapor.",
       imageUrl: "https://images.unsplash.com/photo-1601614392455-ceeeff3ce5e0?q=80&w=1200&auto=format&fit=crop"
    }
  ]
};
