import type { Cause } from '@/lib/types';

export const unfoldingWord: Cause = {
  slug: 'unfolding-word',
  name: 'unfoldingWord',
  ein: '14-1888977',
  tagline:
    'Publishes open-licensed translation resources so a local church can translate its own Bible without asking permission.',
  category: 'translation',
  countries: ['Global', 'Sudan'],
  whatTheyDo:
    'unfoldingWord does not translate Bibles. It builds and gives away the toolkit — unrestricted-licence source texts, translation notes, a lexicon, and Open Bible Stories, a set of fifty illustrated Bible narratives used both as a discipleship tool and as a translator’s primer — then trains national church networks to use it. Its "Strategic Language" work produces resources in major regional languages so that translators working into a minority language never have to route through English. Its stated goal is the church in every people group and the Bible in every language.',
  accreditations: [
    { label: 'ECFA member', sourceId: 'uw-about' },
    { label: 'GuideStar Platinum Seal of Transparency', sourceId: 'uw-about' },
  ],
  verification: 'documents-reviewed',
  biblicalAlignment: {
    mandate:
      'The Ethiopian could read the text and still could not use it, and what closed the gap was a guide. That is exactly what this ministry supplies: not the Scripture itself but the apparatus a local believer needs in order to render it faithfully into his own language. The licence is the theological point — a copyrighted translation resource means a church must ask a Western organisation for permission to handle the word of God in its own tongue.',
    scriptures: [
      {
        ref: 'Acts 8:30–31',
        text: 'So Philip ran to him and heard him reading Isaiah the prophet and asked, "Do you understand what you are reading?" And he said, "How can I, unless someone guides me?"',
      },
      {
        ref: 'Romans 10:14–15',
        text: 'And how are they to believe in him of whom they have never heard? And how are they to hear without someone preaching? And how are they to preach unless they are sent?',
      },
      {
        ref: '2 Timothy 2:2',
        text: 'And what you have heard from me in the presence of many witnesses entrust to faithful men, who will be able to teach others also.',
      },
    ],
    doctrine: { label: 'Statement of faith published', sourceId: 'uw-faith' },
    concerns: [
      'Every count in the annual report is cumulative since 2017. There is no single-year figure for anything, which is why this page has no cost per outcome.',
      'The report contradicts itself. The at-a-glance page says "453 | Total languages engaged" and "37 | New Testaments completed"; the global impact page nine pages later says "452 | Total language portfolio" and "38 | New Testament translations completed". Small discrepancies, but they are in the same document, about the same period, and nothing reconciles them.',
      '66% of programme spending — $4,936,104 of $7,428,124 — is professional services, meaning money paid to people who are not employees. The audit names none of them. For an organisation whose model is working through national partners this is the expected shape, and it is also the least verifiable one.',
      'The ministry reports that people are "meeting Christ, becoming disciples, and planting churches" in Sudan. We do not treat conversions or discipleship as countable outcomes and neither should a cost model.',
    ],
  },
  roi: {
    levers: ['digital-distribution', 'multiplication', 'local-workers', 'durable-asset'],
    reason:
      'This is the strongest digital-distribution case in the category and the reason is the licence, not the file size. An unrestricted licence means the thousandth church to translate from unfoldingWord’s resources costs the ministry nothing and needs no negotiation, and a Strategic Language resource set — a regional language toolkit — serves every minority language that borrows from it. Open Bible Stories has been translated into 197 languages, which is work unfoldingWord did not pay for. The trade-off is that the ministry then cannot count what it produced: it has no idea who used the toolkit or what came out.',
  },
  ministryClaims: [
    {
      quote:
        'Because of your generosity, unfoldingWord is making a global impact, equipping our field partners to reach 452 languages, including 2506 connected to least reached people groups!',
      sourceId: 'uw-ar-25',
    },
    {
      quote: '20,160 | Total training man-hours since 2017',
      sourceId: 'uw-ar-25',
    },
    {
      quote: '193 | Open Bible Stories translations completed',
      sourceId: 'uw-ar-25',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 3,
      note: 'A statement of faith is published, the stated vision is the church in every people group, and the product is Scripture and Scripture resources. The strategy documents are explicitly about establishing churches to full maturity in Christ.',
    },
    localLeadership: {
      value: 3,
      note: 'The entire model is designed so that the translating is done by the national church rather than by unfoldingWord — the open licence exists precisely to remove the Western gatekeeper. Two-thirds of programme spending goes to non-employees doing the work in place.',
    },
    financialTransparency: {
      value: 3,
      note: 'Audited statements and Form 990s for every year from 2019 through 2025 are posted on the ministry’s own site, alongside annual reports. ECFA member, GuideStar Platinum. The functional expense table is complete. Small organisation, full disclosure.',
    },
    outcomeEvidence: {
      value: 1,
      note: 'Counts are published in quantity but every one is cumulative since 2017, two pairs of them disagree with each other inside the same report, and the largest — 452 languages "reached" by field partners — describes what partners did, not what unfoldingWord delivered. No annual figure exists for anything.',
    },
    costEvidence: {
      value: 0,
      note: 'A finding, not an absence. The spending side is fully audited and the count side is entirely cumulative, so there is no year in which both halves of a division exist. unfoldingWord publishes no unit cost of any kind.',
    },
  },
  notVerified: [
    'Anything that happened in 2025 specifically. Every published count runs "Since 2017", so we cannot pair a year of spending with a year of output. This is the reason there is no cost per outcome on this page.',
    'Whether the total is 452 or 453 languages, and whether 37 or 38 New Testaments are complete. The 2025 annual report prints both pairs.',
    'What "languages engaged" and "total language portfolio" mean, and whether they mean the same thing. Neither term is defined, and the second is described as what "field partners" reach rather than what unfoldingWord produced.',
    'Who the field partners are. The audit records $4,936,104 of professional services inside programme spending and names no recipient; the annual report withholds partner names in several places for security, which is reasonable and still leaves the spending unattributable.',
    'How much of the 197-language Open Bible Stories total unfoldingWord itself produced, as against work others did with its open licence. The distinction is the whole ROI argument and the report does not draw it.',
    'Whether the English Book Package is finished. The report states 21,102 verses, or 67% of Scripture, with the remaining 10,000 verses set as a 2026 goal — so the core source resource was two-thirds complete at the end of the reported year.',
  ],
  notes: [
    'We deliberately built no cost per outcome here. Dividing 2025 programme spending of $7,428,124 by a count accumulated over nine years would produce a number that looks like a price and means nothing.',
    'For scale: audited 2025 expenses were $9,763,580, of which $7,428,124 was programme — 76%. Spending was essentially flat against 2024’s $9,818,631.',
    'The organisation is small relative to the others in this category. Wycliffe USA spends more on programmes in two weeks than unfoldingWord spends in a year, which is worth holding next to the fact that unfoldingWord’s output is a resource other people use for free.',
    'Sudan is the only country given a substantial narrative in the 2025 report; the ministry says its partners there are translating for Sudan’s unreached peoples "all without waiting for Westerners to help". It reports engagement in 50 countries without naming them.',
  ],
  siteUrl: 'https://unfoldingword.org/',
  giveUrl: 'https://unfoldingword.org/give/',
  sources: [
    {
      id: 'uw-audit-25',
      label: 'Audited financial statements, years ended 31 December 2025 and 2024',
      url: 'https://unfoldingword.org/wp-content/uploads/2026/04/FINAL-Financial-Statements-2025-Audit.pdf',
      publisher: 'unfoldingWord',
      documentType: 'audited-financials',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note: 'Programme activities $7,428,124 of $9,763,580 total expenses, with a functional expense table showing $4,936,104 of professional services inside programme.',
    },
    {
      id: 'uw-ar-25',
      label: '2025 Annual Report',
      url: 'https://unfoldingword.org/wp-content/uploads/2026/02/unfoldingWord_2025_AnnualReport.pdf',
      publisher: 'unfoldingWord',
      documentType: 'annual-report',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note: 'A 31 MB designed report. All counts are labelled "Since 2017". The at-a-glance pages and the global impact page give different totals for languages engaged and New Testaments completed; both sets are quoted on this page as published.',
    },
    {
      id: 'uw-990-25',
      label: '2025 Form 990',
      url: 'https://unfoldingword.org/wp-content/uploads/2026/04/2025-990-Return-Public.pdf',
      publisher: 'unfoldingWord',
      documentType: 'form-990',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
    },
    {
      id: 'uw-financials',
      label: 'Financial Information',
      url: 'https://unfoldingword.org/about/financial-information/',
      publisher: 'unfoldingWord',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Audited statements and Form 990s for every year from 2019 through 2025, plus annual reports.',
    },
    {
      id: 'uw-about',
      label: 'About unfoldingWord',
      url: 'https://www.unfoldingword.org/about',
      publisher: 'unfoldingWord',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'States ECFA membership, the GuideStar Platinum Seal and EIN 14-1888977.',
    },
    {
      id: 'uw-faith',
      label: 'Statement of Faith',
      url: 'https://www.unfoldingword.org/about/statement-of-faith',
      publisher: 'unfoldingWord',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
  ],
};
