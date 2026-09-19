import type { Cause } from '@/lib/types';

export const amazimaMinistries: Cause = {
  slug: 'amazima-ministries',
  name: 'Amazima Ministries',
  legalName: 'Amazima Ministries International',
  ein: '61-1555718',
  tagline:
    'One boarding school in Jinja, Uganda, with an $8.2 million budget — and not one dated student count in any document it publishes.',
  category: 'education',
  countries: ['Uganda'],
  whatTheyDo:
    'Amazima runs a single institution: The Amazima School, a Christian primary and secondary boarding school on a campus outside Jinja, Uganda, founded out of Katie Davis Majors’ work from 2008. Primary is Kindergarten to Grade 7, secondary is S1 to S6, and the secondary students board — the ministry describes providing them "a loving home". Tuition, meals and medical care are covered for the students by a pooled Scholarship Program rather than one-to-one sponsorship, so no family is billed and no donor is matched to a named child. Around the school sit family-empowerment, discipleship and community programmes for the households the students come from. Amazima explicitly does not run an orphanage; its stated aim is keeping children with their families rather than replacing them.',
  accreditations: [
    {
      label: 'Evangelical Council for Financial Accountability (ECFA)',
      sourceId: 'amazima-financials',
    },
  ],
  verification: 'self-reported',
  biblicalAlignment: {
    mandate:
      'Amazima is the narrow, expensive end of this theme: not the cheapest year of schooling but the most complete one, for children whose families could not buy any of it. The mandate is the command to teach children the words of God morning and night, which a boarding school takes literally, and the instruction to plead the cause of those who have no voice. Its distinctive conviction is that a child belongs in a family — so the school is built to send children home, and the surrounding programmes exist to make home a place worth returning to.',
    scriptures: [
      {
        ref: 'Deuteronomy 6:6–7',
        text: 'And these words that I command you today shall be on your heart. You shall teach them diligently to your children, and shall talk of them when you sit in your house, and when you walk by the way, and when you lie down, and when you rise.',
      },
      {
        ref: 'Proverbs 31:8–9',
        text: 'Open your mouth for the mute, for the rights of all who are destitute. Open your mouth, judge righteously, defend the rights of the poor and needy.',
      },
      {
        ref: 'Proverbs 22:6',
        text: 'Train up a child in the way he should go; even when he is old he will not depart from it.',
      },
    ],
    concerns: [
      'Not one student count in anything Amazima publishes carries a date. The homepage says "Over 750 vulnerable children enrolled at the Amazima school", the primary school page says "our 350 Kindergarten-7th grade students", the secondary page says "we provide over 400 students with a loving home", and the FAQ says gifts are pooled across "over 600 students". Every one of them is undated and at least two of them are "over" figures, so none can be divided into a fiscal year’s spending. For a single-school ministry this is the one number that should be exact, and it is the number that is missing.',
      'The Form 990 and the audited statements describe two different organisations, and nothing published explains the gap to a donor. The 990 reports total expenses of $8,161,580, total assets of $4,458,300 and a $1,009,355 deficit. The consolidated audit for the same year reports total expenses of $8,233,777, total assets of $18,681,338 and a $353,981 surplus. The reason is legitimate — the audit consolidates Amazima Asset Trust, a separate entity holding assets for the ministry’s benefit, and the 990 does not — but a donor reading the 990 alone would conclude the ministry is running down a small reserve, when in fact it holds more than two years of spending and earned $1,493,470 of investment income.',
      'Sixty-four percent of the programme budget is a single line: "Grants and awards to others" of $4,700,996 against a total programme figure of $6,471,798, with no named recipient in the audit. The recipient is presumably the Ugandan entity that operates the school, but the audit does not identify it, does not consolidate it, and publishes none of its accounts. The money that actually pays the teachers and feeds the boarders is spent inside an organisation whose financial statements nobody outside Amazima has seen.',
      'The founder is compensated by the ministry she founded while sitting on its board. Katie Davis Majors received $136,800 as "Founder & Chief Visionary" and is listed as both an officer and a voting director, and her mother is Secretary and also a director. The family relationship is disclosed on Schedule O and seven of nine directors are independent, which is real accountability — but a paid founder voting on her own board is the governance weak point here.',
      'There is no statement of faith. The site describes discipleship, "sharing the love of Jesus" and a Christ-centred curriculum throughout, and the mission is unambiguously Christian, but no doctrinal statement is published anywhere we could find, so a donor cannot check what is taught in a school whose whole case is what it teaches.',
      'The financial-accountability page is stale enough to be misleading. It still reads that "Audited financials for 2021 will be available by July 15, 2022" — four years out of date — while the current audit and 990 sit elsewhere on the site. Small, but it is the page a careful donor goes to first.',
    ],
  },
  roi: {
    levers: ['local-cost-base', 'local-workers', 'durable-asset'],
    reason:
      'Everything Amazima buys, it buys in Uganda: teachers, dormitory staff, food, medical care and construction, in a country where income per person is about $1,120 against $88,810 in the United States. A single owned campus is also a durable asset — the buildings are paid for once and schooled children pass through them for decades, so the marginal cost of the next cohort is the staffing, not the plant. The honest counter-weight is that this is the most expensive model in this theme by design. Boarding, feeding and treating a child costs several times what a day school costs, so the leverage here is in depth per child rather than children per dollar, and Amazima should be judged on the former.',
  },
  ministryClaims: [
    {
      quote: 'Over 750 vulnerable children enrolled at the Amazima school',
      sourceId: 'amazima-site',
      impliedOutcome: 'children enrolled at The Amazima School, with no year stated',
    },
    {
      quote:
        'Amazima offers a "pooled" scholarship approach rather than a one-to-one model… all gifts given are pooled together and distributed to over 600 students who have varying medical and tuition costs.',
      sourceId: 'amazima-faqs',
    },
    {
      quote:
        'Become a Scholarship Program donor by giving a one-time donation of $360 or setting up a recurring donation of $30 per month.',
      sourceId: 'amazima-faqs',
      impliedCostPerOutcome: 360,
      impliedOutcome: 'one year of Scholarship Program giving, not the cost of one student',
    },
    {
      quote:
        'Amazima does not have an orphanage. Our ministry focuses on coming alongside families in order to prevent children from becoming orphans.',
      sourceId: 'amazima-faqs',
    },
    {
      quote:
        'Your partnership removes the heavy burden of tuition costs, daily meals, and medical care from parents/guardians',
      sourceId: 'amazima-faqs',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 2,
      note: 'Discipleship and the gospel are named on every page, the curriculum is Christ-centred and the school exists as a Christian institution. Held at 2 because no statement of faith is published anywhere, so the content of what is taught cannot be checked from the ministry’s own documents.',
    },
    localLeadership: {
      value: 2,
      note: 'The school is staffed and run in Uganda and 64% of programme spending is granted onward to the operating entity, which is the right direction. Held at 2 because the US board is American and family-anchored, the Ugandan entity is never named in the audit, and no Ugandan leader is identified in any document we read.',
    },
    financialTransparency: {
      value: 2,
      note: 'A full consolidated audit by Batts Morrison Wales & Lee with a clean unqualified opinion, the full Form 990, and ECFA membership — genuinely above average. Held at 2 because the audit and the 990 disagree by $14 million of assets with no reconciliation offered, the largest single expense line names no recipient, and the accountability page has been stale since 2022.',
    },
    outcomeEvidence: {
      value: 1,
      note: 'There are real signals — "100% pass rate on the S4 national assessment exams" in 2023, and a first graduating class with "every grade (P1 – S6) was filled" in 2024 — but they sit on an undated timeline graphic, with no cohort size, no completion or drop-out rate, and four mutually inconsistent enrolment figures across four pages.',
    },
    costEvidence: {
      value: 0,
      note: 'Audited spending exists for FY2024 to the dollar. No student count anywhere in any document carries a year, so there is no denominator and no division is possible. This is why the page has no cost model.',
    },
  },
  notVerified: [
    'How many students attend the school in any given year. Four figures appear across four pages — over 750, 350, over 400, over 600 — none dated, none reconciled, and two of them open-ended. Without a dated count there is no cost per student, and we will not pair audited FY2024 spending with an undated website number.',
    'Whether any of those figures mean enrolment, attendance or completion. Nothing published defines them, and no attendance or retention data exists in any document we read.',
    'Who receives the $4,700,996 of grants. The audit reports it as a programme expense with no named recipient. We could not identify the Ugandan operating entity, obtain its accounts, or confirm how much of the grant reaches classrooms rather than the campus.',
    'What a year of school actually costs. The pooled model means the $360 and $30-a-month appeals are deliberately not per-student prices, and Amazima publishes no unit cost for tuition, boarding, meals or medical care. The FAQ says costs vary by student and gives no range.',
    'How the school splits its spending between primary day pupils and boarding secondary students. Boarding is several times more expensive per child, so a blended figure — if one existed — would be uninformative without the split, and the split is not published.',
    'The reconciliation between the Form 990 and the consolidated audit. We identified Amazima Asset Trust (EIN 83-6478881) as the cause from the audit’s own consolidation note, but no Amazima document explains the difference, and we did not obtain the Trust’s separate filings.',
    'Whether families pay anything at all. Programme service revenue is $0 in every year of the 990, which is consistent with a fully funded model and no fees, but no document states a fee policy, so we cannot confirm that no family is ever charged or what happens if a household’s circumstances change.',
    'How students are selected. "Vulnerable" is the only criterion published. Nothing describes who applies, how many are turned away, or whether the poorest children in the district are the ones enrolled — which is the central question for any place-limited boarding school.',
    'What happens after graduation. The first cohort graduated in 2024. No tracking, employment, tertiary-enrolment or follow-up data is published, so the durability of the outcome is entirely unmeasured.',
    'The ECFA and Charity Navigator claims. We confirmed the ministry states ECFA membership in good standing and a four-star Charity Navigator rating on its own site; we did not pull either rating agency directly.',
    'No statement of faith exists on the site — the /statement-of-faith path returns 404 — so the doctrinal position is asserted by tone rather than by a document we can cite.',
  ],
  notes: [
    'Amazima is unusually well capitalised for its size: $18,681,338 of consolidated assets against $8,233,777 of annual expenses, with $1,493,470 of investment income in FY2024 and a $353,981 surplus. The Asset Trust exists to hold those assets for the ministry, which is why the 990 — which excludes it — makes the ministry look far more precarious than it is.',
    'FY2024 was a leadership transition year: a new chief executive arrived, the outgoing one left with $101,010 of severance, and the founder moved to a "Founder & Chief Visionary" role. Judging trend lines off this single year would be a mistake.',
    'The pooled scholarship model is the right call and it is the reason there is no cost model here. One-to-one sponsorship produces a clean number precisely because it pretends a child’s costs are separable; pooling admits they are not, and Amazima says so plainly. The honest consequence is an unquantified page rather than a falsely precise one.',
    'Fundraising is $826,670 against $8,233,777 of expenses — about 10% — and management $935,309, roughly 11%. Neither is out of line for a ministry operating a single institution overseas.',
  ],
  siteUrl: 'https://amazima.org/',
  giveUrl: 'https://amazima.org/give/',
  sources: [
    {
      id: 'amazima-site',
      label: 'Homepage',
      url: 'https://amazima.org/',
      publisher: 'Amazima Ministries',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Carries the undated "Over 750 vulnerable children enrolled at the Amazima school" figure.',
    },
    {
      id: 'amazima-audit-2024',
      label: 'Consolidated financial statements, year ended December 31, 2024',
      url: 'https://amazima.org/wp-content/uploads/2025/09/2024-Amazima-Audit.pdf',
      publisher: 'Amazima Ministries (audited by Batts Morrison Wales & Lee, P.A.)',
      documentType: 'audited-financials',
      retrieved: '2026-09-18',
      fiscalYear: '2024',
      note: 'Unqualified opinion. Total expenses $8,233,777 — program $6,471,798 (including "Grants and awards to others" $4,700,996), management and general $935,309, fundraising $826,670. Total assets $18,681,338; change in net assets +$353,981; investment income $1,493,470. Consolidates Amazima Asset Trust, "formed to hold certain assets for the benefit of the Ministry", of which the Ministry is sole beneficiary and supported organization.',
    },
    {
      id: 'amazima-990-2024',
      label: 'Form 990 for 2024 (public disclosure copy)',
      url: 'https://amazima.org/wp-content/uploads/2025/09/2024-Amazima-Ministries-International-990-PUBLIC-Copy.pdf',
      publisher: 'Amazima Ministries',
      documentType: 'form-990',
      retrieved: '2026-09-18',
      fiscalYear: '2024',
      note: 'Unconsolidated, and therefore materially different from the audit: total expenses $8,161,580, program $6,399,601, revenue $7,152,225, net assets $4,005,052, deficit −$1,009,355. Program service revenue $0 in all years. Katie Davis Majors listed as officer and director with $136,800 of compensation; Schedule O discloses that the Secretary is her mother; $101,010 of severance to the outgoing chief executive.',
    },
    {
      id: 'amazima-faqs',
      label: 'Frequently Asked Questions',
      url: 'https://amazima.org/faqs/',
      publisher: 'Amazima Ministries',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'The most substantive page on the site: the pooled scholarship model, the "over 600 students" figure, the $360 and $30-a-month giving levels, the statement that Amazima does not operate an orphanage, and the description of what a scholarship covers.',
    },
    {
      id: 'amazima-primary',
      label: 'Primary School',
      url: 'https://amazima.org/primary-school/',
      publisher: 'Amazima Ministries',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Source of the undated "our 350 Kindergarten-7th grade students".',
    },
    {
      id: 'amazima-secondary',
      label: 'Secondary School',
      url: 'https://amazima.org/secondary-school/',
      publisher: 'Amazima Ministries',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Source of the undated "we provide over 400 students with a loving home".',
    },
    {
      id: 'amazima-impact',
      label: 'Impact timeline',
      url: 'https://amazima.org/impact/',
      publisher: 'Amazima Ministries',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'An undated graphic timeline carrying the 2023 "100% pass rate on the S4 national assessment exams" and the 2024 first-graduating-class note. No cohort sizes.',
    },
    {
      id: 'amazima-financials',
      label: 'Financial Accountability',
      url: 'https://amazima.org/financial-accountability/',
      publisher: 'Amazima Ministries',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'States ECFA membership in good standing and a four-star Charity Navigator rating. Still carries the line that audited financials for 2021 "will be available by July 15, 2022".',
    },
    {
      id: 'amazima-mission',
      label: 'Our Mission',
      url: 'https://amazima.org/our-mission/',
      publisher: 'Amazima Ministries',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'The closest thing to a doctrinal page on the site; there is no statement of faith.',
    },
  ],
};
