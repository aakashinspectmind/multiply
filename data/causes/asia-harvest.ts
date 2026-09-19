import type { Cause } from '@/lib/types';

export const asiaHarvest: Cause = {
  slug: 'asia-harvest',
  name: 'Asia Harvest',
  legalName: 'Asia Harvest',
  ein: '20-1648411',
  tagline:
    'Sends monthly support to Asian evangelists and prints Bibles in their languages, and takes no cut for fundraising.',
  category: 'evangelism',
  countries: [
    'China',
    'India',
    'Pakistan',
    'Nepal',
    'Bhutan',
    'Bangladesh',
    'Vietnam',
    'Indonesia',
    'Laos',
    'Myanmar',
    'Cambodia',
  ],
  whatTheyDo:
    'Asia Harvest does three things and publishes them as three lines: it prints Bibles for house-church networks in Asian languages, it sends monthly support to Asian evangelists working among their own and neighbouring peoples, and it sends humanitarian aid to Christians in hardship. It has no field staff of its own — money goes to indigenous church leaders who report back — and in the audited year just ended it spent nothing at all on fundraising.',
  accreditations: [{ label: 'ECFA accredited', sourceId: 'ah-ecfa' }],
  verification: 'documents-reviewed',
  biblicalAlignment: {
    mandate:
      'Romans 10 asks how anyone is to hear without a preacher, and how a preacher comes without being sent. Asia Harvest answers the second question with money rather than people: the preacher is already there, already speaks the language, already lives in the village. What he lacks is the freedom from subsistence work that support provides, and a Bible in the language he preaches in.',
    scriptures: [
      {
        ref: 'Romans 10:14–15',
        text: 'How then will they call on him in whom they have not believed? And how are they to believe in him of whom they have never heard? And how are they to hear without someone preaching? And how are they to preach unless they are sent?',
      },
      {
        ref: '1 Corinthians 9:14',
        text: 'In the same way, the Lord commanded that those who proclaim the gospel should get their living by the gospel.',
      },
      {
        ref: 'Matthew 28:19',
        text: 'Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit.',
      },
    ],
    doctrine: { label: 'Doctrinal Statement', sourceId: 'ah-doctrine' },
    concerns: [
      'Their own description of the humanitarian fund is that aid goes to situations "where this will help in promoting the Gospel". Tying material help to a hearing produces professions of faith that track the aid rather than conviction — the rice-Christian problem, and it is one they have written into the purpose of the fund rather than guarded against.',
      'The project table on their financials page does not add up. The rows sum to $3,473,655 received and $4,137,815 sent, but the totals row on the same page reads $3,687,083 received and $3,382,260 sent, with a "91.7%" pass-through calculated from those totals. The row sum matches the audit exactly; the totals row matches nothing we could find.',
      'The same page tells the reader the project table can be checked against "page 15 of the pdf file (p. 13 of the audit report)". That page of the 2025 audit is the notes on cash, investments and related-party transactions. There is no project table anywhere in the audit.',
      'Fundraising expense is $0.00 in the audited statements. That is unusual enough to be worth a question rather than applause: a ministry with $4.2m of contributions is doing some form of donor acquisition, and the audit does not explain where its cost is classified.',
      'Several of the named countries — China, Pakistan, Laos, Vietnam, Myanmar, Bhutan — criminalise or violently punish the work being funded. Asia Harvest names the countries but not the workers, which is the right way round; a donor should still understand that the people on the receiving end carry the risk.',
    ],
  },
  roi: {
    levers: ['local-workers', 'local-cost-base', 'existing-network'],
    reason:
      'No expatriate is sent, housed, schooled or insured. The money buys a year of an Asian evangelist\'s time at an Asian cost of living, distributed through house-church networks that already exist, and the Bibles are printed in-country in the language the hearer reads. The audit shows every program dollar leaving as "Grants and Assistance" rather than as salaries and travel, which is what that structure looks like on a financial statement.',
    comparison: {
      here: '$832.99 for a year of support for one evangelist already living among the people he preaches to',
      benchmark:
        '$64,227.91 per year for one long-term worker sent from the United States, from the audited statements of Frontiers USA, a sending agency working in the same part of the world',
      benchmarkSourceId: 'fr-audit-25',
      multiple: 77,
      caveat:
        "These are not the same job and the multiple is not a verdict. Frontiers sends workers to places where there is no indigenous church to support an evangelist, which is precisely the situation Asia Harvest's model cannot address; someone has to go first. The $832.99 is also only what Asia Harvest sends, not the worker's total income — he may have other support or other work, and they do not say. The $64,227.91 includes recruiting and training workers not yet sent, so it overstates the marginal cost of one more sent worker — while Frontiers' audit also notes that some of its workers are self-supporting tentmakers whose costs never enter its statements, which pushes the other way. Read the ratio as the reason both models exist, not as an argument for one.",
    },
  },
  costModel: {
    outcome: 'supported evangelist-year',
    outcomePlural: 'supported evangelist-years',
    spend: {
      amount: 1635165,
      basis: 'program-services',
      fiscalYear: '2025',
      sourceId: 'ah-audit-25',
    },
    count: {
      amount: 1963,
      label: 'evangelists supported',
      fiscalYear: '2025',
      sourceId: 'ah-review-25',
    },
    attribution: 'single-program-line',
    caveat:
      "This divides one audited program line, Evangelism, by the number of evangelists supported in the same year, so it does not carry Bible printing or humanitarian aid. It still over-attributes: Asia Harvest's own project table shows the Evangelism line covering both the Asian Workers' Fund and a Ministry Training Fund, so some of this $1,635,165 trained workers rather than supported the 1,963. It also excludes every dollar of the $695,480 general and administrative cost that made the grants possible, so it is not the full cost to Asia Harvest of one supported evangelist-year.",
    alternates: [
      {
        label: 'all program spending, across evangelists, Bibles and aid',
        count: 1963,
        note: 'Charging the whole $4,131,500 program figure to the evangelists gives $2,104.69 each, which is the honest upper bound if you think the Bibles and the aid exist to make the evangelism work.',
      },
    ],
  },
  ministryClaims: [
    {
      quote:
        'Last year, more than 530,000 Christian families were strengthened by God’s Word through our Asia Bible Fund, while the 1,963 evangelists we supported led a total of 248,000 people to Christ among 1,305 different tribes and ethnic groups.',
      sourceId: 'ah-review-25',
    },
    {
      quote:
        'we are committed to printing Bibles in nearly 180 different Asian languages for just $3.00 each',
      sourceId: 'ah-about',
      impliedCostPerOutcome: 3,
      impliedOutcome: 'Bible printed',
    },
    {
      quote: 'All contributions to our projects are used 100% as designated.',
      sourceId: 'ah-fin',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 3,
      note: 'A doctrinal statement on the site, and the three programme lines are Bibles, evangelists and aid to Christians. There is no version of this ministry that is not explicitly Christian.',
    },
    localLeadership: {
      value: 3,
      note: 'Every funded worker is an Asian believer working among Asian peoples, and the audit records all program spending as grants and assistance rather than staff cost. The board and office are American.',
    },
    financialTransparency: {
      value: 2,
      note: 'Full audited statements with a three-way functional breakdown are posted, plus an ECFA member profile. Marked down because the project table on their own financials page does not reconcile to itself, and because the page directs readers to an audit page that does not contain what it says it contains.',
    },
    outcomeEvidence: {
      value: 1,
      note: 'The evangelist count is published for the same year as the audit, which is enough to divide. Nothing else is: the count is reported up from the networks being funded, there is no definition of what support level makes someone one of the 1,963, and the accompanying figures are conversions and Bibles rather than anything independently checkable.',
    },
    costEvidence: {
      value: 2,
      note: 'Both halves come from the ministry for the same fiscal year, and the numerator is an audited line rather than a total. Not a 3 because the count sits in a marketing document rather than in the audited statements, and because the Evangelism line demonstrably funds more than the 1,963 workers.',
    },
  },
  notVerified: [
    'What "supported" means. A donor reading 1,963 evangelists will assume full-time support; the figure divides to $832.99 a year, which in several of these countries is a supplement rather than a wage. Asia Harvest publishes no support level, no definition and no statement of whether a worker receiving one month of support counts the same as one receiving twelve.',
    'Whether the 1,963 evangelists plant churches that last. Asia Harvest publishes no church count, no retention figure and no self-sustainability figure. Nothing on the page tells you what happens to the work when the monthly support stops.',
    "The 248,000 people led to Christ and the 530,000 families strengthened. These are quoted as the ministry's claims and are excluded from every calculation here. We do not treat a profession of faith as a delivered unit, and neither figure has a stated method behind it.",
    'The reconciliation of their own project table. Rows sum to $3,473,655 received and $4,137,815 sent; the totals row says $3,687,083 and $3,382,260. We could not make the published 91.7% pass-through figure come out of any combination of these numbers.',
    'How $4,137,815 of project money was sent out of $4,131,500 of audited program spending while cash rose. The audit shows $6,980,562 of cash and cash equivalents at year end, so restricted balances carried from prior years are the likely explanation, but the documents do not spell it out.',
    'Where fundraising cost sits. The audit reports $0.00 of fundraising expense against $4.2m of contributions.',
    'The $3.00 Bible. It is a per-unit price with no published print run and no invoice behind it, so there is no denominator to check it against.',
    'Whether any of these workers are also counted by another Western ministry. Support for national evangelists in Asia is raised by dozens of organisations through overlapping networks, and Asia Harvest names no partner organisation.',
  ],
  notes: [
    'The audited functional split for the year ended 31 December 2025 is program $4,131,500, general and administrative $695,480, fundraising $0, total $4,826,980 — 85.59% to programme. Every program dollar is classified as "Grants and Assistance".',
    "The project table on their financial statements page shows $1,099,610 sent through the Asian Workers' Fund, which looks like the natural numerator for an evangelist cost. We did not use it: that table is not in the audit, and the audit page it cites does not contain it. The audited Evangelism line of $1,635,165 is the closest figure that an auditor has actually looked at, and it approximately equals the Asian Workers' Fund plus the Ministry Training Fund.",
    'The 2025 audit is a scanned document with no text layer. Every figure on this page was read off page images rendered at 150 dpi, cross-checked against a second rendering read directly rather than through OCR.',
    "Restricted contributions were $3,473,655 of the year's giving, which is exactly the sum of the project table rows. That is the one place where their marketing and their audit agree to the dollar.",
    "The comparison figure on this page comes from another ministry's audit, cited in full below. We put it here rather than only on the Frontiers page because the sending-versus-supporting question is the whole argument for this category, and a donor should see both numbers in one place.",
  ],
  siteUrl: 'https://asiaharvest.org/',
  giveUrl: 'https://asiaharvest.org/projects-donations',
  sources: [
    {
      id: 'ah-site',
      label: 'Homepage',
      url: 'https://asiaharvest.org/',
      publisher: 'Asia Harvest',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'ah-about',
      label: 'About Asia Harvest',
      url: 'https://asiaharvest.org/about-us',
      publisher: 'Asia Harvest',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: "Carries the $3.00 per Bible claim and lists the eleven countries used as this cause's country list.",
    },
    {
      id: 'ah-doctrine',
      label: 'Doctrinal Statement',
      url: 'https://asiaharvest.org/doctrinal-statement',
      publisher: 'Asia Harvest',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'ah-fin',
      label: 'Financial statements page and project table',
      url: 'https://asiaharvest.org/financial-statements',
      publisher: 'Asia Harvest',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Source of the "100% as designated" claim and of the project table whose totals row does not match its own rows. Also the page that points readers at the wrong page of the audit.',
    },
    {
      id: 'ah-awf',
      label: 'Asian Workers’ Fund',
      url: 'https://asiaharvest.org/asian-workers-fund',
      publisher: 'Asia Harvest',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Describes the support model for national evangelists.',
    },
    {
      id: 'ah-audit-25',
      label: 'Audited financial statements, year ended 31 December 2025',
      url: 'https://irp.cdn-website.com/5ddddb20/files/uploaded/Asia_Harvest_2025_Audit.pdf',
      publisher: 'Asia Harvest',
      documentType: 'audited-financials',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note: 'Scanned with no text layer. Figures were read from page images rendered at 150 dpi, not from extracted text: Bible Printing $1,463,990, Evangelism $1,635,165, Humanitarian Aid $1,032,345, general and administrative $695,480, fundraising $0. Linked from the financial statements page.',
    },
    {
      id: 'ah-review-25',
      label: '2025 Year in Review',
      url: 'https://irp.cdn-website.com/5ddddb20/files/uploaded/207-+2025+Year+in+Review+Breakthroughs+in+Unexpected+Places.pdf',
      publisher: 'Asia Harvest',
      documentType: 'annual-report',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note: "Source of the 1,963 evangelists. The headline figures are set in a designed graphic, so the page was rendered and read as an image rather than OCR'd.",
    },
    {
      id: 'ah-ecfa',
      label: 'ECFA member profile',
      url: 'https://www.ecfa.org/MemberProfile.aspx?ID=43277',
      publisher: 'Evangelical Council for Financial Accountability',
      documentType: 'third-party',
      retrieved: '2026-09-18',
      note: "Confirms current accreditation and restates the year's revenue and expense totals.",
    },
    {
      id: 'ah-propublica',
      label: 'IRS filings for Asia Harvest, EIN 20-1648411',
      url: 'https://projects.propublica.org/nonprofits/organizations/201648411',
      publisher: 'ProPublica Nonprofit Explorer',
      documentType: 'third-party',
      retrieved: '2026-09-18',
      note: 'Used to confirm the EIN and legal name. Asia Harvest does not post Form 990s on its own site.',
    },
    {
      id: 'fr-audit-25',
      label: 'Frontiers USA audited financial statements, year ended 30 June 2025',
      url: 'https://frontiersusa.org/wp-content/media/Frontiers-USA-2025-FS.pdf',
      publisher: 'Frontiers USA',
      documentType: 'audited-financials',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note: 'Cited here only as the benchmark for the sending comparison: $36,931,047 of program spending against 575 long-term workers sent from the United States and on the field.',
    },
  ],
};
