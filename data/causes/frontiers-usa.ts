import type { Cause } from '@/lib/types';

export const frontiersUsa: Cause = {
  slug: 'frontiers-usa',
  name: 'Frontiers USA',
  legalName: 'Frontiers USA',
  ein: '95-3731505',
  tagline:
    'Recruits, trains and sends American workers to Muslim peoples — the expensive model, and the one that goes where nobody local can be supported.',
  category: 'evangelism',
  countries: [
    'Middle East & North Africa',
    'Africa',
    'Eurasia',
    'Europe',
    'South Asia',
    'Southeast Asia',
  ],
  whatTheyDo:
    'Frontiers recruits believers in the United States, trains them, sends them in teams to live in Muslim communities, and then pastors them while they are there. Its stated mission is "With love and respect, inviting all Muslim peoples to follow Jesus", and it works only among Muslim peoples with the least access to the gospel. In the year to 30 June 2025 it had 575 long-term US-sent workers on the field across eight regions and more than fifty countries, sent 66 new long-term workers, and spent $36,931,047 on programme activities — of which $28,308,075 was salaries and benefits. It names no country, for the workers\' safety.',
  accreditations: [{ label: 'ECFA member since 1996', sourceId: 'fr-accountability' }],
  verification: 'documents-reviewed',
  biblicalAlignment: {
    mandate:
      "Romans 10 ends with the question this ministry exists to answer: how are they to preach unless they are sent? The national-worker model that dominates the rest of this category has one structural limit — it needs a believer already on the ground to support. Where there is no church at all, someone has to go first, learn the language, and stay. Paul's ambition to preach where Christ had not been named was expensive, slow and carried out by a man who moved.",
    scriptures: [
      {
        ref: 'Romans 10:14–15',
        text: 'And how are they to hear without someone preaching? And how are they to preach unless they are sent? As it is written, “How beautiful are the feet of those who bring good news!”',
      },
      {
        ref: 'Romans 15:20–21',
        text: "and thus I make it my ambition to preach the gospel, not where Christ has already been named, lest I build on someone else's foundation, but as it is written, “Those who have never been told of him will see, and those who have never heard will understand.”",
      },
      {
        ref: 'Isaiah 6:8',
        text: 'And I heard the voice of the Lord saying, “Whom shall I send, and who will go for us?” Then I said, “Here I am! Send me.”',
      },
    ],
    doctrine: { label: 'Statement of Faith', sourceId: 'fr-faith' },
    concerns: [
      'This is the most expensive model in the category by roughly two orders of magnitude, and nothing here disguises that. A donor choosing Frontiers is choosing to pay for presence in places where the cheaper option does not exist, and should decide that deliberately rather than by accident.',
      "Frontiers states that its aim includes planting healthy, reproducing churches, and publishes no count of churches, fellowships, believers or movements anywhere. The annual report's field summary reports workers, teams, applicants and church partnerships — inputs, every one. For a ministry this size that is a significant gap in the one direction that matters.",
      "Field workers' ministry accounts are charged a 9% assessment fee. That is a normal industry arrangement and is disclosed plainly, but it means a gift to a named worker is reduced by 9% before it reaches their account, on top of the organisation's general fundraising cost.",
      'Fundraising is 9.4% of expenses, $4,066,071, higher than management and general at 5.6%. The audit explains why — fieldworker deputation time is a joint cost, $5,028,441 in this year, of which $3,342,467 is charged to fundraising — so the workers themselves raise their own support and the cost lands in this line. Disclosed properly, but a donor should know that a large part of "fundraising" is workers asking churches for money.',
      'The accountability page publishes the expense split as 85% / 5% / 10%. The audit says 85.0% / 5.6% / 9.4%. Small, but it is the ministry restating its own audited figures with the administration share rounded down.',
      'The live 2024–2025 annual report page still contains unreplaced placeholder text. Under "Prayer for the Future", the prayer points for Workers and Church Partnerships read "Lorem Ipsum is simply dummy text of the printing and typesetting industry." It is a proofreading failure rather than a financial one, but it is on the page a donor is pointed to for results.',
      'No current Form 990 is available. The audit records that in August 2021 the IRS granted Frontiers "association of churches" status, and the structured IRS data we could reach stops at the year ended June 2020. Whatever the reason, the audit is the only current public document, and there is no public executive compensation or grantee disclosure.',
    ],
  },
  roi: {
    levers: ['multiplication'],
    reason:
      'The honest answer is that the usual levers run the other way here. There is no local cost base — 76.7% of programme spending is salaries and benefits for Americans living abroad, and Frontiers pays to recruit, train, send, school the children of and pastor every one of them. The only structural argument for the cost is multiplication: a team is sent to start something that continues without it, in places where there was no believer to support in the first place. Frontiers publishes no count of anything started, so that argument is unverified. We include this cause deliberately as the benchmark for the rest of the category — when a ministry supporting national workers claims a dollar goes further, this page is the number it is going further than.',
  },
  costModel: {
    outcome: 'US-sent worker-year on the field',
    outcomePlural: 'US-sent worker-years on the field',
    spend: {
      amount: 36931047,
      basis: 'program-services',
      fiscalYear: 'FYE June 2025',
      sourceId: 'fr-audit-25',
    },
    count: {
      amount: 575,
      label: 'long-term US-sent workers on the field',
      fiscalYear: 'FYE June 2025',
      sourceId: 'fr-ar-25',
    },
    attribution: 'all-program-spend',
    caveat:
      "An upper bound in three ways and an understatement in one. It over-attributes because $2,656,751 of programme spending is grants to other organisations and $1,127,324 is payments to affiliates, neither of which is the cost of a US-sent worker; because a substantial part of the rest is the recruiting and training pipeline — 231 inquiries and 72 long-term applicants this year — spent on workers not yet on the field; and because the annual report reports 291 total Frontiers teams against 128 US-led ones, so some US programme money supports teams whose workers are not among the 575. It understates because the audit says some fieldworkers are self-supporting tentmakers whose costs never enter these statements, so the denominator includes workers the numerator never paid for. Read this as the full cost to Frontiers USA of maintaining a sending operation, divided by the workers it currently has out — not as the price of adding one more, and not as one worker's budget.",
    alternates: [
      {
        label: 'long-term workers sent for the first time this year',
        count: 66,
        note: 'Dividing by the 66 newly sent gives $559,561.32, which is the wrong denominator — most of the year\'s spending supported the 575 already out — but it is the figure a donor imagining "the cost of sending a missionary" is closest to reaching for, and it shows how badly that framing misleads.',
      },
      {
        label: 'US-led teams on the field',
        count: 128,
        note: '$288,523.80 per US-led team. Frontiers describes the team, not the individual, as its operating unit.',
      },
      {
        label: 'all Frontiers teams, including those not US-led',
        count: 291,
        note: '$126,910.81 per team. This is the most flattering denominator available and the least defensible, because Frontiers USA does not fund all 291 teams.',
      },
    ],
  },
  ministryClaims: [
    {
      quote:
        'Today, 575 U.S.-sent workers are actively serving on the field, reaching Muslims with the least access to the news of Jesus Christ.',
      sourceId: 'fr-ar-25',
    },
    {
      quote:
        'Field workers’ ministry accounts are charged a 9% assessment fee to help cover the costs of serving teams and individuals on the field.',
      sourceId: 'fr-accountability',
    },
    {
      quote:
        'For reporting purposes, Frontiers USA’s expenses are broken down between Program Services (85%), General and Administrative (5%), and Fundraising (10%).',
      sourceId: 'fr-accountability',
    },
    {
      quote:
        'Frontiers sends teams to inspire transformational movements to Christ in the places least reached by the Gospel.',
      sourceId: 'fr-mission',
    },
    {
      quote:
        'The mission of Frontiers is to plant churches that lead to movements among the least-evangelized peoples of the world through recruiting, training, sending, and serving fieldworkers.',
      sourceId: 'fr-audit-25',
    },
    {
      quote:
        "Some of Frontiers’ fieldworkers are self-supporting (tent-makers); therefore, only contributions to the mission work of Frontiers is reflected in Frontiers' financial statements.",
      sourceId: 'fr-audit-25',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 3,
      note: 'One of the most explicit doctrinal statements of any ministry we have reviewed — verbal inspiration and inerrancy of Scripture, the deity and bodily resurrection of Christ, justification by faith alone, total depravity — and a mission that is nothing but evangelism and discipleship among Muslim peoples.',
    },
    localLeadership: {
      value: 1,
      note: 'By design this is a sending agency: the field force is 575 Americans, and 76.7% of programme spending is their salaries and benefits. It is not a criticism of the model, which exists precisely for places with no local believer to lead, but on this dimension it scores what it scores. The 291-versus-128 team figures suggest non-US-led teams exist alongside them, and nothing published describes who leads those.',
    },
    financialTransparency: {
      value: 2,
      note: 'A full CapinCrouse audit is posted with a ten-line functional expense table, an explicit joint-cost disclosure, and both years side by side — better than most. Held at 2 because no Form 990 is available at all, so there is no public executive compensation or grantee disclosure, and the audit names no country or recipient.',
    },
    outcomeEvidence: {
      value: 0,
      note: 'A finding, not an absence. Frontiers publishes a detailed field summary and not one figure in it is an outcome: workers, teams, applicants, inquiries and church partnerships are all inputs. For a ministry that states its aim as planting reproducing churches, no count of churches, fellowships or believers is published anywhere we could find.',
    },
    costEvidence: {
      value: 2,
      note: 'The numerator is audited and precisely broken down, and the worker count comes from the annual report covering the same fiscal year, so the division is legitimate. Held at 2 because the denominator is a headcount of staff rather than a count of anything delivered — this is a cost per worker maintained, which is an input price.',
    },
  },
  notVerified: [
    'Anything Frontiers produced. No count of churches planted, fellowships started, believers discipled or movements begun is published, despite planting reproducing churches being the stated aim. This cause has the best-documented numerator in its category and no outcome to divide it by.',
    'How long a sent worker stays. The cost of a worker-year tells a donor nothing about whether workers serve two years or twenty, and retention is the single biggest driver of cost per unit of lasting work in a sending model.',
    "What share of this year's $36,931,047 bought future capacity rather than current presence. The recruiting and training pipeline — 231 inquiries, 72 long-term applicants, 66 workers newly sent — sits inside programme spending and is not separated out.",
    'Who receives the $2,656,751 of grants to other organisations and the $1,127,324 of payments to affiliates. Together that is 10.2% of programme spending going to bodies the audit does not name. With no Form 990 there is no Schedule F either, so no region or recipient is disclosed anywhere.',
    'How many of the 575 are self-supporting tentmakers. The audit states that some fieldworkers support themselves and that only contributions to the mission work of Frontiers appear in the statements, so an unknown share of the 575 cost these accounts nothing. The real cost per funded worker-year is therefore higher than $64,227.91 by an amount nobody outside the ministry can calculate. This is the single most important thing we could not verify on this page.',
    'What the 291 total Frontiers teams are, against 128 US-led. The difference implies teams funded or led from other Frontiers sending bases, and nothing published explains how US programme dollars relate to them.',
    'Where the workers are. More than fifty countries across eight named regions, none identified. This is a defensible security decision, not a criticism, but it means no country-level cost comparison is possible and the regions on this page are as precise as the disclosure allows.',
    'Executive compensation. With no Form 990 filed, none is published.',
    'Whether the 9% assessment fee is charged on top of, or inside, the 85% programme allocation.',
  ],
  notes: [
    'Audited functional expenses for the year ended 30 June 2025: programme $36,931,047 (85.0%), management and general $2,447,057 (5.6%), fundraising $4,066,071 (9.4%), total $43,444,175. The prior year was 85.4% / 4.9% / 9.7%, so the ratios are stable.',
    'Programme spending breaks down as salaries and benefits $28,308,075; grants to other organisations $2,656,751; travel and meals $2,067,075; training and conferences $1,104,659; payments to affiliates $1,127,324; office expenses $481,322; outside services $365,347; other fieldworker expenses $273,148; depreciation $163,106; all other $384,240.',
    'Contributions for the year were $43,539,635, of which $41,174,825 — 94.6% — was donor-restricted. That is what a worker-support model looks like on a financial statement: donors give to a person, not to the organisation.',
    'Net assets at year end were $29,378,812, against annual expenses of $43,444,175.',
    'This page exists partly to be divided into other pages. The $64,227.91 per US-sent worker-year is the benchmark we use on the Asia Harvest cause, where a supported evangelist-year costs $832.99. Neither figure invalidates the other: the comparison measures two different jobs, and the caveat on that page explains why.',
    "The audit was issued by CapinCrouse LLP with subsequent events evaluated through 22 September 2025. Frontiers' own accountability page says the annual audit is typically available by late September, and it was.",
  ],
  siteUrl: 'https://frontiersusa.org/',
  giveUrl: 'https://frontiersusa.org/donate/',
  sources: [
    {
      id: 'fr-site',
      label: 'Homepage',
      url: 'https://frontiersusa.org/',
      publisher: 'Frontiers USA',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'fr-mission',
      label: 'Our Mission',
      url: 'https://frontiersusa.org/mission/',
      publisher: 'Frontiers USA',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Source of the mission statement and of the recruit, train, send and serve description of the model.',
    },
    {
      id: 'fr-faith',
      label: 'Statement of Faith',
      url: 'https://frontiersusa.org/statement-of-faith/',
      publisher: 'Frontiers USA',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'fr-regions',
      label: 'Our Regions',
      url: 'https://frontiersusa.org/regions/',
      publisher: 'Frontiers USA',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: "Names the eight regions used as this cause's region list and claims teams in more than fifty countries. No country is identified.",
    },
    {
      id: 'fr-accountability',
      label: 'Financial Accountability',
      url: 'https://frontiersusa.org/accountability/',
      publisher: 'Frontiers USA',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Source of the ECFA membership date, the 9% fieldworker assessment fee, the 85 / 5 / 10 expense split and the statement that CapinCrouse audits the ministry annually.',
    },
    {
      id: 'fr-ar-25',
      label: '2024–2025 Annual Report',
      url: 'https://frontiersusa.org/annual-report/2025',
      publisher: 'Frontiers USA',
      documentType: 'annual-report',
      retrieved: '2026-09-18',
      fiscalYear: 'FYE June 2025',
      note: 'Source of the field summary: 575 long-term US-sent workers on the field, 66 sent this year, 128 US-led teams, 291 total Frontiers teams, 256 active church partnerships, 72 long-term applicants, 231 inquiry forms. The "Prayer for the Future" section still contains unreplaced Lorem Ipsum placeholder text.',
    },
    {
      id: 'fr-audit-25',
      label: 'Audited financial statements, years ended 30 June 2025 and 2024',
      url: 'https://frontiersusa.org/wp-content/media/Frontiers-USA-2025-FS.pdf',
      publisher: 'Frontiers USA',
      documentType: 'audited-financials',
      retrieved: '2026-09-18',
      fiscalYear: 'FYE June 2025',
      note: 'CapinCrouse LLP. Note 10 gives the ten-line functional expense allocation for both years and the joint-cost split of $5,028,441 between programme and fundraising. Contains no EIN, which is why ProPublica is cited for it.',
    },
    {
      id: 'fr-propublica',
      label: 'IRS record for Frontiers USA, EIN 95-3731505',
      url: 'https://projects.propublica.org/nonprofits/organizations/953731505',
      publisher: 'ProPublica Nonprofit Explorer',
      documentType: 'third-party',
      retrieved: '2026-09-18',
      note: 'Source of the EIN, which the audit itself does not print. Structured filing data stops at the year ended June 2020, and the audit records that the IRS reclassified Frontiers as an association of churches in August 2021, so no current return exists to check the audit against.',
    },
  ],
};
