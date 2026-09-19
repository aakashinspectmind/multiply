import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ImpactSection } from '@/components/ImpactSection';
import { Scorecard } from '@/components/Scorecard';
import { VerificationBadge } from '@/components/VerificationBadge';
import { causes } from '@/data/causes';
import { DEFAULT_AMOUNT } from '@/lib/impact';
import { CATEGORY_LABELS, VERIFICATION_MEANING, type Cause } from '@/lib/types';

const DOCUMENT_LABELS = {
  'audited-financials': 'Audited financial statements',
  'annual-report': 'Annual report',
  'form-990': 'IRS Form 990',
  'ministry-website': 'Ministry website',
  'third-party': 'Third party',
} as const;

export function generateStaticParams() {
  return causes.map((cause) => ({ slug: cause.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cause = causes.find((c) => c.slug === slug);
  if (!cause) return {};
  return { title: `${cause.name} — the arithmetic`, description: cause.tagline };
}

function parseAmount(raw: string | string[] | undefined): number {
  const value = Number(Array.isArray(raw) ? raw[0] : raw);
  if (!Number.isFinite(value) || value <= 0) return DEFAULT_AMOUNT;
  return Math.min(value, 1_000_000);
}

function Sources({ cause }: { cause: Cause }) {
  return (
    <section className="rounded-xl border border-black/10 bg-white p-6">
      <h2 className="text-2xl font-semibold tracking-tight">Sources</h2>
      <ul className="mt-4 space-y-4">
        {cause.sources.map((source) => (
          <li key={source.id}>
            <a
              href={source.url}
              target="_blank"
              rel="noreferrer noopener"
              className="text-lg text-accent underline decoration-accent/40 hover:decoration-accent"
            >
              {source.label}
            </a>
            <p className="text-base text-gray-700">
              {DOCUMENT_LABELS[source.documentType]} · {source.publisher}
              {source.fiscalYear ? ` · ${source.fiscalYear}` : ''} · read {source.retrieved}
            </p>
            {source.note && <p className="mt-1 text-base text-gray-700">{source.note}</p>}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default async function CausePage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ amount?: string | string[] }>;
}) {
  const [{ slug }, query] = await Promise.all([params, searchParams]);
  const cause = causes.find((c) => c.slug === slug);
  if (!cause) notFound();
  const amount = parseAmount(query.amount);

  return (
    <div className="mx-auto w-full max-w-3xl space-y-8 px-5 py-10">
      <div>
        <Link href="/" className="text-base text-accent underline decoration-accent/40">
          ← All causes
        </Link>
      </div>

      <header>
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-base font-medium text-gray-700">
            {CATEGORY_LABELS[cause.category]}
          </span>
          <VerificationBadge level={cause.verification} />
        </div>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">{cause.name}</h1>
        {cause.legalName && cause.legalName !== cause.name && (
          <p className="mt-1 text-base text-gray-700">
            Legal name: {cause.legalName}
            {cause.ein ? ` · EIN ${cause.ein}` : ''}
          </p>
        )}
        {!cause.legalName && cause.ein && (
          <p className="mt-1 text-base text-gray-700">EIN {cause.ein}</p>
        )}
        <p className="mt-3 text-lg text-gray-800">{cause.whatTheyDo}</p>
        <p className="mt-3 text-base text-gray-700">{cause.countries.join(' · ')}</p>
        <p className="mt-4 text-base text-gray-800">
          {VERIFICATION_MEANING[cause.verification]}
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-4">
          <a
            href={cause.giveUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex min-h-[44px] items-center rounded-lg bg-accent px-6 text-lg font-medium text-white hover:bg-accent/90"
          >
            Give on {new URL(cause.giveUrl).hostname.replace(/^www\./, '')}
          </a>
          <a
            href={cause.siteUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="text-base text-gray-700 underline decoration-gray-400 hover:text-ink"
          >
            Ministry site
          </a>
        </div>
      </header>

      <ImpactSection cause={cause} amount={amount} />

      <Scorecard cause={cause} />

      <section className="rounded-xl border border-flag/20 bg-flag-soft p-6">
        <h2 className="text-2xl font-semibold tracking-tight text-flag">
          What we have not verified
        </h2>
        <ul className="mt-4 list-disc space-y-3 pl-5">
          {cause.notVerified.map((item) => (
            <li key={item} className="text-base text-gray-800">
              {item}
            </li>
          ))}
        </ul>
      </section>

      {cause.accreditations.length > 0 && (
        <section className="rounded-xl border border-black/10 bg-white p-6">
          <h2 className="text-2xl font-semibold tracking-tight">Accreditation seen</h2>
          <ul className="mt-3 space-y-2">
            {cause.accreditations.map((item) => (
              <li key={item.label} className="text-base text-gray-800">
                {item.label}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-base text-gray-700">
            Displayed by the ministry on its own pages. We have not re-checked each seal with the
            accrediting body.
          </p>
        </section>
      )}

      {cause.notes && cause.notes.length > 0 && (
        <section className="rounded-xl border border-black/10 bg-white p-6">
          <h2 className="text-2xl font-semibold tracking-tight">Worth knowing</h2>
          <ul className="mt-3 list-disc space-y-3 pl-5">
            {cause.notes.map((note) => (
              <li key={note} className="text-base text-gray-800">
                {note}
              </li>
            ))}
          </ul>
        </section>
      )}

      {cause.portfolio && cause.portfolio.length > 0 && (
        <section className="rounded-xl border border-black/10 bg-white p-6">
          <h2 className="text-2xl font-semibold tracking-tight">
            Where the money goes ({cause.portfolio.length} partners)
          </h2>
          <ul className="mt-4 space-y-4">
            {cause.portfolio.map((partner) => (
              <li key={partner.name}>
                <p className="text-lg font-medium">
                  {partner.name} <span className="text-gray-700">· {partner.place}</span>
                </p>
                <p className="text-base text-gray-800">{partner.work}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      <Sources cause={cause} />
    </div>
  );
}
