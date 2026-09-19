import type { Cause } from '@/lib/types';

export const lukeSociety: Cause = {
  slug: 'luke-society',
  name: 'Luke Society',
  legalName: 'The Luke Society, Inc.',
  ein: '84-0563440',
  tagline:
    'Funds 40 clinics run by local Christian doctors in their own countries, and deliberately sends no Americans to work in them.',
  category: 'health',
  countries: [
    'Benin',
    'Bolivia',
    'Cameroon',
    'Chad',
    'China',
    'Dominican Republic',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Ghana',
    'Guatemala',
    'Haiti',
    'India',
    'Indonesia',
    'Kenya',
    'Kyrgyzstan',
    'Laos',
    'Liberia',
    'Mali',
    'Mexico',
    'Myanmar',
    'Nepal',
    'Nicaragua',
    'Niger',
    'Philippines',
    'South Sudan',
    'Sri Lanka',
    'Ukraine',
  ],
  whatTheyDo:
    'The Luke Society finds Christian doctors, nurses and dentists who already live in a poor community, and pays for the clinic or community health programme they want to run among their own people. It sends money, monthly mentoring, prayer and an annual visit; it does not send clinicians. Each ministry is owned and directed by the national who founded it. Four regional coordinators, also nationals, oversee the ministries in their part of the world, and volunteer Partnership Ministry Teams of American health and business professionals advise individual directors. Founded in 1964 by Christian Reformed doctors to rescue a hospital in Rehoboth, New Mexico, it moved overseas in 1980 and has supported 86 ministry sites in 44 countries since.',
  accreditations: [
    {
      label: 'ECFA member (claimed on the ministry’s own page; we could not confirm it in ECFA’s directory)',
      sourceId: 'ls-give',
    },
  ],
  verification: 'documents-reviewed',
  biblicalAlignment: {
    mandate:
      'The ministry is named after a physician who is remembered for going with someone else rather than for a hospital he built. Paul’s method was to preach, appoint local elders and leave, and the churches he left behind were led by people who already lived there and needed no interpreter. The Luke Society has applied that to medicine and drawn the obvious conclusion: the person best placed to heal a village and speak to it about Christ is a doctor from that village. Its refusal to send Americans is not a cost-saving measure, it is an ecclesiology.',
    scriptures: [
      {
        ref: 'Colossians 4:14',
        text: 'Luke the beloved physician greets you, as does Demas.',
      },
      {
        ref: 'Matthew 9:35–36',
        text:
          'And Jesus went throughout all the cities and villages, teaching in their synagogues and proclaiming the gospel of the kingdom and healing every disease and every affliction. When he saw the crowds, he had compassion for them, because they were harassed and helpless, like sheep without a shepherd.',
      },
      {
        ref: '1 Corinthians 3:6–7',
        text:
          'I planted, Apollos watered, but God gave the growth. So neither he who plants nor he who waters is anything, but only God who gives the growth.',
      },
    ],
    doctrine: {
      label: 'Seven-clause statement of faith, adopted from the ECFA doctrinal statement',
      sourceId: 'ls-about',
    },
    concerns: [
      'The ministry is accumulating money far faster than it spends it. Net assets went from $6,446,790 at the end of 2019 to $17,755,453 at the end of 2025 while annual expenses stayed flat at between $2.3 million and $2.9 million. At the end of 2025 it held $15,461,538 of publicly traded securities and $17,755,453 of net assets against $2,829,489 of spending — 6.3 years of expenses, and 5.3 years of it with no donor restriction on it at all. Reserves are prudent, and a ministry whose partners are in Ukraine, Myanmar and South Sudan has a real case for holding some. But no reserve policy, target or capital plan is published anywhere, because nothing financial is published anywhere.',
      'Nothing financial is published on the ministry’s own website. No audited statements, no Form 990, no annual report, no expense breakdown, not even a finance page. The Form 990 confirms that audited statements exist and that a board committee oversees the audit; Schedule O’s answer on making governing documents and financial statements public is "DOCUMENTS AVAILABLE UPON REQUEST." Every financial figure on this page came from the IRS return, which we retrieved from ProPublica rather than from the Luke Society.',
      'Schedule F answers "No" to whether the organisation maintains records substantiating the amount of its foreign grants, the grantees’ eligibility, and the selection criteria used — against $1,536,026 of grants. The same schedule then describes a serious monitoring regime: monthly financial reports from every ministry, a regional coordinator in regular contact, and an annual evaluation visit from the US office. Those two answers are hard to hold together, and the schedule also leaves every one of the 40 recipient organisations unnamed, with the purpose of each grant given only as "GENERAL MINISTRY SUPPORT" or "CAPITAL".',
      'Giving fell hard in 2025. Contributions dropped 42%, from $5,272,189 to $3,051,537, and investment income and asset sales supplied $1,547,187 — a third of total revenue. The ministry still ran a $1,769,302 surplus. Neither the fall nor the surplus is explained anywhere, because there is nowhere it could be explained.',
      'The clinics are explicitly evangelistic, and a donor should be clear-eyed about what that means in practice. The ministry says "Everything we do at the Luke Society is evangelistically focused with Jesus Christ as our foundation’s Solid Rock." Its Monrovia clinic page says it is "the only clinic around where patients hear the Word of God" and that it "has daily devotions in the waiting room with patients". We think medicine and proclamation belong together and this is the plainest case of it in the category. It is also true that a sick person in a waiting room is not free to leave, and nothing published sets out how consent is handled.',
      'Governance is small and long-tenured, and two board members are related: Schedule O discloses that Doug Van Hofwegen and Holly Van Hofwegen, who is treasurer, have a family relation. Set against that, all 12 voting members are independent, none is compensated, and the conflict of interest, whistleblower and document retention policies are all in place.',
    ],
  },
  roi: {
    levers: ['local-workers', 'local-cost-base', 'durable-asset', 'multiplication'],
    reason:
      'This is the cheapest structure in the health category for a simple reason: there is no expatriate to pay for. No airfare, no international salary, no housing allowance, no language school, no security evacuation. The average ministry received $32,874 of cash in 2025 and that money buys a clinic staffed at local wages — the Monrovia ministry alone employs 53 people and sees more than 800 patients a month on it. Roughly 38% of the grant money, $497,342, was capital: buildings and equipment that keep working after the grant stops. And the model has an exit: of 86 ministry sites supported since 1964, 40 are active, and the ministry says some of the others "graduate to a point of self-sustainability" — a funder that successfully stops funding is the rarest form of multiplication there is.',
  },
  costModel: {
    outcome: 'indigenous health ministry supported for a year',
    outcomePlural: 'indigenous health ministries supported for a year',
    spend: {
      amount: 2358948,
      basis: 'program-services',
      fiscalYear: '2025',
      sourceId: 'ls-990-25',
    },
    count: {
      amount: 40,
      label: 'foreign ministries supported',
      fiscalYear: '2025',
      sourceId: 'ls-990-25',
    },
    attribution: 'all-program-spend',
    caveat:
      'Read this as the cost of sustaining one clinic for a year, not as a cost per patient — it cannot be compared with any cost per surgery on this site. It over-attributes in one specific way: only $1,314,978 of the $2,358,948 was actually wired to the 40 ministries, about $32,874 each. The rest paid four regional coordinators ($221,048 between them) and the US mentoring, monitoring and annual-visit work that the ministry treats as programme rather than overhead — defensible, since consulting support is half of what it says it provides, but it is not money the clinic receives. The denominator is also confirmed twice, which is worth noting in a category where counts rarely agree: the Form 990 says 40 foreign organisations were supported during the year, and the ministry’s own history page says it entered 2025 partnering with 40 ministries.',
    alternates: [
      {
        label: 'ministries and regional coordinators supported',
        count: 44,
        note:
          'About $53,600 each. Adding the four coordinators to the denominator treats a supervisor and a clinic as the same unit, which they plainly are not — but it is the denominator the Form 990 itself uses in one sentence.',
      },
      {
        label: 'countries with an active ministry',
        count: 29,
        note:
          'About $81,300 per country, which is the broadest unit available and the least meaningful. Mali and Niger each have three or four separate ministries; one country in the count has none that is publicly named.',
      },
    ],
  },
  ministryClaims: [
    {
      quote:
        'We do not send doctors, missionaries or work groups from the United States to our international locations to conduct projects or provide medical care. We empower and encourage citizens in their own countries, which promotes human dignity, local skills and sustainable infrastructure.',
      sourceId: 'ls-about',
    },
    {
      quote: 'Nearly 90 percent of every dollar donated to the Luke Society goes directly to ministry needs.',
      sourceId: 'ls-give',
    },
    {
      quote:
        'At the beginning of 2025, the Luke Society is actively partnering with 40 ministries in 29 different countries — a span that reaches across five continents.',
      sourceId: 'ls-history',
    },
    {
      quote:
        'PROVIDE FINANCIAL AND CONSULTING SUPPORT TO PROGRAMS OPERATED BY LOCAL, INDIGENOUS, CHRISTIAN LEADERS WHO HAVE A VISION TO REACH THEIR OWN PEOPLE THROUGH HEALTH CARE AND THE GOSPEL OF CHRIST. 40 FOREIGN ORGANIZATIONS AND 4 FOREIGN REGIONAL COORDINATORS WERE SUPPORTED DURING THE YEAR.',
      sourceId: 'ls-990-25',
    },
    {
      quote:
        'Ours is a Christ-centered ministry of evangelism and discipleship, transforming communities by reconciling man to man and man to God through the truth of the Gospel.',
      sourceId: 'ls-about',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 3,
      note:
        'A seven-clause statement of faith, a mission statement that ends on evangelism and discipleship, and a stated position that "Everything we do at the Luke Society is evangelistically focused". Ministry directors are selected as Christian visionaries first and clinicians second. There is nothing ambiguous here.',
    },
    localLeadership: {
      value: 3,
      note:
        'The strongest case in this category. Every one of the 40 ministries is founded, owned and directed by a national working in their own language and culture, all four regional coordinators are nationals, and the ministry explicitly refuses to send American clinicians or work teams. The board, the staff and the money are in Sioux Falls, which is the only thing keeping this from being higher.',
    },
    financialTransparency: {
      value: 1,
      note:
        'The ministry publishes nothing financial: no audit, no Form 990, no annual report, no expense split, no reserve policy. An audit exists and is available only on request. It also advertises that "Nearly 90 percent of every dollar donated" reaches ministry needs, where its own return puts programme spending at 83.4% of expenses and 77.3% of contributions. Not 0, because the return itself is complete, detailed and internally consistent, all 12 directors are independent and uncompensated, and the required governance policies are in place.',
    },
    outcomeEvidence: {
      value: 0,
      note:
        'A zero, and it is a finding rather than an oversight. The Luke Society publishes no aggregate outcome figure of any kind — not patients seen, consultations, births, surgeries, vaccinations, health workers trained, or communities reached — for any year, anywhere. What it counts are inputs: 40 ministries, 29 countries, 4 coordinators, 1,400 prayer partners. Its own Schedule F says the ministries are asked every month for statistical data on clinic and community health education activities, so the data is collected and simply never published. Individual ministry pages carry occasional narrative volumes, such as more than 800 patients a month in Monrovia, which cannot be added up. Publishing the monthly statistics it already receives would move this score immediately.',
    },
    costEvidence: {
      value: 1,
      note:
        'There is a cost model only because the denominator happens to be confirmed by two independent documents. But the unit is a clinic rather than a patient, so the figure cannot be compared with anything else in this category; the ministry publishes no cost figure of its own; and the single efficiency claim it does make does not match its own tax return.',
    },
  },
  notVerified: [
    'Why the ministry holds 6.3 years of expenses in reserve, $15,461,538 of it in publicly traded securities and $14,960,231 of it unrestricted, while its partner clinics are in Chad, Niger, South Sudan and Myanmar. There may be a good answer — currency risk, security, a planned endowment for ministries in hostile places — and no reserve policy, target or capital plan is published for a donor to read.',
    'What the ministries actually did in 2025. No patient count, consultation count, birth count, surgery count, immunisation count or training count is published for any ministry or for the whole. Schedule F says the Luke Society collects statistical data monthly from each of the 40 ministries. None of it is public.',
    'The gap between "Nearly 90 percent of every dollar donated" and the ministry’s own Form 990. Programme services were $2,358,948 of $2,829,489 of expenses, which is 83.4%, and 77.3% of the $3,051,537 of contributions received. Neither reading reaches 90%, and the difference — roughly $190,000 a year — is the sort of thing an audited statement on the website would settle in one line.',
    'Why Schedule F answers "No" to maintaining records that substantiate grant amounts, grantee eligibility and selection criteria, when the same schedule describes monthly financial reporting, a regional coordinator in regular contact and an annual evaluation visit. One of the two is inaccurate and we cannot tell which.',
    'Who the 40 recipient ministries are, in the filing. Schedule F Part II leaves every recipient name blank; 26 are recorded as recognised charities in their own country and 14 as "other organizations or entities", and the purposes are only "GENERAL MINISTRY SUPPORT" and "CAPITAL". The Luke Society names most of its ministries freely on its website, so this is very likely a filing habit rather than concealment — but as filed, $1,314,978 leaves the return untraceable.',
    'Whether the ministry is in fact an ECFA member. Its giving page says so; ECFA’s own member directory is script-driven and we could not retrieve a profile for the Luke Society to confirm it. Note that the seven faith statements on the About page are adopted from ECFA’s doctrinal statement, which is a separate thing from accreditation.',
    'What happens when a ministry "graduates" to self-sustainability. Of 86 ministry sites since 1964, 46 are no longer active, and the site says some graduated while "Others are partners for a season then move on for different reasons or circumstances." No graduation rate, no closure rate and no follow-up on any former ministry is published — and the graduation claim is the strongest argument for this model.',
    'The 29th country. The site says 29 countries; the timeline names active ministries in 28, and states that some active ministries have no page "due to their politically sensitive locations". The countries listed on this page are the 28 that are publicly named.',
    'How the four regional coordinators are paid and what they cost. Schedule F Part III shows $221,048 going to four individuals, one per region, for "DEVELOP AND MAINTAIN REGIONAL CONTACTS FOR THE LUKE SOCIETY", ranging from $23,070 in Europe to $71,066 in sub-Saharan Africa. Nothing published explains the spread.',
    'How consent is handled where care and proclamation happen in the same room — daily devotions in a clinic waiting room, weekly public prayer services at the Nairobi ministry. No policy is published, and we make no claim about spiritual results either way.',
  ],
  notes: [
    'Calendar 2025 from the Form 990: revenue $4,598,791, expenses $2,829,489 — programme services $2,358,948, management and general $373,973, fundraising $96,568 — and a $1,769,302 surplus. Total assets ended at $17,834,628 against $79,175 of liabilities. Ten employees, five volunteers, 12 voting members all independent.',
    'Foreign spending by region in 2025: sub-Saharan Africa $620,642, Central America and the Caribbean $251,781, East Asia and the Pacific $220,097, Europe $166,306, South Asia $139,400, South America $77,500, and Canada and Mexico $60,300. Of the $1,536,026 total, $1,314,978 went to 40 organisations and $221,048 to four regional coordinators as individuals; $497,342 of the organisational money was capital rather than operating support.',
    'On short-term medical trips, which are the live argument in Christian medical mission: the Luke Society is the clearest refusal of them in this directory. It states that it does not send clinicians or work groups, and that it "does not send out medical brigades or work project teams". The continuity-of-care objection to short-term surgery does not apply to a model in which the surgeon lives there permanently. What does still travel is oversight — Partnership Ministry Teams of American health and business professionals "generally make annual visits", and the US office annually sends a representative to evaluate and consult. That is donor money spent on flights, and an American advising a national director carries some of the same power dynamic even when no medicine is practised. It is a much smaller version of the problem than a surgical brigade, and it is not zero.',
    'The ministry began domestically. It was formed in 1964 by Dr Marvin Vanden Bosch and five other Denver doctors and dentists to rebuild the Rehoboth Mission Hospital in New Mexico, and ran a holistic health ministry in the Mississippi Delta from 1971. The decision to work only through indigenous professionals was made in 1978 by Dr Peter Boelens, its first executive director, after six years as a paediatric missionary in South Korea.',
    'This entry has no cost per patient because there is no published patient count, not because we chose a different unit. Where a directly comparable figure is wanted, African Mission Healthcare pays roughly $1,962 of programme spending per surgery and Christian Health Service Corps about $4,098; the Luke Society funds the clinic rather than the operation and cannot be placed on that scale at all.',
  ],
  siteUrl: 'https://lukesociety.org/',
  giveUrl: 'https://lukesociety.org/donations',
  sources: [
    {
      id: 'ls-site',
      label: 'Homepage',
      url: 'https://lukesociety.org/',
      publisher: 'Luke Society',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'ls-about',
      label: 'About us, including the mission statement and faith statements',
      url: 'https://lukesociety.org/about-us',
      publisher: 'Luke Society',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note:
        'Carries the "What we don’t do" section, the seven faith statements adopted from ECFA, and the statement that the work is evangelistically focused. There is no financial information on this page or anywhere else on the site.',
    },
    {
      id: 'ls-history',
      label: 'History and complete ministry timeline',
      url: 'https://lukesociety.org/history',
      publisher: 'Luke Society',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note:
        'Source of the 40 ministries in 29 countries figure, the 86 sites in 44 countries since 1964, and the timeline from which the countries on this page were taken. Active ministries are marked in bold or linked; the page states that some active ministries are deliberately omitted for security.',
    },
    {
      id: 'ls-ministries',
      label: 'Ministries',
      url: 'https://lukesociety.org/ministries',
      publisher: 'Luke Society',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'ls-give',
      label: 'Get involved, including the giving section and PMT programme',
      url: 'https://lukesociety.org/get-involved',
      publisher: 'Luke Society',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note:
        'Source of the "nearly 90 percent" claim, the ECFA membership claim, the statement that no medical brigades are sent, and the description of Partnership Ministry Teams making annual visits.',
    },
    {
      id: 'ls-monrovia',
      label: 'New Community Health Center, Monrovia, Liberia',
      url: 'https://lukesociety.org/monrovia-liberia',
      publisher: 'Luke Society',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note:
        'A representative ministry page. Gives 53 staff, more than 800 patients a month and daily devotions in the waiting room. These per-ministry volumes are narrative and are not aggregated anywhere.',
    },
    {
      id: 'ls-990-25',
      label: 'Form 990, calendar 2025, Parts I, III, VI, IX, X and XII',
      url: 'https://projects.propublica.org/nonprofits/organizations/840563440/202631189349301878/IRS990',
      publisher: 'Internal Revenue Service, rendered by ProPublica Nonprofit Explorer',
      documentType: 'form-990',
      retrieved: '2026-09-19',
      fiscalYear: '2025',
      note:
        'Signed 28 April 2026. Part IX line 25 gives programme $2,358,948 of $2,829,489; Part III carries the 40 foreign organisations and 4 regional coordinators; Part XII line 2b confirms the financial statements are audited. The ministry does not post this return itself, and ProPublica blocks automated download of the raw XML, so we read its rendered reconstruction of the IRS data.',
    },
    {
      id: 'ls-990-sched-f',
      label: 'Form 990 Schedule F, calendar 2025',
      url: 'https://projects.propublica.org/nonprofits/organizations/840563440/202631189349301878/IRS990ScheduleF',
      publisher: 'Internal Revenue Service, rendered by ProPublica Nonprofit Explorer',
      documentType: 'form-990',
      retrieved: '2026-09-19',
      fiscalYear: '2025',
      note:
        'Part I line 1 is answered "No"; Part I line 3 gives the seven regional totals; Part II shows the general-support and capital split with all 40 recipient names blank; Part III shows the four regional coordinators; Part V describes the monitoring procedures.',
    },
    {
      id: 'ls-990-sched-o',
      label: 'Form 990 Schedule O, calendar 2025',
      url: 'https://projects.propublica.org/nonprofits/organizations/840563440/202631189349301878/IRS990ScheduleO',
      publisher: 'Internal Revenue Service, rendered by ProPublica Nonprofit Explorer',
      documentType: 'form-990',
      retrieved: '2026-09-19',
      fiscalYear: '2025',
      note:
        'Carries the mission statement as filed, the disclosure that Doug and Holly Van Hofwegen are related, and the answer "DOCUMENTS AVAILABLE UPON REQUEST" to Part VI Section C line 19 on public availability of financial statements.',
    },
    {
      id: 'ls-propublica',
      label: 'IRS filings for Luke Society, EIN 84-0563440',
      url: 'https://projects.propublica.org/nonprofits/organizations/840563440',
      publisher: 'ProPublica Nonprofit Explorer',
      documentType: 'third-party',
      retrieved: '2026-09-19',
      note:
        'Where the multi-year series used here comes from: net assets of $6,446,790 in 2019 rising to $17,755,453 in 2025 against expenses that never exceeded $2,856,937.',
    },
  ],
};
