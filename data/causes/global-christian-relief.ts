import type { Cause } from '@/lib/types';

export const globalChristianRelief: Cause = {
  slug: 'global-christian-relief',
  name: 'Global Christian Relief',
  ein: '23-7275342',
  tagline:
    'A $19 million relief and Bible-distribution ministry that counts 2.2 million lives touched and publishes no way to divide a dollar into any of them.',
  category: 'persecuted-church',
  countries: [
    'Africa',
    'Central Asia',
    'East Asia',
    'Latin America',
    'Middle East & North Africa',
    'Southeast Asia',
    'Afghanistan',
    'Burkina Faso',
    'China',
    'Ethiopia',
    'India',
    'Iran',
    'Iraq',
    'Mexico',
    'Myanmar',
    'Nigeria',
    'Pakistan',
    'Sudan',
    'Vietnam',
  ],
  whatTheyDo:
    'Global Christian Relief works entirely through field partners and organises the work as five pillars: Spread the Gospel (Bibles and Scripture in heart languages, increasingly on micro SD cards and audio players), Defend Freedom (advocacy and elevating stories), Break the Cycle (education, training and economic empowerment — its signature project is paying off the debts that hold Christian families in Pakistan’s brick kilns), Ensure Survival (food, shelter, medical care and emergency relief), and Build the Future (discipleship, pastoral training and church development). It also publishes the Red List, an annual ranking of the worst countries for Christian persecution, drawn from the Violent Incidents Database it sponsors. Its annual report is a consumer magazine called Resilience. The ministry is run from Santa Ana, California, was founded in 1973, and has been an ECFA charter member since 1980.',
  accreditations: [
    {
      label: 'Charter member, Evangelical Council for Financial Accountability',
      sourceId: 'gcr-ecfa-profile',
    },
  ],
  verification: 'documents-reviewed',
  biblicalAlignment: {
    mandate:
      'Two commands meet in this ministry and only one of them is countable. The first is Hebrews 13:3 and 1 Corinthians 12:26 — a body in which one part suffering is all of it suffering, which is the verse the organisation’s own appeal letters lean on. The second is that the thing a persecuted believer most often asks for is not rescue but Scripture: the report’s recurring scene is a woman receiving a Bible she could be arrested for owning, and reading it. Delivering the Word into a place where the Word is contraband is Acts 8 work, and the money spent on doing it is defensible whether or not anyone can tell you the cost per copy.',
    scriptures: [
      {
        ref: '1 Corinthians 12:26',
        text: 'If one member suffers, all suffer together; if one member is honored, all rejoice together.',
      },
      {
        ref: 'Hebrews 13:3',
        text: 'Remember those who are in prison, as though in prison with them, and those who are mistreated, since you also are in the body.',
      },
      {
        ref: 'Isaiah 55:11',
        text: 'So shall my word be that goes out from my mouth; it shall not return to me empty, but it shall accomplish that which I purpose.',
      },
      {
        ref: 'Matthew 25:40',
        text: 'Truly, I say to you, as you did it to one of the least of these my brothers, you did it to me.',
      },
    ],
    doctrine: {
      label: 'Statement of faith — the Apostles’ Creed, published as an FAQ answer',
      sourceId: 'gcr-about',
    },
    concerns: [
      'Every number that would let a donor price this work is either missing or unusable. The annual report publishes total expenses of $19,205,523 with a three-way functional split and a set of counts — 89,010 Bibles sent, 34,258 medical checkups, 4,780 food kits, 2,236 shelter kits, 556 businesses, 54 brick-kiln families freed — and no bridge between the two. Its one attempt at a bridge, a pie chart of “2025 Impact Areas”, carries no unit at all. For a ministry that says “we maximize every dollar”, that is a choice, and it is the reason this page shows no cost per outcome.',
      'The Bible pages advertise “100% of Your gift goes directly toward getting Bibles into the hands of your churh family”, on a page whose own ministry spent 14.5% of its expenses on fundraising and 9.6% on administration in the same year. Whatever accounting convention makes that sentence true, no donor reading it will arrive at 75.9%.',
      'Global Christian Relief compiles the Red List and then raises money against the countries it ranks. The circularity is tighter than most: the Red List’s sole source is “the Violent Incidents Database, sponsored by Global Christian Relief”, which is the same database International Christian Concern says it has partnered to support and feeds with its own reporting. Two competing persecution rankings in this one category are being produced from a dataset the two rankers fund.',
      'The ministry’s own account of its footprint does not hold still. The annual report says 22 countries served; the financial-integrity page on the website says “60+ countries”. One of those numbers is delivery and the other is probably monitoring, but the site does not say which, and both are printed as impact.',
      'Its financial history is far more turbulent than its materials suggest. Expenses ran $13.5 million in the year to June 2023, $21.9 million in 2024 and $19.2 million in 2025; deficits of $3,143,708 and $2,665,909 in the first two years were followed by a $1,636,391 surplus. Under this EIN the IRS has transcribed returns only through a December 2020 year-end — showing $28.8 million of expenses under a different name — and nothing since. None of this is explained anywhere, and the ministry publishes neither audited statements nor a Form 990.',
    ],
  },
  roi: {
    levers: ['existing-network', 'local-cost-base', 'digital-distribution', 'durable-asset'],
    reason:
      'Nothing here is delivered by the organisation itself. Field partners who already live in the country identify need and hand over the goods, which is what lets a Santa Ana office reach 22 countries at once, and it means no expatriate posting is being funded. The spending lands in economies where gross national income per person runs from $390 in Afghanistan and $900 in Sudan to $1,360 in Nigeria and $1,500 in Pakistan. The Scripture side adds a digital lever the rest of the work does not have: a micro SD card loaded with a Bible, videos and supporting material costs almost nothing to copy once made, which is why the ministry’s own advertised tiers put SD cards at a third of the price of an audio player. And the brick-kiln debt relief is the most durable thing in the portfolio — 54 families freed in a year is 54 households whose labour stops being collateral.',
  },
  ministryClaims: [
    {
      quote:
        '$50 can supply 10 believers with their own copy of the Bible on a micro SD card, enough for a small group Bible study',
      sourceId: 'gcr-bibles',
      impliedCostPerOutcome: 5,
      impliedOutcome: 'digital Bible on a micro SD card',
    },
    {
      quote:
        '$150 can supply 21 believers with their own physical Bibles, enough for a small home church fellowship',
      sourceId: 'gcr-bibles',
      impliedCostPerOutcome: 7.14,
      impliedOutcome: 'printed Bible',
    },
    {
      quote:
        '$300 can supply 15 believers with their own audio Bibles, equipping church leaders to share the Word with others',
      sourceId: 'gcr-bibles',
      impliedCostPerOutcome: 20,
      impliedOutcome: 'audio Bible',
    },
    {
      quote:
        '100% of Your gift goes directly toward getting Bibles into the hands of your churh family',
      sourceId: 'gcr-bibles',
    },
    {
      quote:
        'Through emergency relief, safe houses, legal assistance, and long-term programs touching 2.2 million believers across 60+ countries, your gifts make a direct impact in the world’s most challenging regions for Christians.',
      sourceId: 'gcr-financial-integrity',
    },
    {
      quote:
        'Data for the Red List comes directly from the Violent Incidents Database, sponsored by Global Christian Relief, a groundbreaking collection of verified, up-to-date records on confirmed, real-world occurrences of Christian persecution.',
      sourceId: 'gcr-red-list',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 2,
      note: 'The first of the five pillars is Spread the Gospel and the largest single count in the year is 89,010 Bibles, so Scripture is the flagship product rather than an add-on, and the core values are explicitly Christ-rooted. Marked down because the only doctrinal statement is the Apostles’ Creed, tucked inside an FAQ accordion on the about page rather than published as a position, and because the relief, medical and economic pillars are described in humanitarian terms throughout.',
    },
    localLeadership: {
      value: 1,
      note: 'The operating model is field partners — “we identify through our field partners”, “partners on the ground” — so the hands are local by design. But no partner organisation is named anywhere, no field leader appears in any material, and the entire published leadership is a seven-person executive team in Santa Ana, all of whose biographies are American careers. The claim is structural and unverifiable.',
    },
    financialTransparency: {
      value: 1,
      note: 'ECFA charter membership is real and ECFA publishes three years of splits from the financial statements, which is the only independent financial record available. Against that: no audited statements and no Form 990 on the site, no returns transcribed by the IRS under this EIN since a December 2020 year-end, and a single page of financial disclosure inside a marketing magazine. A donor who wants the statements must telephone donor services.',
    },
    outcomeEvidence: {
      value: 1,
      note: 'Seven counts are published for the year with clear units — Bibles, checkups, food kits, shelter kits, businesses, families freed — and a regional breakdown of beneficiaries that sums exactly to the headline 2,155,686, which at least shows the arithmetic. That is also the problem: “lives impacted” is a sum of partner-supplied beneficiary figures with no definition, it dwarfs every hard count by a factor of twenty-four, and the countries served figure in the report contradicts the one on the website.',
    },
    costEvidence: {
      value: 1,
      note: 'Both halves nearly exist and cannot be joined. The spending side is a single functional split for the whole ministry; the outcome side is seven counts from five pillars; and the only published allocation across those pillars is a pie chart titled “2025 Impact Areas” with no unit, sitting under a heading about lives rather than dollars. Dividing the whole programme budget by any one count produces a number 20 to 23 times the ministry’s own advertised price, so no honest division exists and none is shown. Not a 0, because the advertised tiers are specific, sourced and quoted above.',
    },
  },
  notVerified: [
    'Any division at all. This is the core finding. Programme spending of $14,580,870 divided by the 89,010 Bibles sent is $163.81, about 23 times Global Christian Relief’s own advertised $7.14 for a printed Bible — an artefact of charging a five-pillar budget to one pillar’s output, not an overstatement by the ministry. Divided by the 2,155,686 lives impacted it is $6.76, which reads cheaper than the advertised price of a single Bible and is therefore just as useless. There is no honest figure between the two, so this page shows none.',
    'Whether the “2025 Impact Areas” chart is money or people. It splits the year five ways — 36% Fostering Generational Faith, 33% Addressing Deep-Rooted Causes, 19% Ensuring Survival, 9% Spreading the Gospel, 3% Creating More Freedom — and those five map recognisably onto the five pillars on the website, though not by the same names. What is missing is the unit. The chart carries no dollar sign and no legend, and it sits under a spread whose text is about “lives that were saved, families that were sustained”. If the percentages were dollars, 9% of programme spending would be $1,312,278, or $14.74 per Bible sent — twice the advertised price and the most plausible figure we found. We do not publish it, because treating an unlabelled chart as an expense allocation would be inventing the one thing the ministry declined to say.',
    'What a “life impacted” is. The 2,155,686 is the exact sum of five regional beneficiary counts supplied by partners — Central and East Asia 1,128,109, Middle East and North Africa 784,939, Sub-Saharan Africa 134,382, Southeast Asia 77,256, Latin America 31,000 — with no definition, no minimum intervention and no de-duplication rule.',
    'How “100% of Your gift goes directly toward getting Bibles into the hands of your churh family” is reconciled with a year in which 24.1% of expenses were fundraising and administration. The spelling of “churh” is the ministry’s.',
    'Whether the advertised Bible prices are current costs or round-number gift tiers. $50 for 10, $150 for 21 and $300 for 15 give $5.00, $7.14 and $20.00 per copy; the middle one is the only tier that is not a round total, and no document states what any of the three includes — shipping, the partner’s handling, the discipleship material bundled on the SD cards.',
    'Audited financial statements and any Form 990. Neither is posted. The financial-integrity page’s only financial document is the annual report magazine, and questions are directed to donor services by telephone or email.',
    'What the $5,239,468 of “other revenue” in the year to June 2025 is. It is a quarter of total revenue and roughly eight times the prior year’s figure, and nothing published explains it.',
    'Why programme spending fell 15% from $17,163,234 to $14,580,870 while the ministry moved from a $2.67 million deficit to a $1.64 million surplus. No document mentions either the fall or the turnaround.',
    'The identity behind the EIN. Global Christian Relief publishes EIN 23-7275342. IRS records carry that number under the name “Gc Relief” in Santa Ana, California, with transcribed returns from 2013 to a December 2020 year-end — the last of them reporting $28,802,217 of expenses — and nothing after. ECFA records the same organisation as founded in 1973, an ECFA charter member since March 1980, and gives “GC Relief” as the only other name under which it may raise funds. The ministry’s own reporting is now on a June year-end. This is the same Santa Ana record our Open Doors page could not reconcile with the name it was given, and we state the facts here without asserting the corporate history that connects them.',
    'The claim on the Bible page that “nearly half of the world’s population doesn’t have Scripture in their own language”. No source, date or definition of “Scripture in their own language” is given, and it sits on a page selling Bibles to believers who can already read the ones being sent.',
    'Which countries, and how many. The annual report says 22 countries served; the website says 60+. The list on this page is built only from countries the ministry itself names in the report or in its ECFA description, so it is incomplete. North Korea is named in the report and left out here because our cost base has no income figure for it.',
    'Who checks the partners. Every count originates with a field partner. No monitoring method, verification sample or partner name is published.',
  ],
  notes: [
    'Figures for the year to 30 June 2025, from the annual report and confirmed to the dollar by ECFA: total expenses $19,205,523 — programme $14,580,870 (75.9%), fundraising $2,784,514 (14.5%), administration $1,840,139 (9.6%) — on total revenue of $20,841,914, of which $15,602,446 was cash donations.',
    'Three years from ECFA, per the financial statements. Total expenses: $13,508,567 (2023), $21,892,572 (2024), $19,205,523 (2025). Programme: $8,784,320, $17,163,234, $14,580,870. Net assets: $10,988,036, $8,322,127, $9,958,518. The swing is the largest of any ministry in this category and none of it is discussed in the ministry’s own materials.',
    'The 2025 counts in full: 89,010 Bibles sent, 34,258 medical checkups performed, 4,780 food kits or vouchers distributed, 2,236 shelter or winterisation kits provided, 556 businesses started or supported, 54 brick-kiln families freed, 22 countries served, 2,155,686 total lives impacted.',
    'Two of the three causes in this category with a published cost per outcome, Help The Persecuted and International Christian Concern, are each about a fifth of this ministry’s size. Scale and disclosure are moving in opposite directions here, which is worth noticing: the larger the ministry in this space, the less it tends to publish that can be divided.',
    'The Violent Incidents Database that sources the Red List is the same one International Christian Concern says it partnered with the International Institute for Religious Freedom to support, and which ICC says draws heavily on publicly sourced information including ICC’s own. A donor comparing the Red List, ICC’s Global Persecution Index and the World Watch List is comparing fewer independent datasets than it appears.',
  ],
  siteUrl: 'https://globalchristianrelief.org/',
  giveUrl: 'https://globalchristianrelief.org/ways-to-give/',
  sources: [
    {
      id: 'gcr-site',
      label: 'Homepage',
      url: 'https://globalchristianrelief.org/',
      publisher: 'Global Christian Relief',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
    },
    {
      id: 'gcr-about',
      label: 'About Us',
      url: 'https://globalchristianrelief.org/about-us/',
      publisher: 'Global Christian Relief',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: 'The only place a doctrinal statement appears: the Apostles’ Creed, given as the answer to “What is your statement of faith?” inside a collapsed FAQ accordion.',
    },
    {
      id: 'gcr-story',
      label: 'Our Story',
      url: 'https://globalchristianrelief.org/about-us/our-story/',
      publisher: 'Global Christian Relief',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: 'Source of the five pillars — Spread the Gospel, Defend Freedom, Break the Cycle, Ensure Survival, Build the Future — the four core values, and the seven-person executive team.',
    },
    {
      id: 'gcr-financial-integrity',
      label: 'Financial Integrity',
      url: 'https://globalchristianrelief.org/about-us/financial-integrity/',
      publisher: 'Global Christian Relief',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: 'Carries the EIN, the ECFA charter membership, the “60+ countries” claim and four headline counts. Links the last two annual reports and no other financial document; no audited statements or Form 990 are posted anywhere on the site.',
    },
    {
      id: 'gcr-bibles',
      label: 'Send Bibles',
      url: 'https://globalchristianrelief.org/ways-to-give/send-bibles/',
      publisher: 'Global Christian Relief',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: 'The three advertised gift tiers and the “100%” claim. These are the only per-unit prices the ministry publishes, and nothing on the site or in the report lets them be checked against spending.',
    },
    {
      id: 'gcr-red-list',
      label: 'Red List',
      url: 'https://globalchristianrelief.org/resources/red-list/',
      publisher: 'Global Christian Relief',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: 'States that the Red List’s data comes directly from the Violent Incidents Database, which the ministry sponsors.',
    },
    {
      id: 'gcr-ar-25',
      label: 'Resilience — 2025 annual report',
      url: 'https://media.globalchristianrelief.org/2025/11/45216-BN_GCR0008_Oct-Magazine_LR.pdf',
      publisher: 'Global Christian Relief',
      documentType: 'annual-report',
      retrieved: '2026-09-19',
      fiscalYear: 'year to June 2025',
      note: 'A 24-page consumer magazine covering 1 July 2024 to 30 June 2025. The whole of its financial disclosure is one page with a total, three functional figures and three percentages. The counts, the regional beneficiary split and the five-way “2025 Impact Areas” pie are set as graphics; we rendered page 20 as an image to read the pie’s labels and percentages, and they are reported here exactly as drawn, including the absence of any unit.',
    },
    {
      id: 'gcr-ecfa-profile',
      label: 'ECFA member profile — Global Christian Relief',
      url: 'https://www.ecfa.org/MemberProfile.aspx?ID=10131',
      publisher: 'Evangelical Council for Financial Accountability',
      documentType: 'third-party',
      retrieved: '2026-09-19',
      note: 'Charter member, accredited since 1 March 1980, founded 1973, located in Santa Ana, California. Names Nigeria, Iran, Afghanistan and Sudan as places the ministry works, and gives “GC Relief” as the only other name under which funds may be raised.',
    },
    {
      id: 'gcr-ecfa-cfd',
      label: 'ECFA comparative financial data — Global Christian Relief',
      url: 'https://www.ecfa.org/ComparativeFinancialData.aspx?ID=10131',
      publisher: 'Evangelical Council for Financial Accountability',
      documentType: 'third-party',
      retrieved: '2026-09-19',
      fiscalYear: 'years to June 2023, 2024 and 2025',
      note: 'Three years of revenue, programme, administrative and fundraising splits “per the organization’s financial statements”, plus assets and net assets. The FY25 column matches the annual report exactly. This is the only independent record of this ministry’s finances we could find.',
    },
    {
      id: 'gcr-propublica',
      label: 'IRS filings for EIN 23-7275342',
      url: 'https://projects.propublica.org/nonprofits/organizations/237275342',
      publisher: 'ProPublica Nonprofit Explorer',
      documentType: 'third-party',
      retrieved: '2026-09-19',
      note: 'The EIN Global Christian Relief publishes, carried in IRS data under the name “Gc Relief”, Santa Ana, California. Transcribed returns run from 2013 to a year ending December 2020 — $33,559,571 of revenue against $28,802,217 of expenses in that final year — with none after, and the ministry’s own reporting has since moved to a June year-end.',
    },
  ],
};
