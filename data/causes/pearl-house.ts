import type { Cause } from '@/lib/types';

export const pearlHouse: Cause = {
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
};
