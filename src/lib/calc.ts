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

/** Corporate tax rate applied to a positive pre-tax profit. */
export const TAX_RATE = 0.25;

export interface Deviation {
  /** Price change in whole percent, e.g. -15. */
  pricePct: number;
  /** Product / landed cost change in whole percent, e.g. 20. */
  costPct: number;
}

export const PRESETS = {
  cautious: { pricePct: -15, costPct: 20 },
  base: { pricePct: 0, costPct: 0 },
  optimistic: { pricePct: 10, costPct: -10 },
} satisfies Record<string, Deviation>;

export type PresetKey = keyof typeof PRESETS;

export interface Result {
  revenue: number;
  productCost: number;
  channelCost: number;
  serviceCost: number;
  fixedCost: number;
  totalCosts: number;
  preTaxProfit: number;
  tax: number;
  netProfit: number;
  netProfitPerUnit: number;
  /** Price minus all per-unit costs, before fixed costs. */
  unitMargin: number;
  /** Units needed to cover fixed costs (rounded up), or null when the unit margin is zero or negative. */
  breakEvenUnits: number | null;
}

const cents = (n: number) => Math.round(n * 100) / 100;

export function compute(input: ScenarioBase & Deviation): Result {
  const { units, price, landed, channel, service, fixed, pricePct, costPct } = input;
  const unitPrice = (price * (100 + pricePct)) / 100;
  const unitLanded = (landed * (100 + costPct)) / 100;

  const revenue = cents(units * unitPrice);
  const productCost = cents(units * unitLanded);
  const channelCost = cents(units * channel);
  const serviceCost = cents(units * service);
  const totalCosts = cents(productCost + channelCost + serviceCost + fixed);
  const preTaxProfit = cents(revenue - totalCosts);
  const tax = preTaxProfit > 0 ? cents(preTaxProfit * TAX_RATE) : 0;
  const netProfit = cents(preTaxProfit - tax);
  const unitMargin = cents(unitPrice - unitLanded - channel - service);

  return {
    revenue,
    productCost,
    channelCost,
    serviceCost,
    fixedCost: fixed,
    totalCosts,
    preTaxProfit,
    tax,
    netProfit,
    netProfitPerUnit: units > 0 ? cents(netProfit / units) : 0,
    unitMargin,
    breakEvenUnits: unitMargin > 0 ? Math.ceil(fixed / unitMargin) : null,
  };
}

/** Pre-tax profit margin in percent, rounded to one decimal. */
export const marginPct = (r: Result) => (r.revenue > 0 ? Math.round((r.preTaxProfit / r.revenue) * 1000) / 10 : 0);
