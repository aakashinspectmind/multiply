import type { Cause } from '@/lib/types';

export const helpThePersecuted: Cause = {
  slug: 'help-the-persecuted',
  name: 'Help The Persecuted',
  legalName: 'Help the Persecuted, Inc.',
  ein: '83-1799054',
  tagline:
    'An indigenous field team that screens individual cases of persecution in the Muslim world and pays for what each family needs — a relief kit, a safe house, a business, a funeral.',
  category: 'persecuted-church',
  countries: [
    'Middle East & North Africa',
    'Central Asia',
    'Afghanistan',
    'Iran',
    'Iraq',
    'Lebanon',
    'Syria',
  ],
  whatTheyDo:
    'Help The Persecuted works one household at a time. Its own account of the method is a screening process, not a programme catalogue: an indigenous Field Ministry Team takes referrals of persecuted Christians in distress, hears the story, grades the case by complexity of need and cost, and — once due diligence is done — buys whatever that case requires. The audited statements list what that means in practice: emergency safe-house housing, food and rent, transport and relocation, small business grants and vocational training, construction to rebuild homes and family businesses, medical costs arising from torture or abuse, trauma counselling, and pastoral care with connection to a local church. It calls the sequence “Rescue, Restore, and Rebuild”. The visible units are Emergency Relief Kits (food staples plus a Bible and discipleship materials, delivered in person), a network of 21 safe houses across the Middle East and North Africa, an Enduring Livelihood programme that funds family businesses, the Seeds of Hope Farm in Lebanon with 34 commercial greenhouses on 1.3 acres, and a Widow’s List launched in the year to June 2025. The organisation was incorporated in Georgia in August 2018 and is run from Atlanta.',
  accreditations: [
    {
      label: 'Accredited member, Evangelical Council for Financial Accountability',
      sourceId: 'htp-financials-page',
    },
    {
      label: 'Excellence in Giving Certified Transparent Charity',
      sourceId: 'htp-financials-page',
    },
    { label: 'Candid Platinum Transparency', sourceId: 'htp-financials-page' },
  ],
  verification: 'documents-reviewed',
  biblicalAlignment: {
    mandate:
      'Hebrews 13:3 does not ask for sympathy, it asks for a change of position: remember them as though in prison with them, as though it were your own body being mistreated. A body does not send a press release to its own wounded part. Help The Persecuted answers that verse with the most literal thing available — somebody physically goes, screens the case, and pays the bill. Matthew 25 lists the same bill item by item, food, clothing, sickness, prison, and Galatians 6:10 sets the order of priority: to everyone, and especially to the household of faith.',
    scriptures: [
      {
        ref: 'Hebrews 13:3',
        text: 'Remember those who are in prison, as though in prison with them, and those who are mistreated, since you also are in the body.',
      },
      {
        ref: 'Matthew 25:35–36',
        text: 'For I was hungry and you gave me food, I was thirsty and you gave me drink, I was a stranger and you welcomed me, I was naked and you clothed me, I was sick and you visited me, I was in prison and you came to me.',
      },
      {
        ref: 'Galatians 6:10',
        text: 'So then, as we have opportunity, let us do good to everyone, and especially to those who are of the household of faith.',
      },
      {
        ref: 'James 1:27',
        text: 'Religion that is pure and undefiled before God the Father is this: to visit orphans and widows in their affliction, and to keep oneself unstained from the world.',
      },
    ],
    doctrine: { label: 'Statement of Faith', sourceId: 'htp-faith' },
    concerns: [
      'Help The Persecuted files no Form 990 at all, and its IRS record contains no return of any kind since exemption was granted in March 2019. The audited statements state it plainly: “The Organization is not required to file income tax returns.” The site’s explanation is that a 990’s disclosures — “staff names, locations, and our local organizations” — “would create a targeting list for oppressive governments and extremists”, and it claims exemption “As an Association of Churches”. The security argument about locations and local partners is credible and we do not dispute it. But a 990 also carries officer compensation, the five highest-paid contractors, the board roster and the related-party questions, none of which are village names, and none of which are disclosed anywhere else either. One silence is protective; the other is simply a silence, and both are being defended with the same sentence.',
      'The outcome counts on this page are not audited amounts. They sit in a note to the financial statements headed “Notable Achievements”, which is management’s narrative about the year, printed inside a document whose audited content is the dollars. The auditor’s opinion covers the financial position and the cash flows. It does not cover 15,145, and no auditor anywhere has tested how a kit is counted.',
      'No board member, officer or staff member is named on the ministry’s own website. The only individual we could put a name to is the top leader as recorded by ECFA, Mr Joshua Youssef, and the IRS record carries the organisation in care of the same name. For a ministry spending $5.98 million a year, a donor cannot see who governs it, who is paid what, or whether anyone independent of the founder is in the room.',
      'The ministry’s figures disagree with each other about its own footprint. The impact page says 17 countries; the audited note for the same twelve months says 15. ECFA records the founding year as 2011; the audited statements say the corporation was formed on 24 August 2018. Neither gap is large and neither is explained.',
      'The safe-house claim includes “61% improvement in ability to practice their Christian faith freely”. That is a precise percentage about an interior condition, published with no instrument, no baseline, no sample size and no follow-up window. Where the physical counts in the same note are checkable in principle, this one is not, and its precision invites a confidence it has not earned.',
    ],
  },
  roi: {
    levers: ['local-workers', 'local-cost-base', 'existing-network', 'durable-asset'],
    reason:
      'The delivery mechanism is an indigenous Field Ministry Team working “closely with trusted church partners in local areas”, so there is no expatriate salary, no relocation and no channel to build — the churches that identify the cases were already there. The money is then spent inside economies where a family’s annual income is measured in hundreds of dollars: gross national income per person is $390 in Afghanistan, $720 in Syria, $3,560 in Lebanon and $5,690 in Iraq, which is why a kit of rice, flour and oil for a household of four is priced in tens of dollars rather than hundreds. The third lever is that a meaningful share of the work is not consumption at all. The 116 businesses funded in the year, the 34 greenhouses on 1.3 acres and the rebuilt homes keep producing after the gift, and the ministry claims those businesses “can generate incomes over 80% higher than national average wages”.',
  },
  costModel: {
    outcome: 'Emergency Relief Kit delivered to a persecuted family',
    outcomePlural: 'Emergency Relief Kits delivered to persecuted families',
    spend: {
      amount: 4874814,
      basis: 'program-services',
      fiscalYear: 'year to June 2025',
      sourceId: 'htp-fs-25',
    },
    count: {
      amount: 15145,
      label: 'Emergency Relief Kits distributed',
      fiscalYear: 'year to June 2025',
      sourceId: 'htp-fs-25',
    },
    attribution: 'all-program-spend',
    caveat:
      'We do not divide by the number Help The Persecuted leads with. Its headline is “more than 104,000 persecuted believers this year”, and the audited note gives it precisely as 104,184 beneficiaries, which against the same spending reads $46.79 — but that figure is largely derived rather than counted. Each kit “provides an average family of four”, so the 15,145 kits alone imply about 60,580 people, well over half the beneficiary total, and the same note reports Lebanon figures that are cumulative “Since April 2023” alongside figures for the year, so the 104,184 cannot be tied cleanly to twelve months of spending. The kits can: they are a discrete, in-person delivery counted for the year. What makes $321.88 a ceiling rather than a price is the numerator. Every programme dollar is charged to the kits, and the same $4,874,814 also ran 21 safe houses, funded 116 new businesses and a training programme, kept 34 greenhouses producing, paid for medical care, trauma counselling, schooling, relocation, funerals and the salaries of the field team. A kit itself is food staples plus a Bible and discipleship materials plus a visit, and the ministry never says what one costs. Nor is there a way to find out from the documents: the audited statement of functional expenses is classified by nature rather than by programme — International Ministry Programs $2,812,898, Field Operations $857,890, salaries, marketing, travel — so there is no line that belongs to kits and nothing to check a smaller figure against. Read the number as what all of this ministry’s work cost, expressed per kit, and treat the true price of a kit as unknown and much lower.',
    alternates: [
      {
        label: 'the 104,184 beneficiaries the ministry leads with',
        count: 104184,
        note: 'About $46.79, and the figure on the front of the impact page. A beneficiary is undefined, is counted across every programme, and is in part arithmetic on the kits themselves — 15,145 kits at four people each is 60,580 of it. This is the floor of the range, not a price.',
      },
      {
        label:
          'the 642 persecuted Christians the year’s new businesses carried to economic independence',
        count: 642,
        note: 'About $7,593. The strictest denominator in the note and the one closest to a durable result, but it charges the whole ministry to one programme and counts an outcome — independence — that the note asserts rather than measures.',
      },
      {
        label: 'the same 15,145 kits, charged the whole cost of running the ministry',
        count: 15145,
        spend: 5984905,
        note: 'About $395.17. Adds the $352,230 of administration and the $757,861 of fundraising to the numerator. Worth seeing, because the programme share of 81.5% is the ministry’s own split and nobody outside it has tested where a marketing dollar stops being fundraising and starts being ministry.',
      },
    ],
  },
  ministryClaims: [
    {
      quote: 'We’ve helped more than 104,000 persecuted believers this year',
      sourceId: 'htp-impact',
    },
    {
      quote:
        'During the fiscal year ending June 30, 2025 (“FY25”), the Organization directly helped over 104,184 beneficiaries in 15 countries, with interventions ranging from dealing with life-saving rescues and safe-housing, to emergency needs and living expenses, to medicines, medical care and trauma counseling to assisting persecuted individuals in starting new businesses to foster independence.',
      sourceId: 'htp-fs-25',
    },
    {
      quote:
        'Emergency Relief Kits: Additional funds were deployed into the program this year, enabling the Field Ministry Team to distribute 15,145 Emergency Relief Kits (43% increase on the prior year). Each kit provides an average family of four with critical food essentials like rice, flour, and oil, alongside Bible and discipleship materials and the pastoral care of the team.',
      sourceId: 'htp-fs-25',
    },
    {
      quote:
        'Safe house Network: Operating 21 safe houses across the MENA region, we provided immediate sanctuary for persecuted Christians facing death threats, torture, and family violence. Residents receive comprehensive care including medical treatment and counseling, with average stays enabling 61% improvement in ability to practice their Christian faith freely.',
      sourceId: 'htp-fs-25',
    },
    {
      quote:
        'These family businesses can generate incomes over 80% higher than national average wages, breaking cycles of poverty and enabling people to move from dependence to dignity.',
      sourceId: 'htp-fs-25',
    },
    {
      quote:
        "As an Association of Churches, we're exempt from these disclosures while maintaining full financial accountability through independent audits and annual reports.",
      sourceId: 'htp-financials-page',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 3,
      note: 'The ministry exists because of who the recipients follow: cases are screened for “bona fide” persecution for faith in Christ, every relief kit carries a Bible and discipleship materials, the note lists pastoral care and connection to a local church as a deliverable alongside food and rent, and the stated vision is a persecuted Church that “endures, flourishes, and multiplies”. A statement of faith is published and Matthew 25:40 is quoted on the page describing the work.',
    },
    localLeadership: {
      value: 1,
      note: 'The people doing the work are indigenous by design — the audited note calls the delivery mechanism an “indigenous Field Ministry Team” working through trusted local church partners, and that is the ministry’s central operating claim. We have scored it at 1 rather than higher because we cannot verify any of it. No staff, no partner organisation and no field leader is named anywhere, no country list is published, and governance sits with a board in Atlanta whose members are not disclosed. The claim is plausible and unauditable, and a score is not a courtesy.',
    },
    financialTransparency: {
      value: 2,
      note: 'Four years of audited financial statements are posted and downloadable, ECFA accreditation is real, and the FY25 figures we used reconcile exactly with what ECFA publishes from the statements — revenue $6,483,411, expenses $5,984,905. Marked down two points for the absence of any Form 990 and of any named officer, board member or compensation figure, and because the audited statements carry no prior-year comparative column, so the trend is invisible from the document itself.',
    },
    outcomeEvidence: {
      value: 2,
      note: 'Unusually good for this category: kits, safe houses, businesses, people reaching independence, greenhouses and acreage are all counted, and the counts sit inside the audited PDF for the fiscal year they describe rather than in a separate marketing piece. Marked down because they are management’s narrative rather than audited amounts, because the headline beneficiary figure is undefined and partly derived from the kits, because the Lebanon numbers mix a cumulative total with an annual one, and because nobody outside the ministry has checked a single count.',
    },
    costEvidence: {
      value: 2,
      note: 'The strongest provenance in this category. One audited PDF, one fiscal year, and both halves of the division inside it — programme expenses of $4,874,814 on page 5 and 15,145 kits in the notes — which is a pairing most ministries on this site cannot supply at all. It is not a 3 because the ministry publishes no programme-level expense split, so the numerator can only be the whole programme column, and no advertised unit price exists anywhere to check our figure against.',
    },
  },
  notVerified: [
    'What an Emergency Relief Kit costs, and what is in one beyond “rice, flour, and oil” plus Bible and discipleship materials. The ministry publishes no unit price and no programme-level expense breakdown, so the $321.88 on this page is the entire programme budget expressed per kit and the real cost of a kit is unknown and much smaller.',
    'Who counted the kits, and how. The counts are in a note headed “Notable Achievements” written by management; the auditor’s opinion covers the dollars, not the narrative. No independent verification of any outcome count is published.',
    'Whether a beneficiary is counted once. The 104,184 spans every programme and the note gives no de-duplication rule, so a family that received a kit, then a safe-house stay, then a business grant may appear more than once. Since a kit is stated to serve four people, a large part of the total may be the kits recounted as people.',
    'Which countries. The impact page says 17, the audited note says 15, and neither lists them. We have built the country list from the places the ministry’s own material names — Lebanon, Syria, Iraq, Afghanistan and Iran — plus the two regions it claims, and it is therefore incomplete by construction.',
    'Who governs and who is paid. No board list, no officer roster, no compensation figure and no staff count appear anywhere. Salaries and benefits of $969,963 are disclosed in total, split across programme, administration and fundraising, and that is the whole of what a donor can see about the people spending the money.',
    'The basis of the “Association of Churches” exemption. We could not find any public IRS determination describing Help The Persecuted as an association of churches; the IRS record shows exemption granted in March 2019 and no filings, and the audited statements say only that the organisation is not required to file income tax returns.',
    'The “61% improvement in ability to practice their Christian faith freely”. No instrument, no baseline, no sample and no follow-up period is published, so the figure cannot be checked or compared with anything.',
    'What the marketing spend is buying. Marketing is $479,322, of which $191,729 is charged to programme and $263,627 to fundraising, and no document explains what distinguishes the two. Because our numerator is the programme column, any misallocation here moves the figure on this page.',
    'Where the Lebanon figures belong. “Since April 2023, we have provided help to 92,294 people” sits in a note about the year to June 2025 next to figures for that year alone. A cumulative and an annual number in the same list cannot both be divided by one year of spending, and the ministry does not separate them.',
    'What share of the year’s spending bought future capacity rather than present relief. Greenhouses, rebuilt homes and 116 funded businesses will still be producing in three years; no split between capacity and consumption is published.',
  ],
  notes: [
    'Three years of audited figures, as published by ECFA from the statements. Programme spending: $3,459,430 in the year to June 2023, $4,119,597 in 2024, $4,874,814 in 2025. Total expenses: $4,187,468, $4,927,431, $5,984,905. The ministry ran a surplus in each of the three years and net assets rose from $2,534,352 to $3,116,823. This is a growing ministry living within its income, which is not the case for the other two causes in this category.',
    'The kit figure is improving as well as growing. The note says the 15,145 kits were a 43% increase on the prior year, which implies roughly 10,591 in the year to June 2024 against programme spending of $4,119,597 — about $389 per kit on the same all-programme basis, against $322 this year. The direction of travel is the more useful number here, because the level is an artefact of charging everything to one count.',
    'The FY25 statement of functional expenses is classified by nature, not by programme, and the two largest lines are International Ministry Programs of $2,812,898 and Field Operations of $857,890 — together 75% of the programme column. That is where the money for kits, safe houses, businesses and medical care sits, undivided.',
    'The fiscal year runs to 30 June, so the FY25 counts and dollars both cover July 2024 to June 2025 — a window that contains the intensification of the war in Lebanon in September 2024 and the fall of the Assad regime in December 2024, both of which the note names as drivers of demand. A year-on-year comparison of this ministry is a comparison of different emergencies.',
    'Help The Persecuted, Open Doors and Voice of the Martyrs all appear in this category and only this one publishes an audited spending figure and an outcome count for the same year in the same document. That is the reason it carries the figure on the front page and they do not.',
  ],
  siteUrl: 'https://htp.org/',
  giveUrl: 'https://htp.org/donate',
  sources: [
    {
      id: 'htp-site',
      label: 'Homepage',
      url: 'https://htp.org/',
      publisher: 'Help The Persecuted',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: 'The ministry’s former domain, helpthepersecuted.org, no longer resolves to a working page; htp.org is the live site.',
    },
    {
      id: 'htp-impact',
      label: 'Our Impact',
      url: 'https://htp.org/our-impact',
      publisher: 'Help The Persecuted',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: 'Source of the headline “more than 104,000” claim and of the four counters: 116 businesses, 21 safe houses, 15,145 kits, and 17 countries served — the last of which disagrees with the 15 in the audited note for the same year.',
    },
    {
      id: 'htp-how',
      label: 'How We Work',
      url: 'https://htp.org/how-we-work',
      publisher: 'Help The Persecuted',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: 'Describes the Field Ministry Team, the Identify–Support–Empower process and the categories of help, and quotes Matthew 25:40.',
    },
    {
      id: 'htp-faith',
      label: 'Statement of Faith',
      url: 'https://htp.org/about-us/statement-of-faith',
      publisher: 'Help The Persecuted',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
    },
    {
      id: 'htp-financials-page',
      label: 'Financial Accountability',
      url: 'https://htp.org/financial-accountability',
      publisher: 'Help The Persecuted',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: 'Lists the accreditations, links four years of audited statements and seven annual reports, and carries the ministry’s answer to “Why doesn’t Help The Persecuted file a form 990?”',
    },
    {
      id: 'htp-fs-25',
      label: 'Audited financial statements, year ended 30 June 2025',
      url: 'https://htp.org/hubfs/Help%20The%20Persecuted%20Audited%20Financials%20-%20FY25.pdf',
      publisher: 'Help The Persecuted',
      documentType: 'audited-financials',
      retrieved: '2026-09-19',
      fiscalYear: 'year to June 2025',
      note: 'Unmodified opinion from Dogwood CPA Services, Marietta, Georgia. Carries the statement of activities (revenue $6,483,411; programme $4,874,814, administration $352,230, fundraising $757,861), the statement of functional expenses by nature, and — in the notes under “Notable Achievements” — every outcome count on this page. Single-year presentation with no prior-year comparative column.',
    },
    {
      id: 'htp-restricted',
      label: 'Other Ways to Give',
      url: 'https://htp.org/other-ways-to-give',
      publisher: 'Help The Persecuted',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: 'The only page that names Iran and Syria as places the ministry funds activity: gifts for work inside those two “Restricted Countries” must be routed through a separate processor for regulatory compliance.',
    },
    {
      id: 'htp-ecfa-profile',
      label: 'ECFA member profile — Help The Persecuted',
      url: 'https://www.ecfa.org/MemberProfile.aspx?ID=49192',
      publisher: 'Evangelical Council for Financial Accountability',
      documentType: 'third-party',
      retrieved: '2026-09-19',
      note: 'Accredited since 1 August 2019. Records the top leader as Mr Joshua Youssef and the founding year as 2011, which does not match the August 2018 incorporation date in the audited statements.',
    },
    {
      id: 'htp-ecfa-cfd',
      label: 'ECFA comparative financial data — Help The Persecuted',
      url: 'https://www.ecfa.org/ComparativeFinancialData.aspx?ID=49192',
      publisher: 'Evangelical Council for Financial Accountability',
      documentType: 'third-party',
      retrieved: '2026-09-19',
      fiscalYear: 'years to June 2023, 2024 and 2025',
      note: 'Three years of programme, administrative and fundraising splits “per the organization’s financial statements”. The FY25 column matches the audited PDF to the dollar, which is the only independent confirmation of these figures available for this ministry.',
    },
    {
      id: 'htp-propublica',
      label: 'IRS record for Help The Persecuted Inc, EIN 83-1799054',
      url: 'https://projects.propublica.org/nonprofits/organizations/831799054',
      publisher: 'ProPublica Nonprofit Explorer',
      documentType: 'third-party',
      retrieved: '2026-09-19',
      note: 'Exemption ruling March 2019, located in Marietta, Georgia, and no return of any kind on file — no Form 990, no 990-EZ, no 990-N. Consistent with the ministry’s statement that it is not required to file.',
    },
  ],
};
