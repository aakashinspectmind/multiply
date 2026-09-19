import Link from 'next/link';
import { causes } from '@/data/causes';
import {
  SCORE_DIMENSIONS,
  SCORE_DIMENSION_LABELS,
  SCORE_DIMENSION_QUESTIONS,
  VERIFICATION_LABELS,
  VERIFICATION_LEVELS,
  VERIFICATION_MEANING,
} from '@/lib/types';
import { site } from '@/data/site';

export const metadata = {
  title: 'How we score — and what we refuse to score',
};

export default function MethodologyPage() {
  return (
    <div className="mx-auto w-full max-w-3xl space-y-10 px-5 py-10">
      <header>
        <h1 className="text-4xl font-semibold tracking-tight">
          How we score, and what we refuse to score
        </h1>
        <p className="mt-4 text-lg text-gray-800">
          Every figure on this site is a division problem with both halves published. That is the
          whole method, and most of the work is refusing to print numbers we cannot support.
        </p>
      </header>

      <section>
        <h2 className="text-2xl font-semibold tracking-tight">What we will not claim</h2>
        <p className="mt-3 text-lg text-gray-800">
          There is no return on investment on a soul. Scripture is direct about who causes growth:
          one plants, another waters, God gives the increase (1 Corinthians 3:6–7). Nothing here
          measures conversion, discipleship or spiritual fruit, and a ministry that reports large
          numbers of decisions is not thereby a better use of money.
        </p>
        <p className="mt-3 text-lg text-gray-800">
          What can be measured is narrower and still worth measuring: money in, work delivered, and
          whether the ministry tells the truth about both. Faithful stewardship of what we have been
          entrusted with is commanded (Luke 16:10–11). Predicting God’s harvest is not our business.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold tracking-tight">The division we show</h2>
        <p className="mt-3 text-lg text-gray-800">
          Cost per outcome is the ministry’s own reported spending for a fiscal year divided by its
          own reported count of what it delivered in that year. Both numbers link to the document
          they came from. Three things are always true about the result:
        </p>
        <ul className="mt-4 list-disc space-y-3 pl-5 text-lg text-gray-800">
          <li>
            <span className="font-medium">It is an average, not a price.</span> The next gift may buy
            more or less than the last one did. It is not a purchase, and no ministry owes you the
            outcome you divided for.
          </li>
          <li>
            <span className="font-medium">Shared costs are charged to one outcome.</span> A hospital
            that performs surgery also runs clinics and chaplaincy out of the same budget. Charging
            every program dollar to surgeries overstates what a surgery costs — which is why the
            figure is labelled as an upper bound, and why alternate denominators are listed beside
            it.
          </li>
          <li>
            <span className="font-medium">Counts are self-reported.</span> Audits cover the money,
            almost never the outcome count. No cause here has had its outcome numbers checked by
            anyone independent.
          </li>
        </ul>
        <p className="mt-4 text-lg text-gray-800">
          Cost per outcome is also not comparable across different kinds of work. A Bible placed and
          a spinal surgery are not competing purchases, and ranking them against each other would be
          arithmetic doing the work of discernment.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold tracking-tight">
          Why a dollar goes further, and what that does not mean
        </h2>
        <p className="mt-3 text-lg text-gray-800">
          Every cause page names the mechanism that makes the work cheaper than the same work in a
          high-income country — local wages instead of sent staff, a well that keeps producing for
          years, a film that costs nothing to show again, training that multiplies without more
          money. The mechanism is the argument. Any number attached to it is support, not proof.
        </p>
        <p className="mt-3 text-lg text-gray-800">
          The one number we can source everywhere is the cost base: national income per person, from
          the World Bank, against the United States. It is 148 times lower in Malawi and 79 times
          lower in Uganda. That is a real and enormous difference in what a wage, a bag of cement or
          a nurse’s day costs — and it is the honest core of “$1 goes further here.”
        </p>
        <p className="mt-3 text-lg text-gray-800">
          It is also not an efficiency score. A cheap country is not the same as a good ministry, and
          a 148× cost base does not mean your gift accomplishes 148 times as much. Poor countries are
          harder places to work: logistics cost more, equipment is imported at a premium, and
          oversight is thinner. The ratio tells you why the ceiling is higher. Whether a particular
          ministry reaches it is what the rest of its page is about.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold tracking-tight">Whether it is the church’s work</h2>
        <p className="mt-3 text-lg text-gray-800">
          Each cause states the biblical mandate the work sits on, with the passages quoted so you
          can weigh them yourself rather than take our summary for it. This is a judgement about the
          kind of work being done — feeding, healing, translating, sending, defending the
          fatherless — not a measurement of its results.
        </p>
        <p className="mt-3 text-lg text-gray-800">
          We also write down our reservations, including the ones a ministry would rather we left
          out: where a statement of faith is missing, where care could become the price of a hearing,
          where a model is contested among Christians who do this work for a living. A page with no
          reservations listed means we found none, which is rarer than it sounds.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold tracking-tight">Five questions, three points each</h2>
        <p className="mt-3 text-lg text-gray-800">
          Scores are our own reading of public documents — a desk review, not an audit and not a site
          visit. Where we did not look, the score is blank rather than zero.
        </p>
        <dl className="mt-5 space-y-4">
          {SCORE_DIMENSIONS.map((dimension) => (
            <div key={dimension}>
              <dt className="text-lg font-medium">{SCORE_DIMENSION_LABELS[dimension]}</dt>
              <dd className="text-base text-gray-800">{SCORE_DIMENSION_QUESTIONS[dimension]}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section>
        <h2 className="text-2xl font-semibold tracking-tight">How far a review has gone</h2>
        <dl className="mt-4 space-y-4">
          {VERIFICATION_LEVELS.map((level) => (
            <div key={level}>
              <dt className="text-lg font-medium">{VERIFICATION_LABELS[level]}</dt>
              <dd className="text-base text-gray-800">{VERIFICATION_MEANING[level]}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 text-lg text-gray-800">
          Moving a cause up a level takes work we have not done yet: pulling the Form 990 and
          reconciling it against the annual report, asking the ministry to define its outcome units
          in writing, and eventually having someone independent count a sample of what was
          delivered. Until then the badge stays where it is.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold tracking-tight">Money, conflicts, and who we are</h2>
        <p className="mt-3 text-lg text-gray-800">{site.moneyPolicy}</p>
        <p className="mt-3 text-lg text-gray-800">
          We take nothing from the ministries listed and they do not pay to be here. No ministry has
          reviewed its own page. Listing is not endorsement: {causes.length} causes are here, and
          several are listed precisely because their numbers are missing.
        </p>
        <p className="mt-3 text-lg text-gray-800">
          If you are a ministry and a figure here is wrong or out of date, send the document. A
          correction that comes with a source gets published.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold tracking-tight">Known limits of this version</h2>
        <ul className="mt-3 list-disc space-y-3 pl-5 text-lg text-gray-800">
          <li>
            {causes.length} causes, all researched from public web pages and PDFs. Nobody has been
            interviewed and no site has been visited.
          </li>
          <li>
            The directory is weighted toward large ministries that publish annual reports. Small
            indigenous ministries — often the ones with the lowest costs — are the hardest to verify
            and are underrepresented here.
          </li>
          <li>
            The cost base comes from national averages. A ministry working in one poor province of a
            middle-income country faces costs its national figure does not show.
          </li>
          <li>
            Nothing on this site is tax advice. Deductibility depends on giving to a qualifying
            organisation, and giving internationally has its own rules.
          </li>
        </ul>
        <p className="mt-4 text-lg text-gray-800">
          <Link href="/" className="text-accent underline">
            Back to the causes
          </Link>
        </p>
      </section>
    </div>
  );
}
