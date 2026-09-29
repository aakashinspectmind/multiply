'use client';

import { useEffect, useState } from 'react';
import { keywordCoverage } from '@/lib/search';
import {
  EMBEDDINGS_PATH,
  EMBEDDING_MODEL,
  QUERY_PREFIX,
  rankBySimilarity,
  readEmbeddings,
  type CauseVectors,
  type EmbeddingsFile,
} from '@/lib/semantic';
import type { Cause } from '@/lib/types';

type Embedder = (text: string) => Promise<number[]>;

/**
 * Loaded once per page, on the first search, and shared. The model is about
 * 30MB, so nobody who never types in the box pays for it.
 */
let loading: Promise<{ embed: Embedder; vectors: CauseVectors }> | null = null;

function load() {
  loading ??= (async () => {
    const [{ pipeline }, file] = await Promise.all([
      import('@huggingface/transformers'),
      fetch(EMBEDDINGS_PATH).then((r) => {
        if (!r.ok) throw new Error(`${EMBEDDINGS_PATH}: ${r.status}`);
        return r.json() as Promise<EmbeddingsFile>;
      }),
    ]);
    if (file.model !== EMBEDDING_MODEL) throw new Error(`Embeddings built with ${file.model}`);
    const extractor = await pipeline('feature-extraction', EMBEDDING_MODEL, { dtype: 'q8' });
    const embed: Embedder = async (text) => {
      const tensor = await extractor(QUERY_PREFIX + text, { pooling: 'cls', normalize: true });
      return (tensor.tolist() as number[][])[0];
    };
    return { embed, vectors: readEmbeddings(file) };
  })();
  // A failed load is retried on the next search rather than remembered forever.
  loading.catch(() => (loading = null));
  return loading;
}

export type MeaningSearch =
  { status: 'idle' | 'loading' | 'failed' } | { status: 'ready'; query: string; causes: Cause[] };

const DEBOUNCE_MS = 300;

/**
 * Search by meaning. Until the model is ready — or if it cannot load — the
 * status says so and the caller shows the keyword results instead.
 */
export function useMeaningSearch(causes: Cause[], query: string): MeaningSearch {
  const [state, setState] = useState<MeaningSearch>({ status: 'idle' });
  useEffect(() => {
    const text = query.trim();
    if (!text) return;
    let stale = false;
    const timer = setTimeout(async () => {
      setState((s) => (s.status === 'ready' ? s : { status: 'loading' }));
      try {
        const { embed, vectors } = await load();
        const vector = await embed(text);
        if (stale) return;
        setState({
          status: 'ready',
          query: text,
          causes: rankBySimilarity(causes, vectors, vector, keywordCoverage(causes, text)),
        });
      } catch (error) {
        if (stale) return;
        console.error('Meaning search unavailable, using keyword search', error);
        setState({ status: 'failed' });
      }
    }, DEBOUNCE_MS);
    return () => {
      stale = true;
      clearTimeout(timer);
    };
  }, [causes, query]);

  return query.trim() ? state : { status: 'idle' };
}
