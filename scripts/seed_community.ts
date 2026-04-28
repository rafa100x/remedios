import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp, getDocs, deleteDoc } from 'firebase/firestore';
import fs from 'fs';

const configStr = fs.readFileSync('firebase-applet-config.json', 'utf8');
const config = JSON.parse(configStr);

const app = initializeApp(config);
const db = getFirestore(app, config.firestoreDatabaseId);

async function seed() {
  const users = [
    { userName: "Silvia", uid: "mock-uid-1" },
    { userName: "jose", uid: "mock-uid-2" },
    { userName: "Caro", uid: "mock-uid-3" },
    { userName: "Marcos", uid: "mock-uid-4" },
    { userName: "Beatriz", uid: "mock-uid-5" },
    { userName: "Ramiro", uid: "mock-uid-6" },
    { userName: "paola", uid: "mock-uid-7"}
  ];

  const messages = [
    { userIndex: 0, text: "Holaa a todos!!! Queria saber si alguien tiene idea que puedo tomar para el dolor de estomago fte. Comi algo q me cayo re mal ayer" },
    { userIndex: 1, text: "hacete un te de manzanilla con un poquito de limon" },
    { userIndex: 2, text: "Silvia, yo cuando estoy así me preparo la infusión de hinojo que está en el libro. Te calma los retorcijones casi al instante. Ojalá te sirva! 🙏" },
    { userIndex: 3, text: "buenas tardes, queria consultar si el jarabe de cebolla y miel se le puede dar a un nene de 5 años?? tose mucho a la noche" },
    { userIndex: 4, text: "Marcos, sí, perfectamente. Mis nietos lo toman desde los 3 años. Dáselo puro o mezclado con apenitas de agua calentita." },
    { userIndex: 0, text: "Gracias chicos, me hice el de manzanilla recien y ya me siento un poco mejor. despues pruebo el hinojo" },
    { userIndex: 5, text: "Alguien probó el ungüento de caléndula para las quemaduras de sol? Me re pasé de rosca el finde y ardo jaja" },
    { userIndex: 6, text: "Sisisis re ayuda !! ponetelo frio de la heladera si podes" },
    { userIndex: 1, text: "aloe vera directo de la planta tambien sirve" }
  ];

  for (let i = 0; i < messages.length; i++) {
    const m = messages[i];
    const u = users[m.userIndex];
    // stagger timestamps, e.g. starting from a few hours ago
    const pastTime = new Date(Date.now() - (messages.length - i) * 22 * 60000); // spread out
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
