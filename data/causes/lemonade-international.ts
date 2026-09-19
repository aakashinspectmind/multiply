import type { Cause } from '@/lib/types';

export const lemonadeInternational: Cause = {
  slug: 'lemonade-international',
  name: 'Lemonade International',
  legalName: 'Lemonade International Inc',
  ein: '26-2265505',
  tagline:
    'A small North Carolina office funding Guatemalan leaders in Guatemala City’s poorest neighbourhoods — and ending one-to-one child sponsorship on purpose.',
  category: 'children',
  countries: ['Guatemala'],
  whatTheyDo:
    'Lemonade International does not run programmes. It funds Guatemalan organisations that do — after-school centres where children get a hot meal, schooling support, mentoring and Bible teaching, plus gang prevention, rescue outreach and community relief in the poorest neighbourhoods of Guatemala City. Its own description of itself is "in solidarity with Guatemalan leaders", and in 2025 it finished vetting and began funding a new Guatemalan partner, Sonrisas, alongside its existing ones. It is genuinely small: total 2025 expenses of $451,702, run from Wake Forest, North Carolina by a board of six.',
  accreditations: [],
  verification: 'self-reported',
  biblicalAlignment: {
    mandate:
      'Jeremiah tells exiles to seek the welfare of the city they live in, and to pray for it, because their own welfare is bound up with it. That is the mandate for neighbourhood work: not rescuing children out of a place but making the place liveable. Proverbs adds the obligation to open your mouth for those who have no voice, and Christ’s own statement of his mission — good news to the poor, liberty to the captives — is what gang prevention is reaching for when it keeps a thirteen-year-old out of a gang.',
    scriptures: [
      {
        ref: 'Jeremiah 29:7',
        text: 'But seek the welfare of the city where I have sent you into exile, and pray to the Lord on its behalf, for in its welfare you will find your welfare.',
      },
      {
        ref: 'Proverbs 31:8–9',
        text: 'Open your mouth for the mute, for the rights of all who are destitute. Open your mouth, judge righteously, defend the rights of the poor and needy.',
      },
      {
        ref: 'Luke 4:18',
        text: 'The Spirit of the Lord is upon me, because he has anointed me to proclaim good news to the poor. He has sent me to proclaim liberty to the captives.',
      },
    ],
    concerns: [
      'No statement of faith. The vision is "to see those most in need in Guatemala City experience transformation and live full lives in Jesus", and the first listed value is "Faith — We are motivated by our Christian faith", which is more than most. But a value is not a doctrinal position, and there is nothing to read on what the ministry or its partners believe.',
      'The ministry is very small and has just been through leadership change. The 2025 board letter says "this year has also brought transition and change" and describes an "active phase of research and development, pursuing new strategic alliances", and it is signed by the board rather than by a chief executive. On a $451,702 budget, a transition is a real risk to continuity.',
      'The Guatemalan partners it funds are not audited in anything a donor can read. Lemonade’s financial report is one pie chart of its own spending; there is no published accounting of what the partners did with the grants.',
      'Trips are a large part of the relationship for an organisation this size: nine groups hosted in 2025, including two vision trips, three service learning trips, a sponsor trip, a training trip and two work trips for staff and board members. Two board-and-staff trips against $33,472 of total fundraising spend is worth asking about, and the annual report does not say what any of it cost or who paid.',
    ],
  },
  roi: {
    levers: ['local-workers', 'existing-network'],
    reason:
      'The cost base is the weaker argument here and we are not going to lean on it: Guatemala’s income per person is roughly fourteen times below the United States, which is real but is not Haiti or Malawi, and Guatemala City is the most expensive place in the country. The actual mechanism is that Lemonade employs nobody in Guatemala. The work is done by Guatemalan organisations that already exist, already have the centres and already have the trust of the neighbourhood, and Lemonade is a funding conduit for them — which is why $360,194 of a $451,702 budget leaves as programme money. The honest summary is that the leverage is moderate and structural rather than dramatic.',
  },
  ministryClaims: [
    {
      quote: 'Your gift of $20 could cook meals for 2 families next month.',
      sourceId: 'li-site',
      impliedCostPerOutcome: 10,
      impliedOutcome: 'a month of meals for one family',
    },
    {
      quote: '$9,150 can fund a coordinator and nutrition program for six months!',
      sourceId: 'li-site',
      impliedCostPerOutcome: 18300,
      impliedOutcome: 'a year of one centre coordinator plus its nutrition programme',
    },
    {
      quote: 'We are a platinum charity, a 4-star charity, and ECFA-accredited',
      sourceId: 'li-report-25',
    },
    {
      quote:
        'Under this new model, our sponsors walk with communities rather than forming exclusive relationships with individual children. This protects children, strengthens families, and reflects our belief that every child belongs first to God, their family, and their community.',
      sourceId: 'li-report-25',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 2,
      note: 'Jesus is named in the vision statement rather than implied, Christian faith is the first stated value, and the homepage asks donors to help partners "instruct, disciple, and provide life skills training". Marked down for having no statement of faith and for saying nothing about what its Guatemalan partners believe or teach.',
    },
    localLeadership: {
      value: 3,
      note: 'The entire model is deference to Guatemalan leadership — "Guatemalan leaders are already doing this work" — and the ministry funds rather than operates. Its own 2025 ambition is to "deepen partnerships, expand shared leadership". The US entity is six board members and a small staff in North Carolina.',
    },
    financialTransparency: {
      value: 1,
      note: 'One annual impact report with a three-line expense breakdown and a total. We found no audited statements and no Form 990 posted on the site, and the financials page links donor-impact reports from as far back as 2009 alongside the current one. The ministry claims platinum, four-star and ECFA status; none of those is linked from the report and we could not load the ECFA directory to confirm.',
    },
    outcomeEvidence: {
      value: 0,
      note: 'A zero, and it is a finding rather than an absence. The 2025 impact report’s headline statistic is the word "MANY" printed above the label "children with daily meals" — the count is literally missing from the published document. Other figures in the same report are counts of inputs (4,500 vitamins, school supplies for more than 200 children, nine groups hosted) rather than children served.',
    },
    costEvidence: {
      value: 1,
      note: 'Programme spending is published, clearly, at $360,194. There is no outcome count to divide it by, so no cost per outcome exists. Two unit prices are advertised on the homepage with no denominators behind them.',
    },
  },
  notVerified: [
    'How many children this ministry feeds. Its own 2025 impact report prints "MANY" where the number belongs, directly above "children with daily meals". That is the ministry’s headline statistic and it is not a number, which is why there is no cost per outcome on this page. A separate story in the same report mentions "Approximately 50 boys and girls" at one partner centre, so the total is somewhere above fifty and otherwise unstated.',
    'The financial page of the 2025 impact report contains an unresolved editing instruction, published as body text: the sentence about "nearly 80 cents" is printed twice with a "to" between the two versions, as if a find-and-replace was written into the document and never applied. It is a small thing, but it is on the page a donor reads to decide whether the figures are looked after.',
    'No audited financial statements and no Form 990 are posted on the site. The only financial document is the impact report’s pie chart: Programming $360,194, Management $58,036, Development/Fundraising $33,472, total $451,702. Those add up and 79.7% is programme, which matches the claim, but nobody outside the ministry has signed anything.',
    'The claimed accreditations — "a platinum charity, a 4-star charity, and ECFA-accredited". No awarding body is named, no year is given and nothing is linked. We could not confirm any of the three from its own materials, so none is listed as an accreditation on this page.',
    'Whether the Guatemalan partners are audited, and what the grants bought. Sonrisas was newly vetted in 2025 and no vetting criteria or partner financials are published.',
    'The site still sells one-to-one child sponsorship — "Sponsor a Child", with a current-sponsors portal — while the 2025 report says the ministry began planning at the end of 2025 to replace it with a General Sponsorship Fund and a Bright Futures Fund. A donor arriving on the website today cannot tell which model they are buying into.',
    'What the nine hosted groups cost the organisation, including the two work trips for staff and board members. Neither the trips nor any trip revenue appears in the expense breakdown.',
    'The dropout statistic used to justify the education programme is from 2021 and describes "almost 187,000 children and adolescents". It is five years old on a page with no date.',
  ],
  notes: [
    'The decision to end one-to-one child sponsorship is the single best thing on this cause page, and it goes against the ministry’s own fundraising interest. Exclusive sponsor-child relationships raise more money and are easier to sell; Lemonade is giving that up on child-protection grounds, and says why: "every child belongs first to God, their family, and their community." Where a directory like this one has to mark residential and institutional models down, this is the opposite case and it deserves to be said plainly.',
    'Scale, so you can place it: total expenses of $451,702 make this one of the smallest causes here. A $20 gift is a real proportion of this budget in a way it is not at a ministry spending $25 million.',
    'Named 2025 partnerships include Sonrisas, Caritas and a nutrition partnership with Abbott supplying PediaSure, through which the report says 216 children were monitored and 236 children received medical attention. Those are the most specific counts in the document.',
    'The ministry is named after La Limonada, the Guatemala City settlement where the work began. That is why the fundraising motif is a lemonade stand.',
  ],
  siteUrl: 'https://lemonadeinternational.org/',
  giveUrl: 'https://lemonadeinternational.org/give-online/',
  sources: [
    {
      id: 'li-site',
      label: 'Homepage',
      url: 'https://lemonadeinternational.org/',
      publisher: 'Lemonade International',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: 'Source of the two advertised unit prices and of the discipleship language.',
    },
    {
      id: 'li-values',
      label: 'Mission & Values',
      url: 'https://lemonadeinternational.org/about/mission-values/',
      publisher: 'Lemonade International',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: 'The mission, the vision naming Jesus, and the six values including Faith. There is no statement of faith on this or any other page we found.',
    },
    {
      id: 'li-financials',
      label: 'Financials',
      url: 'https://lemonadeinternational.org/about/financials/',
      publisher: 'Lemonade International',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: 'Links impact reports from 2009 onward. No audited statements and no Form 990 are posted.',
    },
    {
      id: 'li-report-25',
      label: '2025 Annual Impact Report',
      url: 'https://lemonadeinternational.org/wp-content/uploads/2026/08/2025-Annual-Impact-Report-Lemonade-International.pdf',
      publisher: 'Lemonade International',
      documentType: 'annual-report',
      retrieved: '2026-09-19',
      fiscalYear: '2025',
      note: 'The only financial document available. Source of the expense split, the "MANY children with daily meals" statistic, the accreditation claim, the new sponsorship model and the unresolved editing instruction on the financial page.',
    },
    {
      id: 'li-propublica',
      label: 'IRS filings for Lemonade International Inc, EIN 26-2265505',
      url: 'https://projects.propublica.org/nonprofits/organizations/262265505',
      publisher: 'ProPublica Nonprofit Explorer',
      documentType: 'third-party',
      retrieved: '2026-09-19',
    },
    {
      id: 'li-candid',
      label: 'Candid nonprofit profile',
      url: 'https://app.candid.org/profile/8651743/lemonade-international-inc-26-2265505',
      publisher: 'Candid',
      documentType: 'third-party',
      retrieved: '2026-09-19',
      note: 'Linked from the ministry’s own financials page. We did not treat it as confirmation of the "platinum charity" claim, which names no awarding body or year.',
    },
  ],
};
