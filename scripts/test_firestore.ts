import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
import fs from 'fs';

const configStr = fs.readFileSync('firebase-applet-config.json', 'utf8');
const config = JSON.parse(configStr);

const app = initializeApp(config);
const db = getFirestore(app, config.firestoreDatabaseId);

async function test() {
  try {
    const snap = await getDocs(collection(db, "community_messages"));
    console.log("Read success, docs:", snap.size);
  } catch(e) {
    console.log("Read error:", e.message);
  }

  try {
    await addDoc(collection(db, "community_messages"), { test: 1 });
    console.log("Write community_messages success");
  } catch(e) {
    console.log("Write community_messages error:", e.message);
  }
}
test();
