/**
 * Regenerate public/cause-embeddings.json: the vectors the in-browser search
 * compares a reader's query against.
 *
 * Committed rather than built in CI, so a deploy never depends on downloading
 * a model. `lib/semantic.test.ts` fails when a cause's text has changed since
 * its vectors were made, and names the command to fix it.
 *
 * Run: npm run embeddings
 */
import { writeFileSync } from 'node:fs';
import { pipeline } from '@huggingface/transformers';
import { causes } from '../data/causes';
import {
  EMBEDDING_DIMS,
  EMBEDDING_MODEL,
  causePassages,
  encodeVectors,
  passagesHash,
  type EmbeddingsFile,
} from '../lib/semantic';

async function main() {
  const embed = await pipeline('feature-extraction', EMBEDDING_MODEL, { dtype: 'q8' });

  const out: EmbeddingsFile = { model: EMBEDDING_MODEL, dims: EMBEDDING_DIMS, causes: [] };
  for (const cause of causes) {
    const passages = causePassages(cause);
    const tensor = await embed(passages, { pooling: 'cls', normalize: true });
    out.causes.push({
      slug: cause.slug,
      hash: passagesHash(passages),
      vectors: encodeVectors(tensor.tolist() as number[][]),
    });
  }

  writeFileSync('public/cause-embeddings.json', JSON.stringify(out) + '\n');
  console.log(`Embedded ${out.causes.length} causes with ${EMBEDDING_MODEL}.`);
}

main();
