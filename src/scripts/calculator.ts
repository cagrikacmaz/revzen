import { compute, SCENARIOS, type ScenarioBase, type ScenarioKey } from '../lib/calc';
import { formatUsd, formatNumber, formatPct } from '../lib/format';
import type { Lang } from '../i18n';

interface Labels {
  noBreakEven: string;
  unitsSuffix: string;
  percent: string;
  operatingResult: string;
}

type InputKey = keyof ScenarioBase;

function setup(root: HTMLElement) {
  const lang = (root.dataset.lang ?? 'tr') as Lang;
  const labels = JSON.parse(root.dataset.labels ?? '{}') as Labels;
  const form = root.querySelector<HTMLFormElement>('[data-calc-form]')!;
  const inputs = new Map<InputKey, HTMLInputElement>();
  root.querySelectorAll<HTMLInputElement>('[data-calc-input]').forEach((el) => {
    inputs.set(el.dataset.calcInput as InputKey, el);
  });
  const priceDev = root.querySelector<HTMLInputElement>('[data-calc-dev="pricePct"]')!;
  const costDev = root.querySelector<HTMLInputElement>('[data-calc-dev="costPct"]')!;
  const scenarios = Array.from(root.querySelectorAll<HTMLInputElement>('[data-calc-scenario]'));
  const presets = Array.from(root.querySelectorAll<HTMLButtonElement>('[data-calc-preset]'));
  const res = (k: string) => root.querySelector<HTMLElement>(`[data-calc-res="${k}"]`)!;
  const out = (k: string) => root.querySelector<HTMLElement>(`[data-calc-out="${k}"]`)!;
  const live = root.querySelector<HTMLElement>('[data-calc-live]')!;
  let liveTimer = 0;

  const num = (el: HTMLInputElement | undefined) => {
    const v = Number(el?.value);
    return Number.isFinite(v) ? v : 0;
  };

  function setMoney(key: string, value: number) {
    const el = res(key);
    el.textContent = formatUsd(value, lang);
    el.classList.toggle('is-negative', value < 0);
  }

  function update() {
    const pricePct = Number(priceDev.value);
    const costPct = Number(costDev.value);
    const r = compute({
      units: num(inputs.get('units')),
      price: num(inputs.get('price')),
      landed: num(inputs.get('landed')),
      channel: num(inputs.get('channel')),
      service: num(inputs.get('service')),
      fixed: num(inputs.get('fixed')),
      pricePct,
      costPct,
    });

    setMoney('revenue', r.revenue);
    setMoney('contribution', r.contribution);
    setMoney('operatingResult', r.operatingResult);
    setMoney('unitContribution', r.unitContribution);
    const be = res('breakEven');
    be.textContent =
      r.breakEvenUnits === null ? labels.noBreakEven : `${formatNumber(r.breakEvenUnits, lang)} ${labels.unitsSuffix}`;
    be.classList.toggle('is-negative', r.breakEvenUnits === null);

    out('priceDev').textContent = formatPct(pricePct, labels.percent);
    out('costDev').textContent = formatPct(costPct, labels.percent);

    for (const p of presets) {
      const match = Number(p.dataset.price) === pricePct && Number(p.dataset.cost) === costPct;
      p.setAttribute('aria-pressed', String(match));
    }

    window.clearTimeout(liveTimer);
    liveTimer = window.setTimeout(() => {
      live.textContent = `${labels.operatingResult}: ${formatUsd(r.operatingResult, lang)}`;
    }, 600);
  }

  function loadScenario(key: ScenarioKey) {
    const s = SCENARIOS[key];
    (Object.keys(s) as InputKey[]).forEach((k) => {
      const el = inputs.get(k);
      if (el) el.value = String(s[k]);
    });
    update();
  }

  form.addEventListener('submit', (e) => e.preventDefault());
  form.addEventListener('input', (e) => {
    const target = e.target as HTMLInputElement;
    if (target.matches('[data-calc-scenario]')) return;
    if (target === inputs.get('units')) {
      for (const r of scenarios) r.checked = r.value === target.value;
    }
    update();
  });
  for (const r of scenarios) {
    r.addEventListener('change', () => {
      if (r.checked) loadScenario(r.value as ScenarioKey);
    });
  }
  for (const p of presets) {
    p.addEventListener('click', () => {
      priceDev.value = p.dataset.price!;
      costDev.value = p.dataset.cost!;
      update();
    });
  }

  update();
}

export function initCalculator() {
  document.querySelectorAll<HTMLElement>('[data-calc]').forEach((el) => {
    if (el.dataset.ready) return;
    el.dataset.ready = '1';
    setup(el);
  });
}
