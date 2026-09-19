import type { Cause } from '@/lib/types';

export const loveJusticeInternational: Cause = {
  slug: 'love-justice-international',
  name: 'Love Justice International',
  legalName: 'Love Justice International',
  ein: '71-0982808',
  tagline:
    'Stations trained local monitors at 57 border and bus-station crossings to stop people before they are trafficked.',
  category: 'justice',
  countries: [
    'Nepal',
    'Bangladesh',
    'India',
    'Indonesia',
    'Ethiopia',
    'Kenya',
    'Uganda',
    'Rwanda',
    'Burundi',
    'Malawi',
    'Mozambique',
    'Zambia',
    'South Africa',
    'Namibia',
    'Lesotho',
    'Sierra Leone',
    'Liberia',
    'Burkina Faso',
  ],
  whatTheyDo:
    'Love Justice runs transit monitoring: national staff sit at borders, bus parks and transport hubs, watch for indicators of trafficking in transit, question travellers who match them, and help those they believe are being trafficked to go home instead of onward. In FY2025 it operated 57 monitoring stations in 18 countries with 238 trained monitors. Alongside that it runs 14 family homes for orphaned and abandoned children and a primary and secondary school in Nepal.',
  accreditations: [],
  verification: 'documents-reviewed',
  biblicalAlignment: {
    mandate:
      'Scripture does not only tell the church to comfort the oppressed after the fact; it tells the church to intervene. Rescue those being taken away to death. Break the yoke before it closes. Speak for the one who cannot speak for himself. Transit monitoring is that command applied at the one point in a trafficking chain where the person is still reachable.',
    scriptures: [
      {
        ref: 'Proverbs 24:11–12',
        text:
          'Rescue those who are being taken away to death; hold back those who are stumbling to the slaughter. If you say, “Behold, we did not know this,” does not he who weighs the heart perceive it?',
      },
      {
        ref: 'Isaiah 58:6',
        text:
          'Is not this the fast that I choose: to loose the bonds of wickedness, to undo the straps of the yoke, to let the oppressed go free, and to break every yoke?',
      },
      {
        ref: 'Proverbs 31:8–9',
        text:
          'Open your mouth for the mute, for the rights of all who are destitute. Open your mouth, judge righteously, defend the rights of the poor and needy.',
      },
    ],
    doctrine: {
      label:
        'Mission statement on the FAQ: “sharing the love of Jesus Christ by fighting the world’s greatest injustices”, with an explicit statement that aid is not conditional on a response to the gospel',
      sourceId: 'lji-faq',
    },
    concerns: [
      'An intercept is a judgement, not a finding. Love Justice defines it in its own words: “We ‘intercept’ someone when we have good reason to believe that they are in the process of being trafficked or at high risk of being trafficked.” That means a monitor’s suspicion, reviewed internally, is the whole evidentiary basis. Nothing in the count is a proven trafficking case, and nothing in it has been confirmed by a court, a government or an outside auditor.',
      'Stopping and questioning travellers on suspicion necessarily stops people who were not being trafficked. The ministry publishes no false-positive rate, no count of people questioned and released, and no description of what consent looks like at a border checkpoint where the alternative to co-operating is an unclear one.',
      'Fundraising is 24% of all spending — $1,332,154 against $3,544,842 of program services. That is a high support ratio for a ministry whose own selling point is “do much with little”, and the audit’s own functional summary puts program services at 65%.',
      'The annual report presents professions of faith on the same spread as interception counts. We do not treat professions of faith as a measurable outcome, and a donor should not read the two figures as the same kind of number.',
    ],
  },
  roi: {
    levers: ['local-workers', 'local-cost-base', 'existing-network'],
    reason:
      'Every monitor is a national of the country they work in, standing at a crossing that already exists and already has traffic through it. There is no facility to build, no residential programme to fund for years, and no expatriate salary: 345 national and international staff and 327 volunteers and subcommittee members cover 18 countries on total spending of $5,465,281. Income per person in most of the countries served is between $240 and $2,760, so a monitor’s wage, a bus ticket home and a phone are priced to that economy. The structural argument is timing rather than geography — the ministry claims intervening before exploitation is far cheaper than restoring someone afterwards, and its own FAQ says so.',
  },
  costModel: {
    outcome: 'interception at a transit point',
    outcomePlural: 'interceptions at transit points',
    spend: {
      amount: 3544842,
      basis: 'program-services',
      fiscalYear: '2025',
      sourceId: 'lji-audit-25',
    },
    count: {
      amount: 26822,
      label: 'people intercepted to prevent them from being trafficked',
      fiscalYear: '2025',
      sourceId: 'lji-ar-25',
    },
    attribution: 'all-program-spend',
    caveat:
      'An upper bound. All program spending is charged here, including $389,057 of children’s ministries and $53,901 for the Nepal Dream School, neither of which is transit monitoring. It is also not a price: an interception is a monitor’s judgement that someone was about to be trafficked, verified only inside the organisation, so the denominator is a count of decisions rather than a count of confirmed trafficking cases. Strip the school and children’s homes out and the same year gives $115.65; put total expenses over the same count and it gives $203.76.',
    alternates: [
      {
        label: 'interceptions and arrests together',
        count: 27166,
        note:
          'Love Justice’s own method splits its anti-trafficking investment between two outcomes, interceptions and arrests, so 26,822 interceptions plus 344 arrests is the denominator its own calculation implies. It gives $130.49.',
      },
    ],
  },
  ministryClaims: [
    {
      quote: 'At the end of 2025, our one-year cost-per-intercept number stood at $112.',
      sourceId: 'lji-faq',
      impliedCostPerOutcome: 112,
      impliedOutcome: 'interception',
    },
    {
      quote:
        'This year, our average cost to intercept someone to prevent them from being trafficked dropped from $132 to just $112.',
      sourceId: 'lji-ar-25',
    },
    {
      quote:
        'Second, the cost to intercept a potential victim is around $200, while the cost to rescue and rehabilitate a victim could be in the thousands.',
      sourceId: 'lji-faq',
    },
    {
      quote:
        'This year, 1,102 people made first-time professions of faith in Jesus—fruit of growing reach and improved discipleship materials, training, and spiritual care across our teams.',
      sourceId: 'lji-ar-25',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 3,
      note:
        'The mission statement names Jesus Christ, the FAQ explains where and when the gospel is presented, and the report is written in explicitly Christian terms. It also states that no service is contingent on a person’s response, which is the right answer to the question of aid tied to a hearing.',
    },
    localLeadership: {
      value: 3,
      note:
        'The work is done by 238 trained monitors and 345 staff who are nationals of the countries they serve, with country offices reviewing their own intercept records. Governance and fundraising sit in the United States.',
    },
    financialTransparency: {
      value: 3,
      note:
        'Audited financial statements and Form 990s going back to 2016 are posted on the site, with a functional expense table detailed to the line. The FAQ also publishes the method behind the advertised cost per intercept, which almost no ministry does.',
    },
    outcomeEvidence: {
      value: 2,
      note:
        'The count is precise, dated to a stated fiscal year, and accompanied by a published verification procedure — two national office staff review each record, and country samples are audited. Marked down because all of that verification is internal and the unit itself is a judgement about a future harm that did not happen.',
    },
    costEvidence: {
      value: 3,
      note:
        'Both halves of the division are published in documents the ministry posts, the ministry advertises its own figure, and it publishes the method behind it well enough that the gap between $112 and our $132.16 is explainable rather than mysterious.',
    },
  },
  notVerified: [
    'Nobody outside Love Justice has ever confirmed an interception. The verification process described in the annual report is internal: a monitor believes an intercept is valid, at least two national office staff review it, and the record is uploaded to the ministry’s own database. That is more process than most ministries publish, and it is still self-certification.',
    'The ministry’s own cost-per-intercept number is inconsistent across its own pages. The annual report and the FAQ both say $112 for FY2025, and the same FAQ says elsewhere that “the cost to intercept a potential victim is around $200”. We could not establish which figure is current or what the $200 includes.',
    'The gap between the advertised $112 and our $132.16 is a method difference, not an error, but we cannot reproduce theirs. Their calculation is all-inclusive for anti-trafficking only — it adds fundraising and administration, removes the school and children’s homes, and then splits the result between interceptions and arrests. The proportional split is not published, so their number cannot be rebuilt from the audit.',
    'No count of people stopped, questioned and found not to be at risk is published anywhere. Without it there is no way to judge how selective the intercept criteria are.',
    'What happens after an interception is not counted. The ministry describes educating the person and helping them return home; there is no published figure for how many were followed up, how many were trafficked later anyway, and how many were returned to the household the recruiter came from.',
    'The claim drawn from Walk Free’s 2023 data — that trafficking prevalence fell about 9% a year in the 16 countries Love Justice entered before 2022 while rising about 11.6% elsewhere — is a comparison the ministry makes using someone else’s estimates. The report itself says these findings “don’t, by themselves, prove cause and effect”. We have not read the underlying Walk Free figures and we do not treat this as evidence of impact.',
    'The 344 arrests are described as “stemming from our work”. No conviction count, no case list and no police confirmation is published, so the arrest figure carries the same attribution problem as the interception figure.',
  ],
  notes: [
    'Fiscal year runs 1 October to 30 September; FY2025 ended 30 September 2025, and the audit and annual report cover the same period, so numerator and denominator match for once.',
    'Scale, for context: total expenses $5,465,281 in FY2025 against $5,166,906 in FY2024, with program services at 65% both years and fundraising at 24%.',
    'The countries listed here are the 18 in the FY2025 country table in the annual report. Five of them — Burundi at $240 of income per person, Sierra Leone and Liberia at $830, Burkina Faso at $980, Lesotho at $1,280 — are among the poorest places any cause in this directory works.',
    'The ministry reports 169 orphaned and abandoned children fully provided for in 14 family homes and 232 students at the Dream School in Nepal. Those are separate programmes with their own counts; we did not build a second cost model on them because the audit reports the homes and the school as two small grant lines rather than as full program costs.',
  ],
  siteUrl: 'https://www.lovejustice.ngo/',
  giveUrl: 'https://www.lovejustice.ngo/give',
  sources: [
    {
      id: 'lji-site',
      label: 'Homepage',
      url: 'https://www.lovejustice.ngo/',
      publisher: 'Love Justice International',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'lji-financials',
      label: 'Financials and reporting',
      url: 'https://www.lovejustice.ngo/financials',
      publisher: 'Love Justice International',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Links audited statements and Form 990s from 2016 to 2025. The PDF links are rendered by script rather than printed in the page.',
    },
    {
      id: 'lji-faq',
      label: 'FAQ, including the cost-per-intercept method',
      url: 'https://www.lovejustice.ngo/faq',
      publisher: 'Love Justice International',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note:
        'Source of the ministry’s definition of an intercept, the three-step cost-per-intercept calculation, the $112 and “around $200” figures, and the statement that no service is contingent on a person’s response to the gospel.',
    },
    {
      id: 'lji-audit-25',
      label: 'FY2025 audited financial statements',
      url: 'https://www.lovejustice.ngo/hubfs/LJI%20Final%202025.pdf',
      publisher: 'Love Justice International',
      documentType: 'audited-financials',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note:
        'Year ended 30 September 2025. Program services $3,544,842, management and general $588,285, fundraising $1,332,154, total expenses $5,465,281, with a line-by-line functional table that includes the Nepal Dream School at $53,901 and Children’s Ministries at $389,057.',
    },
    {
      id: 'lji-ar-25',
      label: 'FY2025 annual report',
      url: 'https://www.lovejustice.ngo/hubfs/Love%20Justice%20-%20Annual%20Report%202025%20-%20Updated%20Financials%20-%20Spreads.pdf',
      publisher: 'Love Justice International',
      documentType: 'annual-report',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note:
        'Source of 26,822 interceptions, 344 arrests, 57 monitoring stations, 18 countries, 238 monitors, 345 staff, 14 family homes, 169 children and 232 students. The headline figures are set in display type on the opening spread; the verification footnote is printed beneath them.',
    },
    {
      id: 'lji-990-24',
      label: 'FY2024 Form 990',
      url: 'https://www.lovejustice.ngo/hubfs/2024%20990%20-%20%20LOVE%20JUSTICE%20INTERNATIONAL%20-%20PUBLIC%20INSPECTION%20COPY.pdf',
      publisher: 'Love Justice International',
      documentType: 'form-990',
      retrieved: '2026-09-18',
      fiscalYear: '2024',
    },
    {
      id: 'lji-propublica',
      label: 'IRS filings for Love Justice International, EIN 71-0982808',
      url: 'https://projects.propublica.org/nonprofits/organizations/710982808',
      publisher: 'ProPublica Nonprofit Explorer',
      documentType: 'third-party',
      retrieved: '2026-09-18',
    },
  ],
};
