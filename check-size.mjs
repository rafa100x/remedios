import fs from 'fs';

const dir = './public/frascos';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jpg'));
let totalSize = 0;

files.forEach(file => {
  const stats = fs.statSync(`${dir}/${file}`);
  totalSize += stats.size;
});

console.log(`Total files: ${files.length}`);
console.log(`Total size: ${(totalSize / 1024 / 1024).toFixed(2)} MB`);
console.log(`Average size: ${(totalSize / files.length / 1024).toFixed(2)} KB`);
