import type { Cause } from '@/lib/types';

export const mustardSeedCommunities: Cause = {
  slug: 'mustard-seed-communities',
  name: 'Mustard Seed Communities',
  legalName: 'Mustard Seed Communities, Inc.',
  ein: '58-1657207',
  tagline:
    'Lifelong homes in Jamaica and four other countries for children and adults with disabilities nobody else will take.',
  category: 'disability',
  countries: ['Jamaica', 'Nicaragua', 'Dominican Republic', 'Zimbabwe', 'Malawi'],
  whatTheyDo:
    'Mustard Seed Communities runs residential homes for abandoned children and adults with severe disabilities, children affected by HIV, and pregnant teenagers — twelve homes in Jamaica alone, plus sites in Nicaragua, the Dominican Republic, Zimbabwe and Malawi. The word it uses is "lifelong": these are people who will not age out and will not be reunified, and the ministry says so up front. Around the homes sit more than twenty outreach programmes, daily meals for over 1,200 children in Zimbabwe, schooling, and sustainable agriculture. It was founded in Jamaica by Monsignor Gregory Ramkissoon as a haven for a few abandoned children with disabilities; the operating body is Mustard Seed International, and this US entity in Needham, Massachusetts is one of its funders.',
  accreditations: [
    {
      label: 'Candid (GuideStar) Gold Transparency Seal 2025',
      sourceId: 'msc-financials',
    },
    { label: 'Charity Navigator 4 stars', sourceId: 'msc-financials' },
  ],
  verification: 'documents-reviewed',
  biblicalAlignment: {
    mandate:
      'Christ names the guest list for the banquet and it is exactly this one — the poor, the crippled, the lame, the blind — and the reason given is that they cannot repay you. Paul goes further: the parts of the body that seem weaker are indispensable, and the ones we think less honourable are the ones we clothe with greater honour. A home for a profoundly disabled adult who will never be productive is not charity at the margin of the church; it is the church demonstrating what it believes about persons.',
    scriptures: [
      {
        ref: 'Luke 14:13–14',
        text: 'But when you give a feast, invite the poor, the crippled, the lame, the blind, and you will be blessed, because they cannot repay you.',
      },
      {
        ref: '1 Corinthians 12:22–23',
        text: 'On the contrary, the parts of the body that seem to be weaker are indispensable, and on those parts of the body that we think less honourable we bestow the greater honour.',
      },
      {
        ref: 'Leviticus 19:14',
        text: 'You shall not curse the deaf or put a stumbling block before the blind, but you shall fear your God: I am the Lord.',
      },
    ],
    doctrine: {
      label:
        'Catholic. "Our Catholic faith is a guiding force that intricately weaves through every aspect of our activities."',
      sourceId: 'msc-spirituality',
    },
    concerns: [
      'This is explicitly Catholic ministry, and a donor should choose it knowing that. Its spirituality page describes a life "sustained by spiritual nourishment – particularly the Holy Eucharist", with Adoration of the Blessed Sacrament at the centre of its charism, and its Formation Program exists to train "priests, deacons and sisters". Protestant donors who are glad to fund the work should not be surprised by the theology, and should not pretend it is not there.',
      'Lifelong residential care is the model furthest from the family-based consensus in child welfare, and Mustard Seed makes no attempt to hide that its homes are permanent. We think the case for it is strongest exactly where this ministry works — abandoned children with severe disabilities and HIV, for whom there is often no family to return to and no foster system to place them in — but the concern is real and a donor should weigh it rather than skip it.',
      'Fundraising is expensive relative to programmes: $595,926 of fundraising against $8,164,149 of program expenses, and only $416,888 of $996,425 in salaries is charged to programmes. For a US support office that mainly writes grants, more than a third of payroll sitting in fundraising is worth noticing.',
      'Restricted gifts are not fully restricted. The site states: "We may assess up to 10 percent to be used to administer the gift." That is disclosed, which is more than most do, but a donor giving to Zimbabwe should expect up to a tenth to stay behind.',
      'Mission trips are promoted heavily — a whole section of the site, with locations, availability and booking — and the audited statements contain no mission trip revenue line at all, while $11,351 of "Mission trips - other" sits inside program expenses. Trip money is coming in from somewhere; the financial statements do not show a donor where.',
    ],
  },
  roi: {
    levers: ['local-cost-base', 'local-workers', 'existing-network'],
    reason:
      'Be careful with the cost-base argument here, because it points in two directions. Jamaica takes the largest share of the money and its income per person is roughly eleven times below the United States — meaningful, but nothing like Haiti or Malawi, and a donor should not be told the Caribbean buys what sub-Saharan Africa buys. The two African sites do carry that deeper leverage and they receive a small fraction of the spending. What is strong here is the delivery structure rather than the exchange rate: the US entity passes 92% of its program spending straight out as grants and aid to Mustard Seed International, the homes are staffed and run by Jamaicans, and the operating leadership — the executive directors of MSC International and MSC Jamaica — is local rather than sent. There is also no way to do this work cheaply anywhere. Twenty-four-hour nursing care for a profoundly disabled adult is labour, every day, for life.',
  },
  costModel: {
    outcome: 'year of lifelong residential care for one person',
    outcomePlural: 'years of lifelong residential care',
    spend: {
      amount: 8164149,
      basis: 'program-services',
      fiscalYear: 'CY2025',
      sourceId: 'msc-audit-25',
    },
    count: {
      amount: 700,
      label: 'children and adults living in MSC homes',
      fiscalYear: 'undated site copy, read September 2026',
      sourceId: 'msc-site',
    },
    attribution: 'all-program-spend',
    caveat:
      'This is an upper bound in one direction and a floor in the other, which is unusual enough to explain. Upper bound: the $8,164,149 also funds more than twenty outreach programmes, daily meals for over 1,200 children in Zimbabwe, schooling, sustainable agriculture and the Formation Program that trains priests and sisters — none of which is residential care. Floor: this US entity is only "one of the supporters of MSC International", so the homes are also funded from elsewhere and the true cost of a resident-year is higher than the US share of it. The 700 is undated website copy, and the same ministry publishes 600 and 750 on other pages. The residents are spread across five countries whose cost bases differ by a factor of about thirteen, so the figure is a blend that describes no actual home.',
    alternates: [
      {
        label: 'the lower count the ministry publishes on its core values page',
        count: 600,
        note: 'Gives about $13,607 per resident-year. Same page as the 750 figure, on the same day.',
      },
      {
        label: 'the higher count the ministry publishes on its mission and vision page',
        count: 750,
        note: 'Gives about $10,886 per resident-year. Includes teen mothers and their babies as well as residents with disabilities.',
      },
      {
        label: 'individuals with disabilities in the twelve Jamaican homes',
        count: 500,
        note: 'The ministry’s own Jamaica figure. Jamaica also took $3,965,974 of the $5,360,342 of restricted funds released in 2025, so this is the closest thing to a single-country denominator — but it is not matched to a Jamaica-only spending figure, so we have not used it as the headline.',
      },
    ],
  },
  ministryClaims: [
    {
      quote:
        'We provide a safe and loving home to over 700 children and adults with disabilities, children affected by HIV, and teen moms in crisis.',
      sourceId: 'msc-site',
    },
    {
      quote:
        'In 2025, 88% of received donations were directed toward programmatic costs, advancing our mission to care for the most vulnerable members of society in the developing world.',
      sourceId: 'msc-financials',
    },
    {
      quote:
        'Inspired by the healing and caring Ministry of Jesus Christ, we aim through the positive interaction of caring, sharing and training, to uplift the most vulnerable members of society, especially children living with disabilities who have been abandoned, and marginalized communities.',
      sourceId: 'msc-mission',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 3,
      note: 'The mission statement begins with Jesus Christ, the spirituality page is a doctrinal statement in all but name, and the ministry funds a Formation Center to train clergy and religious rather than treating faith as branding. This is the clearest confessional identity of any cause in this region, and it is Catholic.',
    },
    localLeadership: {
      value: 3,
      note: 'Founded in Jamaica by a Jamaican priest, and the operating leadership is named and local: the executive directors of MSC International and MSC Jamaica, plus a managing director for Nicaragua and the Dominican Republic. The US entity is a funder that grants out 92% of what it spends rather than an operator directing the work from Massachusetts.',
    },
    financialTransparency: {
      value: 3,
      note: 'Audited statements for 2022 through 2025 and Form 990s are posted on the ministry’s own site, with a full functional expense table and, unusually, a country-by-country table of restricted funds released. The audit discloses the overlapping directorship with MSC International. The 88% claim checks out at 87.9%. The one gap is that the audit covers the US funder only, not MSC International, so the money disappears from view once it is granted.',
    },
    outcomeEvidence: {
      value: 1,
      note: 'The units are the right ones — people in homes, meals a day, homes per country — but the ministry publishes three different resident counts (700, 750, 600) across three pages, none of them dated, and the audited statements contain no count at all. For a residential ministry, the resident roll is the one number that should be exact.',
    },
    costEvidence: {
      value: 2,
      note: 'Both halves are published and one is audited, and the arithmetic is unusually meaningful because 92% of program spending is a single grant line rather than overhead. Marked down for the three conflicting counts and because the US entity funds only part of the cost of care.',
    },
  },
  notVerified: [
    'How many people actually live in MSC homes. The homepage says over 700, the mission and vision page says over 750, and the core values box on that same page says over 600. None is dated and none appears in the audit. Our cost per resident-year moves between $10,886 and $13,607 depending on which of the ministry’s own figures you pick.',
    'What share of the cost of care this represents. The audit states the US entity is "one of the supporters of MSC International", so other funders exist, are not named, and are not quantified. The real cost of a resident-year is higher than the figure on this page and we cannot tell you by how much.',
    'What happens to the money after the grant. $7,538,941 of $8,164,149 in program spending leaves as grants and aid to MSC International, and no financial statement for MSC International is published. The audit notes that one director of the US entity is also a director of MSC International.',
    'Whether Malawi is still operating. Restricted funds released for Malawi fell from $98,235 in 2024 to $1,044 in 2025 — effectively to nothing — while Malawi is still listed as one of five countries served. Nothing explains the change.',
    'Where mission trip money is recorded. Trips are promoted with their own booking pages and the audit mentions pledges "for mission trip purposes", but there is no trip revenue line in the statements, and only $11,351 of trip cost. Either trip fees are being treated as contributions or they are collected outside this entity; the documents do not say which.',
    'Whether any resident count is checked by anyone outside the ministry. Jamaica licenses residential childcare facilities; no inspection or registration document is published.',
    'Whether the "up to 10 percent" assessment on restricted gifts is applied to all of them or only some, and how much it raised in 2025. The figure is not broken out.',
  ],
  notes: [
    'The country split of restricted funds released in 2025 is published and is the most useful single table in the audit: Jamaica $3,965,974, Dominican Republic $705,864, Nicaragua $360,067, Zimbabwe $228,183, Formation Program $94,710, Malawi $1,044. Read that before assuming a gift is spread evenly across five countries — roughly three-quarters of restricted money is Jamaica.',
    'Gifts-in-kind are small here, which makes the figures easier to trust than at ministries where donated goods dominate: $612,879 of donated contributions against $9,564,882 of cash, so about 6% of revenue. Compare Mission of Hope Haiti, where donated goods are over half of program spending.',
    'The Formation Program is a ten-year campaign, goal $1.6 million, which had raised $1.8 million by the end of 2025. It builds and runs a Formation Center in Jamaica that trains priests, deacons and sisters for the ministry. It is an explicitly religious capital project and it is disclosed as one.',
    'Net assets are $6,011,989 at the US entity, up from $4,922,262 — a little over seven months of program spending in reserve.',
  ],
  siteUrl: 'https://www.mustardseed.com/',
  giveUrl: 'https://www.mustardseed.com/donate',
  sources: [
    {
      id: 'msc-site',
      label: 'Homepage',
      url: 'https://www.mustardseed.com/',
      publisher: 'Mustard Seed Communities',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: 'Source of the "over 700" resident count, the 1,200 daily meals in Zimbabwe and the "12 lifelong homes for 500 individuals with disabilities" figure for Jamaica.',
    },
    {
      id: 'msc-mission',
      label: 'Mission and Vision',
      url: 'https://www.mustardseed.com/mission-and-vision',
      publisher: 'Mustard Seed Communities',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: 'Carries both the "over 750" and the "over 600" counts, on the same page.',
    },
    {
      id: 'msc-spirituality',
      label: 'Spirituality',
      url: 'https://www.mustardseed.com/spirituality',
      publisher: 'Mustard Seed Communities',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: 'The ministry’s account of its own Catholic identity: the Eucharist, Adoration of the Blessed Sacrament, and the themes "He is Here" and "Thank You Lord".',
    },
    {
      id: 'msc-leadership',
      label: 'Leadership',
      url: 'https://www.mustardseed.com/leadership',
      publisher: 'Mustard Seed Communities',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: 'Names the founder, Monsignor Gregory Ramkissoon, and the executive directors of MSC International and MSC Jamaica.',
    },
    {
      id: 'msc-financials',
      label: 'Financials',
      url: 'https://www.mustardseed.com/financials',
      publisher: 'Mustard Seed Communities',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: 'Source of the 88% claim, the Candid and Charity Navigator ratings, and the statement that up to 10% may be assessed on a restricted gift.',
    },
    {
      id: 'msc-audit-25',
      label: 'CY2025 audited financial statements',
      url: 'https://www.mustardseed.com/wp-content/uploads/2026/05/mustard-seed-communities-inc.-cy2025-financial-statements.pdf',
      publisher: 'Mustard Seed Communities',
      documentType: 'audited-financials',
      retrieved: '2026-09-19',
      fiscalYear: 'CY2025',
      note: 'Program expenses $8,164,149 of $9,285,982, of which $7,538,941 is grants and aid to MSC International. Covers the US entity only. Source of the country split, the related director disclosure and the Formation Program campaign figures.',
    },
    {
      id: 'msc-990-24',
      label: '2024 Form 990',
      url: 'https://www.mustardseed.com/wp-content/uploads/2025/07/mustard-seed-communities-inc.-2024-form-990-open-to-public-inspection.pdf',
      publisher: 'Mustard Seed Communities',
      documentType: 'form-990',
      retrieved: '2026-09-19',
      fiscalYear: 'CY2024',
    },
    {
      id: 'msc-propublica',
      label: 'IRS filings for Mustard Seed Communities, EIN 58-1657207',
      url: 'https://projects.propublica.org/nonprofits/organizations/581657207',
      publisher: 'ProPublica Nonprofit Explorer',
      documentType: 'third-party',
      retrieved: '2026-09-19',
    },
  ],
};
