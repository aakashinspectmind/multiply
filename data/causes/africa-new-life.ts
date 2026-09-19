import type { Cause } from '@/lib/types';

export const africaNewLife: Cause = {
  slug: 'africa-new-life',
  name: 'Africa New Life Ministries',
  legalName: 'Africa New Life Ministries International',
  ein: '48-1291935',
  tagline:
    'Rwandan-founded and Rwandan-staffed: pays the school fees of 12,326 students and publishes the count.',
  category: 'education',
  countries: ['Rwanda'],
  whatTheyDo:
    'Africa New Life pays for Rwandan children to stay in school — fees, uniform, scholastic materials, basic medical care outside the national insurance scheme, a monthly meal and an annual camp — and commits to a student until they finish secondary school or a vocational equivalent, with no age cut-off. It also runs its own schools under the New Life Christian Academy name, university and vocational scholarships, the Dream Medical Center hospital, Africa College of Theology, a women’s vocational sewing programme, church planting and a school feeding programme. Founded in 2001 by Dr. Charles and Pastor Florence Mugisha, Rwandans who returned after the 1994 genocide; the Portland office exists to raise the money.',
  accreditations: [
    {
      label: 'Evangelical Council for Financial Accountability (ECFA)',
      sourceId: 'anl-financials',
    },
    {
      label: 'Candid (GuideStar) platinum seal, 2026',
      sourceId: 'anl-financials',
    },
  ],
  verification: 'documents-reviewed',
  biblicalAlignment: {
    mandate:
      'Scripture tells parents to teach their children the words of God walking on the road, lying down and rising up — which assumes a child who can be taught, and in Rwanda that means a child who is in a classroom rather than working. Teaching a child to read is also what makes every other ministry legible to them: a Bible needs a reader. And Christ’s welcome of children is not sentiment about childhood, it is a claim about who the Kingdom belongs to.',
    scriptures: [
      {
        ref: 'Deuteronomy 6:6–7',
        text: 'And these words that I command you today shall be on your heart. You shall teach them diligently to your children, and shall talk of them when you sit in your house, and when you walk by the way, and when you lie down, and when you rise.',
      },
      {
        ref: 'Proverbs 22:6',
        text: 'Train up a child in the way he should go; even when he is old he will not depart from it.',
      },
      {
        ref: 'Matthew 19:14',
        text: 'Let the little children come to me and do not hinder them, for to such belongs the kingdom of heaven.',
      },
    ],
    doctrine: {
      label:
        'Mission statement naming belief in Jesus as Savior. We found no separate statement of faith on the site.',
      sourceId: 'anl-annual-26',
    },
    concerns: [
      'The ministry counts and publishes spiritual decisions as impact statistics — "930 Students made decisions for Christ at camps" and "1,411 Parents made decisions for Christ through sponsorship programs" sit in the same table as meals served. We quote those as claims and do not treat them as outcomes. It also raises the question the ministry does not address: parents whose child’s school fees depend on the programme are not neutral listeners, and nothing published says how that pressure is managed.',
      'Its own schools charge tuition. The 2026 annual report tells the story of a boy whose father "could manage the tuition" at New Life Christian Academy until "the school grew, the costs increased, and it became difficult to keep up", at which point sponsorship covered him. Fee-charging Christian schools can draw the strongest pupils and teachers out of the government system, and a child without a sponsor and without a paying parent is a child who does not enrol. Nothing published says how many applicants are turned away for lack of a sponsor.',
      'Sponsorship is advertised one-to-one and administered as a pool. The FAQ is straight about it — "your sponsorship donations are placed into a community pool" — but the marketing page is built around one named child and one named sponsor. Both things are true; only one of them is on the page a donor arrives at.',
      'Fundraising is 9.91% of spending and rose to $1,536,156 in 2025, nearly three times administration. That is a legitimate cost of running a sponsorship programme, which is marketing-intensive by design, but it is money that did not reach Rwanda.',
    ],
  },
  roi: {
    levers: ['local-workers', 'local-cost-base', 'existing-network'],
    reason:
      'Rwanda’s income per person is about 77 times below the United States, and almost the entire payroll is Rwandan — the ministry claims 96% of staff, more than 700 people, are local East Africans, against 26 staff in Portland. A Rwandan teacher’s salary, a Rwandan nurse’s wage and a Rwandan builder’s day rate are all priced to that economy, which is why a year of school here costs roughly what a few textbooks cost in an American district. The fees are paid into schools that already exist and are already staffed, so the gift is not building the channel.',
  },
  costModel: {
    outcome: 'year of school for a sponsored student',
    outcomePlural: 'years of school for sponsored students',
    spend: {
      amount: 13445758,
      basis: 'program-services',
      fiscalYear: '2025',
      sourceId: 'anl-annual-26',
    },
    count: {
      amount: 12326,
      label: 'students sponsored',
      fiscalYear: '2025',
      sourceId: 'anl-annual-26',
    },
    attribution: 'all-program-spend',
    caveat:
      'An upper bound. The same program total runs the Dream Medical Center hospital — 1,439 babies born there in 2025 — Africa College of Theology with more than 600 pastors and ministry leaders enrolled, church planting, a women’s vocational sewing programme, and 5,775,546 meals served through the Food & Care programme. None of that is school fees. The count is students sponsored, which is enrolment in the programme rather than days attended or years completed, and the ministry’s own advertised sponsorship price is about half this figure. Read it as everything Africa New Life spent in Rwanda divided by the students on its books, which is what it is. Both halves are 2025 and both come from the same document, but the ministry states the 2025 financials are unaudited as of press time.',
    alternates: [
      {
        label: 'students sponsored in K-12 education only',
        count: 10500,
        note: 'The educational sponsorship page says "We sponsor more than 10,500 students", so this is a floor rather than a count — it excludes the 900-plus post-secondary students, who are the most expensive students in the programme.',
      },
      {
        label: 'students who finished Senior 6 (12th grade) in 2025',
        count: 693,
        note: 'Completion rather than enrolment, and the only number here that represents a finished education. Dividing by it charges one year of ministry-wide spending to one year’s graduating class, which vastly overstates the cost of a graduate.',
      },
    ],
  },
  ministryClaims: [
    {
      quote:
        'When you sponsor a child in Rwanda for just $43 a month, you help their family by assisting them with school fees so they can pay for other expenses.',
      sourceId: 'anl-sponsorship',
      impliedCostPerOutcome: 516,
      sameUnitAsCostModel: true,
      impliedOutcome: 'a year of school fees, a uniform and scholastic materials for one student',
    },
    {
      quote:
        'Across all our ministry areas, 86.72% of expenses went toward our programs and services in 2025.',
      sourceId: 'anl-financials',
    },
    {
      quote: '96% of staff, 700+ people, are local East Africans',
      sourceId: 'anl-sponsorship',
    },
    {
      quote: '930 Students made decisions for Christ at camps',
      sourceId: 'anl-annual-26',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 3,
      note: 'The mission statement leads with Christ and names the point — "to communicate the message of Jesus Christ in word and deed" and "belief in Jesus as Savior" — and the ministry plants churches, runs a theology college and puts discipleship inside the sponsorship programme rather than beside it. Marked at 3 despite there being no formal statement of faith, because the doctrinal content is explicit in the mission itself.',
    },
    localLeadership: {
      value: 3,
      note: 'Founded by Rwandans who went home, led in country by a Rwandan executive director, and staffed at a claimed 96% by local East Africans — more than 700 people against 26 in the United States. The US entity raises money and does not run programmes. This is the strongest local-leadership case in this directory.',
    },
    financialTransparency: {
      value: 2,
      note: 'ECFA accredited, twelve consecutive annual updates posted back to 2015, and the functional split published to the cent. Marked down because the current year’s figures are explicitly unaudited, the audited statements are promised for a later date rather than posted, and the Form 990 is only available by writing to the Portland office and paying a $9 fee — the one document a donor most wants is the one behind a counter.',
    },
    outcomeEvidence: {
      value: 2,
      note: 'A precise statistics report: 12,326 students sponsored, 693 Senior 6 graduates, 93.4% national exam pass rate, 5,775,546 meals, 10,023 welfare officer home visits. The units are defined well enough to divide. Marked down because the headline number is programme enrolment rather than attendance or completion, nothing reports how many students left the programme during the year, and the same table counts professions of faith as impact.',
    },
    costEvidence: {
      value: 3,
      note: 'Both halves of the division are printed in the same document for the same year, and the ministry separately advertises a per-student price we can hold our figure against. The gap between the two is large and interesting, which is the point.',
    },
  },
  notVerified: [
    'The 2025 financial figures are the ministry’s own and unaudited. The report says so plainly: "All financials figures cited in this document for fiscal year 2025 are unaudited as of press time." Audited numbers were promised for June 2026 and we could not find them posted.',
    'Why a year of school costs $43 a month in the marketing and about $1,091 in the arithmetic. Part of the answer is in the FAQ — secondary students are "paired with two sponsors (or one sponsor supporting at a higher amount) due to higher secondary education costs" — and part of it is that the program total also runs a hospital and a theology college. The ministry publishes no per-student cost of its own, so we cannot close the gap.',
    '12,326 students sponsored is enrolment in the sponsorship programme. Nothing published says how many of those students attended school for the full year, how many left, or how many were added mid-year, so a cost per student-year assumes the roll was roughly stable.',
    'Whether the advertised $43 covers the full cost of a place or a share of it. Fees are paid to schools, including schools Africa New Life runs, and the site never says what a place actually costs or what an unsponsored family pays.',
    'How many children have applied and are waiting. The site refers to "waiting students" and high-priority students "who have been waiting the longest for a sponsor" without a number, so the size of the unmet need is unstated.',
    'The site says "more than 12,000 students" in three places while the statistics report says 12,326. We used the precise figure; a reader should know the rounded one is what most pages show.',
    'Whether restricted gifts are assessed for overheads. The ministry publishes a functional split but no policy on how a gift designated for a student is charged for administration.',
    'We treat the 930 students and 1,411 parents reported as making decisions for Christ as a claim, not an outcome. Nothing published says how those decisions were recorded or by whom.',
  ],
  notes: [
    'Scale check against IRS filings: ProPublica reports 2023 revenue of $15,114,225 and expenses of $15,922,172, consistent with the 2025 figures the ministry publishes itself. The ministry has run at roughly $15 million a year for several years while the student count kept rising.',
    'Since 2001 the ministry reports 19,652 students served through educational sponsorship, 5,441 high school and vocational graduates and 1,113 post-secondary graduates. Those are cumulative 25-year totals and cannot be divided by one year of spending — they are here for scale only.',
    'The ministry commits to a student until they finish secondary school or a vocational equivalent regardless of age, and says there is no ageing out. That is unusual: most sponsorship programmes have an exit age, and this one carries the cost of a slow student rather than dropping them.',
    'Expenses exceeded revenue in 2023 by $807,947 according to IRS filings, and 2025 shows a small surplus of $209,529. This is a ministry running close to the line, not sitting on reserves.',
  ],
  siteUrl: 'https://www.africanewlife.org/',
  giveUrl: 'https://www.africanewlife.org/donate/',
  sources: [
    {
      id: 'anl-site',
      label: 'Homepage',
      url: 'https://www.africanewlife.org/',
      publisher: 'Africa New Life Ministries',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'anl-financials',
      label: 'Financial Accountability',
      url: 'https://www.africanewlife.org/about-us/financial-accountability/',
      publisher: 'Africa New Life Ministries',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Source of the ECFA and Candid accreditations, the 86.72% program figure, and the statement that 26 US staff support more than 700 team members in Rwanda. Links annual updates back to 2015.',
    },
    {
      id: 'anl-annual-26',
      label: '2026 Annual Update (fiscal year 2025)',
      url: 'https://www.africanewlife.org/wp-content/uploads/2026/04/ANLM_2026_AnnualUpdate_Booklet.pdf',
      publisher: 'Africa New Life Ministries',
      documentType: 'annual-report',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note: 'A 17-page designed PDF. Both halves of our division are printed in it: program expenses of $13,445,758 (86.72% of $15,504,010 total) on the financials page, and 12,326 students sponsored in the 2025 statistics report. The document states the 2025 figures are unaudited as of press time.',
    },
    {
      id: 'anl-annual-page',
      label: 'Annual Report 2026 web page',
      url: 'https://www.africanewlife.org/annual-report-2026/',
      publisher: 'Africa New Life Ministries',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'The same financials as the PDF, plus the 25-year cumulative counters.',
    },
    {
      id: 'anl-sponsorship',
      label: 'About Sponsorship',
      url: 'https://www.africanewlife.org/sponsorship/about-sponsorship/',
      publisher: 'Africa New Life Ministries',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Source of the $43 a month price and the claim that 96% of staff are local East Africans.',
    },
    {
      id: 'anl-faq',
      label: 'Frequently Asked Questions',
      url: 'https://www.africanewlife.org/sponsorship/frequently-asked-questions/',
      publisher: 'Africa New Life Ministries',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Explains that sponsorship money is pooled rather than passed to a family, and that secondary students need two sponsors.',
    },
    {
      id: 'anl-education',
      label: 'Educational Sponsorship',
      url: 'https://www.africanewlife.org/our-work/educational-sponsorship/',
      publisher: 'Africa New Life Ministries',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Source of the "more than 10,500 students" K-12 figure used as an alternate denominator.',
    },
    {
      id: 'anl-propublica',
      label: 'IRS filings for Africa New Life Ministries International, EIN 48-1291935',
      url: 'https://projects.propublica.org/nonprofits/organizations/481291935',
      publisher: 'ProPublica Nonprofit Explorer',
      documentType: 'third-party',
      retrieved: '2026-09-18',
      note: 'Structured IRS data for tax years 2019–2023, used only as a scale check. ProPublica blocks automated PDF downloads, so we read the extracted figures rather than the returns.',
    },
  ],
};
