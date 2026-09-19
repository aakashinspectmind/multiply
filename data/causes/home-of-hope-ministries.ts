import type { Cause } from '@/lib/types';

export const homeOfHopeMinistries: Cause = {
  slug: 'home-of-hope-ministries',
  name: 'Home of Hope Ministries',
  tagline:
    'Residential care, therapy and clinics for children with severe disabilities in Jinja, Uganda.',
  category: 'children',
  countries: ['Uganda'],
  whatTheyDo:
    'Home of Hope cares for children with severe disabilities whom local authorities found abandoned — children most Ugandan institutions will not take. Alongside the residential home it runs assessment clinics, epilepsy medication rounds, adaptive-equipment fitting, nutrition support for malnourished children, home visits to families raising a disabled child, and school sponsorship. It was started in Jinja in 2007 by Edith Lukabwe, a Ugandan mother of a disabled son; the US charity exists to raise support for it.',
  ein: '82-1130864',
  accreditations: [],
  verification: 'documents-reviewed',
  biblicalAlignment: {
    mandate:
      'Scripture gives the fatherless and the disabled named, specific protection, and it gives God himself as their defender — the one who "settles the solitary in a home". A child with cerebral palsy left at a roadside because a village had no use for her is the exact person the law and the prophets kept putting in front of Israel.',
    scriptures: [
      {
        ref: 'Psalm 68:5–6',
        text:
          'Father of the fatherless and protector of widows is God in his holy habitation. God settles the solitary in a home.',
      },
      {
        ref: 'James 1:27',
        text:
          'Religion that is pure and undefiled before God the Father is this: to visit orphans and widows in their affliction, and to keep oneself unstained from the world.',
      },
      {
        ref: 'Leviticus 19:14',
        text:
          'You shall not curse the deaf or put a stumbling block before the blind, but you shall fear your God: I am the Lord.',
      },
    ],
    concerns: [
      'Nothing on the site states what the ministry believes, and the programme pages contain no gospel or discipleship content at all. The founder’s account of her call is explicit about obeying God; the description of the work is not. Ask before assuming this is discipleship as well as care.',
      'Residential care for children is contested in Christian development work, where the consensus has moved towards keeping children in families wherever it is possible. Children abandoned because of a severe disability are the hardest case for that, and Home of Hope does run home visits and family follow-up — but we have seen no written policy on reunification or family strengthening.',
    ],
  },
  roi: {
    levers: ['local-cost-base', 'local-workers', 'volunteer-leverage'],
    reason:
      'The US charity is close to a pure conduit: the 2024 return shows $89,160 of $90,371 in spending paid straight out as grants, with no salaries, no rent and a board that states it works unpaid. The care itself happens in Jinja on Ugandan wages, where income per person is about 79 times below the United States, and roughly $900 covers a year of residential care, therapy, food and medicine for one child. The trade is transparency: because almost everything is granted out of the US entity, its return tells you nothing about how the money was spent once it landed.',
  },
  costModel: {
    outcome: 'year of care for a child',
    outcomePlural: 'years of care for children',
    spend: {
      amount: 90371,
      basis: 'total-expenses',
      fiscalYear: '2024',
      sourceId: 'hoh-990-24',
    },
    count: {
      amount: 100,
      label: 'children in residential care',
      fiscalYear: '2026',
      sourceId: 'hoh-site',
    },
    attribution: 'all-program-spend',
    caveat:
      'Two mismatches to hold in mind. The spending is calendar 2024; the child count is the website’s current figure, and the website says “nearly 100” rather than 100, so the true cost per child is somewhat higher than this. And the residential children are not the only people served — the clinics, epilepsy rounds and nutrition programme reach others — so charging all spending to the hundred children in the home overstates what one child costs. Home of Hope’s own figure, from a 2018 audit, is about $62 a month.',
  },
  ministryClaims: [
    {
      quote: 'The monthly expenses per child at Home of Hope are about $62',
      sourceId: 'hoh-financials',
      impliedCostPerOutcome: 744,
      impliedOutcome: 'year of care for a child',
    },
    {
      quote:
        'Of the donations given to Home of Hope Ministries, about 90% is given directly to our program work at Home of Hope Uganda.',
      sourceId: 'hoh-financials',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 1,
      note:
        'The word “Ministries” is in the name and Edith’s account of her call is explicitly about obedience to God. Beyond that there is no statement of faith, no church partnership described and no gospel content in any programme description.',
    },
    localLeadership: {
      value: 3,
      note:
        'The strongest case in this directory. Founded, led and staffed in Jinja by Ugandans, out of one Ugandan mother’s experience of raising a disabled son. The American entity is a volunteer board whose function is to send money.',
    },
    financialTransparency: {
      value: 2,
      note:
        'Form 990-EZ for 2021 and 2024 posted on the site, the IRS determination letter posted, impact reports shared, and a per-child cost published — unusual candour for an organisation this size. Held back by a 2024 filing posted as a scan, no audit since 2018, and no Ugandan financial statements.',
    },
    outcomeEvidence: {
      value: 1,
      note:
        'Programme counts are published but mostly as monthly averages — “up to 8 clients in a month”, “an average of 7 clients” — with no annual totals, and the one cumulative figure has no stated period.',
    },
    costEvidence: {
      value: 2,
      note:
        'Both numbers exist and the ministry’s own $62 a month lands within about 20% of the figure its tax return implies. Marked down because the count is imprecise and comes from a different year than the spending.',
    },
  },
  notVerified: [
    'The 2024 Form 990-EZ on the site is a scan with no text layer. We read it by OCR and checked the three totals against one another — $100,650 less $90,371 is the $10,279 surplus it reports, and $33,848 plus $10,279 is the $44,127 closing balance — so the figures are internally consistent. Confirm against the printed return before quoting them.',
    '$89,160 of $90,371, or 98.7%, left the US charity as grants to Home of Hope Uganda. The American return therefore says nothing about how the money was actually spent on children, and no Ugandan financial statements are published.',
    'The $62 monthly figure comes from a 2018 audit of the Ugandan entity. We have not seen that audit, and there appears to be none since. A 2018 cost quoted in 2026 is stale by eight years of Ugandan inflation.',
    '“Nearly 100 children” is imprecise and undated, and we divided the 2024 spending by it as though it were exactly 100.',
    '“Home of Hope has been able to assess 1000 clients” has no stated time period, so it cannot be used as a denominator for anything.',
    'We have not confirmed whether the children living in the home are also counted among the clinic clients, so the programme counts may overlap.',
  ],
  notes: [
    'Started with six children in Jinja in 2007. The US 501(c)(3) was formed in 2017 to raise support for work that already existed.',
    'The 2024 return reports no salaries, no professional fees and no occupancy costs whatsoever in the US: “All work done by the board is on a voluntary basis.”',
    'Fifty-one children with disabilities are on the school-sponsorship waiting list against three currently sponsored — the clearest statement on the site of what more money would immediately do.',
    'This is the smallest organisation in the directory by a wide margin, and the kind the whole project exists to find. It is also the kind where a single change of leadership or a single bad year matters enormously.',
  ],
  siteUrl: 'https://www.homeofhopeministries.org/',
  giveUrl: 'https://www.homeofhopeministries.org/partners',
  sources: [
    {
      id: 'hoh-site',
      label: 'Homepage',
      url: 'https://www.homeofhopeministries.org/',
      publisher: 'Home of Hope Ministries',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'hoh-financials',
      label: 'Financials',
      url: 'https://www.homeofhopeministries.org/financials',
      publisher: 'Home of Hope Ministries',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'hoh-990-24',
      label: '2024 Form 990-EZ',
      url: 'https://www.homeofhopeministries.org/s/2024_HOHM_990-EZ.pdf',
      publisher: 'Home of Hope Ministries',
      documentType: 'form-990',
      retrieved: '2026-09-18',
      fiscalYear: '2024',
      note: 'Posted as a scanned image with no text layer. Read by OCR and cross-checked against its own subtotals.',
    },
    {
      id: 'hoh-programs',
      label: 'Our Programs',
      url: 'https://www.homeofhopeministries.org/our-programs',
      publisher: 'Home of Hope Ministries',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'hoh-about',
      label: 'About Us',
      url: 'https://www.homeofhopeministries.org/about-us',
      publisher: 'Home of Hope Ministries',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
  ],
};
