import type { Cause } from '@/lib/types';

export const kidsAliveInternational: Cause = {
  slug: 'kids-alive-international',
  name: 'Kids Alive International',
  legalName: 'Kids Alive International, Inc.',
  ein: '31-1140515',
  tagline:
    'Schools for abused and abandoned children in six countries, with audited accounts and a student count you can divide.',
  category: 'education',
  countries: ['Guatemala', 'Haiti', 'Kenya', 'Lebanon', 'Peru', 'Zambia'],
  whatTheyDo:
    'Kids Alive runs schools for children who have been abused, abandoned or are at risk of it, and wraps the classroom in the things that keep a traumatised child in school — tutoring, therapy, meals, uniforms, medical care and counselling. Around the schools sit three other programmes: family strengthening (parent training, family preservation, job skills), protective care (foster care, reunification, residential care and independent living for children a court has removed from home) and justice advocacy, where its own staff pursue prosecutions of abusers. Founded in 1916. Field programmes are staffed and led locally; the Alpharetta office raises money and grants it out.',
  accreditations: [
    {
      label: 'Evangelical Council for Financial Accountability (ECFA)',
      sourceId: 'ka-financials',
    },
    {
      label: 'Charity Navigator four-star rating, claimed 20 years running',
      sourceId: 'ka-financials',
    },
    { label: 'Candid (GuideStar) platinum seal', sourceId: 'ka-financials' },
  ],
  verification: 'documents-reviewed',
  biblicalAlignment: {
    mandate:
      'Scripture puts the fatherless and the abused under God’s own protection and tells his people to seek justice for them, not merely to feel for them. Isaiah 1:17 is the verse Kids Alive builds on, and it is a command with two halves — plead the case of the widow and defend the orphan. A school is how that command becomes daily and ordinary: a child who is in a classroom is a child who is counted, fed, watched over by an adult who is not their abuser, and taught to read the Scriptures for themselves.',
    scriptures: [
      {
        ref: 'Isaiah 1:17',
        text: 'Learn to do good; seek justice, correct oppression; bring justice to the fatherless, plead the widow’s cause.',
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
    doctrine: {
      label:
        'A short "Faith Foundation" statement resting on the Apostles’ and Nicene Creeds and the authority of Scripture, rather than a detailed evangelical statement of faith.',
      sourceId: 'ka-about',
    },
    concerns: [
      'The language slides. The about page says "Kids Alive International is a Christian organization grounded in the historic Apostles\' and Nicene Creeds"; the financials page opens "As a faith-based nonprofit"; the mission statement on the Form 990 does not mention Christ at all. The doctrinal claim is real and creedal, but it is not the thing the ministry leads with when it is talking about money.',
      'Residential care is part of the model. Protective care includes "residential care" alongside fostering, reunification and independent living, and a "Safe Haven campus" appears in the 2024 report. Institutional care of children is contested — the international consensus has moved decisively toward family-based alternatives — and Kids Alive does place it alongside reunification and fostering rather than instead of them. What is not published is how many children are in residential care versus in families, or how long they stay.',
      'Sponsorship is advertised one child to one sponsor and does not run one to one. The 2025 report prints "3,627 STUDENT CHAMPIONS" against "1,511 STUDENTS GLOBALLY" — more than two sponsors per student. Nothing on the Student Champion page tells a donor that, and nothing published explains what the second and third sponsor of the same child are funding.',
      'Fundraising and administration together take 24.6% of spending, and fundraising alone ($1,726,936) now exceeds administration. That is normal for a sponsorship-driven ministry, which has to buy attention to survive, but it is a quarter of the money that did not reach a school.',
      'Short-term teams from the US are part of the programme — "47 Go Teams" and "More than 500 volunteers" in 2025, hosted by field staff. The report is careful to say the teams "didn’t arrive to \'fix\' or \'rescue\'". Even so, hosting visitors costs local staff time that is charged to programme, and the benefit to a child of a visiting volunteer is not something anyone has measured.',
    ],
  },
  roi: {
    levers: ['local-cost-base', 'local-workers', 'existing-network'],
    reason:
      'Every school is in a country where a teacher, a social worker and a therapist are paid to the local economy — Guatemala, Haiti, Kenya, Lebanon, Peru and Zambia all sit far below United States income per person, Haiti and Zambia by more than an order of magnitude. The Form 990 shows the shape of it: 42 employees, agents and contractors outside the United States against a single foreign office, and $7,413,121 of the year’s programme spending sent abroad as grants to be spent by field organisations rather than by Americans. The schools already exist and are already staffed, so a gift buys another child a place rather than a new institution.',
  },
  costModel: {
    outcome: 'year of school for a student in a Kids Alive school',
    outcomePlural: 'years of school for students in Kids Alive schools',
    spend: {
      amount: 10791751,
      basis: 'program-services',
      fiscalYear: '2024',
      sourceId: 'ka-fs-2024',
    },
    count: {
      amount: 3740,
      label: 'students receiving life-changing education',
      fiscalYear: '2024',
      sourceId: 'ka-annual-2024',
    },
    attribution: 'all-program-spend',
    caveat:
      'An upper bound, and a generous one. The same programme total paid for 14,496 hours of therapy, 463,104 hours of tutoring, foster care and residential care for children removed from home by a court, family strengthening for parents, and a justice-advocacy team that pursues prosecutions — 30,696 people in total, of whom the 3,740 students are a subset. It is also a division across a boundary: 69% of the programme figure left the United States as grants to field organisations whose own books are not consolidated into this audit, so the numerator is what the American entity spent and the denominator is what separate organisations delivered. The count is students enrolled in the schools, not days attended or years completed, and includes the Dominican Republic, which was still part of Kids Alive in 2024 and is now becoming an independent organisation.',
    alternates: [
      {
        label: 'children, family and community members impacted',
        count: 30696,
        note: 'The ministry’s own headline number, and the widest unit it publishes. It counts a parent at a training session and a child in a classroom the same way, so it is the right denominator for the whole programme and the wrong one for a school place.',
      },
      {
        label: 'hours of tutoring delivered',
        count: 463104,
        note: 'The only unit Kids Alive publishes that is a measure of delivery rather than enrolment — an hour either happened or it did not. Charging all programme spending to tutoring hours prices an hour at about $23, which overstates tutoring and understates nothing.',
      },
    ],
  },
  ministryClaims: [
    {
      quote: 'Become a Student Champion with a monthly commitment of $50.',
      sourceId: 'ka-student-champions',
      impliedCostPerOutcome: 600,
      sameUnitAsCostModel: true,
      impliedOutcome:
        'a scholarship to attend the school, discipleship and counselling, education and tutoring, meals, uniforms and medical care for one student',
    },
    {
      quote:
        "Kids Alive International is a Christian organization grounded in the historic Apostles' and Nicene Creeds and in the authority of Scripture as God’s inspired Word.",
      sourceId: 'ka-about',
    },
    {
      quote:
        'In our annual evaluation by the highly respected Charity Navigator we received its highest four-star rating 20 years in a row as an organization you can trust. This puts us in the top 1% of the charities evaluated and assures that you can give and participate with confidence.',
      sourceId: 'ka-financials',
    },
    {
      quote:
        'With 7 schools serving over 2,000 students, Kids Alive Dominican Republic is providing holistic education that nurtures body, mind, soul, and spirit.',
      sourceId: 'ka-annual-2024-pdf',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 2,
      note: 'A creedal statement of faith, Christ named in the mission, discipleship and counselling inside the school day, and a stated policy of serving "children of all faiths—and no faith at all" without conditions. Marked down to 2 because the ministry describes itself as "a faith-based nonprofit" on its financial pages and the mission statement it filed with the IRS is entirely secular in wording — the gospel is real here but is not always the thing said first.',
    },
    localLeadership: {
      value: 2,
      note: 'Delivery is local: 42 staff, agents and contractors abroad, one foreign office, and two-thirds of programme money granted out to be spent by field organisations. Marked at 2 rather than 3 because the senior titles that appear on the Form 990 — global director of programming, regional director of development — are US-based and paid on US salaries, and no page names the national leaders of the six country programmes.',
    },
    financialTransparency: {
      value: 3,
      note: 'Ten consecutive years of audited financial statements and ten Form 990s posted on the ministry’s own site, a clean unqualified audit opinion, the functional split published, ECFA accreditation, and a safeguarding policy published in full. This is what a donor should be able to expect and very few ministries actually do.',
    },
    outcomeEvidence: {
      value: 2,
      note: 'Four counts published each year with a stated period, two of them — therapy hours and tutoring hours — measures of delivery rather than enrolment, which is rare and good. Marked down because "lives impacted" is undefined, the student count is enrolment, the count of schools and of children in residential care is not published, and nobody outside the ministry has checked any of it.',
    },
    costEvidence: {
      value: 3,
      note: 'Audited programme spending and a dated student count for the same twelve months, both published by the ministry, plus an advertised monthly price to hold the result against. The division is straightforward; the interpretation is where the care is needed.',
    },
  },
  notVerified: [
    'The advertised price and the arithmetic are five times apart. A Student Champion commits $50 a month — $600 a year — for a package the ministry says includes the scholarship, tutoring, meals, uniforms and medical care. Dividing audited programme spending by students gives about $2,885. Part of the gap is that programme spending also funds therapy, protective care and justice work; part of it may be that $50 buys a share of a place rather than a place. Kids Alive publishes no cost per student of its own, so we cannot close it.',
    'The student count fell from 3,740 in 2024 to 1,511 in 2025 and the reports do not connect the two. The explanation is almost certainly the Dominican Republic, which the 2024 report credits with "7 schools serving over 2,000 students" and which is leaving to become an independent organisation over six months to June 2026. The 2025 figures are labelled as covering "All Six Kids Alive Countries" while 2024 is labelled only "Across Kids Alive Countries", so the basis changed between years without being restated.',
    'Audited financial statements for 2025 are not yet posted, so the newest count cannot be divided. The 2024 audit is dated 13 November 2025 — nearly eleven months after the year it covers.',
    'Seventy-four per cent of programme spending sits in one line of the audit called "Ministry and mission support" ($7,966,044), with no breakdown by country, by school or by programme. The Form 990 reports the whole of programme spending as a single unnamed activity. There is no way from the published documents to see what a school costs as against what the justice work costs.',
    'The seven foreign organisations that received $7,413,121 in grants are not named. Schedule F lists them by region and by wire transfer only, with the name and EIN columns blank, so a donor cannot look up the entities that actually spend most of the money.',
    'Schedule F reports programme spending of $61,977 and two staff in "East Asia and the Pacific", a region in none of the six countries Kids Alive says it serves. Nothing published explains it.',
    'Nothing published says how many children are in residential care, how many in foster or family placements, or how long a child stays. For a ministry that does protective care, that is the number a donor most needs.',
    'Enrolment is not attendance. No published figure reports how many of the 3,740 students attended for the full year, how many left, or how many finished a phase of schooling, so a cost per student-year assumes a stable roll.',
    'Whether families pay anything. The Student Champion page frames the place as a donated "Scholarship to attend the school", and no fee schedule appears anywhere on the site, but no page states whether unsponsored children are admitted or what happens when a sponsorship lapses.',
    'The Charity Navigator and Candid ratings are quoted from the ministry’s own page. We did not fetch either rating agency directly, so we report the claim rather than the rating.',
  ],
  notes: [
    'Program share is 75.86% by our own arithmetic on the audited statements ($10,791,751 of $14,225,549). The ministry publishes 75.4%, close enough to be a rounding or prior-year difference rather than a discrepancy.',
    'The 2025 report shows the direction of travel: therapy hours up from 14,496 to 19,538 and tutoring hours from 463,104 to 514,156, while the student count fell with the Dominican Republic transition. The ministry is becoming more a trauma-care organisation that runs schools than a school network that also counsels.',
    'Total 2024 revenue on the Form 990 is $19,950,694 against total expenses of $14,225,549 — a large surplus year, which is worth knowing when reading a per-student figure built on the spending side only.',
    'A safeguarding policy, revised June 2025, is published in full as a PDF. For a ministry whose stated speciality is abused children, publishing it rather than describing it is the right instinct.',
  ],
  siteUrl: 'https://www.kidsalive.org/',
  giveUrl: 'https://www.kidsalive.org/donate',
  sources: [
    {
      id: 'ka-site',
      label: 'Homepage',
      url: 'https://www.kidsalive.org/',
      publisher: 'Kids Alive International',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'ka-about',
      label: 'About — Our Faith Foundation',
      url: 'https://www.kidsalive.org/about',
      publisher: 'Kids Alive International',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Source of the creedal faith statement, the mission statement, and the commitment to serve "children of all faiths—and no faith at all".',
    },
    {
      id: 'ka-financials',
      label: 'Financials',
      url: 'https://www.kidsalive.org/financials',
      publisher: 'Kids Alive International',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Links ten years of Form 990s and ten years of audited statements. Source of the 75.4 / 14.0 / 10.6 split, the ECFA, Charity Navigator, GuideStar and BBB claims, and the "As a faith-based nonprofit" wording.',
    },
    {
      id: 'ka-fs-2024',
      label: 'Audited financial statements, year ended December 31, 2024',
      url: 'https://go.kidsalive.org/hubfs/Financials/2024%20KAI%20Financial%20Statements.pdf',
      publisher: 'Kids Alive International',
      documentType: 'audited-financials',
      retrieved: '2026-09-18',
      fiscalYear: '2024',
      note: 'Unqualified opinion, report dated November 13, 2025. Program services $10,791,751, general and administrative $1,706,862, fundraising $1,726,936, total $14,225,549. The functional table shows $7,966,044 of programme spending in a single line, "Ministry and mission support".',
    },
    {
      id: 'ka-990-2024',
      label: 'Form 990 for 2024',
      url: 'https://go.kidsalive.org/hubfs/Financials/2024%20Kids%20Alive%20990%20Public.pdf',
      publisher: 'Kids Alive International',
      documentType: 'form-990',
      retrieved: '2026-09-18',
      fiscalYear: '2024',
      note: 'Part III reports the whole $10,791,751 as one program line "including grants of $7,413,121". Schedule F shows 1 foreign office, 42 staff, agents and contractors abroad, $9,243,701 of foreign expenditure, and seven unnamed grantee organisations.',
    },
    {
      id: 'ka-annual-2024',
      label: '2024 Annual Report page',
      url: 'https://www.kidsalive.org/2024-annual-report',
      publisher: 'Kids Alive International',
      documentType: 'annual-report',
      retrieved: '2026-09-18',
      fiscalYear: '2024',
      note: 'Source of the denominator: "3,740 Students receiving life-changing education*", footnoted "*Numbers Reflect 2024 Impact Across Kids Alive Countries."',
    },
    {
      id: 'ka-annual-2024-pdf',
      label: '2024 Annual Impact Report (PDF)',
      url: 'https://go.kidsalive.org/hubfs/2024%20Annual%20Report/2024%20Annual%20Impact%20Report.pdf',
      publisher: 'Kids Alive International',
      documentType: 'annual-report',
      retrieved: '2026-09-18',
      fiscalYear: '2024',
      note: 'The designed report behind the page. Same four headline counts, footnoted "*January - December 2024", plus the Dominican Republic figure of 7 schools and over 2,000 students.',
    },
    {
      id: 'ka-annual-2025',
      label: '2025 Annual Impact Report (PDF)',
      url: 'https://go.kidsalive.org/hubfs/Annual%20%2B%20Mid-Year%20Reports/2025/2025%20Annual%20Impact%20Report/2025%20Annual%20Impact%20Report_032726.pdf',
      publisher: 'Kids Alive International',
      documentType: 'annual-report',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note: '76,099 lives impacted, 19,538 therapy hours, 514,156 tutoring hours, 1,511 students, 432 staff, "Numbers Reflect January - December 2025 Impact Across All Six Kids Alive Countries." Page 49 sets out the Dominican Republic transition to an independent organisation, completing by June 2026. No audited 2025 statements are posted yet, so these counts have no matching spending figure.',
    },
    {
      id: 'ka-student-champions',
      label: 'Student Champion',
      url: 'https://www.kidsalive.org/student-champions',
      publisher: 'Kids Alive International',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'The $50 a month price and the list of what it is said to provide: scholarship, discipleship and counselling, education and tutoring, meals, uniforms, medical care. Offered for Haiti, Kenya, Lebanon and Zambia only.',
    },
    {
      id: 'ka-safeguarding',
      label: 'Safeguarding Policy, revised June 2025',
      url: 'https://go.kidsalive.org/hubfs/Website/KAI%20Safeguarding%20Policy%20-%20Revised%20June%202025.pdf',
      publisher: 'Kids Alive International',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
  ],
};
