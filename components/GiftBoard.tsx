import Link from 'next/link';
import { bestPerCategory, buysPhrase, formatMoney, type GiftLine } from '@/lib/impact';
import { CATEGORY_LABELS, type Cause } from '@/lib/types';

function Row({ line, amount }: { line: GiftLine; amount: number }) {
  return (
    <li className="flex flex-wrap items-baseline gap-x-3 gap-y-1 py-3">
      <span className="w-52 shrink-0 text-base text-gray-700">
        {CATEGORY_LABELS[line.cause.category]}
      </span>
      <span className="text-lg font-semibold text-accent">{buysPhrase(line)}</span>
      <Link
        href={{ pathname: `/causes/${line.cause.slug}`, query: { amount } }}
        className="text-base text-gray-700 underline decoration-gray-400 hover:text-ink"
      >
        {line.cause.name}
      </Link>
      <span className="text-base text-gray-700">
        {formatMoney(line.perOutcome)} per {line.model.outcome}
      </span>
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
  if (lines.length === 0) return null;

  return (
    <section className="mt-6 border-t border-black/10 pt-5">
      <h2 className="text-xl font-semibold tracking-tight">
        The most {formatMoney(amount)} does, by kind of work
      </h2>
      <ul className="mt-1 divide-y divide-black/5">
        {lines.map((line) => (
          <Row key={line.cause.slug} line={line} amount={amount} />
        ))}
      </ul>
      <p className="mt-3 text-base text-gray-700">
        Furthest means most units per dollar, from each ministry&rsquo;s own published spending and
        counts. It is an average, not a price, and a cheap outcome is not a better one.
      </p>
    </section>
  );
}
