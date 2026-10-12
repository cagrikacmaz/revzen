export type ScenarioKey = '1000' | '10000';

export interface ScenarioBase {
  units: number;
  price: number;
  landed: number;
  channel: number;
  service: number;
  fixed: number;
}

/** Base assumptions per unit (USD, excl. VAT) from the deck model. */
export const SCENARIOS: Record<ScenarioKey, ScenarioBase> = {
  '1000': { units: 1000, price: 1070, landed: 480, channel: 170, service: 70, fixed: 165000 },
  '10000': { units: 10000, price: 1000, landed: 420, channel: 160, service: 80, fixed: 1250000 },
};

export interface Deviation {
  /** Price deviation in whole percent, e.g. -15. */
  pricePct: number;
  /** Product / landed cost deviation in whole percent, e.g. 20. */
  costPct: number;
}

export const PRESETS = {
  downside: { pricePct: -15, costPct: 20 },
  base: { pricePct: 0, costPct: 0 },
  upside: { pricePct: 10, costPct: -10 },
} satisfies Record<string, Deviation>;

export type PresetKey = keyof typeof PRESETS;

export interface Result {
  revenue: number;
  contribution: number;
  operatingResult: number;
  unitContribution: number;
  /** Units needed to cover fixed costs, or null when unit contribution is zero or negative. */
  breakEvenUnits: number | null;
}

const cents = (n: number) => Math.round(n * 100) / 100;

export function compute(input: ScenarioBase & Deviation): Result {
  const { units, price, landed, channel, service, fixed, pricePct, costPct } = input;
  const unitPrice = (price * (100 + pricePct)) / 100;
  const unitLanded = (landed * (100 + costPct)) / 100;
  const unitContribution = cents(unitPrice - unitLanded - channel - service);
  const contribution = cents(units * unitContribution);
  return {
    revenue: cents(units * unitPrice),
    contribution,
    operatingResult: cents(contribution - fixed),
    unitContribution,
    breakEvenUnits: unitContribution > 0 ? Math.ceil(fixed / unitContribution) : null,
  };
}
