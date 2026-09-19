import type { Cause } from '@/lib/types';

export const openDoors: Cause = {
  slug: 'open-doors',
  name: 'Open Doors',
  legalName: 'Stichting Open Doors International',
  tagline:
    'Seventy years of Bibles, training and relief for persecuted Christians — and no consolidated accounts anywhere.',
  category: 'persecuted-church',
  countries: ['Global'],
  whatTheyDo:
    'Open Doors was founded by Brother Andrew, who began carrying Bibles across the Iron Curtain in 1955. It now supplies Bibles and literature, trains church leaders under pressure, funds emergency relief and community development for Christians targeted for their faith, and publishes the World Watch List ranking the countries where following Christ costs most. Structurally it is a network: national offices in 25 countries raise money and send it to a Dutch foundation, Stichting Open Doors International, which passed EUR 41.5 million back out to Open Doors ministries worldwide in 2025. No entity in that network publishes consolidated global accounts.',
  accreditations: [],
  verification: 'self-reported',
  biblicalAlignment: {
    mandate:
      'Scripture does not treat the suffering church as someone else’s problem. Hebrews commands remembering prisoners as though you were in prison with them — not praying about them from a distance but sharing the condition. Paul’s argument is stronger still: in one body, the injury to one part is the injury to all, so a believer in Nigeria or North Korea is not a cause to support but a member to suffer with. Open Doors put 1 Corinthians 12:26 in their own purpose statement, and the practical form it takes here is the same list Christ gives in Matthew 25 — food, clothing, visiting the imprisoned.',
    scriptures: [
      {
        ref: 'Hebrews 13:3',
        text: 'Remember those who are in prison, as though in prison with them, and those who are mistreated, since you also are in the body.',
      },
      {
        ref: '1 Corinthians 12:26',
        text: 'If one member suffers, all suffer together; if one member is honoured, all rejoice together.',
      },
      {
        ref: 'Matthew 25:35–36',
        text: 'For I was hungry and you gave me food, I was thirsty and you gave me drink, I was a stranger and you welcomed me, I was naked and you clothed me, I was sick and you visited me, I was in prison and you came to me.',
      },
    ],
    doctrine: { label: 'Statement of Faith', sourceId: 'od-sof' },
    concerns: [
      'For a ministry of this size and age, almost nothing financial is published. The only document we could obtain anywhere in the network is a three-page summary of the Dutch foundation’s 2025 annual report. There is no consolidated statement of what Open Doors spends worldwide, the US site’s own financial-accountability link returns a 404, and opendoorsus.org refused our requests outright. A donor cannot find out what the 2.5 million Bibles cost.',
      'In that one document, the hub’s administration costs of EUR 2,335,000 are larger than its own programme expenses of EUR 2,298,000, and it retained roughly EUR 8.4 million of the year’s income while already holding EUR 21,140,000 in cash. None of that is explained. A reserve policy would explain it in a sentence; there isn’t one in the summary.',
      'Open Doors both produces the World Watch List and raises money on it. The ranking is widely cited by journalists and governments as though it were independent research, and it is the ministry’s own. That does not make it wrong — it is the most serious attempt anyone makes at this — but a donor should know the number that motivates the appeal and the organisation making the appeal are the same.',
      'Help here is targeted by religious identity, in places where the neighbours are often just as poor. Scripture does direct particular care to the household of faith, so this is the mandate rather than a distortion of it, and it is also the kind of targeting that can create local resentment or an incentive to be counted as a Christian. Nothing published explains how recipients are identified or how that risk is managed.',
    ],
  },
  roi: {
    levers: ['local-workers', 'existing-network', 'local-cost-base'],
    reason:
      'Open Doors does not build a parallel church. Its stated method is to strengthen congregations, pastors and believers who are already there — so the training, the literature and the relief are delivered through local churches that already exist, by people who already live in the country and are paid at its wages. That is the cheapest possible delivery structure and the only one that works where a foreign organisation cannot register an office. The caveat is that this page cannot price any of it, because the network publishes no spending figure to divide.',
  },
  ministryClaims: [
    {
      quote: 'Last year, Open Doors distributed more than 2.5 million bibles and books worldwide.',
      sourceId: 'od-how-we-help',
    },
    {
      quote:
        'In the last year, Open Doors trained 5.7 million persecuted Christians across the world.',
      sourceId: 'od-how-we-help',
    },
    {
      quote:
        'In 2024 Open Doors helped 535,000 persecuted Christians with emergency relief, community development, education and medical care.',
      sourceId: 'od-how-we-help',
    },
    {
      quote:
        'Our national bases in 25 countries work to raise awareness of global persecution, mobilising prayer, support and action among Christians!',
      sourceId: 'od-how-we-help',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 3,
      note: 'Open Doors describes itself in its own words as “an evangelical Christian ministry”, publishes the Apostles’ Creed, and its purpose statement is about strengthening Christians under persecution and encouraging their involvement in world evangelism. There is no ambiguity anywhere in its materials.',
    },
    localLeadership: {
      value: 2,
      note: 'The model is to support churches and believers already in place rather than to deploy staff, and most of the hub’s income is passed onward rather than spent in the Netherlands. Held at 2 because governance sits in a Dutch foundation, no field leader or partner organisation is named anywhere — for reasons that are legitimate — and the document does not say whether the EUR 41.5 million goes to field ministries or to the Western national offices.',
    },
    financialTransparency: {
      value: 1,
      note: 'One three-page summary, for one entity, in euros, covering a hub that does not do the fieldwork. No audited statements, no consolidated global figures, no Form 990 we could retrieve, no accreditation we could confirm, and a financial-accountability page that returns a 404. This is the weakest financial disclosure of any cause in this batch, and the size of the ministry makes it harder to excuse rather than easier.',
    },
    outcomeEvidence: {
      value: 1,
      note: 'Three large counts are published — Bibles distributed, Christians trained, Christians helped — which is more than nothing. But two are dated only as “last year”, the third is 2024, none is tied to a financial statement, “trained” is never defined, and 5.7 million is an extraordinary figure to publish without a definition.',
    },
    costEvidence: {
      value: 0,
      note: 'There is no global spending figure in existence that a donor can read, so nothing can be divided by anything. This is a finding, not an oversight on our part.',
    },
  },
  notVerified: [
    'What Open Doors spends worldwide. This is the central gap. We can state the finances of exactly one entity in the network — the Dutch hub, with EUR 5,183,000 of its own expenses and EUR 41,519,000 passed onward — and nothing about the ministries that actually distribute the Bibles and run the training.',
    'What “trained” means. Open Doors reports 5.7 million persecuted Christians trained in a year. That is an average of over 15,000 people a day. It may well be counting attendance at brief awareness or preparation sessions, but nothing says so, and we will not divide anything by a unit this undefined.',
    'Which year each headline figure belongs to. Two are “last year” with no year named; the relief figure is explicitly 2024. They cannot be compared with each other or with any financial period.',
    'Whether any of the counts has been checked by anyone outside Open Doors.',
    'The US entity’s finances. An American donor gives to Open Doors US, whose own site refused our requests (HTTP 429) and whose financial-accountability page on opendoors.org returns a 404. We could not read a single figure for it.',
    'The US entity’s EIN. The identifier we were given for Open Doors US resolves in IRS data to a differently named organisation in Santa Ana, California, so we publish no EIN here rather than a wrong one.',
    'Who receives the EUR 41,519,000 of “support to OD-ministries worldwide”, and whether those recipients are field programmes or the network’s own national fundraising offices.',
    'Why the Dutch hub’s administration costs exceed its own programme spending, and why roughly EUR 8.4 million of 2025 income was retained on top of EUR 21,140,000 of existing cash.',
    'Who governs Open Doors International. The Dutch filing states plainly that board members could be obstructed in carrying out their duties if their names were published, and withholds them. That is a reasonable security judgement; the consequence is that nobody outside can assess the board.',
    'Whether the World Watch List’s figure of more than 388 million Christians facing high levels of persecution has been reviewed by anyone independent of Open Doors.',
  ],
  notes: [
    'We deliberately did not build a cost per outcome. The only expense figures available are in euros, belong to a hub that distributes money rather than Bibles, and cover a different scope from the global counts. Dividing EUR 5.2 million of Dutch overhead by 2.5 million Bibles would produce a number with no meaning, and dividing by the 5.7 million “trained” would be worse.',
    'Two silences are being treated as one, and they are not equivalent. Open Doors withholds partner names, locations, photographs and even its own directors’ names because publishing them could get people arrested or killed. We accept that entirely, and a donor should too — this is the one field where secrecy is a form of care. But a consolidated financial statement is aggregate by definition. It names no village and no pastor. Its absence is a choice about disclosure, not a security measure, and we go on asking for it.',
    'The structure a donor is entering: national offices in 25 countries raise funds, send them to Stichting Open Doors International in the Netherlands, and the hub redistributes. In 2025 the hub received EUR 54,876,000 in contributions from Open Doors ministries worldwide against total support and revenue of EUR 55,123,000, and sent EUR 41,519,000 back out. Its own programme spending of EUR 2,298,000 covered Bible and literature distribution, training, public awareness, socio-economic support, and research and advocacy — the last of which, at EUR 1,094,000, is nearly half.',
    'Open Doors’ purpose statement quotes 1 Corinthians 12:26 directly, which is unusually specific for a mission statement and is the strongest thing on its site. The ministry has been doing this since 1955, which is longer than any comparable organisation.',
  ],
  siteUrl: 'https://www.opendoors.org/en-US/',
  giveUrl: 'https://www.opendoors.org/en-US/donate/',
  sources: [
    {
      id: 'od-site',
      label: 'Homepage',
      url: 'https://www.opendoors.org/en-US/',
      publisher: 'Open Doors',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'od-about',
      label: 'About Open Doors',
      url: 'https://www.opendoors.org/en-US/about/',
      publisher: 'Open Doors',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Carries the purpose statement, the core values and the World Watch List 2026 headline figure.',
    },
    {
      id: 'od-sof',
      label: 'Statement of Faith',
      url: 'https://www.opendoors.org/en-US/about/statement-faith/',
      publisher: 'Open Doors',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'States that Open Doors is an evangelical Christian ministry and publishes the Apostles’ Creed as its doctrinal basis.',
    },
    {
      id: 'od-how-we-help',
      label: 'How We Help',
      url: 'https://www.opendoors.org/en-US/how-we-help/',
      publisher: 'Open Doors',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Source of all four outcome claims: 2.5 million Bibles and books, 5.7 million Christians trained, 535,000 helped in 2024, and national bases in 25 countries.',
    },
    {
      id: 'od-history',
      label: 'Our History',
      url: 'https://www.opendoors.org/en-US/about/our-history/',
      publisher: 'Open Doors',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Brother Andrew’s founding of the ministry and its work from 1955 onward.',
    },
    {
      id: 'od-odi',
      label: 'Open Doors International, Netherlands',
      url: 'https://www.opendoors.org/en-US/about/odi-netherlands/',
      publisher: 'Open Doors',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'The governance page for the Dutch foundation. States in Dutch that directors’ names are withheld because publishing them could obstruct them in carrying out their duties, and that the board is unpaid.',
    },
    {
      id: 'od-odi-ar-25',
      label: 'Stichting Open Doors International annual report 2025 summary',
      url: 'https://www.opendoors.org/en-US/about/odi-netherlands/odi-nl-annual-report-2025.pdf',
      publisher: 'Stichting Open Doors International',
      documentType: 'annual-report',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note: 'Three pages, in euros, covering the Dutch hub only. Total support and revenue EUR 55,123,000, of which EUR 54,876,000 is contributions from Open Doors ministries worldwide; support to Open Doors ministries worldwide EUR 41,519,000; own programme expenses EUR 2,298,000; fundraising EUR 427,000; administration EUR 2,335,000; total expenses EUR 5,183,000; cash EUR 21,140,000; total fund balance EUR 21,706,000. This is the only financial document we could obtain for any Open Doors entity.',
    },
  ],
};
