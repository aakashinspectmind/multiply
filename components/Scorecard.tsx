import { MAX_SCORE, scoreTotal } from '@/lib/impact';
import {
  SCORE_DIMENSIONS,
  SCORE_DIMENSION_LABELS,
  SCORE_DIMENSION_QUESTIONS,
  type Cause,
} from '@/lib/types';

function Pips({ value }: { value: 0 | 1 | 2 | 3 | null }) {
  if (value === null) {
    return <span className="text-base text-gray-700">not looked at</span>;
  }
  return (
    <span className="inline-flex items-center gap-1" aria-label={`${value} of 3`}>
      {[1, 2, 3].map((step) => (
        <span
          key={step}
          className={`h-3 w-6 rounded-sm ${step <= value ? 'bg-accent' : 'bg-black/12'}`}
        />
      ))}
    </span>
  );
}

export function Scorecard({ cause }: { cause: Cause }) {
  return (
    <section className="rounded-xl border border-black/10 bg-white p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h2 className="text-2xl font-semibold tracking-tight">Desk review</h2>
        <p className="text-lg text-gray-700">
          {scoreTotal(cause)} of {MAX_SCORE}
        </p>
      </div>
      <dl className="mt-5 space-y-5">
        {SCORE_DIMENSIONS.map((dimension) => {
          const score = cause.scores[dimension];
          return (
            <div key={dimension}>
              <dt className="flex flex-wrap items-center gap-3">
                <span className="text-lg font-medium">{SCORE_DIMENSION_LABELS[dimension]}</span>
                <Pips value={score.value} />
              </dt>
              <dd className="mt-1 text-base text-gray-800">{score.note}</dd>
              <dd className="mt-1 text-base text-gray-700">
                {SCORE_DIMENSION_QUESTIONS[dimension]}
              </dd>
            </div>
          );
        })}
      </dl>
    </section>
  );
}
