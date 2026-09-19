import type { Cause } from '@/lib/types';

export const growingHopeGlobally: Cause = {
  slug: 'growing-hope-globally',
  name: 'Growing Hope Globally',
  ein: '54-1940516',
  tagline:
    'American farmers grow a crop, sell it, and send the proceeds to teach smallholders overseas — a model it adopted after concluding that shipping the grain itself would ruin local markets.',
  category: 'food',
  countries: ['Bolivia', 'Guatemala', 'Kenya', 'Malawi', 'Zambia', 'Bangladesh'],
  whatTheyDo:
    'A rural American congregation or group of farmers dedicates a field — a Growing Project. Neighbours donate the land, the seed, the fuel and the labour, the crop is sold, and the proceeds fund agricultural development programmes for smallholder farmers overseas: seed selection, conservation tillage, composting, irrigation, savings groups, livestock. In the year to March 2026, 102 Growing Projects across 21 states funded 51 programmes in 30 countries. Growing Hope Globally does not implement the overseas work itself — almost all of its overseas spending goes out as grants. It was founded in 1999 as Foods Resource Bank.',
  accreditations: [
    { label: 'Charity Navigator four-star rating', sourceId: 'ghg-financials' },
    {
      label: 'Candid (GuideStar) gold seal of transparency',
      sourceId: 'ghg-financials',
    },
    {
      label: 'Excellence in Giving Certified Transparent',
      sourceId: 'ghg-financials',
    },
  ],
  verification: 'documents-reviewed',
  biblicalAlignment: {
    mandate:
      'Isaiah puts the test of real religion in the hands: pour yourself out for the hungry, and your light rises in the dark. Growing Hope Globally reads that as teaching rather than shipping — the hungry man is fed longer by a technique he can repeat next season than by a sack he receives once. Proverbs blesses the one who shares his bread, and here the bread is shared by the odd route of growing it in Ohio, selling it, and paying for a Malawian farmer to grow his own.',
    scriptures: [
      {
        ref: 'Isaiah 58:10',
        text: 'If you pour yourself out for the hungry and satisfy the desire of the afflicted, then shall your light rise in the darkness and your gloom be as the noonday.',
      },
      {
        ref: 'Matthew 25:35',
        text: 'For I was hungry and you gave me food, I was thirsty and you gave me drink, I was a stranger and you welcomed me.',
      },
      {
        ref: 'Proverbs 22:9',
        text: 'Whoever has a bountiful eye will be blessed, for he shares his bread with the poor.',
      },
    ],
    concerns: [
      '$454,458 of program services — about one programme dollar in six — is spent inside the United States on the Growing Project network rather than overseas. Supporting 102 volunteer farming projects is real work and it is arguably what generates the income in the first place, but it is booked as programme, not fundraising, and it sits in the numerator of the cost per person on this page. A donor should know that a sixth of the programme budget never leaves the country.',
      'The Christian identity is located on the American side of the transaction. “As a Christian response to hunger” describes rural US congregations answering a call; we found no description of Christian witness, church partnership or discipleship in any of the 30 overseas countries. That may well be happening through the grantees, but the ministry does not say so, and a donor should not assume it.',
      'Nearly all overseas spending — $1,998,855 of $2,198,019 — leaves as grants to organisations Growing Hope Globally does not name in its audit or annual report. The donor’s audit trail stops at the grant, the implementers are invisible, and the outcome count of 263,350 people arrives from those same unnamed parties. For a grant-making ministry that is a significant accountability gap.',
    ],
  },
  roi: {
    levers: ['multiplication', 'local-cost-base', 'volunteer-leverage'],
    reason:
      'This is the cheap-technique case rather than the cheap-asset case. A farmer who learns to space his maize properly, compost, save seed or terrace a slope applies that knowledge again every season at no further cost, and teaches his neighbour at no cost at all — the spending buys a practice, and practices replicate for free. The training is delivered in Malawi, Zambia, Kenya, Bolivia, Bangladesh and Guatemala at local wage levels. And a share of the income arrives with almost no fundraising cost attached: 102 volunteer Growing Projects donate the land, the inputs and the labour, and hand over the value of a harvest.',
  },
  costModel: {
    outcome: 'agricultural development programme funded for a year',
    outcomePlural: 'agricultural development programmes funded for a year',
    spend: {
      amount: 2652477,
      basis: 'program-services',
      fiscalYear: '2026',
      sourceId: 'ghg-audit-26',
    },
    count: {
      amount: 51,
      label: 'agricultural development programmes funded in 30 countries',
      fiscalYear: '2026',
      sourceId: 'ghg-ar-26',
    },
    attribution: 'all-program-spend',
    caveat:
      'We do not divide by the number Growing Hope Globally leads with. Its headline is 263,350 people helped to find lasting solutions to hunger, which against this budget would read $10.07 — but nothing defines what being helped consists of, the count arrives from grantees the ministry does not name, and its own sentence says the Growing Projects “joined together with other funders” to support the 51 programmes, so somebody else paid a share of every person in it. What this ministry’s money demonstrably bought is a year of those 51 programmes, so that is the denominator, and it cuts both ways too. As an upper bound it is loose in the usual way: the same $2.65 million includes $454,458 spent in the United States running the Growing Project network, which reached nobody overseas. But as the cost of a programme it is a floor, not a ceiling — the co-funding share is nowhere disclosed, so read $52,009 as Growing Hope Globally’s average contribution to one programme rather than what a programme costs to run. It is the one cause on this site where the real cost is higher than our arithmetic, not lower, and we cannot say by how much.',
    alternates: [
      {
        label: 'people helped to find lasting solutions to hunger (263,350)',
        count: 263350,
        note: 'About $10.07, and the figure the ministry leads with. Undefined, reported by grantees it does not name, and part-paid by other funders, so it is the floor of the range rather than a price.',
      },
    ],
  },
  ministryClaims: [
    {
      quote:
        'This year, 102 Growing Projects in 21 states joined together with other funders to support 51 agricultural development programs in 30 countries, helping 263,350 people find lasting solutions to hunger.',
      sourceId: 'ghg-ar-26',
    },
    {
      quote:
        'As a Christian response to hunger, we link the grassroots energy and commitment of rural communities in the U.S. with the capability and desire of smallholder farmers in developing countries to grow lasting solutions to hunger.',
      sourceId: 'ghg-about',
    },
    {
      quote:
        'They quickly learned shipping was too costly – nearly 15 times the cost of the grain itself – and would wreak havoc on local farmers and markets.',
      sourceId: 'ghg-about',
    },
    {
      quote:
        'By carefully managing costs, 88 cents of every dollar donated is invested in Agricultural Development programming and Growing Project support.',
      sourceId: 'ghg-financials',
    },
    {
      quote:
        'Together, we have served over 2.5 million people and helped them to grow lasting solutions to hunger.',
      sourceId: 'ghg-about',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 2,
      note: 'The phrase “As a Christian response to hunger” opens both the mission statement and the programme description in the Form 990, the tagline is “Rooted in Community, Grounded in Faith”, the annual report opens on Ephesians 3:20, and the American engine of the whole thing is rural congregations. Held at 2 because the faith is visible on the donor side and invisible in the description of what happens in the 30 countries where the money is spent.',
    },
    localLeadership: {
      value: 1,
      note: 'The structure is promising and unverifiable. Growing Hope Globally implements nothing itself: $1,998,855 of $2,198,019 of overseas programme spending is grants, so the work is done by somebody else in the country. But no grantee is named in the audit or annual report, so we cannot confirm that a single implementing organisation is locally led rather than a northern agency working through a local office. Scored 1 for a devolved model we could not check, not for a bad one.',
    },
    financialTransparency: {
      value: 2,
      note: 'At the entity level this is very good: audited statements, Form 990 and annual report for the year to March 2026 are all on the ministry’s own financials page, and its published claim that 88 cents of every dollar goes to programming checks out exactly against the audit ($2,652,477 of $3,012,442, or 88.05%). Marked down because a grant-making organisation that publishes no list of grantees leaves two thirds of its spending unaccounted for from the reader’s side.',
    },
    outcomeEvidence: {
      value: 1,
      note: 'One aggregate number — 263,350 people — with no breakdown by country or programme, no definition of what being helped to “find lasting solutions to hunger” consists of, no baseline and no follow-up. A cumulative claim of 2.5 million people is offered with even less behind it. The 30 countries and 51 programmes are counted precisely; the people are not.',
    },
    costEvidence: {
      value: 1,
      note: 'The numerator is audited and exact. The denominator is at least countable now that it is programmes rather than an undefined “people helped”, but other funders paid a share of those programmes too, which makes the quotient hard to interpret in either direction, and the ministry publishes no cost per programme or per person of its own. Both halves exist, which is why there is a cost model at all, but this is the weakest arithmetic on any page we built.',
    },
  },
  notVerified: [
    'How much of each programme Growing Hope Globally actually paid for. Its own report says the Growing Projects “joined together with other funders”, and nothing discloses the co-funding share. Without it, neither $52,009 a programme nor $10.07 a person is a number whose meaning we can pin down — each is the ministry’s slice of a bill, not the bill.',
    'What “helping 263,350 people find lasting solutions to hunger” means. No definition, no unit, no baseline, no breakdown across the 51 programmes or 30 countries, and no statement of whether a household is counted once or per member.',
    'Who the grantees are. $1,998,855 of grants left the organisation in one year and no recipient is named in the audit or the annual report, so we cannot tell whether the implementer is an in-country organisation, a US denominational relief agency, or a mix.',
    'Whether any of the 263,350 people were still better off a year later. For a ministry whose stated product is “lasting solutions”, no durability, follow-up or graduation evidence is published — the same gap that makes “people reached with water” a weak number elsewhere on this site.',
    'Program services fell 7.8%, from $2,878,207 to $2,652,477, and total expenses fell from $3,209,153 to $3,012,442, while management and general rose from $203,721 to $224,642. Nothing in the audit explains the contraction.',
    'The 30 countries named in the annual report include West Africa, which is a region rather than a country, so the country count and the geography do not quite line up.',
    'The cumulative claim of “over 2.5 million people” spans 27 years, multiple names for the organisation and countries it has long since left. We could not check any part of it.',
    'What share of the Growing Project income is the value of donated land, seed, fuel and labour rather than cash. The model’s appeal rests on volunteer farmers absorbing real costs, and none of that in-kind value is quantified in what we read.',
  ],
  notes: [
    'The work is agricultural training rather than food distribution, so it sits under food and farming alongside the feeding ministries; the unit is not comparable with a meal. That is an imperfect fit and worth saying plainly: the work is agricultural development against hunger, and hunger is the health problem it addresses.',
    'Growing Hope Globally is on this site substantially because of a sentence in its own founding story, which is the most honest thing any ministry in this batch says about aid dependency: two Ohio farmers started by shipping corn from their fields to developing countries, and “They quickly learned shipping was too costly – nearly 15 times the cost of the grain itself – and would wreak havoc on local farmers and markets.” A ministry that abandoned its founding method because it would damage the people it meant to help has already answered the hardest question a donor can ask it. Read it alongside Feed My Starving Children, which does ship food, and decide what you think.',
    'Growing Hope Globally reports working in 30 countries: Bangladesh, Bolivia, Burkina Faso, Burundi, Cambodia, Cameroon, Colombia, Guatemala, Haiti, Honduras, India, Kenya, Lebanon, Liberia, Malawi, Mexico, Myanmar, Nepal, Nicaragua, Palestine, Paraguay, Peru, Rwanda, Senegal, Sierra Leone, Tanzania, Timor-Leste, Uganda, West Africa and Zambia. We list six of them on this page so the income comparison stays readable; the spending is spread across all of them, and the cost per person is not specific to the six.',
    'Overseas programme spending was $2,198,019 of the $2,652,477 programme total, and $1,998,855 of that was grants. This is a grant-maker with a volunteer fundraising network attached, not a field operation.',
  ],
  siteUrl: 'https://www.growinghopeglobally.org/',
  giveUrl: 'https://www.growinghopeglobally.org/get-involved/donate/',
  sources: [
    {
      id: 'ghg-site',
      label: 'Homepage',
      url: 'https://www.growinghopeglobally.org/',
      publisher: 'Growing Hope Globally',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'ghg-about',
      label: 'About Us',
      url: 'https://www.growinghopeglobally.org/about-us/',
      publisher: 'Growing Hope Globally',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Source of the mission statement, the 1999 founding story and the conclusion about shipping grain wrecking local markets, and the cumulative 2.5 million people claim.',
    },
    {
      id: 'ghg-financials',
      label: 'Financials',
      url: 'https://www.growinghopeglobally.org/about-us/financials/',
      publisher: 'Growing Hope Globally',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Where the audit, Form 990 and annual report are posted, and where the 88 cents claim and the Charity Navigator, GuideStar and Excellence in Giving recognitions appear.',
    },
    {
      id: 'ghg-audit-26',
      label: 'Audited financial statements, year ended 31 March 2026',
      url: 'https://www.growinghopeglobally.org/wp-content/uploads/2026/07/Audited-Financials-FY-2026-2025-Growing-Hope-Globally.pdf',
      publisher: 'Growing Hope Globally',
      documentType: 'audited-financials',
      retrieved: '2026-09-18',
      fiscalYear: '2026',
      note: 'Program services $2,652,477 (US Growing Projects $454,458 plus overseas programs $2,198,019, of which $1,998,855 is grants), management and general $224,642, fundraising $135,323, total functional expenses $3,012,442.',
    },
    {
      id: 'ghg-990-26',
      label: 'Form 990, year ended 31 March 2026',
      url: 'https://www.growinghopeglobally.org/wp-content/uploads/2026/07/Growing-Hope-Globally-FY-2026-990.pdf',
      publisher: 'Growing Hope Globally',
      documentType: 'form-990',
      retrieved: '2026-09-18',
      fiscalYear: '2026',
      note: 'Part III opens the programme description with “AS A CHRISTIAN RESPONSE TO WORLD HUNGER”.',
    },
    {
      id: 'ghg-ar-26',
      label: 'Annual report, financial year 2025–2026',
      url: 'https://www.growinghopeglobally.org/wp-content/uploads/2026/07/Growing-Hope-Globally-Annual-Report-FY-2026.pdf',
      publisher: 'Growing Hope Globally',
      documentType: 'annual-report',
      retrieved: '2026-09-18',
      fiscalYear: '2026',
      note: 'Source of the 263,350 people, 102 Growing Projects in 21 states, 51 programmes and the list of 30 countries. Opens on Ephesians 3:20.',
    },
  ],
};
