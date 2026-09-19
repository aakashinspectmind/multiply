import type { Cause } from '@/lib/types';

export const missionAviationFellowship: Cause = {
  slug: 'mission-aviation-fellowship',
  name: 'Mission Aviation Fellowship',
  legalName: 'Mission Aviation Fellowship',
  ein: '95-1920983',
  tagline:
    'Forty-two aircraft flying missionaries, doctors and Bible translators into places with no roads — and it counts every flight.',
  category: 'logistics',
  countries: ['DR Congo', 'Ecuador', 'Haiti', 'Indonesia', 'Lesotho', 'Liberia', 'Mozambique'],
  whatTheyDo:
    'MAF flies small aircraft into places where roads either do not exist or take days to travel. In fiscal year 2024 its fleet of 42 aircraft made 16,477 flights carrying missionaries, evangelists, doctors, relief workers, Bible translators and teachers, and delivered over 4.3 million pounds of cargo; more than 280 organisations used the service. It also runs technology and communications work for remote ministries, and in Indonesia it started the Papua Hope School to train Papuan pilots and mechanics. Aviation is the whole model: MAF does not do the evangelism, medicine or translation itself, it is the logistics layer underneath other people’s work.',
  accreditations: [
    { label: 'ECFA accredited', sourceId: 'maf-accountability' },
    {
      label: 'International Association of Missionary Aviation',
      sourceId: 'maf-accountability',
    },
    { label: 'Mission Safety International', sourceId: 'maf-accountability' },
    { label: 'Accord Network', sourceId: 'maf-accountability' },
    { label: 'Missio Nexus', sourceId: 'maf-accountability' },
    {
      label: 'National Business Aviation Association',
      sourceId: 'maf-accountability',
    },
  ],
  verification: 'documents-reviewed',
  biblicalAlignment: {
    mandate:
      'Paul’s question in Romans is not only how people will hear but how anyone will get there — “how are they to preach unless they are sent?” Sending is a physical act, and in the Congo basin or highland Papua it is a flight or it is a two-week walk. MAF’s own statement of faith puts the duty to preach the gospel to every creature on the whole church, and its work is the unglamorous half of that duty: getting the preacher, the translator, the surgeon and the medicine to the end of the road and past it. The same aircraft carry the sick out, which is the Matthew 25 half.',
    scriptures: [
      {
        ref: 'Romans 10:14–15',
        text: 'How are they to hear without someone preaching? And how are they to preach unless they are sent? As it is written, “How beautiful are the feet of those who preach the good news!”',
      },
      {
        ref: 'Mark 16:15',
        text: 'Go into all the world and proclaim the gospel to the whole creation.',
      },
      {
        ref: 'Matthew 25:36',
        text: 'I was sick and you visited me, I was in prison and you came to me.',
      },
    ],
    doctrine: { label: 'Statement of Faith', sourceId: 'maf-sof' },
    concerns: [
      'Fundraising cost $10,315,192 in fiscal year 2024 — 16.4% of total expenses, the highest share of any cause in this batch. Aviation is capital-intensive and expensive to raise money for, but a donor should see that roughly one dollar in six of everything MAF spent went to asking for more.',
      'MAF is the most expensive ministry on this site per unit delivered, and the reason is structural: $37,338,683 of its $63,018,038 of expenses is salaries and benefits, much of it for pilots and mechanics sent from high-income countries and paid accordingly. The low-cost-base advantage that makes a dollar go further in Liberia does not apply to most of this budget. A flight is worth what it is worth — you cannot walk a surgeon into a roadless valley — but nobody should give here expecting the arithmetic of a local worker.',
      'The Form 990 and the audited statements do not agree, and neither explains the difference. The 990 reports $43,443,617 of programme spending; the audit, which consolidates MAF and its affiliates, reports $48,574,725. A donor reading one document and then the other finds $5.1 million unaccounted for, and the cost per flight moves from $2,637 to $2,948 depending on which they picked up first.',
      'MAF’s 2025 report relays a partner’s account that after each JESUS film showing “roughly 10-12 people take steps to pursue a relationship with God”. We quote it because MAF published it, and we do not count it. Steps toward faith are not a measurable outcome, no one can audit them, and this directory will not put a price on one.',
    ],
  },
  roi: {
    levers: ['durable-asset', 'existing-network'],
    reason:
      'Two levers, and we are deliberately not claiming the usual ones. An aircraft is bought once and flies for decades, and MAF’s 42 of them already exist — so the marginal gift buys flight hours, fuel and maintenance rather than capital. And it is pure network leverage: over 280 organisations use the service, so one fleet carries the field staff of hundreds of other ministries that could never justify an aeroplane each. What we will not claim is a local cost base or local workers. MAF’s largest expense by far is salaries for people it sends, so most of a dollar given here is spent at high-income wages even though the work happens in the Congo, Papua and Haiti. The value is access, not cheapness.',
  },
  costModel: {
    outcome: 'flight',
    outcomePlural: 'flights',
    spend: {
      amount: 43443617,
      basis: 'program-services',
      fiscalYear: '2024',
      sourceId: 'maf-990-24',
    },
    count: {
      amount: 16477,
      label: 'flights',
      fiscalYear: '2024',
      sourceId: 'maf-990-24',
    },
    attribution: 'all-program-spend',
    caveat:
      'An upper bound. Both halves come out of the same line of the same Form 990, which is the best pairing available, but that line is everything MAF does — it includes $3,238,489 of grants to other organisations, technology and communications programmes, disaster response, and the Papua Hope School, none of which is a flight. It also generated $9,296,558 of its own programme revenue, mostly fees charged to the ministries flying; net of that, a flight cost MAF’s donors about $2,072. And the flight count is exact while the passenger and cargo figures around it are rounded — “over 46,000” passengers, “over 4.3 million” pounds, “about 45,800” days of travel saved — so only the flight figure is precise enough to divide. Read this as the cost of running all of MAF for a year per flight it flew.',
    alternates: [
      {
        label: 'passengers carried',
        count: 46000,
        note: 'About $944 a passenger. MAF reports “over 46,000”, so the true figure is higher and the real cost per passenger is lower. A passenger is also not a person — the same missionary flying in and out counts twice.',
      },
    ],
  },
  ministryClaims: [
    {
      quote:
        'IN FISCAL YEAR 2024, THE MAF FLEET OF 42 AIRCRAFT EXECUTED 16,477 FLIGHTS IN SUPPORT OF MISSIONARIES, EVANGELISTS, DOCTORS, RELIEF WORKERS, BIBLE TRANSLATORS, AND TEACHERS CONDUCTING MINISTRY IN REMOTE AREAS. MAF TRANSPORTED OVER 46,000 PASSENGERS AND DELIVERED OVER 4.3 MILLION POUNDS OF CARGO, SAVING ABOUT 45,800 DAYS OF TRAVEL TIME BY FOOT OR GROUND TRANSPORTATION. OVER 280 ORGANIZATIONS USED MAF’S SERVICES IN 2024.',
      sourceId: 'maf-990-24',
    },
    {
      quote: '"Mission Aviation Fellowship" or "MAF" refers to MAF-US only, as do all the numbers.',
      sourceId: 'maf-highlights-25',
    },
    {
      quote:
        'After each showing, roughly 10-12 people take steps to pursue a relationship with God.',
      sourceId: 'maf-highlights-25',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 3,
      note: 'A full evangelical statement of faith is published, ending on the church’s duty to preach the gospel to every creature, and the vision stated in MAF’s own tax filing is to “SEE ISOLATED PEOPLE CHANGED BY THE LOVE OF CHRIST”. The flights themselves are logistics and much of the cargo is medical — this is a ministry serving gospel work rather than doing it — but there is nothing ambiguous about whose work it is serving.',
    },
    localLeadership: {
      value: 1,
      note: 'Schedule F reports 13 foreign offices and 193 employees and agents overseas, which is a real field presence rather than a grant-making shell. But the model is sending: $37,338,683 of salaries and benefits dominates the budget, and pilots and aircraft mechanics are largely expatriate. The Papua Hope School exists specifically to train Papuan pilots and mechanics, which is the right direction and is one school.',
    },
    financialTransparency: {
      value: 2,
      note: 'MAF posts both a complete Form 990 and audited consolidated statements on its own site, and the 990’s Part III narrative is unusually specific for a federal filing. Held at 2 because the two documents report programme spending $5.1 million apart with no reconciliation, and because the annual report mixes MAF-US figures with a map of the wider global MAF family on the same spread.',
    },
    outcomeEvidence: {
      value: 2,
      note: 'The flight count is exact, is for a stated fiscal year, and is filed with the IRS under penalty of perjury — better evidence than most ministries offer. Marked down because a flight is an input to somebody else’s ministry rather than an outcome in itself, the passenger and cargo figures are rounded, and no one outside MAF has audited the flight logs.',
    },
    costEvidence: {
      value: 2,
      note: 'Both halves of the division sit in the same paragraph of the same document, which is as clean as this gets. Marked down because the numerator covers grants and non-aviation programmes as well as flying, and because the audit would give a materially different answer — $2,948 a flight instead of $2,637 — with nothing to say which is right.',
    },
  },
  notVerified: [
    'Which entity the numbers describe. The 2025 report states that “MAF” means MAF-US only and that all its numbers do too, yet the map on the same spread lists Canada, Mexico, Guatemala, Suriname, Brazil, Mali, Guinea, Chad, South Sudan, Uganda, Tanzania, Angola, Madagascar, South Africa, Timor Leste, Papua New Guinea and Arnhem Land alongside the seven countries MAF-US narrates. A donor cannot tell which countries their gift reaches.',
    'Why the Form 990 and the audit disagree by $5.1 million on programme spending. The audit consolidates “MAF and Affiliates”, which is presumably the reason, but neither document reconciles the two figures.',
    'What is inside the single programme line. MAF reports all of its work — flying, technology, disaster response, a school in Papua and $3,238,489 of grants — as one line on the 990, so no share of the cost can be attached to the flights specifically.',
    'What the flight fees cover. Programme revenue of $9,296,558 comes largely from charging the ministries that fly, but nothing published shows the rate, or how much of a flight’s cost the passenger pays versus the donor.',
    'How much of the fleet spending bought future capacity rather than this year’s flights. Aircraft purchases, overhauls and hangars are long-lived assets and are not separated out.',
    'Who receives the $3,238,489 of grants. Schedule F shows grantmaking in Sub-Saharan Africa, East Asia and the Pacific, South Asia, North America and the Caribbean, but no recipient is named.',
    'Whether 16,477 flights in fiscal 2024 is comparable to previous years. MAF publishes no multi-year flight series, so a donor cannot tell whether activity is rising or falling against a budget that grew from $56,830,220 to $63,018,038.',
    'What happened as a result of the flights. MAF counts what it moved, which is the honest thing for a logistics ministry to count, and the value of the cargo and passengers is a claim about other organisations’ work that nobody has aggregated.',
  ],
  notes: [
    'This is the most expensive unit on the site and it may still be the right gift. The question is not whether $2,637 is more than $287, it is whether a surgeon, a translator or a vaccine box can reach the place at all. MAF says the flights saved about 45,800 days of travel by foot or ground — roughly 125 years of human time in one year of flying.',
    'The Papua Hope School is the most interesting thing in MAF’s 2025 report and it is not aviation. Started with eight first-graders in 2008 to train Papuan pilots and mechanics, it opened the 2025 school year with 430 students from preschool through 12th grade, and the original eight graduated in 2020. It is also a programme cost sitting inside the flight-cost denominator.',
    'Audited consolidated expenses for fiscal 2024 were $48,574,725 of programme, $4,128,121 of management and general and $10,315,192 of fundraising, totalling $63,018,038, against $56,830,220 the year before.',
    'Fifteen countries of MAF-US field work are described in the 2025 report; the seven listed on this page — DR Congo, Ecuador, Haiti, Indonesia, Lesotho, Liberia and Mozambique — are the ones with a narrated MAF-US flight programme.',
  ],
  siteUrl: 'https://maf.org/',
  giveUrl: 'https://maf.org/donate/',
  sources: [
    {
      id: 'maf-site',
      label: 'Homepage',
      url: 'https://maf.org/',
      publisher: 'Mission Aviation Fellowship',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'maf-sof',
      label: 'Statement of Faith',
      url: 'https://maf.org/about/statement-of-faith/',
      publisher: 'Mission Aviation Fellowship',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Full evangelical statement, including the inerrancy of Scripture in the original writings and the church’s duty to preach the gospel to every creature.',
    },
    {
      id: 'maf-accountability',
      label: 'Accountability',
      url: 'https://maf.org/about/accountability/',
      publisher: 'Mission Aviation Fellowship',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Lists ECFA, the International Association of Missionary Aviation, Mission Safety International, the Accord Network, Missio Nexus and the National Business Aviation Association.',
    },
    {
      id: 'maf-where',
      label: 'Where We Go',
      url: 'https://maf.org/where-we-go/',
      publisher: 'Mission Aviation Fellowship',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'maf-report',
      label: 'Financial and Ministry Reports',
      url: 'https://maf.org/report/',
      publisher: 'Mission Aviation Fellowship',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Posts Form 990s and audited statements back to 2021, and embeds the ministry highlights report.',
    },
    {
      id: 'maf-990-24',
      label: '2024 Form 990',
      url: 'https://maf.org/wp-content/uploads/2024-Mission-Aviation-Fellowship-990-Public-Copy.pdf',
      publisher: 'Mission Aviation Fellowship',
      documentType: 'form-990',
      retrieved: '2026-09-18',
      fiscalYear: '2024',
      note: 'Part III reports a single programme line: expenses $43,443,617 including grants of $3,238,489, revenue $9,296,558, with the 16,477 flights and 42 aircraft in the narrative. Schedule F reports 13 foreign offices, 193 employees and agents, and $18,552,457 of foreign expenditure.',
    },
    {
      id: 'maf-audit-24',
      label: '2024 audited consolidated financial statements, MAF and Affiliates',
      url: 'https://maf.org/wp-content/uploads/MAF-2024-FS.pdf',
      publisher: 'Mission Aviation Fellowship',
      documentType: 'audited-financials',
      retrieved: '2026-09-18',
      fiscalYear: '2024',
      note: 'Programme $48,574,725, management and general $4,128,121, fundraising $10,315,192, total $63,018,038, of which $37,338,683 is salaries and benefits. Programme spending here is $5.1 million higher than the Form 990 reports.',
    },
    {
      id: 'maf-highlights-25',
      label: '2025 Ministry Highlights',
      url: 'https://maf.org/wp-content/uploads/2025_Ministry_Highlights_12.pdf',
      publisher: 'Mission Aviation Fellowship',
      documentType: 'annual-report',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note: 'A designed report, mostly narrative, with the footnote that all figures refer to MAF-US only. Source of the Papua Hope School enrolment of 430 students in 2025 and of the JESUS film account we quote but do not count. Several headline statistics in it are set as graphics; we took the figures used on this page from printed text and from the Form 990 instead.',
    },
  ],
};
