import type { Cause } from '@/lib/types';

export const waterMission: Cause = {
  slug: 'water-mission',
  name: 'Water Mission',
  legalName: 'Water Missions International',
  tagline:
    'Christian engineers building safe water systems, handed off to local churches and utilities.',
  category: 'water',
  countries: ['Honduras', 'Indonesia', 'Kenya', 'Malawi', 'Mexico', 'Peru', 'Tanzania', 'Uganda'],
  whatTheyDo:
    'Water Mission designs and builds piped water systems, treatment plants and solar-powered pumps, then stays to keep them running through local operators and small utilities. It also responds to disasters and serves refugee settlements, and it equips local churches to share the gospel alongside the work.',
  ein: '57-1116978',
  accreditations: [
    { label: 'ECFA accredited', sourceId: 'wm-site' },
    {
      label: 'Charity Navigator top rating, 19 consecutive years',
      sourceId: 'wm-site',
    },
    { label: 'Candid Platinum Transparency 2025', sourceId: 'wm-site' },
  ],
  verification: 'documents-reviewed',
  biblicalAlignment: {
    mandate:
      'A cup of water given to the thirsty is the one act Jesus promises will not go unrewarded, and the one he names when he describes people meeting him without knowing it. Water is also the image he chose for himself, which is why this work sits so naturally alongside preaching.',
    scriptures: [
      {
        ref: 'Matthew 25:35',
        text: 'For I was hungry and you gave me food, I was thirsty and you gave me drink.',
      },
      {
        ref: 'Matthew 10:42',
        text: 'And whoever gives one of these little ones even a cup of cold water because he is a disciple, truly, I say to you, he will by no means lose his reward.',
      },
      {
        ref: 'Isaiah 58:10–11',
        text: 'If you pour yourself out for the hungry and satisfy the desire of the afflicted, then shall your light rise in the darkness… and you shall be like a spring of water, whose waters do not fail.',
      },
    ],
    concerns: [
      'Safe water is wanted by everyone, which makes it an easy vehicle for pressure. We have not read Water Mission’s policy on whether access is ever conditioned on attendance at anything.',
    ],
  },
  roi: {
    levers: ['durable-asset', 'local-cost-base', 'local-workers'],
    reason:
      'A treatment system is capital, not consumption. Once installed it keeps producing safe water for years, so the true cost per person falls the longer it runs — which is why the number that matters is not people reached this year but people with ongoing access. Water Mission reports both, separately, and the gap between them is large and honest: 1.75 million reached against 770,000 with ongoing access.',
  },
  costModel: {
    outcome: 'person served with safe water for a year',
    outcomePlural: 'people served with safe water for a year',
    spend: {
      amount: 42762601,
      basis: 'program-services',
      fiscalYear: '2025',
      sourceId: 'wm-audit',
    },
    count: {
      amount: 1750000,
      label: 'people served in 2025',
      fiscalYear: '2025',
      sourceId: 'wm-ar25',
    },
    attribution: 'all-program-spend',
    caveat:
      'This counts everyone served during the year, which includes people whose existing system Water Mission maintained and people reached in disaster and refugee response. It is not 1.75 million new water connections. The report says "more than 1.75 million", so the real figure per person is a little lower than this.',
    alternates: [
      {
        label: 'people in communities served with ongoing access (nearly 770,000)',
        count: 770000,
        note: 'The stricter denominator: sustained service rather than any contact during the year. About $56 per person, and the number to use if what you care about is water still flowing next year.',
      },
    ],
  },
  ministryClaims: [
    {
      quote: 'Just $50 can transform a life.',
      sourceId: 'wm-site',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 2,
      note: 'Describes itself as a Christian engineering nonprofit and equips local churches to share "the Living Water message of Jesus Christ". The gospel runs alongside the engineering rather than being the deliverable.',
    },
    localLeadership: {
      value: 3,
      note: 'Country programs are staffed locally and the sustainability model hands operation to community committees and small utilities rather than keeping it in-house.',
    },
    financialTransparency: {
      value: 3,
      note: 'Publishes full audited financial statements as a PDF, not just a pie chart — program services of $42,762,601 against total expenses of $48,702,959 for 2025, with the prior year alongside.',
    },
    outcomeEvidence: {
      value: 2,
      note: 'Separates "served in 2025" from "ongoing access", which is a distinction most water charities blur. Still self-reported, and neither figure is defined in writing.',
    },
    costEvidence: {
      value: 3,
      note: 'Audited spending and a published count of people served — the division is clean.',
    },
  },
  notVerified: [
    'The audit covers the money. Nobody outside Water Mission has verified the 1.75 million or the 770,000.',
    'Both counts come from an infographic with no written definition. "Served" and "ongoing access" are doing a lot of work and should be pinned down before these numbers are used to compare against another water charity.',
    'No published figure for how many systems are still delivering safe water three to five years after installation. That number, not cost per person, decides whether "safe water for life" holds.',
    '2025 ran a $5.7 million decrease in net assets. Worth asking whether 2025 spending is a repeatable level or a drawdown.',
  ],
  notes: [
    'Cumulative reach stated as more than 8 million people in more than 65 countries since 2001.',
    'Works with Compassion International on joint installations, so some outcomes are shared with another ministry’s spending.',
  ],
  siteUrl: 'https://watermission.org/',
  giveUrl: 'https://watermission.org/donate/',
  sources: [
    {
      id: 'wm-audit',
      label: '2025 audited financial statements',
      url: 'https://watermission.org/sites/default/files/2026-08/wm_2025_audited-financials.pdf',
      publisher: 'Water Mission, audited',
      documentType: 'audited-financials',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
    },
    {
      id: 'wm-ar25',
      label: '2025 Annual Report',
      url: 'https://watermission.org/sites/default/files/2026-08/wm_2025_ar.pdf',
      publisher: 'Water Mission',
      documentType: 'annual-report',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
    },
    {
      id: 'wm-financials',
      label: 'Financials page',
      url: 'https://watermission.org/financials',
      publisher: 'Water Mission',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'wm-site',
      label: 'Homepage and impact page',
      url: 'https://watermission.org/impact/',
      publisher: 'Water Mission',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'wm-990',
      label: 'Form 990, fiscal year ending September 2024',
      url: 'https://projects.propublica.org/nonprofits/organizations/571116978',
      publisher: 'IRS, via ProPublica Nonprofit Explorer',
      documentType: 'form-990',
      retrieved: '2026-09-18',
      fiscalYear: 'FYE September 2024',
    },
  ],
};
