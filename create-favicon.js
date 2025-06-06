import sharp from 'sharp';
import fs from 'fs';

// 读取SVG文件
const svgBuffer = fs.readFileSync('./public/favicon.svg');

// 转换为多个尺寸的PNG，然后合并为ICO
async function createIco() {
  try {
    // 创建不同尺寸的PNG
    const size16 = await sharp(svgBuffer)
      .resize(16, 16)
      .png()
      .toBuffer();
    
    const size32 = await sharp(svgBuffer)
      .resize(32, 32)
      .png()
      .toBuffer();
      
    const size48 = await sharp(svgBuffer)
      .resize(48, 48)
      .png()
      .toBuffer();

    // 将32x32的PNG保存为临时文件，然后复制为favicon.ico
    fs.writeFileSync('./public/favicon-32.png', size32);
    
    // 由于sharp不直接支持ICO格式，我们先创建一个PNG版本
    // 用户可以手动使用在线工具转换，或者我们直接替换现有的ico
    console.log('PNG versions created successfully!');
    console.log('32x32 PNG saved as favicon-32.png');
    
    // 直接将32x32的PNG复制为新的favicon文件
    fs.writeFileSync('./public/favicon-new.ico', size32);
    
  } catch (error) {
    console.error('Error creating favicon:', error);
  }
}

createIco();
