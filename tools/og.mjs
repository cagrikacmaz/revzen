// Renders the generic Open Graph image (no figures) into public/og.png.
import { chromium } from 'playwright';
import fs from 'node:fs';

const font = fs
  .readFileSync('node_modules/@fontsource-variable/manrope/files/manrope-latin-ext-wght-normal.woff2')
  .toString('base64');
const fontLatin = fs
  .readFileSync('node_modules/@fontsource-variable/manrope/files/manrope-latin-wght-normal.woff2')
  .toString('base64');

const html = `<!doctype html><html><head><style>
@font-face{font-family:M;src:url(data:font/woff2;base64,${fontLatin}) format('woff2');font-weight:200 800;unicode-range:U+0000-00FF}
@font-face{font-family:M;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:200 800}
html,body{margin:0;width:1200px;height:630px;background:#0B1220;font-family:M,sans-serif;color:#EEF2F8;overflow:hidden}
.strip{position:absolute;left:0;top:0;bottom:0;width:10px;background:#FFB65C}
.wm{position:absolute;left:110px;top:220px;font-weight:300;font-size:92px;letter-spacing:.42em}
.line{position:absolute;left:114px;top:360px;font-size:30px;color:#A9B7CC;letter-spacing:.04em}
.line b{color:#FFB65C;font-weight:600}
svg{position:absolute;right:-40px;top:-40px;opacity:.12}
</style></head><body><div class="strip"></div>
<svg width="560" height="720" viewBox="0 0 264 352"><defs><pattern id="p" width="88" height="88" patternUnits="userSpaceOnUse"><g fill="none" stroke="#FFB65C" stroke-width="1.2"><rect x="22" y="22" width="44" height="44"/><path d="M44 12.9 L75.1 44 L44 75.1 L12.9 44 Z"/><path d="M44 0 V12.9 M44 75.1 V88 M0 44 H12.9 M75.1 44 H88"/><path d="M22 22 L0 0 M66 22 L88 0 M66 66 L88 88 M22 66 L0 88"/><circle cx="44" cy="44" r="7"/></g></pattern></defs><rect width="264" height="352" fill="url(#p)"/></svg>
<div class="wm">REVZEN</div>
<div class="line">Daylight that moves <b>/</b> Hareketli gün ışığı</div>
</body></html>`;

const browser = await chromium.launch({ channel: 'chrome' });
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(html);
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: 'public/og.png' });
await browser.close();
console.log('public/og.png written');
