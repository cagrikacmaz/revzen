import { describe, expect, it } from 'vitest';
import { compute, marginPct, PRESETS, SCENARIOS, type PresetKey, type ScenarioKey } from './calc';

const run = (scenario: ScenarioKey, preset: PresetKey) => compute({ ...SCENARIOS[scenario], ...PRESETS[preset] });

describe('pre-tax profit matches the deck presets', () => {
  const expected: Record<ScenarioKey, Record<PresetKey, number>> = {
    '1000': { cautious: -71500, base: 185000, optimistic: 340000 },
    '10000': { cautious: -190000, base: 2150000, optimistic: 3570000 },
  };

  for (const scenario of Object.keys(expected) as ScenarioKey[]) {
    for (const preset of Object.keys(expected[scenario]) as PresetKey[]) {
      it(`${scenario} units, ${preset}`, () => {
        expect(run(scenario, preset).preTaxProfit).toBe(expected[scenario][preset]);
      });
    }
  }
});

describe('net profit after 25% corporate tax', () => {
  it('1,000 units base', () => {
    const r = run('1000', 'base');
    expect(r.tax).toBe(46250);
    expect(r.netProfit).toBe(138750);
    expect(r.netProfitPerUnit).toBe(138.75);
  });

  it('10,000 units base', () => {
    const r = run('10000', 'base');
    expect(r.tax).toBe(537500);
    expect(r.netProfit).toBe(1612500);
    expect(r.netProfitPerUnit).toBe(161.25);
  });

  it('a loss is not taxed', () => {
    expect(run('1000', 'cautious').netProfit).toBe(-71500);
    expect(run('10000', 'cautious').netProfit).toBe(-190000);
    expect(run('1000', 'cautious').tax).toBe(0);
  });
});

describe('income statement matches the profitability table', () => {
  it('1,000 units', () => {
    const r = run('1000', 'base');
    expect(r).toMatchObject({
      revenue: 1070000,
      productCost: 480000,
      channelCost: 170000,
      serviceCost: 70000,
      fixedCost: 165000,
      totalCosts: 885000,
      preTaxProfit: 185000,
    });
    expect(r.revenue - r.totalCosts).toBe(r.preTaxProfit);
    expect(marginPct(r)).toBe(17.3);
  });

  it('10,000 units', () => {
    const r = run('10000', 'base');
    expect(r).toMatchObject({
      revenue: 10000000,
      productCost: 4200000,
      channelCost: 1600000,
      serviceCost: 800000,
      fixedCost: 1250000,
      totalCosts: 7850000,
      preTaxProfit: 2150000,
    });
    expect(r.revenue - r.totalCosts).toBe(r.preTaxProfit);
    expect(marginPct(r)).toBe(21.5);
  });
});

describe('break-even', () => {
  it('1,000 units base: profitable after 472 units', () => {
    expect(run('1000', 'base').breakEvenUnits).toBe(472);
  });

  it('10,000 units base: profitable after 3,677 units', () => {
    expect(run('10000', 'base').breakEvenUnits).toBe(3677);
  });

  it('no break-even when every sale loses money', () => {
    const r = compute({ ...SCENARIOS['1000'], price: 720, pricePct: 0, costPct: 0 });
    expect(r.unitMargin).toBe(0);
    expect(r.breakEvenUnits).toBeNull();
    expect(compute({ ...SCENARIOS['1000'], pricePct: -30, costPct: 30 }).breakEvenUnits).toBeNull();
  });

  it('product cost change applies to landed cost only', () => {
    const r = compute({ ...SCENARIOS['1000'], pricePct: 0, costPct: 10 });
    expect(r.unitMargin).toBe(350 - 48);
    expect(r.channelCost).toBe(170000);
  });
});
