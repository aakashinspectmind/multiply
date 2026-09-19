import type { Cause } from '@/lib/types';

export const compassionInternational: Cause = {
  slug: 'compassion-international',
  name: 'Compassion International',
  legalName: 'Compassion International, Inc.',
  ein: '36-2423707',
  tagline:
    'Sponsorship at the scale of a small government: $1.02bn of programme spending through 9,000 local churches, and your $43 is pooled.',
  category: 'children',
  countries: [
    'Bangladesh',
    'Bolivia',
    'Brazil',
    'Burkina Faso',
    'Cambodia',
    'Colombia',
    'Dominican Republic',
    'Ecuador',
    'El Salvador',
    'Ethiopia',
    'Ghana',
    'Guatemala',
    'Haiti',
    'Honduras',
    'Indonesia',
    'Kenya',
    'Mexico',
    'Nicaragua',
    'Peru',
    'Philippines',
    'Rwanda',
    'Sri Lanka',
    'Tanzania',
    'Thailand',
    'Togo',
    'Uganda',
  ],
  whatTheyDo:
    'Compassion does not operate programmes. It funds local churches to do so, and that is the whole architecture: more than 9,000 Frontline Church Partners in 26 countries register children from their own neighbourhoods, run the child development centres, deliver the nutrition, medical checks, tutoring, skills training and mentoring, and hold the relationship with the family. Compassion audits them, trains them, and moves the money. The programme runs from pregnancy — a survival strand for mothers and babies — through school to youth development, and in the year we reviewed it spent $1,021,646,000 on 2,420,924 registered participants. The mission is stated in five words: "Releasing children from poverty in Jesus’ name."',
  accreditations: [
    {
      label: 'Founding member, Evangelical Council for Financial Accountability',
      sourceId: 'ci-financial-integrity',
    },
    {
      label: 'BBB Wise Giving Alliance accredited charity',
      sourceId: 'ci-financial-integrity',
    },
  ],
  verification: 'documents-reviewed',
  biblicalAlignment: {
    mandate:
      'Isaiah’s command to bring justice to the fatherless is addressed to a people, not to a programme, and Compassion’s answer is to hand the work to the congregation nearest the child. Matthew 18:5 makes receiving a child an act done to Christ; 1 Timothy 5:8 makes provision for one’s own household a matter of faith, which is why strengthening a family rather than replacing it is the more biblical instinct where the family still exists.',
    scriptures: [
      {
        ref: 'Isaiah 1:17',
        text: 'Learn to do good; seek justice, correct oppression; bring justice to the fatherless, plead the widow’s cause.',
      },
      {
        ref: 'Matthew 18:5',
        text: 'Whoever receives one such child in my name receives me.',
      },
      {
        ref: 'James 1:27',
        text: 'Religion that is pure and undefiled before God the Father is this: to visit orphans and widows in their affliction, and to keep oneself unstained from the world.',
      },
      {
        ref: 'Galatians 6:10',
        text: 'So then, as we have opportunity, let us do good to everyone, and especially to those who are of the household of faith.',
      },
    ],
    doctrine: {
      label: 'Statement of Faith, following the World Evangelical Alliance',
      sourceId: 'ci-faith',
    },
    concerns: [
      'Compassion states that "every child in our program hears the gospel" and publishes a frequently asked question titled "Do children have to become Christians to continue receiving help from Compassion?" The answer is no, and the question exists because the concern is real. When food, medicine and school fees come through a church, a poor family has a material reason to give the church the answer it wants. Compassion addresses this directly, which is to its credit, and no ministry can eliminate the dynamic by policy.',
      'Compassion’s own headline outcome claim will not bear its own weight. Its about page displays "97% of Compassion children were released from poverty in Jesus’ name" with the attribution "From a survey of 99 Compassion alumni in the Dominican Republic." Ninety-nine alumni in one of twenty-six countries cannot support a claim about 2.4 million children, and presenting it as a headline percentage rather than as a small local study is the weakest thing we found in an otherwise unusually well-documented ministry.',
      'The advertised $43 a month is not a budget for your child and Compassion says so in its own frequently asked questions. Funds are pooled, essential operational costs are covered first, and the remainder is allocated across all registered children. That is sound stewardship and it is the opposite of what the sponsorship photograph implies.',
      'This is a billion-dollar American organisation. Attribution at that scale is genuinely hard: a community with a Compassion-funded church centre also has a government, other charities and its own economy, and the improvement in a child’s life cannot be assigned to one funder. Compassion’s spending is verifiable; the counterfactual is not.',
    ],
  },
  roi: {
    levers: ['local-cost-base', 'local-workers', 'existing-network'],
    reason:
      'The delivery channel already exists and is already staffed. Compassion does not build centres, hire teachers or run offices in the community — it contracts the church that is already there, whose workers live in the neighbourhood and are paid at local rates in countries with income per person between about $980 in Burkina Faso and $14,000 at the top of its range. That is the reason a year of child development costs a few hundred dollars rather than a few thousand: the gift is not paying to create the channel, only to use it. Compassion also puts the ratio in public — 80% of expenses to programmes, fundraising efficiency of 8.1 — so the overhead side of the leverage is checkable rather than asserted. Against residential care the comparison is structural: a church-based centre serves a child who goes home at the end of the day, so there are no dormitories, no night staff and no substitute for the family.',
  },
  costModel: {
    outcome: 'year of child development for one registered participant',
    outcomePlural: 'years of child development for registered participants',
    spend: {
      amount: 1021646000,
      basis: 'program-services',
      fiscalYear: '2025',
      sourceId: 'ci-audit-25',
    },
    count: {
      amount: 2420924,
      label: 'registered participants at year end',
      fiscalYear: '2025',
      sourceId: 'ci-accountability-25',
    },
    attribution: 'all-program-spend',
    caveat:
      'The denominator is a snapshot, not an average. "Total Ending Registered Participants" counts who was on the books on 30 June 2025, while the numerator is a full year of spending, so children who joined or left mid-year are counted as though they were present throughout — which pushes the true cost per child-year in either direction depending on churn we cannot see. The numerator is all of programme spending, and it covers three different populations at very different costs: mothers and babies in the survival strand, children in the core development programme, and young adults in leadership development. A baby and a university student are both one participant here. This is the average cost of a place in the system, not the cost of any particular child.',
    alternates: [
      {
        label: 'children Compassion says it has heard from directly',
        count: 400000,
        note: 'The accountability report says "we have heard directly from more than 400,000 children in Compassion’s program." It is the only count in the report of a two-way interaction rather than a registration, and dividing by it would give a figure five times higher. We show it because the gap between being registered and being heard from is the honest measure of how much a headcount tells you.',
      },
      {
        label: 'registered participants at the end of the previous year',
        count: 2372768,
        note: 'The prior-year figure, for scale: the programme grew by about 48,000 participants while grant spending fell 6.5%. Not a denominator we would use, but it shows the count is maintained consistently year to year.',
      },
    ],
  },
  ministryClaims: [
    {
      quote: 'Sponsor a child for $43/month to provide',
      sourceId: 'ci-sponsor',
      impliedCostPerOutcome: 516,
      sameUnitAsCostModel: true,
      impliedOutcome: 'year of child development for one sponsored child',
    },
    {
      quote:
        'Yes. Compassion is committed to providing consistent care to all registered children in our programs. That’s why we use a pooled funding model, where sponsorship payments are combined into a central fund each month.',
      sourceId: 'ci-donate-faq',
    },
    {
      quote:
        'After covering essential operational costs, the remaining funds are carefully allocated to ensure every sponsored child receives consistent, high-quality support, even if individual donations are late or missed.',
      sourceId: 'ci-donate-faq',
    },
    {
      quote:
        'In fiscal year 2025, 80% of every dollar went straight to program work through our local church partners — including education, medical care, nutrition, child protection and sharing God’s love with children living in poverty and their families.',
      sourceId: 'ci-financial-integrity',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 3,
      note: 'The mission statement names Jesus. The statement of faith is the World Evangelical Alliance’s, published in full. Delivery is through local evangelical congregations rather than Compassion’s own staff, so the gospel is not an add-on to the programme — the church running the programme is the programme.',
    },
    localLeadership: {
      value: 3,
      note: 'More than 9,000 Frontline Church Partners select the children, run the centres and hold the relationships. Compassion’s role is funding, training and audit. Governance and fundraising are American and the Global Partner Alliance contributed $215,299,000 of the year’s revenue from other national offices, but the work itself is done by believers who live where the children live.',
    },
    financialTransparency: {
      value: 3,
      note: 'A KPMG audit of consolidated statements posted on its own site, plus an accountability report that publishes the programme ratio, fundraising efficiency, grant growth rate and participant counts, and explains a 6.5% fall in grants by naming the one-time items behind it. Founding member of ECFA, BBB Wise Giving Alliance accredited. Very little is left for an outsider to guess at on the money side.',
    },
    outcomeEvidence: {
      value: 2,
      note: 'The participant count is precisely defined, maintained year to year and auditable — but registration is an input, not a result, and Compassion publishes no comparable count of what was delivered. The one outcome percentage it does headline, 97% released from poverty, rests on 99 alumni in a single country. Credit for the count; none for the claim.',
    },
    costEvidence: {
      value: 3,
      note: 'Spending and count for the same fiscal year, in documents Compassion publishes itself, with the programme ratio disclosed so the division can be sanity-checked. Its own $43 monthly ask gives a second reference point. Both halves exist and neither had to be estimated.',
    },
  },
  notVerified: [
    'The 97% "released from poverty" figure. It comes from 99 alumni surveyed in the Dominican Republic and is displayed as a headline about the whole programme. We have not seen the study, how the 99 were selected, how "released from poverty" was defined, or who conducted it, and we do not treat it as evidence of anything beyond those 99 people.',
    'How churn affects the per-participant figure. The count is year-end registrations against twelve months of spending, and Compassion does not publish how many children joined, graduated or left during the year, so we cannot convert it into an average enrolment.',
    'What share of the $1.02bn goes to each strand. Survival (mothers and infants), core child development and youth leadership development cost very different amounts per head, and the audit shows a single "Child development programs" line. A donor cannot tell what their money is proportioned to.',
    'What "essential operational costs" covered first out of the pooled fund amounts to. Compassion discloses the pooling and the priority but not the deduction, so the share of a $43 gift that reaches programme delivery is not published at the level of the individual sponsorship.',
    'Compassion says 29 countries served; we could confirm 26 with published country pages. The remaining three are listed on its own site as "Upcoming Countries" — Malawi, Myanmar and Zambia — so the headline number counts places where the programme has not started. We have listed only the 26.',
    'The $51.7m of promises-to-give inside contribution growth. Compassion reports growth of 2.7% including them and −1.4% without, which is commendably candid, but a pledge is not cash and the collection history is not published.',
    'Nothing independent of Compassion has counted the children. The church partners report participation to Compassion, which audits them; no outside body has verified a sample of the 2,420,924.',
    'Compassion ceased operations in India in 2017 after the withdrawal of its foreign-contribution registration. India does not appear in the current country list and we have not listed it, but a donor who remembers Compassion India should know the programme there ended.',
  ],
  notes: [
    'Programme spending fell in the year we reviewed, from $1,066,768,000 to $1,021,646,000, and the accountability report explains why rather than burying it: a one-time $35.5m grant in the prior year and $32.6m more of targeted disaster response. That kind of disclosure is rare and is most of the reason this cause scores where it does on transparency.',
    'Total expenses were $1,283,655,000: programmes $1,021,646,000 (80%), fundraising $161,584,000 (12.6%), management and general $100,425,000 (7.8%).',
    'Compassion’s own accountability report describes "spiritual, economic, social and physical care to over 2.4 million babies, children and young adults in poverty across more than 9,000 Frontline Church Partners and 29 program countries." We count none of the spiritual part.',
    'The pooled funding explanation is on the donation FAQ rather than the sponsorship page, and the sponsorship page is where a donor forms the picture of a named child with a named need. Both are Compassion’s own words; only one is where the decision is made.',
  ],
  siteUrl: 'https://www.compassion.com/',
  giveUrl: 'https://www.compassion.com/sponsor-a-child/',
  sources: [
    {
      id: 'ci-about',
      label: 'About Us',
      url: 'https://www.compassion.com/about-us/',
      publisher: 'Compassion International',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Displays "97% of Compassion children were released from poverty in Jesus’ name" attributed to a survey of 99 alumni in the Dominican Republic, and the statement that every child in the programme hears the gospel.',
    },
    {
      id: 'ci-where',
      label: 'Where We Work',
      url: 'https://www.compassion.com/about-us/where-we-work/',
      publisher: 'Compassion International',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Lists 26 current programme countries plus three "Upcoming Countries" — Malawi, Myanmar and Zambia — which together make the 29 quoted elsewhere.',
    },
    {
      id: 'ci-faith',
      label: 'Statement of Faith',
      url: 'https://www.compassion.com/about-us/statement-of-faith/',
      publisher: 'Compassion International',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Adopts the World Evangelical Alliance statement and prints its seven articles.',
    },
    {
      id: 'ci-sponsor',
      label: 'Sponsor a Child',
      url: 'https://www.compassion.com/sponsor-a-child/',
      publisher: 'Compassion International',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'The $43 monthly ask, followed by a list of what it provides: malnutrition monitoring, medical checkups, mentorship, education and skills training, and contact with the sponsor.',
    },
    {
      id: 'ci-donate-faq',
      label: 'Donation FAQ — "Does Compassion pool funds?"',
      url: 'https://www.compassion.com/give/donate/faq/',
      publisher: 'Compassion International',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'ci-financial-integrity',
      label: 'Financial Integrity',
      url: 'https://www.compassion.com/about-us/financial-integrity/',
      publisher: 'Compassion International',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Links the audited statements and the accountability report, and lists the accreditations.',
    },
    {
      id: 'ci-audit-25',
      label: 'Audited consolidated financial statements, FY2025',
      url: 'https://assets.ctfassets.net/v1fsq8y1pr0o/tpfm9Cfp1uFc4XUFKQEkd/6339021d617c35b63759ed59ccd7898a/compassion-international-inc-audited-financial-statements-fy25-v2.pdf',
      publisher: 'Compassion International (audit by KPMG LLP)',
      documentType: 'audited-financials',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note: 'Year ended 30 June 2025, amounts in thousands. Child development programs $1,021,646, fundraising $161,584, management and general $100,425, total $1,283,655. The PDF is image-only from page five onward, so the functional expense statement was read from pages rendered at 110 dpi rather than from extracted text.',
    },
    {
      id: 'ci-accountability-25',
      label: '2025 Accountability Report',
      url: 'https://assets.ctfassets.net/v1fsq8y1pr0o/5H5KJCwHccbaZGl0dscLcW/6eef8dd2046ab6a1dfd1b7a8d6c52b73/compassion-international-2025-accountability-report.pdf',
      publisher: 'Compassion International',
      documentType: 'annual-report',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note: 'Source of Total Ending Registered Participants 2,420,924 (prior year 2,372,768), the 80% programme ratio, the 8.1 fundraising efficiency ratio, and the explanation of the 6.5% fall in grants.',
    },
  ],
};
