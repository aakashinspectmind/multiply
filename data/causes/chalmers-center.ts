import type { Cause } from '@/lib/types';

export const chalmersCenter: Cause = {
  slug: 'chalmers-center',
  name: 'The Chalmers Center',
  legalName: 'The Chalmers Center',
  ein: '27-2341083',
  tagline:
    'Writes the savings-group and money-management curricula that other ministries deliver — and most of its own programmes are in the United States.',
  category: 'livelihood',
  countries: ['Nigeria', 'Philippines', 'Togo', 'United States'],
  whatTheyDo:
    'The Chalmers Center does not run savings groups. It writes the curriculum other people run, trains their facilitators, and publishes the books and research behind it. Its RESTORE curriculum is the savings-group material used by Five Talents across eastern and central Africa and by International Care Ministries in the Philippines; its Faith & Finances, Work Life and benevolence-ministry material is used by American churches. Brian Fikkert and Steve Corbett wrote When Helping Hurts here in 2009, which is the book that made "dependency" a word Christian relief workers argue about. It has been at this since 1999.',
  accreditations: [{ label: 'ECFA accredited', sourceId: 'cc-finance' }],
  verification: 'documents-reviewed',
  biblicalAlignment: {
    mandate:
      'Work is older than the fall: the man was placed in the garden to work it before anything went wrong, so a ministry that restores someone to productive work is restoring something original rather than inventing a kindness. Paul refused to be a burden and told the idle in Thessalonica to eat their own bread, which is a hard saying aimed at people who could work and would not — not at the poor who cannot. And the whole Chalmers model is 2 Timothy 2:2 applied to poverty work: teach the people who will teach others, and do not try to do the teaching yourself.',
    scriptures: [
      {
        ref: 'Genesis 2:15',
        text:
          'The LORD God took the man and put him in the garden of Eden to work it and keep it.',
      },
      {
        ref: '2 Thessalonians 3:10–12',
        text:
          'If anyone is not willing to work, let him not eat. For we hear that some among you walk in idleness, not busy at work, but busybodies. Now such persons we command and encourage in the Lord Jesus Christ to do their work quietly and to earn their own living.',
      },
      {
        ref: '2 Timothy 2:2',
        text:
          'And what you have heard from me in the presence of many witnesses entrust to faithful men, who will be able to teach others also.',
      },
    ],
    doctrine: {
      label:
        'Has adopted the Lausanne Covenant as its statement of belief, and lists commitments to the inerrancy and ultimate authority of the Bible, living out faith under the authority of God\'s local church, God\'s love for people in poverty, prayer, and the gifts and fruit of the Holy Spirit. The clearest doctrinal statement of any ministry in this category.',
      sourceId: 'cc-about',
    },
    concerns: [
      'This is the weakest geographic case in this category and we are not going to hide it. Chalmers\' own annual report names three countries outside the United States — Nigeria, Togo and the Philippines — in the entire document. Faith & Finances, Work Life and the benevolence-ministry material are for American churches, the staff and the curriculum development are in Georgia, and the cost base the donor is funding is a high-income one. The overseas leverage is real but it is second-hand: it happens when a partner like Five Talents or ICM delivers the curriculum at its own expense.',
      'That second-hand leverage creates a double-counting problem for a donor. Five Talents\' chief executive says in Chalmers\' own report that "almost all" of the 30,000-plus members Five Talents serves each year use RESTORE. Those members appear in Five Talents\' impact numbers and, as far as we can tell, in Chalmers\' "people reached" figure too. Give to both and you may be told about the same savings group twice.',
      'Savings-group training is one thing; the underlying model still involves members lending to each other at interest they set, and members who cannot repay owe their neighbours. The randomised evidence on credit for the poor is mixed at best. Chalmers is more careful about this than most — its whole reputation rests on arguing that badly designed help harms people — but its published material celebrates savings totals rather than reporting who fell out of a group and why.',
      'The leading numbers are lifetime totals: 3,400,000+ people reached and 16,000+ trained since 1999. A cumulative figure spanning 27 years, built from counts reported by third-party partners, is close to uncheckable.',
    ],
  },
  roi: {
    levers: ['multiplication', 'digital-distribution', 'existing-network'],
    reason:
      'The mechanism here is not a low local cost base — Chalmers spends its money in the United States. It is that curriculum is the cheapest thing in the world to copy. Chalmers writes RESTORE once and Five Talents runs it across eastern and central Africa on Five Talents\' budget, ICM runs it across the Philippines on ICM\'s budget, and a local church in Togo runs it with volunteers. ICM\'s figures in Chalmers\' own report are the clearest illustration we have found of what that compounding looks like in practice: 176,793 people put through RESTORE savings groups since 2014, with 5,362 groups still active and holding more than $9.8 million of their own savings. Chalmers paid for none of that $9.8 million and employed none of those facilitators. That is the honest shape of the return — and its limit, because the same structure means a donor to Chalmers cannot trace their dollar to any particular group.',
  },
  costModel: {
    outcome: 'person trained to run the material',
    outcomePlural: 'people trained to run the material',
    spend: {
      amount: 2392369,
      basis: 'program-services',
      fiscalYear: '2025',
      sourceId: 'cc-audit-25',
    },
    count: {
      amount: 1000,
      label: 'people trained in the year',
      fiscalYear: '2025',
      sourceId: 'cc-ar-25',
    },
    attribution: 'all-program-spend',
    caveat:
      'A ceiling twice over. Chalmers publishes the count as "1,000+", which is a floor, so dividing by exactly 1,000 gives the largest cost the published figure allows — the real number is lower and we cannot say how much lower. And the whole program budget is charged to training even though the same money wrote curricula, ran a research and applied-learning department, published books and supported an ambassadors network. Most importantly, this is the cost of training a facilitator, largely in the United States, not the cost of reaching a poor household. The households are reached later, by someone else, on someone else\'s budget.',
    alternates: [
      {
        label: 'people reached in 2025',
        count: 290000,
        note:
          'The other end of the range, and about $8 a head. But this counts people reached by partner organisations delivering Chalmers material at their own cost, so it charges Chalmers\' budget with work Chalmers did not pay for. Neither this nor the training figure is the cost of anything simple.',
      },
    ],
  },
  ministryClaims: [
    {
      quote: 'The Chalmers Center has adopted the Lausanne Covenant as our statement of belief.',
      sourceId: 'cc-about',
    },
    {
      quote:
        'Since first integrating RESTORE in 2014, ICM has helped 176,793 people participate in savings groups. Today, 5,362 active groups collectively hold more than $9.8 million in savings.',
      sourceId: 'cc-ar-25',
    },
    {
      quote:
        'Each year, Five Talents serves more than 30,000 members of savings groups across eastern and central Africa, and almost all members learn, earn, save and invest together thanks to Chalmers\' RESTORE curriculum.',
      sourceId: 'cc-ar-25',
    },
    {
      quote: 'Since its launch in 2013, the program has reached over 25,000 people.',
      sourceId: 'cc-ar-25',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 3,
      note:
        'The Lausanne Covenant as a statement of belief, explicit commitment to biblical inerrancy and to working under the authority of the local church, and a theology of poverty that is the organisation\'s actual product rather than a preface to it. Nothing here is implied.',
    },
    localLeadership: {
      value: 1,
      note:
        'Curriculum is written, staffed and governed in Georgia, and the largest programmes serve American churches. Delivery overseas is entirely by local partners, which is the right structure, but the money and the authorship sit in a high-income country and Chalmers does not publish any national leadership of its own.',
    },
    financialTransparency: {
      value: 2,
      note:
        'ECFA accredited, with audited statements, Form 990s and a ministry report posted for every year from 2016 to 2025 — an unusually complete run. Marked down because the link labelled "2025 990" serves a file named for 2024, and the functional expense breakdown does not separate the US programmes from the international ones, which is the split a donor most needs here.',
    },
    outcomeEvidence: {
      value: 1,
      note:
        '"People reached" is never defined, the headline totals are lifetime rather than annual, and the annual figures are published as round numbers with a plus sign — 290,000 and 1,000+ — which cannot be reconciled to anything. Most of the count is generated by third-party partners using Chalmers material, so Chalmers is reporting other organisations\' activity.',
    },
    costEvidence: {
      value: 2,
      note:
        'Audited program spending and an annual count both exist for the same fiscal year, which is more than most ministries manage. But the count is a floor published as "1,000+", so the quotient is only an upper bound, and the two plausible denominators are 290 times apart.',
    },
  },
  notVerified: [
    'What "people reached" means. It is the number Chalmers leads with and there is no definition anywhere — whether it counts a person who attended one session, a person who completed a course, or a household member of someone who did.',
    'How much of the $2,392,369 of program spending went to work outside the United States. The audit\'s functional breakdown does not split domestic from international, and the annual report names only Nigeria, Togo and the Philippines.',
    'Whether the 1,000+ trained in 2025 are facilitators who went on to run a group. Training delivered is not a group started.',
    'The link labelled "2025 990" on the finances page points at a file named for 2024. We could not confirm which year\'s return it actually is, so the 990 is not cited as a source here.',
    'The 176,793 people and $9.8 million in savings are International Care Ministries\' figures, quoted by Chalmers. We did not obtain ICM\'s own documents and cannot confirm either number.',
    'Whether the people counted in Chalmers\' "reached" figure are also counted in Five Talents\' and ICM\'s published figures. We believe they are, and no ministry involved says so.',
    'The lifetime totals — 3,400,000+ reached, 16,000+ trained, 2,600,000+ people in poverty reached — are not reconstructible from anything published. They also appear on a designed infographic spread rather than in a financial table.',
  ],
  notes: [
    'The $9.8 million that ICM\'s active savings groups hold is the members\' money. It was saved by poor Philippine households out of their own income; no donor bought it and it is not a return on a gift. What a donor to Chalmers arguably bought is a piece of the training that made group saving possible, delivered by ICM staff Chalmers does not pay. Both halves of that sentence matter.',
    'Program services were $2,392,369 of $3,571,053 total expenses in the year to June 2025, so administration and fundraising together took about 33% — the highest support ratio of the ministries in this category. For a research-and-curriculum organisation that is less damning than it sounds, but it is real.',
    'This is a supplier, not a service provider. If you want your money spent in a poor country, give to a ministry that delivers; if you want the thing they all use to be well made, give here. It is a legitimate choice and it is not the same choice.',
  ],
  siteUrl: 'https://chalmers.org/',
  giveUrl: 'https://chalmers.org/donate/',
  sources: [
    {
      id: 'cc-about',
      label: 'About the Chalmers Center',
      url: 'https://chalmers.org/about-us/',
      publisher: 'The Chalmers Center',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note:
        'Source of the "What We Believe" statement adopting the Lausanne Covenant, and of the history back to 1999 and the 2009 publication of When Helping Hurts.',
    },
    {
      id: 'cc-finance',
      label: 'Finances',
      url: 'https://chalmers.org/finance/',
      publisher: 'The Chalmers Center',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note:
        'Lists ministry reports, Form 990s and financial statements for 2016 through 2025, confirms ECFA accreditation and the EIN. The path is /finance, not /financials, which 404s.',
    },
    {
      id: 'cc-audit-25',
      label: 'Financial statements for the year ended 30 June 2025',
      url: 'https://chalmers.org/wp-content/uploads/2026/05/CCED-25-FS-Final.pdf',
      publisher: 'The Chalmers Center',
      documentType: 'audited-financials',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note:
        'Program services $2,392,369, administrative $543,340, fundraising $635,344, total $3,571,053. No split between domestic and international programmes.',
    },
    {
      id: 'cc-ar-25',
      label: '2025 Annual Ministry Report',
      url: 'https://chalmers.org/wp-content/uploads/2026/05/CC_AMR_FY25_FINAL_DIGITAL.pdf',
      publisher: 'The Chalmers Center',
      documentType: 'annual-report',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note:
        'Source of the 2025 counts (290,000 people reached, 1,000+ people trained) and the lifetime totals, which appear on a designed infographic spread rather than in a table. Also the source of the Five Talents and International Care Ministries quotes, both of which are partner statements Chalmers reproduces.',
    },
  ],
};
