import type { Cause } from '@/lib/types';

export const abwe: Cause = {
  slug: 'abwe',
  name: 'ABWE',
  legalName: 'Association of Baptists for World Evangelism, Inc.',
  ein: '23-1445623',
  tagline:
    'Sends and supports 923 Baptist missionaries in 92 countries, and runs the hospitals some of them staff.',
  category: 'evangelism',
  countries: ['Global', 'Liberia', 'Togo', 'Bangladesh', 'Papua New Guinea', 'Romania'],
  whatTheyDo:
    'ABWE recruits, screens, trains and sends career missionaries from Baptist churches in the United States and Canada, and it funds the institutions those missionaries work in — Hôpital Baptiste Biblique and the Hospital of Hope in Togo, Memorial Christian Hospital in Bangladesh, clinics and church-planting projects in Liberia, Papua New Guinea and South Asia, and a ministry centre in Bucharest. In the year to 31 December 2025 it spent $55,369,791 on programme activities, of which $30,907,098 was wages and benefits and $9,234,373 was grants, and it reported 923 missionaries reaching 92 countries.',
  accreditations: [
    { label: 'ECFA accredited', sourceId: 'abwe-stewardship' },
  ],
  verification: 'documents-reviewed',
  biblicalAlignment: {
    mandate:
      'The Great Commission is a command to go, and someone has to be sent before anyone can go. ABWE is one of the oldest American answers to that command — founded in 1927, still doing the same thing: finding people in local churches who will move abroad for decades, and paying for them to stay. The healthcare arm sits on the same mandate from the other side: Christ healed and preached, and the hospitals here do both in places with almost no alternative.',
    scriptures: [
      {
        ref: 'Matthew 28:19–20',
        text:
          'Go therefore and make disciples of all nations, baptising them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all that I have commanded you. And behold, I am with you always, to the end of the age.',
      },
      {
        ref: 'Acts 13:2–3',
        text:
          'While they were worshipping the Lord and fasting, the Holy Spirit said, “Set apart for me Barnabas and Saul for the work to which I have called them.” Then after fasting and praying they laid their hands on them and sent them off.',
      },
      {
        ref: '3 John 5–8',
        text:
          'Beloved, it is a faithful thing you do in all your efforts for these brothers, strangers as they are, who testified to your love before the church. You will do well to send them on their journey in a manner worthy of God. For they have gone out for the sake of the name, accepting nothing from the Gentiles. Therefore we ought to support people like these, that we may be fellow workers for the truth.',
      },
    ],
    doctrine: { label: 'Statement of Faith', sourceId: 'abwe-faith' },
    concerns: [
      'ABWE publishes a page called Our Commitment to Child Safety whose central sentence says that "organizational transformation and accountability—born out of experience—can be channeled to educate others and eliminate opportunities for abuse." The experience is never named, and no independent investigation or review is published anywhere on the site. What a donor can verify is that a six-member Child Safety Response Team exists and a child protection policy is posted. What a donor cannot verify from ABWE\'s own materials is what happened, when, or what an outside reviewer concluded. We are not asserting anything beyond the page\'s own words, and we would ask about them directly before giving at scale.',
      'The Financial Stewardship Commitment promises "a program of church planting that has national leadership, ownership, and stewardship in view from the inception", which is exactly the right aim and is the strongest handover language of any sending agency in this batch. ABWE then publishes no count of national leaders, national staff, nationally led churches, or churches handed over. The commitment is stated and the evidence is absent.',
      'The unit ABWE counts and funds is an American family abroad. At roughly $60,000 per missionary-year, the same programme budget would support a very large number of national evangelists — the model this directory prices at under $1,000 a year elsewhere. ABWE never makes the argument for why the expensive version is the right one in each of its 92 countries, and a donor should ask for that argument country by country rather than assume it.',
      'The programme figure consolidates three entities — ABWE Inc, ABWE Foundation, LLC and Global Neighbors, LLC. Global Neighbors alone spent $3,206,836 on programme activities. Neither its work nor its share of the missionary count is described in the annual report a donor is pointed to.',
      'The annual report leads with 709 baptisms and 432 church plants "initiated, strengthened, or established". Those are the ministry\'s own unaudited counts of spiritual fruit, and we do not treat them as measurable outcomes. "Initiated, strengthened, or established" is also three very different things reported as one number.',
      'ABWE files no Form 990. There is an IRS record for the EIN and it contains no return data at all, so there is no public executive compensation, no list of grantees for the $9,234,373 of programme grants, and no Schedule F showing where the money went by region. The audit is the only current document, and it names no country.',
    ],
  },
  roi: {
    levers: ['durable-asset', 'multiplication'],
    reason:
      'Read the cost-base table on this page carefully, because it does not describe the missionaries. Liberia, Togo, Bangladesh and Papua New Guinea are where ABWE\'s hospitals, clinics and church-planting projects are, and a dollar genuinely does go further there — that is the durable-asset lever, and $9,234,373 of programme grants and eight named featured projects are what it buys. The 923 missionaries are a different matter: they are supported American and Canadian families, and they cost what American and Canadian families cost. There is no local cost base underneath them and we do not claim one. The second lever ABWE argues for is multiplication — it reports 17 churches planting churches for the first time this year, which is the right thing to count and far too small a number to carry a $55 million programme budget on its own.',
  },
  costModel: {
    outcome: 'missionary-year on the field',
    outcomePlural: 'missionary-years on the field',
    spend: {
      amount: 55369791,
      basis: 'program-services',
      fiscalYear: '2025',
      sourceId: 'abwe-audit-25',
    },
    count: {
      amount: 923,
      label: 'missionaries on the field',
      fiscalYear: '2025',
      sourceId: 'abwe-ar-25',
    },
    attribution: 'all-program-spend',
    caveat:
      'An upper bound on the cost of a missionary, and a poor description of what the money bought. It over-attributes in three ways: $9,234,373 of the programme total is grants to other bodies, not missionary support; $3,206,836 is Global Neighbors, LLC, a consolidated affiliate whose work is not described in the annual report; and the hospitals, clinics, translation projects and training that delivered 148,137 healthcare visits and 2,667 students in training are paid for out of the same line and are largely staffed by nationals ABWE does not count. It also sits against two different worker counts in the same annual report — 923 in the highlights, approximately 1,000 in the president\'s letter. Read this as what it costs ABWE to run a sending organisation for a year divided by the missionaries it had out, not as one family\'s support budget and not as the price of adding another.',
    alternates: [
      {
        label: 'workers, on the president\'s count',
        count: 1000,
        note:
          '$55,369.79. The same annual report describes "approximately 1,000 workers touching more than 90 nations in 2025" a page away from the 923 figure. Neither number is defined, and the difference between them is 8% of the denominator.',
      },
      {
        label: 'missionaries, against every dollar ABWE spent',
        count: 923,
        note:
          'Dividing total expenses of $67,555,316 rather than programme spending gives $73,191.02 per missionary-year. That is the fully loaded figure including the 10.0% management and 8.0% fundraising ABWE reports, and it is the honest upper bound.',
      },
    ],
  },
  ministryClaims: [
    {
      quote: '923 missionaries reaching 92 countries',
      sourceId: 'abwe-ar-25',
    },
    {
      quote:
        'As you rejoice with us in what God has done through the ABWE global family—approximately 1,000 workers touching more than 90 nations in 2025—celebrate and give thanks.',
      sourceId: 'abwe-ar-25',
    },
    {
      quote:
        'All contributions are received as donations to ABWE and not to specific individuals. Contributions which donors request to be used to support the ministry activities of specific missionaries are under the full control of ABWE.',
      sourceId: 'abwe-audit-25',
    },
    {
      quote:
        'A program of church planting that has national leadership, ownership, and stewardship in view from the inception.',
      sourceId: 'abwe-stewardship',
    },
    {
      quote:
        'Organizational cultures and policies can either harm or help to safeguard families. Likewise, organizational transformation and accountability—born out of experience—can be channeled to educate others and eliminate opportunities for abuse.',
      sourceId: 'abwe-childsafety',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 3,
      note:
        'A long doctrinal statement that every serving worker signs, committed in its own words to "historic, creedal orthodoxy, conservative Protestantism, historic evangelicalism, and Baptist identity", with a stated distinction between first- and second-order doctrine. The whole organisation exists to preach and plant churches.',
    },
    localLeadership: {
      value: 1,
      note:
        'The field force ABWE funds and counts is 923 sent North Americans, and $30,907,098 of programme spending is wages and benefits. The stewardship commitment promises national leadership and ownership from the inception of each church-planting programme, which earns real credit, but no count of national leaders, national staff or handed-over churches is published to check it against. The 2,667 students in training and 148,137 healthcare visits are almost certainly delivered mostly by nationals; their number is not published.',
    },
    financialTransparency: {
      value: 2,
      note:
        'A full consolidated audit is posted on ABWE\'s own site with an eleven-line functional expense table, both years side by side, and a consolidating schedule showing each of the three entities. Held at 2 because no Form 990 exists — the IRS record for the EIN carries no return data at all — so there is no public executive compensation, no grantee list for $9,234,373 of programme grants, and no Schedule F.',
    },
    outcomeEvidence: {
      value: 2,
      note:
        'ABWE publishes more countable delivery than most sending agencies: 148,137 people given healthcare, 2,667 students in ongoing training, 90 translation projects underway or completed, 17 churches planting churches for the first time. Held at 2 because the headline figures are baptisms and church plants, which we do not count, because "initiated, strengthened, or established" collapses three different things into 432, and because the numbers are set in report graphics with no definitions attached.',
    },
    costEvidence: {
      value: 2,
      note:
        'Both halves are published by ABWE for the same calendar year — spending in an audit, the count in an annual report — so the division is legitimate. Held at 2 because the denominator is a headcount of staff rather than anything delivered, and because the same report gives two different headcounts.',
    },
  },
  notVerified: [
    'What an undesignated gift funds. ABWE\'s own donor breakdown is Missionaries 78.1%, Projects 20.5% and the Global Gospel Fund 1.4% — so roughly 98.6% of support arrives pointed at a person or a project chosen by the donor. The audit states that designated gifts are nonetheless "under the full control of ABWE" and are accounted for as board designated. What we could not establish is what share of the $55,369,791 ABWE actually directed itself, or what a gift to the Global Gospel Fund buys that a designated gift does not. This is the single most important thing we could not verify.',
    'Which worker count is right. 923 with 92 countries in the highlights, approximately 1,000 with more than 90 nations in the president\'s letter, same report. Neither says whether spouses, children, short-term workers or the staff of the consolidated affiliates are inside the number.',
    'Who receives the $9,234,373 of programme grants — 16.7% of programme spending. With no Form 990 there is no Schedule F, and the audit names no recipient or region.',
    'What the "experience" behind the child safety page was, and whether an independent review of it was ever published. We found a policy and a response team, and no report.',
    'ABWE holds $32,288,419 in funds held in missionary accounts, a liability on the balance sheet — money already given that has not yet been spent. Nothing published says how long a gift typically sits there before reaching the field.',
    'What Global Neighbors, LLC does with $3,206,836 of programme spending, and whether its staff are inside the 923.',
    'Executive compensation. No Form 990 is filed, so none is published.',
    'How many of the 92 countries have a nationally led ABWE-planted church, which is the number the stewardship commitment implies ABWE tracks.',
    'The retention question every sending agency raises and none of them answer: how long an ABWE missionary stays. A cost per missionary-year says nothing about whether a career lasts three years or thirty, and that is the biggest single driver of what a sent worker actually costs per unit of lasting work.',
  ],
  notes: [
    'Audited consolidated functional expenses for the year ended 31 December 2025: programme $55,369,791 (82.0%), management and general $6,776,364 (10.0%), fundraising $5,409,161 (8.0%), total $67,555,316. The annual report restates the same three percentages, which is the right thing to do.',
    'Programme spending by natural classification: wages and benefits $30,907,098; grants $9,234,373; general ministry expense $6,797,993; travel $3,661,272; office and supplies $2,440,070; vehicles and aircraft $915,197; non-capitalised project expenditures $599,860; facilities $446,699; professional fees $290,472; public relations $74,797; service fees $1,960.',
    'Funding in 2025 was $67,129,099, of which contributions were $57,851,275 (86.2%) and other sources — chiefly investment returns — $9,277,824 (13.8%), up 48.9% on the prior year. Who gave: families and individuals 82.2%, churches 14.8%, businesses 3.0%.',
    'The eight featured projects and their 2025 donations, as ABWE reports them: the Global Gospel Fund $1,246,170; South Asia Ministry Center $442,305; Liberia Projects $333,320; Hôpital Baptiste Biblique $327,984; Papua New Guinea Projects $738,149; Hospital of Hope $218,513; Memorial Christian Hospital $169,683; Bucharest Ministry House $175,225. Those eight total $3,651,349 — 6.6% of programme spending — which is a useful reminder that a featured project list is marketing, not a budget.',
    'The consolidating schedule shows programme spending of $54,688,207 for ABWE Inc, $211,679 for ABWE Foundation, LLC and $3,206,836 for Global Neighbors, LLC, less $2,736,931 of eliminations.',
    'For comparison inside this directory: Frontiers USA comes out at $64,227.91 per US-sent worker-year and Serge at $74,129.28 per missionary-year, both on the same kind of division. ABWE at $59,988.94 is the cheapest of the three, and all three are roughly sixty to seventy times the cost of a supported national evangelist elsewhere in this category. That gap is the whole reason this page exists.',
  ],
  siteUrl: 'https://abwe.org/',
  giveUrl: 'https://give.abwe.org/',
  sources: [
    {
      id: 'abwe-site',
      label: 'Homepage',
      url: 'https://abwe.org/',
      publisher: 'ABWE',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
    },
    {
      id: 'abwe-faith',
      label: 'Our Statement of Faith',
      url: 'https://abwe.org/our-statement-faith/',
      publisher: 'ABWE',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note:
        'States that everyone serving with ABWE voluntarily signs the doctrinal statement, and distinguishes first-order from second-order doctrine.',
    },
    {
      id: 'abwe-stewardship',
      label: 'Financial Stewardship Commitment',
      url: 'https://abwe.org/financial-stewardship/',
      publisher: 'ABWE',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note:
        'Source of the ECFA accreditation and of the seventeen-point stewardship commitment, including the national leadership and ownership clause quoted above.',
    },
    {
      id: 'abwe-financials',
      label: 'Annual Financial Statements index',
      url: 'https://abwe.org/abwe-annual-financial-statements/',
      publisher: 'ABWE',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: 'Posts audited statements back to 2020. This is where a donor can check the figures on this page.',
    },
    {
      id: 'abwe-audit-25',
      label: 'Consolidated financial statements, years ended 31 December 2025 and 2024',
      url: 'https://abwe.org/wp-content/uploads/2026/07/2025-ABWE-Financial-Statements-1.pdf',
      publisher: 'ABWE',
      documentType: 'audited-financials',
      retrieved: '2026-09-19',
      fiscalYear: '2025',
      note:
        'Consolidates ABWE Inc, ABWE Foundation, LLC and Global Neighbors, LLC. Source of the functional expense table, the $32,288,419 held in missionary accounts, the contributions-control note, and the consolidating schedule.',
    },
    {
      id: 'abwe-ar-25',
      label: '2025 ABWE Annual Report (Message, Volume 74 Issue 02)',
      url: 'https://abwe.org/wp-content/uploads/2026/05/MESSAGE_Volume74_Issue02_Summer_Annual_Report_final_web.pdf',
      publisher: 'ABWE',
      documentType: 'annual-report',
      retrieved: '2026-09-19',
      fiscalYear: '2025',
      note:
        'The ministry highlights, funding tables and donor percentages are set as designed graphics rather than printed text, so we read the rendered pages to get them. Source of 923 missionaries in 92 countries, the president\'s approximately 1,000 workers, 148,137 healthcare visits, 2,667 students, 90 translation projects, 17 churches planting churches, 709 baptisms, 432 church plants, and the eight featured project totals.',
    },
    {
      id: 'abwe-childsafety',
      label: 'Our Commitment to Child Safety',
      url: 'https://abwe.org/protecting-our-children/',
      publisher: 'ABWE',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note:
        'Describes a six-member Child Safety Response Team and links to ABWE\'s child protection policy. It refers to "experience" without naming it and publishes no independent investigation or review.',
    },
    {
      id: 'abwe-propublica',
      label: 'IRS record for Association of Baptists for World Evangelism Inc, EIN 23-1445623',
      url: 'https://projects.propublica.org/nonprofits/organizations/231445623',
      publisher: 'ProPublica Nonprofit Explorer',
      documentType: 'third-party',
      retrieved: '2026-09-19',
      note:
        'Confirms the EIN and the legal name. The record contains no filings with data and no filings without data — ABWE files no public Form 990, which is normal for an agency treated as a religious organisation and is why the audit is the only document on this page.',
    },
  ],
};
