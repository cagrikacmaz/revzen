// Checks that every figure from the brief appears verbatim in the built pages,
// and that retired wording is gone.
// Usage: npm run build && node tools/figures.mjs
import fs from 'node:fs';

const M = '−';
const expected = {
  en: [
    '$90,000 investment plan', '$90K', '100 days', '1,000 / 10,000',
    '$33,000', '$11,000', '$10,000', '$8,000', '$6,000', '$5,000', '$90,000',
    'Reserve and contingency', '60-70 units', '$480/unit',
    // profitability cards and income table
    '$185,000', '$138,750', '17.3%', '$2,150,000', '$1,612,500', '21.5%',
    '$1,070,000', `${M}$480,000`, `${M}$170,000`, `${M}$70,000`, `${M}$165,000`, `${M}$885,000`,
    `${M}$46,250`, '$138.75',
    '$10,000,000', `${M}$4,200,000`, `${M}$1,600,000`, `${M}$800,000`, `${M}$1,250,000`, `${M}$7,850,000`,
    `${M}$537,500`, '$161.25',
    '$1,070 in the 1,000-unit scenario (B2B $1,150, direct $950, a 60% / 40% mix); $1,000 in the 10,000-unit scenario',
    '$40K', '$120K', '$42K', '$500K', '$24K', '$20K', '$170K', '$15K', '$110K', '$230K', '$165K', '$1.25M',
    'about $4.2M',
    // calculator presets
    `${M}$71,500`, `${M}$190,000`, '$340,000', '$3,570,000', 'Profitable after 472 units',
    // plan, terms, makers
    'Days 0-30', 'Days 31-60', 'Days 61-100', '3 samples / 2 manufacturers', '2-4 demo installs',
    '15%', '$600K', '$510K', '20%', '$450K', '$360K', '25%', '$270K', 'TRY 230,000 to 530,000',
    '60%', '40%', '60x60 cm 80W', '5-year warranty', '14 years',
    'https://wa.me/905422176687',
  ],
  tr: [
    '90.000 USD yatırım planı', '90.000 USD', '100 gün', '1.000 / 10.000',
    '33.000 USD', '11.000 USD', '10.000 USD', '8.000 USD', '6.000 USD', '5.000 USD',
    'Rezerv / beklenmeyen giderler', '60-70 adet', '480 USD/adet',
    '185.000 USD', '138.750 USD', '%17,3', '2.150.000 USD', '1.612.500 USD', '%21,5',
    '1.070.000 USD', `${M}480.000 USD`, `${M}170.000 USD`, `${M}70.000 USD`, `${M}165.000 USD`, `${M}885.000 USD`,
    `${M}46.250 USD`, '138,75 USD',
    '10.000.000 USD', `${M}4.200.000 USD`, `${M}1.600.000 USD`, `${M}800.000 USD`, `${M}1.250.000 USD`, `${M}7.850.000 USD`,
    `${M}537.500 USD`, '161,25 USD',
    '1.000 adet senaryosunda 1.070 USD (B2B 1.150 USD, direkt 950 USD, %60 / %40 karışım); 10.000 adet senaryosunda 1.000 USD',
    '40 bin USD', '120 bin USD', '42 bin USD', '500 bin USD', '24 bin USD', '20 bin USD', '170 bin USD', '15 bin USD',
    '110 bin USD', '230 bin USD', '165 bin USD', '1,25 milyon USD',
    'yaklaşık 4,2 milyon USD',
    `${M}71.500 USD`, `${M}190.000 USD`, '340.000 USD', '3.570.000 USD', '472 adet satıştan sonra kâra geçilir',
    'Gün 0-30', 'Gün 31-60', 'Gün 61-100', '3 numune / 2 üretici', '2-4 demo kurulum',
    '%15', '600.000 USD', '510.000 USD', '%20', '450.000 USD', '360.000 USD', '%25', '270.000 USD',
    '230.000 - 530.000 TL', '%60', '%40', '90.000 USD şirkete girer.',
    'https://wa.me/905422176687',
  ],
};

const retired = [
  /doğrulanmadı/i, /ispatlanmalı/i, /katkı/i, /farsça/i, /persian/i, /contribution/i,
  /capital reality/i, /sermaye gerçeği/i, /claim limits/i, /iddia sınır/i,
  /\.pdf/i, /Download deck/i, /Sunumu indir/i, /CoeLux/i, /Innerscene/i, /—/,
];

const decode = (s) =>
  s
    .replace(/<script[\s\S]*?<\/script>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ');

let problems = 0;
for (const [lang, list] of Object.entries(expected)) {
  const raw = fs.readFileSync(`dist/${lang}/index.html`, 'utf8');
  const text = decode(raw);
  for (const f of list) {
    if (!text.includes(f) && !raw.includes(f)) {
      problems++;
      console.log(`${lang}: MISSING ${f}`);
    }
  }
  for (const r of retired) {
    if (r.test(raw)) {
      problems++;
      console.log(`${lang}: RETIRED WORDING FOUND ${r}`);
    }
  }
  console.log(`${lang}: checked ${list.length} figures and ${retired.length} retired patterns`);
}
process.exit(problems ? 1 : 0);
