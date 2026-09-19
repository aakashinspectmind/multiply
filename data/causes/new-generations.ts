import type { Cause } from '@/lib/types';

export const newGenerations: Cause = {
  slug: 'new-generations',
  name: 'New Generations',
  legalName: 'New Generations',
  ein: '35-2606291',
  tagline:
    'Coaches indigenous church planters in Africa and Asia and counts the churches they start.',
  category: 'church-planting',
  countries: ['Africa', 'South Asia', 'Southeast Asia'],
  whatTheyDo:
    'New Generations trains and coaches national church planters — it calls them indigenous “apostles” — in a method it calls Disciple Making Movements, and then tracks what they start each quarter. The American organisation employs nobody overseas: its 2024 Form 990 reports no office, no employee and no agent in any foreign region, and $5,765,657 of foreign expenditure moving out as program money to leaders already living there. It publishes a quarterly results report, an annual impact report, audited statements and Form 990s going back to 2021.',
  accreditations: [
    { label: 'ECFA accredited', sourceId: 'ng-financials' },
    { label: 'TrustBridge Global', sourceId: 'ng-financials' },
    { label: 'Excellence in Giving', sourceId: 'ng-financials' },
    { label: 'Charity Navigator', sourceId: 'ng-financials' },
  ],
  verification: 'documents-reviewed',
  biblicalAlignment: {
    mandate:
      'The commission is to make disciples of all nations, and the way Paul carried it out was to appoint elders in each new church and leave. New Generations is built on the second half of that: it does not plant the church, it trains the man who does, and then trains him to train the next one. That is 2 Timothy 2:2 as an operating model.',
    scriptures: [
      {
        ref: 'Matthew 28:18–20',
        text:
          'Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all that I have commanded you.',
      },
      {
        ref: 'Acts 14:23',
        text:
          'And when they had appointed elders for them in every church, with prayer and fasting they committed them to the Lord in whom they had believed.',
      },
      {
        ref: '2 Timothy 2:2',
        text:
          'And what you have heard from me in the presence of many witnesses entrust to faithful men, who will be able to teach others also.',
      },
    ],
    doctrine: { label: 'Statement of Faith', sourceId: 'ng-faith' },
    concerns: [
      'The cumulative totals do not agree with each other. The same sentence on three of their own pages reports 205,123, 213,452 and 219,253 churches catalysed since 2005, and the movement count in that sentence is 358 in one place, 445 in another and 460 in a third. The 2025 impact report says 196,926. Two of those four church figures sit on the same page.',
      'Every figure originates with the partner or planter being funded, is reported up quarterly, and is then vetted by the organisation that raised the money for it. New Generations describes an internal audit and an external audit to guard against exactly that, but publishes neither.',
      'Rapid-multiplication church planting is contested among evangelicals who do this work — the objection is that fourth-generation gatherings founded in months may have no trained elder, no ordinance practice and no doctrinal floor. New Generations defines a church as a gathering, which is a low bar to clear and a hard one to audit.',
    ],
  },
  roi: {
    levers: ['local-workers', 'multiplication', 'local-cost-base'],
    reason:
      'Nobody is sent. The 2024 Form 990 reports zero offices and zero employees, agents or independent contractors in every foreign region, so the entire $5,765,657 that left the country was paid to people already living where the work happens, at their local cost of living. The multiplication claim is the second lever and the harder one: a movement is only counted once at least 100 churches have reproduced to a fourth generation, which means the later generations were not separately funded. That is a real mechanism. What is not published is how many of those churches are still meeting.',
  },
  costModel: {
    outcome: 'new church planted',
    outcomePlural: 'new churches planted',
    spend: {
      amount: 6968346,
      basis: 'program-services',
      fiscalYear: '2024',
      sourceId: 'ng-audit-24',
    },
    count: {
      amount: 28873,
      label: 'new churches planted',
      fiscalYear: '2024',
      sourceId: 'ng-impact-24',
    },
    attribution: 'all-program-spend',
    caveat:
      'An upper bound. The same $6,968,346 of program spending also paid for audio Bibles, Scripture media, digital outreach in restricted countries, prayer mobilisation and the training of Western partner churches — none of which is a church plant. Pushing the other way, it is the cost of churches started in 2024 only, while the coaching and training that produced them was paid for in earlier years, and the multiplication that follows will be paid for by nobody. Read it as one year of everything New Generations spends divided by one year of the churches its partners reported.',
    alternates: [
      {
        label: 'new churches reported in South Asia alone',
        count: 19895,
        note:
          'South Asia produced 68.9% of the 2024 churches on about 11.9% of the foreign spending disclosed in Schedule F. The regional rows sum exactly to the headline total, which is the one internal check on this number that does hold.',
      },
      {
        label: 'new Disciple Making Movements that crossed into fourth-generation growth',
        count: 75,
        note:
          'New Generations says movements, not churches, are “our main measure of success”. A movement is at least 100 churches four generations deep, so this denominator is far harder to reach and gives a cost of $92,911 each.',
      },
    ],
  },
  ministryClaims: [
    {
      quote: '28,873 new churches were planted in villages, cities, and remote regions.',
      sourceId: 'ng-impact-24',
    },
    {
      quote:
        'The story of God’s glory is that since March 2005, the Lord has used the Disciple Making Movement (DMM) process to catalyze 205,123 new churches with 3,405,039 new disciples—many from places where the Gospel had not sprouted let alone spread for over a century.',
      sourceId: 'ng-financials',
    },
    {
      quote: '322,091 people became new disciples of Jesus.',
      sourceId: 'ng-impact-24',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 3,
      note:
        'A full statement of faith on the site, and the programme is disciple-making and church planting with nothing else in it. Their own definition of a church — “spiritual families centered on Jesus, shaped by His Word, and committed to making more disciples” — is the whole product.',
    },
    localLeadership: {
      value: 3,
      note:
        'The 2024 Form 990 Schedule F reports no office and no employee, agent or contractor in any foreign region. Every planter is a national. Governance and fundraising are in Wheaton, Illinois.',
    },
    financialTransparency: {
      value: 3,
      note:
        'Audited statements and Form 990s for 2021 through 2024 are posted on the site, with a line-by-line functional breakdown, an ECFA member profile and four other accreditation seals. Schedule F discloses foreign spending by region.',
    },
    outcomeEvidence: {
      value: 2,
      note:
        'Counts are published quarterly and annually, the regional rows add up to the headline totals, and the definitions of “church” and “movement” are printed next to the numbers — better than anything else in this category. Marked down two points because the cumulative totals contradict each other across their own pages and no external verification is published.',
    },
    costEvidence: {
      value: 3,
      note:
        'Both halves exist, one from an audit and one from the impact report for the same year, and the program figure reconciles between the audit and Form 990 to the dollar. New Generations publishes no cost per church itself.',
    },
  },
  notVerified: [
    'Whether a “church” is defined the same way twice. New Generations does define it — “spiritual families centered on Jesus, shaped by His Word, and committed to making more disciples” — which is more than most ministries in this category manage. It is still a definition a field reporter applies by judgement, with no size, leadership or ordinance test attached.',
    'How many of the 28,873 churches planted in 2024 still exist. New Generations says its internal audits adjust for attrition — “churches die” is its own phrase — plus amalgamation and migration, but publishes no attrition rate, no survival rate and no audit report. A cost per church planted is not a cost per church that lasts.',
    'Four different cumulative church totals appear across their own materials: 196,926 in the 2025 impact report, 205,123 on the financial accountability page, 213,452 and 219,253 on the About page. One innocent explanation is the downward revision their attrition adjustment would produce, but they do not say so and we could not reconcile them.',
    'The external audit. The site says third parties such as the International Mission Board assist with audits of historical results. No audit report, date, scope or sample size is published, so we cannot tell what was checked or what it found.',
    'Who receives the money. Schedule F reports $5,765,657 of foreign expenditure but names no grantee and leaves Parts II and III of the schedule blank, so there is no published list of partner organisations.',
    'Whether any church is counted twice. Movements are counted across partner organisations in a shared methodology, and New Generations both trains and coaches planters it does not employ. Nothing published rules out the same plant appearing in two ministries’ totals.',
    'Whether the churches become self-supporting. The multiplication argument depends on later generations costing nothing, and no figure is published for how many churches still need outside money after a year.',
  ],
  notes: [
    'The single largest item inside program services is one line on both the audit and Form 990: Disciple Making Movements, $4,101,928, or 58.9% of program spending. If you charged only that line to church planting the figure would be $142.07 per church rather than $241.35. We used the full program figure because the rest of the program budget also feeds the same work.',
    'Schedule F reports $5,765,657 of the $6,968,346 — 82.7% — left the United States. Dividing only the foreign spend gives $199.69 per church.',
    'The regional breakdown in the 2024 report sums exactly to both headline totals: 829 + 19,895 + 1,066 + 2,758 + 2,070 + 310 + 24 + 1,921 = 28,873 churches. We checked this because it is the kind of arithmetic that usually fails.',
    'South Asia reported 19,895 of the 28,873 churches on $621,311 of program spending plus $66,375 of travel, against $3,634,872 plus $421,993 in sub-Saharan Africa. Either South Asia is enormously more productive per dollar or the two regions are counting different things. That gap is the most interesting unanswered question on this page.',
    'The 2025 impact report claims 39,047 new churches and 363,776 new disciples against 2025 spending we have not seen — the 2025 audit was not posted when we looked. We did not mix a 2025 count with 2024 money.',
    'Disciples, decisions and baptisms are quoted here as the ministry’s claims and excluded from every calculation on this page. We do not treat a spiritual outcome as a delivered unit.',
  ],
  siteUrl: 'https://newgenerations.org/',
  giveUrl: 'https://newgenerations.org/donate/',
  sources: [
    {
      id: 'ng-site',
      label: 'Homepage',
      url: 'https://newgenerations.org/',
      publisher: 'New Generations',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'ng-about',
      label: 'Who We Are',
      url: 'https://newgenerations.org/about/',
      publisher: 'New Generations',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note:
        'Describes the quarterly evaluation, internal audit and external audit process, and carries two of the four conflicting cumulative totals — 219,253 churches with 445 movements in one paragraph, 213,452 churches with 460 movements in another.',
    },
    {
      id: 'ng-faith',
      label: 'Statement of Faith',
      url: 'https://newgenerations.org/statement-of-faith/',
      publisher: 'New Generations',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'ng-financials',
      label: 'Financial Accountability',
      url: 'https://newgenerations.org/financial-accountability/',
      publisher: 'New Generations',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note:
        'Links audits and Form 990s for 2021 through 2024 and displays the ECFA, TrustBridge Global, Excellence in Giving, GuideStar and Charity Navigator seals. Source of the 205,123 churches and 3,405,039 disciples figures.',
    },
    {
      id: 'ng-audit-24',
      label: '2024 audited financial statements',
      url: 'https://newgenerations.org/wp-content/uploads/2025/07/new-generations-2024-audit.pdf',
      publisher: 'New Generations',
      documentType: 'audited-financials',
      retrieved: '2026-09-18',
      fiscalYear: '2024',
      note:
        'Program $6,968,346, management and general $525,570, fundraising $788,178, total $8,282,094. Disciple Making Movements is itemised at $4,101,928.',
    },
    {
      id: 'ng-990-24',
      label: '2024 Form 990, public inspection copy',
      url: 'https://newgenerations.org/wp-content/uploads/2025/07/new-generations-2024-public-inspection-990-return.pdf',
      publisher: 'New Generations',
      documentType: 'form-990',
      retrieved: '2026-09-18',
      fiscalYear: '2024',
      note:
        'Part IX agrees with the audit to the dollar. Schedule F reports $5,765,657 of foreign expenditure, no office and no employee, agent or contractor in any region, and names no grantee.',
    },
    {
      id: 'ng-impact-24',
      label: '2024 impact report',
      url: 'https://newgenerations.org/wp-content/uploads/2025/08/2024-impact-report-2.pdf',
      publisher: 'New Generations',
      documentType: 'annual-report',
      retrieved: '2026-09-18',
      fiscalYear: '2024',
      note:
        'Source of 28,873 new churches, 322,091 new disciples and 75 new movements, and of the definitions of “movement” and “church”. The regional breakdown is set in a graphic; we read the page rather than the extracted text.',
    },
    {
      id: 'ng-impact-25',
      label: '2025 annual impact report',
      url: 'https://newgenerations.org/wp-content/uploads/2026/03/2025-annual-impact-report.pdf',
      publisher: 'New Generations',
      documentType: 'annual-report',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note:
        'Reports 39,047 new churches and 363,776 new disciples for 2025, and cumulative totals of 196,926 churches, 3,294,444 disciples and 358 movements. No 2025 audit was posted when we looked, so nothing here is divided.',
    },
  ],
};
