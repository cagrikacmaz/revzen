import type { Lang } from '../i18n';

const MINUS = '−';

/** Whole-dollar amount: EN "$90,000", TR "90.000 USD". Negative values use a true minus sign. */
export function formatUsd(value: number, lang: Lang): string {
  const rounded = Math.round(value);
  const abs = Math.abs(rounded);
  const sign = rounded < 0 ? MINUS : '';
  if (lang === 'en') return `${sign}$${new Intl.NumberFormat('en-US').format(abs)}`;
  return `${sign}${new Intl.NumberFormat('tr-TR').format(abs)} USD`;
}

export function formatNumber(value: number, lang: Lang): string {
  const rounded = Math.round(value);
  const sign = rounded < 0 ? MINUS : '';
  return sign + new Intl.NumberFormat(lang === 'en' ? 'en-US' : 'tr-TR').format(Math.abs(rounded));
}

/** Signed percentage using the language template, e.g. "{n}%" or "%{n}". */
export function formatPct(value: number, template: string): string {
  const sign = value > 0 ? '+' : value < 0 ? MINUS : '';
  return sign + template.replace('{n}', String(Math.abs(value)));
}
