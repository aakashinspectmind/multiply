import type { Cause } from '@/lib/types';

export const holtInternational: Cause = {
  slug: 'holt-international',
  name: 'Holt International',
  legalName: 'Holt International Children’s Services, Inc.',
  tagline:
    'The ministry that invented international adoption now spends most of its money keeping children out of it.',
  category: 'children',
  countries: [
    'Bulgaria',
    'Cambodia',
    'China',
    'Colombia',
    'Ethiopia',
    'Haiti',
    'Hong Kong',
    'India',
    'Mongolia',
    'Philippines',
    'South Africa',
    'South Korea',
    'Thailand',
    'Uganda',
    'United States',
    'Vietnam',
  ],
  whatTheyDo:
    'Holt began in 1956 when Harry and Bertha Holt brought eight Korean war orphans to Oregon, and it is where modern international adoption started. Seventy years later adoption is the smallest of its three programmes: in the year we reviewed, 181 children joined permanent families, while 15,974 were sponsored and 40,235 remained with or were reunited with their own families. The work now is family strengthening — preschool fees, microgrants, job skills, counselling and food for families at risk of separating under poverty — plus care and reunification for children already separated, a nutrition programme launched in 2025 that served 2.3 million meals, and adoption where a family in the birth country cannot be found. Holt runs in 17 countries and territories and is explicit about the order of preference: "We believe that children should grow up in the loving care of their families, whenever possible."',
  accreditations: [],
  verification: 'documents-reviewed',
  biblicalAlignment: {
    mandate:
      'Psalm 68 promises that God settles the solitary in a home, and Holt’s programme order follows the same logic: keep the child in the family they have, restore them to it if they have been taken out, and only then find a new one. Isaiah’s command to plead the cause of the fatherless has a preventive form — the family that does not break does not need to be replaced — and that is where most of this money goes.',
    scriptures: [
      {
        ref: 'Psalm 68:5–6',
        text: 'Father of the fatherless and protector of widows is God in his holy habitation. God settles the solitary in a home; he leads out the prisoners to prosperity.',
      },
      {
        ref: 'James 1:27',
        text: 'Religion that is pure and undefiled before God the Father is this: to visit orphans and widows in their affliction, and to keep oneself unstained from the world.',
      },
      {
        ref: 'Isaiah 1:17',
        text: 'Learn to do good; seek justice, correct oppression; bring justice to the fatherless, plead the widow’s cause.',
      },
      {
        ref: '1 Timothy 5:8',
        text: 'But if anyone does not provide for his relatives, and especially for members of his household, he has denied the faith and is worse than an unbeliever.',
      },
    ],
    concerns: [
      'We found exactly one sentence of Christian identity on the whole site: "Holt International is a Christian organization that provides care and support to many of the world’s most vulnerable children." There is no statement of faith, no doctrinal position, no church partnership described, and no faith content in any programme description. Holt’s history is unmistakably Christian — it began with a family reading Isaiah — and its present public materials read as a secular child welfare agency with one adjective. A donor who wants to fund Christian work should ask what that adjective now covers.',
      'Holt’s own description of its work includes "care for children in orphanages," and residential care is contested among Christians in this field: the practitioner consensus is that children develop better in families, and the per-child cost of institutional care is several times that of family support. Holt is on the right side of the argument in its stated order of preference and publishes no split of spending between family-based and residential care, so we cannot tell how much of its money funds each.',
      'Fundraising is 18% of total expenses — $4,381,822 against $23,949,073 — which is more than twice the ratio of the other sponsorship ministries here. On top of that, $1,834,166 of joint costs was allocated to fundraising under Note 16, and total joint costs more than doubled year on year, from $1,230,601 to $2,726,687. The accounting is disclosed; the trend is not explained.',
      'About $3.1m of the $10.9m of international programme spending goes to China, South Korea, Taiwan, Hong Kong and Bulgaria — places with income per person between roughly $14,000 and $62,500. That is legitimate work, much of it with children with disabilities where the need is real regardless of national income, and it substantially weakens the "a dollar goes further" case for the ministry as a whole.',
      'Adoption fees are a revenue line: $3,726,633 of the year’s $24,607,088 of support. Charging fees for adoption services is normal and regulated, and it means part of this organisation is a fee-for-service business with the adopting family as the paying customer. That is a different set of incentives from the rest of the work and it belongs in view.',
    ],
  },
  roi: {
    levers: ['local-cost-base', 'existing-network', 'local-workers'],
    reason:
      'The core of the programme is cheap for a structural reason: it is far less expensive to keep a family together than to replace it. A microgrant, a preschool fee, a counselling session or a year of school supplies costs a fraction of housing, feeding and supervising a child around the clock — and Holt spends most of its international money on the first kind of thing. Note 15 of the audit shows where it lands: Ethiopia $790,685, Uganda $567,862, Cambodia $959,597, India $641,338, Mongolia $749,447, Haiti $147,392, and so on, at local wage rates in economies well below the United States. The honest qualification is that the same note shows about $3.1m going to China, South Korea, Taiwan, Hong Kong and Bulgaria, where the cost base is not low at all, and that the US organisation carries $6,988,395 of salaries inside the programme total. The leverage here is real and it is narrower than the headline.',
  },
  costModel: {
    outcome: 'year of sponsorship for one child',
    outcomePlural: 'years of sponsorship for children',
    spend: {
      amount: 17897033,
      basis: 'program-services',
      fiscalYear: '2025',
      sourceId: 'holt-audit-25',
    },
    count: {
      amount: 15974,
      label: 'children who benefitted from the sponsorship programme',
      fiscalYear: '2025',
      sourceId: 'holt-annual-25',
    },
    attribution: 'all-program-spend',
    caveat:
      'A loose upper bound, and the loosest in this category. The whole programme and support total is charged to sponsored children, but the same budget also paid for the 40,235 children who remained with or were reunited with their families, 26,647 who could attend school, medical needs for 255,944 children and families, 2,322,066 meals, 181 adoptions, and US adoption and post-adoption services. Only $10,931,593 of the $17,897,033 is international programme support at all; the rest includes $6,988,395 of salaries and $1,993,071 of professional fees carried in Oregon. Read this as Holt’s entire programme cost divided by its sponsorship roster, which is what it is — and note that it is roughly double the $516 a year Holt asks a sponsor for.',
    alternates: [
      {
        label: 'children who remained with or were reunited with their families',
        count: 40235,
        note: 'The family strengthening and reunification count, and the outcome closest to the ministry’s stated purpose. Larger than the sponsorship roster, so it produces a lower cost per child — about $445 on the same numerator.',
      },
      {
        label: 'children and young adults who could attend school',
        count: 26647,
        note: 'A narrower, well-defined delivery unit than "children reached," and a plausible denominator in its own right.',
      },
      {
        label: 'children and families whose critical medical needs were met',
        count: 255944,
        note: 'Much broader, and the unit is a need met rather than a person supported for a year. Included to show how far the cost per outcome moves depending on which of Holt’s own counts you pick.',
      },
      {
        label: 'children and families whose lives were improved in 2025',
        count: 1114231,
        note: 'The widest figure Holt publishes — "we reached over one million children and families," given precisely as 1,114,231 on its locations page. Almost certainly counts one-off contact alongside years of care. We would not divide by it and we show it so you can see the range the ministry’s own reporting spans.',
      },
    ],
  },
  ministryClaims: [
    {
      quote:
        'Your $43 monthly gift provides education, nutrition and more for your sponsored child — helping them rise above poverty.',
      sourceId: 'holt-sponsorship',
      impliedCostPerOutcome: 516,
      sameUnitAsCostModel: true,
      impliedOutcome: 'year of sponsorship for one child',
    },
    {
      quote:
        'When you sponsor a child through Holt, your monthly gifts help provide everything a child needs to reach their potential in life — from food, shelter and education to the nurturing care of a devoted family or caregiver.',
      sourceId: 'holt-site',
    },
    {
      quote:
        'Holt International is a Christian organization that provides care and support to many of the world’s most vulnerable children. We empower families to overcome poverty, care for children in orphanages and unite children with families through adoption.',
      sourceId: 'holt-site',
    },
    {
      quote:
        'We believe that children should grow up in the loving care of their families, whenever possible.',
      sourceId: 'holt-site',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 1,
      note: 'One sentence, on the homepage, calling Holt a Christian organisation. No statement of faith, no doctrinal position, no church partnership, no faith content in any programme page we read. The founding story is deeply Christian and the current public materials are not.',
    },
    localLeadership: {
      value: 2,
      note: 'Programmes run in 17 countries through in-country offices and partners, and Note 15 shows the money reaching them, so delivery is local. Marked down because Holt does not publish who leads those programmes, $6,988,395 of programme salaries sit with the US organisation, and adoption services are by their nature run from the receiving country.',
    },
    financialTransparency: {
      value: 3,
      note: 'Audited consolidated statements, the full Form 990 and an annual report all posted on its own site, with a country-by-country breakdown of international programme support and a joint-cost allocation note that discloses how much of a mailing was charged to programmes rather than fundraising. Holt shows you the number most ministries hope you will not ask for.',
    },
    outcomeEvidence: {
      value: 2,
      note: 'Six or seven distinct counts are published for the year and most are precisely defined — 15,974 sponsored, 40,235 with families, 26,647 in school, 181 adoptions, 2,322,066 meals. Marked down because they overlap in unstated ways, and because the headline "over one million children and families" is a reach figure with no definition attached to it.',
    },
    costEvidence: {
      value: 2,
      note: 'Both halves are published for the same fiscal year and Holt advertises its own $43 monthly figure, so the division can be compared. Marked down because the numerator covers three programmes and two continents while the denominator covers one programme, and the resulting figure is about double what the ministry itself asks per child.',
    },
  },
  notVerified: [
    'What share of spending goes to family-based care as against residential care. Holt’s own description of its work names orphanages, and its stated preference is families. No published document splits the money, which is the one number that would settle how much of this is family preservation.',
    'The relationship between the counts. A child could plausibly appear in the sponsorship figure, the remained-with-family figure and the school figure at once. Holt publishes no reconciliation, so the counts cannot be added and we have not added them.',
    'Why joint costs more than doubled, from $1,230,601 to $2,726,687, with $1,834,166 of the current year charged to fundraising. The allocation is disclosed under Note 16; the reason for the jump is not.',
    'Why total fundraising expense is 18% of spending while programme spending fell from $19,366,078 to $17,897,033. The audit prints the percentages — 75% programme, 7% management, 18% fundraising — without comment.',
    'What "reached over one million children and families" means. The locations page gives it as 1,114,231. No definition of reach is published, and it sits in the same report as counts that are defined precisely, which makes the contrast worse rather than better.',
    'Taiwan is one of Holt’s 17 locations and received $327,194 of programme support, and Hong Kong $52,392. Taiwan has no World Bank income figure so it is not in the cost-base table on this page; Hong Kong is, at about $62,500 per person, which is higher than most donors would expect to see on an international child welfare budget.',
    'The Food Every Day programme launched in 2025 and reports 2,322,066 meals. Neither the cost of the programme nor the number of children fed is separately published, so cost per meal cannot be derived.',
    'No accreditation is listed here because we could not confirm one on the site. Holt is a Hague-accredited adoption service provider through its accrediting entity, which is a licensing requirement rather than a financial accountability seal, and we found no ECFA or BBB Wise Giving Alliance listing displayed.',
  ],
  notes: [
    'Total expenses were $23,949,073: programme and support $17,897,033, management and general $1,670,218, fundraising $4,381,822. Sources of support were $24,607,088, of which sponsorship was $14,026,733 — the largest single line by a wide margin, and more than three times adoption fees.',
    'Note 15 gives international programme support country by country, totalling $10,931,593 against $12,304,837 the year before: Cambodia $959,597, China $1,685,931, Taiwan $327,194, Hong Kong $52,392, Colombia $808,645, Ethiopia $790,685, South Africa $65,497, Haiti $147,392, Bulgaria $84,701, India $641,338, Mongolia $749,447, the nutrition programme $744,822, Philippines $583,577, South Korea $962,782, Thailand $1,038,128, Uganda $567,862 and Vietnam $721,603.',
    'The three pillars are named in the audit itself as "Family Strengthening, Orphan Care, and Adoption Services," which is a useful check that the marketing and the accounting describe the same organisation.',
    'Adoption is now a rounding error in volume: 181 children in a year, against 15,974 sponsored and 40,235 kept with or returned to families. For the organisation that created international adoption, that is a deliberate and substantial change of direction.',
  ],
  siteUrl: 'https://www.holtinternational.org/',
  giveUrl: 'https://www.holtinternational.org/sponsorship/',
  sources: [
    {
      id: 'holt-site',
      label: 'Homepage',
      url: 'https://www.holtinternational.org/',
      publisher: 'Holt International',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'The only place we found Christian identity stated, and the source of the family-first statement and the description of what a sponsorship provides.',
    },
    {
      id: 'holt-sponsorship',
      label: 'Sponsor a Child',
      url: 'https://www.holtinternational.org/sponsorship/',
      publisher: 'Holt International',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'The $43 monthly ask, and a photo listing of children available for sponsorship by country.',
    },
    {
      id: 'holt-locations',
      label: 'Our Global Reach — Locations',
      url: 'https://www.holtinternational.org/locations/',
      publisher: 'Holt International',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Lists the 17 countries and territories, including Taiwan, Hong Kong and the United States, and gives the 2025 reach figure as 1,114,231 children and families.',
    },
    {
      id: 'holt-family-strengthening',
      label: 'Family Strengthening',
      url: 'https://www.holtinternational.org/family-strengthening/',
      publisher: 'Holt International',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Describes the preventive programmes: early childhood care, economic empowerment, education, counselling and microgrants.',
    },
    {
      id: 'holt-financials',
      label: 'Financial & Accountability',
      url: 'https://www.holtinternational.org/financials/',
      publisher: 'Holt International',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Links the audit, the Form 990 and the annual report.',
    },
    {
      id: 'holt-audit-25',
      label: 'FY2025 audited financial statements',
      url: 'https://media.holtinternational.org/wp-content/uploads/2026/04/23103717/FY2025-Final-Audit.pdf',
      publisher: 'Holt International',
      documentType: 'audited-financials',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note: 'Year ended 30 September 2025, consolidated with a related organisation. Programme and support $17,897,033 of $23,949,073 total expenses. Note 15 gives international programme support by country; Note 16 gives the joint cost allocation.',
    },
    {
      id: 'holt-990-25',
      label: 'Form 990 for the year ended 30 September 2025',
      url: 'https://media.holtinternational.org/wp-content/uploads/2026/05/08141157/PublicInspectionTaxDocuments_09-30-25_Holt-International-Childrens.pdf',
      publisher: 'Holt International',
      documentType: 'form-990',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
    },
    {
      id: 'holt-annual-25',
      label: '2025 Annual Report',
      url: 'https://media.holtinternational.org/wp-content/uploads/2026/06/03151708/Annual-Report-2025-small.pdf',
      publisher: 'Holt International',
      documentType: 'annual-report',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note: 'Source of every count on this page: 15,974 sponsored children, 40,235 who remained with or were reunited with their families, 26,647 in school, 255,944 medical needs met, 2,322,066 meals and 181 adoptions. The counts are set in a designed spread and were read from the rendered pages.',
    },
  ],
};
