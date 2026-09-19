import type { Cause } from '@/lib/types';

export const theSeedCompany: Cause = {
  slug: 'the-seed-company',
  name: 'Seed Company',
  legalName: 'Seed Company, Inc.',
  tagline:
    'Funds national translators to translate Scripture into their own languages, on fixed project budgets.',
  category: 'translation',
  countries: ['Global', 'Mali', 'Cameroon', 'Indonesia', 'Papua New Guinea', 'Guatemala'],
  whatTheyDo:
    'Seed Company does not send translators. It designs and funds translation projects that local translators run in their own languages, each with a defined timeframe, set of milestones and budget, and pays partner organisations to supply the linguistic consultants who check the work. It was founded in 1993 by Wycliffe USA specifically to do this faster and through nationals. Its current goal, Vision ASAP, is Scripture for every remaining language in this generation.',
  accreditations: [{ label: 'ECFA charter member', sourceId: 'sc-financials' }],
  verification: 'documents-reviewed',
  biblicalAlignment: {
    mandate:
      'The promise attached to Scripture is that it will not come back empty. Translation is the one piece of missionary work that, once finished, does not need doing again: the text stays in the language, and every preacher, parent and new believer in that community for the next several generations reads or hears it. Revelation describes the end state in linguistic terms — every tribe and tongue — which makes a language without Scripture a gap with a name.',
    scriptures: [
      {
        ref: 'Isaiah 55:11',
        text: 'So shall my word be that goes out from my mouth; it shall not return to me empty, but it shall accomplish that which I purpose.',
      },
      {
        ref: 'Romans 10:14–15',
        text: 'And how are they to believe in him of whom they have never heard? And how are they to hear without someone preaching? … How beautiful are the feet of those who preach the good news!',
      },
      {
        ref: 'Revelation 7:9',
        text: 'After this I looked, and behold, a great multitude that no one could number, from every nation, from all tribes and peoples and languages, standing before the throne and before the Lamb.',
      },
    ],
    doctrine: { label: 'Beliefs statement published', sourceId: 'sc-beliefs' },
    concerns: [
      'Grants are 56% of program spending — $39,847,183 of $70,719,418. The audit names no grantee anywhere. A donor is funding a granting operation whose recipients are not published, which for translation work in closed countries may be necessary and is still unverifiable.',
      'The relationship with Wycliffe USA is disclosed but not quantified. The audit says Seed Company was "Founded in 1993 by Wycliffe Bible Translators Inc. (Wycliffe USA)", and Seed Company’s own leaders page lists John Chesnut — president and CEO of Wycliffe USA since 2019 — as a board member. Wycliffe USA granted out $95,943,000 in the same fiscal year. Neither organisation’s audit discloses a grant flow between them, so we cannot tell whether a donor comparing the two is looking at the same dollar twice.',
      'The headline outcome unit, "active language engagements", is printed as a number with no definition anywhere in the annual report or the audit. An engagement could be a project starting, a project continuing, or a consultation.',
      'The annual report leads on artificial intelligence in translation — AI-assisted drafting, AI-generated back translations, AI-generated comprehension questions. The report says human checking continues. It does not say what share of this year’s output was AI-drafted, or who independently checked the quality of that output.',
    ],
  },
  roi: {
    levers: ['local-workers', 'local-cost-base', 'durable-asset', 'multiplication'],
    reason:
      'The translators are nationals working in their own languages in their own countries, so the labour is priced to a local economy rather than to an expatriate support package — and the audit’s own methodology note says the projects are national-led with defined budgets, which is the structural reason the unit cost is what it is. The output is permanent: a finished New Testament does not need re-buying. The multiplication claim here is about capacity, not copies — 277 people are now serving as quality-assurance and capacity-building leaders, which is how a translation movement grows without every project needing a Western consultant.',
  },
  costModel: {
    outcome: 'language engagement for a year',
    outcomePlural: 'language engagements for a year',
    spend: {
      amount: 70719418,
      basis: 'program-services',
      fiscalYear: 'FY2025',
      sourceId: 'sc-fs-25',
    },
    count: {
      amount: 1434,
      label: 'active language engagements',
      fiscalYear: 'FY2025',
      sourceId: 'sc-ar-25',
    },
    attribution: 'all-program-spend',
    caveat:
      'An upper bound, and the denominator is a unit the ministry does not define. "Active language engagements" is printed under a headline number with no explanation of what makes an engagement active, so this figure is the annual program budget spread across every language Seed Company says it touched — a first-year project, a project three years from completion and a finished one all count as one. The same program total also paid 277 global translation leaders and funded the consultants and technology that serve every project. It is not the cost of translating a language.',
    alternates: [
      {
        label: 'first Scripture engagements (78)',
        count: 78,
        note: 'About $906,700. This is the only unit the report actually defines — "language projects in the past 12 months through which a community receives God’s Word for the first time" — and it is the one a donor most likely has in mind. It is also the harshest reading, because the other 1,356 engagements are real work that this division charges to these 78.',
      },
    ],
  },
  ministryClaims: [
    {
      quote:
        'With a firm commitment to accountability and stewardship, over 80% of every dollar (donor restricted) contributed for translation projects is utilized for translation expenses.',
      sourceId: 'sc-fs-25',
    },
    {
      quote:
        'There are currently over 36.8 million people without any access to God’s Word in their language.',
      sourceId: 'sc-fs-25',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 3,
      note: 'Bible translation is the entire activity, a beliefs statement is published, and the audit’s own motivation note cites Matthew 28:18–20 by reference.',
    },
    localLeadership: {
      value: 3,
      note: 'The model is national translators working in their own languages, stated in the audit’s methodology note, not inferred from marketing. 277 nationals now hold quality-assurance and capacity-building roles. The reason this is not marked lower despite US governance is that there is no expatriate translator layer to mark down.',
    },
    financialTransparency: {
      value: 3,
      note: 'Audited statements and annual reports for FY2022 through FY2025 are posted on the ministry’s own site, with a full natural-classification expense table. ECFA charter member. The one thing missing from an otherwise complete picture is any grantee detail behind $39.8 million of grants, and the absence of a Form 990.',
    },
    outcomeEvidence: {
      value: 1,
      note: 'Three counts are published for FY2025 and all three are single-year and precise, which is better than most. But the largest, 1,434 active language engagements, is undefined, and nothing outside the ministry has checked any of them. Only the 78 first-Scripture figure comes with a definition.',
    },
    costEvidence: {
      value: 2,
      note: 'Both halves exist, in the same fiscal year, one from an audit and one from the annual report. Marked down because the denominator’s meaning is unstated and the ministry publishes no per-language or per-verse cost of its own.',
    },
  },
  notVerified: [
    'What "active language engagement" means. This is the denominator the headline cost rests on and neither the annual report nor the audit defines it. Ask before treating $49,316 as the price of anything.',
    '1,434 engagements is not 1,434 Scriptures completed. Only 78 are described as a community receiving God’s Word for the first time. The remaining 1,356 are work in progress of unstated maturity.',
    'Who received $39,847,183 of grants. No grantee is named in the audit, and Seed Company files no Form 990 that would carry a Schedule I or Schedule F — IRS structured data holds no filings for it.',
    'Whether Seed Company’s spending overlaps Wycliffe USA’s. The two are historically and personally linked — Wycliffe USA founded Seed Company and Wycliffe USA’s CEO is on its board — and neither audit discloses money moving between them. If you are giving to both, you may be funding one project twice.',
    'The "over 80% of every dollar" claim. Program services are 82.5% of total expenses, which is consistent with it, but the claim is specifically about donor-restricted project dollars and the statements do not break those out separately.',
    'What share of FY2025 output involved AI-assisted drafting, and who checked it. The annual report devotes a feature to AI in translation without quantifying its use or its error rate.',
    'The 36.8 million figure and the 560-language figure both come from ProgressBible, cited in the audit. We have not been to the source.',
  ],
  notes: [
    'FY2025 program spending fell to $70,719,418 from $83,569,421, and total expenses to $85,744,556 from $99,701,490 — a 14% contraction the audit does not explain in its notes. The active engagement count is nonetheless reported as the highest ever. A donor should ask which of those two facts describes the trend.',
    'Grants are 56% of program spending, compensation 33%. This is a funding and project-management organisation more than an operating one, which is the point of the model and also the reason the grantee gap matters.',
    'Named work in the FY2025 report includes the Notsi New Testament in Papua New Guinea, dedicated 25 June 2025 with SIL Global–PNG and the New Ireland Translation Institute, and the Awakateko full Bible in Guatemala with the Mayan Educational and Cultural Association. Six of the roughly thirty Malian languages one partner works in are Seed Company projects.',
    'Seed Company’s fiscal year runs 1 October to 30 September, the same as Wycliffe USA’s.',
  ],
  siteUrl: 'https://seedcompany.com/',
  giveUrl: 'https://seedcompany.com/give/',
  sources: [
    {
      id: 'sc-fs-25',
      label: 'Audited financial statements, years ended 30 September 2025 and 2024',
      url: 'https://seedcompany.com/wp-content/uploads/2026/02/Seed-Company-25-FS-Final.pdf',
      publisher: 'Seed Company',
      documentType: 'audited-financials',
      retrieved: '2026-09-18',
      fiscalYear: 'FY2025',
      note: 'Program services $70,719,418 of $85,744,556 total expenses, with a natural-classification table showing $39,847,183 of grants. Note 1 carries the Wycliffe USA founding statement, the stewardship claim and the ProgressBible figures.',
    },
    {
      id: 'sc-ar-25',
      label: '2025 Annual Impact Report',
      url: 'https://seedcompany.com/wp-content/uploads/2025/11/Seed_Company_2025_Annual_Report.pdf',
      publisher: 'Seed Company',
      documentType: 'annual-report',
      retrieved: '2026-09-18',
      fiscalYear: 'FY2025',
      note: 'Source of all three FY2025 counts — 1,434 active language engagements, 78 first Scripture engagements, 277 global translation leaders. They are set as large graphics on the key-statistics spread rather than in a table; the page states the data covers 1 October 2024 to 30 September 2025.',
    },
    {
      id: 'sc-financials',
      label: 'Financials',
      url: 'https://seedcompany.com/financials/',
      publisher: 'Seed Company',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Links audits and annual reports back to FY2022, and displays the ECFA charter member seal.',
    },
    {
      id: 'sc-beliefs',
      label: 'Beliefs',
      url: 'https://seedcompany.com/beliefs',
      publisher: 'Seed Company',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'sc-leaders',
      label: 'Board of Directors and executive leadership',
      url: 'https://seedcompany.com/leaders',
      publisher: 'Seed Company',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Lists John Chesnut, president and CEO of Wycliffe USA since 2019, as a Seed Company board member. Davis Powell is CEO and president of Seed Company.',
    },
  ],
};
