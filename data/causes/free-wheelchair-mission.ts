import type { Cause } from '@/lib/types';

export const freeWheelchairMission: Cause = {
  slug: 'free-wheelchair-mission',
  name: 'Free Wheelchair Mission',
  legalName: 'Free Wheelchair Mission',
  ein: '31-1781635',
  tagline:
    'Designs a $108 wheelchair for unpaved roads and ships it by the container to partners in 31 countries.',
  category: 'disability',
  countries: ['Global'],
  whatTheyDo:
    'Free Wheelchair Mission designs its own low-cost wheelchairs for rough terrain, has them manufactured in volume, and ships them in containers to humanitarian, faith-based and non-governmental partners who do the fitting and distribution in-country. It does not run the distributions itself. In the year to 30 June 2025 it sent 64,316 wheelchairs to 31 countries; it says it has given away nearly 1.6 million since 2001.',
  accreditations: [],
  verification: 'documents-reviewed',
  biblicalAlignment: {
    mandate:
      'A person who cannot move cannot work, cannot go to school and cannot get to church. Scripture treats that as an injustice to be undone rather than a misfortune to be pitied: the lame are carried into the kingdom, the poor and crippled are the ones specifically named on the guest list, and the command is to open your mouth for those who have no standing to ask. A wheelchair is the most literal form of that — it restores the capability, and then the person does the rest themselves.',
    scriptures: [
      {
        ref: 'Luke 14:13–14',
        text:
          'But when you give a feast, invite the poor, the crippled, the lame, the blind, and you will be blessed, because they cannot repay you.',
      },
      {
        ref: 'Proverbs 31:8–9',
        text:
          'Open your mouth for the mute, for the rights of all who are destitute. Open your mouth, judge righteously, defend the rights of the poor and needy.',
      },
      {
        ref: 'Matthew 25:40',
        text:
          'Truly, I say to you, as you did it to one of the least of these my brothers, you did it to me.',
      },
    ],
    concerns: [
      'The gospel language is real but thin. The FAQ offers “a message of the love of God” with the chair and the values page is written in Christian terms, but we found no statement of faith and no description of what, if anything, a recipient hears. For a ministry that fundraises to churches, that is a gap worth asking about.',
      'The ministry does not distribute. Every chair is handed over to a partner organisation, and the partners are described only as a category — “humanitarian, faith-based, and non-governmental”. No partner is named, none is said to be audited, and nothing is published about how a partner decides who gets a chair.',
      'Nearly half of program spending is donated goods. $7,590,036 of the $15,392,425 program total is a non-cash line, “Medical supplies and shipping – In-kind”. Gifts in kind inflate both the program total and the program ratio the ministry advertises, and a donor’s cash does not buy that half.',
    ],
  },
  roi: {
    levers: ['durable-asset', 'local-cost-base', 'existing-network'],
    reason:
      'Three mechanisms stack here. The chair is a one-off purchase that keeps working for years, so the gift is not repeated annually. It is manufactured in volume for a developing-world specification rather than to a reimbursable medical standard, which is why the advertised price is $108 rather than the four figures a comparable chair costs in a high-income country. And delivery rides on partners who already operate in the 31 countries served, so the ministry pays for a container rather than for a field office. We have not built a benchmark comparison, because we have no sourced high-income price to put against it.',
  },
  costModel: {
    outcome: 'wheelchair delivered',
    outcomePlural: 'wheelchairs delivered',
    spend: {
      amount: 15392425,
      basis: 'program-services',
      fiscalYear: '2025',
      sourceId: 'fwm-audit-25',
    },
    count: {
      amount: 64316,
      label: 'wheelchairs sent to 31 developing countries',
      fiscalYear: '2025',
      sourceId: 'fwm-ar-25',
    },
    attribution: 'all-program-spend',
    caveat:
      'An upper bound, and it is 2.2 times the price the ministry advertises. Everything in the program column is charged to the chairs, and half of that column is not cash: $7,590,036 is donated medical supplies and shipping, and only $4,324,092 is the “Wheelchair production” line. Take the in-kind medical line out and the same year gives $121.31 per chair; divide by the production line alone and it gives $67.23. The advertised $108 covers manufacturing and shipping only, which is roughly the middle of that range, so the difference is mostly about what counts as the cost of a chair rather than about arithmetic.',
    alternates: [],
  },
  ministryClaims: [
    {
      quote:
        'The average cost of our Free Wheelchair Mission wheelchair models is $108, which covers manufacturing and shipping of wheelchairs.',
      sourceId: 'fwm-faqs',
      impliedCostPerOutcome: 108,
      impliedOutcome: 'wheelchair',
    },
    {
      quote:
        'Based on the average of shipping all of our wheelchairs annually, we include the shipping cost in the $108 per wheelchair price.',
      sourceId: 'fwm-faqs',
    },
    {
      quote:
        'For $108, you can provide not only the gift of mobility, but also the gifts of renewed dignity, independence, and hope, and a message of the love of God.',
      sourceId: 'fwm-faqs',
    },
    {
      quote: 'To date, we have given away nearly 1.6 million wheelchairs in 95 countries.',
      sourceId: 'fwm-faqs',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 1,
      note:
        'God is named — the FAQ promises “a message of the love of God” with each chair — but there is no statement of faith, no gospel content described, and no church partnership named. The work is Christian in motive and generic in delivery.',
    },
    localLeadership: {
      value: 1,
      note:
        'Headquartered in Irvine, California, with design, manufacturing contracts and governance held there. Distribution is entirely by in-country partners, which is real local delivery, but no partner is named and no field leadership is described, so we cannot score it higher than the structure we can see.',
    },
    financialTransparency: {
      value: 3,
      note:
        'Audited statements and Form 990s from 2016 through the year ended 30 June 2025 are posted on the ministry’s own accountability page, with a functional expense table detailed enough to separate the in-kind medical line from wheelchair production. Annual reports for every year since 2018 are posted alongside them.',
    },
    outcomeEvidence: {
      value: 2,
      note:
        'The annual count is published, dated to the fiscal year, tied to a country list, and repeated consistently across the report. Marked down because a chair “sent” is a shipping event, not a person fitted, and the ministry publishes no count of recipients actually seated in a chair.',
    },
    costEvidence: {
      value: 3,
      note:
        'Both halves of the division come out of documents the ministry posts itself, the ministry advertises its own unit price, and the FAQ says precisely what that price includes — which is the one thing that makes the 2.2x gap explainable rather than alarming.',
    },
  },
  notVerified: [
    'A wheelchair sent is not a wheelchair sat in. The published unit is shipment to a partner; nothing states how many chairs reached a person, how many were fitted correctly, or how many were still in service after three years.',
    'No partner organisation is named anywhere, so there is nothing to check on the delivery end. The FAQ says a monthly Shipping Status Report goes to email subscribers showing where and how many chairs were received in-country; that is not published on the site.',
    'The two figures for lifetime distribution do not agree. The FY2025 annual report says 1.5 million wheelchairs since 2001; the FAQ says nearly 1.6 million in 95 countries. Neither page dates its figure.',
    'The “78% program ratio” the annual report advertises is carried by gifts in kind. $7,590,036 of donated medical supplies and shipping sits in the program column, so the ratio would look materially different on a cash-only basis, and the ministry does not present one.',
    'The advertised $108 is a manufacturing-and-shipping average across models. No model-by-model price, no shipping cost by destination and no volume assumption is published, so the average cannot be checked.',
    'Whether recipients hear anything about Christ, and from whom. The FAQ promises “a message of the love of God”; the partners deliver it, and neither the content nor the partners are described.',
  ],
  notes: [
    'Fiscal year ends 30 June. The audited statements and the annual report both cover the year to 30 June 2025, so numerator and denominator match.',
    'FY2025 total expenses were $19,739,453: program services $15,392,425, fundraising $3,849,362, administration $497,666. Administration is unusually small at 2.5% of spending, which is worth noting in both directions — it is efficient, and it is thin for an organisation moving containers into 31 countries.',
    'The ministry’s own tax ID is printed on its accountability page as 31-1781635. The EIN circulated in some third-party listings for this ministry does not resolve in IRS data; we used the one the ministry publishes.',
    'Founder Don Schoendorfer built the first chair in 1999 and the organisation has held 501(c)(3) status since 2001. Founder concentration is worth watching in a ministry whose product is a single founder-designed device, though he is no longer the only name on the leadership page.',
  ],
  siteUrl: 'https://www.freewheelchairmission.org/',
  giveUrl: 'https://www.freewheelchairmission.org/donate/',
  sources: [
    {
      id: 'fwm-site',
      label: 'Homepage',
      url: 'https://www.freewheelchairmission.org/',
      publisher: 'Free Wheelchair Mission',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'fwm-mission-values',
      label: 'Mission and values',
      url: 'https://www.freewheelchairmission.org/mission-values/',
      publisher: 'Free Wheelchair Mission',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'fwm-accountability',
      label: 'Financial accountability',
      url: 'https://www.freewheelchairmission.org/financial-accountability/',
      publisher: 'Free Wheelchair Mission',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Posts audited statements, Form 990s and annual reports from 2016 onward, and the ministry’s federal tax ID.',
    },
    {
      id: 'fwm-faqs',
      label: 'Frequently asked questions',
      url: 'https://www.freewheelchairmission.org/faqs/',
      publisher: 'Free Wheelchair Mission',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note:
        'Source of the $108 claims, the statement that shipping is included in that price, and the “nearly 1.6 million wheelchairs in 95 countries” figure.',
    },
    {
      id: 'fwm-audit-25',
      label: 'Audited financial statements, year ended 30 June 2025',
      url: 'https://freewheelchairmission.org/wp-content/uploads/2026/01/FREE-WHEELCHAIR-MISSION-06-30-25-FS.pdf',
      publisher: 'Free Wheelchair Mission',
      documentType: 'audited-financials',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note:
        'Program services $15,392,425 of $19,739,453 total expenses. The functional expense table separates “Medical supplies and shipping – In-kind” at $7,590,036 from “Wheelchair production” at $4,324,092.',
    },
    {
      id: 'fwm-ar-25',
      label: 'FY2025 annual report',
      url: 'https://freewheelchairmission.org/wp-content/uploads/2025/08/2025-Annual-Report-Spreads-26.pdf',
      publisher: 'Free Wheelchair Mission',
      documentType: 'annual-report',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note:
        'Source of 64,316 wheelchairs to 31 developing countries, the country list, the 78% program ratio claim and the 1.5 million lifetime figure.',
    },
    {
      id: 'fwm-propublica',
      label: 'IRS filings for Free Wheelchair Mission, EIN 31-1781635',
      url: 'https://projects.propublica.org/nonprofits/organizations/311781635',
      publisher: 'ProPublica Nonprofit Explorer',
      documentType: 'third-party',
      retrieved: '2026-09-18',
    },
  ],
};
