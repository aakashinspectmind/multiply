import type { Cause } from '@/lib/types';

export const samaritansPurse: Cause = {
  slug: 'samaritans-purse',
  name: 'Samaritan’s Purse',
  legalName: 'Samaritan’s Purse',
  ein: '58-1437002',
  tagline:
    'Flies field hospitals and food into war and famine zones, and runs the world’s largest shoebox gift programme.',
  category: 'relief',
  countries: ['Global', 'Sudan', 'Ukraine', 'Myanmar', 'Jamaica'],
  whatTheyDo:
    'Samaritan’s Purse runs two very different operations out of one budget. The first is emergency relief: airdropping food into Sudan, deploying its own Emergency Field Hospital, flying relief aircraft into the Middle East and Myanmar, and working through Ukrainian church partners on the frontlines. The second is Operation Christmas Child, which collects shoebox gifts packed by individuals — mostly in the United States — and distributes them through local churches in roughly 100 countries alongside a gospel presentation. It also funds medical ministry, Christian education and children’s programmes. Franklin Graham has led it since 1979.',
  accreditations: [],
  verification: 'documents-reviewed',
  biblicalAlignment: {
    mandate:
      'The parable this ministry is named after is the clearest instruction in Scripture on what to do when you come across a stranger who has been destroyed by something outside his control: go to him, pay for his care, and come back. Matthew 25 makes the same duty a test of whether faith is real — food, water, clothes, shelter, and presence to the imprisoned. Samaritan’s Purse takes its name and its own stated basis from Luke 10 directly.',
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
        ref: 'Isaiah 58:7',
        text: 'Is it not to share your bread with the hungry and bring the homeless poor into your house; when you see the naked, to cover him, and not to hide yourself from your own flesh?',
      },
    ],
    doctrine: {
      label:
        'Statement of faith published on the site, and the gospel set out at length inside the audited financial statements themselves',
      sourceId: 'sp-sof',
    },
    concerns: [
      'Operation Christmas Child is the contested part of this ministry, and it deserves to be argued honestly rather than dismissed. The gift is paired with a gospel presentation at an outreach event: a partner quoted in the ministry’s own annual report says “For most of the kids in this area, an outreach event is the first time they hear the Gospel.” The old objection inside missions is that a child who receives a present has no real freedom to decline the talk that comes with it. The old defence is that a church which would have preached anyway now has a reason for the child to come, and that no one is asked to profess anything to keep the box. Both are true at once. A donor should decide which weight they give it rather than be told the question does not exist.',
      'The economics of the shoebox are a separate objection from the theology. Consumer goods bought at US retail, packed by a US family and shipped across the world are close to the most expensive way to deliver goods of that value, and free imported goods can undercut the local traders who sell the same things. Samaritan’s Purse does not publish the shipping and processing cost of the programme separately from the retail value of its contents, so the trade-off cannot be priced from the outside.',
      'Governance is concentrated in one family. Schedule L of the 2025 Form 990 discloses business transactions with at least twelve relatives of directors and key employees on the payroll. William Franklin Graham III is board member, chairman, president and CEO, compensated $551,873 with $72,890 of other benefits; Edward Graham is a board member and the chief operating officer, compensated $418,373 with $57,541.',
      'Emergency relief is delivered substantially by sent teams and chartered aircraft — its own Emergency Field Hospital, its own relief flights — which is the expensive end of humanitarian logistics rather than the cheap end. That is sometimes the only thing that works when a health system has collapsed, and the ministry also employs 4,065 people in-region, but a donor should not assume this is a low-overhead local-delivery model.',
    ],
  },
  roi: {
    levers: ['existing-network', 'local-workers', 'volunteer-leverage'],
    reason:
      'Two mechanisms, pulling in opposite directions. Distribution rides churches that already exist in roughly 100 countries, so the gift is not paying to build the channel, and Schedule F of the 2025 Form 990 reports 28 foreign offices and 4,065 employees, agents and contractors working in-region rather than flown in. Against that, the single largest programme moves physical consumer goods from the United States outward, which is the costliest possible direction of travel. For the relief work specifically, cost per outcome is the wrong question: when a field hospital is the only surgical capacity within a hundred miles of a famine, speed and getting there at all matter more than the unit price, and we have not tried to force a leverage claim onto it.',
  },
  costModel: {
    outcome: 'shoebox gift collected and distributed',
    outcomePlural: 'shoebox gifts collected and distributed',
    spend: {
      amount: 490070259,
      basis: 'program-services',
      fiscalYear: '2025',
      sourceId: 'sp-audit-25',
    },
    count: {
      amount: 10900000,
      label: 'gift boxes collected from individuals',
      fiscalYear: '2025',
      sourceId: 'sp-audit-25',
    },
    attribution: 'single-program-line',
    caveat:
      'This is the one division in this ministry where both halves are published for the same year in the same audited document, and it is deliberately not the relief number. It over-attributes in a specific way: $352,103,664 of the $490,070,259 is the value of the donated goods inside the boxes, valued by Samaritan’s Purse itself by comparing the contents to large retail box store prices. A donor sending cash is not buying that portion — someone else already did. Strip the contributed goods out and the same 10,900,000 boxes cost $137,966,595 of cash to collect, process, ship and distribute, or $12.66 a box. Both figures are real; the first is what the box is worth at US retail, the second is what your dollar actually paid for.',
    alternates: [
      {
        label: 'shoebox gifts the annual report says were packed in 2025',
        count: 12200000,
        note: 'The 2025 Annual Ministry Report says “In 2025, 12.2 million shoebox gifts were prayerfully packed” while the 2025 audit says the project collected approximately 10,900,000 boxes. Neither document reconciles the two, and we did not guess at the reason. We used the audited figure because it is the one the $30.89 valuation is applied to.',
      },
    ],
  },
  ministryClaims: [
    {
      quote: 'The estimated value per gift box was $30.89 for 2025 and $29.27 for 2024.',
      sourceId: 'sp-audit-25',
      impliedCostPerOutcome: 30.89,
      sameUnitAsCostModel: true,
      impliedOutcome: 'shoebox gift',
    },
    {
      quote:
        'Operation Christmas Child gift boxes are valued at fair market value of the items received, pricing is determined by comparing to large retail box store prices.',
      sourceId: 'sp-audit-25',
    },
    {
      quote:
        'All contributions designated for specific projects shall to those projects, and we may assess up to 10 percent to be used for administering the gift.',
      sourceId: 'sp-financials',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 3,
      note: 'As explicit as it gets. The audited financial statements themselves — not the marketing — set out the substitutionary atonement, the resurrection and a prayer a reader can pray, and the corporate purpose is “sharing God’s love through His Son, Jesus Christ.” A separate statement of faith is published on the site.',
    },
    localLeadership: {
      value: 2,
      note: 'Schedule F reports 28 foreign offices and 4,065 employees, agents and contractors working in-region, 2,188 of them in Sub-Saharan Africa, and the Ukraine work runs through Ukrainian church partners. But governance, fundraising and the flagship programme’s supply chain all sit in North Carolina, the disaster model deploys US teams and aircraft, and the board is a single family’s.',
    },
    financialTransparency: {
      value: 3,
      note: 'Audited consolidated statements, the full Form 990 and an annual ministry report are all posted on the ministry’s own site, and the audit goes further than most: a consolidating schedule breaks contributed goods out by programme line, which is what let us separate cash from donated goods. Marked at 3 despite that being where the hardest questions are, because the ministry published the data that raises them.',
    },
    outcomeEvidence: {
      value: 1,
      note: 'The shoebox count is audited and precise. Emergency relief — $480,206,414, the largest programme — has no published annual total of any kind, only per-crisis vignettes. The organisation counts its cheapest-to-count product well and its most important product not at all.',
    },
    costEvidence: {
      value: 2,
      note: 'Both halves of one division are published in the same audited document for the same year, which is rare. But that division is the shoebox programme, and the programme a relief donor is giving to has a numerator and no denominator.',
    },
  },
  notVerified: [
    'What $480,206,414 of emergency relief and recovery delivered in 2025. There is no global count — no people fed, no patients treated, no families sheltered as an annual total. What exists is per-crisis: 2,700 tons airdropped and 9,149 people cared for at a field hospital in Sudan; emergency food for 196,657 Ukrainians and 6,900 patients in 81 villages; more than 104 tons of supplies, 5,800 patients and water for up to 20,000 people in Myanmar; 1,700 people treated, 500 household tents and 15 relief flights in the Middle East. These are not additive and the ministry does not add them.',
    'Two different shoebox counts for the same year. The annual report says 12.2 million gifts were packed; the audit says approximately 10,900,000 were collected. A gap of 1.3 million boxes, roughly $40 million at the ministry’s own per-box value, is unexplained in both documents.',
    'What a shoebox is worth where it lands. The $30.89 is US retail replacement cost, set by the ministry by comparing contents to large retail box store prices. It is not what Samaritan’s Purse paid, not what the goods would cost in the receiving country, and not a figure any outside party has tested.',
    'The gospel claims. The annual report says “more than 244 million children in more than 170 countries and territories have heard the Gospel of Jesus Christ during the 33 years of Operation Christmas Child”, and the Sudan and Ukraine sections report people who “committed their lives to Jesus Christ” and were baptised. We quote these as claims and do not treat them as outcomes. Nobody can count a conversion, including us.',
    'Who receives the foreign money. Schedule F reports $622,566,909 of foreign expenditure and grants by region without naming the recipient organisations, which is permitted but means the partner roster is not public.',
    'Roughly 115,000 of the ministry’s 240,000 volunteers contributed services that were not valued in the financial statements; the audit estimates them at about $8,500,000, of which about $4,800,000 relates to shoebox collection. A real cost of running the programme therefore sits outside the numbers we divided.',
    'Whether any relief recipient is required, in practice, to sit through a gospel presentation to receive help. The ministry’s published policy does not address it and we found no independent assessment.',
    'We did not review the separate audits of the international affiliates that pack boxes outside the United States, which is one plausible explanation for the 12.2 million figure but is not stated anywhere we read.',
  ],
  notes: [
    'The headline efficiency figure and the cash figure are not the same. Reported ministry spending is $1,152,791,606 of $1,335,882,179, or 86.3%. Take out the $371,291,675 of contributed goods and services that sits in both the revenue and the expense, and cash ministry spending is $781,501,596 of $964,590,504, or 81.0%. Neither number is wrong; the first one flatters.',
    'That distortion is not spread evenly, and the detail matters. Of the $371,290,010 of contributed goods and services charged to programmes, $352,103,664 is Operation Christmas Child. Emergency relief and recovery carries only $6,594,282 — so the relief programme is 98.6% cash. If you are giving to the disaster work specifically, the gifts-in-kind problem that dominates this sector is almost absent from the line you are funding.',
    'Note 11 of the audit breaks the contributed goods down: shoebox gifts $337,960,986, food $6,639,612, medical equipment $2,159,858, other shoebox items $10,207,158, real estate $2,611,138, property and equipment $1,819,733, other goods $574,596, medical services $9,641,986, shoebox services $6,958,977, other services $148,674. Food is valued at wholesale cost paid by the donor or wholesale market value — a much more conservative basis than the retail comparison used for the boxes.',
    'Programme lines for 2025: emergency relief and recovery $480,206,414; Operation Christmas Child $490,070,259; Christian education $76,625,581; medical ministry $71,588,399; other $26,522,094; children’s other $7,778,859. Fundraising was $95,019,123 and general and administrative $88,071,450.',
    'This is by far the largest ministry in this directory, and scale cuts both ways. It can put a hospital into Sudan in days, which almost nobody else can. It also means the audited ratio a donor reads is an average across a billion dollars of very different work.',
  ],
  siteUrl: 'https://www.samaritanspurse.org/',
  giveUrl: 'https://www.samaritanspurse.org/our-ministry/donate-online/',
  sources: [
    {
      id: 'sp-site',
      label: 'Homepage',
      url: 'https://www.samaritanspurse.org/',
      publisher: 'Samaritan’s Purse',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'sp-sof',
      label: 'Statement of Faith',
      url: 'https://www.samaritanspurse.org/our-ministry/statement-of-faith/',
      publisher: 'Samaritan’s Purse',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'sp-financials',
      label: 'Financial Accountability',
      url: 'https://www.samaritanspurse.org/our-ministry/financial-accountability/',
      publisher: 'Samaritan’s Purse',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Links the audit, the Form 990 and the annual ministry report, and states the policy that designated gifts may be assessed up to 10 percent for administration.',
    },
    {
      id: 'sp-audit-25',
      label: '2025 audited consolidated financial statements',
      url: 'https://sp-comm-arkfiles.s3.theark.cloud/website/pdfs/SPConsolidFin2025_PUBLIC-DISCLOSURE.pdf',
      publisher: 'Samaritan’s Purse',
      documentType: 'audited-financials',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note: 'Audited by Forvis Mazars. Source of every financial figure on this page, including the consolidating schedule that splits contributed goods by programme line and Note 11 on how each class of donated good is valued.',
    },
    {
      id: 'sp-990-25',
      label: '2025 Form 990, public disclosure copy',
      url: 'https://sp-comm-arkfiles.s3.theark.cloud/website/pdfs/2025_Form_990_PUBLIC_DISCLOSURE.pdf',
      publisher: 'Samaritan’s Purse',
      documentType: 'form-990',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note: 'Schedule F gives 28 foreign offices, 4,065 in-region employees and agents and $622,566,909 of foreign expenditure; Schedule L lists the related-party payroll; Part VII gives officer compensation.',
    },
    {
      id: 'sp-annual-25',
      label: '2025 Annual Ministry Report',
      url: 'https://sp-comm-arkfiles.s3.theark.cloud/website/pdfs/2025-Annual-Ministry-Report.pdf',
      publisher: 'Samaritan’s Purse',
      documentType: 'annual-report',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note: 'A designed report. The per-crisis relief figures and the 12.2 million shoebox figure quoted here were read off rendered pages rather than extracted text, because the layout puts the numbers in graphics.',
    },
  ],
};
