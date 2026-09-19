import type { Cause } from '@/lib/types';

export const greaterEuropeMission: Cause = {
  slug: 'greater-europe-mission',
  name: 'Greater Europe Mission',
  legalName: 'Greater Europe Mission and Affiliates d/b/a GEM USA',
  ein: '36-2345199',
  tagline:
    'Sends workers to 26 European nations on the argument that Europe is now unreached. Publishes a full audit and no count of anything.',
  category: 'evangelism',
  countries: [
    'Albania',
    'Austria',
    'Belgium',
    'Bulgaria',
    'Croatia',
    'Czechia',
    'France',
    'Germany',
    'Greece',
    'Hungary',
    'Ireland',
    'Italy',
    'Kosovo',
    'Latvia',
    'Malta',
    'Netherlands',
    'North Macedonia',
    'Poland',
    'Portugal',
    'Romania',
    'Serbia',
    'Slovakia',
    'Spain',
    'Sweden',
    'Switzerland',
    'United Kingdom',
  ],
  whatTheyDo:
    'GEM recruits and sends long-term workers to Europe and only to Europe, on the stated view that a continent where the gospel has been present for two thousand years has become unreached again. Its own summary of the model is "Reach Europe by multiplying disciples and growing Christ\'s Church", and it places workers in church planting, student ministry, camps, media, business and professional roles across 26 nations. The consolidated statements include three fields it runs directly — GEM France, Camp of the Peaks and Greater Europe Mission e.V. in Germany — and treat spending on affiliated national ministries as grants, because those ministries are not under GEM\'s control. In the year to 30 June 2025 GEM spent $26,771,063 on programme services, of which $16,035,943 was salaries and benefits and $6,660,534 was grants to others.',
  accreditations: [{ label: 'ECFA accredited since September 1987', sourceId: 'gem-ecfa' }],
  verification: 'self-reported',
  biblicalAlignment: {
    mandate:
      "Paul saw a man of Macedonia and concluded that God had called him to preach there, so he went — and the first church on the European continent was the result. GEM's claim is that the same continent needs the same thing again, and the mandate it stands on is the plain one: someone has to be sent. Whether Europe is the right place to send them is a stewardship judgement rather than a doctrinal one, and GEM makes its case openly enough that a donor can weigh it.",
    scriptures: [
      {
        ref: 'Acts 16:9–10',
        text: 'And a vision appeared to Paul in the night: a man of Macedonia was standing there, urging him and saying, “Come over to Macedonia and help us.” And when Paul had seen the vision, immediately we sought to go on into Macedonia, concluding that God had called us to preach the gospel to them.',
      },
      {
        ref: 'Matthew 28:19–20',
        text: 'Go therefore and make disciples of all nations, baptising them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all that I have commanded you. And behold, I am with you always, to the end of the age.',
      },
      {
        ref: '2 Timothy 2:2',
        text: 'and what you have heard from me in the presence of many witnesses entrust to faithful men who will be able to teach others also.',
      },
    ],
    doctrine: { label: 'What We Believe', sourceId: 'gem-about' },
    concerns: [
      "Every country GEM works in is a high-income country or close to it, and one of them — Switzerland — has a higher income per person than the United States. The table further down this page shows Switzerland at about 0.8 times the United States, which is the table's way of saying the arrow points the other way. GEM does not pretend otherwise and its rationale is spiritual need rather than cost, but a donor comparing this cause to anything else in the directory is comparing the most expensive possible cost base against some of the cheapest, and the comparison should be made deliberately.",
      'GEM publishes no count of anything. Not workers, not churches planted, not disciples, not students, not camps, not national partners. Its own audit and its own website give a nation list and a dollar figure and stop. We could not build a cost per outcome here because there is no denominator of any kind to divide by, which is unusual for a ministry of this size and is the main finding on this page.',
      'The give page tells donors that "our organization has complete control and discretion over the use of donated funds". The audit for the same period reports $7,977,716 of net assets with donor restrictions for Missionary support. Both statements are standard and both are true — the IRS language protects deductibility while donors still point their gifts at people — but a donor reading only the give page would not learn that most of the money arrives attached to a named worker.',
      "GEM's 2025 annual report exists only as an embedded Flipsnack flipbook. There is no downloadable PDF and no HTML version, and we could not retrieve the underlying file through any route. Whatever counts it contains are effectively unpublished, because nothing in it can be cited, archived or checked.",
      'Roughly a quarter of programme spending — $6,660,534 — leaves GEM as grants, and the largest single recipient is GEMi, the affiliated international entity, at $2,804,975. Six GEM board members also sit on the GEMi board, an overlap the audit calls "intended to be temporary", and GEMi\'s finances are not consolidated. The related-party disclosure is properly made; the arrangement still means a quarter of the money goes to bodies whose accounts a donor cannot see.',
      'GEM board members contributed approximately $1,376,000 to GEM USA in the year, about 4.4% of total expenses. That is generosity rather than a governance problem, and it is worth knowing that a meaningful share of the funding comes from the people overseeing it.',
    ],
  },
  roi: {
    levers: ['multiplication'],
    reason:
      'There is no cost-base advantage here at all, and this is the one cause in the directory where the cost-base table argues against the ministry rather than for it: GEM works exclusively in Europe, its cheapest field is Kosovo, and one of its nations is more expensive to live in than the United States. The only lever GEM claims is multiplication — its stated mission is to reach Europe "by multiplying disciples", and the model is meant to leave behind national ministries that GEM does not control. There is one piece of hard evidence for that: in December 2024 GEM completed the legal transfer of two lots of land and three buildings, worth $1,404,290, to the Greek Bible Institute, and booked it as a grant. That is a real handover of real assets to a national institution, and it is the best argument on this page. Beyond it, GEM publishes no count of disciples, churches or national partners, so the lever is asserted and unmeasured.',
  },
  ministryClaims: [
    {
      quote: "Reach Europe by multiplying disciples and growing Christ's Church",
      sourceId: 'gem-about',
    },
    {
      quote:
        'At only 2.9% of the population following Jesus, Europe is now a post-Christian continent.',
      sourceId: 'gem-why-europe',
    },
    {
      quote:
        'A once “reached” Europe has become “unreached” over time. What Europe once knew regarding Jesus and the gospel has, over time, been forgotten.',
      sourceId: 'gem-why-europe',
    },
    {
      quote:
        'All donations are made with the understanding that our organization has complete control and discretion over the use of donated funds, ensuring they support our charitable purposes effectively.',
      sourceId: 'gem-give',
    },
    {
      quote:
        'GEM USA is also affiliated with certain national ministries throughout Europe. Although GEM USA missionaries in those areas work with the national ministries, the national ministries are not under GEM USA control.',
      sourceId: 'gem-audit-25',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 3,
      note: 'A full set of belief statements: the Bible as inspired, infallible and authoritative; the Trinity; the deity, virgin birth, atoning death, bodily resurrection and personal return of Christ; regeneration by the Spirit as essential to salvation; and the resurrection of the lost to judgement and eternal condemnation. The stated purpose is evangelism and disciple-making, nothing else.',
    },
    localLeadership: {
      value: 2,
      note: "Higher than the rest of this batch, and earned on two sourced facts rather than a mission statement. GEM's audit states plainly that the affiliated national ministries are not under its control and that money sent to them is therefore a grant — a structural handover, not an aspiration — and $6,660,534 of programme spending left as grants this year. It also completed the transfer of $1,404,290 of land and buildings to the Greek Bible Institute. Held at 2 because the field force GEM pays for is still sent workers, $16,035,943 of programme spending is salaries and benefits, and no count of national ministries, national staff or handed-over works is published.",
    },
    financialTransparency: {
      value: 2,
      note: "A complete audit is posted on GEM's own site with a nine-line functional expense table for both years and unusually candid related-party and pension notes. A Form 990 exists and is public, but GEM does not link it and the most recent one available stops at the year ended June 2023, two years behind the audit. The annual report cannot be downloaded at all.",
    },
    outcomeEvidence: {
      value: 0,
      note: 'A finding, not an absence. We looked at the homepage, the about page, the why-Europe page, all 26 nation pages, the give page, the audit and the ECFA profile, and found no count of workers, churches, disciples, students or partners anywhere. GEM is the only ministry in this batch that publishes no denominator of any kind.',
    },
    costEvidence: {
      value: 0,
      note: 'The numerator is audited, precise and current. There is nothing at all to divide it by, so the arithmetic this site exists to do cannot be done here. That is a 0, and it is a finding about GEM rather than about our research.',
    },
  },
  notVerified: [
    "How many workers GEM has. This is the single most important thing we could not verify, and the reason there is no cost per outcome on this page. A sending agency's worker count is the one number that makes its spending interpretable, and GEM publishes it nowhere we could find — not on the site, not in the audit, not in the ECFA profile.",
    'Anything GEM produced. No churches, disciples, students, camps, baptisms or national partners are counted publicly.',
    'What is in the 2025 annual report. It is published as a Flipsnack flipbook with no downloadable file. We tried the Flipsnack collection and API endpoints and the CDN directly; all were blocked or returned errors. Nothing in it is citable.',
    'How the $6,660,534 of grants to others divides beyond the two disclosures the audit makes — $2,804,975 to GEMi and $1,404,290 to the Greek Bible Institute. That leaves $2,451,269 going to national ministries the audit does not name.',
    'What an undesignated gift funds. The give page claims complete control and discretion; the audit reports $7,977,716 restricted for Missionary support. No fee or assessment percentage is published for gifts to named workers, though the audit does disclose $662,943 of assessment fees paid on to GEMi.',
    'Whether the 2.9% of Europeans following Jesus figure is current. GEM attributes it to the Joshua Project on its own page; we did not check it at source.',
    "Executive compensation, in current terms. GEM's most recent public Form 990, for the year ended June 2023, reports $765,645 of total compensation for current officers and directors. That is a group total rather than any individual's pay, it is two years older than the audit on this page, and GEM does not publish it itself.",
    'GEM reports a deferred compensation benefit obligation of $391,453 at 30 June 2025 and states that "no assets are set aside to fund the benefits". Nothing published says how that obligation will be met.',
    'Why GEM ran an operating deficit. The audit reports a change in net assets from operations of negative $295,402 for the year, after negative $661,097 the year before. Nothing explains the pattern.',
  ],
  notes: [
    'Audited consolidated functional expenses for the year ended 30 June 2025: programme services $26,771,063 (85.8%), management and general $2,907,249 (9.3%), fundraising $1,511,084 (4.8%), total $31,189,396. The prior year was $24,759,700 / $3,479,920 / $2,017,484, total $30,257,104.',
    'Programme spending by natural classification: salaries and benefits $16,035,943; grants to others $6,660,534; travel and hospitality $2,175,483; office and information technology $628,432; conference expense $469,949; equipment and facilities $344,239; other $282,708; professional fees $95,376; depreciation and depletion $78,399.',
    "Nothing here to divide. We deliberately did not build a cost model. For scale only: the other sending agencies in this directory that do publish a worker count come out between roughly $60,000 and $74,000 per missionary-year, and at that range $26,771,063 of programme spending would correspond to something like 360 to 450 workers. That is arithmetic on other ministries' numbers, not a GEM figure, and we would not put it on this page if GEM published one of its own.",
    'Because every GEM nation is high-income, the cost-base table below is the least flattering one in the directory. Kosovo is the cheapest field at roughly eleven times below United States income per person; the next cheapest, Albania, is around seven; Switzerland is above the United States. That is the honest picture of what sending workers to Europe costs.',
    'GEM directly consolidates three foreign fields — La Ligue Biblique Francaise (GEM France), Camp des Cimes (Camp of the Peaks) and Greater Europe Mission e.V. in Germany — and excludes both GEMi and the affiliated national ministries.',
    'The audit was issued with subsequent events evaluated through 20 November 2025.',
  ],
  siteUrl: 'https://gemission.org/',
  giveUrl: 'https://gemission.org/give/',
  sources: [
    {
      id: 'gem-site',
      label: 'Homepage',
      url: 'https://gemission.org/',
      publisher: 'Greater Europe Mission',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
    },
    {
      id: 'gem-about',
      label: 'About GEM',
      url: 'https://gemission.org/about/',
      publisher: 'Greater Europe Mission',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: 'Source of the mission statement, the vision statement and the seven belief statements.',
    },
    {
      id: 'gem-why-europe',
      label: 'Why Europe',
      url: 'https://gemission.org/why-europe/',
      publisher: 'Greater Europe Mission',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: "GEM's own case for spending mission money in high-income countries, including the 2.9% figure it attributes to the Joshua Project.",
    },
    {
      id: 'gem-nations',
      label: 'Nations',
      url: 'https://gemission.org/nations/',
      publisher: 'Greater Europe Mission',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: 'Source of the 26 nations listed on this page. No nation page carries a worker count, a church count or a budget.',
    },
    {
      id: 'gem-give',
      label: 'Give',
      url: 'https://gemission.org/give/',
      publisher: 'Greater Europe Mission',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: 'Source of the complete-control-and-discretion statement.',
    },
    {
      id: 'gem-audit-25',
      label: 'Consolidated financial statements, years ended 30 June 2025 and 2024',
      url: 'https://gemission.org/app/uploads/2026/01/GEM-US-2025-Financial-Statements.pdf',
      publisher: 'Greater Europe Mission',
      documentType: 'audited-financials',
      retrieved: '2026-09-19',
      fiscalYear: 'FYE June 2025',
      note: 'Source of every audited figure on this page: the functional expense table, the national-ministries note, the Greek Bible Institute transfer, the GEMi related-party disclosure, the $7,977,716 restricted for Missionary support and the unfunded $391,453 deferred compensation obligation. It contains no count of workers.',
    },
    {
      id: 'gem-ecfa',
      label: 'ECFA accredited organisation profile: Greater Europe Mission',
      url: 'https://www.ecfa.org/MemberProfile.aspx?ID=6533',
      publisher: 'Evangelical Council for Financial Accountability',
      documentType: 'third-party',
      retrieved: '2026-09-19',
      note: "Confirms accreditation and the member-since date, and restates GEM's own financial totals. Like everything else about GEM, it carries no worker count.",
    },
    {
      id: 'gem-propublica',
      label: 'IRS record for Greater Europe Mission, EIN 36-2345199',
      url: 'https://projects.propublica.org/nonprofits/organizations/362345199',
      publisher: 'ProPublica Nonprofit Explorer',
      documentType: 'third-party',
      retrieved: '2026-09-19',
      note: 'Source of the EIN and of the officer compensation figure. Structured filing data covers the years ended June 2022 and June 2023 only, so it is two years behind the audit, and GEM does not link its Form 990 from its own site.',
    },
  ],
};
