import type { Cause } from '@/lib/types';

export const nphUsa: Cause = {
  slug: 'nph-usa',
  name: 'NPH USA',
  legalName: 'Friends of the Orphans, d/b/a NPH-USA',
  ein: '65-1229309',
  tagline:
    'The US fundraising arm for Father Wasson’s nine-country network of children’s homes — 1,008 children living with NPH, and 242 sent home to family.',
  category: 'children',
  countries: [
    'Bolivia',
    'Dominican Republic',
    'El Salvador',
    'Guatemala',
    'Haiti',
    'Honduras',
    'Mexico',
    'Nicaragua',
    'Peru',
  ],
  whatTheyDo:
    'NPH USA raises money in the United States for Nuestros Pequeños Hermanos — "Our Little Brothers and Sisters" — a network founded in Mexico in 1954 by Father William Wasson, who rented an abandoned house for boys who had nowhere else to go. NPH now runs family-style children’s homes in nine countries, plus community programmes intended to keep families together, schools, vocational workshops, farms, medical clinics, and St. Damien Pediatric Hospital in Haiti, which it describes as the only facility in the country providing specialised paediatric cancer care. NPH USA is one of nine national fundraising offices; it does not operate the homes. Its consolidated statements include the Fr. Wasson Legacy Endowment, a $27.9 million perpetual fund.',
  accreditations: [],
  verification: 'documents-reviewed',
  biblicalAlignment: {
    mandate:
      'Christ put a child in the middle of the room and made receiving one the test of receiving him. The Psalms give God himself the title of helper of the fatherless, which means that taking in an abandoned child is imitation rather than invention. Paul then sets the priority: do good to everyone, and especially to the household of faith — which is what a network of homes run as families is trying to be.',
    scriptures: [
      {
        ref: 'Matthew 18:5',
        text: 'Whoever receives one such child in my name receives me.',
      },
      {
        ref: 'Psalm 10:14',
        text: 'But you do see, for you note mischief and vexation, that you may take it into your hands; to you the helpless commits himself; you have been the helper of the fatherless.',
      },
      {
        ref: 'Galatians 6:10',
        text: 'So then, as we have opportunity, let us do good to everyone, and especially to those who are of the household of faith.',
      },
    ],
    concerns: [
      'The Christian identity is real but unusually thin on the page, and its Catholic character is never stated. NPH describes itself as "Inspired by Christian values", lists a core value of "FAITH AND SERVICE — putting Christian values into action", quotes Matthew 25:40, and says children receive "faith formation". Across five NPH and NPH USA pages we read, the word "Catholic" appears exactly once — as the name of an event venue, St. Anthony Catholic Church in Wylie, Texas. The founder was Father William Wasson, a priest, and the homes were built on Catholic religious life; a donor has to infer all of that. There is no statement of faith and no description of the formation children receive.',
      'Residential care is the largest single thing this money buys, and the ministry’s own documents cannot decide what to call it. The website says "safe homes", "family-style communities" and "family environment"; the audited statements call the line item "Support to Orphanages - NPHI"; the Form 990 refers to "THE NUESTROS PEQUENOS HERMANOS (NPH) ORPHANAGE IN CUERNAVACA, MEXICO". The work may well be closer to a home than an institution, but the documents do not settle it and the softer word is the one used where donors read.',
      'A third of spending does not reach the children. NPH USA’s own fact sheet says so: "In 2025, 67% of our resources were spent on programs, and 33% on administration and fundraising." On the audited functional expense statement, management and fundraising together are $6,128,605 of $16,235,893 — 38% — because fundraising there includes $857,744 of "Cost of Direct Benefit to Donors" from special events. That is the highest support ratio of any cause in this directory.',
      'Program spending fell while reserves grew. Grants to NPH dropped from $11,164,050 to $9,013,978 and audited program services from $12,624,500 to $10,107,288 — about 20% less — in the same year that consolidated net assets rose from $34,379,664 to $42,214,042 and fundraising spending increased. Nothing in the audit or the impact report explains the decision.',
      'Mission travel is promoted from the same site that asks for gifts ("Travel With Us"), and the audited statements show $58,693 of "Travel Program" charged to program services plus $157,483 of other program travel, with no travel revenue line anywhere. The cost of sending American visitors is counted as programme delivery; whatever the visitors pay is not visible.',
    ],
  },
  roi: {
    levers: ['local-workers', 'existing-network', 'durable-asset'],
    reason:
      'Be careful with the cost-base argument here, because there is no single cost base. NPH works in nine countries whose income per person spans roughly a sevenfold range — Haiti at the bottom, about 44 times below the United States, and Mexico at the top, under 7 times below — and the ministry does not publish how the money splits between them. A dollar sent to Kenscoff and a dollar sent to Cuernavaca do not buy the same thing, and anyone who tells you otherwise is averaging across a gap that wide. What is solid is the staffing: the impact report counts 2,022 local people employed at NPH homes, facilities and programmes, so this is Latin American labour rather than sent expatriates. The network and its buildings have existed since 1954, so gifts fund operations rather than construction, and the Fr. Wasson Legacy Endowment of $27.9 million is designed to distribute about 5% a year in perpetuity.',
  },
  costModel: {
    outcome: 'year of residential care for one child, US-donor share',
    outcomePlural: 'years of residential care, US-donor share',
    spend: {
      amount: 8436348,
      basis: 'program-services',
      fiscalYear: 'FY2025 (year ended 30 June 2025)',
      sourceId: 'nph-audit-25',
    },
    count: {
      amount: 1008,
      label: 'beneficiaries living with NPH',
      fiscalYear: '2025',
      sourceId: 'nph-impact-25',
    },
    attribution: 'single-program-line',
    caveat:
      'Read the outcome name carefully: this is the share of a resident-year that American donors paid for, not what a resident-year costs. NPH USA is one of nine national fundraising offices supporting the same homes, so the rest of the cost is met from elsewhere and is not published anywhere we could find. In the other direction the figure is an over-attribution: the audited line we divided, "Support to Orphanages - NPHI", funds NPHI’s operations as a whole — the community programmes that served 4,933 more beneficiaries, the schools, the clinics and St. Damien Pediatric Hospital in Haiti — not only the 1,008 people living in the homes. The numerator comes from the audit and the denominator from the impact report for the same fiscal year, but no NPH document puts the two side by side, and the ministry publishes no cost per child of its own.',
    alternates: [
      {
        label: 'everyone NPH counts as a beneficiary, living in the homes and in the community',
        count: 5941,
        note: '1,008 living with NPH plus 4,933 living in the community. Gives about $1,420 per beneficiary-year, and is the fairer denominator for the whole of what the grant funds — but it mixes a child raised in a home with someone who attended a clinic, which are not the same thing.',
      },
      {
        label: 'children and families supported through community outreach',
        count: 7485,
        note: 'The report’s own headline figure, alongside 81,260 services provided. Gives about $1,127. Neither the unit nor the overlap with the other counts is defined.',
      },
    ],
  },
  ministryClaims: [
    {
      quote:
        'In 2025, 67% of our resources were spent on programs, and 33% on administration and fundraising.',
      sourceId: 'nph-factsheet-25',
    },
    {
      quote:
        'Inspired by Christian values, we strive to create a loving and safe family environment for vulnerable children living in extreme conditions.',
      sourceId: 'nph-who-we-are',
    },
    {
      quote: 'FAITH AND SERVICE — putting Christian values into action.',
      sourceId: 'nph-who-we-are',
    },
    {
      quote:
        'This financial data has been extracted from our 2025 Audited Financial Statements, which are available upon request.',
      sourceId: 'nph-factsheet-25',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 1,
      note: '"Inspired by Christian values" is the ministry’s own formula, and it is the weak form the brief for this directory warns about. Matthew 25:40 is quoted, faith and service is a stated value, and children are said to receive faith formation — but there is no statement of faith, no gospel language, and the Catholic identity that actually founded and shapes the network is never named on the page.',
    },
    localLeadership: {
      value: 2,
      note: '2,022 local people are employed across the homes, facilities and programmes, and each country operation is its own entity with its own staff, which is genuine. Marked down because governance of the money sits in Chicago and Mexico City, the US CFO reviews each home’s budget, and no national director is named on the pages a donor sees.',
    },
    financialTransparency: {
      value: 2,
      note: 'Audited consolidated statements, the Form 990, an impact report and a financial fact sheet are all posted on the ministry’s own site, and the audit gives a full functional expense table with the orphanage support broken out. Marked down because the fact sheet’s figures do not tie to the audited consolidated totals, because the posted 990’s text layer is character-shifted so that ordinary copy-and-paste returns nonsense, and because the nine-country split of the money is published nowhere.',
    },
    outcomeEvidence: {
      value: 2,
      note: 'The 2025 impact report is the most countable document of any cause in this region: 1,008 beneficiaries living with NPH, 4,933 in the community, 242 reintegrated with family, 4,506 accessing education, 754 graduations, 560 with disabilities supported, 13,274 medical consults, and a full breakdown for St. Damien. Marked down because no count is broken out by country, several units are undefined ("beneficiaries", "services provided"), and nothing states how the counts were collected.',
    },
    costEvidence: {
      value: 2,
      note: 'Both halves exist and one is audited, and the numerator is a dedicated orphanage-support line rather than all program spending, which makes the division more meaningful than most. Marked down because NPH USA funds only part of the cost of care and the other part is unquantified, so the result is a donor-share figure rather than a price.',
    },
  },
  notVerified: [
    'What a resident-year actually costs. NPH USA is one of nine national fundraising offices for the same homes; the other eight are not consolidated into this audit and their combined giving is not published. Our $8,369 is the American share only, and we cannot tell you what fraction of the whole that is.',
    'How the money divides across nine countries. Haiti and Mexico differ by a factor of about seven in income per person, and no NPH document we found — audit, 990, fact sheet or impact report — breaks the grant down by country. Because NPHI is itself a US-registered organisation, the entire $9,013,978 is reported on the Form 990 as grants to domestic organisations, with the foreign-grants line left blank, so even Schedule F does not show a donor where the money went.',
    'Which financial figures are the real ones. The fact sheet and the impact report both report 2025 expenses of $15,855,271 with program services of $10,626,225, and say the data was "extracted from our 2025 Audited Financial Statements". The audited consolidated totals are $15,378,149 and $10,107,288. The published numbers match the unconsolidated NPH USA column of the audit’s consolidating schedule, before eliminations — a legitimate figure, but not the audited total, and not what the sentence claims.',
    'A $577,630 gap between the two grant figures. The Form 990 reports $9,013,978 of grants paid; the audit’s "Support to Orphanages - NPHI" line is $8,436,348. Neither document reconciles them.',
    'Two of the ministry’s own counts for what looks like the same thing do not agree. The NPH homepage says 1,041 children and young people participated in empowerment activities at community centres "last year", while the who-we-are page says 748 children participated in empowerment programmes "in 2025". The labels differ slightly; the gap is 39%.',
    'The figure 1,008 appears twice in the impact report for two unrelated things — "beneficiaries living with NPH" and neonatal services at St. Damien Pediatric Hospital. It may be coincidence, and it is the denominator of our cost model, so we would want it confirmed.',
    'Whether St. Damien is "the only hospital on the island providing pediatric oncology services", as the CEO’s letter says, or "the only facility in Haiti providing specialized pediatric cancer care", as the programme page says. Hispaniola includes the Dominican Republic, so the two claims are not the same claim.',
    'What the grants actually bought. The Form 990 says the NPH USA chief financial officer sits on the NPH finance committee and reviews each home’s proposed budget and monthly results, and that those reviews include a detailed description of uses of grant money "if requested". That qualifier is doing a lot of work and nothing states how often it is exercised.',
    'Why the endowment distributed so little. The Fr. Wasson Legacy Endowment holds $27.9 million and states it "aims to distribute approximately 5% of its value annually", which would be about $1.4 million; its 2025 program services were $576,700. The report does not explain the difference.',
    'A mismatch in endowment net assets between documents: the impact report says $27,912,159 and the audit’s consolidating schedule shows $27,739,659.',
    'What faith formation the children receive. It is listed as part of residential care and nowhere described. A donor cannot tell what is taught, by whom, or whether participation is expected.',
  ],
  notes: [
    '242 children were living with their families following reintegration in 2025, and family reunification is listed as a programme in six of the nine countries. That deserves to be said plainly in a region where residential care is the default: this network is spending money to send children home, which cuts against its own institutional interest, and it publishes the count.',
    'Scale of the network, from the audit and the impact report together: $8,436,348 of American money reached NPHI, 2,022 local people are employed, and St. Damien Pediatric Hospital delivered 46,506 services to women and children, including 1,233 babies delivered and 238 new tuberculosis cases treated, in a country whose health system the ministry describes as "under severe strain".',
    'Donor concentration is visible on Schedule B, with names redacted: the largest single contribution was $1,275,950, followed by $1,000,000 and two of $500,000, against $13,846,216 of total contributions. Bequests are another $4,260,065, or 20% of revenue — a legacy-heavy income mix that is stable in aggregate and lumpy year to year.',
    'The homes are old institutions in the neutral sense: founded in 1954, operating across nine countries and 25-plus locations. Gifts fund operating costs rather than buildings, which is why there is no capital-project story on this page.',
  ],
  siteUrl: 'https://nphusa.org/',
  giveUrl: 'https://nphusa.org/donate/',
  sources: [
    {
      id: 'nph-site',
      label: 'NPH USA homepage',
      url: 'https://nphusa.org/',
      publisher: 'NPH USA',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
    },
    {
      id: 'nph-about',
      label: 'About Us',
      url: 'https://nphusa.org/about-us/',
      publisher: 'NPH USA',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: 'The founding story: Father William Wasson, one child in Mexico in 1954.',
    },
    {
      id: 'nph-who-we-are',
      label: 'Who We Are',
      url: 'https://nph.org/who-we-are/',
      publisher: 'Nuestros Pequeños Hermanos',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: 'The mission and vision, the five core values including "FAITH AND SERVICE", the Matthew 25:40 quotation, and the 748 empowerment-programme count. The word "Catholic" does not appear on this page.',
    },
    {
      id: 'nph-international',
      label: 'Nuestros Pequeños Hermanos homepage',
      url: 'https://nph.org/',
      publisher: 'Nuestros Pequeños Hermanos',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: 'Carries the 1,041 empowerment-activities count, the 242 family reintegration count and the St. Damien neonatal figure.',
    },
    {
      id: 'nph-financials',
      label: 'Our Financials',
      url: 'https://nphusa.org/financials/',
      publisher: 'NPH USA',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: 'Links the audit, the Form 990, the impact report and the fact sheet.',
    },
    {
      id: 'nph-audit-25',
      label: 'FY2025 audited consolidated financial statements',
      url: 'https://nphusa.org/wp-content/uploads/2026/05/2025-NPH-USA-Signed-Financial-Statements.pdf',
      publisher: 'NPH USA',
      documentType: 'audited-financials',
      retrieved: '2026-09-19',
      fiscalYear: 'FY2025 (year ended 30 June 2025)',
      note: 'Consolidated with the Fr. Wasson Legacy Endowment. Program services $10,107,288 of $15,378,149, and total functional expenses of $16,235,893 before removing the cost of direct benefits to donors. Source of the $8,436,348 "Support to Orphanages - NPHI" line we divided.',
    },
    {
      id: 'nph-990-25',
      label: 'FY2025 Form 990',
      url: 'https://nphusa.org/wp-content/uploads/2026/05/FY2025_Form-990-NPH-USA.pdf',
      publisher: 'NPH USA',
      documentType: 'form-990',
      retrieved: '2026-09-19',
      fiscalYear: 'FY2025 (1 July 2024 to 30 June 2025)',
      note: 'Filed as Friends of the Orphans d/b/a NPH-USA. The PDF’s text layer is character-shifted, so copying text out of it returns nonsense until it is decoded; we decoded it to read Part III, Part IX and the schedules. Source of the $9,013,978 grant total, the zero on the foreign-grants line, and the word "ORPHANAGE".',
    },
    {
      id: 'nph-impact-25',
      label: '2025 Impact Report',
      url: 'https://nphusa.org/wp-content/uploads/2026/08/2025_NPH_ImpactReport_w-Inserts.pdf',
      publisher: 'NPH USA',
      documentType: 'annual-report',
      retrieved: '2026-09-19',
      fiscalYear: '2025',
      note: 'Source of every outcome count on this page, including the 1,008 beneficiaries living with NPH that we used as the denominator, and of the Fr. Wasson Legacy Endowment figures.',
    },
    {
      id: 'nph-factsheet-25',
      label: '2025 Financials Fact Sheet',
      url: 'https://nphusa.org/wp-content/uploads/2026/09/FactSheet_Financials.pdf',
      publisher: 'NPH USA',
      documentType: 'annual-report',
      retrieved: '2026-09-19',
      fiscalYear: '2025',
      note: 'One page. Its revenue and expense figures are the unconsolidated NPH USA column, not the audited consolidated totals.',
    },
    {
      id: 'nph-propublica',
      label: 'IRS filings for Friends of the Orphans, EIN 65-1229309',
      url: 'https://projects.propublica.org/nonprofits/organizations/651229309',
      publisher: 'ProPublica Nonprofit Explorer',
      documentType: 'third-party',
      retrieved: '2026-09-19',
    },
  ],
};
