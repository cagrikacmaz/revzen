// Captures the product section graphics at 08:00, 12:00, 17:00 and in colour-only mode.
// Usage: node tools/sunstates.mjs [lang] [width]
import { chromium } from 'playwright';
import fs from 'node:fs';

const [lang = 'en', width = '1280'] = process.argv.slice(2);
const BASE = process.env.BASE_URL ?? 'http://localhost:4321/revzen/';
fs.mkdirSync('artifacts', { recursive: true });
const browser = await chromium.launch({ channel: 'chrome' });
const page = await browser.newPage({ viewport: { width: Number(width), height: 900 }, reducedMotion: 'reduce' });
await page.goto(`${BASE}${lang}/#product`, { waitUntil: 'networkidle' });
const mounts = page.locator('.sunclock--full .mounts');
const shots = [];
for (const m of ['480', '720', '1020']) {
  await page.click(`.sunclock--full [data-sc-jump="${m}"]`);
  await page.waitForTimeout(150);
  shots.push(await mounts.screenshot());
}
await page.check('.sunclock--full input[value=colour]', { force: true });
await page.click('.sunclock--full [data-sc-jump="480"]');
await page.waitForTimeout(150);
shots.push(await mounts.screenshot());

const sheet = await browser.newPage({ viewport: { width: 1400, height: 600 } });
const imgs = shots.map((b) => `<img style="width:100%;display:block" src="data:image/png;base64,${b.toString('base64')}">`);
await sheet.setContent(`<body style="margin:0;background:#000;display:grid;gap:8px">${imgs.join('')}</body>`);
await sheet.screenshot({ path: `artifacts/mounts-${lang}-${width}.png`, fullPage: true });
await browser.close();
console.log(`artifacts/mounts-${lang}-${width}.png`);
