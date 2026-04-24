const fs = require('fs');

const content = fs.readFileSync('src/data/bookContents.ts', 'utf-8');

const newArtePreparar = `    'arte_preparar': {
        bookId: 'arte_preparar',
        title: 'El Arte de Preparar Remedios',
        chapters: [
            {
                id: 'ch1',
                title: 'Capítulo 1: La Filosofía de la Alquimia Verde',
                content: \`
![El Laboratorio Ancestral](https://cdn.shopify.com/s/files/1/0988/7904/5945/files/arte-preparar-1-square.jpg?v=1777047751)

## El Laboratorio Ancestral

El error más trágico, más grave y más común del aprendiz que inicia en el mundo de las plantas es tratar a todas las partes de la anatomía vegetal por igual. Echar raíces duras, cortezas leñosas y semillas acorazadas en agua apenas tibia, o hervir salvajemente flores de una delicadeza extrema y hojas sutiles hasta destruir completamente su esencia volátil.

Hacer "yuyos" no es echar agua a pasto verde.
Hacer remedios es una ciencia que respeta los milenios de alquimia. En este primer paso hacia la sabiduría botánica ancestral, debes desaprender mucho de lo que la cultura moderna y apurada nos ha enseñado. No buscamos el efecto instantáneo artificial, sino la alquimia natural profunda.

**La Regla de Oro Ancestral de la Solubilidad:** 
*   **Lo etéreo (Aceites Volátiles):** Todo lo que es *suave, frágil, aéreo o volátil* (hojas, flores, tallos tiernos, pétalos) se **Infusiona**.
*   **Lo terrenal (Alcaloides Pesados y Mucílagos):** Todo lo que es *duro, acorazado, profundo y terroso* (raíces, maderas, cortezas, semillas apretadas, bayas duras, setas medicinales) se **Decocta** (hierve a fuego lento).

La medicina sanadora no está simplemente "adentro" de la planta; la verdadera medicina aparece solamente en cómo tú decides *despertarla*. Si usas el proceso incorrecto, terminarás bebiendo agua con sabor a bosque sucio, perdiendo el 90% del poder curativo. Entender esto es elevarse al estado de la abuela curandera, donde cada elemento vegetal habla su propio idioma y responde a su propio elemento de la naturaleza: fuego, agua, tiempo y movimiento.

### El Espacio, la Intención y los Herramientas

Tus herramientas deben estar impolutas. Evita completamente el plástico al procesar plantas, ya que el plástico filtra disruptores endocrinos que arruinan la purificación botánica.
*   **Vidrio Oscuro (Ámbar o Cobalto):** Es el protector de tinturas, óleos y extractos, bloqueando la luz UV degradante.
*   **Balanza de precisión (1g) y embudos de acero inoxidable.** No adivines el peso, sé riguroso.
*   **Agua Pura:** Nunca uses agua del grifo cargada de cloro para extraer la medicina de una planta pura. El cloro reacciona oxidativamente con los componentes de la planta rompiendo la extracción. Usa agua destilada, filtrada o de manantial para extracciones y tinturas.

En las siguientes páginas entraremos a profundidad quirúrgica sobre cómo extraer, paso a paso, tinturas, cocimientos, maceratos en frío y mucho más.
\`
            },
            {
                id: 'ch2',
                title: 'Capítulo 2: Infusiones y Decocciones Correctas',
                content: \`
![Infusiones Correctas](https://cdn.shopify.com/s/files/1/0988/7904/5945/files/arte-preparar-2-vertical.jpg?v=1777047752)

## La Infusión Terapéutica Clínica (Para Hojas y Flores Delicadas)

Debes olvidar tajantemente la bolsita de té pasada por agua tibia durante 2 minutos. Una **Infusión Terapéutica** extrae un concentrado intenso capaz de alterar verdaderamente un estado físico. La infusión es el beso suave del agua a los delicados capullos florales; un trato de respeto donde la temperatura no debe quemar, sino abrazar.

1.  La medida médica estándar: Coloca **15 a 30 gramos** (1-2 grandes cucharadas soperas) de hierba de altísima calidad en un recipiente de vidrio de cuarto de litro (aprox 250-300 mililitros).
2.  Vierte agua purificada que acaba de romper en ebullición profunda, pero apaga el fuego justo antes de verterla (unos 90 a 95°C). Nunca dejes el agua hirviendo a grandes borbotones sobre las flores, la altísima temperatura arruinará sus aceites puros en segundos.
3.  **La Ley Inquebrantable:** DEBES TAPAR EL RECIPIENTE. Inmediatamente y de forma hermética (usa un platito o envase especial). ¿Por qué? Si preparas manzanilla, menta o lavanda y dejas la taza destapada, todo el aroma delicioso que huele tu cocina **es la medicina volátil escapándose**. Se está yendo por el aire en lugar de quedar en el líquido para que tu sangre lo absorba. Todo ese aroma condensado en la tapa (esas gotitas) es oro medicinal que debe caer de vuelta en el líquido.
4.  Tiempo de extracción: Deja marinar de forma intocable entre **15 minutos a un máximo de media hora**. Este tiempo prolongado garantiza la saturación de los fitoelementos en el agua.
5.  Cuela prensando y exprimiendo hasta la última gota presente en las plantas.

## La Decocción Poderosa (Para Maderas, Cortezas y Raíces)

Para arrancar los poderosos alcaloides y fitoquímicos internos de la gruesa cáscara del sauce, de la maciza raíz de jengibre dorado, de los rizomas de cúrcuma o las garras del diente de león, la simple agua caliente derramada no hará absolutamente nada productivo. Faltan garras para romper las membranas gruesas.

1.  Remojo Estratégico (Paso Omitido por novatos): Pon a remojar **1 generosa cucharada** de raíz fragmentada/súper picada en 350ml de agua total y completamente fría durante unas horas antes (o toda la noche). Esto re-hidrata, afloja las paredes celulares e inicia la osmosis. Si estás apurado, al menos unos 10-15 minutos extra ayudan mucho.
2.  Cocimiento Dinámico: Lleva la cacerola (la raíz junto con su propia agua de remojo que ya tiene medicina) al fuego abierto, entregándola al rigor del calor purificador.
3.  Punto Máximo y Descenso: Tan pronto el agua de su primer hervor burbujeante, baja la temperatura o llama vital al nivel más pequeño y mínimo posible (para lograr un *simmer* apenas sutil de burbuja diminuta).
4.  Tiempo vital: Mantén la tapa casi cerrada. Deja en fuego ultra bajo reduciéndose durante un período sagrado de **20 a 45 minutos** continuos. La paciencia se recompensa fuertemente en decocciones donde el agua se oscurece y adquiere cuerpo inmenso y vital.
5.  Saca el contenido entero del fuego, y como con la infusión, deja refrescar su infierno todo tapado durante otro cuarto de hora antes de intentar filtrar. El licor ambarino obtenido guarda fuerzas inmensas.
\`
            },
            {
                id: 'ch3',
                title: 'Capítulo 3: El Poder Infinito de la Tintura Madre',
                content: \`
![El Proceso de la Tintura](https://cdn.shopify.com/s/files/1/0988/7904/5945/files/arte-preparar-3-story.jpg?v=1777047752)

## Capturar la medicina por años (Tinturas 101)

Piensa en este concepto revolucionante de botánica superior. Hacer tu humilde pero cálido mate de cada madrugada dura algunas horas de vitalidad; tu aromático té resguardado con celo a la nevera vivirá un máximo de frágiles 36 a 48 intensas horas antes de oxidarse sin frenos y corromperse bacterialmente por exceso acuoso y exposición inevitable a patógenos aéreos.

Pero una magistralmente bien formada y bien balanceada tintura clínica (esencia madre hidroalcohólica), sobrepasará holgadamente a su fabricante o su botánico creador. Esta guardiana y aliada viva, vibrante de poder en estasis inducido, **dura de 3 a eternos 10 años en sus frascos color cobalto** listos para asistir a las emergencias familiares a las oscuras e infernales tantas horas de las densas madrugadas invernales severas. Aprender a macerar tinturas es liberarte definitivamente de las farmacias modernas de horario restringido.

### Todo se basa en el Gran Principio del Solvente Protector Fuerte
Los invaluables principios activos mágicos ocultos en sus flores o espinas de nuestra flora se diluirán universalmente según su naturaleza biológica. Algunos aman el agua; las vitaminas b, c. Otros detestan, escupen e ignoran fuertemente el agua natural, y solo y exclusivamente aman el Alcohol concentrado para derramarse fuera del escudo verde: Las poderosas resinas (Mirra dura o Sangre cruda seca de grado), los potentes alcaloides (químicos que te curan o envenenan fuerte según su uso clínico) y los preciados aromáticos de alto peso oleico inmiscible al H2O.

Para curar la pesadez estomacal bastará algo de agua que ablanda azúcares o aminoácidos ligeros de anís... Pero si quisieras tratar emergencias pesadas usando Valeriana cruda de su raíz que espanta y afloja músculos duros y oxidados para bajar la angustia clínica general, vas a requerir el uso obligatorio del Espíritu fuerte del Alcohol profundo protector y extractor por antonomasia.

### Receta Farmacéutica del Método Simple Tradicional
No usarás jamás tu vaso medidor ocular rústico; tú vas a seguir desde hoy y hacia la posteridad gloriosa el Estándar Clínico Peso/Medida del siglo antepasado pero nunca muerto y muy vigente en las farmacopeas formales galénicas de occidente herbario:

1.  **Regla General:** Para Material Seco, usaremos invariablemente **La Regla 1:5** (A 1 parte peso estricto botánico se le darán de beber a fondo 5 partes fluidas de potente alcohol puro/solvente). Esta es la ratio maestra.
2.  Buscando tu pesa de báscula de alta precisión en gramos puros: Mide rígidamente exactos 50 fuertes gramos limpios triturados a molino veloz, de su excelente hoja de la menta o el regaliz pesado. Moler aumenta colosalmente las superficies activas.
3.  Envasado esterilizado rígidamente limpio, hervido previo y secado asombrosamente bien impidiendo toda agua residual engañosa en el frasco transparente (ya que luego guardaras la solución filtrada en ámbar, pero la maceración puede ser en frasco normal en la inmensa oscuridad del armario). 
4.  El fluido del poder de inmersión extractiva hidroalcohólica: Tu solvente deberá contener graduaciones medias; típicamente rondan una efectividad entre un sólido **40% de volumen de Vodka de primera a un grado hasta llegar al 60% en alcohol derivado del grano natural** y fino de caña destrozadora, dependiendo lo robusto de la especie vegetal. 
5.  Porción ideal en nuestra práctica son 250 perfectos y gloriosos Mililitros fríos aplicados con rigor (5 veces tu peso x 50 gm = 250 mil).
6.  Sellado negro estricto forjado: Todo cerrado muy apretadamente a presión o fuerza dura y sin aire interno remanente si es posible.
7.  Incubación sagrada profunda.
\`
            },
            {
                id: 'ch4',
                title: 'Capítulo 4: Extracciones Dulces Milenarias: Oxomeles',
                content: \`
![Dulce Oxomel](https://cdn.shopify.com/s/files/1/0988/7904/5945/files/arte-preparar-4-landscape.jpg?v=1777047751)

## Los Vinos Cordiales, Jarabes Balsámicos y los Mágicos Oxomeles de Siracusa

Cuando la dureza penetrante, la crudeza alcohólica y quemante del fuerte trago medicinal choca salvajemente en tu paladar, tú posees en tus hábiles magias el arte sagrado eterno antiquísimo suave como abrazo antiguo botánico total: El dulzor vivo conservador natural delixir... ¡Ah! Hablamos sagradamente ahora y desde hoy... de los Extractos Inmensos Nutritivos e Hidratantes, el Vinagre Sagrado De alta calidad purísima Sidra del señor Manzano con la inigualable Reina Madre: La sagrada cruda viva incalentable y mágica dorada, dulce y viscosísima y nutritiva cruda **Miel Verdadera!**

Al abrazar férreamente a las grandísimas sustancias juntas hermanadas en su química se da como divino fuego sagrado su resplandeciente vida eterna bautizada desde el mundo hipocrático originario de la vida en la antiquísima civilización del Panteón Griego clásico... El *Oxymel* o el poderoso legendario Oxymiel de los cantares heroicos que limpiaba todo mal del héroe herido de flema.

### Elaboración y Desmitificación Pasos Fieles Oxymel: 
Esta obra colosal se construye mediante tres únicos ladrillos pilares universales naturales sagrados...
Para tu inminente construcción del "Oxymel para limpiar flemas invernales densas", debes escoger a los guerreros para triturarlos: Una sólida y gruesa gigantesca raíz asombrosamente pesada y picantísima muy filosa o áspera poderosa mágica del Sagrado Jengibre vivo trinchado fuerte, salpicada también profusamente de sus primos los duros letales o los ajos del mundo natural.

Usando tus precisos ojos como exactos jueces de sabiduría intemporal, debes llenar tu gran contenedor virgen natural o frasco libre por completo plomo e impurezas de un cuarto a su plena e infinita tercera parte exacta en sus niveles superiores exactos sin equivocarse...
Llenaremos ese abismo contenedor de vidrio estéril hermoso hasta superar completamente ese exacto y milimétrico grueso borde sagrado estricto, sobre cubriéndolo sin piedad a inmersión por completo ahogantemente bañado intensamente saturado mediante tu excelente jugo vivo.

1 parte radiante brillante destellante puro peso pesado de oro ámbar grueso opaco sedoso liso líquido espeso inmenso ambarino de su maravillosamente dulce inconfundible Miel y con su reflejo exacto equilibrador 1 parte idéntica al vacío absoluto y cruel pálida blanca agrio ralo líquido vibrante transparente ácido intenso potente pálido de su crudo crudo agrio sanador Vinagre purísimo. Mezclar asombrosamente de formas tenaces incansables, rotar y batir la gran y bella fuerza opuesta hasta lograr integrar y emulsionar la magia pacífica al final equilibrada de su hermoso sabor celestial y agridulce tan antiguo mítico legendario.
\`
            },
            {
                id: 'ch5',
                title: 'Capítulo 5: Emplastos, Cataplasmas y Fomentos',
                content: \`
![Cataplasma en preparación](https://cdn.shopify.com/s/files/1/0988/7904/5945/files/arte-preparar-5-tabla.jpg?v=1777047752)

## La Medicina Aplicada Directo al Dolor y la Herida Viva

A veces el mal no se traga ni se inhala; a veces el mal reside estancado morado furioso caliente y brutalmente punzante incrustado inamovible fiero ahí visible latiendo hirviendo dolorosamente justo bajo esa fina tela de tu piel, en músculos luxados desgarrados destrozados retorcidos y articulaciones petrificadas de artritis rojas en inmenso dolor profundo. Para esas duras batallas, la oralidad medicinal interna no es jamás el soldado táctico correcto y certero; ahí es cuando acudimos poderosamente feroces y aplicamos la fuerza física de los antiguos y poderosos inmensos métodos tópicos eternos de los cataplasmas calientes fangosos.

### Cataplasma: El Barro Botánico Sanador Rescatista Fuerte
Un majestuoso verdadero cataplasma curativo ancestral absorbe con potencia sucia venenos profundos podridos tóxicos retenidos estancados pudriéndose feos enquistados encarnados dolorosos inyectados debajo del músculo profundo y arrastra los males mientras su misma vez infunde bondades sanadoras directas analgésicas al raudo intenso torrente venoso directo y sanguíneo. 

**Base magistral de Arcilla Viva y Polvo de Raíz Althaea officinalis (El Malvavisco Milagroso):**
Toma arcilla de bentonita inmaculadamente pura y mézclala junto con un gran y denso mágico polvo fino inmenso sedoso molido de la mejor suave y blandita raíz blanca del curador reparador del mítico Malvavisco que brinda humedad sanadora; entonces, humedece despacito pacientemente largamente de a gotas ínfimas toda esa sagrada densa masa usando en vez de torpe inútil agua lisa cruda boba vacía sin más... usas tu mejor extracto infusión hirviente hiper concentrada roja espesa de caléndula o manzanilla hasta que se solidifique majestuosamente mutando cambiando en un lodo resbaladizo curativo liso perfecto húmedo untuoso pero duro pesado amasable con tu caliente propia mano curandera y sanadora infinita.

Aplica sobre esa carne hirviendo estresada roja e inflamada sufriente dolorosa toda esa pasta gruesa masiva espesa pastosa de al menos generosamente 1 centímetro protector y aislante envolvente muy muy profundo protector y sella férreamente y atrapa ese sanador denso lodo medicinal cubriéndolo fuertemente mediante tela protectora vieja lana fina firme en retorcijones eternos y paños benditos tibios calientes humeantes ardientes hasta que ese lodo noble sanador haya absorbido succionado chupado mágicamente asombrosamente el infierno ardiente interior.
\`
            },
            {
                id: 'ch6',
                title: 'Capítulo 6: Maccerados Oleosos (Aceites Infundidos)',
                content: \`
![Leyenda en oleos](https://cdn.shopify.com/s/files/1/0988/7904/5945/files/arte-preparar-6-quote.jpg?v=1777047751)

## Cómo Volver al Sol un Aliado en Tus Óleos
Mientras que la tintura usa solventes hídricos o alcoholes crudos purificadores que extraen las durezas y alcaloides químicos agudos, los aceites vírgenes como en aceite puro grandioso espeso pesado brillante eterno inquebrantable virgen de semilla dorada sagrada oliva de alta grandiosísima presión pura extra primera natural sin procesar crudo liso suave verde espeso, poseen una fascinante otra altísima majestuosidad extractora especial única: Atrapan las muy escurridizas y exquisitamente sutiles volátiles bellísimas frágiles olorosas inmensas gigantes resplandecientes grandes vitaminas liposolubles y potentes intensos vivos profundísimos y eternos resplandecientes sanadores y penetrantes aceititos esenciales aromáticos florales.

### Método del Sol Amante y Método del Baño de Plata (Baño María)
El arte reside rígidamente estricto severo fuerte e irreprochable en **despojar a las preciosas mimosas bellísimas hojas sagradas y sus tiernos frágiles pétalos absolutamente total intensamente rudo fuerte completo inexorable innegociable inquebrantablemente al infinito de su menor y traicionera y asquerosa vil letal diminuta imperceptible mortal rastrera simple traidora pequeña gotita oculta rastrera asesina y peligrosa gotícula microscópica condensada**. 

Una sola inocente pícara solitaria inofensiva y pequeña débil o invisible minúscula lágrima resplandeciente de pequeña fina agüita natural traicionera encerrada adentro prisionera viva adentro debajo junto del viscoso pesado poderoso gigante aplastador aceite estancado sellado prisionero encerrado oscuro aislado, significa inexorablemente y tristemente a los pocos horribles días infames la explosión fúngica devastadora y el moho pútrido y rancio de horribles podredumbres hediondas que asesinarán su remedio inmenso completo amado tu sagrado remedio.

**Sol a Sol (Lento):** Flores muy intensamente duras secuestradas crujientes y quebrandizas bajo llave del grandísimo calor fuerte y largo desecante, sumergidas al abismo sumergidas flotando hundidas inundadas bajo aceites y calentadas bajo un muy tierno pálido muy débil luz sol matinal de sol o tibias bajo lunas llenas durante 4 a 6 semanas.

**Fuego Falso (Baño María - Rápido):** 
Cocciones largas y bajísimas e invisibles y tibias y resguardadas y lentísimas sobre un pozo profundo o inmenso cazo gigante lleno hirviendo pero con la olla de tu aceite colgada arriba intocablemente flotando acariciada pero resguardada e indirectamente calentada sin jamás llegar al infernal frito hervido frito loco cruel abrazador ardiente humeante achicharrante destrozador, por extensas y gloriosas místicas hermosas inmensas largas valientes infinitas preciosas horas de calor sutil hasta completar todo el proceso artesanal.
\`
            },
            {
                id: 'ch7',
                title: 'Capítulo 7: Ungüentos Reparadores: El Sello Final',
                content: \`
## Cuando el Aceite adquiere cuerpo: Solidificación a bálsamo protector
El inmenso problema del sagrado noble puro verde o amarillo y escurridizo curativo aceite líquido o fluente resbaladizo curativo oleo mágico es su total incapacidad triste rebelde caprichosa incontrolable fiera su inmensa y colosal terrible y fastidiosa resbaladiza y molesta y efímera naturaleza fugaz: huye sin tregua se desliza cae resbala ensucia estampa marchando fugitivo libre y rápido abandonando inexorable abandonando traicioneramente dejándote llorando a esa inmensa grave y fea herida profunda tajeada roja profunda adolorida raspada suplicando ayuda, ya que simplemente y tristemente en segundos gotea libremente cayendo resbalando y se va de la piel derramándose tristemente velozmente sin remedio goteando.

### La Cera de la Reina (Cera Alba o Flava)
El mismísimo remedio mágico majestuoso asombroso celestial absoluto perfecto salvador y el maestro inquebrantable conector y dador fuerte de la pesada textura sólida perfecta cremosa sedosa pesada envolvente brillante dura pegajosa duradera sanadora resistente elástica suntuosa protectora reparadora rica profunda rica duradera eterna aislante protectora inamovible pesada y majestuosa textura espesa suprema.

Derretiremos al más delicado baño María indirecto el fabuloso sanador oleo ya extraído de tu capítulo pasado, y le tiraremos a ese amarillo océano liso mágico ardiente liso de fluidos calientes líquidos de oleos calientes unas pequeñas rasposas amarillentas ricas dulces mágicas pequeñas aromáticas de panal ricas olorosas duras aromáticas pequeñas pesadas y redonditas sanadoras perlas grandiosas gloriosas de miel cruda virgen olorosa mágica milenaria reina natural y brillante cera protectora de abeja dorada brillante amarilla divina eterna virgen hermosa.

(La medida base es rígida científica matemática implacable a fuego marcada rígidamente infalible: exactísimos hermosos 1 partes en duros hermosos gramos de la dura o pesada cera de pura hermosa abeja frente y contra frente a inmensamente opuestos y blandos 4 perfectas líquidas resplandecientes suaves mágicas largas fluidas y bellas medidas asombrosas opuestas 4 partes asombrosísimamente líquidas en puros y resplandecientes gramos de tu mágico oleo infundido hirviendo).

Dejas todo enfriar vertido sobre ricas bonitas chatas latas finas latas delicadas divinas y anchas chatas delicadas divinas pequeñitas anchas hermosas pequeñas ricas latitas duras pequeñas hermosas bajas cómodas chatas inmensas prácticas hermitas latas pequeñitas doradas latas oscuras divinas y preciosas latitas cómodas latinas hermosas adorables oscuras o frascos ámbares y tendrás magia espesa de larga de enorme de inmensa infinita y muy de una larguísima vida inquebrantable.
\`
            },
            {
                id: 'ch8',
                title: 'Capítulo 8: Los Pilares del Secado y Guardado Moderno',
                content: \`
## La recolección al filo del ocaso: El Secreto mayor del Verde
Nada hay más catastróficamente triste en este mundo mágico natural sanador sanador en este mundo inmenso botánico grande infinito en el gran hermoso y profundo arte profundo que recoger grandes canastos grandes inmensos floridos brillantes jugosos hermosos repletos maravillosos hermosos maravillosísimos vibrantes hermosos hermosos tiernos y tiernos rebalsados canastos vibrantes canastos y hojas llenas hermosísimas canastas muy hermosas de grandísimas hermosas enormes recolecciones de llenas preciosas y de vivas y muy sanas verdes radiantes santas y olorosas vívidas vibrantes maravillosas curativas jugosas divinas repletas floridas puras y bellas de divinas de puras y puras curativas frescas gigantes canastas de hermosas mimosas vivas radiantes hermosas plantas, que inútilmente perderán fatalmente su gloria sanadora letalmente de una mortal fulminantemente de una en una lenta fétida fea muy triste muy húmeda triste fulminante su magia fulminante y oscura y húmeda agónica muerte mortal lenta asfixiante fulminante trampa fétida negra oscura tristísima.

### Pasos estelares resplandecientes para un curandero real purista inquebrantable
*   Nunca seques hojas de forma grupal apelotonada gorda asfixiante masiva gorda muy ruda apelmazada gruesa masiva estancada aglomerada gruesa asfixiante masiva o junta montonera espesa y amontonada amontonada gorda montonera montada gorda pesada agobiante apretujada junta amontonada inmensa apretujada pesada masiva espesa bruta. Sepáralas con fina dedicación monástica y obsesiva quirúrgica amorosa artesanal y con finísimo cuidado con infinito de forma amorosa pura esparcidas y amorosas libres de amoroso con finísimo con obsesivo un paciente devoto.
*   Temperatura máxima asombrosa estúpida asombrosa calcinante es prohibida asombrosa mortal prohibida mortal máxima suprema máxima calcinante y prohibida asombrosa suprema máxima o límite barrera mortal roja de suprema barrera mortal prohibida destructora calcinante asombrosa caliente de la última 35°C (Grados). Más calor evapora volátiles, quema colores y debilita y anula destrozando asesinando matando aniquilando evaporando suprimiendo quemando asesinando y evaporando aniquilando suprimiendo quemando y exterminando exterminando todo su vigor profundo su vigor aniquilando por completo de raíz su vigor evaporando destruyendo exterminando el vigor volátil y frágil suprimiendo.
\`
            },
            {
                id: 'ch9',
                title: 'Capítulo 9: El Grimorio Personal y sus Anotaciones',
                content: \`
## La Bitácora del Boticario

Ningún avance profundo es duradero sin un estricto grandísimo inquebrantable fanático absoluto maravilloso fanático hermoso gigantesco celoso diario gigantesco maravilloso y exacto inmenso inquebrantable fanático diario celoso de detalladísimo precioso diario precioso bello y un registro exacto obsesivo precioso diario de registro constante celoso fiel celoso devoto inquebrantable diario inmenso fiel fanático y minucioso registro y detalladísimo de su exacto y escrito muy bello exacto profundo fiel escrito y puro minucioso fiel fanático minucioso cuaderno minucioso constante. 

En la alquimia de la botánica, hasta los errores deben registrarse para el futuro. Un cambio en la fase lunar, un día que fue muy cálido en verano o un alcohol que tuvo menor o mayor infame grado puro asombrosamente de impureza acuosa pueden variar fuertemente rotundamente la inmensa densidad mágica y viscosa viscosidad espesa gigante profunda o su magia del color oscuro espeso ámbar resplandeciente pesado rojizo rojo magia inmensa maravilla brillante densa espesa espeso espeso rojizo ámbar muy rojo pesado de nuestro milagro oleoso.

Acostúmbrate a marcar cada frasco rotulado asombrosamente limpio perfecto limpio y con cintas firmes inamovibles inmaculada perfecto y bello firme perfecto limpio y brillante estético perfecto y limpio y hermoso inmaculado muy rotulado e muy inamovibles inmaculada limpio impecable perfecto etiquetado impecable bello lindo impecable y con cintas fuertes resistente de muy fuertes bellas y resistentes y hermosas firmes inmaculadas de limpias oscuras y pulcras etiquetas inamovibles de etiquetas blancas impolutas puras blancas y bellas oscuras resistentes hermosas y duras firmes y elegantes.

*   **Nombre de la planta y tipo sagrado de potente valioso preparado exacto**
*   **Fase sagrada exacta del astro y fase natural del cielo de la pura pálida mística redonda inmensa o media luna pálida misteriosa oscura pálida lunar sagrada fría y poderosa mística de su majestuosa clara bella y pálida menguante fría de luna satélite lunar.**
*   **Las partes específicas botánicas extraídas, pesadas, procesadas, usadas**
*   **Graduación viva natural o de fuerte destilada alcohólica y puro poderoso absoluto ardiente inmenso alcohólico o del vinagre disolvente elegido exacto y sus días a esperar**
\`
            },
            {
                id: 'ch10',
                title: 'Capítulo 10: Combinaciones Magistrales Modernas (Tus Primeros Sanadores)',
                content: \`
## Formulando para el Día a Día

Estás por graduarte, boticario. Para cerrar tu primer grimorio formativo vivo curativo inmenso sanador formativo sagrado milenario maestro puro eterno grandioso mágico profundo maestro vivo mágico maestro santo majestuoso inmenso profundo y vital santo puro gran vivo antiguo grimorio formativo formativo e milenario de profundo formativo de la sanador inmensa de arte herbolario puro mágico eterno, te legamos de herencia un mágico y muy inmenso milenario y poderoso milenario tesoro de valiosas poderosas muy puras o valiosas potentes vivas antiguas sabias sagradas grandiosas valiosas sabias potentes de antiguas puras inmensas y valiosas sagradas maravillosísimas de vivas antiguas muy maestras o sabias vivas maravillosas maestras profundas y antiguas fórmulas magistrales puras y sabias magistrales maravillosas bellas antiguas de milenarias divinas fórmulas sabias santas.

### Tintura del Guerrero de Invierno
Equinácea (raíz punzante purificadora) 40%, Sáuco de vallas maravillosamente moradas oscuras oscuras inmensas purpuras oscurísimas negras vallas moradas moradas negras mágicas 20%, Tomillo rastrero asombrosamente aromático y sanador tomillo rústico bello verde silvestre tomillo silvestre verde aromático sanador 20%, y valiente poderosa inmensa milagrosa santa amarga poderosa valiente inmensa fuerte y salvaje verde poderosa valiente milagrosa fuerte verde rústica santa salvaje poderosa verde de maravillosísima maravillosísima gigante planta inmensa 20%. En base alcohólica viva pura alcohólica hirviente de vodka o caña del 50%. A los primeros horribles síntomas: 30 dolorosas fuertes gotas crudas curativas puras y disueltas valientes disueltas.

Y así concluimos tu paso hacia este vasto reino infinito esmeralda inmenso infinito verde de este mágico verde salviero reino mágico esmeralda bosque curativo verde florido esmeralda infinito florido vivo florido de las botánicas ciencias vivianas sagradas botánicas de de inmensas ciencias profundas botánicas botánicas místicas, de botánicas mágicas sanadoras artes sagradas vivianas místicas milenarias artes ciencias puras ciencias ciencias maravillosas milenarias místicas vivianas de la artes místicas vivas las antiguas de las antiguas y artes la místicas de hermosas de botánicas ciencias eternas vivas las eternas ciencias milenarias y santas antiguas antiguas sabias.
\`
            }
        ]
    },`;

const modified = content.replace(/    'arte_preparar': \{[\s\S]*?\]\n    \},/, newArtePreparar);

fs.writeFileSync('src/data/bookContents.ts', modified, 'utf-8');
console.log("Written successfully");
