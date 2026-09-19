import type { Cause } from '@/lib/types';

/**
 * The starter directory. Eight entries, researched 2026-09-18 from public
 * documents only — no site visits, no calls, no relationships yet.
 *
 * Read `DATA.md` before editing. The short version: every number needs a
 * `sourceId`, quotes are verbatim, and a gap goes in `notVerified` rather than
 * getting filled in with a guess.
 */
export const causes: Cause[] = [
  {
    slug: 'cure-international',
    name: 'CURE International',
    legalName: 'CURE International Inc',
    tagline: 'Free surgery for children with treatable disabilities, at eight Christian hospitals.',
    category: 'health',
    countries: [
      'Ethiopia',
      'Kenya',
      'Malawi',
      'Niger',
      'Philippines',
      'Uganda',
      'Zambia',
      'Zimbabwe',
    ],
    whatTheyDo:
      'CURE runs children’s surgical hospitals that treat clubfoot, cleft lip, burn contractures, hydrocephalus, bone infections and spinal deformity. Families are not charged. Local surgeons are trained to lead the programs, and chaplains pray with patients and families.',
    ein: '58-2248383',
    accreditations: [
      { label: 'ECFA accredited', sourceId: 'cure-site' },
      { label: 'Charity Navigator four stars', sourceId: 'cure-site' },
      { label: 'Candid Platinum Transparency 2025', sourceId: 'cure-site' },
      { label: 'Excellence in Giving certified transparent', sourceId: 'cure-site' },
    ],
    verification: 'documents-reviewed',
    costModel: {
      outcome: 'surgery for a child',
      outcomePlural: 'surgeries for children',
      spend: {
        amount: 39853533,
        basis: 'program-services',
        fiscalYear: 'FY2025',
        sourceId: 'cure-ar25',
      },
      count: {
        amount: 21019,
        label: 'surgeries performed',
        fiscalYear: 'FY2025',
        sourceId: 'cure-ar25',
      },
      attribution: 'all-program-spend',
      caveat:
        'Those same program dollars also pay for clinic visits, casting, rehabilitation, staff training and chaplaincy, so charging all of them to surgeries overstates what one surgery costs. CURE’s own FY25 figure is $1,704 per surgery — 11% below this one, which is about the agreement you would expect between the two methods.',
      alternates: [
        {
          label: 'people who heard the gospel through CURE in FY25',
          count: 275288,
          note:
            'The same program spending divided by the number of people CURE reports sharing the gospel with: about $145 each. It is the same money as the surgery figure, counted against a different outcome — the two cannot be added together.',
        },
      ],
    },
    ministryClaims: [
      {
        quote: 'Efficiency is increasing. 40% decrease in cost per surgery',
        sourceId: 'cure-ar25',
        impliedCostPerOutcome: 1704,
        impliedOutcome: 'surgery',
      },
    ],
    scores: {
      gospelCentrality: {
        value: 3,
        note:
          'Named and structural, not incidental: "We share Jesus" is one of five stated distinctives, and FY25 reporting counts 275,288 people who heard the gospel alongside the surgical numbers.',
      },
      localLeadership: {
        value: 2,
        note:
          'Hospitals are staffed and increasingly led by national clinicians — the FY25 report follows an Ethiopian surgeon trained at CURE Kenya now leading Ethiopia’s first pediatric spine program. Governance and fundraising remain US-based.',
      },
      financialTransparency: {
        value: 3,
        note:
          'Statement of activities printed in the annual report, Form 990 filings back to 2002, and four separate accreditations. One unexplained gap between the report and the 990 — see below.',
      },
      outcomeEvidence: {
        value: 2,
        note:
          'Surgeries are a delivered service and are counted per hospital, which is well above the sector norm. But the counts are CURE’s own, and there is no published follow-up on how children do a year later.',
      },
      costEvidence: {
        value: 3,
        note:
          'Both numbers are published, CURE divides them itself, and its answer and ours agree within 11%. Nothing else in this directory is this checkable.',
      },
    },
    notVerified: [
      'The FY25 annual report shows $64,071,632 of revenue and $47,780,480 of expenses. The Form 990 for the same year end shows $63,231,992 and $45,918,222. The difference is unexplained by either document and is worth a phone call before a large gift.',
      'The audit covers the money, not the surgery count. No one outside CURE has verified that 21,019 surgeries happened.',
      'The $1,704 and $2,862 cost-per-surgery figures come from a chart image inside the PDF. The extracted text was legible and internally consistent with the stated 40% decrease, but confirm against the printed report before quoting them.',
      'No published data on patient outcomes after discharge.',
    ],
    notes: [
      'FY25 was the highest surgical volume in CURE’s history: 21,019 surgeries, up from 9,414 in 2021, while cost per surgery fell.',
      '27% of FY25 giving went to capital projects — five new surgical centers — so some of this year’s money buys future surgeries rather than this year’s.',
    ],
    siteUrl: 'https://cure.org/',
    giveUrl: 'https://cure.org/donate/',
    sources: [
      {
        id: 'cure-ar25',
        label: '2025 Annual Report',
        url: 'https://cure.org/wp-content/uploads/2026/04/Annual-Report-2025-Spreads.pdf',
        publisher: 'CURE International',
        documentType: 'annual-report',
        retrieved: '2026-09-18',
        fiscalYear: 'FY2025',
        note: '14 MB PDF. Financial figures are from the printed statement of activities; surgical figures are from the impact pages and the efficiency chart.',
      },
      {
        id: 'cure-990',
        label: 'Form 990, fiscal year ending June 2025',
        url: 'https://projects.propublica.org/nonprofits/organizations/582248383',
        publisher: 'IRS, via ProPublica Nonprofit Explorer',
        documentType: 'form-990',
        retrieved: '2026-09-18',
        fiscalYear: 'FYE June 2025',
      },
      {
        id: 'cure-site',
        label: 'Financial accountability page and homepage',
        url: 'https://cure.org/financial-accountability/',
        publisher: 'CURE International',
        documentType: 'ministry-website',
        retrieved: '2026-09-18',
      },
    ],
  },

  {
    slug: 'water-mission',
    name: 'Water Mission',
    legalName: 'Water Missions International',
    tagline: 'Christian engineers building safe water systems, handed off to local churches and utilities.',
    category: 'water',
    countries: [
      'Honduras',
      'Indonesia',
      'Kenya',
      'Malawi',
      'Mexico',
      'Peru',
      'Tanzania',
      'Uganda',
    ],
    whatTheyDo:
      'Water Mission designs and builds piped water systems, treatment plants and solar-powered pumps, then stays to keep them running through local operators and small utilities. It also responds to disasters and serves refugee settlements, and it equips local churches to share the gospel alongside the work.',
    ein: '57-1116978',
    accreditations: [
      { label: 'ECFA accredited', sourceId: 'wm-site' },
      { label: 'Charity Navigator top rating, 19 consecutive years', sourceId: 'wm-site' },
      { label: 'Candid Platinum Transparency 2025', sourceId: 'wm-site' },
    ],
    verification: 'documents-reviewed',
    costModel: {
      outcome: 'person served with safe water for a year',
      outcomePlural: 'people served with safe water for a year',
      spend: {
        amount: 42762601,
        basis: 'program-services',
        fiscalYear: '2025',
        sourceId: 'wm-audit',
      },
      count: {
        amount: 1750000,
        label: 'people served in 2025',
        fiscalYear: '2025',
        sourceId: 'wm-ar25',
      },
      attribution: 'all-program-spend',
      caveat:
        'This counts everyone served during the year, which includes people whose existing system Water Mission maintained and people reached in disaster and refugee response. It is not 1.75 million new water connections. The report says "more than 1.75 million", so the real figure per person is a little lower than this.',
      alternates: [
        {
          label: 'people in communities served with ongoing access (nearly 770,000)',
          count: 770000,
          note:
            'The stricter denominator: sustained service rather than any contact during the year. About $56 per person, and the number to use if what you care about is water still flowing next year.',
        },
      ],
    },
    ministryClaims: [
      {
        quote: 'Just $50 can transform a life.',
        sourceId: 'wm-site',
      },
    ],
    scores: {
      gospelCentrality: {
        value: 2,
        note:
          'Describes itself as a Christian engineering nonprofit and equips local churches to share "the Living Water message of Jesus Christ". The gospel runs alongside the engineering rather than being the deliverable.',
      },
      localLeadership: {
        value: 3,
        note:
          'Country programs are staffed locally and the sustainability model hands operation to community committees and small utilities rather than keeping it in-house.',
      },
      financialTransparency: {
        value: 3,
        note:
          'Publishes full audited financial statements as a PDF, not just a pie chart — program services of $42,762,601 against total expenses of $48,702,959 for 2025, with the prior year alongside.',
      },
      outcomeEvidence: {
        value: 2,
        note:
          'Separates "served in 2025" from "ongoing access", which is a distinction most water charities blur. Still self-reported, and neither figure is defined in writing.',
      },
      costEvidence: {
        value: 3,
        note: 'Audited spending and a published count of people served — the division is clean.',
      },
    },
    notVerified: [
      'The audit covers the money. Nobody outside Water Mission has verified the 1.75 million or the 770,000.',
      'Both counts come from an infographic with no written definition. "Served" and "ongoing access" are doing a lot of work and should be pinned down before these numbers are used to compare against another water charity.',
      'No published figure for how many systems are still delivering safe water three to five years after installation. That number, not cost per person, decides whether "safe water for life" holds.',
      '2025 ran a $5.7 million decrease in net assets. Worth asking whether 2025 spending is a repeatable level or a drawdown.',
    ],
    notes: [
      'Cumulative reach stated as more than 8 million people in more than 65 countries since 2001.',
      'Works with Compassion International on joint installations, so some outcomes are shared with another ministry’s spending.',
    ],
    siteUrl: 'https://watermission.org/',
    giveUrl: 'https://watermission.org/donate/',
    sources: [
      {
        id: 'wm-audit',
        label: '2025 audited financial statements',
        url: 'https://watermission.org/sites/default/files/2026-08/wm_2025_audited-financials.pdf',
        publisher: 'Water Mission, audited',
        documentType: 'audited-financials',
        retrieved: '2026-09-18',
        fiscalYear: '2025',
      },
      {
        id: 'wm-ar25',
        label: '2025 Annual Report',
        url: 'https://watermission.org/sites/default/files/2026-08/wm_2025_ar.pdf',
        publisher: 'Water Mission',
        documentType: 'annual-report',
        retrieved: '2026-09-18',
        fiscalYear: '2025',
      },
      {
        id: 'wm-financials',
        label: 'Financials page',
        url: 'https://watermission.org/financials',
        publisher: 'Water Mission',
        documentType: 'ministry-website',
        retrieved: '2026-09-18',
      },
      {
        id: 'wm-site',
        label: 'Homepage and impact page',
        url: 'https://watermission.org/impact/',
        publisher: 'Water Mission',
        documentType: 'ministry-website',
        retrieved: '2026-09-18',
      },
      {
        id: 'wm-990',
        label: 'Form 990, fiscal year ending September 2024',
        url: 'https://projects.propublica.org/nonprofits/organizations/571116978',
        publisher: 'IRS, via ProPublica Nonprofit Explorer',
        documentType: 'form-990',
        retrieved: '2026-09-18',
        fiscalYear: 'FYE September 2024',
      },
    ],
  },

  {
    slug: 'bible-league-international',
    name: 'Bible League International',
    tagline: 'Scripture, Bible studies and church-planter training through local churches in 40+ countries.',
    category: 'scripture',
    countries: [
      'Bangladesh',
      'Ethiopia',
      'Ghana',
      'Haiti',
      'India',
      'Indonesia',
      'Kenya',
      'Mozambique',
      'Nicaragua',
      'Rwanda',
      'Zimbabwe',
    ],
    whatTheyDo:
      'Bible League places Bibles and easy-to-read Scripture, runs small-group Bible studies, trains church planters and teaches adult literacy, working through local churches and national partner organisations rather than its own field staff.',
    accreditations: [
      { label: 'ECFA accredited', sourceId: 'bl-site' },
      { label: 'Excellence in Giving certified transparent', sourceId: 'bl-site' },
    ],
    verification: 'documents-reviewed',
    costModel: {
      outcome: 'person engaged in God’s Word',
      outcomePlural: 'people engaged in God’s Word',
      spend: {
        amount: 20887869,
        basis: 'program-services',
        fiscalYear: 'FY2025',
        sourceId: 'bl-ar25',
      },
      count: {
        amount: 2015577,
        label: 'people who studied God’s Word',
        fiscalYear: 'FY2025',
        sourceId: 'bl-ar25',
      },
      attribution: 'all-program-spend',
      caveat:
        'The same program dollars trained 91,622 leaders, supported 1,736 new churches and funded literacy and translation work. "Engaged in God’s Word" is also undefined in the report — it may count a person once, or once per study.',
      alternates: [
        {
          label: 'new churches planted (1,736)',
          count: 1736,
          note: 'About $12,000 per new church on the same all-program-spend basis.',
        },
        {
          label: 'Bibles and study, literacy and training materials shared (4,094,825)',
          count: 4094825,
          note:
            'About $5.10 per item. Counting only the 984,197 items that were Bibles gives about $21 per Bible.',
        },
      ],
    },
    ministryClaims: [
      {
        quote: '$5 sends Bibles to TWO believers waiting for God’s Word.',
        sourceId: 'bl-site',
        impliedCostPerOutcome: 2.5,
        impliedOutcome: 'believer receiving Scripture',
      },
    ],
    scores: {
      gospelCentrality: {
        value: 3,
        note: 'Scripture and church planting are the product. Nothing to infer.',
      },
      localLeadership: {
        value: 3,
        note:
          'Delivery runs through 46 program partners and 64 licensee partners, and the planters are local — 1,690 newly trained planters started 1,736 churches in FY25.',
      },
      financialTransparency: {
        value: 3,
        note:
          'Full statement of activities in the annual report: $28,211,285 of expenditures, 74.0% program, 10.1% administration, 15.9% fundraising. Seven years of reports online.',
      },
      outcomeEvidence: {
        value: 1,
        note:
          'Counts are large, round and self-reported, and the headline unit — people "engaged" — is not defined. Materials shipped is an output, not evidence that anyone read them.',
      },
      costEvidence: {
        value: 2,
        note:
          'Both numbers are published and the division works, but the ministry’s own advertised price is roughly eight times cheaper than the documents imply, and it does not say why.',
      },
    },
    notVerified: [
      'The $5-for-two-Bibles claim does not reconcile with the report. 984,197 Bibles against $20.9 million of program spending is about $21 per Bible; even dividing by all 4,094,825 items shared gives about $5.10 each. Bible League does not state what the $2.50 covers — most likely printing only, excluding distribution, training and overhead. Ask before repeating the claim.',
      '"People who studied God’s Word in FY25" is not defined anywhere in the report.',
      'We have not pulled Bible League’s Form 990 or the underlying audited statements; the figures here come from the statement of activities printed in the annual report.',
      'FY25 shows a $1,675,890 net loss, which the report attributes largely to depreciation and an asset write-off. Not independently checked.',
    ],
    notes: [
      'Works in 24 of the 25 countries with the worst Bible shortages, per the coalition-built Bible Access List.',
      'Reports 91,622 local leaders trained in FY25 — on the same all-program-spend basis that is about $228 per leader trained.',
    ],
    siteUrl: 'https://www.bibleleague.org/',
    giveUrl: 'https://www.bibleleague.org/give/',
    sources: [
      {
        id: 'bl-ar25',
        label: '2025 Annual Report (Mission Matters)',
        url: 'https://www.bibleleague.org/wp-content/uploads/2026/04/31753_MISSION-MATTERS_APR2026-CorpAnnualReport2025.pdf',
        publisher: 'Bible League International',
        documentType: 'annual-report',
        retrieved: '2026-09-18',
        fiscalYear: 'FY2025',
        note: '10 MB PDF. Financials are on the 2025 Statement of Activities page; outcome counts are on the numbers and worldwide-impact pages.',
      },
      {
        id: 'bl-site',
        label: 'Homepage and financial accountability page',
        url: 'https://www.bibleleague.org/accountability/',
        publisher: 'Bible League International',
        documentType: 'ministry-website',
        retrieved: '2026-09-18',
      },
    ],
  },

  {
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
  },

  {
    slug: 'voice-of-the-martyrs',
    name: 'The Voice of the Martyrs',
    tagline: 'Bibles, aid and front-line worker support for Christians under persecution in 50+ nations.',
    category: 'persecuted-church',
    countries: ['Ethiopia', 'Iran', 'Nigeria', 'Syria', 'And 50+ nations'],
    whatTheyDo:
      'VOM serves Christians in places where following Christ is dangerous: Bible and literature distribution into restricted nations, support for front-line workers, emergency aid to persecuted families, and mobilising prayer.',
    ein: '73-1395057',
    accreditations: [
      { label: 'ECFA member', sourceId: 'vom-site' },
      { label: 'International Christian Association affiliate', sourceId: 'vom-site' },
    ],
    verification: 'self-reported',
    ministryClaims: [],
    scores: {
      gospelCentrality: {
        value: 3,
        note: 'Serving the persecuted church for the sake of the gospel is the entire mandate.',
      },
      localLeadership: {
        value: 2,
        note:
          'Work is carried out by front-line believers inside each country. Unverifiable from outside, partly by design.',
      },
      financialTransparency: {
        value: 2,
        note: 'ECFA member with a public EIN, so the 990 is obtainable. Nothing linked from the site itself.',
      },
      outcomeEvidence: {
        value: 0,
        note:
          'No counts published on the site — not Bibles delivered, families supported, or workers funded.',
      },
      costEvidence: {
        value: 0,
        note: 'Neither a spending figure nor an outcome count is published, so nothing can be divided.',
      },
    },
    notVerified: [
      'Every outcome figure. Nothing countable is published on the site we read.',
      'Security is a real reason to withhold detail about hostile countries. It is not a reason to withhold aggregate totals, and the difference between the two is the question to ask VOM directly.',
      'We have not pulled the Form 990 for EIN 73-1395057. That would give spending; the denominator would still be missing.',
    ],
    notes: [
      'Founded in 1967 by Richard and Sabina Wurmbrand, who were imprisoned in Romania.',
      'Listed here because the need is real and the ministry is long-established — not because the numbers check out. They currently cannot be checked.',
    ],
    siteUrl: 'https://www.persecution.com/',
    giveUrl: 'https://www.persecution.com/donate/',
    sources: [
      {
        id: 'vom-site',
        label: 'Homepage',
        url: 'https://www.persecution.com/',
        publisher: 'The Voice of the Martyrs',
        documentType: 'ministry-website',
        retrieved: '2026-09-18',
      },
    ],
  },

  {
    slug: 'christian-aid-mission',
    name: 'Christian Aid Mission',
    tagline: 'Funds indigenous ministries in their own countries instead of sending missionaries.',
    category: 'church-planting',
    countries: [
      'Africa',
      'East Asia',
      'Eurasia',
      'Europe',
      'Latin America',
      'Middle East & North Africa',
      'South Asia',
      'Southeast Asia',
    ],
    whatTheyDo:
      'Christian Aid Mission finds established indigenous ministries in unreached regions and channels support to them — the premise being that local believers already speak the language, carry no visa risk and cost far less to keep in the field than sent workers.',
    accreditations: [
      { label: 'ECFA member', sourceId: 'cam-site' },
      { label: 'Candid seal 2026', sourceId: 'cam-site' },
    ],
    verification: 'self-reported',
    ministryClaims: [],
    scores: {
      gospelCentrality: { value: 3, note: 'Evangelism and church planting among unreached peoples is the stated purpose.' },
      localLeadership: {
        value: 3,
        note: 'The entire model is funding nationals. Structurally the strongest score in the directory on this dimension.',
      },
      financialTransparency: {
        value: 2,
        note: 'ECFA and Candid seals displayed; no statements, ratios or figures on the pages we read.',
      },
      outcomeEvidence: { value: 0, note: 'No counts of ministries supported, workers funded or churches planted published on the site.' },
      costEvidence: { value: 0, note: 'Nothing to divide.' },
    },
    notVerified: [
      'All of it, numerically. The site states a commitment to integrity and efficiency without publishing a single figure.',
      'Recipient ministries are often unnamed for security, so a donor cannot trace a gift to a specific work. Ask what reporting a donor actually receives.',
      'This is the model Gospel for Asia also claimed, and that ministry settled a $37 million US class action over misdirected funds. The model is sound; it also has the weakest natural feedback loop of any in this directory, which raises the bar on the diligence.',
    ],
    siteUrl: 'https://www.christianaid.org/',
    giveUrl: 'https://www.christianaid.org/donate/',
    sources: [
      {
        id: 'cam-site',
        label: 'Homepage',
        url: 'https://www.christianaid.org/',
        publisher: 'Christian Aid Mission',
        documentType: 'ministry-website',
        retrieved: '2026-09-18',
      },
    ],
  },

  {
    slug: 'jesus-film-project',
    name: 'Jesus Film Project',
    tagline: 'Gospel film and video in thousands of languages, distributed by local partners.',
    category: 'media',
    countries: ['Global'],
    whatTheyDo:
      'A ministry of Cru that produces and translates film and short-form video about Jesus, and puts it in the hands of local churches and field teams to show in person and online.',
    ein: '95-6006173',
    accreditations: [
      { label: 'Abides by ECFA standards; Cru is a charter member', sourceId: 'jf-site' },
      { label: 'Excellence in Giving — 175 operating data points submitted', sourceId: 'jf-site' },
    ],
    verification: 'self-reported',
    ministryClaims: [
      {
        quote: '78.1% of your donation goes toward advancing the Gospel worldwide',
        sourceId: 'jf-site',
      },
    ],
    scores: {
      gospelCentrality: { value: 3, note: 'The gospel is the product.' },
      localLeadership: {
        value: 2,
        note: 'Distribution runs through national partners and field teams; production and strategy are US-based.',
      },
      financialTransparency: {
        value: 2,
        note: 'Program-spending ratio and tax ID disclosed, ECFA standards claimed, annual report offered. No figures on the page itself.',
      },
      outcomeEvidence: {
        value: 0,
        note:
          'The giving page states a faith goal of 3 billion people reached. A goal is not a result, and no current reach figure appears.',
      },
      costEvidence: { value: 0, note: 'No outcome count to divide spending by.' },
    },
    notVerified: [
      'Any current figure for people reached, films shown, or decisions recorded — the numbers this ministry is best known for are not on the page we read.',
      'What "advancing the Gospel worldwide" includes in the 78.1%.',
      'Views are the easiest number in Christian ministry to inflate and the hardest to connect to a disciple. Any cost-per-view figure here would need a definition before it meant anything.',
    ],
    siteUrl: 'https://www.jesusfilm.org/',
    giveUrl: 'https://www.jesusfilm.org/give/',
    sources: [
      {
        id: 'jf-site',
        label: 'Giving page',
        url: 'https://www.jesusfilm.org/give/',
        publisher: 'Jesus Film Project, a ministry of Cru',
        documentType: 'ministry-website',
        retrieved: '2026-09-18',
      },
    ],
  },

  {
    slug: 'the-timothy-initiative',
    name: 'The Timothy Initiative',
    tagline: 'Trains local disciple-makers to plant churches that plant churches.',
    category: 'church-planting',
    countries: ['Ethiopia', 'Kenya', 'Mexico', 'South Asia'],
    whatTheyDo:
      'TTI trains indigenous church planters in disciple-making, with the explicit aim of multiplying generations of churches rather than single plants — the site reports third-generation plants in Kenya and 21 planters graduating in Mexico.',
    accreditations: [],
    verification: 'self-reported',
    ministryClaims: [],
    scores: {
      gospelCentrality: { value: 3, note: 'Disciple-making and church planting are the whole programme.' },
      localLeadership: { value: 3, note: 'Planters are nationals trained in their own contexts; the multiplication model depends on it.' },
      financialTransparency: {
        value: 0,
        note:
          'No accreditation seal, financial statement, annual report or Form 990 link found on the site as of 18 September 2026. This is the gap to close first.',
      },
      outcomeEvidence: {
        value: 1,
        note:
          'Results are anecdotal — 70 baptisms in Ethiopia, 350+ widows reached, 300+ disciple makers in training — rather than annual totals with definitions.',
      },
      costEvidence: { value: 0, note: 'Neither spending nor annual outcome totals are published.' },
    },
    notVerified: [
      'Whether TTI is ECFA accredited or publishes audited financials anywhere. Nothing was findable on the site.',
      'Total churches planted and planters trained per year. The site reports stories, not totals.',
      'Church-planting counts are the easiest figures in missions to double-count across partner organisations. Any number here needs a definition of what counts as a church.',
    ],
    notes: [
      'Included as a research lead, not a recommendation. Cost per church planted is the single most useful number this directory could add, and TTI is the kind of ministry that would have it internally.',
    ],
    siteUrl: 'https://www.ttiglobal.org/',
    giveUrl: 'https://www.ttiglobal.org/give',
    sources: [
      {
        id: 'tti-site',
        label: 'Homepage',
        url: 'https://www.ttiglobal.org/',
        publisher: 'The Timothy Initiative',
        documentType: 'ministry-website',
        retrieved: '2026-09-18',
      },
    ],
  },
];

export function causeBySlug(slug: string): Cause {
  const cause = causes.find((c) => c.slug === slug);
  if (!cause) throw new Error(`No cause with slug "${slug}"`);
  return cause;
}
