import Link from 'next/link';
import { VerificationBadge } from './VerificationBadge';
import {
  costPerOutcome,
  formatCount,
  formatMoney,
  formatSharePercent,
  impactOfGift,
} from '@/lib/impact';
import { costBaseHeadline, formatMultiple } from '@/lib/roi';
import { CATEGORY_LABELS, SPEND_BASIS_LABELS, type Cause } from '@/lib/types';

/** One line: the cost-base leverage, and the passage the work stands on. */
function LeverageLine({ cause }: { cause: Cause }) {
  const headline = costBaseHeadline(cause.countries);
  const anchor = cause.biblicalAlignment.scriptures[0];
  return (
    <p className="mt-3 text-base text-gray-700">
      {headline && (
        <>
          <span className="font-medium text-ink">
            {formatMultiple(headline.multiple)} lower cost base
          </span>{' '}
          than the US ({headline.country}) ·{' '}
        </>
      )}
      {anchor.ref}
    </p>
  );
}

function Countries({ countries }: { countries: string[] }) {
  const shown = countries.slice(0, 4);
  const rest = countries.length - shown.length;
  return (
    <p className="text-base text-gray-700">
      {shown.join(' · ')}
      {rest > 0 ? ` · +${rest} more` : ''}
    </p>
  );
}

function ImpactLine({ cause, amount }: { cause: Cause; amount: number }) {
  if (!cause.costModel) {
    return (
      <div className="rounded-lg bg-flag-soft px-4 py-3">
        <p className="text-base font-medium text-flag">
          No cost per outcome published — there is nothing here to divide.
        </p>
        <p className="mt-1 text-base text-gray-700">
          We will not invent a figure for {formatMoney(amount)}. What is missing is listed on the
          cause page.
        </p>
      </div>
    );
  }

  const model = cause.costModel;
  const perOutcome = costPerOutcome(model);
  const impact = impactOfGift(amount, perOutcome);

  return (
    <div className="rounded-lg bg-accent-soft px-4 py-3">
      {impact.kind === 'funds' ? (
        <p className="text-lg font-semibold text-accent">
          {formatMoney(amount)} covers about {formatCount(impact.whole)}{' '}
          {impact.whole === 1 ? model.outcome : model.outcomePlural}.
        </p>
      ) : (
        <p className="text-lg font-semibold text-accent">
          {formatCount(impact.giversNeeded)} gifts of {formatMoney(amount)} cover one{' '}
          {model.outcome}. Yours is {formatSharePercent(impact.sharePercent)} of one.
        </p>
      )}
      <p className="mt-1 text-base text-gray-700">
        {formatMoney(perOutcome)} per {model.outcome} — {model.spend.fiscalYear}{' '}
        {SPEND_BASIS_LABELS[model.spend.basis]} divided by {formatCount(model.count.amount)}{' '}
        {model.count.label}.
      </p>
    </div>
  );
}

export function CauseCard({ cause, amount }: { cause: Cause; amount: number }) {
  return (
    <article className="rounded-xl border border-black/10 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-base font-medium text-gray-700">
          {CATEGORY_LABELS[cause.category]}
        </span>
        <VerificationBadge level={cause.verification} />
      </div>

      <h2 className="mt-3 text-2xl font-semibold tracking-tight">
        <Link
          href={{ pathname: `/causes/${cause.slug}`, query: { amount } }}
          className="underline decoration-black/15 hover:decoration-accent"
        >
          {cause.name}
        </Link>
      </h2>
      <p className="mt-1 text-base text-gray-700">{cause.tagline}</p>
      <div className="mt-2">
        <Countries countries={cause.countries} />
      </div>

      <LeverageLine cause={cause} />

      <div className="mt-4">
        <ImpactLine cause={cause} amount={amount} />
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-4">
        <Link
          href={{ pathname: `/causes/${cause.slug}`, query: { amount } }}
          className="text-base font-medium text-accent underline decoration-accent/40 hover:decoration-accent"
        >
          See the arithmetic and the gaps
        </Link>
        <a
          href={cause.giveUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="text-base text-gray-700 underline decoration-gray-400 hover:text-ink"
        >
          Give directly
        </a>
      </div>
    </article>
  );
}
