import type { Cause } from '@/lib/types';

export const sinapis: Cause = {
  slug: 'sinapis',
  name: 'Sinapis',
  legalName: 'Sinapis Group',
  ein: '27-1549182',
  tagline:
    'East African business accelerator with the best outcome survey in this category and no published financial statements at all.',
  category: 'livelihood',
  countries: ['Kenya', 'Rwanda', 'Uganda'],
  whatTheyDo:
    'Sinapis is a business accelerator, not a charity that gives things away. It puts small and growing businesses — usually 5 to 250 employees — through paid training programmes in business fundamentals, unit economics, governance and fundraising, coaches their founders, and connects them to investors. It began in 2010 as a Kenyan startup accelerator and runs its own programmes in Kenya, Uganda and Rwanda, with licensed partners delivering its curriculum in Brazil, Burundi, Cameroon, Egypt, Ghana, Liberia, Mexico, Mongolia and Mozambique. The staff list is almost entirely East African, with country managers in Uganda and Rwanda; the chief executive is Matthew Rohrs.',
  accreditations: [],
  verification: 'self-reported',
  biblicalAlignment: {
    mandate:
      'The ministry is named after the parable it is built on: the smallest seed becomes a plant large enough that other things live in its shade, which is what a business does for the people it employs. Proverbs is unsentimental about where provision comes from — toil produces it and talk does not — and equally unsentimental about how a business must be run, because a false balance is an abomination to the Lord. Sinapis teaches both halves, and its own figure for how many alumni refuse bribes is an attempt to measure the second.',
    scriptures: [
      {
        ref: 'Mark 4:30–32',
        text:
          'It is like a grain of mustard seed, which, when sown on the ground, is the smallest of all the seeds on earth, yet when it is sown it grows up and becomes larger than all the garden plants and puts out large branches, so that the birds of the air can make nests in its shade.',
      },
      {
        ref: 'Proverbs 14:23',
        text: 'In all toil there is profit, but mere talk tends only to poverty.',
      },
      {
        ref: 'Proverbs 11:1',
        text: 'A false balance is an abomination to the LORD, but a just weight is his delight.',
      },
    ],
    concerns: [
      'Sinapis publishes no financial statements, no annual report financials and no Form 990 on its own site. The path that looks like a financials page, /finance, is a blog category. The only public numbers are the IRS figures collected by ProPublica, which stop at the 2023 tax year and give total expenses of $2,513,731 with no split between programme, administration and fundraising. For an organisation asking for donations this is the most serious gap in this batch.',
      'Every impact figure is cumulative since 2010 or 2011 and drawn from surveys of alumni. There is no published response rate, no description of who was surveyed, no independent verification, and no annual figure of any kind. Alumni who did well are more likely to answer a survey than alumni who went under, which biases every percentage upward by an unknown amount.',
      'The site and the impact report do not agree on the ministry\'s own size or age. The about page says work "began in 2010" and describes "over 1,000 alumni"; the impact report says "Since 2011, we have served 4,080 entrepreneurs". Those are not roundings of each other.',
      'Clients here are businesses with 5 to 250 employees that can pay for training. That is a real and underserved part of an African economy, and it is not the poorest part of it. A donor who thinks they are funding the destitute is funding the missing middle instead, which is a defensible thing to fund and a different thing.',
      'We found no statement of faith. The Christian identity is in the name, the mustard-seed framing, the phrase "profitable Kingdom business" and a claim to equip entrepreneurs "spiritually" — but nothing published says what is taught.',
    ],
  },
  roi: {
    levers: ['local-workers', 'local-cost-base', 'multiplication'],
    reason:
      'The mechanism Sinapis is selling is employment: a trained founder hires people, and the ministry pays for neither the wages nor the capital. Its cumulative claim is 16,328 jobs created by 4,080 alumni, about four jobs each, plus $120 million of investment capital its alumni raised from investors over 15 years — money that came from capital markets, not from donors. Staff are East African and based in the three countries where the programmes run, and in the partner markets the curriculum is delivered by other organisations at their own cost. The limit is that none of this can be priced. Sinapis publishes no programme spending figure and no annual outcome count, so there is nothing here to divide.',
  },
  ministryClaims: [
    {
      quote:
        'At Sinapis, we empower entrepreneurs professionally and spiritually using training and a global support network so they can grow to the next level and transform the world around them.',
      sourceId: 'si-about',
    },
    {
      quote:
        'The word sinapis refers to the mustard seed that Jesus spoke about, which starts out small yet grows to be great and support the life around it (Mark 4:31-32).',
      sourceId: 'si-about',
    },
    {
      quote:
        'Since 2011, we have served 4,080 entrepreneurs who are launching and growing businesses in frontier markets.',
      sourceId: 'si-impact-25',
    },
    {
      quote: 'In East Africa, only 40% of businesses survive beyond three years. However…',
      sourceId: 'si-impact-25',
    },
    {
      quote: '88% of Sinapis companies are still in business three years after our engagement with them',
      sourceId: 'si-impact-25',
    },
    {
      quote: '66% of alumni say Sinapis saved their business from failure',
      sourceId: 'si-impact-25',
    },
    {
      quote:
        '83% of alumni refuse to give or accept bribes as a direct result of what they learned at Sinapis',
      sourceId: 'si-impact-25',
    },
    {
      quote: '47% compound annual growth rate (CAGR) in revenue across Sinapis alumni',
      sourceId: 'si-impact-25',
    },
    {
      quote: '$120M in investment capital raised by alumni over the past 15 years',
      sourceId: 'si-impact-25',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 2,
      note:
        'The name is a parable of Jesus, the operating phrase is "profitable Kingdom business", the stated aim includes equipping entrepreneurs spiritually, and alumni are described as funding local churches. That is more than a faith label. It falls short of a 3 because there is no statement of faith and nothing published describes the spiritual content of the curriculum.',
    },
    localLeadership: {
      value: 3,
      note:
        'Founded as a Kenyan accelerator and staffed almost entirely by East Africans, with Ugandan and Rwandan country managers, Kenyan operations leadership and local business advisers doing the coaching. The chief executive and part of the board appear to be American, and fundraising is US-based.',
    },
    financialTransparency: {
      value: 1,
      note:
        'Nothing is published by Sinapis itself — no audit, no annual report financials, no 990, no accreditation, and the page that looks like a financials page is a blog tag. IRS data through ProPublica is the only reason we can state a size at all, and it stops at 2023 and gives no functional split. A named board is the one point in favour.',
    },
    outcomeEvidence: {
      value: 2,
      note:
        'Paradoxically the strongest outcome reporting in this category and still not good. Sinapis is the only ministry here that publishes a business survival rate, a revenue growth rate and a behavioural measure, and it compares its 88% survival against a 40% regional baseline — which is the right instinct. But every figure is cumulative, self-surveyed, unaudited, and carries no response rate, and survivor bias runs in exactly the direction that flatters it.',
    },
    costEvidence: {
      value: 0,
      note:
        'Neither half of a division exists. No programme spending figure is published anywhere, and no outcome count is attached to a fiscal year. A finding, not an absence — we went looking and the documents are not there.',
    },
  },
  notVerified: [
    'Anything at all about how the money is spent. No audited statements, no annual report financials, no Form 990 on the site. ProPublica\'s extract of the 2023 return gives revenue of $2,422,062 and total expenses of $2,513,731 against assets of $910,797, and no programme-versus-overhead split. Two fiscal years have since closed with nothing published.',
    'How the 88% three-year survival rate was measured, who was in the sample and how many alumni did not respond. This is the ministry\'s headline claim and it rests on an alumni survey with no published methodology.',
    'Whether the 40% East African baseline the 88% is compared against is measured the same way, and where it comes from. No source is given for it.',
    'Whether alumni are 1,000 or 4,080, and whether work began in 2010 or 2011. The site and the impact report disagree on both.',
    'What share of the 16,328 jobs are full-time, and whether a job counted once is counted again in a later year.',
    'What the $120 million of alumni investment capital consists of — equity, debt, grants — and whether Sinapis had any role in raising it beyond training the founders.',
    'How much of the programme cost the entrepreneurs pay themselves. Sinapis charges for its training, which would change what a donated dollar actually buys, and no fee income figure is published.',
    'What the spiritual component of the training is. "Professionally and spiritually" is the whole of the published description.',
  ],
  notes: [
    'We built no cost per outcome here and could not have done so honestly. There is no programme spending figure in existence publicly, and every count spans 15 years. Dividing an IRS total-expense figure from 2023 by a cumulative jobs number from 2025 would produce something that looks like a price and means nothing.',
    'The genuinely interesting thing about Sinapis is that its clients pay and its alumni raise commercial capital. $120 million of investment over 15 years is money that entered these economies from investors rather than donors, and the ministry\'s claim is that its training is what made the businesses investable. That is the most plausible multiplication story in this category — and the one with the least published evidence behind it.',
    'The country list on this page covers only the three programmes Sinapis runs itself. Its curriculum also runs through licensed partners in Brazil, Burundi, Cameroon, Egypt, Ghana, Liberia, Mexico, Mongolia and Mozambique, on those partners\' budgets.',
    'Jobs created, dependents supported and lives touched through supply chains are stacked in the impact report as 16,328, 81,642 and 437,379. The second and third are estimates built on the first by multiplying out household and supply-chain assumptions that are never stated. Only the first is a count of anything.',
  ],
  siteUrl: 'https://www.sinapis.org/',
  giveUrl: 'https://www.sinapis.org/give',
  sources: [
    {
      id: 'si-site',
      label: 'Homepage',
      url: 'https://www.sinapis.org/',
      publisher: 'Sinapis',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'si-about',
      label: 'About Sinapis',
      url: 'https://www.sinapis.org/about',
      publisher: 'Sinapis',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note:
        'Source of the mission sentence, the mustard-seed explanation, the "over 1,000 alumni" figure, the 2010 founding and the list of directly managed versus partner countries.',
    },
    {
      id: 'si-team',
      label: 'Meet Our Team',
      url: 'https://www.sinapis.org/meet-our-team',
      publisher: 'Sinapis',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Staff and board are named here, which is how we assessed local leadership. Roughly fifty staff, almost all East African, with Uganda and Rwanda country managers.',
    },
    {
      id: 'si-impact-25',
      label: '2025 Impact Report',
      url: 'https://cdn.prod.website-files.com/60d4a6d22e9c55a0e324f923/6a4592dabd7707fd4f3c3aba_Sinapis%20Impact%20Report%202025%20Digital%20Sharing.pdf',
      publisher: 'Sinapis',
      documentType: 'annual-report',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note:
        'Contains no financial statements of any kind — it is an impact report, not an annual report. All counts are cumulative and drawn from alumni surveys. The figures sit in a heavily designed layout, so the quoted percentages were reassembled from text extracted out of interleaved columns.',
    },
    {
      id: 'si-propublica',
      label: 'IRS filings for Sinapis Group, EIN 27-1549182',
      url: 'https://projects.propublica.org/nonprofits/organizations/271549182',
      publisher: 'ProPublica Nonprofit Explorer',
      documentType: 'third-party',
      retrieved: '2026-09-18',
      note:
        'The only public financial data on this ministry. Latest available tax year is 2023: revenue $2,422,062, total functional expenses $2,513,731, assets $910,797. ProPublica does not publish the programme/administration split.',
    },
  ],
};
