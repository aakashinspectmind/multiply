import type { Cause } from '@/lib/types';

export const christianHealthServiceCorps: Cause = {
  slug: 'christian-health-service-corps',
  name: 'Christian Health Service Corps',
  legalName: 'Christian Health Service Corps, Inc.',
  ein: '27-1505747',
  tagline:
    'Sends doctors and nurses to mission hospitals for at least three years, and is starting to hire African surgeons instead.',
  category: 'health',
  countries: [
    'Angola',
    'Bangladesh',
    'Cambodia',
    'Chad',
    'DR Congo',
    'Ethiopia',
    'Gabon',
    'Ghana',
    'Haiti',
    'Honduras',
    'India',
    'Kenya',
    'Malawi',
    'Mexico',
    'Nigeria',
    'Peru',
    'Rwanda',
    'Uganda',
    'Ukraine',
    'Zambia',
  ],
  whatTheyDo:
    'Christian Health Service Corps recruits, supports and places healthcare professionals as long-term medical missionaries — a minimum three-year commitment — inside mission hospitals it does not own, and supports those hospitals with equipment, residency training and quality-improvement work. A separate Reserve Corps handles short deployments of two weeks to a year. Since 2024 it has also begun directly employing African surgeons graduating from residency so that rural hospitals which cannot afford a board-certified surgeon can have one.',
  accreditations: [
    { label: 'ECFA accredited', sourceId: 'chsc-financials' },
    { label: 'Candid Gold Transparency (seal displayed reads 2022)', sourceId: 'chsc-financials' },
    { label: 'Excellence in Giving certified transparent', sourceId: 'chsc-financials' },
  ],
  verification: 'documents-reviewed',
  biblicalAlignment: {
    mandate:
      'Christ sent people. The commission was not to fund healing at a distance but to go, and the people he sent stayed long enough to be known — Paul spent eighteen months in Corinth and three years in Ephesus. A three-year minimum posting is that pattern applied to a surgeon, and the recent shift to employing African surgeons who are already home is the same instinct taken one step further.',
    scriptures: [
      {
        ref: 'Luke 10:1–2',
        text:
          'After this the Lord appointed seventy-two others and sent them on ahead of him, two by two, into every town and place where he himself was about to go. And he said to them, “The harvest is plentiful, but the labourers are few. Therefore pray earnestly to the Lord of the harvest to send out labourers into his harvest.”',
      },
      {
        ref: 'Matthew 10:1',
        text:
          'And he called to him his twelve disciples and gave them authority over unclean spirits, to cast them out, and to heal every disease and every affliction.',
      },
      {
        ref: 'Galatians 6:9',
        text:
          'And let us not grow weary of doing good, for in due season we will reap, if we do not give up.',
      },
    ],
    doctrine: { label: "Holds the Apostles' Creed as its statement of faith", sourceId: 'chsc-application' },
    concerns: [
      'Short-term medical trips are genuinely contested among Christian health professionals, and the objections are serious: a two-week surgical visit leaves the follow-up to someone else, a visiting team can displace the local clinician whose livelihood depends on those patients, and operating outside your normal supervision and equipment raises the risk to the patient. To Christian Health Service Corps’ credit, its model answers most of that — long-term placement of at least three years is the headline programme and the Reserve Corps is explicitly framed as "short-term medical missions that support long-term development and emphasize quality of care", attached to a long-term worker already in post. That is close to the best version of short-term service. A donor who wants none of it should still know the Reserve Corps exists and that deployments run from two weeks.',
      'Governance is concentrated in one family. The founder Gregory Seager is president and chief executive at $75,000 and his wife Candi Seager is vice-president at $45,000, both reporting 60-hour weeks; they are the only compensated officers. The Form 990 reports 11 voting members of whom 8 are independent and answers "Yes" to whether officers or directors have a family or business relationship with each other, referring the reader to Schedule O — and Schedule O is not in the copy posted on the site.',
      'All foreign money goes out as support to individuals, not as grants to institutions. Schedule F shows $1,478,505 of foreign grants, every dollar of it classed as "FIELD STAFF EXPENSES" to 88 individuals — 55 of them in sub-Saharan Africa — with no recipient organisation named anywhere on the schedule. Schedule I also answers "No" to whether the organisation keeps records substantiating the amount and eligibility of its domestic grants, against $126,662 of them.',
      'The Reserve Corps page states that "CHSC retains a 10% administrative allocation for all funds donated to CHSC for service of staff and volunteers." A gift designated to a named missionary is therefore 90% designated.',
      'Every headline count belongs to a partner hospital, not to Christian Health Service Corps. The annual report is careful about this — its own words are "In 2025, CHSC assisted our partner hospitals with" — but the figures then appear on later pages as large numerals with no such qualifier.',
    ],
  },
  roi: {
    levers: ['existing-network', 'local-workers', 'local-cost-base', 'multiplication'],
    reason:
      'The leverage here is a person, not a purchase. A surgeon placed for a decade in a hospital that already has a theatre and no surgeon changes what that hospital can do for its whole catchment, and the hospital pays the overheads. On top of that sits the part that compounds: residency training in Angola, Kenya, Ethiopia, DR Congo, Burundi, Malawi and Gabon, and the newer decision to employ the African surgeons those programmes produce — the cheapest surgeon to put in a rural African hospital is one who already lives in the country and trained there. The model is also unusually cheap to fund because the missionaries raise much of their own salary: "Each of our healthcare professionals help raise their salary and expenses while serving."',
  },
  costModel: {
    outcome: 'surgery performed by a surgeon Christian Health Service Corps employs',
    outcomePlural: 'surgeries performed by surgeons Christian Health Service Corps employs',
    spend: {
      amount: 4634991,
      basis: 'program-services',
      fiscalYear: 'FYE September 2025',
      sourceId: 'chsc-audit-25',
    },
    count: {
      amount: 1131,
      label: 'patient surgeries performed by CHSC national physicians',
      fiscalYear: '2025',
      sourceId: 'chsc-ar-25',
    },
    attribution: 'all-program-spend',
    caveat:
      'A deliberately narrow denominator and therefore a high upper bound. We used the only surgical count that is unambiguously Christian Health Service Corps’ own work — the 1,131 operations performed by the national physicians it employs — against its entire programme budget, which also supports 88 field staff abroad, residency training, hospital equipment and quality-improvement programmes in twenty countries. The ministry’s own advertised prices are $200 for a child’s surgery and, for its national physicians, "a cost of less than $100 per surgery": between twenty and forty times below this figure, because those prices are the marginal cost of one operation in a hospital whose theatre, ward and staff are already paid for. The spending year ends 30 September 2025 and the counts are labelled calendar 2025, so the two halves do not cover quite the same twelve months.',
    alternates: [
      {
        label: 'surgeries at the partner hospitals CHSC assisted',
        count: 44661,
        note:
          'This is the number on the front of the annual report, and dividing by it gives about $104 per surgery — which would make this the cheapest surgery in the directory by a factor of four hundred. It is not a cost Christian Health Service Corps paid. These are 30 independent hospitals’ own operating theatres, staff and budgets; CHSC assisted them. Treat $104 as a measure of how much hospital capacity a placed missionary sits on top of, not as a price.',
      },
      {
        label: 'C-sections at partner hospitals',
        count: 6285,
        note: 'About $737 each on the same arithmetic, and subject to exactly the same objection.',
      },
      {
        label: 'patients served',
        count: 1227946,
        note:
          'Under $4 a head. This is the broadest figure the ministry publishes and it is mostly outpatient visits — the single most inflatable denominator in global health. We list it to show what happens to a cost per outcome when the unit is allowed to slide.',
      },
    ],
  },
  ministryClaims: [
    {
      quote: '$200 Can Help Provide Lifesaving Surgery for a Child',
      sourceId: 'chsc-catalogue',
      impliedCostPerOutcome: 200,
      impliedOutcome: 'surgery for a child',
    },
    {
      quote:
        'In 2025 CHSC National Physicians performed 1,131 patient surgeries. More than 600 of which were for children at a cost of less than $100 per surgery.',
      sourceId: 'chsc-ar-25',
      impliedCostPerOutcome: 100,
      impliedOutcome: "child's surgery by a CHSC national physician",
    },
    {
      quote:
        'In 2025 we built up the capacity of healthcare facilities and programs and supported our partners in the care of over 1.2 million patients, all on less than $6 million - making CHSC one of the most efficient healthcare charities in the world.',
      sourceId: 'chsc-ar-25',
    },
    {
      quote:
        "Christian Health Service Corps is an interdenominational Christian mission that holds the Apostles' Creed as our Christian Statement of Faith. The key qualification for missionary service is being a true disciple of Jesus.",
      sourceId: 'chsc-application',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 2,
      note:
        'Missionary service requires being "a true disciple of Jesus" and the ministry holds the Apostles’ Creed, which is a historic confession rather than a modern evangelical statement of faith. Spiritual work is a named programme — 54 hospital and community chaplains supported and 574 Bible studies facilitated in 2025. Marked down because there is no statement-of-faith page on the site: the creed is disclosed inside an application form and an FAQ.',
    },
    localLeadership: {
      value: 2,
      note:
        'The historic model is sending North American professionals, which is the opposite of local leadership, and the hospitals are owned by African and Asian churches rather than by CHSC. But the direction of travel is clear and recent: residency training in seven countries, 3,138 local healthcare professionals trained in 2025, and a new policy of directly employing board-certified national surgeons as they graduate.',
    },
    financialTransparency: {
      value: 2,
      note:
        'Audited consolidated statements for four years and three Form 990s are posted, and the audit’s functional matrix matches the annual report’s finance panel exactly, which is rarer than it should be. Marked down because the most recent Form 990 on the site is a year behind the audit, the posted return omits the Schedule O that its own Part VI points to, an older finance page with 2020-era figures is still live, and the Candid seal on every page reads 2022.',
    },
    outcomeEvidence: {
      value: 1,
      note:
        'A long list of specific counts is published for 2025. Marked down to 1 because the counts contradict each other between pages of the same report — 4,035 against 3,138 professionals trained, 4,776 against 3,041 against 1,735 malnutrition cases, 245 against 40 fistula repairs — because "surgeries" and "patients" are used interchangeably for the same 44,661, and because nearly all of it is partner-hospital throughput rather than CHSC output.',
    },
    costEvidence: {
      value: 1,
      note:
        'Both halves of a division exist in audited documents, and the ministry publishes per-item prices, which is more than most. Marked down to 1 because those prices are between twenty and forty times below programme spending per surgery with no explanation of what they include, and because the fiscal year of the spending and the calendar year of the counts do not match.',
    },
  },
  notVerified: [
    'What the $200 and "less than $100 per surgery" prices include. They are almost certainly the consumables and theatre cost of one additional operation in a hospital whose building, equipment and salaried staff are already funded by someone else. Programme spending per surgery performed by CHSC’s own physicians is about $4,098 — twenty to forty times higher. Neither figure is wrong; they answer different questions, and nothing published says which question the catalogue price answers.',
    'Whether 44,661 counts surgeries or patients. Page 3 of the annual report says "Providing surgery to 44,661 patients", page 5 says "44,661 Patients Received Surgery", and page 10 says "44,661 total surgeries". A patient having two operations cannot be both.',
    'The number of healthcare professionals trained is given twice and differently in the same report: 4,035 on pages 3 and 5, and "a total of 3,138" on page 12. Malnutrition cases appear as 4,776, 3,041 and 1,735 on three different pages, obstetric fistula repairs as 245 and 40, and intensive care admissions as 2,118 and 1,530.',
    'How many missionaries are placed. This is the central unit of the whole model and no headcount is published anywhere on the site or in the annual report. The only figure we found is on the prior-year Form 990: 88 individuals abroad receiving field staff expenses.',
    'The country count. The annual report says 27 countries and 30 hospital partners; the "What We Do" page says 25 countries; the hospital directory names hospitals in 20. This page lists the 20 with a named hospital partner.',
    'The claim that CHSC is "one of the most efficient healthcare charities in the world" rests on dividing its own budget by its partner hospitals’ patient volume. On that method any organisation that assists a large hospital is efficient.',
    'The Schedule O referenced by Part VI line 2 of the posted Form 990 — the disclosure of family relationships among officers and directors — is not included in the posted PDF.',
    'No outcome, complication or follow-up data is published for any surgery, and no retention figure for the missionaries placed.',
    'What "39,193,356 people globally" refers to. It is the largest figure in the annual report, is attached to "Improving access to quality healthcare for more than", and has no method or year behind it.',
  ],
  notes: [
    'The fiscal year ends 30 September. FY2025 audited expenses were $4,634,991 of programme services, $541,958 of management and general and $116,676 of fundraising, totalling $5,293,625 against $5,714,202 of revenue. The annual report’s own pie chart reports the same split as 88%, 10% and 2%.',
    'The audited file posted on the site is named "CHSC-Final-Audit-Report-FY-2024.pdf" and the site labels it 2024-2025, but the statements inside cover the year ended 30 September 2025. The naming is misleading; the content is current.',
    'An older finance page is still live and still says "94 cents of every dollar", cites 2021 outcome figures and names a former board chairman. If you land on it from a search engine you are reading five-year-old numbers.',
    'The FY2024 Form 990 reports total expenses of $4,618,944 against the FY2024 audit’s $4,618,946 — a two-dollar difference, which is the closest agreement between a return and an audit anywhere in this directory, and worth noting in a category where the gaps are usually millions.',
  ],
  siteUrl: 'https://healthservicecorps.org/',
  giveUrl: 'https://healthservicecorps.org/donate/',
  sources: [
    {
      id: 'chsc-site',
      label: 'What We Do',
      url: 'https://healthservicecorps.org/what-we-do/',
      publisher: 'Christian Health Service Corps',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'chsc-spiritual',
      label: 'Spiritual Impact',
      url: 'https://healthservicecorps.org/what-we-do/spiritual-impact/',
      publisher: 'Christian Health Service Corps',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'chsc-application',
      label: 'Preliminary application for missionary service',
      url: 'https://healthservicecorps.org/preliminary-application-for-missionary-service/',
      publisher: 'Christian Health Service Corps',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note:
        'There is no statement-of-faith page. The Apostles’ Creed and the requirement to be a disciple of Jesus are disclosed in the "Faith Questions" step of this form, and repeated in the Reserve Corps FAQ.',
    },
    {
      id: 'chsc-longterm',
      label: 'Long-term medical missions',
      url: 'https://healthservicecorps.org/medical-missions-volunteers/',
      publisher: 'Christian Health Service Corps',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'States the three-year minimum commitment.',
    },
    {
      id: 'chsc-reserve',
      label: 'CHSC Reserve Corps',
      url: 'https://healthservicecorps.org/chsc-reserve-corps/',
      publisher: 'Christian Health Service Corps',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'The short-term programme: deployments of two weeks to one year, and the 10% administrative allocation on designated gifts.',
    },
    {
      id: 'chsc-hospitals',
      label: 'Hospital partners',
      url: 'https://healthservicecorps.org/hospitals/',
      publisher: 'Christian Health Service Corps',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Names 30 hospitals; the countries on this page are the 20 in which a hospital is actually named.',
    },
    {
      id: 'chsc-catalogue',
      label: 'Year-end catalogue',
      url: 'https://healthservicecorps.org/year-end-catalogue/',
      publisher: 'Christian Health Service Corps',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Where the per-item prices are advertised, from $20 for a child’s outpatient care to $200 for a child’s surgery.',
    },
    {
      id: 'chsc-financials',
      label: 'Key staff and financial transparency',
      url: 'https://healthservicecorps.org/key-staff-financial-transparency/',
      publisher: 'Christian Health Service Corps',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Posts four audits and three Form 990s, and displays the ECFA, Candid and Excellence in Giving marks.',
    },
    {
      id: 'chsc-audit-25',
      label: 'Audited consolidated financial statements, year ended 30 September 2025',
      url: 'https://www.healthservicecorps.org/wp-content/uploads/2026/06/CHSC-Final-Audit-Report-FY-2024.pdf',
      publisher: 'Christian Health Service Corps',
      documentType: 'audited-financials',
      retrieved: '2026-09-18',
      fiscalYear: 'FYE September 2025',
      note:
        'Programme services $4,634,991 of $5,293,625 total, with a functional expense statement. Consolidated with CHSC Holding Company, SA, a Honduran land-holding subsidiary. The filename says FY-2024; the statements inside are for the year ended 30 September 2025.',
    },
    {
      id: 'chsc-990-24',
      label: 'Form 990, year ended 30 September 2024',
      url: 'https://www.healthservicecorps.org/wp-content/uploads/2026/06/2023-Exempt-1R5747CH-Christian-Health-Service-Corps-Inc.-FINAL-Excludes-donors.pdf',
      publisher: 'Christian Health Service Corps',
      documentType: 'form-990',
      retrieved: '2026-09-18',
      fiscalYear: 'FYE September 2024',
      note:
        'The most recent return posted, a year behind the audit. Source of the governance and Schedule F facts quoted here. Part VI line 2 refers the reader to Schedule O, which is not included in this PDF.',
    },
    {
      id: 'chsc-ar-25',
      label: '2025 Annual Report',
      url: 'https://www.healthservicecorps.org/wp-content/uploads/2026/05/2026_Annual-Report-1.pdf',
      publisher: 'Christian Health Service Corps',
      documentType: 'annual-report',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note:
        'Counts are introduced on page 3 as "In 2025, CHSC assisted our partner hospitals with" and reappear on later pages as unqualified numerals. The finance panel on page 25 reproduces the audited FY2025 figures. Several counts contradict each other between pages.',
    },
    {
      id: 'chsc-propublica',
      label: 'IRS filings for Christian Health Service Corps, Inc., EIN 27-1505747',
      url: 'https://projects.propublica.org/nonprofits/organizations/271505747',
      publisher: 'ProPublica Nonprofit Explorer',
      documentType: 'third-party',
      retrieved: '2026-09-18',
      note: 'Extracted data stops at the year ended September 2023; later returns are listed without data.',
    },
  ],
};
