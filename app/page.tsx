import Link from 'next/link';
import { CauseExplorer } from '@/components/CauseExplorer';
import { causes } from '@/data/causes';

export default function HomePage() {
  const withCostModel = causes.filter((cause) => cause.costModel).length;

  return (
    <div className="mx-auto w-full max-w-5xl px-5 py-10">
      <section className="max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Name an amount. See the furthest it goes, with the division shown.
        </h1>
        <p className="mt-5 text-lg text-gray-700">
          Christian ministries advertise impact in round numbers. This directory takes their audited
          spending, divides it by the outcomes they report, and prints both halves of the sum next to
          the document they came from. Where a ministry has not published the numbers, the space
          stays empty instead of getting filled with a guess.
        </p>
        <p className="mt-4 text-lg text-gray-700">
          {withCostModel} of {causes.length} causes here have both halves published. That ratio is
          the real state of the field, and it is the reason this exists.
        </p>
      </section>

      <section className="mt-10">
        <CauseExplorer causes={causes} />
      </section>

      <section className="mt-12 max-w-3xl border-t border-black/10 pt-8">
        <h2 className="text-2xl font-semibold tracking-tight">Small gifts, added up honestly</h2>
        <p className="mt-3 text-lg text-gray-700">
          A small gift rarely buys a whole outcome, so the cards say how many gifts that size it
          takes instead of rounding up to one. That is the widow’s two coins arithmetic: individually
          small, jointly decisive, and worth counting accurately.
        </p>
        <p className="mt-3 text-lg text-gray-700">
          And the furthest-going dollar is not automatically the best one. Cheap outcomes are cheap
          partly because they are simple; a heart operation will never cost what a tract costs. The
          ordering here is arithmetic, and arithmetic is not discernment.
        </p>
        <p className="mt-3 text-lg text-gray-700">
          <Link href="/methodology" className="text-accent underline">
            How we score, and what we refuse to score
          </Link>
        </p>
      </section>
    </div>
  );
}
