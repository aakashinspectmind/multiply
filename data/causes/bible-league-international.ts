import type { Cause } from '@/lib/types';

export const bibleLeagueInternational: Cause = {
  slug: 'bible-league-international',
  name: 'Bible League International',
  tagline:
    'Scripture, Bible studies and church-planter training through local churches in 40+ countries.',
  category: 'scripture',
  countries: [
    'Bangladesh',
    'Ethiopia',
    'Ghana',
    'Haiti',
    'India',
    'Indonesia',
    'Kenya',
    'Mozambique',
    'Nicaragua',
    'Rwanda',
    'Zimbabwe',
  ],
  whatTheyDo:
    'Bible League places Bibles and easy-to-read Scripture, runs small-group Bible studies, trains church planters and teaches adult literacy, working through local churches and national partner organisations rather than its own field staff.',
  accreditations: [
    { label: 'ECFA accredited', sourceId: 'bl-site' },
    {
      label: 'Excellence in Giving certified transparent',
      sourceId: 'bl-site',
    },
  ],
  verification: 'documents-reviewed',
  biblicalAlignment: {
    mandate:
      'Scripture in a language someone actually reads is the instrument God says he uses. Paul’s argument is a chain of dependencies — no preacher, no hearing; no hearing, no faith — and a Bible in the hands of a believer who has never owned one closes a link in it.',
    scriptures: [
      {
        ref: 'Romans 10:14, 17',
        text: 'How then will they call on him in whom they have not believed? And how are they to believe in him of whom they have never heard?… So faith comes from hearing, and hearing through the word of Christ.',
      },
      {
        ref: 'Isaiah 55:11',
        text: 'So shall my word be that goes out from my mouth; it shall not return to me empty, but it shall accomplish that which I purpose.',
      },
      {
        ref: '2 Timothy 3:16–17',
        text: 'All Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in righteousness.',
      },
    ],
    concerns: [
      'The $5-for-two-Bibles figure does not reconcile with the ministry’s own annual report — see the comparison below. A ministry that advertises a unit cost it cannot support from its financials is a ministry to ask questions of before giving at scale.',
      'A Bible placed is not a Bible read. “People engaged in God’s Word” is Bible League’s phrase and Bible League does not define it.',
    ],
  },
  roi: {
    levers: ['local-cost-base', 'existing-network', 'volunteer-leverage'],
    reason:
      'Printing, shipping and distribution all happen inside the receiving country, and the last mile runs through partner churches and trained volunteers who were already there. Paid coordination is small relative to the unpaid hours it puts to work, so the marginal cost of one more Scripture set is genuinely low — about $21 per Bible actually reported placed, on our arithmetic.',
  },
  costModel: {
    outcome: 'person engaged in God’s Word',
    outcomePlural: 'people engaged in God’s Word',
    spend: {
      amount: 20887869,
      basis: 'program-services',
      fiscalYear: 'FY2025',
      sourceId: 'bl-ar25',
    },
    count: {
      amount: 2015577,
      label: 'people who studied God’s Word',
      fiscalYear: 'FY2025',
      sourceId: 'bl-ar25',
    },
    attribution: 'all-program-spend',
    caveat:
      'The same program dollars trained 91,622 leaders, supported 1,736 new churches and funded literacy and translation work. "Engaged in God’s Word" is also undefined in the report — it may count a person once, or once per study.',
    alternates: [
      {
        label: 'new churches planted (1,736)',
        count: 1736,
        note: 'About $12,000 per new church on the same all-program-spend basis.',
      },
      {
        label: 'Bibles and study, literacy and training materials shared (4,094,825)',
        count: 4094825,
        note: 'About $5.10 per item. Counting only the 984,197 items that were Bibles gives about $21 per Bible.',
      },
    ],
  },
  ministryClaims: [
    {
      quote: '$5 sends Bibles to TWO believers waiting for God’s Word.',
      sourceId: 'bl-site',
      impliedCostPerOutcome: 2.5,
      impliedOutcome: 'believer receiving Scripture',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 3,
      note: 'Scripture and church planting are the product. Nothing to infer.',
    },
    localLeadership: {
      value: 3,
      note: 'Delivery runs through 46 program partners and 64 licensee partners, and the planters are local — 1,690 newly trained planters started 1,736 churches in FY25.',
    },
    financialTransparency: {
      value: 3,
      note: 'Full statement of activities in the annual report: $28,211,285 of expenditures, 74.0% program, 10.1% administration, 15.9% fundraising. Seven years of reports online.',
    },
    outcomeEvidence: {
      value: 1,
      note: 'Counts are large, round and self-reported, and the headline unit — people "engaged" — is not defined. Materials shipped is an output, not evidence that anyone read them.',
    },
    costEvidence: {
      value: 2,
      note: 'Both numbers are published and the division works, but the ministry’s own advertised price is roughly eight times cheaper than the documents imply, and it does not say why.',
    },
  },
  notVerified: [
    'The $5-for-two-Bibles claim does not reconcile with the report. 984,197 Bibles against $20.9 million of program spending is about $21 per Bible; even dividing by all 4,094,825 items shared gives about $5.10 each. Bible League does not state what the $2.50 covers — most likely printing only, excluding distribution, training and overhead. Ask before repeating the claim.',
    '"People who studied God’s Word in FY25" is not defined anywhere in the report.',
    'We have not pulled Bible League’s Form 990 or the underlying audited statements; the figures here come from the statement of activities printed in the annual report.',
    'FY25 shows a $1,675,890 net loss, which the report attributes largely to depreciation and an asset write-off. Not independently checked.',
  ],
  notes: [
    'Works in 24 of the 25 countries with the worst Bible shortages, per the coalition-built Bible Access List.',
    'Reports 91,622 local leaders trained in FY25 — on the same all-program-spend basis that is about $228 per leader trained.',
  ],
  siteUrl: 'https://www.bibleleague.org/',
  giveUrl: 'https://www.bibleleague.org/give/',
  sources: [
    {
      id: 'bl-ar25',
      label: '2025 Annual Report (Mission Matters)',
      url: 'https://www.bibleleague.org/wp-content/uploads/2026/04/31753_MISSION-MATTERS_APR2026-CorpAnnualReport2025.pdf',
      publisher: 'Bible League International',
      documentType: 'annual-report',
      retrieved: '2026-09-18',
      fiscalYear: 'FY2025',
      note: '10 MB PDF. Financials are on the 2025 Statement of Activities page; outcome counts are on the numbers and worldwide-impact pages.',
    },
    {
      id: 'bl-site',
      label: 'Homepage and financial accountability page',
      url: 'https://www.bibleleague.org/accountability/',
      publisher: 'Bible League International',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
  ],
};
