import { Category } from './recipes';

export const featuredCategory: Category = {
  id: 0,
  name: "Recetas Destacadas",
  range: [1000, 1010],
  shelfImagePrompt: "A beautiful shelf of featured remedies",
  recipes: [
    {
      "id": 1001,
      "title": "Miel Herbal Antiviral",
      "purpose": "Un preparado ideal para fortalecer las defensas y acelerar la recuperación viral.",
      "ingredients": [
        { "es": "Jengibre fresco", "la": "Zingiber officinale", "quantity": "1 cucharada rallada" },
        { "es": "Ajo fresco", "la": "Allium sativum", "quantity": "1 diente picado" },
        { "es": "Miel cruda de abeja", "la": "Apis mellifera cruda", "quantity": "250 ml" },
        { "es": "Canela en polvo", "la": "Cinnamomum verum", "quantity": "1 cucharadita" }
      ],
      "instructions": "Machacar o rallar el jengibre y el ajo. Agregar la canela y mezclar todo en un frasco de vidrio limpio. Cubrir por completo con la miel cruda. Cerrar y dejar macerar de 3 a 5 días en la heladera antes de consumir. No colar.",
      "dosage": "Tomar 1 cucharada sopera al primer síntoma de resfrío, hasta 3 veces al día. Para prevención, 1 cucharadita por la mañana.",
      "notes": "No apto para niños menores de 1 año (por la miel cruda).",
      "imagePrompt": "Close up photo of an amber jar of honey mixed with grated ginger, rustic setup.",
      "imageUrl": "https://images.unsplash.com/photo-1587049352847-4d4b12b1413e?q=80&w=1200&auto=format&fit=crop"
    },
    {
      "id": 1002,
      "title": "Tónico de Ajo y Limón para el Colesterol",
      "purpose": "Una receta clásica para favorecer la circulación, limpiar las arterias y apoyar la salud cardiovascular.",
      "ingredients": [
        { "es": "Limón", "la": "Citrus limon", "quantity": "El jugo de medio limón" },
        { "es": "Ajo fresco", "la": "Allium sativum", "quantity": "1 diente picado" },
        { "es": "Aceite de oliva virgen extra", "la": "Olea europaea", "quantity": "1 cucharada sopera" },
        { "es": "Agua tibia", "la": "Base excipiente", "quantity": "1/2 vaso" }
      ],
      "instructions": "En una taza o vaso, mezclar el jugo de medio limón recién exprimido, el ajo picado bien fino y el aceite de oliva. Agregar el agua tibia y beber de inmediato. Lo ideal es no colarlo, pero podés hacerlo si la textura es muy fuerte.",
      "dosage": "1 toma por la mañana en ayunas, durante 15 días.",
      "notes": "Consultar a su médico si padece acidez estomacal severa o toma anticoagulantes.",
      "imagePrompt": "A single rustic spoon carrying olive oil and crushed garlic. Macro bright.",
      "imageUrl": "https://images.unsplash.com/photo-1596647413524-78363d6b0aab?q=80&w=1200&auto=format&fit=crop"
    },
    {
      "id": 1003,
      "title": "Tintura Calmante para la Ansiedad",
      "purpose": "Un extracto relajante para aliviar estados de ansiedad y estabilizar la respuesta nerviosa.",
      "ingredients": [
        { "es": "Flores de manzanilla", "la": "Matricaria chamomilla", "quantity": "2 cucharadas" },
        { "es": "Pasiflora", "la": "Passiflora incarnata", "quantity": "1 cucharada" },
        { "es": "Alcohol de cereal", "la": "Base excipiente", "quantity": "250 ml" },
        { "es": "Agua destilada", "la": "Base diluyente", "quantity": "250 ml" }
      ],
      "instructions": "Colocar las hierbas en un frasco de vidrio oscuro. Mezclar el agua destilada con el alcohol y verter sobre las hierbas hasta cubrirlas. Cerrar herméticamente y dejar macerar por 21 a 30 días en un lugar oscuro, agitando todos los días. Finalizado el tiempo, filtrar con tela o filtro de café y guardar la tintura.",
      "dosage": "Tomar 30 a 50 gotas diluidas en un vaso con agua o té, hasta 3 veces por día según necesidad.",
      "notes": "Evitar durante el embarazo, o si se maneja maquinaria pesada. No mezclar con antidepresivos sin consultar.",
      "imagePrompt": "A delicate glass dropper filled with amber tincture liquid.",
      "imageUrl": "https://images.unsplash.com/photo-1608528577891-ab2b5b331070?q=80&w=1200&auto=format&fit=crop"
    },
    {
      "id": 1004,
      "title": "La «Amoxicilina» de la Naturaleza",
      "purpose": "Tónico antibiótico casero de amplio espectro para combatir procesos infecciosos o gripales.",
      "ingredients": [
        { "es": "Jengibre rallado", "la": "Zingiber officinale", "quantity": "1 cucharada sopera" },
        { "es": "Ajo picado", "la": "Allium sativum", "quantity": "2 dientes" },
        { "es": "Miel cruda de abeja", "la": "Apis mellifera cruda", "quantity": "100 gramos" },
        { "es": "Vinagre de manzana orgánico", "la": "Base excipiente", "quantity": "1 cucharada" },
        { "es": "Cúrcuma en polvo", "la": "Curcuma longa", "quantity": "1 cucharadita" }
      ],
      "instructions": "Volcar todos los ingredientes en un pequeño cuenco o frasco e integrar hasta formar una pasta o jarabe uniforme. Dejar reposar durante 2 o 3 horas para que los jugos se integren bien.",
      "dosage": "1 cucharadita cada 2 o 3 horas durante el proceso gripal o febril.",
      "notes": "Guardar en un lugar fresco. Las personas con gastritis deben consumir con precaución.",
      "imagePrompt": "Yellowish turmeric paste mixed with ginger and honey on a wooden spoon.",
      "imageUrl": "https://plus.unsplash.com/premium_photo-1663953760459-24b8d7ef2dd4?q=80&w=1200&auto=format&fit=crop"
    },
    {
      "id": 1005,
      "title": "Infusión de Canela para la Presión Arterial",
      "purpose": "Bebida caliente para favorecer la circulación, relajando los vasos sanguíneos.",
      "ingredients": [
        { "es": "Canela", "la": "Cinnamomum verum", "quantity": "1 ramita o 1 cucharadita de polvo" },
        { "es": "Agua purificada", "la": "Base excipiente", "quantity": "1 taza (250 ml)" }
      ],
      "instructions": "Hervir el agua. Añadir la canela (si es rama, dejarla hervir por 3 minutos; si es polvo, volcar el agua caliente sobre ella). Tapar y dejar infundir durante 5 a 10 minutos. Colar si fuese necesario y beber tibio.",
      "dosage": "Tomar 1 a 2 tazas por día, preferiblemente entre las comidas.",
      "notes": "Consultar a un cardiólogo si se sufren de picos severos de hipertensión. Preferir canela de Ceilán.",
      "imagePrompt": "Steaming cup of tea with cinnamon sticks beside it on rustic wood.",
      "imageUrl": "https://images.unsplash.com/photo-1576402422204-7e77dbad5017?q=80&w=1200&auto=format&fit=crop"
    },
    {
      "id": 1006,
      "title": "Bebida Herbal para el Reflujo Ácido",
      "purpose": "Macerado mucilaginoso para proteger las paredes estomacales y calmar la acidez.",
      "ingredients": [
        { "es": "Raíz de malvavisco (o semillas de lino)", "la": "Althaea officinalis / Linum usitatissimum", "quantity": "1 cucharada sopera" },
        { "es": "Agua natural", "la": "Base excipiente", "quantity": "250 ml" }
      ],
      "instructions": "Colocar la cucharada de hierba o semillas en el agua natural (fría) y dejar en remojo tapado durante 4 a 8 horas, o toda la noche. Por la mañana, colar el agua, que habrá adquirido una textura ligeramente gelatinosa (mucílagos).",
      "dosage": "Beber medio vaso de esta preparación viscosa antes de cada comida importante.",
      "notes": "El mucílago puede interferir con la absorción de algunos medicamentos; distanciar su consumo en al menos 2 horas.",
      "imagePrompt": "Glass of clear, slightly textured liquid with seeds settling at bottom.",
      "imageUrl": "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?q=80&w=1200&auto=format&fit=crop"
    },
    {
      "id": 1007,
      "title": "Elixir Respiratorio de Tomillo y Miel",
      "purpose": "Jarabe para calmar la tos, expulsar mucosidad e higienizar los pulmones.",
      "ingredients": [
        { "es": "Tomillo fresco o seco", "la": "Thymus vulgaris", "quantity": "2 cucharadas soperas" },
        { "es": "Miel cruda de abeja", "la": "Apis mellifera cruda", "quantity": "100 gramos" },
        { "es": "Agua purificada", "la": "Base diluyente", "quantity": "1/2 taza" }
      ],
      "instructions": "Hervir el agua, retirar del fuego y hacer una infusión muy fuerte añadiendo el tomillo. Tapar y dejar reposar unos 20 minutos. Colar exprimiendo bien las hojas para sacar todo el líquido. Una vez que este concentrado esté tibio (no caliente), mezclar rigurosamente con la miel cruda hasta homogeneizar.",
      "dosage": "Tomar 1 cucharada sopera de jarabe cada vez que se tenga tos aguda, o 3 veces por día de forma preventiva.",
      "notes": "Se conserva hasta por un mes en el estante de la puerta de la heladera.",
      "imagePrompt": "Dark rich syrup being poured into a spoon next to thyme sprigs.",
      "imageUrl": "https://images.unsplash.com/photo-1629851602497-293f9c656209?q=80&w=1200&auto=format&fit=crop"
    },
    {
      "id": 1008,
      "title": "Jarabe Milagroso para las Migrañas",
      "purpose": "Tintura rápida rica en compuestos con efecto analgésico y antiespasmódico.",
      "ingredients": [
        { "es": "Matricaria (Feverfew)", "la": "Tanacetum parthenium", "quantity": "1 cucharada" },
        { "es": "Melisa o Toronjil", "la": "Melissa officinalis", "quantity": "1 cucharada" },
        { "es": "Agua caliente", "la": "Base excipiente", "quantity": "250 ml" }
      ],
      "instructions": "Verter el agua hirviendo sobre las hierbas secas. Dejar infundir durante 15 minutos, tapado. Filtrar bien. Se puede beber directamente como infusión o agregarle unas gotas de miel.",
      "dosage": "Tomar 1 a 2 tazas de la infusión al día en las fases iniciales de la jaqueca. No abusar.",
      "notes": "No recomendado para mujeres gestantes. Consultar médico para migrañas crónicas.",
      "imagePrompt": "Steaming herbal infusion next to pale yellow and white field flowers.",
      "imageUrl": "https://images.unsplash.com/photo-1563822249548-9a72b6353d2d?q=80&w=1200&auto=format&fit=crop"
    },
    {
      "id": 1009,
      "title": "Vapor de Eucalipto para la Congestión",
      "purpose": "Bahos curativos para abrir los bronquios, suavizar e hidratar las vías respiratorias secas.",
      "ingredients": [
        { "es": "Hojas de eucalipto seco", "la": "Eucalyptus globulus", "quantity": "2 puñados" },
        { "es": "Agua purificada", "la": "Base excipiente", "quantity": "1 litro" },
        { "es": "Sal gruesa marina", "la": "Cloruro cálcico/físico", "quantity": "1 cucharada" }
      ],
      "instructions": "Hervir el agua en una olla grande. Apagar el calor y añadir las hojas de eucalipto junto a la sal gruesa. Colocar la olla en una superficie segura sobre una mesa. Sentarse frente a la olla, poner una toalla cubriendo cabeza, hombros y olla para atrapar el vapor, y respirar lento por la nariz.",
      "dosage": "Hacer de 5 a 10 minutos de inhalación profunda por sesión. Repetir 2 veces al día.",
      "notes": "Cuidado extremo para no quemarse con el agua caliente ni el vapor excesivamente ardiente. Mantener al menos 30cm de distancia de la superficie del agua.",
      "imagePrompt": "Vapor slowly rising from a pot with green eucalyptus leaves scattered.",
      "imageUrl": "https://images.unsplash.com/photo-1587825027984-c42813dfd1db?q=80&w=1200&auto=format&fit=crop"
    },
    {
      "id": 1010,
      "title": "Caramelos Anestésicos Tos de Miel Limón Mágico",
      "purpose": "Pastillas balsámicas para lubricar e insensibilizar levemente la garganta rasposa e irritada.",
      "ingredients": [
        { "es": "Miel cruda de abeja", "la": "Apis mellifera", "quantity": "4 cucharadas soperas" },
        { "es": "Limón fresco", "la": "Citrus limon", "quantity": "El jugo de medio limón" },
        { "es": "Jengibre en polvo", "la": "Zingiber officinale", "quantity": "1/2 cucharadita" }
      ],
      "instructions": "En una olla muy pequeña o sartén de teflón, calentar la miel junto al jugo de limón y el polvo a fuego muy suave hasta que hierva y haga espuma (de 3 a 5 min, remover seguido). Probar el 'punto caramelo' tirando una gota al agua fría; debe endurecer. Si endurece, apagar. Con una cuchara, armar bolitas en papel manteca o molde de silicona pre-engrasado. Dejar enfriar hasta que solidifiquen.",
      "dosage": "Chupar como un caramelo lentamente ante crisis de tos seca raspante.",
      "notes": "El fuego fuerte quema la miel rápido y la vuelve amarga. Controlar rigurosamente el hervor.",
      "imagePrompt": "Round amber-colored lozenges or hard candies on natural parchment paper.",
      "imageUrl": "https://plus.unsplash.com/premium_photo-1675806653372-520f92b77bb2?q=80&w=1200&auto=format&fit=crop"
    }
  ]
};
