import { Category } from './recipes';

export const featuredCategory: Category = {
  id: 0,
  name: "RECOMENDADAS Y MÁS BUSCADAS",
  range: [1, 25],
  shelfImagePrompt: "Un estante iluminado y destacado con letras doradas, lleno de los elixires más populares de la botica de la abuela, pociones, y tarros de miel.",
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
    },
    {
       id: 1013,
       title: "Tintura Antiinflamatoria Articular",
       purpose: "Aplicadora tópica para el mal crónico que agobia espaldas, duros cartílagos desgastados de las rodillas o reumas inflamatorios silenciosos calambres en manos y pies gélidos.",
       ingredients: [
         { es: "Cortesanías duras Harpagofito natural", la: "Harpagophytum procumbens" },
         { es: "Añadidos picantemente ricos Zingiber raíz seca", la: "Zingiber officinale" },
         { es: "Licores espirituoso fuerte", la: "Etanol botánico" }
       ],
       instructions: "Moler trozos que te encuentres leñosos para lograr el buen traspaso e ingreso de líquido macerante espirituoso en madereras harpagofitos. Poner 1/4 volumen sólido frascazo base inferior al ras tope espiritosa liquida alta cubriendo asfixiantemente todas leñas botánicas picantes. A los inmensos ciclos temporales lunares 6 a muchas semanitas purificar por embudito estrujado a base gasa.",
       dosage: "Aplicar chorros concentrados tintóreos líquidos para fricción directa mano y calor humano frotador friccionales en el momento quejumbrosos musculares hasta de noche de sueño por encima cartílagos.",
       notes: "Uso Tópico localizadamente sin límites de dolores.",
       imagePrompt: "Frasco tipo botico misterioso rojizo madero fuerte ocre cálido reposado sobre corteza ásperas terrosas de campo. Sensación reconfortadora en las uniones leñosas.",
       imageUrl: "https://images.unsplash.com/photo-1543781256-4c7407be4969?q=80&w=1200&auto=format&fit=crop"
    },
    {
       id: 1014,
       title: "Mezcla Natural para Estimular Cerebro",
       purpose: "Combustible ancestral del flujo sano y rápido al córtex cerebral, impulsando recuerdos, lucidez retentiva e inteligencia reactriz sin cansancio o perezas neurológicas lentas oscuridades.",
       ingredients: [
         { es: "Hojita amarilla del añoso árbol Gingko biloba", la: "Ginkgo biloba" },
         { es: "Ramas enteras aromáticas purpúreas Romero seco", la: "Rosmarinus officinalis" },
         { es: "Polvos finitos tiernos Centellas asiática (Gotu Kola)", la: "Centella asiatica" }
       ],
       instructions: "Poner juntas en comunión las potentes tres especias nobles sagradas herbolarias mezclatorias y envasado puro cristal de etiqueta de la 'Memoria'. Súbete a la mesa cucharadas unida infusión vaso tecito agua por taza, sin usar hiervos burbuja para que rinda a un máximo olor aceites neuronales rosemary-gotukola por lapso absoluto encierro por tiempo del sabio unos exactos 15 minutines a reloj cerrado e ingerir sin dilaciones.",
       dosage: "Dosis muy únicas y de uso puntual mañana previo trabajos y esfuerzos del pensamiento pesado largo duradero que desgasta neuro-energías vitales psíquicas.",
       notes: "Estar muy atento suspender dosis en personas que cursan ya ingestas a prescripción médica o farmacia para licuados sanguíneos anti-plaquetarias o cuagulantes por potente fluidez sanguínea natural ginkgobilobiana reactiva de vasos puros dilatados.",
       imagePrompt: "Botellines iluminados luz solar en escritorio de lecturas. Frasco poción de intelectual del color verdoso brillante junto a la presencia de las enigmáticas hojas Gingko otoñales oro amarillo.",
       imageUrl: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=1200&auto=format&fit=crop"
    },
    {
       id: 1015,
       title: "Elixir Respiratorio de Tomillo y Miel",
       purpose: "Bálsamo viscoso poderoso del boticario más famoso medieval recetado, sanando infecciones bacterio-virales fuertes catarros de pecho taponados puramente de base en expectoración fluida natural sin estancamiento microbiano pulmom.",
       ingredients: [
         { es: "Brote y hojas pequeñitas frescas o seco de Tomillos", la: "Thymus vulgaris" },
         { es: "Pote de panacea colmenar densa", la: "Apis mellifera cruda" }
       ],
       instructions: "Crear brebajes fortísimos pesados líquidos o sea puros tés re concentrados por hervor perdiendo mitad taza volumen líquido de agua para purificarlos por evaporación (esto se llama una decocciones mágicas reducidas). Cuele aún ardiendo tibios caliente con velocidad de la luz a un tazón grueso que tiene otra cantidad mitad doble en dosis cucharadas de mieles salvajes vírgenes no plásticas. Entremezclarlo al espesar licor.",
       dosage: "Engullírselas purificadamente una rica cucharas abundancia al menor asomar mocos tosemos fuertes unas veces variadas día o a gusto protector curativo del pulmones fríos del cuerpo interno asfixiantes.",
       notes: "Por presencia cruda no proveer bebitos chiquitos del botulismos mielo alérgico. Guárdenlos bajo el frío ambiente o bien en las congelaciones de heladera puerta del refrigerar un mes sin alterar química del licor.",
       imagePrompt: "Cucharas de orfebrería gótico verter o vertiendo sirope de miel muy ambar y botánicos gruesos pesados. Plenitud brillante junto al tomillo pino del monte con luces claroscuro pintoresco óleo natural.",
       imageUrl: "https://images.unsplash.com/photo-1587049352847-4d4b12b1413e?q=80&w=1200&auto=format&fit=crop"
    },
    {
       id: 1016,
       title: "Te Ligerito para Calmar Antojos Dulces",
       purpose: "Cierre metabólico digestivo de sabor empalagoso herbal pero sin azúcares diseñado específicamente para anular picoteos ansiosos posteriores y compulsión hacia golosinas.",
       ingredients: [
         { es: "Semillejo de hinojos dulce o anises", la: "Foeniculum vulgare" },
         { es: "Ramas gruesas Canela", la: "Cinnamomum" },
         { es: "Raíz regaliz natural", la: "Glycyrrhiza" }
       ],
       instructions: "Tomar todos los ingredientes cortezosos leñosos secos combinables depositarlos dentro tetera gruesa hirviéndolos en comunión por largo minutos (12min mínimo). Filtrar absolutamente. Cuidado, es de un gusto sorprendentemente meloso endulzado original propio herbal no meter absolutamente ninguna cucharada de azúcar refinante extra o corrompes el proceso natural bloqueador ansioso.",
       dosage: "Consumo directo en picos enormes incontrolables ansiosos después de cenas o dietas rígidamente restrictivas. Mínimo 1 tacita.",
       notes: "La presencia natural pura botánica de rizomas de puro regaliz alza presión arterial. Hipertensión usar solo la canela.",
       imagePrompt: "Líquido parduzco rojo humeante en tacitas pequeñas como anís con palos botánicos de la canela canela gruesa.",
       imageUrl: "https://images.unsplash.com/photo-1576092762791-dd9e2220d9dd?q=80&w=1200&auto=format&fit=crop"
    },
    {
       id: 1017,
       title: "Cápsulas Vitales de Rhodiola Rosea",
       purpose: "Microdosis adaptógena milagrosa rusa para frenar bloqueos severos del cansancios crónicos suprarrenales e impacto cortisólico celular de estres.",
       ingredients: [
         { es: "Polvillo micronizado raíces Rhodiola", la: "Rhodiola rosea" },
         { es: "Tira de cápsula de vegetal celulosa", la: "Vacio" }
       ],
       instructions: "Con minuciosa precisión relojera llenar base pequeñas transparentes capsulitas vegetales (tipo tamaño un grado botánico standard '0' ó '00') apisonándolo de polvaje de fuerte Rhodiolas raíces siberianas amarronadas hasta su tope o usar cápsulas certificadas seguras puros originarios botánicas.",
       dosage: "Suministro temprano solar diurno recién despertar antes desayuno o máximo mitad mediodía (entre las 100 miligramos cortos - o alza controlada 400 miligramos dosis día de cansancio severos).",
       notes: "Extrema alarma evitar rotunda y severamente horas últimas de tarde noche porque crea vigilia alterando ciclos ritmos circadianos.",
       imagePrompt: "Un polvo pardo doroso junto una pequeña pastilla transparente iluminada brillante en madera como adaptógeno puro raíz.",
       imageUrl: "https://images.unsplash.com/photo-1632054695995-1db64da155de?q=80&w=1200&auto=format&fit=crop"
    },
    {
       id: 1018,
       title: "Aceite Poderosísimo de Orégano Salvaje",
       purpose: "Concentrado fenólico de altísimo espectro natural anti-bacterias y bloqueador purificante de candidiasis excesivas corporales estomacales.",
       ingredients: [
         { es: "Hojitas muy sequitas Orégano silvestre", la: "Origanum vulgare" },
         { es: "Aceituna oliva virgen máxima prensa", la: "Olea europaea" }
       ],
       instructions: "Inundar un frasquillo esterilizado transparente botiquín usando hojarascas orégano puro molido rústico muy concentrado puro sin dejar grandes huecos oxígenos vacíos (la mitad superior o tercio). Inundalo tapándolo aceites puros olivo ahogándolo todo. Lleve botellita a calores lentísimos (baños maría apenísimas ardientes) tres horas eternas larguísimas cuidando sin fritar hervores para migrar polifenol botánico o sino método solar estático ventanas por lunas semanales mes entero de un mes.",
       dosage: "Micro gotas. Utiliza cuentagotas para disuelto dentro cucharada aguadas por días intercalares temporales (jamás meses fijos seguidos pesados continuos).",
       notes: "Causticidad botánica brutal en mucosa si no se disuelve fuertemente en aguas. Totalmente proscrito a embarazadas mujeres infantes sensibles.",
       imagePrompt: "Aceitito líquido brillante tono esmeralda verde o ambar iluminado con oréganos especiados junto un cuentagotas de herboristería clásica.",
       imageUrl: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=1200&auto=format&fit=crop"
    },
    {
       id: 1019,
       title: "Extracto Inmuno-Potenciador de Setas Salvajes",
       purpose: "Combinatoria micelial biológica poderosa reforzando barreras macrófagas para batallar crónicas fuertes deficiencias viral o rebrotes constantes de defensas colapsadas enfermas.",
       ingredients: [
         { es: "Cuerpos setas chaga, lentinula (shiitake), reishi puro extractados secones polvos", la: "Ganoderma / Inonotus" },
         { es: "Licorcito glicérico edulcorante o cacao de aguas", la: "Base soluble" }
       ],
       instructions: "El paciente o herborista requiere conseguir en herbolaria el 'extracto o puros polvos duales listos' de estos enormes hongos reinas inmunológicos y generar preparaciones simples licuadas integradoras matutinas cucharaditas colmadas batiendo sobre espumadas tibias agüitas de chocolate oscuro, puras chicorias u caldos espesas sopas botánicas rumberas del buen calor biológico protector y servir humeante.",
       dosage: "Ingerirlo fuertísimo como una sopa botica pesada potente matinalmente medio vaso cada días continuados preventivo un par meses climas gélido.",
       notes: "Las personas sobre medicación química auto y supre-sistema inmune alterado (inmunosupresores para trasplantes u otro vital) evitar botánica miceliar natural setas salvajes fuerte sin autorizaciones de su galeno absoluto.",
       imagePrompt: "Una sopa o polvo rústico terroso al lado un inmenso hongo ostra maderoso setas oscuro estético y cálido sobre mesa otoñal.",
       imageUrl: "https://images.unsplash.com/photo-1604085449557-46487e41fc7a?q=80&w=1200&auto=format&fit=crop"
    },
    {
       id: 1020,
       title: "Bruma Spray Milagroso de Romero para Caída",
       purpose: "Tónico capilar rico en circulatorios botánicos ácidos carnósicos reactivando y estimulando directo los flojos dormidos bulbos foliculares evitando que caigan hebras pesadas capilares.",
       ingredients: [
         { es: "Ramas íntegras verdecitas grandes matorrales ricas romeros", la: "Rosmarinus officinalis" },
         { es: "Aguas pura destilación en olla", la: "Aqua pura" }
       ],
       instructions: "Poner a infusionar hirviendo muchísima abundancia ramas en solo muy poquito líquidos aguajes para hacer lociones capilares muy oscuras rojizas concentradas espesas tónicas de alto olor pineto concentrado de ramas romeras puras hirviendo mínimo casi larga media horita profunda a fueguitos tenues mínimos lentos oscuros tapándolo recelosa. Apague dejar caer temperatura natural toda madrugada de noche sola botánica. Pasar rociador atomizador puramente filtrando restos hoja madera sucia y agregando gotas alcoholes mantenedores puros.",
       dosage: "Pulverícese chorritos directos sobre cueros craneal capilar cabezas raíces haciendo masajitos y dejando actuar mínimo horas para ir lavas. Varias rociadas por pliegue diario nocturno.",
       notes: "Tópico externo, no ingerir líquido de tónicos brumosos y no dejar sobre rostros puramente sin cabellos ni irritando pieles cerca ojitos.",
       imagePrompt: "Atomizador antiguo en bruma o chispeo con líquido rojizo o marrón claro tónico, al lado muchísima hierba verde espinosa fuerte pino romeril puro botánico.",
       imageUrl: "https://images.unsplash.com/photo-1596541571275-5a415ffefd99?q=80&w=1200&auto=format&fit=crop"
    },
    {
       id: 1021,
       title: "Pomada Rústica Ungüento Antimosquitos",
       purpose: "Barrera protectora cutánea aromática densa untuosa generando repelencias altamentes disuasorias ahuyentadores contra zancudos pesados bichos.",
       ingredients: [
         { es: "Cera alba abejorro virgen", la: "Cera flava" },
         { es: "Aceititos puro citronelas y olores lavandas clavos o eucalyptus citronados", la: "Cymbopogon" },
         { es: "Aceite base maderera o almendras grasas sutiles", la: "Prunus amygdalus" }
       ],
       instructions: "Utilizando fueguitos sutiles doble olla 'baño maria' disolver el solido de mantequillas/ceras abejorreo apicultor y los aceite grasoso bases transparentes juntados disueltos dorados unidos todos en líquido caliente fundido unido absoluto. Extinguir fuego apagado apartar de hornallas calor; inmediatamente gotear esencias apestosas nobles citroneladas herbáceos de puras gotas aceitosas florales (muchas gotaza concentradas puras 20/30 a calculo de envase gotero puro). Volcar a tarritos aplastados anchos de unguento para latitas. Deja gelar enfriado duro.",
       dosage: "Pasa dedos calóricos fundiendo capa frotándolo sobre toda zona nuca venillas brazo o piernitas de infantes o paseantes botánicos.",
       notes: "Probaturas en nuca ante de bañarse total, a ver tolerancias si no le cae intenso los vapores a delicada piel alergias.",
       imagePrompt: "Una untuosa cera o cremita pomadera en tarrito chapado clásico, de lado lavandas eucaliptos hojas un ambiente suave exterior natural mosquiteril al bosque de tarde.",
       imageUrl: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=1200&auto=format&fit=crop"
    },
    {
       id: 1022,
       title: "Tónico y Polvo Potenciador Nutrición Fértil",
       purpose: "Adaptógeno hormonal denso que irriga fuerzas circulatorias reproductivas pélvicas enlentecidas frías regulando ejes complejos corporales para preparación ovarios útero calientes receptivos.",
       ingredients: [
         { es: "Polvo amarillo andino de tuberos Maca pura gelatinizada", la: "Lepidium meyenii" },
         { es: "Infusión roja pura hojas frambuesos puros cortados", la: "Rubus idaeus" },
         { es: "Sauzgatillo rústico bayas", la: "Vitex agnus-castus" }
       ],
       instructions: "Se sugiere un tratamiento botánico diario de combinadas consumiciones bebedizas. Tomar a parte el tecimiento fuertísimo rosado del árbol fútbos de frambuesas como té o base acuosa y sobre él mezclar esparcidas purificadas finitas cucharas rasadas miniatura miquitina peruanas macas andina junto o goteritos vitex agnuscastus amargo. Remover todo ese complejo sistema herbal pocional caliente de matinales en un tazón bebetorio.",
       dosage: "Bebedor constante todos unos días mañaneros hasta positivos embarazosos esperados cesando tras confirmatorias (no uso en la alta gestada primer etapa trimestre sensible botánica del formarse nido).",
       notes: "Suspender radical toda intervención herbolarias tónica estimuló a gestas apenas el tests dé positivos dos rayitas hormonas.",
       imagePrompt: "Tonalidades rojas rosas de líquido infusional frambueso de mujer junto espolvoreados amarillos raíces polvo fertilizantes nutridos ancestrales misticos cálidos solares de úteros.",
       imageUrl: "https://images.unsplash.com/photo-1620864317188-44474718cf22?q=80&w=1200&auto=format&fit=crop"
    },
    {
       id: 1023,
       title: "Té Depurativo para Aclarar las Arterias",
       purpose: "Licor hepato-sanguíneo arrastrador astringente de lípidos, desatascando fluidez circulatorio general venas vasculares usando antioxidantes pesados amargones verdes oscuros densos biliares grasas en torrente.",
       ingredients: [
         { es: "Cortes secos y picos gruesos florudos Espino blancos hojas rojiza bayita", la: "Crataegus" },
         { es: "Hoja fina del Dienteleones verdes claros espino", la: "Taraxacum" }
       ],
       instructions: "Preparaciones teteras profundas donde posas una partes iguales abundantes hierbas secas pinchos botánicos florales y folios tiernos sobre gran agua recién apagada explosión hirviente de ebullución. Deje quieto aísle hermético tapándolo fuertemente unos 20 minutos oscuros larguísimos para el traspaso fenoles agua y extraeres fuertes polifenolitos arteriales. Filtrados. Tomar muy amargas agrias un poco y fríamente sanadoras.",
       dosage: "Una pura gran y hermosa tetera vaso mediano diarios en rutinas constancias por varias y docenas semanitas temporales botiquinadas de curas depuradora limpias sanguinolientas.",
       notes: "La pureza tónica crataegus altera químicas conjuntas con medicinajes fuertes sintéticos receta química cardio-presión fallos medicación pesados sintética galena.",
       imagePrompt: "Vasotes enormes grandes repletos te marrón terrosos amarillosos oscuros espesitos junto a malezas silvestres cardos y floritas de sol espinas rojos silvestres hojas botica al lado.",
       imageUrl: "https://images.unsplash.com/photo-1599388316208-8df04dbadd6f?q=80&w=1200&auto=format&fit=crop"
    },
    {
       id: 1024,
       title: "Sedante Puro Oléo Uso Tópico Crisi-Ansiosa",
       purpose: "Botánica de contacto de la emergencia ansiosa. Ungido sobre pulsos absorbe rápidos los picos del torrente venoso directo por tegumento olfatorio respiración del parásimpatico directo calma nerviosa agitaciones y taquicárdias panicadas.",
       ingredients: [
         { es: "Aceites puro y milagroso de valerianitas concentrado puro botellas o puras de lavandas absolutas extracciones florar botánico real", la: "Valeriana / Lavandula" },
         { es: "Aceites portante conductor muy fluído y rápido asientable de almendritas claras suaves livianas u ojojoba absorciones rápidas puras grasas trasparentes", la: "Simmondsia chinensis" }
       ],
       instructions: "Macerados fríos express: A una ración aceite conductor esencias botiquín vierti en mini frasquitos roll-on (bolitas rodamientos cristalinas), depositos unas gordas cinco gototas (5) puro aceites esenciales absolutos botánicos sedante tranquilizantes madereros lavandos. Tape y mézclelos fuertes agitaciones para unir la sinergia química en solución conductor unificado botiquín de bolsillos de viaje botánicos de urgencias emocionales humanas.",
       dosage: "Friccionaros aceitosas puras mezclas sobre zona pecho medio corazones botánicos glándulas plexos de zona centro humanos respirables pulsaciones cuellos de lado zona nuca respirando intenso. Aplicas varias pasadas horas extremas.",
       notes: "No es potaje tragar por cuerpo digerirlo jamás internamente tóxico aceites esencias puro estómagos y mucosidades sin bases de aguar gástricas es puro exterior quemadura piel cuidarla sin frotas.",
       imagePrompt: "Un botellín pequeñisimo rollong bolita frasco chiquito ambarino oscuro apoyados y untados de humectación brillosa botánicos florcita fresca sobre calmo estanque piedra madera natural o bosque relajado verde frescor puro aroma relajante en el aire visible.",
       imageUrl: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=1200&auto=format&fit=crop"
    },
    {
       id: 1025,
       title: "Caramelos Anestésicos Tos de Miel Limón Mágico",
       purpose: "Chupetines de cristalurgia rústica herbal derritiéndos botánica calmante lubricando resecada gargantúa muéstre irritables tosedoras desgarrantes secas puramente calórica alivia dolores rasposos.",
       ingredients: [
         { es: "Azuquitar pura biológica oscura gruesa o panelitas enteras panela polvo caña miel", la: "Saccharum" },
         { es: "Jengibrillos y limones exprime zumajes e infusos romero botánicos y miel abeja", la: "Zingiber / Citrus / Apis" }
       ],
       instructions: "Poner azúcar con jugo poquitos concentrados cítrico de limón puros chorreados caldos limones herbales a fueguear cacerolas a calores enormes que espumará y pasará el líquido aguado espeso botánicos a punto caramelo vidriado de alta temperaturas quemadores puros (dejar caer gotas aguadas hielo vaso frío para ver si forma el cristal durito crizjient de azúcar que rompe). Retirar en ése apogeo calor echándoles chorrito calientes puro infusos botánico medicinal puro al fuego removidas y colado al vertido. Gotear la gruesa masa viscosas candentes ardientes encima sobre mesas o telas tapetes siliconadas formando redondillas charquitos dulces pastillitas redondas rústicas miel. Secos a rocar fríos guardarles polveados de algo suelto (azucar fino purísimo polvo almidón que se separen sueltos no pegajosos unidos).",
       dosage: "Consumo diario lento de lamer chupares pasivos largos varios al paso que las cuerdas y gargantas necesiten suavizarse dolores sequedad ardor.",
       notes: "Precaucionísima extrema calores quemazones dedos pieles en preparación a caramelo hierbos, usar paleteadora pura maderas grandes asisla. No nenes asfixia botulismo lactantes infantes bajo 3.",
       imagePrompt: "Caramelitos vidriados hermosos redondos brillosos ámbar escurridizos rústicos desparejos de abuela con polvo de azúcar rodeado limón fresco corte brillante miel densa espesa escurriendo botánico y sol.",
       imageUrl: "https://images.unsplash.com/photo-1556684841-86fbf8c5d8a9?q=80&w=1200&auto=format&fit=crop"
    }
  ]
};```

### PASO 2: Incluir esa categoría en el menú principal (`recipes.ts`)

1. Ahora busca y abre el archivo **`src/data/recipes.ts`**.
2. Dale al ícono del lápiz para editarlo.
3. Arriba de todo, fíjate en las primeras líneas. **Borra únicamente el bloque de código entre la línea 1 y la línea 27** y cámbialo **exactamente** por esto:

```typescript
export interface Ingredient {
  es: string;
  la: string;
}

export interface Recipe {
  id: number;
  title: string;
  purpose: string;
  ingredients: Ingredient[];
  instructions: string;
  dosage: string;
  notes: string;
  imagePrompt: string;
  imageUrl: string;
}

export interface Category {
  id: number;
  name: string;
  range: [number, number];
  shelfImagePrompt: string;
  recipes: Recipe[];
}

import { featuredCategory } from './featured';

export const categories: Category[] = [
  featuredCategory,
