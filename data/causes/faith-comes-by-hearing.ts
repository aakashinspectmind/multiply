import type { Cause } from '@/lib/types';

export const faithComesByHearing: Cause = {
  slug: 'faith-comes-by-hearing',
  name: 'Faith Comes By Hearing',
  legalName: 'Hosanna',
  ein: '85-0223225',
  tagline:
    'Records the New Testament as audio in languages that have no written Scripture, then gives the recordings away.',
  category: 'translation',
  countries: ['Global', 'Africa', 'South Asia', 'Latin America', 'East Asia'],
  whatTheyDo:
    'Faith Comes By Hearing records the New Testament in the spoken language of communities that often have no written Bible at all, using local speakers and partner recording teams rather than its own field staff. The recordings are handed out on solar-powered Proclaimer players to listening groups, and published free through its Bible.is and Hosanna apps. It also does Oral Bible Translation — translating directly into speech where no written text exists — and Gospel films. Its stated goal, Vision2033, is a recording in every language that needs one by 2033.',
  accreditations: [],
  verification: 'documents-reviewed',
  biblicalAlignment: {
    mandate:
      'Paul’s chain of dependencies ends at hearing, not reading: faith comes from hearing. For an adult who cannot read, and for a language that has never been written down, audio is not a convenience — it is the only form in which the word can arrive at all. The Ethiopian in Acts was being read to, and what he asked for was a guide.',
    scriptures: [
      {
        ref: 'Romans 10:14, 17',
        text: 'How then will they call on him in whom they have not believed? And how are they to believe in him of whom they have never heard?… So faith comes from hearing, and hearing through the word of Christ.',
      },
      {
        ref: 'Isaiah 55:11',
        text: 'So shall my word be that goes out from my mouth; it shall not return to me empty, but it shall accomplish that which I purpose.',
      },
      {
        ref: 'Acts 8:30–31',
        text: 'So Philip ran to him and heard him reading Isaiah the prophet and asked, "Do you understand what you are reading?" And he said, "How can I, unless someone guides me?"',
      },
      {
        ref: 'Revelation 7:9',
        text: 'After this I looked, and behold, a great multitude that no one could number, from every nation, from all tribes and peoples and languages, standing before the throne and before the Lamb.',
      },
    ],
    doctrine: { label: 'Statement of faith published', sourceId: 'fcbh-faith' },
    concerns: [
      'The headline figure of "approximately 31,315,590 new listeners" is not a headcount. It is 347,951 listening projects multiplied by the ministry’s own stated "worldwide average of 90 listeners per group" — the multiplication is exact. The audit says the average counts "only those present at the program’s initiation", so nobody was counted more than once, but nobody was counted at all.',
      'Every dollar sent abroad is a grant. The Form 990 reports zero offices and zero employees, agents or contractors in all nine foreign regions, and the activity type in every single row is "GRANT MAKING". The audit adds that "Recording center staff are not Hosanna employees and are not recorded on the consolidated financial statements." Who received the money and what they did with it is not published.',
      'Only $16,006,157 of foreign expenditure appears on Schedule F against $46,789,378 of program expense. Roughly two-thirds of the program budget is spent inside the United States. That is defensible for an organisation that capitalises recordings and runs a digital platform from Albuquerque, but it means the low-income-country cost base does most of its work on the last third of the money, not all of it.',
      'Faith Comes By Hearing is not ECFA-accredited. It cites Charity Navigator and GuideStar on its own site; we did not confirm either rating with the rating body.',
    ],
  },
  roi: {
    levers: ['digital-distribution', 'durable-asset', 'local-workers', 'existing-network'],
    reason:
      'A recording is made once and then costs almost nothing to copy. The audit reports 93.2 million chapters accessed and 3.04 million downloads through the ministry’s own infrastructure in FY2026, and every one of those is a marginal cost near zero against a recording already paid for. The recordings themselves sit on the balance sheet as assets amortised over ten years, and are made by partner teams in 25 countries who are explicitly not on the payroll. The weak point is that the asset is only durable if the language it serves stays in use, and the ministry does not publish how many of its 2,633 completed recordings are actually still being listened to.',
  },
  costModel: {
    outcome: 'new language given a complete audio New Testament',
    outcomePlural: 'new languages given a complete audio New Testament',
    spend: {
      amount: 46789378,
      basis: 'program-services',
      fiscalYear: 'FY2026',
      sourceId: 'fcbh-audit-26',
    },
    count: {
      amount: 293,
      label: 'new languages in which an audio New Testament was completed',
      fiscalYear: 'FY2026',
      sourceId: 'fcbh-audit-26',
    },
    attribution: 'all-program-spend',
    caveat:
      'An upper bound, and this year an unusually inflated one. The same program total also ran 347,951 listening programmes, distributed 302,717 Proclaimer units, completed over 330 Gospel films and operated a free app — none of which is recording a new language. Worse, $16,550,212 of the program figure is depreciation and amortisation, of which about $15,197,197 exists only because the ministry shortened the amortisation period on recordings from 20 years to 10 in FY2026. The cash actually spent creating recordings, literature and licences in FY2026 was $14,921,664, which over the same 293 languages is about $50,900. Read the headline number as the ceiling and that one as the floor.',
    alternates: [
      {
        label: 'audio recordings completed (493)',
        count: 493,
        note: 'About $94,900 each. More recordings than languages because a language can receive more than one recording, so this is the better measure of work done and the worse measure of people newly served.',
      },
      {
        label: 'listening programmes started (347,951)',
        count: 347951,
        note: 'About $134 per listening group started. This is the ministry’s own largest unit and it is a group, not a person — see the concern about how the listener figure is derived.',
      },
    ],
  },
  ministryClaims: [
    {
      quote:
        'For fiscal year 2026, Hosanna began 347,951 new listening projects in over 80 countries, with approximately 31,315,590 new listeners hearing the entire New Testament in their indigenous language.',
      sourceId: 'fcbh-audit-26',
    },
    {
      quote:
        'The worldwide average is 90 listeners per group, counting only those present at the program’s initiation.',
      sourceId: 'fcbh-audit-26',
    },
    {
      quote:
        'For fiscal year 2026, over 93.2 million chapters were accessed and 3.04 million downloads were made through Hosanna’s digital infrastructure.',
      sourceId: 'fcbh-audit-26',
    },
    {
      quote: 'We consistently operate at an average of 13% overhead.',
      sourceId: 'fcbh-financials',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 3,
      note: 'The audit states the primary exempt purpose as "To proclaim Jesus Christ as Lord" in four words, and a statement of faith is published. The product is Scripture.',
    },
    localLeadership: {
      value: 2,
      note: 'Recording is done by partner organisations in 25 countries through 49 recording teams, and the audit says plainly that those staff are not Hosanna employees. That is genuinely local delivery. Governance, the entire digital platform and two-thirds of the spending stay in New Mexico, and no national partner is named.',
    },
    financialTransparency: {
      value: 3,
      note: 'Both the audited consolidated statements and the full Form 990 for the year ended 31 March 2026 are posted on the ministry’s own site, with a line-by-line functional expense table, a Schedule F by region and an unusually detailed set of programme notes. The 13% overhead claim reconciles: supporting services are $7,181,338 of $53,970,716, or 13.3%.',
    },
    outcomeEvidence: {
      value: 2,
      note: 'The counts that describe work done — 493 recordings, 293 languages, 347,951 programmes started, 302,717 Proclaimers — are precise, single-year and repeated identically in the audit and the 990. Marked down because the count that describes people, 31.3 million listeners, is an arithmetic product of two other numbers, and because no count of continuing listenership is published.',
    },
    costEvidence: {
      value: 2,
      note: 'Both halves of the division come out of the same audited document, which is rare. Marked down because the numerator contains a one-off $15.2 million accounting change that has nothing to do with this year’s work, and because the ministry publishes no cost per language or per recording of its own to check ours against.',
    },
  },
  notVerified: [
    'Whether 31,315,590 people heard anything. The figure is 347,951 groups times an average of 90 listeners per group, which is a model, not a count. Treat it as a claim about scale, not evidence of reach.',
    '3.04 million downloads are downloads. A download is a file transfer, not a listener, and one person may account for many. The 93.2 million chapters accessed are likewise plays, not people.',
    'What a language "reached" means here. The count is languages in which an audio New Testament was completed — not a full Bible, and not the same thing as a language whose community now engages with Scripture. FCBH is clear that it counts New Testaments; we have seen no published figure for how many are in continuing use.',
    'Where $16,006,157 of foreign grants went. Schedule F lists nine regions with no country, no grantee and no employee or office anywhere abroad, and reports every activity as "GRANT MAKING". The grantee list is not published.',
    'The effect of the amortisation change. FY2026 program expense includes $16,550,212 of depreciation and amortisation against $4,215,989 the year before, almost entirely because the useful life of recordings was cut from 20 years to 10. The audit states the accounting reason; nothing states what it implies for a donor reading a cost-per-language figure.',
    'Whether the Charity Navigator and GuideStar standing claimed on the financial accountability page is current. We read the claim on the ministry’s own page and did not check it with either body.',
    'Program expense is $46,789,378 in the audit and $46,735,559 in the 990. The $53,819 difference equals the "Cost of Goods Produced" line exactly, so it looks like a classification difference rather than an error, but neither document says so.',
  ],
  notes: [
    'The consolidated statements cover Hosanna and Faith Comes By Hearing International Foundation, Inc., a fundraising affiliate established in 1999 to solicit and disburse funds exclusively for Hosanna’s benefit. The 990 separately explains that FCBH-Asia, a Hong Kong charity Hosanna created in 2011, stopped sharing board members in FY2017 and is no longer treated as related.',
    'Contributions rose to $54,666,658 in FY2026 from $43,528,295 the year before. Total expenses rose to $53,970,716 from $39,787,619, and the increase is mostly the amortisation change rather than new activity.',
    'Recordings are capitalised as assets. That is the right accounting for something intended to serve a language community for decades, and it is also why a single year of expense is a poor guide to what a recording costs.',
    'The trading name is Faith Comes By Hearing; the legal filer is Hosanna, EIN 85-0223225. The EIN 85-0325996 that circulates for this ministry returns nothing in IRS data.',
  ],
  siteUrl: 'https://www.faithcomesbyhearing.com/',
  giveUrl: 'https://www.faithcomesbyhearing.com/get-involved/give',
  sources: [
    {
      id: 'fcbh-audit-26',
      label: 'Audited consolidated financial statements, years ended 31 March 2026 and 2025',
      url: 'https://cdn.prod.website-files.com/5e73b0590a912b0d2533e44f/6a85d9efab9b547b2749a0d8_audited-financials-fye-2026.pdf',
      publisher: 'Faith Comes By Hearing',
      documentType: 'audited-financials',
      retrieved: '2026-09-18',
      fiscalYear: 'FY2026',
      note: 'Program expense $46,789,378 of $53,970,716 total, with a full functional expense table. Note 1 carries the programme counts quoted here — 493 recordings, 293 new languages, 347,951 listening projects, 3.04 million downloads — and Note 2 discloses the change in amortisation period.',
    },
    {
      id: 'fcbh-990-26',
      label: 'Form 990 for the year ended 31 March 2026, Hosanna, EIN 85-0223225',
      url: 'https://cdn.prod.website-files.com/5e73b0590a912b0d2533e44f/6a85d9ef1b20004a700ddd59_form-990-fye-2026.pdf',
      publisher: 'Faith Comes By Hearing',
      documentType: 'form-990',
      retrieved: '2026-09-18',
      fiscalYear: 'FY2026',
      note: 'Part III repeats the programme counts. Schedule F Part I reports $16,006,157 of expenditure across nine regions, with every row marked "GRANT MAKING" and no offices or employees in any region.',
    },
    {
      id: 'fcbh-financials',
      label: 'Financial Accountability',
      url: 'https://www.faithcomesbyhearing.com/about/financial-accountability',
      publisher: 'Faith Comes By Hearing',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Source of the 13% overhead claim and of the links to the audit and the 990.',
    },
    {
      id: 'fcbh-faith',
      label: 'Statement of Faith',
      url: 'https://www.faithcomesbyhearing.com/statement-of-faith',
      publisher: 'Faith Comes By Hearing',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
  ],
};
