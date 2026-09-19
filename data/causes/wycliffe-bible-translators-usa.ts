import type { Cause } from '@/lib/types';

export const wycliffeBibleTranslatorsUsa: Cause = {
  slug: 'wycliffe-bible-translators-usa',
  name: 'Wycliffe Bible Translators USA',
  legalName: 'Wycliffe Bible Translators, Inc.',
  tagline:
    'The largest Bible translation funder in the United States, now mostly granting money to local churches doing the work.',
  category: 'translation',
  countries: ['Global'],
  whatTheyDo:
    'Wycliffe USA funds and supports Bible translation worldwide. Historically it sent American linguists to live in a language community for decades; today it describes local churches as increasingly owning the translation of their own Scriptures, and 46% of its programme spending leaves as grants to translation projects. It still supports over 2,400 members who raise their own support, recruits and trains personnel, and is a member of the Wycliffe Global Alliance alongside more than 100 other national organisations. It founded Seed Company in 1993, which now files and is audited separately.',
  accreditations: [
    { label: 'ECFA accredited', sourceId: 'wyc-financials' },
    {
      label: 'Candid Platinum Seal of Transparency',
      sourceId: 'wyc-financials',
    },
  ],
  verification: 'documents-reviewed',
  biblicalAlignment: {
    mandate:
      'A translation is the rarest kind of missionary spending: work that finishes. Once the text exists in a language, every preacher, parent and new believer in that community has it without anyone paying again, which is what Isaiah’s promise assumes — the word goes out and does its own work. Wycliffe’s own audited statements name Revelation 7:9 as the goal in the chief financial officer’s management discussion, which is an unusually direct statement of purpose for a financial document.',
    scriptures: [
      {
        ref: 'Romans 10:14, 17',
        text: 'How then will they call on him in whom they have not believed? And how are they to believe in him of whom they have never heard?… So faith comes from hearing, and hearing through the word of Christ.',
      },
      {
        ref: 'Isaiah 55:11',
        text: 'So shall my word be that goes out from my mouth; it shall not return to me empty, but it shall accomplish that which I purpose.',
      },
      {
        ref: 'Revelation 7:9',
        text: 'After this I looked, and behold, a great multitude that no one could number, from every nation, from all tribes and peoples and languages, standing before the throne and before the Lamb.',
      },
    ],
    concerns: [
      'Wycliffe files no Form 990 with the IRS. The cover page of the form it posts states that the IRS "recognizes Wycliffe Bible Translators as a 501(c)(3) organization and a church" and that it is therefore "neither required to file Form 990 nor to disclose it". It completes and publishes the main form voluntarily — which is commendable — but the posted file stops at page 12 of the form. There is no Schedule F, no Schedule I and no Schedule O, so the public gets $95,943,000 of grants with no grantee, no region and no country.',
      'The audit states that Wycliffe USA "has formed several limited liability companies" for work in various countries and that "For security purposes, the names of the LLCs are not disclosed in these notes." The reason is plausible; the effect is that consolidated foreign operations are invisible.',
      'Wycliffe USA founded Seed Company in 1993, its CEO sits on Seed Company’s board, and both organisations grant large sums to translation projects in the same fiscal year. Neither audit discloses money moving between them. A donor giving to both cannot tell from published documents whether they are funding one project twice.',
      'FY2025 ran a $35 million decrease in net assets, which the CFO’s letter describes as "an intentional investment in accelerating Bible translation". That is a deliberate drawdown, not a shortfall — but it means this year’s spending is not this year’s income, and a cost per outcome built on it is not a sustainable run rate.',
    ],
  },
  roi: {
    levers: ['local-workers', 'durable-asset', 'multiplication', 'existing-network'],
    reason:
      'The structural change here is the interesting part. Wycliffe USA’s own audit says local churches are "increasingly taking ownership of translating Scripture for their own languages", that its missionary numbers have declined, and that grants to translation projects rose $32 million in one year. Money routed to a national translation team buys the same finished text at a local wage instead of an expatriate support package, and it arrives through the Wycliffe Global Alliance and SIL — networks that already exist in the countries concerned. The output is permanent. The limit is that the whole mechanism is invisible from outside: we can see the grants leave, and not where they land.',
  },
  costModel: {
    outcome: 'language engagement for a year',
    outcomePlural: 'language engagements for a year',
    spend: {
      amount: 207261000,
      basis: 'program-services',
      fiscalYear: 'FY2025',
      sourceId: 'wyc-fs-25',
    },
    count: {
      amount: 2918,
      label: 'total active language engagements',
      fiscalYear: 'FY2025',
      sourceId: 'wyc-fs-25',
    },
    attribution: 'all-program-spend',
    caveat:
      'An upper bound on a unit Wycliffe does not define. "Active language engagement" appears only in the CFO’s narrative, with no explanation of what makes an engagement active or how one is counted, and the 2,918 total includes projects at every stage from just-started to nearly finished. The numerator is all programme spending — grants, 2,400 members’ support, recruitment, training, and the whole Orlando operation — so it charges the cost of building a translation movement to the languages currently in it. It is not the cost of translating a language.',
    alternates: [
      {
        label: 'new languages engaged in FY2025 (772)',
        count: 772,
        note: 'About $268,500 per newly engaged language. Closer to the question a donor is asking — what does starting a language cost — and still wrong in the other direction, because it charges the year’s entire spend to the newest quarter of the portfolio.',
      },
    ],
  },
  ministryClaims: [
    {
      quote:
        'For the fiscal year ended September 30, 2025 (FY 2025), Wycliffe USA engaged 772 new languages in Bible translation, bringing total active engagements to 2,918 and representing approximately 1.9 billion people worldwide.',
      sourceId: 'wyc-fs-25',
    },
    {
      quote:
        'According to Progress.Bible, as of September 2025 only 561 languages remain without any access to Scripture.',
      sourceId: 'wyc-fs-25',
    },
    {
      quote:
        'Despite this growth, general and administrative expenses remained at 10% of total operating expenses, while fundraising expenses accounted for 7%.',
      sourceId: 'wyc-fs-25',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 3,
      note: 'Bible translation is the whole organisation, the IRS classifies it as a church, and the audited statements themselves quote Ephesians 3:20 and Revelation 7:9. There is nothing to infer.',
    },
    localLeadership: {
      value: 2,
      note: 'The audit is candid that local churches are taking ownership and that American missionary numbers have fallen, and 46% of programme spending now leaves as grants. Held at 2 rather than 3 because no grantee, partner or national leader is named anywhere in the published documents, so the shift is asserted rather than shown, and governance and half the programme budget remain in Orlando.',
    },
    financialTransparency: {
      value: 2,
      note: 'Consolidated audited statements back to FY2021 and a voluntarily completed Form 990 back to FY2022 are posted, with a full functional expense table and an entity-by-entity reconciliation — genuinely more than the law requires of a church. Marked down hard for what is missing: no schedules on the 990, so $95.9 million of grants has no grantee detail at all, and the consolidated LLCs are unnamed.',
    },
    outcomeEvidence: {
      value: 1,
      note: 'Two single-year counts are published, in the audit, which is better than a marketing page. But both are undefined terms, neither is broken down by country or stage, no completion count is published, and the Form 990’s programme accomplishments section contains no numbers whatsoever. Nobody outside Wycliffe has checked anything.',
    },
    costEvidence: {
      value: 2,
      note: 'Both halves come out of the same audited document, which is the strongest possible sourcing. Marked down because the denominator is undefined, the numerator includes a deliberate $35 million drawdown of reserves, and Wycliffe publishes no cost figure of its own.',
    },
  },
  notVerified: [
    'What "active language engagement" means, and therefore what the headline figure measures. It is the number the whole calculation turns on and it is defined nowhere.',
    'Engagements are not completions. 2,918 languages are engaged; nothing published says how many Scriptures were finished in FY2025, so no figure here is a cost per Bible or per New Testament.',
    'Who received $95,943,000 of grants. The posted Form 990 contains no Schedule F and no Schedule I, and IRS structured data holds no filings because Wycliffe is treated as a church and does not file. This is the single largest unverifiable item on the page.',
    'What the unnamed LLCs do and where. The audit consolidates them and withholds their names for security. We cannot tell what share of programme spending runs through them.',
    'A variance between the two documents. The voluntarily completed Form 990 reports total expenses of $243,340,775; the audit’s column for Wycliffe Bible Translators alone shows $243,890 thousand. Programme activities match to the dollar at $203,671,465, so the roughly $549,000 gap sits in supporting activities and is not explained.',
    'The 561-languages and 1.9-billion-people figures are Progress.Bible’s, cited by Wycliffe. We have not been to the source.',
    'Whether the FY2025 spending level continues. Expenses exceeded operating revenue by $35 million by design; the audit says $23 million of financial assets remain available for the next year of operations.',
  ],
  notes: [
    'This is by some distance the largest ministry in this directory: $248,929,000 of consolidated expenses in FY2025, of which $207,261,000 is programme.',
    'Grants are 46% of programme spending and compensation is 50%. Wycliffe USA is now roughly half a funder and half an employer of support-raising members, which is a very different organisation from the one that sent linguists to live in villages.',
    'The audited statements consolidate Wycliffe Bible Translators, the Wycliffe Bible Translation Foundation and several unnamed LLCs. The Form 990 covers only Wycliffe Bible Translators plus the Foundation, which is why its figures are smaller.',
    'The board has been preparing to sell the Orlando land and buildings since calendar 2024. The audit says no sale is expected to close during FY2026.',
    'The CFO’s letter states plainly that "Completing the task of making God’s Word available in every language will require a significant increase in funding in the years ahead."',
  ],
  siteUrl: 'https://www.wycliffe.org/',
  giveUrl: 'https://www.wycliffe.org/donate',
  sources: [
    {
      id: 'wyc-fs-25',
      label: 'FY2025 consolidated financial statements, year ended 30 September 2025',
      url: 'https://www2.wycliffe.org/Wycliffe-2025-Consolidated-FS-Report',
      publisher: 'Wycliffe Bible Translators USA',
      documentType: 'audited-financials',
      retrieved: '2026-09-18',
      fiscalYear: 'FY2025',
      note: 'Figures throughout are in thousands: programme $207,261 of $248,929 total expenses, grants $95,943. The counts quoted here — 772 new languages, 2,918 total active engagements — are in the CFO’s management discussion at the front, not in a statement or a note. The link is a redirect to a Google Drive viewer rather than a direct PDF.',
    },
    {
      id: 'wyc-990-25',
      label: 'FY2025 Form 990 (voluntarily completed, not filed with the IRS)',
      url: 'https://www2.wycliffe.org/fy-2025-form990',
      publisher: 'Wycliffe Bible Translators USA',
      documentType: 'form-990',
      retrieved: '2026-09-18',
      fiscalYear: 'FY2025',
      note: 'A 14-page scanned PDF: a cover letter explaining the church exemption, then pages 1–12 of the main form and nothing else. Part III describes the programme in prose with no counts. The link is a redirect to a Google Drive viewer.',
    },
    {
      id: 'wyc-financials',
      label: 'Financial Accountability',
      url: 'https://www.wycliffe.org/about/financial-accountability',
      publisher: 'Wycliffe Bible Translators USA',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Links financial statements back to FY2021 and Form 990s back to FY2022, and states ECFA accreditation and Candid’s Platinum Seal of Transparency.',
    },
  ],
};
