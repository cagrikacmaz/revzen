import { tr } from './tr';
import { en } from './en';

export type Lang = 'tr' | 'en';
export type Dict = typeof tr;

export const dicts: Record<Lang, Dict> = { tr, en };
export const otherLang = (lang: Lang): Lang => (lang === 'tr' ? 'en' : 'tr');
