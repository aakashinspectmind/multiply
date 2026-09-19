import type { Cause } from '@/lib/types';

export const literacyEvangelismInternational: Cause = {
  slug: 'literacy-evangelism-international',
  name: 'Literacy & Evangelism International',
  legalName: 'Literacy And Evangelism Inc',
  ein: '73-6111804',
  tagline:
    'Writes reading primers out of Bible text, gives them away, and trains the volunteers who teach from them. A $808,483 ministry reporting 71,112 new readers.',
  category: 'education',
  countries: [
    'Benin',
    'Burkina Faso',
    'Republic of Congo',
    'DR Congo',
    'Ghana',
    'Kenya',
    'Malawi',
    'Nigeria',
    'Togo',
    'India',
    'South Korea',
    'North Macedonia',
    'Ukraine',
    'Brazil',
    'Guatemala',
    'Canada',
    'United States',
  ],
  whatTheyDo:
    'LEI does three things. It builds basic reading primers — the phonics workbooks an adult learns to read from — in local languages, using Bible text as the reading material; more than 285 languages since 1967, with 526 of them posted free as PDFs. It trains the people who teach from them: church leaders, missionaries and volunteer tutors, 995 of them in 2025, plus online courses out of Tulsa. And it hands the work over: seventeen "Member Nation" organisations, autonomous and locally governed, carry the LEI name and method in their own countries, with a further 400-plus partner organisations using the materials. Founded in 1967 by Dr. Robert F. Rice, who was mentored by the literacy pioneer Frank Laubach; his son Rev. Dr. Sid V. Rice is now president.',
  accreditations: [],
  verification: 'documents-reviewed',
  biblicalAlignment: {
    mandate:
      'The clearest case in this directory of a bottleneck rather than a need. Nearly a billion adults cannot read, which means the command to teach children the words of God cannot be obeyed by their parents, the Bible in their own language cannot be read to them by anyone in the household, and every discipleship material ever printed is inert in their hands. Teaching one adult to read is the smallest intervention that unlocks all the others, because a Bible needs a reader. LEI also has no illusion about what it is doing: the primers teach reading out of Scripture, so the first thing a new reader reads is the text itself.',
    scriptures: [
      {
        ref: 'Deuteronomy 6:6–7',
        text: 'And these words that I command you today shall be on your heart. You shall teach them diligently to your children, and shall talk of them when you sit in your house, and when you walk by the way, and when you lie down, and when you rise.',
      },
      {
        ref: '2 Timothy 3:16–17',
        text: 'All Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in righteousness, that the man of God may be complete, equipped for every good work.',
      },
      {
        ref: 'Nehemiah 8:8',
        text: 'They read from the book, from the Law of God, clearly, and they gave the sense, so that the people understood the reading.',
      },
    ],
    doctrine: {
      label:
        'An eight-article statement of faith under the heading "Beliefs", covering the Bible as "inspired, infallible and completed Word", the Trinity, original sin, the virgin birth and substitutionary atonement, salvation by grace alone, the work of the Holy Spirit, the priesthood of all believers, and the final judgment with "the lost to eternal punishment".',
      sourceId: 'lei-mission',
    },
    concerns: [
      'The class is evangelistic by design, and a donor should decide about that on purpose rather than by accident. The reading material is Bible text, the ministry’s own name puts evangelism beside literacy, and its founding endorsement — printed on the mission page — is Frank Laubach saying literacy evangelism "is closer to the heart of God than any other…because (it can) win souls to Christ." The headline count is not "adults who can read", it is "New Bible Readers". Nobody is hidden here, but a free reading class for a non-reading adult carries an obvious asymmetry of power, and nothing published says whether learners are told in advance what they will be reading or whether anyone declines.',
      'There are no audited financial statements. The only financials LEI publishes are one-page summaries in the annual report, marked "* Unaudited", using categories it invented — Missionary Support, Mission Mobilization & Ministry, Management & General, Communication & Publicity, From Reserves. There is no program-services line, no fundraising line, and therefore no way for a donor to compute what share of a gift reaches a literacy class. The table also balances income to expenses to the dollar by putting a reserve line on both sides, one positive and one negative, so the year’s actual surplus or deficit cannot be read off the page.',
      'Governance is held inside one family. The president and chief executive, Rev. Dr. Sid V. Rice, is also chair of the board of trustees — he chairs the body that oversees him — the chief financial officer Roland Rice sits on the same board and shares the surname, and the founder was Dr. Robert F. Rice. For a ministry with no audit, a board chaired by the chief executive is the weakest possible check.',
      'Three-quarters of the spending is missionary support, and we cannot tell whose. $610,917 of $808,483 in 2025 is the line "Missionary Support", and LEI’s giving page solicits "Support LEI-US Missionaries" separately from "Support Member Nation Partners". Some of the named field directors are clearly nationals; some LEI-US roles are advertised as self-funded expatriate posts. The report does not split the line, so a donor cannot see how much of the budget supports American workers versus African and Asian ones.',
      'The ministry is shrinking. Total income fell from $959,450 to $808,483 in one year, a 16% drop, with missionary support down $114,176, and IRS data show expenses exceeding revenue in most of the last twelve years. This is a small organisation living off reserves while its reported output rises, which cannot continue indefinitely.',
    ],
  },
  roi: {
    levers: ['volunteer-leverage', 'multiplication', 'digital-distribution', 'existing-network'],
    reason:
      'The teaching is free. Classes are run by volunteer tutors in local churches, so the largest cost of education anywhere — a teacher’s time — is donated rather than purchased, and LEI pays for the primer and the training rather than the class. The training compounds: 995 teachers trained in 2025 go on teaching for years after the workshop ends. Distribution is close to costless, because 526 primers in 151 languages sit on the website as free PDFs and were pulled from 152 countries in 2025 without LEI shipping anything. And the channel already exists: seventeen autonomous national organisations and more than 400 partner bodies run the classes inside churches that are already gathered.',
  },
  costModel: {
    outcome: 'teacher trained to run a literacy class',
    outcomePlural: 'teachers trained to run literacy classes',
    spend: {
      amount: 808483,
      basis: 'total-expenses',
      fiscalYear: '2025',
      sourceId: 'lei-annual-2026',
    },
    count: {
      amount: 995,
      label: 'teachers trained',
      fiscalYear: '2025',
      sourceId: 'lei-annual-2026',
    },
    attribution: 'all-program-spend',
    caveat:
      'We do not divide by the number LEI leads with. Its headline is 71,112 new Bible readers, which against this budget would read $11.37 a reader — but those readers were taught by seventeen autonomous national organisations and more than 400 partner bodies with their own budgets, their own classrooms and their own volunteer tutors, none of which appear in this numerator and none of which LEI consolidates or publishes. Dividing LEI-US’s spending by other people’s output is not a cost per reader; nobody anywhere publishes what one new reader actually costs. A trained teacher is the unit LEI itself performs and pays for, so that is the denominator here, and it is an upper bound: the same $808,483 also developed primers in languages that will not produce a reader for years, ran English-as-a-second-language and refugee work in the United States, and paid for publicity and management. It also understates the teacher, who keeps running classes long after the workshop. The financials are the ministry’s own and explicitly unaudited, "new Bible reader" is nowhere defined, and LEI states its own statistics "represent a fraction" of the true total.',
    alternates: [
      {
        label: 'new Bible readers reported by LEI and its partners (71,112)',
        count: 71112,
        note: 'About $11.37, and the figure the ministry leads with. The floor of the range rather than a price, because the partner organisations that taught these readers carry costs that are nowhere in the numerator.',
      },
    ],
  },
  ministryClaims: [
    {
      quote:
        'Literacy & Evangelism International (LEI) equips the Church to share the message of Jesus Christ through the gift of reading.',
      sourceId: 'lei-mission',
    },
    {
      quote: 'For nearly 1 billion adults the Bible is a locked book because they cannot read.',
      sourceId: 'lei-site',
    },
    {
      quote:
        'Statistics represent a fraction of those learning to read with LEI’s materials. Since our materials are shared freely online, the total eternal and global impact is impossible to determine.',
      sourceId: 'lei-annual-2026',
    },
    {
      quote:
        'LEI continues to expand globally through its network of Member Nation partners, now 17 in number.',
      sourceId: 'lei-annual-2025',
    },
    {
      quote:
        'LEI’s Bible-content method of literacy has been used in the development of primers in more than 285 languages around the world.',
      sourceId: 'lei-primers',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 3,
      note: 'An eight-article statement of faith published in full, a mission statement that names Jesus Christ, primers built out of Bible text, and training aimed explicitly at "evangelism, discipleship and church planting". There is no ambiguity about what this ministry is for.',
    },
    localLeadership: {
      value: 2,
      note: 'The teaching is done entirely by nationals and volunteers through seventeen autonomous, indigenous, self-governing Member Nation organisations, which is the strongest possible field model. Held at 2 rather than 3 because LEI-US itself is American, family-led, and spends 76% of its budget on a "Missionary Support" line it does not break down between expatriate and national workers, while separately soliciting gifts for "LEI-US Missionaries".',
    },
    financialTransparency: {
      value: 1,
      note: 'Annual reports going back to 2022 are posted, which is more than many small ministries manage, and the president’s letter is signed. But there is no audit, the figures are marked unaudited, the categories are not GAAP and contain no program or fundraising line, the reserve movement is shown on both sides of the table, the /legal page promises downloadable 990s and provides none, and the chief executive chairs the board. A donor cannot check this ministry’s books from this ministry’s documents.',
    },
    outcomeEvidence: {
      value: 1,
      note: 'The counts are precise to the digit — 71,112 readers, 995 teachers, 526 primers in 151 languages — and entirely undefined. "New Bible reader" is never explained: enrolled, finished the primer, or tested. The impact page carries no reporting period at all. The figures are reported up from partners LEI does not control, and LEI itself says they are a fraction of the real total. There is no completion rate, no drop-out figure and no reading assessment anywhere.',
    },
    costEvidence: {
      value: 1,
      note: 'Both halves sit on facing pages of one document for one year, which is why a division is possible at all. Scored low because the numerator is one American organisation’s unaudited spending and the denominator is the output of a network whose costs are nowhere published — the two are not measuring the same enterprise.',
    },
  },
  notVerified: [
    'There are no audited financial statements. Both annual reports we read mark the financial page "* Unaudited", and we found no audit posted for any year. Every figure in our division is the ministry’s own arithmetic.',
    'No program-services, management or fundraising split exists in anything LEI publishes, because its categories are internal. We cannot say what share of $808,483 reached a literacy class, and neither can a donor.',
    'The impact page carries no reporting period. The financial page is headed "Financial Report 2025" and the website statistics are introduced with "In 2025", but the 71,112 and 995 are printed with no dates at all. We have treated them as 2025; if they cover a different span, the division is wrong.',
    '"New Bible reader" is undefined. Nothing states whether it counts people who enrolled in a class, completed a primer, or demonstrated reading ability, and no completion or drop-out figure is published anywhere.',
    'The count comes up from seventeen autonomous organisations and 400-plus partners whose finances LEI does not consolidate and whose numbers nobody audits. Their spending on teachers, rooms and locally printed materials is not in our numerator, so the true cost of a new reader is higher than our figure by an unknown amount.',
    'LEI says the reported statistics "represent a fraction" of those learning from its materials, because the primers are free to download. So the denominator is also an undercount by the ministry’s own statement, pushing the error the other way. Both directions are live and neither is quantified.',
    'ProPublica’s IRS summary shows FY2024 revenue of $906,083 against the annual report’s FY2024 income of $959,450. The difference is unexplained, and we could not obtain any Form 990 PDF — ProPublica’s download path is blocked and the /legal page that promises the 990 has no working link to one.',
    'IRS data for FY2023 show $84,485 of current-officer compensation, although the model is that workers raise their own support. Without the full 990 we cannot see whose salary that is or how it relates to the Missionary Support line.',
    'No accreditation is displayed anywhere on the site — no ECFA seal, no Charity Navigator badge, no Candid seal — and we could not confirm any independent accreditation from a source we can cite. We have left the accreditations list empty rather than guess.',
    'The 526 primers downloaded in 151 languages from 152 countries is a download count, not a reader count. Nothing published connects a download to a class or a learner.',
    'We treat the ministry’s framing of results as spiritual — "New Bible Readers", and its founding endorsement about winning souls — as claims, not outcomes. We do not count professions of faith or spiritual change as measurable results.',
  ],
  notes: [
    'Scale check against IRS filings: total functional expenses have sat between $830,000 and $1,006,000 every year from 2012 to 2023, with revenue below expenses in most of them. This is a stable, small, slowly declining organisation, not a growth story.',
    'Nearly all the leverage here is in the primer. Once a primer exists in a language it can be taught by any volunteer, printed by anyone, and downloaded free forever; the marginal cost of the next reader in that language is close to zero for LEI. The expensive, slow part — sending linguists to build a primer in a language that has never had one — is the part a donor is actually funding.',
    'The 2026 report names an ESL series, Firm Foundations, newly revised after five years of online collaboration and released free as well as on Amazon. US work is a real part of this ministry, not only overseas literacy.',
  ],
  siteUrl: 'https://www.literacyevangelism.org/',
  giveUrl: 'https://www.literacyevangelism.org/give',
  sources: [
    {
      id: 'lei-site',
      label: 'Homepage',
      url: 'https://www.literacyevangelism.org/',
      publisher: 'Literacy & Evangelism International',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'lei-mission',
      label: 'Our Mission, Strategy, Beliefs and Core Values',
      url: 'https://www.literacyevangelism.org/mission',
      publisher: 'Literacy & Evangelism International',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Carries the mission statement, the three-part strategy, the eight-article statement of faith, the core values, and the Laubach endorsement about winning souls to Christ.',
    },
    {
      id: 'lei-annual-2026',
      label: 'Annual Report 2026 (activity and financial report for 2025)',
      url: 'https://www.literacyevangelism.org/sites/default/files/2026-05/LEI%20Annual%20Report%202026.pdf',
      publisher: 'Literacy & Evangelism International',
      documentType: 'annual-report',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note: 'Both halves of our division are in this PDF: the "Financial Report 2025*" page showing total expenses of $808,483 (Missionary Support $610,917, Mission Mobilization & Ministry $170,074, Management & General $52,128, Communication & Publicity $24,447, From Reserves −$49,083) marked "* Unaudited", and the impact page showing 71,112 new Bible readers and 995 teachers trained with no reporting period stated.',
    },
    {
      id: 'lei-annual-2025',
      label: 'Annual Report 2025 (activity and financial report for 2024)',
      url: 'https://www.literacyevangelism.org/sites/default/files/2025-04/LEI%20Annual%20Report%202025%20DRBFINAL4-21-25.pdf',
      publisher: 'Literacy & Evangelism International',
      documentType: 'annual-report',
      retrieved: '2026-09-18',
      fiscalYear: '2024',
      note: 'The prior year for comparison: total expenses $959,450, 58,170 new Bible readers, 1,220 teachers trained, and the president’s statement that the Member Nation network is "now 17 in number". We did not mix these figures with the 2025 ones.',
    },
    {
      id: 'lei-primers',
      label: 'Primers (free downloads by language)',
      url: 'https://www.literacyevangelism.org/resources/primers',
      publisher: 'Literacy & Evangelism International',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Source of the cumulative "more than 285 languages" claim, which carries no date.',
    },
    {
      id: 'lei-partners',
      label: 'Member Nation Partners and partner organisations',
      url: 'https://www.literacyevangelism.org/mission/partners',
      publisher: 'Literacy & Evangelism International',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'The seventeen Member Nation organisations used for this cause’s country list, plus the wider partner roster.',
    },
    {
      id: 'lei-propublica',
      label: 'IRS filings for Literacy And Evangelism Inc, EIN 73-6111804',
      url: 'https://projects.propublica.org/nonprofits/organizations/736111804',
      publisher: 'ProPublica Nonprofit Explorer',
      documentType: 'third-party',
      retrieved: '2026-09-18',
      note: 'Twelve years of total revenue and total functional expenses, used only as a scale check. It carries no program/management/fundraising split, and its Form 990 download path is blocked.',
    },
  ],
};
