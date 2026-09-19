import type { Cause } from '@/lib/types';

export const jesusFilmProject: Cause = {
  slug: 'jesus-film-project',
  name: 'Jesus Film Project',
  tagline:
    'Gospel film and video in thousands of languages, distributed by local partners. Its studios finished 99 new translations in 2025.',
  category: 'media',
  countries: ['Global'],
  whatTheyDo:
    'A ministry of Cru that produces and translates film and short-form video about Jesus, and puts it in the hands of local churches and field teams to show in person and online. Seven titles are in circulation — the classic "JESUS", "Magdalena", "The Story of Jesus for Children", a set of short films, "Walking With Jesus", "Following JESUS" and "Rivka" — and the recording work is done by an in-house area called Language Studios. It spent $77,797,000 in the year to 31 August 2025, of which $60,759,000 was field strategies, and it reports serving more than 1,800 ministry partners who do most of the actual showing.',
  ein: '95-6006173',
  accreditations: [
    {
      label: 'Abides by ECFA standards; Cru is a charter member',
      sourceId: 'jf-site',
    },
    {
      label: 'Excellence in Giving — 175 operating data points submitted',
      sourceId: 'jf-site',
    },
  ],
  verification: 'documents-reviewed',
  biblicalAlignment: {
    mandate:
      'The commission is to every nation, and at Pentecost each person heard in the language he was born speaking. A gospel film dubbed into two thousand languages is a modern attempt at the same thing: the message arriving in the hearer’s own tongue rather than in the missionary’s.',
    scriptures: [
      {
        ref: 'Matthew 28:19–20',
        text: 'Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit.',
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
      'The headline figures are modelled, and the ministry says so in a document almost nobody will open. Its own methodology paper commits it to "use the best possible statistical models", describes "Sharper Estimates" for "areas where direct counts aren\'t yet possible", and sets the scope of impact reporting as the whole partner network rather than the ministry’s own activity. The 734,921,433 viewings and 14,602,853 indicated decisions are footnoted as including "conservative estimates for TV, radio and internet" and "multiple exposures per viewer". That is honest disclosure buried under an unqualified number.',
      'The 78.1% figure is an allocation ratio — how much of a dollar goes to programmes rather than overhead. It is not a cost per person and should not be read as one.',
      'The ministry’s own statement of activities is not an audit. Jesus Film Project publishes a Statement of Activities inside its annual report and says plainly that it excludes depreciable assets, that it holds about $5 million of film-related intellectual property, and that "An audited annual report for Campus Crusade for Christ is available upon request." The audited entity is Cru; the document a donor can read for this ministry is prepared in-house.',
      'Two of the ministry’s own 2025 documents disagree about the same count. The statistics narrative says "JESUS" is "now available for use in 2,269 different languages"; the panel below it says 2,268 at the end of 2025. A one-language gap is trivial in itself and tells a reader how tightly these figures are controlled.',
    ],
  },
  roi: {
    levers: ['digital-distribution', 'existing-network', 'local-cost-base'],
    reason:
      'The film is already shot and already translated. Each additional viewing costs almost nothing, so cost per person falls as reach grows — genuinely the cheapest distribution mechanism on this site. Showings run through churches and local teams that already exist, and more than 1,800 partner ministries do the showing rather than the ministry itself. The one part that is not cheap is the part we price here: a new language has to be cast, recorded, mixed and checked once, and until that is done the marginal cost of a viewing in that language is not low, it is infinite. The efficiency is real; the temptation to describe an impression as an outcome is equally real.',
  },
  costModel: {
    outcome: 'film translated into one new language',
    outcomePlural: 'films translated into new languages',
    spend: {
      amount: 4553000,
      basis: 'program-services',
      fiscalYear: '2025',
      sourceId: 'jf-annual-25',
    },
    count: {
      amount: 99,
      label: 'translations of Jesus Film Project media completed',
      fiscalYear: '2025',
      sourceId: 'jf-highlights-25',
    },
    attribution: 'single-program-line',
    caveat:
      'Both halves cover the same twelve months and come from documents the ministry published four months apart. The numerator is the one program line whose own definition is this activity: "Language Studios is an area that creates new languages for all media and curates that media for use by the ministry", $4,553,000 of $77,797,000 of total expenses for the year ended 31 August 2025. The denominator is the ministry’s own annual table of translations completed in 2025 — 69 of "JESUS", 10 of "Magdalena", one of "The Story of Jesus for Children", 11 short films, seven of "Walking With Jesus", none of "Following JESUS" and one of "Rivka". It cross-checks: the 2024 document reports 2,199 languages for "JESUS" cumulatively, and 2,199 plus 69 is the 2,268 the 2025 document prints. Four things keep $45,990 an estimate rather than a price. Language Studios also curates existing media, so some of the line bought something other than a new translation and nothing says how much. A translation is not one size — a two-hour feature and a short film are each one row in the table, and charging them equally is our simplification, not the ministry’s. The recording is done with field teams and partner ministries whose costs sit in other lines or outside the ministry entirely, so the full cost of getting a film into a language is higher than this and is not published. And the statement of activities is prepared in-house, not audited. We do not divide by the number the ministry leads with: 734,921,433 viewings, 341.7 million reached through broadcasts and 14,602,853 indicated decisions are audience and response estimates for a network of 1,800 partners, footnoted as including "conservative estimates for TV, radio and internet" and "multiple exposures per viewer". They are not units this budget delivered, and pricing them would be the exact error this directory exists to avoid.',
    alternates: [
      {
        label:
          'the 2,268 languages "JESUS" is available in, against the same Language Studios line',
        count: 2268,
        spend: 4553000,
        note: 'About $2,007, and a demonstration of the error rather than a defensible figure: one year of studio spending against 46 years of translation work since 1979. It is the cumulative number the report headlines.',
      },
      {
        label: '14,602,853 indicated decisions, against all $77,797,000 of expenses',
        count: 14602853,
        spend: 77797000,
        note: 'About $5.33. The ministry’s second headline, and barred as a primary denominator: a decision is reported by a partner, is footnoted as partly estimated, and is not something a budget delivers. We are showing it so the range is visible, not because it can be priced.',
      },
      {
        label: '734,921,433 viewings, against all $77,797,000 of expenses',
        count: 734921433,
        spend: 77797000,
        note: 'About $0.11. The ministry’s own footnote says this figure "Includes multiple exposures per viewer" and rests on conservative estimates for TV, radio and internet, so it is neither a count of people nor a count of anything the ministry did. A figure like this would head the media row on the front page and would mean nothing.',
      },
    ],
  },
  ministryClaims: [
    {
      quote: '78.1% of your donation goes toward advancing the Gospel worldwide',
      sourceId: 'jf-site',
    },
    {
      quote:
        'Language Studios is an area that creates new languages for all media and curates that media for use by the ministry.',
      sourceId: 'jf-annual-25',
    },
    {
      quote:
        'By the end of 2025, “JESUS” became available in 2,268 languages and dialects. The 727th Mission 865 language was completed, for people groups with 50,000 or more language speakers.',
      sourceId: 'jf-highlights-25',
    },
    {
      quote:
        'Statistics are for 2025 and are based on reports received. They include conservative estimates for TV, radio and internet.',
      sourceId: 'jf-highlights-25',
    },
    {
      quote:
        'In 2025, Christ showed up in a big way, and over 12.2 million people found new life in Him!',
      sourceId: 'jf-annual-25',
    },
    {
      quote:
        'Our commitment is to prioritize verified, real-world data and use the best possible statistical models in our reporting.',
      sourceId: 'jf-method',
    },
    {
      quote:
        "Leverage field data and trusted external sources make our projections more accurate for areas where direct counts aren't yet possible.",
      sourceId: 'jf-method',
    },
  ],
  scores: {
    gospelCentrality: { value: 3, note: 'The gospel is the product.' },
    localLeadership: {
      value: 2,
      note: 'Distribution runs through more than 1,800 partner ministries, national field teams and regional leaders who are named in the annual report by region rather than by country; production, studio work and strategy are US-based, run from Orlando.',
    },
    financialTransparency: {
      value: 2,
      note: 'A full statement of activities is published in the annual report, split into eight field-strategy lines plus development and administration, with the prior year alongside — which is better line-level disclosure than most of this sector offers. Held at 2 because it is prepared in-house rather than audited, because the audited entity is Cru and its report is "available upon request" rather than posted, and because the EIN on the giving page is Cru’s, so there is no Form 990 for this ministry alone.',
    },
    outcomeEvidence: {
      value: 2,
      note: 'One published count is genuinely annual, medium-by-medium and checkable against the prior year: translations completed in 2025. Everything else — viewings, indicated decisions, broadcast reach, online views — is a partner-network estimate the ministry itself footnotes as modelled. A 2 rather than a 3 because the good count is one row of one table, and because the 2024 edition of the same table was published on a cumulative basis with reach statistics labelled for 2023, so the series cannot be read straight through.',
    },
    costEvidence: {
      value: 2,
      note: 'Both halves exist for the same twelve months, and the spending line’s own one-sentence definition is the activity being counted, which is as clean a pairing as this sector produces. Short of a 3 because the numerator is unaudited and also covers curation of existing media, and because a translation is not a fixed unit of work.',
    },
  },
  notVerified: [
    'What one translation involves, and therefore whether $45,990 is a lot. A translation on this table can be a two-hour feature or a short film; nothing published breaks the Language Studios line down by title, by length, or between recording, mixing and rights. The ministry’s own gift catalogue prices a video tablet at $610, a film team for a month at $1,250 and a church-planting backpack kit at $3,270 — and lists "JESUS" Film Translations with no price at all. The one item a donor would most want costed is the one item left uncosted.',
    'How much of the recording cost is borne by someone else. The ministry says Language Studios "creates new languages", but casting, voice talent and local checking happen with field teams and partner ministries whose costs sit in other lines or outside the ministry. The full cost of putting a film into a language is higher than this figure and is not published anywhere.',
    'What "advancing the Gospel worldwide" includes in the 78.1%. The annual report shows $60,759,000 of Global Field Strategies against $77,797,000 of total expenses, which is 78.1% — so the ratio is the field-strategies share, and it includes $3,114,000 of Cru infrastructure and $3,355,000 of program support that most donors would read as overhead.',
    'Whether the reach figures describe 2025. The 2025 statistics block is footnoted "Statistics are for 2025"; the 2024 edition of the same block is footnoted "Statistics are for 2023". Two consecutive documents, one of them reporting figures two years old under a current-year heading, and no explanation of the change.',
    'Whether "JESUS" is in 2,268 languages or 2,269. Both numbers appear on the same page of the same document.',
    'Who checked any of it. There is no external audit of the outcome counts. The methodology paper names the World Christian Database as a consulted source and says key elements of the model were "developed and audited by Masterworks for Jesus Film Project in 2017" — an audit of a method, nine years ago, by a marketing agency the ministry engaged.',
    'Views are the easiest number in Christian ministry to inflate and the hardest to connect to a disciple. Any cost-per-view figure here would need a definition before it meant anything, and the ministry’s own footnote says its view count includes multiple exposures per viewer.',
  ],
  notes: [
    'For scale, from the statement of activities for the year ended 31 August 2025 (in thousands): revenue $96,037, of which contributions $72,021 and missionary staff support $23,887. Expenses $77,797, of which Global Field Strategies $60,759 — Digital Strategies $11,060, Partner Engagement $6,576, Language Studios $4,553, Global Equipment and Distribution $5,924, Program Priorities $2,290, Staff Priorities $23,887, Global Support $3,114, Program Support $3,355 — plus development $10,994 and administration $6,044.',
    'Digital Strategies fell from $23,800,000 to $11,060,000 in one year while Global Equipment and Distribution doubled from $2,964,000 to $5,924,000. The report does not comment on either move, and together they are the largest change in the budget.',
    'Language Studios itself fell from $5,009,000 to $4,553,000. We have not tried to build a two-year cost per translation, because the 2024 highlights table is cumulative rather than annual and the two bases cannot be compared.',
    'The file the ministry names "FinancialHighlights" is the statistics and highlights document; the file it names "Year in Review" is the one containing the financial statement. A reader hunting for the money should open the second.',
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
    {
      id: 'jf-annual-25',
      label: 'When Christ Steps In — Annual Report: Jesus Speaking in 2025',
      url: 'https://www.jesusfilm.org/wp-content/uploads/2026/06/Year-in-Review-2025-AR26-FINAL-copy.pdf',
      publisher: 'Jesus Film Project, a ministry of Cru',
      documentType: 'annual-report',
      retrieved: '2026-09-19',
      fiscalYear: '2025',
      note: 'Contains the Statement of Activities for the years ended 31 August 2025 and 2024, in thousands, and the paragraph defining each of the eight Global Field Strategies lines — including the sentence defining Language Studios that this page uses as its numerator. Also states that the statement excludes depreciable assets and that the audited report is Campus Crusade for Christ’s, available on request.',
    },
    {
      id: 'jf-highlights-25',
      label: '2025 Ministry Highlights',
      url: 'https://www.jesusfilm.org/wp-content/uploads/2026/03/JFP-2025-FinancialHighlights.pdf',
      publisher: 'Jesus Film Project, a ministry of Cru',
      documentType: 'annual-report',
      retrieved: '2026-09-19',
      fiscalYear: '2025',
      note: 'Source of the annual translations count. The table "Translations Completed of Jesus Film Project® Media" has a row labelled "In 2025:" giving 69, 10, 1, 11, 7, 0 and 1 across the seven titles, which sum to 99. The figures are set inside a graphic; we read them from the extracted text layer and re-checked them against the rendered page. Also the source of the 2,268 languages panel and of the statistics block and its footnotes.',
    },
    {
      id: 'jf-highlights-24',
      label: '2024 Ministry Highlights',
      url: 'https://www.jesusfilm.org/wp-content/uploads/2025/02/2024FinancialHighlights.pdf',
      publisher: 'Jesus Film Project, a ministry of Cru',
      documentType: 'annual-report',
      retrieved: '2026-09-19',
      fiscalYear: '2024',
      note: 'Read only to check the 2025 count. Its version of the same table is labelled "By the End of 2024" and gives 2,199 languages for "JESUS" — 2,199 plus the 69 completed in 2025 is the 2,268 the 2025 document reports. Its statistics block is footnoted "Statistics are for 2023".',
    },
    {
      id: 'jf-method',
      label: 'How Jesus Film Project Measures Ministry Impact, September 2026',
      url: 'https://www.jesusfilm.org/wp-content/uploads/2026/07/Jesus-Film-Project-Ministry-Impact-Reporting-Methodology.pdf',
      publisher: 'Jesus Film Project, a ministry of Cru',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: 'The document that establishes the reach and decision figures are modelled. Sets the reporting scope as all media, all platforms and the whole partner network; separates "Direct Measurement" from "Supporting Sources" and "Emerging Sources"; commits to statistical models and "Sharper Estimates" where direct counts are not possible; names the World Christian Database and a 2017 Masterworks methodology audit as its external references.',
    },
    {
      id: 'jf-measure',
      label: 'How We Measure Ministry Impact',
      url: 'https://www.jesusfilm.org/about/how-we-measure-ministry-impact/',
      publisher: 'Jesus Film Project, a ministry of Cru',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: 'The page that links the methodology paper. It is the only place the ministry tells a reader that its headline numbers include estimates.',
    },
    {
      id: 'jf-catalog',
      label: 'Jesus Film Project gift catalog',
      url: 'https://giftcatalog.jesusfilm.org/',
      publisher: 'Jesus Film Project, a ministry of Cru',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: 'Prices hardware and staff time to the dollar — video tablet and speaker kit $610 (item 1020707), film team for one month $1,250 (item 2788300), church-planting backpack kit $3,270 (item 0783849) — and offers "JESUS" Film Translations (item 2870345) with no cost shown.',
    },
    {
      id: 'jf-accountability',
      label: 'Financial Accountability',
      url: 'https://www.jesusfilm.org/give/accountability/',
      publisher: 'Jesus Film Project, a ministry of Cru',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: 'Where the annual report and ministry highlights documents are posted. No Form 990 or audited statement for Jesus Film Project alone is offered here, because the filing entity is Cru.',
    },
  ],
};
