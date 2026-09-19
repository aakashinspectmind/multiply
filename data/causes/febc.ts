import type { Cause } from '@/lib/types';

export const febc: Cause = {
  slug: 'febc',
  name: 'FEBC',
  legalName: 'Far East Broadcasting Company',
  ein: '95-1461574',
  tagline:
    'Grants most of its budget to 19 nationally run broadcasting offices across Asia, and publishes what each one received.',
  category: 'media',
  countries: [
    'Cambodia',
    'China',
    'India',
    'Indonesia',
    'Japan',
    'Kazakhstan',
    'Kyrgyzstan',
    'Mongolia',
    'Myanmar',
    'Pakistan',
    'Philippines',
    'Russia',
    'South Korea',
    'Thailand',
    'Ukraine',
    'Vietnam',
  ],
  whatTheyDo:
    'FEBC has broadcast Christian radio into Asia since 1945. The US office does three things: it produces programming in its own studios in Mandarin, Tagalog, Hmong, Korean and Vietnamese; it provides leadership, training and IT to 19 affiliate offices; and it sends grants to broadcasting stations in other countries that its own Form 990 says are not under its control. Its Schedule F reports zero offices and four agents outside the United States — the stations themselves are separate national organisations.',
  accreditations: [
    { label: 'ECFA accredited', sourceId: 'febc-financials' },
    { label: 'Charity Navigator 4-star', sourceId: 'febc-financials' },
  ],
  verification: 'self-reported',
  biblicalAlignment: {
    mandate:
      'The commission is to go into all the world and preach, and the argument in Romans is that hearing has to come first — someone has to be sent, and the message has to arrive. Radio arrives in places a person cannot be sent to. That is the whole case for this kind of work, and it is a strong one.',
    scriptures: [
      {
        ref: 'Mark 16:15',
        text: 'Go into all the world and proclaim the gospel to the whole creation.',
      },
      {
        ref: 'Romans 10:14',
        text: 'How then will they call on him in whom they have not believed? And how are they to believe in him of whom they have never heard? And how are they to hear without someone preaching?',
      },
      {
        ref: 'Matthew 28:19–20',
        text: 'Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all that I have commanded you.',
      },
    ],
    doctrine: { label: 'Statement of Faith', sourceId: 'febc-mission' },
    concerns: [
      'Fifty-six per cent of program spending — $8,204,680 of $14,643,421 — leaves as grants to stations the audit says are “not under the direct control of the U.S. office”. Their books are not in this audit and are not published anywhere we could find. FEBC does publish what each country received, which is more than most grant-makers do, but a donor is funding organisations whose accounts nobody outside them has seen.',
      'FEBC names its grants to Russia, Ukraine, China, Pakistan and Myanmar in a public filing, down to the dollar. That transparency is good for a donor and it is a live exposure for the people receiving the money — Russia’s foreign-agent law and China’s restrictions on foreign religious funding both turn a published grant into evidence. We have no way to know whether the local offices would prefer less disclosure.',
      '“Listener engagements” is FEBC’s headline number and it is defined nowhere. Radio has no way to count listeners; whatever is being counted here is something else, and until FEBC says what, the figure cannot be used for anything.',
    ],
  },
  roi: {
    levers: ['local-workers', 'local-cost-base', 'existing-network', 'digital-distribution'],
    reason:
      'The US office keeps no overseas staff at all — Schedule F reports zero foreign offices and four agents — so almost everything it sends abroad is spent as a local wage by a local organisation in an economy far below the donor’s. Myanmar’s income per person is about 67 times below the United States. The 260 transmitters and stations already exist, so a gift buys airtime and programming rather than infrastructure. Broadcast also has the property that one transmission costs the same whether ten people or ten thousand are listening, which is the real economic lever here — and it is exactly the property that produces fraction-of-a-cent claims elsewhere in this sector. We are naming it as a mechanism, not pricing anything with it.',
  },
  ministryClaims: [
    {
      quote: 'Last year we received 150 million listener engagements to the Gospel.',
      sourceId: 'febc-impact',
    },
    {
      quote:
        'FEBC broadcasts are heard in 152 languages and in 50 countries around the world aired from 260 stations and transmitters, totaling 1,571 hours of programming a day/365 days a year.',
      sourceId: 'febc-impact',
    },
    {
      quote:
        'Over 82% of funds donated to FEBC go directly to sharing the Gospel in hard-to-reach places.',
      sourceId: 'febc-financials',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 3,
      note: 'A full evangelical statement of faith is published, the mission statement is about the gospel and nothing else, and the ministry’s stated commitment is to “meeting the spiritual needs of our listeners”. There is no ambiguity about what this organisation is for.',
    },
    localLeadership: {
      value: 2,
      note: 'The broadcasting is done by 19 nationally run affiliate offices, and the audit’s country-by-country grant table shows the money genuinely going to them. Marked down because governance, fundraising and the largest single production budget stay in Frisco, Texas, and the US office describes its own role as providing “leadership, consulting services and training” to the affiliates.',
    },
    financialTransparency: {
      value: 2,
      note: 'Audited statements and the Form 990 are both posted on the site, the audit breaks grants down by country, and Schedule F shows the foreign structure honestly. Held at 2 because the two documents covering the same fiscal year disagree on program services by $88,950, and because the majority of program spending goes to entities whose own accounts are not published.',
    },
    outcomeEvidence: {
      value: 1,
      note: 'Stations, languages, countries and broadcast hours are all counted, but those are inputs. The only thing offered as a result is “150 million listener engagements”, which is undated and undefined. No responses, letters, calls or app messages are published.',
    },
    costEvidence: {
      value: 0,
      note: 'There is no denominator here that can honestly be divided into the spending. We looked, and the absence is the finding.',
    },
  },
  notVerified: [
    'What a “listener engagement” is. FEBC publishes 150 million of them as its headline result and never defines the unit, dates the year, or says whether one person can generate several. We did not build a cost per outcome on it, and would not until it is defined.',
    'What happens to $8,204,680 of grants. The audit lists the amount per country — Vietnam $2,191,750, Thailand $1,155,151, Russia and Ukraine $1,090,000 and so on — but the receiving organisations publish nothing, and FEBC does not say who audits them.',
    'Why the audit and the Form 990 disagree. Both cover the year ended 30 June 2025. The audit reports $14,643,421 of program services and $17,671,560 of total expenses; the 990 reports $14,554,471 and $17,700,563. Neither document explains the $88,950 gap on program spending.',
    'Whether the 152 languages, 50 countries, 260 stations and 1,571 daily hours are current figures. They appear on the impact page with no year attached.',
    'What the stations actually broadcast, and to whom. FEBC has no offices overseas and four agents in total, so nobody the donor is funding is auditing programme content on the ground in a way that is published.',
    'Whether the 19 affiliate offices are safe to name. FEBC publishes grant amounts by country for places where foreign religious funding is legally hazardous. We cannot tell from outside whether the local offices consented to that level of disclosure.',
    'Whether the “Over 82%” claim is about donations or about all expenses. The audit supports it as a share of total expenses (82.9% program, 7.1% administration, 10.1% fundraising); the site phrases it as a share of “funds donated”, which is a different denominator.',
  ],
  notes: [
    'We deliberately did not build a cost per outcome. The arithmetic was available — 1,571 hours of programming a day over 365 days is 573,415 broadcast hours, and $14,643,421 of program spending divided by that is about $26 an hour — but the hours figure is undated, most of those hours are aired by stations FEBC only part-funds, and pairing an undated marketing statistic with an audited figure would produce a number that looks checked and is not.',
    'The “2024 Form 990” on FEBC’s site covers the tax year beginning 1 July 2024 and ending 30 June 2025. A donor comparing it to a calendar-year charity is a year out.',
    'FY2025 looks stronger than the operations were. A $7,093,146 gain on the sale of real estate in La Mirada, California sits in the year’s results and is not recurring revenue.',
    'Program spending is split three ways in the 990: $8,204,680 of grants to affiliates, $3,847,676 of programme production in the US studios, and $2,074,052 of leadership, training and IT for the affiliate offices.',
  ],
  siteUrl: 'https://www.febc.org/',
  giveUrl: 'https://www.febc.org/donate-online/',
  sources: [
    {
      id: 'febc-site',
      label: 'Homepage',
      url: 'https://www.febc.org/',
      publisher: 'FEBC',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'febc-mission',
      label: 'Our Mission, Vision and Statement of Faith',
      url: 'https://www.febc.org/mission/',
      publisher: 'FEBC',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Carries the full statement of faith, the mission statement, and FEBC’s “Commitment to Ministry”.',
    },
    {
      id: 'febc-impact',
      label: 'Impact',
      url: 'https://www.febc.org/impact/',
      publisher: 'FEBC',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Source of the 150 million “listener engagements” claim and the 152 languages / 50 countries / 260 stations / 1,571 hours figures. None of them is dated.',
    },
    {
      id: 'febc-financials',
      label: 'Financial Accountability',
      url: 'https://www.febc.org/about/financial-accountability/',
      publisher: 'FEBC',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Displays the ECFA accredited seal and a Charity Navigator 4-star badge, states 8% administration and 10% fundraising, and links the audit and the Form 990.',
    },
    {
      id: 'febc-audit-25',
      label: 'Audited financial statements, years ended 30 June 2025 and 2024',
      url: 'https://www.febc.org/wp-content/uploads/2026/03/FEBC-2025-FS-FINAL.pdf',
      publisher: 'FEBC',
      documentType: 'audited-financials',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note: 'Broadcast operations $14,643,421 of $17,671,560 total expenses. Note 11 lists grants to affiliates by country, totalling $8,204,680, and states the stations are not under the direct control of the US office.',
    },
    {
      id: 'febc-990-24',
      label: 'Form 990 for the tax year 1 July 2024 to 30 June 2025',
      url: 'https://www.febc.org/wp-content/uploads/2026/03/2024-FEBC-990-Public-Copy.pdf',
      publisher: 'FEBC',
      documentType: 'form-990',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note: 'Part III splits program spending into grants ($8,204,680), US studio production ($3,847,676) and support to 19 affiliate offices ($2,074,052). Part IX line 25 reports $14,554,471 of program services. Schedule F reports zero foreign offices and four agents.',
    },
  ],
};
