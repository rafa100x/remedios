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
  {
    "id": 1,
    "name": "SISTEMA RESPIRATORIO",
    "range": [
      1,
      20
    ],
    "shelfImagePrompt": "Primer plano fotorrealista de un estante de madera rústica de boticario. Contiene 20 frascos de vidrio ámbar y verde esmerilado. Etiquetas de papel envejecido legibles con números del 1 al 20. Hojas de eucalipto seco esparcidas.",
    "recipes": [
      {
        "id": 1,
        "title": "Infusión de Llantén y Malva",
        "purpose": "Un preparado clásico ideal para suavizar la garganta irritada. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Llantén",
            "la": "Plantago major"
          },
          {
            "es": "Malva",
            "la": "Malva sylvestris"
          },
          {
            "es": "Vino blanco",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Herví el vino blanco y agregale llantén y malva. Dejalo reposar tapado durante 13 minutos. Colalo antes de usarlo.",
        "dosage": "Tomate 1 taza caliente, 2 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando llantén sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color ámbar con una etiqueta de papel envejecido escrita a mano que dice '1'.",
        "imageUrl": "https://picsum.photos/seed/llantén1/800/1000"
      },
      {
        "id": 2,
        "title": "Jarabe de Saúco y Gordolobo",
        "purpose": "Un preparado clásico ideal para expulsar la mucosidad. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Saúco",
            "la": "Sambucus nigra"
          },
          {
            "es": "Gordolobo",
            "la": "Verbascum thapsus"
          },
          {
            "es": "Vino blanco",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar saúco y gordolobo en vino blanco durante 16 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "1 cucharada sopera cada 4 horas.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando saúco sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color ámbar con una etiqueta de papel envejecido escrita a mano que dice '2'.",
        "imageUrl": "https://picsum.photos/seed/saúco2/800/1000"
      },
      {
        "id": 3,
        "title": "Infusión de Eucalipto y Orégano",
        "purpose": "Un preparado clásico ideal para despejar las vías respiratorias. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Eucalipto",
            "la": "Eucalyptus globulus"
          },
          {
            "es": "Orégano",
            "la": "Origanum vulgare"
          },
          {
            "es": "Agua de manantial",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Herví el agua de manantial y agregale eucalipto y orégano. Dejalo reposar tapado durante 13 minutos. Colalo antes de usarlo.",
        "dosage": "Tomate 1 taza caliente, 2 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando eucalipto sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color ámbar con una etiqueta de papel envejecido escrita a mano que dice '3'.",
        "imageUrl": "https://picsum.photos/seed/eucalipto3/800/1000"
      },
      {
        "id": 4,
        "title": "Vahos de Pino silvestre",
        "purpose": "Un preparado clásico ideal para suavizar la garganta irritada. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Pino silvestre",
            "la": "Pinus sylvestris"
          },
          {
            "es": "Llantén",
            "la": "Plantago major"
          },
          {
            "es": "Agua de manantial",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Herví el agua de manantial y agregale pino silvestre y llantén. Dejalo reposar tapado durante 8 minutos. Colalo antes de usarlo.",
        "dosage": "Tomate 1 taza caliente, 2 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando pino silvestre sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color ámbar con una etiqueta de papel envejecido escrita a mano que dice '4'.",
        "imageUrl": "https://picsum.photos/seed/pino silvestre4/800/1000"
      },
      {
        "id": 5,
        "title": "Vahos de Orégano y Malva",
        "purpose": "Un preparado clásico ideal para suavizar la garganta irritada. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Orégano",
            "la": "Origanum vulgare"
          },
          {
            "es": "Malva",
            "la": "Malva sylvestris"
          },
          {
            "es": "Agua de manantial",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Herví el agua de manantial y agregale orégano y malva. Dejalo reposar tapado durante 5 minutos. Colalo antes de usarlo.",
        "dosage": "Tomate 1 taza caliente, 2 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando orégano sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color ámbar con una etiqueta de papel envejecido escrita a mano que dice '5'.",
        "imageUrl": "https://picsum.photos/seed/orégano5/800/1000"
      },
      {
        "id": 6,
        "title": "Elixir de Gordolobo",
        "purpose": "Un preparado clásico ideal para suavizar la garganta irritada. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Gordolobo",
            "la": "Verbascum thapsus"
          },
          {
            "es": "Tomillo",
            "la": "Thymus vulgaris"
          },
          {
            "es": "Vino blanco",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar gordolobo y tomillo en vino blanco durante 11 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "1 cucharada sopera cada 7 horas.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando gordolobo sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color ámbar con una etiqueta de papel envejecido escrita a mano que dice '6'.",
        "imageUrl": "https://picsum.photos/seed/gordolobo6/800/1000"
      },
      {
        "id": 7,
        "title": "Infusión de Saúco",
        "purpose": "Un preparado clásico ideal para expulsar la mucosidad. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Saúco",
            "la": "Sambucus nigra"
          },
          {
            "es": "Llantén",
            "la": "Plantago major"
          },
          {
            "es": "Vino blanco",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Herví el vino blanco y agregale saúco y llantén. Dejalo reposar tapado durante 5 minutos. Colalo antes de usarlo.",
        "dosage": "Tomate 1 taza caliente, 2 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando saúco sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color ámbar con una etiqueta de papel envejecido escrita a mano que dice '7'.",
        "imageUrl": "https://picsum.photos/seed/saúco7/800/1000"
      },
      {
        "id": 8,
        "title": "Bálsamo de Regaliz",
        "purpose": "Un preparado clásico ideal para calmar la tos seca. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Regaliz",
            "la": "Glycyrrhiza glabra"
          },
          {
            "es": "Gordolobo",
            "la": "Verbascum thapsus"
          },
          {
            "es": "Aceite de almendras",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Derretí aceite de almendras al baño maría. Agregá los extractos de regaliz y gordolobo. Revolvé constante con espátula de madera hasta que quede todo parejo y dejá enfriar en tarro de cristal.",
        "dosage": "Aplicá directo sobre la zona que te molesta mediante un suave masaje circular, 2 o 3 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando regaliz sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color ámbar con una etiqueta de papel envejecido escrita a mano que dice '8'.",
        "imageUrl": "https://picsum.photos/seed/regaliz8/800/1000"
      },
      {
        "id": 9,
        "title": "Decocción de Gordolobo y Regaliz",
        "purpose": "Un preparado clásico ideal para expulsar la mucosidad. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Gordolobo",
            "la": "Verbascum thapsus"
          },
          {
            "es": "Regaliz",
            "la": "Glycyrrhiza glabra"
          },
          {
            "es": "Vino blanco",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Herví el vino blanco y agregale gordolobo y regaliz. Dejalo reposar tapado durante 5 minutos. Colalo antes de usarlo.",
        "dosage": "Tomate 1 taza caliente, 2 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando gordolobo sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color ámbar con una etiqueta de papel envejecido escrita a mano que dice '9'.",
        "imageUrl": "https://picsum.photos/seed/gordolobo9/800/1000"
      },
      {
        "id": 10,
        "title": "Decocción de Gordolobo",
        "purpose": "Un preparado clásico ideal para aliviar la congestión nasal. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Gordolobo",
            "la": "Verbascum thapsus"
          },
          {
            "es": "Tomillo",
            "la": "Thymus vulgaris"
          },
          {
            "es": "Aceite de almendras",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Herví el aceite de almendras y agregale gordolobo y tomillo. Dejalo reposar tapado durante 5 minutos. Colalo antes de usarlo.",
        "dosage": "Tomate 1 taza caliente, 2 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando gordolobo sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color ámbar con una etiqueta de papel envejecido escrita a mano que dice '10'.",
        "imageUrl": "https://picsum.photos/seed/gordolobo10/800/1000"
      },
      {
        "id": 11,
        "title": "Tintura de Llantén",
        "purpose": "Un preparado clásico ideal para despejar las vías respiratorias. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Llantén",
            "la": "Plantago major"
          },
          {
            "es": "Gordolobo",
            "la": "Verbascum thapsus"
          },
          {
            "es": "Aceite de almendras",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar llantén y gordolobo en aceite de almendras durante 10 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "13 gotitas diluidas en un vaso de agua, 2 veces por día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar. Ojo que tiene alcohol, así que nada de dárselo a los chicos y personas con problemas hepáticos graves.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando llantén sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color ámbar con una etiqueta de papel envejecido escrita a mano que dice '11'.",
        "imageUrl": "https://picsum.photos/seed/llantén11/800/1000"
      },
      {
        "id": 12,
        "title": "Bálsamo de Pulmonaria y Eucalipto",
        "purpose": "Un preparado clásico ideal para expulsar la mucosidad. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Pulmonaria",
            "la": "Pulmonaria officinalis"
          },
          {
            "es": "Eucalipto",
            "la": "Eucalyptus globulus"
          },
          {
            "es": "Aceite de almendras",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Derretí aceite de almendras al baño maría. Agregá los extractos de pulmonaria y eucalipto. Revolvé constante con espátula de madera hasta que quede todo parejo y dejá enfriar en tarro de cristal.",
        "dosage": "Aplicá directo sobre la zona que te molesta mediante un suave masaje circular, 2 o 3 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando pulmonaria sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color ámbar con una etiqueta de papel envejecido escrita a mano que dice '12'.",
        "imageUrl": "https://picsum.photos/seed/pulmonaria12/800/1000"
      },
      {
        "id": 13,
        "title": "Infusión de Pulmonaria",
        "purpose": "Un preparado clásico ideal para despejar las vías respiratorias. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Pulmonaria",
            "la": "Pulmonaria officinalis"
          },
          {
            "es": "Regaliz",
            "la": "Glycyrrhiza glabra"
          },
          {
            "es": "Aceite de almendras",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Herví el aceite de almendras y agregale pulmonaria y regaliz. Dejalo reposar tapado durante 5 minutos. Colalo antes de usarlo.",
        "dosage": "Tomate 1 taza caliente, 1 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando pulmonaria sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color ámbar con una etiqueta de papel envejecido escrita a mano que dice '13'.",
        "imageUrl": "https://picsum.photos/seed/pulmonaria13/800/1000"
      },
      {
        "id": 14,
        "title": "Infusión de Eucalipto",
        "purpose": "Un preparado clásico ideal para expulsar la mucosidad. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Eucalipto",
            "la": "Eucalyptus globulus"
          },
          {
            "es": "Malva",
            "la": "Malva sylvestris"
          },
          {
            "es": "Alcohol de 70°",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Herví el alcohol de 70° y agregale eucalipto y malva. Dejalo reposar tapado durante 10 minutos. Colalo antes de usarlo.",
        "dosage": "Tomate 1 taza caliente, 1 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar. Ojo que tiene alcohol, así que nada de dárselo a los chicos y personas con problemas hepáticos graves.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando eucalipto sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color ámbar con una etiqueta de papel envejecido escrita a mano que dice '14'.",
        "imageUrl": "https://picsum.photos/seed/eucalipto14/800/1000"
      },
      {
        "id": 15,
        "title": "Vahos de Saúco y Pulmonaria",
        "purpose": "Un preparado clásico ideal para aliviar la congestión nasal. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Saúco",
            "la": "Sambucus nigra"
          },
          {
            "es": "Pulmonaria",
            "la": "Pulmonaria officinalis"
          },
          {
            "es": "Miel cruda de abeja",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Herví el miel cruda de abeja y agregale saúco y pulmonaria. Dejalo reposar tapado durante 8 minutos. Colalo antes de usarlo.",
        "dosage": "Tomate 1 taza caliente, 2 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando saúco sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color ámbar con una etiqueta de papel envejecido escrita a mano que dice '15'.",
        "imageUrl": "https://picsum.photos/seed/saúco15/800/1000"
      },
      {
        "id": 16,
        "title": "Tintura de Regaliz y Orégano",
        "purpose": "Un preparado clásico ideal para suavizar la garganta irritada. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Regaliz",
            "la": "Glycyrrhiza glabra"
          },
          {
            "es": "Orégano",
            "la": "Origanum vulgare"
          },
          {
            "es": "Miel cruda de abeja",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar regaliz y orégano en miel cruda de abeja durante 8 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "14 gotitas diluidas en un vaso de agua, 2 veces por día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar. Ojo que tiene alcohol, así que nada de dárselo a los chicos y personas con problemas hepáticos graves.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando regaliz sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color ámbar con una etiqueta de papel envejecido escrita a mano que dice '16'.",
        "imageUrl": "https://picsum.photos/seed/regaliz16/800/1000"
      },
      {
        "id": 17,
        "title": "Tintura de Tomillo y Pino silvestre",
        "purpose": "Un preparado clásico ideal para expulsar la mucosidad. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Tomillo",
            "la": "Thymus vulgaris"
          },
          {
            "es": "Pino silvestre",
            "la": "Pinus sylvestris"
          },
          {
            "es": "Alcohol de 70°",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar tomillo y pino silvestre en alcohol de 70° durante 26 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "12 gotitas diluidas en un vaso de agua, 2 veces por día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar. Ojo que tiene alcohol, así que nada de dárselo a los chicos y personas con problemas hepáticos graves.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando tomillo sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color ámbar con una etiqueta de papel envejecido escrita a mano que dice '17'.",
        "imageUrl": "https://picsum.photos/seed/tomillo17/800/1000"
      },
      {
        "id": 18,
        "title": "Decocción de Orégano",
        "purpose": "Un preparado clásico ideal para aliviar la congestión nasal. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Orégano",
            "la": "Origanum vulgare"
          },
          {
            "es": "Eucalipto",
            "la": "Eucalyptus globulus"
          },
          {
            "es": "Alcohol de 70°",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Herví el alcohol de 70° y agregale orégano y eucalipto. Dejalo reposar tapado durante 12 minutos. Colalo antes de usarlo.",
        "dosage": "Tomate 1 taza caliente, 1 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar. Ojo que tiene alcohol, así que nada de dárselo a los chicos y personas con problemas hepáticos graves.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando orégano sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color ámbar con una etiqueta de papel envejecido escrita a mano que dice '18'.",
        "imageUrl": "https://picsum.photos/seed/orégano18/800/1000"
      },
      {
        "id": 19,
        "title": "Jarabe de Malva y Pino silvestre",
        "purpose": "Un preparado clásico ideal para suavizar la garganta irritada. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Malva",
            "la": "Malva sylvestris"
          },
          {
            "es": "Pino silvestre",
            "la": "Pinus sylvestris"
          },
          {
            "es": "Vino blanco",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar malva y pino silvestre en vino blanco durante 21 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "1 cucharada sopera cada 4 horas.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando malva sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color ámbar con una etiqueta de papel envejecido escrita a mano que dice '19'.",
        "imageUrl": "https://picsum.photos/seed/malva19/800/1000"
      },
      {
        "id": 20,
        "title": "Infusión de Pino silvestre y Pulmonaria",
        "purpose": "Un preparado clásico ideal para calmar la tos seca. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Pino silvestre",
            "la": "Pinus sylvestris"
          },
          {
            "es": "Pulmonaria",
            "la": "Pulmonaria officinalis"
          },
          {
            "es": "Agua de manantial",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Herví el agua de manantial y agregale pino silvestre y pulmonaria. Dejalo reposar tapado durante 11 minutos. Colalo antes de usarlo.",
        "dosage": "Tomate 1 taza caliente, 1 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando pino silvestre sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color ámbar con una etiqueta de papel envejecido escrita a mano que dice '20'.",
        "imageUrl": "https://picsum.photos/seed/pino silvestre20/800/1000"
      }
    ]
  },
  {
    "id": 2,
    "name": "SISTEMA DIGESTIVO Y HEPÁTICO",
    "range": [
      21,
      40
    ],
    "shelfImagePrompt": "Primer plano fotorrealista de un estante de madera rústica de boticario. Contiene 20 frascos de vidrio azul cobalto y transparente. Etiquetas de papel envejecido legibles con números del 21 al 40. Raíces de diente de león y mortero de latón.",
    "recipes": [
      {
        "id": 21,
        "title": "Infusión de Melisa y Anís verde",
        "purpose": "Un preparado clásico ideal para aliviar la pesadez estomacal. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Melisa",
            "la": "Melissa officinalis"
          },
          {
            "es": "Anís verde",
            "la": "Pimpinella anisum"
          },
          {
            "es": "Agua purificada",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Herví el agua purificada y agregale melisa y anís verde. Dejalo reposar tapado durante 6 minutos. Colalo antes de usarlo.",
        "dosage": "Tomate 1 taza caliente, 2 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando melisa sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color azul cobalto con una etiqueta de papel envejecido escrita a mano que dice '21'.",
        "imageUrl": "https://picsum.photos/seed/melisa21/800/1000"
      },
      {
        "id": 22,
        "title": "Infusión de Melisa",
        "purpose": "Un preparado clásico ideal para aliviar la pesadez estomacal. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Melisa",
            "la": "Melissa officinalis"
          },
          {
            "es": "Hinojo",
            "la": "Foeniculum vulgare"
          },
          {
            "es": "Alcohol de 60°",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Herví el alcohol de 60° y agregale melisa y hinojo. Dejalo reposar tapado durante 5 minutos. Colalo antes de usarlo.",
        "dosage": "Tomate 1 taza caliente, 1 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar. Ojo que tiene alcohol, así que nada de dárselo a los chicos y personas con problemas hepáticos graves.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando melisa sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color azul cobalto con una etiqueta de papel envejecido escrita a mano que dice '22'.",
        "imageUrl": "https://picsum.photos/seed/melisa22/800/1000"
      },
      {
        "id": 23,
        "title": "Gotas de Manzanilla",
        "purpose": "Un preparado clásico ideal para aliviar la pesadez estomacal. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Manzanilla",
            "la": "Matricaria chamomilla"
          },
          {
            "es": "Hinojo",
            "la": "Foeniculum vulgare"
          },
          {
            "es": "Vinagre de manzana",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar manzanilla y hinojo en vinagre de manzana durante 10 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "22 gotitas diluidas en un vaso de agua, 2 veces por día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando manzanilla sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color azul cobalto con una etiqueta de papel envejecido escrita a mano que dice '23'.",
        "imageUrl": "https://picsum.photos/seed/manzanilla23/800/1000"
      },
      {
        "id": 24,
        "title": "Infusión de Hinojo y Jengibre",
        "purpose": "Un preparado clásico ideal para reducir los gases y flatulencias. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Hinojo",
            "la": "Foeniculum vulgare"
          },
          {
            "es": "Jengibre",
            "la": "Zingiber officinale"
          },
          {
            "es": "Agua purificada",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Herví el agua purificada y agregale hinojo y jengibre. Dejalo reposar tapado durante 11 minutos. Colalo antes de usarlo.",
        "dosage": "Tomate 1 taza caliente, 2 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando hinojo sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color azul cobalto con una etiqueta de papel envejecido escrita a mano que dice '24'.",
        "imageUrl": "https://picsum.photos/seed/hinojo24/800/1000"
      },
      {
        "id": 25,
        "title": "Licor medicinal de Manzanilla",
        "purpose": "Un preparado clásico ideal para aliviar la pesadez estomacal. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Manzanilla",
            "la": "Matricaria chamomilla"
          },
          {
            "es": "Boldo",
            "la": "Peumus boldus"
          },
          {
            "es": "Vino tinto",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar manzanilla y boldo en vino tinto durante 26 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "1 cucharada sopera cada 9 horas.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar. Ojo que tiene alcohol, así que nada de dárselo a los chicos y personas con problemas hepáticos graves.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando manzanilla sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color azul cobalto con una etiqueta de papel envejecido escrita a mano que dice '25'.",
        "imageUrl": "https://picsum.photos/seed/manzanilla25/800/1000"
      },
      {
        "id": 26,
        "title": "Licor medicinal de Menta piperita y Melisa",
        "purpose": "Un preparado clásico ideal para aliviar la pesadez estomacal. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Menta piperita",
            "la": "Mentha x piperita"
          },
          {
            "es": "Melisa",
            "la": "Melissa officinalis"
          },
          {
            "es": "Glicerina vegetal",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar menta piperita y melisa en glicerina vegetal durante 16 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "1 cucharada sopera cada 7 horas.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar. Ojo que tiene alcohol, así que nada de dárselo a los chicos y personas con problemas hepáticos graves.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando menta piperita sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color azul cobalto con una etiqueta de papel envejecido escrita a mano que dice '26'.",
        "imageUrl": "https://picsum.photos/seed/menta piperita26/800/1000"
      },
      {
        "id": 27,
        "title": "Extracto de Diente de león y Hinojo",
        "purpose": "Un preparado clásico ideal para calmar los espasmos intestinales. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Diente de león",
            "la": "Taraxacum officinale"
          },
          {
            "es": "Hinojo",
            "la": "Foeniculum vulgare"
          },
          {
            "es": "Agua purificada",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar diente de león y hinojo en agua purificada durante 11 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "18 gotitas diluidas en un vaso de agua, 2 veces por día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando diente de león sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color azul cobalto con una etiqueta de papel envejecido escrita a mano que dice '27'.",
        "imageUrl": "https://picsum.photos/seed/diente de león27/800/1000"
      },
      {
        "id": 28,
        "title": "Tónico amargo de Diente de león",
        "purpose": "Un preparado clásico ideal para calmar los espasmos intestinales. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Diente de león",
            "la": "Taraxacum officinale"
          },
          {
            "es": "Boldo",
            "la": "Peumus boldus"
          },
          {
            "es": "Alcohol de 60°",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar diente de león y boldo en alcohol de 60° durante 12 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "1 cucharada sopera cada 5 horas.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar. Ojo que tiene alcohol, así que nada de dárselo a los chicos y personas con problemas hepáticos graves.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando diente de león sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color azul cobalto con una etiqueta de papel envejecido escrita a mano que dice '28'.",
        "imageUrl": "https://picsum.photos/seed/diente de león28/800/1000"
      },
      {
        "id": 29,
        "title": "Tónico amargo de Hinojo y Anís verde",
        "purpose": "Un preparado clásico ideal para facilitar la digestión pesada. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Hinojo",
            "la": "Foeniculum vulgare"
          },
          {
            "es": "Anís verde",
            "la": "Pimpinella anisum"
          },
          {
            "es": "Vinagre de manzana",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar hinojo y anís verde en vinagre de manzana durante 11 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "1 cucharada sopera cada 7 horas.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando hinojo sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color azul cobalto con una etiqueta de papel envejecido escrita a mano que dice '29'.",
        "imageUrl": "https://picsum.photos/seed/hinojo29/800/1000"
      },
      {
        "id": 30,
        "title": "Licor medicinal de Alcachofera y Genciana",
        "purpose": "Un preparado clásico ideal para aliviar la pesadez estomacal. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Alcachofera",
            "la": "Cynara scolymus"
          },
          {
            "es": "Genciana",
            "la": "Gentiana lutea"
          },
          {
            "es": "Agua purificada",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar alcachofera y genciana en agua purificada durante 9 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "1 cucharada sopera cada 4 horas.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar. Ojo que tiene alcohol, así que nada de dárselo a los chicos y personas con problemas hepáticos graves.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando alcachofera sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color azul cobalto con una etiqueta de papel envejecido escrita a mano que dice '30'.",
        "imageUrl": "https://picsum.photos/seed/alcachofera30/800/1000"
      },
      {
        "id": 31,
        "title": "Licor medicinal de Melisa y Boldo",
        "purpose": "Un preparado clásico ideal para calmar los espasmos intestinales. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Melisa",
            "la": "Melissa officinalis"
          },
          {
            "es": "Boldo",
            "la": "Peumus boldus"
          },
          {
            "es": "Glicerina vegetal",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar melisa y boldo en glicerina vegetal durante 15 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "1 cucharada sopera cada 8 horas.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar. Ojo que tiene alcohol, así que nada de dárselo a los chicos y personas con problemas hepáticos graves.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando melisa sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color azul cobalto con una etiqueta de papel envejecido escrita a mano que dice '31'.",
        "imageUrl": "https://picsum.photos/seed/melisa31/800/1000"
      },
      {
        "id": 32,
        "title": "Licor medicinal de Menta piperita y Anís verde",
        "purpose": "Un preparado clásico ideal para calmar los espasmos intestinales. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Menta piperita",
            "la": "Mentha x piperita"
          },
          {
            "es": "Anís verde",
            "la": "Pimpinella anisum"
          },
          {
            "es": "Glicerina vegetal",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar menta piperita y anís verde en glicerina vegetal durante 11 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "1 cucharada sopera cada 6 horas.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar. Ojo que tiene alcohol, así que nada de dárselo a los chicos y personas con problemas hepáticos graves.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando menta piperita sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color azul cobalto con una etiqueta de papel envejecido escrita a mano que dice '32'.",
        "imageUrl": "https://picsum.photos/seed/menta piperita32/800/1000"
      },
      {
        "id": 33,
        "title": "Licor medicinal de Hinojo y Genciana",
        "purpose": "Un preparado clásico ideal para calmar los espasmos intestinales. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Hinojo",
            "la": "Foeniculum vulgare"
          },
          {
            "es": "Genciana",
            "la": "Gentiana lutea"
          },
          {
            "es": "Vinagre de manzana",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar hinojo y genciana en vinagre de manzana durante 21 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "1 cucharada sopera cada 9 horas.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar. Ojo que tiene alcohol, así que nada de dárselo a los chicos y personas con problemas hepáticos graves.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando hinojo sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color azul cobalto con una etiqueta de papel envejecido escrita a mano que dice '33'.",
        "imageUrl": "https://picsum.photos/seed/hinojo33/800/1000"
      },
      {
        "id": 34,
        "title": "Extracto de Jengibre",
        "purpose": "Un preparado clásico ideal para reducir los gases y flatulencias. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Jengibre",
            "la": "Zingiber officinale"
          },
          {
            "es": "Melisa",
            "la": "Melissa officinalis"
          },
          {
            "es": "Agua purificada",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar jengibre y melisa en agua purificada durante 12 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "11 gotitas diluidas en un vaso de agua, 3 veces por día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando jengibre sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color azul cobalto con una etiqueta de papel envejecido escrita a mano que dice '34'.",
        "imageUrl": "https://picsum.photos/seed/jengibre34/800/1000"
      },
      {
        "id": 35,
        "title": "Licor medicinal de Melisa",
        "purpose": "Un preparado clásico ideal para aliviar la pesadez estomacal. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Melisa",
            "la": "Melissa officinalis"
          },
          {
            "es": "Genciana",
            "la": "Gentiana lutea"
          },
          {
            "es": "Vinagre de manzana",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar melisa y genciana en vinagre de manzana durante 8 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "1 cucharada sopera cada 4 horas.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar. Ojo que tiene alcohol, así que nada de dárselo a los chicos y personas con problemas hepáticos graves.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando melisa sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color azul cobalto con una etiqueta de papel envejecido escrita a mano que dice '35'.",
        "imageUrl": "https://picsum.photos/seed/melisa35/800/1000"
      },
      {
        "id": 36,
        "title": "Extracto de Melisa y Manzanilla",
        "purpose": "Un preparado clásico ideal para facilitar la digestión pesada. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Melisa",
            "la": "Melissa officinalis"
          },
          {
            "es": "Manzanilla",
            "la": "Matricaria chamomilla"
          },
          {
            "es": "Glicerina vegetal",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar melisa y manzanilla en glicerina vegetal durante 17 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "11 gotitas diluidas en un vaso de agua, 3 veces por día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando melisa sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color azul cobalto con una etiqueta de papel envejecido escrita a mano que dice '36'.",
        "imageUrl": "https://picsum.photos/seed/melisa36/800/1000"
      },
      {
        "id": 37,
        "title": "Extracto de Menta piperita",
        "purpose": "Un preparado clásico ideal para estimular la función hepática. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Menta piperita",
            "la": "Mentha x piperita"
          },
          {
            "es": "Jengibre",
            "la": "Zingiber officinale"
          },
          {
            "es": "Alcohol de 60°",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar menta piperita y jengibre en alcohol de 60° durante 9 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "12 gotitas diluidas en un vaso de agua, 3 veces por día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar. Ojo que tiene alcohol, así que nada de dárselo a los chicos y personas con problemas hepáticos graves.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando menta piperita sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color azul cobalto con una etiqueta de papel envejecido escrita a mano que dice '37'.",
        "imageUrl": "https://picsum.photos/seed/menta piperita37/800/1000"
      },
      {
        "id": 38,
        "title": "Gotas de Manzanilla y Hinojo",
        "purpose": "Un preparado clásico ideal para reducir los gases y flatulencias. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Manzanilla",
            "la": "Matricaria chamomilla"
          },
          {
            "es": "Hinojo",
            "la": "Foeniculum vulgare"
          },
          {
            "es": "Vino tinto",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar manzanilla y hinojo en vino tinto durante 19 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "23 gotitas diluidas en un vaso de agua, 3 veces por día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando manzanilla sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color azul cobalto con una etiqueta de papel envejecido escrita a mano que dice '38'.",
        "imageUrl": "https://picsum.photos/seed/manzanilla38/800/1000"
      },
      {
        "id": 39,
        "title": "Macerado de Anís verde y Jengibre",
        "purpose": "Un preparado clásico ideal para calmar los espasmos intestinales. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Anís verde",
            "la": "Pimpinella anisum"
          },
          {
            "es": "Jengibre",
            "la": "Zingiber officinale"
          },
          {
            "es": "Vino tinto",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar anís verde y jengibre en vino tinto durante 15 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "Tomate 1 taza caliente, 1 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando anís verde sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color azul cobalto con una etiqueta de papel envejecido escrita a mano que dice '39'.",
        "imageUrl": "https://picsum.photos/seed/anís verde39/800/1000"
      },
      {
        "id": 40,
        "title": "Licor medicinal de Manzanilla",
        "purpose": "Un preparado clásico ideal para aliviar la pesadez estomacal. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Manzanilla",
            "la": "Matricaria chamomilla"
          },
          {
            "es": "Genciana",
            "la": "Gentiana lutea"
          },
          {
            "es": "Alcohol de 60°",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar manzanilla y genciana en alcohol de 60° durante 11 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "1 cucharada sopera cada 4 horas.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar. Ojo que tiene alcohol, así que nada de dárselo a los chicos y personas con problemas hepáticos graves.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando manzanilla sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color azul cobalto con una etiqueta de papel envejecido escrita a mano que dice '40'.",
        "imageUrl": "https://picsum.photos/seed/manzanilla40/800/1000"
      }
    ]
  },
  {
    "id": 3,
    "name": "SISTEMA NERVIOSO Y SALUD MENTAL",
    "range": [
      41,
      60
    ],
    "shelfImagePrompt": "Primer plano fotorrealista de un estante de madera rústica de boticario. Contiene 20 frascos de vidrio violeta y ámbar. Etiquetas legibles con números del 41 al 60. Flores secas de pasiflora y balanza antigua.",
    "recipes": [
      {
        "id": 41,
        "title": "Bálsamo relajante de Tila y Lúpulo",
        "purpose": "Un preparado clásico ideal para aliviar el estrés mental. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Tila",
            "la": "Tilia platyphyllos"
          },
          {
            "es": "Lúpulo",
            "la": "Humulus lupulus"
          },
          {
            "es": "Vino dulce",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Derretí vino dulce al baño maría. Agregá los extractos de tila y lúpulo. Revolvé constante con espátula de madera hasta que quede todo parejo y dejá enfriar en tarro de cristal.",
        "dosage": "Aplicá directo sobre la zona que te molesta mediante un suave masaje circular, 2 o 3 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando tila sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color violeta con una etiqueta de papel envejecido escrita a mano que dice '41'.",
        "imageUrl": "https://picsum.photos/seed/tila41/800/1000"
      },
      {
        "id": 42,
        "title": "Bálsamo relajante de Melisa y Azahar",
        "purpose": "Un preparado clásico ideal para relajar el sistema nervioso central. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Melisa",
            "la": "Melissa officinalis"
          },
          {
            "es": "Azahar",
            "la": "Citrus aurantium"
          },
          {
            "es": "Vino dulce",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Derretí vino dulce al baño maría. Agregá los extractos de melisa y azahar. Revolvé constante con espátula de madera hasta que quede todo parejo y dejá enfriar en tarro de cristal.",
        "dosage": "Aplicá directo sobre la zona que te molesta mediante un suave masaje circular, 2 o 3 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando melisa sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color violeta con una etiqueta de papel envejecido escrita a mano que dice '42'.",
        "imageUrl": "https://picsum.photos/seed/melisa42/800/1000"
      },
      {
        "id": 43,
        "title": "Elixir de Lavanda",
        "purpose": "Un preparado clásico ideal para aliviar el estrés mental. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Lavanda",
            "la": "Lavandula angustifolia"
          },
          {
            "es": "Amapola de California",
            "la": "Eschscholzia californica"
          },
          {
            "es": "Miel de azahar",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar lavanda y amapola de california en miel de azahar durante 16 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "1 cucharada sopera cada 6 horas.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando lavanda sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color violeta con una etiqueta de papel envejecido escrita a mano que dice '43'.",
        "imageUrl": "https://picsum.photos/seed/lavanda43/800/1000"
      },
      {
        "id": 44,
        "title": "Elixir de Tila y Lavanda",
        "purpose": "Un preparado clásico ideal para aliviar el estrés mental. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Tila",
            "la": "Tilia platyphyllos"
          },
          {
            "es": "Lavanda",
            "la": "Lavandula angustifolia"
          },
          {
            "es": "Alcohol de 70°",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar tila y lavanda en alcohol de 70° durante 24 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "1 cucharada sopera cada 8 horas.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar. Ojo que tiene alcohol, así que nada de dárselo a los chicos y personas con problemas hepáticos graves.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando tila sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color violeta con una etiqueta de papel envejecido escrita a mano que dice '44'.",
        "imageUrl": "https://picsum.photos/seed/tila44/800/1000"
      },
      {
        "id": 45,
        "title": "Esencia de Amapola de California",
        "purpose": "Un preparado clásico ideal para aliviar el estrés mental. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Amapola de California",
            "la": "Eschscholzia californica"
          },
          {
            "es": "Melisa",
            "la": "Melissa officinalis"
          },
          {
            "es": "Aceite esencial",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar amapola de california y melisa en aceite esencial durante 14 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "Tomate 1 taza caliente, 1 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando amapola de california sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color violeta con una etiqueta de papel envejecido escrita a mano que dice '45'.",
        "imageUrl": "https://picsum.photos/seed/amapola de california45/800/1000"
      },
      {
        "id": 46,
        "title": "Bálsamo relajante de Melisa",
        "purpose": "Un preparado clásico ideal para inducir el sueño profundo. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Melisa",
            "la": "Melissa officinalis"
          },
          {
            "es": "Valeriana",
            "la": "Valeriana officinalis"
          },
          {
            "es": "Agua de manantial",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Derretí agua de manantial al baño maría. Agregá los extractos de melisa y valeriana. Revolvé constante con espátula de madera hasta que quede todo parejo y dejá enfriar en tarro de cristal.",
        "dosage": "Aplicá directo sobre la zona que te molesta mediante un suave masaje circular, 2 o 3 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando melisa sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color violeta con una etiqueta de papel envejecido escrita a mano que dice '46'.",
        "imageUrl": "https://picsum.photos/seed/melisa46/800/1000"
      },
      {
        "id": 47,
        "title": "Elixir de Melisa",
        "purpose": "Un preparado clásico ideal para inducir el sueño profundo. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Melisa",
            "la": "Melissa officinalis"
          },
          {
            "es": "Tila",
            "la": "Tilia platyphyllos"
          },
          {
            "es": "Aceite esencial",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar melisa y tila en aceite esencial durante 13 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "1 cucharada sopera cada 7 horas.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando melisa sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color violeta con una etiqueta de papel envejecido escrita a mano que dice '47'.",
        "imageUrl": "https://picsum.photos/seed/melisa47/800/1000"
      },
      {
        "id": 48,
        "title": "Infusión de Hierba de San Juan y Azahar",
        "purpose": "Un preparado clásico ideal para calmar la ansiedad y el nerviosismo. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Hierba de San Juan",
            "la": "Hypericum perforatum"
          },
          {
            "es": "Azahar",
            "la": "Citrus aurantium"
          },
          {
            "es": "Aceite esencial",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Herví el aceite esencial y agregale hierba de san juan y azahar. Dejalo reposar tapado durante 5 minutos. Colalo antes de usarlo.",
        "dosage": "Tomate 1 taza caliente, 2 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando hierba de san juan sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color violeta con una etiqueta de papel envejecido escrita a mano que dice '48'.",
        "imageUrl": "https://picsum.photos/seed/hierba de san juan48/800/1000"
      },
      {
        "id": 49,
        "title": "Elixir de Amapola de California",
        "purpose": "Un preparado clásico ideal para mejorar el estado de ánimo general. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Amapola de California",
            "la": "Eschscholzia californica"
          },
          {
            "es": "Ashwagandha",
            "la": "Withania somnifera"
          },
          {
            "es": "Miel de azahar",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar amapola de california y ashwagandha en miel de azahar durante 7 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "1 cucharada sopera cada 9 horas.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando amapola de california sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color violeta con una etiqueta de papel envejecido escrita a mano que dice '49'.",
        "imageUrl": "https://picsum.photos/seed/amapola de california49/800/1000"
      },
      {
        "id": 50,
        "title": "Infusión de Lúpulo y Ashwagandha",
        "purpose": "Un preparado clásico ideal para inducir el sueño profundo. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Lúpulo",
            "la": "Humulus lupulus"
          },
          {
            "es": "Ashwagandha",
            "la": "Withania somnifera"
          },
          {
            "es": "Agua de manantial",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Herví el agua de manantial y agregale lúpulo y ashwagandha. Dejalo reposar tapado durante 13 minutos. Colalo antes de usarlo.",
        "dosage": "Tomate 1 taza caliente, 1 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando lúpulo sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color violeta con una etiqueta de papel envejecido escrita a mano que dice '50'.",
        "imageUrl": "https://picsum.photos/seed/lúpulo50/800/1000"
      },
      {
        "id": 51,
        "title": "Elixir de Melisa",
        "purpose": "Un preparado clásico ideal para aliviar el estrés mental. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Melisa",
            "la": "Melissa officinalis"
          },
          {
            "es": "Lavanda",
            "la": "Lavandula angustifolia"
          },
          {
            "es": "Aceite esencial",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar melisa y lavanda en aceite esencial durante 16 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "1 cucharada sopera cada 9 horas.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando melisa sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color violeta con una etiqueta de papel envejecido escrita a mano que dice '51'.",
        "imageUrl": "https://picsum.photos/seed/melisa51/800/1000"
      },
      {
        "id": 52,
        "title": "Bálsamo relajante de Valeriana",
        "purpose": "Un preparado clásico ideal para aliviar el estrés mental. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Valeriana",
            "la": "Valeriana officinalis"
          },
          {
            "es": "Ashwagandha",
            "la": "Withania somnifera"
          },
          {
            "es": "Miel de azahar",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Derretí miel de azahar al baño maría. Agregá los extractos de valeriana y ashwagandha. Revolvé constante con espátula de madera hasta que quede todo parejo y dejá enfriar en tarro de cristal.",
        "dosage": "Aplicá directo sobre la zona que te molesta mediante un suave masaje circular, 2 o 3 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando valeriana sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color violeta con una etiqueta de papel envejecido escrita a mano que dice '52'.",
        "imageUrl": "https://picsum.photos/seed/valeriana52/800/1000"
      },
      {
        "id": 53,
        "title": "Tintura de Pasiflora y Ashwagandha",
        "purpose": "Un preparado clásico ideal para calmar la ansiedad y el nerviosismo. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Pasiflora",
            "la": "Passiflora incarnata"
          },
          {
            "es": "Ashwagandha",
            "la": "Withania somnifera"
          },
          {
            "es": "Alcohol de 70°",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar pasiflora y ashwagandha en alcohol de 70° durante 25 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "18 gotitas diluidas en un vaso de agua, 2 veces por día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar. Ojo que tiene alcohol, así que nada de dárselo a los chicos y personas con problemas hepáticos graves.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando pasiflora sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color violeta con una etiqueta de papel envejecido escrita a mano que dice '53'.",
        "imageUrl": "https://picsum.photos/seed/pasiflora53/800/1000"
      },
      {
        "id": 54,
        "title": "Bálsamo relajante de Amapola de California",
        "purpose": "Un preparado clásico ideal para calmar la ansiedad y el nerviosismo. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Amapola de California",
            "la": "Eschscholzia californica"
          },
          {
            "es": "Ashwagandha",
            "la": "Withania somnifera"
          },
          {
            "es": "Alcohol de 70°",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Derretí alcohol de 70° al baño maría. Agregá los extractos de amapola de california y ashwagandha. Revolvé constante con espátula de madera hasta que quede todo parejo y dejá enfriar en tarro de cristal.",
        "dosage": "Aplicá directo sobre la zona que te molesta mediante un suave masaje circular, 2 o 3 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar. Ojo que tiene alcohol, así que nada de dárselo a los chicos y personas con problemas hepáticos graves.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando amapola de california sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color violeta con una etiqueta de papel envejecido escrita a mano que dice '54'.",
        "imageUrl": "https://picsum.photos/seed/amapola de california54/800/1000"
      },
      {
        "id": 55,
        "title": "Bálsamo relajante de Lúpulo y Azahar",
        "purpose": "Un preparado clásico ideal para mejorar el estado de ánimo general. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Lúpulo",
            "la": "Humulus lupulus"
          },
          {
            "es": "Azahar",
            "la": "Citrus aurantium"
          },
          {
            "es": "Agua de manantial",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Derretí agua de manantial al baño maría. Agregá los extractos de lúpulo y azahar. Revolvé constante con espátula de madera hasta que quede todo parejo y dejá enfriar en tarro de cristal.",
        "dosage": "Aplicá directo sobre la zona que te molesta mediante un suave masaje circular, 2 o 3 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando lúpulo sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color violeta con una etiqueta de papel envejecido escrita a mano que dice '55'.",
        "imageUrl": "https://picsum.photos/seed/lúpulo55/800/1000"
      },
      {
        "id": 56,
        "title": "Esencia de Tila y Ashwagandha",
        "purpose": "Un preparado clásico ideal para relajar el sistema nervioso central. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Tila",
            "la": "Tilia platyphyllos"
          },
          {
            "es": "Ashwagandha",
            "la": "Withania somnifera"
          },
          {
            "es": "Alcohol de 70°",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar tila y ashwagandha en alcohol de 70° durante 20 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "Tomate 1 taza caliente, 2 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar. Ojo que tiene alcohol, así que nada de dárselo a los chicos y personas con problemas hepáticos graves.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando tila sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color violeta con una etiqueta de papel envejecido escrita a mano que dice '56'.",
        "imageUrl": "https://picsum.photos/seed/tila56/800/1000"
      },
      {
        "id": 57,
        "title": "Esencia de Azahar y Melisa",
        "purpose": "Un preparado clásico ideal para inducir el sueño profundo. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Azahar",
            "la": "Citrus aurantium"
          },
          {
            "es": "Melisa",
            "la": "Melissa officinalis"
          },
          {
            "es": "Aceite esencial",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar azahar y melisa en aceite esencial durante 23 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "Tomate 1 taza caliente, 1 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando azahar sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color violeta con una etiqueta de papel envejecido escrita a mano que dice '57'.",
        "imageUrl": "https://picsum.photos/seed/azahar57/800/1000"
      },
      {
        "id": 58,
        "title": "Elixir de Pasiflora y Lúpulo",
        "purpose": "Un preparado clásico ideal para calmar la ansiedad y el nerviosismo. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Pasiflora",
            "la": "Passiflora incarnata"
          },
          {
            "es": "Lúpulo",
            "la": "Humulus lupulus"
          },
          {
            "es": "Agua de manantial",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar pasiflora y lúpulo en agua de manantial durante 25 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "1 cucharada sopera cada 6 horas.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando pasiflora sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color violeta con una etiqueta de papel envejecido escrita a mano que dice '58'.",
        "imageUrl": "https://picsum.photos/seed/pasiflora58/800/1000"
      },
      {
        "id": 59,
        "title": "Gotas de Lúpulo",
        "purpose": "Un preparado clásico ideal para mejorar el estado de ánimo general. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Lúpulo",
            "la": "Humulus lupulus"
          },
          {
            "es": "Tila",
            "la": "Tilia platyphyllos"
          },
          {
            "es": "Aceite esencial",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar lúpulo y tila en aceite esencial durante 25 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "16 gotitas diluidas en un vaso de agua, 3 veces por día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando lúpulo sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color violeta con una etiqueta de papel envejecido escrita a mano que dice '59'.",
        "imageUrl": "https://picsum.photos/seed/lúpulo59/800/1000"
      },
      {
        "id": 60,
        "title": "Esencia de Ashwagandha y Pasiflora",
        "purpose": "Un preparado clásico ideal para calmar la ansiedad y el nerviosismo. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Ashwagandha",
            "la": "Withania somnifera"
          },
          {
            "es": "Pasiflora",
            "la": "Passiflora incarnata"
          },
          {
            "es": "Agua de manantial",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar ashwagandha y pasiflora en agua de manantial durante 8 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "Tomate 1 taza caliente, 2 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando ashwagandha sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color violeta con una etiqueta de papel envejecido escrita a mano que dice '60'.",
        "imageUrl": "https://picsum.photos/seed/ashwagandha60/800/1000"
      }
    ]
  },
  {
    "id": 4,
    "name": "SISTEMA INMUNOLÓGICO Y VITALIDAD",
    "range": [
      61,
      80
    ],
    "shelfImagePrompt": "Primer plano fotorrealista de un estante de madera rústica de boticario. Contiene 20 frascos de vidrio rojo rubí y transparente. Etiquetas legibles con números del 61 al 80. Raíces de equinácea y escaramujos secos.",
    "recipes": [
      {
        "id": 61,
        "title": "Decocción de Romero",
        "purpose": "Un preparado clásico ideal para acelerar la recuperación tras la enfermedad. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Romero",
            "la": "Rosmarinus officinalis"
          },
          {
            "es": "Reishi",
            "la": "Ganoderma lucidum"
          },
          {
            "es": "Miel cruda",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Herví el miel cruda y agregale romero y reishi. Dejalo reposar tapado durante 9 minutos. Colalo antes de usarlo.",
        "dosage": "Tomate 1 taza caliente, 2 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando romero sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color rojo rubí con una etiqueta de papel envejecido escrita a mano que dice '61'.",
        "imageUrl": "https://picsum.photos/seed/romero61/800/1000"
      },
      {
        "id": 62,
        "title": "Jarabe de Eleuterococo y Tomillo",
        "purpose": "Un preparado clásico ideal para fortalecer las defensas naturales. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Eleuterococo",
            "la": "Eleutherococcus senticosus"
          },
          {
            "es": "Tomillo",
            "la": "Thymus vulgaris"
          },
          {
            "es": "Vinagre de sidra de manzana",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar eleuterococo y tomillo en vinagre de sidra de manzana durante 10 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "1 cucharada sopera cada 5 horas.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando eleuterococo sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color rojo rubí con una etiqueta de papel envejecido escrita a mano que dice '62'.",
        "imageUrl": "https://picsum.photos/seed/eleuterococo62/800/1000"
      },
      {
        "id": 63,
        "title": "Decocción de Reishi",
        "purpose": "Un preparado clásico ideal para acelerar la recuperación tras la enfermedad. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Reishi",
            "la": "Ganoderma lucidum"
          },
          {
            "es": "Cúrcuma",
            "la": "Curcuma longa"
          },
          {
            "es": "Vinagre de sidra de manzana",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Herví el vinagre de sidra de manzana y agregale reishi y cúrcuma. Dejalo reposar tapado durante 10 minutos. Colalo antes de usarlo.",
        "dosage": "Tomate 1 taza caliente, 2 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando reishi sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color rojo rubí con una etiqueta de papel envejecido escrita a mano que dice '63'.",
        "imageUrl": "https://picsum.photos/seed/reishi63/800/1000"
      },
      {
        "id": 64,
        "title": "Tónico de Ajo negro y Uña de gato",
        "purpose": "Un preparado clásico ideal para prevenir infecciones estacionales. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Ajo negro",
            "la": "Allium sativum"
          },
          {
            "es": "Uña de gato",
            "la": "Uncaria tomentosa"
          },
          {
            "es": "Agua purificada",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar ajo negro y uña de gato en agua purificada durante 20 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "1 cucharada sopera cada 9 horas.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando ajo negro sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color rojo rubí con una etiqueta de papel envejecido escrita a mano que dice '64'.",
        "imageUrl": "https://picsum.photos/seed/ajo negro64/800/1000"
      },
      {
        "id": 65,
        "title": "Oxymel de Eleuterococo y Escaramujo",
        "purpose": "Un preparado clásico ideal para acelerar la recuperación tras la enfermedad. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Eleuterococo",
            "la": "Eleutherococcus senticosus"
          },
          {
            "es": "Escaramujo",
            "la": "Rosa canina"
          },
          {
            "es": "Vinagre de sidra de manzana",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar eleuterococo y escaramujo en vinagre de sidra de manzana durante 22 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "Tomate 1 taza caliente, 2 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando eleuterococo sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color rojo rubí con una etiqueta de papel envejecido escrita a mano que dice '65'.",
        "imageUrl": "https://picsum.photos/seed/eleuterococo65/800/1000"
      },
      {
        "id": 66,
        "title": "Oxymel de Escaramujo y Uña de gato",
        "purpose": "Un preparado clásico ideal para estimular el sistema inmune. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Escaramujo",
            "la": "Rosa canina"
          },
          {
            "es": "Uña de gato",
            "la": "Uncaria tomentosa"
          },
          {
            "es": "Agua purificada",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar escaramujo y uña de gato en agua purificada durante 8 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "Tomate 1 taza caliente, 2 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando escaramujo sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color rojo rubí con una etiqueta de papel envejecido escrita a mano que dice '66'.",
        "imageUrl": "https://picsum.photos/seed/escaramujo66/800/1000"
      },
      {
        "id": 67,
        "title": "Oxymel de Ajo negro y Equinácea",
        "purpose": "Un preparado clásico ideal para acelerar la recuperación tras la enfermedad. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Ajo negro",
            "la": "Allium sativum"
          },
          {
            "es": "Equinácea",
            "la": "Echinacea purpurea"
          },
          {
            "es": "Vinagre de sidra de manzana",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar ajo negro y equinácea en vinagre de sidra de manzana durante 15 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "Tomate 1 taza caliente, 2 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando ajo negro sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color rojo rubí con una etiqueta de papel envejecido escrita a mano que dice '67'.",
        "imageUrl": "https://picsum.photos/seed/ajo negro67/800/1000"
      },
      {
        "id": 68,
        "title": "Oxymel de Astrágalo y Equinácea",
        "purpose": "Un preparado clásico ideal para fortalecer las defensas naturales. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Astrágalo",
            "la": "Astragalus membranaceus"
          },
          {
            "es": "Equinácea",
            "la": "Echinacea purpurea"
          },
          {
            "es": "Alcohol de 70°",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar astrágalo y equinácea en alcohol de 70° durante 14 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "Tomate 1 taza caliente, 1 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar. Ojo que tiene alcohol, así que nada de dárselo a los chicos y personas con problemas hepáticos graves.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando astrágalo sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color rojo rubí con una etiqueta de papel envejecido escrita a mano que dice '68'.",
        "imageUrl": "https://picsum.photos/seed/astrágalo68/800/1000"
      },
      {
        "id": 69,
        "title": "Tónico de Equinácea y Escaramujo",
        "purpose": "Un preparado clásico ideal para fortalecer las defensas naturales. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Equinácea",
            "la": "Echinacea purpurea"
          },
          {
            "es": "Escaramujo",
            "la": "Rosa canina"
          },
          {
            "es": "Alcohol de 70°",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar equinácea y escaramujo en alcohol de 70° durante 8 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "1 cucharada sopera cada 8 horas.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar. Ojo que tiene alcohol, así que nada de dárselo a los chicos y personas con problemas hepáticos graves.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando equinácea sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color rojo rubí con una etiqueta de papel envejecido escrita a mano que dice '69'.",
        "imageUrl": "https://picsum.photos/seed/equinácea69/800/1000"
      },
      {
        "id": 70,
        "title": "Tónico de Romero y Ajo negro",
        "purpose": "Un preparado clásico ideal para acelerar la recuperación tras la enfermedad. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Romero",
            "la": "Rosmarinus officinalis"
          },
          {
            "es": "Ajo negro",
            "la": "Allium sativum"
          },
          {
            "es": "Miel cruda",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar romero y ajo negro en miel cruda durante 24 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "1 cucharada sopera cada 4 horas.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando romero sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color rojo rubí con una etiqueta de papel envejecido escrita a mano que dice '70'.",
        "imageUrl": "https://picsum.photos/seed/romero70/800/1000"
      },
      {
        "id": 71,
        "title": "Tintura de Eleuterococo",
        "purpose": "Un preparado clásico ideal para estimular el sistema inmune. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Eleuterococo",
            "la": "Eleutherococcus senticosus"
          },
          {
            "es": "Reishi",
            "la": "Ganoderma lucidum"
          },
          {
            "es": "Vinagre de sidra de manzana",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar eleuterococo y reishi en vinagre de sidra de manzana durante 17 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "13 gotitas diluidas en un vaso de agua, 3 veces por día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar. Ojo que tiene alcohol, así que nada de dárselo a los chicos y personas con problemas hepáticos graves.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando eleuterococo sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color rojo rubí con una etiqueta de papel envejecido escrita a mano que dice '71'.",
        "imageUrl": "https://picsum.photos/seed/eleuterococo71/800/1000"
      },
      {
        "id": 72,
        "title": "Tónico de Eleuterococo y Astrágalo",
        "purpose": "Un preparado clásico ideal para acelerar la recuperación tras la enfermedad. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Eleuterococo",
            "la": "Eleutherococcus senticosus"
          },
          {
            "es": "Astrágalo",
            "la": "Astragalus membranaceus"
          },
          {
            "es": "Miel cruda",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar eleuterococo y astrágalo en miel cruda durante 9 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "1 cucharada sopera cada 6 horas.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando eleuterococo sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color rojo rubí con una etiqueta de papel envejecido escrita a mano que dice '72'.",
        "imageUrl": "https://picsum.photos/seed/eleuterococo72/800/1000"
      },
      {
        "id": 73,
        "title": "Tónico de Ajo negro y Tomillo",
        "purpose": "Un preparado clásico ideal para estimular el sistema inmune. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Ajo negro",
            "la": "Allium sativum"
          },
          {
            "es": "Tomillo",
            "la": "Thymus vulgaris"
          },
          {
            "es": "Agua purificada",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar ajo negro y tomillo en agua purificada durante 15 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "1 cucharada sopera cada 4 horas.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando ajo negro sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color rojo rubí con una etiqueta de papel envejecido escrita a mano que dice '73'.",
        "imageUrl": "https://picsum.photos/seed/ajo negro73/800/1000"
      },
      {
        "id": 74,
        "title": "Tónico de Astrágalo y Tomillo",
        "purpose": "Un preparado clásico ideal para prevenir infecciones estacionales. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Astrágalo",
            "la": "Astragalus membranaceus"
          },
          {
            "es": "Tomillo",
            "la": "Thymus vulgaris"
          },
          {
            "es": "Vinagre de sidra de manzana",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar astrágalo y tomillo en vinagre de sidra de manzana durante 24 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "1 cucharada sopera cada 6 horas.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando astrágalo sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color rojo rubí con una etiqueta de papel envejecido escrita a mano que dice '74'.",
        "imageUrl": "https://picsum.photos/seed/astrágalo74/800/1000"
      },
      {
        "id": 75,
        "title": "Extracto de Equinácea",
        "purpose": "Un preparado clásico ideal para aumentar la vitalidad y energía. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Equinácea",
            "la": "Echinacea purpurea"
          },
          {
            "es": "Eleuterococo",
            "la": "Eleutherococcus senticosus"
          },
          {
            "es": "Miel cruda",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar equinácea y eleuterococo en miel cruda durante 16 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "10 gotitas diluidas en un vaso de agua, 2 veces por día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando equinácea sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color rojo rubí con una etiqueta de papel envejecido escrita a mano que dice '75'.",
        "imageUrl": "https://picsum.photos/seed/equinácea75/800/1000"
      },
      {
        "id": 76,
        "title": "Oxymel de Romero y Escaramujo",
        "purpose": "Un preparado clásico ideal para prevenir infecciones estacionales. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Romero",
            "la": "Rosmarinus officinalis"
          },
          {
            "es": "Escaramujo",
            "la": "Rosa canina"
          },
          {
            "es": "Agua purificada",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar romero y escaramujo en agua purificada durante 21 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "Tomate 1 taza caliente, 1 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando romero sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color rojo rubí con una etiqueta de papel envejecido escrita a mano que dice '76'.",
        "imageUrl": "https://picsum.photos/seed/romero76/800/1000"
      },
      {
        "id": 77,
        "title": "Tintura de Astrágalo",
        "purpose": "Un preparado clásico ideal para acelerar la recuperación tras la enfermedad. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Astrágalo",
            "la": "Astragalus membranaceus"
          },
          {
            "es": "Equinácea",
            "la": "Echinacea purpurea"
          },
          {
            "es": "Glicerina",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar astrágalo y equinácea en glicerina durante 9 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "15 gotitas diluidas en un vaso de agua, 3 veces por día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar. Ojo que tiene alcohol, así que nada de dárselo a los chicos y personas con problemas hepáticos graves.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando astrágalo sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color rojo rubí con una etiqueta de papel envejecido escrita a mano que dice '77'.",
        "imageUrl": "https://picsum.photos/seed/astrágalo77/800/1000"
      },
      {
        "id": 78,
        "title": "Tónico de Escaramujo y Equinácea",
        "purpose": "Un preparado clásico ideal para acelerar la recuperación tras la enfermedad. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Escaramujo",
            "la": "Rosa canina"
          },
          {
            "es": "Equinácea",
            "la": "Echinacea purpurea"
          },
          {
            "es": "Miel cruda",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar escaramujo y equinácea en miel cruda durante 15 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "1 cucharada sopera cada 9 horas.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando escaramujo sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color rojo rubí con una etiqueta de papel envejecido escrita a mano que dice '78'.",
        "imageUrl": "https://picsum.photos/seed/escaramujo78/800/1000"
      },
      {
        "id": 79,
        "title": "Tintura de Cúrcuma y Escaramujo",
        "purpose": "Un preparado clásico ideal para aumentar la vitalidad y energía. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Cúrcuma",
            "la": "Curcuma longa"
          },
          {
            "es": "Escaramujo",
            "la": "Rosa canina"
          },
          {
            "es": "Miel cruda",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar cúrcuma y escaramujo en miel cruda durante 9 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "14 gotitas diluidas en un vaso de agua, 2 veces por día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar. Ojo que tiene alcohol, así que nada de dárselo a los chicos y personas con problemas hepáticos graves.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando cúrcuma sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color rojo rubí con una etiqueta de papel envejecido escrita a mano que dice '79'.",
        "imageUrl": "https://picsum.photos/seed/cúrcuma79/800/1000"
      },
      {
        "id": 80,
        "title": "Jarabe de Tomillo y Uña de gato",
        "purpose": "Un preparado clásico ideal para fortalecer las defensas naturales. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Tomillo",
            "la": "Thymus vulgaris"
          },
          {
            "es": "Uña de gato",
            "la": "Uncaria tomentosa"
          },
          {
            "es": "Agua purificada",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar tomillo y uña de gato en agua purificada durante 13 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "1 cucharada sopera cada 4 horas.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando tomillo sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color rojo rubí con una etiqueta de papel envejecido escrita a mano que dice '80'.",
        "imageUrl": "https://picsum.photos/seed/tomillo80/800/1000"
      }
    ]
  },
  {
    "id": 5,
    "name": "SISTEMA CARDIOVASCULAR Y CIRCULATORIO",
    "range": [
      81,
      100
    ],
    "shelfImagePrompt": "Primer plano fotorrealista de un estante de madera rústica de boticario. Contiene 20 frascos de vidrio verde oscuro y ámbar. Etiquetas legibles con números del 81 al 100. Bayas de espino blanco y hojas de ginkgo.",
    "recipes": [
      {
        "id": 81,
        "title": "Ungüento de Ginkgo",
        "purpose": "Un preparado clásico ideal para regular la presión arterial. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Ginkgo",
            "la": "Ginkgo biloba"
          },
          {
            "es": "Milenrama",
            "la": "Achillea millefolium"
          },
          {
            "es": "Agua de manantial",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Derretí agua de manantial al baño maría. Agregá los extractos de ginkgo y milenrama. Revolvé constante con espátula de madera hasta que quede todo parejo y dejá enfriar en tarro de cristal.",
        "dosage": "Aplicá directo sobre la zona que te molesta mediante un suave masaje circular, 2 o 3 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando ginkgo sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color verde oscuro con una etiqueta de papel envejecido escrita a mano que dice '81'.",
        "imageUrl": "https://picsum.photos/seed/ginkgo81/800/1000"
      },
      {
        "id": 82,
        "title": "Macerado de Ginkgo",
        "purpose": "Un preparado clásico ideal para fortalecer los capilares frágiles. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Ginkgo",
            "la": "Ginkgo biloba"
          },
          {
            "es": "Olivo",
            "la": "Olea europaea"
          },
          {
            "es": "Alcohol de 60°",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar ginkgo y olivo en alcohol de 60° durante 15 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "Tomate 1 taza caliente, 1 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar. Ojo que tiene alcohol, así que nada de dárselo a los chicos y personas con problemas hepáticos graves.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando ginkgo sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color verde oscuro con una etiqueta de papel envejecido escrita a mano que dice '82'.",
        "imageUrl": "https://picsum.photos/seed/ginkgo82/800/1000"
      },
      {
        "id": 83,
        "title": "Infusión de Meliloto",
        "purpose": "Un preparado clásico ideal para fortalecer los capilares frágiles. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Meliloto",
            "la": "Melilotus officinalis"
          },
          {
            "es": "Ginkgo",
            "la": "Ginkgo biloba"
          },
          {
            "es": "Aceite de oliva virgen",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Herví el aceite de oliva virgen y agregale meliloto y ginkgo. Dejalo reposar tapado durante 10 minutos. Colalo antes de usarlo.",
        "dosage": "Tomate 1 taza caliente, 2 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando meliloto sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color verde oscuro con una etiqueta de papel envejecido escrita a mano que dice '83'.",
        "imageUrl": "https://picsum.photos/seed/meliloto83/800/1000"
      },
      {
        "id": 84,
        "title": "Infusión de Meliloto",
        "purpose": "Un preparado clásico ideal para mejorar la circulación periférica. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Meliloto",
            "la": "Melilotus officinalis"
          },
          {
            "es": "Rusco",
            "la": "Ruscus aculeatus"
          },
          {
            "es": "Glicerina",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Herví el glicerina y agregale meliloto y rusco. Dejalo reposar tapado durante 12 minutos. Colalo antes de usarlo.",
        "dosage": "Tomate 1 taza caliente, 2 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando meliloto sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color verde oscuro con una etiqueta de papel envejecido escrita a mano que dice '84'.",
        "imageUrl": "https://picsum.photos/seed/meliloto84/800/1000"
      },
      {
        "id": 85,
        "title": "Extracto de Rusco y Espino blanco",
        "purpose": "Un preparado clásico ideal para fortalecer los capilares frágiles. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Rusco",
            "la": "Ruscus aculeatus"
          },
          {
            "es": "Espino blanco",
            "la": "Crataegus monogyna"
          },
          {
            "es": "Aceite de oliva virgen",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar rusco y espino blanco en aceite de oliva virgen durante 11 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "13 gotitas diluidas en un vaso de agua, 2 veces por día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando rusco sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color verde oscuro con una etiqueta de papel envejecido escrita a mano que dice '85'.",
        "imageUrl": "https://picsum.photos/seed/rusco85/800/1000"
      },
      {
        "id": 86,
        "title": "Infusión de Ajo y Vid roja",
        "purpose": "Un preparado clásico ideal para proteger el músculo cardíaco. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Ajo",
            "la": "Allium sativum"
          },
          {
            "es": "Vid roja",
            "la": "Vitis vinifera"
          },
          {
            "es": "Vino tinto",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Herví el vino tinto y agregale ajo y vid roja. Dejalo reposar tapado durante 11 minutos. Colalo antes de usarlo.",
        "dosage": "Tomate 1 taza caliente, 2 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando ajo sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color verde oscuro con una etiqueta de papel envejecido escrita a mano que dice '86'.",
        "imageUrl": "https://picsum.photos/seed/ajo86/800/1000"
      },
      {
        "id": 87,
        "title": "Gotas de Hamamelis y Rusco",
        "purpose": "Un preparado clásico ideal para aliviar la sensación de piernas cansadas. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Hamamelis",
            "la": "Hamamelis virginiana"
          },
          {
            "es": "Rusco",
            "la": "Ruscus aculeatus"
          },
          {
            "es": "Agua de manantial",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar hamamelis y rusco en agua de manantial durante 18 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "15 gotitas diluidas en un vaso de agua, 3 veces por día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando hamamelis sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color verde oscuro con una etiqueta de papel envejecido escrita a mano que dice '87'.",
        "imageUrl": "https://picsum.photos/seed/hamamelis87/800/1000"
      },
      {
        "id": 88,
        "title": "Tónico de Hamamelis y Ajo",
        "purpose": "Un preparado clásico ideal para mejorar la circulación periférica. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Hamamelis",
            "la": "Hamamelis virginiana"
          },
          {
            "es": "Ajo",
            "la": "Allium sativum"
          },
          {
            "es": "Agua de manantial",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar hamamelis y ajo en agua de manantial durante 8 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "1 cucharada sopera cada 7 horas.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando hamamelis sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color verde oscuro con una etiqueta de papel envejecido escrita a mano que dice '88'.",
        "imageUrl": "https://picsum.photos/seed/hamamelis88/800/1000"
      },
      {
        "id": 89,
        "title": "Macerado de Milenrama y Ginkgo",
        "purpose": "Un preparado clásico ideal para regular la presión arterial. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Milenrama",
            "la": "Achillea millefolium"
          },
          {
            "es": "Ginkgo",
            "la": "Ginkgo biloba"
          },
          {
            "es": "Glicerina",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar milenrama y ginkgo en glicerina durante 9 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "Tomate 1 taza caliente, 2 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando milenrama sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color verde oscuro con una etiqueta de papel envejecido escrita a mano que dice '89'.",
        "imageUrl": "https://picsum.photos/seed/milenrama89/800/1000"
      },
      {
        "id": 90,
        "title": "Ungüento de Ajo y Hamamelis",
        "purpose": "Un preparado clásico ideal para regular la presión arterial. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Ajo",
            "la": "Allium sativum"
          },
          {
            "es": "Hamamelis",
            "la": "Hamamelis virginiana"
          },
          {
            "es": "Aceite de oliva virgen",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Derretí aceite de oliva virgen al baño maría. Agregá los extractos de ajo y hamamelis. Revolvé constante con espátula de madera hasta que quede todo parejo y dejá enfriar en tarro de cristal.",
        "dosage": "Aplicá directo sobre la zona que te molesta mediante un suave masaje circular, 2 o 3 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando ajo sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color verde oscuro con una etiqueta de papel envejecido escrita a mano que dice '90'.",
        "imageUrl": "https://picsum.photos/seed/ajo90/800/1000"
      },
      {
        "id": 91,
        "title": "Ungüento de Ginkgo y Espino blanco",
        "purpose": "Un preparado clásico ideal para aliviar la sensación de piernas cansadas. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Ginkgo",
            "la": "Ginkgo biloba"
          },
          {
            "es": "Espino blanco",
            "la": "Crataegus monogyna"
          },
          {
            "es": "Aceite de oliva virgen",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Derretí aceite de oliva virgen al baño maría. Agregá los extractos de ginkgo y espino blanco. Revolvé constante con espátula de madera hasta que quede todo parejo y dejá enfriar en tarro de cristal.",
        "dosage": "Aplicá directo sobre la zona que te molesta mediante un suave masaje circular, 2 o 3 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando ginkgo sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color verde oscuro con una etiqueta de papel envejecido escrita a mano que dice '91'.",
        "imageUrl": "https://picsum.photos/seed/ginkgo91/800/1000"
      },
      {
        "id": 92,
        "title": "Tónico de Ginkgo y Milenrama",
        "purpose": "Un preparado clásico ideal para proteger el músculo cardíaco. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Ginkgo",
            "la": "Ginkgo biloba"
          },
          {
            "es": "Milenrama",
            "la": "Achillea millefolium"
          },
          {
            "es": "Vino tinto",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar ginkgo y milenrama en vino tinto durante 25 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "1 cucharada sopera cada 5 horas.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando ginkgo sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color verde oscuro con una etiqueta de papel envejecido escrita a mano que dice '92'.",
        "imageUrl": "https://picsum.photos/seed/ginkgo92/800/1000"
      },
      {
        "id": 93,
        "title": "Ungüento de Meliloto",
        "purpose": "Un preparado clásico ideal para fortalecer los capilares frágiles. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Meliloto",
            "la": "Melilotus officinalis"
          },
          {
            "es": "Espino blanco",
            "la": "Crataegus monogyna"
          },
          {
            "es": "Agua de manantial",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Derretí agua de manantial al baño maría. Agregá los extractos de meliloto y espino blanco. Revolvé constante con espátula de madera hasta que quede todo parejo y dejá enfriar en tarro de cristal.",
        "dosage": "Aplicá directo sobre la zona que te molesta mediante un suave masaje circular, 2 o 3 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando meliloto sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color verde oscuro con una etiqueta de papel envejecido escrita a mano que dice '93'.",
        "imageUrl": "https://picsum.photos/seed/meliloto93/800/1000"
      },
      {
        "id": 94,
        "title": "Tónico de Rusco",
        "purpose": "Un preparado clásico ideal para proteger el músculo cardíaco. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Rusco",
            "la": "Ruscus aculeatus"
          },
          {
            "es": "Meliloto",
            "la": "Melilotus officinalis"
          },
          {
            "es": "Agua de manantial",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar rusco y meliloto en agua de manantial durante 25 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "1 cucharada sopera cada 6 horas.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando rusco sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color verde oscuro con una etiqueta de papel envejecido escrita a mano que dice '94'.",
        "imageUrl": "https://picsum.photos/seed/rusco94/800/1000"
      },
      {
        "id": 95,
        "title": "Infusión de Vid roja y Castaño de Indias",
        "purpose": "Un preparado clásico ideal para regular la presión arterial. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Vid roja",
            "la": "Vitis vinifera"
          },
          {
            "es": "Castaño de Indias",
            "la": "Aesculus hippocastanum"
          },
          {
            "es": "Aceite de oliva virgen",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Herví el aceite de oliva virgen y agregale vid roja y castaño de indias. Dejalo reposar tapado durante 12 minutos. Colalo antes de usarlo.",
        "dosage": "Tomate 1 taza caliente, 2 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando vid roja sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color verde oscuro con una etiqueta de papel envejecido escrita a mano que dice '95'.",
        "imageUrl": "https://picsum.photos/seed/vid roja95/800/1000"
      },
      {
        "id": 96,
        "title": "Macerado de Olivo y Espino blanco",
        "purpose": "Un preparado clásico ideal para proteger el músculo cardíaco. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Olivo",
            "la": "Olea europaea"
          },
          {
            "es": "Espino blanco",
            "la": "Crataegus monogyna"
          },
          {
            "es": "Agua de manantial",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar olivo y espino blanco en agua de manantial durante 9 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "Tomate 1 taza caliente, 1 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando olivo sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color verde oscuro con una etiqueta de papel envejecido escrita a mano que dice '96'.",
        "imageUrl": "https://picsum.photos/seed/olivo96/800/1000"
      },
      {
        "id": 97,
        "title": "Extracto de Meliloto y Ginkgo",
        "purpose": "Un preparado clásico ideal para regular la presión arterial. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Meliloto",
            "la": "Melilotus officinalis"
          },
          {
            "es": "Ginkgo",
            "la": "Ginkgo biloba"
          },
          {
            "es": "Glicerina",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar meliloto y ginkgo en glicerina durante 19 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "12 gotitas diluidas en un vaso de agua, 3 veces por día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando meliloto sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color verde oscuro con una etiqueta de papel envejecido escrita a mano que dice '97'.",
        "imageUrl": "https://picsum.photos/seed/meliloto97/800/1000"
      },
      {
        "id": 98,
        "title": "Tónico de Espino blanco y Rusco",
        "purpose": "Un preparado clásico ideal para regular la presión arterial. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Espino blanco",
            "la": "Crataegus monogyna"
          },
          {
            "es": "Rusco",
            "la": "Ruscus aculeatus"
          },
          {
            "es": "Aceite de oliva virgen",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar espino blanco y rusco en aceite de oliva virgen durante 23 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "1 cucharada sopera cada 9 horas.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando espino blanco sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color verde oscuro con una etiqueta de papel envejecido escrita a mano que dice '98'.",
        "imageUrl": "https://picsum.photos/seed/espino blanco98/800/1000"
      },
      {
        "id": 99,
        "title": "Ungüento de Hamamelis",
        "purpose": "Un preparado clásico ideal para aliviar la sensación de piernas cansadas. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Hamamelis",
            "la": "Hamamelis virginiana"
          },
          {
            "es": "Milenrama",
            "la": "Achillea millefolium"
          },
          {
            "es": "Glicerina",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Derretí glicerina al baño maría. Agregá los extractos de hamamelis y milenrama. Revolvé constante con espátula de madera hasta que quede todo parejo y dejá enfriar en tarro de cristal.",
        "dosage": "Aplicá directo sobre la zona que te molesta mediante un suave masaje circular, 2 o 3 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando hamamelis sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color verde oscuro con una etiqueta de papel envejecido escrita a mano que dice '99'.",
        "imageUrl": "https://picsum.photos/seed/hamamelis99/800/1000"
      },
      {
        "id": 100,
        "title": "Macerado de Ginkgo",
        "purpose": "Un preparado clásico ideal para regular la presión arterial. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Ginkgo",
            "la": "Ginkgo biloba"
          },
          {
            "es": "Rusco",
            "la": "Ruscus aculeatus"
          },
          {
            "es": "Glicerina",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar ginkgo y rusco en glicerina durante 26 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "Tomate 1 taza caliente, 2 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando ginkgo sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color verde oscuro con una etiqueta de papel envejecido escrita a mano que dice '100'.",
        "imageUrl": "https://picsum.photos/seed/ginkgo100/800/1000"
      }
    ]
  },
  {
    "id": 6,
    "name": "SISTEMA URINARIO Y RENAL",
    "range": [
      101,
      120
    ],
    "shelfImagePrompt": "Primer plano fotorrealista de un estante de madera rústica de boticario. Contiene 20 frascos de vidrio transparente esmerilado y verde claro. Etiquetas legibles con números del 101 al 120. Hojas de gayuba y cola de caballo.",
    "recipes": [
      {
        "id": 101,
        "title": "Infusión de Cola de caballo y Brezo",
        "purpose": "Un preparado clásico ideal para prevenir la formación de cálculos renales. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Cola de caballo",
            "la": "Equisetum arvense"
          },
          {
            "es": "Brezo",
            "la": "Calluna vulgaris"
          },
          {
            "es": "Glicerina vegetal",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Herví el glicerina vegetal y agregale cola de caballo y brezo. Dejalo reposar tapado durante 7 minutos. Colalo antes de usarlo.",
        "dosage": "Tomate 1 taza caliente, 1 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando cola de caballo sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color transparente esmerilado con una etiqueta de papel envejecido escrita a mano que dice '101'.",
        "imageUrl": "https://picsum.photos/seed/cola de caballo101/800/1000"
      },
      {
        "id": 102,
        "title": "Infusión de Gayuba",
        "purpose": "Un preparado clásico ideal para limpiar las vías urinarias. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Gayuba",
            "la": "Arctostaphylos uva-ursi"
          },
          {
            "es": "Abedul",
            "la": "Betula pendula"
          },
          {
            "es": "Glicerina vegetal",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Herví el glicerina vegetal y agregale gayuba y abedul. Dejalo reposar tapado durante 9 minutos. Colalo antes de usarlo.",
        "dosage": "Tomate 1 taza caliente, 2 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando gayuba sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color transparente esmerilado con una etiqueta de papel envejecido escrita a mano que dice '102'.",
        "imageUrl": "https://picsum.photos/seed/gayuba102/800/1000"
      },
      {
        "id": 103,
        "title": "Decocción de Arenaria y Ortiga verde",
        "purpose": "Un preparado clásico ideal para aliviar la retención de líquidos. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Arenaria",
            "la": "Spergularia rubra"
          },
          {
            "es": "Ortiga verde",
            "la": "Urtica dioica"
          },
          {
            "es": "Glicerina vegetal",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Herví el glicerina vegetal y agregale arenaria y ortiga verde. Dejalo reposar tapado durante 9 minutos. Colalo antes de usarlo.",
        "dosage": "Tomate 1 taza caliente, 2 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando arenaria sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color transparente esmerilado con una etiqueta de papel envejecido escrita a mano que dice '103'.",
        "imageUrl": "https://picsum.photos/seed/arenaria103/800/1000"
      },
      {
        "id": 104,
        "title": "Extracto de Enebro y Grama",
        "purpose": "Un preparado clásico ideal para limpiar las vías urinarias. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Enebro",
            "la": "Juniperus communis"
          },
          {
            "es": "Grama",
            "la": "Cynodon dactylon"
          },
          {
            "es": "Vino blanco",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar enebro y grama en vino blanco durante 11 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "18 gotitas diluidas en un vaso de agua, 3 veces por día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando enebro sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color transparente esmerilado con una etiqueta de papel envejecido escrita a mano que dice '104'.",
        "imageUrl": "https://picsum.photos/seed/enebro104/800/1000"
      },
      {
        "id": 105,
        "title": "Tintura de Grama y Diente de león",
        "purpose": "Un preparado clásico ideal para favorecer la diuresis y eliminación de líquidos. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Grama",
            "la": "Cynodon dactylon"
          },
          {
            "es": "Diente de león",
            "la": "Taraxacum officinale"
          },
          {
            "es": "Agua purificada",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar grama y diente de león en agua purificada durante 12 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "23 gotitas diluidas en un vaso de agua, 3 veces por día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar. Ojo que tiene alcohol, así que nada de dárselo a los chicos y personas con problemas hepáticos graves.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando grama sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color transparente esmerilado con una etiqueta de papel envejecido escrita a mano que dice '105'.",
        "imageUrl": "https://picsum.photos/seed/grama105/800/1000"
      },
      {
        "id": 106,
        "title": "Tónico diurético de Abedul y Diente de león",
        "purpose": "Un preparado clásico ideal para desinfectar el tracto urinario. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Abedul",
            "la": "Betula pendula"
          },
          {
            "es": "Diente de león",
            "la": "Taraxacum officinale"
          },
          {
            "es": "Glicerina vegetal",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar abedul y diente de león en glicerina vegetal durante 12 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "1 cucharada sopera cada 9 horas.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando abedul sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color transparente esmerilado con una etiqueta de papel envejecido escrita a mano que dice '106'.",
        "imageUrl": "https://picsum.photos/seed/abedul106/800/1000"
      },
      {
        "id": 107,
        "title": "Tintura de Diente de león",
        "purpose": "Un preparado clásico ideal para prevenir la formación de cálculos renales. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Diente de león",
            "la": "Taraxacum officinale"
          },
          {
            "es": "Vara de oro",
            "la": "Solidago virgaurea"
          },
          {
            "es": "Vino blanco",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar diente de león y vara de oro en vino blanco durante 8 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "18 gotitas diluidas en un vaso de agua, 3 veces por día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar. Ojo que tiene alcohol, así que nada de dárselo a los chicos y personas con problemas hepáticos graves.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando diente de león sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color transparente esmerilado con una etiqueta de papel envejecido escrita a mano que dice '107'.",
        "imageUrl": "https://picsum.photos/seed/diente de león107/800/1000"
      },
      {
        "id": 108,
        "title": "Decocción de Enebro",
        "purpose": "Un preparado clásico ideal para limpiar las vías urinarias. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Enebro",
            "la": "Juniperus communis"
          },
          {
            "es": "Gayuba",
            "la": "Arctostaphylos uva-ursi"
          },
          {
            "es": "Glicerina vegetal",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Herví el glicerina vegetal y agregale enebro y gayuba. Dejalo reposar tapado durante 14 minutos. Colalo antes de usarlo.",
        "dosage": "Tomate 1 taza caliente, 2 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando enebro sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color transparente esmerilado con una etiqueta de papel envejecido escrita a mano que dice '108'.",
        "imageUrl": "https://picsum.photos/seed/enebro108/800/1000"
      },
      {
        "id": 109,
        "title": "Decocción de Abedul y Ortiga verde",
        "purpose": "Un preparado clásico ideal para favorecer la diuresis y eliminación de líquidos. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Abedul",
            "la": "Betula pendula"
          },
          {
            "es": "Ortiga verde",
            "la": "Urtica dioica"
          },
          {
            "es": "Vino blanco",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Herví el vino blanco y agregale abedul y ortiga verde. Dejalo reposar tapado durante 14 minutos. Colalo antes de usarlo.",
        "dosage": "Tomate 1 taza caliente, 1 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando abedul sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color transparente esmerilado con una etiqueta de papel envejecido escrita a mano que dice '109'.",
        "imageUrl": "https://picsum.photos/seed/abedul109/800/1000"
      },
      {
        "id": 110,
        "title": "Decocción de Arenaria y Brezo",
        "purpose": "Un preparado clásico ideal para desinfectar el tracto urinario. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Arenaria",
            "la": "Spergularia rubra"
          },
          {
            "es": "Brezo",
            "la": "Calluna vulgaris"
          },
          {
            "es": "Alcohol de 50°",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Herví el alcohol de 50° y agregale arenaria y brezo. Dejalo reposar tapado durante 6 minutos. Colalo antes de usarlo.",
        "dosage": "Tomate 1 taza caliente, 2 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar. Ojo que tiene alcohol, así que nada de dárselo a los chicos y personas con problemas hepáticos graves.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando arenaria sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color transparente esmerilado con una etiqueta de papel envejecido escrita a mano que dice '110'.",
        "imageUrl": "https://picsum.photos/seed/arenaria110/800/1000"
      },
      {
        "id": 111,
        "title": "Tintura de Diente de león",
        "purpose": "Un preparado clásico ideal para desinfectar el tracto urinario. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Diente de león",
            "la": "Taraxacum officinale"
          },
          {
            "es": "Abedul",
            "la": "Betula pendula"
          },
          {
            "es": "Vino blanco",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar diente de león y abedul en vino blanco durante 8 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "16 gotitas diluidas en un vaso de agua, 3 veces por día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar. Ojo que tiene alcohol, así que nada de dárselo a los chicos y personas con problemas hepáticos graves.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando diente de león sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color transparente esmerilado con una etiqueta de papel envejecido escrita a mano que dice '111'.",
        "imageUrl": "https://picsum.photos/seed/diente de león111/800/1000"
      },
      {
        "id": 112,
        "title": "Decocción de Arenaria",
        "purpose": "Un preparado clásico ideal para favorecer la diuresis y eliminación de líquidos. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Arenaria",
            "la": "Spergularia rubra"
          },
          {
            "es": "Gayuba",
            "la": "Arctostaphylos uva-ursi"
          },
          {
            "es": "Alcohol de 50°",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Herví el alcohol de 50° y agregale arenaria y gayuba. Dejalo reposar tapado durante 10 minutos. Colalo antes de usarlo.",
        "dosage": "Tomate 1 taza caliente, 2 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar. Ojo que tiene alcohol, así que nada de dárselo a los chicos y personas con problemas hepáticos graves.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando arenaria sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color transparente esmerilado con una etiqueta de papel envejecido escrita a mano que dice '112'.",
        "imageUrl": "https://picsum.photos/seed/arenaria112/800/1000"
      },
      {
        "id": 113,
        "title": "Tónico diurético de Cola de caballo y Diente de león",
        "purpose": "Un preparado clásico ideal para aliviar la retención de líquidos. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Cola de caballo",
            "la": "Equisetum arvense"
          },
          {
            "es": "Diente de león",
            "la": "Taraxacum officinale"
          },
          {
            "es": "Agua purificada",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar cola de caballo y diente de león en agua purificada durante 14 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "1 cucharada sopera cada 5 horas.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando cola de caballo sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color transparente esmerilado con una etiqueta de papel envejecido escrita a mano que dice '113'.",
        "imageUrl": "https://picsum.photos/seed/cola de caballo113/800/1000"
      },
      {
        "id": 114,
        "title": "Tónico diurético de Gayuba y Grama",
        "purpose": "Un preparado clásico ideal para limpiar las vías urinarias. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Gayuba",
            "la": "Arctostaphylos uva-ursi"
          },
          {
            "es": "Grama",
            "la": "Cynodon dactylon"
          },
          {
            "es": "Alcohol de 50°",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar gayuba y grama en alcohol de 50° durante 15 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "1 cucharada sopera cada 4 horas.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar. Ojo que tiene alcohol, así que nada de dárselo a los chicos y personas con problemas hepáticos graves.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando gayuba sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color transparente esmerilado con una etiqueta de papel envejecido escrita a mano que dice '114'.",
        "imageUrl": "https://picsum.photos/seed/gayuba114/800/1000"
      },
      {
        "id": 115,
        "title": "Tónico diurético de Ortiga verde",
        "purpose": "Un preparado clásico ideal para limpiar las vías urinarias. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Ortiga verde",
            "la": "Urtica dioica"
          },
          {
            "es": "Vara de oro",
            "la": "Solidago virgaurea"
          },
          {
            "es": "Alcohol de 50°",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar ortiga verde y vara de oro en alcohol de 50° durante 8 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "1 cucharada sopera cada 5 horas.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar. Ojo que tiene alcohol, así que nada de dárselo a los chicos y personas con problemas hepáticos graves.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando ortiga verde sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color transparente esmerilado con una etiqueta de papel envejecido escrita a mano que dice '115'.",
        "imageUrl": "https://picsum.photos/seed/ortiga verde115/800/1000"
      },
      {
        "id": 116,
        "title": "Decocción de Ortiga verde",
        "purpose": "Un preparado clásico ideal para prevenir la formación de cálculos renales. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Ortiga verde",
            "la": "Urtica dioica"
          },
          {
            "es": "Abedul",
            "la": "Betula pendula"
          },
          {
            "es": "Glicerina vegetal",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Herví el glicerina vegetal y agregale ortiga verde y abedul. Dejalo reposar tapado durante 10 minutos. Colalo antes de usarlo.",
        "dosage": "Tomate 1 taza caliente, 1 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando ortiga verde sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color transparente esmerilado con una etiqueta de papel envejecido escrita a mano que dice '116'.",
        "imageUrl": "https://picsum.photos/seed/ortiga verde116/800/1000"
      },
      {
        "id": 117,
        "title": "Extracto de Cola de caballo",
        "purpose": "Un preparado clásico ideal para prevenir la formación de cálculos renales. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Cola de caballo",
            "la": "Equisetum arvense"
          },
          {
            "es": "Abedul",
            "la": "Betula pendula"
          },
          {
            "es": "Vino blanco",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar cola de caballo y abedul en vino blanco durante 26 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "20 gotitas diluidas en un vaso de agua, 2 veces por día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando cola de caballo sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color transparente esmerilado con una etiqueta de papel envejecido escrita a mano que dice '117'.",
        "imageUrl": "https://picsum.photos/seed/cola de caballo117/800/1000"
      },
      {
        "id": 118,
        "title": "Tintura de Grama y Abedul",
        "purpose": "Un preparado clásico ideal para limpiar las vías urinarias. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Grama",
            "la": "Cynodon dactylon"
          },
          {
            "es": "Abedul",
            "la": "Betula pendula"
          },
          {
            "es": "Vino blanco",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar grama y abedul en vino blanco durante 15 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "23 gotitas diluidas en un vaso de agua, 3 veces por día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar. Ojo que tiene alcohol, así que nada de dárselo a los chicos y personas con problemas hepáticos graves.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando grama sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color transparente esmerilado con una etiqueta de papel envejecido escrita a mano que dice '118'.",
        "imageUrl": "https://picsum.photos/seed/grama118/800/1000"
      },
      {
        "id": 119,
        "title": "Decocción de Arenaria",
        "purpose": "Un preparado clásico ideal para prevenir la formación de cálculos renales. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Arenaria",
            "la": "Spergularia rubra"
          },
          {
            "es": "Abedul",
            "la": "Betula pendula"
          },
          {
            "es": "Glicerina vegetal",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Herví el glicerina vegetal y agregale arenaria y abedul. Dejalo reposar tapado durante 9 minutos. Colalo antes de usarlo.",
        "dosage": "Tomate 1 taza caliente, 2 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando arenaria sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color transparente esmerilado con una etiqueta de papel envejecido escrita a mano que dice '119'.",
        "imageUrl": "https://picsum.photos/seed/arenaria119/800/1000"
      },
      {
        "id": 120,
        "title": "Tónico diurético de Grama y Cola de caballo",
        "purpose": "Un preparado clásico ideal para aliviar la retención de líquidos. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Grama",
            "la": "Cynodon dactylon"
          },
          {
            "es": "Cola de caballo",
            "la": "Equisetum arvense"
          },
          {
            "es": "Agua purificada",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar grama y cola de caballo en agua purificada durante 18 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "1 cucharada sopera cada 9 horas.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando grama sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color transparente esmerilado con una etiqueta de papel envejecido escrita a mano que dice '120'.",
        "imageUrl": "https://picsum.photos/seed/grama120/800/1000"
      }
    ]
  },
  {
    "id": 7,
    "name": "ALIVIO DEL DOLOR Y ANTIINFLAMATORIOS",
    "range": [
      121,
      140
    ],
    "shelfImagePrompt": "Primer plano fotorrealista de un estante de madera rústica de boticario. Contiene 20 frascos de vidrio ámbar oscuro y marrón. Etiquetas legibles con números del 121 al 140. Corteza de sauce y flores de árnica.",
    "recipes": [
      {
        "id": 121,
        "title": "Ungüento de Harpagofito y Clavo",
        "purpose": "Un preparado clásico ideal para reducir la inflamación local. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Harpagofito",
            "la": "Harpagophytum procumbens"
          },
          {
            "es": "Clavo",
            "la": "Syzygium aromaticum"
          },
          {
            "es": "Cera de abejas",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Derretí cera de abejas al baño maría. Agregá los extractos de harpagofito y clavo. Revolvé constante con espátula de madera hasta que quede todo parejo y dejá enfriar en tarro de cristal.",
        "dosage": "Aplicá directo sobre la zona que te molesta mediante un suave masaje circular, 2 o 3 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando harpagofito sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color ámbar oscuro con una etiqueta de papel envejecido escrita a mano que dice '121'.",
        "imageUrl": "https://picsum.photos/seed/harpagofito121/800/1000"
      },
      {
        "id": 122,
        "title": "Bálsamo de Harpagofito y Consuelda",
        "purpose": "Un preparado clásico ideal para aliviar el dolor articular crónico. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Harpagofito",
            "la": "Harpagophytum procumbens"
          },
          {
            "es": "Consuelda",
            "la": "Symphytum officinale"
          },
          {
            "es": "Cera de abejas",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Derretí cera de abejas al baño maría. Agregá los extractos de harpagofito y consuelda. Revolvé constante con espátula de madera hasta que quede todo parejo y dejá enfriar en tarro de cristal.",
        "dosage": "Aplicá directo sobre la zona que te molesta mediante un suave masaje circular, 2 o 3 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando harpagofito sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color ámbar oscuro con una etiqueta de papel envejecido escrita a mano que dice '122'.",
        "imageUrl": "https://picsum.photos/seed/harpagofito122/800/1000"
      },
      {
        "id": 123,
        "title": "Bálsamo de Sauce blanco y Jengibre",
        "purpose": "Un preparado clásico ideal para desinflamar contusiones y golpes. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Sauce blanco",
            "la": "Salix alba"
          },
          {
            "es": "Jengibre",
            "la": "Zingiber officinale"
          },
          {
            "es": "Cera de abejas",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Derretí cera de abejas al baño maría. Agregá los extractos de sauce blanco y jengibre. Revolvé constante con espátula de madera hasta que quede todo parejo y dejá enfriar en tarro de cristal.",
        "dosage": "Aplicá directo sobre la zona que te molesta mediante un suave masaje circular, 2 o 3 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando sauce blanco sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color ámbar oscuro con una etiqueta de papel envejecido escrita a mano que dice '123'.",
        "imageUrl": "https://picsum.photos/seed/sauce blanco123/800/1000"
      },
      {
        "id": 124,
        "title": "Ungüento de Romero",
        "purpose": "Un preparado clásico ideal para calmar dolores musculares intensos. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Romero",
            "la": "Rosmarinus officinalis"
          },
          {
            "es": "Harpagofito",
            "la": "Harpagophytum procumbens"
          },
          {
            "es": "Agua de manantial",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Derretí agua de manantial al baño maría. Agregá los extractos de romero y harpagofito. Revolvé constante con espátula de madera hasta que quede todo parejo y dejá enfriar en tarro de cristal.",
        "dosage": "Aplicá directo sobre la zona que te molesta mediante un suave masaje circular, 2 o 3 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando romero sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color ámbar oscuro con una etiqueta de papel envejecido escrita a mano que dice '124'.",
        "imageUrl": "https://picsum.photos/seed/romero124/800/1000"
      },
      {
        "id": 125,
        "title": "Cataplasma de Romero",
        "purpose": "Un preparado clásico ideal para mitigar cefaleas tensionales. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Romero",
            "la": "Rosmarinus officinalis"
          },
          {
            "es": "Ulmaria",
            "la": "Filipendula ulmaria"
          },
          {
            "es": "Manteca de karité",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar romero y ulmaria en manteca de karité durante 25 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "Aplicá directo sobre la zona que te molesta mediante un suave masaje circular, 2 o 3 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando romero sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color ámbar oscuro con una etiqueta de papel envejecido escrita a mano que dice '125'.",
        "imageUrl": "https://picsum.photos/seed/romero125/800/1000"
      },
      {
        "id": 126,
        "title": "Tintura de Romero",
        "purpose": "Un preparado clásico ideal para mitigar cefaleas tensionales. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Romero",
            "la": "Rosmarinus officinalis"
          },
          {
            "es": "Ulmaria",
            "la": "Filipendula ulmaria"
          },
          {
            "es": "Alcohol de 70°",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar romero y ulmaria en alcohol de 70° durante 20 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "19 gotitas diluidas en un vaso de agua, 3 veces por día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar. Ojo que tiene alcohol, así que nada de dárselo a los chicos y personas con problemas hepáticos graves.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando romero sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color ámbar oscuro con una etiqueta de papel envejecido escrita a mano que dice '126'.",
        "imageUrl": "https://picsum.photos/seed/romero126/800/1000"
      },
      {
        "id": 127,
        "title": "Tintura de Boswellia y Harpagofito",
        "purpose": "Un preparado clásico ideal para reducir la inflamación local. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Boswellia",
            "la": "Boswellia serrata"
          },
          {
            "es": "Harpagofito",
            "la": "Harpagophytum procumbens"
          },
          {
            "es": "Agua de manantial",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar boswellia y harpagofito en agua de manantial durante 11 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "11 gotitas diluidas en un vaso de agua, 2 veces por día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar. Ojo que tiene alcohol, así que nada de dárselo a los chicos y personas con problemas hepáticos graves.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando boswellia sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color ámbar oscuro con una etiqueta de papel envejecido escrita a mano que dice '127'.",
        "imageUrl": "https://picsum.photos/seed/boswellia127/800/1000"
      },
      {
        "id": 128,
        "title": "Tintura de Clavo",
        "purpose": "Un preparado clásico ideal para mitigar cefaleas tensionales. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Clavo",
            "la": "Syzygium aromaticum"
          },
          {
            "es": "Harpagofito",
            "la": "Harpagophytum procumbens"
          },
          {
            "es": "Aceite de almendras dulces",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar clavo y harpagofito en aceite de almendras dulces durante 14 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "22 gotitas diluidas en un vaso de agua, 3 veces por día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar. Ojo que tiene alcohol, así que nada de dárselo a los chicos y personas con problemas hepáticos graves.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando clavo sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color ámbar oscuro con una etiqueta de papel envejecido escrita a mano que dice '128'.",
        "imageUrl": "https://picsum.photos/seed/clavo128/800/1000"
      },
      {
        "id": 129,
        "title": "Extracto de Jengibre y Clavo",
        "purpose": "Un preparado clásico ideal para reducir la inflamación local. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Jengibre",
            "la": "Zingiber officinale"
          },
          {
            "es": "Clavo",
            "la": "Syzygium aromaticum"
          },
          {
            "es": "Manteca de karité",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar jengibre y clavo en manteca de karité durante 21 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "18 gotitas diluidas en un vaso de agua, 3 veces por día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando jengibre sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color ámbar oscuro con una etiqueta de papel envejecido escrita a mano que dice '129'.",
        "imageUrl": "https://picsum.photos/seed/jengibre129/800/1000"
      },
      {
        "id": 130,
        "title": "Tintura de Clavo y Árnica",
        "purpose": "Un preparado clásico ideal para calmar dolores musculares intensos. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Clavo",
            "la": "Syzygium aromaticum"
          },
          {
            "es": "Árnica",
            "la": "Arnica montana"
          },
          {
            "es": "Manteca de karité",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar clavo y árnica en manteca de karité durante 23 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "23 gotitas diluidas en un vaso de agua, 3 veces por día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar. Ojo que tiene alcohol, así que nada de dárselo a los chicos y personas con problemas hepáticos graves.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando clavo sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color ámbar oscuro con una etiqueta de papel envejecido escrita a mano que dice '130'.",
        "imageUrl": "https://picsum.photos/seed/clavo130/800/1000"
      },
      {
        "id": 131,
        "title": "Extracto de Boswellia",
        "purpose": "Un preparado clásico ideal para desinflamar contusiones y golpes. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Boswellia",
            "la": "Boswellia serrata"
          },
          {
            "es": "Consuelda",
            "la": "Symphytum officinale"
          },
          {
            "es": "Cera de abejas",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar boswellia y consuelda en cera de abejas durante 14 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "21 gotitas diluidas en un vaso de agua, 3 veces por día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando boswellia sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color ámbar oscuro con una etiqueta de papel envejecido escrita a mano que dice '131'.",
        "imageUrl": "https://picsum.photos/seed/boswellia131/800/1000"
      },
      {
        "id": 132,
        "title": "Bálsamo de Romero y Jengibre",
        "purpose": "Un preparado clásico ideal para mitigar cefaleas tensionales. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Romero",
            "la": "Rosmarinus officinalis"
          },
          {
            "es": "Jengibre",
            "la": "Zingiber officinale"
          },
          {
            "es": "Alcohol de 70°",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Derretí alcohol de 70° al baño maría. Agregá los extractos de romero y jengibre. Revolvé constante con espátula de madera hasta que quede todo parejo y dejá enfriar en tarro de cristal.",
        "dosage": "Aplicá directo sobre la zona que te molesta mediante un suave masaje circular, 2 o 3 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar. Ojo que tiene alcohol, así que nada de dárselo a los chicos y personas con problemas hepáticos graves.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando romero sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color ámbar oscuro con una etiqueta de papel envejecido escrita a mano que dice '132'.",
        "imageUrl": "https://picsum.photos/seed/romero132/800/1000"
      },
      {
        "id": 133,
        "title": "Aceite de masaje de Boswellia",
        "purpose": "Un preparado clásico ideal para calmar dolores musculares intensos. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Boswellia",
            "la": "Boswellia serrata"
          },
          {
            "es": "Árnica",
            "la": "Arnica montana"
          },
          {
            "es": "Alcohol de 70°",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar boswellia y árnica en alcohol de 70° durante 9 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "Aplicá directo sobre la zona que te molesta mediante un suave masaje circular, 2 o 3 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar. Ojo que tiene alcohol, así que nada de dárselo a los chicos y personas con problemas hepáticos graves.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando boswellia sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color ámbar oscuro con una etiqueta de papel envejecido escrita a mano que dice '133'.",
        "imageUrl": "https://picsum.photos/seed/boswellia133/800/1000"
      },
      {
        "id": 134,
        "title": "Bálsamo de Jengibre y Árnica",
        "purpose": "Un preparado clásico ideal para reducir la inflamación local. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Jengibre",
            "la": "Zingiber officinale"
          },
          {
            "es": "Árnica",
            "la": "Arnica montana"
          },
          {
            "es": "Aceite de almendras dulces",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Derretí aceite de almendras dulces al baño maría. Agregá los extractos de jengibre y árnica. Revolvé constante con espátula de madera hasta que quede todo parejo y dejá enfriar en tarro de cristal.",
        "dosage": "Aplicá directo sobre la zona que te molesta mediante un suave masaje circular, 2 o 3 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando jengibre sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color ámbar oscuro con una etiqueta de papel envejecido escrita a mano que dice '134'.",
        "imageUrl": "https://picsum.photos/seed/jengibre134/800/1000"
      },
      {
        "id": 135,
        "title": "Bálsamo de Árnica y Sauce blanco",
        "purpose": "Un preparado clásico ideal para reducir la inflamación local. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Árnica",
            "la": "Arnica montana"
          },
          {
            "es": "Sauce blanco",
            "la": "Salix alba"
          },
          {
            "es": "Alcohol de 70°",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Derretí alcohol de 70° al baño maría. Agregá los extractos de árnica y sauce blanco. Revolvé constante con espátula de madera hasta que quede todo parejo y dejá enfriar en tarro de cristal.",
        "dosage": "Aplicá directo sobre la zona que te molesta mediante un suave masaje circular, 2 o 3 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar. Ojo que tiene alcohol, así que nada de dárselo a los chicos y personas con problemas hepáticos graves.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando árnica sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color ámbar oscuro con una etiqueta de papel envejecido escrita a mano que dice '135'.",
        "imageUrl": "https://picsum.photos/seed/árnica135/800/1000"
      },
      {
        "id": 136,
        "title": "Cataplasma de Árnica",
        "purpose": "Un preparado clásico ideal para desinflamar contusiones y golpes. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Árnica",
            "la": "Arnica montana"
          },
          {
            "es": "Harpagofito",
            "la": "Harpagophytum procumbens"
          },
          {
            "es": "Manteca de karité",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar árnica y harpagofito en manteca de karité durante 11 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "Aplicá directo sobre la zona que te molesta mediante un suave masaje circular, 2 o 3 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando árnica sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color ámbar oscuro con una etiqueta de papel envejecido escrita a mano que dice '136'.",
        "imageUrl": "https://picsum.photos/seed/árnica136/800/1000"
      },
      {
        "id": 137,
        "title": "Aceite de masaje de Jengibre",
        "purpose": "Un preparado clásico ideal para mitigar cefaleas tensionales. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Jengibre",
            "la": "Zingiber officinale"
          },
          {
            "es": "Harpagofito",
            "la": "Harpagophytum procumbens"
          },
          {
            "es": "Agua de manantial",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar jengibre y harpagofito en agua de manantial durante 14 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "Aplicá directo sobre la zona que te molesta mediante un suave masaje circular, 2 o 3 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando jengibre sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color ámbar oscuro con una etiqueta de papel envejecido escrita a mano que dice '137'.",
        "imageUrl": "https://picsum.photos/seed/jengibre137/800/1000"
      },
      {
        "id": 138,
        "title": "Extracto de Consuelda",
        "purpose": "Un preparado clásico ideal para reducir la inflamación local. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Consuelda",
            "la": "Symphytum officinale"
          },
          {
            "es": "Romero",
            "la": "Rosmarinus officinalis"
          },
          {
            "es": "Cera de abejas",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar consuelda y romero en cera de abejas durante 22 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "19 gotitas diluidas en un vaso de agua, 2 veces por día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando consuelda sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color ámbar oscuro con una etiqueta de papel envejecido escrita a mano que dice '138'.",
        "imageUrl": "https://picsum.photos/seed/consuelda138/800/1000"
      },
      {
        "id": 139,
        "title": "Aceite de masaje de Clavo y Cúrcuma",
        "purpose": "Un preparado clásico ideal para reducir la inflamación local. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Clavo",
            "la": "Syzygium aromaticum"
          },
          {
            "es": "Cúrcuma",
            "la": "Curcuma longa"
          },
          {
            "es": "Cera de abejas",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar clavo y cúrcuma en cera de abejas durante 20 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "Aplicá directo sobre la zona que te molesta mediante un suave masaje circular, 2 o 3 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando clavo sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color ámbar oscuro con una etiqueta de papel envejecido escrita a mano que dice '139'.",
        "imageUrl": "https://picsum.photos/seed/clavo139/800/1000"
      },
      {
        "id": 140,
        "title": "Ungüento de Árnica",
        "purpose": "Un preparado clásico ideal para desinflamar contusiones y golpes. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Árnica",
            "la": "Arnica montana"
          },
          {
            "es": "Cúrcuma",
            "la": "Curcuma longa"
          },
          {
            "es": "Alcohol de 70°",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Derretí alcohol de 70° al baño maría. Agregá los extractos de árnica y cúrcuma. Revolvé constante con espátula de madera hasta que quede todo parejo y dejá enfriar en tarro de cristal.",
        "dosage": "Aplicá directo sobre la zona que te molesta mediante un suave masaje circular, 2 o 3 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar. Ojo que tiene alcohol, así que nada de dárselo a los chicos y personas con problemas hepáticos graves.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando árnica sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color ámbar oscuro con una etiqueta de papel envejecido escrita a mano que dice '140'.",
        "imageUrl": "https://picsum.photos/seed/árnica140/800/1000"
      }
    ]
  },
  {
    "id": 8,
    "name": "SALUD DE LA MUJER",
    "range": [
      141,
      160
    ],
    "shelfImagePrompt": "Primer plano fotorrealista de un estante de madera rústica de boticario. Contiene 20 frascos de vidrio rosa pálido y transparente. Etiquetas legibles con números del 141 al 160. Flores de caléndula y hojas de frambueso.",
    "recipes": [
      {
        "id": 141,
        "title": "Gotas de Manzanilla y Caléndula",
        "purpose": "Un preparado clásico ideal para aliviar los cólicos menstruales. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Manzanilla",
            "la": "Matricaria chamomilla"
          },
          {
            "es": "Caléndula",
            "la": "Calendula officinalis"
          },
          {
            "es": "Glicerina",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar manzanilla y caléndula en glicerina durante 16 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "13 gotitas diluidas en un vaso de agua, 2 veces por día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando manzanilla sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color rosa pálido con una etiqueta de papel envejecido escrita a mano que dice '141'.",
        "imageUrl": "https://picsum.photos/seed/manzanilla141/800/1000"
      },
      {
        "id": 142,
        "title": "Elixir de Caléndula y Frambueso",
        "purpose": "Un preparado clásico ideal para mitigar los sofocos de la menopausia. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Caléndula",
            "la": "Calendula officinalis"
          },
          {
            "es": "Frambueso",
            "la": "Rubus idaeus"
          },
          {
            "es": "Aceite de onagra",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar caléndula y frambueso en aceite de onagra durante 11 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "1 cucharada sopera cada 9 horas.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando caléndula sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color rosa pálido con una etiqueta de papel envejecido escrita a mano que dice '142'.",
        "imageUrl": "https://picsum.photos/seed/caléndula142/800/1000"
      },
      {
        "id": 143,
        "title": "Tónico de Frambueso y Manzanilla",
        "purpose": "Un preparado clásico ideal para aliviar los cólicos menstruales. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Frambueso",
            "la": "Rubus idaeus"
          },
          {
            "es": "Manzanilla",
            "la": "Matricaria chamomilla"
          },
          {
            "es": "Aceite de onagra",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar frambueso y manzanilla en aceite de onagra durante 8 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "1 cucharada sopera cada 5 horas.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando frambueso sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color rosa pálido con una etiqueta de papel envejecido escrita a mano que dice '143'.",
        "imageUrl": "https://picsum.photos/seed/frambueso143/800/1000"
      },
      {
        "id": 144,
        "title": "Tintura de Milenrama y Artemisa",
        "purpose": "Un preparado clásico ideal para regular el ciclo menstrual. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Milenrama",
            "la": "Achillea millefolium"
          },
          {
            "es": "Artemisa",
            "la": "Artemisia vulgaris"
          },
          {
            "es": "Glicerina",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar milenrama y artemisa en glicerina durante 23 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "21 gotitas diluidas en un vaso de agua, 2 veces por día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar. Ojo que tiene alcohol, así que nada de dárselo a los chicos y personas con problemas hepáticos graves.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando milenrama sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color rosa pálido con una etiqueta de papel envejecido escrita a mano que dice '144'.",
        "imageUrl": "https://picsum.photos/seed/milenrama144/800/1000"
      },
      {
        "id": 145,
        "title": "Tónico de Manzanilla y Caléndula",
        "purpose": "Un preparado clásico ideal para fortalecer el tono uterino. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Manzanilla",
            "la": "Matricaria chamomilla"
          },
          {
            "es": "Caléndula",
            "la": "Calendula officinalis"
          },
          {
            "es": "Agua purificada",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar manzanilla y caléndula en agua purificada durante 9 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "1 cucharada sopera cada 6 horas.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando manzanilla sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color rosa pálido con una etiqueta de papel envejecido escrita a mano que dice '145'.",
        "imageUrl": "https://picsum.photos/seed/manzanilla145/800/1000"
      },
      {
        "id": 146,
        "title": "Gotas de Frambueso y Sauzgatillo",
        "purpose": "Un preparado clásico ideal para equilibrar las fluctuaciones hormonales. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Frambueso",
            "la": "Rubus idaeus"
          },
          {
            "es": "Sauzgatillo",
            "la": "Vitex agnus-castus"
          },
          {
            "es": "Aceite de onagra",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar frambueso y sauzgatillo en aceite de onagra durante 18 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "13 gotitas diluidas en un vaso de agua, 2 veces por día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando frambueso sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color rosa pálido con una etiqueta de papel envejecido escrita a mano que dice '146'.",
        "imageUrl": "https://picsum.photos/seed/frambueso146/800/1000"
      },
      {
        "id": 147,
        "title": "Óvulos vegetales de Cimicífuga y Dong Quai",
        "purpose": "Un preparado clásico ideal para regular el ciclo menstrual. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Cimicífuga",
            "la": "Actaea racemosa"
          },
          {
            "es": "Dong Quai",
            "la": "Angelica sinensis"
          },
          {
            "es": "Agua purificada",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar cimicífuga y dong quai en agua purificada durante 10 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "Tomate 1 taza caliente, 2 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando cimicífuga sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color rosa pálido con una etiqueta de papel envejecido escrita a mano que dice '147'.",
        "imageUrl": "https://picsum.photos/seed/cimicífuga147/800/1000"
      },
      {
        "id": 148,
        "title": "Óvulos vegetales de Sauzgatillo y Manzanilla",
        "purpose": "Un preparado clásico ideal para aliviar los cólicos menstruales. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Sauzgatillo",
            "la": "Vitex agnus-castus"
          },
          {
            "es": "Manzanilla",
            "la": "Matricaria chamomilla"
          },
          {
            "es": "Alcohol de 60°",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar sauzgatillo y manzanilla en alcohol de 60° durante 21 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "Tomate 1 taza caliente, 2 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar. Ojo que tiene alcohol, así que nada de dárselo a los chicos y personas con problemas hepáticos graves.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando sauzgatillo sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color rosa pálido con una etiqueta de papel envejecido escrita a mano que dice '148'.",
        "imageUrl": "https://picsum.photos/seed/sauzgatillo148/800/1000"
      },
      {
        "id": 149,
        "title": "Tónico de Artemisa",
        "purpose": "Un preparado clásico ideal para regular el ciclo menstrual. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Artemisa",
            "la": "Artemisia vulgaris"
          },
          {
            "es": "Dong Quai",
            "la": "Angelica sinensis"
          },
          {
            "es": "Glicerina",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar artemisa y dong quai en glicerina durante 25 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "1 cucharada sopera cada 7 horas.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando artemisa sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color rosa pálido con una etiqueta de papel envejecido escrita a mano que dice '149'.",
        "imageUrl": "https://picsum.photos/seed/artemisa149/800/1000"
      },
      {
        "id": 150,
        "title": "Óvulos vegetales de Dong Quai",
        "purpose": "Un preparado clásico ideal para regular el ciclo menstrual. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Dong Quai",
            "la": "Angelica sinensis"
          },
          {
            "es": "Bolsa de pastor",
            "la": "Capsella bursa-pastoris"
          },
          {
            "es": "Miel cruda",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar dong quai y bolsa de pastor en miel cruda durante 16 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "Tomate 1 taza caliente, 2 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando dong quai sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color rosa pálido con una etiqueta de papel envejecido escrita a mano que dice '150'.",
        "imageUrl": "https://picsum.photos/seed/dong quai150/800/1000"
      },
      {
        "id": 151,
        "title": "Infusión de Artemisa",
        "purpose": "Un preparado clásico ideal para fortalecer el tono uterino. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Artemisa",
            "la": "Artemisia vulgaris"
          },
          {
            "es": "Milenrama",
            "la": "Achillea millefolium"
          },
          {
            "es": "Agua purificada",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Herví el agua purificada y agregale artemisa y milenrama. Dejalo reposar tapado durante 7 minutos. Colalo antes de usarlo.",
        "dosage": "Tomate 1 taza caliente, 1 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando artemisa sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color rosa pálido con una etiqueta de papel envejecido escrita a mano que dice '151'.",
        "imageUrl": "https://picsum.photos/seed/artemisa151/800/1000"
      },
      {
        "id": 152,
        "title": "Gotas de Artemisa y Milenrama",
        "purpose": "Un preparado clásico ideal para mitigar los sofocos de la menopausia. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Artemisa",
            "la": "Artemisia vulgaris"
          },
          {
            "es": "Milenrama",
            "la": "Achillea millefolium"
          },
          {
            "es": "Alcohol de 60°",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar artemisa y milenrama en alcohol de 60° durante 23 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "12 gotitas diluidas en un vaso de agua, 3 veces por día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar. Ojo que tiene alcohol, así que nada de dárselo a los chicos y personas con problemas hepáticos graves.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando artemisa sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color rosa pálido con una etiqueta de papel envejecido escrita a mano que dice '152'.",
        "imageUrl": "https://picsum.photos/seed/artemisa152/800/1000"
      },
      {
        "id": 153,
        "title": "Gotas de Milenrama y Caléndula",
        "purpose": "Un preparado clásico ideal para equilibrar las fluctuaciones hormonales. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Milenrama",
            "la": "Achillea millefolium"
          },
          {
            "es": "Caléndula",
            "la": "Calendula officinalis"
          },
          {
            "es": "Alcohol de 60°",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar milenrama y caléndula en alcohol de 60° durante 8 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "10 gotitas diluidas en un vaso de agua, 2 veces por día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar. Ojo que tiene alcohol, así que nada de dárselo a los chicos y personas con problemas hepáticos graves.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando milenrama sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color rosa pálido con una etiqueta de papel envejecido escrita a mano que dice '153'.",
        "imageUrl": "https://picsum.photos/seed/milenrama153/800/1000"
      },
      {
        "id": 154,
        "title": "Óvulos vegetales de Manzanilla y Bolsa de pastor",
        "purpose": "Un preparado clásico ideal para mitigar los sofocos de la menopausia. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Manzanilla",
            "la": "Matricaria chamomilla"
          },
          {
            "es": "Bolsa de pastor",
            "la": "Capsella bursa-pastoris"
          },
          {
            "es": "Agua purificada",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar manzanilla y bolsa de pastor en agua purificada durante 12 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "Tomate 1 taza caliente, 2 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando manzanilla sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color rosa pálido con una etiqueta de papel envejecido escrita a mano que dice '154'.",
        "imageUrl": "https://picsum.photos/seed/manzanilla154/800/1000"
      },
      {
        "id": 155,
        "title": "Tintura de Milenrama",
        "purpose": "Un preparado clásico ideal para fortalecer el tono uterino. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Milenrama",
            "la": "Achillea millefolium"
          },
          {
            "es": "Cimicífuga",
            "la": "Actaea racemosa"
          },
          {
            "es": "Glicerina",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar milenrama y cimicífuga en glicerina durante 23 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "24 gotitas diluidas en un vaso de agua, 3 veces por día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar. Ojo que tiene alcohol, así que nada de dárselo a los chicos y personas con problemas hepáticos graves.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando milenrama sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color rosa pálido con una etiqueta de papel envejecido escrita a mano que dice '155'.",
        "imageUrl": "https://picsum.photos/seed/milenrama155/800/1000"
      },
      {
        "id": 156,
        "title": "Gotas de Dong Quai",
        "purpose": "Un preparado clásico ideal para equilibrar las fluctuaciones hormonales. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Dong Quai",
            "la": "Angelica sinensis"
          },
          {
            "es": "Frambueso",
            "la": "Rubus idaeus"
          },
          {
            "es": "Miel cruda",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar dong quai y frambueso en miel cruda durante 9 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "24 gotitas diluidas en un vaso de agua, 3 veces por día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando dong quai sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color rosa pálido con una etiqueta de papel envejecido escrita a mano que dice '156'.",
        "imageUrl": "https://picsum.photos/seed/dong quai156/800/1000"
      },
      {
        "id": 157,
        "title": "Óvulos vegetales de Bolsa de pastor",
        "purpose": "Un preparado clásico ideal para fortalecer el tono uterino. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Bolsa de pastor",
            "la": "Capsella bursa-pastoris"
          },
          {
            "es": "Dong Quai",
            "la": "Angelica sinensis"
          },
          {
            "es": "Aceite de onagra",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar bolsa de pastor y dong quai en aceite de onagra durante 25 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "Tomate 1 taza caliente, 2 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando bolsa de pastor sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color rosa pálido con una etiqueta de papel envejecido escrita a mano que dice '157'.",
        "imageUrl": "https://picsum.photos/seed/bolsa de pastor157/800/1000"
      },
      {
        "id": 158,
        "title": "Óvulos vegetales de Bolsa de pastor",
        "purpose": "Un preparado clásico ideal para aliviar los cólicos menstruales. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Bolsa de pastor",
            "la": "Capsella bursa-pastoris"
          },
          {
            "es": "Milenrama",
            "la": "Achillea millefolium"
          },
          {
            "es": "Miel cruda",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar bolsa de pastor y milenrama en miel cruda durante 7 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "Tomate 1 taza caliente, 1 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando bolsa de pastor sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color rosa pálido con una etiqueta de papel envejecido escrita a mano que dice '158'.",
        "imageUrl": "https://picsum.photos/seed/bolsa de pastor158/800/1000"
      },
      {
        "id": 159,
        "title": "Tintura de Cimicífuga",
        "purpose": "Un preparado clásico ideal para aliviar los cólicos menstruales. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Cimicífuga",
            "la": "Actaea racemosa"
          },
          {
            "es": "Manzanilla",
            "la": "Matricaria chamomilla"
          },
          {
            "es": "Alcohol de 60°",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar cimicífuga y manzanilla en alcohol de 60° durante 7 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "24 gotitas diluidas en un vaso de agua, 2 veces por día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar. Ojo que tiene alcohol, así que nada de dárselo a los chicos y personas con problemas hepáticos graves.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando cimicífuga sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color rosa pálido con una etiqueta de papel envejecido escrita a mano que dice '159'.",
        "imageUrl": "https://picsum.photos/seed/cimicífuga159/800/1000"
      },
      {
        "id": 160,
        "title": "Tónico de Bolsa de pastor y Manzanilla",
        "purpose": "Un preparado clásico ideal para fortalecer el tono uterino. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Bolsa de pastor",
            "la": "Capsella bursa-pastoris"
          },
          {
            "es": "Manzanilla",
            "la": "Matricaria chamomilla"
          },
          {
            "es": "Miel cruda",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar bolsa de pastor y manzanilla en miel cruda durante 18 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "1 cucharada sopera cada 8 horas.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando bolsa de pastor sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color rosa pálido con una etiqueta de papel envejecido escrita a mano que dice '160'.",
        "imageUrl": "https://picsum.photos/seed/bolsa de pastor160/800/1000"
      }
    ]
  },
  {
    "id": 9,
    "name": "CUIDADO DE LA PIEL Y DERMATOLOGÍA",
    "range": [
      161,
      180
    ],
    "shelfImagePrompt": "Primer plano fotorrealista de un estante de madera rústica de boticario. Contiene 20 tarros de ungüento de vidrio opaco y frascos esmerilados. Etiquetas legibles con números del 161 al 180. Cera de abejas y flores de lavanda.",
    "recipes": [
      {
        "id": 161,
        "title": "Aceite reparador de Árbol de té",
        "purpose": "Un preparado clásico ideal para aliviar quemaduras leves. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Árbol de té",
            "la": "Melaleuca alternifolia"
          },
          {
            "es": "Avena",
            "la": "Avena sativa"
          },
          {
            "es": "Aceite de coco prensado en frío",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar árbol de té y avena en aceite de coco prensado en frío durante 16 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "Aplicá directo sobre la zona que te molesta mediante un suave masaje circular, 2 o 3 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando árbol de té sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color blanco opalescente con una etiqueta de papel envejecido escrita a mano que dice '161'.",
        "imageUrl": "https://picsum.photos/seed/árbol de té161/800/1000"
      },
      {
        "id": 162,
        "title": "Pomada de Centella asiática y Avena",
        "purpose": "Un preparado clásico ideal para calmar irritaciones y eccemas. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Centella asiática",
            "la": "Centella asiatica"
          },
          {
            "es": "Avena",
            "la": "Avena sativa"
          },
          {
            "es": "Aceite de coco prensado en frío",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Derretí aceite de coco prensado en frío al baño maría. Agregá los extractos de centella asiática y avena. Revolvé constante con espátula de madera hasta que quede todo parejo y dejá enfriar en tarro de cristal.",
        "dosage": "Aplicá directo sobre la zona que te molesta mediante un suave masaje circular, 2 o 3 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando centella asiática sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color blanco opalescente con una etiqueta de papel envejecido escrita a mano que dice '162'.",
        "imageUrl": "https://picsum.photos/seed/centella asiática162/800/1000"
      },
      {
        "id": 163,
        "title": "Cataplasma de Manzanilla y Centella asiática",
        "purpose": "Un preparado clásico ideal para regenerar tejidos dañados. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Manzanilla",
            "la": "Matricaria chamomilla"
          },
          {
            "es": "Centella asiática",
            "la": "Centella asiatica"
          },
          {
            "es": "Aceite de coco prensado en frío",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar manzanilla y centella asiática en aceite de coco prensado en frío durante 23 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "Aplicá directo sobre la zona que te molesta mediante un suave masaje circular, 2 o 3 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando manzanilla sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color blanco opalescente con una etiqueta de papel envejecido escrita a mano que dice '163'.",
        "imageUrl": "https://picsum.photos/seed/manzanilla163/800/1000"
      },
      {
        "id": 164,
        "title": "Pomada de Tepezcohuite y Manzanilla",
        "purpose": "Un preparado clásico ideal para aliviar quemaduras leves. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Tepezcohuite",
            "la": "Mimosa tenuiflora"
          },
          {
            "es": "Manzanilla",
            "la": "Matricaria chamomilla"
          },
          {
            "es": "Agua de rosas",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Derretí agua de rosas al baño maría. Agregá los extractos de tepezcohuite y manzanilla. Revolvé constante con espátula de madera hasta que quede todo parejo y dejá enfriar en tarro de cristal.",
        "dosage": "Aplicá directo sobre la zona que te molesta mediante un suave masaje circular, 2 o 3 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando tepezcohuite sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color blanco opalescente con una etiqueta de papel envejecido escrita a mano que dice '164'.",
        "imageUrl": "https://picsum.photos/seed/tepezcohuite164/800/1000"
      },
      {
        "id": 165,
        "title": "Aceite reparador de Rosa mosqueta y Manzanilla",
        "purpose": "Un preparado clásico ideal para regenerar tejidos dañados. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Rosa mosqueta",
            "la": "Rosa rubiginosa"
          },
          {
            "es": "Manzanilla",
            "la": "Matricaria chamomilla"
          },
          {
            "es": "Cera de abejas pura",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar rosa mosqueta y manzanilla en cera de abejas pura durante 20 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "Aplicá directo sobre la zona que te molesta mediante un suave masaje circular, 2 o 3 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando rosa mosqueta sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color blanco opalescente con una etiqueta de papel envejecido escrita a mano que dice '165'.",
        "imageUrl": "https://picsum.photos/seed/rosa mosqueta165/800/1000"
      },
      {
        "id": 166,
        "title": "Aceite reparador de Tepezcohuite",
        "purpose": "Un preparado clásico ideal para regenerar tejidos dañados. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Tepezcohuite",
            "la": "Mimosa tenuiflora"
          },
          {
            "es": "Aloe vera",
            "la": "Aloe barbadensis"
          },
          {
            "es": "Aceite de coco prensado en frío",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar tepezcohuite y aloe vera en aceite de coco prensado en frío durante 23 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "Aplicá directo sobre la zona que te molesta mediante un suave masaje circular, 2 o 3 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando tepezcohuite sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color blanco opalescente con una etiqueta de papel envejecido escrita a mano que dice '166'.",
        "imageUrl": "https://picsum.photos/seed/tepezcohuite166/800/1000"
      },
      {
        "id": 167,
        "title": "Crema de Tepezcohuite",
        "purpose": "Un preparado clásico ideal para cicatrizar heridas menores. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Tepezcohuite",
            "la": "Mimosa tenuiflora"
          },
          {
            "es": "Rosa mosqueta",
            "la": "Rosa rubiginosa"
          },
          {
            "es": "Manteca de cacao",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Derretí manteca de cacao al baño maría. Agregá los extractos de tepezcohuite y rosa mosqueta. Revolvé constante con espátula de madera hasta que quede todo parejo y dejá enfriar en tarro de cristal.",
        "dosage": "Tomate 1 taza caliente, 2 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando tepezcohuite sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color blanco opalescente con una etiqueta de papel envejecido escrita a mano que dice '167'.",
        "imageUrl": "https://picsum.photos/seed/tepezcohuite167/800/1000"
      },
      {
        "id": 168,
        "title": "Pomada de Bardana",
        "purpose": "Un preparado clásico ideal para regenerar tejidos dañados. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Bardana",
            "la": "Arctium lappa"
          },
          {
            "es": "Caléndula",
            "la": "Calendula officinalis"
          },
          {
            "es": "Cera de abejas pura",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Derretí cera de abejas pura al baño maría. Agregá los extractos de bardana y caléndula. Revolvé constante con espátula de madera hasta que quede todo parejo y dejá enfriar en tarro de cristal.",
        "dosage": "Aplicá directo sobre la zona que te molesta mediante un suave masaje circular, 2 o 3 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando bardana sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color blanco opalescente con una etiqueta de papel envejecido escrita a mano que dice '168'.",
        "imageUrl": "https://picsum.photos/seed/bardana168/800/1000"
      },
      {
        "id": 169,
        "title": "Pomada de Manzanilla",
        "purpose": "Un preparado clásico ideal para regenerar tejidos dañados. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Manzanilla",
            "la": "Matricaria chamomilla"
          },
          {
            "es": "Centella asiática",
            "la": "Centella asiatica"
          },
          {
            "es": "Aceite de jojoba",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Derretí aceite de jojoba al baño maría. Agregá los extractos de manzanilla y centella asiática. Revolvé constante con espátula de madera hasta que quede todo parejo y dejá enfriar en tarro de cristal.",
        "dosage": "Aplicá directo sobre la zona que te molesta mediante un suave masaje circular, 2 o 3 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando manzanilla sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color blanco opalescente con una etiqueta de papel envejecido escrita a mano que dice '169'.",
        "imageUrl": "https://picsum.photos/seed/manzanilla169/800/1000"
      },
      {
        "id": 170,
        "title": "Aceite reparador de Bardana y Aloe vera",
        "purpose": "Un preparado clásico ideal para calmar irritaciones y eccemas. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Bardana",
            "la": "Arctium lappa"
          },
          {
            "es": "Aloe vera",
            "la": "Aloe barbadensis"
          },
          {
            "es": "Aceite de coco prensado en frío",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar bardana y aloe vera en aceite de coco prensado en frío durante 14 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "Aplicá directo sobre la zona que te molesta mediante un suave masaje circular, 2 o 3 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando bardana sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color blanco opalescente con una etiqueta de papel envejecido escrita a mano que dice '170'.",
        "imageUrl": "https://picsum.photos/seed/bardana170/800/1000"
      },
      {
        "id": 171,
        "title": "Pomada de Árbol de té y Lavanda",
        "purpose": "Un preparado clásico ideal para hidratar la piel en profundidad. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Árbol de té",
            "la": "Melaleuca alternifolia"
          },
          {
            "es": "Lavanda",
            "la": "Lavandula angustifolia"
          },
          {
            "es": "Agua de rosas",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Derretí agua de rosas al baño maría. Agregá los extractos de árbol de té y lavanda. Revolvé constante con espátula de madera hasta que quede todo parejo y dejá enfriar en tarro de cristal.",
        "dosage": "Aplicá directo sobre la zona que te molesta mediante un suave masaje circular, 2 o 3 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando árbol de té sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color blanco opalescente con una etiqueta de papel envejecido escrita a mano que dice '171'.",
        "imageUrl": "https://picsum.photos/seed/árbol de té171/800/1000"
      },
      {
        "id": 172,
        "title": "Pomada de Bardana y Avena",
        "purpose": "Un preparado clásico ideal para calmar irritaciones y eccemas. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Bardana",
            "la": "Arctium lappa"
          },
          {
            "es": "Avena",
            "la": "Avena sativa"
          },
          {
            "es": "Aceite de jojoba",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Derretí aceite de jojoba al baño maría. Agregá los extractos de bardana y avena. Revolvé constante con espátula de madera hasta que quede todo parejo y dejá enfriar en tarro de cristal.",
        "dosage": "Aplicá directo sobre la zona que te molesta mediante un suave masaje circular, 2 o 3 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando bardana sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color blanco opalescente con una etiqueta de papel envejecido escrita a mano que dice '172'.",
        "imageUrl": "https://picsum.photos/seed/bardana172/800/1000"
      },
      {
        "id": 173,
        "title": "Cataplasma de Aloe vera y Caléndula",
        "purpose": "Un preparado clásico ideal para calmar irritaciones y eccemas. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Aloe vera",
            "la": "Aloe barbadensis"
          },
          {
            "es": "Caléndula",
            "la": "Calendula officinalis"
          },
          {
            "es": "Aceite de coco prensado en frío",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar aloe vera y caléndula en aceite de coco prensado en frío durante 24 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "Aplicá directo sobre la zona que te molesta mediante un suave masaje circular, 2 o 3 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando aloe vera sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color blanco opalescente con una etiqueta de papel envejecido escrita a mano que dice '173'.",
        "imageUrl": "https://picsum.photos/seed/aloe vera173/800/1000"
      },
      {
        "id": 174,
        "title": "Ungüento de Aloe vera",
        "purpose": "Un preparado clásico ideal para hidratar la piel en profundidad. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Aloe vera",
            "la": "Aloe barbadensis"
          },
          {
            "es": "Avena",
            "la": "Avena sativa"
          },
          {
            "es": "Manteca de cacao",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Derretí manteca de cacao al baño maría. Agregá los extractos de aloe vera y avena. Revolvé constante con espátula de madera hasta que quede todo parejo y dejá enfriar en tarro de cristal.",
        "dosage": "Aplicá directo sobre la zona que te molesta mediante un suave masaje circular, 2 o 3 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando aloe vera sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color blanco opalescente con una etiqueta de papel envejecido escrita a mano que dice '174'.",
        "imageUrl": "https://picsum.photos/seed/aloe vera174/800/1000"
      },
      {
        "id": 175,
        "title": "Loción de Centella asiática",
        "purpose": "Un preparado clásico ideal para hidratar la piel en profundidad. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Centella asiática",
            "la": "Centella asiatica"
          },
          {
            "es": "Bardana",
            "la": "Arctium lappa"
          },
          {
            "es": "Aceite de coco prensado en frío",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar centella asiática y bardana en aceite de coco prensado en frío durante 23 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "Tomate 1 taza caliente, 2 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando centella asiática sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color blanco opalescente con una etiqueta de papel envejecido escrita a mano que dice '175'.",
        "imageUrl": "https://picsum.photos/seed/centella asiática175/800/1000"
      },
      {
        "id": 176,
        "title": "Pomada de Bardana y Rosa mosqueta",
        "purpose": "Un preparado clásico ideal para regenerar tejidos dañados. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Bardana",
            "la": "Arctium lappa"
          },
          {
            "es": "Rosa mosqueta",
            "la": "Rosa rubiginosa"
          },
          {
            "es": "Manteca de cacao",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Derretí manteca de cacao al baño maría. Agregá los extractos de bardana y rosa mosqueta. Revolvé constante con espátula de madera hasta que quede todo parejo y dejá enfriar en tarro de cristal.",
        "dosage": "Aplicá directo sobre la zona que te molesta mediante un suave masaje circular, 2 o 3 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando bardana sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color blanco opalescente con una etiqueta de papel envejecido escrita a mano que dice '176'.",
        "imageUrl": "https://picsum.photos/seed/bardana176/800/1000"
      },
      {
        "id": 177,
        "title": "Pomada de Manzanilla",
        "purpose": "Un preparado clásico ideal para calmar irritaciones y eccemas. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Manzanilla",
            "la": "Matricaria chamomilla"
          },
          {
            "es": "Aloe vera",
            "la": "Aloe barbadensis"
          },
          {
            "es": "Aceite de coco prensado en frío",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Derretí aceite de coco prensado en frío al baño maría. Agregá los extractos de manzanilla y aloe vera. Revolvé constante con espátula de madera hasta que quede todo parejo y dejá enfriar en tarro de cristal.",
        "dosage": "Aplicá directo sobre la zona que te molesta mediante un suave masaje circular, 2 o 3 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando manzanilla sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color blanco opalescente con una etiqueta de papel envejecido escrita a mano que dice '177'.",
        "imageUrl": "https://picsum.photos/seed/manzanilla177/800/1000"
      },
      {
        "id": 178,
        "title": "Aceite reparador de Caléndula y Rosa mosqueta",
        "purpose": "Un preparado clásico ideal para calmar irritaciones y eccemas. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Caléndula",
            "la": "Calendula officinalis"
          },
          {
            "es": "Rosa mosqueta",
            "la": "Rosa rubiginosa"
          },
          {
            "es": "Aceite de jojoba",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar caléndula y rosa mosqueta en aceite de jojoba durante 23 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "Aplicá directo sobre la zona que te molesta mediante un suave masaje circular, 2 o 3 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando caléndula sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color blanco opalescente con una etiqueta de papel envejecido escrita a mano que dice '178'.",
        "imageUrl": "https://picsum.photos/seed/caléndula178/800/1000"
      },
      {
        "id": 179,
        "title": "Cataplasma de Manzanilla",
        "purpose": "Un preparado clásico ideal para hidratar la piel en profundidad. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Manzanilla",
            "la": "Matricaria chamomilla"
          },
          {
            "es": "Aloe vera",
            "la": "Aloe barbadensis"
          },
          {
            "es": "Manteca de cacao",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar manzanilla y aloe vera en manteca de cacao durante 10 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "Aplicá directo sobre la zona que te molesta mediante un suave masaje circular, 2 o 3 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando manzanilla sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color blanco opalescente con una etiqueta de papel envejecido escrita a mano que dice '179'.",
        "imageUrl": "https://picsum.photos/seed/manzanilla179/800/1000"
      },
      {
        "id": 180,
        "title": "Cataplasma de Avena y Rosa mosqueta",
        "purpose": "Un preparado clásico ideal para regenerar tejidos dañados. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Avena",
            "la": "Avena sativa"
          },
          {
            "es": "Rosa mosqueta",
            "la": "Rosa rubiginosa"
          },
          {
            "es": "Aceite de jojoba",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar avena y rosa mosqueta en aceite de jojoba durante 17 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "Aplicá directo sobre la zona que te molesta mediante un suave masaje circular, 2 o 3 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando avena sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color blanco opalescente con una etiqueta de papel envejecido escrita a mano que dice '180'.",
        "imageUrl": "https://picsum.photos/seed/avena180/800/1000"
      }
    ]
  },
  {
    "id": 10,
    "name": "PRIMEROS AUXILIOS NATURALES Y VARIOS",
    "range": [
      181,
      200
    ],
    "shelfImagePrompt": "Primer plano fotorrealista de un estante de madera rústica de boticario. Contiene 20 frascos mixtos de diversas formas y colores oscuros. Etiquetas legibles con números del 181 al 200. Botiquín botánico con morteros y vendas de lino.",
    "recipes": [
      {
        "id": 181,
        "title": "Polvo cicatrizante de Carbón vegetal y Llantén",
        "purpose": "Un preparado clásico ideal para calmar el dolor agudo repentino. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Carbón vegetal",
            "la": "Carbo activatus"
          },
          {
            "es": "Llantén",
            "la": "Plantago major"
          },
          {
            "es": "Cera de abejas",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar carbón vegetal y llantén en cera de abejas durante 19 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "Tomate 1 taza caliente, 2 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando carbón vegetal sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color marrón boticario con una etiqueta de papel envejecido escrita a mano que dice '181'.",
        "imageUrl": "https://picsum.photos/seed/carbón vegetal181/800/1000"
      },
      {
        "id": 182,
        "title": "Emplasto de Sangre de drago",
        "purpose": "Un preparado clásico ideal para aliviar picaduras de insectos. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Sangre de drago",
            "la": "Croton lechleri"
          },
          {
            "es": "Carbón vegetal",
            "la": "Carbo activatus"
          },
          {
            "es": "Agua destilada",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar sangre de drago y carbón vegetal en agua destilada durante 15 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "Aplicá directo sobre la zona que te molesta mediante un suave masaje circular, 2 o 3 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando sangre de drago sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color marrón boticario con una etiqueta de papel envejecido escrita a mano que dice '182'.",
        "imageUrl": "https://picsum.photos/seed/sangre de drago182/800/1000"
      },
      {
        "id": 183,
        "title": "Enjuague de Propóleo y Menta",
        "purpose": "Un preparado clásico ideal para aliviar picaduras de insectos. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Propóleo",
            "la": "Propolis"
          },
          {
            "es": "Menta",
            "la": "Mentha x piperita"
          },
          {
            "es": "Aceite de oliva",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar propóleo y menta en aceite de oliva durante 13 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "Tomate 1 taza caliente, 2 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando propóleo sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color marrón boticario con una etiqueta de papel envejecido escrita a mano que dice '183'.",
        "imageUrl": "https://picsum.photos/seed/propóleo183/800/1000"
      },
      {
        "id": 184,
        "title": "Tintura de emergencia de Sangre de drago y Menta",
        "purpose": "Un preparado clásico ideal para absorber toxinas e impurezas. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Sangre de drago",
            "la": "Croton lechleri"
          },
          {
            "es": "Menta",
            "la": "Mentha x piperita"
          },
          {
            "es": "Glicerina",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar sangre de drago y menta en glicerina durante 7 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "16 gotitas diluidas en un vaso de agua, 3 veces por día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar. Ojo que tiene alcohol, así que nada de dárselo a los chicos y personas con problemas hepáticos graves.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando sangre de drago sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color marrón boticario con una etiqueta de papel envejecido escrita a mano que dice '184'.",
        "imageUrl": "https://picsum.photos/seed/sangre de drago184/800/1000"
      },
      {
        "id": 185,
        "title": "Enjuague de Consuelda y Hamamelis",
        "purpose": "Un preparado clásico ideal para aliviar picaduras de insectos. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Consuelda",
            "la": "Symphytum officinale"
          },
          {
            "es": "Hamamelis",
            "la": "Hamamelis virginiana"
          },
          {
            "es": "Agua destilada",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar consuelda y hamamelis en agua destilada durante 18 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "Tomate 1 taza caliente, 1 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando consuelda sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color marrón boticario con una etiqueta de papel envejecido escrita a mano que dice '185'.",
        "imageUrl": "https://picsum.photos/seed/consuelda185/800/1000"
      },
      {
        "id": 186,
        "title": "Enjuague de Árnica",
        "purpose": "Un preparado clásico ideal para detener hemorragias leves rápidamente. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Árnica",
            "la": "Arnica montana"
          },
          {
            "es": "Consuelda",
            "la": "Symphytum officinale"
          },
          {
            "es": "Aceite de oliva",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar árnica y consuelda en aceite de oliva durante 13 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "Tomate 1 taza caliente, 2 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando árnica sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color marrón boticario con una etiqueta de papel envejecido escrita a mano que dice '186'.",
        "imageUrl": "https://picsum.photos/seed/árnica186/800/1000"
      },
      {
        "id": 187,
        "title": "Tintura de emergencia de Árnica y Hamamelis",
        "purpose": "Un preparado clásico ideal para detener hemorragias leves rápidamente. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Árnica",
            "la": "Arnica montana"
          },
          {
            "es": "Hamamelis",
            "la": "Hamamelis virginiana"
          },
          {
            "es": "Aceite de oliva",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar árnica y hamamelis en aceite de oliva durante 26 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "12 gotitas diluidas en un vaso de agua, 3 veces por día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar. Ojo que tiene alcohol, así que nada de dárselo a los chicos y personas con problemas hepáticos graves.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando árnica sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color marrón boticario con una etiqueta de papel envejecido escrita a mano que dice '187'.",
        "imageUrl": "https://picsum.photos/seed/árnica187/800/1000"
      },
      {
        "id": 188,
        "title": "Cataplasma de Arcilla verde y Consuelda",
        "purpose": "Un preparado clásico ideal para calmar el dolor agudo repentino. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Arcilla verde",
            "la": "Illite"
          },
          {
            "es": "Consuelda",
            "la": "Symphytum officinale"
          },
          {
            "es": "Glicerina",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar arcilla verde y consuelda en glicerina durante 20 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "Aplicá directo sobre la zona que te molesta mediante un suave masaje circular, 2 o 3 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando arcilla verde sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color marrón boticario con una etiqueta de papel envejecido escrita a mano que dice '188'.",
        "imageUrl": "https://picsum.photos/seed/arcilla verde188/800/1000"
      },
      {
        "id": 189,
        "title": "Polvo cicatrizante de Hamamelis y Carbón vegetal",
        "purpose": "Un preparado clásico ideal para aliviar picaduras de insectos. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Hamamelis",
            "la": "Hamamelis virginiana"
          },
          {
            "es": "Carbón vegetal",
            "la": "Carbo activatus"
          },
          {
            "es": "Glicerina",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar hamamelis y carbón vegetal en glicerina durante 14 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "Tomate 1 taza caliente, 1 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando hamamelis sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color marrón boticario con una etiqueta de papel envejecido escrita a mano que dice '189'.",
        "imageUrl": "https://picsum.photos/seed/hamamelis189/800/1000"
      },
      {
        "id": 190,
        "title": "Enjuague de Hamamelis",
        "purpose": "Un preparado clásico ideal para desinfectar heridas superficiales. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Hamamelis",
            "la": "Hamamelis virginiana"
          },
          {
            "es": "Clavo",
            "la": "Syzygium aromaticum"
          },
          {
            "es": "Alcohol de 96°",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar hamamelis y clavo en alcohol de 96° durante 21 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "Tomate 1 taza caliente, 1 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar. Ojo que tiene alcohol, así que nada de dárselo a los chicos y personas con problemas hepáticos graves.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando hamamelis sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color marrón boticario con una etiqueta de papel envejecido escrita a mano que dice '190'.",
        "imageUrl": "https://picsum.photos/seed/hamamelis190/800/1000"
      },
      {
        "id": 191,
        "title": "Bálsamo de rescate de Clavo y Arcilla verde",
        "purpose": "Un preparado clásico ideal para calmar el dolor agudo repentino. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Clavo",
            "la": "Syzygium aromaticum"
          },
          {
            "es": "Arcilla verde",
            "la": "Illite"
          },
          {
            "es": "Glicerina",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Derretí glicerina al baño maría. Agregá los extractos de clavo y arcilla verde. Revolvé constante con espátula de madera hasta que quede todo parejo y dejá enfriar en tarro de cristal.",
        "dosage": "Aplicá directo sobre la zona que te molesta mediante un suave masaje circular, 2 o 3 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando clavo sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color marrón boticario con una etiqueta de papel envejecido escrita a mano que dice '191'.",
        "imageUrl": "https://picsum.photos/seed/clavo191/800/1000"
      },
      {
        "id": 192,
        "title": "Emplasto de Sangre de drago",
        "purpose": "Un preparado clásico ideal para calmar el dolor agudo repentino. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Sangre de drago",
            "la": "Croton lechleri"
          },
          {
            "es": "Árnica",
            "la": "Arnica montana"
          },
          {
            "es": "Agua destilada",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar sangre de drago y árnica en agua destilada durante 23 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "Aplicá directo sobre la zona que te molesta mediante un suave masaje circular, 2 o 3 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando sangre de drago sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color marrón boticario con una etiqueta de papel envejecido escrita a mano que dice '192'.",
        "imageUrl": "https://picsum.photos/seed/sangre de drago192/800/1000"
      },
      {
        "id": 193,
        "title": "Tintura de emergencia de Clavo y Árnica",
        "purpose": "Un preparado clásico ideal para absorber toxinas e impurezas. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Clavo",
            "la": "Syzygium aromaticum"
          },
          {
            "es": "Árnica",
            "la": "Arnica montana"
          },
          {
            "es": "Cera de abejas",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar clavo y árnica en cera de abejas durante 19 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "22 gotitas diluidas en un vaso de agua, 3 veces por día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar. Ojo que tiene alcohol, así que nada de dárselo a los chicos y personas con problemas hepáticos graves.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando clavo sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color marrón boticario con una etiqueta de papel envejecido escrita a mano que dice '193'.",
        "imageUrl": "https://picsum.photos/seed/clavo193/800/1000"
      },
      {
        "id": 194,
        "title": "Enjuague de Sangre de drago",
        "purpose": "Un preparado clásico ideal para calmar el dolor agudo repentino. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Sangre de drago",
            "la": "Croton lechleri"
          },
          {
            "es": "Carbón vegetal",
            "la": "Carbo activatus"
          },
          {
            "es": "Alcohol de 96°",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar sangre de drago y carbón vegetal en alcohol de 96° durante 8 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "Tomate 1 taza caliente, 2 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar. Ojo que tiene alcohol, así que nada de dárselo a los chicos y personas con problemas hepáticos graves.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando sangre de drago sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color marrón boticario con una etiqueta de papel envejecido escrita a mano que dice '194'.",
        "imageUrl": "https://picsum.photos/seed/sangre de drago194/800/1000"
      },
      {
        "id": 195,
        "title": "Tintura de emergencia de Clavo",
        "purpose": "Un preparado clásico ideal para aliviar picaduras de insectos. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Clavo",
            "la": "Syzygium aromaticum"
          },
          {
            "es": "Sangre de drago",
            "la": "Croton lechleri"
          },
          {
            "es": "Glicerina",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar clavo y sangre de drago en glicerina durante 16 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "19 gotitas diluidas en un vaso de agua, 2 veces por día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar. Ojo que tiene alcohol, así que nada de dárselo a los chicos y personas con problemas hepáticos graves.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando clavo sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color marrón boticario con una etiqueta de papel envejecido escrita a mano que dice '195'.",
        "imageUrl": "https://picsum.photos/seed/clavo195/800/1000"
      },
      {
        "id": 196,
        "title": "Tintura de emergencia de Arcilla verde",
        "purpose": "Un preparado clásico ideal para absorber toxinas e impurezas. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Arcilla verde",
            "la": "Illite"
          },
          {
            "es": "Propóleo",
            "la": "Propolis"
          },
          {
            "es": "Agua destilada",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar arcilla verde y propóleo en agua destilada durante 9 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "11 gotitas diluidas en un vaso de agua, 3 veces por día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar. Ojo que tiene alcohol, así que nada de dárselo a los chicos y personas con problemas hepáticos graves.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando arcilla verde sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color marrón boticario con una etiqueta de papel envejecido escrita a mano que dice '196'.",
        "imageUrl": "https://picsum.photos/seed/arcilla verde196/800/1000"
      },
      {
        "id": 197,
        "title": "Polvo cicatrizante de Llantén y Menta",
        "purpose": "Un preparado clásico ideal para desinfectar heridas superficiales. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Llantén",
            "la": "Plantago major"
          },
          {
            "es": "Menta",
            "la": "Mentha x piperita"
          },
          {
            "es": "Aceite de oliva",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar llantén y menta en aceite de oliva durante 11 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "Tomate 1 taza caliente, 1 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando llantén sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color marrón boticario con una etiqueta de papel envejecido escrita a mano que dice '197'.",
        "imageUrl": "https://picsum.photos/seed/llantén197/800/1000"
      },
      {
        "id": 198,
        "title": "Cataplasma de Menta y Carbón vegetal",
        "purpose": "Un preparado clásico ideal para desinfectar heridas superficiales. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Menta",
            "la": "Mentha x piperita"
          },
          {
            "es": "Carbón vegetal",
            "la": "Carbo activatus"
          },
          {
            "es": "Glicerina",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar menta y carbón vegetal en glicerina durante 22 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "Aplicá directo sobre la zona que te molesta mediante un suave masaje circular, 2 o 3 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando menta sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color marrón boticario con una etiqueta de papel envejecido escrita a mano que dice '198'.",
        "imageUrl": "https://picsum.photos/seed/menta198/800/1000"
      },
      {
        "id": 199,
        "title": "Enjuague de Menta y Llantén",
        "purpose": "Un preparado clásico ideal para absorber toxinas e impurezas. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Menta",
            "la": "Mentha x piperita"
          },
          {
            "es": "Llantén",
            "la": "Plantago major"
          },
          {
            "es": "Alcohol de 96°",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar menta y llantén en alcohol de 96° durante 10 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "Tomate 1 taza caliente, 2 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar. Ojo que tiene alcohol, así que nada de dárselo a los chicos y personas con problemas hepáticos graves.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando menta sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color marrón boticario con una etiqueta de papel envejecido escrita a mano que dice '199'.",
        "imageUrl": "https://picsum.photos/seed/menta199/800/1000"
      },
      {
        "id": 200,
        "title": "Cataplasma de Árnica",
        "purpose": "Un preparado clásico ideal para aliviar picaduras de insectos. Si lo tomás con constancia, ayuda a recuperar el equilibrio natural del cuerpo.",
        "ingredients": [
          {
            "es": "Árnica",
            "la": "Arnica montana"
          },
          {
            "es": "Consuelda",
            "la": "Symphytum officinale"
          },
          {
            "es": "Aceite de oliva",
            "la": "Base excipiente"
          }
        ],
        "instructions": "Dejá macerar árnica y consuelda en aceite de oliva durante 14 días en un lugar oscuro y fresco. Agitalo todos los días. Filtralo bien con un paño de lino y guardalo en un frasco de vidrio oscuro.",
        "dosage": "Aplicá directo sobre la zona que te molesta mediante un suave masaje circular, 2 o 3 veces al día.",
        "notes": "Guardalo en un lugar fresco, seco y que no le dé el sol directo. Si estás embarazada o dando la teta, consultá a un herbolario antes de tomar.",
        "imagePrompt": "Una fotografía de estilo editorial de cocina, con iluminación suave, mostrando árnica sobre una mesa de madera rústica, junto a un frasco de vidrio antiguo color marrón boticario con una etiqueta de papel envejecido escrita a mano que dice '200'.",
        "imageUrl": "https://picsum.photos/seed/árnica200/800/1000"
      }
    ]
  }
];
