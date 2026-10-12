import { describe, expect, it } from 'vitest';
import { compute, PRESETS, SCENARIOS, type PresetKey, type ScenarioKey } from './calc';

const run = (scenario: ScenarioKey, preset: PresetKey) =>
  compute({ ...SCENARIOS[scenario], ...PRESETS[preset] });

describe('operating result matches the deck stress test', () => {
  const expected: Record<ScenarioKey, Record<PresetKey, number>> = {
    '1000': { downside: -71500, base: 185000, upside: 340000 },
    '10000': { downside: -190000, base: 2150000, upside: 3570000 },
  };

  for (const scenario of Object.keys(expected) as ScenarioKey[]) {
    for (const preset of Object.keys(expected[scenario]) as PresetKey[]) {
      it(`${scenario} units, ${preset}`, () => {
        expect(run(scenario, preset).operatingResult).toBe(expected[scenario][preset]);
      });
    }
  }
});

describe('base scenarios match the financial model', () => {
  it('1,000 units', () => {
    expect(run('1000', 'base')).toEqual({
      revenue: 1070000,
      contribution: 350000,
      operatingResult: 185000,
      unitContribution: 350,
      breakEvenUnits: 472,
    });
  });

  it('10,000 units', () => {
    expect(run('10000', 'base')).toEqual({
      revenue: 10000000,
      contribution: 3400000,
      operatingResult: 2150000,
      unitContribution: 340,
      breakEvenUnits: 3677,
    });
  });
});

describe('edge cases', () => {
  it('cost deviation applies only to landed cost', () => {
    const r = compute({ ...SCENARIOS['1000'], pricePct: 0, costPct: 10 });
    expect(r.unitContribution).toBe(350 - 48);
  });

  it('reports no break-even when unit contribution is not positive', () => {
    const r = compute({ ...SCENARIOS['1000'], price: 720, pricePct: 0, costPct: 0 });
    expect(r.unitContribution).toBe(0);
    expect(r.breakEvenUnits).toBeNull();
    expect(compute({ ...SCENARIOS['1000'], pricePct: -30, costPct: 30 }).breakEvenUnits).toBeNull();
  });
});
