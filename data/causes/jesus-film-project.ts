import type { Cause } from '@/lib/types';

export const jesusFilmProject: Cause = {
  slug: 'jesus-film-project',
  name: 'Jesus Film Project',
  tagline: 'Gospel film and video in thousands of languages, distributed by local partners.',
  category: 'media',
  countries: ['Global'],
  whatTheyDo:
    'A ministry of Cru that produces and translates film and short-form video about Jesus, and puts it in the hands of local churches and field teams to show in person and online.',
  ein: '95-6006173',
  accreditations: [
    { label: 'Abides by ECFA standards; Cru is a charter member', sourceId: 'jf-site' },
    { label: 'Excellence in Giving — 175 operating data points submitted', sourceId: 'jf-site' },
  ],
  verification: 'self-reported',
  biblicalAlignment: {
    mandate:
      'The commission is to every nation, and at Pentecost each person heard in the language he was born speaking. A gospel film dubbed into two thousand languages is a modern attempt at the same thing: the message arriving in the hearer’s own tongue rather than in the missionary’s.',
    scriptures: [
      {
        ref: 'Matthew 28:19–20',
        text:
          'Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit.',
      },
      {
        ref: 'Acts 2:8',
        text: 'And how is it that we hear, each of us in his own native language?',
      },
      {
        ref: 'Romans 10:14',
        text: 'And how are they to hear without someone preaching?',
      },
    ],
    concerns: [
      'A view is not a hearing and a hearing is not a conversion. Media ministries count the cheapest thing to count, and the number that results is the easiest number in Christian philanthropy to inflate.',
      'The 78.1% figure is an allocation ratio — how much of a dollar goes to programmes rather than overhead. It is not a cost per person and should not be read as one.',
    ],
  },
  roi: {
    levers: ['digital-distribution', 'existing-network', 'local-cost-base'],
    reason:
      'The film is already shot and already translated. Each additional viewing costs almost nothing, so cost per person falls as reach grows — genuinely the cheapest distribution mechanism on this site. Showings run through churches and local teams that already exist. The efficiency is real; the temptation to describe an impression as an outcome is equally real.',
  },
  ministryClaims: [
    {
      quote: '78.1% of your donation goes toward advancing the Gospel worldwide',
      sourceId: 'jf-site',
    },
  ],
  scores: {
    gospelCentrality: { value: 3, note: 'The gospel is the product.' },
    localLeadership: {
      value: 2,
      note: 'Distribution runs through national partners and field teams; production and strategy are US-based.',
    },
    financialTransparency: {
      value: 2,
      note: 'Program-spending ratio and tax ID disclosed, ECFA standards claimed, annual report offered. No figures on the page itself.',
    },
    outcomeEvidence: {
      value: 0,
      note:
        'The giving page states a faith goal of 3 billion people reached. A goal is not a result, and no current reach figure appears.',
    },
    costEvidence: { value: 0, note: 'No outcome count to divide spending by.' },
  },
  notVerified: [
    'Any current figure for people reached, films shown, or decisions recorded — the numbers this ministry is best known for are not on the page we read.',
    'What "advancing the Gospel worldwide" includes in the 78.1%.',
    'Views are the easiest number in Christian ministry to inflate and the hardest to connect to a disciple. Any cost-per-view figure here would need a definition before it meant anything.',
  ],
  siteUrl: 'https://www.jesusfilm.org/',
  giveUrl: 'https://www.jesusfilm.org/give/',
  sources: [
    {
      id: 'jf-site',
      label: 'Giving page',
      url: 'https://www.jesusfilm.org/give/',
      publisher: 'Jesus Film Project, a ministry of Cru',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
  ],
};
