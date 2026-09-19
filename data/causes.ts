import type { Cause } from '@/lib/types';

/**
 * The starter directory. Twelve entries, researched 2026-09-18 from public
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
    biblicalAlignment: {
      mandate:
        'Healing the sick was how Jesus made the kingdom visible, and he sent his disciples out to do the same. A child with an untreated clubfoot in Niger is precisely the person the gospel puts at the front of the queue.',
      scriptures: [
        {
          ref: 'Matthew 9:35',
          text:
            'And Jesus went throughout all the cities and villages, teaching in their synagogues and proclaiming the gospel of the kingdom and healing every disease and every affliction.',
        },
        {
          ref: 'Luke 14:13–14',
          text:
            'But when you give a feast, invite the poor, the crippled, the lame, the blind, and you will be blessed, because they cannot repay you.',
        },
        {
          ref: 'Matthew 25:40',
          text:
            'Truly, I say to you, as you did it to one of the least of these my brothers, you did it to me.',
        },
      ],
      doctrine: { label: '“We share Jesus” is one of five stated distinctives', sourceId: 'cure-site' },
      concerns: [
        'Medical mission carries a permanent risk that care becomes the price of a hearing. CURE treats children regardless of their family’s faith, which is the right answer, but we have not read a written policy on how chaplains handle consent.',
      ],
    },
    roi: {
      levers: ['local-cost-base', 'local-workers', 'durable-asset', 'multiplication'],
      reason:
        'The operations happen in eight low-income countries, in CURE’s own hospitals, increasingly by surgeons from those countries. About $1,900 covers a whole surgical episode — theatre, implant, ward stay, casting and rehabilitation — because every input except the imported hardware is priced locally. Training national surgeons is the part that compounds: the FY25 report follows an Ethiopian surgeon trained at CURE Kenya now leading Ethiopia’s first paediatric spine programme.',
    },
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
    biblicalAlignment: {
      mandate:
        'A cup of water given to the thirsty is the one act Jesus promises will not go unrewarded, and the one he names when he describes people meeting him without knowing it. Water is also the image he chose for himself, which is why this work sits so naturally alongside preaching.',
      scriptures: [
        {
          ref: 'Matthew 25:35',
          text: 'For I was hungry and you gave me food, I was thirsty and you gave me drink.',
        },
        {
          ref: 'Matthew 10:42',
          text:
            'And whoever gives one of these little ones even a cup of cold water because he is a disciple, truly, I say to you, he will by no means lose his reward.',
        },
        {
          ref: 'Isaiah 58:10–11',
          text:
            'If you pour yourself out for the hungry and satisfy the desire of the afflicted, then shall your light rise in the darkness… and you shall be like a spring of water, whose waters do not fail.',
        },
      ],
      concerns: [
        'Safe water is wanted by everyone, which makes it an easy vehicle for pressure. We have not read Water Mission’s policy on whether access is ever conditioned on attendance at anything.',
      ],
    },
    roi: {
      levers: ['durable-asset', 'local-cost-base', 'local-workers'],
      reason:
        'A treatment system is capital, not consumption. Once installed it keeps producing safe water for years, so the true cost per person falls the longer it runs — which is why the number that matters is not people reached this year but people with ongoing access. Water Mission reports both, separately, and the gap between them is large and honest: 1.75 million reached against 770,000 with ongoing access.',
    },
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
    biblicalAlignment: {
      mandate:
        'Scripture in a language someone actually reads is the instrument God says he uses. Paul’s argument is a chain of dependencies — no preacher, no hearing; no hearing, no faith — and a Bible in the hands of a believer who has never owned one closes a link in it.',
      scriptures: [
        {
          ref: 'Romans 10:14, 17',
          text:
            'How then will they call on him in whom they have not believed? And how are they to believe in him of whom they have never heard?… So faith comes from hearing, and hearing through the word of Christ.',
        },
        {
          ref: 'Isaiah 55:11',
          text:
            'So shall my word be that goes out from my mouth; it shall not return to me empty, but it shall accomplish that which I purpose.',
        },
        {
          ref: '2 Timothy 3:16–17',
          text:
            'All Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in righteousness.',
        },
      ],
      concerns: [
        'The $5-for-two-Bibles figure does not reconcile with the ministry’s own annual report — see the comparison below. A ministry that advertises a unit cost it cannot support from its financials is a ministry to ask questions of before giving at scale.',
        'A Bible placed is not a Bible read. “People engaged in God’s Word” is Bible League’s phrase and Bible League does not define it.',
      ],
    },
    roi: {
      levers: ['local-cost-base', 'existing-network', 'volunteer-leverage'],
      reason:
        'Printing, shipping and distribution all happen inside the receiving country, and the last mile runs through partner churches and trained volunteers who were already there. Paid coordination is small relative to the unpaid hours it puts to work, so the marginal cost of one more Scripture set is genuinely low — about $21 per Bible actually reported placed, on our arithmetic.',
    },
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
  },

  {
    slug: 'voice-of-the-martyrs',
    name: 'The Voice of the Martyrs',
    tagline: 'Bibles, aid and front-line worker support for Christians under persecution in 50+ nations.',
    category: 'persecuted-church',
    // Named examples only. VOM reports work in 50+ nations and does not list them.
    countries: ['Ethiopia', 'Iran', 'Nigeria', 'Syria'],
    whatTheyDo:
      'VOM serves Christians in places where following Christ is dangerous: Bible and literature distribution into restricted nations, support for front-line workers, emergency aid to persecuted families, and mobilising prayer.',
    ein: '73-1395057',
    accreditations: [
      { label: 'ECFA member', sourceId: 'vom-site' },
      { label: 'International Christian Association affiliate', sourceId: 'vom-site' },
    ],
    verification: 'self-reported',
    biblicalAlignment: {
      mandate:
        'Hebrews gives this one as a command, not a suggestion, and gives the reason: the imprisoned believer is not someone else’s problem but your own body. Supporting a widow in Nigeria whose husband was killed for his faith is the plainest reading of it.',
      scriptures: [
        {
          ref: 'Hebrews 13:3',
          text:
            'Remember those who are in prison, as though in prison with them, and those who are mistreated, since you also are in the body.',
        },
        {
          ref: '1 Corinthians 12:26',
          text:
            'If one member suffers, all suffer together; if one member is honored, all rejoice together.',
        },
        {
          ref: '2 Timothy 3:12',
          text:
            'Indeed, all who desire to live a godly life in Christ Jesus will be persecuted.',
        },
      ],
      concerns: [
        'Work in closed countries cannot be reported in detail without endangering people. That is a real constraint and not an excuse — but it means nothing here is checkable by us or by you, and the trust has to rest on the ministry’s reputation instead of its numbers.',
      ],
    },
    roi: {
      levers: ['local-workers', 'local-cost-base', 'existing-network'],
      reason:
        'Aid goes to believers already in place, through networks already built, in countries where a family’s monthly needs are a small fraction of the Western equivalent — Nigeria and Ethiopia sit near the bottom of the cost-base table below. The same structure that makes the money go far makes it impossible to audit: no cost per outcome is published, and we would be suspicious of one that was.',
    },
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
    biblicalAlignment: {
      mandate:
        'Jesus’ diagnosis of the problem is a shortage of workers, not a shortage of harvest, and his instruction is to pray for labourers to be sent into it. John commends supporting travelling workers so that the supporter becomes a fellow worker in the truth — the New Testament’s clearest warrant for funding someone else’s ministry rather than running your own.',
      scriptures: [
        {
          ref: 'Matthew 9:37–38',
          text:
            'The harvest is plentiful, but the laborers are few; therefore pray earnestly to the Lord of the harvest to send out laborers into his harvest.',
        },
        { ref: 'Luke 10:7', text: 'The laborer deserves his wages.' },
        {
          ref: '3 John 5–8',
          text:
            'Beloved, it is a faithful thing you do in all your efforts for these brothers… You will do well to send them on their way in a manner worthy of God… so that we may be fellow workers for the truth.',
        },
      ],
      concerns: [
        'Christian Aid Mission funds indigenous ministries it does not control and mostly does not name, for security reasons. The model’s strength — local autonomy — is also the reason a donor cannot inspect the work.',
        'We found no audited statements and no cost per worker on the site, so the efficiency argument here is structural rather than demonstrated.',
      ],
    },
    roi: {
      levers: ['local-workers', 'local-cost-base', 'multiplication'],
      reason:
        'This is the single largest structural multiplier in the directory, and the reason the whole “a dollar goes further” idea holds up. An indigenous missionary already speaks the language, already understands the culture, needs no visa, no relocation, no furlough and no home-country cost of living — and is paid against a local cost base that in South Asia and much of Africa is 30 to 150 times below the United States. A Western worker in the same field carries all of those costs and still has to learn the language. Nothing published lets us turn that into a per-worker figure.',
    },
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
    biblicalAlignment: {
      mandate:
        'The commission is to every nation, and at Pentecost each person heard in the language he was born speaking. A gospel film dubbed into two thousand languages is a modern attempt at the same thing: the message arriving in the hearer’s own tongue rather than in the missionary’s.',
      scriptures: [
        {
          ref: 'Matthew 28:19–20',
          text:
            'Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit.',
        },
        {
          ref: 'Acts 2:8',
          text: 'And how is it that we hear, each of us in his own native language?',
        },
        {
          ref: 'Romans 10:14',
          text: 'And how are they to hear without someone preaching?',
        },
      ],
      concerns: [
        'A view is not a hearing and a hearing is not a conversion. Media ministries count the cheapest thing to count, and the number that results is the easiest number in Christian philanthropy to inflate.',
        'The 78.1% figure is an allocation ratio — how much of a dollar goes to programmes rather than overhead. It is not a cost per person and should not be read as one.',
      ],
    },
    roi: {
      levers: ['digital-distribution', 'existing-network', 'local-cost-base'],
      reason:
        'The film is already shot and already translated. Each additional viewing costs almost nothing, so cost per person falls as reach grows — genuinely the cheapest distribution mechanism on this site. Showings run through churches and local teams that already exist. The efficiency is real; the temptation to describe an impression as an outcome is equally real.',
    },
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
    biblicalAlignment: {
      mandate:
        'Paul’s instruction to Timothy is four generations deep in a single sentence — Paul to Timothy to faithful men to others also. A ministry built on that verse is aiming at the thing the verse aims at: not more converts of its own, but more people who can teach.',
      scriptures: [
        {
          ref: '2 Timothy 2:2',
          text:
            'And what you have heard from me in the presence of many witnesses entrust to faithful men, who will be able to teach others also.',
        },
        {
          ref: 'Ephesians 4:11–12',
          text:
            'And he gave the apostles, the prophets, the evangelists, the shepherds and teachers, to equip the saints for the work of ministry, for building up the body of Christ.',
        },
        {
          ref: 'Matthew 28:19–20',
          text: 'Go therefore and make disciples of all nations… teaching them to observe all that I have commanded you.',
        },
      ],
      concerns: [
        'We could not find audited statements or a Form 990 anywhere on the site. Of everything in this directory, this is the one where we know the least about where the money goes.',
        'Multiplication claims compound, which means an unverified starting number compounds too. “Third-generation churches” is an impressive phrase and an unauditable one.',
      ],
    },
    roi: {
      levers: ['multiplication', 'local-workers', 'local-cost-base'],
      reason:
        'The argument is that training a local church planter who trains other church planters means later generations of churches cost nothing extra — the cost per eventual church falls with every generation. If the multiplication is real, this is the highest-leverage model on the site. Nothing TTI publishes lets anyone check the base rate, so treat the leverage as a claim about the design rather than a measured result.',
    },
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
  {
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
  },

  {
    slug: 'the500k',
    name: 'The 500K Project',
    legalName: '500k',
    ein: '83-1375770',
    tagline: 'Funds full-time South Asian evangelists at the wage a South Asian evangelist earns.',
    category: 'evangelism',
    countries: ['South Asia'],
    whatTheyDo:
      'The 500K Project raises support for national workers already living in the places they preach, sending the money through local partner organisations rather than employing anyone directly. The name is the goal: 500,000 full-time workers.',
    accreditations: [],
    verification: 'self-reported',
    biblicalAlignment: {
      mandate:
        'The harvest is plentiful and the labourers are few, and the instruction attached to that observation is to pray for labourers to be sent. This is a ministry whose entire function is paying for labourers — not buildings, not campaigns, not sent staff. The worker is the whole budget line.',
      scriptures: [
        {
          ref: 'Matthew 9:37–38',
          text:
            'The harvest is plentiful, but the labourers are few; therefore pray earnestly to the Lord of the harvest to send out labourers into his harvest.',
        },
        {
          ref: '2 Corinthians 8:13–14',
          text:
            'I do not mean that others should be eased and you burdened, but that there should be fairness. Your abundance at the present time should supply their need.',
        },
        {
          ref: '1 Corinthians 9:14',
          text:
            'In the same way, the Lord commanded that those who proclaim the gospel should get their living by the gospel.',
        },
      ],
      concerns: [
        'The website never mentions Jesus Christ by name. It talks about “workers”, “the gospel” and “unreached people” in the abstract. For a ministry whose only product is evangelism, that is a strange omission, and we do not know whether it is a deliberate security posture for workers in hostile places or something else.',
        'Nobody is named anywhere — not the founder, not a director, not a board member, not a single partner organisation. The founding story is about “a UK doctor” who visited South Asia in 2010.',
        'Sending money to unnamed partners in unnamed countries is exactly the structure that makes both security sense and abuse easy. We cannot tell which one this is from the outside.',
      ],
    },
    roi: {
      levers: ['local-workers', 'local-cost-base', 'existing-network'],
      reason:
        'A full-time worker who already lives in the village needs no visa, no flight, no relocation allowance and no expatriate salary — the support figure is a local wage, and the ministry claims it is $80 a month. Money moves through partner organisations that already exist, so there is no field office to fund. This is the cheapest unit of full-time gospel work we have found advertised anywhere. It is also entirely unaudited.',
    },
    ministryClaims: [
      {
        quote: 'Amazingly, the cost of sending a full-time worker is only $80 per month.',
        sourceId: '500k-site',
        impliedCostPerOutcome: 960,
        impliedOutcome: 'worker-year',
      },
      {
        quote:
          'This means that over 95% of the funds we raise makes it to our partners on the ground.',
        sourceId: '500k-site',
      },
    ],
    scores: {
      gospelCentrality: {
        value: 2,
        note:
          'Funding evangelists is as direct as gospel work gets, but the site never names Christ and publishes no statement of faith, so we are taking the category on trust.',
      },
      localLeadership: {
        value: 3,
        note: 'Every funded worker is a national, supported through a local partner organisation. The model has no expatriate layer at all.',
      },
      financialTransparency: {
        value: 1,
        note:
          'IRS filings are public through ProPublica, which is how we know the size of the ministry. Nothing is published on the site itself — no annual report, no audit, no accreditation, no named board.',
      },
      outcomeEvidence: {
        value: 0,
        note: 'No worker count, no country list, no annual totals of any kind are published.',
      },
      costEvidence: {
        value: 1,
        note: 'A unit cost is advertised with no denominator behind it. There is a price but no arithmetic.',
      },
    },
    notVerified: [
      'How many workers are actually supported. This is the number the whole model turns on and it is published nowhere.',
      'The 95% pass-through claim. Their IRS filings report totals, not a functional expense breakdown we could check it against.',
      'Which partner organisations receive the money, and whether those partners are audited.',
      'Whether $80 per month is a full living wage in the places workers serve, or a supplement to other income.',
      'Who runs the ministry. No officer, director or founder is named on the site.',
    ],
    notes: [
      'We deliberately did not build a cost per outcome here. Dividing their spending by a worker count derived from their own $80 claim would just hand their marketing number back to you as if we had checked it.',
      'For scale: IRS filings via ProPublica report 2023 revenue of $379,836 against $318,251 of expenses, up from $142,254 of revenue in 2020. If the $80 per month and 95% pass-through figures both hold, 2023 spending would fund roughly 315 worker-years. That is arithmetic on their marketing, not a verified figure.',
      'South Asia is the only place named, and it is a region rather than a country, so there is no national cost base to put on this page.',
    ],
    siteUrl: 'https://www.the500k.us/',
    giveUrl: 'https://www.the500k.us/#donate',
    sources: [
      {
        id: '500k-site',
        label: 'The 500K Project homepage',
        url: 'https://www.the500k.us/',
        publisher: 'The 500K Project',
        documentType: 'ministry-website',
        retrieved: '2026-09-18',
        note: 'A single-page site. Every claim quoted here, including the founding story, comes from it.',
      },
      {
        id: '500k-propublica',
        label: 'IRS filings for 500k, EIN 83-1375770',
        url: 'https://projects.propublica.org/nonprofits/organizations/831375770',
        publisher: 'ProPublica Nonprofit Explorer',
        documentType: 'third-party',
        retrieved: '2026-09-18',
        note:
          'Structured IRS data for tax years 2019–2023. ProPublica blocks automated PDF downloads, so we read the extracted figures rather than the returns themselves.',
      },
    ],
  },

  {
    slug: 'heart-for-africa',
    name: 'Heart for Africa',
    legalName: 'Heart for Africa, Inc.',
    ein: '36-4509500',
    tagline:
      'Raises abandoned children in Eswatini on a 2,500-acre farm that grows much of their food.',
    category: 'children',
    countries: ['Eswatini'],
    whatTheyDo:
      'Heart for Africa takes in children abandoned in Eswatini — most of them infants, many found by police or hospitals — and raises them at Project Canaan, a 2,500-acre property it owns and farms. The same budget runs children’s homes, a preschool, a primary and secondary school, a dairy, poultry houses, large-scale crop farming, job creation for Eswatini adults, and twice-monthly food distribution to surrounding communities. It was founded in 2006 by Ian and Janine Maxwell; the land was bought in 2009.',
    accreditations: [],
    verification: 'documents-reviewed',
    biblicalAlignment: {
      mandate:
        'Caring for an abandoned child is not a charitable option in Scripture, it is the test of whether religion is real. The same passages that command it name the practical form it takes: food for the hungry, a home for the solitary, and treating the least as though he were Christ himself. A farm that feeds the children it houses is that command taken literally.',
      scriptures: [
        {
          ref: 'James 1:27',
          text:
            'Religion that is pure and undefiled before God the Father is this: to visit orphans and widows in their affliction, and to keep oneself unstained from the world.',
        },
        {
          ref: 'Matthew 25:40',
          text:
            'Truly, I say to you, as you did it to one of the least of these my brothers, you did it to me.',
        },
        {
          ref: 'Isaiah 58:7',
          text:
            'Is it not to share your bread with the hungry and bring the homeless poor into your house; when you see the naked, to cover him, and not to hide yourself from your own flesh?',
        },
      ],
      concerns: [
        'The organisation describes itself as "faith-based humanitarian" and we found no statement of faith on the current site. Jesus is named once, in a core value: "We live out the call to be the hands and feet of Jesus." The programme pages are otherwise about hunger, farming and schooling. Ask what discipleship the children receive before assuming it.',
        'Residential care at scale is contested among Christians who do this work. Four hundred children raised in one place, permanently, is the model furthest from the family-based consensus — and the children here were abandoned as infants, which is the hardest case against that consensus. We have seen no published policy on reunification or adoption.',
        'A fifth of all spending, $1,223,345, goes to management and fundraising. That is not scandalous for an organisation running a farm and a school, but it is the highest support ratio of any cause here with audited figures.',
      ],
    },
    roi: {
      levers: ['local-cost-base', 'durable-asset', 'local-workers'],
      reason:
        'Eswatini’s income per person is about 24 times below the United States, so wages, food and construction are priced to that economy — and the audited statements are consolidated with the Eswatini entity, so that is where the money is actually spent rather than granted away and lost from view. The farm is the second lever: crops, dairy and poultry feed the children, and jewellery and farm sales brought in $846,213 of revenue in 2024, which is income the ministry does not have to raise again. The land was bought once, in 2009, and has been producing since.',
    },
    costModel: {
      outcome: 'year of care for a child',
      outcomePlural: 'years of care for children',
      spend: {
        amount: 4847584,
        basis: 'program-services',
        fiscalYear: '2024',
        sourceId: 'hfa-audit-24',
      },
      count: {
        amount: 434,
        label: 'children in care',
        fiscalYear: '2025',
        sourceId: 'hfa-canaan-update',
      },
      attribution: 'all-program-spend',
      caveat:
        'An upper bound, and a loose one. The same program budget runs a 2,500-acre farm, a dairy, poultry houses, a school, job creation for Eswatini adults and food distribution to surrounding communities — none of which is child care, and $399,338 of it is the direct cost of goods the ministry sells. The child count is from January 2025 and the spending is calendar 2024. Read this as the cost of running everything at Project Canaan divided by the children living there, which is what it is.',
      alternates: [
        {
          label: 'children enrolled when the Project Canaan school opened for 2025',
          count: 342,
          note:
            'The school is the largest single programme and this is its own count, but it excludes the babies and toddlers who are the most expensive children on the property.',
        },
      ],
    },
    ministryClaims: [
      {
        quote:
          'The majority of funds go directly toward program expenses that serve children and communities in Eswatini.',
        sourceId: 'hfa-faq',
      },
    ],
    scores: {
      gospelCentrality: {
        value: 1,
        note:
          'Jesus is named once on the site, in a core value about being his hands and feet, and the founders write openly as Christians. There is no statement of faith, no church partnership described, and no discipleship content in any programme description.',
      },
      localLeadership: {
        value: 1,
        note:
          'Founded and still led by the Maxwells, who relocated from Canada; the US office is in Georgia. The field operation is staffed by Eswatini nationals and the 2025 school year opened under a new Eswatini principal, but governance and fundraising sit in North America.',
      },
      financialTransparency: {
        value: 3,
        note:
          'The best in this directory. Audited consolidated statements for 2021 through 2024 and Form 990s for the same years are posted on the site, and the audit consolidates the Eswatini entity — so the numbers cover the place the work happens, not just the American fundraising shell. Functional expenses are broken out line by line.',
      },
      outcomeEvidence: {
        value: 2,
        note:
          'The children in care are counted precisely and the count moves as children arrive — 434 after five arrivals in January 2025 — and school enrolment is published at the start of each year. Food distribution is described by communities reached and miles driven rather than meals served, so the largest outreach programme has no countable unit.',
      },
      costEvidence: {
        value: 2,
        note:
          'Both halves of the division exist and both are sourced, one from an audit. Marked down because the numerator covers a farm and a business as well as the children, and the ministry publishes no per-child figure of its own to check ours against.',
      },
    },
    notVerified: [
      'The ministry publishes no cost per child anywhere. The figure here is ours: audited 2024 program services divided by the children in care in January 2025. Heart for Africa has not confirmed it and might reasonably object to it.',
      'Program services include $399,338 of direct cost of sales — the cost of producing the jewellery and farm goods the ministry sells. That is a business expense sitting inside the programme total we divided.',
      'The audit discloses that donor-restricted contributions are assessed 7% to 12% for management and general expenses, about $419,000 in 2024. A restricted gift is therefore not entirely restricted, and the site does not say so.',
      'Program spending rose 6.3% between 2023 and 2024 while fundraising costs rose 45.6%, from $293,303 to $426,999. The audit does not explain the jump.',
      'Nothing states how many children left care, aged out or were reunified in 2024, so the 434 is a snapshot rather than a flow. Cost per child-year assumes the population was roughly stable across the year.',
      'We could not verify the Charity Navigator, Candid or GreatNonprofits ratings that were previously displayed — they do not appear on the redesigned site — so no accreditation is listed here.',
    ],
    notes: [
      'The audit is consolidated across Heart for Africa, Inc. in the United States and HFA Eswatini, which was incorporated in 2004 and holds Eswatini tax-exempt status. That is unusual and it is the reason this cause scores where it does on transparency: most US charities of this size publish a return that stops at the border.',
      'A currency translation adjustment of $187,928 reduced net assets in 2024. Roughly three per cent of the year’s expense base moves with the lilangeni, which a donor in dollars is effectively carrying.',
      'Earned income is real here: jewellery and farm sales of $846,213, against total revenue of $7,518,149. About 11% of the budget does not come from donors.',
      'Net assets are $10,032,922, most of it land and buildings at Project Canaan. This is an asset-heavy ministry, which is a strength for durability and a constraint on flexibility.',
    ],
    siteUrl: 'https://heartforafrica.org/',
    giveUrl: 'https://heartforafrica.org/donation/',
    sources: [
      {
        id: 'hfa-site',
        label: 'Homepage',
        url: 'https://heartforafrica.org/',
        publisher: 'Heart for Africa',
        documentType: 'ministry-website',
        retrieved: '2026-09-18',
      },
      {
        id: 'hfa-who-we-are',
        label: 'Who We Are',
        url: 'https://heartforafrica.org/who-we-are/',
        publisher: 'Heart for Africa',
        documentType: 'ministry-website',
        retrieved: '2026-09-18',
      },
      {
        id: 'hfa-faq',
        label: 'FAQ',
        url: 'https://heartforafrica.org/faq/',
        publisher: 'Heart for Africa',
        documentType: 'ministry-website',
        retrieved: '2026-09-18',
      },
      {
        id: 'hfa-financials',
        label: 'Our Financials',
        url: 'https://heartforafrica.org/our-financials/',
        publisher: 'Heart for Africa',
        documentType: 'ministry-website',
        retrieved: '2026-09-18',
        note: 'Links audits and Form 990s for 2021 through 2024.',
      },
      {
        id: 'hfa-audit-24',
        label: '2024 audited consolidated financial statements',
        url: 'https://heartforafrica.org/wp-content/uploads/2025/10/Heart-for-Africa-Inc.-Financial-Statements-2024-FINAL.pdf',
        publisher: 'Heart for Africa',
        documentType: 'audited-financials',
        retrieved: '2026-09-18',
        fiscalYear: '2024',
        note:
          'Consolidated with HFA Eswatini. Program services $4,847,584 of $6,070,929 total expenses, with a line-by-line functional breakdown.',
      },
      {
        id: 'hfa-990-24',
        label: '2024 Form 990',
        url: 'https://heartforafrica.org/wp-content/uploads/2025/10/HFA-2024-990-Public.pdf',
        publisher: 'Heart for Africa',
        documentType: 'form-990',
        retrieved: '2026-09-18',
        fiscalYear: '2024',
      },
      {
        id: 'hfa-canaan-update',
        label: 'Project Canaan updates, end of 2024 to start of 2025',
        url: 'https://heartforafrica.org/blog/project-canaan-updates-from-the-end-of-2024-to-the-start-of-2025/',
        publisher: 'Heart for Africa',
        documentType: 'ministry-website',
        retrieved: '2026-09-18',
        note:
          'Source of both counts: "the number of children in our care reached 434" and "we are starting with 342 children" when the school opened on 22 January 2025.',
      },
    ],
  },

  {
    slug: 'pearl-house',
    name: 'The Pearl House',
    legalName: 'The Pearl House, Inc.',
    ein: '83-0390677',
    tagline: 'Homes, schooling and vocational training for at-risk girls in Winneba, Ghana.',
    category: 'children',
    countries: ['Ghana'],
    whatTheyDo:
      'The Pearl House takes girls out of situations where they were likely to be married off, trafficked or pulled out of school, and raises them in family-style homes in Winneba, Ghana. Around the residential care it runs Pearl House Academy for junior high, Pearl College for senior high — opened in 2025 — career centres teaching trades to women aged 16 to 21, and the Haven, a counselling and shelter complex that is the entry point for new arrivals. Founded in 2013 by Steve and Courtney Bullard with a Ghanaian board; day-to-day operations are run from Ghana.',
    accreditations: [],
    verification: 'documents-reviewed',
    biblicalAlignment: {
      mandate:
        'Scripture repeatedly puts the girl with no father and no money at the centre of what justice means, and it treats speaking for her as an obligation rather than a kindness. The specific danger here — a poor girl married off or sold because her family cannot keep her in school — is what "rescue the weak and the needy" meant in the first place.',
      scriptures: [
        {
          ref: 'Proverbs 31:8–9',
          text:
            'Open your mouth for the mute, for the rights of all who are destitute. Open your mouth, judge righteously, defend the rights of the poor and needy.',
        },
        {
          ref: 'Psalm 82:3–4',
          text:
            'Give justice to the weak and the fatherless; maintain the right of the afflicted and the destitute. Rescue the weak and the needy; deliver them from the hand of the wicked.',
        },
        {
          ref: 'Isaiah 1:17',
          text:
            'Learn to do good; seek justice, correct oppression; bring justice to the fatherless, plead the widow’s cause.',
        },
      ],
      concerns: [
        'Long-term residential care for children is contested in Christian development work, where the consensus favours keeping children with family wherever possible. The Pearl House is candid that it is raising girls to adulthood — through senior high and into university or a trade — which is a deliberate choice against that consensus rather than an oversight. We have found no written reunification or family-strengthening policy.',
        'The girls live where they are educated and counselled, with the same organisation providing all three. That concentration is efficient and it also means one organisation holds every relationship a girl has. No independent safeguarding audit is published.',
      ],
    },
    roi: {
      levers: ['local-cost-base', 'local-workers', 'existing-network'],
      reason:
        'Ghana’s income per person is about 34 times below the United States, and the work is staffed accordingly: the 2024 return reports 69 employees and four offices in Ghana, paid for out of a single $1,722,228 grant, against $164,090 of management cost and $44,429 of fundraising cost in the whole American entity. The three Ghanaian board members — a Baptist minister, a sitting member of parliament and a lawyer — are not decorative; they are how a residential programme for minors gets standing with Ghanaian social welfare. The school is the leverage: teachers already paid to teach the resident girls also teach 300-odd community students in the same classrooms.',
    },
    costModel: {
      outcome: 'year of care for a girl',
      outcomePlural: 'years of care for girls',
      spend: {
        amount: 2075442,
        basis: 'program-services',
        fiscalYear: '2024',
        sourceId: 'ph-990-24',
      },
      count: {
        amount: 77,
        label: 'Pearls in residential care',
        fiscalYear: '2025',
        sourceId: 'ph-annual-25',
      },
      attribution: 'all-program-spend',
      caveat:
        'A hard upper bound and nowhere near a price. Charging every program dollar to the 77 girls in residential care ignores the 385 students taught in the same schools, most of whom live at home — the alternate below shows what that assumption is worth. The numerator is also calendar 2024 while the count is from the 2025 annual report, and 2024 was the year Pearl College was built, so some of this spending bought a building that will serve girls for decades rather than a year of anyone’s care.',
      alternates: [
        {
          label: 'students taught at Pearl House Academy and Pearl College',
          count: 385,
          note:
            'The largest published count, and the same dollars divided by it land near the low end. Most of these students are not in residential care, so this understates what raising a Pearl costs as badly as the headline overstates it.',
        },
      ],
    },
    ministryClaims: [
      {
        quote: 'Program Services – 70%',
        sourceId: 'ph-financials',
      },
      {
        quote: 'One girl receives nutritious food, medical care, clothing and toiletries.',
        sourceId: 'ph-sponsor',
      },
    ],
    scores: {
      gospelCentrality: {
        value: 3,
        note:
          'Stated in the tax return itself, not just the marketing: "we empower our girls to discover their unique identity and purpose in Christ". The career centres are described as Christian vocational schools, the Ghanaian board treasurer is an ordained Baptist minister, and the education pages talk about shaping Christ-centred young people. Unambiguous.',
      },
      localLeadership: {
        value: 2,
        note:
          'Sixty-nine of the staff are in Ghana, operations are run by a Ghanaian CEO of International Operations, and the Ghana board — a minister, an MP and a lawyer — has been in place since 2013. Founders and fundraising remain American, and the US officers are the paid ones.',
      },
      financialTransparency: {
        value: 3,
        note:
          'The full 2024 Form 990 is posted on the site, including Schedule F, and the functional expense breakdown reconciles to the penny. Held back only by an "independent financial review" rather than a full audit, and by no accreditation such as ECFA.',
      },
      outcomeEvidence: {
        value: 2,
        note:
          'The 2025 annual report counts staff, Pearls in care, academy students, college students and community-sponsored students separately, which is more granular than most ministries manage. All of it is printed inside images with no text layer, and the report contains no financial statements at all.',
      },
      costEvidence: {
        value: 2,
        note:
          'Spending is split three ways in the return and counts are published, so the division is possible. Marked down because the two come from different years and different documents, and because the ministry publishes no per-girl cost to check against.',
      },
    },
    notVerified: [
      'The ministry’s own financials page says program services are 70% of spending and administration 20%. Its 2024 Form 990 reports program services at $2,075,442 of $2,283,961, which is 90.9%, with administration at 7.2%. A ministry understating its own program share is not a problem for a donor, but one of the two numbers is wrong and we do not know which is current.',
      'Pearl House describes an annual "independent financial review" rather than an audit, and publishes no reviewed statements — only the tax return. A review is a materially weaker assurance than an audit.',
      'Schedule F reports the entire $1,722,228 sent to Ghana as one grant to one organisation whose name is left blank on the public copy, and records zero recipients recognised as a charity by the foreign country or covered by an equivalency letter. The recipient is presumably Pearl House Ghana. Nothing published shows how that money was spent once it arrived.',
      'The 2024 return books the whole Ghana grant under residential care, so the $134,666 shown for the Academy and $117,832 for the career centres are US-side costs only. The real cost of the schools is inside the Ghana grant and is not broken out anywhere.',
      '2024 was the year Pearl College was built, and construction appears to sit inside the Ghana grant as an expense rather than an asset — total assets are only $876,059. That makes 2024 program spending unusually high, and a per-girl figure from it higher than a normal year.',
      'Every headline count in the 2025 annual report is rendered as an image. We read them off the page visually rather than from text, and they are the 2025 report against 2024 money.',
      'The sponsorship tiers are partial by design: $150 a month buys "nutritious food, medical care, clothing and toiletries", not housing, staff, schooling or counselling. They are not comparable to a full cost per girl and we have not treated them as one.',
    ],
    notes: [
      'Sponsorship is published as six monthly tiers — $150 for a Pearl, $100 for a university student, $75 for education, $60 for a career-centre student, $40 for a classroom, $30 for a community student — each with a written list of what it covers. That itemisation is rarer than it should be.',
      'Reported for 2025: 77 Pearls in care, 379 academy students, 6 at Pearl College, 26 community-sponsored students, and 91 staff across the branches — 23 in residential care, 45 at the academy, 11 at the college, 6 at the Haven and 6 at the career centres.',
      'Fundraising cost $44,429 against $2,313,942 of revenue in 2024, under two per cent. Most of the events revenue is raised by volunteers.',
      'Pearl College opened in 2025, which means the first cohort of girls raised here can now finish senior high inside the programme instead of leaving it at fourteen.',
    ],
    siteUrl: 'https://pearlhouse.org/',
    giveUrl: 'https://pearlhouse.org/donate',
    sources: [
      {
        id: 'ph-site',
        label: 'Homepage',
        url: 'https://pearlhouse.org/',
        publisher: 'The Pearl House',
        documentType: 'ministry-website',
        retrieved: '2026-09-18',
      },
      {
        id: 'ph-financials',
        label: 'Stewardship & Integrity',
        url: 'https://pearlhouse.org/financials',
        publisher: 'The Pearl House',
        documentType: 'ministry-website',
        retrieved: '2026-09-18',
        note: 'Where the 70/20/10 split and the 2024 Form 990 are published.',
      },
      {
        id: 'ph-sponsor',
        label: 'Sponsor a Pearl',
        url: 'https://pearlhouse.org/sponsor',
        publisher: 'The Pearl House',
        documentType: 'ministry-website',
        retrieved: '2026-09-18',
        note: 'Six monthly tiers, each with a written list of what it covers.',
      },
      {
        id: 'ph-990-24',
        label: '2024 Form 990',
        url: 'https://pearlhouse.org/s/2024-990-Client-Copy-Return-for-44897-11-07-2025.pdf',
        publisher: 'The Pearl House',
        documentType: 'form-990',
        retrieved: '2026-09-18',
        fiscalYear: '2024',
        note:
          'Part IX: program services $2,075,442, management $164,090, fundraising $44,429, total $2,283,961. Schedule F reports one $1,722,228 grant to Ghana, 4 offices and 69 staff.',
      },
      {
        id: 'ph-annual-25',
        label: '2025 annual report',
        url: 'https://pearlhouse.org/s/Pearl-House-2025-Annual-Report-for-Web.pdf',
        publisher: 'The Pearl House',
        documentType: 'annual-report',
        retrieved: '2026-09-18',
        fiscalYear: '2025',
        note:
          'Twenty-two pages with no financial statements and almost no text layer. Counts were read off the page images.',
      },
      {
        id: 'ph-propublica',
        label: 'IRS filings for The Pearl House Inc, EIN 83-0390677',
        url: 'https://projects.propublica.org/nonprofits/organizations/830390677',
        publisher: 'ProPublica Nonprofit Explorer',
        documentType: 'third-party',
        retrieved: '2026-09-18',
        note: 'Used to confirm the 2024 totals against the copy of the return posted by the ministry.',
      },
    ],
  },
];

export function causeBySlug(slug: string): Cause {
  const cause = causes.find((c) => c.slug === slug);
  if (!cause) throw new Error(`No cause with slug "${slug}"`);
  return cause;
}
