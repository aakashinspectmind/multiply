import type { Cause } from '@/lib/types';

export const everyHomeForChrist: Cause = {
  slug: 'every-home-for-christ',
  name: 'Every Home for Christ',
  legalName: 'World Literature Crusade',
  tagline:
    'Funds local believers to take printed Scripture to every home in their own country, house by house.',
  category: 'scripture',
  countries: ['Global', 'DR Congo'],
  whatTheyDo:
    'Every Home for Christ funds local teams in 177 countries to work through their own neighbourhoods systematically, house by house, handing out printed gospel literature and Scripture and following up by correspondence course, news bulletin and connection to a local church. Almost none of the money is spent by the American office: 94% of the Evangelism Outreach programme line leaves as grants to the national ministries that do the walking. The organisation was founded in 1946 and still files under its original name, World Literature Crusade.',
  accreditations: [
    {
      label: 'ECFA charter member since 1 March 1980',
      sourceId: 'ehc-financials',
    },
  ],
  verification: 'documents-reviewed',
  biblicalAlignment: {
    mandate:
      'The sending is the command, and the house is the unit Jesus used when he sent people out — go to a town, go to a house, and if they receive you, stay. This ministry has taken that literally and industrially. The promise it rests on is that the word does its own work once it has left the hand; the risk it runs is treating the leaving of the hand as the outcome.',
    scriptures: [
      {
        ref: 'Romans 10:14–15',
        text: 'And how are they to believe in him of whom they have never heard? And how are they to hear without someone preaching? And how are they to preach unless they are sent?',
      },
      {
        ref: 'Isaiah 55:11',
        text: 'So shall my word be that goes out from my mouth; it shall not return to me empty, but it shall accomplish that which I purpose.',
      },
      {
        ref: 'Luke 10:5–7',
        text: 'Whatever house you enter, first say, "Peace be to this house!" … And remain in the same house, eating and drinking what they provide.',
      },
      {
        ref: 'Acts 5:42',
        text: 'And every day, in the temple and from house to house, they did not cease teaching and preaching that the Christ is Jesus.',
      },
    ],
    concerns: [
      'The headline unit adds households and individuals together. The 261,118,919 Gospel Presentations reported for 2025 are 148.1 million homes reached plus 103.7 million in public plus 9.3 million via internet. A home is not a person and an internet impression is neither, and the report sums all three into one number.',
      'The larger figure the ministry now leads with, 656,061,120 "Potential People Reached", is a model, not a count. The report says it is calculated from "a host of related metrics such as average household size in each nation, gospel materials shared, and event attendance". It is an estimate of how many people might have encountered something, built on top of another estimate.',
      'Every Home also reports 1,695,850 new individuals connected with a church or Christ group and 41,221 new Christ groups started in 2025, and describes people who "respond to Christ". Conversions, decisions and discipleship are not outcomes this directory counts, and we do not treat any of those figures as measurable.',
      '94% of the Evangelism Outreach programme line — $45,766,933 of $48,520,377 — is grants. The audit names no grantee. The ministry says it is active in more than 35 "Creative Access" nations whose activity it cannot disclose for security reasons, which is an honest reason and still means a donor cannot follow the money.',
      'Literature handed to a household in a poor community by a team offering practical aid in the same visit — the report records 1,106,602 individuals receiving gifts or aid in 2025 — raises the question of whether a response is to the gospel or to the help. The ministry does not address it.',
    ],
  },
  roi: {
    levers: ['local-workers', 'local-cost-base', 'existing-network', 'volunteer-leverage'],
    reason:
      'Almost the whole budget is a grant to someone who already lives there. The American office spends $2.6 million of the $48.5 million Evangelism Outreach line on its own salaries, travel and technology; the remaining 94% goes to national ministries whose workers are paid, fed and transported in their own economies. Printing happens locally, the last mile is walked by local believers and church volunteers, and the marginal cost of one more house on the route is the tract. This is why the cost per unit is measured in cents. It is also why the unit is so weakly defined — nobody counting 148 million doorsteps is counting them carefully.',
  },
  costModel: {
    outcome: 'Bible or New Testament put in someone’s hands',
    outcomePlural: 'Bibles and New Testaments put in people’s hands',
    spend: {
      amount: 48520377,
      basis: 'program-services',
      fiscalYear: '2025',
      sourceId: 'ehc-audit-25',
    },
    count: {
      amount: 6314872,
      label: 'Bibles and New Testaments distributed',
      fiscalYear: '2025',
      sourceId: 'ehc-ar-25',
    },
    attribution: 'single-program-line',
    caveat:
      'We deliberately do not divide by the number Every Home for Christ leads with. Its headline unit is the Gospel Presentation, 261.1 million of them last year, which works out at 19 cents — but 148.1 million of those are homes visited rather than people met and 9.3 million are internet impressions, so the cheap figure is counting doorsteps. A Bible is the one unit here that is unambiguously a physical object handed to somebody, so it is the denominator we use, and it makes this figure a ceiling rather than a price: the same $48.5 million also left 306 million pieces of literature, visited those 148 million homes and gave 1,106,602 gifts of practical aid, and all of that cost is charged here to the Bibles alone. The true cost of a Bible is lower than $7.68 and the true cost of a person hearing is higher than 19 cents. Both ends are shown below.',
    alternates: [
      {
        label: 'Gospel Presentations (261,118,919)',
        count: 261118919,
        note: 'About 19 cents, and the figure the ministry advertises. The floor of the range, not the price: a Gospel Presentation is one instance of sharing the gospel by the ministry’s own definition, and most of them are a home reached rather than a person met.',
      },
      {
        label: 'outreach materials distributed (306,457,168)',
        count: 306457168,
        note: 'About 16 cents per item. An output count: materials leaving a warehouse, not materials read.',
      },
      {
        label: 'new Christ groups started (41,221)',
        count: 41221,
        note: 'About $1,177 per group. Published by the ministry, but a "Christ group" is undefined and its formation is a spiritual outcome rather than a delivered one, so we do not treat it as the unit.',
      },
    ],
  },
  ministryClaims: [
    {
      quote:
        'Simply, Gospel Presentations can be defined as the number of times we share the gospel. If an Every Home team visits a home and shares gospel literature, that is one Gospel Presentation.',
      sourceId: 'ehc-ar-25',
    },
    {
      quote:
        'We calculate Potential People Reached based on the total results of the many strategies used around the world and a host of related metrics such as average household size in each nation, gospel materials shared, and event attendance.',
      sourceId: 'ehc-ar-25',
    },
    {
      quote:
        'In 177 nations, we have local leaders who are committed to carrying Christ to everyone, everywhere.',
      sourceId: 'ehc-ar-25',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 3,
      note: 'The purpose is stated as carrying Christ to everyone, everywhere, in every generation; the programme is literally handing people the gospel. Nothing to infer.',
    },
    localLeadership: {
      value: 3,
      note: '94% of the evangelism budget is granted to national ministries, and the organisation describes itself as a network of local leaders in 177 nations rather than a sending agency. The American office is a funder and a fundraiser.',
    },
    financialTransparency: {
      value: 2,
      note: 'Audited statements for 2025 with a full functional expense table by natural classification are posted on the site, and the organisation has been an ECFA charter member since 1980. Marked down because no Form 990 is posted, no grantee is named behind $45.8 million of grants, and two LLCs became part of the reporting entity in 2025 without being described.',
    },
    outcomeEvidence: {
      value: 1,
      note: 'The counts are precise to the digit, single-year and published year on year, which is better sourcing than most. But the primary unit mixes homes with individuals with internet impressions, the ministry’s own preferred headline is an explicit estimate, and nobody outside the organisation has checked a doorstep.',
    },
    costEvidence: {
      value: 2,
      note: 'The division uses one named programme line from an audit against a same-year count from the annual report, which is as clean as the arithmetic gets here. Marked down because the unit is a composite the ministry defines loosely, and no cost per presentation is published by the ministry to check ours against.',
    },
  },
  notVerified: [
    'Whether 261 million people heard anything. 148.1 million of the presentations are homes reached, not individuals; 9.3 million are internet impressions. The ministry does not publish a person count, and the figure that looks like one — 656,061,120 Potential People Reached — is explicitly modelled from average household size.',
    'Whether the same home is counted again in a later year. The methodology is a systematic sweep of a territory, so repeat visits are part of the design, and nothing states how they are treated in the annual total.',
    'Who received $45,766,933 of grants. The audit names no national ministry. More than 35 of the 177 countries are described as Creative Access nations where activity cannot be disclosed; the other 140 are not named either, and no country list is published.',
    'What happened to the 1,695,850 people reported as newly connected with a church or Christ group. This is a spiritual result and we do not count it; the ministry publishes no follow-up rate, retention figure or independent check behind it.',
    'The relationship between practical aid and response. 1,106,602 individuals received gifts or aid in 2025 from the same teams doing the evangelism. No policy on separating the two is published.',
    'What the two LLCs created in 2025 are. The audit says Every Home became their sole member and that they hold real assets held for investment, then consolidates them without further description.',
    'No Form 990 is posted on the site, so there is no Schedule F or Schedule I to cross-check the grant flows against the audit.',
  ],
  notes: [
    'The legal filer is World Literature Crusade, founded 1946, trading as Every Home for Christ. Total 2025 expenses were $59,157,418, of which $53,764,282 was programme — 91%.',
    'This is the only cause here whose cost model uses a single named programme line rather than all programme spending, because the audit separates Evangelism Outreach from Prayer and Vision cleanly.',
    'Evangelism Outreach spending fell slightly in 2025, to $48,520,377 from $49,233,670, while fundraising rose to $2,018,735 from $1,764,887. The audit does not comment on either.',
    'Cumulative figures the ministry reports for 2019 through 2025: over 1.3 billion Gospel Presentations, 1.7 billion outreach materials, 35.7 million Bibles and New Testaments, 199,057 new Christ groups. Useful for scale; useless for a cost model, which is why only the 2025 figures are used above.',
    'The Democratic Republic of the Congo is the only country the 2025 report attaches to a described piece of work with a location label. Other countries appear as photo captions, which we did not treat as evidence of a programme.',
  ],
  siteUrl: 'https://everyhome.org/',
  giveUrl: 'https://everyhome.org/give/',
  sources: [
    {
      id: 'ehc-audit-25',
      label: 'Audited financial statements, year ended 31 December 2025',
      url: 'https://s47647.pcdn.co/wp-content/uploads/2026/05/EHC-2025-Audit-Report.pdf',
      publisher: 'Every Home for Christ',
      documentType: 'audited-financials',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note: 'Filed as World Literature Crusade dba Every Home for Christ. Evangelism Outreach $48,520,377 and Prayer and Vision $5,243,905 of $59,157,418 total expenses, with a natural-classification table showing $45,766,933 of grants inside Evangelism Outreach.',
    },
    {
      id: 'ehc-ar-25',
      label: '2025 Annual Report',
      url: 'https://everyhome.org/ehc_annualreport_2025/',
      publisher: 'Every Home for Christ',
      documentType: 'annual-report',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note: 'A 9 MB designed report. The 2025 counts quoted here are set as large graphics on the results spreads; the definitions of Gospel Presentations and Potential People Reached are printed as body text alongside them.',
    },
    {
      id: 'ehc-financials',
      label: 'Financial Integrity',
      url: 'https://everyhome.org/financial-integrity/',
      publisher: 'Every Home for Christ',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Links the 2025 audit and states charter membership of ECFA since 1 March 1980.',
    },
  ],
};
