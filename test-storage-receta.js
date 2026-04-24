import https from 'https';
https.get('https://firebasestorage.googleapis.com/v0/b/remedios-ancestrasel.firebasestorage.app/o/recetas%2Fbotica-receta-001.jpg?alt=media', (res) => {
  console.log('Status receta 001:', res.statusCode);
}).on('error', e => console.error(e));
