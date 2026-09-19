import type { Cause } from '@/lib/types';

export const waterForGood: Cause = {
  slug: 'water-for-good',
  name: 'Water for Good',
  ein: '32-0112278',
  tagline:
    'Drills wells in the Central African Republic and then keeps paying to maintain them — and publishes the share still working.',
  category: 'water',
  countries: ['Central African Republic', 'Ethiopia', 'Tanzania', 'Uganda', 'Cambodia'],
  whatTheyDo:
    'Water for Good installs boreholes, hand pumps and solar-piped systems, and — unusually — runs its own permanent maintenance operation over the water points afterwards, with salaried local technicians on circuits. In the Central African Republic it maintains a network of thousands of water points, most of them in villages it did not drill. Its “Vision of a Healthy Village” programme adds latrines, handwashing stations and hygiene training through local churches and schools. Lifewater International merged into Water for Good on 1 January 2024, and the combined organisation now works in five countries.',
  accreditations: [
    { label: 'Charity Navigator', sourceId: 'wfg-financials' },
    { label: 'Candid (GuideStar)', sourceId: 'wfg-financials' },
    { label: 'Excellence in Giving', sourceId: 'wfg-financials' },
  ],
  verification: 'documents-reviewed',
  biblicalAlignment: {
    mandate:
      'A cup of cold water is the smallest thing Jesus ever attached a promise to, and thirst is one of the six needs by which he says the nations will be sorted. Water for Good quotes that passage on its own faith page. The mandate here is not only to give the drink but to keep giving it: Isaiah’s test is a life poured out for the hungry, not a grant disbursed once.',
    scriptures: [
      {
        ref: 'Matthew 25:35',
        text:
          'For I was hungry and you gave me food, I was thirsty and you gave me drink, I was a stranger and you welcomed me.',
      },
      {
        ref: 'Matthew 10:42',
        text:
          'And whoever gives one of these little ones even a cup of cold water because he is a disciple, truly, I say to you, he will by no means lose his reward.',
      },
      {
        ref: 'Isaiah 58:10',
        text:
          'If you pour yourself out for the hungry and satisfy the desire of the afflicted, then shall your light rise in the darkness and your gloom be as the noonday.',
      },
    ],
    doctrine: {
      label: 'Beliefs summarised in the Apostles’ Creed',
      sourceId: 'wfg-faith',
    },
    concerns: [
      'The infrastructure and the maintenance are both free to the village. Water for Good publishes nothing about what communities contribute toward upkeep, and nothing about what happens to functionality if its donor-funded maintenance contract ever stops. In the Central African Republic it is effectively acting as the rural water utility, paid for from abroad. That is the aid-dependency critique in its strongest form, and the ministry’s own endorsements page quotes Brian Fikkert of When Helping Hurts — so they know the argument exists.',
      'The 2025 report says plainly: “In many of the places we serve, we are not able to openly evangelize due to local laws and customs. So we partner with church networks who already understand their communities.” In the Vision of a Healthy Village model those same church partners “help identify vulnerable households” and then deliver both WASH support and spiritual care. When the people choosing who receives a latrine are also the people sharing the gospel, the line between service and inducement is thin. No safeguard against that is published.',
      'The Central African Republic is one of the most fragile states in the world, and in November 2025 Water for Good held a public launch event in Bangui in front of government representatives and UN agencies. Visibility of that kind is a reasonable strategy and also a risk carried by local staff rather than by donors.',
    ],
  },
  roi: {
    levers: ['durable-asset', 'local-cost-base', 'local-workers', 'existing-network'],
    reason:
      'A borehole is the clearest durable asset in this directory: drilled once, it can produce for a decade or more, and Water for Good is one of the very few ministries that spends money specifically to make that true — 19% of 2025 expenses went to maintaining water points that already exist. Income per person in the Central African Republic is the lowest of any country on this site, so drilling crews, technicians and hygiene trainers are paid to that economy. Delivery rides on churches and schools that are already there. Against that, the work is capital-heavy and the maintenance is a recurring cost, not a one-off gift.',
  },
  costModel: {
    outcome: 'water point installed',
    outcomePlural: 'water points installed',
    spend: {
      amount: 10994227,
      basis: 'program-services',
      fiscalYear: '2024',
      sourceId: 'wfg-audit-24',
    },
    count: {
      amount: 223,
      label: 'water points installed',
      fiscalYear: '2024',
      sourceId: 'wfg-impact-24',
    },
    attribution: 'all-program-spend',
    caveat:
      'An upper bound, and the reason it is high is the thing that makes this ministry worth listing. The same programme budget maintained more than 3,100 existing water points in the Central African Republic and Ethiopia, put 49,132 people through the Vision of a Healthy Village programme, built or rehabilitated 25 latrine blocks and ran nine healthy schools — none of which is a new water point. Charging all of it to the 223 new installations overstates what a new one costs by a wide margin. The ministry’s own rounded figure for water and sanitation infrastructure in 2024 was $5.5 million, which would put a water point nearer $24,700.',
    alternates: [
      {
        label: 'water points Water for Good was maintaining in the Central African Republic',
        count: 2500,
        note:
          'Published as “2,500+”, so this is the floor of their own figure. Dividing by water points kept in service rather than newly built gives about $4,400 — a different question, and arguably the more useful one, since a well that keeps working for ten years delivers far more than one that is merely drilled.',
      },
      {
        label: 'people Water for Good reports being served',
        count: 1167067,
        note:
          'Their headline number, and it gives about $9 a person. We do not lead with it because it is a cumulative stock — everyone drinking from any water point in the maintenance network — not people who gained access in 2024.',
      },
    ],
  },
  ministryClaims: [
    {
      quote:
        'Reliable water services is a commitment for Water for Good. More than 950,000 people in the Central African Republic enjoyed reliable water because of our direct maintenance services (2,500+ water points were maintained, with a 91% functionality rate).',
      sourceId: 'wfg-impact-24',
    },
    {
      quote:
        '80% of 2025 spending went directly into programs that deliver and sustain safe water access.',
      sourceId: 'wfg-impact-25',
    },
    {
      quote:
        'In many of the places we serve, we are not able to openly evangelize due to local laws and customs.',
      sourceId: 'wfg-impact-25',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 2,
      note:
        'The faith page states beliefs summarised in the Apostles’ Creed, quotes Matthew 25:35 directly, and says “We serve Jesus when we serve those who are thirsty, hungry, poor and oppressed.” Marked down from 3 because the ministry says it cannot openly evangelise in many of the places it works and delegates that to church partners, and because every programme dollar buys water, sanitation or hygiene rather than proclamation.',
    },
    localLeadership: {
      value: 2,
      note:
        'Country directors are nationals — the Central African Republic team is led by Emmanuel Agouna Guissil — and the maintenance technicians and hygiene trainers are local salaried staff, which is the bulk of the workforce. The CEO, the board and the fundraising sit in Indiana.',
    },
    financialTransparency: {
      value: 3,
      note:
        'Consolidated audited statements and Form 990s for 2019 through 2024 are posted on the ministry’s own financials page, and the annual impact reports add a functional expense breakdown. Very few ministries this size publish six consecutive years of both.',
    },
    outcomeEvidence: {
      value: 3,
      note:
        'The best in this directory. Water for Good publishes a water point functionality rate — 91% in the Central African Republic, 96% in Tanzania — which almost no water ministry does, plus a planned-versus-accomplished table for seven milestones that reports a miss as readily as a hit, and per-country counts. The definition of functionality is not published, and “people being served” is a cumulative figure, which is why this is a 3 and not more.',
    },
    costEvidence: {
      value: 2,
      note:
        'Both halves of the division exist, sourced, for the same year, one of them from an audit. Marked down because the ministry publishes no cost per water point of its own to check ours against, and the 2025 expense split exists only as cash-basis figures rounded to the nearest $0.1 million.',
    },
  },
  notVerified: [
    'Water for Good publishes no cost per water point. The figure here is ours: audited 2024 program services divided by the 223 water points its own 2024 report says it installed. The ministry has not confirmed it and would reasonably object that most of that spending went to other things.',
    'How “functionality” is defined. A 91% rate is the most important number on this page, and we do not know whether it means water flowed on the day a technician visited, or flowed at design yield, or flowed all year. Nor do we know who measures it — as far as we can tell, the ministry’s own maintenance teams, with no independent audit of the sample.',
    '“Total number of people being served” was 1,167,067 in 2024 and “more than 1.3 million” in 2025. This is a stock, not a flow: it counts everyone drinking from any water point in the maintenance network, including wells other agencies drilled. It cannot be divided into one year of spending to get the cost of new access, and the reports do not say how many people gained access for the first time.',
    'The 2024 impact report’s expense pie does not reconcile to the audit. The report shows $13.4 million of total expenses with development at $2.06 million and administration at $704,000; the audit shows $14,143,411 of total expenses with fundraising at $2,308,518 and management and general at $840,666. The report says “Numbers have been rounded” but never says it is on a different basis.',
    'The 2025 impact report is published but the 2025 audit is not. Every 2025 figure here — $11.6 million of expenses, 80% to programmes, $2.13 million of maintenance — is the ministry’s own cash-basis number rounded to the nearest $0.1 million, and unaudited.',
    'Water for Good installed 223 water points against a published plan of 278, hitting 80% of target. Nothing explains the shortfall.',
    'Lifewater International merged into Water for Good on 1 January 2024, so 2024 is the first combined year and the prior-year comparatives are not like-for-like. The 2025 report also books $300,000 of one-time merger costs.',
    'What villages contribute toward maintenance, and what happens to a water point when donor-funded maintenance stops. This is the question the ministry’s whole model turns on and it is not answered anywhere we could find.',
    'Whether the 2,500+ water points in the Central African Republic maintenance network are all Water for Good’s own construction or include wells drilled by other agencies and governments. The wording suggests the latter, which would be to their credit, but it is not stated.',
  ],
  notes: [
    'Fundraising cost $2,308,518 against $14,143,411 of total expenses in 2024 — 16%. That is high relative to other causes here, and the audit does not break out how much of it is the merger.',
    'This is the cause that answers the question most water ministries duck. “People reached with water” counts a well forever, including the ones that failed in year three. Water for Good is on this site principally because it publishes a functionality rate at all, and because it spends real money — $2.13 million in 2025 — on keeping old water points alive rather than only cutting ribbons on new ones.',
    'The endorsements page carries a quote from Dr Brian Fikkert, co-author of When Helping Hurts: “I am deeply encouraged by how Lifewater has taken the principles in When Helping Hurts and applied them to create a relational, long-term, asset-based, Christian clean-water charity.” Those are testimonials from named individuals, not accreditations, and we have listed them as neither.',
    'The 2025 report tells the story of a widow in Tanzania who “made a life-changing decision and placed her faith in Jesus Christ as her Savior” after a church partner invited her to an evangelistic gathering alongside WASH training. We quote it because the ministry publishes it. We do not treat conversions as a measurable outcome and they are not counted anywhere on this page.',
    'The audit is consolidated, which matters: the numbers cover the field operations in five countries, not only the American fundraising entity.',
  ],
  siteUrl: 'https://waterforgood.org/',
  giveUrl: 'https://waterforgood.org/donate/',
  sources: [
    {
      id: 'wfg-site',
      label: 'Homepage',
      url: 'https://waterforgood.org/',
      publisher: 'Water for Good',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'wfg-faith',
      label: 'Our Faith',
      url: 'https://waterforgood.org/who-we-are/faith/',
      publisher: 'Water for Good',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note:
        'Source of “Water for Good is a Christian, faith-based organization”, the Apostles’ Creed statement, and the Matthew 25:35 quotation.',
    },
    {
      id: 'wfg-merger',
      label: 'History & Merger',
      url: 'https://waterforgood.org/history-merger/',
      publisher: 'Water for Good',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Documents the 1 January 2024 merger with Lifewater International.',
    },
    {
      id: 'wfg-financials',
      label: 'Financials',
      url: 'https://waterforgood.org/financials/',
      publisher: 'Water for Good',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note:
        'Links audits and Form 990s for 2019 through 2024, and is where the Charity Navigator, GuideStar and Excellence in Giving recognitions are named.',
    },
    {
      id: 'wfg-endorsements',
      label: 'Our Endorsements',
      url: 'https://waterforgood.org/our-endorsements/',
      publisher: 'Water for Good',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'wfg-audit-24',
      label: '2024 audited consolidated financial statements',
      url: 'https://waterforgood.org/wp-content/uploads/2025/12/2024-Audited-Financials.pdf',
      publisher: 'Water for Good',
      documentType: 'audited-financials',
      retrieved: '2026-09-18',
      fiscalYear: '2024',
      note:
        'Program services $10,994,227, management and general $840,666, fundraising $2,308,518, total expenses $14,143,411 for the year ended 31 December 2024. Also contains the audit note recording that Water for Good acquired the assets, liabilities, net assets and operations of Lifewater International on 1 January 2024.',
    },
    {
      id: 'wfg-990-24',
      label: '2024 Form 990',
      url: 'https://waterforgood.org/wp-content/uploads/2025/12/2024-WFG-Public-Copy-990.pdf',
      publisher: 'Water for Good',
      documentType: 'form-990',
      retrieved: '2026-09-18',
      fiscalYear: '2024',
    },
    {
      id: 'wfg-impact-24',
      label: '2024 impact report',
      url: 'https://waterforgood.org/wp-content/uploads/2025/03/WFG_2024-Impact-Report_Pages.pdf',
      publisher: 'Water for Good',
      documentType: 'annual-report',
      retrieved: '2026-09-18',
      fiscalYear: '2024',
      note:
        'Source of the 223 water points installed, the 1,167,067 people being served, the 91% functionality rate, the planned-versus-accomplished milestone table and the rounded cash-basis expense pie. The headline figures are set in graphics; we read them off the rendered pages rather than from extracted text.',
    },
    {
      id: 'wfg-impact-25',
      label: '2025 impact report',
      url: 'https://waterforgood.org/wp-content/uploads/2026/03/impact-report_final_compressed_.pdf',
      publisher: 'Water for Good',
      documentType: 'annual-report',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note:
        'Source of the 2025 cash-basis financial overview, the 90% Central African Republic functionality figure, the per-country water point counts, and the statement about not being able to evangelise openly.',
    },
  ],
};
