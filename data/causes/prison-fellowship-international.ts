import type { Cause } from '@/lib/types';

export const prisonFellowshipInternational: Cause = {
  slug: 'prison-fellowship-international',
  name: 'Prison Fellowship International',
  legalName: 'Prison Fellowship International',
  ein: '51-0247185',
  tagline:
    'Licenses a seven-week Bible course into 856 prisons in 35 countries and runs it through local volunteers.',
  category: 'justice',
  countries: ['Global'],
  whatTheyDo:
    'Prison Fellowship International does not operate prisons ministries directly in most places; it develops programmes, licenses them to national ministries, trains their volunteers and grants them money and materials. The main programmes are The Prisoner’s Journey, a seven-week introduction to the person of Christ delivered in prison; The Listener’s Way, audio and visual Scripture for prisoners who cannot read; and PromisePath, education and mentoring for the children of prisoners. In FY2025 it reported 113,000 course graduates across 856 prison sites in 35 countries, and 4,376 children served in 9 countries.',
  accreditations: [
    {
      label: 'Accredited organization, Evangelical Council for Financial Accountability',
      sourceId: 'pfi-ecfa',
    },
  ],
  verification: 'documents-reviewed',
  biblicalAlignment: {
    mandate:
      'Christ put prison visitation in the same sentence as feeding the hungry and clothing the naked, and then said the prisoner was himself. He also opened his public ministry by reading a text about proclaiming liberty to captives. A ministry whose entire product is getting into a cell and staying there for seven weeks is the plainest possible reading of both.',
    scriptures: [
      {
        ref: 'Matthew 25:36',
        text: 'I was naked and you clothed me, I was sick and you visited me, I was in prison and you came to me.',
      },
      {
        ref: 'Luke 4:18',
        text: 'The Spirit of the Lord is upon me, because he has anointed me to proclaim good news to the poor. He has sent me to proclaim liberty to the captives and recovering of sight to the blind, to set at liberty those who are oppressed.',
      },
      {
        ref: 'Hebrews 13:3',
        text: 'Remember those who are in prison, as though in prison with them, and those who are mistreated, since you also are in the body.',
      },
    ],
    concerns: [
      'A $4,048,556 line called “Change in donor intent” appears in the FY2025 functional expense table, charged entirely to fundraising and then removed again as a non-operating expense. Total expenses are $17,676,761 before that reversal and $13,628,205 after it. The audit does not explain what changed or whose gift it was. This is the single largest number in the statement after program services and we do not know what it is.',
      '$3,980,033 — 39% of all program spending — sits in a column labelled only “Other Programs”. The three named programmes together account for less than that. A donor cannot tell what the largest program line buys.',
      'The ministry grants money and materials to national ministries it does not consolidate: $4,627,067 of the program total is “Grants and materials donated to National Ministries”. No grantee is named in the statements and no grantee audit is referenced, so nearly half of program spending leaves the reporting boundary.',
      'Prison Fellowship International is a separate legal entity from Prison Fellowship, the United States ministry founded by Charles Colson (EIN 62-0988294). They share a name and a lineage, not a balance sheet. Every figure on this page is PFI’s alone, and a gift to one does not fund the other.',
    ],
  },
  roi: {
    levers: ['multiplication', 'volunteer-leverage', 'local-workers', 'existing-network'],
    reason:
      'The model is a curriculum, not a building. Once The Prisoner’s Journey exists in a language, the marginal cost of the next prison is a trained volunteer and a set of booklets — and FY2025 reports 2,000 volunteers for The Listener’s Way alone. The prisons already exist, the prisoners are already gathered, and the people delivering the course are nationals recruited by the national ministry rather than staff PFI employs: only $2,370,409 of the $10,169,700 program total is salaries and benefits, while $4,627,067 is grants and materials pushed out to those national ministries. That is a structure designed to spread without proportional new money.',
  },
  costModel: {
    outcome: 'prisoner who completed the seven-week course',
    outcomePlural: 'prisoners who completed the seven-week course',
    spend: {
      amount: 10169700,
      basis: 'program-services',
      fiscalYear: '2025',
      sourceId: 'pfi-audit-25',
    },
    count: {
      amount: 113000,
      label: 'graduates of The Prisoner’s Journey',
      fiscalYear: '2025',
      sourceId: 'pfi-ar-25',
    },
    attribution: 'all-program-spend',
    caveat:
      'An upper bound, and a loose one. Every program dollar is charged to this one course, including $1,449,935 of children’s programmes, $1,005,801 of capacity building, $701,489 of communications and education, and $3,980,033 in a column labelled only “Other Programs”. The denominator is also rounded: 113,000 is printed as “113K” in a designed graphic, so the true figure is somewhere in a band of hundreds. Charge only the $3,032,442 “Prison Programs” line to the same count and it gives $26.83 — but that line funds other prison work too, so neither end of the range is a price. We count a completed course, which is a delivered service; we do not count the “87K disciples” the same report reports, and we make no claim about what happened in anyone’s heart.',
    alternates: [
      {
        label: 'prisoners invited to The Prisoner’s Journey',
        count: 211000,
        note: 'The report’s wider figure for the same programme. It gives $48.20, but an invitation is a much weaker unit than a completed seven-week course.',
      },
      {
        label: 'graduates of The Listener’s Way',
        count: 56400,
        note: 'A separate audio-and-visual Scripture programme with its own FY2025 count across 327 prison sites in 30 countries. Included to show the scale of the second programme, not because the same spending bought both counts.',
      },
    ],
  },
  ministryClaims: [
    {
      quote:
        'Since 2014, The Prisoner’s Journey® has introduced prisoners to a restorative relationship with Jesus Christ, with hundreds of thousands finding spiritual freedom, healing and wholeness with Him.',
      sourceId: 'pfi-ar-25',
    },
    {
      quote: '*program graduates who continue to further discipleship courses',
      sourceId: 'pfi-ar-25',
      impliedOutcome: 'disciple',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 3,
      note: 'The core product is a seven-week introduction to Christ delivered from Scripture, the programme descriptions are written in explicitly Christian terms, and the ministry is an ECFA member, which requires a doctrinal standard. There is no separate statement of faith on the site that we found.',
    },
    localLeadership: {
      value: 3,
      note: 'Delivery is by national ministries and their volunteers in 35 countries; PFI’s own payroll is a fifth of program spending and 45% of the program total is granted out. The programme design, brand and money sit in Virginia.',
    },
    financialTransparency: {
      value: 2,
      note: 'Consolidated audited statements are posted on the ministry’s own site for every year from 2010 to 2025, which is better than most. Marked down hard for two things in the FY2025 statements that the audit does not explain: the $4,048,556 “Change in donor intent” and the $3,980,033 “Other Programs” column.',
    },
    outcomeEvidence: {
      value: 1,
      note: 'Counts are published per programme with prison sites and countries attached, which is real. But every headline figure is rounded to the nearest thousand and set in a curved graphic rather than printed as text, no programme defines its unit, and nothing states whether a prisoner who takes two courses is counted twice.',
    },
    costEvidence: {
      value: 2,
      note: 'Both halves exist and both are sourced, one from a consolidated audit. Marked down because the ministry publishes no cost per graduate of its own to check ours against, and because a numerator with a $3,980,033 unexplained column makes any division approximate by construction.',
    },
  },
  notVerified: [
    'Nobody outside the ministry has counted a graduate. The 113,000 is PFI’s own tally, collected from national ministries it funds, and no prison service, government or auditor is cited as confirming any part of it.',
    'What “Other Programs” is. It is $3,980,033, the largest single program column in the FY2025 audit, and neither the statements nor the annual report define it.',
    'What the $4,048,556 “Change in donor intent” was. It is charged to fundraising in the functional table, backed out as non-operating, and unexplained. It is nearly a third of reported total expenses.',
    'Whether the counts double-count. A prisoner could plausibly appear in The Prisoner’s Journey, The Listener’s Way and a further discipleship course in the same year. Nothing in the report says whether the same person can be counted more than once.',
    'The headline figures came out of graphics, not text. 87K, 113K, 211K, 856 and 35 are set in curved display type on page 10 of the FY25 annual report and had to be read off a rendered image; the rounding to thousands is the ministry’s, not ours.',
    'Which national ministries received the $4,627,067 of grants and donated materials, and whether any of them is separately audited.',
    'The ministry reports “87K disciples”, footnoted as programme graduates who continue to further discipleship courses. We can neither verify nor score that, and we do not treat continued discipleship as a measurable outcome of a donation.',
  ],
  notes: [
    'Fiscal year ends 30 June. The audited statements and the annual report both cover the year to 30 June 2025, so the numerator and denominator match.',
    'FY2025 expenses per the statement of activities: program services $10,169,700, fundraising $3,138,832, administration $319,673, total $13,628,205, against $10,382,324 the year before. The 31% jump in total spending is not explained in the statements.',
    'The FY25 annual report’s own summary of the year is $19.4M contributions, $2.1M gift-in-kind, $0.7M interest and other income, $10.2M programmes and $3.5M operations. The programme and operations figures reconcile to the audit; the revenue lines are the ministry’s rounding.',
    'PromisePath, the children-of-prisoners programme, reported FY25 results of 4,376 children served in 9 countries, with 95% mentored, 100% in school and 74% receiving Scripture. Those percentages have no published denominator beyond the 4,376 and we did not build a second cost model on them.',
    'The task of separating this ministry from the American one matters for a donor: Prison Fellowship International is EIN 51-0247185 in Ashburn, Virginia, while Prison Fellowship Ministries in Lansdowne, Virginia is EIN 62-0988294 and files separately.',
  ],
  siteUrl: 'https://pfi.org/',
  giveUrl: 'https://pfi.org/donate/',
  sources: [
    {
      id: 'pfi-site',
      label: 'Homepage',
      url: 'https://pfi.org/',
      publisher: 'Prison Fellowship International',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'pfi-financials',
      label: 'Financials',
      url: 'https://pfi.org/who-we-are/financials/',
      publisher: 'Prison Fellowship International',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Posts audited statements and annual reports for every year from 2010 to 2025, and links the ECFA member profile and Charity Navigator rating.',
    },
    {
      id: 'pfi-audit-25',
      label: 'FY2025 consolidated audited financial statements',
      url: 'https://cdn.pfi.org/wp-content/uploads/2026/01/08154310/PFI-Audit-Report-%E2%80%93-2025.pdf',
      publisher: 'Prison Fellowship International',
      documentType: 'audited-financials',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note: 'Year ended 30 June 2025, consolidated with affiliates. Program services $10,169,700 across five columns: Prison Programs $3,032,442, Children’s Programs $1,449,935, Capacity Building $1,005,801, Other Programs $3,980,033, Communications and Education $701,489.',
    },
    {
      id: 'pfi-ar-25',
      label: 'FY25 annual report',
      url: 'https://cdn.pfi.org/wp-content/uploads/2026/03/05131029/Annual-Report-2025-Digital-1-1.pdf',
      publisher: 'Prison Fellowship International',
      documentType: 'annual-report',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note: 'The programme statistics are set in curved display type rather than printed text; we rendered pages 10, 14 and 18 as images and read the figures off them. Page 10 gives 87K disciples, 113K graduates, 211K invited, 856 prison sites and 35 countries for The Prisoner’s Journey; page 14 gives 2K volunteers, 56.4K graduates, 5.1K listening groups, 327 prison sites and 30 countries for The Listener’s Way; page 18 gives 4,376 children served in 9 countries for PromisePath.',
    },
    {
      id: 'pfi-ecfa',
      label: 'ECFA member profile, Prison Fellowship International',
      url: 'https://www.ecfa.org/MemberProfile.aspx?ID=27556',
      publisher: 'Evangelical Council for Financial Accountability',
      documentType: 'third-party',
      retrieved: '2026-09-18',
    },
    {
      id: 'pfi-propublica',
      label: 'IRS filings for Prison Fellowship International, EIN 51-0247185',
      url: 'https://projects.propublica.org/nonprofits/organizations/510247185',
      publisher: 'ProPublica Nonprofit Explorer',
      documentType: 'third-party',
      retrieved: '2026-09-18',
    },
  ],
};
