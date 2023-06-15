import Jimp from "jimp";
import { type } from "os";
import { join } from "path";

const gray: string = " .:-=+*#%@";

const filePath: string = join(__dirname, "assets", "itachi.png");

console.log(filePath);

Jimp.read(filePath)
  .then((img: Jimp) => {
    return img.scale(0.12);
  })
  .then((img: Jimp) => {
    return img.contrast(0);
  })
  .then((img: Jimp) => {
    console.log(img.getHeight(), img.getWidth());
    for (let j = 0; j < img.getHeight(); j++) {
      let row: string = "";
      for (let i = 0; i < img.getWidth(); i++) {
        const color = Jimp.intToRGBA(img.getPixelColor(i, j));
        const brightness: number = (color.r + color.g + color.b) / 3;
        const index: number = Math.ceil((brightness * (gray.length - 1)) / 255);
        row += gray[index];
        row += gray[index];
      }
      console.log(row);
    }
  })
  .catch(console.error);
