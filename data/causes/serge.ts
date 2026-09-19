import type { Cause } from '@/lib/types';

export const serge: Cause = {
  slug: 'serge',
  name: 'Serge',
  legalName: 'Serge Global, Inc.',
  ein: '23-2223692',
  tagline:
    'Reformed sending agency placing 330 missionaries — doctors, church planters, teachers — into teams that mostly join work already running.',
  category: 'evangelism',
  countries: [
    'Burundi',
    'DR Congo',
    'Rwanda',
    'Malawi',
    'Uganda',
    'Kenya',
    'Guatemala',
    'Peru',
    'Dominican Republic',
    'Chile',
    'Thailand',
    'Japan',
    'Romania',
    'Czechia',
    'Spain',
    'Ireland',
    'United Kingdom',
  ],
  whatTheyDo:
    'Serge recruits, trains, sends and then pastors long-term missionaries, and its distinctive is that it applies the same gospel-of-grace discipleship to its own workers that it asks them to take abroad. Teams are placed at named locations — the mission hospitals at Kibuye in Burundi, Kijabe, Kapsowar and Chogoria in Kenya, and Nkhoma in Malawi; church plants in Prague, Cluj, Barcelona, southern Spain, Dublin and five London boroughs; work in Nagoya, Thailand, Guatemala City, Lima, Quillota and Jarabacoa. In the year to 31 May 2025 Serge spent $24,462,664 on field operations and reported 330 missionaries. It also sells Reformed discipleship curriculum and runs training for churches in the United States.',
  accreditations: [{ label: 'ECFA member', sourceId: 'serge-finances' }],
  verification: 'documents-reviewed',
  biblicalAlignment: {
    mandate:
      'Paul and Barnabas were set apart by a church that was worshipping and fasting, and then sent. Serge takes both halves of that seriously — it is a sending agency that spends real money on the spiritual condition of the people it sends, on the grounds that a missionary who does not believe the gospel about himself will not preach it well to anyone else. The medical teams sit on the same mandate from the other direction: they staff hospitals that would otherwise be short of surgeons.',
    scriptures: [
      {
        ref: 'Acts 13:2–3',
        text:
          'While they were worshipping the Lord and fasting, the Holy Spirit said, “Set apart for me Barnabas and Saul for the work to which I have called them.” Then after fasting and praying they laid their hands on them and sent them off.',
      },
      {
        ref: 'Romans 10:14–15',
        text:
          'And how are they to hear without someone preaching? And how are they to preach unless they are sent? As it is written, “How beautiful are the feet of those who bring good news!”',
      },
      {
        ref: '2 Corinthians 4:5',
        text:
          'For what we proclaim is not ourselves, but Jesus Christ as Lord, with ourselves as your servants for Jesus\' sake.',
      },
    ],
    doctrine: { label: 'Statement of Faith', sourceId: 'serge-faith' },
    concerns: [
      'Europe is Serge\'s largest field by money. Schedule F of its Form 990 reports $7,943,571 spent in Europe against $6,344,690 in Sub-Saharan Africa, $1,846,437 in South Asia, $1,723,086 in the Middle East and North Africa, $724,053 in Central America and the Caribbean and $450,660 in South America — so 41.7% of $19,032,497 of foreign expenditure went to the highest-cost region on the list. The cost-base table further down this page names Burundi, because Burundi is the cheapest country Serge works in. It is not where most of the money goes, and nothing on this page should be read as implying otherwise.',
      'The expatriate cost structure is almost total. Of $17,693,531 in wages, payroll taxes and benefits, Foreign National Wages are $239,826 — 1.4%. Serge pays sent workers. Where it funds nationals it does so through $1,618,179 of grants to foreign organisations, which is 6.6% of field operations and names no recipient.',
      'Five of Serge\'s field locations are in London boroughs and one is in Ireland. The stated logic is diaspora ministry — reaching least-reached peoples who have moved to Britain — and it is a real argument. It is not a cost-base argument, and a donor choosing it should know they are paying London living costs.',
      'The only thing Serge counts is Serge. The audit reports 330 missionaries in 25 countries and the website says over 325 in 26; neither publishes a count of churches planted, patients treated, students taught or leaders trained. For a ministry with teams in five mission hospitals, that is a large amount of countable delivery going unreported.',
      'Serge\'s Where We Serve page carries two versions of the same sentence — "over 325 Serge missionaries in 29 countries" above the map and "over 325 Serge missionaries in 26 countries" above the list — while the audit signed four months earlier says 25. Three country counts on two documents is a small thing that suggests nobody owns the number.',
    ],
  },
  roi: {
    levers: ['existing-network'],
    reason:
      'Ignore the multiple in the table below; it names Burundi because Burundi is the cheapest place Serge works, and Europe is where the largest share of the money actually goes. There is no low-cost-base lever here and we will not claim one — only 1.4% of Serge\'s wage bill goes to foreign nationals. The lever that is real is the existing network: Kibuye, Kijabe, Kapsowar, Chogoria and Nkhoma are working mission hospitals staffed largely by Africans, and Serge is paying to add a surgeon or a paediatrician to an institution somebody else already built and already runs. That is a genuinely different proposition from building a hospital, and it is the reason a sent doctor can be worth the price. Serge publishes nothing that would let anyone check it.',
  },
  costModel: {
    outcome: 'missionary-year on the field',
    outcomePlural: 'missionary-years on the field',
    spend: {
      amount: 24462664,
      basis: 'program-services',
      fiscalYear: 'FYE May 2025',
      sourceId: 'serge-audit-25',
    },
    count: {
      amount: 330,
      label: 'missionaries',
      fiscalYear: 'FYE May 2025',
      sourceId: 'serge-audit-25',
    },
    attribution: 'all-program-spend',
    caveat:
      'Both halves come out of the same audited statement for the same year, which is as clean as this division gets, and it is still an upper bound. Field operations includes $1,618,179 of grants to foreign organisations, which funds bodies rather than missionaries; it includes $239,826 of Foreign National Wages, which pays nationals rather than missionaries; and it carries the recruiting, training, member-care and Renewal-curriculum activity that supports future workers as well as current ones. It also excludes $4,917,360 of management and general and $964,259 of fundraising, so it is not what Serge spends to keep a missionary on the field, only what it books to the field. And the 330 is a round number in a footnote against "over 325" on the website — nothing published defines whether spouses or children are inside it.',
    alternates: [
      {
        label: 'missionaries, on the website\'s count',
        count: 325,
        note:
          '$75,269.74. The Where We Serve page says over 325, so this is the same arithmetic against Serge\'s public figure rather than its audited footnote.',
      },
      {
        label: 'missionaries, against every dollar Serge spent',
        count: 330,
        note:
          'Dividing total expenses of $30,344,283 rather than field operations gives $91,952.37 per missionary-year. That is the fully loaded cost including the home office and fundraising, and it is the number a donor should have in mind when comparing a sent worker to anything else in this directory.',
      },
      {
        label: 'employees, agents and independent contractors reported in Schedule F',
        count: 210,
        note:
          'Serge\'s Form 990 reports 110 people in Europe, 58 in Sub-Saharan Africa, 26 in South Asia, 11 in Central America and the Caribbean and 5 in South America — 210 in total, with the Middle East and North Africa row left blank. Against $24,462,664 that is $116,488.88 each. We show it because it is a published headcount that does not reconcile to 330, not because we think it is the better denominator.',
      },
    ],
  },
  ministryClaims: [
    {
      quote:
        'Serge Global, Inc (“Serge”) is a mission sending agency founded in 1983; today, Serge has 330 missionaries in 25 countries.',
      sourceId: 'serge-audit-25',
    },
    {
      quote:
        'God has opened doors for over 325 Serge missionaries in 26 countries around the world.',
      sourceId: 'serge-wws',
    },
    {
      quote:
        'We take financial accountability seriously. It’s a matter of integrity and trust. We’re committed to transparency in our financial practices so you can see the impact of your investment in the lives of others.',
      sourceId: 'serge-finances',
    },
    {
      quote:
        'Because the gospel is the good news about all that Jesus is and all that Jesus has done, it applies to our entire life, not just our conversion.',
      sourceId: 'serge-about',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 3,
      note:
        'Reformed, explicit and unusually specific: the first of Serge\'s stated values is the centrality of the gospel, and the audit\'s own description of the ministry names the gospel of grace as its motive and power. The discipleship material it sells — Sonship, the Gospel-Centered series — is doctrine a donor can read and check.',
    },
    localLeadership: {
      value: 1,
      note:
        'A sending agency by design, and the numbers say so: Foreign National Wages are $239,826 of $17,693,531 in total wages, 1.4%. Nationals are funded through $1,618,179 of unnamed grants to foreign organisations. Scored on what is published, this is a 1 — though placing workers inside African-run mission hospitals is a better posture than the figure alone suggests.',
    },
    financialTransparency: {
      value: 3,
      note:
        'The best in this batch and close to the best we have seen. Serge posts both the audited statements and the full Form 990 for the same year, side by side, going back to 2008 — eighteen consecutive years — with Schedule F breaking foreign spending and headcount down by region. A donor can check almost every figure on this page in one place. The unexplained $64,366 difference between the two documents\' expense totals keeps it from being a perfect 3, and it is the only thing that does.',
    },
    outcomeEvidence: {
      value: 1,
      note:
        'Serge reports its own staff and the countries they are in, and that is all. No count of churches planted, patients seen, students taught or leaders trained is published, and the FY2025 annual report is posted as an Issuu flipbook that cannot be cited. Teams sit inside five named mission hospitals, so the delivery data exists somewhere.',
    },
    costEvidence: {
      value: 2,
      note:
        'Numerator and denominator come from the same audited document for the same fiscal year, which is rare and good. Held at 2 because the denominator is a headcount of staff rather than a count of anything delivered, and because the public worker and country counts do not match the audited ones.',
    },
  },
  notVerified: [
    'Anything Serge produced. This page divides an audited number by another audited number and arrives at the cost of employing a missionary for a year. It says nothing about what those 330 people accomplished, because Serge publishes no count of it. That is the single most important thing we could not verify.',
    'Why the audit and the Form 990 disagree. The audit reports total expenses of $30,344,283 and the 990 reports $30,408,649 for the same year — a $64,366 difference, entirely in management and general ($4,917,360 against $4,981,726). Both documents are posted on the same page and neither explains the other.',
    'How many countries Serge works in. The audit says 25, the Where We Serve page says 26 above its list and 29 above its map, and Schedule F reports six regions. We built the country list on this page from Serge\'s own named team locations and got to eighteen, which matches none of them.',
    'Who receives the $1,618,179 of grants to foreign organisations. Schedule F gives regions and purposes — "Church planting/min", "Med min/church plant", "Education and dev" — and no recipient names.',
    'What the 330 includes. Spouses, children, short-term workers and home-office staff are all plausible and none is ruled out by anything published. The audit footnote states the number and defines nothing.',
    'Serge lists a team in Taipei, and Schedule F has no East Asia row at all — Japan and Taiwan spending is not visible anywhere in the regional breakdown. Taiwan is also missing from the cost-base table below because the World Bank publishes no income figure for it.',
    'Whether the Charity Navigator claim is current. The page body says twelve consecutive years; the same page\'s own metadata, last modified in August 2026, says eight. We did not check either against Charity Navigator.',
    'What share of field operations bought future capacity rather than current presence. Recruiting, training, apprenticeships, internships and member care all sit inside the same line as the workers already out.',
    'How long a Serge missionary stays. A cost per missionary-year is only as meaningful as the career it is multiplied by, and retention is published nowhere.',
  ],
  notes: [
    'Audited expenses for the year ended 31 May 2025: field operations $24,462,664 (80.6%), management and general $4,917,360 (16.2%), fundraising $964,259 (3.2%), total $30,344,283. The prior year total was $28,583,862.',
    'Foreign expenditure by region from Schedule F, which is the most useful single table Serge publishes: Europe $7,943,571 (110 people); Sub-Saharan Africa $6,344,690 (58); South Asia $1,846,437 (26); Middle East and North Africa $1,723,086 (headcount blank); Central America and the Caribbean $724,053 (11); South America $450,660 (5). Total $19,032,497.',
    'Restriction pattern: net assets board designated for missionaries and projects were $12,671,165 at year end against $1,668,599 undesignated. Nearly all of Serge\'s reserves are already pointed at a person or a project, which is what a worker-support model looks like on a balance sheet — but unlike some agencies, Serge records the great majority of contributions as unrestricted and designates them itself.',
    'Serge publishes no assessment or administrative fee percentage that we could find, so there is no published figure for what a gift to a named worker loses before it reaches them.',
    'For comparison inside this directory: ABWE comes out at $59,988.94 per missionary-year and Frontiers USA at $64,227.91 per US-sent worker-year on the same kind of division. Serge at $74,129.28 is the most expensive of the three, which is consistent with Europe being its largest field.',
  ],
  siteUrl: 'https://serge.org/',
  giveUrl: 'https://give.serge.org/s/',
  sources: [
    {
      id: 'serge-site',
      label: 'Homepage',
      url: 'https://serge.org/',
      publisher: 'Serge',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
    },
    {
      id: 'serge-about',
      label: 'About Us',
      url: 'https://serge.org/about/',
      publisher: 'Serge',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: 'Source of Serge\'s stated values, the first of which is the centrality of the gospel.',
    },
    {
      id: 'serge-faith',
      label: 'Statement of Faith',
      url: 'https://serge.org/statement-of-faith/',
      publisher: 'Serge',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
    },
    {
      id: 'serge-finances',
      label: 'Finances',
      url: 'https://serge.org/finances/',
      publisher: 'Serge',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note:
        'Posts audited statements and Form 990s side by side for every year from 2008 to 2025. Source of the ECFA membership and the Charity Navigator claim. The page body says twelve consecutive years; the page metadata says eight.',
    },
    {
      id: 'serge-wws',
      label: 'Where We Serve',
      url: 'https://serge.org/missions/where-we-serve/',
      publisher: 'Serge',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note:
        'Source of the eighteen named team countries used in the country list on this page. The page carries the same headline sentence twice with two different country counts — 29 above the map, 26 above the list.',
    },
    {
      id: 'serge-audit-25',
      label: 'Audited financial statements, years ended 31 May 2025 and 2024',
      url: 'https://serge.org/wp-content/uploads/2025/10/05-2025-Audit-Serge-Global-FINAL.pdf',
      publisher: 'Serge',
      documentType: 'audited-financials',
      retrieved: '2026-09-19',
      fiscalYear: 'FYE May 2025',
      note:
        'Source of both halves of the division: field operations expense of $24,462,664 and the footnote stating 330 missionaries in 25 countries. Also the source of Foreign National Wages, grants to foreign organisations and the net asset designations.',
    },
    {
      id: 'serge-990',
      label: 'Form 990 for the year ended 31 May 2025',
      url: 'https://serge.org/wp-content/uploads/2025/10/FY25-990-Form_FINAL.pdf',
      publisher: 'Serge',
      documentType: 'form-990',
      retrieved: '2026-09-19',
      fiscalYear: 'FYE May 2025',
      note:
        'Source of the Schedule F regional table — expenditure and headcount for six regions — and of the $30,408,649 total functional expenses that does not match the audit\'s $30,344,283.',
    },
  ],
};
