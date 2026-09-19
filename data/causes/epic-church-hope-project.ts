import type { Cause } from '@/lib/types';

export const epicChurchHopeProject: Cause = {
  slug: 'epic-church-hope-project',
  name: 'The Hope Project (Epic Church)',
  tagline: 'A San Francisco church’s annual fund for 23 vetted local and global partners.',
  category: 'church-fund',
  countries: [
    'United States',
    'Australia',
    'England',
    'Eswatini',
    'Ghana',
    'Guatemala',
    'India',
    'Japan',
    'Thailand',
    'Vietnam',
  ],
  whatTheyDo:
    'Once a year Epic Church raises a single offering and distributes it across partners it already knows — church plants, a girls’ school in Ghana, an orphan home in Eswatini, persecuted pastors in North India, and a dozen organisations working in San Francisco’s Tenderloin and SoMa. Relationships come first: partners are chosen because people from the church serve with them.',
  accreditations: [],
  verification: 'self-reported',
  biblicalAlignment: {
    mandate:
      'This is the Antioch pattern: a local congregation prays, sets money aside, and sends it to work it knows by name. The New Testament’s fundraising is churches supporting churches, with named people carrying the gift.',
    scriptures: [
      {
        ref: 'Acts 13:2–3',
        text:
          'While they were worshiping the Lord and fasting, the Holy Spirit said, “Set apart for me Barnabas and Saul for the work to which I have called them.” Then after fasting and praying they laid their hands on them and sent them off.',
      },
      {
        ref: '2 Corinthians 8:3–4',
        text:
          'For they gave according to their means, as I can testify, and beyond their means, of their own accord, begging us earnestly for the favor of taking part in the relief of the saints.',
      },
      { ref: 'Galatians 2:10', text: 'Only, they asked us to remember the poor.' },
    ],
    concerns: [
      'Giving to a fund means delegating your diligence to Epic. That is a reasonable thing to do if you know the church, and an unexamined leap if you do not.',
      'We have not seen Epic’s written criteria for adding or dropping a partner, and no breakdown of how much of the $600,000 goal reaches partners rather than covering the campaign.',
    ],
  },
  roi: {
    levers: ['existing-network', 'local-workers', 'local-cost-base'],
    reason:
      'Every partner is already operating and locally led, so the gift creates no new organisation and no new overhead — it buys more of something already running. The catch is the mirror image: 23 partners across ten countries, from Eswatini to the Tenderloin, cannot share a cost per outcome. Roughly half the roster is in San Francisco, where a dollar buys the least of anywhere on this site, and Epic chose that deliberately.',
  },
  ministryClaims: [
    {
      quote:
        'The Hope Project is our annual initiative that funds Epic’s strategic partners in San Francisco and across the globe.',
      sourceId: 'epic-hope',
    },
    {
      quote: 'This year, our goal is to raise $600,000 to fund our current partners.',
      sourceId: 'epic-booklet',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 3,
      note:
        'A church offering directed at gospel work: church plants, discipleship networks and persecuted pastors sit alongside the mercy ministries.',
    },
    localLeadership: {
      value: 3,
      note:
        'Every partner is a local organisation led by people in that place, and the church sends teams to serve with them rather than running the work itself.',
    },
    financialTransparency: {
      value: 1,
      note:
        'The booklet names the partners and the $600,000 goal, and the page states more than $3 million given over 14 years. No split by partner, and no financial statement for the fund.',
    },
    outcomeEvidence: {
      value: 1,
      note:
        'Narrative plus scattered counts — 400 children in after-school programs, 30,800 people reached through community outreach, 175 youth at Christmas, 50 girls in a dance ministry. Real, but not a reporting system.',
    },
    costEvidence: {
      value: 0,
      note: 'No spending-per-partner figures published, so nothing can be divided.',
    },
  },
  notVerified: [
    'How the $600,000 is split across partners. The booklet describes each partner’s work but not the amount each receives.',
    'The "$3 million over 14 years" total is stated on the page and not broken out anywhere public.',
    'Most partners are small and carry no third-party accreditation. None of them publish a cost per outcome.',
    'Whether gifts from outside the congregation are welcome into this fund at all — the giving link is Epic’s general Pushpay page.',
  ],
  notes: [
    'This is the closest working model to what this directory is trying to do: a curated, relational portfolio with real accountability through relationship rather than through documents.',
    'It is also the clearest illustration of the gap. Twenty-three partners, zero published unit costs — which is where a directory like this one earns its keep.',
    'Serving trips in 2026: Ghana in July, Guatemala in September, Vietnam and Eswatini in October.',
  ],
  portfolio: [
    { name: 'Heart for Africa', place: 'Eswatini', work: 'Orphan and vulnerable children’s home; Epic funds a worship ministry camp for musically gifted children.' },
    { name: 'Vida Real', place: 'Guatemala', work: 'Nationwide work to accelerate the end of poverty in Guatemala.' },
    { name: 'Lighthouse Church', place: 'Vietnam', work: 'Launching the Thu Duc church plant — equipment, biblical education and leadership support.' },
    { name: 'The Pearl House', place: 'Ghana', work: 'Protects, educates and disciples at-risk young women; Epic gave toward launching Pearl College.' },
    { name: 'Mustard Seed Network', place: 'Japan', work: 'Church-planting network across 12 cities; Epic hosts its pastoral vision retreat.' },
    { name: 'God For Nations', place: 'North India', work: 'Reaching unreached peoples; Epic funded a retreat for pastors facing persecution and imprisonment.' },
    { name: 'International Justice Mission', place: 'Thailand', work: 'Identified and supported nearly 500 victims of forced labour in scam compounds in Southeast Asia.' },
    { name: 'Saint Church', place: 'East London, England', work: 'Leadership training using creativity and innovation.' },
    { name: 'Streams Studio', place: 'England', work: 'Video content aimed at people who have drifted from faith.' },
    { name: 'Neighbourhood Church', place: 'Perth, Australia', work: 'New church plant; Epic’s support started weekly services.' },
    { name: 'City Impact', place: 'San Francisco', work: 'Fourteen service programs in the inner city for over 30 years.' },
    { name: 'Bessie Carmichael School', place: 'San Francisco', work: 'SoMa’s only public school, nearly 700 students; Epic supports its teachers.' },
    { name: 'Foster the City', place: 'Bay Area', work: 'Coalition of churches recruiting homes for every child in foster care.' },
    { name: 'Open Door Legal', place: 'San Francisco', work: 'Universal access to legal help; prevented hundreds of evictions into homelessness.' },
    { name: 'A Woman’s Place', place: 'San Francisco', work: 'The city’s only 24-hour residential program for women in crisis.' },
    { name: 'Because Justice Matters', place: 'Tenderloin', work: 'Dance, mentorship and safe community for women and girls.' },
    { name: 'Mobilize Love', place: 'San Francisco', work: 'City-wide outreach; 400 children in after-school programs and 30,800 people reached in 2025.' },
    { name: 'United Playaz', place: 'San Francisco', work: 'Violence prevention and youth development, 25 years in the city.' },
    { name: 'Old Skool Cafe', place: 'San Francisco', work: 'Restaurant job training and paid work for at-risk youth.' },
    { name: 'TL Connect (YWAM)', place: 'Tenderloin', work: 'Weekly visits to neighbours living in single-room occupancies.' },
    { name: 'Rise Prep', place: 'San Francisco', work: 'Education for an underserved community.' },
    { name: 'Olive Us Restored', place: 'San Francisco', work: 'Teaching and resources for women; Epic sponsors the 2026 Restored Retreat.' },
    { name: 'Convoy of Hope', place: 'Global', work: 'Food manufacturing and packaging centre opening 2026 to increase meals produced.' },
  ],
  siteUrl: 'https://epicsf.com/the-hope-project',
  giveUrl: 'https://epicsf.com/give',
  sources: [
    {
      id: 'epic-hope',
      label: 'The Hope Project page',
      url: 'https://epicsf.com/the-hope-project',
      publisher: 'Epic Church, San Francisco',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'epic-booklet',
      label: '2026 Hope Project booklet',
      url: 'https://www.dropbox.com/scl/fi/uvg3w7p7a8wvg2ah55emr/2026-EPICTHPBOOKLET_DIGITAL.pdf?rlkey=sizwjram1kt2ed557o1tmsv9u&dl=0',
      publisher: 'Epic Church, San Francisco',
      documentType: 'annual-report',
      retrieved: '2026-09-18',
      note: 'Partner descriptions and the $600,000 goal are in this booklet, linked from the Hope Project page.',
    },
  ],
};
