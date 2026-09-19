import type { Cause } from '@/lib/types';

export const worldHelp: Cause = {
  slug: 'world-help',
  name: 'World Help',
  legalName: 'World Help',
  ein: '54-1615454',
  tagline:
    'Ships donated humanitarian aid to refugees and displaced families through partners who were already there.',
  category: 'relief',
  countries: [
    'Uganda',
    'Peru',
    'India',
    'Zambia',
    'Ukraine',
    'Honduras',
    'Burundi',
    'Ethiopia',
    'Afghanistan',
    'Jordan',
    'United States',
  ],
  whatTheyDo:
    'World Help does not run its own field operations. It raises money and collects donated goods in the United States and moves both through a network of established local ministries — food and shelter supplies to refugees and displaced people, clean water projects, child sponsorship, Bibles, and aid after disasters including flooding in Texas. Roughly seven dollars in ten of what it reports as programme spending is the value of donated goods rather than cash. Founded by Vernon Brewer; his daughter Noel Brewer Yeatts is president.',
  accreditations: [],
  verification: 'documents-reviewed',
  biblicalAlignment: {
    mandate:
      'Hebrews 13:3 tells the church to remember the imprisoned and the mistreated as though it were in their bodies — an instruction to identify with people you will never meet. Matthew 25 makes the same list concrete: food, drink, welcome for the stranger, clothes. A ministry whose work is clothing and feeding refugees and displaced families through churches already living beside them is doing exactly what those passages describe.',
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
    ],
    doctrine: {
      label: 'Statement of Faith on the Mission and Values page',
      sourceId: 'wh-mission',
    },
    concerns: [
      'World Help states the rice-Christian logic explicitly rather than denying it: “People are more receptive to the Gospel when their immediate needs are met.” That is an honest description of how a great deal of Christian relief actually operates, and it is precisely what critics inside missions have objected to for a century — that a person at the end of their resources cannot freely weigh a message delivered with the food. We think a donor should see this sentence rather than have it paraphrased. It is not evidence of coercion and the ministry may well hold to a no-strings distribution in practice; it is evidence that receptivity to preaching is part of the stated rationale for the aid.',
      'Seventy per cent of programme spending is the value of donated goods, valued by World Help. The methodology disclosed in the audit is the most detailed we have seen anywhere — seven price sources, highest and lowest discarded, an average of the remaining five, discounts of 50%, 75% or 100% for used items — but it is still the recipient of the gift setting the number that appears in its own efficiency ratio.',
      'Three donors provided approximately 86% of all donated non-financial assets in the year, and the audit says “The organizational implications of these concentrations are recognized by management and the board.” If one of those three stops giving, the reported programme ratio collapses even though nothing about the cash operation has changed.',
      'Free imported clothing and supplies compete with local traders selling the same things. World Help publishes nothing on how its partners decide when a shipment of donated goods is better than cash or local procurement, and the question is a live one in relief.',
      'Founder-family leadership: the founder and the president are father and daughter, and both sit on the board. Board members and their business interests also contributed approximately $1,449,000 during the year.',
    ],
  },
  roi: {
    levers: ['existing-network', 'local-workers', 'local-cost-base'],
    reason:
      'World Help’s own description of its model is the mechanism: “Because your support is used to help ministries that are already established in the communities they are serving, more of your money goes directly toward helping people in need.” No expatriate staff are sent, no field office is funded, no logistics chain is built from scratch — programme payroll for the whole international operation is $1,418,602 against $30,085,167 of programme spending. That is the structural saving relief work can make. The catch is on the other side of the ledger: the goods themselves come from the United States, which is the expensive direction to move physical freight.',
  },
  costModel: {
    outcome: 'refugee or displaced person who received aid',
    outcomePlural: 'refugees and displaced people who received aid',
    spend: {
      amount: 30085167,
      basis: 'program-services',
      fiscalYear: 'FY2026 (year ended 31 March 2026)',
      sourceId: 'wh-audit-26',
    },
    count: {
      amount: 198990,
      label: 'refugees and displaced people who received aid',
      fiscalYear: 'FY2026 (1 April 2025 – 31 March 2026)',
      sourceId: 'wh-annual-26',
    },
    attribution: 'all-program-spend',
    caveat:
      'A loose upper bound in two directions at once. First, the whole $30,085,167 programme budget also paid for 9,330 child sponsorships, 42 water projects, 43,809 Bibles, vocational training and church planting — none of which is aid to a refugee — so charging all of it to 198,990 people overstates the cost of that outcome substantially. Second, and pulling the other way, $21,153,980 of that numerator is donated goods valued by World Help itself, not cash a donor gave. On cash alone, programme spending was $8,931,187, which against the same count is $44.88 a person. The audit and the annual report do cover exactly the same twelve months, which is why this division exists at all.',
    alternates: [
      {
        label: 'lives the annual report says were impacted across every programme',
        count: 1009024,
        note: 'Against the same $30,085,167 this is $29.82 a life. It is World Help’s headline figure and it is the broad one: a person who received a Bible, a sponsored child, a household on a water scheme and a refugee who received a food parcel all count as one, the report does not say whether anyone helped by two programmes is counted twice, and “impacted” is never defined. A relief donor should use the narrow number.',
      },
      {
        label: 'meals the annual report says were provided',
        count: 10000000,
        note: 'Published as “More than 10 million meals provided”, which is a floor rather than a count. We show it because it is the only unit here that is unambiguous per item, and we did not build the cost model on it because “more than” cannot be divided honestly.',
      },
    ],
  },
  ministryClaims: [
    {
      quote:
        'Because your support is used to help ministries that are already established in the communities they are serving, more of your money goes directly toward helping people in need.',
      sourceId: 'wh-annual-26',
    },
    {
      quote: '82% Programs',
      sourceId: 'wh-annual-26',
    },
    {
      quote:
        'People are more receptive to the Gospel when their immediate needs are met. By providing essentials like food, clean water, or medical care, you offer physical help for today and hope for tomorrow through the love of Christ.',
      sourceId: 'wh-mission',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 3,
      note: 'A full evangelical statement of faith is published — the authority of Scripture, the deity and bodily resurrection of Christ, the present ministry of the Holy Spirit — and the ministry describes itself as “a Christian humanitarian organization serving the physical and spiritual needs of people”. The gospel is named as the point, not implied by history.',
    },
    localLeadership: {
      value: 2,
      note: 'Delivery is entirely through established local ministries and programme payroll is tiny, which is the structure this site exists to reward. Held at 2 rather than 3 because not one partner organisation is named anywhere we could find, so we cannot see who actually leads the work, and governance is a US founder family.',
    },
    financialTransparency: {
      value: 3,
      note: 'Audited statements, Form 990s and annual reports for several years are posted on the ministry’s own financials page; the annual report reprints the statement of activities and it reconciles exactly to the audit; and the audit voluntarily discloses its gift-in-kind valuation method, its donor concentration and its related-party giving. The documents are good enough to find the problems in, which is the test.',
    },
    outcomeEvidence: {
      value: 2,
      note: 'Counts are published for each programme area, in the same fiscal year as the audit, and the aid figure is given to the person rather than rounded to a million. Marked down because no unit is defined, nothing says whether people are counted once across programmes, and the headline “1,009,024 lives impacted” is the kind of aggregate that cannot be checked.',
    },
    costEvidence: {
      value: 2,
      note: 'Both halves are published for the same twelve months, which is rarer than it should be, and the audit is detailed enough to separate cash from donated goods so the division can be shown twice. Marked down because programme spending is not broken out by programme line, so every division here has to charge the whole budget to one outcome.',
    },
  },
  notVerified: [
    'What “received aid” means. 198,990 is the most specific relief number World Help publishes and nothing defines it — one food parcel, a month of support, or a household counted as a person.',
    'How programme spending splits across aid and relief, child sponsorship, water, Bibles and church planting. The audit reports only “International programs” $29,732,324 and “Outreach programs” $352,843. Without a split, no cost per outcome on this page can be better than an upper bound.',
    'Which ministries receive the money. The whole model is partner delivery — $6,540,724 of contributions to ministry partners plus the shipped goods — and not one partner is named, nor is there any statement that partners are audited.',
    'Whether the donated goods are what the receiving communities would have chosen. Donated clothing and other supplies were $17,938,636 of the $21,173,000 total; donated medical supplies and equipment collapsed from $9,593,531 to $266,982 in one year, a 97% fall the audit does not explain. The mix appears to be driven by what three donors happened to give rather than by what was needed.',
    'Whether the values assigned to donated goods have ever been tested by anyone outside World Help. The method is disclosed in unusual detail; it has still only ever been applied by the organisation that benefits from the result.',
    'The $21 million of aid “shipped internationally” claimed in the annual report against $21,153,980 of gift-in-kind humanitarian aid in the audit. The two figures are close enough to be the same number, but the audit also says $2,967,382 of donated inventory was “shipped directly from the donor to other organizations” — that is, it never passed through World Help — and we could not determine whether that portion is inside the shipping claim.',
    'Total revenue fell from $40,829,298 to $37,426,915 and cash contributions from $15,281,690 to $12,691,092, a 17% drop in cash giving in one year, while fundraising spending rose from $2,428,295 to $3,215,753. The audit does not comment.',
    'Nobody independent has counted any outcome here, and the report does not suggest otherwise.',
  ],
  notes: [
    'This cause is the clearest illustration in the directory of what donated goods do to an efficiency ratio. World Help reports programme spending of $30,085,167 against total expenses of $36,879,659 — 81.6%, which the annual report rounds to “82% Programs”. Take out the $21,153,980 of gift-in-kind humanitarian aid and the same year looks like $8,931,187 of programme spending against $15,725,679 of total spending: 56.8%. Both are correct. The first is the one on the pie chart.',
    'Neither figure is a criticism of the donated goods, which are real and do reach people. The point is narrower: a ratio built on self-valued inventory is not comparable to a ratio built on cash, and donors compare them constantly.',
    'Programme payroll for the entire international operation is $1,418,602 — under 5% of programme spending. Management and fundraising payroll together is $3,118,929, more than twice as much. That is what a pure pass-through ministry looks like from the inside: almost everyone on the payroll is in Virginia.',
    'The annual report and the audit agree line for line on functional expenses, and the annual report tells readers where to get the full audit. A ministry reprinting its real statement of activities in its glossy report is doing something most do not.',
    'Volunteers gave nearly 11,000 hours across 3,000 people, and 12 fundraiser events raised over $1.1 million. Neither is capitalised into the expense figures, so they are additional to the numbers divided here.',
  ],
  siteUrl: 'https://worldhelp.net/',
  giveUrl: 'https://worldhelp.net/donate/',
  sources: [
    {
      id: 'wh-site',
      label: 'Homepage',
      url: 'https://worldhelp.net/',
      publisher: 'World Help',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'wh-mission',
      label: 'Mission and Values, including the Statement of Faith',
      url: 'https://worldhelp.net/missions-and-values/',
      publisher: 'World Help',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Source of the statement of faith and of the “People are more receptive to the Gospel when their immediate needs are met” rationale quoted above.',
    },
    {
      id: 'wh-financials',
      label: 'Financials',
      url: 'https://worldhelp.net/financials/',
      publisher: 'World Help',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Posts audited statements, Form 990s and annual reports for several years.',
    },
    {
      id: 'wh-audit-26',
      label: 'Audited financial statements, year ended 31 March 2026',
      url: 'https://worldhelp-web.us-east-1.linodeobjects.com/World%20Help%202026%20FS%20Final.pdf',
      publisher: 'World Help',
      documentType: 'audited-financials',
      retrieved: '2026-09-18',
      fiscalYear: 'FY2026',
      note: 'Source of all financial figures here, including the statement of functional expenses, Note 5 on contributed non-financial assets and its valuation method, Note 13 on board giving and Note 14 on donor concentration.',
    },
    {
      id: 'wh-annual-26',
      label: 'Fiscal Year 2026 Annual Report (1 April 2025 – 31 March 2026)',
      url: 'https://worldhelp-web.us-east-1.linodeobjects.com/WH%20Annual%20Report%202025-2026.pdf',
      publisher: 'World Help',
      documentType: 'annual-report',
      retrieved: '2026-09-18',
      fiscalYear: 'FY2026',
      note: 'Source of every outcome count. The figures are set as large graphics beside their captions, so each number was matched to its own caption from the page layout. Covers exactly the same twelve months as the audit.',
    },
    {
      id: 'wh-990-25',
      label: 'Form 990, public copy',
      url: 'https://worldhelp-web.us-east-1.linodeobjects.com/2025%20World%20Help%20990%20Public%20Copy.pdf',
      publisher: 'World Help',
      documentType: 'form-990',
      retrieved: '2026-09-18',
      note: 'A year behind the audit. Reviewed for context; no figure on this page comes from it.',
    },
  ],
};
