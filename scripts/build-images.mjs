import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const OUT = 'public/assets';
mkdirSync(OUT, { recursive: true });

const shareCard = Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="glow" cx="78%" cy="45%" r="52%">
      <stop offset="0" stop-color="#e5132b" stop-opacity=".42"/>
      <stop offset="1" stop-color="#e5132b" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="line" x1="0" x2="1">
      <stop offset="0" stop-color="#ff3d5a" stop-opacity="0"/>
      <stop offset=".5" stop-color="#ff3d5a" stop-opacity=".8"/>
      <stop offset="1" stop-color="#ff3d5a" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="#07070a"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <circle cx="934" cy="315" r="220" fill="none" stroke="#ff3d5a" stroke-opacity=".22"/>
  <circle cx="934" cy="315" r="166" fill="none" stroke="#f4f1ec" stroke-opacity=".1"/>
  <text x="72" y="286" font-family="Impact, Arial Narrow, sans-serif" font-size="136" fill="#f4f1ec" letter-spacing="4">UDAY KUMAR</text>
  <text x="78" y="350" font-family="Arial, sans-serif" font-weight="700" font-size="27" fill="#ff3d5a" letter-spacing="5">ECE · RF &amp; MICROWAVE · IEEE</text>
  <text x="78" y="418" font-family="Arial, sans-serif" font-weight="500" font-size="20" fill="#a7a6ad" letter-spacing="2">RESEARCH · EMBEDDED SYSTEMS · AUTONOMOUS ROBOTICS</text>
  <path d="M78 474H720" stroke="url(#line)" stroke-width="2"/>
  <text x="78" y="520" font-family="Arial, sans-serif" font-size="16" fill="#6d6c75" letter-spacing="4">THE SERIES</text>
</svg>`);

await sharp(shareCard).jpeg({ quality: 88 }).toFile(`${OUT}/og-image.jpg`);
console.log('Social share image built');
