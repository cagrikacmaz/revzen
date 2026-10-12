// Viewport-sized slices of a page for visual review.
// Usage: node tools/slices.mjs <lang> <width> [sliceHeight]
import { chromium } from 'playwright';
import fs from 'node:fs';

const [lang = 'tr', width = '360', sliceH = '1400'] = process.argv.slice(2);
const BASE = process.env.BASE_URL ?? 'http://localhost:4321/revzen/';
fs.mkdirSync('artifacts/slices', { recursive: true });
const browser = await chromium.launch({ channel: 'chrome' });
const page = await browser.newPage({ viewport: { width: Number(width), height: Number(sliceH) }, reducedMotion: 'reduce' });
await page.goto(`${BASE}${lang}/`, { waitUntil: 'networkidle' });
const total = await page.evaluate(() => document.documentElement.scrollHeight);
let i = 0;
for (let y = 0; y < total; y += Number(sliceH)) {
  await page.evaluate((yy) => window.scrollTo(0, yy), y);
  await page.waitForTimeout(150);
  await page.screenshot({ path: `artifacts/slices/${lang}-${width}-${String(i++).padStart(2, '0')}.png` });
}
console.log(`height ${total}, ${i} slices`);
await browser.close();
