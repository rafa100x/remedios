import fs from 'fs';
import sharp from 'sharp';

async function checkBackgrounds() {
  const dir = './public/frascos';
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.jpg'));
  const whiteBgFiles = [];

  for (const file of files) {
    try {
      const { data, info } = await sharp(`${dir}/${file}`)
        .extract({ left: 5, top: 5, width: 5, height: 5 })
        .raw()
        .toBuffer({ resolveWithObject: true });
      
      let r = 0, g = 0, b = 0;
      for (let i = 0; i < data.length; i += info.channels) {
        r += data[i];
        g += data[i+1];
        b += data[i+2];
      }
      const numPixels = data.length / info.channels;
      r /= numPixels;
      g /= numPixels;
      b /= numPixels;

      if (r > 200 && g > 200 && b > 200) {
        whiteBgFiles.push(file);
      }
    } catch (e) {
       console.error(`Error processing ${file}: ${e.message}`);
    }
  }

  console.log("ARCHIVOS_BLANCOS_INICIO");
  console.log(whiteBgFiles.join('\n'));
  console.log("ARCHIVOS_BLANCOS_FIN");
}

checkBackgrounds();
