import type { Cause } from '@/lib/types';

export const reachingSoulsInternational: Cause = {
  slug: 'reaching-souls-international',
  name: 'Reaching Souls International',
  legalName: 'Reaching Souls International',
  ein: '73-1019628',
  tagline:
    'Supports African and Cuban evangelists instead of sending Americans, and publishes enormous numbers with no dollar figures beside them.',
  category: 'evangelism',
  countries: [
    'Kenya',
    'Malawi',
    'Uganda',
    'Rwanda',
    'Burundi',
    'Tanzania',
    'Zimbabwe',
    'Zambia',
    'Cuba',
    'India',
  ],
  whatTheyDo:
    'Reaching Souls funds evangelists it calls National Missionaries — believers already living and preaching among their own people — with training, financial support and equipment. Its own description of the model is blunt: "We don\'t send any missionaries overseas." The strategy is named after 2 Timothy 2:2 and the missionaries train men they call their Timothies. The ministry publishes a seven-page annual report of results and a page of accreditation seals, and its audited financial statements are available only in hard copy on request.',
  accreditations: [
    { label: 'ECFA accredited since 1994', sourceId: 'rs-ecfa' },
    {
      label: "Charity Navigator 4 stars (ministry's own statement)",
      sourceId: 'rs-accountability',
    },
  ],
  verification: 'self-reported',
  biblicalAlignment: {
    mandate:
      'Romans 10 asks how a people is to hear without a preacher. Reaching Souls answers with a man who already lives there, already speaks the language and already knows the village, and applies 2 Timothy 2:2 by having him train the next man in turn. The mandate is unambiguous and the structure fits it. What is missing is any way for a donor to check what the structure produced.',
    scriptures: [
      {
        ref: 'Romans 10:14–15',
        text: 'And how are they to believe in him of whom they have never heard? And how are they to hear without someone preaching? And how are they to preach unless they are sent?',
      },
      {
        ref: '2 Timothy 2:2',
        text: 'And what you have heard from me in the presence of many witnesses entrust to faithful men, who will be able to teach others also.',
      },
      {
        ref: 'Matthew 9:37–38',
        text: 'The harvest is plentiful, but the labourers are few; therefore pray earnestly to the Lord of the harvest to send out labourers into his harvest.',
      },
    ],
    doctrine: { label: 'Statement of Faith', sourceId: 'rs-faith' },
    concerns: [
      'The headline cost figure in their own annual report is wrong by a factor of a hundred. The graphic reads "0.69¢ COST-PER-SALVATION DECISION" — sixty-nine hundredths of a cent — while the footnote on the same page explains it as "For every 69 cents Reaching Souls International spent on everything". Sixty-nine cents is what their own expense total divided by their own decision count produces. A ministry that puts its cost-effectiveness at the centre of its case for giving has advertised that case with a hundredfold error.',
      'The reported scale is not credible as a measured outcome. 11,595,430 salvation decisions across 2,545 active National Missionaries is about 4,556 decisions per missionary for the year — roughly twelve a day, every day, including the days spent travelling, training and in church. Something is being counted, but it is not twelve individual conversations per worker per day.',
      'No audited financial statement, Form 990 or annual report published by this ministry contains a single dollar figure. The annual report is seven pages of results with no financials at all. The expense total on this page had to come off their accountability web page and their ECFA profile.',
      'The accountability page says the annual audit is "published and available in hard copy upon request". A document available in hard copy on request is not published. For a ministry with $10.4m of assets, requiring a phone call to see the audit is a choice.',
      'The published expense split is 80% missions, 10% development, 10% administration — three round numbers with no dollar amounts behind any of them. No functional expense statement is published anywhere.',
      'The founding date does not agree with itself. The annual report says "since our founding in 1986"; the IRS ruling year and the ECFA profile both say 1977, and the ECFA profile records membership since December 1994. The cumulative totals — 130 million decisions, 75,000 church starts — are dated from 1986, so a decade of history is either missing or being excluded without explanation.',
      "The annual report claims 16 countries. The ministry's own country list names ten. Nothing published says what the other six are.",
    ],
  },
  roi: {
    levers: ['local-workers', 'local-cost-base', 'existing-network'],
    reason:
      'No American is sent, housed, schooled or insured — the ministry says so in its own words. The money buys training, a bicycle, a sound system and support for an evangelist already living in Kenya, Malawi, Rwanda or Cuba, priced in local terms. In pure structure this is the cheapest way to put a full-time gospel worker in a village, and the lever is real. But the lever is an argument about inputs, and this ministry publishes nothing verifiable about outputs, so nothing here converts that structural advantage into a checked figure.',
  },
  ministryClaims: [
    {
      quote:
        'For every 69 cents Reaching Souls International spent on everything (ministry-wide), including support, sound systems, bicycles, staff, etc., one person accepted Christ.',
      sourceId: 'rs-ar-2425',
      impliedCostPerOutcome: 0.69,
      impliedOutcome: 'salvation decision',
    },
    {
      quote: '0.69¢ COST-PER-SALVATION DECISION',
      sourceId: 'rs-ar-2425',
      impliedCostPerOutcome: 0.0069,
      impliedOutcome: 'salvation decision, as the headline graphic prints it',
    },
    {
      quote:
        'What does that mean? We don’t send any missionaries overseas. We come alongside evangelists who are already sharing the Gospel with their people and provide them with training, resources, and financial support so they can carry out missions more efficiently.',
      sourceId: 'rs-ar-2425',
    },
    {
      quote:
        'Since our founding in 1986, Reaching Souls has recorded more than 130 million salvation decisions, 20 million baptisms, and 75 thousand church starts.',
      sourceId: 'rs-ar-2425',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 3,
      note: 'A statement of faith is published and the ministry does nothing but evangelism, discipleship and church planting. There is no ambiguity about what this organisation is for.',
    },
    localLeadership: {
      value: 3,
      note: 'The entire field force is national evangelists working among their own people, and the ministry states plainly that it sends no missionaries overseas. Leadership, board and office are American.',
    },
    financialTransparency: {
      value: 1,
      note: 'ECFA accreditation since 1994 and an ECFA profile with revenue, expense, asset and net-asset totals for the current year, plus a receipts and expense total on their own accountability page. Nothing else: no audited statements, no Form 990 and no functional expense breakdown beyond a round 80/10/10, with the audit obtainable only in hard copy on request.',
    },
    outcomeEvidence: {
      value: 0,
      note: 'This is a finding, not an absence. Large counts are published annually, but the only unit is a spiritual decision, the per-worker implication is not credible, the headline cost figure is out by a factor of a hundred, and no external party has checked any of it. There is nothing here a donor could verify.',
    },
    costEvidence: {
      value: 1,
      note: 'A cost per outcome is advertised prominently, and a matching-year expense total exists on their accountability page and ECFA profile. It is not enough to build on: no audit, annual report or return published by the ministry contains a dollar figure, and the advertised cost is itself misprinted.',
    },
  },
  notVerified: [
    'What a "church plant" is. Reaching Souls reports 4,843 of them for the year and 75,000 since 1986, and publishes no definition, no size, no leadership requirement and no test of whether the gathering still exists. This is the clearest case in this category of a count with no stated unit.',
    "How many of the 4,843 church plants survive, and whether any becomes self-supporting. No retention figure, no survival rate and no self-sustainability figure is published. The ministry's cumulative church-start total rises every year and is never revised downward, which is only possible if nothing is ever counted as closed.",
    "Any dollar figure from an audited document. The annual report has none. The audit is not posted. No Form 990 covering the year to 30 June 2025 was available from the IRS data we could reach. The $7,957,491 on this page comes from the ministry's own accountability page and its ECFA profile — a self-published figure and a third-party restatement of one.",
    "The 11,595,430 salvation decisions and 2,197,147 baptisms. These are quoted as the ministry's claims and are excluded from every calculation on this page. We do not treat a profession of faith as a delivered unit, and we cannot reconcile 11.5 million decisions with 2,545 workers.",
    'How a decision is recorded and whether the same person can be counted twice — in two meetings, in two villages, or in two successive years.',
    'What the 80/10/10 expense split means in dollars, and what "development" covers.',
    'The other six countries. Sixteen are claimed; ten are named.',
    'Why the ministry dates itself to 1986 when the IRS and ECFA both date it to 1977.',
    'Whether the audited statements, if obtained in hard copy, would agree with the $7,957,491 on the accountability page and the ECFA profile.',
  ],
  notes: [
    "We deliberately did not build a cost per outcome here. It would have been easy: the ministry publishes an expense total of $7,957,491 for the year to 30 June 2025 on its accountability page, and counts for the same twelve months in its annual report. Dividing them would give $1,643.09 per church plant, $3,126.72 per National Missionary and $0.686 per salvation decision. None of that is a verified figure — the numerator is not in any audited document, the denominators have no definitions, and the last of the three is a spiritual outcome we do not count. We are showing the arithmetic so that a donor can see what the ministry's own claim rests on, not because we stand behind it.",
    'That $0.686 is worth one observation: it reproduces the 69 cents in their footnote almost exactly. Their footnote is arithmetically sound. It is the headline graphic — "0.69¢" — that is wrong, by a hundredfold, and it is the headline that a donor sees.',
    'The accountability page reports receipts of $7,049,028 against expenses of $7,957,491 for the year. The ECFA profile gives total revenue of $7,311,695, total expenses of $7,957,491, a deficit of $645,796 and net assets of $9,998,746. The revenue difference is explained: the receipts figure is contributions only, and ECFA adds $262,667 of other revenue.',
    'The ministry spent $645,796 more than it received and still held $9,998,746 of net assets at year end. Its own note says the Lord provided ahead so that support to National Missionaries could continue without interruption, which is a reasonable use of reserves and worth knowing rather than worrying about.',
    'The accountability page describes the four-star rating as coming "from Charity Navigator (GuideStar/Candid)". Charity Navigator and Candid are different organisations with different ratings; the two are conflated here.',
    'The annual report figures on this page are set in designed graphics with no usable text layer. Every count and the two footnote quotes were read off pages rendered at image resolution rather than extracted as text.',
  ],
  siteUrl: 'https://reachingsouls.org/',
  giveUrl: 'https://reachingsouls.org/donation/donate/',
  sources: [
    {
      id: 'rs-site',
      label: 'Homepage',
      url: 'https://reachingsouls.org/',
      publisher: 'Reaching Souls International',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'rs-faith',
      label: 'Statement of Faith',
      url: 'https://reachingsouls.org/statement-of-faith/',
      publisher: 'Reaching Souls International',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'rs-accountability',
      label: 'Accountability',
      url: 'https://reachingsouls.org/accountability/',
      publisher: 'Reaching Souls International',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Source of receipts of $7,049,028 and expenses of $7,957,491 for 1 July 2024 to 30 June 2025, the 80% missions / 10% development / 10% administration split, the board roster, and the statement that the audit is available in hard copy upon request.',
    },
    {
      id: 'rs-ar-2425',
      label: 'FY2425 Annual Report',
      url: 'https://reachingsouls.org/annual-report/',
      publisher: 'Reaching Souls International',
      documentType: 'annual-report',
      retrieved: '2026-09-18',
      fiscalYear: 'FY2425 (1 Jul 2024 – 30 Jun 2025)',
      note: 'Seven pages, no financial figures. Source of 11,595,430 salvation decisions, 2,197,147 baptisms, 4,843 church plants, 2,545 active National Missionaries, 16 countries and the "0.69¢" cost graphic. The report PDF is served from a Dropbox link whose access token expires, so we cite the ministry page that links it; the file itself is Annual_Report_FY2425.pdf.',
    },
    {
      id: 'rs-ecfa',
      label: 'ECFA member profile',
      url: 'https://www.ecfa.org/MemberProfile.aspx?ID=12421',
      publisher: 'Evangelical Council for Financial Accountability',
      documentType: 'third-party',
      retrieved: '2026-09-18',
      fiscalYear: 'FY2425 (1 Jul 2024 – 30 Jun 2025)',
      note: "Accredited since 16 December 1994, founded 1977. Total revenue $7,311,695, total expenses $7,957,491, deficit $645,796, total assets $10,370,989, net assets $9,998,746. Also the source of the ten-country list, in the ministry's own description. No program, administrative or fundraising split is given.",
    },
    {
      id: 'rs-propublica',
      label: 'IRS filings for Reaching Souls International, EIN 73-1019628',
      url: 'https://projects.propublica.org/nonprofits/organizations/731019628',
      publisher: 'ProPublica Nonprofit Explorer',
      documentType: 'third-party',
      retrieved: '2026-09-18',
      note: 'Used to confirm the EIN and the 1977 ruling year. The structured data available to us does not reach the year ended 30 June 2025, which is why the ECFA profile carries the expense total instead.',
    },
  ],
};
