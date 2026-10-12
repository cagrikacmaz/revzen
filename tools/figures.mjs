// Checks that every figure from the deck brief appears verbatim in the built pages.
// Usage: npm run build && node tools/figures.mjs
import fs from 'node:fs';

const M = '−';
const expected = {
  en: [
    '$90,000 investment plan', '$90K', '1,000 / 10,000',
    '$33,000', '$11,000', '$10,000', '$8,000', '$6,000', '$5,000', '$90,000',
    '60-70 units', '$480/unit',
    '$1,070,000', '$350,000', '$185,000', '$1,150', '$950', '$1,070', '$490', '$140', '$350',
    `${M}$480`, `${M}$170`, `${M}$70`, '1,000 × $350 = $350,000', `${M}$165,000 annual fixed overhead`, '= $185,000',
    '$10,000,000', '$3,400,000', '$2,150,000', '$1,000', '$420', `${M}$160`, `${M}$80`, '$340',
    '10,000 × $340 = $3.40M', `${M}$1.25M`, '= $2.15M', '$4.2M',
    `${M}$71,500`, `${M}$190,000`, '$3,570,000', '$340,000', 'Price −15%; product cost +20%', 'Price +10%; product cost −10%',
    '$1.07M', '$10.0M', `${M}$480K`, `${M}$4.20M`, `${M}$170K`, `${M}$1.60M`, `${M}$70K`, `${M}$800K`, '$350K', '$3.40M', '$185K', '$2.15M',
    '$40K', '$120K', '$42K', '$500K', '$24K', '$20K', '$170K', '$15K', '$110K', '$230K', '$165K', '$1.25M',
    'Days 0-30', 'Days 31-60', 'Days 61-100', '3 samples / 2 manufacturers', '2-4 demo installs',
    '15%', '$600K', '$510K', '20%', '$450K', '$360K', '25%', '$270K',
    '60%', '40%', 'TRY 230,000 to 530,000', '30°', '60x60 cm 80W', '5-year warranty', '14 years',
    'https://wa.me/905422176687',
  ],
  tr: [
    '90.000 USD yatırım planı', '90.000 USD', '1.000 / 10.000',
    '33.000 USD', '11.000 USD', '10.000 USD', '8.000 USD', '6.000 USD', '5.000 USD',
    '60-70 adet', '480 USD/adet',
    '1.070.000 USD', '350.000 USD', '185.000 USD', '1.150 USD', '950 USD', '1.070 USD', '490 USD', '140 USD', '350 USD',
    `${M}480 USD`, `${M}170 USD`, `${M}70 USD`, '1.000 × 350 USD = 350.000 USD', `${M}165.000 USD yıllık sabit gider`, '= 185.000 USD',
    '10.000.000 USD', '3.400.000 USD', '2.150.000 USD', '1.000 USD', '420 USD', `${M}160 USD`, `${M}80 USD`, '340 USD',
    '10.000 × 340 USD = 3,40 milyon USD', `${M}1,25 milyon USD`, '= 2,15 milyon USD', '4,2 milyon USD',
    `${M}71.500 USD`, `${M}190.000 USD`, '3.570.000 USD', '340.000 USD', 'Fiyat −%15; ürün maliyeti +%20', 'Fiyat +%10; ürün maliyeti −%10',
    '1,07 milyon USD', '10,0 milyon USD', `${M}480 bin USD`, `${M}4,20 milyon USD`, `${M}170 bin USD`, `${M}1,60 milyon USD`,
    `${M}70 bin USD`, `${M}800 bin USD`, '350 bin USD', '3,40 milyon USD', '185 bin USD', '2,15 milyon USD',
    '40 bin USD', '120 bin USD', '42 bin USD', '500 bin USD', '24 bin USD', '20 bin USD', '170 bin USD', '15 bin USD',
    '110 bin USD', '230 bin USD', '165 bin USD', '1,25 milyon USD',
    'Gün 0-30', 'Gün 31-60', 'Gün 61-100', '3 numune / 2 üretici', '2-4 demo kurulum',
    '%15', '600.000 USD', '510.000 USD', '%20', '450.000 USD', '360.000 USD', '%25', '270.000 USD',
    '%60', '%40', '230.000 - 530.000 TL', '30°', '$90.000 şirkete girer.',
    'https://wa.me/905422176687',
  ],
};

const decode = (s) =>
  s
    .replace(/<script[\s\S]*?<\/script>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ');

let missing = 0;
for (const [lang, list] of Object.entries(expected)) {
  const raw = fs.readFileSync(`dist/${lang}/index.html`, 'utf8');
  const text = decode(raw);
  for (const f of list) {
    if (!text.includes(f) && !raw.includes(f)) {
      missing++;
      console.log(`${lang}: MISSING ${f}`);
    }
  }
  console.log(`${lang}: checked ${list.length} figures`);
}
process.exit(missing ? 1 : 0);
