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
        {/*
         * One paragraph, then the picker. The page used to open with three,
         * including the whole delivered-versus-reached argument, which put the
         * only thing a reader came to do below nine hundred pixels of essay on a
         * phone. That argument now sits under the board, and in full on
         * /methodology.
         */}
        <div className="longform mt-5">
          <p>
            Christian ministries advertise impact in round numbers. This directory takes their
            audited spending, divides it by what they actually delivered, and prints both halves of
            the sum next to the document they came from. Where a ministry has not published the
            numbers, the space stays empty instead of getting filled with a guess.
          </p>
          <p className="text-ink">
            <span className="font-semibold">
              {withCostModel} of {causes.length}
            </span>{' '}
            causes here have both halves published. That ratio is the real state of the field, and it
            is the reason this exists.
          </p>
        </div>
      </section>

      <section className="mt-10">
        <CauseExplorer causes={causes} />
      </section>

      <section className="mt-14 border-t border-black/10 pt-8">
        <h2 className="text-2xl font-semibold tracking-tight">Small gifts, added up honestly</h2>
        <div className="longform mt-3">
          <p>
            A small gift rarely buys a whole outcome, so the board says how many gifts that size it
            takes instead of rounding up to one. That is the widow&rsquo;s two coins arithmetic:
            individually small, jointly decisive, and worth counting accurately.
          </p>
          <p>
            Delivered, not reached — and those are usually different numbers. A ministry&rsquo;s
            headline count is normally its broadest one, so where the figure it leads with counts
            people it reached rather than work its own money paid for, the page divides by the
            narrower number and says plainly that it has done so. The headline stays alongside, with
            its own arithmetic, so you see the whole range rather than our choice inside it.
          </p>
          <p>
            And the furthest-going dollar is not automatically the best one. Cheap outcomes are cheap
            partly because they are simple; a heart operation will never cost what a tract costs. The
            ordering here is arithmetic, and arithmetic is not discernment.
          </p>
          <p>
            <Link href="/methodology">How we score, and what we refuse to score</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
