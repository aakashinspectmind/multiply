import type { Cause } from '@/lib/types';

export const zoeInternational: Cause = {
  slug: 'zoe-international',
  name: 'ZOE International',
  legalName: 'ZOE International',
  ein: '14-1862549',
  tagline:
    'Runs a 35-acre children’s home in Thailand and rides along with Los Angeles police as victim advocates.',
  category: 'justice',
  countries: ['Thailand', 'United States', 'Mexico', 'Japan', 'Australia'],
  whatTheyDo:
    'ZOE’s two halves look very different. In Thailand it owns 35 acres at an undisclosed location with a main home, a boys’ home, a Child Rescue Center, a learning centre accredited to confer Thai diplomas, and a vocational centre under construction, and it supports prosecutions through forensic interviews and by protecting children who testify. In the United States it does not run raids: ZOE advocates accompany Los Angeles County law enforcement during operations and provide victim services under contract to the county’s child welfare and mental health departments, and ZOE Home for Youth is a state-licensed residential programme for up to six youth aged 12 to 17. Smaller entities operate in Mexico, Japan and Australia, largely on prevention, education and fundraising. Housing and related services is the largest program line at $3,229,645 of $6,818,669 in 2025.',
  accreditations: [
    {
      label: 'Member, Evangelical Council for Financial Accountability',
      sourceId: 'zoe-finances',
    },
    {
      label: 'Member, Christian Alliance for Orphans',
      sourceId: 'zoe-finances',
    },
  ],
  verification: 'self-reported',
  biblicalAlignment: {
    mandate:
      'A child who has been sold is the exact person Scripture puts under God’s particular protection, and the warning attached to harming one is the sharpest Christ ever gave. The mandate has two halves and ZOE attempts both: deliver the child out of the hand of the wicked, and then take care of her — which in practice means years of housing, schooling and therapy rather than a single dramatic moment. The larger half of its budget goes to the slower half of the command, which is the right proportion and an unusual one.',
    scriptures: [
      {
        ref: 'Psalm 82:3–4',
        text: 'Give justice to the weak and the fatherless; maintain the right of the afflicted and the destitute. Rescue the weak and the needy; deliver them from the hand of the wicked.',
      },
      {
        ref: 'Matthew 18:5–6',
        text: 'Whoever receives one such child in my name receives me, but whoever causes one of these little ones who believe in me to sin, it would be better for him to have a great millstone fastened round his neck and to be drowned in the depth of the sea.',
      },
      {
        ref: 'Isaiah 1:17',
        text: 'Learn to do good; seek justice, correct oppression; bring justice to the fatherless, plead the widow’s cause.',
      },
    ],
    doctrine: {
      label:
        'Mission statement, printed in the audited financial statements: reaching every person “entails bringing the Good News and training followers of Jesus Christ”. No separate statement of faith is published on the site.',
      sourceId: 'zoe-audit-25',
    },
    concerns: [
      'The same impact report gives two irreconcilable figures for the same programme in the same year. An infographic says 1,023 victims rescued in Thailand; the narrative six pages later says ZOE Thailand helped “rescue, shelter, and protect 121 children alongside police partners” in 2024. That is a factor of 8.5. Neither figure is defined, and the report does not acknowledge the gap.',
      'The United States column of the same graphic reads “11 children rescued” and “539 arrested”. ZOE’s own description of its American work is that its advocates accompany officers during operations and provide victim services — the arrests are made by police in county-led stings. Putting 539 arrests in a ministry impact report invites a donor to read them as ZOE’s output, and the report offers no basis for the attribution and no conviction count.',
      'The outcome figures are a year behind the money. The most recent audited statements cover 2025; the most recent impact report covers 2024. There is no published count of children rescued, sheltered or served in 2025 at all.',
      'The 2025 Form 990 posted on the finances page is a draft. Every page carries a DRAFT watermark and the officer signature line is blank, though the preparer dated it 20 July 2026. A draft return is not the document a donor is being invited to rely on.',
      'A meaningful share of the work is government-funded and domestic. Contract work brought in $1,125,144 in 2025 under Los Angeles County child welfare and mental health contracts, and ZOE Home for Youth is a licensed six-bed group home in one of the most expensive care markets in the world. That is legitimate work; it is not what most donors picture when they give to an anti-trafficking ministry.',
      'Children in ZOE’s residential care are in an explicitly Christian environment they did not choose, and the ministry publishes nothing about how it handles that. A child who has just been removed from exploitation is not well placed to decline anything, and the site does not state whether care is ever contingent on participation.',
    ],
  },
  roi: {
    levers: ['durable-asset', 'local-cost-base'],
    reason:
      'The honest version of this argument is narrow. The Thailand campus is owned land and buildings, so the recurring cost is care rather than rent, and Thai income per person is $7,690 against $88,810 in the United States, so a bed, a teacher and a therapist there cost a fraction of the American equivalent. That is where the leverage is, and it is real. But three of ZOE’s five countries — Japan at $38,340, Australia at $64,120, Mexico at $13,730 — are not low-cost places, the largest single facility is a six-bed licensed group home in Los Angeles County, and the Missions line funds American missionaries relocating to Thailand rather than Thai staff. A donor giving here for cost leverage is funding a group whose cheapest and most expensive operations sit inside the same set of accounts, and the accounts do not let us say what share goes which way.',
  },
  ministryClaims: [
    {
      quote:
        'The mission of ZOE is to reach every person and rescue every child. Reaching every person entails bringing the Good News and training followers of Jesus Christ. Rescuing every child entails ending child trafficking and restoring survivors and at-risk orphans.',
      sourceId: 'zoe-audit-25',
    },
    {
      quote:
        'Despite these evolving challenges, ZOE Thailand achieved remarkable results in 2024, helping rescue, shelter, and protect 121 children alongside police partners.',
      sourceId: 'zoe-ir-24',
    },
    {
      quote:
        'To use your gift to provide for the needs of our children and programs in the most efficient manner possible.',
      sourceId: 'zoe-finances',
    },
    {
      quote:
        'Additionally, ZOE is a member of the Evangelical Council for Financial Accountability (ECFA).',
      sourceId: 'zoe-finances',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 3,
      note: 'The mission statement names the Good News and followers of Jesus Christ, the audited financial statements themselves open the Missions note by quoting Matthew 9:37–38, and the impact report sets Psalm 82 beside its rescue figures. There is no separate statement of faith, which is the only thing keeping this from being unambiguous on paper as well as in practice.',
    },
    localLeadership: {
      value: 2,
      note: 'ZOE International Foundation and ZOE Life Foundation are Thai legal entities running Thai operations with Thai government educational authorisation, which is genuine local institution-building. But the US entity holds board and economic control over all five affiliates, governance and money sit in Santa Clarita, and the Missions program line funds Americans moving to Thailand rather than nationals.',
    },
    financialTransparency: {
      value: 3,
      note: 'This is the strongest documentation in this category. Consolidated audited statements run 2020 through 2025, they are performed under Government Auditing Standards because of the government contracts, the compliance report disclosed no material weaknesses and no instances of noncompliance, and the supplementary schedules break every figure out entity by entity and include California foster care cost and revenue reports. The draft 990 is a real blemish and it is the only one; everything the return would show, the audit shows better.',
    },
    outcomeEvidence: {
      value: 1,
      note: 'Counts are published, dated and segmented by country, which is more than many ministries manage. They are also internally inconsistent by a factor of 8.5 on the headline Thailand figure, undefined as to what is being counted, and a full year out of date relative to the accounts.',
    },
    costEvidence: {
      value: 0,
      note: 'A finding, not a gap in our effort. ZOE advertises no cost per child. We could not build one either: there is no published headcount for the residential programmes, and every candidate numerator covers six legal entities across five countries at wildly different price levels.',
    },
  },
  notVerified: [
    'Which Thailand rescue figure is true. The 2024 impact report says 1,023 victims rescued and also says 121 children were helped to rescue, shelter and protection. We cannot tell whether these count different things, different populations or different years, and the report does not say.',
    'What “rescued” means anywhere in ZOE’s reporting. No definition, no inclusion criterion and no statement of who makes the determination is published for any of the country figures.',
    'Nothing in any count has been confirmed from outside the ministry. The Thailand figures — 529 trafficking cases, 790 perpetrators, 1,023 victims rescued, 1,255 years in prison — carry no case list, no court reference and no government confirmation, and the Thai campus location is undisclosed for child safety, which makes external verification structurally difficult rather than merely absent.',
    'On what basis 539 arrests appear in ZOE’s United States impact figures. ZOE’s own account is that its advocates work alongside officers during county operations; nothing states what causal share of an arrest that represents, and no convictions are reported.',
    'How many children were served in 2025. The audit is for 2025 and the impact report is for 2024, so the most recent year of spending has no outcome figures attached to it at all.',
    'Anything about what happens after restoration. No completion rate, no average length of stay, no re-trafficking rate and no count of young people who aged out and stayed safe is published — and aftercare is the largest program line at $3,229,645.',
    'The occupancy of ZOE Home for Youth. It is licensed for up to six youth; no figure for how many were actually placed in 2024 or 2025 appears in the impact report, the audit or the 990.',
    'Who received the $3,139,765 of foreign expenditure in Schedule F. The recipient name column is blank in the public copy. Given the undisclosed campus this is defensible, and it still means a donor cannot check the largest outbound flow.',
  ],
  notes: [
    'We deliberately did not build a cost per child. There is no published residential headcount to divide by, and the two Thailand figures we do have — 1,023 and 121 — differ by 8.5x, so choosing either would be choosing an answer. The numerator is no better: $3,229,645 of housing and related services covers the Thai campus, a six-bed Los Angeles group home, and Mexico, Japan and Australia together. Summing counts across pages to manufacture a denominator would be inventing a figure, so we did not.',
    'FY2025 consolidated figures, year ended 31 December 2025: program services $6,818,669 (advocacy and education $2,275,297, housing and related services $3,229,645, missions $1,313,727), general and administrative $468,947, fundraising $588,603, total expenses $7,876,219 against total support and revenue of $7,568,111 — a deficit before currency translation. Wages and benefits are $4,907,894 of the total, so this is overwhelmingly a people-cost organisation.',
    'FY2024 comparatives: program services $6,350,976 (advocacy and education $1,818,095, housing and related services $3,020,761, missions $1,512,120), total expenses $7,545,333. Fundraising fell from $804,022 to $588,603 year on year.',
    'Six entities are consolidated: ZOE International in the United States, ZOE International Foundation and ZOE Life Foundation in Thailand, ZOE Foundation Australia, ZOE Japan and ZOE Mexico. ZOE Foundation Australia was audited by other auditors and not under Government Auditing Standards; the consolidated opinion relies on their work for that entity.',
    'Worth stating in ZOE’s favour, because it bears directly on the standard criticism of this sector: ZOE does not run its own raids in the United States. Its advocates accompany law-enforcement operations as victim advocates, and the largest program line is aftercare rather than rescue. The model is structured the way practitioners who criticise raid-and-rescue say it should be. What is missing is the evidence that the aftercare works, not the commitment to it.',
    'The 2025 Form 990 reports total functional expenses of $7,336,427 and program service expenses of $6,419,796 for ZOE International alone, against $7,876,219 and $6,818,669 consolidated. The difference is the foreign affiliates, not a discrepancy.',
  ],
  siteUrl: 'https://gozoe.org/',
  giveUrl: 'https://gozoe.org/give-to-zoe/',
  sources: [
    {
      id: 'zoe-site',
      label: 'Homepage',
      url: 'https://gozoe.org/',
      publisher: 'ZOE International',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'zoe-mvv',
      label: 'Vision, mission, values',
      url: 'https://gozoe.org/about/mission-vision-values/',
      publisher: 'ZOE International',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Also prints the ministry’s tax ID, 14-1862549, in the page footer.',
    },
    {
      id: 'zoe-finances',
      label: 'Finances',
      url: 'https://gozoe.org/about/finances/',
      publisher: 'ZOE International',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Source of the ECFA and Christian Alliance for Orphans memberships and the stewardship commitments. Posts independent auditor’s reports for 2020 through 2025, Form 990s, and full and summary impact reports for 2023 and 2024 — no 2025 impact report.',
    },
    {
      id: 'zoe-audit-25',
      label: 'FY2025 consolidated financial statements',
      url: 'https://gozoe.org/wp-content/uploads/2026/07/2025-Independent-Auditors-Report.pdf',
      publisher: 'ZOE International',
      documentType: 'audited-financials',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note: 'Years ended 31 December 2025 and 2024, consolidated across six entities and audited in accordance with Government Auditing Standards. Contains the mission statement and full program descriptions in Note 1, consolidating statements by entity, and the State of California Foster Care Program cost and revenue reports. The compliance report disclosed no material weaknesses and no instances of noncompliance.',
    },
    {
      id: 'zoe-ir-24',
      label: '2024 impact report',
      url: 'https://gozoe.org/wp-content/uploads/2026/08/2024-ZOE-Impact-Report-FINAL.pdf',
      publisher: 'ZOE International',
      documentType: 'annual-report',
      retrieved: '2026-09-18',
      fiscalYear: '2024',
      note: 'Source of both Thailand rescue figures and the United States figures. The country statistics are set in a designed graphic on the “2024 International Impact” spread: USA 11 children rescued, 539 arrested, 54 adults recovered, 5 traffickers arrested; Thailand 529 trafficking cases, 790 perpetrators, 1,023 victims rescued, 1,255 years in prison. The 121-children figure is printed as body text elsewhere in the report.',
    },
    {
      id: 'zoe-990-25',
      label: '2025 Form 990, draft copy',
      url: 'https://gozoe.org/wp-content/uploads/2026/08/ZOE-990-2025.pdf',
      publisher: 'ZOE International',
      documentType: 'form-990',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note: 'ZOE International only, not consolidated. Every page carries a DRAFT watermark and the officer signature line is unsigned; the preparer signed 20 July 2026. Program service expenses $6,419,796, total functional expenses $7,336,427, Schedule F foreign expenditure $3,139,765 with recipient names left blank.',
    },
    {
      id: 'zoe-propublica',
      label: 'IRS filings for ZOE International, EIN 14-1862549',
      url: 'https://projects.propublica.org/nonprofits/organizations/141862549',
      publisher: 'ProPublica Nonprofit Explorer',
      documentType: 'third-party',
      retrieved: '2026-09-18',
    },
  ],
};
