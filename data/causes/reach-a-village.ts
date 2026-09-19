import type { Cause } from '@/lib/types';

export const reachAVillage: Cause = {
  slug: 'reach-a-village',
  name: 'Reach A Village',
  legalName: 'Reach A Village',
  ein: '45-5443213',
  tagline:
    'Grants to local church leaders in Eastern Europe and Southeast Asia to start churches in villages that have none.',
  category: 'church-planting',
  countries: ['Southeast Asia', 'East Asia', 'Eurasia', 'Europe', 'Latin America'],
  whatTheyDo:
    'Reach A Village sends grants to indigenous church leaders and counts the churches they start, the Scriptures they hand out and the people who attend their training. Its Form 990 describes the work as equipping "church leaders to plant churches in unreached villages", and Schedule F shows the money leaving as grants with no foreign office and no foreign employee, agent or contractor anywhere. The published map names about twenty countries across Eastern Europe, the Caucasus and Southeast Asia, plus Russia, Mongolia and China. Its fiscal year runs September to August, so the report it calls 2025 is the return the IRS calls 2024.',
  accreditations: [
    {
      label: "ECFA accredited (ministry's own statement)",
      sourceId: 'rav-ar25',
    },
    {
      label: "Charity Navigator 4 stars (ministry's own statement)",
      sourceId: 'rav-ar25',
    },
  ],
  verification: 'documents-reviewed',
  biblicalAlignment: {
    mandate:
      "The commission is to make disciples of all nations, and Paul's ambition was specifically to preach where Christ had not been named rather than build on another man's foundation. Reach A Village applies that to villages — places with no church at all — and does it by funding the believer who already lives in the region rather than by sending anyone.",
    scriptures: [
      {
        ref: 'Matthew 28:19–20',
        text: 'Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all that I have commanded you.',
      },
      {
        ref: 'Romans 15:20',
        text: "and thus I make it my ambition to preach the gospel, not where Christ has already been named, lest I build on someone else's foundation.",
      },
      {
        ref: '2 Timothy 2:2',
        text: 'And what you have heard from me in the presence of many witnesses entrust to faithful men, who will be able to teach others also.',
      },
    ],
    doctrine: { label: 'Mission and Faith Statement', sourceId: 'rav-faith' },
    concerns: [
      "No audited or reviewed financial statements are published. Only Form 990s and the ministry's own annual report are on the site — and the 990 itself reconciles to audited statements that exist but are not posted, so a document a donor would want has been prepared and withheld.",
      "Three different totals for the same year's expenses appear in their own documents: $2,809,413 described on the 990 as the figure per audited financial statements, $2,807,993 in Part IX of the same return, and $2,797,072 in the annual report. The gap sits almost entirely in management and general — $325,812 on the 990 against $314,890.69 in the annual report.",
      'The 990 reports $2,809,413 as "total program service expenses" on Part III, which is the entire expense total for the organisation including fundraising and overhead. Part IX of the same return puts programme spending at $2,247,879. One of the two is wrong, and the larger figure is the one a casual reader of Part III will take away.',
      'The annual report counts a $343,351.36 "prior ministry fund balance" as 12.28% of "total funding sources". Money carried over from last year is not income, and presenting it as a funding source flatters both the total and every percentage calculated from it.',
      'The largest single funding source, "international partners" at $1,286,916.90 or 46.01%, is unexplained. For a ministry that exists to send money to international partners, having nearly half its income come from them is the kind of circularity that needs a sentence of explanation, and there is none.',
      'The annual report says Reach A Village and Bible League Canada are long-standing partners. Bible League International is already in this directory. If the same church plants and Scripture distributions are reported by both ministries, a donor comparing the two pages is looking at one set of outcomes priced twice.',
    ],
  },
  roi: {
    levers: ['local-workers', 'local-cost-base', 'existing-network'],
    reason:
      'Schedule F of the 2024 return reports $1,861,639 of grants to four regions with zero offices and zero employees, agents or independent contractors in any of them. The ministry has nine employees in total, all in Illinois. What the donor funds is a grant to a church leader who already lives in the region, whose living costs and travel are local, and who is already inside a network of churches — no visa, no relocation, no expatriate salary. Every Schedule F line in Eastern Europe and East Asia is coded "Church Planting".',
  },
  costModel: {
    outcome: 'church started',
    outcomePlural: 'churches started',
    spend: {
      amount: 2247879,
      basis: 'program-services',
      fiscalYear: 'FY2025 (1 Sep 2024 – 31 Aug 2025)',
      sourceId: 'rav-990-24',
    },
    count: {
      amount: 4949,
      label: 'churches started',
      fiscalYear: 'FY2025 (1 Sep 2024 – 31 Aug 2025)',
      sourceId: 'rav-ar25',
    },
    attribution: 'all-program-spend',
    caveat:
      "An upper bound, and a generous one. The same $2,247,879 of programme spending also bought 1,647,638 Scriptures, ran training events for 86,468 people and funded a children's ministry, none of which is a church plant — if the Bibles and the training were charged out separately the church figure would be far lower and the Bibles would have a price of their own. Only $1,861,639 of the programme total actually left the country as grants; the rest is US-side programme cost. And a church started in this fiscal year may have been funded partly out of last year's grants.",
    alternates: [
      {
        label: 'churches started through church planting and adult discipleship only',
        count: 4236,
        note: "The remaining 713 are counted under children's outreach. Using only the adult programme line gives $530.66 per church, and is the closer match to what a donor giving to church planting probably pictures.",
      },
      {
        label: 'foreign grants only, divided by all churches started',
        count: 4949,
        note: 'Charging only the $1,861,639 that Schedule F shows leaving the United States gives $376.16 per church started and excludes every dollar of US-side programme cost.',
      },
    ],
  },
  ministryClaims: [
    {
      quote:
        'In 2025, approximately 80 percent of funds received went directly to supporting international ministry programs.',
      sourceId: 'rav-ar25',
    },
    {
      quote:
        'Bible League Canada and Reach A Village continue a long-standing partnership of faithful service.',
      sourceId: 'rav-ar25',
    },
    {
      quote:
        'Reach A Village has a 4 out of 4-star rating on Charity Navigator and continues to be accredited by ECFA (Evangelical Council for Financial Accountability).',
      sourceId: 'rav-ar25',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 3,
      note: 'A mission and faith statement on the site, and the mission statement names Jesus Christ and His Church directly. The programme is church planting, Scripture distribution and discipleship training with nothing else in it.',
    },
    localLeadership: {
      value: 3,
      note: 'Schedule F reports no office and no employee, agent or contractor in any foreign region; all nine employees are in the United States. The work is done by local church leaders receiving grants.',
    },
    financialTransparency: {
      value: 1,
      note: 'Form 990s are posted for several years and are detailed, including a region-by-region Schedule F. But no audited statements are published despite the return referring to them, and three different expense totals for the same year appear across their own documents without explanation.',
    },
    outcomeEvidence: {
      value: 1,
      note: "Counts are published annually, broken into adult and children's programmes, and the two church figures add exactly to the headline. Nothing else supports them: no definition of a church, no attrition figure, no external check, and the ministry is currently building the field data-collection app it says will let partners track results in real time — which suggests the present counts are collected less systematically than the published totals imply.",
    },
    costEvidence: {
      value: 2,
      note: 'Both halves exist for the same fiscal year and the numerator comes from Part IX of the return rather than from marketing. Held at 2 because the spending total itself is reported three different ways and the audited statements behind it are not published.',
    },
  },
  notVerified: [
    'What counts as a church. Reach A Village publishes no definition — no minimum size, no leadership requirement, no test of whether it is still meeting when counted. The number 4,949 is the product of local leaders reporting to a US office that raises money on the total.',
    'How many of the 4,949 churches survive, and how many ever support themselves. No retention rate, no survival rate and no self-sustainability figure is published anywhere. The cost of starting a church is not the cost of a church that lasts.',
    'Whether the same church plant is counted by Bible League Canada as well. The two ministries describe a long-standing partnership and both count church plants and Scripture distribution.',
    'Why the audited financial statements are not posted. The 990 reconciles to them, so they exist. Without them the $2,247,879 programme figure rests on a self-prepared return.',
    'Which of the three total-expense figures is right, and where the $10,921 difference between the 990 and the annual report went. Management and general is $325,812 on the return and $314,890.69 in the annual report for the same year.',
    'What "international partners" means as a source of $1,286,916.90 of funding, 46.01% of the year\'s total, and whether any of it is money returning from the field.',
    'Who receives the grants. Schedule F reports $1,861,639 across four regions but names no grantee organisation.',
    'Where South America fits. The 990 shows $45,515 of grants there coded "Church Growth", and the annual report\'s country map does not include it.',
    "The 151,779 new believers reported for the year, and the 29,532 adults and 3,948 young people reported baptised. These are the ministry's own claims and are excluded from every calculation here; we do not treat a profession of faith as a delivered unit.",
  ],
  notes: [
    'The fiscal year ran 1 September 2024 to 31 August 2025. The IRS calls this the 2024 return and the ministry calls it the 2025 annual report. Both documents cover the same twelve months, which is what makes the division legitimate.',
    'Schedule F grant detail for the year: East Asia and the Pacific $1,143,964, Europe $338,233, Russia and Neighbouring States $333,927 — all three coded "Church Planting" — and South America $45,515 coded "Church Growth".',
    "The annual report's own expense split is fundraising $234,300.44 (8.38%), management and general $314,890.69 (11.26%), which leaves $2,247,881 for programme against the $2,247,879 on the return. Those two agree to two dollars while the totals differ by $10,921, so the discrepancy is entirely in the overhead lines.",
    'Reported cumulative results since founding in 2012 are published alongside the annual figures. We used the single-year numbers only; a cumulative count divided by one year of spending is the most common way this arithmetic gets inflated.',
    'Scriptures provided in the year break down as 51,808 Bibles, 4,538 study Bibles, 214,175 New Testaments and 1,071,953 portions and booklets. A donor should know that "1,647,638 Scriptures provided" is mostly booklets.',
    "The countries here are entered as regions because that is the level at which spending is disclosed. The ministry's map names Latvia, Lithuania, Belarus, Poland, Ukraine, Moldova, Romania, Serbia, Bulgaria, Albania, North Macedonia, Armenia, Russia, Mongolia, China, Myanmar, Vietnam, Laos, Thailand, Cambodia, the Philippines and Indonesia, with no spending attached to any of them.",
  ],
  siteUrl: 'https://reachavillage.org/',
  giveUrl: 'https://reachavillage.org/how-to-give/',
  sources: [
    {
      id: 'rav-site',
      label: 'Homepage',
      url: 'https://reachavillage.org/',
      publisher: 'Reach A Village',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'rav-faith',
      label: 'Mission and Faith Statement',
      url: 'https://reachavillage.org/about-us/mission-and-faith-statement/',
      publisher: 'Reach A Village',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'rav-fin',
      label: 'Financial Accountability and Annual Reports',
      url: 'https://reachavillage.org/about-us/financial-accountability-annual-reports/',
      publisher: 'Reach A Village',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'The index page for Form 990s and annual reports. No audited or reviewed financial statements appear on it. A /financials path does not exist on this site.',
    },
    {
      id: 'rav-990-24',
      label: 'Form 990 for the year ended 31 August 2025 (IRS tax year 2024)',
      url: 'https://reachavillage.org/images/RAV_Form_990_2024.pdf',
      publisher: 'Reach A Village',
      documentType: 'form-990',
      retrieved: '2026-09-18',
      fiscalYear: 'FY2025 (1 Sep 2024 – 31 Aug 2025)',
      note: 'Part IX line 25: total $2,807,993, programme $2,247,879, management and general $325,812, fundraising $234,302. Schedule D line 1 gives $2,809,413 as total expenses per audited financial statements. Part III line 4e repeats that larger figure as programme service expenses. Schedule F reports $1,861,639 of grants, zero foreign offices and zero foreign employees, agents or contractors.',
    },
    {
      id: 'rav-ar25',
      label: '2025 Annual Report',
      url: 'https://reachavillage.org/images/documents/2025-annual-report.pdf',
      publisher: 'Reach A Village',
      documentType: 'annual-report',
      retrieved: '2026-09-18',
      fiscalYear: 'FY2025 (1 Sep 2024 – 31 Aug 2025)',
      note: 'Source of the 4,949 churches started, the 4,236 / 713 split, the funding-source and expense percentages and the accreditation claims. The headline counts and the funding chart are set as graphics; figures were read off the rendered pages rather than from extracted text alone.',
    },
    {
      id: 'rav-propublica',
      label: 'IRS filings for Reach A Village, EIN 45-5443213',
      url: 'https://projects.propublica.org/nonprofits/organizations/455443213',
      publisher: 'ProPublica Nonprofit Explorer',
      documentType: 'third-party',
      retrieved: '2026-09-18',
      note: 'Used to confirm the EIN and the filing history behind the ministry-posted returns.',
    },
  ],
};
