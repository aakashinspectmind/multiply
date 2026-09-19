import type { Cause } from '@/lib/types';

export const internationalChristianConcern: Cause = {
  slug: 'international-christian-concern',
  name: 'International Christian Concern',
  legalName: 'International Christian Concern, Inc.',
  ein: '52-1942990',
  tagline:
    'Thirty years of direct aid to persecuted Christians through local partners, plus a newsroom and a lobbying operation — funded from a reserve that has fallen by two thirds in three years.',
  category: 'persecuted-church',
  countries: [
    'Africa',
    'Middle East & North Africa',
    'South Asia',
    'Southeast Asia',
    'India',
    'Iran',
    'Iraq',
    'Nigeria',
    'Pakistan',
    'Syria',
  ],
  whatTheyDo:
    'International Christian Concern describes itself in three branches. “We Aid” is the money that reaches people: emergency relief after an attack, Bibles and support for pastors and evangelists, small businesses and large-scale farms, and Hope Houses that school children. It is delivered through in-country staff and, by ICC’s own account, “trustworthy partners on the ground” who develop and implement the projects. “We Advocate” lobbies policymakers, presses for the release of prisoners and runs a prisoner letter-writing campaign that 522 volunteers joined in 2025. “We Awaken” is the publishing arm — a free magazine, a prayer calendar, a newsroom producing more than 500 reports a year, an annual Global Persecution Index and a bench of external ICC Fellows. Founded in 1995 when it separated from Christian Solidarity International’s US division, it is deliberately non-denominational and says it serves Catholic, Protestant and Eastern Orthodox believers alike. Shawn Wright became its third president on 31 October 2025.',
  accreditations: [
    { label: 'ECFA accredited', sourceId: 'icc-financial' },
    { label: 'Charity Navigator four stars', sourceId: 'icc-financial' },
    { label: 'Candid Platinum Seal of Transparency', sourceId: 'icc-financial' },
    {
      label: 'Ministry Voice 2025 Most Trusted Nonprofit Award',
      sourceId: 'icc-financial',
    },
  ],
  verification: 'documents-reviewed',
  biblicalAlignment: {
    mandate:
      'The new president’s first letter to donors quotes the verse the whole category rests on — remember the prisoners as if chained with them — and ICC’s answer to it is two-handed. One hand pays for food, a roof, a business, school fees. The other opens its mouth, which is the specific thing Proverbs commands on behalf of people who have no voice in the room where their fate is decided: ICC’s advocacy branch exists because a Christian in a blasphemy cell in Punjab cannot lobby the US Congress and somebody has to. Both hands are scriptural. Only one of them is countable, and this page divides by the countable one.',
    scriptures: [
      {
        ref: 'Hebrews 13:3',
        text: 'Remember the prisoners and those who are mistreated, as if chained with them — since you yourselves are in the body also.',
      },
      {
        ref: 'Proverbs 31:8–9',
        text: 'Open your mouth for the mute, for the rights of all who are destitute. Open your mouth, judge righteously, defend the rights of the poor and needy.',
      },
      {
        ref: '1 Corinthians 12:26',
        text: 'If one member suffers, all suffer together; if one member is honored, all rejoice together.',
      },
      {
        ref: 'Romans 12:14',
        text: 'Bless those who persecute you; bless and do not curse.',
      },
    ],
    doctrine: {
      label: 'Statement of Faith — the Apostles’ Creed and the Lausanne Covenant',
      sourceId: 'icc-who-we-are',
    },
    concerns: [
      'The three expense figures in the 2025 annual report are not ledger amounts. Programme expenses of $3,598,260.87 are exactly 88.000% of the total, general and administration exactly 9.500%, and fundraising exactly 2.500%, to the cent. A real trial balance does not land on three round percentages, and ICC’s own audited splits for 2022 to 2024, as published by ECFA, do not: programme was 80.9% of total expenses in 2024 and administration 16.9%. So the programme figure a donor is shown for 2025 is a total divided by a target ratio, not a measured programme cost — which is why this page divides by total expenses instead, and why the transparency score is 1.',
      'ICC has run a deficit for at least four consecutive years. Net assets fell from $3,696,331 at the end of 2022 to $3,110,906 in 2023 and $1,155,650 in 2024 — losses of $180,348, $611,560 and $1,955,256 — and the 2025 annual report’s own figures imply a further $279,703. On that arithmetic roughly $876,000 remains, about two and a half months of spending at 2025’s rate. Programme spending has already fallen 24% in a year, from $4,718,253 to $3,598,261. Nothing ICC publishes acknowledges any of this, and the same report that contains the numbers announces an award for financial trustworthiness.',
      'Reported fundraising is $102,223.32, or 2.5% of total expenses, while one of the ministry’s three self-declared branches is “We Awaken” — a magazine, a prayer calendar, more than 500 news reports a year and “engaging content that stirs hearts to prayer and action”, aimed squarely at the Western church. Content that informs donors and recruits them is being charged to programme. That is not necessarily wrong, and it is certainly not tested: it flatters the programme share, and it is inside the numerator on this page.',
      'ICC publishes no audited financial statements and no Form 990. The financial page offers “For a copy of our 2024 IRS Form 990, please contact” an email address — the 2024 return, not the 2025 one the annual report covers. The two programme-share figures ICC does advertise disagree with each other and with its own dollars: the website says 86 cents, the annual report says 87 cents, and the arithmetic says 88.0%.',
      'ICC produces the Global Persecution Index and raises money on the persecution it ranks, which is the same structure we flag against Open Doors and its World Watch List. It is now also entangled with its neighbour: ICC has “partnered with the International Institute for Religious Freedom (IIRF) to support its Violent Incidents Database”, that database “relies heavily on publicly sourced information, including from ICC”, and the same database is described by Global Christian Relief as “sponsored by Global Christian Relief” and is the sole source for GCR’s competing Red List. Two of the three ranked persecution lists a donor might compare are drawing on one dataset that both ministries help fund and feed.',
    ],
  },
  roi: {
    levers: ['local-workers', 'local-cost-base', 'existing-network', 'durable-asset'],
    reason:
      'Nothing in this model is built from scratch. Cases arrive through local pastors — the annual report’s Nigeria story begins with a woman fleeing to a pastor who telephoned ICC — and the work is carried out by in-country staff and partner organisations that already exist, so the gift is not paying to establish a presence. It is then spent where gross national income per person is $1,360 in Nigeria, $1,500 in Pakistan, $2,760 in India and $5,690 in Iraq, which is why rebuilding a household’s livelihood costs hundreds of dollars rather than tens of thousands. And a meaningful share buys things that keep working: 6 farms, 98 small businesses and 20 Hope Houses are assets, not consumption, and ICC states the intent explicitly as “Building Resilience, Not Reliance”.',
  },
  costModel: {
    outcome: 'persecuted Christian given direct aid',
    outcomePlural: 'persecuted Christians given direct aid',
    spend: {
      amount: 4088932.81,
      basis: 'total-expenses',
      fiscalYear: '2025',
      sourceId: 'icc-ar-25',
    },
    count: {
      amount: 11380,
      label: 'Christians given direct aid',
      fiscalYear: '2025',
      sourceId: 'icc-ar-25',
    },
    attribution: 'all-program-spend',
    caveat:
      'This is the rare case where the ministry’s headline count is also the hardest number it publishes, so we divide by it rather than demoting it — 11,380 is ICC’s own figure for Christians given direct aid in 2025, and every softer denominator on the page is either a sum of overlapping categories or a count of news reports. The numerator is the problem. ICC’s 2025 programme figure of $3,598,260.87 is exactly 88.000% of total expenses, its administration exactly 9.500% and its fundraising exactly 2.500%, to the cent, which is a total split by target ratios rather than a programme cost measured from a ledger; so we use the total of the three, $4,088,932.81, which is the only 2025 expense figure not manufactured by that split. That makes this a hard ceiling in two directions at once. Everything ICC did in 2025 is charged to the aid recipients — the 865 pastors equipped, the 410 college students, the 20 Hope Houses, the 6 farms, the 98 small businesses, the 1,610-plus Bibles, more than 500 news reports, the free magazine, the Capitol Hill advocacy and the Global Persecution Index — and the administration and fundraising are in there too. Pulling the other way, ICC works through “trustworthy partners on the ground” whose own budgets are not in the numerator at all, so what a recipient actually received cost more than ICC paid for it. Two further things: ICC prints its own footnote, “numbers fluctuate as projects begin and end”, and “direct aid” is never defined, so a single emergency grocery grant and a year of school fees each count once. There are no audited statements and no Form 990 behind any of this; both halves come from a designed annual report.',
    alternates: [
      {
        label: 'the same 11,380, against the programme figure ICC publishes',
        count: 11380,
        spend: 3598260.87,
        note: 'About $316.19, and the figure this page would show if the programme line could be trusted. It cannot: $3,598,260.87 is exactly 88.000% of total expenses and $102,223.32 is exactly 2.500%, so the split is a ratio applied to a total rather than a cost measured from a ledger.',
      },
      {
        label: 'every individual ICC reports serving in 2025, added together (12,753)',
        count: 12753,
        note: 'About $320.63. The 11,380 given direct aid plus 865 pastors, 410 college students and 98 people given small businesses. Barely moves the figure, and we do not use it as the primary denominator because a pastor who was trained may also be one of the 11,380 and ICC publishes no de-duplication rule.',
      },
      {
        label: 'the 1,610-plus Bibles given to evangelists',
        count: 1610,
        note: 'About $2,540 per Bible, which is obviously not the price of a Bible. It is in this list to show what charging one ministry’s whole budget to any single count does to the answer, and as a warning against reading the primary figure as the price of anything. Note also that ICC prints this count as “1,610+”, so even the denominator is an inequality.',
      },
    ],
  },
  ministryClaims: [
    {
      quote: 'GIVING DIRECT AID TO 11,380 Christians',
      sourceId: 'icc-ar-25',
    },
    {
      quote: '87 CENTS ON EVERY DOLLAR GIVEN GOES TO PROJECTS!',
      sourceId: 'icc-ar-25',
    },
    {
      quote:
        '86 cents of every dollar supports field-based aid and advocacy, providing life-changing support and amplifying the voice of the persecuted church!',
      sourceId: 'icc-financial',
    },
    {
      quote: 'We have worked in more than 40 countries, and have ongoing projects in over 20!',
      sourceId: 'icc-who-we-are',
    },
    {
      quote:
        'ICC was one of 72 nonprofits out of 1.5 million to earn the notable 2025 most Trusted Nonprofit Award by Ministry Voice.',
      sourceId: 'icc-ar-25',
    },
    {
      quote: '*Note: numbers fluctuate as projects begin and end',
      sourceId: 'icc-ar-25',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 2,
      note: 'The statement of faith is the Apostles’ Creed with the Lausanne Covenant named as the fuller position, the aid is explicitly for people persecuted for following Christ, and one of the five funds is “Gospel” — supporting pastors, church planters and Bible distribution. Marked down from 3 because ICC defines itself as a relief and advocacy body across all traditions rather than a proclaiming ministry, and because its published doctrinal basis is a creed rather than a confessional statement on Scripture, the atonement or judgement.',
    },
    localLeadership: {
      value: 1,
      note: 'Delivery is genuinely local — in-country staff plus partner organisations that ICC does not control, taking referrals from local pastors. But that is also the limit: no partner is named, no field leader is identified, the ICC Fellows who shape the reports are described as international experts, and the board, the president and the money are in Washington. Local hands, American decisions, and no way to check the hands.',
    },
    financialTransparency: {
      value: 1,
      note: 'ECFA accreditation, a four-star Charity Navigator rating and a Candid Platinum seal are all displayed, and ECFA publishes three years of audited splits. Against that: no audited statements and no Form 990 on the site, the 990 offered only by email and only for the prior year, two different programme-share percentages advertised, and a 2025 expense split that turns out to be exactly 88.0 / 9.5 / 2.5 per cent of the total. A donor cannot audit the number this page divides by; they can only audit that it was not audited.',
    },
    outcomeEvidence: {
      value: 2,
      note: 'The counts are specific and varied — 11,380 aided, 865 pastors, 410 students, 20 Hope Houses, 6 farms, 98 businesses, 1,610-plus Bibles, 500-plus reports, 522 letter-writing volunteers — and they sit beside first-person case accounts naming the help given. Marked down because ICC defines none of the units, appends its own warning that the numbers fluctuate, produces them in a marketing document with no financial statements, and gathers them from partners nobody outside ICC has checked.',
    },
    costEvidence: {
      value: 2,
      note: 'Both halves of a division are published in the same document for the same year, which is more than most of this category manages, and that is why there is a cost model. It is not a 3 because the spending side is a designed annual report rather than an audited statement, because the programme line inside it is a percentage of the total rather than a measured cost, and because ICC advertises no unit price of its own against which ours could be checked.',
    },
  },
  notVerified: [
    'What “direct aid” means. It is the denominator on this page and ICC never defines it. A one-off grocery grant, a year of school fees, a rebuilt roof and a medical bill would each add one to 11,380, and the ministry’s own footnote warns that “numbers fluctuate as projects begin and end”.',
    'Whether the count double-counts. The categories ICC reports — 11,380 aided, 865 pastors, 410 students, 98 businesses — plainly overlap in principle, and no de-duplication rule is published. Our 12,753 alternate assumes they do not overlap, which is almost certainly wrong.',
    'Whether the 2025 expense figures came from a ledger at all. Programme is 88.000% of the total, administration 9.500% and fundraising 2.500%, each exact to the cent. We could not find a document explaining how the split was derived, and ICC publishes no audited statements for 2025.',
    'Why programme spending fell 24% in a year, from $4,718,253 in 2024 to $3,598,261 in 2025, and why total expenses fell 30%. No published document mentions the fall, a restructuring, or redundancies.',
    'Why ICC has lost money for four years running and what the plan is. The ECFA figures show deficits of $180,348, $611,560 and $1,955,256 for 2022 to 2024, total assets down from $3,807,741 to $1,528,144, and the 2025 report’s own numbers imply another $279,703. Neither the annual report nor the website mentions any of it.',
    'What the newsroom, the magazine and the Global Persecution Index cost, and how much of that sits in programme rather than fundraising. With reported fundraising at 2.5% of expenses and a whole branch devoted to awakening the Western church, this is the single largest open question about the numerator.',
    'Who the partners are. ICC says it teams up with “trustworthy partners on the ground” and monitors the projects, but names no partner organisation, publishes no monitoring report, and describes no verification method. The partners’ own spending is not in the numerator, so the figure on this page understates what a recipient received.',
    'Which countries. ICC says more than 40 countries historically and “over 20” currently, and does not list them. The country list here is assembled only from places its own pages name — India, Iran, Iraq, Nigeria, Pakistan and Syria — plus the four regions it organises its reporting around, so it is incomplete by construction. ICC also says it broadcasts the gospel into North Korea, which we have left out because our cost base has no income figure for it.',
    'How recipients are identified as persecuted Christians, and what stops aid targeted by religious identity from becoming a reason to claim one. ICC says its methods assess bona fide cases; nothing published describes the test or who applies it.',
    'The 2024 Form 990. It exists — the IRS record shows a return filed for the period ending December 2024 — but no financial data from it has been transcribed publicly, and ICC releases it only on request. Everything after 2023 in this profile therefore rests on ECFA’s summary and the annual report.',
    'Whether the Ministry Voice “Most Trusted Nonprofit Award” means anything a donor can use. The award is said to rest on “extensive research conducted by ten distinguished nonprofit oversight bodies” which are not named, and it was given to a ministry whose net assets had just fallen 63% in a year.',
  ],
  notes: [
    'ICC’s 2025 annual report prints revenue of $3,809,230.00 and three expense figures — general and administration $388,448.62, fundraising $102,223.32, programme $3,598,260.87 — but no total. The total used here, $4,088,932.81, is their sum, and the implied deficit for 2025 is $279,702.81.',
    'Independent three-year figures from ECFA, per ICC’s financial statements. Total expenses: $4,381,271 in 2022, $4,317,522 in 2023, $5,834,980 in 2024. Programme: $3,764,373, $3,648,337, $4,718,253. Administration: $542,260, $566,472, $985,389. Fundraising: $74,638, $102,713, $131,338. ProPublica’s transcription of the filed Form 990 matches the 2023 column exactly, which is what gives us confidence in the ECFA series and none in the 2025 percentages.',
    'ICC was founded in 1995 by Steve Snyder out of Christian Solidarity International’s US division; Snyder died in 2002 and was succeeded by Jeff King, who led it for 23 years. Shawn Wright became president on 31 October 2025 — two months before the close of the year this annual report covers, and the report is his first. A donor reading the 2025 figures is reading the last year of one era reported by the next.',
    'The Violent Incidents Database that ICC now feeds and cites is the same database Global Christian Relief says it sponsors and uses as the sole source for its Red List. Over four years it has recorded more than 600,000 incidents against all faiths, and ICC notes that it “relies heavily on publicly sourced information, including from ICC”. Anyone comparing ICC’s Global Persecution Index with GCR’s Red List, or either with the World Watch List, should know how few underlying datasets are involved.',
    'Non-denominational in a way that matters in this category: ICC states that it serves believers who are “old or young, Catholic or Protestant, or Eastern Orthodox”, on the ground that “the persecuted church cannot easily afford to be isolated based on denominational differences”. Most of the ministries in this directory do not say this either way.',
  ],
  siteUrl: 'https://persecution.org/',
  giveUrl: 'https://persecution.org/give/',
  sources: [
    {
      id: 'icc-site',
      label: 'Homepage',
      url: 'https://persecution.org/',
      publisher: 'International Christian Concern',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: 'Mostly a newsroom front page. The www subdomain refuses ordinary requests; the canonical host is persecution.org.',
    },
    {
      id: 'icc-who-we-are',
      label: 'Who We Are',
      url: 'https://persecution.org/who-we-are/',
      publisher: 'International Christian Concern',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: 'Carries the statement of faith (the Apostles’ Creed plus support for the Lausanne Covenant), the founding history from CSI-USA in 1995, the presidential succession to Shawn Wright on 31 October 2025, the three branches, and the claim of more than 40 countries worked in with over 20 active.',
    },
    {
      id: 'icc-financial',
      label: 'Financial Integrity',
      url: 'https://persecution.org/financial-information/',
      publisher: 'International Christian Concern',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: 'Source of the 86-cents claim, the four accreditations, the five funds, the whistleblower policy, and the offer of the 2024 Form 990 by email. No audited statements or returns are posted.',
    },
    {
      id: 'icc-projects',
      label: 'Projects',
      url: 'https://persecution.org/projects/',
      publisher: 'International Christian Concern',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
    },
    {
      id: 'icc-give',
      label: 'Give',
      url: 'https://persecution.org/give/',
      publisher: 'International Christian Concern',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: 'Describes the five funds and names India, Nigeria and North Korea as places the work happens. Advertises no per-unit price, which is why no advertised figure is set against ours.',
    },
    {
      id: 'icc-ar-25',
      label: '2025 Annual Report',
      url: 'https://persecution.org/wp-content/uploads/2026/03/ICC-2025-Annual-Report.pdf',
      publisher: 'International Christian Concern',
      documentType: 'annual-report',
      retrieved: '2026-09-19',
      fiscalYear: '2025',
      note: 'A designed magazine with no financial statements in it. The financial page prints revenue and three expense figures and no total; the outcome counts are set as graphic panels in a single spread, and we read them from the rendered pages. Also the source of the Violent Incidents Database account, the new president’s October 2025 letter and the Ministry Voice award.',
    },
    {
      id: 'icc-ecfa-cfd',
      label: 'ECFA comparative financial data — International Christian Concern',
      url: 'https://www.ecfa.org/ComparativeFinancialData.aspx?ID=7479',
      publisher: 'Evangelical Council for Financial Accountability',
      documentType: 'third-party',
      retrieved: '2026-09-19',
      fiscalYear: '2022, 2023 and 2024',
      note: 'Three years of revenue, programme, administrative and fundraising figures “per the organization’s financial statements”, plus assets, liabilities and net assets. The only independent view of ICC’s finances available, and the basis for everything said here about the deficits. Accredited since 18 November 1997.',
    },
    {
      id: 'icc-propublica',
      label: 'IRS filings for International Christian Concern Inc, EIN 52-1942990',
      url: 'https://projects.propublica.org/nonprofits/organizations/521942990',
      publisher: 'ProPublica Nonprofit Explorer',
      documentType: 'form-990',
      retrieved: '2026-09-19',
      fiscalYear: '2023',
      note: 'Transcribed returns through the year to December 2023 — revenue $3,705,962 against expenses $4,317,522, matching ECFA’s column to the dollar. A return for 2024 is on file but not transcribed, and ICC does not post it.',
    },
  ],
};
