import type { Cause } from '@/lib/types';

export const trainingLeadersInternational: Cause = {
  slug: 'training-leaders-international',
  name: 'Training Leaders International',
  legalName: 'Training Leaders International',
  ein: '80-0366071',
  tagline:
    'Sends theologically trained teachers to 37 training sites in 24 countries. Spends $7 million a year and publishes no financial document of its own.',
  category: 'training',
  countries: ['Global', 'Uganda', 'Kenya', 'Ethiopia', 'Brazil', 'Philippines'],
  whatTheyDo:
    'TLI started in 2009 as a ministry of Bethlehem Baptist Church in Minneapolis, sending seminary students overseas to teach. It now works four ways: modular non-formal training for pastors who have no access to a school, teaching modular courses inside existing accredited seminaries, planting degree-granting schools, and sending long-term "global partners" — administrators, professors, trainers, school planters and international-church pastors. It also runs diaspora training inside the United States, at church partners in Houston, Bozeman, Madison and Brooklyn Park. Teaching is done by Americans with graduate theological training who are mentored before they go; TLI states that every trip happens at the request of, in cooperation with, and in submission to national leaders. Its curriculum is written for pastors with limited or no prior training and is translated into 15 languages.',
  accreditations: [],
  verification: 'documents-reviewed',
  biblicalAlignment: {
    mandate:
      'Ephesians 4 names teachers as a gift given for the equipping of the saints, and the whole of TLI’s argument is that this gift is distributed very unevenly — that 85% of the world’s evangelical churches are led by men nobody ever taught. Titus 1:9 makes the consequence concrete: an elder must hold the trustworthy word in order to give instruction in sound doctrine and rebuke those who contradict it, and TLI’s campaign page names exactly those contradictions — prosperity teaching, signs-and-wonders authority that cannot be questioned, pastors fleecing poor congregations. 2 Timothy 2:2 is the stated end goal: pastors who can train others.',
    scriptures: [
      {
        ref: 'Ephesians 4:11–13',
        text: 'And he gave the apostles, the prophets, the evangelists, the shepherds and teachers, to equip the saints for the work of ministry, for building up the body of Christ, until we all attain to the unity of the faith and of the knowledge of the Son of God.',
      },
      {
        ref: '2 Timothy 2:2',
        text: 'And what you have heard from me in the presence of many witnesses entrust to faithful men who will be able to teach others also.',
      },
      {
        ref: 'Titus 1:9',
        text: 'He must hold firm to the trustworthy word as taught, so that he may be able to give instruction in sound doctrine and also to rebuke those who contradict it.',
      },
      {
        ref: 'Hosea 4:6',
        text: 'My people are destroyed for lack of knowledge.',
      },
    ],
    doctrine: {
      label: 'What We Believe — The Gospel Coalition’s Confessional Statement',
      sourceId: 'tli-believe',
    },
    concerns: [
      'TLI publishes no financial information at all. There is no financials page, no annual report, no audit and no Form 990 on its website; we checked. Every figure on this page — including both halves of the cost model — comes from the return TLI e-filed with the IRS, read through ProPublica. For a ministry whose board includes a wealth manager and a law-firm partner, and whose advisory board reads like a roster of American evangelical publishing, that is a conspicuous absence.',
      'The 2024 return discloses a business transaction with the founder: Schedule L reports $12,000 paid to Darren Carlson, described as "Trust SOLA Software" and explained as "Sofware for donation trac". It is small and it is disclosed, which is how this is supposed to work; a donor reading only TLI’s website would not know it happened. Schedule L was also filed in 2023 and we have not read that year.',
      'This is a sent-teacher model priced in dollars. Salaries and wages were $4,581,943 of $7,054,341 in expenses in 2024 — 65% — and the ministry’s own description of the work is short-term trips flown from the United States. The students are local and the training is free to them, but the cost structure is American.',
      'Part of the program is domestic. The diaspora sites in Houston, Bozeman, Madison, Brooklyn Park and Oahu train immigrant and refugee pastors inside the United States. That is real work, and it is not majority-world work; nothing published tells a donor what share of the budget it takes.',
      'The security posture is inconsistent. The who-we-are page says "We have chosen not to list staff and global partners due to the sensitive nature of our work" — but the giving form lists more than fifty staff by initial and surname with job titles, names short-term team members in full, and names 33 training sites including three that it simultaneously marks undisclosed. If the sensitivity is real, the giving page undoes it.',
      'TLI is candid that a single trained pastor changes a congregation, and the 85% page says "lives are changed" and describes believers being protected from deception. We do not treat spiritual results as measurable outcomes and have not counted them.',
    ],
  },
  roi: {
    levers: ['multiplication', 'existing-network'],
    reason:
      'The leverage here is that the students are already pastors. TLI does not recruit, house, feed or employ them — they have congregations, salaries and standing before TLI arrives, and the stated aim is that they go on to train others, which is why the curriculum is built to be reproducible rather than lectured once. Sites are hosted inside churches, denominations and existing seminaries, so the gift buys teaching rather than a campus. The low-wage lever that makes most majority-world giving cheap does not apply: two-thirds of TLI’s budget is salary, and the teaching is delivered by people flown in from the United States, so a donor is buying American academic labour to be spent in a low-income country rather than buying local labour.',
  },
  costModel: {
    outcome: 'training session held',
    outcomePlural: 'training sessions held',
    spend: {
      amount: 6443672,
      basis: 'program-services',
      fiscalYear: '2024',
      sourceId: 'tli-990-24',
    },
    count: {
      amount: 98,
      label: 'training sessions held at 35 sites, foreign and domestic',
      fiscalYear: '2024',
      sourceId: 'tli-990-24',
    },
    attribution: 'all-program-spend',
    caveat:
      'Both halves come out of one document, the Form 990 Training Leaders International e-filed for calendar 2024: Part IX reports $6,443,672 of program services inside $7,054,341 of total expenses, and Part III reports that "In 2024 Training Leaders International held 98 training sessions at 35 sites both foreign and domestically." We price the session rather than the site because a session is an event TLI convened inside the same twelve months the money was spent, while a site persists across years. Three things make $65,752 a ceiling and not a price. The numerator is the entire program budget, and the same money paid for long-term "global partners" sent to serve in schools and international churches, for planting degree-granting schools, for curriculum translated into 15 languages and for $141,701 of grants to organisations abroad — none of which is a training session, so the sessions are carrying costs they did not incur. The numerator is also mostly American: Schedule F shows only $1,469,992 of program spending left the United States, and roughly $4.6 million of the program figure is salaries, pensions and payroll taxes, against just $227,959 of program travel. And TLI never defines a session — no hours, no curriculum length, no completion standard — and the sentence it filed describing them breaks off mid-clause at "to understand and communicate the". We do not divide by the number the ministry leads with, the "over 1,000" pastors in that same sentence: it is a rounded floor, it has stood unchanged on TLI’s own pages since about 2019 while annual spending rose 58%, and it makes no distinction between a pastor who sat one module and one who finished a degree.',
    alternates: [
      {
        label: 'the "over 1,000" pastors TLI says it trained in the same year',
        count: 1000,
        note: 'At most $6,444, and the figure TLI leads with everywhere. It is a floor rather than a count — "over 1,000" — it appears with two incompatible periods on two of TLI’s own pages, and it has not moved in roughly seven years while spending grew by more than half. Treat it as the order of magnitude TLI is willing to stand behind, not as a denominator.',
      },
      {
        label: 'the 35 training sites the same return reports',
        count: 35,
        note: 'About $184,105 per site for the year. A site is a standing partnership inside a church, denomination or seminary, so a year of spending against a count of sites answers a different question: what it costs to keep a place supplied with teaching, not what one delivery of teaching costs.',
      },
    ],
  },
  ministryClaims: [
    {
      quote:
        'In 2024 Training Leaders International held 98 training sessions at 35 sites both foreign and domestically. Through these trainings we were able to train over 1,000 pastors to understand and communicate the',
      sourceId: 'tli-990-24',
    },
    {
      quote:
        'Around the world, there are 2.2 million evangelical churches. 85% are led by pastors with no formal theological training.',
      sourceId: 'tli-site',
    },
    {
      quote: 'Trained over one thousand leaders',
      sourceId: 'tli-85',
    },
    {
      quote: 'Developed 37 training sites in 24 countries',
      sourceId: 'tli-85',
    },
    {
      quote: 'Planted 5 schools across the globe',
      sourceId: 'tli-85',
    },
    {
      quote:
        'Today, TLI is training over 1,000 leaders globally, sending people around the world, and has planted three degree-granting schools that train pastors.',
      sourceId: 'tli-believe',
    },
    {
      quote:
        'Training Leaders International has adopted The Gospel Coalition’s Confessional Statement. All of our board members, teachers, mentors, and sent global partners must joyfully subscribe to this statement.',
      sourceId: 'tli-believe',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 3,
      note: 'TLI has adopted The Gospel Coalition’s Confessional Statement and requires every board member, teacher, mentor and sent partner to subscribe to it. The content of the work is theology, and the threat it names is false teaching. There is nothing vague to score down.',
    },
    localLeadership: {
      value: 1,
      note: 'The invitation, the host church and the students are all local, and TLI says it teaches in submission to national leaders — but the teaching itself is done by Americans who travel, and the long-term "global partners" being sent are also from the sending country. Local believers are the beneficiaries of this model rather than its staff.',
    },
    financialTransparency: {
      value: 1,
      note: 'Nothing financial is published by the ministry: /financials, /about/financials and /annual-report all return 404. Two things save it from a zero — the board and advisory board are named in full with their outside affiliations, which is more than most ministries in this theme do, and the return TLI files is unusually informative, with a full Part IX, a Schedule F that splits foreign spending by region and a Schedule L that names the founder transaction. Every one of those facts reaches a donor only because the IRS makes it public.',
    },
    outcomeEvidence: {
      value: 2,
      note: 'The return is the only place TLI counts anything with a date on it: 98 training sessions at 35 sites in calendar 2024, signed under penalty of perjury. That is what lifts this off a 1. Everything the ministry publishes itself is unusable — the campaign page says "1,000+" leaders "Since its founding", the beliefs page says TLI is "training over 1,000 leaders globally" today, and the same number cannot be both a seventeen-year total and a current annual figure. The two pages also disagree on schools planted, five against three, and the campaign page still promotes a documentary as forthcoming in June 2019.',
    },
    costEvidence: {
      value: 2,
      note: 'The spending line and the activity count are printed in the same return, for the same organisation and the same twelve months, which is the strongest form this evidence takes. Held at 2 rather than 3 because the unit is a session rather than a person, TLI publishes no definition of one, and the ministry itself puts no cost figure of any kind in front of a donor — no cost per pastor, per site, per course or per trip appears anywhere on its site.',
    },
  },
  notVerified: [
    'How many pastors TLI trains in a year. The 2024 return settles the period — "over 1,000" is what TLI claims for that one year, not for its whole history — but not the number. It is a floor, not a count, it is the same floor the website has shown since about 2019 while annual spending rose from $4,465,036 to $7,054,341, and TLI publishes no year-by-year figure to compare it against.',
    'What a training session is. The count of 98 is exact and dated, and it is the only thing about it that is. There is no stated length, no minimum hours, no curriculum standard and no completion requirement, and the sentence TLI filed to describe the sessions breaks off mid-clause. A week-long modular cohort and a single evening of teaching would both be a session.',
    'Whether 98 sessions is more or fewer than last year. TLI has reported a session count in exactly one filing. No prior-year figure exists in any document we found, so there is no trend and no way to tell whether 2024 was typical.',
    'Whether "trained" means a week of modular teaching or a completed degree. TLI does all of it — non-formal modular cohorts, modular courses inside accredited seminaries, and full degree programmes at schools it planted — and the same "1,000 leaders" covers every one of them. A figure that lumps a short-course attendee with an MDiv graduate cannot be priced, and TLI publishes no breakdown.',
    'Whether the 1,000 counts people or enrolments. A pastor in a multi-year cohort attends repeatedly; nothing says whether he is counted once or once per module.',
    'Five schools planted or three. The campaign page says five, the beliefs page says three. Neither names all of them in one list; the where-we-work map labels some sites "School Plant" and others "Global Partner" without a total. The site count has the same problem in miniature: 37 on the campaign page, 33 named on the giving form, 35 in the 2024 return.',
    'What the program money bought, beyond its headings. Part IX gives the split — $6,443,672 program, $338,974 administration, $271,695 fundraising — but it is a list of inputs, not activities: $4,075,640 of wages, $886,528 of "Missionary and Ministry", $227,959 of travel, $141,701 of foreign grants, $133,058 of accounting fees. Nothing anywhere attributes any of it to the 98 sessions, to the sent global partners, to the planted schools or to the US diaspora sites.',
    'How much of the work is domestic. Schedule F answers half of this: $1,469,992 of program spending left the United States in 2024, across Sub-Saharan Africa ($260,911), the Middle East and North Africa ($837,581), Europe ($168,430), East Asia and the Pacific ($104,181) and South America ($98,889), with ten employees abroad and a single $122,901 grant to one organisation in North America. So roughly three-quarters of program spending was incurred in the United States. What that pays for is not disclosed — some is support for the foreign work, some is the diaspora training in Texas, Montana, Wisconsin, Minnesota and Hawaii, and no split is published.',
    'Why TLI ran deficits two years running — net income of −$166,750 in 2023 and −$459,652 in 2024, with net assets falling from $2,879,904 to $2,449,643. No published document explains it.',
    'The 85% statistic and the 2.2 million evangelical churches figure. Both are presented on the homepage with no source. The number is the name of TLI’s main campaign and the premise of its case for support.',
    'Who teaches what. TLI deliberately does not publish its staff or global partners, so a donor cannot check the qualifications behind "sending teachers" beyond the two named leaders and the requirement that everyone subscribe to the confessional statement.',
    'Whether TLI Canada’s money and counts are inside or outside these figures. The giving form offers a separate TLI Canada path and the staff list names a President of TLI Canada and an Executive Director of TLI Europe, none of which appears in the US return we read.',
  ],
  notes: [
    'The figure on this page is a session, not a pastor, and that is a deliberate refusal. Pricing the pastor is the obvious move and it does not survive contact with the documents: $7,054,341 of 2024 spending against "over 1,000 leaders" reads as roughly $7,000 per leader if the count is annual and roughly $33,000 if it is cumulative — IRS data records $32,701,199 of expenses across 2018 through 2024, and the 2020 filing has no extracted data, so the lifetime total is higher still. TLI’s own two pages support one reading each. The Form 990 resolves the period in favour of the annual reading, but it cannot fix the number itself, which is a rounded floor that has not moved in seven years. The sessions are the one thing TLI counts exactly.',
    'For scale, from IRS data: 2024 revenue $6,594,689 against expenses of $7,054,341; 2023 $6,520,267 against $6,687,017; 2022 $6,139,946 against $5,816,164; 2019 $4,752,440 against $4,465,036. Contributions are 99.3% of revenue and program service revenue is zero, so students are not charged.',
    'The board is genuinely independent-looking and entirely uncompensated on paper: ten voting members named on the site and twelve in the 2024 return, every one of them at $0, with an advisory group including D.A. Carson, John Piper, Michael Oh and Robert Yarbrough. It is the one part of TLI’s governance a donor can actually inspect.',
    'TLI’s where-we-work map is the most useful document it publishes. Each of the roughly 33 sites gets a paragraph naming the partner institution and the context — formal, non-formal, international church, school plant, diaspora — which is far more specific than the aggregate counts on the campaign page. It contains no numbers.',
  ],
  siteUrl: 'https://trainingleadersinternational.org/',
  giveUrl: 'https://trainingleadersinternational.org/give',
  sources: [
    {
      id: 'tli-site',
      label: 'Homepage',
      url: 'https://trainingleadersinternational.org/',
      publisher: 'Training Leaders International',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: 'Source of the 2.2 million churches and 85% untrained figures, neither of which carries a citation.',
    },
    {
      id: 'tli-who',
      label: 'Who We Are',
      url: 'https://trainingleadersinternational.org/about/who-we-are',
      publisher: 'Training Leaders International',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: 'Names the president and founder and lists the full voting board and advisory board with their outside affiliations. States that staff and global partners are deliberately not listed.',
    },
    {
      id: 'tli-believe',
      label: 'What We Believe',
      url: 'https://trainingleadersinternational.org/about/what-we-believe',
      publisher: 'Training Leaders International',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: 'Mission, vision, values and the adopted Gospel Coalition Confessional Statement. Also the source of the "training over 1,000 leaders globally" present-tense claim and the "three degree-granting schools" figure.',
    },
    {
      id: 'tli-85',
      label: '85% Campaign',
      url: 'https://trainingleadersinternational.org/85',
      publisher: 'Training Leaders International',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: 'The stat block reading 1,000+ leaders, 5 schools, 300+ short-term trips, 15 languages, 37 training sites in 24 countries, 50+ staff and partners — all introduced as "Since its founding". The page still promotes a documentary as forthcoming in June 2019, which dates the figures on it.',
    },
    {
      id: 'tli-where',
      label: 'Where We Work',
      url: 'https://trainingleadersinternational.org/about/where-we-work',
      publisher: 'Training Leaders International',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: 'Site-by-site descriptions covering roughly thirty countries and the US diaspora locations, tagged by context and type of work. Contains no counts or costs.',
    },
    {
      id: 'tli-give',
      label: 'Give Now',
      url: 'https://trainingleadersinternational.org/give',
      publisher: 'Training Leaders International',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: 'The designation menus on this page are the fullest inventory TLI publishes: 33 named training sites, 18 global partner families, more than fifty staff by initial and surname, and a separate TLI Canada giving path.',
    },
    {
      id: 'tli-propublica',
      label: 'Training Leaders International — IRS filings',
      url: 'https://projects.propublica.org/nonprofits/organizations/800366071',
      publisher: 'ProPublica Nonprofit Explorer',
      documentType: 'form-990',
      retrieved: '2026-09-19',
      fiscalYear: '2024',
      note: 'Where we found the filing history. Calendar 2024: revenue $6,594,689, expenses $7,054,341, net income −$459,652, net assets $2,449,643, executive compensation $151,900, other salaries and wages $4,430,043. Earlier years: 2023 $6,520,267 against $6,687,017; 2022 $6,139,946 against $5,816,164; 2019 $4,752,440 against $4,465,036.',
    },
    {
      id: 'tli-990-24',
      label: '2024 Form 990, as e-filed (full return)',
      url: 'https://projects.propublica.org/nonprofits/organizations/800366071/202513179349306866/full',
      publisher: 'Internal Revenue Service, via ProPublica Nonprofit Explorer',
      documentType: 'form-990',
      retrieved: '2026-09-19',
      fiscalYear: '2024',
      note: 'Calendar 2024, the only document either half of the cost model comes from. Part IX: $6,443,672 program, $338,974 management and general, $271,695 fundraising, $7,054,341 total. Part III: the 98 sessions at 35 sites, in a sentence TLI filed truncated. Schedule F: $1,469,992 spent abroad across five regions, ten employees overseas, one $122,901 grant to a North American organisation. Schedule L: $12,000 to Darren Carlson for "Trust SOLA Software". Part V reports 62 employees. TLI does not post this return; ProPublica blocks automated retrieval of the PDF, so we read the e-filed XML the IRS publishes and checked it against this rendering of the same filing.',
    },
  ],
};
