import type { Cause } from '@/lib/types';

export const the500k: Cause = {
  slug: 'the500k',
  name: 'The 500K Project',
  legalName: '500k',
  ein: '83-1375770',
  tagline: 'Funds full-time South Asian evangelists at the wage a South Asian evangelist earns.',
  category: 'evangelism',
  countries: ['South Asia'],
  whatTheyDo:
    'The 500K Project raises support for national workers already living in the places they preach, sending the money through local partner organisations rather than employing anyone directly. The name is the goal: 500,000 full-time workers.',
  accreditations: [],
  verification: 'self-reported',
  biblicalAlignment: {
    mandate:
      'The harvest is plentiful and the labourers are few, and the instruction attached to that observation is to pray for labourers to be sent. This is a ministry whose entire function is paying for labourers — not buildings, not campaigns, not sent staff. The worker is the whole budget line.',
    scriptures: [
      {
        ref: 'Matthew 9:37–38',
        text: 'The harvest is plentiful, but the labourers are few; therefore pray earnestly to the Lord of the harvest to send out labourers into his harvest.',
      },
      {
        ref: '2 Corinthians 8:13–14',
        text: 'I do not mean that others should be eased and you burdened, but that there should be fairness. Your abundance at the present time should supply their need.',
      },
      {
        ref: '1 Corinthians 9:14',
        text: 'In the same way, the Lord commanded that those who proclaim the gospel should get their living by the gospel.',
      },
    ],
    concerns: [
      'The website never mentions Jesus Christ by name. It talks about “workers”, “the gospel” and “unreached people” in the abstract. For a ministry whose only product is evangelism, that is a strange omission, and we do not know whether it is a deliberate security posture for workers in hostile places or something else.',
      'Nobody is named anywhere — not the founder, not a director, not a board member, not a single partner organisation. The founding story is about “a UK doctor” who visited South Asia in 2010.',
      'Sending money to unnamed partners in unnamed countries is exactly the structure that makes both security sense and abuse easy. We cannot tell which one this is from the outside.',
    ],
  },
  roi: {
    levers: ['local-workers', 'local-cost-base', 'existing-network'],
    reason:
      'A full-time worker who already lives in the village needs no visa, no flight, no relocation allowance and no expatriate salary — the support figure is a local wage, and the ministry claims it is $80 a month. Money moves through partner organisations that already exist, so there is no field office to fund. This is the cheapest unit of full-time gospel work we have found advertised anywhere. It is also entirely unaudited.',
  },
  ministryClaims: [
    {
      quote: 'Amazingly, the cost of sending a full-time worker is only $80 per month.',
      sourceId: '500k-site',
      impliedCostPerOutcome: 960,
      impliedOutcome: 'worker-year',
    },
    {
      quote:
        'This means that over 95% of the funds we raise makes it to our partners on the ground.',
      sourceId: '500k-site',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 2,
      note: 'Funding evangelists is as direct as gospel work gets, but the site never names Christ and publishes no statement of faith, so we are taking the category on trust.',
    },
    localLeadership: {
      value: 3,
      note: 'Every funded worker is a national, supported through a local partner organisation. The model has no expatriate layer at all.',
    },
    financialTransparency: {
      value: 1,
      note: 'IRS filings are public through ProPublica, which is how we know the size of the ministry. Nothing is published on the site itself — no annual report, no audit, no accreditation, no named board.',
    },
    outcomeEvidence: {
      value: 0,
      note: 'No worker count, no country list, no annual totals of any kind are published.',
    },
    costEvidence: {
      value: 1,
      note: 'A unit cost is advertised with no denominator behind it. There is a price but no arithmetic.',
    },
  },
  notVerified: [
    'How many workers are actually supported. This is the number the whole model turns on and it is published nowhere.',
    'The 95% pass-through claim. Their IRS filings report totals, not a functional expense breakdown we could check it against.',
    'Which partner organisations receive the money, and whether those partners are audited.',
    'Whether $80 per month is a full living wage in the places workers serve, or a supplement to other income.',
    'Who runs the ministry. No officer, director or founder is named on the site.',
  ],
  notes: [
    'We deliberately did not build a cost per outcome here. Dividing their spending by a worker count derived from their own $80 claim would just hand their marketing number back to you as if we had checked it.',
    'For scale: IRS filings via ProPublica report 2023 revenue of $379,836 against $318,251 of expenses, up from $142,254 of revenue in 2020. If the $80 per month and 95% pass-through figures both hold, 2023 spending would fund roughly 315 worker-years. That is arithmetic on their marketing, not a verified figure.',
    'South Asia is the only place named, and it is a region rather than a country, so there is no national cost base to put on this page.',
  ],
  siteUrl: 'https://www.the500k.us/',
  giveUrl: 'https://www.the500k.us/#donate',
  sources: [
    {
      id: '500k-site',
      label: 'The 500K Project homepage',
      url: 'https://www.the500k.us/',
      publisher: 'The 500K Project',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'A single-page site. Every claim quoted here, including the founding story, comes from it.',
    },
    {
      id: '500k-propublica',
      label: 'IRS filings for 500k, EIN 83-1375770',
      url: 'https://projects.propublica.org/nonprofits/organizations/831375770',
      publisher: 'ProPublica Nonprofit Explorer',
      documentType: 'third-party',
      retrieved: '2026-09-18',
      note: 'Structured IRS data for tax years 2019–2023. ProPublica blocks automated PDF downloads, so we read the extracted figures rather than the returns themselves.',
    },
  ],
};
