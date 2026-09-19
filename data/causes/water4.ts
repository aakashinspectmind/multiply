import type { Cause } from '@/lib/types';

export const water4: Cause = {
  slug: 'water4',
  name: 'Water4',
  legalName: 'Water4, Inc.',
  ein: '26-3260581',
  tagline:
    'Builds for-profit water utilities in West Africa and sells piped water to households living on about $2 a day.',
  category: 'water',
  countries: ['Ghana', 'Uganda', 'Zambia', 'Sierra Leone'],
  whatTheyDo:
    'Water4 does not drill a well and leave. It builds water utilities — branded NUMA — that it owns, operates and maintains as businesses: boreholes, elevated storage towers, buried pipeline and metered connections run into individual homes. Customers pay for the water. The revenue pays the technicians, the repairs and the expansion, and the stated goal is for those businesses to become self-sustaining so that the American nonprofit is no longer needed. In 2024 the four country programmes built 92 new water systems and ran roughly 536 kilometres of pipeline. Founded by Dick and Terri Greenly in Oklahoma City.',
  accreditations: [{ label: 'ECFA accredited', sourceId: 'w4-financials' }],
  verification: 'documents-reviewed',
  biblicalAlignment: {
    mandate:
      'Thirst is the need Jesus names when he describes how the nations will be judged, and a cup of cold water is the smallest kindness he attaches a promise to. Water4 reads the same mandate a particular way: that giving a drink once is easier than making sure the drink is still there in ten years, and that dignity is part of the command. Proverbs blesses the generous, and the generosity here takes the form of capital that keeps producing after the donor has moved on.',
    scriptures: [
      {
        ref: 'Matthew 25:35',
        text:
          'For I was hungry and you gave me food, I was thirsty and you gave me drink, I was a stranger and you welcomed me.',
      },
      {
        ref: 'Matthew 10:42',
        text:
          'And whoever gives one of these little ones even a cup of cold water because he is a disciple, truly, I say to you, he will by no means lose his reward.',
      },
      {
        ref: 'Proverbs 22:9',
        text: 'Whoever has a bountiful eye will be blessed, for he shares his bread with the poor.',
      },
    ],
    doctrine: {
      label: 'Apostles’ Creed and historically orthodox Christian belief',
      sourceId: 'w4-about',
    },
    concerns: [
      'Water4 is both the water utility and the evangelist. Its own words: “Every safe water point becomes a kingdom outpost where we show and share Jesus through relationships and our Multiply discipleship movement”, and “In providing safe water, we answer God’s call to restore health, opportunity, and abundance to his people, and we’re afforded the opportunity to show and share Jesus with our customers.” The Form 990 describes hygiene training and “OPPORTUNITIES TO HEAR THE GOSPEL” as one programme line. When the organisation that controls your household water connection is also the one presenting the gospel to you, the relationship is not free of pressure. No safeguard against that is published, and the ministry does not appear to see it as a risk.',
      'The customers are poor. Water4 says so proudly — “created profitable water markets with customers on an average $2/day income” — and that is the honest answer to the aid-dependency critique. It is also its own risk: a household that cannot pay this month is a household without safe water this month. Nothing is published about tariffs, lifeline rates, subsidies for the destitute, or what happens on non-payment. That is the single most important unanswered question about this model.',
      'The 2024 return reports, as a programme accomplishment, that Water4 “SHARED AND SHOWED THE LOVE OF JESUS TO OVER 1 MILLION PEOPLE THROUGH OUR RELATIONAL MULTIPLY DISCIPLESHIP MOVEMENT.” We quote it because they filed it. We do not treat spiritual results as a measurable outcome and nothing on this page counts them.',
    ],
  },
  roi: {
    levers: ['durable-asset', 'local-cost-base', 'local-workers', 'multiplication'],
    reason:
      'A borehole, a tower and a buried pipe are assets that keep producing for years after the gift, and Water4 adds a second layer: because customers pay, the revenue covers the maintenance that kills most donated wells, and it funds expansion without a second appeal. Donor capital is recycled rather than consumed. Everything is built and run by salaried staff paid to Ghanaian, Ugandan, Zambian and Sierra Leonean wage levels, in economies where income per person is a small fraction of the United States. The trade-off is that this is capital-intensive work, so the cost of any single unit looks high next to a hand pump.',
  },
  costModel: {
    outcome: 'household water connection',
    outcomePlural: 'household water connections',
    spend: {
      amount: 6411216,
      basis: 'program-services',
      fiscalYear: '2024',
      sourceId: 'w4-990-24',
    },
    count: {
      amount: 7766,
      label: 'household connections built',
      fiscalYear: '2024',
      sourceId: 'w4-990-24',
    },
    attribution: 'all-program-spend',
    caveat:
      'An upper bound. The same $6.4 million also built 92 new water systems, 108 elevated storage towers and roughly 536 kilometres of buried pipeline, trained tens of thousands of people in hygiene and sanitation, and kept the existing utilities running — a household connection is the last metre of a chain, not the whole of it. The denominator is also ours, not Water4’s: they publish household connections country by country in the return’s programme descriptions (Ghana 4,700, Sierra Leone 1,452, Uganda 1,116, Zambia 498) and we added them up. They publish no total and no cost per connection.',
    alternates: [
      {
        label: 'new water systems built',
        count: 92,
        note:
          'The capital asset itself — borehole, tower, pipe network — rather than the tap at the end of it. About $70,000 each, which is what building a small piped utility actually costs, and a fairer way to think about this ministry than a per-person figure. Also our sum of the four country lines.',
      },
    ],
  },
  ministryClaims: [
    {
      quote:
        'Now, we have done what many said was impossible: created profitable water markets with customers on an average $2/day income.',
      sourceId: 'w4-about',
    },
    {
      quote:
        'Our safe water model empowers with a "hand up" rather than stopping short with "handouts".',
      sourceId: 'w4-approach',
    },
    {
      quote:
        'Like all businesses, Water4 built NUMA to be customer-reliant and therefore customer-focused. NUMA employees relentlessly serve their customers because their salaries depend on it, and the business won’t survive without sales.',
      sourceId: 'w4-approach',
    },
    {
      quote: 'We want to put ourselves as a non-profit out of business.',
      sourceId: 'w4-about',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 3,
      note:
        'Water4 commits in writing to “the foundational truths of the Christian faith as articulated in the Apostles’ Creed and upholding historically orthodox positions of Christian belief, identity, and conduct”, names Jesus repeatedly in its programme descriptions, and runs a discipleship movement through the water points. It is one of the most explicitly Christian ministries in this directory — which is also why the concern above matters.',
    },
    localLeadership: {
      value: 2,
      note:
        'The operating model is genuinely local: each country runs a water business with local staff selling to local customers, and Water4 says the salaries depend on those customers. But the capital, the governance, the officers and the chief executive are in Oklahoma City, and we found no national board representation disclosed in the return.',
    },
    financialTransparency: {
      value: 2,
      note:
        'Form 990s are posted on the ministry’s own financials page and it is ECFA accredited, which requires annual financial review. Marked down because we found no audited financial statements published anywhere on the site, and because the financials page carries two different documents both labelled 2024 — one the calendar-year return, one a short-period return — with nothing explaining the difference.',
    },
    outcomeEvidence: {
      value: 2,
      note:
        'The programme descriptions in the 990 are far more detailed than most ministries volunteer: new systems, towers, household connections, kilometres of pipeline and people trained, broken out by country and summing exactly to reported program expenses. What is missing is the number that matters most in water — nothing is published on how many of the systems built in prior years are still delivering water today.',
    },
    costEvidence: {
      value: 2,
      note:
        'Numerator and denominator are in the same audited-adjacent document for the same year, which is rare. Marked down because the denominator is our addition of four country lines rather than a published total, and because Water4 advertises no unit cost of its own for us to test.',
    },
  },
  notVerified: [
    'Whether the water is still flowing. Water4 publishes no functionality, uptime or downtime rate for the systems it built in earlier years. Its model — paying customers funding paid technicians — is the best structural argument we have seen that the water keeps running, but it is an argument, not evidence. Selling water gives the business a reason to fix the pump and also a reason not to report the months it was broken.',
    'The household connection total of 7,766 is our sum of the four country figures in the 2024 return. Water4 publishes no total, and we cannot tell whether a “household connection” means a metered tap inside a compound, a shared yard tap, or a connection sold but not yet flowing.',
    'What customers pay, and what happens when they cannot. For a ministry whose whole model rests on households buying water, no tariff, no average monthly bill, no subsidy policy and no disconnection policy is published.',
    'Zambia’s programme line reports 120,000 people impacted and 206,317 people trained in hygiene and sanitation — more trained than impacted. One of the two figures is defined differently from the way a reader would assume, and the return does not say which.',
    '“Impacted over 2.5 million people through safe water” is cumulative across the ministry’s history and undefined. It cannot be divided into a year of spending, and a person served in 2014 by a system that has since failed is still in it.',
    'Water4 changed its financial year end to 30 June. A short-period return covers 1 January to 30 June 2025 ($4,015,409 of total expenses, $3,074,067 of program services), so the next full year is not comparable to 2024 and the site does not flag the change.',
    'The relationship between Water4, Inc. and the NUMA businesses is not laid out in what we read: whether the businesses are subsidiaries, separately owned local companies, or joint ventures, who holds the equity, and whether their revenue and losses appear in these figures at all. For a model whose entire claim is commercial self-sufficiency, that is a large gap.',
    'No audited financial statements. Everything financial on this page comes from the Form 990, which is prepared by the organisation and signed under penalty of perjury but is not an audit opinion.',
    '$310,998 of 2024 program services is attributed to enterprises other than the four named countries, with no description of what it bought.',
  ],
  notes: [
    'This is the deliberate counterweight to the aid-dependency critique that hangs over free water infrastructure. Water4’s own language is unusually blunt about it: “Injections of charity can’t make the difference that businesses do”, and the model “cultivates self-reliance and severs the cycles of dependency that disempower the people we serve.” If you think donated wells create dependency and displace local water enterprises, this is the ministry on this site built around your objection. If you think charging the very poor for water is the wrong answer, it is the one you should skip.',
    'Program services were 76% of total functional expenses in 2024 ($6,411,216 of $8,488,712), with fundraising at $1,460,186 and management and general at $617,310.',
    'We initially misread the 2024 return: on Form 990 Part I the first column is the prior year, so the $9,025,404 expense figure shown there is calendar 2023, not 2024. The figures used here come from Part IX line 25, which is the authoritative functional expense statement.',
    'The four country programme lines in Part III sum to exactly $6,411,216, matching reported program services. That internal consistency is a small mark of care and it is why we were willing to build a cost model from a 990 alone.',
  ],
  siteUrl: 'https://water4.org/',
  giveUrl: 'https://water4.org/donate/',
  sources: [
    {
      id: 'w4-site',
      label: 'Homepage',
      url: 'https://water4.org/',
      publisher: 'Water4',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'w4-about',
      label: 'About Water4',
      url: 'https://water4.org/about',
      publisher: 'Water4',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note:
        'Source of the Apostles’ Creed statement, the $2/day customer claim, and “We want to put ourselves as a non-profit out of business.”',
    },
    {
      id: 'w4-approach',
      label: 'Our Approach',
      url: 'https://water4.org/our-approach',
      publisher: 'Water4',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note:
        'Source of the “hand up” and dependency language, the description of NUMA as customer-reliant, and the “kingdom outpost” statement.',
    },
    {
      id: 'w4-impact',
      label: 'Impact',
      url: 'https://water4.org/impact',
      publisher: 'Water4',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'w4-financials',
      label: 'Financials',
      url: 'https://water4.org/about/financials',
      publisher: 'Water4',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note:
        'Where the ECFA accreditation is stated and where the returns are hosted. It carries two documents both labelled 2024 with no explanation; one is the calendar-2024 return, the other a short-period return to 30 June 2025.',
    },
    {
      id: 'w4-990-24',
      label: '2024 Form 990',
      url: 'https://cdn.prod.website-files.com/664cf6007bb36dbdba3a3a86/68fa48a343f7bebd2a8c636c_2024%20990%20-%20Public.pdf',
      publisher: 'Water4',
      documentType: 'form-990',
      retrieved: '2026-09-18',
      fiscalYear: '2024',
      note:
        'Part IX line 25: total functional expenses $8,488,712, program services $6,411,216, management and general $617,310, fundraising $1,460,186. Part III and Schedule O give the per-country counts of water systems, towers, household connections, pipeline and people trained that the cost model is built from.',
    },
    {
      id: 'w4-990-short',
      label: 'Short-period Form 990, 1 January to 30 June 2025',
      url: 'https://cdn.prod.website-files.com/664cf6007bb36dbdba3a3a86/6a999b27a54137ac792dacc5_2024%20WATER4%20990%20Public%20Copy.pdf',
      publisher: 'Water4',
      documentType: 'form-990',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note:
        'Filed for the six months to 30 June 2025 following a change of financial year end. Total expenses $4,015,409, program services $3,074,067. Labelled “2024” on the ministry’s financials page.',
    },
  ],
};
