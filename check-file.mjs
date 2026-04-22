import fs from 'fs';
const buf = fs.readFileSync('./public/frascos/botica-frasco-001.jpg');
console.log(buf.slice(0, 10).toString('hex'));
