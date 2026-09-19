import type { Cause } from '@/lib/types';

export const familyLegacyMissionsInternational: Cause = {
  slug: 'family-legacy-missions-international',
  name: 'Family Legacy',
  legalName: 'Family Legacy Missions International',
  ein: '75-2897392',
  tagline:
    'Publishes the price of both models: $55 a month for a child who sleeps at home, $300 for one who does not.',
  category: 'children',
  countries: ['Zambia'],
  whatTheyDo:
    'Family Legacy works in one city. It owns and runs 17 Christian Legacy Academies in the Lusaka compounds where its children live, staffed by more than 400 educators, teaching about 10,800 children who go home at the end of the day; an Excel Beyond programme carries graduates into university, trades and work; and the Tree of Life Children’s Village, a 130-acre site, houses about 400 children whose homes are unsafe or whose health makes home impossible, with the stated purpose of returning them. The fourth programme is Camp LIFE, a short-term missions operation that brings hundreds of American volunteers to Zambia each year and is, in the ministry’s own words on its Form 990, "a cornerstone of Family Legacy’s mission." The US entity is in Dallas; the Zambian entity, Family Legacy Missions Zambia, is in Lusaka and is consolidated into the audit.',
  accreditations: [
    {
      label: 'Evangelical Council for Financial Accountability member',
      sourceId: 'flmi-ecfa',
    },
  ],
  verification: 'documents-reviewed',
  biblicalAlignment: {
    mandate:
      'Isaiah’s command is to bring justice to the fatherless, and Psalm 68 says what that looks like: God settles the solitary in a home. The word is home, not institution — which is why a ministry that takes a child in temporarily and works to send them back is doing the harder and more biblical thing than one that keeps them. Family Legacy states that goal itself, and the cost of the two models is visible in its own price list.',
    scriptures: [
      {
        ref: 'Isaiah 1:17',
        text: 'Learn to do good; seek justice, correct oppression; bring justice to the fatherless, plead the widow’s cause.',
      },
      {
        ref: 'Psalm 68:5–6',
        text: 'Father of the fatherless and protector of widows is God in his holy habitation. God settles the solitary in a home; he leads out the prisoners to prosperity.',
      },
      {
        ref: 'Matthew 18:5',
        text: 'Whoever receives one such child in my name receives me.',
      },
      {
        ref: 'Proverbs 22:6',
        text: 'Train up a child in the way he should go; even when he is old he will not depart from it.',
      },
    ],
    doctrine: {
      label: 'Faith Statement and Philosophy of Ministry',
      sourceId: 'flmi-philosophy',
    },
    concerns: [
      'About 400 children live full time at Tree of Life, and residential care at that scale is the most contested model in Christian orphan care. The practitioner consensus is that children develop better in families and communities than in institutions, however well run, and the cost difference is large. Family Legacy states the same position in its own philosophy of ministry: the village "offers short-term residence and care to children whose home or health circumstances are extremely vulnerable – it is not meant to replace a child’s God-given family and community," and children are reintegrated once safety standards are met "since connection to one’s community is the most effective setting for a child’s healthy development." That is the right answer. What we cannot find is the number: no published document says how many children were reintegrated in the period, or how long the average stay lasts, so the word "short-term" is a stated intention we could not check.',
      'Camp LIFE and the short-term missions programme cost $1,616,663 — 14% of all programme spending — and the Form 990 describes it as "HUNDREDS OF AMBASSADORS-VOLUNTEERS PRIMARILY FROM THE UNITED STATES-TRAVEL TO ZAMBIA TO CARE FOR THE CHILDREN, BUILD RELATIONSHIPS THROUGH PLAY, AND SHARE THE MESSAGE OF JESUS." Child-protection specialists warn specifically about this: a stream of visiting adults who form warm attachments with vulnerable children for a week and then leave. The concern is not that the volunteers are insincere, it is that the practice is designed around the visitor’s experience, and here one dollar in seven of programme spending pays for it.',
      'A designated gift is not fully designated. The ministry states that "eighty-seven percent of that money goes directly into the fund that is associated with your designation" and that thirteen percent underwrites overhead. That is honest disclosure, plainly worded, and it means the $55 or $300 a sponsor sends is not what reaches the programme.',
      'Family Legacy is under real financial pressure and says so in its own audit. It spent $13,877,552 against $11,943,686 of revenue in nine months, net assets fell from $4,250,314 to $2,316,448, favourable exchange rates that helped in 2025 have reversed, and a $1,500,000 note matures in March 2027 and may need refinancing. This is not a ministry in crisis, and it is one whose margin for error has narrowed.',
    ],
  },
  roi: {
    levers: ['local-cost-base', 'local-workers', 'durable-asset'],
    reason:
      'Zambia’s income per person is roughly seventy times below the United States, and Family Legacy employs Zambians — more than 400 educators in its own academies — so a year of private Christian schooling with uniforms, textbooks and a hot meal costs what it costs in Lusaka. The audit consolidates the Zambian entity, so that is where the money is spent rather than granted abroad and lost from view. The sharper point for this category is internal: Family Legacy publishes both prices. Day sponsorship at a Legacy Academy is $55 a month for grades 1 to 6 and $72 for grades 7 to 12; full-time residential care at Tree of Life is $300 a month. Its Form 990 makes the same comparison in spending: the 17 academies cost $6,879,630 for more than 10,800 children, about $637 each over nine months, while the residential village cost $1,665,007 for more than 400 children, about $4,163 each over the same nine months. Roughly six and a half times, same ministry, same document, same period. That is the clearest sourced answer we have found to the question of what institutional care costs relative to keeping a child in their community — and it is why the academies, not the village, are where a dollar goes furthest here.',
  },
  costModel: {
    outcome: 'child supported for nine months',
    outcomePlural: 'children supported for nine months',
    spend: {
      amount: 11362527,
      basis: 'program-services',
      fiscalYear: '2025 (nine months to 30 September)',
      sourceId: 'flmi-audit-25',
    },
    count: {
      amount: 11300,
      label: 'vulnerable children served',
      fiscalYear: '2025 (nine months to 30 September)',
      sourceId: 'flmi-audit-25',
    },
    attribution: 'all-program-spend',
    caveat:
      'This is nine months, not a year. Family Legacy moved its fiscal year end from December to September, and the audited period runs 1 January to 30 September 2025 — deliberately excluding, as the audit says, "FLMI’s peak giving season from October through December." We have not annualised it and you should not either: a year would cost more, by an amount nobody has published. It is also all of programme spending charged against every child counted, which averages together a $637 day-school place and a $4,163 residential placement as though they were the same thing. Both halves come from the same audited statement, which is the reason we publish it at all.',
    alternates: [
      {
        label: 'children who participated in the educational programmes',
        count: 10800,
        note: 'The Form 990 says "OVER 10,800 CHILDREN WHO PARTICIPATED IN ITS EDUCATIONAL PROGRAMS" against a Legacy Academies line of $6,879,630 — about $637 per child for the nine months, which is the number to use if what you want to fund is schooling rather than the whole ministry.',
      },
      {
        label: 'children in full-time residential care at Tree of Life',
        count: 400,
        note: 'Not a denominator for total programme spending — dividing everything by 400 would be meaningless. It belongs here because its own programme line, $1,665,007 for "MORE THAN 400 CHILDREN RESIDING AT THE TREE OF LIFE VILLAGE," works out at about $4,163 per child for nine months. That is the price of the residential model, published by the ministry that runs it.',
      },
    ],
  },
  ministryClaims: [
    {
      quote: 'Legacy Academy (Grades 1-6) $55/month',
      sourceId: 'flmi-sponsor',
      impliedCostPerOutcome: 660,
      impliedOutcome: 'year of day-school sponsorship for one child in grades 1 to 6',
    },
    {
      quote: 'Tree of Life (Grade 1-12) $300/month or split up to 3 ways ($100 each)',
      sourceId: 'flmi-sponsor',
      impliedCostPerOutcome: 3600,
      impliedOutcome: 'year of full-time residential care for one child at Tree of Life',
    },
    {
      quote:
        'When you designate your gift to a child, school or program, eighty-seven percent of that money goes directly into the fund that is associated with your designation.',
      sourceId: 'flmi-financials',
    },
    {
      quote:
        'Additionally, our Tree of Life Children’s Village offers short-term residence and care to children whose home or health circumstances are extremely vulnerable – it is not meant to replace a child’s God-given family and community.',
      sourceId: 'flmi-philosophy',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 3,
      note: 'A published philosophy of ministry that defines God as "the holy, triune God of Christianity," sets out creation, fall, atonement and resurrection explicitly, and names introducing others to Jesus as the first task. A separate faith statement. Seventeen Christian academies with a discipleship curriculum and weekly church for Tree of Life students. Nothing here is implied.',
    },
    localLeadership: {
      value: 2,
      note: 'The Zambian entity employs more than 400 educators plus social workers and is consolidated into the audit, so the teaching and care are Zambian. Governance, fundraising and strategy sit with a Dallas board, and the 990 places an American short-term missions programme at the centre of the ministry rather than the margin, which is the opposite of a locally led design.',
    },
    financialTransparency: {
      value: 3,
      note: 'Consolidated audited statements and Form 990s posted on its own site for every year from 2009, ECFA membership, and an audit note that volunteers its own liquidity problem, its budget variance, the reversal of favourable exchange rates and a note maturing in 2027. It also publishes the 13% overhead assessment on designated gifts in plain words. Ministries under financial pressure usually go quiet; this one did the opposite.',
    },
    outcomeEvidence: {
      value: 2,
      note: 'An audited count — 11,300 children served in the nine months — sits in Note 12 of the financial statements, which is a better place for a number than a marketing page, and the 990 breaks it into 10,800 in education and 400 in residence. Marked down because Camp LIFE is a funded programme with no published attendance figure and the 990 calls it the point where "for most of these children" the journey begins, so an unknown number inside the counts may be children who attended a camp.',
    },
    costEvidence: {
      value: 3,
      note: 'Spending and count in the same audited document for the same period, programme lines and per-programme counts in the 990, and a published price list by programme tier so our arithmetic can be compared with the ministry’s own. The only reason this is not a perfect figure is the nine-month period, which the ministry discloses.',
    },
  },
  notVerified: [
    'How long a child stays at Tree of Life, and how many were reintegrated into families during the period. The ministry’s own philosophy makes reintegration the purpose of the village and its 990 calls it "A TRANSITIONAL, FULL-TIME HOME," but no count of reintegrations is published anywhere we could find. That is the single most important missing number on this page.',
    'The Form 990 puts total programme service expenses at $11,350,342; the audited statements put programme services at $11,362,527. The $12,185 difference is unexplained and we used the audited figure.',
    'The nine-month period is not comparable to anything. The audit deliberately excludes October to December, the ministry’s peak giving season, so both the spending and the children-served count cover three quarters of a year. Every figure here should be read that way and none of it should be compared with a twelve-month year.',
    'How the audited 11,300 is built. "Over 10,800" in education plus "more than 400" residents is about 11,200, close but not equal, and nothing states whether a child in residence is also counted as a pupil, or whether Camp LIFE attendees are inside the total.',
    'No attendance figure is published for Camp LIFE, the programme that costs $1,616,663 and which the 990 describes as the beginning of most children’s relationship with the ministry.',
    '$799,179 of grants sit inside a $1,189,042 "other programs" line with no grantees named.',
    'The audit says favourable exchange rates in 2025 reversed in 2026 and that the revised 2026 forecast is a $79,500 surplus against a $436,000 budget. What that means for programme delivery in the current year is not stated.',
    'We have not seen a child-protection or visitor policy for the short-term missions programme — what screening, supervision and contact limits apply to American volunteers spending time with these children.',
  ],
  notes: [
    'Total expenses for the nine months were $13,877,552: programmes $11,362,527 (81.9%), management and general $1,783,569 (12.9%), fundraising $731,456 (5.3%). Administrative assessments released against restricted funds were $1,219,832, which is the 13% policy showing up in the accounts.',
    'For scale, the last full calendar year — 2024 — ran programme services of $14,785,520 against total expenses of $18,340,612 and revenue of $18,362,359. The current period is smaller because it is shorter, not only because giving fell.',
    'The 990 describes the village as "A 130-ACRE RESIDENTIAL COMMUNITY... A TRANSITIONAL, FULL-TIME HOME FOR VULNERABLE CHILDREN... TO PREPARE CHILDREN FOR SAFE REINTEGRATION INTO THEIR COMMUNITIES," and the philosophy of ministry says reintegration follows standards "set by our team and the Zambian Department of Social Welfare." The framing is consistent across documents, which is worth something even without the count.',
    'The philosophy of ministry also draws a line most ministries of this size will not: "We are a child development organization, not a broad community development one." A donor is told what Family Legacy does not intend to do.',
  ],
  siteUrl: 'https://familylegacy.com/',
  giveUrl: 'https://familylegacy.com/sponsor-a-child/',
  sources: [
    {
      id: 'flmi-site',
      label: 'Homepage',
      url: 'https://familylegacy.com/',
      publisher: 'Family Legacy Missions International',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'flmi-about',
      label: 'About Our Mission',
      url: 'https://familylegacy.com/about/',
      publisher: 'Family Legacy Missions International',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'The four pillars of care and the four programmes: Tree of Life, Legacy Academy, Excel Beyond and Camp Life.',
    },
    {
      id: 'flmi-philosophy',
      label: 'Our Philosophy of Ministry',
      url: 'https://familylegacy.com/philosophy-of-ministry/',
      publisher: 'Family Legacy Missions International',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'The doctrinal statement, the definition of the problem, and the position on residential care and reintegration. Links a separate faith statement at familylegacy.com/faith-statement/.',
    },
    {
      id: 'flmi-sponsor',
      label: 'Sponsor a Child',
      url: 'https://familylegacy.com/sponsor-a-child/',
      publisher: 'Family Legacy Missions International',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Publishes three sponsorship prices side by side: $55 a month for grades 1–6, $72 for grades 7–12, and $300 for full-time residential care at Tree of Life.',
    },
    {
      id: 'flmi-financials',
      label: 'Financial Statement',
      url: 'https://familylegacy.com/financial-statement/',
      publisher: 'Family Legacy Missions International',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Links consolidated audits and Form 990s from 2009 onward, and states the 87%/13% split applied to designated gifts.',
    },
    {
      id: 'flmi-audit-25',
      label: 'Consolidated financial statements, nine months ended 30 September 2025',
      url: 'https://familylegacy.com/wp-content/uploads/2026/07/FLMI-25-Consolidated-FS-Final.pdf',
      publisher: 'Family Legacy Missions International',
      documentType: 'audited-financials',
      retrieved: '2026-09-18',
      fiscalYear: '2025 (nine months to 30 September)',
      note: 'Consolidated with Family Legacy Missions Zambia. Programme services $11,362,527 of $13,877,552 total expenses. Note 12 is the source of the audited count: "11,300 vulnerable children were served during the nine months ended September 30, 2025," and of the disclosures on the fiscal-year change, the budget variance and the 2026 exchange-rate reversal.',
    },
    {
      id: 'flmi-990-25',
      label: 'Form 990 for 2025',
      url: 'https://familylegacy.com/wp-content/uploads/2026/08/2025-FLMI-990-Public-Copy.pdf',
      publisher: 'Family Legacy Missions International',
      documentType: 'form-990',
      retrieved: '2026-09-18',
      fiscalYear: '2025 (nine months to 30 September)',
      note: 'Part III gives the programme lines and their counts: Legacy Academies $6,879,630 for over 10,800 children; Tree of Life $1,665,007 for more than 400 residents; short-term missions $1,616,663; other programmes $1,189,042.',
    },
    {
      id: 'flmi-ecfa',
      label: 'ECFA member profile',
      url: 'https://www.ecfa.org/MemberProfile.aspx?ID=60760',
      publisher: 'Evangelical Council for Financial Accountability',
      documentType: 'third-party',
      retrieved: '2026-09-18',
    },
  ],
};
