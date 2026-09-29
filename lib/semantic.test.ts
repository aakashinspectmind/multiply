import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import { causes } from '../data/causes';
import {
  EMBEDDING_DIMS,
  EMBEDDING_MODEL,
  causePassages,
  decodeVectors,
  encodeVectors,
  passagesHash,
  rankBySimilarity,
  readEmbeddings,
  type EmbeddingsFile,
} from './semantic';

const file: EmbeddingsFile = JSON.parse(readFileSync('public/cause-embeddings.json', 'utf8'));

test('every cause has vectors made from its current text', () => {
  assert.equal(file.model, EMBEDDING_MODEL);
  const stored = new Map(file.causes.map((c) => [c.slug, c]));
  const stale = causes.filter(
    (cause) => stored.get(cause.slug)?.hash !== passagesHash(causePassages(cause)),
  );
  assert.deepEqual(
    stale.map((c) => c.slug),
    [],
    'These causes changed since their search vectors were built. Run: npm run embeddings',
  );
  assert.equal(
    file.causes.length,
    causes.length,
    'Vectors for a removed cause. Run: npm run embeddings',
  );
});

test('every cause gets a card passage and at most five in all', () => {
  for (const cause of causes) {
    const passages = causePassages(cause);
    assert.ok(passages[0].includes(cause.name));
    assert.ok(passages.length >= 1 && passages.length <= 5, cause.slug);
    assert.equal(readEmbeddings(file).get(cause.slug)?.length, passages.length, cause.slug);
  }
});

test('int8 storage keeps vectors within rounding of the originals', () => {
  const v = Array.from(
    { length: EMBEDDING_DIMS },
    (_, i) => Math.sin(i) / Math.sqrt(EMBEDDING_DIMS / 2),
  );
  const [back] = decodeVectors(encodeVectors([v]));
  for (let i = 0; i < EMBEDDING_DIMS; i++) assert.ok(Math.abs(back[i] - v[i]) <= 0.5 / 127 + 1e-6);
});

test('a query close to nothing returns nothing rather than the least bad', () => {
  const vectors = readEmbeddings(file);
  const orthogonal = new Float32Array(EMBEDDING_DIMS);
  assert.deepEqual(rankBySimilarity(causes, vectors, orthogonal), []);
});

test('a cause’s own card passage finds that cause first', () => {
  const vectors = readEmbeddings(file);
  for (const cause of causes.slice(0, 10)) {
    const [card] = vectors.get(cause.slug)!;
    assert.equal(rankBySimilarity(causes, vectors, card)[0].slug, cause.slug);
  }
});
