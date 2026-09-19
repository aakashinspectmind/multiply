import type { Cause } from '@/lib/types';

export const marysMealsUsa: Cause = {
  slug: 'marys-meals-usa',
  name: "Mary's Meals USA",
  tagline:
    'Feeds more than three million children a daily school meal, and publishes what a year of it actually cost — in pounds, not the dollars you give.',
  category: 'food',
  countries: ['Malawi', 'Zambia', 'Zimbabwe', 'Ethiopia', 'Kenya', 'Haiti', 'Mozambique'],
  whatTheyDo:
    'One meal, every school day, in the place of education. Mary’s Meals serves a daily meal at school so that the meal is a reason to attend rather than a reason to stay home, and the school roll is the thing it counts. In 2025 the programme reached an enrolment of 3,151,977 children in over 6,400 schools across 16 countries, the largest of them Malawi. Mary’s Meals USA is the American fundraising affiliate: it raises money and grants almost all of it — $21,105,000 in 2025 — to Mary’s Meals International in Scotland, which runs the feeding programme.',
  accreditations: [],
  verification: 'self-reported',
  biblicalAlignment: {
    mandate:
      'Feeding the hungry is the first of the needs by which Jesus says the nations will be sorted, and Isaiah makes pouring yourself out for the hungry the test of whether religion is real rather than performed. There is a second thread here: a meal that gets a child into a classroom is bread and teaching at once, which is why the ministry insists the meal be served in a place of education rather than anywhere else.',
    scriptures: [
      {
        ref: 'Matthew 25:35',
        text: 'For I was hungry and you gave me food, I was thirsty and you gave me drink, I was a stranger and you welcomed me.',
      },
      {
        ref: 'Isaiah 58:10',
        text: 'If you pour yourself out for the hungry and satisfy the desire of the afflicted, then shall your light rise in the darkness and your gloom be as the noonday.',
      },
      {
        ref: 'Proverbs 22:9',
        text: 'Whoever has a bountiful eye will be blessed, for he shares his bread with the poor.',
      },
    ],
    concerns: [
      'Mary’s Meals is deliberately and explicitly non-confessional, and says so in its own annual report: “Our values have always proclaimed that this mission belongs to people of all faiths and none. That has been the reality of Mary’s Meals since our inception and will continue to be, always. People belonging to one particular faith or denomination will never be more welcome in this mission than any other.” Its Christian identity is described in the past tense, as an origin: it “grew out of the Catholic faith of our founder and early leaders”. There is no statement of faith, and no gospel content in the programme. If you are looking for Christians feeding hungry children, this is that. If you are looking for gospel proclamation, it is not here and the ministry does not claim it is.',
      'It is named for the mother of Jesus and describes itself as shaped by a Catholic spirituality. Catholic donors may value that and some Protestant donors will want to know it before giving.',
      'Free food, delivered daily, indefinitely, to more than three million children, funded from abroad, is the model most exposed to the argument that donated food undercuts the farmers and traders who would otherwise sell it. Mary’s Meals publishes no figure for the share of food procured locally and no exit plan for any school. We are not asserting displacement is happening — we are saying the ministry publishes nothing that would let a donor rule it out.',
    ],
  },
  roi: {
    levers: ['local-cost-base', 'existing-network'],
    reason:
      'The meal rides on a school that already exists, with teachers already teaching and children already gathered — Mary’s Meals does not build the classroom, it puts food in it, which is why the marginal cost of adding a child is so small. And it feeds children in the lowest-income economies on this site: Malawi, Mozambique and Ethiopia, where the price of maize, beans and a cook’s day is a small fraction of the American equivalent. This is the tiny-unit-at-enormous-scale case: whatever the exact figure, a school year of daily meals is priced in tens of dollars, not hundreds.',
  },
  ministryClaims: [
    {
      quote:
        'It costs just $25.20 to feed a child in a place of education for a whole school year.',
      sourceId: 'mmusa-site',
      impliedCostPerOutcome: 25.2,
      impliedOutcome: 'child fed daily for a school year',
    },
    {
      quote:
        'The actual average cost of feeding a child for our financial year 2025 was £16.36 (2024: £17.47) against our public commitment of £19.15 (2024: £19.15), evidencing our strong commitment to keeping costs under control and achieving value for money against a challenging backdrop of inflation and wider economic challenges.',
      sourceId: 'mmi-ar-25',
    },
    {
      quote:
        'During 2025, we worked alongside communities to provide consistent, nutritious meals to children in over 6,400 schools across 16 countries.',
      sourceId: 'mmusa-impact-25',
    },
    {
      quote: 'We are already feeding more than 3 million children every school day',
      sourceId: 'mmusa-site',
    },
    {
      quote:
        "Mary's Meals grew out of the Catholic faith of our founder and early leaders, and is shaped by a Christian spirituality.",
      sourceId: 'mmusa-site',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 1,
      note: 'A Christian origin, honestly stated, and nothing more than that. The founding faith is described in the past tense, the international body states that the mission belongs to people of all faiths and none, there is no statement of faith, and no part of the programme involves teaching or proclamation. Scored 1 rather than 0 because the ministry does name a Christian spirituality as what shapes it, which is more than “faith-based”.',
    },
    localLeadership: {
      value: 2,
      note: 'The programme is delivered inside 6,400 existing local schools in 16 countries and the ministry describes itself as working “alongside communities” to serve the meals, which is where almost all of the labour is. Against that, this is a two-tier northern structure: a Scottish charity holding the programme and an American affiliate raising the money, and we found no disclosure of national board representation in either.',
    },
    financialTransparency: {
      value: 3,
      note: 'Both entities publish. Mary’s Meals USA posts audited financial statements showing exactly how much was granted onward, and Mary’s Meals International publishes a full trustees’ annual report with a five-year KPI table that includes its own cost per child and charitable spend ratio. Very few ministries publish a unit cost trend and then report a year in which it rose.',
    },
    outcomeEvidence: {
      value: 2,
      note: 'The count is precise and it moves — enrolment of 3,151,977 in 2025 against 2,594,868 in 2024, with a fall in 2023 reported rather than smoothed over. But enrolment is not meals eaten: a child on the roll of a school that serves meals is counted whether or not she attended, and no attendance or meals-served figure is published alongside it.',
    },
    costEvidence: {
      value: 2,
      note: 'Mary’s Meals International publishes an actual average cost per child for five consecutive years and compares it to its own public commitment, which is better than almost anyone in this directory. Marked down to 2 because that figure is in sterling and belongs to a different legal entity from the one a US donor gives to, and because the American price of $25.20 is published with no exchange rate and no reconciliation to it.',
    },
  },
  notVerified: [
    'We did not build a cost per outcome here, and the reason matters. Mary’s Meals USA’s audited program spending was $22,557,168, of which $21,105,000 was a grant onward to Mary’s Meals International. The 3,151,977 children are fed by the international body out of a global income, so dividing the American grant by the global child count would produce about $6.70 — a figure that looks four times better than the ministry’s own advertised price and means nothing. We would rather show you nothing than that.',
    'The two published prices do not reconcile and we could not make them. The US site advertises $25.20 for a school year. The international report says the actual average cost in 2025 was £16.36, against a public commitment of £19.15. At any plausible exchange rate $25.20 tracks the £19.15 commitment rather than the £16.36 the year actually cost. The ministry does not state an exchange rate, a date, or which of the two figures the dollar price is derived from.',
    'What the $25.20 and the £16.36 include and exclude. If community members cook and serve the food without pay — which is how the ministry describes the model — their labour is not inside either figure, and neither is any donated food. No statement of what the cost per child covers is published, so we cannot tell you how much of the real cost of a meal is carried by people who are not paid.',
    'Feeding costs and child counts sit in different currencies, different entities and different documents. Only the international report states what the feeding programme cost (£50.4m of £56.0m total expenditure), and sterling cannot go into a dollar cost model.',
    'The share of food bought locally versus imported. This is the question the local-displacement critique turns on and neither entity publishes it.',
    'The per-country figures on the US site are rounded with a plus sign (Malawi 1,315,000+, Zambia 605,000+) and Ethiopia appears twice with different numbers — 245,000+ in one place and 10,000+ in another. One of those is presumably a different programme or a different year, but nothing says which.',
    'Enrolment versus attendance versus meals served. Three different things, and only the first is published.',
    'What happens to a school that Mary’s Meals stops feeding. No exit, graduation or handover policy is published for any of the 6,400 schools.',
    'Mary’s Meals USA’s program spending rose from $19,896,717 to $22,557,168 in a year, a 13% increase. Nothing explains whether that funded more children, higher food prices, or both.',
  ],
  notes: [
    'We read both audits — Mary’s Meals USA for calendar 2025 and the international trustees’ report for the same period — and deliberately declined to divide them, so the verification level here stays at self-reported. The documents are real and linked below; the arithmetic that would join them across two currencies and two legal entities is not available.',
    'The directory has no category for food, so school feeding sits under children and families, which is the closest fit: the unit here is a child on a school roll.',
    'The international report’s KPI table is worth looking at directly. Cost per child went £14.56, £15.47, £17.26, £17.47, £16.36 across 2021 to 2025, and children enrolled went 2,279,941, 2,538,918, 2,379,374, 2,594,868, 3,151,977 — including a year when the number fell. Publishing a decline is a small act of honesty that most ministries avoid.',
    'Support costs at the US affiliate are strikingly low: management and general $644,694 and fundraising $418,004 against $23,619,866 of total expenses, about 4.5% together. The international body reports charitable spend at 99%. Both figures look excellent and both are easier to achieve when the grant-making entity and the operating entity are separate.',
  ],
  siteUrl: 'https://www.marysmealsusa.org/',
  giveUrl: 'https://www.marysmealsusa.org/',
  sources: [
    {
      id: 'mmusa-site',
      label: "Mary's Meals USA homepage",
      url: 'https://www.marysmealsusa.org/',
      publisher: "Mary's Meals USA",
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Source of the $25.20 school-year price, the “more than 3 million children every school day” claim, the per-country children-served figures, and the statement about the Catholic faith of the founder.',
    },
    {
      id: 'mmusa-reports',
      label: 'Resources and reports',
      url: 'https://www.marysmealsusa.org/policies-and-sitelinks/resources-reports',
      publisher: "Mary's Meals USA",
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Where the audited statements and impact report are posted. The site has no /financials page.',
    },
    {
      id: 'mmusa-audit-25',
      label: "Mary's Meals USA audited financial statements, 31 December 2025",
      url: 'https://www.marysmealsusa.org/sites/usa/files/2026-06/Mary%27s%20Meals%20USA%20Financial%20Statements%202025%20FINAL.pdf',
      publisher: "Mary's Meals USA",
      documentType: 'audited-financials',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note: 'Program services $22,557,168, of which $21,105,000 is a grant to Mary’s Meals International; management and general $644,694; fundraising $418,004; total expenses $23,619,866.',
    },
    {
      id: 'mmusa-impact-25',
      label: 'Our Impact Story 2025',
      url: 'https://www.marysmealsusa.org/sites/usa/files/2026-07/Our%20Impact%20Story%202025.pdf',
      publisher: "Mary's Meals USA",
      documentType: 'annual-report',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
    },
    {
      id: 'mmi-ar-25',
      label: "Mary's Meals International trustees' annual report, year ended 31 December 2025",
      url: 'https://www.marysmeals.org/sites/mmi/files/2026-07/MMI%20Annual%20Report%2025%20-%20FINAL%20SIGNED.pdf',
      publisher: "Mary's Meals International",
      documentType: 'annual-report',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note: 'Source of the 3,151,977 enrolment, the £50.4m cost of the school feeding programme against £56.0m of total expenditure, the five-year cost-per-child KPI table, and the statement that the mission belongs to people of all faiths and none. All financial figures in this document are in pounds sterling.',
    },
  ],
};
