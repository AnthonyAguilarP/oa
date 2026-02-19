import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imageDir = path.join(process.cwd(), 'src', 'img');

// Create directory if it doesn't exist
if (!fs.existsSync(imageDir)) {
  fs.mkdirSync(imageDir, { recursive: true });
}

const descriptions = [
  'Professional framing construction work with wooden structures',
  'Custom deck construction with quality materials and finishing',
  'Modern siding installation on residential home',
  'Professional window installation with modern design',
  'Interior drywall and tape work with smooth finish',
  'Quality roofing installation with protective materials',
  'Commercial framing project with steel beams',
  'Covered deck and pergola structure',
  'Exterior siding renovation project',
  'Professional window replacement service',
  'Interior wall construction and framing',
  'Roof repair and replacement work',
  'Commercial construction project',
  'Residential remodeling work',
  'Interior finishing and painting'
];

// Generate 15 construction-themed images
async function generateImages() {
  console.log('[v0] Starting image generation...');
  
  for (let i = 1; i <= 15; i++) {
    const width = 500;
    const height = 400;
    const color = getConstructionColor(i);
    
    // Create a simple colored rectangle as placeholder
    const svg = `
      <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${width}" height="${height}" fill="${color}"/>
        <text x="${width / 2}" y="${height / 2 - 30}" font-size="32" font-weight="bold" text-anchor="middle" fill="white" font-family="Arial">
          Construction
        </text>
        <text x="${width / 2}" y="${height / 2 + 20}" font-size="20" text-anchor="middle" fill="white" font-family="Arial">
          ${descriptions[i - 1]}
        </text>
        <text x="${width / 2}" y="${height - 30}" font-size="16" text-anchor="middle" fill="rgba(255,255,255,0.7)" font-family="Arial">
          Image ${i}
        </text>
      </svg>
    `;
    
    const outputPath = path.join(imageDir, `${i}.jpeg`);
    
    try {
      await sharp(Buffer.from(svg))
        .jpeg({ quality: 80 })
        .toFile(outputPath);
      console.log(`[v0] Generated image ${i}.jpeg`);
    } catch (error) {
      console.error(`[v0] Error generating image ${i}:`, error.message);
    }
  }
  
  // Generate logo
  const logoSvg = `
    <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" fill="#1a5c3a"/>
      <circle cx="100" cy="100" r="90" fill="#d4a574"/>
      <text x="100" y="85" font-size="36" font-weight="bold" text-anchor="middle" fill="white" font-family="Arial">OA</text>
      <text x="100" y="125" font-size="14" font-weight="bold" text-anchor="middle" fill="white" font-family="Arial">BUILD-OUT</text>
    </svg>
  `;
  
  const logoPath = path.join(imageDir, 'logo.jpg');
  
  try {
    await sharp(Buffer.from(logoSvg))
      .jpeg({ quality: 90 })
      .toFile(logoPath);
    console.log('[v0] Generated logo.jpg');
  } catch (error) {
    console.error('[v0] Error generating logo:', error.message);
  }
  
  console.log('[v0] Image generation complete!');
}

function getConstructionColor(index) {
  const colors = [
    '#C35817', // rust/orange
    '#8B4513', // saddle brown
    '#D2B48C', // tan
    '#696969', // dark gray
    '#808080', // gray
    '#A9A9A9', // dark gray
    '#4F7942', // dark green
    '#8B7355', // burlywood
    '#6B5D4F', // dark tan
    '#564e48', // dark brown
    '#7C6F5F', // warm gray
    '#9B8B7E', // light brown
    '#6B5B47', // dark taupe
    '#8B8680', // dark gray
    '#5D4E37'  // dark brown
  ];
  
  return colors[index - 1] || colors[0];
}

generateImages().catch(console.error);
