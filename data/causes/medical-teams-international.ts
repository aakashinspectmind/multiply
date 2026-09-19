import type { Cause } from '@/lib/types';

export const medicalTeamsInternational: Cause = {
  slug: 'medical-teams-international',
  name: 'Medical Teams International',
  legalName: 'Medical Teams International',
  ein: '93-0878944',
  tagline:
    'Primary health care for refugees and displaced families in five countries, run by country teams.',
  category: 'relief',
  countries: ['Ethiopia', 'Sudan', 'Tanzania', 'Uganda', 'Ukraine', 'United States'],
  whatTheyDo:
    'Medical Teams International is a humanitarian health organisation working where conflict and displacement have broken the health system: refugee settlements in Uganda and Ethiopia, camps inside Sudan, frontline communities in Ukraine, and Burundian refugees in Tanzania. The work is primary care clinics, maternal and newborn care, treatment of acute child malnutrition, outbreak response, and rehabilitating damaged health facilities so local staff can keep running them. In the United States it runs mobile dental clinics for people without housing. Each country programme has its own country director, and just over half the budget is government grants.',
  accreditations: [
    {
      label:
        'Member of the Better Business Bureau and of the Evangelical Council for Financial Accountability, as stated in the 2025 annual report',
      sourceId: 'mti-annual-25',
    },
  ],
  verification: 'documents-reviewed',
  biblicalAlignment: {
    mandate:
      'Luke 10 is the closest thing in Scripture to a job description for this kind of work: a stranger destroyed by something outside his control, a passer-by who stops, wounds bound, care paid for. Matthew 25 puts the sick and the stranger in the same list, and Hebrews 13:3 tells the church to remember the mistreated as though it were in their own bodies. Medical Teams’ own framing is close to this — “When we meet a refugee carrying the wounds of war, we see God.”',
    scriptures: [
      {
        ref: 'Luke 10:33–35',
        text: 'But a Samaritan, as he journeyed, came to where he was, and when he saw him, he had compassion. He went to him and bound up his wounds, pouring on oil and wine. Then he set him on his own animal and brought him to an inn and took care of him. And the next day he took out two denarii and gave them to the innkeeper, saying, “Take care of him, and whatever more you spend, I will repay you when I come back.”',
      },
      {
        ref: 'Matthew 25:35–36',
        text: 'For I was hungry and you gave me food, I was thirsty and you gave me drink, I was a stranger and you welcomed me, I was naked and you clothed me, I was sick and you visited me, I was in prison and you came to me.',
      },
      {
        ref: 'Hebrews 13:3',
        text: 'Remember those who are in prison, as though in prison with them, and those who are mistreated, since you also are in the body.',
      },
    ],
    concerns: [
      'There is no statement of faith. The faith page is warm and genuinely Christ-referenced — image of God, Genesis 1:27, Luke 10:27, “daring to love like Jesus” — but it contains no doctrine: no cross, no resurrection, no gospel to be believed. The organisation’s Christian identity is a motive for the medicine rather than a message carried with it. A donor who wants the gospel proclaimed alongside the care should give elsewhere; a donor who wants the good Samaritan’s deed done well and without strings will find this a good fit.',
      'Just over half the money is government money: public grants of $39,269,500 against total operating revenue of $75,691,225 in 2025. The annual report carries a USAID funding disclaimer, and the president’s letter says “much of the global humanitarian system faced profound disruption and uncertainty”. The organisation ran an operating deficit of $2,245,235 in the same year. A private donor here is topping up a largely government-funded operation whose main funder is contracting.',
      'The financial figures in the 2025 annual report are not audited. No FY2025 audit is posted — the latest audited statements and Form 990 are both for the year ended 30 September 2024. This matters because the 2024 annual report published unaudited figures that its own audit then contradicted (revenue of $74,820,146 against the audited $80,694,321), under a note saying the numbers would be updated once the audit was complete. They were not. The 2025 figures should be read as provisional.',
      'Colombia has disappeared. The FY2024 audit lists Colombia among the countries of operation and the 2024 annual report reported 916,000-plus people served there. The 2025 report and the website’s own “where we work” list omit Colombia entirely, with no country director and no explanation anywhere we could find. An entire country programme ending is the kind of thing a donor who funded it should be told about.',
      'Almost a quarter of revenue is donated goods — $17,673,799 of gifts in kind in 2025 — and the annual report does not say how much of the programme expense they represent, so the cash-only picture cannot be computed for that year. The valuation basis, disclosed in the FY2024 audit, is one of the more conservative we have seen, but the effect on the reported ratio is still real: see the notes.',
      'The board is sixteen people, all of them apparently US-based professionals, with no visible member from any of the countries where the work happens. The five country directors named in the report do not sit on it.',
    ],
  },
  roi: {
    levers: ['local-workers', 'existing-network', 'local-cost-base'],
    reason:
      'The 2025 report names a country director for each programme — Ethiopia, Sudan, Tanzania, Uganda and Ukraine — rather than a regional expatriate team, and the stated model is “restoring health facilities and equipping local health workers so quality care continues long after the crisis has passed”. That is the structural saving in relief: not flying in a parallel health system, but repairing the one that is already there and paying the people who already live there to run it. In relief, though, cost per outcome is not really the right question. When a cholera outbreak starts in a refugee settlement, what matters is whether anyone is there in the first week; the unit price is a second-order question, and we have not pretended otherwise by dressing the division below up as a price.',
  },
  costModel: {
    outcome: 'child under five treated for acute malnutrition',
    outcomePlural: 'children under five treated for acute malnutrition',
    spend: {
      amount: 70267948,
      basis: 'program-services',
      fiscalYear: '2025',
      sourceId: 'mti-annual-25',
    },
    count: {
      amount: 100000,
      label: 'children under five treated for moderate or severe acute malnutrition',
      fiscalYear: '2025',
      sourceId: 'mti-annual-25',
    },
    attribution: 'all-program-spend',
    caveat:
      'We do not divide by the number Medical Teams leads with. Its headline is 6,303,942 people “with access to life-saving care”, which against this budget would read $11.15 — but access is not treatment received: a person inside a clinic’s catchment area has access whether or not they ever walked in, and it is the loosest unit in this directory. The narrowest count in the same report is a child actually treated for acute malnutrition, 93% of whom are reported as recovering, so that is the denominator here — and the resulting figure is a very high ceiling rather than a price, in three separate ways. The numerator is every programme dollar the report publishes, international $66,217,208 plus domestic $4,050,740, so refugee primary care, maternal and newborn services, outbreak response, health-facility rehabilitation and a mobile dental programme in Oregon are all charged to the malnutrition count; malnutrition treatment is one service among many and nothing published costs it on its own. The count is printed as “100,000+”, a floor rather than a figure, which pushes the division further up again. And the whole thing comes from an unaudited annual report: no FY2025 audit is published, and the previous year’s report was contradicted by its own audit. Read it as an order of magnitude with a known direction of error.',
    alternates: [
      {
        label: 'people with access to life-saving care (6,303,942)',
        count: 6303942,
        note: 'About $11.15, and the figure the ministry leads with. It counts reach rather than care delivered, so it is the floor of the range rather than a price.',
      },
      {
        label: 'the report’s own six country figures added together',
        count: 5387055,
        note: 'Ethiopia 2,078,043 plus Sudan 1,020,964 plus Tanzania 211,814 plus Uganda 1,811,124 plus Ukraine 260,700 plus 4,410 in the United States comes to 5,387,055 — which is $13.04 a person, and 916,887 short of the 6,303,942 the same report puts on its opening page. The report does not reconcile the two. Notably, the 2024 report credited a Colombia programme with 916,000-plus people and Colombia appears nowhere in 2025, but we could not establish that this is the explanation and we are not going to guess.',
      },
    ],
  },
  ministryClaims: [
    {
      quote:
        'Thanks to your support, more than 6 million people affected by crisis have access to life-saving primary health care through Medical Teams.',
      sourceId: 'mti-annual-25',
    },
    {
      quote:
        'We promise to turn your money into medical care and get it to people in crisis quickly. We promise to make your dollar stretch so it can have the greatest possible impact. We promise to be transparent and accountable.',
      sourceId: 'mti-financials',
    },
    {
      quote:
        'It invites everyone in because it sees value in every person. It is not conditional, and it doesn’t have to be earned.',
      sourceId: 'mti-faith',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 2,
      note: 'Christ is named and the theology of the image of God is worked out at length: “Our faith and calling starts with daring to love like Jesus”, and there is an Executive Chaplain on the leadership team. But there is no statement of faith and no doctrinal content — the gospel is a motive for the work rather than part of it. Identifiably Christian, deliberately not proclamatory.',
    },
    localLeadership: {
      value: 2,
      note: 'Each of the five international programmes has a named country director and the stated model is equipping local health workers and facilities rather than deploying teams. Held at 2 because the FY2024 Form 990 reports six foreign offices and zero foreign employees against $58,697,485 of foreign expenditure — a disclosure we cannot reconcile with a locally staffed model — and because the board contains nobody from a programme country.',
    },
    financialTransparency: {
      value: 2,
      note: 'Fourteen consecutive years of audited statements, Form 990s and annual reports are posted on the ministry’s own page, and the FY2024 audit discloses its gift-in-kind valuation method in plain language. Marked down to 2 for a specific failure: the FY2024 annual report published financials that its own audit later contradicted, promised to update them, and did not — and the FY2025 report again publishes unaudited figures with no audit yet available.',
    },
    outcomeEvidence: {
      value: 1,
      note: 'The headline count is an “access to care” figure, which is the least defined unit in humanitarian reporting, and it does not agree with the sum of the six country figures printed in the same document. The report does publish genuinely useful narrower numbers — 100,000-plus children treated for acute malnutrition with 93% recovering, 14 outbreaks contained, 2 million malnutrition screenings — but the one a donor sees first is the softest.',
    },
    costEvidence: {
      value: 2,
      note: 'Both halves are published in the same document for the same year, which is what makes a division possible at all. Marked down because the numerator is unaudited, the denominator is published as “100,000+” rather than as a count, and programme spending is split only into “international” and “domestic” — so the one service narrow enough to be worth costing is the one service that cannot be costed on its own.',
    },
  },
  notVerified: [
    'What “access to life-saving care” means. It is the unit the whole division turns on and nothing defines it. In practice, humanitarian access figures usually count the catchment population of a supported facility, which is not the same as a person treated — and the report’s own treatment figures are one to two orders of magnitude smaller.',
    'Why 6,303,942 does not equal the sum of the six country figures printed a page later, which is 5,387,055. The gap is 916,887 people and the report does not mention it.',
    'Whether the 2025 financial figures will survive an audit. There is no FY2025 audit. The 2024 report’s unaudited revenue figure of $74,820,146 was contradicted by the audited $80,694,321 and was never corrected, despite a published promise to do so.',
    'What happened to the Colombia programme, which the FY2024 audit and the 2024 report both describe and which is absent from every 2025 document.',
    'What share of 2025 programme spending is donated medicine and supplies rather than cash. Gifts in kind were $17,673,799 of revenue, but the report gives no gift-in-kind expense line, so the cash-only programme ratio cannot be computed for 2025. For the audited year before it, the equivalent adjustment moved the programme ratio from 86.9% to 83.0%.',
    'The Form 990 Schedule F for FY2024 reports six foreign offices, $58,697,485 of foreign expenditure and zero foreign employees, agents or independent contractors, and names none of the twenty recipient organisations it wired grants to. We could not reconcile the zero with the named country teams, and the partner roster is not public.',
    'What period the 2025 annual report covers. It is titled “2025 Annual Report” and never states its dates. The audited fiscal year ends 30 September, so this is presumably the year ended 30 September 2025, but the document does not say.',
    'Programme spending is disclosed only as “international” and “domestic”. There is no split by country or by service, so nothing here can be costed against the narrower clinical counts that would actually be worth costing.',
    'None of these counts has been checked by anyone independent of the organisation, and the report does not claim otherwise.',
  ],
  notes: [
    'On the gift-in-kind question that distorts most relief accounting, this is the most conservative ministry in the batch. The FY2024 audit values donated goods “based upon estimates of the wholesale values that would be received for selling the goods in their principal exit markets considering the goods’ condition and utility for use at the time of contribution”, under the Accord Network and InterAction standards. Wholesale exit price is a much lower number than the US retail comparison other relief ministries use, and it is the right basis.',
    'It still moves the ratio, and here is the size of the move in the last audited year. Reported programme spending was $64,174,983 of $73,835,579, or 86.9%. Strip out the $16,934,037 of gift-in-kind expense, all of which sits in programmes, and cash programme spending is $47,240,946 of $56,901,542, or 83.0%.',
    '2025 operating revenue, from the annual report: private cash contributions $17,341,099, public grants $39,269,500, gifts in kind $17,673,799, other income $1,406,827, total $75,691,225. Expenses: international programmes $66,217,208, domestic programmes $4,050,740, general and administration $2,576,621, fundraising and communications $5,091,891, total $77,936,460 — a programme ratio of 90.2% and a deficit of $2,245,235.',
    'The 2025 counts by country, all published as people given access to care: Ethiopia 2,078,043; Uganda 1,811,124; Sudan 1,020,964; Ukraine 260,700; Tanzania 211,814; United States 4,410 across 579 clinics. Alongside them: 2 million malnutrition screenings for pregnant women and young children, 14 outbreaks contained across East Africa including cholera, measles, mpox and anthrax, and 100,000-plus children under five treated for acute malnutrition with 93% recovering.',
    'The faith page is the clearest answer to the rice-Christian objection we found anywhere in this batch, and it is worth reading in the ministry’s own words: love “is not conditional, and it doesn’t have to be earned”, and “We are compelled to practice a love for all people” regardless of religion. That is a deliberate position rather than an evasion. It is also the reason this cause scores 2 and not 3 on gospel centrality — the same choice cuts both ways, and a donor should pick knowingly.',
  ],
  siteUrl: 'https://www.medicalteams.org/',
  giveUrl: 'https://www.medicalteams.org/donate/',
  sources: [
    {
      id: 'mti-site',
      label: 'Homepage',
      url: 'https://www.medicalteams.org/',
      publisher: 'Medical Teams International',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'mti-faith',
      label: 'Our Faith — Daring to Love Like Jesus',
      url: 'https://www.medicalteams.org/who-we-are/daring-to-love-like-jesus/',
      publisher: 'Medical Teams International',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: 'The ministry’s fullest statement of what its faith means. Source of the unconditional-aid language quoted here.',
    },
    {
      id: 'mti-financials',
      label: 'Financials',
      url: 'https://www.medicalteams.org/who-we-are/financials/',
      publisher: 'Medical Teams International',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: 'Posts annual reports for 2012 to 2025 and audited statements and Form 990s for 2012 to 2024. Source of the stewardship promise quoted here and of the EIN.',
    },
    {
      id: 'mti-annual-25',
      label: '2025 Annual Report',
      url: 'https://annualreport.medicalteams.org/2025-annual-report/',
      publisher: 'Medical Teams International',
      documentType: 'annual-report',
      retrieved: '2026-09-19',
      fiscalYear: '2025',
      note: 'A web report, not a PDF. Source of every 2025 figure here, financial and otherwise. The financial tables are unaudited and no FY2025 audit is published. The 6,303,942 headline sits in an animated counter rather than in text, so we read it from the page markup.',
    },
    {
      id: 'mti-audit-24',
      label: 'Audited financial statements, year ended 30 September 2024',
      url: 'https://www.medicalteams.org/wp-content/uploads/2025/09/Medical-Teams-International-Financial-Statements-2024.pdf',
      publisher: 'Medical Teams International',
      documentType: 'audited-financials',
      retrieved: '2026-09-18',
      fiscalYear: 'FY2024',
      note: 'The most recent audit available. Source of the FY2024 functional expense figures, the gift-in-kind expense line and Note 10 on how donated goods are valued.',
    },
    {
      id: 'mti-990-24',
      label: 'FY2024 Form 990, public disclosure copy',
      url: 'https://www.medicalteams.org/wp-content/uploads/2025/11/MTI-FY24-IRS-Form-990-PUBLIC-DISCLOSURE-COPY.pdf',
      publisher: 'Medical Teams International',
      documentType: 'form-990',
      retrieved: '2026-09-18',
      fiscalYear: 'FY2024',
      note: 'Schedule F gives six foreign offices, $58,697,485 of foreign expenditure and zero reported foreign employees. Part III contains no outcome counts.',
    },
  ],
};
