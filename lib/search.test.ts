import assert from 'node:assert/strict';
import { test } from 'node:test';
import { causes } from '../data/causes';
import { parseQuery, searchCauses, stem } from './search';

test('stemming is symmetric enough to meet plurals', () => {
  assert.equal(stem('orphans'), stem('orphan'));
  assert.equal(stem('disabilities'), stem('disability'));
  assert.equal(stem('churches'), stem('church'));
});

test('filler words are dropped and regions are read as places', () => {
  const terms = parseQuery('We want to help with clean water in East Africa');
  assert.deepEqual(
    terms.map((t) => t.text),
    ['east africa', 'clean', 'water'],
  );
  assert.equal(terms[0].kind, 'place');
});

test('an empty or all-filler query leaves the directory as it was', () => {
  for (const query of ['', '   ', 'help a charity']) {
    const result = searchCauses(causes, query);
    assert.equal(result.causes, causes);
    assert.equal(result.partial, false);
  }
});

test('a query nothing matches returns nothing rather than a guess', () => {
  const result = searchCauses(causes, 'xyzzyplugh');
  assert.deepEqual(result.causes, []);
});

test('every result for a full match works in the place asked for', () => {
  const result = searchCauses(causes, 'clean water in Africa');
  assert.equal(result.partial, false);
  assert.ok(result.causes.length > 0);
  assert.equal(result.causes[0].category, 'water');
  for (const cause of result.causes) {
    assert.ok(
      cause.countries.some((c) => !['Global', 'United States'].includes(c)),
      `${cause.slug} has no country outside the US`,
    );
  }
});

test('everyday words find the category that names the work differently', () => {
  const kids = searchCauses(causes, 'kids').causes;
  assert.ok(kids.some((c) => c.category === 'children'));
  const trafficking = searchCauses(causes, 'human trafficking').causes;
  assert.equal(trafficking[0].category, 'justice');
});

test('a partial match is flagged so the page can say so', () => {
  const result = searchCauses(causes, 'bible translation antarctica');
  assert.equal(result.partial, true);
  assert.ok(result.causes.length > 0);
});

test('every result carries a donate link', () => {
  for (const cause of searchCauses(causes, 'surgery').causes) {
    assert.match(cause.giveUrl, /^https:\/\//);
  }
});
