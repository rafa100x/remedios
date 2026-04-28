import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import fs from 'fs';

const configStr = fs.readFileSync('firebase-applet-config.json', 'utf8');
const config = JSON.parse(configStr);

const app = initializeApp(config);
const db = getFirestore(app, config.firestoreDatabaseId);

async function seed() {
  const users = [
    { userName: "Luna M.", uid: "mock-uid-1" },
    { userName: "Carlos S.", uid: "mock-uid-2" },
    { userName: "María Paz", uid: "mock-uid-3" },
    { userName: "Javier C.", uid: "mock-uid-4" },
    { userName: "Ana G.", uid: "mock-uid-5" },
    { userName: "Diego R.", uid: "mock-uid-6" }
  ];

  const messages = [
    { userIndex: 0, text: "Hola a todos, ¿alguien probó la receta de valeriana y manzanilla para dormir? Llevo días con insomnio y quería saber si hace efecto rápido." },
    { userIndex: 1, text: "Yo, me funciona muy bien. Media hora antes de acostarme es la clave, pero le agrego un poquito de miel." },
    { userIndex: 2, text: "A mí me recomendaron lavanda, es excelente. Si puedes, pon unas ramitas debajo de tu almohada o usa aceite esencial." },
    { userIndex: 3, text: "La infusión de pasiflora también es un santo remedio. Tienen que probarla si aún no lo hicieron, a mí me deja totalmente relajado." },
    { userIndex: 0, text: "¡Gracias por los consejos! Voy a preparar la de pasiflora esta noche a ver qué tal." },
    { userIndex: 4, text: "Hablando de plantas relajantes, el toronjil (melisa) me ayuda muchísimo con la ansiedad del día a día." },
    { userIndex: 5, text: "Totalmente de acuerdo, Ana. Mi abuela siempre me la preparaba cuando tenía exámenes y mágicamente se me iban los nervios." },
    { userIndex: 1, text: "¡Qué hermosa comunidad! Me encanta poder compartir estos saberes ancestrales con ustedes." }
  ];

  for (let i = 0; i < messages.length; i++) {
    const m = messages[i];
    const u = users[m.userIndex];
    // stagger timestamps, e.g. starting from a few hours ago
    const pastTime = new Date(Date.now() - (messages.length - i) * 15 * 60000); // 15 mins apart
    await addDoc(collection(db, "community_messages"), {
      uid: u.uid,
      userName: u.userName,
      text: m.text,
      createdAt: pastTime
    });
    console.log(`Added message from ${u.userName}`);
  }
}
seed().then(() => {
    console.log("Done seeding");
    process.exit(0);
}).catch(console.error);
