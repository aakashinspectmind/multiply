import Link from 'next/link';
import {
  GIFT_AMOUNTS,
  costPerOutcome,
  formatCount,
  formatMoney,
  formatSharePercent,
  impactOfGift,
  sourceById,
} from '@/lib/impact';
import { SPEND_BASIS_LABELS, type Cause } from '@/lib/types';

function SourceLink({ cause, id }: { cause: Cause; id: string }) {
  const source = sourceById(cause, id);
  return (
    <a
      href={source.url}
      target="_blank"
      rel="noreferrer noopener"
      className="text-base text-accent underline decoration-accent/40 hover:decoration-accent"
    >
      {source.label}
    </a>
  );
}

function AmountPicker({ cause, amount }: { cause: Cause; amount: number }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {GIFT_AMOUNTS.map((value) => (
        <Link
          key={value}
          href={{ pathname: `/causes/${cause.slug}`, query: { amount: value } }}
          className={`min-h-[44px] rounded-lg px-5 pt-2.5 text-lg font-medium ring-1 ${
            value === amount
              ? 'bg-accent text-white ring-accent'
              : 'bg-white text-ink ring-black/15 hover:ring-accent'
          }`}
        >
          ${value}
        </Link>
      ))}
    </div>
  );
}

export function ImpactSection({ cause, amount }: { cause: Cause; amount: number }) {
  const model = cause.costModel;

  if (!model) {
    return (
      <section className="rounded-xl border border-flag/20 bg-flag-soft p-6">
        <h2 className="text-2xl font-semibold tracking-tight text-flag">
          We cannot tell you what {formatMoney(amount)} buys here
        </h2>
        <p className="mt-3 text-lg text-gray-800">
          {cause.name} has not published a spending figure and an outcome count that can be divided
          into each other. Any number we printed would be invented, so there is none. The specific
          documents we looked for are listed further down.
        </p>
      </section>
    );
  }

  const perOutcome = costPerOutcome(model);
  const impact = impactOfGift(amount, perOutcome);

  return (
    <section className="rounded-xl border border-black/10 bg-white p-6">
      <h2 className="text-2xl font-semibold tracking-tight">Your gift</h2>
      <div className="mt-4">
        <AmountPicker cause={cause} amount={amount} />
      </div>

      <p className="mt-5 text-2xl font-semibold text-accent">
        {impact.kind === 'funds'
          ? `${formatMoney(amount)} covers about ${formatCount(impact.whole)} ${
              impact.whole === 1 ? model.outcome : model.outcomePlural
            }.`
          : `${formatCount(impact.giversNeeded)} gifts of ${formatMoney(amount)} cover one ${
              model.outcome
            }. Yours is ${formatSharePercent(impact.sharePercent)} of one.`}
      </p>

      <div className="mt-6 rounded-lg bg-paper p-5">
        <h3 className="text-lg font-semibold">The division</h3>
        <dl className="mt-3 space-y-3">
          <div className="flex flex-wrap items-baseline gap-x-3">
            <dt className="text-base text-gray-700">
              {model.spend.fiscalYear} {SPEND_BASIS_LABELS[model.spend.basis]}
            </dt>
            <dd className="font-mono text-lg">${formatCount(model.spend.amount)}</dd>
            <dd className="basis-full sm:basis-auto">
              <SourceLink cause={cause} id={model.spend.sourceId} />
            </dd>
          </div>
          <div className="flex flex-wrap items-baseline gap-x-3">
            <dt className="text-base text-gray-700">
              divided by {model.count.label}, {model.count.fiscalYear}
            </dt>
            <dd className="font-mono text-lg">{formatCount(model.count.amount)}</dd>
            <dd className="basis-full sm:basis-auto">
              <SourceLink cause={cause} id={model.count.sourceId} />
            </dd>
          </div>
          <div className="flex flex-wrap items-baseline gap-x-3 border-t border-black/10 pt-3">
            <dt className="text-base font-medium text-ink">per {model.outcome}</dt>
            <dd className="font-mono text-lg font-semibold">{formatMoney(perOutcome)}</dd>
          </div>
        </dl>

        <p className="mt-4 text-base text-gray-800">
          <span className="font-medium">
            {model.attribution === 'all-program-spend'
              ? 'Every program dollar is charged to this one outcome. '
              : 'Only the spending on this program line is counted. '}
          </span>
          {model.caveat}
        </p>
      </div>

      {model.alternates && model.alternates.length > 0 && (
        <div className="mt-5">
          <h3 className="text-lg font-semibold">Other defensible denominators</h3>
          <ul className="mt-2 space-y-3">
            {model.alternates.map((alternate) => (
              <li key={alternate.label} className="text-base text-gray-800">
                <span className="font-medium">
                  {formatMoney(model.spend.amount / alternate.count)} each, dividing by{' '}
                  {alternate.label}
                </span>{' '}
                — {alternate.note}
              </li>
            ))}
          </ul>
        </div>
      )}

      {cause.ministryClaims.length > 0 && (
        <div className="mt-6 border-t border-black/10 pt-5">
          <h3 className="text-lg font-semibold">What the ministry advertises</h3>
          <ul className="mt-3 space-y-4">
            {cause.ministryClaims.map((claim) => {
              const implied = claim.impliedCostPerOutcome;
              const factor = implied ? perOutcome / implied : null;
              return (
                <li key={claim.quote}>
                  <blockquote className="border-l-2 border-accent/40 pl-4 text-lg text-gray-800">
                    “{claim.quote}”
                  </blockquote>
                  <p className="mt-2 text-base text-gray-700">
                    <SourceLink cause={cause} id={claim.sourceId} />
                  </p>
                  {implied && factor !== null && (
                    <p
                      className={`mt-2 rounded-lg px-4 py-3 text-base ${
                        factor >= 1.5 || factor <= 0.67
                          ? 'bg-flag-soft text-flag'
                          : 'bg-accent-soft text-accent'
                      }`}
                    >
                      Advertised: {formatMoney(implied)} per {claim.impliedOutcome ?? model.outcome}.
                      Documented: {formatMoney(perOutcome)}.{' '}
                      {factor >= 1.5
                        ? `The documents imply about ${factor.toFixed(1)}× the advertised figure.`
                        : factor <= 0.67
                          ? `The documents imply less than the advertised figure.`
                          : `The two agree within ${Math.round(Math.abs(factor - 1) * 100)}%.`}
                    </p>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </section>
  );
}
