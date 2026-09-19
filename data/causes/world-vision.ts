import type { Cause } from '@/lib/types';

export const worldVision: Cause = {
  slug: 'world-vision',
  name: 'World Vision',
  legalName: 'World Vision, Inc.',
  ein: '95-1922279',
  tagline:
    'Publishes a discrete $232m child sponsorship line, so for once the pooling behind a $39 ask is countable.',
  category: 'children',
  countries: ['Global'],
  whatTheyDo:
    'World Vision is the largest Christian relief and development organisation in the world, with a presence in nearly 100 countries and $1.43bn of operating expenses in the year we reviewed. Child sponsorship is the front door: 865,000 children were supported by United States donors and 2.8 million by sponsors worldwide. What the money buys is not a package for one child — it funds the water systems, health services, schooling, child protection and livelihoods work in that child’s community, alongside emergency response in 70 countries, 2.8 million people gaining lasting clean water access, and $174 million of food grants. The organisation says this plainly on its own sponsorship page: "Rather than going only to one child, funds are pooled to strengthen systems around them."',
  accreditations: [
    { label: 'Charter member, Evangelical Council for Financial Accountability', sourceId: 'wv-accountability' },
    { label: 'BBB Wise Giving Alliance accredited charity', sourceId: 'wv-accountability' },
    { label: 'Charity Navigator four-star rating', sourceId: 'wv-accountability' },
    { label: 'Candid Platinum seal of transparency, 2025', sourceId: 'wv-accountability' },
  ],
  verification: 'documents-reviewed',
  biblicalAlignment: {
    mandate:
      'Isaiah 1:17 puts justice for the fatherless and the widow’s cause in the same breath as correcting oppression, which is the shape of development work rather than charity: change the conditions, not only the symptoms. Isaiah 58 makes the same move — bread, shelter, clothing — and ties it to the honour of God. World Vision’s own mission statement locates the work in those terms, "to promote human transformation, seek justice, and bear witness to the good news of the kingdom of God."',
    scriptures: [
      {
        ref: 'Isaiah 1:17',
        text:
          'Learn to do good; seek justice, correct oppression; bring justice to the fatherless, plead the widow’s cause.',
      },
      {
        ref: 'Isaiah 58:6–7',
        text:
          'Is not this the fast that I choose: to loose the bonds of wickedness, to undo the straps of the yoke, to let the oppressed go free, and to break every yoke? Is it not to share your bread with the hungry and bring the homeless poor into your house?',
      },
      {
        ref: 'James 1:27',
        text:
          'Religion that is pure and undefiled before God the Father is this: to visit orphans and widows in their affliction, and to keep oneself unstained from the world.',
      },
      {
        ref: 'Matthew 18:5',
        text: 'Whoever receives one such child in my name receives me.',
      },
    ],
    doctrine: { label: 'Mission statement and statement of belief', sourceId: 'wv-mission' },
    concerns: [
      'Attribution at this scale is the real problem, and no amount of good accounting fixes it. A community with a World Vision programme also has a government, other charities, remittances and its own economy. When World Vision reports that 2.8 million people gained lasting clean water access or that 35.6 million people were reached through 104 emergency responses, those are counts of people in places where it worked, not measures of change it caused. The spending is verifiable to the dollar; the counterfactual is not verifiable at all, and the bigger the number the less it tells you about any individual child.',
      'The $39 a month is not a budget for your child, and the gap between what a sponsor pays and what is dedicated to sponsorship is large. $39 a month is $468 a year; the audited child sponsorship funding line works out at about $269 per US-supported sponsored child. The difference is not diversion — it is fundraising at 10.1% of operating expenses, management and general at 4.1%, and the fact that sponsored communities are also funded from other programme lines. World Vision discloses the pooling clearly. It does not publish the reconciliation, so a donor has to be told the arithmetic by someone else.',
      'World Vision reports 4.65 million children and youth in discipleship or faith-based programmes and over 50,000 pastors and church leaders equipped each year. We do not treat either as a measurable outcome and neither enters any figure on this page. They are activity counts about spiritual formation, which is not ours to score.',
      'The organisation lost $142 million of United States government funding during the year and says it was "forcing us to pause or stop critical programs and reduce our workforce," with revenue falling for the first time in a decade. A donor should know that a material share of this budget has historically been public money and that the programmes built on it are exposed to political decisions rather than to donor generosity.',
    ],
  },
  roi: {
    levers: ['local-cost-base', 'existing-network', 'durable-asset', 'local-workers'],
    reason:
      'The mechanism here is not primarily a low wage bill — it is that the unit of investment is a community rather than a child. A water system, a clinic, a school or a trained community health worker serves every child in the area, sponsored or not, and keeps serving after the gift; that is why a $269 dedicated sponsorship contribution can sit behind a child whose community has piped water and a functioning school. World Vision states the logic itself: "Monthly sponsorship donations are combined to strengthen and support their entire community through long-term solutions." Scale is a second lever with a real cost: it buys freight and gifts-in-kind leverage — 90,767 pallets valued at $257.2 million from 1,106 corporate partners, and $174 million of food grants moving 245,608 metric tons in 23 countries — while making any claim about an individual child impossible to trace. Against residential care the comparison is not close: institutional care replaces a family at a cost per child measured in thousands of dollars a year, and this is a few hundred spent on the systems around a family that is still intact.',
  },
  costModel: {
    outcome: 'year of sponsorship funding for one child',
    outcomePlural: 'years of sponsorship funding for children',
    spend: {
      amount: 232484000,
      basis: 'program-services',
      fiscalYear: '2025',
      sourceId: 'wv-audit-25',
    },
    count: {
      amount: 865000,
      label: 'children who benefited from child sponsorship programmes supported by US donors',
      fiscalYear: '2025',
      sourceId: 'wv-impact-25',
    },
    attribution: 'single-program-line',
    caveat:
      'This is the narrowest honest division and it is a floor, not a ceiling. We used the discrete "Child sponsorship" funding line of $232,484,000 in the audited functional expense schedule, not total programme spending, because charging all $1,222,847,000 of programme services to sponsored children would produce $1,414 each and would be charging them for disaster relief in 70 countries and for domestic US programmes. The floor understates in the other direction: a sponsored child’s community is also funded from the $664,640,000 relief, development and Christian impact line and from $233,294,000 of gifts-in-kind, and none of that is in our numerator. The true amount spent around one sponsored child sits somewhere between $269 and $1,414 and World Vision does not publish where. Treat this as the dedicated sponsorship funding per child, which is exactly what the audit calls it.',
    alternates: [
      {
        label: 'registered children supported by World Vision sponsors worldwide',
        count: 2800000,
        note:
          'World Vision reports that "sponsors worldwide supported 2.8 million registered children, including 865,000 children supported by U.S. donors." Dividing the US funding line by the global count would be wrong — the other 1.9 million are funded by support offices in other countries whose spending is not in these statements — and it is here so the relationship between the two figures is visible rather than buried.',
      },
    ],
  },
  ministryClaims: [
    {
      quote:
        'For $39 a month, walk alongside a child and their community toward lasting change.',
      sourceId: 'wv-sponsor',
      impliedCostPerOutcome: 468,
      impliedOutcome: 'year of sponsorship for one child and their community',
    },
    {
      quote:
        'Rather than going only to one child, funds are pooled to strengthen systems around them — helping children, families, and communities thrive long-term.',
      sourceId: 'wv-sponsor',
    },
    {
      quote:
        'Child sponsorship is a fixed monthly donation of $39 that supports community programs.',
      sourceId: 'wv-sponsor',
    },
    {
      quote: 'In 2025, we invested 86% of our total operating expenses into programs',
      sourceId: 'wv-accountability',
    },
    {
      quote:
        'Last year, World Vision sponsors worldwide supported 2.8 million registered children, including 865,000 children supported by U.S. donors.',
      sourceId: 'wv-accountability',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 3,
      note:
        'The mission statement names Jesus Christ and the kingdom of God explicitly — "an international partnership of Christians whose mission is to follow our Lord and Savior Jesus Christ in working with the poor and oppressed" — and is followed by a published statement of belief in the Trinity and the authority of Scripture. Charter member of ECFA. Faith is stated, not inferred. What the score does not tell you is how the gospel is present in any given programme, which varies across nearly a hundred countries.',
    },
    localLeadership: {
      value: 2,
      note:
        'Structured as an international partnership of national offices rather than a US agency with field branches, which is the right architecture, and delivery in each country is by nationals. Marked down because we could not verify the composition of programme leadership from published documents, and because the audited statements we reviewed are those of the American entity, where governance, fundraising and $135,844,000 of salaries sit.',
    },
    financialTransparency: {
      value: 3,
      note:
        'Audited consolidated statements on its own site with a functional expense schedule detailed enough to isolate a $232,484,000 child sponsorship funding line — the only sponsorship ministry in this directory where that is possible. Programme ratio, joint costs and public-sector funding loss all disclosed. Charity Navigator four stars, BBB Wise Giving Alliance accredited, Candid Platinum, ECFA charter member.',
    },
    outcomeEvidence: {
      value: 2,
      note:
        'The sponsorship count is specific enough to divide and is reported consistently against the funding line. Everything else is reach: 35.6 million people through emergency responses, 2.8 million gaining clean water, "over one million" this and that. At this scale a count of people reached is a count of where programmes operated, and no definition of "benefited from child sponsorship programs" is published.',
    },
    costEvidence: {
      value: 3,
      note:
        'A dedicated sponsorship funding line in an audited schedule and a matching count of sponsored children supported by US donors, in the same fiscal year, from documents World Vision publishes itself. That is the cleanest single-programme division in this category, and the reason a $39 ask can be checked here and not elsewhere.',
    },
  },
  notVerified: [
    'What "benefited from child sponsorship programs supported by World Vision donors in the U.S." counts, and whether it is the same thing as a registered sponsored child. The impact report gives 865,000 with no definition attached.',
    'The full amount spent around one sponsored child. Sponsored communities are also funded from the $664,640,000 relief, development, Christian impact and leadership line and from $233,294,000 of gifts-in-kind, so our $269 is dedicated sponsorship funding and not the total. No published document allocates community spending to sponsored children.',
    'Why a $468 annual sponsorship yields $269 of dedicated sponsorship funding. Fundraising at 10.1% and management at 4.1% of operating expenses account for part of it and the allocation of the rest across programme lines accounts for the remainder, but World Vision publishes no reconciliation of the two figures and this explanation is ours, not theirs.',
    'Which programmes were paused or stopped after the $142 million reduction in US government funding, and how many staff were let go. The impact report states that it happened and does not say what was lost.',
    'The country list. World Vision reports "a presence in nearly 100 countries" and we did not verify a country-by-country list, so this cause carries no cost-base table and is listed as global work.',
    'Whether "we welcomed the largest number of child sponsors in a decade" is consistent with the 865,000 figure. No sponsor count, as distinct from a sponsored-child count, is published.',
    'Of the $257.2 million of gifts-in-kind from corporate partners, $206 million was distributed in the United States alone. That is most of the value of the product donations, and it is domestic rather than international relief.',
    'Nothing independent of World Vision has verified the sponsored-child count. The audit covers the money, not the children.',
  ],
  notes: [
    'The published 86% programme ratio checks out: $1,222,847,000 of programme services against $1,425,840,000 of total operating expenses is 85.8%. International programmes were $987,716,000, domestic programmes $231,759,000, public awareness and education $3,372,000; fundraising was $144,263,000 and management and general $58,730,000.',
    'The child sponsorship funding line rose slightly year on year, from $228,374,000 to $232,484,000, while total programme services fell from $1,319,697,000 to $1,222,847,000. Sponsorship held while grant-funded work contracted.',
    'Joint costs are negligible — $1,039,000 in total, of which $588,000 was charged to fundraising. For an organisation that mails at this scale, that is a much cleaner allocation than several smaller ministries here.',
    'World Vision reported total revenue of $1.4 billion as its "third-highest result ever" in the same report in which it said revenue fell for the first time in ten years. Both are true and the framing is worth noticing.',
    'The sponsorship page is unusually honest about pooling. Most sponsorship ministries bury it in a donation FAQ; World Vision puts "Rather than going only to one child" on the page where the decision is made.',
  ],
  siteUrl: 'https://www.worldvision.org/',
  giveUrl: 'https://www.worldvision.org/sponsor-a-child',
  sources: [
    {
      id: 'wv-site',
      label: 'Homepage',
      url: 'https://www.worldvision.org/',
      publisher: 'World Vision',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'wv-mission',
      label: 'Mission Statement',
      url: 'https://www.worldvision.org/about-us/mission-statement',
      publisher: 'World Vision',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'The mission statement and the statement of belief in one God, Father, Son and Holy Spirit.',
    },
    {
      id: 'wv-sponsor',
      label: 'Sponsor a Child',
      url: 'https://www.worldvision.org/sponsor-a-child',
      publisher: 'World Vision',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'The $39 monthly ask and the explanation that funds are pooled to strengthen the child’s community rather than given to the child.',
    },
    {
      id: 'wv-accountability',
      label: 'Financial Accountability',
      url: 'https://www.worldvision.org/about-us/financial-accountability',
      publisher: 'World Vision',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'The 86% programme ratio, the 2.8 million and 865,000 sponsored-child figures, and the four accreditations listed on this cause.',
    },
    {
      id: 'wv-audit-25',
      label: 'FY2025 consolidated financial statements',
      url: 'https://wvusstatic.com/www/uploads/2026/01/23155842/FY25_WorldVisionInc_FS_wo-Supplementary-Sch.pdf',
      publisher: 'World Vision, Inc.',
      documentType: 'audited-financials',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note:
        'Year ended 30 September 2025, amounts in thousands. Programme services $1,222,847 of $1,425,840 total operating expenses. The functional expense schedule carries a discrete "Child sponsorship" funding line of $232,484 within international programmes, which is the numerator used here.',
    },
    {
      id: 'wv-impact-25',
      label: '2025 Impact Report',
      url: 'https://wvusstatic.com/www/uploads/2026/04/29142426/BC21685-FY26-Annual-Review_F-1.pdf',
      publisher: 'World Vision',
      documentType: 'annual-report',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note:
        'Source of the 865,000 US-supported sponsored children, the 2.8 million global figure, the emergency response and clean water counts, the $142 million loss of public-sector funding and the gifts-in-kind totals. The headline counts are set in designed spreads and were read from the rendered pages.',
    },
  ],
};
