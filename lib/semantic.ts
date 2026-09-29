import { CATEGORY_LABELS, type Category, type Cause } from './types';

/**
 * Search by meaning rather than by shared words: "give kids a future" should
 * find schools and orphan care even though neither phrase appears in the
 * other.
 *
 * Each cause is turned into a few short passages, and each passage into a
 * vector by a small embedding model, ahead of time, by
 * `scripts/build-cause-embeddings.ts`. The reader's query is embedded in their
 * own browser by the same model and compared against those vectors. No API
 * key, no server, no query leaves the page. The keyword search in `search.ts`
 * stays as the fallback while the model loads or if it cannot.
 *
 * This file holds only the parts both sides must agree on, and none of the
 * model code, so it can be tested without downloading anything.
 */

export const EMBEDDING_MODEL = 'Xenova/bge-small-en-v1.5';
export const EMBEDDING_DIMS = 384;
/** bge models are trained to see this in front of a search query, not a passage. */
export const QUERY_PREFIX = 'Represent this sentence for searching relevant passages: ';
export const EMBEDDINGS_PATH = '/cause-embeddings.json';

const MAX_PASSAGE_CHARS = 500;

/**
 * The kind of work in the words a giver would use for it. The descriptions are
 * written for auditors — budgets, fiscal years, counts — and a query like "help
 * people get jobs" needs something to land on that sounds like a person.
 */
const CATEGORY_MEANING: Record<Category, string> = {
  translation: 'Translating the Bible into languages that have never had it.',
  scripture: 'Getting Bibles and Bible teaching to people so they can read and grow in faith.',
  'church-planting': 'Starting new local churches led by local believers.',
  evangelism:
    'Sending missionaries and evangelists to share the gospel with people who have not heard it.',
  training: 'Training pastors and church leaders.',
  'persecuted-church':
    'Helping Christians who are persecuted, imprisoned or attacked for their faith.',
  health: 'Medical care, surgery, hospitals and doctors for people who cannot get them.',
  disability: 'Care, mobility and inclusion for people with disabilities.',
  water: 'Clean, safe drinking water, wells and sanitation.',
  food: 'Fighting hunger: food, nutrition and helping farmers grow more.',
  education: 'Schools, teachers and literacy so children and adults can learn.',
  livelihood:
    'Jobs, small businesses, savings and loans so families can earn a living and leave poverty.',
  justice:
    'Rescuing people from human trafficking, slavery, abuse and exploitation, and seeking justice.',
  relief: 'Emergency relief after disasters, war and displacement, and help for refugees.',
  logistics: 'Planes and logistics that get aid and missionaries to remote places.',
  media: 'Sharing the gospel through radio, TV, film and the internet.',
  children: 'Caring for orphans, vulnerable children and families.',
  'church-fund': 'A church-run fund that gives to ministries serving the poor.',
};
const MAX_BODY_PASSAGES = 3;

/**
 * What the model reads for a cause. The first passage is the card a reader
 * sees; the rest are the description, in sentence-aligned pieces short enough
 * that the model reads all of each one.
 */
export function causePassages(cause: Cause): string[] {
  const head = [
    cause.name,
    CATEGORY_LABELS[cause.category],
    CATEGORY_MEANING[cause.category],
    `Works in ${cause.countries.join(', ')}.`,
    cause.tagline,
  ].join('. ');

  const sentences = cause.whatTheyDo.match(/[^.!?]+[.!?]+(\s|$)|[^.!?]+$/g) ?? [cause.whatTheyDo];
  const body: string[] = [];
  let current = '';
  for (const sentence of sentences) {
    if (current && current.length + sentence.length > MAX_PASSAGE_CHARS) {
      body.push(current.trim());
      current = '';
    }
    current += sentence;
  }
  if (current.trim()) body.push(current.trim());

  const portfolio = cause.portfolio?.length
    ? [
        `Funds partners: ${cause.portfolio.map((p) => `${p.name} (${p.work}, ${p.place})`).join('; ')}`.slice(
          0,
          MAX_PASSAGE_CHARS,
        ),
      ]
    : [];

  return [head, ...body.slice(0, MAX_BODY_PASSAGES), ...portfolio];
}

/**
 * FNV-1a over the passages and model name. Stored beside each cause's vectors
 * so a test can tell when a cause's text changed and its vectors did not.
 */
export function passagesHash(passages: string[]): string {
  let hash = 0x811c9dc5;
  const text = `${EMBEDDING_MODEL}\n${passages.join('\n')}`;
  for (let i = 0; i < text.length; i++) {
    hash ^= text.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }
  return (hash >>> 0).toString(16).padStart(8, '0');
}

export type EmbeddingsFile = {
  model: string;
  dims: number;
  causes: { slug: string; hash: string; vectors: string }[];
};

/**
 * Vectors are stored as int8, base64: unit vectors quantised to ±127 lose
 * nothing a ranking can see, and the file is a quarter the size of float32.
 */
export function encodeVectors(vectors: number[][]): string {
  const bytes = new Int8Array(vectors.length * EMBEDDING_DIMS);
  vectors.forEach((v, i) =>
    v.forEach((x, j) => (bytes[i * EMBEDDING_DIMS + j] = Math.round(x * 127))),
  );
  let binary = '';
  for (const b of new Uint8Array(bytes.buffer)) binary += String.fromCharCode(b);
  return btoa(binary);
}

export function decodeVectors(encoded: string): Float32Array[] {
  const binary = atob(encoded);
  const bytes = new Int8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = (binary.charCodeAt(i) << 24) >> 24;
  const vectors: Float32Array[] = [];
  for (let i = 0; i < bytes.length; i += EMBEDDING_DIMS) {
    const v = new Float32Array(EMBEDDING_DIMS);
    for (let j = 0; j < EMBEDDING_DIMS; j++) v[j] = bytes[i + j] / 127;
    vectors.push(v);
  }
  return vectors;
}

function dot(a: ArrayLike<number>, b: ArrayLike<number>): number {
  let sum = 0;
  for (let i = 0; i < a.length; i++) sum += a[i] * b[i];
  return sum;
}

export type CauseVectors = Map<string, Float32Array[]>;

export function readEmbeddings(file: EmbeddingsFile): CauseVectors {
  return new Map(file.causes.map((c) => [c.slug, decodeVectors(c.vectors)]));
}

/**
 * How close a cause is to the query: an even mix of its best passage and its
 * card passage, so a cause is not found on one stray sentence of
 * its description alone.
 */
function similarity(query: ArrayLike<number>, passages: Float32Array[]): number {
  const scores = passages.map((p) => dot(query, p));
  return 0.5 * Math.max(...scores) + 0.5 * scores[0];
}

/** Below this, nothing is close enough to show as a match at all. */
const FLOOR = 0.5;
/** How far behind the best match a cause can be and still be shown. */
const WINDOW = 0.05;
/** Most a full keyword match can add. Enough to reorder near-ties, not to rescue a poor match. */
const KEYWORD_BOOST = 0.04;
const MIN_RESULTS = 3;
const MAX_RESULTS = 12;

/**
 * Causes close enough in meaning to the query, closest first. `coverage` is
 * the keyword search's share of the query each cause matched.
 */
export function rankBySimilarity(
  causes: Cause[],
  vectors: CauseVectors,
  query: ArrayLike<number>,
  coverage: Map<string, number> = new Map(),
): Cause[] {
  const scored = causes
    .filter((cause) => vectors.has(cause.slug))
    .map((cause, order) => ({
      cause,
      order,
      score:
        similarity(query, vectors.get(cause.slug)!) +
        KEYWORD_BOOST * (coverage.get(cause.slug) ?? 0),
    }));
  if (scored.length === 0) return [];
  scored.sort((a, b) => b.score - a.score || a.order - b.order);
  // One clear winner should not hide the next few close ones.
  const cutoff = Math.max(
    FLOOR,
    Math.min(scored[0].score - WINDOW, scored[MIN_RESULTS - 1]?.score ?? 0),
  );
  return scored
    .filter((s) => s.score >= cutoff)
    .slice(0, MAX_RESULTS)
    .map((s) => s.cause);
}
