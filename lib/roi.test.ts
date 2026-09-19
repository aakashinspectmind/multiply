import assert from 'node:assert/strict';
import { test } from 'node:test';
import { BENCHMARK_COUNTRY, COST_BASE } from '../data/cost-base';
import { causes } from '../data/causes';
import { costBaseHeadline, costBaseRows, formatMultiple } from './roi';

test('the cost base ratio is the benchmark country over the local figure', () => {
  const rows = costBaseRows(['Malawi']);
  assert.equal(rows.length, 1);
  assert.equal(
    rows[0].multiple,
    COST_BASE[BENCHMARK_COUNTRY].gniPerCapita / COST_BASE.Malawi.gniPerCapita,
  );
});

test('rows come back cheapest cost base first', () => {
  const rows = costBaseRows(['Guatemala', 'Malawi', 'Kenya']);
  assert.deepEqual(
    rows.map((row) => row.country),
    ['Malawi', 'Kenya', 'Guatemala'],
  );
});

test('regions are skipped but unknown countries throw', () => {
  assert.deepEqual(costBaseRows(['Global', 'South Asia']), []);
  assert.throws(() => costBaseRows(['Narnia']), /Narnia/);
});

test('the headline excludes the benchmark country itself', () => {
  const headline = costBaseHeadline([BENCHMARK_COUNTRY, 'Ghana']);
  assert.equal(headline?.country, 'Ghana');
  assert.equal(costBaseHeadline([BENCHMARK_COUNTRY]), null);
});

test('multiples read to one decimal below ten and whole above', () => {
  assert.equal(formatMultiple(3.44), '3.4×');
  assert.equal(formatMultiple(79.29), '79×');
});

test('every country in the directory has a cost base or is a known region', () => {
  for (const cause of causes) {
    // Through the real lookup, aliases and all — a country that only resolves in
    // a test is a country that throws on the page.
    assert.doesNotThrow(() => costBaseRows(cause.countries), `${cause.slug}`);
  }
});

test('every cause states a mandate, a passage and a reason a dollar goes further', () => {
  for (const cause of causes) {
    assert.ok(cause.biblicalAlignment.mandate.trim(), `${cause.slug}: no mandate`);
    assert.ok(cause.biblicalAlignment.scriptures.length > 0, `${cause.slug}: no scripture`);
    assert.ok(cause.roi.reason.trim(), `${cause.slug}: no roi reason`);
    assert.ok(cause.roi.levers.length > 0, `${cause.slug}: no roi lever`);
  }
});

test('a sourced roi comparison points at a source the cause actually lists', () => {
  for (const cause of causes) {
    if (!cause.roi.comparison) continue;
    const ids = cause.sources.map((source) => source.id);
    assert.ok(
      ids.includes(cause.roi.comparison.benchmarkSourceId),
      `${cause.slug}: roi benchmark cites a source that is not listed`,
    );
  }
});
