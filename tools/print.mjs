// Prints a language page to PDF with the browser print pipeline, for checking pagination.
// Usage: node tools/print.mjs [lang]
import { chromium } from 'playwright';

const lang = process.argv[2] ?? 'tr';
const BASE = process.env.BASE_URL ?? 'http://localhost:4321/revzen/';
const browser = await chromium.launch({ channel: 'chrome' });
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
await page.goto(`${BASE}${lang}/`, { waitUntil: 'networkidle' });
await page.waitForTimeout(300);
await page.pdf({ path: `artifacts/print-${lang}.pdf`, preferCSSPageSize: true, printBackground: true });
await browser.close();
console.log(`artifacts/print-${lang}.pdf`);
