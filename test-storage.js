import https from 'https';
https.get('https://firebasestorage.googleapis.com/v0/b/remedios-ancestrasel.firebasestorage.app/o/frascos%2Fbotica-frasco-001.png?alt=media', (res) => {
  console.log('Status:', res.statusCode);
  if (res.statusCode >= 300 && res.statusCode < 400) {
      console.log('Redirect:', res.headers.location);
  }
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => console.log('Response body:', data));
}).on('error', e => console.error(e));
