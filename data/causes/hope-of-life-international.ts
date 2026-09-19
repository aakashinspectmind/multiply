import type { Cause } from '@/lib/types';

export const hopeOfLifeInternational: Cause = {
  slug: 'hope-of-life-international',
  name: 'Hope of Life International',
  tagline:
    'Twenty programmes on one campus in eastern Guatemala, and no single unit you can put a price on.',
  category: 'health',
  countries: ['Guatemala'],
  whatTheyDo:
    'Hope of Life runs a secure campus in Zacapa, eastern Guatemala, and works through a network it says covers 327 underserved communities. The programme list is long and genuinely varied: emergency medical intervention and rescue, clinics and surgery, clean water, disability support, a senior residence, family-style foster care and a residential Village of Transformation, a school, child sponsorship, community development, and ocean-freight container shipping of donated goods. The US entity is in Cranston, Rhode Island; the Guatemalan work is carried out substantially through a separate organisation, Esperanza da Vida, which the audit discloses was founded by a family member of the chief executive.',
  accreditations: [],
  verification: 'self-reported',
  biblicalAlignment: {
    mandate:
      'The Samaritan is the pattern for emergency medical work: he was the one who stopped, and what he did was bandage, carry and pay. James refuses to let the response stay verbal — if a brother lacks daily food, "go in peace" is not obedience. And visiting the sick is named in the same breath as feeding the hungry, as something done to Christ himself.',
    scriptures: [
      {
        ref: 'Luke 10:33–34',
        text: 'But a Samaritan, as he journeyed, came to where he was, and when he saw him, he had compassion. He went to him and bound up his wounds, pouring on oil and wine.',
      },
      {
        ref: 'James 2:15–16',
        text: 'If a brother or sister is poorly clothed and lacking in daily food, and one of you says to them, “Go in peace, be warmed and filled,” without giving them the things needed for the body, what good is that?',
      },
      {
        ref: 'Matthew 25:36',
        text: 'I was naked and you clothed me, I was sick and you visited me, I was in prison and you came to me.',
      },
    ],
    concerns: [
      'The ministry calls itself "a faith-based humanitarian nonprofit organization" and publishes no statement of faith. The gospel is named once, and well — "The greatest gift we give is access to the Gospel: never meeting physical needs without also meeting spiritual needs" — but that line sits on a sponsorship teaser, and the rest of the site is humanitarian language. The most explicitly Christian voices on the homepage are American trip volunteers, not the ministry.',
      'The audit discloses a related party transaction: about $3,660,000 contributed in 2023 to Esperanza da Vida, "which was founded by the Organization’s chief executive officer/president’s family member." That is roughly a fifth of program spending going to an organisation founded by the CEO’s relative. It is disclosed, which is the right thing, but a donor should know it is the structure.',
      'Liquidity is extremely thin. The 2023 audit puts financial assets available for general expenditure within one year at $39,652, against a stated policy objective of holding 60 days of program expenditure — and says that if a liquidity need arises, "the Organization’s founders have the ability to finance overhead expenses". The ministry is leaning on its founders’ personal capacity rather than reserves.',
      'The campus includes residential care for children and for seniors, which is the most contested model in this region. Family-style foster care is also listed and is given 2.25% of program spending in the ministry’s own 2023 pie chart, against a Village of Transformation housing 108 children. We could find no reunification or exit policy.',
      'Mission trips are a substantial part of the operation — the site has a "Plan Your Trip" section — and the 2023 audit charges $722,871 of "Mission trips and travel" entirely to program services, with no trip revenue line anywhere in the statements. So the cost of hosting American teams is being counted as programme delivery while whatever the teams pay is not visible. Where volunteers build, ask whose paid work that would otherwise have been.',
    ],
  },
  roi: {
    levers: ['existing-network', 'local-cost-base', 'volunteer-leverage'],
    reason:
      'Guatemala’s income per person is about 14 times below the United States — real leverage, but nothing like Haiti’s 44 times, and a donor should not be sold Central America as though it were Malawi. The stronger lever here is the network: the ministry says it works in 327 communities through partnerships built over 37 years, and its own 2023 figures show 87% of program spending moving out as grants and other assistance rather than being consumed by a head office. Against both of those, note that 59% of program spending in that year was donated goods "delivered" — and donated American goods carry no Guatemalan cost advantage at all, because they are valued at US prices. Strip the goods out and this is a much smaller ministry than its headline numbers suggest.',
  },
  ministryClaims: [
    {
      quote:
        'The greatest gift we give is access to the Gospel: never meeting physical needs without also meeting spiritual needs.',
      sourceId: 'hol-site',
    },
    {
      quote:
        'This year alone, your support will help us feed more than 1.5 million people through our programs.',
      sourceId: 'hol-site',
    },
    {
      quote:
        'In 2023, HOL’s program investments reached across a wide spectrum of care, from immediate relief to long‑term transformation.',
      sourceId: 'hol-impact-24',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 1,
      note: 'Self-described as "faith-based humanitarian". One clear statement that the gospel comes with the aid, no statement of faith, no discipleship content in any programme description, and no church partnership described. The Christian framing on the homepage is supplied by quoted American volunteers.',
    },
    localLeadership: {
      value: 1,
      note: 'The work is carried out in Guatemala through Guatemalan entities and a long-standing local partner network, which is genuine. But governance, fundraising and the CEO sit in Rhode Island, the principal Guatemalan recipient was founded by the CEO’s relative, and the ministry’s own promotion of mission trips puts American hands on the work.',
    },
    financialTransparency: {
      value: 2,
      note: 'Audited statements for 2021–2023 and Form 990s for 2022–2024 are posted on the ministry’s own site, and the 2023 audit is unusually candid — it discloses the related party grant, the liquidity position and three separate prior period adjustments. Marked down because the newest audit is two years old while the ministry publishes 2024 figures, and because the posted 2024 Form 990 is a scanned image with no extractable text.',
    },
    outcomeEvidence: {
      value: 2,
      note: 'Twenty distinct counts are published for 2024, and most are specific enough to check in principle — 1,054,925 meals served, 32,688 family food kits, 108 children in residence, 99 seniors in residence, 37 graduates of Liberty School, 4 churches repaired. Marked down because no count is tied to a spending line, several units are undefined ("382 communities impacted", "1,924 lives impacted"), and the 2024 figures sit in a report whose financial pages contain multiple errors.',
    },
    costEvidence: {
      value: 1,
      note: 'Spending is published and audited; counts are published. What is missing is any relationship between them — twenty programmes, twenty units, and no dominant one. There is no defensible denominator here, so there is no cost per outcome on this page.',
    },
  },
  notVerified: [
    'Nothing here can be divided. Program spending of $25,222,771 in 2024 covers emergency medical rescue, clinics, surgery, water, disability care, senior care, foster care, residential care, a school, sponsorship, community development and container shipping. Choosing any one of the twenty published counts as the denominator would produce a number that is simply wrong. We have not published one.',
    'The 2024 impact report’s financial pages do not reconcile. The 2023 comparative column reports total expenses of $19,026,454 where the audited figure is $19,026,139, and contributions of $4,114,294 where the audit says $4,120,867. The investment income row shows $17,790 for 2024 — which is the audited 2023 figure — and $300,426 for 2023, where the audit says $24,363 for 2022 and $17,790 for 2023. We do not know which column is wrong.',
    'The report’s "SPENDING" panel prints program spending of $18,466,776 and admin spending of $559,636 next to a 2024 heading. The program figure is the audited 2023 number, and the admin figure matches neither year — 2023 management, general and fundraising add to $559,363. It reads like a transposition.',
    'The "OPERATING REVENUE" panel says 82% gifts-in-kind against $16,137,316, and labels $3,395,462 as restricted and $725,405 as unrestricted. In the 2023 audit those two figures are the other way round — $3,395,462 was unrestricted and $725,405 restricted — and $16,137,316 is the without-donor-restrictions revenue subtotal, not gifts-in-kind, which were $12,626,797, or 75% of total revenue.',
    'The 2024 figures are unaudited. The newest audited statement posted is for the year ended 31 December 2023, so the $25,222,771 of 2024 program spending and the jump in net assets from $1,101,106 to $9,939,659 have not been examined by an auditor in any document available to a donor.',
    'How the 2023 financial position was reached. Program spending of $18,466,776 exceeded total revenue of $16,765,454, net assets fell to $1,101,106, and available liquidity was $39,652. The audit does not explain the plan, and the 2024 report does not mention that the year before had been a deficit.',
    'What Esperanza da Vida does with the money and whether it is audited. It is the principal Guatemalan recipient, it was founded by a relative of the chief executive, and no financial statement for it is published.',
    'Three prior period adjustments were recorded in 2023 — $1,993,053 of donor-restricted funds that should have been released in 2022, $30,022 of deferred revenue, and $19,975 of vehicles that should have been expensed as grants. Together they point to weak records in the year before, and nothing states what changed.',
    'Donor concentration: the audit reports $1,500,000, or 36% of contributions, coming from two sources in 2023, and states management does not believe there is significant risk to their continuation. Neither source is named.',
  ],
  notes: [
    'For the sake of showing our working: $25,222,771 of 2024 program spending divided by 1,054,925 meals served is $23.91 a meal. That is arithmetic, not a price, and we refuse to publish it as one — the same budget rescued people by ambulance, ran a surgical programme and housed 108 children. We include it so you can see exactly why all-program-spend divisions have to be treated with suspicion, and why we have not built one here.',
    'The pie chart the ministry publishes for 2023 is more useful than any single figure: 59.17% gifts-in-kind (goods delivered), 13.06% community projects, 7.68% sustainable community development, 5.42% medical intervention, 3.67% volunteer services, 3.51% sponsorship, 2.25% family-style foster care, 2.23% senior care, 2.16% care for children with disabilities, 0.44% food support, 0.40% education. Read that way, the largest thing this ministry does is move donated goods.',
    'Program spending is dominated by transfers: $16,145,251 of the $18,466,776 charged to programmes in 2023 is a single line, "Grants and other assistance". Total salaries across the whole organisation that year were $1,058,697.',
    'The ministry states it receives no US government funding.',
  ],
  siteUrl: 'https://www.hopeoflifeintl.org/',
  giveUrl: 'https://www.hopeoflifeintl.org/donate/',
  sources: [
    {
      id: 'hol-site',
      label: 'Homepage',
      url: 'https://www.hopeoflifeintl.org/',
      publisher: 'Hope of Life International',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: 'Source of the self-description as "faith-based humanitarian", the 327-community figure and the gospel-priority statement.',
    },
    {
      id: 'hol-financials',
      label: 'Financials',
      url: 'https://www.hopeoflifeintl.org/financials/',
      publisher: 'Hope of Life International',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: 'Posts audits for 2021–2023, Form 990s for 2022–2024 and the 2024 impact report. The 2024 Form 990 is a scanned image with no extractable text layer.',
    },
    {
      id: 'hol-audit-23',
      label: '2023 audited financial statements',
      url: 'https://drive.google.com/file/d/1p0_tXXCQQX5Ectbe-bl8D6x9biHa8Q3X/view?usp=sharing',
      publisher: 'Hope of Life International',
      documentType: 'audited-financials',
      retrieved: '2026-09-19',
      fiscalYear: '2023',
      note: 'Hosted on Google Drive. Program services $18,466,776 of $19,026,139 total expenses. Source of the related party disclosure, the $39,652 liquidity figure, the donor concentration note and the three prior period adjustments.',
    },
    {
      id: 'hol-impact-24',
      label: '2024 Impact Report',
      url: 'https://drive.google.com/file/d/1d1u7cutZkFJN84Bh7oiGFEKliiSy6A9y/view?usp=sharing',
      publisher: 'Hope of Life International',
      documentType: 'annual-report',
      retrieved: '2026-09-19',
      fiscalYear: '2024',
      note: 'Hosted on Google Drive. A designed report: the twenty outcome counts and the spending percentages are set as graphics, so we rendered the pages as images and read them ourselves rather than trusting extracted text. The financial pages contain several errors, listed above.',
    },
  ],
};
