// Full-page screenshots and overflow check at the target widths.
// Usage: npm run preview (port 4321) in another shell, then: node tools/screenshots.mjs
import { chromium } from 'playwright';
import fs from 'node:fs';

const BASE = process.env.BASE_URL ?? 'http://localhost:4321/revzen/';
const widths = [360, 768, 1440];
const langs = ['tr', 'en'];
fs.mkdirSync('artifacts', { recursive: true });

const browser = await chromium.launch({ channel: 'chrome' });
let failed = false;
for (const lang of langs) {
  for (const width of widths) {
    const page = await browser.newPage({ viewport: { width, height: 900 }, reducedMotion: 'reduce' });
    await page.goto(`${BASE}${lang}/`, { waitUntil: 'networkidle' });
    const overflow = await page.evaluate(() => {
      const docW = document.documentElement.clientWidth;
      const offenders = [];
      for (const el of document.querySelectorAll('body *')) {
        const r = el.getBoundingClientRect();
        if (r.width && (r.right > docW + 0.5 || r.left < -0.5)) {
          if (el.closest('.visually-hidden, .skip-link')) continue;
          offenders.push(`${el.tagName.toLowerCase()}.${[...el.classList].join('.')} right=${Math.round(r.right)}`);
        }
      }
      return { scrollW: document.documentElement.scrollWidth, docW, offenders: offenders.slice(0, 10) };
    });
    const ok = overflow.scrollW <= overflow.docW && overflow.offenders.length === 0;
    if (!ok) failed = true;
    console.log(`${lang} ${width}px: scrollWidth=${overflow.scrollW} clientWidth=${overflow.docW} ${ok ? 'OK' : 'OVERFLOW'}`);
    for (const o of overflow.offenders) console.log(`   ${o}`);
    await page.screenshot({ path: `artifacts/${lang}-${width}.png`, fullPage: true });
    await page.close();
  }
}
await browser.close();
process.exit(failed ? 1 : 0);
