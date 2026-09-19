import type { Cause } from '@/lib/types';

export const seedEffect: Cause = {
  slug: 'seed-effect',
  name: 'Seed Effect',
  legalName: 'Seed Effect',
  ein: '46-0639137',
  tagline:
    'Savings groups and discipleship in northern Uganda and South Sudan. Members have saved $14.6 million of their own money; every count published is a lifetime total.',
  category: 'livelihood',
  countries: ['South Sudan', 'Uganda'],
  whatTheyDo:
    'Seed Effect runs a three-year programme for savings groups in eight districts of northern Uganda and in South Sudan, much of it among refugees and returnees. Members save weekly into a group fund, borrow from it, and repay with interest that stays in the group; alongside that they get business training — Seed Effect calls it Plan for a Better Business — literacy and numeracy work, and explicit Christian discipleship delivered in partnership with local churches. It employed 115 staff in 2025 and is run from Dallas.',
  accreditations: [],
  verification: 'self-reported',
  biblicalAlignment: {
    mandate:
      "Scripture tells a poor man to save, not only a rich one: Proverbs sends the sluggard to watch an ant store its provision in summer, and that is precisely what a savings group is — a structure for storing provision in summer. Paul makes providing for one's own household a test of faith, which is the dignity argument this ministry is built on. And the seed image the ministry takes its name from is Paul's: God supplies seed to the sower and multiplies it, which is a promise about provision that compounds rather than provision that is consumed.",
    scriptures: [
      {
        ref: 'Proverbs 6:6–8',
        text: 'Go to the ant, O sluggard; consider her ways, and be wise. Without having any chief, officer, or ruler, she prepares her bread in summer and gathers her food in harvest.',
      },
      {
        ref: '1 Timothy 5:8',
        text: 'But if anyone does not provide for his relatives, and especially for members of his household, he has denied the faith and is worse than an unbeliever.',
      },
      {
        ref: '2 Corinthians 9:10',
        text: 'He who supplies seed to the sower and bread for food will supply and multiply your seed for sowing and increase the harvest of your righteousness.',
      },
    ],
    doctrine: {
      label:
        'Core Beliefs, four statements. The decisive one: "We believe broken relationships are the root of poverty and so, introducing people to Jesus is essential for true transformation and restoration." Spiritual discipleship is named in the mission statement itself, not added to it.',
      sourceId: 'se-about',
    },
    concerns: [
      'Seed Effect publishes that 40% of members who were not born-again Christians on joining have come to know Jesus. We quote it because they say it, and we do not treat it as a measurable outcome — it is not ours to count. It also raises the question this model always raises: the same staff who decide whether a savings group runs in your village also deliver the discipleship, so a member has a material reason to say yes. Seed Effect names discipleship openly in its mission, which is more honest than burying it, and the incentive is still there.',
      'The headline "average return of 30% on their savings" is presented as though it came from outside the group. It did not. In a savings group the interest one member earns is interest another member paid, so a 30% return to savers is a 30%-or-higher cost to borrowers in the same room. The reports never state the borrowing rate, and a donor should know that this figure is a transfer between poor neighbours and not new wealth entering the village.',
      'Every impact number Seed Effect publishes is a lifetime total. The per-branch table carries the footnote "*Group totals per branch reflect lifetime totals, not active groups," and the branch figures sum exactly to the 123,630 headline. There is no count of members served in the year, no count of active groups, and therefore no honest denominator for a cost per member.',
      'The randomised evidence on credit for poor households is mixed, and group lending carries a specific harm: a member who cannot repay owes people she lives beside. Seed Effect publishes no drop-out rate, no default rate and no figure for savings lost.',
      "The audited financial statements for the year to June 2025 are posted as a scanned image with no extractable text, so the figures used here come from the annual report's financial summary page rather than from the audit itself.",
    ],
  },
  roi: {
    levers: ['local-cost-base', 'local-workers', 'existing-network', 'multiplication'],
    reason:
      "The capital in this model is not donated. Members have saved $14,651,559 and lent $10,247,492 to each other over the ministry's lifetime, starting from a position where — Seed Effect reports — they had less than $7 in savings on joining. What a donor funds is the three-year training and the staff who deliver it: 115 people, employed in northern Uganda and South Sudan, where income per person is a fraction of the United States. Delivery runs through local churches that already exist, and the group keeps saving and lending after the three years end, which is where the multiplication actually is. What the donor does not buy is the $14.6 million. That is the members' money and it belongs in their column, not ours.",
  },
  ministryClaims: [
    {
      quote: 'We’re bringing Christ-centered economic empowerment to the hard places.',
      sourceId: 'se-about',
    },
    {
      quote:
        'At Seed Effect, our mission is to plant the seeds that overcome poverty by providing access to economic empowerment, education, and spiritual discipleship in Uganda and South Sudan’s most marginalized communities.',
      sourceId: 'se-about',
    },
    {
      quote: '$90 sends one person through our 3-year program.',
      sourceId: 'se-ar-25',
      impliedCostPerOutcome: 90,
      impliedOutcome: 'person through the three-year programme',
    },
    {
      quote: '$2,250 funds an entire group of 25 new members.',
      sourceId: 'se-ar-25',
    },
    {
      quote:
        '37% of members started a new business, 71% improved how they run an existing one, and 86% of those businesses are still operating six months later.',
      sourceId: 'se-ar-25',
    },
    {
      quote:
        'Of the 45% of Seed Effect members who are not born again Christians at the beginning, 40% have come to know Jesus.',
      sourceId: 'se-ar-25',
    },
    {
      quote:
        'We believe broken relationships are the root of poverty and so, introducing people to Jesus is essential for true transformation and restoration.',
      sourceId: 'se-about',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 3,
      note: 'Spiritual discipleship is inside the mission statement, the core beliefs say introducing people to Jesus is essential rather than incidental, and delivery runs through partnership with local churches. There is no ambiguity here — the only question a reader should weigh is the one in our concerns, about what it means to offer discipleship and savings from the same hand.',
    },
    localLeadership: {
      value: 2,
      note: '115 staff in 2025, overwhelmingly in northern Uganda and South Sudan, delivering through local churches, and the chief executive writes of work "led by the very communities we serve". Marked at 2 rather than 3 because governance, the board and fundraising are in Dallas and Seed Effect publishes no breakdown of national versus expatriate leadership.',
    },
    financialTransparency: {
      value: 2,
      note: "An unusually complete run of documents: annual reports for every year from 2014 to 2025, financial statements for the same span, a Form 990, and an explicit disclosure that the fiscal year moved from January to July in 2024 with a short-year audit covering the gap. Held at 2 because the current audit is a scanned image we could not read, so we took the expense figures from the annual report's summary page instead.",
    },
    outcomeEvidence: {
      value: 1,
      note: 'The only counts published are lifetime, explicitly footnoted as such, so nothing can be tied to a year. The business-training results — 37% started a business, 86% still trading at six months — are the most specific outcome figures in this batch and are entirely self-reported with no sample size, no response rate and a six-month horizon.',
    },
    costEvidence: {
      value: 1,
      note: 'A unit price is advertised, $90 per person for three years, with no published denominator to check it against. Audited spending exists; an annual member count does not. There is a price but no arithmetic.',
    },
  },
  notVerified: [
    'How many members were served in the year. This is the number a cost per member requires and Seed Effect publishes only lifetime totals, with a footnote confirming that is what they are.',
    'What the $90 covers. It is advertised as sending one person through the three-year programme, which works out to exactly the $2,250 quoted for a group of 25, so the figure is internally consistent — but nothing says whether it includes staff, transport, training materials, monitoring or a share of the Dallas office. Program spending for the year was $1,592,760; at $90 a head that would be about 17,700 people put through a three-year programme in a single year, which is arithmetic on their marketing rather than a figure we can stand behind.',
    "Who paid the 30% return that savers earned. It came from other members' interest payments. No borrowing rate is published anywhere.",
    'The drop-out rate, the default rate, and how much member savings has been lost. A programme built on members lending to each other must have all three and publishes none.',
    'The split of the $1,592,760 of program spending between Uganda and South Sudan, and between savings-group work, business training and discipleship.',
    "The 2024–2025 audited statements are a scanned PDF with no text layer, so we could not read the auditor's opinion, the notes or the functional expense schedule. The figures here come from the annual report.",
    'Year-on-year comparison is broken by design: the fiscal year changed in July 2024, with a six-month short year in between. Seed Effect discloses this clearly, and it still means the 2024–2025 figures have no comparable prior year.',
    'Whether the 123,630 members counts distinct people. Over a lifetime total spanning multiple three-year cycles across two countries, a member who moved or rejoined could plausibly appear twice.',
  ],
  notes: [
    "We built no cost per outcome here, and the reason is the footnote. Seed Effect states plainly that its branch totals are lifetime rather than active, which is more honest than most ministries manage — and it means the only denominator on offer spans the organisation's whole history while the spending covers twelve months. Dividing them would produce a number that looked like a price and described nothing.",
    "The members started with less than $7 in savings, by Seed Effect's own account, and the groups now hold $14.6 million in cumulative savings. Whatever else is unproven here, poor households in a refugee-hosting region saved money when given a structure for it, which is the premise the whole savings-group movement rests on.",
    "Seed Effect is small — $2,270,566 of total expenses in the year to June 2025, of which $1,592,760 was programme, $486,249 administration and $191,557 fundraising. Support costs are about 30% of the total, which is high, and the chief executive's letter says why: 2025 was spent deliberately on monitoring and evaluation capacity, systems and staff rather than on growth. Whether that produces better numbers next year is the thing to watch.",
    "The five-year goal is 180,000 members and, in the ministry's words, care for an estimated 1 million children. The second figure is a multiplication of the first by an assumed number of children per member, and that assumption is not published.",
  ],
  siteUrl: 'https://seedeffect.org/',
  giveUrl: 'https://seedeffect.org/donate/',
  sources: [
    {
      id: 'se-site',
      label: 'Homepage',
      url: 'https://seedeffect.org/',
      publisher: 'Seed Effect',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'se-about',
      label: 'About Us, including Core Beliefs',
      url: 'https://seedeffect.org/about-us/',
      publisher: 'Seed Effect',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'The mission statement, the vision and all four core beliefs are on this single page. The separate /core-beliefs and /our-vision paths linked in the navigation return 404.',
    },
    {
      id: 'se-impact',
      label: 'Our Impact',
      url: 'https://seedeffect.org/our-impact/',
      publisher: 'Seed Effect',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'se-financials',
      label: 'Financials',
      url: 'https://seedeffect.org/financials/',
      publisher: 'Seed Effect',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Annual reports and financial statements for every year from 2014 to 2025, a Form 990, and the disclosure that the fiscal year moved from a 1 January to a 1 July start in July 2024 with a short-year audit covering January to June 2024.',
    },
    {
      id: 'se-ar-25',
      label: '2025 Annual Report',
      url: 'https://seedeffect.org/wp-content/uploads/2026/04/SE_AnnualReport_2025_v10_READER.pdf',
      publisher: 'Seed Effect',
      documentType: 'annual-report',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note: 'Source of every figure used here, including the expense breakdown on its financial summary page (program services $1,592,760, general and administration $486,249, fundraising $191,557, total $2,270,566), the 123,630 lifetime members with the branch-level footnote, the member savings and lending totals, the business-training results, the staff count and the $90 and $2,250 gift prices. Several figures sit in a designed layout and were reassembled from text extracted out of interleaved columns.',
    },
    {
      id: 'se-audit-25',
      label: 'Financial statements, year ended 30 June 2025',
      url: 'https://seedeffect.org/wp-content/uploads/2025/11/Seed-Effect-Final-Audit-Report-2024-2025FY.pdf',
      publisher: 'Seed Effect',
      documentType: 'audited-financials',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note: 'Cited for completeness, not relied on: the file is a scanned image with no text layer, so nothing in it could be read or checked. The expense figures on this page come from the annual report instead.',
    },
    {
      id: 'se-propublica',
      label: 'IRS filings for Seed Effect, EIN 46-0639137',
      url: 'https://projects.propublica.org/nonprofits/organizations/460639137',
      publisher: 'ProPublica Nonprofit Explorer',
      documentType: 'third-party',
      retrieved: '2026-09-18',
      note: 'Used to confirm the EIN and the Dallas registration.',
    },
  ],
};
