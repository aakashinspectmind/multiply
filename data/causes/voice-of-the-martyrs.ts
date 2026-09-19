import type { Cause } from '@/lib/types';

export const voiceOfTheMartyrs: Cause = {
  slug: 'voice-of-the-martyrs',
  name: 'The Voice of the Martyrs',
  tagline:
    'Bibles, aid and front-line worker support for Christians under persecution in 50+ nations.',
  category: 'persecuted-church',
  // Named examples only. VOM reports work in 50+ nations and does not list them.
  countries: ['Ethiopia', 'Iran', 'Nigeria', 'Syria'],
  whatTheyDo:
    'VOM serves Christians in places where following Christ is dangerous: Bible and literature distribution into restricted nations, support for front-line workers, emergency aid to persecuted families, and mobilising prayer.',
  ein: '73-1395057',
  accreditations: [
    { label: 'ECFA member', sourceId: 'vom-site' },
    {
      label: 'International Christian Association affiliate',
      sourceId: 'vom-site',
    },
  ],
  verification: 'self-reported',
  biblicalAlignment: {
    mandate:
      'Hebrews gives this one as a command, not a suggestion, and gives the reason: the imprisoned believer is not someone else’s problem but your own body. Supporting a widow in Nigeria whose husband was killed for his faith is the plainest reading of it.',
    scriptures: [
      {
        ref: 'Hebrews 13:3',
        text: 'Remember those who are in prison, as though in prison with them, and those who are mistreated, since you also are in the body.',
      },
      {
        ref: '1 Corinthians 12:26',
        text: 'If one member suffers, all suffer together; if one member is honored, all rejoice together.',
      },
      {
        ref: '2 Timothy 3:12',
        text: 'Indeed, all who desire to live a godly life in Christ Jesus will be persecuted.',
      },
    ],
    concerns: [
      'Work in closed countries cannot be reported in detail without endangering people. That is a real constraint and not an excuse — but it means nothing here is checkable by us or by you, and the trust has to rest on the ministry’s reputation instead of its numbers.',
    ],
  },
  roi: {
    levers: ['local-workers', 'local-cost-base', 'existing-network'],
    reason:
      'Aid goes to believers already in place, through networks already built, in countries where a family’s monthly needs are a small fraction of the Western equivalent — Nigeria and Ethiopia sit near the bottom of the cost-base table below. The same structure that makes the money go far makes it impossible to audit: no cost per outcome is published, and we would be suspicious of one that was.',
  },
  ministryClaims: [],
  scores: {
    gospelCentrality: {
      value: 3,
      note: 'Serving the persecuted church for the sake of the gospel is the entire mandate.',
    },
    localLeadership: {
      value: 2,
      note: 'Work is carried out by front-line believers inside each country. Unverifiable from outside, partly by design.',
    },
    financialTransparency: {
      value: 2,
      note: 'ECFA member with a public EIN, so the 990 is obtainable. Nothing linked from the site itself.',
    },
    outcomeEvidence: {
      value: 0,
      note: 'No counts published on the site — not Bibles delivered, families supported, or workers funded.',
    },
    costEvidence: {
      value: 0,
      note: 'Neither a spending figure nor an outcome count is published, so nothing can be divided.',
    },
  },
  notVerified: [
    'Every outcome figure. Nothing countable is published on the site we read.',
    'Security is a real reason to withhold detail about hostile countries. It is not a reason to withhold aggregate totals, and the difference between the two is the question to ask VOM directly.',
    'We have not pulled the Form 990 for EIN 73-1395057. That would give spending; the denominator would still be missing.',
  ],
  notes: [
    'Founded in 1967 by Richard and Sabina Wurmbrand, who were imprisoned in Romania.',
    'Listed here because the need is real and the ministry is long-established — not because the numbers check out. They currently cannot be checked.',
  ],
  siteUrl: 'https://www.persecution.com/',
  giveUrl: 'https://www.persecution.com/donate/',
  sources: [
    {
      id: 'vom-site',
      label: 'Homepage',
      url: 'https://www.persecution.com/',
      publisher: 'The Voice of the Martyrs',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
  ],
};
