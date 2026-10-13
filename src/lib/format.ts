import type { Lang } from '../i18n';

const MINUS = '−';
const locale = (lang: Lang) => (lang === 'en' ? 'en-US' : 'tr-TR');

/**
 * Dollar amount: EN "$90,000", TR "90.000 USD". Negative values use a true minus sign.
 * Whole dollars unless the amount has cents, then two decimals ("$138.75", "138,75 USD").
 */
export function formatUsd(value: number, lang: Lang): string {
  const cents = Math.round(value * 100);
  const abs = Math.abs(cents) / 100;
  const sign = cents < 0 ? MINUS : '';
  const digits = Number.isInteger(abs) ? 0 : 2;
  const n = new Intl.NumberFormat(locale(lang), { minimumFractionDigits: digits, maximumFractionDigits: digits }).format(abs);
  return lang === 'en' ? `${sign}$${n}` : `${sign}${n} USD`;
}

export function formatNumber(value: number, lang: Lang): string {
  const rounded = Math.round(value);
  const sign = rounded < 0 ? MINUS : '';
  return sign + new Intl.NumberFormat(locale(lang)).format(Math.abs(rounded));
}

/** Signed percentage change using the language template, e.g. "{n}%" or "%{n}". */
export function formatPct(value: number, template: string): string {
  const sign = value > 0 ? '+' : value < 0 ? MINUS : '';
  return sign + template.replace('{n}', String(Math.abs(value)));
}

/** Unsigned percentage with one decimal: EN "17.3%", TR "%17,3". */
export function formatShare(value: number, lang: Lang): string {
  const n = new Intl.NumberFormat(locale(lang), { minimumFractionDigits: 1, maximumFractionDigits: 1 }).format(value);
  return lang === 'en' ? `${n}%` : `%${n}`;
}
