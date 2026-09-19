import type { Cause } from '@/lib/types';

export const nazareneCompassionateMinistries: Cause = {
  slug: 'nazarene-compassionate-ministries',
  name: 'Nazarene Compassionate Ministries',
  legalName: 'Nazarene Compassionate Ministries, Inc.',
  ein: '43-1550318',
  tagline: 'Funds the Nazarene congregation that is already in the village when the disaster hits.',
  category: 'relief',
  countries: [
    'DR Congo',
    'Myanmar',
    'Ukraine',
    'Liberia',
    'Ghana',
    'Ethiopia',
    'Malawi',
    'India',
    'Guinea-Bissau',
    'Trinidad and Tobago',
  ],
  whatTheyDo:
    'NCM is the compassion arm of the Church of the Nazarene. It does not run field operations of its own: it funds and trains local Nazarene congregations to do the work, and its regional coordinators and local church leaders choose which projects get support. Emergency relief was active in 22 countries in 2025 — food, shelter, non-food assistance and trauma care in places including the Democratic Republic of the Congo, Myanmar and Ukraine. Alongside that sit child development in 47 countries, water and sanitation projects, and women’s vocational training. Total reported revenue is $8,501,616, which makes this one of the smallest budgets in this directory relative to the number of countries it touches.',
  accreditations: [
    {
      label: 'Member of the Accord Network',
      sourceId: 'ncm-wwa',
    },
  ],
  verification: 'self-reported',
  biblicalAlignment: {
    mandate:
      'NCM roots itself in Matthew 25 by name, and the fit is exact: food, water, clothing, welcome for the stranger, care for the sick and the imprisoned. Galatians 6:10 adds the shape of the model — do good to everyone, and especially to the household of faith — because the hands doing the work here belong to a congregation that was already a neighbour before the disaster and will still be a neighbour afterwards.',
    scriptures: [
      {
        ref: 'Matthew 25:35–36',
        text: 'For I was hungry and you gave me food, I was thirsty and you gave me drink, I was a stranger and you welcomed me, I was naked and you clothed me, I was sick and you visited me, I was in prison and you came to me.',
      },
      {
        ref: 'Isaiah 58:7',
        text: 'Is it not to share your bread with the hungry and bring the homeless poor into your house; when you see the naked, to cover him, and not to hide yourself from your own flesh?',
      },
      {
        ref: 'Galatians 6:10',
        text: 'So then, as we have opportunity, let us do good to everyone, and especially to those who are of the household of faith.',
      },
    ],
    concerns: [
      'No financial statements. NCM publishes a three-year revenue table by fund and then shows spending only as a pie chart of percentages — child development 49%, emergency relief 20%, other programmes 18%, administration and donor engagement 13%. There is no total expense figure in dollars anywhere in the impact report, and we found no audited statements at all.',
      'The Form 990 does not describe the same organisation as the impact report. For the year ended September 2023 the IRS filing shows revenue of $1,768,010; the impact report shows $8,501,591 of revenue for 2023. The filed entity accounts for about a fifth of the money the ministry reports raising. Donations by cheque are made payable to the General Treasurer of the Church of the Nazarene, so the rest presumably moves through the denomination’s own treasury, which files separately — but NCM does not say so, and a donor reading either document alone would get the wrong idea about the size of the thing.',
      'That filing is also three years old. The most recent IRS data available is the year ended September 2023.',
      'Emergency relief is 20% of spending. NCM is a good answer to the question “who is already there when a disaster hits”, but a donor giving specifically for disaster response should know the organisation’s largest programme by a wide margin is child development and child sponsorship.',
      'Help and proclamation come from the same hands, and NCM says so plainly: its stated goal is “individual and communal transformation in and through Christ”, delivered by the congregation distributing the food. The structural case for this is strong — the church does not leave when the project ends — but it is also the situation the old rice-Christian objection is about, because a family at the end of its resources cannot freely weigh a message that arrives with the shelter. NCM publishes no policy stating that assistance is given without regard to whether the recipient participates in the church, and we could find no independent assessment either way.',
      'Scale. 26,000 people reached by emergency response across 22 countries is a little over a thousand people per country. That is what a congregational network of this size can do, and it is honest, but it is not a sector-scale response capacity.',
      'NCM itself warns that its brand covers less than donors may assume: “Not every compassionate ministry in the Church of the Nazarene is officially sponsored by NCM.”',
    ],
  },
  roi: {
    levers: ['existing-network', 'local-workers', 'local-cost-base'],
    reason:
      'This is the mechanism in its purest form. The most expensive part of a humanitarian response is normally getting foreign staff and their logistics to the scene; NCM never pays it, because the responder is a congregation that lives there. There is no field office to open, no expatriate to house, no distribution network to build, and the project is chosen by regional coordinators and local church leaders rather than from Kansas. In relief, though, cost per outcome is genuinely not the right question — speed and being there at all matter more than the unit price, and a church in the village is about as fast as it gets. What NCM cannot demonstrate is the other half of stewardship: it publishes no spending figure in dollars, so nobody outside can check what the money bought.',
  },
  ministryClaims: [
    {
      quote:
        'Because local churches are engaged in their communities, they understand the needs of their neighbors, and because local churches are not leaving after a specific program or project is started, the work they do through the support of NCM becomes sustainable.',
      sourceId: 'ncm-wwa',
    },
    {
      quote:
        'At least 80 percent of all funds received are spent on programming that directly supports those we serve. Our policy is never to use more than 20 percent of funds for program administration and donor engagement expenses—also known as “overhead”. This is a strong standard alongside similar Christian relief & development agencies and we make every effort to reduce overhead where we can.',
      sourceId: 'ncm-wwa',
    },
    {
      quote:
        'Over 26,000 people were impacted by emergency response efforts, peacebuilding practices, and preparedness initiatives.',
      sourceId: 'ncm-impact-25',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 3,
      note: 'Unambiguous. The mission statement says NCM “exists in and through the Church of the Nazarene to proclaim the Gospel to all people in word and deed”, its stated goal is “individual and communal transformation in and through Christ”, and Scripture heads every section of the impact report. This is a denomination’s own compassion arm and makes no attempt to be generically faith-based.',
    },
    localLeadership: {
      value: 3,
      note: 'The strongest structural answer in this batch. NCM does not implement: local congregations do, and the FAQ states that projects are “evaluated and chosen by the regional NCM coordinators and the church leaders who work in the location of the project”, with priority on listening to those leaders. Held at 3 despite the US head office, because decision rights — not just delivery — are published as sitting with people from the place.',
    },
    financialTransparency: {
      value: 1,
      note: 'A revenue table for three years by fund is published, and a Form 990 exists. Against that: no audited statements anywhere, spending disclosed only as percentages of a total that is never stated, the latest filing is three years old, and that filing covers roughly a fifth of the reported revenue with no explanation of where the rest sits.',
    },
    outcomeEvidence: {
      value: 2,
      note: 'Counts are published for every programme area in the stated fiscal year, and several are specific — 10,360 sponsored children, 253 child development centres, 19 water projects in 13 countries, 9 new boreholes. Marked down because the relief figure is “over 26,000 people … impacted” by three different kinds of activity bundled together, and “impacted” is never defined.',
    },
    costEvidence: {
      value: 0,
      note: 'A finding. There is a usable denominator and the numerator does not exist in dollars. Emergency relief is “20%” of a total spend NCM never publishes, so there is nothing here to divide.',
    },
  },
  notVerified: [
    'Total spending, in dollars. The impact report gives revenue of $8,501,616 for fiscal 2025 and then shows expenses only as a pie chart. We did not multiply the revenue by the 20% relief slice, because revenue is not spending and the result would be a number we made up.',
    'What “impacted by emergency response efforts, peacebuilding practices, and preparedness initiatives” counts. One food distribution, one training session and one preparedness workshop are three very different things inside a single figure of “over 26,000”.',
    'Which 22 countries the emergency relief was in. Only the Democratic Republic of the Congo, Myanmar and Ukraine are named, so the country list on this page is drawn from the ten countries named anywhere in the report and is incomplete by NCM’s own reckoning.',
    'Whether the 80% programme policy was met. It is stated as a policy, not a result. The one year of percentages published shows 13% for administration and donor engagement, which is inside the policy — but it rests on a total that is not disclosed, so it cannot be checked.',
    'Which legal entity holds the money. The IRS filing under EIN 43-1550318 reports $1,768,010 of revenue for the year ended September 2023 against $8,501,591 in the impact report for 2023. NCM says it “receives no supplemental funding from the general church”, and cheques are payable to the denomination’s General Treasurer, but nothing published reconciles the two figures.',
    'What is inside “Other Programs”, which at $3,145,663 is 37% of revenue. The emergency relief fund is not disclosed separately in the revenue table, so a donor cannot see how much was given for disasters.',
    'Whether the impact report’s “fiscal year 2025” ends on the same date as the 990’s September year end. The report is headed “FISCAL YEAR 2025” and never states its period.',
    'Anything about the receiving congregations: none is named, and nothing says whether they report back on what was distributed, or whether NCM audits them.',
    'No outcome here has been counted by anyone independent of the ministry, and the report does not claim otherwise.',
  ],
  notes: [
    'We did not build a cost per outcome, and the reason is unusual: the denominator is the part NCM publishes. Emergency relief reached “over 26,000” people across 22 countries in 2025 through more than 30 local projects. The numerator is a slice of a pie chart — 20% of annual spending — with no total spending figure anywhere in the document. A ministry that publishes percentages instead of dollars has told you its priorities and withheld its arithmetic.',
    'Revenue by fund, fiscal 2025, from the impact report: Greatest Needs $1,996,159, Other Programs $3,145,663, Child Development $3,359,793, total $8,501,616. Two prior years: $7,571,910 and $8,501,591. Spending, as percentages only: child development 49%, emergency relief 20%, other programmes 18%, administration and donor engagement 13%.',
    'The overhead FAQ is franker than most about why a cut is taken at all: “NCM is a self-funded organization within the Church of the Nazarene—meaning NCM receives no supplemental funding from the general church. This is why NCM sets aside a small percentage of each donation for program administration and donor engagement expenses.” That is a straight answer to a question most ministries dodge.',
    'Other 2025 counts, for context on where the budget goes: 47 countries of child development with 253 active centres, 24 new centres, 586 graduates and 10,360 sponsored children; 19 water and sanitation projects in 13 countries benefiting more than 16,600 people, including 9 new boreholes; 3 women’s empowerment projects in Liberia, Ghana and Ethiopia enrolling over 350 women.',
    'For scale, from the IRS extract: the year ended September 2023 reported revenue $1,768,010, total functional expenses $1,810,540, net assets $460,194, officer compensation $17,462 and other salaries $273,971. That is a very small paid staff, which is consistent with a model where the work is done by congregations rather than employees — but it is also only part of the picture, as above.',
  ],
  siteUrl: 'https://ncm.org/',
  giveUrl: 'https://give.ncm.org/',
  sources: [
    {
      id: 'ncm-site',
      label: 'Homepage',
      url: 'https://ncm.org/',
      publisher: 'Nazarene Compassionate Ministries',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'ncm-wwa',
      label: 'Who We Are, including the mission statement, the approach and the FAQ',
      url: 'https://ncm.org/who-we-are',
      publisher: 'Nazarene Compassionate Ministries',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Source of the mission statement, the church-led rationale, the Accord Network membership, the Matthew 25:36 basis and the 80% overhead policy in the FAQ.',
    },
    {
      id: 'ncm-impact-page',
      label: '2025 Impact Report landing page',
      url: 'https://ncm.org/2025-impact-report',
      publisher: 'Nazarene Compassionate Ministries',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'ncm-impact-25',
      label: 'Impact Report 2025 (PDF)',
      url: 'https://resources.nazarene.org/index.php/s/CztEnEmZYqNYpfH/download',
      publisher: 'Nazarene Compassionate Ministries',
      documentType: 'annual-report',
      retrieved: '2026-09-18',
      fiscalYear: 'Fiscal year 2025',
      note: 'Source of every count and of the revenue table. The spending split is published as a pie chart with no dollar figures; we read the percentages off the rendered page to be sure each label matched its slice.',
    },
    {
      id: 'ncm-propublica',
      label: 'IRS filings for Nazarene Compassionate Ministries Inc, EIN 43-1550318',
      url: 'https://projects.propublica.org/nonprofits/organizations/431550318',
      publisher: 'ProPublica Nonprofit Explorer',
      documentType: 'third-party',
      retrieved: '2026-09-18',
      fiscalYear: 'Year ended September 2023',
      note: 'Structured IRS extract, not the return itself — ProPublica blocks automated downloads of the filing. The latest year available is three years behind the impact report.',
    },
  ],
};
