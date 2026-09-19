import type { Cause } from '@/lib/types';

export const paacs: Cause = {
  slug: 'paacs',
  name: 'PAACS',
  legalName: 'Pan-African Academy of Christian Surgeons',
  ein: '84-2569391',
  tagline: 'Trains African surgeons inside African mission hospitals, on condition that they stay.',
  category: 'health',
  countries: [
    'Angola',
    'Burundi',
    'Cameroon',
    'Egypt',
    'Ethiopia',
    'Gabon',
    'Kenya',
    'Madagascar',
    'Malawi',
    'Niger',
    'Tanzania',
    'Togo',
  ],
  whatTheyDo:
    'PAACS runs accredited surgical residencies inside existing Christian mission hospitals in Africa — general surgery, paediatric surgery, orthopaedics, neurosurgery, head and neck, obstetrics and gynaecology. Residents are African doctors who train for five to six years where they will practise, taught largely by visiting and resident missionary surgeons, and who move through a formal discipleship curriculum alongside the surgical one. As of the year ending June 2025 it had 28 programmes at 21 mission hospitals in 12 countries, 186 residents and fellows in training, and 187 graduates.',
  accreditations: [
    {
      label: 'ECFA member (stated on the site, no badge or profile link)',
      sourceId: 'paacs-financials',
    },
  ],
  verification: 'documents-reviewed',
  biblicalAlignment: {
    mandate:
      'Paul’s instruction to Timothy is the whole model: entrust what you were taught to faithful people who will teach others. PAACS does not buy operations, it makes surgeons, and a surgeon who stays in Malawi will operate for thirty years and train the people who come after him. The healing mandate is obvious; the multiplication mandate is the reason this cause exists at all rather than paying for the surgeries directly.',
    scriptures: [
      {
        ref: '2 Timothy 2:2',
        text: 'And what you have heard from me in the presence of many witnesses entrust to faithful men, who will be able to teach others also.',
      },
      {
        ref: 'Matthew 9:37–38',
        text: 'Then he said to his disciples, “The harvest is plentiful, but the labourers are few; therefore pray earnestly to the Lord of the harvest to send out labourers into his harvest.”',
      },
      {
        ref: 'Luke 10:9',
        text: 'Heal the sick in it and say to them, “The kingdom of God has come near to you.”',
      },
    ],
    doctrine: {
      label: 'Ten-clause statement of faith',
      sourceId: 'paacs-faith',
    },
    concerns: [
      'PAACS requires residents to "Be a sincere follower of Jesus Christ as evidenced by your words, your actions and your lifestyle." That is a coherent position for a discipleship programme and it also means a Muslim or animist surgeon in Niger, where the need is as acute, cannot train here. A donor should decide deliberately whether they are funding surgical capacity or Christian surgical capacity; PAACS is unambiguously the second.',
      'The Form 990 reports 24 foreign grants with every recipient name left blank, all described as "GENERAL SUPPORT", and $182,233 of them unitemised. The grantees are mission hospitals PAACS names freely elsewhere on its website, so this is almost certainly a filing habit rather than concealment — but as filed, the money leaves the return untraceable.',
      'Almost everything PAACS delivers depends on visiting surgeons donating their time: $2,450,370 of contributed non-financial assets in FY2025, valued by the ministry at medical compensation survey salary rates. The programme is therefore only about half funded by cash, and that half of the teaching capacity is a volunteer pipeline rather than a budget line.',
      'The ministry’s public figures do not agree with its own filings. The website’s "Our Impact This Year" panel, which carries no date, says 206 in training, 209 graduates, 26 countries and 29 programmes; the Form 990 for the year ending June 2025 says 186, 187, 25 and 28. A reader cannot tell which year either set describes.',
    ],
  },
  roi: {
    levers: ['multiplication', 'local-workers', 'local-cost-base', 'existing-network'],
    reason:
      'This is the clearest multiplication case in the health category. A surgeon trained in Africa, by Africans and long-term missionaries, inside a hospital he will keep working in, performs 200 to 300 operations a year for a career — PAACS puts its 186 current trainees at over 46,500 people surgically affected in a single year, before any of them has graduated. Training costs less here than anywhere else it could be done: the teaching hospital already exists, the salaries are African, and the classroom is the operating theatre the residents are already needed in. And the retention condition is the point — a graduate who emigrates is a total loss, which is why the selection criteria and the discipleship curriculum are built around staying.',
  },
  costModel: {
    outcome: 'year of surgical training for an African resident',
    outcomePlural: 'years of surgical training for African residents',
    spend: {
      amount: 4899695,
      basis: 'program-services',
      fiscalYear: 'FYE June 2025',
      sourceId: 'paacs-audit-25',
    },
    count: {
      amount: 186,
      label: 'residents and fellows in training',
      fiscalYear: 'FY2025',
      sourceId: 'paacs-990-25',
    },
    attribution: 'all-program-spend',
    caveat:
      'An upper bound, though a tighter one than most on this site, because training is essentially all PAACS does. Two things to hold in mind. Half of the numerator is not cash: $2,450,370 of the $4,899,695 is donated surgeon time that PAACS valued itself using salary survey rates, and on cash alone the Form 990’s $2,449,325 of programme spending against the same 186 residents gives about $13,200. And this figure is a cost per resident-year, not a cost per surgeon: a general surgery residency runs five to six years, so a trained surgeon costs roughly five times this number.',
    alternates: [
      {
        label: 'surgeons who graduated in FY2025',
        count: 31,
        note: 'About $158,000 per graduate, which charges a whole year of training 186 people to the 31 who finished. It is the wrong arithmetic but it is the right order of magnitude for what a completed surgeon costs.',
      },
    ],
  },
  ministryClaims: [
    {
      quote: 'One year of PAACS training and discipleship requires about $25,000.',
      sourceId: 'paacs-resident',
      impliedCostPerOutcome: 25000,
      sameUnitAsCostModel: true,
      impliedOutcome: 'resident-year',
    },
    {
      quote:
        'PAACS’ mission is to glorify God by training and discipling African surgeons and related specialists to become Christ-like leaders and servants providing excellent and compassionate care to those most in need.',
      sourceId: 'paacs-purpose',
    },
    {
      quote:
        'EACH PAACS TRAINEE IS EXPECTED TO BE THE SURGEON OR PRIMARY ASSISTANT ON APPROXIMATELY 200-300 CASES PER YEAR. WE ESTIMATE THAT COMBINED THEY SURGICALLY IMPACTED OVER 46,500 INDIVIDUALS. EACH ONE IS AN OPPORTUNITY TO PRAY AND SHARE THE GOSPEL.',
      sourceId: 'paacs-990-25',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 3,
      note: 'A ten-clause statement of faith, a mission statement that begins with glorifying God, a discipleship curriculum that runs in parallel with the surgical one, and a requirement that residents be followers of Christ. There is no ambiguity here at all.',
    },
    localLeadership: {
      value: 3,
      note: 'The entire product is African surgical leadership: 186 African residents, 187 African graduates practising in 25 countries, taught inside African hospitals on the condition that they stay. The organisation is American and so is its board, which is the only reason this is not higher.',
    },
    financialTransparency: {
      value: 2,
      note: 'Four years of audited statements and four Form 990s are posted on the site, and the audit’s functional matrix separates donated services from cash, which is what makes this page checkable. Marked down because the ECFA claim is text with no badge or member profile behind it, because Schedule F names no grantee, and because the site’s own impact counters contradict the filings.',
    },
    outcomeEvidence: {
      value: 2,
      note: 'Residents, graduates, programmes, hospitals and countries are all counted precisely and the year-on-year progression is coherent. Marked down because the headline "46,500 individuals" is explicitly the ministry’s own estimate rather than a count, and because no graduate-retention figure is published — retention is the one outcome that decides whether the model works.',
    },
    costEvidence: {
      value: 3,
      note: 'PAACS publishes a price for one year of training and our own division of audited programme spending by residents in training comes to $26,342 against their advertised $25,000 — agreement within 5.4%. That is the closest match between a ministry’s marketing figure and its audited arithmetic anywhere in this directory.',
    },
  },
  notVerified: [
    'How many PAACS graduates are still practising in Africa. The whole case for training rather than treating rests on retention, and no retention rate, emigration rate or current-practice survey is published for any cohort. The 990 says 187 alumni are "NOW SERVING IN 25 COUNTRIES", which is a location, not a rate.',
    'The 46,500 individuals figure is PAACS’ own estimate, derived from 186 trainees at an assumed 200 to 300 cases each, and the 990 says so in those words. We do not treat it as a count and it is not used in any arithmetic on this page.',
    'The audited statements and the Form 990 describe two different-sized organisations for the same year: total expenses of $5,825,603 in the audit against $3,410,302 on the return. The reconciliation is $2,450,370 of donated services that the IRS does not permit on the return, plus $35,069 of investment management fees that appear only on the return. Both figures are correct and a donor comparing PAACS with another ministry needs to know which one they are holding.',
    'How the $2,450,370 of donated surgeon time was valued beyond "medical compensation survey" rates. The number is 50% of programme spending and its valuation method is one line in a note.',
    'All 24 Schedule F foreign grants are filed with a blank recipient name and the single purpose "GENERAL SUPPORT", and $182,233 is unitemised. Schedule F’s regional total of $2,349,073 also does not match Part IX’s programme figure of $2,449,325.',
    'The site’s undated impact panel says 206 in training, 209 graduates, 29 programmes and 26 countries; the FY2025 filings say 186, 187, 28 and 25. A second page says 29 programmes in 22 hospitals where the 990 says 28 in 21.',
    'Nothing is published about what a PAACS resident is paid, or who pays it. "Residents who aren’t able to find sponsorship are most often sponsored through PAACS" tells a donor that a gift may be a stipend, but not how much of one.',
    'ProPublica’s most recent extracted return for PAACS is FY2023, so the FY2025 figures here rest on the ministry’s own posted PDFs with no third-party copy to check them against.',
  ],
  notes: [
    'FY2025 runs July 2024 to June 2025. Audited expenses were $4,899,695 of programme services, $415,035 of general and administrative and $510,873 of fundraising, totalling $5,825,603.',
    '51 new residents and fellows started in January 2025, 31 surgeons graduated during the year, and two new programmes opened — a general surgery residency at AIC Kapsowar Hospital and a second obstetrics and gynaecology programme at AIC Kijabe Hospital, both in Kenya.',
    'PAACS files no W-2s: all employees are outsourced through a professional employment organisation and reimbursed. That is disclosed on Schedule O and it is why the salary lines on the return look small for an organisation of this size.',
    'BethanyKids runs its paediatric surgery fellowship as a PAACS programme, and CURE International and African Mission Healthcare fund several of the same hospitals. A donor giving to more than one ministry in this category is, in part, funding the same buildings twice — which is not double-counting on anyone’s part, but is worth knowing.',
  ],
  siteUrl: 'https://paacs.net/',
  giveUrl: 'https://paacs.net/donate/support/support.html',
  sources: [
    {
      id: 'paacs-site',
      label: 'Homepage',
      url: 'https://paacs.net/',
      publisher: 'PAACS',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Carries an undated "Our Impact This Year" panel whose figures do not match the FY2025 filings.',
    },
    {
      id: 'paacs-purpose',
      label: 'Purpose and mission',
      url: 'https://paacs.net/who-we-are/purpose.html',
      publisher: 'PAACS',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'paacs-faith',
      label: 'Statement of Faith',
      url: 'https://paacs.net/who-we-are/statement-of-faith.html',
      publisher: 'PAACS',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Ten clauses, covering Scripture, the Trinity, the deity and bodily resurrection of Christ, salvation by grace through faith, and the return of Christ.',
    },
    {
      id: 'paacs-programs',
      label: 'What We Do',
      url: 'https://paacs.net/what-we-do/',
      publisher: 'PAACS',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'paacs-sites',
      label: 'Training sites',
      url: 'https://paacs.net/what-we-do/training-sites.html',
      publisher: 'PAACS',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'The list of mission hospitals and countries the residencies run in.',
    },
    {
      id: 'paacs-resident',
      label: 'Become a Resident',
      url: 'https://paacs.net/get-involved/become-a-resident.html',
      publisher: 'PAACS',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Source of both the $25,000 per training year figure and the requirement that residents be followers of Christ.',
    },
    {
      id: 'paacs-financials',
      label: 'Financial information',
      url: 'https://paacs.net/resources/financial.html',
      publisher: 'PAACS',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Links audited statements and Form 990s for FY2022 through FY2025, and states ECFA membership in text.',
    },
    {
      id: 'paacs-audit-25',
      label: 'Audited financial statements, FY July 2024 – June 2025',
      url: 'https://paacs.net/file_download/inline/5e9a031b-7373-427b-be52-ea4c5aa02b95',
      publisher: 'PAACS',
      documentType: 'audited-financials',
      retrieved: '2026-09-18',
      fiscalYear: 'FYE June 2025',
      note: 'Programme services $4,899,695 of $5,825,603 total. The functional matrix shows $2,450,370 of contributed non-financial assets charged entirely to medical training and education services.',
    },
    {
      id: 'paacs-990-25',
      label: 'Form 990, FY July 2024 – June 2025',
      url: 'https://paacs.net/file_download/inline/de7ff89a-6c0d-4098-9e86-5e138a1ed88b',
      publisher: 'PAACS',
      documentType: 'form-990',
      retrieved: '2026-09-18',
      fiscalYear: 'FYE June 2025',
      note: 'Part III carries the 186 in training, 51 new starters, 28 programmes and 12 countries; Schedule O adds the 31 graduates and 187 alumni. Part IX line 25 totals $3,410,302, which excludes the donated services in the audit.',
    },
    {
      id: 'paacs-propublica',
      label: 'IRS filings for Pan-African Academy of Christian Surgeons, EIN 84-2569391',
      url: 'https://projects.propublica.org/nonprofits/organizations/842569391',
      publisher: 'ProPublica Nonprofit Explorer',
      documentType: 'third-party',
      retrieved: '2026-09-18',
      note: 'Most recent extracted year is FY2023; the FY2024 and FY2025 returns are listed without data.',
    },
  ],
};
