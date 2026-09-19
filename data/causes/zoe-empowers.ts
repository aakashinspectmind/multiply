import type { Cause } from '@/lib/types';

export const zoeEmpowers: Cause = {
  slug: 'zoe-empowers',
  name: 'Zoe Empowers',
  legalName: 'Zoe Empowers, Inc.',
  ein: '45-4671349',
  tagline:
    'Puts orphaned youth into self-governing groups of 60–100 for three years, then stops paying — and says so in writing.',
  category: 'children',
  countries: [
    'Rwanda',
    'Kenya',
    'Malawi',
    'Mozambique',
    'Zimbabwe',
    'Liberia',
    'India',
    'Tanzania',
    'South Sudan',
    'Uganda',
    'Zambia',
    'Eswatini',
  ],
  whatTheyDo:
    'Zoe Empowers organises orphaned and vulnerable young people — most of them heads of their own households, caring for younger siblings — into groups of 60 to 100 and walks with each group for exactly three years. The group receives micro grants, business and agricultural training, life skills, health and rights education, and help getting birth certificates and school places; it elects its own leaders and decides together who gets the next grant. At the end of three years the funding stops and the group continues on its own. The empowerment model was designed in 2007 by Epiphanie Mujawimana, a Rwandan social worker, after three years of conventional relief work; a Global South office now runs the programme from Africa. The ministry is explicit that it is not an orphanage and not a handout: "We are not an orphanage or a handout program—we are a movement equipping the most vulnerable youth with the knowledge, resources, and community support needed to rise out of extreme poverty and thrive."',
  accreditations: [
    {
      label: 'Candid Platinum seal of transparency',
      sourceId: 'zoe-financials',
    },
  ],
  verification: 'documents-reviewed',
  biblicalAlignment: {
    mandate:
      'Scripture does not ask us to run institutions for the fatherless; it asks us to plead their cause and to set the solitary in families. Zoe’s unit of care is the household the child already has — a fifteen-year-old raising four siblings is given land, a trade and a group of peers rather than being moved into a building. That is Isaiah’s "plead for the widow" and the Psalm’s "God settles the solitary in a home" in the same act.',
    scriptures: [
      {
        ref: 'James 1:27',
        text: 'Religion that is pure and undefiled before God the Father is this: to visit orphans and widows in their affliction, and to keep oneself unstained from the world.',
      },
      {
        ref: 'Psalm 68:5–6',
        text: 'Father of the fatherless and protector of widows is God in his holy habitation. God settles the solitary in a home; he leads out the prisoners to prosperity.',
      },
      {
        ref: 'Isaiah 1:17',
        text: 'Learn to do good; seek justice, correct oppression; bring justice to the fatherless, plead the widow’s cause.',
      },
      {
        ref: '1 Thessalonians 4:11–12',
        text: 'Aspire to live quietly, and to mind your own affairs, and to work with your hands, as we instructed you, so that you may walk properly before outsiders and be dependent on no one.',
      },
    ],
    concerns: [
      'We found no statement of faith anywhere on the site. Zoe states "Zoe Empowers is a Christian organization, but the program is open to all orphaned children and vulnerable youth regardless of religious belief," and separately that "While Zoe Empowers is a religiously non-restrictive program, youth experience the gospel in both action and words in ways that are always inviting but never coercive." That is a clear and creditable position on coercion, and it is not a doctrinal statement. A donor who wants to know what Zoe believes will not find it published.',
      'Zoe publishes a spiritual metric — the share of participants in Rwanda agreeing with "I feel that God loves me" rising from 3% to 100%. We do not treat that as a measurable outcome and it does not enter any figure on this page. It is a self-reported survey answer given to staff of the organisation providing the grants, which is the hardest possible setting in which to collect an honest religious answer.',
      'The programme is a three-year grant into a group that decides its own allocations. That is the right design for dignity and the wrong design for tracing an individual gift, and a donor who wants to know what happened to their particular dollar cannot be told.',
    ],
  },
  roi: {
    levers: ['local-cost-base', 'local-workers', 'multiplication', 'volunteer-leverage'],
    reason:
      'The whole model is priced in economies where income per person runs from about $830 in Liberia to $2,760 in India, and the audited statements break spending out country by country — Rwanda $1,492,715, Kenya $1,594,430, Malawi $788,086 and so on, summing exactly to the $8,648,133 program total — so the money is demonstrably spent in those economies rather than granted away and lost from view. The programme is designed by a Rwandan and now run from a Global South office, with national country managers, so there is no expatriate salary in the cost base. The second lever is the three-year cut-off: the group elects its own leaders, runs its own savings and re-lends its own grants, so the labour of delivery is largely the participants’ own and the funding is not renewed. Compare that with residential care, where every additional year of a child’s life is a new year of cost.',
  },
  costModel: {
    outcome: 'year in the empowerment programme for one young person',
    outcomePlural: 'years in the empowerment programme',
    spend: {
      amount: 8648133,
      basis: 'program-services',
      fiscalYear: '2025',
      sourceId: 'zoe-audit-25',
    },
    count: {
      amount: 83908,
      label: 'youth served',
      fiscalYear: '2025',
      sourceId: 'zoe-review-25',
    },
    attribution: 'all-program-spend',
    caveat:
      'This is a cost per youth-year, not the cost of carrying one young person the whole way through. Every participant is enrolled for three years, so a youth "served in 2025" may be in year one, two or three, and the full journey costs roughly three times this — Zoe’s own three-year figure is $344 per youth including overhead. The numerator is all program spending, which also covers the Global South office, country management and $660,967 of general programme cost, so it over-attributes shared administration to the individual youth. It is nonetheless a tight division: the ministry publishes $115 as its own annual cost per youth inclusive of overhead, and our program-only figure of $103 sits where it should relative to that.',
    alternates: [
      {
        label: 'empowerment groups served in 2025',
        count: 973,
        note: 'The group, not the individual, is the unit Zoe actually funds — grants go to the group and the group allocates them. Dividing by groups gives about $8,888 per group-year and is arguably the more honest denominator, but it is not what a donor is being asked to picture.',
      },
      {
        label: 'young people helped since the programme began, cumulative to the end of 2025',
        count: 245000,
        note: 'Zoe states it "has helped more than 245,000 young people" since inception. Dividing one year of spending by twenty years of participants would produce a number that means nothing; it is here only to show the scale the ministry claims over its whole history.',
      },
    ],
  },
  ministryClaims: [
    {
      quote: 'In 2025, the average cost per child in the program was $9.56 per month.',
      sourceId: 'zoe-review-25',
      impliedCostPerOutcome: 114.72,
      sameUnitAsCostModel: true,
      impliedOutcome: 'year in the empowerment programme for one young person',
    },
    {
      quote: 'Give $10 a month to empower one orphaned youth out of poverty.',
      sourceId: 'zoe-give-monthly',
      impliedCostPerOutcome: 120,
      sameUnitAsCostModel: true,
      impliedOutcome: 'year in the empowerment programme for one young person',
    },
    {
      quote:
        'When you join The Collective, Zoe’s monthly giving program, your gift is pooled together with others to empower a group of children with micro grants, life skills, and vocational training.',
      sourceId: 'zoe-give-monthly',
    },
    {
      quote:
        'If you, your church, or your business are able to contribute $1 million dollars to Zoe, that is extraordinary. It will change many lives and, according to a recent study, generate a return on investment of over 1,000%.',
      sourceId: 'zoe-review-25',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 2,
      note: 'Zoe names itself a Christian organisation in its own words and states that participants "experience the gospel in both action and words in ways that are never coercive," which is more than most ministries of this size will commit to in print. No statement of faith, no doctrinal position and no church partnership is published, and the programme is described as religiously non-restrictive, so the gospel is named but not doctrinally located.',
    },
    localLeadership: {
      value: 3,
      note: 'The strongest case in this category we have seen. The empowerment model was designed by Epiphanie Mujawimana, a Rwandan social worker who still manages the Rwanda programme; Reegan Kaberia is chief executive of Zoe Empowers Global South, a co-equal office established in 2025; each country has a national country manager. The American entity raises money and audits it. The programme itself is designed, run and evaluated by Africans.',
    },
    financialTransparency: {
      value: 3,
      note: 'Audited statements and Form 990s posted on the ministry’s own site for every year from 2014 to 2025, a Candid Platinum seal, and — unusually — a country-by-country breakdown of program spending inside the audit that sums exactly to the published program total. A donor can see where the money landed without asking.',
    },
    outcomeEvidence: {
      value: 2,
      note: 'Counts are published per country and per group, and the survey methodology is disclosed: about 20% of households randomly sampled since 2018, with the 2025 figures describing households that entered in 2022 and graduated in 2025. Marked down because the headline unit, "Youth served in 2025," is never defined — the footnote on the same page explains the cost figure but not the count — and it does not reconcile cleanly with the 80,000 the chief executive describes as actively enrolled.',
    },
    costEvidence: {
      value: 3,
      note: 'Both halves of the division are published by the ministry in the same year, and Zoe publishes its own cost per youth — monthly, annual and three-year — so our arithmetic can be checked against theirs rather than standing alone. Almost nothing else in this directory can be cross-checked that way.',
    },
  },
  notVerified: [
    'What "Youth served in 2025" counts. The figure is 83,908 in the annual review, while the chief executive writes that "more than 80,000 young people are actively enrolled" and the website navigation says the model "is impacting the lives of over 83,500 young people." Nothing states whether the served figure counts only enrolled youth or also the younger siblings and dependants in their households, which for this population is a large difference.',
    'Zoe says 12 countries in the chief executive’s letter and the audit breaks spending out across 12 country programmes, but the site navigation says "11 countries." We have used the audit. The discrepancy is unexplained.',
    'The annual review’s "Total funds deployed in 2025" of $9,630,300 does not reconcile to the audit. Audited total expenses of $9,426,911 plus the $203,400 the footnote says partner organisations gave directly to programmes comes to $9,630,311 — eleven dollars more. Trivial in size, but it means the published headline is not simply the audited total, and we do not know what else is in it.',
    'The 1,032% return on investment, the 18-fold income increase and the move from $262 to $4,936 in net annual income all come from an evaluation Zoe commissioned from Radiant Global Insights and summarised in its own annual review. We have not seen the underlying report, the sample size, how the non-participant comparison group was selected, or what Zoe paid for the work.',
    'Graduation data is collected partly on paper and the ministry says it is still moving from sampling about a fifth of households to surveying all of them at intake and graduation. Nobody outside Zoe has audited that collection.',
    '"Like more than 95% of Zoe graduates, she was moving toward lasting self-sufficiency" appears in the annual review with no date, cohort or definition of self-sufficiency attached.',
    'Net assets fell $864,435 during 2025, from $9,416,047 to $8,551,612, while program spending rose about 10%. The audit does not explain whether that draw-down was planned.',
  ],
  notes: [
    'The $9.56 monthly and $115 annual figures carry a footnote on the same page reading "Total cost, inclusive of overhead," so they are not program-only numbers and are not directly comparable to the $103 here. The $10-a-month ask is a round number above their own cost, not a price.',
    'Zoe is unusually direct about what its money is not: the ministry contrasts itself with orphanages and with relief, and the monthly giving page states plainly that gifts are pooled to fund a group rather than a named child. Pooling is the norm in sponsorship and is almost always buried; here it is on the giving page.',
    'The audit breaks the program total into fifteen lines, twelve of them countries: Rwanda $1,492,715, Kenya $1,594,430, Malawi $788,086, Mozambique $261,214, Zimbabwe $849,637, Liberia $457,572, India-Chennai $649,753, India-Vizag $659,698, Tanzania $560,678, South Sudan $161,612, Uganda $169,884, Zambia $97,499, Eswatini $75,673, Global South $168,715 and General $660,967.',
    'Administration was 3.7% and fundraising 4.6% of total expenses in 2025 — $345,188 and $433,590 against $9,426,911. The pie chart in the annual review shows 92% to programmes, which is consistent with the audit.',
  ],
  siteUrl: 'https://zoeempowers.org/',
  giveUrl: 'https://zoeempowers.org/donate/',
  sources: [
    {
      id: 'zoe-site',
      label: 'Homepage',
      url: 'https://zoeempowers.org/',
      publisher: 'Zoe Empowers',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'zoe-what-we-do',
      label: 'What We Do',
      url: 'https://zoeempowers.org/what-we-do/',
      publisher: 'Zoe Empowers',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Source of the mission statement and of "We are not an orphanage or a handout program—we are a movement equipping the most vulnerable youth...".',
    },
    {
      id: 'zoe-our-story',
      label: 'Our Story',
      url: 'https://zoeempowers.org/our-story/',
      publisher: 'Zoe Empowers',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Founding in 2004, the shift to the empowerment model in 2007, and Epiphanie Mujawimana’s role in designing it.',
    },
    {
      id: 'zoe-partner',
      label: 'Partner With Us',
      url: 'https://zoeempowers.org/partner/',
      publisher: 'Zoe Empowers',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Source of both statements on religion: that the programme is open to all regardless of belief, and that youth experience the gospel invitingly but never coercively.',
    },
    {
      id: 'zoe-outcomes',
      label: 'Outcome Data',
      url: 'https://zoeempowers.org/outcomes/',
      publisher: 'Zoe Empowers',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Describes the survey methodology, the sampling rate and the cohort. Also the source of the "I feel that God loves me" figure, which we do not treat as an outcome.',
    },
    {
      id: 'zoe-give-monthly',
      label: 'Give Monthly — The Collective',
      url: 'https://zoeempowers.org/give-monthly/',
      publisher: 'Zoe Empowers',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'The $10 monthly ask and the statement that gifts are pooled to fund a group rather than a named child.',
    },
    {
      id: 'zoe-financials',
      label: 'Financial Transparency',
      url: 'https://zoeempowers.org/financials/',
      publisher: 'Zoe Empowers',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Audits, Form 990s and annual reviews for 2014 through 2025, and the statement "Zoe Empowers is a Candid Platinum-rated charity (formerly GuideStar)."',
    },
    {
      id: 'zoe-audit-25',
      label: '2025 audited financial statements',
      url: 'https://zoeempowers.org/wp-content/uploads/2026/06/Zoe-Empowers-2025-Audited-Financials.pdf',
      publisher: 'Zoe Empowers',
      documentType: 'audited-financials',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note: 'Year ended 31 December 2025. Program expenses $8,648,133, administrative $345,188, fundraising $433,590, total $9,426,911, with program spending broken out by country.',
    },
    {
      id: 'zoe-990-25',
      label: '2025 Form 990',
      url: 'https://zoeempowers.org/wp-content/uploads/2026/06/Zoe-Empowers-2025-990-Public-Version-1.pdf',
      publisher: 'Zoe Empowers',
      documentType: 'form-990',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
    },
    {
      id: 'zoe-review-25',
      label: '2025 Annual Review',
      url: 'https://zoeempowers.org/wp-content/uploads/2026/04/ZoeEmpowers_2025AnnualReview_Web.pdf',
      publisher: 'Zoe Empowers',
      documentType: 'annual-report',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note: 'Designed report. The 83,908 youth served, 973 groups, $9.56 monthly and $344 three-year cost figures are set in a graphic stats block and were read from the rendered page rather than from extracted text. The chief executive’s letter and the Radiant Global Insights summary are printed text.',
    },
  ],
};
