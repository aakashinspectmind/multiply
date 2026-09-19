import type { Cause } from '@/lib/types';

export const lifesongForOrphans: Cause = {
  slug: 'lifesong-for-orphans',
  name: 'Lifesong for Orphans',
  legalName: 'Lifesong for Orphans, Inc.',
  ein: '35-1902841',
  tagline:
    'Underwrites its own overhead from business profits so donations pass through whole — and the Form 990 still shows $1.98m of it.',
  category: 'children',
  countries: [
    'Bolivia',
    'Cambodia',
    'Ethiopia',
    'Guatemala',
    'Haiti',
    'India',
    'Liberia',
    'Mexico',
    'Moldova',
    'Philippines',
    'Poland',
    'South Korea',
    'Tanzania',
    'Thailand',
    'Uganda',
    'Ukraine',
    'Zambia',
  ],
  whatTheyDo:
    'Lifesong for Orphans does three distinct things from Gridley, Illinois. It funds local partners caring for orphaned and vulnerable children in seventeen countries, largely through child sponsorship at $68 a month. It makes grants and interest-free loans to Christian families adopting, which in the year we reviewed was $9.6m of spending — more than a quarter of the total. And it runs ten businesses in Haiti, India, Uganda, Ukraine and Zambia that employ caregivers and graduates and return profit to the care programmes. The structure that defines the ministry is the 100% Pledge: the Manna Foundation and a group of business partners cover fundraising and administration separately, so Lifesong tells donors "100% of your received donation will directly help children in need."',
  accreditations: [
    { label: 'Evangelical Council for Financial Accountability member', sourceId: 'lifesong-ecfa' },
  ],
  verification: 'documents-reviewed',
  biblicalAlignment: {
    mandate:
      'James makes care for orphans the test of real religion, and Lifesong takes the two biblical routes to it at once: strengthening the household a child already has, and placing the child who has none into a family through adoption. Paul reads adoption as the shape of the gospel itself — sons brought in by grace, not by descent — which is why a ministry that funds adoption is doing something more than welfare.',
    scriptures: [
      {
        ref: 'James 1:27',
        text:
          'Religion that is pure and undefiled before God the Father is this: to visit orphans and widows in their affliction, and to keep oneself unstained from the world.',
      },
      {
        ref: 'Galatians 4:4–5',
        text:
          'But when the fullness of time had come, God sent forth his Son, born of woman, born under the law, to redeem those who were under the law, so that we might receive adoption as sons.',
      },
      {
        ref: 'Psalm 68:5–6',
        text:
          'Father of the fatherless and protector of widows is God in his holy habitation. God settles the solitary in a home; he leads out the prisoners to prosperity.',
      },
      {
        ref: 'Matthew 18:5',
        text: 'Whoever receives one such child in my name receives me.',
      },
    ],
    doctrine: { label: 'Statement of Faith', sourceId: 'lifesong-faith' },
    concerns: [
      'The 100% Pledge is true in its own terms and misleading if read quickly. Fundraising and administration are separately underwritten, so a donor’s gift is not charged for them — but the costs are real, and the Form 990 puts them at $1,984,165, or 5.8% of the year’s $34,369,966 of spending. "No Administrative Costs Come From Your Gifts" is a statement about accounting flow, not about a ministry that runs on nothing.',
      'The 990 describes the work as including "BIBLICAL TRAINING IN SCHOOLS, HOMES AND ORPHANAGES," and the ministry supports partner-run children’s homes alongside family preservation. Long-term residential care is genuinely contested among Christians in this field: the broad consensus of practitioners is that children do better in families and that residential care costs several times as much per child, and serious people on the other side point to children whose families are gone or dangerous. Lifesong does not publish where its spending falls on that line, so a donor cannot tell which model they are funding.',
      'The adoption programme makes grants and loans "TO ASSIST IN THE ADOPTION OF ORPHANS BY CHRISTIAN FAMILIES." That restriction is coherent for a Christian ministry and it means a substantial share of the money benefits American adopting families rather than children in low-income countries. It is a legitimate use of a donation and it is not what the sponsorship pages describe.',
      'Program spending includes "SHORT-TERM MISSION TRIPS TO VARIOUS LOCATIONS," and the counts we divide are of "individuals reached," so a child met on a trip may be inside the denominator on the same footing as a sponsored child receiving a year of schooling.',
    ],
  },
  roi: {
    levers: ['local-cost-base', 'local-workers', 'existing-network', 'multiplication'],
    reason:
      'Delivery runs through local partner organisations rather than Lifesong staff: Schedule F of the Form 990 reports 26 offices and 2,552 employees, agents and independent contractors outside the United States, against $18,347,948 of foreign expenditure. Those people are paid at Ugandan, Zambian, Cambodian and Ethiopian rates, which is why $68 a month buys a child’s food, schooling and medical care. The ten sustainable businesses are the second lever and the more unusual one: they generated $2,000,549 of program service revenue in the year, employ the caregivers and graduates of the programmes, and return profit that does not have to be raised again. Strengthening the family a child already has also avoids the cost structure of replacing it — a residential placement carries buildings, staff rotas and round-the-clock supervision that a sponsorship does not.',
  },
  costModel: {
    outcome: 'individual reached by the orphan care programme',
    outcomePlural: 'individuals reached by the orphan care programme',
    spend: {
      amount: 19592756,
      basis: 'program-services',
      fiscalYear: '2024',
      sourceId: 'lifesong-990-24',
    },
    count: {
      amount: 11414,
      label: 'individuals reached, summed across seven regions',
      fiscalYear: '2024',
      sourceId: 'lifesong-990-24',
    },
    attribution: 'single-program-line',
    caveat:
      'Both halves come out of the same Form 990 for the year ended 30 June 2024, and we charged only the orphan care line — not adoption assistance or the businesses — against only the children that line says it reached. It is still an upper bound, for three reasons. The count is the ministry’s own word "approximate," and we summed the seven regional figures ourselves because the 990 publishes no total. The same line pays for short-term mission trips, so some of those individuals were reached by a visit rather than a year of care. And $3,503,815 of the line is grants passed to partner organisations whose own counting we have not seen. Note how far this sits from the $816 a year the ministry advertises as the cost of caring for one child: roughly double. We cannot reconcile the two from published documents.',
    alternates: [
      {
        label: 'children Lifesong says it currently supports worldwide',
        count: 10644,
        note:
          'A live figure on the orphan care page — "we help support 10,644 children around the world" — with no date and no fiscal year attached. Lower than the 990 count, which is what you would expect if the 990 figure includes people reached rather than children supported.',
      },
      {
        label: 'children reached with gospel-centered care, homepage counter',
        count: 12650,
        note:
          'The homepage counter, undated, and higher again than either of the other two. Three published counts of roughly the same thing, none of which matches another.',
      },
    ],
  },
  ministryClaims: [
    {
      quote: 'The monthly cost to care for each child in most of the countries we serve is $68.',
      sourceId: 'lifesong-sponsor',
      impliedCostPerOutcome: 816,
      impliedOutcome: 'year of care for one sponsored child',
    },
    {
      quote:
        'You can sponsor a child, starting at $34.00/mo. 100% of your sponsorship directly impacts the lives of orphaned and vulnerable children in the countries we serve.',
      sourceId: 'lifesong-sponsor',
    },
    {
      quote:
        'Thanks to Manna Foundation and key partners, all of our fundraising and administrative costs are already covered. 100% of your received donation will directly help children in need.',
      sourceId: 'lifesong-pledge',
    },
    {
      quote:
        'In order to love and care for each of the children we serve without showing partiality, we don’t allow sponsors to send individual gifts to their sponsor children.',
      sourceId: 'lifesong-sponsor',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 3,
      note:
        'A full statement of faith with proof texts on the Trinity, the infallibility of Scripture, substitutionary atonement, eternal judgement, the unborn and marriage. The stated aim of care begins "Be taught the Gospel and how to be followers of Christ," the 990 lists biblical training as part of the programme, and adoption grants are restricted to Christian families. Nothing here is implied.',
    },
    localLeadership: {
      value: 2,
      note:
        'Delivery is through local partners and Schedule F reports 2,552 employees and agents outside the United States across 26 offices, so the hands are local. Governance, fundraising and grant decisions sit in Gridley, Illinois, under a US board, and the programme description includes American short-term mission trips as a funded activity.',
    },
    financialTransparency: {
      value: 2,
      note:
        'Form 990s for the years ended June 2020 through June 2024 are posted on the ministry’s own site, and it is an ECFA member with a live profile. Marked down because no audited financial statements are published — the 990 is the only document — and because the most recent one covers a year that ended in June 2024, two fiscal years back from the date we looked.',
    },
    outcomeEvidence: {
      value: 1,
      note:
        'Three different counts of children served are published — 11,414 in the 990, 10,644 on the orphan care page, 12,650 on the homepage — and none of them can be reconciled to another. The 990 figure is labelled "approximate," has no published total, and mixes children in year-round care with people reached on short-term trips. The adoption side reports "over 3,000 individuals/families," a unit that counts two different things at once.',
    },
    costEvidence: {
      value: 2,
      note:
        'A single program line and a count of who that line reached exist in the same document for the same year, which is better than most. Marked down hard because the resulting figure is about twice the $816 a year the ministry itself advertises, and no published document explains the gap.',
    },
  },
  notVerified: [
    'The most recent financial document Lifesong publishes is the Form 990 for the year ended 30 June 2024. As of September 2026 that is two fiscal years old. There are no audited financial statements on the site at all.',
    'Every figure on this page is therefore from a period that ended more than two years before you are reading it, while the child counts on the website are current and undated. The two cannot be combined and we have not combined them.',
    'The $816 a year the ministry advertises per child and the $1,717 the 990 implies per individual reached differ by about a factor of two. The likeliest explanations are that "individuals reached" is a narrower group than "children supported," or that the orphan care line funds much more than sponsorship, or both. Lifesong does not publish the reconciliation.',
    'Schedule F reports $1,120,999 of expenditure in Europe for "CARE/RELIEF" — presumably the Ukraine and Moldova work — but Europe does not appear at all in the seven regions of the reached-individuals list we summed. Either those people are not counted or they are inside another region. We do not know which.',
    'We cannot isolate the Manna Foundation underwriting in the accounts. The 990 reports $37,939,463 of "All other contributions" as a single line, so there is no way for an outsider to confirm that overhead was in fact funded separately rather than out of general gifts.',
    'Sponsorship is offered in eleven countries on the sponsor search — Bolivia, Cambodia, Ethiopia, Haiti, India, Liberia, Tanzania, Thailand, Uganda, Ukraine, Zambia — while "Where we serve" lists seventeen. What the other six receive, and from what funding, is not stated.',
    'No published document says what share of Lifesong’s spending goes to children living with families as against children in partner-run residential homes. For a ministry whose page says "nothing is more impactful than child sponsorship" and whose 990 names orphanages, that is the split a donor most needs.',
    'The adoption programme’s grants and loans are described but the outstanding loan book, the default rate and the terms are not. $7,358,370 of the $9,619,392 adoption line was grants; the rest is not broken out.',
  ],
  notes: [
    'The 990 puts total functional expenses at $34,369,966, of which program services were $32,385,801 — 94.2%. Management and general was $358,008 and fundraising $1,626,157. Whatever you make of the 100% Pledge, the ratio behind it is real and it is very low.',
    'The businesses are not a side project. Program service revenue of $2,000,549 came from agriculture and business operations, against $3,173,653 spent on them, in Haiti, India, Uganda, Ukraine and Zambia.',
    'Lifesong is unusually plain about the limits of sponsor contact. Letters go twice a year, individual gifts to a sponsored child are refused on the grounds of partiality, extra money goes to "a field trip, party, or other celebration that the whole class or home can enjoy together," and letter writing is unavailable in Cambodia, Thailand, Ethiopia and India because of translation costs. A donor is told what they are not buying.',
    'The homepage frames the ask as "God doesn’t call you to help all 153,000,000 orphans worldwide." We have not checked that global figure and no source is given for it; orphan-count statistics of this kind usually include children with one living parent.',
  ],
  siteUrl: 'https://www.lifesong.org/',
  giveUrl: 'https://www.lifesong.org/give/',
  sources: [
    {
      id: 'lifesong-site',
      label: 'Homepage',
      url: 'https://www.lifesong.org/',
      publisher: 'Lifesong for Orphans',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Source of the 12,650 and 12,451 counters and the 153,000,000 orphans framing. No dates are attached to any of them.',
    },
    {
      id: 'lifesong-orphan-care',
      label: 'Orphan Care — Where We Serve',
      url: 'https://www.lifesong.org/orphan-care/',
      publisher: 'Lifesong for Orphans',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note:
        'The seventeen-country list and the statement "Together with people like you, we help support 10,644 children around the world."',
    },
    {
      id: 'lifesong-sponsor',
      label: 'Sponsor a Child',
      url: 'https://www.lifesong.org/sponsor/',
      publisher: 'Lifesong for Orphans',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'The $68 and $34 monthly figures and the frequently asked questions on gifts, letters and partiality.',
    },
    {
      id: 'lifesong-pledge',
      label: '100% Pledge',
      url: 'https://www.lifesong.org/about/pledge/',
      publisher: 'Lifesong for Orphans',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Explains the Manna Foundation underwriting and names Watershed Foods, Gobena and Lifesong Impact as the businesses behind it.',
    },
    {
      id: 'lifesong-faith',
      label: 'Statement of Faith',
      url: 'https://www.lifesong.org/about/statement-of-faith/',
      publisher: 'Lifesong for Orphans',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Eight articles, each with Scripture references.',
    },
    {
      id: 'lifesong-financials',
      label: 'Financials & Policies',
      url: 'https://www.lifesong.org/about/financials/',
      publisher: 'Lifesong for Orphans',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Links Form 990s for the years ended June 2020 through June 2024. No audited financial statements are posted.',
    },
    {
      id: 'lifesong-990-24',
      label: 'Form 990 for the year ended 30 June 2024',
      url: 'https://lifesong.org/site/wp-content/uploads/2025/06/Lifesong-Form-990-FY-2024.pdf',
      publisher: 'Lifesong for Orphans',
      documentType: 'form-990',
      retrieved: '2026-09-18',
      fiscalYear: '2024',
      note:
        'Tax year 1 July 2023 to 30 June 2024. Part III line 4a gives orphan care spending of $19,592,756 and the seven regional counts of individuals reached, which we summed to 11,414; Part IX line 25 gives total expenses of $34,369,966; Schedule F gives 26 foreign offices and 2,552 foreign employees and agents.',
    },
    {
      id: 'lifesong-ecfa',
      label: 'ECFA member profile',
      url: 'https://www.ecfa.org/MemberProfile.aspx?ID=20116',
      publisher: 'Evangelical Council for Financial Accountability',
      documentType: 'third-party',
      retrieved: '2026-09-18',
    },
  ],
};
