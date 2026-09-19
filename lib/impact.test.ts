import assert from 'node:assert/strict';
import { readdirSync } from 'node:fs';
import path from 'node:path';
import { test } from 'node:test';
import { causes } from '../data/causes';
import {
  bestPerCategory,
  buysPhrase,
  costPerOutcome,
  impactOfGift,
  impactSentence,
  formatMoney,
  rankByGift,
  sortCauses,
  sourceById,
} from './impact';
import type { CostModel } from './types';

const model: CostModel = {
  outcome: 'surgery',
  outcomePlural: 'surgeries',
  spend: { amount: 1000, basis: 'program-services', fiscalYear: 'FY2025', sourceId: 's' },
  count: { amount: 4, label: 'surgeries performed', fiscalYear: 'FY2025', sourceId: 's' },
  attribution: 'all-program-spend',
  caveat: 'test',
};

test('cost per outcome is spend divided by count', () => {
  assert.equal(costPerOutcome(model), 250);
});

test('a gift at or above the unit cost funds whole outcomes', () => {
  const impact = impactOfGift(600, 250);
  assert.deepEqual(impact, { kind: 'funds', whole: 2, sharePercent: 240 });
});

test('a gift below the unit cost is never rounded up to one outcome', () => {
  const impact = impactOfGift(20, 250);
  assert.equal(impact.kind, 'pooled');
  assert.equal(impact.kind === 'pooled' && impact.giversNeeded, 13);
});

test('pooled gifts round up, so the outcome is actually covered', () => {
  // 250 / 100 is exactly 2.5 gifts; 2 gifts leave the outcome unfunded.
  const impact = impactOfGift(100, 250);
  assert.equal(impact.kind === 'pooled' && impact.giversNeeded, 3);
});

test('non-positive inputs throw rather than producing a number', () => {
  assert.throws(() => impactOfGift(0, 250));
  assert.throws(() => impactOfGift(20, 0));
  assert.throws(() => costPerOutcome({ ...model, count: { ...model.count, amount: 0 } }));
});

test('sentences use the singular outcome for exactly one', () => {
  assert.match(impactSentence(250, model), /covers about 1 surgery\.$/);
  assert.match(impactSentence(500, model), /covers about 2 surgeries\.$/);
});

test('pooled sentences read as one whole outcome', () => {
  assert.match(impactSentence(20, model), /^It takes about 13 gifts of \$20 to cover one surgery\./);
});

test('money formatting keeps cents only where cents matter', () => {
  assert.equal(formatMoney(20), '$20');
  assert.equal(formatMoney(1896.42), '$1,896');
  assert.equal(formatMoney(24.44), '$24.44');
  assert.equal(formatMoney(2.5), '$2.50');
});

/**
 * index.ts is written by hand so the directory has a reviewable manifest, which
 * means a new cause file can be researched, committed, and silently never shown.
 * This is the check that a file on disk is actually in the product.
 */
test('every cause file on disk is wired into the directory', () => {
  const dir = path.join(import.meta.dirname, '..', 'data', 'causes');
  const onDisk = readdirSync(dir)
    .filter((file) => file.endsWith('.ts') && file !== 'index.ts')
    .map((file) => file.replace(/\.ts$/, ''))
    .sort();
  const exported = causes.map((cause) => cause.slug).sort();
  assert.deepEqual(exported, onDisk);
});

test('slugs are unique', () => {
  const slugs = causes.map((cause) => cause.slug);
  assert.equal(new Set(slugs).size, slugs.length);
});

test('every sourceId in the directory resolves', () => {
  for (const cause of causes) {
    for (const accreditation of cause.accreditations) {
      sourceById(cause, accreditation.sourceId);
    }
    for (const claim of cause.ministryClaims) {
      sourceById(cause, claim.sourceId);
    }
    if (cause.costModel) {
      sourceById(cause, cause.costModel.spend.sourceId);
      sourceById(cause, cause.costModel.count.sourceId);
    }
  }
});

test('causes without a published cost model sort last on cost', () => {
  const sorted = sortCauses(causes, 'cost');
  const firstWithout = sorted.findIndex((cause) => !cause.costModel);
  const lastWith = sorted.reduce((last, cause, index) => (cause.costModel ? index : last), -1);
  assert.ok(firstWithout > lastWith);
});

test('review order puts documents-reviewed causes first', () => {
  const sorted = sortCauses(causes, 'review');
  assert.equal(sorted[0].verification, 'documents-reviewed');
});

test('the gift ranking omits causes with nothing to divide rather than ranking them last', () => {
  const lines = rankByGift(causes, 50);
  assert.equal(
    lines.length,
    causes.filter((cause) => cause.costModel).length,
  );
  assert.ok(lines.every((line) => line.cause.costModel));
});

test('the gift ranking is cheapest outcome first', () => {
  const costs = rankByGift(causes, 50).map((line) => line.perOutcome);
  assert.deepEqual(costs, [...costs].sort((a, b) => a - b));
});

test('the ranking order does not move when the amount does', () => {
  const atOne = rankByGift(causes, 1).map((line) => line.cause.slug);
  const atMillion = rankByGift(causes, 1_000_000).map((line) => line.cause.slug);
  assert.deepEqual(atOne, atMillion);
});

test('the board shows one cause per category, and never a category twice', () => {
  const lines = bestPerCategory(causes, 50);
  const seen = lines.map((line) => line.cause.category);
  assert.deepEqual(seen, [...new Set(seen)]);
});

test('the board picks the cheapest outcome within each category', () => {
  for (const line of bestPerCategory(causes, 50)) {
    const rivals = causes.filter(
      (cause) => cause.category === line.cause.category && cause.costModel,
    );
    for (const rival of rivals) {
      assert.ok(costPerOutcome(rival.costModel!) >= line.perOutcome);
    }
  }
});

test('buys phrases stay singular for one outcome and fractional below one', () => {
  const [line] = rankByGift(causes, 1);
  const cheap = { ...line, perOutcome: 250, impact: impactOfGift(250, 250) };
  assert.equal(buysPhrase({ ...cheap, model }), '1 surgery');
  assert.equal(
    buysPhrase({ ...cheap, model, impact: impactOfGift(500, 250) }),
    '2 surgeries',
  );
  assert.equal(
    buysPhrase({ ...cheap, model, impact: impactOfGift(25, 250) }),
    '10% of one surgery',
  );
});
