import type { Cause } from '@/lib/types';

export const heartForAfrica: Cause = {
  slug: 'heart-for-africa',
  name: 'Heart for Africa',
  legalName: 'Heart for Africa, Inc.',
  ein: '36-4509500',
  tagline:
    'Raises abandoned children in Eswatini on a 2,500-acre farm that grows much of their food.',
  category: 'children',
  countries: ['Eswatini'],
  whatTheyDo:
    'Heart for Africa takes in children abandoned in Eswatini — most of them infants, many found by police or hospitals — and raises them at Project Canaan, a 2,500-acre property it owns and farms. The same budget runs children’s homes, a preschool, a primary and secondary school, a dairy, poultry houses, large-scale crop farming, job creation for Eswatini adults, and twice-monthly food distribution to surrounding communities. It was founded in 2006 by Ian and Janine Maxwell; the land was bought in 2009.',
  accreditations: [],
  verification: 'documents-reviewed',
  biblicalAlignment: {
    mandate:
      'Caring for an abandoned child is not a charitable option in Scripture, it is the test of whether religion is real. The same passages that command it name the practical form it takes: food for the hungry, a home for the solitary, and treating the least as though he were Christ himself. A farm that feeds the children it houses is that command taken literally.',
    scriptures: [
      {
        ref: 'James 1:27',
        text:
          'Religion that is pure and undefiled before God the Father is this: to visit orphans and widows in their affliction, and to keep oneself unstained from the world.',
      },
      {
        ref: 'Matthew 25:40',
        text:
          'Truly, I say to you, as you did it to one of the least of these my brothers, you did it to me.',
      },
      {
        ref: 'Isaiah 58:7',
        text:
          'Is it not to share your bread with the hungry and bring the homeless poor into your house; when you see the naked, to cover him, and not to hide yourself from your own flesh?',
      },
    ],
    concerns: [
      'The organisation describes itself as "faith-based humanitarian" and we found no statement of faith on the current site. Jesus is named once, in a core value: "We live out the call to be the hands and feet of Jesus." The programme pages are otherwise about hunger, farming and schooling. Ask what discipleship the children receive before assuming it.',
      'Residential care at scale is contested among Christians who do this work. Four hundred children raised in one place, permanently, is the model furthest from the family-based consensus — and the children here were abandoned as infants, which is the hardest case against that consensus. We have seen no published policy on reunification or adoption.',
      'A fifth of all spending, $1,223,345, goes to management and fundraising. That is not scandalous for an organisation running a farm and a school, but it is the highest support ratio of any cause here with audited figures.',
    ],
  },
  roi: {
    levers: ['local-cost-base', 'durable-asset', 'local-workers'],
    reason:
      'Eswatini’s income per person is about 24 times below the United States, so wages, food and construction are priced to that economy — and the audited statements are consolidated with the Eswatini entity, so that is where the money is actually spent rather than granted away and lost from view. The farm is the second lever: crops, dairy and poultry feed the children, and jewellery and farm sales brought in $846,213 of revenue in 2024, which is income the ministry does not have to raise again. The land was bought once, in 2009, and has been producing since.',
  },
  costModel: {
    outcome: 'year of care for a child',
    outcomePlural: 'years of care for children',
    spend: {
      amount: 4847584,
      basis: 'program-services',
      fiscalYear: '2024',
      sourceId: 'hfa-audit-24',
    },
    count: {
      amount: 434,
      label: 'children in care',
      fiscalYear: '2025',
      sourceId: 'hfa-canaan-update',
    },
    attribution: 'all-program-spend',
    caveat:
      'An upper bound, and a loose one. The same program budget runs a 2,500-acre farm, a dairy, poultry houses, a school, job creation for Eswatini adults and food distribution to surrounding communities — none of which is child care, and $399,338 of it is the direct cost of goods the ministry sells. The child count is from January 2025 and the spending is calendar 2024. Read this as the cost of running everything at Project Canaan divided by the children living there, which is what it is.',
    alternates: [
      {
        label: 'children enrolled when the Project Canaan school opened for 2025',
        count: 342,
        note:
          'The school is the largest single programme and this is its own count, but it excludes the babies and toddlers who are the most expensive children on the property.',
      },
    ],
  },
  ministryClaims: [
    {
      quote:
        'The majority of funds go directly toward program expenses that serve children and communities in Eswatini.',
      sourceId: 'hfa-faq',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 1,
      note:
        'Jesus is named once on the site, in a core value about being his hands and feet, and the founders write openly as Christians. There is no statement of faith, no church partnership described, and no discipleship content in any programme description.',
    },
    localLeadership: {
      value: 1,
      note:
        'Founded and still led by the Maxwells, who relocated from Canada; the US office is in Georgia. The field operation is staffed by Eswatini nationals and the 2025 school year opened under a new Eswatini principal, but governance and fundraising sit in North America.',
    },
    financialTransparency: {
      value: 3,
      note:
        'The best in this directory. Audited consolidated statements for 2021 through 2024 and Form 990s for the same years are posted on the site, and the audit consolidates the Eswatini entity — so the numbers cover the place the work happens, not just the American fundraising shell. Functional expenses are broken out line by line.',
    },
    outcomeEvidence: {
      value: 2,
      note:
        'The children in care are counted precisely and the count moves as children arrive — 434 after five arrivals in January 2025 — and school enrolment is published at the start of each year. Food distribution is described by communities reached and miles driven rather than meals served, so the largest outreach programme has no countable unit.',
    },
    costEvidence: {
      value: 2,
      note:
        'Both halves of the division exist and both are sourced, one from an audit. Marked down because the numerator covers a farm and a business as well as the children, and the ministry publishes no per-child figure of its own to check ours against.',
    },
  },
  notVerified: [
    'The ministry publishes no cost per child anywhere. The figure here is ours: audited 2024 program services divided by the children in care in January 2025. Heart for Africa has not confirmed it and might reasonably object to it.',
    'Program services include $399,338 of direct cost of sales — the cost of producing the jewellery and farm goods the ministry sells. That is a business expense sitting inside the programme total we divided.',
    'The audit discloses that donor-restricted contributions are assessed 7% to 12% for management and general expenses, about $419,000 in 2024. A restricted gift is therefore not entirely restricted, and the site does not say so.',
    'Program spending rose 6.3% between 2023 and 2024 while fundraising costs rose 45.6%, from $293,303 to $426,999. The audit does not explain the jump.',
    'Nothing states how many children left care, aged out or were reunified in 2024, so the 434 is a snapshot rather than a flow. Cost per child-year assumes the population was roughly stable across the year.',
    'We could not verify the Charity Navigator, Candid or GreatNonprofits ratings that were previously displayed — they do not appear on the redesigned site — so no accreditation is listed here.',
  ],
  notes: [
    'The audit is consolidated across Heart for Africa, Inc. in the United States and HFA Eswatini, which was incorporated in 2004 and holds Eswatini tax-exempt status. That is unusual and it is the reason this cause scores where it does on transparency: most US charities of this size publish a return that stops at the border.',
    'A currency translation adjustment of $187,928 reduced net assets in 2024. Roughly three per cent of the year’s expense base moves with the lilangeni, which a donor in dollars is effectively carrying.',
    'Earned income is real here: jewellery and farm sales of $846,213, against total revenue of $7,518,149. About 11% of the budget does not come from donors.',
    'Net assets are $10,032,922, most of it land and buildings at Project Canaan. This is an asset-heavy ministry, which is a strength for durability and a constraint on flexibility.',
  ],
  siteUrl: 'https://heartforafrica.org/',
  giveUrl: 'https://heartforafrica.org/donation/',
  sources: [
    {
      id: 'hfa-site',
      label: 'Homepage',
      url: 'https://heartforafrica.org/',
      publisher: 'Heart for Africa',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'hfa-who-we-are',
      label: 'Who We Are',
      url: 'https://heartforafrica.org/who-we-are/',
      publisher: 'Heart for Africa',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'hfa-faq',
      label: 'FAQ',
      url: 'https://heartforafrica.org/faq/',
      publisher: 'Heart for Africa',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'hfa-financials',
      label: 'Our Financials',
      url: 'https://heartforafrica.org/our-financials/',
      publisher: 'Heart for Africa',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Links audits and Form 990s for 2021 through 2024.',
    },
    {
      id: 'hfa-audit-24',
      label: '2024 audited consolidated financial statements',
      url: 'https://heartforafrica.org/wp-content/uploads/2025/10/Heart-for-Africa-Inc.-Financial-Statements-2024-FINAL.pdf',
      publisher: 'Heart for Africa',
      documentType: 'audited-financials',
      retrieved: '2026-09-18',
      fiscalYear: '2024',
      note:
        'Consolidated with HFA Eswatini. Program services $4,847,584 of $6,070,929 total expenses, with a line-by-line functional breakdown.',
    },
    {
      id: 'hfa-990-24',
      label: '2024 Form 990',
      url: 'https://heartforafrica.org/wp-content/uploads/2025/10/HFA-2024-990-Public.pdf',
      publisher: 'Heart for Africa',
      documentType: 'form-990',
      retrieved: '2026-09-18',
      fiscalYear: '2024',
    },
    {
      id: 'hfa-canaan-update',
      label: 'Project Canaan updates, end of 2024 to start of 2025',
      url: 'https://heartforafrica.org/blog/project-canaan-updates-from-the-end-of-2024-to-the-start-of-2025/',
      publisher: 'Heart for Africa',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note:
        'Source of both counts: "the number of children in our care reached 434" and "we are starting with 342 children" when the school opened on 22 January 2025.',
    },
  ],
};
