import { SourceLink } from './SourceLink';
import { BENCHMARK_COUNTRY, COST_BASE_SOURCE } from '@/data/cost-base';
import { formatCount } from '@/lib/impact';
import { costBaseHeadline, costBaseRows, formatMultiple } from '@/lib/roi';
import { ROI_LEVER_EXPLANATIONS, ROI_LEVER_LABELS, type Cause } from '@/lib/types';

export function RoiSection({ cause }: { cause: Cause }) {
  const { roi } = cause;
  const rows = costBaseRows(cause.countries);
  const headline = costBaseHeadline(cause.countries);

  return (
    <section className="rounded-xl border border-accent/20 bg-accent-soft/40 p-6">
      <h2 className="text-2xl font-semibold tracking-tight">Why a dollar goes further here</h2>

      {headline && (
        <p className="mt-3 text-2xl font-semibold text-accent">
          Income per person in {headline.country} is about {formatMultiple(headline.multiple)} below
          the {BENCHMARK_COUNTRY}.
        </p>
      )}

      <p className="mt-3 text-lg text-gray-800">{roi.reason}</p>

      <div className="mt-6">
        <h3 className="text-lg font-semibold">What creates the leverage</h3>
        <ul className="mt-3 space-y-3">
          {roi.levers.map((lever) => (
            <li key={lever} className="text-base text-gray-800">
              <span className="font-medium">{ROI_LEVER_LABELS[lever]}</span> —{' '}
              {ROI_LEVER_EXPLANATIONS[lever]}
            </li>
          ))}
        </ul>
      </div>

      {roi.comparison && (
        <div className="mt-6 rounded-lg bg-white p-5">
          <h3 className="text-lg font-semibold">Against the high-cost equivalent</h3>
          <dl className="mt-3 space-y-2">
            <div className="flex flex-wrap items-baseline gap-x-3">
              <dt className="text-base text-gray-700">Here</dt>
              <dd className="font-mono text-lg">{roi.comparison.here}</dd>
            </div>
            <div className="flex flex-wrap items-baseline gap-x-3">
              <dt className="text-base text-gray-700">{BENCHMARK_COUNTRY}</dt>
              <dd className="font-mono text-lg">{roi.comparison.benchmark}</dd>
              <dd className="basis-full sm:basis-auto">
                <SourceLink cause={cause} id={roi.comparison.benchmarkSourceId} />
              </dd>
            </div>
            <div className="flex flex-wrap items-baseline gap-x-3 border-t border-black/10 pt-2">
              <dt className="text-base font-medium text-ink">Difference</dt>
              <dd className="font-mono text-lg font-semibold">
                about {formatMultiple(roi.comparison.multiple)}
              </dd>
            </div>
          </dl>
          <p className="mt-3 text-base text-gray-800">{roi.comparison.caveat}</p>
        </div>
      )}

      <div className="mt-6 border-t border-accent/20 pt-5">
        <h3 className="text-lg font-semibold">The cost base, country by country</h3>
        {rows.length > 0 ? (
          <>
            <table className="mt-3 w-full text-base">
              <thead>
                <tr className="border-b border-black/10 text-left text-gray-700">
                  <th className="pb-2 font-medium">Country</th>
                  <th className="pb-2 text-right font-medium">Income per person</th>
                  <th className="pb-2 text-right font-medium">Below {BENCHMARK_COUNTRY}</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.country} className="border-b border-black/5">
                    <td className="py-2 text-gray-800">
                      {row.country}
                      {row.year !== '2025' && (
                        <span className="text-gray-700"> ({row.year} — latest available)</span>
                      )}
                    </td>
                    <td className="py-2 text-right font-mono text-gray-800">
                      ${formatCount(row.gniPerCapita)}
                    </td>
                    <td className="py-2 text-right font-mono text-gray-800">
                      {row.country === BENCHMARK_COUNTRY ? '—' : formatMultiple(row.multiple)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-3 text-base text-gray-700">
              GNI per capita, Atlas method, current US dollars ·{' '}
              <a
                href={COST_BASE_SOURCE.url}
                target="_blank"
                rel="noreferrer noopener"
                className="text-accent underline decoration-accent/40 hover:decoration-accent"
              >
                {COST_BASE_SOURCE.publisher}
              </a>{' '}
              · read {COST_BASE_SOURCE.retrieved}
            </p>
            <p className="mt-2 text-base text-gray-700">
              This is a cost-of-living ratio, not a measure of how well the ministry spends. It
              tells you what a local wage or a bag of cement costs, and nothing about whether the
              work is any good — the rest of this page is for that.
            </p>
          </>
        ) : (
          <p className="mt-2 text-base text-gray-700">
            {cause.name} reports regions rather than countries, so there is no national figure to
            put here.
          </p>
        )}
      </div>
    </section>
  );
}
