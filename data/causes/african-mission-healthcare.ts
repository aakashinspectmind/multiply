import type { Cause } from '@/lib/types';

export const africanMissionHealthcare: Cause = {
  slug: 'african-mission-healthcare',
  name: 'African Mission Healthcare',
  legalName: 'African Mission Healthcare Foundation',
  ein: '27-3663856',
  tagline:
    'Pays Christian mission hospitals in Africa to operate on patients who cannot pay, and buys the equipment they operate with.',
  category: 'health',
  countries: [
    'Burundi',
    'Cameroon',
    'Ethiopia',
    'Gabon',
    'Kenya',
    'Liberia',
    'Malawi',
    'South Sudan',
    'Sudan',
    'Tanzania',
    'Uganda',
  ],
  whatTheyDo:
    'African Mission Healthcare does not run hospitals. It funds hospitals other Christians already run — Kijabe in Kenya, Mbingo in Cameroon, Bongolo in Gabon, Gidel in the Nuba Mountains and about a dozen more — by paying for named surgeries through its Surgical Access for Everyone (SAFE) programme, buying equipment and building capacity, and funding the training of African clinicians. It was founded in 2010 by Dr Jon Fielder, an internist who moved to Kenya in 2002, and Mark Gerson, who funded him.',
  accreditations: [
    { label: 'Charity Navigator four stars', sourceId: 'amh-financials' },
    { label: 'Candid Platinum Transparency', sourceId: 'amh-financials' },
    {
      label: 'Excellence in Giving certified transparent',
      sourceId: 'amh-financials',
    },
    {
      label: 'Approved International Charity, Combined Federal Campaign',
      sourceId: 'amh-financials',
    },
  ],
  verification: 'documents-reviewed',
  biblicalAlignment: {
    mandate:
      'The Samaritan on the Jericho road did two things: he bandaged the man himself, and then he paid an innkeeper to keep caring for him and promised to cover the overrun. African Mission Healthcare is the second half of that parable turned into an organisation. It does not treat anyone. It pays the people who do, at hospitals founded by missionaries for exactly this purpose, and the instruction Jesus attached to the story was to go and do likewise.',
    scriptures: [
      {
        ref: 'Luke 10:34–35',
        text: 'He went to him and bound up his wounds, pouring on oil and wine. Then he set him on his own animal and brought him to an inn and took care of him. And the next day he took out two denarii and gave them to the innkeeper, saying, “Take care of him, and whatever more you spend, I will repay you when I come back.”',
      },
      {
        ref: 'Matthew 10:8',
        text: 'Heal the sick, raise the dead, cleanse lepers, cast out demons. You received without paying; give without pay.',
      },
      {
        ref: 'Matthew 25:36',
        text: 'I was naked and you clothed me, I was sick and you visited me, I was in prison and you came to me.',
      },
    ],
    concerns: [
      'This is the one cause in the health category whose own faith commitment is second-hand. African Mission Healthcare publishes no statement of faith and does not describe itself as a Christian organisation. What it says is that it funds “Christian medical missionaries and mission hospitals”, that its co-founder Dr Fielder was “motivated by his Christian faith”, and that its other co-founder Mark Gerson was “Inspired by his Jewish faith” to do the same work. It also awards the L’Chaim Prize for Outstanding Christian Medical Mission Service. The gospel is being preached at the hospitals it funds, by people it did not hire. That is a real and defensible arrangement, and it is not the same thing as a Christian ministry, so we have scored it as what it is.',
      'Roughly 96% of programme spending leaves the building as grants — $11,209,194 of $11,660,370 in 2025. Everything a donor is buying happens inside someone else’s accounts, audited by someone else, counted by someone else.',
      'Three members of one family sit on the board, which the Form 990 discloses: Mark Gerson as chairman, Erica Gerson and Richard Gerson as directors. The Gersons are also the reason the administrative ratio is so low — they and other donors “voluntarily underwrite these expenses”. Founder funding and founder governance are concentrated in the same household.',
      'Paying a hospital per surgery rewards volume. African Mission Healthcare says the sponsorships also “reward the hospitals for performing quality surgery”, but nothing published explains how quality is assessed or what stops a partner from selecting easier cases.',
    ],
  },
  roi: {
    levers: ['existing-network', 'local-cost-base', 'local-workers', 'durable-asset'],
    reason:
      'The hospital already exists, the surgeon is already there, and in most cases both were paid for by a century of other people’s mission giving. African Mission Healthcare buys the marginal operation on top of that sunk base, at African salary and supply costs, which is why its own sponsorship price is in the hundreds of dollars rather than the thousands. The second lever is equipment: 2025 investments in equipment and infrastructure “totaled $2.7 million” and the ministry expects them to make more than 2.8 million lifetime patient visits possible, which is capacity that keeps producing after the gift. The third is training — 558 health workers in 2025 — in a continent the ministry says has 24% of the world’s illness and 3% of its health workers.',
  },
  costModel: {
    outcome: 'surgery',
    outcomePlural: 'surgeries',
    spend: {
      amount: 11660370,
      basis: 'program-services',
      fiscalYear: '2025',
      sourceId: 'amh-990-25',
    },
    count: {
      amount: 5942,
      label: 'surgeries',
      fiscalYear: '2025',
      sourceId: 'amh-highlights-25',
    },
    attribution: 'all-program-spend',
    caveat:
      'This one over-attributes twice, and the second way is the important one. First, the same programme budget paid for 384,679 clinical visits, 3,606 cataract procedures, 1,663 deliveries, 558 trainees and $2.7 million of equipment that will still be working in ten years — none of that is a surgery. Second, and more fundamentally: African Mission Healthcare gave away 96% of this money as grants to hospitals that have their own budgets, their own donors and their own surgeons. Those 5,942 surgeries were not paid for by this $11.7 million alone. Read the figure as the cost of African Mission Healthcare’s whole programme divided by the surgeries it counted, which is a long way above what it pays per operation — the ministry’s own SAFE price is $430.',
    alternates: [
      {
        label: 'surgical and corrective procedures reported on the Form 990',
        count: 6726,
        note: 'The 990 says 6,726 “surgical and corrective procedures” for the same calendar year in which the highlights book says 5,942 surgeries and 3,606 cataract procedures. Neither document defines its unit and the two do not reconcile.',
      },
      {
        label: 'surgeries African Mission Healthcare directly sponsored through SAFE',
        count: 3294,
        note: 'The narrowest count, and the only one tied to a named programme line. SAFE itself spent $1,404,561 — dividing all programme spending by SAFE’s surgeries mixes a small numerator’s output with the whole budget.',
      },
      {
        label: 'clinical visits',
        count: 384679,
        note: 'The broadest unit published, at about $30 each. An outpatient visit and a laparotomy are not the same event and this denominator should never be compared with a cost per surgery.',
      },
    ],
  },
  ministryClaims: [
    {
      quote:
        'In 2025, SAFE sponsored 3,294 surgeries at an average cost of $430 and 432 normal deliveries at an average cost of $30.',
      sourceId: 'amh-highlights-25',
      impliedCostPerOutcome: 430,
      sameUnitAsCostModel: true,
      impliedOutcome: 'sponsored surgery',
    },
    {
      quote:
        'According to collaborators at Duke University, surgery to prevent a year of disability costs just $67 at Gidel Hospital in the Nuba Mountains',
      sourceId: 'amh-impact',
      impliedCostPerOutcome: 67,
      impliedOutcome: 'year of disability averted',
    },
    {
      quote: '96% of giving goes to Healthcare for Patients',
      sourceId: 'amh-financials',
    },
    {
      quote: '99%  success rate',
      sourceId: 'amh-impact',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 1,
      note: 'The work is done at Christian mission hospitals and the ministry funds “Christian medical missionaries” by name, but African Mission Healthcare itself publishes no statement of faith, is co-founded and chaired by a donor who describes his motivation as Jewish, and never claims to be a Christian organisation. The gospel is in the hospitals, not in the funder’s own words.',
    },
    localLeadership: {
      value: 2,
      note: 'The surgery, the hospital and the surgeon are African or long-resident missionary, and 558 African health workers were trained in 2025. But the model is a US foundation awarding grants: the decisions about which hospital gets funded, and the board making them, are American.',
    },
    financialTransparency: {
      value: 2,
      note: 'The full Form 990 is posted on the site with Part III programme detail and a line-by-line Part IX, and four external ratings are displayed. Marked down because the 2025 audited financial statements are behind a page with no downloadable file, and because ECFA — the accreditation that speaks to evangelical governance — is absent.',
    },
    outcomeEvidence: {
      value: 2,
      note: 'Counts are specific and unusually varied: surgeries, cataract procedures, deliveries, C-sections, trainees, clinical visits. Marked down because the 990 and the highlights book give different numbers for the same year and neither defines its unit, and because every count is produced by a grantee hospital rather than by African Mission Healthcare.',
    },
    costEvidence: {
      value: 2,
      note: 'Rare and creditable: the ministry publishes an average cost per sponsored surgery, and $430 × 3,294 plus $30 × 432 comes to $1,429,380 against the $1,404,561 the 990 reports for the SAFE programme — agreement within 1.8%, which is the best internal check in this category. Marked down because that price covers one small programme line and is nowhere reconciled with the other $10.3 million.',
    },
  },
  notVerified: [
    'What the $430 includes. It is a sponsorship payment to a hospital, not the cost of a surgery: the theatre, the surgeon’s salary, the building and the sterilising equipment were paid for by someone else, often decades ago. Dividing all programme spending by all surgeries gives about $1,962 — 4.6 times the advertised price — and the gap between those two numbers is the hospital’s own subsidy, not an inefficiency. Neither figure is the full cost of an operation, and nothing published states what that is.',
    'The Form 990 reports 6,726 “surgical and corrective procedures” in 2025. The highlights book for the same year reports 5,942 surgeries plus 3,606 cataract procedures. The 990 reports “approximately 474,841 direct patient visits”; the highlights book reports 384,679 clinical visits. Two documents from the same ministry about the same twelve months, and we cannot reconcile either pair.',
    'The 2025 audited financial statements are not downloadable. The financial accountability page links to a page for them, and that page contains no file. Everything financial here comes from the Form 990.',
    'Who counted the surgeries. African Mission Healthcare performs none of them; each number originates with a grantee hospital, and no independent verification of any partner’s count is published.',
    'The Duke University figure of $67 per year of disability averted is attributed to “collaborators” with no paper, date or method cited. We could not find the underlying study.',
    'The “99% success rate” in the SAFE programme is published without a definition of success, a follow-up window or a sample size. For surgery those three things are the claim.',
    'African Mission Healthcare is not ECFA accredited, and no statement of faith or doctrinal basis is published anywhere on the site.',
    'How much of 2025’s spending bought future years rather than this one. The ministry says its investments will enable more than 2.8 million lifetime patient visits — so a large share of this year’s money is capacity, not care delivered, and no split is published.',
  ],
  notes: [
    '2025 totals from the Form 990: $13,288,857 of expenses, of which $11,660,370 programme, $627,876 management and general, $1,000,611 fundraising. Grants made up $11,209,194 of the programme figure.',
    'The administrative ratio is genuinely low, and the ministry explains why: “Your portion of our administrative and fundraising costs remains below 4% due to the generosity of donors who voluntarily underwrite these expenses.” The overhead is real and someone else is paying it. A donor comparing this ratio with other ministries is not comparing like with like.',
    'For a comparison inside this directory: CURE International, which owns and staffs its own children’s hospitals, spends about $1,900 of programme money per surgery. African Mission Healthcare, which owns nothing, lands at about $1,962 on the same arithmetic. The similarity is a coincidence of two very different models and should not be read as either one being validated by the other.',
    'The 2025 figures come from a calendar-year Form 990 filed in 2026 and a highlights book published in 2026 covering 2025. Both are the ministry’s most recent.',
  ],
  siteUrl: 'https://africanmissionhealthcare.org/',
  giveUrl: 'https://africanmissionhealthcare.org/donation/donate/',
  sources: [
    {
      id: 'amh-site',
      label: 'Homepage',
      url: 'https://africanmissionhealthcare.org/',
      publisher: 'African Mission Healthcare',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'amh-about',
      label: 'About Us',
      url: 'https://africanmissionhealthcare.org/about-us/',
      publisher: 'African Mission Healthcare',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Source of the mission statement and of the description of the two founders, one Christian and one Jewish.',
    },
    {
      id: 'amh-history',
      label: 'Our History',
      url: 'https://africanmissionhealthcare.org/about-us/history/',
      publisher: 'African Mission Healthcare',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Where the L’Chaim Prize for Outstanding Christian Medical Mission Service is described.',
    },
    {
      id: 'amh-impact',
      label: 'Our Impact',
      url: 'https://africanmissionhealthcare.org/about-us/our-impact/',
      publisher: 'African Mission Healthcare',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'The headline counters on this page are loaded by script and did not render for us; the quoted claims are from the printed list of clinical results below them.',
    },
    {
      id: 'amh-financials',
      label: 'Financial Accountability',
      url: 'https://africanmissionhealthcare.org/financial-accountability/',
      publisher: 'African Mission Healthcare',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Lists the four external ratings. The “96%” is rendered by an animated counter; we took it from the page’s own markup. The link to the 2025 audited statements leads to a page with no file on it.',
    },
    {
      id: 'amh-990-25',
      label: '2025 Form 990',
      url: 'https://africanmissionhealthcare.org/wp-content/uploads/2026/08/2025-AMHF-990-Pubilc-Copy.pdf',
      publisher: 'African Mission Healthcare',
      documentType: 'form-990',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note: 'Calendar 2025. Part IX line 25 gives programme $11,660,370 of $13,288,857 total. Part III splits it into $10,255,809 of hospital support and $1,404,561 of SAFE surgical sponsorship, and Schedule O carries the 3,294 surgeries, 432 births, 558 trainees and $2.7 million of equipment.',
    },
    {
      id: 'amh-highlights-25',
      label: 'Your Impact in 2025 (highlights book)',
      url: 'https://africanmissionhealthcare.org/wp-content/uploads/2026/03/2026-Highlights-Book-single-pages.pdf',
      publisher: 'African Mission Healthcare',
      documentType: 'annual-report',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note: 'A designed annual report with no financial statements in it. Every count here comes from graphic panels, and the SAFE cost sentence is set across nine short lines inside an illustration — we have reflowed it to one line and changed nothing else.',
    },
    {
      id: 'amh-propublica',
      label: 'IRS filings for African Mission Healthcare Foundation, EIN 27-3663856',
      url: 'https://projects.propublica.org/nonprofits/organizations/273663856',
      publisher: 'ProPublica Nonprofit Explorer',
      documentType: 'third-party',
      retrieved: '2026-09-18',
    },
  ],
};
