import type { Cause } from '@/lib/types';

export const deafBibleSociety: Cause = {
  slug: 'deaf-bible-society',
  name: 'Deaf Bible Society',
  legalName: 'Deaf Bible Society, Inc.',
  ein: '47-4285852',
  tagline:
    'Of more than 350 sign languages, one has a full Bible. This ministry funds and hosts the rest.',
  category: 'translation',
  countries: ['Global'],
  whatTheyDo:
    'Deaf Bible Society brokers and accelerates sign language Bible translation rather than doing it directly: it recruits Deaf church and community leaders to form translation teams for their own sign language, supplies technology, training and quality assurance, and publishes the finished video Scripture free in the Deaf Bible app and on the web. Because the medium is video, a verse is published within minutes of approval instead of waiting for a whole book. It also runs Deaf Church Where, a directory of more than 1,300 Deaf-led and interpreted services.',
  accreditations: [
    { label: 'ECFA accredited', sourceId: 'dbs-financials' },
    {
      label: 'Excellence in Giving nonprofit profile published',
      sourceId: 'dbs-financials',
    },
  ],
  verification: 'documents-reviewed',
  biblicalAlignment: {
    mandate:
      'A sign language is a language, and Revelation’s promise is about languages. Faith comes from hearing, and for a Deaf person the word arrives through the eyes — so an audio Bible, a printed Bible and an interpreter who was never trained in theology all leave the same gap that Philip found in the chariot: the text is present and nobody can use it. Of more than 350 sign languages in the world, the ministry’s audit states that one has a full Bible.',
    scriptures: [
      {
        ref: 'Revelation 7:9',
        text: 'After this I looked, and behold, a great multitude that no one could number, from every nation, from all tribes and peoples and languages, standing before the throne and before the Lamb.',
      },
      {
        ref: 'Acts 8:30–31',
        text: 'So Philip ran to him and heard him reading Isaiah the prophet and asked, "Do you understand what you are reading?" And he said, "How can I, unless someone guides me?"',
      },
      {
        ref: 'Romans 10:17',
        text: 'So faith comes from hearing, and hearing through the word of Christ.',
      },
      {
        ref: 'Mark 7:37',
        text: 'And they were astonished beyond measure, saying, "He has done all things well. He even makes the deaf hear and the mute speak."',
      },
    ],
    doctrine: { label: 'Statement of faith published', sourceId: 'dbs-faith' },
    concerns: [
      'The published outcome unit is not a countable thing. The audit says that for the year ended 31 December 2024 the ministry "was able to accelerate 51 sign language Bible translation initiatives", and nothing defines what accelerating an initiative consists of. Two paragraphs earlier the same note says "More than 20 translation projects for differing sign language communities are in motions". We cannot reconcile 20 projects with 51 initiatives and neither number is explained.',
      'The impact page says "You can track progress using our project dashboard" and there is no dashboard, no link and no data anywhere on the page. A ministry that invites you to check its work should make that possible.',
      'The advertised $136 per verse comes from a chart in a fundraising document, not from the financial statements. The same chart shows "$300+" per verse for established projects, so the cheaper figure is specific to church-based projects using the ministry’s own framework, and the document does not say what either price includes.',
      'The newest audited statements and Form 990 on the site are for 2024. The case for support carries 2025 figures. A donor reading both is comparing an audited year to an unaudited one.',
    ],
  },
  roi: {
    levers: ['digital-distribution', 'local-workers', 'durable-asset', 'existing-network'],
    reason:
      'Video Scripture in a sign language is expensive to make once and free to copy forever, and because the ministry publishes verse by verse rather than book by book, a community starts using the translation years before it is finished. The translating is done by Deaf teams in their own sign language — the ministry’s stated position is that Deaf leaders are uniquely capable of it — and distribution rides an app and an existing directory of Deaf-led churches rather than a delivery operation. The caution on all of this: a sign language community is small, so the cost per person served will always be high compared with a spoken language, and that is the honest shape of the work rather than an argument against it.',
  },
  ministryClaims: [
    {
      quote:
        'For the year ended December 31, 2024, the Organization was able to accelerate 51 sign language Bible translation initiatives.',
      sourceId: 'dbs-audit-24',
    },
    {
      quote:
        'More than 20 translation projects for differing sign language communities are in motions to provide greater access to the Scriptures for an estimated 16 million people.',
      sourceId: 'dbs-audit-24',
    },
    {
      quote:
        'Opportunities span from $136 per verse to significant partnerships for entire chapters, books, and even more. This covers the specialized process of high-quality video production provided free in the Deaf Bible App.',
      sourceId: 'dbs-impact',
      impliedCostPerOutcome: 136,
      impliedOutcome: 'verse of sign language Scripture published',
    },
    {
      quote:
        'We are on the path to 153 sign languages having access to life-giving portions of Scripture by 2028.',
      sourceId: 'dbs-impact',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 3,
      note: 'A statement of faith is published and the audit’s own description of purpose is explicitly about the Great Commission and knowing Jesus Christ. Scripture translation is the entire activity.',
    },
    localLeadership: {
      value: 3,
      note: 'Deaf leaders form and run the translation teams for their own sign languages; the ministry’s stated role is bridging and quality assurance rather than translating. This is as close to the intended shape of local ownership as the category gets.',
    },
    financialTransparency: {
      value: 2,
      note: 'Audited statements and the full Form 990 for 2024 are posted on the site along with an Excellence in Giving profile, and ECFA accreditation is displayed. Marked down because 2024 is the newest audited year available, prior years are not posted alongside it, and the 990’s programme section carries no counts.',
    },
    outcomeEvidence: {
      value: 1,
      note: 'There is a single-year count in an audited document, which is more than many ministries manage. But the unit — initiatives accelerated — is undefined, it does not reconcile with the project count in the same note, the promised project dashboard does not exist, and the 2025 figures appear only in a fundraising PDF.',
    },
    costEvidence: {
      value: 1,
      note: 'A unit price is advertised — $136 per verse — with no denominator published anywhere to check it against, and it comes from a chart rather than a financial statement. The spending side is audited and the outcome side cannot carry a division.',
    },
  },
  notVerified: [
    'What "accelerate 51 sign language Bible translation initiatives" means. This is the only single-year outcome figure the ministry publishes and the unit is undefined, which is why there is no cost per outcome on this page.',
    'Why the same audit note says more than 20 projects are under way and 51 initiatives were accelerated in the same year. Nothing published reconciles the two.',
    'What the $136 per verse covers and excludes. The impact page says it covers "the specialized process of high-quality video production"; it does not say whether team training, quality assurance, technology or the app are inside that price. The same chart shows over $300 per verse for established projects without explaining the difference.',
    'How many verses were published in 2024 or 2025. Without that, the $136 claim cannot be checked against $4,969,097 of programme spending — and a verse count is the one number that would make this ministry’s work measurable.',
    'The 2025 figures in the case for support — 79 sign languages in the Deaf Bible, up from 34 in 2022 — are set as a chart image in a fundraising document with no audited year behind them.',
    'Whether the project dashboard the impact page refers a donor to exists. We could not find it.',
    'The estimate of 16 million people served by projects in motion. The audit gives no method.',
  ],
  notes: [
    'We built no cost per outcome here. Dividing audited 2024 programme spending of $4,969,097 by "51 initiatives accelerated" would put a price on a unit nobody has defined, and a donor would read it as the cost of a translation.',
    'For scale: audited 2024 programme services were $4,969,097 of $5,739,986 total expenses, or 87% — up from $4,163,564 of $5,086,472 in 2023, when programme was 82%.',
    'The Form 990 splits programme spending into Bridge-Broker at $3,378,986 and the Deaf Bible engagement platform at $1,093,201. Neither line carries an outcome count.',
    'The ministry is a member of the National Association of the Deaf and the Forum of Bible Agencies International, which is the sort of peer membership that does not verify outcomes but does indicate the work is recognised by others in the field.',
    'The Deaf Bible hosts the first full Bible in American Sign Language plus portions in dozens of other sign languages, including translations done by partner organisations rather than by Deaf Bible Society — so the platform count and the ministry’s own output are not the same thing.',
  ],
  siteUrl: 'https://deafbiblesociety.com/',
  giveUrl: 'https://giving.deafbiblesociety.com/donate/',
  sources: [
    {
      id: 'dbs-audit-24',
      label: 'Audited financial statements, year ended 31 December 2024',
      url: 'https://deafbiblesociety.com/wp-content/uploads/deaf-bible-society-2024-audited-financials.pdf',
      publisher: 'Deaf Bible Society',
      documentType: 'audited-financials',
      retrieved: '2026-09-18',
      fiscalYear: '2024',
      note: 'Programme services $4,969,097 of $5,739,986 total expenses, with 2023 comparatives. The notes carry the description of purpose, the 51-initiatives figure and the more-than-20-projects figure.',
    },
    {
      id: 'dbs-990-24',
      label: '2024 Form 990',
      url: 'https://deafbiblesociety.com/wp-content/uploads/deaf-bible-society-2024-form-990.pdf',
      publisher: 'Deaf Bible Society',
      documentType: 'form-990',
      retrieved: '2026-09-18',
      fiscalYear: '2024',
      note: 'Part III describes two programme lines by expense with no outcome counts.',
    },
    {
      id: 'dbs-case',
      label: 'Case for support',
      url: 'https://deafbiblesociety.com/wp-content/uploads/deaf-bible-society-case-for-support.pdf',
      publisher: 'Deaf Bible Society',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'A fundraising document. The 2025 figures on this page — 79 sign languages, the cost-per-verse range — are set as chart graphics rather than printed text, and no audited year stands behind them.',
    },
    {
      id: 'dbs-impact',
      label: 'Impact',
      url: 'https://deafbiblesociety.com/impact/',
      publisher: 'Deaf Bible Society',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Source of the $136-per-verse claim, the 153-languages-by-2028 goal, and the reference to a project dashboard we could not find.',
    },
    {
      id: 'dbs-financials',
      label: 'Financials',
      url: 'https://deafbiblesociety.com/financials/',
      publisher: 'Deaf Bible Society',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Links the 2024 audit and Form 990, displays the ECFA accredited seal, and links an Excellence in Giving profile. Tax ID 47-4285852.',
    },
    {
      id: 'dbs-faith',
      label: 'Statement of Faith',
      url: 'https://deafbiblesociety.com/statement-of-faith/',
      publisher: 'Deaf Bible Society',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
  ],
};
