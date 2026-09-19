import type { Cause } from '@/lib/types';

export const amgInternational: Cause = {
  slug: 'amg-international',
  name: 'AMG International',
  legalName: 'AMG International, Inc.',
  ein: '13-1766596',
  tagline:
    'Bible Clubs in 551 African public schools, child development centres in 11 countries — and an audit that carries a qualified opinion two years running.',
  category: 'education',
  countries: [
    'Ghana',
    'Togo',
    'Benin',
    'Nigeria',
    'Sierra Leone',
    'Liberia',
    'Kenya',
    'Uganda',
    'India',
    'Greece',
  ],
  whatTheyDo:
    'AMG has been sending money to national workers since 1942 and employs 22 people, all of them in Chattanooga. The education side has two parts. Child and youth development centres in eleven countries provide schooling, food, medicine and clothing to sponsored children. Bible Clubs run inside 551 government schools across Ghana, Togo, Benin, Nigeria, Sierra Leone, Liberia and Kenya, staffed by volunteers whom AMG’s national missionaries equip. Alongside that it trains pastors, plants churches, runs media evangelism, responds to disasters, built a $382,000 expansion at Upendo Christian School in Uganda and began a $475,000 school in Kenya — and owns 98.42% of St. Luke’s Hospital, a 280-bed hospital in Thessaloniki, Greece. The work is done through 188 partner organisations and local leaders; AMG reports no offices and no staff anywhere outside the United States.',
  accreditations: [
    {
      label: 'Evangelical Council for Financial Accountability (ECFA)',
      sourceId: 'amg-financials',
    },
  ],
  verification: 'documents-reviewed',
  biblicalAlignment: {
    mandate:
      'Teach a child to read and you have handed them the Scriptures; put the Scriptures in front of them while you teach and you have done both at once, which is exactly what a Bible Club in a government school is. AMG’s education work sits on the plain command to teach children the words of God and on Christ’s claim about who the Kingdom belongs to. In West Africa, where AMG says nearly half the population is under fifteen, the children are simply where the people are.',
    scriptures: [
      {
        ref: 'Proverbs 22:6',
        text: 'Train up a child in the way he should go; even when he is old he will not depart from it.',
      },
      {
        ref: 'Deuteronomy 6:6–7',
        text: 'And these words that I command you today shall be on your heart. You shall teach them diligently to your children, and shall talk of them when you sit in your house, and when you walk by the way, and when you lie down, and when you rise.',
      },
      {
        ref: 'Matthew 19:14',
        text: 'Let the little children come to me and do not hinder them, for to such belongs the kingdom of heaven.',
      },
    ],
    doctrine: {
      label:
        'An eleven-clause statement of faith: Scripture "inspired by God and inerrant in the original writings", the Trinity, the virgin birth, substitutionary atonement, bodily resurrection, the "blessed hope", everlasting punishment of the lost — and a clause restricting sexuality to "monogamous marriage between a genetic male and a genetic female". It closes by naming the board of trustees as "the final authority on its application for doctrine, policies and practice".',
      sourceId: 'amg-mission',
    },
    concerns: [
      'The auditors have qualified their opinion two years running, and the reason is not small. AMG owns 98.42% of St. Luke’s Hospital in Thessaloniki and 100% of AMG Publishers, and leaves both out of its financial statements, which US accounting rules do not permit. The auditors state that "the effects on the accompanying financial statements of the failure to consolidate have not been determined" — meaning nobody, including AMG, has quantified what the published statements are missing. Management’s stated reason is that "separate reporting better facilitates financial reporting for federal and state requirements". Every figure on this page describes the part of AMG that is audited, and the size of the unaudited part is unknown.',
      'Nobody works for AMG abroad. The Form 990 reports $7,221,845 of programme expenditure across eight world regions with zero offices, zero employees, zero agents and zero independent contractors in every one of them — and Part IX reports no grants to foreign organisations either. Money left the United States and reached schools, clubs and clinics, but AMG’s own return does not document the mechanism. Working through national partners is the right instinct; reporting that the transfers happened without saying to whom is a gap.',
      'The money and the story point at different continents. Europe received $2,475,777 of foreign programme spending in 2025 — the largest regional share, and more than Sub-Saharan Africa’s $1,429,013 — while the fundraising is built on 143,000 African schoolchildren. Much of the European work is around a hospital AMG owns as a for-profit company and keeps off its books.',
      'A 2.7% general and administrative line is not credible as the cost of managing a $10.3 million ministry with 22 employees, and fundraising at $1,184,722 is 4.3 times larger. Either shared costs are being allocated heavily into programme, or the categories are doing work the audit does not explain.',
      'Designated gifts can be moved. The financial policy says that if a need is over-funded, "otherwise designated funds may be redirected and applied to cover funding shortfalls of similar projects (at the discretion and direction of the Board of Directors and Senior Management), and then to broader projects or needs". Disclosed, legitimate, and not what most donors assume when they give to a named child or school.',
      'The Bible Clubs meet inside government schools and their reported yield is spiritual. The 2025 impact report prints "143,000 students in 551 schools across Africa, yielding 12,452 professions of faith". We quote that and do not treat it as an outcome. It also raises a question AMG does not address: these are children in compulsory schooling, and nothing published describes parental consent, opt-out, or how a profession of faith by a ten-year-old in a school club is recorded and by whom.',
      'Two directors are cousins-in-law, and one of them, Demosthenes Katsarkas, received $201,803 in other compensation from AMG and related organisations while serving as an unpaid director at two hours a week; a second director received $81,403 on the same line. The related organisations are almost certainly the Greek entities AMG does not consolidate, which is precisely where the audit stops.',
    ],
  },
  roi: {
    levers: ['local-workers', 'existing-network', 'local-cost-base', 'volunteer-leverage'],
    reason:
      'AMG buys almost nothing in dollars. $7,895,925 of its $8,848,324 programme total is a single line called "Field ministries" — money spent where the children are — and it carries no foreign payroll at all, because the work is done by national missionaries, 188 partner organisations and volunteer club leaders paid at local rates. The Bible Clubs ride on infrastructure that already exists and costs AMG nothing: government schools with teachers, classrooms and enrolled pupils already in them. In Liberia and Sierra Leone income per person is about $830 against $88,810 in the United States, so a national worker’s salary is a rounding error on an American one.',
  },
  costModel: {
    outcome: 'child attending a weekly AMG Bible Club for a year',
    outcomePlural: 'children attending a weekly AMG Bible Club for a year',
    spend: {
      amount: 10310493,
      basis: 'total-expenses',
      fiscalYear: '2025',
      sourceId: 'amg-audit-2025',
    },
    count: {
      amount: 143000,
      label: 'students in 551 Bible Clubs across Africa',
      fiscalYear: '2025',
      sourceId: 'amg-impact-2025',
    },
    attribution: 'all-program-spend',
    caveat:
      'We do not divide by the number AMG leads with. Its headline is 255,078 "students impacted", which against this budget would read $40.42 — but that figure is printed under a "Child & Youth Development" heading and captioned "total students impacted by all AMG programs", the two cannot both be right, and AMG never says whether it counts enrolment, attendance or contact. The Bible Clubs are the most concrete count in the report and the one AMG describes doing itself, so they are the denominator here, and it is an upper bound in the ordinary way: the numerator is every dollar AMG spent, including pastor training, 100 church plants, media evangelism, 21 disaster responses and medical work. It is also not the cost of a year of school. The club meets inside a government school AMG does not run, does not staff and does not pay for — that child’s teacher and classroom are funded by their own government — and AMG’s own figure is prefaced "approximately". For scale, AMG asks $36 a month, $432 a year, to sponsor one child, six times this figure, which is the distance between a club attendee and a child whose education AMG actually funds. Finally, the numerator is incomplete in the other direction: the audited entity excludes the hospital and the publishing company AMG owns.',
    alternates: [
      {
        label: 'total students impacted by all AMG programs (255,078)',
        count: 255078,
        note: 'About $40.42, and the figure the ministry leads with. Undefined, uncaptioned consistently, and the floor of the range rather than a price.',
      },
      {
        label: 'pastors and church leaders trained',
        count: 6889,
        note: 'About $1,497 each. A different kind of work entirely, included to show how much the headline figure depends on which denominator the ministry chooses to lead with.',
      },
    ],
  },
  ministryClaims: [
    {
      quote:
        'For just $36 a month, you can provide the tools a child needs to break that cycle in the name of Jesus.',
      sourceId: 'amg-site',
      impliedCostPerOutcome: 432,
      impliedOutcome: 'a year of "the tools a child needs" for one sponsored child',
    },
    {
      quote:
        'Our model focuses on partnering with local leaders, churches, and like-minded organizations to operate child and youth development centers in 11 different countries.',
      sourceId: 'amg-children',
    },
    {
      quote: '143,000 students in 551 schools across Africa, yielding 12,452 professions of faith',
      sourceId: 'amg-impact-2025',
    },
    {
      quote:
        "CHILDREN'S WORK AND RELIEF - AMG SUPPORTS CHILDREN INTERNATIONALLY WITH FOOD, MEDICINE, CLOTHING AND EDUCATIONAL SUPPLIES",
      sourceId: 'amg-990-2025',
    },
    {
      quote:
        'This commitment is recognized by our membership in the Evangelical Council for Financial Accountability (ECFA) and in our very high rating with Charity Navigator.',
      sourceId: 'amg-financials',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 3,
      note: 'An eleven-clause statement of faith including inerrancy and final judgment, a mission to "ADVANCE THE GOSPEL", Bible Clubs as the flagship education programme, 100 church plants and 6,889 pastors trained in one year. Nothing is soft-pedalled.',
    },
    localLeadership: {
      value: 3,
      note: 'Twenty-two employees, all American, all in Tennessee; zero staff, agents or offices in any foreign region; 188 partner organisations and national workers doing everything. Structurally this is as devolved as a US-registered ministry gets. The same structure is why the accountability questions in concerns are unanswerable from AMG’s filings — a 3 here is not a compliment about oversight.',
    },
    financialTransparency: {
      value: 1,
      note: 'AMG posts its full audit, its full Form 990 and seven years of impact reports on its own site, which earns real credit. Then the audit arrives with a qualified opinion for the second year running because two majority-owned companies are missing from it, the 990 shows total expenses of $10,360,228 against the audit’s $10,310,493, the impact report’s "$9,883,045 total gifts" reconciles to neither, and $7.2 million of foreign spending is reported with no recipient, no office and no agent. Publishing documents that do not agree with each other is not transparency.',
    },
    outcomeEvidence: {
      value: 1,
      note: 'One number carries the whole report — 255,078 — with no definition, no method, and a caption that contradicts the heading above it. The strongest sub-figure, 143,000 Bible Club students, is prefaced "approximately". Professions of faith are presented as impact. There is no count of sponsored children, no school enrolment figure, no exam result and no completion rate anywhere.',
    },
    costEvidence: {
      value: 1,
      note: 'Both halves are published by the ministry for the same calendar year, and the numerator comes from an audit. Scored low because that audit is qualified and the denominator’s own label cannot decide whether it describes one programme or all of them.',
    },
  },
  notVerified: [
    'What the published financial statements leave out. The auditors say the effects of not consolidating St. Luke’s Hospital and AMG Publishers "have not been determined". AMG carries the hospital at a $2,848,993 cost basis and a separate Athens property at $1,992,169 with fair value "not practicable to estimate". The true size of the enterprise is unknown to everyone, including its auditors.',
    'How $7,221,845 reached the field. Schedule F reports programme expenditure in eight regions with zero offices, zero employees and zero agents in each, and Part IX reports no grants to foreign organisations. No recipient organisation is named anywhere in the return, so there is no way to trace a dollar past Chattanooga.',
    'How many children AMG sponsors. The homepage sells sponsorship at $36 a month and the programme page says centres operate in 11 different countries, but no document we found gives the number of sponsored children, the eleven countries by name, or what the $36 covers.',
    'Whether 255,078 is the child programme’s count or the whole ministry’s. It is printed under "CHILD & YOUTH DEVELOPMENT" and captioned "TOTAL STUDENTS IMPACTED BY ALL AMG PROGRAMS". Those cannot both be right, and the choice changes the cost per student by a factor of nearly three.',
    'Whether "students impacted" means enrolled, attending, or reached once. The report gives no definition, no method and no statement of who collected the figure or from how many of the 188 partners.',
    'Three sets of books disagree. The audit says total expenses of $10,310,493; the Form 990 says $10,360,228; the impact report says "$9,883,045 total gifts" and "86% to Programs" against the audit’s 85.8%. None of the differences is explained in any document.',
    'Whether families pay anything. Nothing on the site, in the 990 or in the audit says whether children in AMG-supported schools or development centres pay fees, or what happens to a child whose family cannot.',
    'The Charity Navigator and Candid ratings are AMG’s own characterisation — "very high rating", "highly rated" — with no score, no star count and no date. We did not fetch either rating agency, and we did not verify the ECFA profile beyond confirming the page loads.',
    'The Upendo Christian School expansion ($382,000, capacity "more than 1,000 students") and the Precious Zawadi School construction ($475,000) are reported as capital projects with no operating cost, no enrolment and no completion date, so neither can be turned into a cost per student.',
    'We treat the 12,452 professions of faith as a claim, not an outcome. Nothing published says how they were recorded, by whom, or whether a child’s response in a school club was followed up.',
  ],
  notes: [
    'The functional expense table is unusually blunt about where the money goes: $7,895,925 of $10,310,493 sits in one line called "Field ministries", against $310,123 of salaries across the entire organisation. Whatever else is unclear here, AMG is not a payroll.',
    'Programme spending rose from $8,507,092 to $8,848,324 year on year while general and administrative fell from $314,764 to $277,447. Total revenue fell from $12,006,951 to $10,527,962, but the prior year included roughly $3.08 million from a property sale, so the underlying trend is upward.',
    'Net assets are $21,594,861 against annual expenses of $10,310,493 — more than two years of spending in reserve, of which $18,050,890 is unrestricted. This is a well-cushioned ministry, not one living hand to mouth. The audit states a 90-day cash target of about $850,000 and reports $1,945,571 in cash.',
    'AMG’s Indian work is part-funded by European agencies it names — AMG International Germany, the Deichmann Foundation, Christoffel Blindenmission, Kindernothilfe, Woord en Daad — so the students counted in South Asia are supported by budgets that are not AMG’s and are not in our numerator.',
  ],
  siteUrl: 'https://www.amginternational.org/',
  giveUrl: 'https://www.amginternational.org/give',
  sources: [
    {
      id: 'amg-site',
      label: 'Homepage',
      url: 'https://www.amginternational.org/',
      publisher: 'AMG International',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Carries the $36 and "$36 a month" sponsorship appeals.',
    },
    {
      id: 'amg-audit-2025',
      label: 'Financial statements, years ended December 31, 2025 and 2024',
      url: 'https://www.amginternational.org/2025%20AUDIT%20FINAL.pdf',
      publisher: 'AMG International (audited by Johnson, Hickey & Murchison, P.C.)',
      documentType: 'audited-financials',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note: 'QUALIFIED opinion, dated March 4, 2026, for both years presented: AMG does not consolidate AMG Publishers, Inc. (100% owned) or St. Luke’s Hospital (98.42% owned, 280 beds, Thessaloniki), and "the effects on the accompanying financial statements of the failure to consolidate have not been determined." Total expenses $10,310,493 — program $8,848,324 (Childcare Ministry $3,720,445, Ministry Projects $3,688,408, Missionaries $1,439,471), general and administrative $277,447, fundraising $1,184,722.',
    },
    {
      id: 'amg-impact-2025',
      label: '2025 Impact Report',
      url: 'https://www.amginternational.org/Files/AMG%20Impact%20Report%202025%20FINAL%20WEB.pdf',
      publisher: 'AMG International',
      documentType: 'annual-report',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note: 'An 18 MB designed PDF; the headline counts are set in graphics over two columns. Source of 255,078 students impacted, 188 partner organisations, 100 church plants, 6,889 pastors trained, the 143,000 students in 551 schools with 12,452 professions of faith, and the $382,000 and $475,000 school projects.',
    },
    {
      id: 'amg-990-2025',
      label: 'Form 990 for calendar year 2025 (public disclosure copy)',
      url: 'https://www.amginternational.org/AMG%20INTERNATIONAL,%20INC.%202025%20PUB%20DISC%20COPY.pdf',
      publisher: 'AMG International',
      documentType: 'form-990',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note: 'Total expenses $10,360,228, which does not match the audit. Three program lines, none reporting any grants. Schedule F shows $7,221,845 of foreign programme expenditure across eight regions with 0 offices and 0 employees or agents in every one. Part VII shows a director receiving $201,803 of other compensation from the organisation and related organisations; Schedule O discloses that two directors are cousins-in-law.',
    },
    {
      id: 'amg-financials',
      label: 'Financial Accountability',
      url: 'https://www.amginternational.org/financial-accountability',
      publisher: 'AMG International',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Links the current audit, the current 990 and impact reports back to 2019. Also carries the ECFA and Charity Navigator claim, the designated-funds redirection policy and the donor privacy statement.',
    },
    {
      id: 'amg-children',
      label: 'Child and Youth Development',
      url: 'https://www.amginternational.org/child-and-youth-development',
      publisher: 'AMG International',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'amg-mission',
      label: 'Mission and Values, including the statement of faith',
      url: 'https://www.amginternational.org/mission-and-values',
      publisher: 'AMG International',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'amg-ecfa',
      label: 'ECFA member profile for AMG International',
      url: 'https://www.ecfa.org/MemberProfile.aspx?ID=2010',
      publisher: 'Evangelical Council for Financial Accountability',
      documentType: 'third-party',
      retrieved: '2026-09-18',
      note: 'Confirms the profile exists. We did not verify an accreditation date or standards review from it.',
    },
  ],
};
