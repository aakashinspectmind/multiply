import type { Cause } from '@/lib/types';

export const fiveTalents: Cause = {
  slug: 'five-talents',
  name: 'Five Talents',
  legalName: 'Five Talents International',
  ein: '54-1940918',
  tagline:
    'Trains church-based savings groups in ten countries for about $23 a member a year, because the members supply the capital.',
  category: 'livelihood',
  countries: [
    'Bolivia',
    'Burundi',
    'DR Congo',
    'Kenya',
    'Malawi',
    'Myanmar',
    'Rwanda',
    'South Sudan',
    'Tanzania',
    'Uganda',
  ],
  whatTheyDo:
    'Five Talents trains savings groups — typically 15 to 30 members, gathered through Anglican dioceses and other local churches — in bookkeeping, business skills and group governance. The members save their own money weekly, lend it to one another at rates they set, and keep the interest inside the group. Five Talents pays for the trainer, the curriculum and the local staff who supervise the groups; it does not supply the loan fund. It was founded out of the 1998 Lambeth Conference, and the name comes from the parable in Matthew 25.',
  accreditations: [],
  verification: 'documents-reviewed',
  biblicalAlignment: {
    mandate:
      "The parable this ministry is named after is not about money given away; it is about capital entrusted to someone and the expectation that he will work with it. Deuteronomy is blunter still: the command to the person with means is not only to give but to lend — to put purchasing power into a poor neighbour's hands rather than hand him goods. Proverbs adds the reason a Christian should care whether the arrangement is fair, because the poor have no one else to argue their case.",
    scriptures: [
      {
        ref: 'Matthew 25:20–21',
        text: 'And he who had received the five talents came forward, bringing five talents more, saying, "Master, you delivered to me five talents; here, I have made five talents more." His master said to him, "Well done, good and faithful servant."',
      },
      {
        ref: 'Deuteronomy 15:7–8',
        text: 'You shall not harden your heart or shut your hand against your poor brother, but you shall open your hand to him and lend him sufficient for his need, whatever it may be.',
      },
      {
        ref: 'Proverbs 31:8–9',
        text: 'Open your mouth for the mute, for the rights of all who are destitute. Open your mouth, judge righteously, defend the rights of the poor and needy.',
      },
    ],
    concerns: [
      'Five Talents advertises a "100% Loan Repayment Rate in 2024" on its own impact page, while the same site\'s description of the model lists the goal as "Achieve 90%+ loan repayment." Both cannot be the operating reality. A perfect repayment rate across tens of thousands of borrowers in ten countries is not a result; it is either a different definition of repayment, a subset, or a rounding convention, and the site does not say which. We list it as a claim and do not rely on it.',
      "The randomised evidence on microcredit generally finds modest or no improvement in household income, and there is a real critique that group lending can push a struggling member further into debt through social pressure to repay. Five Talents' model puts most of that risk on the group rather than on a lender, which is a better structure, but it does not make the pressure disappear — a defaulting member owes her neighbours, and they collect.",
      'We found no statement of faith or doctrinal position. The identity claim is a single sentence, "Five Talents is a Christian organization," and the delivery channel is Anglican dioceses. That is stronger than nothing and weaker than a published doctrine.',
      "Five Talents entities in the United States, the United Kingdom and Kenya publish a combined income figure of $4,338,794, but only the US entity's $1,844,350 of expenses is audited in the statements we read. A donor cannot see what the other two thirds of the money did.",
    ],
  },
  roi: {
    levers: ['local-cost-base', 'local-workers', 'existing-network', 'multiplication'],
    reason:
      "This is the savings-group economics at its clearest, and the mechanism deserves stating exactly. The donor is not buying a loan fund. The members build the loan fund out of their own income — $2.5 million of it in 2025 — and the donor pays only for training and the local staff who deliver it. That is why the cost per member is about $23 a year rather than the size of a loan, and it is why the group keeps lending after the training budget stops. Delivery rides Anglican dioceses that already exist, are already staffed and already meet weekly, so no channel has to be built. The trainers are local: Five Talents' overseas programmes are run by nationals in each country, not by sent staff.",
  },
  costModel: {
    outcome: 'member trained and supported for a year',
    outcomePlural: 'members trained and supported for a year',
    spend: {
      amount: 1382618,
      basis: 'program-services',
      fiscalYear: '2025',
      sourceId: 'ft-audit-25',
    },
    count: {
      amount: 59253,
      label: 'savings group members served in the year',
      fiscalYear: '2025',
      sourceId: 'ft-ar-25',
    },
    attribution: 'all-program-spend',
    caveat:
      'This one runs the opposite way from most figures on this site: it probably understates the cost. The numerator is only the US entity\'s audited program spending, and Five Talents reports combined support and income of $4,338,794 across its US, UK and Kenya organisations — so some of the staff and training behind these 59,253 members was paid for by money that never appears in the statement we divided. Read $23 as a floor, not a price. In the other direction, "members served" is a count of people in trained groups, not of businesses that survived or incomes that rose, and the member\'s own savings are her money, not impact the donor purchased.',
    alternates: [
      {
        label: 'cumulative members served since 1998',
        count: 331594,
        note: 'Dividing one year of spending by 27 years of members would be meaningless, and it is shown here only because it is the number the ministry leads with. Cumulative counts also double-count anyone who was in a group for more than one year.',
      },
    ],
  },
  ministryClaims: [
    {
      quote:
        'Five Talents is a Christian organization that trains women and men to find sustainable paths out of extreme poverty through entrepreneurship.',
      sourceId: 'ft-site',
    },
    {
      quote: '100% Loan Repayment Rate in 2024',
      sourceId: 'ft-impact',
    },
    {
      quote: 'Achieve 90%+ loan repayment',
      sourceId: 'ft-impact',
    },
    {
      quote: 'Develops a business with an initial loan of $30-$50',
      sourceId: 'ft-impact',
    },
    {
      quote: '$2.5 Million total savings by members in 2025',
      sourceId: 'ft-ar-25',
    },
    {
      quote:
        '90% of female participants and 85% of male participants reported that they were able to generate more income from their businesses',
      sourceId: 'ft-burundi',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 2,
      note: 'Self-describes as a Christian organisation and works through Anglican dioceses and local churches, which is a real ecclesial channel rather than a branding choice. But there is no statement of faith, no doctrinal position, and the programme materials are about savings, business and governance. Christ is not named in the model description.',
    },
    localLeadership: {
      value: 3,
      note: 'Field programmes are run by national staff and by the dioceses themselves, and Kenya has its own incorporated Five Talents entity. Governance and the largest share of fundraising remain in the United States and the United Kingdom, but there is no expatriate delivery layer in the model.',
    },
    financialTransparency: {
      value: 2,
      note: "Audited statements, Form 990s and annual reports are all posted, which is more than most ministries this size. Marked down for two things: the audit covers only the US entity while the impact counts are global, and the annual report's functional expenses ($1,382,261 program, $1,837,524 total) do not match the audit's ($1,382,618 and $1,844,350).",
    },
    outcomeEvidence: {
      value: 2,
      note: 'Members served and total member savings are published annually, and Five Talents went further than almost anyone in this category by commissioning a longitudinal study in Burundi with real before-and-after figures. The study has no control group and relies on participant recall, so it cannot separate the programme from everything else happening in Burundi, and no comparable study exists for the other nine countries.',
    },
    costEvidence: {
      value: 2,
      note: 'Both halves are published and both are sourced, but they do not cover the same organisation — audited US spending against worldwide members — so the quotient is a floor rather than a cost.',
    },
  },
  notVerified: [
    "The 100% loan repayment claim. No loan-loss figure, no portfolio-at-risk measure and no definition of repayment appears anywhere, and the ministry's own stated target is 90%+. In savings groups the loans are between members, so nobody outside the group audits whether they were repaid.",
    'What the other two thirds of the money did. Combined income across the US, UK and Kenya entities is $4,338,794; the audit we read covers $1,844,350 of expenses in the US entity only.',
    'Whether the 59,253 members counted for 2025 are distinct people or group memberships, and whether a member who was in a group in 2024 and 2025 is counted in both years.',
    'The Burundi study is retrospective, self-reported and uncontrolled: 573 participants recalling their own savings and income. Monthly savings rose from about $1.70 to $2.40 and average loans from about $20 to $32 in real terms, which is a real change in a very small absolute amount, and none of it can be attributed to Five Talents rather than to the intervening years.',
    'The annual report and the audit disagree on functional expenses by a few hundred dollars in program services and about $6,800 in total. Small, but unexplained.',
    'No statement of faith, and no description of what, if anything, is taught about Christ inside the training curriculum.',
  ],
  notes: [
    "The $2.5 million the members saved in 2025 is the members' own money. It is not a donation, it was not raised by Five Talents, and it must not be read as impact bought by a donor. What the donor bought is the training and the bookkeeping discipline that made the saving possible — which is the actual claim, and it is a good one.",
    "Program spending grew from $1,141,568 in 2024 to $1,382,618 in 2025, about 21%, while fundraising costs ran at $274,595. This is a small organisation: the entire audited US budget is less than 3% of HOPE International's.",
    "An initial loan of $30 to $50 is the scale of the thing. Discussions of microfinance in the abstract tend to imagine larger sums; in these groups the loan is a few weeks of a market trader's stock.",
    'The Chalmers Center reports that Five Talents uses its RESTORE curriculum, so a donor to either ministry is partly funding the same training content delivered by different hands.',
  ],
  siteUrl: 'https://www.fivetalents.org/',
  giveUrl: 'https://www.fivetalents.org/donate',
  sources: [
    {
      id: 'ft-site',
      label: 'Homepage',
      url: 'https://www.fivetalents.org/',
      publisher: 'Five Talents',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'ft-impact',
      label: 'Our Impact',
      url: 'https://www.fivetalents.org/our-impact',
      publisher: 'Five Talents',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'The only accountability page on the site — /financials and /about both 404. Everything is linked from here: audited statements, Form 990s, annual reports, the Burundi study, the repayment claims and the $30-$50 loan figure.',
    },
    {
      id: 'ft-audit-25',
      label: '2025 audited financial statements, Five Talents USA',
      url: 'https://cdn.prod.website-files.com/67dd9039c32ee4b9df7d46da/6a1f576d0f26bdd918478876_2025%20FTUSA%20audited%20Financial%20statements-Final.pdf',
      publisher: 'Five Talents',
      documentType: 'audited-financials',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note: 'Program services $1,382,618, management and general $182,110, fundraising $274,595, total $1,844,350. Covers the US entity only; the UK and Kenya organisations are not consolidated.',
    },
    {
      id: 'ft-ar-25',
      label: '2025 annual report',
      url: 'https://cdn.prod.website-files.com/67dd9039c32ee4b9df7d46da/6a70ddc7a3e9ce07e1a9424b_Annual%20Report%202025-v5.pdf',
      publisher: 'Five Talents',
      documentType: 'annual-report',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note: 'Source of the 59,253 members served in 2025, the 331,594 cumulative figure, the $2.5 million in member savings and the $4,338,794 combined income across the three Five Talents entities. Its functional expense figures differ slightly from the audit.',
    },
    {
      id: 'ft-burundi',
      label: 'Burundi longitudinal study, 2023 summary report',
      url: 'https://cdn.prod.website-files.com/6744dd13deae47e436aa9f55/67a67a0b47bc7a0bcc31f921_2023%20Summary%20Report%20Burundi%20Longitudinal%20Study%20FTUSA.pdf',
      publisher: 'Five Talents',
      documentType: 'third-party',
      retrieved: '2026-09-18',
      fiscalYear: '2023',
      note: 'A 573-participant retrospective survey of savings group members, commissioned by Five Talents. No control group. Commissioned research rather than independent evaluation, but the closest thing to an outcome study in this category.',
    },
  ],
};
