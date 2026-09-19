import type { Cause } from '@/lib/types';

export const theTimothyInitiative: Cause = {
  slug: 'the-timothy-initiative',
  name: 'The Timothy Initiative',
  tagline: 'Trains local disciple-makers to plant churches that plant churches.',
  category: 'church-planting',
  countries: ['Ethiopia', 'Kenya', 'Mexico', 'South Asia'],
  whatTheyDo:
    'TTI trains indigenous church planters in disciple-making, with the explicit aim of multiplying generations of churches rather than single plants — the site reports third-generation plants in Kenya and 21 planters graduating in Mexico.',
  accreditations: [],
  verification: 'self-reported',
  biblicalAlignment: {
    mandate:
      'Paul’s instruction to Timothy is four generations deep in a single sentence — Paul to Timothy to faithful men to others also. A ministry built on that verse is aiming at the thing the verse aims at: not more converts of its own, but more people who can teach.',
    scriptures: [
      {
        ref: '2 Timothy 2:2',
        text:
          'And what you have heard from me in the presence of many witnesses entrust to faithful men, who will be able to teach others also.',
      },
      {
        ref: 'Ephesians 4:11–12',
        text:
          'And he gave the apostles, the prophets, the evangelists, the shepherds and teachers, to equip the saints for the work of ministry, for building up the body of Christ.',
      },
      {
        ref: 'Matthew 28:19–20',
        text: 'Go therefore and make disciples of all nations… teaching them to observe all that I have commanded you.',
      },
    ],
    concerns: [
      'We could not find audited statements or a Form 990 anywhere on the site. Of everything in this directory, this is the one where we know the least about where the money goes.',
      'Multiplication claims compound, which means an unverified starting number compounds too. “Third-generation churches” is an impressive phrase and an unauditable one.',
    ],
  },
  roi: {
    levers: ['multiplication', 'local-workers', 'local-cost-base'],
    reason:
      'The argument is that training a local church planter who trains other church planters means later generations of churches cost nothing extra — the cost per eventual church falls with every generation. If the multiplication is real, this is the highest-leverage model on the site. Nothing TTI publishes lets anyone check the base rate, so treat the leverage as a claim about the design rather than a measured result.',
  },
  ministryClaims: [],
  scores: {
    gospelCentrality: { value: 3, note: 'Disciple-making and church planting are the whole programme.' },
    localLeadership: { value: 3, note: 'Planters are nationals trained in their own contexts; the multiplication model depends on it.' },
    financialTransparency: {
      value: 0,
      note:
        'No accreditation seal, financial statement, annual report or Form 990 link found on the site as of 18 September 2026. This is the gap to close first.',
    },
    outcomeEvidence: {
      value: 1,
      note:
        'Results are anecdotal — 70 baptisms in Ethiopia, 350+ widows reached, 300+ disciple makers in training — rather than annual totals with definitions.',
    },
    costEvidence: { value: 0, note: 'Neither spending nor annual outcome totals are published.' },
  },
  notVerified: [
    'Whether TTI is ECFA accredited or publishes audited financials anywhere. Nothing was findable on the site.',
    'Total churches planted and planters trained per year. The site reports stories, not totals.',
    'Church-planting counts are the easiest figures in missions to double-count across partner organisations. Any number here needs a definition of what counts as a church.',
  ],
  notes: [
    'Included as a research lead, not a recommendation. Cost per church planted is the single most useful number this directory could add, and TTI is the kind of ministry that would have it internally.',
  ],
  siteUrl: 'https://www.ttiglobal.org/',
  giveUrl: 'https://www.ttiglobal.org/give',
  sources: [
    {
      id: 'tti-site',
      label: 'Homepage',
      url: 'https://www.ttiglobal.org/',
      publisher: 'The Timothy Initiative',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
  ],
};
