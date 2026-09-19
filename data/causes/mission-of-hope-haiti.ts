import type { Cause } from '@/lib/types';

export const missionOfHopeHaiti: Cause = {
  slug: 'mission-of-hope-haiti',
  name: 'Mission of Hope Haiti',
  legalName: 'Mission of Hope Haiti, Inc.',
  ein: '13-4207776',
  tagline:
    'Runs a 10,000-student school network and 125,000 meals a day in Haiti, through a country in armed collapse.',
  category: 'children',
  countries: ['Haiti', 'Dominican Republic'],
  whatTheyDo:
    'Mission of Hope works through Haitian churches — its own audit lists church advancement, educational development, health care, orphan care and the HaitiOne partner network as its five initiatives. In practice that is a school network it puts at 10,000-plus students, a daily feeding programme run with Convoy of Hope and hundreds of Haitian partners, a medical programme, the Village of Hope campus with children’s homes and the 40-bed Grace House elderly facility, pastor and leader training, and a smaller programme in the Dominican Republic. Founded in Ohio in 2001; the audited statements consolidate the Haitian and Dominican entities rather than stopping at the US border.',
  accreditations: [
    { label: 'ECFA accredited', sourceId: 'moh-ecfa' },
    { label: 'Charity Navigator rated', sourceId: 'moh-cn' },
  ],
  verification: 'documents-reviewed',
  biblicalAlignment: {
    mandate:
      'Feeding a hungry child and teaching one to read are both commanded, and Scripture treats them as the same obedience rather than two different programmes. The instruction to pour yourself out for the hungry comes with a promise attached to the place, not to the giver; the instruction to teach is given to households first, which is why a school that also feeds is closer to the pattern than either alone.',
    scriptures: [
      {
        ref: 'Matthew 25:35',
        text: 'For I was hungry and you gave me food, I was thirsty and you gave me drink, I was a stranger and you welcomed me.',
      },
      {
        ref: 'Isaiah 58:10',
        text: 'If you pour yourself out for the hungry and satisfy the desire of the afflicted, then shall your light rise in the darkness and your gloom be as the noonday.',
      },
      {
        ref: 'Deuteronomy 6:6–7',
        text: 'And these words that I command you today shall be on your heart. You shall teach them diligently to your children, and shall talk of them when you sit in your house.',
      },
    ],
    concerns: [
      'No statement of faith is published on the site. The gospel language is strong and specific — the audit’s own vision statement is to reach Haiti and the Dominican Republic "by following Jesus Christ", and the community engagement page is built around "equipping the local church" — but there is no doctrinal statement to read. ECFA membership requires subscription to one; the ministry does not post it.',
      'The Village of Hope campus includes residential orphan care, which is the most contested model in this region. Nothing on the site describes a reunification, kinship or adoption policy, and the audit gives no resident count. We cannot tell you how many children live there or what the plan is for them.',
      'Mission trips are a significant part of the operation and the site sells them heavily — Dominican Republic trips, medical trips, Haiti trips. Trip fees sit inside "Programs and activities" revenue of $1,762,163 rather than on their own line, so we cannot separate trip income from merchandise, and the travel line in program services is $548,908. Where teams build and repair houses, ask whose paid work that would otherwise have been.',
      'Haiti is in armed collapse and the ministry says so itself: "the devastation of this crisis is believed to be larger than the 2010 earthquake." A donor should read every count on this page as describing an operation running under a State of Emergency.',
    ],
  },
  roi: {
    levers: ['local-cost-base', 'existing-network', 'local-workers'],
    reason:
      'Haiti has the lowest income per person of any country in this directory — roughly 44 times below the United States — so a teacher’s salary, a school building and a cooked meal are all priced to that economy, and the audit consolidates the Haitian entity so the money is spent there rather than granted away and lost from view. The second lever is the network: delivery runs through Haitian churches and hundreds of local partners that already exist and are already staffed, which is why a feeding programme can reach 125,000 meals a day without the ministry building 125,000 meals’ worth of kitchens. Against that, more than half of program spending is donated American food, and donated food carries none of Haiti’s cost advantage — it is valued at US wholesale.',
  },
  costModel: {
    outcome: 'year of school for a student',
    outcomePlural: 'years of school for students',
    spend: {
      amount: 20790501,
      basis: 'program-services',
      fiscalYear: 'FY2025 (year ended 30 June 2025)',
      sourceId: 'moh-audit-25',
    },
    count: {
      amount: 10000,
      label: 'students in the Haiti school network',
      fiscalYear: 'undated site copy, read September 2026',
      sourceId: 'moh-education',
    },
    attribution: 'all-program-spend',
    caveat:
      'An upper bound twice over, and we would rather you distrusted it than quoted it. The numerator is every program dollar: food distribution across Haiti, a medical programme, orphan care at the Village of Hope, the Grace House elderly facility, pastor training, the Dominican Republic programme and $548,908 of program travel — none of which is schooling. Of that total, $10,972,850 (53%) is donated goods, overwhelmingly food, which reaches far more children than the 10,000 students. The denominator is the ministry’s own published floor ("10,000+"), it carries no date, and it is website copy rather than an audited count. Read this as the cost of running everything Mission of Hope does divided by its school roll, which is what it is.',
  },
  ministryClaims: [
    {
      quote:
        'Our Child Sponsorship program directly connects a child in our school network of 10,000+ students in Haiti with a sponsor for just $39/month',
      sourceId: 'moh-education',
      impliedCostPerOutcome: 468,
    },
    {
      quote:
        'This idea of good stewardship means that over 90% of all gifts that come into Mission of Hope go directly to ministry in the countries where we serve',
      sourceId: 'moh-financials',
    },
    {
      quote:
        'we are able to serve over 125,000 meals a day to children in schools and orphanages throughout Haiti',
      sourceId: 'moh-food',
    },
    {
      quote:
        'The current capacity can care for 40 residents, and the facilities include living quarters, a cafeteria, a common area, and a medical exam room.',
      sourceId: 'moh-residents',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 3,
      note: 'Christ is named in the audited financial statements, not only the marketing: the vision is life transformation "by following Jesus Christ". The community engagement programme exists to equip Haitian churches and pastors, and the ministry says plainly that "The local church is the mechanism that God has created to reach local communities." Marked down from a clean 3 only by the absence of a published statement of faith.',
    },
    localLeadership: {
      value: 2,
      note: 'The Haitian and Dominican entities are registered locally and consolidated into the audit, and the stated method is to come alongside Haitian pastors so "everything we do is led locally". But the head office is in Cedar Park, Texas, the audit says the donor base is primarily American and Canadian, and no Haitian leader is named on the staff pages we read.',
    },
    financialTransparency: {
      value: 3,
      note: 'Audited consolidated statements back to FY2020 are posted on the ministry’s own site, with a line-by-line functional expense table, and the audit consolidates the Haitian and Dominican operating entities. ECFA accredited. The only gap is the Form 990, which is posted as a scanned image we could not extract text from.',
    },
    outcomeEvidence: {
      value: 1,
      note: 'Counts exist but almost none of them are dated or tied to a fiscal year: "10,000+ students", "over 125,000 meals a day", capacity for 40 elderly residents. The audited statements contain no outcome counts at all, and the 2026 Mission Report is published in a Flipsnack viewer we could not read. For a ministry this size, that is thin.',
    },
    costEvidence: {
      value: 2,
      note: 'Both halves of the division are published and sourced, one of them from an audit. Marked down because the denominator is an undated marketing floor, and because the numerator covers five programmes of which schooling is only one.',
    },
  },
  notVerified: [
    'Whether the 10,000-student figure is current. It is undated website copy, read in September 2026, describing a school network operating through a security collapse the ministry itself compares to the 2010 earthquake. Schools in Port-au-Prince have closed and reopened repeatedly since 2023. Nobody should assume this roll was intact on any particular day.',
    'The gap between "over 90% of all gifts… go directly to ministry" and the audit, where program services are $20,790,501 of $24,749,345 total expenses — 84%. The claim is about gifts rather than expenses, so the two are not strictly the same measurement, but the ministry does not publish the arithmetic behind the 90%.',
    'How much of the $1,762,163 of "Programs and activities" revenue is mission trip fees rather than merchandise. The audit combines them in one line. The ministry states elsewhere that "Mission Trip payments are NOT tax deductible as a charitable donation", so trip income is being treated as an exchange transaction, but its size is not disclosed.',
    'How many children live in residential care at the Village of Hope, and what the plan is for them. Orphan care is one of five stated initiatives and it has no published count, no reunification policy and no share of the budget.',
    'What the 125,000 daily meals cost and who pays for them. The programme runs on donated goods valued at $10,972,850 and a partnership with Convoy of Hope, so most of the meal cost is not in Mission of Hope’s cash budget at all — which means dividing cash spending by meals would be meaningless, and we have not done it.',
    'A copy-paste error in the FY2025 audit: the revenue recognition note reports deferred mission trip revenue "as of June 30, 2024" in a statement covering the year ended 30 June 2025. Small, but it is in the audited document.',
    'Foreign operations carried a net loss of $345,045 in FY2025 against net assets of $22,943,994 held abroad. The audit flags currency and repatriation risk but does not quantify what a further collapse would cost.',
  ],
  notes: [
    'The audit consolidates Mission of Hope with Foundation Mission de l’Espoir in Haiti, Fundación MOH in the Dominican Republic and CaribbeanOne in Texas. That is the reason this cause is scored the way it is on transparency: most US ministries of this size publish statements that stop at the border, and you cannot see the field operation at all.',
    'Gifts-in-kind are the single largest line in the whole organisation: $10,972,850 charged entirely to program services, against $11,177,168 of contributed goods revenue. Slightly over half of what this ministry "spends" is food and goods passing through. Strip it out and cash program spending is about $9.8 million.',
    'Support costs are $3,958,844 of $24,749,345 — 16%. That is unremarkable, and lower than several smaller ministries in this directory.',
    'The ministry’s own contrast is worth sitting with: sponsorship is sold at $39 a month, or $468 a year, while total program spending divided by the school roll is $2,079. Both figures are real. The first is what a sponsor is asked for; the second is what the whole operation costs per enrolled student. Neither is the price of educating one child.',
  ],
  siteUrl: 'https://www.missionofhope.com/',
  giveUrl: 'https://www.missionofhope.com/giving-opportunities',
  sources: [
    {
      id: 'moh-site',
      label: 'Homepage',
      url: 'https://www.missionofhope.com/',
      publisher: 'Mission of Hope Haiti',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
    },
    {
      id: 'moh-audit-25',
      label: 'FY2025 audited consolidated financial statements',
      url: 'https://irp.cdn-website.com/0dad1e1b/files/uploaded/Mission+of+Hope+Haiti-+Inc.+Financial+Statements_6-30-2025.pdf',
      publisher: 'Mission of Hope Haiti',
      documentType: 'audited-financials',
      retrieved: '2026-09-19',
      fiscalYear: 'FY2025 (year ended 30 June 2025)',
      note: 'Consolidated with the Haitian, Dominican and CaribbeanOne entities. Program services $20,790,501 of $24,749,345 total expenses, with a line-by-line functional breakdown. Issued 6 March 2026.',
    },
    {
      id: 'moh-financials',
      label: 'Financial Information',
      url: 'https://www.missionofhope.com/financial-information',
      publisher: 'Mission of Hope Haiti',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: 'Links audits from FY2020 onward. Source of the 90% claim and the statement that mission trip payments are not tax deductible.',
    },
    {
      id: 'moh-education',
      label: 'Education',
      url: 'https://www.missionofhope.com/education',
      publisher: 'Mission of Hope Haiti',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: 'Source of both the 10,000+ student count and the $39/month sponsorship price. Neither carries a date.',
    },
    {
      id: 'moh-food',
      label: 'Food Security',
      url: 'https://www.missionofhope.com/food-security',
      publisher: 'Mission of Hope Haiti',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
    },
    {
      id: 'moh-community',
      label: 'Community Engagement',
      url: 'https://www.missionofhope.com/community-engagement',
      publisher: 'Mission of Hope Haiti',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: 'The clearest statement of the ministry’s ecclesiology and of its intent to have the work led locally.',
    },
    {
      id: 'moh-crisis',
      label: 'Haiti in Crisis',
      url: 'https://www.missionofhope.com/haiti-in-crisis',
      publisher: 'Mission of Hope Haiti',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: 'The ministry’s own description of the security collapse, including the comparison with the 2010 earthquake.',
    },
    {
      id: 'moh-residents',
      label: 'Sponsor a Resident — Grace House',
      url: 'https://www.missionofhope.com/residents',
      publisher: 'Mission of Hope Haiti',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: 'Sponsorship page for the Grace House elderly facility, carrying its capacity figure.',
    },
    {
      id: 'moh-ecfa',
      label: 'ECFA member profile',
      url: 'https://www.ecfa.org/MemberProfile.aspx?ID=32511',
      publisher: 'Evangelical Council for Financial Accountability',
      documentType: 'third-party',
      retrieved: '2026-09-19',
    },
    {
      id: 'moh-cn',
      label: 'Charity Navigator rating, EIN 13-4207776',
      url: 'https://www.charitynavigator.org/ein/134207776',
      publisher: 'Charity Navigator',
      documentType: 'third-party',
      retrieved: '2026-09-19',
    },
    {
      id: 'moh-propublica',
      label: 'IRS filings for Mission of Hope Haiti, EIN 13-4207776',
      url: 'https://projects.propublica.org/nonprofits/organizations/134207776',
      publisher: 'ProPublica Nonprofit Explorer',
      documentType: 'third-party',
      retrieved: '2026-09-19',
      note: 'Used for multi-year totals. The ministry’s own posted Form 990 is a scanned image with no extractable text layer.',
    },
  ],
};
