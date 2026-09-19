import type { Cause } from '@/lib/types';

export const hopeRisesInternational: Cause = {
  slug: 'hope-rises-international',
  name: 'Hope Rises International',
  legalName: 'American Leprosy Missions, Inc.',
  ein: '13-5562163',
  tagline:
    'Finds and treats leprosy and other neglected tropical diseases, and repairs the damage they have already done.',
  category: 'health',
  countries: [
    'Benin',
    'Bolivia',
    'Cameroon',
    "Côte d'Ivoire",
    'DR Congo',
    'Ethiopia',
    'Ghana',
    'India',
    'Liberia',
    'Nepal',
    'Senegal',
    'Tanzania',
  ],
  whatTheyDo:
    'Founded in 1906 as the American Mission to Lepers, this is the oldest leprosy ministry in the United States; it renamed itself Hope Rises International in 2025. It funds partner hospitals, clinics and government programmes that screen for leprosy, Buruli ulcer and lymphatic filariasis, treat them, perform reconstructive surgery on hands, feet and eyelids after nerve damage, supply prosthetics and protective footwear, and train health workers and local pastors to spot cases and reduce the stigma that keeps people hidden.',
  accreditations: [
    { label: 'ECFA accredited', sourceId: 'hri-financials' },
    { label: 'BBB Wise Giving Alliance accredited charity', sourceId: 'hri-financials' },
    { label: 'Candid Platinum Transparency', sourceId: 'hri-financials' },
  ],
  verification: 'documents-reviewed',
  biblicalAlignment: {
    mandate:
      'Leprosy is the disease Scripture names more than any other, and it names it as a social death as much as a physical one: the man with the disease lived outside the camp and called out his own uncleanness. Christ touched him. Of all the works of mercy in the Gospels, this is the one that most explicitly restores a person to the community as well as to health, and the ministry’s reconstructive surgery and anti-stigma work is that same shape.',
    scriptures: [
      {
        ref: 'Matthew 8:2–3',
        text:
          'And behold, a leper came to him and knelt before him, saying, “Lord, if you will, you can make me clean.” And Jesus stretched out his hand and touched him, saying, “I will; be clean.” And immediately his leprosy was cleansed.',
      },
      {
        ref: 'Leviticus 13:45–46',
        text:
          'The leprous person who has the disease shall wear torn clothes and let the hair of his head hang loose, and he shall cover his upper lip and cry out, “Unclean, unclean.” He shall remain unclean as long as he has the disease. He is unclean. He shall live alone. His dwelling shall be outside the camp.',
      },
      {
        ref: 'Luke 17:15–16',
        text:
          'Then one of them, when he saw that he was healed, turned back, praising God with a loud voice; and he fell on his face at Jesus’ feet, giving him thanks. Now he was a Samaritan.',
      },
    ],
    doctrine: {
      label: 'Seven-clause statement of faith, amendable only by unanimous board consent',
      sourceId: 'hri-who-we-are',
    },
    concerns: [
      'The single largest line in the whole budget after grants is direct mail. Printing, postage and publications cost $3,032,367 in FY2025, of which $2,312,137 sits in fundraising — 73% of all fundraising spending. That is the engine of a 119-year-old donor file, and it is also the reason the cost per donated dollar here is higher than anywhere else in this category.',
      'FY2025 spent $17,218,198 against $15,252,859 of revenue, a deficit of $1,965,339, and operations consumed $1,810,392 of cash that was covered by selling $4,090,691 of investments. A ministry can run a deliberate drawdown year; nothing in the audit or the annual report says this one was deliberate.',
      'The annual report tells the story of a Buruli ulcer patient in DR Congo and reports that “Edouard accepted Jesus as his Savior and was baptized, with Dr. Phanzu, the doctor who treated him, by his side.” We record that as the ministry’s own account and not as an outcome — conversions are not something this site counts, and a conversion reported alongside the treatment that produced it is exactly where a reader should think carefully about consent.',
      'Almost all delivery is through partners: more than 70 collaborating organisations and governments, with $2,172,545 of cash grants reaching the twelve named countries in FY2025. Hope Rises treats nobody directly, so every count on the page was produced by a partner.',
      'The largest single country grant after Ghana and Nepal went to Great Britain — $191,597, more than Benin, Bolivia, Cameroon, Ethiopia, Liberia and Tanzania combined. Neither document says what a high-income country received it for, though the 990 mentions vaccine and diagnostic research.',
    ],
  },
  roi: {
    levers: ['existing-network', 'local-workers', 'local-cost-base'],
    reason:
      'The drugs that cure leprosy are donated — multidrug therapy has been free worldwide through the World Health Organization for decades — so what a donor is buying is the finding, not the medicine: a trained health worker who recognises an early patch of numb skin, and a pastor who tells a village it is not a curse. FY2025 trained 3,873 health workers and 352 pastors, clergy and lay leaders, and screened 61,635 suspected cases. Case-finding is cheap, it is done by people paid local wages, and it is the step that prevents the nerve damage that costs far more to repair. The reconstructive surgery at the other end of the pipeline happens in partner hospitals at local cost.',
  },
  costModel: {
    outcome: 'patient given care for a neglected tropical disease',
    outcomePlural: 'patients given care for neglected tropical diseases',
    spend: {
      amount: 12971788,
      basis: 'program-services',
      fiscalYear: 'FYE June 2025',
      sourceId: 'hri-audit-25',
    },
    count: {
      amount: 9963,
      label: 'patients admitted, leprosy consults, and/or people receiving care for neglected tropical diseases',
      fiscalYear: 'FY2025',
      sourceId: 'hri-ar-25',
    },
    attribution: 'all-program-spend',
    caveat:
      'An upper bound with two specific problems. First, the unit: the ministry’s own label is “patients admitted, leprosy consults, and/or people receiving care” — an admission, a consultation and a course of treatment counted in one figure with an “and/or” in the middle of it, which means we cannot tell whether 9,963 is 9,963 people. Second, the numerator: $6,624,623 of that programme spending — 51% of it — is donated medicines and supplies that no donor’s cash paid for. A gift of dollars buys about half of what this figure implies. The same programme total also covers 61,635 screenings, 3,873 health workers trained and 3,539 disability aids, none of which are in the denominator.',
    alternates: [
      {
        label: 'life-changing surgeries performed for individuals affected by NTD-related complications',
        count: 437,
        note:
          'The narrowest and best-defined unit the ministry publishes, and it produces about $29,700 per surgery — which tells you that reconstructive surgery is a small part of this ministry rather than that its surgery is expensive. Do not compare it with a surgical ministry’s cost per operation.',
      },
      {
        label: 'suspected NTD cases screened',
        count: 61635,
        note:
          'The broadest unit, at about $210 each. A screening is a few minutes of a trained health worker’s attention and most of them find nothing, which is the point of screening.',
      },
    ],
  },
  ministryClaims: [
    {
      quote:
        'The BBB Wise Giving Alliance Standards for Charity Accountability state that an organization must spend at least 65% of its total expenses on program activities. In fiscal year 2024, 71% of our expenses were invested directly into programs and projects around the world.',
      sourceId: 'hri-faqs',
    },
    {
      quote:
        'Hope Rises International exists to proclaim the Gospel in word and deed to persons affected by leprosy and related diseases, helping them to be healed in body and spirit and restored to lives of dignity and hope.',
      sourceId: 'hri-who-we-are',
    },
    {
      quote:
        'Edouard accepted Jesus as his Savior and was baptized, with Dr. Phanzu, the doctor who treated him, by his side.',
      sourceId: 'hri-ar-25',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 3,
      note:
        'A seven-clause statement of faith with Scripture references, which the board can only change by unanimous written consent, and a mission statement that puts proclaiming the gospel first. The programme model deliberately recruits local pastors as case-finders. This is as explicit as it gets in medical mission.',
    },
    localLeadership: {
      value: 2,
      note:
        'Every screening, surgery and training happens through national partners and government programmes, and the named clinicians in the annual report are Congolese and Beninese. But this is a US organisation granting money out of Greenville, South Carolina; no field entity is consolidated into the audit and no partner is named in it.',
    },
    financialTransparency: {
      value: 3,
      note:
        'Audited statements with a full functional-expense matrix, the complete Form 990, and a finance panel inside the annual report are all posted on the site, plus ECFA, BBB and Candid accreditation. The functional matrix is what made it possible to separate the donated supplies from the cash, which most ministries this size do not let you do.',
    },
    outcomeEvidence: {
      value: 1,
      note:
        'Six counts are published for FY2025 and all six are specific numbers. Marked down hard because the primary one is a three-way composite joined by “and/or”, because none of the units are defined, and because every figure originates with a partner organisation that is not named.',
    },
    costEvidence: {
      value: 1,
      note:
        'Both halves of a division exist in audited documents for the same fiscal year, which is why there is a cost model at all. But the ministry publishes no cost per outcome of any kind, half the numerator is donated goods, and the denominator’s unit is undefined.',
    },
  ],
  notVerified: [
    'The program expense ratio the ministry advertises — 75% for FY2025 — counts $6,624,623 of donated medicines and supplies as programme spending. Strip the gifts-in-kind out of both sides and programme cash of $6,347,165 against total cash expenses of $10,593,575 is 59.9%: below the 65% BBB standard the ministry’s own FAQ quotes. Both figures are arithmetic on the same audited statements. Neither document mentions the second one.',
    'The audited statements and the Form 990 for the same fiscal year do not agree on the total. The audit says $17,218,198 of expenses with $1,076,247 of management and general; the 990 says $17,277,499 and $1,135,548. Programme and fundraising are identical in both, so the entire $59,301 difference sits in management and general, and neither document explains it.',
    'What the 9,963 figure counts. An admission, a leprosy consultation and “receiving care” are three different events, and the ministry joins them with “and/or”. Whether a patient seen three times in a year appears once or three times is not stated anywhere.',
    'Who counted any of it. Hope Rises delivers care through more than 70 partner organisations and governments, none of them named in the audit, and no independent verification of any count is published.',
    'What happened to the 437 surgical patients afterwards. Reconstructive surgery on a leprosy-damaged hand or foot depends almost entirely on the physiotherapy and protective footwear that follow it, and no follow-up data is published.',
    'Why FY2025 ran a $1,965,339 deficit funded by selling investments, and whether the ministry intends to continue at this spending level. Neither the audit nor the annual report comments.',
    'What the $191,597 grant to Great Britain paid for.',
    'The ministry says it worked in “more than 30 countries” and its annual report map names about thirty. The audit records grants to thirteen. The other countries received something that is not a grant, and nothing says what.',
  ],
  notes: [
    'American Leprosy Missions rebranded as Hope Rises International in 2025; leprosy.org now redirects to hoperises.org. The legal entity, EIN and 119-year history are unchanged. Note that the ministry’s own audited financial statements are still headed “American Leprosy Missions, Inc. DBA Hope Rises International”.',
    'FY2025 runs to 30 June 2025. Revenue was $8,478,375 of public contributions, $6,624,623 of in-kind gifts and $149,861 of investments and other. Net assets ended at $14,414,492.',
    'Total grants awarded were $9,444,921, of which $6,624,623 was gifts-in-kind, leaving $2,820,298 of cash — $2,172,545 to the twelve named low- and middle-income countries, $192,776 to research and $454,977 to training and other.',
    'Leprosy is curable and the cure is donated. That is the reason this ministry’s economics look strange next to a surgical charity: the expensive part is finding people early enough that they never need surgery, and there is no clean unit for a case that was prevented.',
  ],
  siteUrl: 'https://www.hoperises.org/',
  giveUrl: 'https://give.hoperises.org/donation/give/',
  sources: [
    {
      id: 'hri-site',
      label: 'Homepage',
      url: 'https://www.hoperises.org/',
      publisher: 'Hope Rises International',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'hri-who-we-are',
      label: 'Who We Are, including the statement of faith',
      url: 'https://www.hoperises.org/who-we-are',
      publisher: 'Hope Rises International',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'hri-approach',
      label: 'Our Approach',
      url: 'https://www.hoperises.org/our-approach',
      publisher: 'Hope Rises International',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'hri-impact',
      label: 'Impact',
      url: 'https://www.hoperises.org/impact',
      publisher: 'Hope Rises International',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'hri-financials',
      label: 'Financials',
      url: 'https://www.hoperises.org/financials',
      publisher: 'Hope Rises International',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Where the audited statements and Form 990 are posted, and where ECFA, BBB and Candid are claimed.',
    },
    {
      id: 'hri-faqs',
      label: 'FAQs',
      url: 'https://www.hoperises.org/faqs',
      publisher: 'Hope Rises International',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Source of the program expense ratio claim, which cites the BBB 65% standard against a FY2024 figure of 71%.',
    },
    {
      id: 'hri-audit-25',
      label: 'Audited financial statements, year ended 30 June 2025',
      url: 'https://cdn.prod.website-files.com/67c289304ca86d7f689e39cb/6914eb941318b341405c2e4f_ALM%20(HRI)%20Audited%20financials%20-%202025%20.pdf',
      publisher: 'Hope Rises International',
      documentType: 'audited-financials',
      retrieved: '2026-09-18',
      fiscalYear: 'FYE June 2025',
      note:
        'Programme services $12,971,788, fundraising $3,170,163, management and general $1,076,247, total $17,218,198. Note 9 lists grants by country; the functional matrix is what separates the $6,624,623 of gifts-in-kind from the cash.',
    },
    {
      id: 'hri-990-25',
      label: 'Form 990, fiscal year ending June 2025',
      url: 'https://cdn.prod.website-files.com/67c289304ca86d7f689e39cb/6aabfd0be497a17799aa9fcc_6aabef4c66f8585bbff31ba1_ALM-FORM-990-FY2025.pdf',
      publisher: 'Hope Rises International',
      documentType: 'form-990',
      retrieved: '2026-09-18',
      fiscalYear: 'FYE June 2025',
      note:
        'Part III carries the same six FY2025 counts as the annual report. Part IX line 25 totals $17,277,499, which does not match the audit.',
    },
    {
      id: 'hri-ar-25',
      label: '2025 Annual Report',
      url: 'https://cdn.prod.website-files.com/67c289304ca86d7f689e39cb/6966a302c5fdb1f5b0110d31_25%20Annual%20Report.pdf',
      publisher: 'Hope Rises International',
      documentType: 'annual-report',
      retrieved: '2026-09-18',
      fiscalYear: 'FY2025',
      note:
        'The six impact figures are set as large graphics with their labels beneath them; we read them from the page rather than from extracted text. The finance panel reproduces the audited figures, and the map of about thirty countries is a graphic with no accompanying list.',
    },
    {
      id: 'hri-propublica',
      label: 'IRS filings for American Leprosy Missions, Inc., EIN 13-5562163',
      url: 'https://projects.propublica.org/nonprofits/organizations/135562163',
      publisher: 'ProPublica Nonprofit Explorer',
      documentType: 'third-party',
      retrieved: '2026-09-18',
    },
  ],
};
