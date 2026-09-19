import type { Cause } from '@/lib/types';

export const foodForTheHungry: Cause = {
  slug: 'food-for-the-hungry',
  name: 'Food for the Hungry',
  legalName: 'Food for the Hungry, Inc.',
  ein: '95-2680390',
  tagline:
    'Emergency food and water in ten countries, delivered almost entirely by staff from those countries.',
  category: 'children',
  countries: [
    'Bangladesh',
    'Bolivia',
    'Cambodia',
    'Dominican Republic',
    'Guatemala',
    'Indonesia',
    'Kenya',
    'Peru',
    'Philippines',
    'Rwanda',
    'Uganda',
  ],
  whatTheyDo:
    'Food for the Hungry works in twenty countries through country offices staffed by nationals, combining emergency response with long-term community development and child sponsorship. Relief and development is by far its largest programme line; the emergency work is food, water, sanitation and hygiene in the places it already has offices. Founded in 1971.',
  accreditations: [],
  verification: 'documents-reviewed',
  biblicalAlignment: {
    mandate:
      'Isaiah 58 answers a question about fasting by describing bread shared with the hungry and clothes put on the naked — the physical acts are the worship. Galatians 6:10 sets the order: do good to everyone, and especially to the household of faith. A ministry whose largest line is food and water in famine and flood is doing the plainest form of this, and the fact that it is done by believers who already live there is what Galatians assumes.',
    scriptures: [
      {
        ref: 'Isaiah 58:7',
        text:
          'Is it not to share your bread with the hungry and bring the homeless poor into your house; when you see the naked, to cover him, and not to hide yourself from your own flesh?',
      },
      {
        ref: 'Matthew 25:35–36',
        text:
          'For I was hungry and you gave me food, I was thirsty and you gave me drink, I was a stranger and you welcomed me, I was naked and you clothed me, I was sick and you visited me, I was in prison and you came to me.',
      },
      {
        ref: 'Galatians 6:10',
        text:
          'So then, as we have opportunity, let us do good to everyone, and especially to those who are of the household of faith.',
      },
    ],
    concerns: [
      'Forty-four per cent of revenue is US government grants. That is not a doctrinal problem in itself, but it shapes what the organisation can say and do in the field, and it is a single funder whose appetite for humanitarian aid is currently shrinking. A donor should understand that they are giving alongside a government, not instead of one.',
      'The Christian identity is stated plainly in the audit and on the about page — “We follow Jesus”, “a Christian international relief and development organization” — but the 2025 impact report is written almost entirely in the vocabulary of secular development: agency, resilience, systems transformation, the Mission Impact Index. Christ is not named in it. That may be appropriate for a document written partly for institutional funders; it is still a noticeable difference in register from the ministry’s own statements about itself.',
      'The impact report scores “Relationship with God” as a numbered dimension of household well-being, 6.94 out of 10. We quote it and do not treat it as an outcome. Reducing someone’s standing before God to an index number is a category error, whatever the intent, and a donor should know the number exists rather than discover it later.',
      'The organisation ran at a loss in both of the last two audited years — $1,219,396 in 2025 after $14,217,248 in 2024, on revenue that fell from $203,400,861 to $167,894,631. That is a fifth of the income gone in one year. The audit does not explain the decline.',
    ],
  },
  roi: {
    levers: ['local-workers', 'local-cost-base', 'existing-network'],
    reason:
      'Food for the Hungry says 99% of its staff work in their country of origin, which is the highest published figure we found in relief. That matters structurally, not sentimentally: the most expensive part of an emergency response is normally getting foreigners and their logistics to the scene, and an organisation whose staff are already there does not pay it. Emergency response also runs through country offices that exist for the development work, so the channel is already built and already salaried when a flood arrives.',
  },
  costModel: {
    outcome: 'person reached with life-saving assistance in an emergency',
    outcomePlural: 'people reached with life-saving assistance in emergencies',
    spend: {
      amount: 91791371,
      basis: 'program-services',
      fiscalYear: 'FY2025 (year ended 30 September 2025)',
      sourceId: 'fh-audit-25',
    },
    count: {
      amount: 1754292,
      label: 'people reached with life-saving assistance through emergency responses in 10 countries',
      fiscalYear: '2025',
      sourceId: 'fh-impact-25',
    },
    attribution: 'single-program-line',
    caveat:
      'An upper bound, and the over-attribution is specific. The $91,791,371 relief and development line funds multi-year community development — water systems, agriculture, savings groups, health training — in twenty countries, not just the emergency responses in ten. Charging all of it to the 1,754,292 people reached in emergencies therefore loads years of development work onto a single year of relief. The count also comes from a report labelled 2025 while the spending is the fiscal year ended 30 September 2025, so the two periods overlap rather than match. And “reached with life-saving assistance” is the organisation’s own unit: it is not defined in the report, and we do not know whether a household is counted once or per member, or whether someone helped twice in a year counts twice.',
    alternates: [
      {
        label: 'people served across all programmes in 4,026 communities',
        count: 10222078,
        note:
          'Against all $131,268,099 of programme spending this works out at $12.84 a person. It is the ministry’s headline figure and it is the broad one: it counts anyone touched by any programme, including long-term development and child sponsorship, so it hides the difference between a person who received a week of emergency rations and a community that had a water committee trained. The narrow emergency figure is the honest one for a relief donor.',
      },
      {
        label: 'people with better access to clean water, sanitation and hygiene facilities',
        count: 1117833,
        note:
          'Published in the same report and much closer to a durable physical outcome, but it spans emergency and development work and cannot be matched to a single spending line.',
      },
    ],
  },
  ministryClaims: [
    {
      quote: '99% of our staff work in their country of origin.',
      sourceId: 'fh-impact-25',
    },
    {
      quote:
        'During the year ended September 30, 2025, FH received approximately 47% of total revenue from private contributions, 44% of total revenue from U.S. government grants, 0% from gifts-in-kind received through private donations, and 9% from all other sources.',
      sourceId: 'fh-audit-25',
    },
    {
      quote:
        'U.S. government commodities are valued using the purchase price by the U.S. Department of Agriculture, as depicted on the bill of lading, which approximates fair value.',
      sourceId: 'fh-audit-25',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 2,
      note:
        'The audit describes FH as “a Christian international relief and development organization” and the about page says “We follow Jesus” and that staff “are motivated by their Christian faith”. But there is no statement of faith we could find, and the flagship impact report never names Christ. Identifiably Christian, not demonstrably gospel-centred in its own reporting.',
    },
    localLeadership: {
      value: 3,
      note:
        'The strongest local-staffing figure in this batch: 99% of staff in their country of origin, with the impact report naming eleven country offices by their own index scores. Held at 3 rather than qualified downward because the claim is specific, published, and consistent with a structure of country offices rather than expatriate field teams.',
    },
    financialTransparency: {
      value: 3,
      note:
        'Audited consolidated statements, Form 990s and annual reports going back more than a decade are posted on the ministry’s own financial page, functional expenses are split three ways by programme line, and the audit discloses its revenue concentration and its gift-in-kind valuation basis in plain language. The two-year losses are visible in the same document, which is how it should be.',
    },
    outcomeEvidence: {
      value: 2,
      note:
        'Counts are published, they are specific, and — unusually — they are broken into a broad figure and a narrow emergency figure rather than collapsed into one. Marked down because no unit is defined: nothing says what “reached” means, whether people are de-duplicated across programmes, or who checked the numbers.',
    },
    costEvidence: {
      value: 2,
      note:
        'Both halves exist, one from an audit and one from a published report, and the programme line is specific enough that the division is not purely notional. Marked down for the period overlap and because Food for the Hungry publishes no cost per outcome of its own for ours to be checked against.',
    },
  },
  notVerified: [
    'What “reached with life-saving assistance” means. It is the unit the whole cost model turns on and the report does not define it. In an emergency this is the least defined count in the sector: it can mean a food ration handed over, a household in a catchment area, or a person who walked past a hygiene message.',
    'Whether the 1,754,292 and the 10,222,078 overlap, and by how much. If most emergency recipients are also counted in the broader figure — which is likely, since the emergencies happen where FH already works — then the two numbers are not independent and neither is a count of distinct people served.',
    'Fiscal periods do not line up. The audit covers 1 October 2024 to 30 September 2025. The impact report is labelled 2025 and does not state its period.',
    'The country count does not agree with itself. The impact report says 20 countries; the about page on the same site says “nearly 10 million people in 18 countries”. We used the eleven country offices the impact report names with their own index scores, so the country list here is incomplete by the ministry’s own reckoning.',
    'Why revenue fell from $203,400,861 to $167,894,631 in one year, and expenses from $217,863,349 to $170,130,863. US government commodities alone dropped from $38,942,565 to $25,137,713. The audit reports the decline without explaining it.',
    'Fundraising is $25,149,504, or 14.8% of spending — the highest ratio of any relief ministry in this directory. The audit gives no breakdown of what it buys.',
    'The consolidated statements net out $103,881,440 of transactions between Food for the Hungry, Inc. and its affiliates. We did not examine the affiliate entities individually, so we cannot say which legal entity employs the country staff the 99% figure refers to.',
    'Nobody outside the organisation has checked any of these counts, and the impact report does not claim otherwise.',
  ],
  notes: [
    'Gifts-in-kind are usually where relief accounting goes wrong, and here they are unusually clean. Private gifts-in-kind were 0% of 2025 revenue, down from 1%. The remaining donated commodities come from the US government and are valued “using the purchase price by the U.S. Department of Agriculture, as depicted on the bill of lading” — that is, what was actually paid for the food, not what it would retail for. And the audit states plainly that “FH did not monetize any gifts-in-kind during the years ended September 30, 2025 and 2024.” Compare that with a ministry valuing donated goods against retail store prices and you can see how much of a relief charity’s apparent efficiency is a valuation choice.',
    'Programme spending was $131,268,099 of $170,130,863, or 77.2%: relief and development $91,791,371, child sponsorship and development $38,054,866, public awareness and education $1,421,862. Fundraising was $25,149,504 and general and administrative $13,713,260. Because there is almost no gift-in-kind inflation here, the 77.2% is close to a cash ratio already — which makes it lower than the headline ratios of ministries that ship donated goods, and more comparable to reality.',
    'Direct relief and contributed supplies and commodities inside programme spending were $62,633,757, of which $47,994,672 sits in the relief and development line.',
    'The 2025 impact report publishes a Mission Impact Index for eleven country offices. Kenya scores lowest at 3.00 with 83% of households classed as suffering; the Dominican Republic scores highest at 6.00. Publishing a metric on which your own worst programme looks bad is a good sign about the metric.',
  ],
  siteUrl: 'https://www.fh.org/',
  giveUrl: 'https://give.fh.org/s/donate/a0e8W00000jvpubQAA/where-needed-most',
  sources: [
    {
      id: 'fh-site',
      label: 'About Food for the Hungry',
      url: 'https://www.fh.org/about/',
      publisher: 'Food for the Hungry',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note:
        'Source of “We follow Jesus”, the description of FH as “a Christian relief and development organization”, and the “18 countries” figure that disagrees with the impact report.',
    },
    {
      id: 'fh-financials',
      label: 'Financial accountability',
      url: 'https://www.fh.org/about/financial/',
      publisher: 'Food for the Hungry',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Posts audited statements, Form 990s, annual reports and impact reports back to 2018.',
    },
    {
      id: 'fh-audit-25',
      label: 'Consolidated financial statements, year ended 30 September 2025',
      url: 'https://s3.us-west-1.wasabisys.com/fh-mediacloud/2026/05/2025-FFTH-FS.pdf',
      publisher: 'Food for the Hungry',
      documentType: 'audited-financials',
      retrieved: '2026-09-18',
      fiscalYear: 'FY2025',
      note:
        'Source of every financial figure here, including the functional expense table by programme line, the revenue concentration note and the gift-in-kind valuation basis.',
    },
    {
      id: 'fh-impact-25',
      label: '2025 Mission Impact Report',
      url: 'https://s3.us-west-1.wasabisys.com/fh-mediacloud/2026/06/FH-Mission-Impact-Report-2025-Final-Digital-spreads.pdf',
      publisher: 'Food for the Hungry',
      documentType: 'annual-report',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note:
        'Source of all outcome counts. The headline numbers are set as large graphics beside their captions, so we matched each figure to its own caption by reading the page layout.',
    },
    {
      id: 'fh-990-24',
      label: 'FY2024 Form 990, public disclosure copy',
      url: 'https://s3.us-west-1.wasabisys.com/fh-mediacloud/2026/07/2024_FH-Inc_990_PD-1.pdf',
      publisher: 'Food for the Hungry',
      documentType: 'form-990',
      retrieved: '2026-09-18',
      fiscalYear: 'FY2024',
      note: 'A year behind the audit. Reviewed for context; no figure on this page comes from it.',
    },
  ],
};
