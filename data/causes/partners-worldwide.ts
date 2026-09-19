import type { Cause } from '@/lib/types';

export const partnersWorldwide: Cause = {
  slug: 'partners-worldwide',
  name: 'Partners Worldwide',
  legalName: 'Partners Worldwide',
  ein: '38-3293173',
  tagline:
    'Backs locally governed business-training institutions in 30-odd countries. Publishes big numbers and never says what period they cover.',
  category: 'livelihood',
  countries: ['Africa', 'Latin America', 'South Asia', 'Southeast Asia', 'United States'],
  whatTheyDo:
    'Partners Worldwide does not run programmes. It builds and funds what it calls Local Community Institutions — independent, locally governed organisations that train entrepreneurs and farmers, coach them, lend to them and connect them to markets. Partners Worldwide supplies capital, curriculum, regional staff and a network of volunteer business mentors from churches in North America. It began in Kenya in 1997 and the most recent country of operation added was Ethiopia in 2021. Its own staff are posted in Nairobi, Abuja, Accra, Monrovia, Chimoio, Lusaka, Tegucigalpa, San Salvador, Port-au-Prince, Cuenca, Jakarta, Phnom Penh, Manila, Kathmandu and Colombo, with head office in Grand Rapids.',
  accreditations: [
    { label: 'ECFA accredited', sourceId: 'pw-financials' },
    { label: 'Charity Navigator four-star rating', sourceId: 'pw-financials' },
    {
      label: 'Certified Transparent, Excellence in Giving',
      sourceId: 'pw-financials',
    },
  ],
  verification: 'self-reported',
  biblicalAlignment: {
    mandate:
      "Paul's instruction to the Thessalonians was to work with their hands so that they would be dependent on no one — the goal of the work is not the income alone but the end of dependency, which is exactly what a job does and a handout does not. Colossians tells the worker whose labour that is really for, which is what turns a market stall into a vocation. And Leviticus aims the same law at the employer: pay the hired man the same day, because he is counting on it. A ministry about jobs is standing in all three places at once.",
    scriptures: [
      {
        ref: '1 Thessalonians 4:11–12',
        text: 'Aspire to live quietly, and to mind your own affairs, and to work with your hands, as we instructed you, so that you may walk properly before outsiders and be dependent on no one.',
      },
      {
        ref: 'Colossians 3:23–24',
        text: 'Whatever you do, work heartily, as for the Lord and not for men, knowing that from the Lord you will receive the inheritance as your reward. You are serving the Lord Christ.',
      },
      {
        ref: 'Leviticus 19:13',
        text: 'You shall not oppress your neighbour or rob him. The wages of a hired worker shall not remain with you all night until the morning.',
      },
    ],
    doctrine: {
      label:
        'Not a statement of faith, but a substantive theology-of-poverty page: poverty as broken relationship rather than only material lack, argued from Genesis 1:29–30, Deuteronomy 15:4, Luke 4:16–21, John 10:10 and 1 John 3:17–18, with Jesus named repeatedly and Christians described as called to be agents of reconciliation. Better reasoned than most; still not a doctrinal statement, and the mission sentence stops at "a global community of Christians".',
      sourceId: 'pw-why-poverty',
    },
    concerns: [
      'The published counts have no period attached and that is the central problem with this ministry\'s reporting. "44,746 Jobs Created", "718,473 Jobs Sustained", "337,115 Client Businesses/Farms", "$27,391,991 Loans Dispersed", "37,903 Total Graduates" — nothing says whether these are for one year, since 1997, or something in between. The jobs figure is shown as a series rising 478,471 to 598,104 to 718,473 across 2023 to 2025, which reads like an annual measure, but "total jobs supported" rising by exactly the kind of increments a cumulative tally produces is ambiguous, and a footnote saying "Metrics updated from 2024 Annual Report" makes it more so.',
      'The institution count does not agree with itself. The impact page says 107 Local Community Institutions, the about page says "over 90 ... in 30 countries", and the where-we-work page says 97 partnerships. These are small differences and they are exactly the kind that make a reader wonder who is checking.',
      'Four of the five headline counts reconcile exactly when you add up the five regional pages; the training figure does not. Businesses, jobs created and volunteers all sum precisely to the global totals. Graduates sum to 6,948 against a published global figure of 37,903. One of those two numbers is measuring something else and the site does not say which.',
      'The whole model depends on money and credit flowing through independent institutions Partners Worldwide does not control and does not consolidate in its accounts. That is the right way to do locally led development and it is also the structure in which a donor can verify nothing about what happened at the far end.',
      "Microcredit is part of the package — $27.4 million of loans disbursed through the network — and the randomised evidence for credit raising poor households' incomes is weak. Partners Worldwide reports disbursement, not repayment, and publishes no loan-loss figure at all.",
    ],
  },
  roi: {
    levers: ['local-workers', 'local-cost-base', 'existing-network', 'volunteer-leverage'],
    reason:
      "Almost everything here happens outside the high-income world and the regional figures show how lopsidedly: of 337,115 client businesses in the network, 302,214 are in Africa and 47 are in the United States. The delivery organisations are locally incorporated and locally governed, Partners Worldwide's own field staff are nationals living in the countries they cover, and the training is delivered inside institutions that already exist rather than through offices Partners Worldwide would have to build. The fourth lever is the volunteer network: 1,349 volunteers contributing 8,707 hours of business mentoring against a $6.5 million budget, which is a small amount of paid coordination putting unpaid expertise to work. What none of this tells you is the price of anything, because the counts have no period.",
  },
  ministryClaims: [
    {
      quote:
        'Partners Worldwide is a global community of Christians dedicated to ending poverty by harnessing the power of business and sustainable partnerships.',
      sourceId: 'pw-about',
    },
    {
      quote:
        'We mobilize long-term, hands-on global relationships to form a powerful Christian network that uses business as the way to create flourishing economic environments in all parts of the world.',
      sourceId: 'pw-about',
    },
    {
      quote:
        'We collaborate with over 90 Local Community Institutions (LCIs) in 30 countries to empower communities that face unemployment and poverty.',
      sourceId: 'pw-about',
    },
    {
      quote:
        "Today, more than 337,000 businesspeople are leading redemptive businesses, supported by a global network that's stronger than ever.",
      sourceId: 'pw-ar-25',
    },
    {
      quote:
        "Looking ahead, we're on track to reaching our Vista 2030 goals: one million redemptive business owners creating three million jobs and lifting 15 million people out of poverty.",
      sourceId: 'pw-ar-25',
    },
    {
      quote:
        "Poverty is not God's design. We work to see people experience the abundant life God desires for us.",
      sourceId: 'pw-about',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 2,
      note: 'Describes itself as a global community of Christians and a Christian network, and its theology-of-poverty page argues from Scripture and names Jesus repeatedly. There is no statement of faith, no doctrinal position, and the programme itself is business training — the gospel is the reason given for the work rather than part of the work.',
    },
    localLeadership: {
      value: 3,
      note: "The model is locally led by design: independent Local Community Institutions with their own governance do the delivering, and Partners Worldwide's partnership managers are nationals based in the countries they serve — Nairobi, Abuja, Accra, Monrovia, Chimoio, Lusaka, Tegucigalpa, Port-au-Prince, Jakarta, Phnom Penh, Manila, Kathmandu, Colombo. The chief executive, the board and the Africa team leader are in Grand Rapids.",
    },
    financialTransparency: {
      value: 2,
      note: 'Audited statements are posted and the year to June 2025 is broken out by function — program services $5,356,728 of $6,497,549 — alongside ECFA accreditation, a Charity Navigator four-star rating and Excellence in Giving certification. Marked down because only 2023 and 2024 Form 990s are posted, and because the accounts cover only the US organisation while every published outcome belongs to a network of institutions that are not consolidated.',
    },
    outcomeEvidence: {
      value: 1,
      note: 'There is no shortage of numbers. There is no period on any of them, no definition of a "job sustained", and one of the five headline figures cannot be reconciled with the ministry\'s own regional pages. Counts this large with this little specification are marketing, not evidence, however real the underlying work is.',
    },
    costEvidence: {
      value: 1,
      note: 'The numerator is audited and clean. There is no denominator with a fiscal year attached, so nothing can honestly be divided. A finding, not an absence — we looked hard.',
    },
  },
  notVerified: [
    'What period any of the impact numbers covers. This is the single thing we could not resolve, and without it no cost per job, per business or per graduate can be calculated at all.',
    'What a "job sustained" is. 718,473 of them are claimed. Nothing defines whether it means a job that existed at a client business at some point in the year, a job counted again every year it persists, or a job at a business that once took a loan.',
    'Why total graduates of business and agriculture training is published as 37,903 when the five regional pages sum to 6,948.',
    'Whether 90, 97 or 107 Local Community Institutions is right. All three appear on the site.',
    'What happened to the $27,391,991 of loans disbursed through the network. No repayment rate, no arrears figure, no write-offs, and the loans sit on partner balance sheets that are not consolidated into the audited statements.',
    'Whether any of the counts are audited or otherwise checked by anyone outside the network. The Charity Navigator rating and ECFA accreditation cover financial practice, not outcome reporting.',
    'How the $5,356,728 of program spending divides between the five regions, which matters because 90% of the client businesses are in Africa and the United States has 47 of them.',
    '8,707 volunteer hours are published against 1,349 volunteers, which is about six and a half hours each. Either the hours are for one year and the volunteers are cumulative, or the mentoring is thinner than the word "hands-on" suggests. Another period that is not stated.',
  ],
  notes: [
    'We deliberately built no cost per outcome here. The numerator is audited and the denominators are enormous, so it would have been easy to divide $5,356,728 by 718,473 jobs sustained and publish $7.46 a job. That number would be meaningless: the jobs belong to 107 independent institutions over an unstated number of years, most of them funded by someone other than Partners Worldwide, and presenting it would be handing their marketing arithmetic back to you with our name on it.',
    'The Vista 2030 goal — one million business owners, three million jobs, 15 million people out of poverty — is a target, not a result, and it is roughly four times the current claimed scale in four years. Treat it as a fundraising ambition.',
    'Partners Worldwide is the only ministry in this batch with a United States region, and the numbers show what it is: 47 of 337,115 businesses and 39 of the training graduates. This is not a domestic organisation with an overseas arm.',
    'The audited year runs to 30 June. The impact figures are labelled by calendar year. Any division across the two would mix periods.',
  ],
  siteUrl: 'https://www.partnersworldwide.org/',
  giveUrl: 'https://www.partnersworldwide.org/donate/',
  sources: [
    {
      id: 'pw-about',
      label: 'About Us',
      url: 'https://www.partnersworldwide.org/about-us/',
      publisher: 'Partners Worldwide',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Source of the mission statement, the Christian-network language, the "over 90 LCIs in 30 countries" figure and the Faith value.',
    },
    {
      id: 'pw-why-poverty',
      label: 'Why Poverty?',
      url: 'https://www.partnersworldwide.org/about-us/why-poverty/',
      publisher: 'Partners Worldwide',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'The theological rationale for the work, argued from Genesis, Deuteronomy, Luke, John and 1 John. Stands in place of a statement of faith, which we did not find.',
    },
    {
      id: 'pw-impact',
      label: 'Our Impact',
      url: 'https://www.partnersworldwide.org/what-we-do/our-impact/',
      publisher: 'Partners Worldwide',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Every headline count used here — jobs created, jobs sustained, client businesses, LCIs, loans disbursed, graduates, volunteer hours — with no period stated for any of them.',
    },
    {
      id: 'pw-where',
      label: 'Where We Work',
      url: 'https://www.partnersworldwide.org/where-we-work/',
      publisher: 'Partners Worldwide',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Regional pages behind this one give per-region counts. Businesses, jobs created and volunteers sum exactly to the global totals; training graduates do not. Also the source of the 97 partnerships figure and the 1997 Kenya founding.',
    },
    {
      id: 'pw-financials',
      label: 'Financials & Policies',
      url: 'https://www.partnersworldwide.org/about-us/financials-policies/',
      publisher: 'Partners Worldwide',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Displays the ECFA, Charity Navigator and Excellence in Giving accreditations, confirms the EIN, and links audited statements plus 2023 and 2024 Form 990s.',
    },
    {
      id: 'pw-audit-25',
      label: 'Audited financial statements, year ended 30 June 2025',
      url: 'https://www.partnersworldwide.org/wp-content/uploads/2026/02/PARTNERS-WORLDWIDE-PWW-2025-FS-FINAL.pdf',
      publisher: 'Partners Worldwide',
      documentType: 'audited-financials',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note: 'Program services $5,356,728, management and general $659,787, fundraising $481,034, total $6,497,549. Covers the US organisation only; the Local Community Institutions are not consolidated.',
    },
    {
      id: 'pw-ar-25',
      label: '2025 Annual Report',
      url: 'https://www.partnersworldwide.org/2025-annual-report/',
      publisher: 'Partners Worldwide',
      documentType: 'annual-report',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note: 'A web page rather than a document. Source of the 337,000 businesspeople claim and the Vista 2030 goals, signed by president and chief executive Bob Vryhof.',
    },
  ],
};
