import type { Cause } from '@/lib/types';

export const orphanGrainTrain: Cause = {
  slug: 'orphan-grain-train',
  name: 'Orphan Grain Train',
  legalName: 'Orphan Grain Train, Inc.',
  ein: '31-1614650',
  tagline:
    'Volunteers in Nebraska pack shipping containers of food, clothing and medical equipment for 23 countries.',
  category: 'relief',
  countries: [
    'Ethiopia',
    'Ghana',
    'Guatemala',
    'Georgia',
    'Haiti',
    'Jamaica',
    'Latvia',
    'Liberia',
    'Madagascar',
    'Malawi',
    'Peru',
    'Philippines',
    'Romania',
    'South Sudan',
    'Ukraine',
    'Zambia',
    'United States',
  ],
  whatTheyDo:
    'Orphan Grain Train is a Lutheran volunteer movement that collects donated goods at branch warehouses across the United States, sorts and packs them, and ships them out — 125 overseas containers to 23 countries and 165 domestic semi-loads in its 2025–26 fiscal year. Cargo is clothing, school supplies, medical equipment and meals, including its own Mercy Meals packing programme. It also runs disaster relief, which in 2025–26 meant Jamaica after a hurricane and floods, storms and wildfires across four US states. Almost the entire operation is unpaid: 179,368 volunteer hours against payroll of under $815,000.',
  accreditations: [],
  verification: 'self-reported',
  biblicalAlignment: {
    mandate:
      'Isaiah 58 makes sharing bread and covering the naked the substance of true religion, and Matthew 25 makes those same acts the evidence Christ says he will look for. Orphan Grain Train’s own mission statement lands in the same place with unusual plainness: sometimes Christ’s character “expresses itself as a word well spoken, sometimes as a bandage well applied, and sometimes as a child well fed.”',
    scriptures: [
      {
        ref: 'Isaiah 58:7',
        text: 'Is it not to share your bread with the hungry and bring the homeless poor into your house; when you see the naked, to cover him, and not to hide yourself from your own flesh?',
      },
      {
        ref: 'Matthew 25:35–36',
        text: 'For I was hungry and you gave me food, I was thirsty and you gave me drink, I was a stranger and you welcomed me, I was naked and you clothed me, I was sick and you visited me, I was in prison and you came to me.',
      },
      {
        ref: 'Galatians 6:10',
        text: 'So then, as we have opportunity, let us do good to everyone, and especially to those who are of the household of faith.',
      },
    ],
    concerns: [
      'No financial statements are published at all. The financial page lists a 2025–26 Financial Report and a 2025–26 Form 990 as text with no link, followed by “A Hard Copy of the Annual Report and 990 are available upon request”. Only the annual report, which contains no money, is downloadable. For an organisation reporting close to $48 million of annual expenses, that is the single most serious transparency gap in this directory.',
      'The gift-in-kind question is unavoidable here and the ministry gives no way to answer it. The most recent IRS data shows $47,663,302 of total expenses against payroll of $814,705 — officer compensation $94,572, other salaries $677,302, payroll taxes $42,831. An operation that large with a payroll that small is, arithmetically, mostly donated goods and freight, and the value of donated goods is set by the ministry receiving them. Until the financial report is published, nobody outside can see what that valuation is or how it was reached.',
      'The 97.72% claim rests on that unpublished basis. If the denominator of “all donations” includes tens of millions of self-valued donated goods, the 2.28% overhead figure is not comparable to a cash ratio from an organisation that raises and spends money. It is not a false claim; it is an unverifiable one.',
      'Most of this work is not overseas. 165 of the 290 shipments in 2025–26 were domestic US deliveries — food banks, homeless shelters, Native American reservations, Appalachian Kentucky, Texas border mission sites. That is real relief and it is well done, but a donor giving because a dollar goes further in a poor country should know the majority of shipments stay in the highest-cost country on earth.',
      'Free imported clothing and goods can displace the local traders who sell the same things. Nothing in the annual report addresses how receiving partners weigh a container of donated goods against buying locally.',
    ],
  },
  roi: {
    levers: ['volunteer-leverage', 'existing-network'],
    reason:
      'The leverage here is labour, not geography. 179,368 volunteer hours were given in one year against a payroll of about $815,000, so a very small amount of paid coordination moves a very large amount of unpaid sorting, packing and loading. The second lever is the receiving end: containers are consigned to Lutheran churches, hospitals and institutions that already exist in each country, so nothing is spent building a distribution network. The freight cost is the honest counterweight — the ministry itself puts an ocean container at $7,000 to $24,000, an average of about $13 a box, and that is a real cash cost paid to move goods from a rich country to a poor one.',
  },
  ministryClaims: [
    {
      quote:
        'One 40-ft.-long ocean-going freight container will cost between $7,000 and $24,000 to ship, an average of $13 for each box of relief supplies shipped.',
      sourceId: 'ogt-fast-facts',
      impliedCostPerOutcome: 13,
      impliedOutcome: 'box of relief supplies shipped',
    },
    {
      quote:
        '97.72% of all donations go toward Orphan Grain Train mission projects. Only 2.28% of donations go toward administrative and fundraising expenses!',
      sourceId: 'ogt-fast-facts',
    },
    {
      quote:
        'During the 2025-26 fiscal year, volunteers contributed a total of 179,368.15 hours. Valued at $12 per hour, this represents more than $2.1 million in service freely given to support our mission.',
      sourceId: 'ogt-annual-26',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 3,
      note: 'The mission statement is Christ-centred without hedging — “In loving response to Christ, the Servant” — the site’s own title line says the work is about “bringing Christ’s name and character to needy people”, and the disaster relief section describes each shipment as “the reminder of Christ’s love and care”. This is a confessional Lutheran movement and it says so.',
    },
    localLeadership: {
      value: 1,
      note: 'Goods are consigned to institutions in each receiving country, which is a form of local delivery. But the organisation itself is a Nebraska operation with US branch warehouses and a US board, the work it does is packing and shipping, and no receiving partner is named anywhere.',
    },
    financialTransparency: {
      value: 0,
      note: 'A finding, not an absence. Orphan Grain Train publishes no audited statements, no Form 990 and no functional expense split. Its own financial page lists the financial report and the 990 as available on request only. Everything we know about the money comes from the IRS extract on ProPublica, which is two fiscal years behind the annual report.',
    },
    outcomeEvidence: {
      value: 2,
      note: 'The activity counts are specific, consistent between the annual report and the fast-facts page, and broken down by country and shipment: 290 shipments, 125 containers, 23 countries, 8.8 million meals, 179,368.15 volunteer hours. They are counts of things shipped rather than of people helped, which is a limitation but at least an auditable kind of number.',
    },
    costEvidence: {
      value: 0,
      note: 'There is a denominator and no numerator. Not a single published spending figure for the year the counts describe, so no division is possible at any level.',
    },
  },
  notVerified: [
    'Every financial figure for the fiscal year the outcomes come from. The annual report covers 1 June 2025 to 31 May 2026; the most recent public financial data is the IRS extract for the year ended May 2024. We did not carry those figures forward, because two years is two years.',
    'How much of the expense base is donated goods rather than cash, and how those goods are valued. This is the central integrity question for any ministry shipping gifts-in-kind, and here it simply cannot be answered from anything published.',
    'The 97.72% programme claim. Without a functional expense statement there is nothing to check it against.',
    'How many people received anything. The counts are shipments, containers, meals and volunteer hours. “8.8 million meals” is the closest thing to a person-facing number and nothing says how many people ate them or over what period.',
    'Who receives the containers. Sixteen countries are listed with shipment counts from the Norfolk warehouse, but no receiving organisation, hospital or congregation is named, and nothing states whether recipients report back on what arrived.',
    'What the domestic and overseas split costs. 165 of 290 shipments were domestic; no spending figure separates the two, so a donor cannot tell what share of their gift left the United States.',
    'The volunteer hour valuation of $12 per hour is the ministry’s own choice of rate and is not in any audited figure. We report it as a claim.',
    'Charity Navigator ratings are quoted on the fast-facts page — a 100% score and “‘4 Stars’ … for fourteen years in a row” — but we did not verify them with Charity Navigator, so no accreditation is listed on this page.',
  ],
  notes: [
    'We did not build a cost per outcome, and the reason is the whole story of this cause. There is a good denominator — 290 shipments, 125 containers, 23 countries, 8.8 million meals — and no numerator for the same period. Dividing the May 2024 IRS expense total by 2025–26 shipment counts would produce a number that looks like arithmetic and means nothing.',
    'For scale only, from the IRS extract: for the year ended May 2024, revenue $48,945,569 (of which $48,511,066 contributions), total functional expenses $47,663,302, net assets $33,469,884. The three prior years run $50.5m, $40.5m and $41.9m of expenses, so this is a steady operation of roughly this size.',
    'Payroll across the whole organisation in that year was about $814,705 against $47,663,302 of expenses — 1.7%. Read that alongside 179,368 volunteer hours and the shape of the ministry is clear: it is a volunteer movement with a small paid core, and the dollar figures are dominated by goods and freight rather than people.',
    'The 2025–26 disaster response covered Jamaica after a hurricane, flooding in North Carolina and Texas, and wildfires in western Nebraska that burned close to 600,000 acres — sheet rock, roofing, hygiene supplies, fencing and 467 bales of hay. This is materially different work from the container programme and is not separately costed.',
    'Since 1992 the ministry reports 5,356 shipments, 74 countries served and more than 4.7 million volunteer hours.',
  ],
  siteUrl: 'https://www.ogt.org/',
  giveUrl: 'https://orphangraintrain-bloom.kindful.com/',
  sources: [
    {
      id: 'ogt-site',
      label: 'Homepage',
      url: 'https://www.ogt.org/',
      publisher: 'Orphan Grain Train',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'ogt-fast-facts',
      label: 'Fast Facts',
      url: 'https://www.ogt.org/fast-facts/',
      publisher: 'Orphan Grain Train',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Source of the 97.72% claim, the freight cost per box and the Charity Navigator claims.',
    },
    {
      id: 'ogt-financials',
      label: 'Financial Information',
      url: 'https://www.ogt.org/financial-information/',
      publisher: 'Orphan Grain Train',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Lists the board, then names the 2025-26 Financial Report and the 2025-26 Form 990 as unlinked items with a note that hard copies are available on request. Only the annual report is downloadable.',
    },
    {
      id: 'ogt-annual-26',
      label: 'Annual Report, 1 June 2025 – 31 May 2026',
      url: 'https://www.ogt.org/wp-content/uploads/2026/09/2026-Annual-Report.pdf',
      publisher: 'Orphan Grain Train',
      documentType: 'annual-report',
      retrieved: '2026-09-18',
      fiscalYear: 'FY2026',
      note: 'Source of every count on this page, the country shipment list and the mission statement. Contains no financial statements of any kind.',
    },
    {
      id: 'ogt-propublica',
      label: 'IRS filings for Orphan Grain Train Inc, EIN 31-1614650',
      url: 'https://projects.propublica.org/nonprofits/organizations/311614650',
      publisher: 'ProPublica Nonprofit Explorer',
      documentType: 'third-party',
      retrieved: '2026-09-18',
      fiscalYear: 'FY ended May 2024',
      note: 'The only public financial data we could find. Structured IRS extract, not the return itself — ProPublica blocks automated PDF downloads. Two fiscal years behind the annual report.',
    },
  ],
};
