import type { ReactNode } from 'react';

/**
 * One line of a division, laid out like the statement it was read off.
 *
 * Figures used to sit in a flex row after their labels, which started each number
 * at whatever x the label happened to end at — so a spend, a count and a result
 * never lined up, on exactly the blocks of this site that are asking to be
 * checked. A right-aligned column of tabular figures is the whole point.
 *
 * Shared by the cost-per-outcome division and the high-cost comparison, because
 * two columns of figures that mean the same kind of thing should not drift apart.
 */
export function StatementLine({
  label,
  figure,
  source,
  total = false,
}: {
  label: ReactNode;
  figure: string;
  source?: ReactNode;
  /** The result line: ruled off above, and set in the weight of a conclusion. */
  total?: boolean;
}) {
  return (
    <div
      className={`grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-4 py-2 ${
        total ? 'mt-1 border-t border-black/15' : ''
      }`}
    >
      <dt className={`text-base ${total ? 'font-medium text-ink' : 'text-gray-700'}`}>{label}</dt>
      <dd
        className={`font-mono text-lg tracking-tight tabular-nums ${total ? 'font-semibold' : ''}`}
      >
        {figure}
      </dd>
      {source && <dd className="col-span-2 mt-0.5">{source}</dd>}
    </div>
  );
}
