import type { Cause } from '@/lib/types';

export const sat7: Cause = {
  slug: 'sat-7',
  name: 'SAT-7',
  legalName: 'SAT-7 North America',
  ein: '23-2964829',
  tagline:
    'Four satellite channels made in the Middle East by Middle Eastern Christians — and it counts conversations, not coverage.',
  category: 'media',
  countries: ['Middle East & North Africa', 'Egypt', 'Lebanon', 'Turkey', 'Iran'],
  whatTheyDo:
    'SAT-7 broadcasts four satellite television channels into the Middle East and North Africa — SAT-7 ARABIC, SAT-7 KIDS, SAT-7 PARS in Persian and SAT-7 TÜRK in Turkish — with studios in Egypt, Lebanon and Turkey and its international office in Cyprus. Around 90% of the satellite output is adapted for digital platforms and its own app, SAT-7 PLUS. Viewer Support Teams answer the responses that come back. Satellite reaches people no one can visit and no church building can hold, which is the point in a region SAT-7 says is around 96% non-Christian. The organisation is 14 independent legal entities; a US donor gives to SAT-7 North America, which passes most of its programme spending to SAT-7 International.',
  accreditations: [
    { label: 'ECFA accredited', sourceId: 'sat7-financials' },
    { label: 'Charity Navigator 4-star', sourceId: 'sat7-financials' },
    { label: 'Candid / GuideStar', sourceId: 'sat7-financials' },
    { label: 'BBB Wise Giving Alliance', sourceId: 'sat7-financials' },
    { label: 'Missio Nexus member', sourceId: 'sat7-financials' },
  ],
  verification: 'documents-reviewed',
  biblicalAlignment: {
    mandate:
      'Hearing has to come before believing, and someone has to be sent. In countries where a church cannot be built, a Bible is contraband and a convert can be prosecuted, a satellite signal is one of the few ways the sending can still happen — and SAT-7’s is sent by Christians who already live there, which is the pattern in Acts rather than an import. The children’s channel and the literacy programming are the second half of the mandate: teaching, not only announcing.',
    scriptures: [
      {
        ref: 'Romans 10:14',
        text:
          'How are they to believe in him of whom they have never heard? And how are they to hear without someone preaching?',
      },
      {
        ref: 'Mark 16:15',
        text: 'Go into all the world and proclaim the gospel to the whole creation.',
      },
      {
        ref: 'Matthew 28:20',
        text:
          'Teaching them to observe all that I have commanded you. And behold, I am with you always, to the end of the age.',
      },
    ],
    doctrine: { label: 'Statements of Faith', sourceId: 'sat7-about' },
    concerns: [
      'The viewers are the ones taking the risk. In Iran a satellite dish is illegal, and across much of the region a person who telephones a Christian channel, downloads its app or leaves a comment under their own name can be exposed to their family, their employer or the state. SAT-7 counts 75,100 conversations as a good year, and each one of those was a decision by someone with more to lose than the donor paying for the signal. Nothing published tells us what SAT-7 does to protect those contacts, how long it keeps them, or where the records live.',
      'Three per cent of income is “Governmental funding”, and the annual report refers to “ongoing government-funded projects”. For a Christian broadcaster that is a real question rather than a technicality: government money usually comes with content conditions. SAT-7 does not say which governments, which projects, or what was agreed.',
      'A US donor is not funding the broadcaster directly. SAT-7 North America spent $13,884,347 in 2025 and $9,646,836 of that — 69% of everything it spent — went to SAT-7 International as grants and expenses paid on its behalf. The audit also discloses that SAT-7 International can suspend or eliminate SAT-7 NA’s right to use the SAT-7 name under their joint ministry agreement. The American entity raises money for a broadcaster it does not control, which is the right structure for local leadership and worth understanding before giving.',
    ],
  },
  roi: {
    levers: ['local-workers', 'local-cost-base', 'existing-network', 'digital-distribution'],
    reason:
      'SAT-7 says 80% of its programmes are made by local Christians, and the studios are in Egypt, Lebanon and Turkey rather than in the West — Egypt’s income per person is roughly 27 times below the United States, so a production hour costs a fraction of a US production hour. The channels, satellite capacity and app already exist, so a gift buys programming rather than infrastructure. And the marginal cost of one more viewer on a satellite footprint is zero, which is the genuine economic advantage of broadcast — the same property that produces the penny-per-soul claims we refuse elsewhere. The honest version of that advantage is on this page: divide by something you actually counted and the number comes out at $287, not a fraction of a cent.',
  },
  costModel: {
    outcome: 'conversation with a viewer',
    outcomePlural: 'conversations with viewers',
    spend: {
      amount: 21574000,
      basis: 'total-expenses',
      fiscalYear: '2025',
      sourceId: 'sat7-ar-25',
    },
    count: {
      amount: 75100,
      label: 'conversations with viewers',
      fiscalYear: '2025',
      sourceId: 'sat7-ar-25',
    },
    attribution: 'all-program-spend',
    caveat:
      'An upper bound, and the widest one we could have chosen. The numerator is every dollar SAT-7 spent worldwide in 2025 across all four channels, all 14 legal entities, three regional studios and the Cyprus office — including USD 0.3 million that bought fixed assets rather than programming, and gifts-in-kind that no donor paid for. The denominator counts only the people who contacted SAT-7 and had a conversation with a Viewer Support Team. Almost everyone who watches never writes in, so the vast majority of the spending produced programming for people this division ignores. It is also a response, not a person: SAT-7 does not say whether one viewer in touch repeatedly counts once or several times. Read this as the price of running the whole broadcaster for a year per person who answered back — which is a deliberately conservative way to look at it, and the only one we can source.',
    alternates: [
      {
        label: 'viewers offered spiritual support',
        count: 20700,
        note:
          'A narrower response count from the same page, and $1,042 each. SAT-7 does not define what “offered spiritual support” involved or how it differs from a conversation.',
      },
      {
        label: 'YouTube video views',
        count: 26200000,
        note:
          'Eighty-two cents a view — and included here as a warning, not a recommendation. A view is not a person, is not a conversation, and in many cases is a few seconds of autoplay. This is how quickly a media cost model slides toward a fraction of a cent once the denominator stops describing a human being who did something.',
      },
    ],
  },
  ministryClaims: [
    {
      quote: 'By and for Middle Easterners — 80% of our programs are produced by local Christians.',
      sourceId: 'sat7-about',
    },
    {
      quote:
        'SAT-7 relies on the generosity of individuals, churches, foundations, and mission organizations. Over the past five years, 80% of our total operating expenses go to reach people in the region with life-changing programs.',
      sourceId: 'sat7-about',
    },
    {
      quote: 'SAT-7 does not sell airtime to other ministries.',
      sourceId: 'sat7-about',
    },
    {
      quote:
        'In 2025, SAT-7 has continued to see high levels of viewer engagement on our various media platforms, as our audience has connected enthusiastically with our dedicated Viewer Support Teams in response to our programs, projects, and campaigns. These statistics for the year testify to the impact of our content.',
      sourceId: 'sat7-ar-25',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 3,
      note:
        'The Nicene Creed and the Lausanne Covenant are both published as statements of faith, alongside a statement on marriage, sexuality and the sanctity of life. The channels exist to make Christ known in a region SAT-7 says is 96% non-Christian, and it does not sell airtime to anyone else. The content mix is broader than preaching — children’s education, literacy, public theology — but the ministry’s identity is unambiguous.',
    },
    localLeadership: {
      value: 3,
      note:
        'The strongest case in this batch. The CEO, Rita El-Mounayer, is a Lebanese Christian who came up through the ministry; the studios are in Egypt, Lebanon and Turkey; SAT-7 states that 80% of programming is made by local Christians; and the structure is 14 independent legal entities in which the Western fundraising arms are members, not owners. The 80% figure is SAT-7’s own and we could not check it.',
    },
    financialTransparency: {
      value: 2,
      note:
        'SAT-7 North America posts audited statements, the global annual report publishes combined figures across all 14 entities with the channel-by-channel split, and KPMG audits the Cyprus entities and reviewed the principles behind the combined summary. Held at 2 because the combined global figures are a summary rather than an audited consolidated statement, the individual entity accounts are only “available on request”, and the largest single line in the US audit is a grant to a related party.',
    },
    outcomeEvidence: {
      value: 2,
      note:
        'SAT-7 publishes dated response counts and keeps them separate from platform metrics — conversations and viewers offered support are reported next to views and interactions rather than added to them, which is more discipline than most media ministries show. Marked down because a “conversation” is undefined, one viewer may be counted more than once, and nobody outside SAT-7 has checked the totals.',
    },
    costEvidence: {
      value: 2,
      note:
        'Both halves of the division come from the same document and the same year, and the count describes something a person actually did. Marked down because the numerator is total global expenditure against a subset of the audience, and because SAT-7 publishes no per-unit figure of its own to check ours against.',
    },
  },
  notVerified: [
    'How many people watch. SAT-7 does not publish an audience figure, and we did not go looking for one to divide by. In broadcasting, “people reached” means the number of people living inside a signal footprint — a coverage estimate, not a count of anyone. Dividing $21.6 million by a satellite footprint would produce a cost per person of a fraction of a cent, and we would not put that number on the same page as a figure we checked.',
    'What a “conversation” is. Nothing states whether it is a phone call, a WhatsApp thread, a social-media exchange or a letter, how long it lasts, or whether a viewer in touch every week for a year counts once or fifty-two times.',
    'Who checked the counts. The conversation, support, view and interaction figures come from SAT-7’s own systems. No external audit or sampling is mentioned. SAT-7 is candid that this is work in progress — it says it “has created an Impact Strategy Model” and that in 2026 “we will be refining this in light of a pilot project that is measuring our current impact on our priority audiences.”',
    'Whether the 80% local-production claim is measured by programme count, broadcast hours or budget. Those three denominators could give very different answers.',
    'How the global figures reconcile to the US audit. Audited consolidated income was USD 22.0 million, total global income including gifts-in-kind USD 22.6 million, and total expenditure USD 21.6 million — all rounded, all combined from 14 separate sets of statements. SAT-7 North America’s own audited expenses of $13,884,347 do not sit inside those totals in any way the reader can trace.',
    'What SAT-7 International spent the $9,646,836 on. It is the largest line in the US audit and it leaves for a related party whose own statements are not published.',
    'How much of the spending happens in Cyprus rather than in the region. The international office and the audited Cyprus entities are in a high-income economy, so the local-cost-base advantage applies to some unknown share of the budget rather than all of it.',
    'Which governments fund which projects, and on what conditions.',
    'How viewer contact data is protected in countries where being identified as a Christian enquirer is dangerous.',
  ],
  notes: [
    'This is the page to read next to any ministry advertising a cost per person reached. SAT-7 spends about the same as a mid-sized broadcaster, publishes the number of people who actually got in touch, and the honest arithmetic comes out at $287.27 each. A penny per person is not a better ministry; it is a different and much weaker kind of number.',
    'SAT-7’s own channel split for 2025: ARABIC USD 7,630,000, PARS USD 5,268,000, TÜRK USD 4,366,000 and KIDS USD 4,310,000. The Persian channel takes almost a quarter of the budget, which is where the audience is least able to acknowledge watching.',
    'Funding mix for 2025: 43% individuals, 47% foundations and organisations, 5% churches, 3% governmental, 2% other. Nearly half from institutions is a concentration risk a donor should see.',
    'SAT-7 North America’s expenses were 82% programme, 11% fundraising and 7% management in 2025, on total expenses of $13,884,347 against $13,453,051 the year before. Net assets ended the year at $7,780,287.',
    'Some 2025 restricted income was raised to buy the building housing the Lebanon studios, so a share of last year’s giving bought a durable asset rather than programming.',
  ],
  siteUrl: 'https://www.sat7usa.org/',
  giveUrl: 'https://www.sat7usa.org/donation/general/',
  sources: [
    {
      id: 'sat7-site',
      label: 'Homepage',
      url: 'https://www.sat7usa.org/',
      publisher: 'SAT-7 North America',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'sat7-about',
      label: 'About Us',
      url: 'https://www.sat7usa.org/about-us/',
      publisher: 'SAT-7 North America',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note:
        'Carries the Nicene Creed and Lausanne Covenant as SAT-7’s statements of faith, the 80% local-production and 80% programme-spending claims, the “96% non-Christian” figure for the region, and the statement that SAT-7 does not sell airtime.',
    },
    {
      id: 'sat7-financials',
      label: 'Financial Accountability',
      url: 'https://www.sat7usa.org/about-us/#financial-accountability',
      publisher: 'SAT-7 North America',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note:
        'Displays ECFA, Charity Navigator four-star, Candid/GuideStar, BBB and Missio Nexus badges, and links the audited statements.',
    },
    {
      id: 'sat7-audit-25',
      label: 'SAT-7 North America audited financial statements, 2025 and 2024',
      url: 'https://www.sat7usa.org/wp-content/uploads/2026/04/SAT-7-25-FS-Final.pdf',
      publisher: 'SAT-7 North America',
      documentType: 'audited-financials',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note:
        'Program services $11,459,392, management and general $939,600, fundraising $1,485,355, total $13,884,347. Includes the related-party note: $9,361,061 of grants to SAT-7 International plus $285,775 of expenses paid on its behalf, and the disclosure that SAT-7 International may suspend or eliminate SAT-7 NA’s use of the SAT-7 name.',
    },
    {
      id: 'sat7-ar-25',
      label: 'SAT-7 Annual Report 2025 (global)',
      url: 'https://www.sat7usa.org/wp-content/uploads/2026/05/sat72025AnnualReport.pdf',
      publisher: 'SAT-7',
      documentType: 'annual-report',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note:
        'Source of both halves of the cost model. The “Viewer engagement in 2025” page reports 75,100 conversations, 20,700 viewers offered spiritual support, 26,200,000 YouTube views, 14,700,000 Facebook interactions, 3,900,000 Instagram interactions and 8,100 app downloads; those figures are set as graphics rather than printed text, and we read them off the rendered page. The financial summary reports total 2025 expenditure of USD 21,574,000 across the four channels, derived from the statements of all 14 SAT-7 legal entities, with the Cyprus entities audited by KPMG Ltd.',
    },
    {
      id: 'sat7-propublica',
      label: 'IRS filings for SAT-7 North America, EIN 23-2964829',
      url: 'https://projects.propublica.org/nonprofits/organizations/232964829',
      publisher: 'ProPublica Nonprofit Explorer',
      documentType: 'third-party',
      retrieved: '2026-09-18',
    },
  ],
};
