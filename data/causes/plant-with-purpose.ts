import type { Cause } from '@/lib/types';

export const plantWithPurpose: Cause = {
  slug: 'plant-with-purpose',
  name: 'Plant With Purpose',
  legalName: 'Floresta U.S.A. Incorporated',
  ein: '33-0052976',
  tagline:
    'Plants ten million trees a year with smallholder farmers, and its audited books put the cost at almost exactly the dollar it advertises.',
  category: 'water',
  countries: [
    'Burundi',
    'Democratic Republic of the Congo',
    'Dominican Republic',
    'Ethiopia',
    'Haiti',
    'Malawi',
    'Mexico',
    'Tanzania',
    'Thailand',
  ],
  whatTheyDo:
    'Plant With Purpose works watershed by watershed rather than village by village. Farmers form savings groups — the ministry calls them Purpose Groups — that lend to their own members from their own deposits; alongside that come tree nurseries, erosion control, composting and other regenerative agriculture techniques that cost nothing to repeat once taught, plus a spiritual renewal curriculum delivered through local churches. The stated design is to stay in a watershed for six to ten years and then leave. In the financial year to June 2025 it planted 10,227,457 trees across nine countries, and its 5,559 active and graduated savings groups held $17,446,082 of members’ own equity.',
  accreditations: [],
  verification: 'documents-reviewed',
  biblicalAlignment: {
    mandate:
      'Isaiah’s test of real religion is pouring yourself out for the hungry, and Proverbs blesses the one who shares bread with the poor. Teaching a farmer a technique that raises the yield of his own land is that mandate in its most reproducible form: the knowledge costs nothing to apply again next season, and nothing to pass to a neighbour. The land itself is part of the charge — the ground was given to be worked and kept, and eroded hillsides feed nobody.',
    scriptures: [
      {
        ref: 'Isaiah 58:10',
        text:
          'If you pour yourself out for the hungry and satisfy the desire of the afflicted, then shall your light rise in the darkness and your gloom be as the noonday.',
      },
      {
        ref: 'Proverbs 22:9',
        text: 'Whoever has a bountiful eye will be blessed, for he shares his bread with the poor.',
      },
      {
        ref: 'Genesis 2:15',
        text:
          'The Lord God took the man and put him in the garden of Eden to work it and keep it.',
      },
    ],
    concerns: [
      'The Christian self-description is thinner than the name of the page suggests, and it is framed instrumentally. The “We Are Christian” page says: “Roughly 75% of the world is motivated by their faith.* While we serve people of all faiths, our Christian faith is often a bridge to inspiration, trust, and common ground in the communities where we work.” Faith presented as a bridge, and justified by a statistic about how many people are religious, is a different posture from faith as the reason for the work. We found no statement of faith or doctrinal statement anywhere on the site.',
      'A tree planted is not a tree standing. Plant With Purpose counts seedlings into the ground — 10,227,457 in one year, 82,152,316 since inception — and publishes no survival rate at any interval. The whole cost model on this page, and the ministry’s own $1 offer, price a seedling planted, not a tree alive in year five.',
      'The $1 price is real but the framing flatters. Total expenses were $14,107,766 against those 10.2 million trees, so running the whole organisation cost about $1.38 a tree once fundraising and management are counted. And a tree is not what anyone actually wants: the outcome is a farming family out of poverty, and that has no published price.',
    ],
  },
  roi: {
    levers: ['local-cost-base', 'local-workers', 'multiplication', 'durable-asset'],
    reason:
      'This is the cheap-unit-at-scale case, and the unit is about a dollar. Composting, contour ditching, agroforestry and seed saving cost almost nothing to repeat once a farmer knows them, and nothing at all to teach a neighbour — the technique multiplies without further spending. The savings groups run on the members’ own deposits, so $17.4 million of working capital in those groups is not donor money. Of 471 staff worldwide only 48 are in the United States, so nearly the whole payroll is paid at Burundian, Congolese, Haitian and Tanzanian wage levels. And a tree that survives is a durable asset: it holds soil, recharges groundwater and yields for decades.',
  },
  costModel: {
    outcome: 'tree planted',
    outcomePlural: 'trees planted',
    spend: {
      amount: 10310929,
      basis: 'program-services',
      fiscalYear: '2025',
      sourceId: 'pwp-audit-25',
    },
    count: {
      amount: 10227457,
      label: 'trees planted',
      fiscalYear: '2025',
      sourceId: 'pwp-ar-25',
    },
    attribution: 'all-program-spend',
    caveat:
      'An upper bound, and unusually the upper bound lands almost exactly on the ministry’s own advertised price. The same programme spending also ran 5,559 savings groups, trained farmers in regenerative agriculture, worked with 1,464 partner churches, delivered a spiritual renewal curriculum and paid for a US-based learning and action programme ($779,430 of the total). None of that is planting a tree. Read this as the cost of running everything Plant With Purpose does divided by the trees that went in the ground, which happens to be about a dollar.',
  },
  ministryClaims: [
    {
      quote: 'Plant a Tree for $1',
      sourceId: 'pwp-site',
      impliedCostPerOutcome: 1,
      impliedOutcome: 'tree planted',
    },
    {
      quote: 'We achieved our goal, planting 10,227,457 trees across nine countries!',
      sourceId: 'pwp-ar-25',
    },
    {
      quote:
        'Plant With Purpose is a Christian environmental nonprofit working to end rural poverty by planting trees, restoring ecosystems, and empowering communities through faith-based regenerative agriculture.',
      sourceId: 'pwp-site',
    },
    {
      quote:
        'Typically, we work in a watershed for six to ten years until this level of self-sufficiency is achieved.',
      sourceId: 'pwp-ar-25',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 2,
      note:
        'There is real substance — 1,464 partner churches, spiritual renewal as one of four programme quadrants, a “Restoration of Relationships” curriculum, and the statement that the work is “born from our Christian belief that all people are made in the image of God.” But the public self-description leans on faith as a useful bridge rather than a conviction, there is no statement of faith, and the ministry presents itself outwardly as an environmental nonprofit.',
    },
    localLeadership: {
      value: 3,
      note:
        'The strongest documented case in this batch: the annual report’s own staffing table shows 471 total global and US staff of whom 48 are in the United States, so roughly nine in ten are field staff in the nine programme countries. The work runs through 1,464 local churches and 5,559 farmer-led savings groups capitalised by their own members. Governance and fundraising remain in San Diego.',
    },
    financialTransparency: {
      value: 3,
      note:
        'Audited financial statements, the Form 990 and the annual report for the year to June 2025 are all posted on the ministry’s own transparency page, with functional expenses split between overseas programmes and US learning and action. Note the page is at /trust-transparency/, not /financials/.',
    },
    outcomeEvidence: {
      value: 2,
      note:
        'The tree count is broken out country by country and the nine figures sum exactly to the published headline, which is a real discipline and the reason we trusted it as a denominator. Against that: no survival rate, and the per-country “people served” figures are a cumulative stock that does not reconcile to the ministry’s own cumulative total.',
    },
    costEvidence: {
      value: 3,
      note:
        'The only cause in this batch where our arithmetic on audited figures independently lands on the ministry’s own advertised unit price — $1.01 against a published $1. That is what this site exists to do. The caution is that the price may have been set from the arithmetic in the first place rather than tested against it, in which case the agreement is a tautology rather than a confirmation.',
    },
  },
  notVerified: [
    'Tree survival. Not published at one year, three years or five. This is the most important missing number on the page: an unknown share of the 10.2 million seedlings will not be alive when a donor next reads this, and the ministry’s $1 offer does not distinguish the two.',
    'Whether all 10,227,457 trees were funded by Plant With Purpose, or whether the figure includes trees planted by graduated groups working on their own. The report’s framing of graduation toward self-sufficiency makes the second plausible, which would be to their credit and would also make the denominator larger than the spending bought.',
    'The per-country “People Served” figures add up to roughly 717,655 against the annual report’s own cumulative total of 716,655 — about a thousand people apart, unexplained. Both are cumulative “Active & Graduated” stocks, so neither can be divided into a single year of spending.',
    'A $2 discrepancy sits inside the audit itself: total program activities are $10,310,929 on one statement and $10,310,927 on the functional expense statement. Trivial in size, but we could not resolve it and we would rather say so than pick one.',
    'The report references a Watershed Lifespan Study comparing watersheds that graduated after three, six and nine years. We could not find the results published. For a ministry whose central claim is that it leaves after six to ten years, that study is the evidence that would settle whether graduation holds.',
    'What the spiritual renewal curriculum actually teaches. “Restoration of Relationships” is the only description we found, and no content, doctrinal basis or church partner criteria are published.',
    'Program services were 73% of the $14,107,766 of total expenses, with fundraising at $2,622,920 — about 19%, high relative to other causes here. The audit does not explain it.',
    'The homepage links out to Accord Network, Excellence in Giving, MinistryWatch and 1% for the Planet, but none of those affiliations is stated in page text — only as image badges pointing at external profiles. We have therefore listed no accreditations rather than infer them from a link.',
    'The cumulative claim of 82,152,316 trees planted since inception spans decades and countries the ministry has since left. Nothing is published about what happened to those earlier plantings.',
  ],
  notes: [
    'The directory has no category for food and farming, so this cause sits under safe water. That is the closest honest fit — watershed restoration is water work, and the trees exist to hold soil and recharge springs — but a donor arriving here should know it is not a well-drilling ministry.',
    'On overseas spending alone ($9,531,497, excluding the $779,430 US learning and action programme) the figure is about $0.93 a tree. We led with the higher number because the US programme is a real cost of the organisation.',
    'The savings group equity of $17,446,082 is the participants’ own money, not donor money, and it grew from $5,585,000 in 2020. It is the clearest evidence on this page that the model builds local capacity rather than substituting for it — which is the usual charge against free agricultural inputs.',
    'The annual report is a designed document with the key figures set in graphics. Text extraction returned nothing, so we rendered the pages as images and read them directly. Every figure attributed to that report was read off the rendered page rather than from machine-readable text.',
  ],
  siteUrl: 'https://plantwithpurpose.org/',
  giveUrl: 'https://plantwithpurpose.org/donate/',
  sources: [
    {
      id: 'pwp-site',
      label: 'Homepage',
      url: 'https://plantwithpurpose.org/',
      publisher: 'Plant With Purpose',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Source of the “Plant a Tree for $1” offer and the organisation’s own one-sentence self-description.',
    },
    {
      id: 'pwp-about',
      label: 'About / We Are Christian',
      url: 'https://plantwithpurpose.org/about/',
      publisher: 'Plant With Purpose',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note:
        'Source of the faith-as-a-bridge statement and “born from our Christian belief that all people are made in the image of God”.',
    },
    {
      id: 'pwp-tree',
      label: 'Plant a Tree',
      url: 'https://plantwithpurpose.org/plant-a-tree/',
      publisher: 'Plant With Purpose',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'pwp-transparency',
      label: 'Trust & Transparency',
      url: 'https://plantwithpurpose.org/trust-transparency/',
      publisher: 'Plant With Purpose',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Where the audit, Form 990 and annual report are posted. The site has no /financials/ page.',
    },
    {
      id: 'pwp-audit-25',
      label: 'Audited financial statements, year ended 30 June 2025',
      url: 'https://plantwithpurpose.org/wp-content/uploads/2026/05/FY2025-Financial-Statements.pdf',
      publisher: 'Plant With Purpose',
      documentType: 'audited-financials',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note:
        'Audited by CapinCrouse LLP. Total program activities $10,310,929 (overseas programs $9,531,497 plus learning and action $779,430), fundraising $2,622,920, management and general $1,173,917, total expenses $14,107,766.',
    },
    {
      id: 'pwp-990-25',
      label: 'Form 990, year ended 30 June 2025',
      url: 'https://plantwithpurpose.org/wp-content/uploads/2026/05/FY-2025-Form-990.pdf',
      publisher: 'Plant With Purpose',
      documentType: 'form-990',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
    },
    {
      id: 'pwp-ar-25',
      label: 'Annual report, financial year 2025',
      url: 'https://plantwithpurpose.org/wp-content/uploads/2026/02/pwp-annual-report-2025-final-reduced-1.pdf',
      publisher: 'Plant With Purpose',
      documentType: 'annual-report',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note:
        'Source of the 10,227,457 trees and the nine per-country tree figures that sum to it, the THRIVE 25 five-year table (staff, savings equity, participants, partner churches), and the six-to-ten-year watershed statement. Figures are set in graphics; we rendered the pages as images and read them rather than extracting text.',
    },
  ],
};
