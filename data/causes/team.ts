import type { Cause } from '@/lib/types';

export const team: Cause = {
  slug: 'team',
  name: 'TEAM',
  legalName: 'The Evangelical Alliance Mission',
  ein: '36-2169146',
  tagline:
    'A 135-year-old sending agency that places workers inside existing national churches — and publishes no financial statement of its own.',
  category: 'evangelism',
  countries: [
    'Africa',
    'Latin America',
    'East Asia',
    'South Asia',
    'Southeast Asia',
    'Europe',
    'Middle East & North Africa',
  ],
  whatTheyDo:
    'TEAM began in 1890 as one man\'s plan to send a hundred missionaries to China and is now a mid-sized sending agency whose stated model is to work through churches that already exist: "we are from the Church, for the Church". It recruits and sends mid- to long-term workers in church planting, education, healthcare, the arts and community development, and reports 515 active mid- to long-term missionaries, 17 short-term workers and 282 sending churches. In the year to 31 March 2026 it spent $28,877,970 on programmes out of $34,660,903 of total expenses — figures that reach the public only through its ECFA profile, because TEAM publishes no financial statements of its own.',
  accreditations: [{ label: 'ECFA accredited since April 2005', sourceId: 'team-ecfa' }],
  verification: 'self-reported',
  biblicalAlignment: {
    mandate:
      "Sending is the plainest mandate in the New Testament: the church at Antioch set apart two men and sent them, and the letters that followed are the record of what sending produced. TEAM's particular emphasis is the second half of 3 John — that supporting sent workers makes the sender a fellow worker for the truth — combined with a conviction that the sent worker should join a church that is already there rather than start from nothing.",
    scriptures: [
      {
        ref: 'Acts 13:2–3',
        text: 'While they were worshipping the Lord and fasting, the Holy Spirit said, “Set apart for me Barnabas and Saul for the work to which I have called them.” Then after fasting and praying they laid their hands on them and sent them off.',
      },
      {
        ref: '3 John 5–8',
        text: 'Beloved, it is a faithful thing you do in all your efforts for these brothers, strangers as they are, who testified to your love before the church. You will do well to send them on their journey in a manner worthy of God. For they have gone out for the sake of the name, accepting nothing from the Gentiles. Therefore we ought to support people like these, that we may be fellow workers for the truth.',
      },
      {
        ref: 'Revelation 7:9',
        text: 'After this I looked, and behold, a great multitude that no one could number, from every nation, from all tribes and peoples and languages, standing before the throne and before the Lamb.',
      },
    ],
    doctrine: { label: 'Statement of Faith', sourceId: 'team-faith' },
    concerns: [
      "TEAM publishes no financial statement anywhere on its own site. There is no audit, no Form 990, no annual report and no financials page — the URL a donor would try returns a not-found page. Every figure on this page comes from TEAM's ECFA profile, which restates TEAM's own statements without publishing them. For an agency of this size and age, that is the weakest financial disclosure in this batch, and it is the reason this cause carries no cost model.",
      "Between 31 March 2024 and 31 March 2025, TEAM's reported total assets fell from $78,946,066 to $59,373,309 and total liabilities fell from $24,260,399 to $6,211,595, while net assets moved only $1,523,953. Something close to $19 million left both sides of the balance sheet in one year. That is the kind of movement a set of financial statement notes exists to explain, and TEAM publishes no notes.",
      "Eleven of the fifty-two countries TEAM highlights on its map are in western or central Europe — Austria, Czechia, France, Germany, Greece, Hungary, Ireland, Italy, Portugal, Spain and the United Kingdom — and the map also highlights Canada, Japan, South Korea, Singapore and the United States. A large share of TEAM's workers are therefore living at high-income living costs. That may well be the right call for the places least reached in Europe and East Asia, but TEAM publishes no breakdown of spending by region, so a donor cannot tell how the money divides between a worker in Chad and a worker in Austria.",
      'The country count does not hold still. The why-TEAM page says "48 Countries Impacted", the about and giving pages say "over 40 countries", the map highlights 52, and TEAM\'s own field taxonomy has six entries — Africa, Americas, Asia, Europe, Middle East and Remote. None of the four can be reconciled to the others from anything published.',
      'The figures TEAM does publish are all inputs and all undated. 515 missionaries, 17 short-term workers, 282 sending churches, 48 countries: no year is attached to any of them, and there is no count of churches planted, leaders trained or people served anywhere on the site.',
    ],
  },
  roi: {
    levers: ['existing-network'],
    reason:
      'TEAM does not claim a cost advantage and we will not invent one for it — a sent American in Vienna or Tokyo costs what living in Vienna or Tokyo costs, and TEAM publishes no regional spending breakdown that would let anyone work out where the money actually goes. The lever it does claim, in its own words, is that its workers join something already standing: "We engage existing churches globally in cooperative efforts to accomplish His mission… we are from the Church, for the Church." A worker placed inside a functioning national church is not paying to build the channel, which is a genuine structural saving over pioneering from scratch. TEAM publishes nothing that would let a donor check whether it happens, or how often.',
  },
  ministryClaims: [
    {
      quote:
        'Our mission is to partner with the global Church in sending disciples who make disciples and establish missional churches for the glory of God.',
      sourceId: 'team-about',
    },
    {
      quote:
        'We engage existing churches globally in cooperative efforts to accomplish His mission, believing that the Church is central to God’s plan. TEAM global workers work in partnership with the global Church – we are from the Church, for the Church.',
      sourceId: 'team-about',
    },
    {
      quote:
        'TEAM walks with churches, global workers, and supporters, so together we can bring the hope of Jesus to places still waiting to hear His name, nurturing communities of faith that grow and thrive.',
      sourceId: 'team-about',
    },
    {
      quote:
        'Your gift to the Global Outreach Fund (or GO Fund), allows us to send hundreds of TEAM workers to serve alongside local believers in over 40 countries.',
      sourceId: 'team-give',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 3,
      note: 'A detailed and conservative statement of faith: the Scriptures inspired and "without error in the original writings", the Trinity, the virgin birth and bodily resurrection, substitutionary atonement as the only ground of justification, and the whole human race lost apart from repentance and faith. The stated purpose is making disciples and establishing churches.',
    },
    localLeadership: {
      value: 1,
      note: 'TEAM\'s own framing is better than most — workers are placed in partnership with existing national churches, and the phrase "from the Church, for the Church" is doctrine rather than marketing. But the field force TEAM funds and counts is 515 sent workers, and no count of national staff, national leaders or nationally led churches is published, nor any breakdown of what share of spending reaches them.',
    },
    financialTransparency: {
      value: 1,
      note: 'ECFA accreditation since 2005 and three years of restated totals on the ECFA site are real disclosure, and the ECFA figures are current — the year ended 31 March 2026 is the most recent in this batch. But TEAM itself publishes nothing: no audit, no Form 990, no annual report, and no accountability or financials page. The IRS record for its EIN carries no return data at all. A $19 million balance-sheet movement sits unexplained because there are no notes to read.',
    },
    outcomeEvidence: {
      value: 1,
      note: 'Four counts are published — 48 countries, 282 sending churches, 515 mid- to long-term missionaries, 17 short-term workers — and every one of them is an input, undated, and in the case of the country count contradicted elsewhere on the same site. Nothing is published about what the work produced.',
    },
    costEvidence: {
      value: 1,
      note: "Both halves of a division exist, which is why this is not a 0, and they cannot honestly be divided: the spending is a third party's restatement for the year ended March 2026 and the worker count is an undated website figure. We show the arithmetic in the notes below and label it as arithmetic rather than putting it in a cost model.",
    },
  },
  notVerified: [
    "Why roughly $19 million left both sides of TEAM's balance sheet between March 2024 and March 2025. Total assets fell $19,572,757 and total liabilities fell $18,048,804 while net assets moved only $1,523,953. That is the single most important thing we could not verify, and it is unverifiable by design: TEAM publishes no statements and therefore no notes.",
    "Any of TEAM's figures at source. Everything financial on this page comes from ECFA restating statements that TEAM does not publish. ECFA accreditation is meaningful and its data is marked as taken from the organisation's financial statements, but a donor cannot read the statements themselves.",
    'When the 515 missionary count was taken. No date appears next to it, so we do not know whether it belongs to the same fiscal year as the $28,877,970 of programme spending.',
    'How many countries TEAM works in. Four different answers — 48, over 40, 52 on the map, six regions in the field taxonomy — and no way to reconcile them.',
    'What the GO Fund actually funds. The giving page says a gift to it "allows us to send hundreds of TEAM workers", and no share of income, share of spending, or worker count is attached to that. TEAM publishes no assessment or administrative fee percentage either, so there is no published figure for what a gift to a named worker loses on the way.',
    'What the $370,078 booked as "Other" expenses in the year to March 2026 is. It appears for the first time in three years and ECFA gives it no label.',
    'Executive compensation. No Form 990 is available — the IRS record for the EIN contains no filings at all — so none is published.',
    'Anything TEAM produced: churches planted, leaders trained, students taught, patients seen. None of it is counted publicly.',
    "How TEAM's spending divides between its high-income and low-income fields. With no audit there is no Schedule F and no regional breakdown of any kind.",
  ],
  notes: [
    "Restated financial data from TEAM's ECFA profile for the year ended 31 March 2026: cash donations $30,054,674, other revenue $5,101,940, total revenue $35,156,614. Programme $28,877,970 (83.3%), administrative $3,279,132 (9.5%), fundraising $2,133,723 (6.2%), other $370,078 (1.1%), total expenses $34,660,903. Total assets $57,393,260, total liabilities $3,735,835, net assets $53,657,425.",
    "Nothing here to divide, so there is no cost model. For scale only: $28,877,970 of programme spending for the year ended March 2026 against the website's undated figure of 515 active mid- to long-term missionaries is about $56,074 per missionary-year. That is arithmetic across two sources of different vintage, one of them a third party and one of them undated, not a verified figure — which is exactly why it is here and not in the cost model. It does land in the same range as the audited divisions elsewhere in this category: $59,988.94 for ABWE, $64,227.91 for Frontiers USA, $74,129.28 for Serge.",
    "Programme spending has fallen three years running on ECFA's figures: $30,485,866 for the year ended March 2024, $30,538,017 for 2025, $28,877,970 for 2026. Total expenses fell from $36,705,050 to $34,660,903 over the same period.",
    'TEAM\'s field locations are published as six regions — Africa, Americas, Asia, Europe, Middle East and Remote. The regions on this page are our expansion of "Americas" and "Asia" into this directory\'s region list; TEAM names no individual country in its own taxonomy, so there is no national cost base to show.',
    'TEAM is one of the oldest agencies in this directory. It was founded in 1890 by Fredrik Franson, who set out to send a hundred missionaries to China.',
  ],
  siteUrl: 'https://www.team.org/',
  giveUrl: 'https://www.team.org/ways-to-give/',
  sources: [
    {
      id: 'team-site',
      label: 'Homepage',
      url: 'https://www.team.org/',
      publisher: 'TEAM',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
    },
    {
      id: 'team-about',
      label: 'About The Evangelical Alliance Mission',
      url: 'https://www.team.org/about-the-evangelical-alliance-mission/',
      publisher: 'TEAM',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: 'Source of the mission statement, the "from the Church, for the Church" partnership commitment and the founding history. Also the source of the "over 40 countries" claim.',
    },
    {
      id: 'team-faith',
      label: 'Statement of Faith',
      url: 'https://www.team.org/statement-of-faith/',
      publisher: 'TEAM',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
    },
    {
      id: 'team-why',
      label: 'Why TEAM',
      url: 'https://www.team.org/why-team/',
      publisher: 'TEAM',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: "The only page carrying TEAM's counts: 48 Countries Impacted, 282 Sending Churches, 515 Active mid- to long-term missionaries, 17 Active short-term missionaries. No date is attached to any of them.",
    },
    {
      id: 'team-wws',
      label: 'Where We Serve',
      url: 'https://www.team.org/where-we-serve/',
      publisher: 'TEAM',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: 'An interactive map that highlights 52 countries, against the 48 claimed elsewhere. The page names no country in text and links to a field taxonomy of six regions.',
    },
    {
      id: 'team-give',
      label: 'Ways to Give',
      url: 'https://www.team.org/ways-to-give/',
      publisher: 'TEAM',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: 'Describes the Global Outreach Fund, which is the closest thing TEAM publishes to an answer about undesignated giving. No fee percentage appears anywhere on it.',
    },
    {
      id: 'team-ecfa',
      label: 'ECFA accredited organisation profile: The Evangelical Alliance Mission',
      url: 'https://www.ecfa.org/MemberProfile.aspx?ID=16122',
      publisher: 'Evangelical Council for Financial Accountability',
      documentType: 'third-party',
      retrieved: '2026-09-19',
      note: 'Confirms accreditation since 18 April 2005 and the 1890 founding date.',
    },
    {
      id: 'team-ecfa-fin',
      label: 'ECFA comparative financial data: The Evangelical Alliance Mission',
      url: 'https://www.ecfa.org/ComparativeFinancialData.aspx?ID=16122&Type=Member',
      publisher: 'Evangelical Council for Financial Accountability',
      documentType: 'third-party',
      retrieved: '2026-09-19',
      fiscalYear: 'FYE March 2026',
      note: "The only source for any TEAM financial figure. Three fiscal years ending 31 March 2024, 2025 and 2026, restated by ECFA from TEAM's own financial statements, which TEAM does not publish. Source of the programme spending on this page and of the balance-sheet movement described above.",
    },
    {
      id: 'team-propublica',
      label: 'IRS record for Evangelical Alliance Mission, EIN 36-2169146',
      url: 'https://projects.propublica.org/nonprofits/organizations/362169146',
      publisher: 'ProPublica Nonprofit Explorer',
      documentType: 'third-party',
      retrieved: '2026-09-19',
      note: 'Confirms the EIN and the legal name. The record contains no filings with data and no filings without data — TEAM files no public Form 990, which is normal for an agency treated as a religious organisation and is why the ECFA restatement is the only financial source on this page.',
    },
  ],
};
