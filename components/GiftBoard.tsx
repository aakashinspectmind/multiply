import Link from 'next/link';
import {
  bestPerCategory,
  buysPhrase,
  formatMoney,
  soleCandidateCategories,
  unpricedCategories,
  type GiftLine,
} from '@/lib/impact';
import { CATEGORY_LABELS, type Cause } from '@/lib/types';

/**
 * One template, used by every row, so the columns cannot drift apart.
 *
 * Kind of work · what the gift does · ministry · the rate. Below `sm` the row
 * stacks and the last two share a line, which is what `sm:contents` on their
 * wrapper is for: on a phone it is a flex row, and at `sm` it dissolves so its
 * children become grid cells in columns three and four.
 */
const COLUMNS = 'sm:grid-cols-[11rem_minmax(0,1fr)_13rem_auto]';

function Row({
  line,
  amount,
  sole,
}: {
  line: GiftLine;
  amount: number;
  /** No other cause in this category divides, so "furthest" won nothing. */
  sole: boolean;
}) {
  return (
    <li className={`grid grid-cols-1 gap-x-5 gap-y-1 py-3.5 sm:items-baseline ${COLUMNS}`}>
      <span className="text-base text-gray-600 sm:text-gray-700">
        {CATEGORY_LABELS[line.cause.category]}
      </span>

      <span className="text-lg leading-snug font-semibold text-accent">
        {buysPhrase(line)}
        {sole && (
          <span className="block text-base font-normal text-gray-600">
            the only one in this kind of work we can price
          </span>
        )}
      </span>

      <div className="flex items-baseline justify-between gap-3 sm:contents">
        <Link
          href={{ pathname: `/causes/${line.cause.slug}`, query: { amount } }}
          className="text-base text-gray-700 underline decoration-gray-400 hover:text-ink"
        >
          {line.cause.name}
        </Link>
        {/*
         * "each" rather than a column header, and rather than repeating the
         * outcome. Every row used to name its outcome twice — "16% of one
         * Emergency Relief Kit delivered to a persecuted family" and then
         * "$322 per Emergency Relief Kit delivered to a persecuted family".
         * The noun is already in the cell to the left.
         */}
        <span className="shrink-0 font-mono text-base text-gray-700 tabular-nums sm:text-right">
          {formatMoney(line.perOutcome)}
          <span className="font-sans text-gray-600"> each</span>
        </span>
      </div>
    </li>
  );
}

/**
 * The answer to the question the amount picker asks: given this much, what is
 * the most it does?
 *
 * One line per kind of work, not one winner overall. A global ranking would put
 * the cheapest unit on top every time, and the cheapest unit is a tract, not a
 * heart operation — so the number would be doing the discernment. This shows the
 * furthest a dollar goes inside each mandate and leaves the choice between
 * mandates where it belongs.
 */
export function GiftBoard({ causes, amount }: { causes: Cause[]; amount: number }) {
  const lines = bestPerCategory(causes, amount);
  const unpriced = unpricedCategories(causes);
  const sole = soleCandidateCategories(causes);
  if (lines.length === 0) return null;

  return (
    <section className="mt-6 border-t border-black/10 pt-6">
      <h2 className="text-2xl font-semibold tracking-tight">
        The most {formatMoney(amount)} does, by kind of work
      </h2>
      <ul className="mt-3 divide-y divide-black/5">
        {lines.map((line) => (
          <Row
            key={line.cause.slug}
            line={line}
            amount={amount}
            sole={sole.has(line.cause.category)}
          />
        ))}
      </ul>
      <div className="measure mt-5 space-y-2 text-base text-gray-700">
        <p>
          Furthest means most units per dollar, from each ministry&rsquo;s own published spending and
          counts. It is an average, not a price, and a cheap outcome is not a better one.
        </p>
        {unpriced.length > 0 && (
          <p>
            No line above for{' '}
            {unpriced.map((category, index) => (
              <span key={category}>
                {index > 0 && (index === unpriced.length - 1 ? ' or ' : ', ')}
                <span className="text-ink">{CATEGORY_LABELS[category].toLowerCase()}</span>
              </span>
            ))}
            . Those ministries are in the directory and none of them publishes numbers that divide,
            so there is nothing to put here rather than nothing to give to.
          </p>
        )}
      </div>
    </section>
  );
}
