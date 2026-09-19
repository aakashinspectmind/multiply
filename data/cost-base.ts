import type { Source } from '@/lib/types';

/**
 * Why a dollar goes further in one place than another, in the only terms we can
 * source: national income per person.
 *
 * This is the honest floor under the phrase "high ROI". A salary, a rent, a
 * builder's day rate and a nurse's wage all track the local cost base, so a
 * ministry paying local people in Malawi is buying labour at a fraction of what
 * the same work costs in San Francisco. It says nothing about whether the
 * ministry is any good — that is what the rest of each page is for.
 *
 * Figures are World Bank GNI per capita, Atlas method, current US$. Latest year
 * available per country, because several of these countries report late.
 */
export const COST_BASE_SOURCE: Source = {
  id: 'worldbank-gni',
  label: 'GNI per capita, Atlas method (current US$)',
  url: 'https://data.worldbank.org/indicator/NY.GNP.PCAP.CD',
  publisher: 'World Bank',
  documentType: 'third-party',
  retrieved: '2026-09-18',
  note: 'Pulled from the World Bank API, most recent year with a value for each country.',
};

/** The high-cost comparison every ratio on the site is taken against. */
export const BENCHMARK_COUNTRY = 'United States';

export type CostBaseEntry = { gniPerCapita: number; year: string };

export const COST_BASE: Record<string, CostBaseEntry> = {
  Mozambique: { gniPerCapita: 570, year: '2025' },
  Malawi: { gniPerCapita: 600, year: '2025' },
  Syria: { gniPerCapita: 720, year: '2022' },
  Niger: { gniPerCapita: 750, year: '2025' },
  Ethiopia: { gniPerCapita: 1110, year: '2025' },
  Uganda: { gniPerCapita: 1120, year: '2025' },
  Rwanda: { gniPerCapita: 1150, year: '2025' },
  Zambia: { gniPerCapita: 1200, year: '2025' },
  Tanzania: { gniPerCapita: 1270, year: '2025' },
  Nigeria: { gniPerCapita: 1360, year: '2025' },
  Haiti: { gniPerCapita: 2010, year: '2025' },
  Kenya: { gniPerCapita: 2200, year: '2025' },
  Ghana: { gniPerCapita: 2630, year: '2025' },
  Zimbabwe: { gniPerCapita: 2660, year: '2025' },
  India: { gniPerCapita: 2760, year: '2025' },
  Bangladesh: { gniPerCapita: 2840, year: '2025' },
  Nicaragua: { gniPerCapita: 2850, year: '2025' },
  Honduras: { gniPerCapita: 3270, year: '2025' },
  Eswatini: { gniPerCapita: 3730, year: '2025' },
  Iran: { gniPerCapita: 4650, year: '2025' },
  Philippines: { gniPerCapita: 4850, year: '2025' },
  Vietnam: { gniPerCapita: 4970, year: '2025' },
  Indonesia: { gniPerCapita: 5120, year: '2025' },
  Guatemala: { gniPerCapita: 6360, year: '2025' },
  Thailand: { gniPerCapita: 7690, year: '2025' },
  Peru: { gniPerCapita: 8430, year: '2025' },
  Mexico: { gniPerCapita: 13730, year: '2025' },
  Japan: { gniPerCapita: 38340, year: '2025' },
  // The World Bank reports the United Kingdom, not England.
  England: { gniPerCapita: 54550, year: '2025' },
  Australia: { gniPerCapita: 64120, year: '2025' },
  'United States': { gniPerCapita: 88810, year: '2025' },
};

/**
 * Entries in a cause's `countries` list that are regions, not countries, and so
 * deliberately have no cost base. Listed explicitly so that a misspelled
 * country name fails the directory check instead of being silently skipped.
 */
export const REGIONS = new Set([
  'Africa',
  'East Asia',
  'Eurasia',
  'Europe',
  'Global',
  'Latin America',
  'Middle East & North Africa',
  'South Asia',
  'Southeast Asia',
]);
