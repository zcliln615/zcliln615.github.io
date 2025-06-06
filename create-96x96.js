import sharp from 'sharp';
import fs from 'fs';

// 读取SVG文件
const svgBuffer = fs.readFileSync('./public/favicon.svg');

// 创建96x96的PNG
async function create96x96() {
  try {
    const size96 = await sharp(svgBuffer)
      .resize(96, 96)
      .png()
      .toBuffer();
      
    fs.writeFileSync('./public/favicon-96x96.png', size96);
    console.log('96x96 PNG favicon created successfully!');
    
  } catch (error) {
    console.error('Error creating 96x96 favicon:', error);
  }
}

create96x96();
