export interface Chapter {
    id: string;
    title: string;
    content: string;
}

export interface BookContent {
    bookId: string;
    title: string;
    chapters: Chapter[];
}

export const BOOK_CONTENTS: Record<string, BookContent> = {
    'presion': {
        bookId: 'presion',
        title: 'Protocolo Natural para la Presión',
        chapters: [
            {
                id: 'ch1',
                title: 'Capítulo 1: La Raíz del Problema',
                content: `
## La visión ancestral de la hipertensión

Nuestras abuelas no hablaban de "presión arterial sistólica". Ellas hablaban del *fuego en la sangre*, del *estrés acumulado en la nuca* o de los *nervios duros*. 

La medicina moderna trata la hipertensión como un número que debe ser bajado a la fuerza mediante químicos. La herbolaria tradicional, sin embargo, la ve como un **síntoma de un desequilibrio mayor**: vasos sanguíneos rígidos, riñones sobrecargados o un sistema nervioso agotado.

Para sanar, no basta con bloquear un receptor en el corazón. Debemos devolverle la elasticidad a las venas, drenar los líquidos retenidos y calmar el espíritu. En este grimorio, aprenderás a usar las plantas exactas para lograrlo.
                `
            },
            {
                id: 'ch2',
                title: 'Capítulo 2: El Espino Blanco, el Guardián del Corazón',
                content: `
## Crataegus monogyna: El Rey de la Presión

El **Espino Blanco** (Hawthorn) es, sin lugar a dudas, la planta cardiovascular más potente y segura conocida en la herbolaria occidental.

### ¿Cómo funciona?
A diferencia de los medicamentos que obligan al corazón a trabajar menos, el Espino Blanco *nutre* el músculo cardíaco. Tiene un doble efecto mágico: 
*   **Si tienes la presión alta:** Dilata suavemente los vasos coronarios y periféricos, reduciendo la resistencia y bajando la presión.
*   **Si tienes la presión baja:** Ayuda a regularizarla, dándole tono al músculo.

### Preparación del Tónico Diario
*   **Partes usadas:** Flores, hojas y bayas (frutos).
*   **Infusión:** 1 cucharadita de la mezcla seca por taza de agua. Dejar reposar tapado por 15 minutos.
*   **Dosis:** 2 a 3 tazas al día.

> **Advertencia de la Abuela:** El Espino Blanco no es una píldora mágica de 15 minutos. Su acción es tónica y acumulativa. Debes tomarlo de forma constante durante 4 a 6 semanas para notar cambios profundos y duraderos en tu presión arterial.
                `
            },
            {
                id: 'ch3',
                title: 'Capítulo 3: Drenaje y Relajación',
                content: `
## Diuréticos y Relajantes Nervinos

Si el Espino Blanco es el rey, sus ministros son el Diente de León y el Tilo.

### 1. El Diente de León (Taraxacum officinale)
Muchos fármacos para la presión son diuréticos (te hacen orinar para reducir el volumen de sangre). El problema clínico es que barren con el potasio del cuerpo, causando calambres y debilidad.
El Diente de León (específicamente la hoja) es un diurético natural poderoso, pero con una ventaja única: **es extremadamente rico en Potasio**. Así, repone exactamente lo que elimina.
*   **Uso:** Infusión de hojas frescas o secas, 2 tazas al día.

### 2. El Tilo y la Pasiflora
Si tu presión sube debido al estrés, la ansiedad, o "malas sangres" (enojos), necesitas relajar los vasos sanguíneos desde el sistema nervioso central.
*   **Uso:** Mezcla partes iguales de flores de Tilo, Melisa y Pasiflora. Toma una taza generosa a media tarde y otra 30 minutos antes de dormir. Notarás cómo la tensión en el cuello desaparece y, con ella, la presión alta de la mañana.
                `
            }
        ]
    },
    'arte_preparar': {
        bookId: 'arte_preparar',
        title: 'El Arte de Preparar Remedios',
        chapters: [
            {
                id: 'ch1',
                title: 'Capítulo 1: El Lenguaje del Agua y el Fuego',
                content: `
## Introducción a la Alquimia Herbal

El error más común del aprendiz es tratar a todas las partes de la planta por igual. Echar raíces duras en agua apenas tibia, o hervir flores delicadas hasta destruir su esencia.

**Regla de oro ancestral:** 
*   Todo lo que es **suave y aéreo** (hojas, flores, tallos tiernos) se *Infusiona*.
*   Todo lo que es **duro y terrenal** (raíces, cortezas, semillas, bayas duras) se *Decocta* (hierve).

La medicina no está solo en la planta, está en cómo la despiertas.
                `
            },
            {
                id: 'ch2',
                title: 'Capítulo 2: Infusiones y Decocciones Correctas',
                content: `
## La Infusión Terapéutica (Para Hojas y Flores)

Olvida la bolsita de té pasada por agua 2 minutos. Una **Infusión Terapéutica** extrae la verdadera medicina.

1.  Coloca 1 cucharada sopera de hierba seca (o 2 de hierba fresca) en una taza.
2.  Vierte agua justo antes del punto de ebullición (aprox. 90°C). Nunca agua hirviendo a borbotones sobre flores (quema los aceites esenciales).
3.  **El Secreto Vital:** TAPA LA TAZA. Si no la tapas, los aceites esenciales volátiles (curativos) de plantas como la menta o manzanilla se evaporarán y quedarán en el techo de tu cocina.
4.  Espera entre 10 y 15 minutos exactos. Cuela y bebe.

## La Decocción (Para Raíces y Cortezas)

Para extraer medicina de la corteza de sauce, raíz de jengibre o diente de león, el agua caliente no basta.

1.  Pon a remojar 1 cucharada de raíz/corteza triturada en una taza de agua fría durante 10 minutos (esto ablanda los tejidos).
2.  Lleva todo junto (agua y hierba) al fuego.
3.  Cuando rompa a hervir, baja el fuego al mínimo, **tapa la olla**, y deja hervir a fuego lento entre 15 y 20 minutos.
4.  Apaga el fuego y deja reposar otros 10 minutos antes de colar. Notarás un líquido oscuro, denso y profundamente medicinal.
                `
            },
            {
                id: 'ch3',
                title: 'Capítulo 3: El Poder de la Tintura Madre',
                content: `
## Capturar la medicina por años

Una tintura es un extracto herbal donde usamos alcohol y agua empapados durante semanas para extraer todos los componentes activos (alcaloides, glucósidos, vitaminas). A diferencia de un té que dura 24 horas, **una buena tintura dura de 2 a 5 años en tu estantería.**

### La Fórmula de las Partes (Proporción 1:5)
Para la mayoría de las plantas secas, la regla es **1 parte de peso de planta por 5 partes de volumen de solvente**.

1. Pesa 50 gramos de tu hierba seca favorita (ej. Manzanilla).
2. Colócala en un frasco de vidrio de boca ancha esterilizado.
3. Mide 250 ml (5 veces el peso en líquido) de Vodka de buena calidad (o alcohol de cereal de 40% a 50%).
4. Vierte el líquido sobre la hierba. Tapa herméticamente.
5. Agita el frasco todos los días con intención.
6. Guárdalo en un lugar oscuro durante **30 a 40 días** (o todo un ciclo lunar).
7. Después de este tiempo, exprime todo a través de una muselina o tela fina, de forma muy fuerte. El líquido resultante es oro puro. Envásalo en goteros oscuros.

**Dosis general en emergencias:** 15 a 30 gotas en un dedo de agua, 1 a 3 veces al día.
                `
            }
        ]
    },
    'menopausia': {
        bookId: 'menopausia',
        title: 'Remedios para la Menopausia',
        chapters: [
            {
                id: 'ch1',
                title: 'Capítulo 1: La Transición a la Sabia',
                content: `
## No es una enfermedad, es un portal

La medicina occidental patologiza la menopausia. Le pone nombre a cada "síntoma" y receta hormonas sintéticas. Las curanderas ancestrales veían el retiro de la sangre no como una pérdida, sino como la retención de la energía vital: la mujer dejaba de dar su sangre al mundo físico para retener esa sabiduría en su propio espíritu.

Sin embargo, el cuerpo material debe balancearse mientras las hormonas se reacomodan. Aquí usamos las plantas aliadas para que el aterrizaje sea suave, refrescante y poderoso.
                `
            },
            {
                id: 'ch2',
                title: 'Capítulo 2: Apagar los Sofocos',
                content: `
## La Salvia (Salvia officinalis): La Refrescante

Si los sofocos nocturnos y la sudoración repentina te dominan, tu mejor amiga es la Salvia. Su nombre viene de *salvare* (curar/salvar). Es un fuerte astringente y anhidrótico (frena la sudoración extrema).

**Cómo usarla para sofocos:**
*   Se recomienda tomarla fría o a temperatura ambiente. (El té caliente promueve más calor).
*   Prepara una infusión de 1 cucharada de hoja de salvia seca. Deja reposar 15 minutos, cuela y deja enfriar en la nevera.
*   Toma un vaso por la noche antes de dormir para detener la sudoración nocturna.

## Trébol Rojo (Trifolium pratense)

Contiene fitoestrógenos (isoflavonas) que el cuerpo reconoce gentilmente, "engañando" a los receptores estrogénicos que están pidiendo ayuda. Alivia no solo los sofocos, sino que protege la salud ósea que suele debilitarse en esta etapa.
Se toma en infusión regular, 2 tazas al día, durante períodos de 3 meses, descansando 1 mes.
                `
            },
            {
                id: 'ch3',
                title: 'Capítulo 3: Sequedad y Piel',
                content: `
## Nutrición interna para la sequedad de las mucosas

Con la caída de los estrógenos, la piel, los ojos y, en particular, las paredes vaginales, sufren de extrema sequedad. 

### Aceite de Onagra (Evening Primrose) y Borraja
Ricos en Ácido Gamma-Linolénico (GLA), lubricantes naturales supremos del cuerpo femenino.
*   **Dosis recomendada:** Tomar en cápsulas de primera presión en frío o incorporar el aceite en ensaladas (nunca cocinarlo).

### Espino Amarillo (Sea Buckthorn)
Este es un secreto milenario de la medicina asiática. Las bayas del espino amarillo contienen Omega 7, un tipo de grasa escasísima en la naturaleza que regenera y rehidrata específicamente todas las membranas del cuerpo, mejorando la lubricación íntima y devolviendo el brillo a la piel cuarteada en cuestión de semanas.
                `
            }
        ]
    },
    'botiquin': {
        bookId: 'botiquin',
        title: 'El Botiquín Natural de Emergencia',
        chapters: [
            {
                id: 'ch1',
                title: 'Capítulo 1: Reglas del Botiquín Herbal',
                content: `
## Estar lista cuando las farmacias cierran

La diferencia entre la hierba y el fármaco de emergencia es que la planta requiere que la **tengas lista ANTES** de que llegue el problema. Las abuelas no iban a recolectar plantas en medio de la tormenta, ya tenían sus frascos alineados.

Tu botiquín debe estar guardado en un lugar oscuro (un armario), fresco, lejos del vapor de la ducha y etiquetado con fechas. Renovaremos el botiquín seco cada año.
                `
            },
            {
                id: 'ch2',
                title: 'Capítulo 2: Fiebres y Resfriados Fuertes',
                content: `
## Saúco (Sambucus nigra): El Antiviral de la Abuela

Cuando sientes el cuerpo cortado, la nariz empieza a gotear, y sientes ese picor en la garganta, **el jarabe de Saúco** detiene la replicación del virus en la pared celular.

*   **Uso:** 1 cucharada sopera de Jarabe de Bayas de Saúco cada 3 horas ante los primeros síntomas. 

## La Mezcla Diaforética (Para Sudar la Fiebre)

La medicina ancestral NO suprime la fiebre (a menos que suba a rangos peligrosos). La fiebre cocina el virus. Nuestro objetivo es ayudar al cuerpo a **abrir los poros y liberarla mediante el sudor**.
*   Mezcla: Hojas de Menta (abre poros), Flores de Saúco (antiviral) y Milenrama (regula la sangre).
*   Suministrar una taza de té bien caliente, arropa a la persona en la cama hasta que empiece a sudar. La fiebre bajará naturalmente después de la sudoración.
                `
            },
            {
                id: 'ch3',
                title: 'Capítulo 3: Traumas Críticos',
                content: `
## Golpes, Esguinces y Magulladuras: Árnica

El Árnica montana es indispensable. 
**Regla de oro:** EL ÁRNICA JAMÁS SE PONE EN HERIDAS ABIERTAS. Solo en piel intacta.
*   En caso de esguince de tobillo, codo golpeado, nuca dolorida: aplicar Ungüento o Tintura de Árnica diluida y masajear. Absorbe hematomas (moretones) en tiempo récord.

## Cortes y Quemaduras: Aloe y Sangre de Drago

*   **Aloe Vera:** Para quemaduras de 1er y 2do grado (plancha, horno, estufa). Poner la pulpa pura en frío directamente calma el dolor insoportable al instante y evita la ampolla posterior.
*   **Sangre de Drago (Resina):** El "super glue" de la naturaleza. Si te haces un tajo profundo limpiando verduras, vierte un par de gotas de resina de Croton lechleri (Sangre de drago) en el corte, presiona unos segundos. Cierra hernias, sella instantáneamente, frena el sangrado y es un antibiótico fortísimo natural.
                `
            }
        ]
    }
};
