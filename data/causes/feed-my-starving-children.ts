import type { Cause } from '@/lib/types';

export const feedMyStarvingChildren: Cause = {
  slug: 'feed-my-starving-children',
  name: 'Feed My Starving Children',
  ein: '41-1601449',
  tagline:
    'Packs 382 million fortified meals a year with American volunteers — and its audit shows a third of the cost is labour nobody paid for.',
  category: 'children',
  countries: ['Global'],
  whatTheyDo:
    'Feed My Starving Children buys rice, soy, vegetables and a vitamin blend in bulk, and has volunteers in the United States hand-pack it into single-meal bags at permanent sites and travelling MobilePack events. The sealed meals are shipped to in-country partners — schools, orphanages, feeding programmes and churches — who distribute them. In the year to February 2026 it provided 382,120,176 meals through 1,207,456 volunteers to partners in 57 countries, and passed five billion meals shipped since it began.',
  accreditations: [{ label: 'Charity Navigator four-star rating', sourceId: 'fmsc-accountability' }],
  verification: 'documents-reviewed',
  biblicalAlignment: {
    mandate:
      'Feeding the hungry is the first need Jesus names in the passage where he says the nations will be sorted by what they did for the least, and the ministry’s own annual report opens on Isaiah’s version of the same charge. Its stated mission — feeding children hungry in body and spirit — takes the mandate as indivisible: bread and the gospel are not competing claims on the same dollar.',
    scriptures: [
      {
        ref: 'Matthew 25:35',
        text:
          'For I was hungry and you gave me food, I was thirsty and you gave me drink, I was a stranger and you welcomed me.',
      },
      {
        ref: 'Isaiah 58:10',
        text:
          'If you pour yourself out for the hungry and satisfy the desire of the afflicted, then shall your light rise in the darkness and your gloom be as the noonday.',
      },
      {
        ref: 'Psalm 146:7',
        text:
          'Who executes justice for the oppressed, who gives food to the hungry. The Lord sets the prisoners free.',
      },
    ],
    concerns: [
      'Food manufactured in the United States by American volunteers and shipped to 57 low-income countries is the textbook form of the argument that food aid undercuts the farmers and traders who would otherwise have sold that food. At 382 million meals a year this is the largest version of that question in this directory, and nothing we found on the FMSC site addresses it. The contrast is instructive: Growing Hope Globally, also on this site, abandoned shipping American grain overseas in its first years precisely because it “would wreak havoc on local farmers and markets”.',
      'The advertised price rests on unpaid labour, and the audit says so plainly. $31,366,333 of donated production labor sits inside the $88,836,931 of program services, with a further $1,699,943 capitalised into food inventory, valued “based on industry data of the average cost to hire”. That is honest accounting — most ministries would not disclose it — but a donor reading “29 cents per meal” is reading a price that assumes a volunteer turns up for free. Strip the imputed labour out and the cash cost is roughly 15 cents a meal. The 29 cents is not the cost of a meal; it is the cost of a meal plus a valuation of the hour somebody gave.',
      'The mission is to feed children “hungry in body and spirit”, but the spiritual half is delivered by in-country partners FMSC does not name. A donor cannot see who receives five billion meals’ worth of distribution authority, what they teach, or whether food is ever contingent on a hearing. Where food and evangelism travel together that question has to be asked, and no safeguard is published.',
    ],
  },
  roi: {
    levers: ['volunteer-leverage', 'existing-network'],
    reason:
      'This cause gets its leverage from a different place than every other one on this page, and the honest thing is to say so: the food is not cheap because it is made in a low-income economy, it is made in the United States. What makes the unit small is scale and free hands. 1,207,456 volunteers packed the meals, which is why the marginal cost of a bag is measured in cents, and the raw materials are bought by the container. Distribution rides on partner schools, orphanages and churches that already exist and already know which children are hungry. There is no local cost base to show you here, because there is no local production.',
  },
  costModel: {
    outcome: 'meal',
    outcomePlural: 'meals',
    spend: {
      amount: 88836931,
      basis: 'program-services',
      fiscalYear: '2026',
      sourceId: 'fmsc-audit-26',
    },
    count: {
      amount: 382120176,
      label: 'meals provided',
      fiscalYear: '2026',
      sourceId: 'fmsc-impact-26',
    },
    attribution: 'all-program-spend',
    caveat:
      'An upper bound, and a third of the numerator was never paid in cash: $31,366,333 of the $88,836,931 is donated production labour valued at what it would have cost to hire. Also inside it are $1,786,348 of cost of sales for the MarketPlace business, $575,957 of charitable donations and $391,418 of partner programmes, none of which is a meal. Read this as the full accounting cost of everything FMSC did, including the value of volunteer hours, divided by the meals that came out — which is why it lands below the 29 cents the ministry advertises and well above the roughly 15 cents the cash actually bought.',
    alternates: [
      {
        label: 'children fed a daily meal for a year',
        count: 1046904,
        note:
          'About $85 for a child-year, and the more meaningful unit. But this is not a count of children: 382,120,176 divided by 365 is 1,046,904, so the figure is the meal total restated, and a child who eats an FMSC meal only on school days is counted as a fraction of a child.',
      },
    ],
  },
  ministryClaims: [
    {
      quote:
        'Donors fund. At 29 cents per meal, gifts of every size become real food for children who need it.',
      sourceId: 'fmsc-give',
      impliedCostPerOutcome: 0.29,
      impliedOutcome: 'meal',
    },
    {
      quote:
        "As a Christian nonprofit organization, Feed My Starving Children is called to feed God's starving children hungry in body and spirit.",
      sourceId: 'fmsc-mission',
    },
    {
      quote: '88% of donations went directly to meal production',
      sourceId: 'fmsc-impact-26',
    },
    {
      quote: '99.7% of shipped meals have safely reached their intended destinations',
      sourceId: 'fmsc-impact-26',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 2,
      note:
        'Explicitly and repeatedly Christian in its own words — “As a Christian nonprofit organization…”, a mission of feeding children “hungry in body and spirit”, Psalm 146:7 on the mission page and Isaiah 58:10 opening the annual report. Held at 2 because every programme dollar buys food, shipping and manufacturing, the spiritual half is subcontracted to unnamed partners, and the ministry’s values page would not render for us so we could not read a statement of faith.',
    },
    localLeadership: {
      value: 1,
      note:
        'The lowest score in this batch, and structural rather than a failing. The meals are designed, bought, packed and shipped in the United States by American volunteers and American staff; the only local layer is the in-country partner that hands the food to a child, and those partners are not named. There is no national staff, no local production and no local procurement in the model.',
    },
    financialTransparency: {
      value: 3,
      note:
        'Audited statements, the Form 990, an annual report and an impact report are all posted on the ministry’s own accountability page, and the audit gives a line-by-line functional expense statement. Crucially it discloses donated production labour as its own line inside program services — the disclosure that let us take the advertised meal price apart. Most ministries would have buried it in a total.',
    },
    outcomeEvidence: {
      value: 2,
      note:
        'The counting of meals produced and shipped is precise, audited-adjacent and consistent across documents, and the ministry even publishes a delivery success rate. What is missing is the other end: no nutritional, growth or health outcome data for the children who eat the meals, and no evidence a meal shipped became a meal eaten.',
    },
    costEvidence: {
      value: 3,
      note:
        'The best in this batch, precisely because the audit lets a sceptic decompose the number. Spending and meal count are for the same fiscal year, and the gifts-in-kind component is disclosed separately, so a donor can see the all-in figure of about 23 cents, the cash figure of about 15 cents, and the advertised 29 cents side by side. The gap between the audited and advertised prices is unexplained, which is why this is a 3 and not more.',
    },
  },
  notVerified: [
    'Roughly 35% of the program spending we divided was never paid out: $31,366,333 of donated production labor, valued by FMSC “based on industry data of the average cost to hire”. No hourly rate, no hours and no methodology is published, so we cannot test the valuation — only report that it exists and is large.',
    'Why the ministry advertises 29 cents when its own audited program spending divided by its own meal count is about 23 cents, and cash program spending is about 15 cents. Pricing above cost is the safe direction to err, but no document explains the difference.',
    '“Meals provided” means meals produced and shipped, not meals eaten. The 99.7% success figure is about meals safely reaching an intended destination — a partner — not about reaching a child’s mouth.',
    'The in-country partners are not named anywhere we could find. Who they are, how they are selected, whether they are audited, and whether food is ever tied to attendance at anything, are all unknown.',
    'The figure of “1,046,904 children fed a daily meal for a year” is the meal count divided by 365. It is a restatement, not a headcount, and the ministry presents it alongside the meal total as though it were independent.',
    '$1,786,348 of MarketPlace cost of sales, $575,957 of charitable donations and $391,418 of partner programmes sit inside the program services total we used as a numerator. The MarketPlace line is the cost of goods a business sold.',
    'No nutritional or health outcome evidence. For a fortified-food ministry the obvious question is what happens to the weight, height and school attendance of a child who eats these meals for a year, and nothing on that is published.',
    'Total functional expenses are $100,954,707 while total expenses on the statement of activities are $100,835,799 — a difference of $118,908, being costs of direct benefits to donors netted against fundraising. Minor, but it means the two statements do not tie without explanation.',
    'A further $1,699,943 of donated labour is capitalised inside packaged food inventory at year end, so some imputed volunteer value is carried forward into the next year’s cost of meals as well.',
    'The ministry’s values page returned almost no readable content, so we could not verify whether a formal statement of faith exists.',
  ],
  notes: [
    'The cash arithmetic, which is ours and not the ministry’s: $88,836,931 of program services less $31,366,333 of donated production labour leaves $57,470,598 of cash program spending, or about $0.150 a meal. We show the higher all-in figure in the cost model because that is what the audit reports as program spending, but a donor asking what their dollar buys when a volunteer is already standing at the table should look at the 15 cents.',
    'On the revenue side the audit reports $32,105,476 of contributions of nonfinancial assets, which is the mirror of the donated labour and materials inside program expenses. The organisation is genuinely about a third gift-in-kind by construction — that is the model, not an accounting quirk.',
    'Countries are listed as Global rather than named, and that is the honest choice: FMSC ships to 57 countries and the food is manufactured in the United States, so there is no single local economy setting the price and no cost base to put on this page.',
    'The directory has no category for food, so this sits under children and families. The recipients are children and the ministry’s own headline unit is a child fed for a year.',
    'Program services were 88% of total functional expenses, matching the ministry’s own published “88% of donations went directly to meal production”. That check holds — but the 88% includes the imputed volunteer labour, which inflates both the numerator and the total.',
    'Fundraising cost $6,353,182 and management and general $5,764,594, each about 6% of the total.',
  ],
  siteUrl: 'https://www.fmsc.org/',
  giveUrl: 'https://www.fmsc.org/give',
  sources: [
    {
      id: 'fmsc-site',
      label: 'Homepage',
      url: 'https://www.fmsc.org/',
      publisher: 'Feed My Starving Children',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'fmsc-mission',
      label: 'Our Mission',
      url: 'https://www.fmsc.org/about-us/our-mission',
      publisher: 'Feed My Starving Children',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note:
        'Source of the Christian self-description, the mission statement “Feeding God’s children hungry in body and spirit”, and the Psalm 146:7 reference.',
    },
    {
      id: 'fmsc-give',
      label: 'Give',
      url: 'https://www.fmsc.org/give',
      publisher: 'Feed My Starving Children',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Where the 29 cents per meal price is advertised.',
    },
    {
      id: 'fmsc-accountability',
      label: 'Financial Accountability',
      url: 'https://www.fmsc.org/about-us/financial-accountability',
      publisher: 'Feed My Starving Children',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note:
        'Hosts the audited statements, Form 990, annual report and impact report, and states the Charity Navigator four-star rating held for 20 years.',
    },
    {
      id: 'fmsc-audit-26',
      label: 'Audited financial statements, years ended 28 February 2026 and 2025',
      url: 'https://www.fmsc.org/-/media/files/pdfs/financial-accountability/feed-my-starving-children-2026-financial-statements.pdf',
      publisher: 'Feed My Starving Children',
      documentType: 'audited-financials',
      retrieved: '2026-09-18',
      fiscalYear: '2026',
      note:
        'Program services $88,836,931, management and general $5,764,594, fundraising $6,353,182, total functional expenses $100,954,707. The functional expense statement discloses donated production labor of $31,366,333 inside program services, and the notes disclose $1,699,943 of donated labour capitalised in inventory valued from industry hiring data.',
    },
    {
      id: 'fmsc-990-25',
      label: 'Form 990',
      url: 'https://www.fmsc.org/-/media/files/pdfs/financial-accountability/2025-feed-my-starving-children-990---public-copy.pdf',
      publisher: 'Feed My Starving Children',
      documentType: 'form-990',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
    },
    {
      id: 'fmsc-ar-26',
      label: 'Annual report 2025–26',
      url: 'https://www.fmsc.org/-/media/files/pdfs/financial-accountability/fmsc-annual-report-2025-26.pdf',
      publisher: 'Feed My Starving Children',
      documentType: 'annual-report',
      retrieved: '2026-09-18',
      fiscalYear: '2026',
      note: 'Opens on Isaiah 58:10.',
    },
    {
      id: 'fmsc-impact-26',
      label: 'Impact report 2026',
      url: 'https://www.fmsc.org/-/media/files/pdfs/financial-accountability/impact-report/2026_impactreport_fa_digital-linked.pdf',
      publisher: 'Feed My Starving Children',
      documentType: 'annual-report',
      retrieved: '2026-09-18',
      fiscalYear: '2026',
      note:
        'Source of the 382,120,176 meals, 1,046,904 children fed a daily meal for a year, 1,207,456 volunteers, 57 countries, the 99.7% delivery figure and the 88% claim. The headline figures are set in graphics and were read off the rendered pages.',
    },
  ],
};
