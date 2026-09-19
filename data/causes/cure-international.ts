import type { Cause } from '@/lib/types';

export const cureInternational: Cause = {
  slug: 'cure-international',
  name: 'CURE International',
  legalName: 'CURE International Inc',
  tagline: 'Free surgery for children with treatable disabilities, at eight Christian hospitals.',
  category: 'health',
  countries: [
    'Ethiopia',
    'Kenya',
    'Malawi',
    'Niger',
    'Philippines',
    'Uganda',
    'Zambia',
    'Zimbabwe',
  ],
  whatTheyDo:
    'CURE runs children’s surgical hospitals that treat clubfoot, cleft lip, burn contractures, hydrocephalus, bone infections and spinal deformity. Families are not charged. Local surgeons are trained to lead the programs, and chaplains pray with patients and families.',
  ein: '58-2248383',
  accreditations: [
    { label: 'ECFA accredited', sourceId: 'cure-site' },
    { label: 'Charity Navigator four stars', sourceId: 'cure-site' },
    { label: 'Candid Platinum Transparency 2025', sourceId: 'cure-site' },
    { label: 'Excellence in Giving certified transparent', sourceId: 'cure-site' },
  ],
  verification: 'documents-reviewed',
  biblicalAlignment: {
    mandate:
      'Healing the sick was how Jesus made the kingdom visible, and he sent his disciples out to do the same. A child with an untreated clubfoot in Niger is precisely the person the gospel puts at the front of the queue.',
    scriptures: [
      {
        ref: 'Matthew 9:35',
        text:
          'And Jesus went throughout all the cities and villages, teaching in their synagogues and proclaiming the gospel of the kingdom and healing every disease and every affliction.',
      },
      {
        ref: 'Luke 14:13–14',
        text:
          'But when you give a feast, invite the poor, the crippled, the lame, the blind, and you will be blessed, because they cannot repay you.',
      },
      {
        ref: 'Matthew 25:40',
        text:
          'Truly, I say to you, as you did it to one of the least of these my brothers, you did it to me.',
      },
    ],
    doctrine: { label: '“We share Jesus” is one of five stated distinctives', sourceId: 'cure-site' },
    concerns: [
      'Medical mission carries a permanent risk that care becomes the price of a hearing. CURE treats children regardless of their family’s faith, which is the right answer, but we have not read a written policy on how chaplains handle consent.',
    ],
  },
  roi: {
    levers: ['local-cost-base', 'local-workers', 'durable-asset', 'multiplication'],
    reason:
      'The operations happen in eight low-income countries, in CURE’s own hospitals, increasingly by surgeons from those countries. About $1,900 covers a whole surgical episode — theatre, implant, ward stay, casting and rehabilitation — because every input except the imported hardware is priced locally. Training national surgeons is the part that compounds: the FY25 report follows an Ethiopian surgeon trained at CURE Kenya now leading Ethiopia’s first paediatric spine programme.',
  },
  costModel: {
    outcome: 'surgery for a child',
    outcomePlural: 'surgeries for children',
    spend: {
      amount: 39853533,
      basis: 'program-services',
      fiscalYear: 'FY2025',
      sourceId: 'cure-ar25',
    },
    count: {
      amount: 21019,
      label: 'surgeries performed',
      fiscalYear: 'FY2025',
      sourceId: 'cure-ar25',
    },
    attribution: 'all-program-spend',
    caveat:
      'Those same program dollars also pay for clinic visits, casting, rehabilitation, staff training and chaplaincy, so charging all of them to surgeries overstates what one surgery costs. CURE’s own FY25 figure is $1,704 per surgery — 11% below this one, which is about the agreement you would expect between the two methods.',
    alternates: [
      {
        label: 'people who heard the gospel through CURE in FY25',
        count: 275288,
        note:
          'The same program spending divided by the number of people CURE reports sharing the gospel with: about $145 each. It is the same money as the surgery figure, counted against a different outcome — the two cannot be added together.',
      },
    ],
  },
  ministryClaims: [
    {
      quote: 'Efficiency is increasing. 40% decrease in cost per surgery',
      sourceId: 'cure-ar25',
      impliedCostPerOutcome: 1704,
      impliedOutcome: 'surgery',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 3,
      note:
        'Named and structural, not incidental: "We share Jesus" is one of five stated distinctives, and FY25 reporting counts 275,288 people who heard the gospel alongside the surgical numbers.',
    },
    localLeadership: {
      value: 2,
      note:
        'Hospitals are staffed and increasingly led by national clinicians — the FY25 report follows an Ethiopian surgeon trained at CURE Kenya now leading Ethiopia’s first pediatric spine program. Governance and fundraising remain US-based.',
    },
    financialTransparency: {
      value: 3,
      note:
        'Statement of activities printed in the annual report, Form 990 filings back to 2002, and four separate accreditations. One unexplained gap between the report and the 990 — see below.',
    },
    outcomeEvidence: {
      value: 2,
      note:
        'Surgeries are a delivered service and are counted per hospital, which is well above the sector norm. But the counts are CURE’s own, and there is no published follow-up on how children do a year later.',
    },
    costEvidence: {
      value: 3,
      note:
        'Both numbers are published, CURE divides them itself, and its answer and ours agree within 11%. Nothing else in this directory is this checkable.',
    },
  },
  notVerified: [
    'The FY25 annual report shows $64,071,632 of revenue and $47,780,480 of expenses. The Form 990 for the same year end shows $63,231,992 and $45,918,222. The difference is unexplained by either document and is worth a phone call before a large gift.',
    'The audit covers the money, not the surgery count. No one outside CURE has verified that 21,019 surgeries happened.',
    'The $1,704 and $2,862 cost-per-surgery figures come from a chart image inside the PDF. The extracted text was legible and internally consistent with the stated 40% decrease, but confirm against the printed report before quoting them.',
    'No published data on patient outcomes after discharge.',
  ],
  notes: [
    'FY25 was the highest surgical volume in CURE’s history: 21,019 surgeries, up from 9,414 in 2021, while cost per surgery fell.',
    '27% of FY25 giving went to capital projects — five new surgical centers — so some of this year’s money buys future surgeries rather than this year’s.',
  ],
  siteUrl: 'https://cure.org/',
  giveUrl: 'https://cure.org/donate/',
  sources: [
    {
      id: 'cure-ar25',
      label: '2025 Annual Report',
      url: 'https://cure.org/wp-content/uploads/2026/04/Annual-Report-2025-Spreads.pdf',
      publisher: 'CURE International',
      documentType: 'annual-report',
      retrieved: '2026-09-18',
      fiscalYear: 'FY2025',
      note: '14 MB PDF. Financial figures are from the printed statement of activities; surgical figures are from the impact pages and the efficiency chart.',
    },
    {
      id: 'cure-990',
      label: 'Form 990, fiscal year ending June 2025',
      url: 'https://projects.propublica.org/nonprofits/organizations/582248383',
      publisher: 'IRS, via ProPublica Nonprofit Explorer',
      documentType: 'form-990',
      retrieved: '2026-09-18',
      fiscalYear: 'FYE June 2025',
    },
    {
      id: 'cure-site',
      label: 'Financial accountability page and homepage',
      url: 'https://cure.org/financial-accountability/',
      publisher: 'CURE International',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
  ],
};
