import type { Cause } from '@/lib/types';

export const edify: Cause = {
  slug: 'edify',
  name: 'Edify',
  ein: '27-0892545',
  tagline:
    'Trains and lends to the owners of low-fee Christian schools that already exist. Publishes its own cost per student — $1.50 — and defines it.',
  category: 'children',
  countries: [
    'Burkina Faso',
    'Ethiopia',
    'Ghana',
    'Kenya',
    'Liberia',
    'Nigeria',
    'Rwanda',
    'Sierra Leone',
    'Uganda',
    'Bolivia',
    'Dominican Republic',
    'Ecuador',
    'El Salvador',
    'Guatemala',
    'Panama',
    'Peru',
  ],
  whatTheyDo:
    'Edify does not build schools and does not run schools. In sixteen countries across Africa and Latin America it works with the owners of existing low-fee, independent, Christ-centred schools and offers them three things: training for school leaders and teachers, loan capital through local lending partners so a proprietor can add classrooms or equipment, and education technology for classrooms. The loans revolve — repayments are relent — so the same capital keeps working. Its stated client is the school owner and the teacher; the student is the beneficiary at one remove. Founded 2009 in San Diego by the late Tiger Dawson and Chris Crane; country programmes are run by regional vice-presidents who are themselves African and Latin American.',
  accreditations: [
    { label: 'Evangelical Council for Financial Accountability (ECFA)', sourceId: 'edify-faqs' },
    {
      label: 'Claims highest ratings from Charity Navigator, Candid and Excellence in Giving',
      sourceId: 'edify-faqs',
    },
  ],
  verification: 'documents-reviewed',
  biblicalAlignment: {
    mandate:
      'The command to teach children the words of God assumes someone doing the teaching. Edify’s answer to that is unusual and worth stating plainly: it does not do the teaching, it makes the teacher better and the school solvent. A school that survives teaches the next cohort too, and a teacher trained once teaches for thirty years. Behind it sits the ordinary claim that a child who can read can read Scripture — the whole enterprise of Christian education rests on it, because a Bible needs a reader.',
    scriptures: [
      {
        ref: 'Deuteronomy 6:6–7',
        text:
          'And these words that I command you today shall be on your heart. You shall teach them diligently to your children, and shall talk of them when you sit in your house, and when you walk by the way, and when you lie down, and when you rise.',
      },
      {
        ref: 'Proverbs 22:6',
        text: 'Train up a child in the way he should go; even when he is old he will not depart from it.',
      },
      {
        ref: '2 Timothy 3:16–17',
        text:
          'All Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in righteousness, that the man of God may be complete, equipped for every good work.',
      },
    ],
    doctrine: {
      label:
        'The Apostles’ Creed in full, with Mark 1:15 and 2 Timothy 3:16–17. Deliberately non-denominational; no position published on baptism, church order or sexuality.',
      sourceId: 'edify-beliefs',
    },
    concerns: [
      'Every school in this model charges fees. Edify’s own words: "local entrepreneurs have started low-fee, independent (non-government-funded) schools." That is the whole point of the model and it is also its sharpest edge. Low-fee private schooling is contested in exactly the places Edify works: fees, however low, exclude the poorest children, and a good private school can draw the strongest pupils and the best teachers out of a government system that then serves the children who are left. Nothing Edify publishes says what the fees are, what share of household income they represent, or what happens to a child whose family cannot pay. There is no bursary, scholarship or fee-waiver programme described anywhere on the site.',
      'The school owner is a business owner, and Edify’s loans are business finance. The loan is to a proprietor who will repay it out of fee income — which means the return on Edify’s capital is, in part, a school that has grown its intake and its revenue. Edify is candid about liking this ("Applaud the Entrepreneurial Spirit" is a core value, hung on the parable of the talents). A donor should be clear that they are subsidising the growth of small private businesses that they believe will teach children well, which is a defensible thing to fund and a different thing from paying a child’s school fees.',
      'The headline count is a reach figure wearing the clothes of an outcome. A "Client School" is defined as "Any school that has interacted with Edify via a loan, training, education technology, conference, etc." Every student enrolled at such a school is then counted as "impacted" — 12,083,667 of them in 2025, including 3,279,550 in Uganda alone. Most of those children attend a school whose teachers Edify trained at a conference and whose fees their parents pay in full. The number is not dishonest, because Edify defines it, but it is not a count of children Edify educated.',
      'The revolving loan capital is expensed and then disappears from the accounts. The annual report explains why: because the loans are interest-free, in local currency and with grace periods, "our independent CPA firm has classified these loans to lending partners as grants. These loans with non-market terms in depreciating currencies do not appear on our balance sheet." The accounting is conservative and disclosed, but it means the $18.6 million Edify says it has deployed cumulatively cannot be traced to an asset a reader can inspect, and the $67.8 million of onward lending is reported by the lending partners rather than audited here.',
      'Fundraising is 13.8% of spending ($2,486,339) against general and administrative of 5.7% — Edify spends more than twice as much raising money as it does administering itself. For an organisation whose product is training and credit, that ratio is worth a donor’s attention.',
    ],
  },
  roi: {
    levers: ['existing-network', 'local-workers', 'multiplication', 'local-cost-base'],
    reason:
      'This is the clearest case in the directory of riding an existing network rather than building one. The schools are already there, already enrolled, already staffed and already charging fees that cover teaching; Edify adds training, credit and technology on top. Delivery is by local staff — $4,466,972 of international salaries against $1,253,041 of US programme salaries, with West African, East African and Latin American programmes each led by a regional vice-president from that region. And the capital multiplies without new money: $18.6 million of cumulative loan capital has produced $67.8 million of lending, "365% of the loan capital from Edify, as our lending partners recycle principal repayments."',
  },
  costModel: {
    outcome: 'student in a school Edify worked with, for a year',
    outcomePlural: 'students in schools Edify worked with, for a year',
    spend: {
      amount: 18075081,
      basis: 'total-expenses',
      fiscalYear: '2025',
      sourceId: 'edify-audit-2025',
    },
    count: {
      amount: 12083667,
      label: 'students impacted in independent Christ-centered schools',
      fiscalYear: '2025',
      sourceId: 'edify-annual-2025',
    },
    attribution: 'all-program-spend',
    caveat:
      'This is Edify’s own published unit and its own definition — "Cost per student = total Edify expenses divided by total students impacted" — and our arithmetic reproduces the $1.50 it prints. Read it as a cost of reach, not a cost of education. A student is counted when they attend a school that has "interacted with Edify via a loan, training, education technology, conference, etc."; their teacher’s salary, their classroom and their books are paid for by fees their own family pays to an independent proprietor. Edify pays none of the cost of that child’s schooling. Of 45,188 schools counted in 2025, 969 actually received a loan and 3,562 were in the intensive three-year Core programme. The figure also includes $1,817,340 of loan capital which is expensed in the year but lent out and repaid, so part of the numerator is not consumed at all. The denominator is enrolment reported by schools Edify does not own, not attendance, and nobody outside Edify has audited it.',
    alternates: [
      {
        label: 'school leaders and teachers trained by Edify and Edify’s partners',
        count: 97410,
        note:
          'The closest thing to a unit of work Edify actually performs — 56,084 school leaders and 41,326 teachers in 2025. Total spending divided by this is about $186 a person trained, which charges the whole organisation to training alone and so overstates it.',
      },
      {
        label: 'schools impacted through training, capital, and education technology',
        count: 45188,
        note:
          'About $400 a school. The same definitional problem as the student count: a school that attended one conference counts the same as a school in the three-year programme.',
      },
      {
        label: 'Core Schools in the intensive three-year programme',
        count: 3562,
        note:
          'The strictest denominator Edify publishes, and the one where the relationship is deep enough to expect a result: about $5,075 per Core School for the year. Core Schools report a 96.7% national exam pass rate against an 87% national average, which is the only outcome evidence Edify publishes that is not a count of reach.',
      },
    ],
  },
  ministryClaims: [
    {
      quote:
        'Cost per student = total Edify expenses divided by total students impacted.',
      sourceId: 'edify-financials',
      impliedCostPerOutcome: 1.5,
      impliedOutcome: 'one student enrolled at a school Edify worked with during the year',
    },
    {
      quote:
        'Edify is committed to maximizing the impact of every donation. Over the past few years, we have averaged 80% of funds going directly to program.',
      sourceId: 'edify-faqs',
    },
    {
      quote:
        'Programs delivered during the year impacted 45,188 low-fee Christ-centered schools in 16 countries. Training was provided to 56,084 school leaders and 41,326 teachers. Lending partners funded 1,068 loans to 969 different schools at an average loan size of $8,447.',
      sourceId: 'edify-annual-2025',
    },
    {
      quote:
        'Cumulative loan capital deployed by Edify internationally for school loans was $18.6 million from fiscal year 2010 to 2025. Cumulative loans to schools by lending partners and directly from Edify were $67.8 million, or 365% of the loan capital from Edify, as our lending partners recycle principal repayments.',
      sourceId: 'edify-annual-2025',
    },
    {
      quote:
        'Our programs’ primary beneficiaries are the school proprietors and teachers we partner with and, ultimately, the students who attend their schools.',
      sourceId: 'edify-faqs',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 3,
      note:
        'The Apostles’ Creed published in full with two supporting passages, a mission that says "Christ-centered" rather than "values-based", a vision stated as "Flourishing Godly Nations", core values each hung on a verse, and a named vice-president for Christ-centred education. The theory of change puts "Firm identity & faith in Jesus" first among the outcomes it wants. The creed is short and says nothing about baptism, church order or sexuality, which is a deliberate choice for a partner-facing organisation rather than a gap in conviction.',
    },
    localLeadership: {
      value: 3,
      note:
        'International salaries and benefits are $4,466,972 against $1,253,041 of US programme salaries, the West African and East African programmes are each led by a vice-president from the region, the Latin American programme by a Peruvian, and the schools themselves are owned and run by local proprietors rather than by Edify. The chief executive, chief development officer and chief financial officer are American.',
    },
    financialTransparency: {
      value: 3,
      note:
        'Sixteen consecutive years of independent audits, Form 990s and annual reports posted on the ministry’s own site, a consolidated unqualified opinion covering subsidiaries, a functional expense table by natural category, a management discussion and analysis that explains the loan accounting against itself, and an audit committee chaired by a named director. It also publishes a cost-per-student figure with the formula attached. This is the top of the class.',
    },
    outcomeEvidence: {
      value: 1,
      note:
        'Scored low, and the reason matters. The headline counts are reach: schools that interacted with Edify and every child enrolled at them. The one real outcome measure — 96.7% pass rate in Core Schools against an 87% national average — is published as two bare percentages with no sample size, no country breakdown, no year-on-year series and no statement of who collected it, and Core Schools are by definition a selected tenth of the roster. Twelve million "students impacted" tells a donor almost nothing about whether any child learned more.',
    },
    costEvidence: {
      value: 3,
      note:
        'Both halves are published by the ministry, for the same fiscal year, with the formula stated. We reproduced the division and got the printed figure. Whether the unit means anything is a separate question, answered in the caveat.',
    },
  },
  notVerified: [
    'What the school fees are. The entire model rests on parents paying low fees, and Edify publishes no fee level, no range, and no comparison to household income in any of the sixteen countries. Without that a donor cannot judge who is being reached and who is priced out.',
    'What happens to a child whose family cannot pay. There is no scholarship, bursary or fee-waiver programme described anywhere on the site, and no statement on whether partner schools are asked to admit non-paying pupils.',
    '"Students impacted" is enrolment at schools Edify does not own, reported through partners, and unaudited. Nothing published says how it is collected, whether a student attending two Edify-linked schools in a year is counted twice, or whether a school that left the programme mid-year is still counted.',
    'The exam result — 96.7% versus an 87% national average — has no sample size, no list of which countries’ exams, and no control for the fact that a fee-charging school selects its intake. It is the ministry’s only learning outcome and we cannot check it.',
    'The loans are off balance sheet. Because the terms are non-market, the auditors classify loan capital as grants, so the $18.6 million cumulative capital and the $67.8 million of onward lending cannot be tied to an asset or a loan book in the audited statements. Repayment rates, default rates and currency losses are not published.',
    'Whether schools that received loans still exist and still repay. Edify reports loans made ($8,447 average, 969 schools in 2025) but publishes no survival rate for partner schools and no arrears figure from the lending partners.',
    'Associate countries are excluded from the published numbers by policy — "Currently, Associate Countries are not listed on our website or included in our impact numbers" — so the 16 countries and the counts do not describe everywhere Edify operates.',
    'The count and the spending are aligned on Edify’s fiscal year to 30 September, which is not the school year in any of the sixteen countries. A student counted in the year straddles two academic years.',
    'The Charity Navigator, Candid and Excellence in Giving ratings are quoted from Edify’s own FAQ page; we did not fetch the rating agencies directly.',
  ],
  notes: [
    'Growth is fast enough to be worth watching: students counted rose 6.5m → 8.4m → 12.1m over three years, and Core Schools 1,774 → 2,371 → 3,562. Total revenue rose 25% in 2025 to $18.2 million. A cost-per-student figure falling from $1.95 to $1.50 across those years is mostly the denominator growing, not the work getting cheaper.',
    'Edify finished 2025 with a $4.1 million board-designated reserve, targeted at one quarter of annual operating expenses excluding loan capital — a deliberately funded cushion, which is rarer than it should be.',
    'The annual report’s own financial pages carry the line "At the time of printing, our financials were not audited". The separate audited statements are posted alongside, and our numerator comes from those, not from the report.',
    'The organisation’s co-founder and chief executive, Tiger Dawson, has died; the site keeps a "Remembering Tiger" page. Succession is not addressed on the leadership page, and the annual report still lists him as CEO and co-founder.',
  ],
  siteUrl: 'https://edify.org/',
  giveUrl: 'https://edify.org/give/',
  sources: [
    {
      id: 'edify-site',
      label: 'Homepage',
      url: 'https://edify.org/',
      publisher: 'Edify',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'edify-financials',
      label: 'Financials & Annual Reports',
      url: 'https://edify.org/financials/',
      publisher: 'Edify',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note:
        'Sixteen years of audits, 990s and annual reports. Source of the published cost per student ($1.50 in 2025, $1.76 in 2024, $1.95 in 2023) and its stated formula.',
    },
    {
      id: 'edify-audit-2025',
      label: 'Consolidated audited financial statements, years ended September 30, 2025 and 2024',
      url: 'https://edify.org/wp-content/uploads/2025/12/2025_Edify_Independent_Audit_Report.pdf',
      publisher: 'Edify',
      documentType: 'audited-financials',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note:
        'Unqualified opinion on Edify and Subsidiaries. Program $14,556,129, general and administrative $1,032,613, fundraising $2,486,339, total $18,075,081. The functional table shows $3,908,509 of school leader and teacher training and $1,817,340 of grants for revolving loans inside the programme figure.',
    },
    {
      id: 'edify-annual-2025',
      label: 'Fiscal Year 2025 Annual Report',
      url: 'https://edify.org/wp-content/uploads/2025/11/2025_Edify_Annual_Report.pdf',
      publisher: 'Edify',
      documentType: 'annual-report',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note:
        'A designed 13-page PDF; the headline counts are set in graphics and the management discussion is in two narrow columns, so we rendered page 11 as an image and read it directly. Source of 12,083,667 students impacted, 45,188 schools, 97,410 leaders and teachers trained, 3,562 Core Schools, the 96.7% versus 87% exam comparison, the loan figures and the per-country student counts.',
    },
    {
      id: 'edify-990-2025',
      label: 'Form 990 for fiscal year 2025',
      url: 'https://edify.org/wp-content/uploads/2026/07/FY2025-990-Edify.pdf',
      publisher: 'Edify',
      documentType: 'form-990',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
    },
    {
      id: 'edify-faqs',
      label: 'FAQs',
      url: 'https://edify.org/faqs/',
      publisher: 'Edify',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note:
        'Source of the definitions of Client, Core and Champion School, the statements that Edify neither builds nor runs schools, the description of partner schools as "low-fee, independent (non-government-funded)", the 80% programme claim, and the ECFA membership.',
    },
    {
      id: 'edify-beliefs',
      label: 'Core Values & Beliefs',
      url: 'https://edify.org/values-beliefs/',
      publisher: 'Edify',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'The Apostles’ Creed in full, Mark 1:15, 2 Timothy 3:16–17, and seven core values each attached to a passage.',
    },
    {
      id: 'edify-theory',
      label: 'Theory of Change',
      url: 'https://edify.org/theory-of-change/',
      publisher: 'Edify',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'edify-mission',
      label: 'Mission & Vision',
      url: 'https://edify.org/mission-vision/',
      publisher: 'Edify',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
  ],
};
