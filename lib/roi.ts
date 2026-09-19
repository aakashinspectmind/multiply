import { BENCHMARK_COUNTRY, COST_BASE, REGIONS } from '@/data/cost-base';

export type CostBaseRow = {
  country: string;
  gniPerCapita: number;
  year: string;
  /** How many times the local cost base fits inside the benchmark country's. */
  multiple: number;
};

function benchmarkGni(): number {
  const entry = COST_BASE[BENCHMARK_COUNTRY];
  if (!entry) throw new Error(`No cost base for benchmark country "${BENCHMARK_COUNTRY}"`);
  return entry.gniPerCapita;
}

/**
 * Cost-base rows for the countries a cause works in, highest leverage first.
 *
 * Regions ("Southeast Asia", "Global") have no national figure and are skipped.
 * An unrecognised country throws rather than being skipped quietly, so a typo in
 * the directory fails the check instead of silently dropping out of the table.
 */
export function costBaseRows(countries: string[]): CostBaseRow[] {
  const benchmark = benchmarkGni();
  const rows: CostBaseRow[] = [];

  for (const country of countries) {
    if (REGIONS.has(country)) continue;
    const entry = COST_BASE[country];
    if (!entry) {
      throw new Error(
        `No cost base for "${country}". Add it to data/cost-base.ts, or to REGIONS if it is not a country.`,
      );
    }
    rows.push({
      country,
      gniPerCapita: entry.gniPerCapita,
      year: entry.year,
      multiple: benchmark / entry.gniPerCapita,
    });
  }

  return rows.sort((a, b) => b.multiple - a.multiple);
}

/**
 * The headline sentence: in the cheapest place this cause works, income per
 * person is this many times below the benchmark country's. `null` when the
 * cause only reports regions, or only works in the benchmark country.
 */
export function costBaseHeadline(countries: string[]): CostBaseRow | null {
  const rows = costBaseRows(countries).filter((row) => row.country !== BENCHMARK_COUNTRY);
  return rows[0] ?? null;
}

export function formatMultiple(multiple: number): string {
  return multiple >= 10 ? `${Math.round(multiple)}×` : `${multiple.toFixed(1)}×`;
}
