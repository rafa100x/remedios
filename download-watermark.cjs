const https = require('https');
https.get('https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Hippocrates_Rubens.jpg/400px-Hippocrates_Rubens.jpg', { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
  const chunks = [];
  res.on('data', c => chunks.push(c));
  res.on('end', () => {
    const buf = Buffer.concat(chunks);
    const base64 = buf.toString('base64');
    const fs = require('fs');
    fs.writeFileSync('src/utils/watermarkBase64.ts', 'export const watermarkBase64 = "data:image/jpeg;base64,' + base64 + '";\n');
    console.log('done');
  });
});
