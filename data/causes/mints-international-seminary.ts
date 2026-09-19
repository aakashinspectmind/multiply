import type { Cause } from '@/lib/types';

export const mintsInternationalSeminary: Cause = {
  slug: 'mints-international-seminary',
  name: 'MINTS International Seminary',
  legalName: 'Miami International Seminary Inc',
  ein: '91-2132082',
  tagline:
    'A seminary with no campus: national coordinators run self-financing study centres on free Reformed curriculum in thirteen languages, on a head-office budget of $377,426.',
  category: 'training',
  countries: ['Latin America', 'Mexico'],
  whatTheyDo:
    'MINTS was founded in Miami in 2000 to train the city’s immigrant pastors and spread outward from there. It grants its own degrees — certificate, associate, bachelor, master, MDiv, DMin and PhD in theological studies — but owns almost nothing. The curriculum is given away free in thirteen languages; classes meet in churches, homes and schools; national coordinators establish and run their own study centres, which MINTS requires to pay for themselves; and every member of MINTS personnel is a missionary who raises his own support. The largest visible part of the work is MINTS Español across Latin America, including programmes inside prisons in Ecuador and Chile. MINTS is explicit that it is not accredited by any body recognised by the US Department of Education and that its degree does not qualify a graduate to be a minister.',
  accreditations: [],
  verification: 'documents-reviewed',
  biblicalAlignment: {
    mandate:
      'The verse MINTS puts in the footer of every page is 2 Timothy 2:15 — a worker who correctly handles the word of truth and has no reason to be ashamed. Its model is the verse before it: teach people who will teach others, in their own towns, and let them start the next school. Titus 1:9 is why a seminary rather than a seminar: an elder has to hold the trustworthy word firmly enough to instruct and to correct, and MINTS’s answer is a multi-year degree rather than a conference. Its own premise is Hosea’s — that ninety-five percent of the world’s ministers were never taught at all.',
    scriptures: [
      {
        ref: '2 Timothy 2:15',
        text: 'Do your best to present yourself to God as one approved, a worker who has no need to be ashamed, rightly handling the word of truth.',
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
    concerns: [
      'MINTS describes a Florida exemption from oversight as if it were an authorisation. The homepage says MINTS "is authorized by the Florida Department of Education’s Council on Independent Education (CIE) to grant religious degrees" and the catalog says registration "shows that MINTS is qualified and registered to grant religious vocational degrees in the State of Florida and that it meets the regulations of the State." The letter MINTS itself publishes says the Commission accepted a sworn affidavit "which provides for the exemption of certain religious schools from this Commission’s jurisdiction" and that the institution "is not subject to governmental oversight" for one year. An annual self-certified exemption is close to the opposite of an accreditation, and the body is the Commission for Independent Education, not the "Council".',
      'There is no statement of faith. The catalog says MINTS requires its trustees "to subscribe verbally to one or more of these classic statements of the Reformed Christian Faith" — verbally, and one of four. Nothing doctrinal is required of faculty or students, and the homepage says MINTS "welcomes students from all religious backgrounds". The content is confessionally Reformed, which a donor should know; the accountability around it is thin.',
      'MINTS claims ECFA accreditation in a newsletter, beside an ECFA badge, and nowhere on its own website. We could not confirm or refute it: ECFA’s member directory cannot be queried without a browser session. Treat the claim as unverified rather than either true or false.',
      'The reporting entity is not the ministry. MINTS says plainly that all its personnel raise their own support and that all study centres must sustain themselves and are not dependent on outside funding. That means the overwhelming majority of the real cost of educating the students it counts sits outside the $377,426 organisation that files the tax return, and no consolidated or combined statement exists. Any efficiency claim built on these financials is measuring a head office, not a seminary.',
      'Role concentration. In one catalog Dr. Julian Zugg is simultaneously President, English language programmes coordinator, Associate Academic Dean for English Africa, Associate Academic Dean for English International, and Biblical Studies coordinator. Four of the thirteen language-coordinator slots are printed with no name at all, against a claim of free curriculum in thirteen languages. The 2025 catalog names Dr. Jim Reed as board chairman; the 2025 Form 990 names A.J. Ager.',
      'The published material is not being maintained. The site footer reads "©2022 MINTS International Seminary", the headline graduate figure is dated "As of 2022", the newsletter presented as current is from March 2025, the 2025 Manual’s running heads all say 2024, and the donation link the newsletter gives — www.mints.edu/give — returns a 404. For an institution asking for support, a broken giving link in its own current newsletter is a real failure of care.',
      'Students in Cuba and Venezuela are exposed to economies MINTS itself describes as very difficult, and Venezuela supplied the largest single national share of 2024 Spanish-side graduates. No currency or country-risk disclosure exists, and there is no statement of how prison programmes in Ecuador and Chile obtain consent or protect participants.',
    ],
  },
  roi: {
    levers: ['local-workers', 'local-cost-base', 'existing-network', 'multiplication'],
    reason:
      'Almost everything expensive about a seminary has been removed on purpose. There are no buildings — MINTS says it does not invest in overhead like buildings and expects classes in churches, schools and homes. There is no faculty payroll in the ordinary sense: the 2025 return reports zero employees and Schedule O says "ALL EMPLOYEES RAISE THEIR OWN COMPENSATION AND ARE PAID AS 1099 CONTRACTORS", and the centres are run by national coordinators who must make them self-sustaining. The curriculum is written once and given away free, in thirteen languages by the website’s count and over sixteen by the return’s, so the marginal cost of a new centre is a coordinator’s time. And the model is explicitly reproductive: mature centres are expected to start new centres, and the doctoral students are described as the next generation of MINTS teachers. The honest flip side is that this efficiency is achieved by moving cost onto the poorest participants rather than eliminating it, which is why the figure on this page is the cost of a credential to the head office and not the cost of an education.',
  },
  costModel: {
    outcome: 'degree or certificate earned',
    outcomePlural: 'degrees and certificates earned',
    spend: {
      amount: 323788,
      basis: 'program-services',
      fiscalYear: '2025',
      sourceId: 'mints-990-25',
    },
    count: {
      amount: 300,
      label:
        'people who earned certificates or theological degrees, English- and Spanish-language programmes',
      fiscalYear: '2025',
      sourceId: 'mints-990-25',
    },
    attribution: 'all-program-spend',
    caveat:
      'Both halves come from the Form 990 Miami International Seminary e-filed for calendar 2025: Part IX reports $323,788 of program services inside $377,426 of total expenses, and Part III reports that "IN 2025, OVER 300 PEOPLE EARNED CERTIFICATES OR THEOLOGICAL DEGREES" across the English- and Spanish-language programmes. The prior year’s return gives the same figure exactly — 298 individuals — so the two are consistent. A conferred credential is the one thing here MINTS itself delivers: the centres do the teaching and are required to fund themselves, but MINTS grants the degree. Because "over 300" is a floor, $1,079 is a ceiling on the head office’s cost per credential, and it is nowhere near the cost of the education behind it. MINTS states that "All MINTS personnel are missionaries, and as such, they raise their own financial support" and that "All centers must sustain themselves. They are not dependent on outside funding", so the classrooms, the coordinators and almost all of the teaching hours behind every one of those credentials are paid for outside this entity, by people whose giving is never added up anywhere; the return reports no employees at all. The same $323,788 also carried more than 4,300 enrolled students who did not graduate in 2025, courses written and translated into over sixteen languages, and $43,481 of grants to individuals in six regions abroad. And the numerator’s largest component is unexplained: $280,899 of the year’s $377,426 sits on the single line for compensation of officers, directors, trustees and key employees, $232,991 of it charged to programs, while Part VII names officer pay of $79,500 in total. Schedule O’s statement that all personnel are paid as 1099 contractors is the nearest thing to an explanation of the $201,399 difference, and the return never actually gives one. We do not divide by the number the ministry leads with, which is enrolment — "over 4500 students" on the website, "OVER 4,300" in this return. That reads as about $75 for a year of degree-level study, which would be the most flattering figure in this directory and the least true.',
    alternates: [
      {
        label: 'the 110 study centres the same return reports by December 2025',
        count: 110,
        note: 'About $2,944 per centre for the year. The wording is "HAD ESTABLISHED", which reads cumulative rather than current, and the count nearly doubled from the 60 the 2024 return reported while total spending fell by $95,746 — so a jump in centres established is not a jump in centres operating. MINTS also does not say whether the 21 Florida prison study centres are inside the 110.',
      },
      {
        label: 'the "OVER 4,300" global enrolment at the end of 2025',
        count: 4300,
        note: 'About $75 for a year of degree-level study, and the shape of figure MINTS leads with everywhere. It prices a head office against students whose teaching somebody else paid for. It also cannot be reconciled with the ministry’s own numbers: the March 2025 newsletter reports 4,704 students in the Spanish-language programme alone, and the website claims "over 4500" globally.',
      },
    ],
  },
  ministryClaims: [
    {
      quote: 'IN 2025, OVER 300 PEOPLE EARNED CERTIFICATES OR THEOLOGICAL DEGREES',
      sourceId: 'mints-990-25',
    },
    {
      quote:
        'BY DEC 2025, THE ORGANIZATION HAD ESTABLISHED 110 STUDY CENTERS ACROSS 40 COUNTRIES. THE MINTS GLOBAL ENROLLMENT AT YEAR-END REACHED OVER 4,300 STUDENTS.',
      sourceId: 'mints-990-25',
    },
    {
      quote:
        'THE FLORIDA PRISON MINISTRY CONTINUES TO GROW RAPIDLY WITH 21 PRISON-BASED STUDY CENTERS; 370 STUDENTS ENROLLED; AND 5 GRADUATES SO FAR, WITH MANY MORE NEARING COMPLETIONS.',
      sourceId: 'mints-990-25',
    },
    {
      quote:
        'AS OF DECEMBER 2024, THE ORGANIZATION HAS 60 STUDY CENTERS IN 36 COUNTRIES. YEAR-END ENROLLMENT IS ESTIMATED TO BE 4,200 STUDENTS.',
      sourceId: 'mints-990-24',
    },
    {
      quote:
        '298 INDIVIDUALS RECEIVED THEOLOGICAL DEGREES, BA, MA, MDIV, DMIN, AND PHD IN THE LAST YEAR.',
      sourceId: 'mints-990-24',
    },
    {
      quote:
        'ALL EMPLOYEES RAISE THEIR OWN COMPENSATION AND ARE PAID AS 1099 CONTRACTORS. THE PRESIDENTS SALARY IS DETERMINED BY THE BOARD OF DIRECTORS.',
      sourceId: 'mints-990-25',
    },
    {
      quote:
        'As of 2022, we have 5,290 graduates serving in churches and ministries around the world.',
      sourceId: 'mints-site',
    },
    {
      quote:
        'With over 4500 students, MINTS is one of the largest seminaries in North America and the world.',
      sourceId: 'mints-accreditation',
    },
    {
      quote:
        'The Lord has blessed MINTS Español in 2024. The number of students increased from 2023-2024 from 4610 to 4704.',
      sourceId: 'mints-newsletter',
    },
    {
      quote:
        'All MINTS personnel are missionaries, and as such, they raise their own financial support to be involved in this worldwide ministry.',
      sourceId: 'mints-site',
    },
    {
      quote: 'All centers must sustain themselves. They are not dependent on outside funding',
      sourceId: 'mints-site',
    },
    {
      quote:
        'Ninety-five (95) percent of the ministers in the world have no Biblical or Theological training.',
      sourceId: 'mints-site',
    },
    {
      quote:
        'MINTS is an IRS 501(c)(3) non-profit educational ministry and is authorized by the Florida Department of Education’s Council on Independent Education (CIE) to grant religious degrees.',
      sourceId: 'mints-site',
    },
    {
      quote:
        'The Commission accepted the affidavit as having complied with Section 1005.06(1)(f), Florida Statutes, which provides for the exemption of certain religious schools from this Commission’s jurisdiction.',
      sourceId: 'mints-cie',
    },
    {
      quote:
        'A MINTS degree does not qualify you to be a minister. We do not ordain men for the ministry.',
      sourceId: 'mints-accreditation',
    },
    {
      quote: 'We are accredited by ECFA and are held to their high standards.',
      sourceId: 'mints-newsletter',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 2,
      note: 'The subject matter is Bible, theology, church history and ministry, taught from a declared Reformed position, and every page carries 2 Timothy 2:15. What holds this short of a 3 is that there is no statement of faith: trustees subscribe verbally to one or more of four confessions, nothing doctrinal is asked of faculty or students, and the seminary states that it welcomes students from all religious backgrounds.',
    },
    localLeadership: {
      value: 3,
      note: 'This is the most locally run model in this theme. National coordinators establish and operate their own centres, the centres must be financially self-sustaining, the curriculum is handed over free, and the entire 2024 graduating cohort we could see was Latin American, taught in Spanish. The board and president are American, which is the one qualification; the teaching and the money are not.',
    },
    financialTransparency: {
      value: 0,
      note: 'MINTS publishes nothing financial: no audit, no annual report, no 990, no expense breakdown, and /give, /giving, /donate and /financials all return 404 — including the giving link the ministry prints in its own newsletter. The returns it files are readable only because the IRS makes them public, and they do not hold together. The 2025 return puts $280,899 of $377,426 on the line for officer and key-employee compensation while Part VII names $79,500 of officer pay and Part I reports zero employees; the 2024 return puts $0 on the same line and $406,769 into one line labelled "PROGRAM EXPENSES", which Part III of that return then calls grants while Part I reports no grants paid. A zero here is a finding, not an absence.',
    },
    outcomeEvidence: {
      value: 2,
      note: 'The returns are where MINTS counts things, and they count them by year: 298 individuals receiving degrees in 2024 and "OVER 300" in 2025, with study centres, countries and a prison programme broken out beside them. Two consecutive filings agreeing on the order of magnitude is what lifts this off a 1. What holds it there is that the website is still worse than useless — "5,290 graduates" is cumulative and frozen at 2022, "over 4500 students" has no period or scope — and that the enrolment figures contradict each other outright, with a global total of "OVER 4,300" for 2025 sitting below the 4,704 the ministry reported for the Spanish-language programme alone in 2024.',
    },
    costEvidence: {
      value: 1,
      note: 'A division is now possible and it is honest about very little: both halves sit in one return, but the numerator is a head office that MINTS itself says does not pay for the teaching, the classrooms or the personnel, so $1,079 measures the cost of granting a credential rather than the cost of earning one. The largest single component of that numerator does not reconcile with the same return’s Part VII. MINTS publishes no cost per student, per course or per centre anywhere, and no consolidated figure for the self-funded centres exists, so the number that would actually answer a donor’s question is unavailable in principle, not merely unpublished.',
    },
  },
  notVerified: [
    'How many students MINTS actually has, and where. There are now four incompatible figures. "Over 4500 students" on the website, with no period and no scope. 4,704 in the March 2025 newsletter, explicitly the Spanish-language programme for 2024. "YEAR-END ENROLLMENT IS ESTIMATED TO BE 4,200 STUDENTS" in the 2024 return, which is a global figure below the single-language one. And "OVER 4,300 STUDENTS" globally in the 2025 return. At least one of these is wrong and MINTS never reconciles them.',
    'What the real cost of a MINTS education is. This is the gap the figure on this page does not close. The filed expenses of $377,426 for 2025 cannot be the cost of teaching thousands of degree students; MINTS says its personnel raise their own support and its centres sustain themselves, so most of the cost is borne outside the entity by people whose contributions are never totalled. Nobody publishes the consolidated figure, so the true cost per graduate is unknown — and almost certainly many times the $1,079 these financials imply.',
    'Whether the graduate counts are people or completions. Degrees stack from certificate to PhD inside the same institution, and one student who progresses through four levels could appear four times. The annual figures say "INDIVIDUALS" for 2024 and "PEOPLE" for 2025, which suggests not, but the cumulative "5,290 graduates" is never defined at all.',
    'Why the graduate figure has not moved. It is labelled "As of 2022" on a site whose footer still reads ©2022, while the ministry has reported roughly 180 Spanish-side graduates in 2024 alone. No update has been published.',
    'What the program money bought. The split exists — $323,788 program, $52,687 management and general, $951 fundraising in 2025 — but the line items do not describe activity. $232,991 of the program column is compensation, $46,261 is a line called "PROGRAM EXPENSES", $18,659 is conferences and meetings, $11,207 is office expenses. Nothing attributes any of it to the 300 credentials, the 110 centres or the courses written, and the two years classify the same kind of spending completely differently.',
    'Who received the $43,481 sent abroad. Schedule F reports it as grants to individuals, in Sub-Saharan Africa ($23,118), East Asia and the Pacific ($8,901), South America ($5,200), non-US North America ($3,412) and Europe ($2,850), paid by cheque or ACH, with sixteen agents or contractors in those regions. The column for the number of recipients is left blank, Schedule F Part II names no organisation, and Schedule I is filed entirely empty.',
    'The 2025 compensation figures. Part IX reports $280,899 on the line for compensation of officers, directors, trustees and key employees — 74% of all expenses — while Part VII names $79,500 of officer pay, Julian Zugg at $47,000 and Dan Tidwell at $32,500, with every one of the seven board members at zero. Part I reports zero individuals employed during the year, and there is nothing on the "other salaries and wages" line. Schedule O’s sentence that all personnel are 1099 contractors who raise their own support is the only hint at what the other $201,399 is. The immediately preceding year reports $0 on the same line on $473,172 of spending, while 2023 reported $317,704 of salaries and compensation — so 2024 is the odd year out, and nothing explains it.',
    'The ECFA claim. Asserted in the newsletter with a badge; absent from the website; not locatable in ECFA’s directory by any means available to us.',
    'The 95% untrained-ministers statistic. No source is given. It is the premise of the whole appeal, and it differs from the 80% and 85% figures other training ministries publish for the same claim.',
    'How many study centres are actually running, and where. The returns give counts the website does not: 60 centres in 36 countries as of December 2024, and 110 across 40 countries "ESTABLISHED" by December 2025. Established is not the same as operating, and a near-doubling in a year when spending fell is the kind of jump that usually means the two sentences are counting different things. No country is ever named, the homepage offers a clickable region map instead of a list, and nothing says whether the prison-based centres are inside the total.',
    'Thirteen languages or over sixteen. The website and catalog say the curriculum exists in thirteen; the 2025 return says materials were translated "INTO OVER 16 LANGUAGES". No list accompanies either figure, and four of the thirteen language-coordinator slots in the catalog are printed with no name.',
    'What "ARTS" accreditation would mean. The catalog says MINTS "is currently pursing recognition with ARTS, which is CHIA certified" — the accreditor named two paragraphs earlier is CHEA. A misspelled accreditor in the one sentence describing a pending accreditation is not a typographical trifle, and we could not identify the body intended.',
    'The prison programmes. Schedule O is specific about Florida — 21 prison-based study centres, 370 students enrolled, five graduates "SO FAR" — and names Chile, Ecuador and Puerto Rico without a figure for any of them; the 2024 return reported 22 prison study centres and 21 prison graduates, which does not reconcile with five graduates so far in Florida unless the two counts cover different places. Nothing says whether these students and centres sit inside the global totals, and nothing anywhere states how incarcerated students consent, how they are assessed, or what happens to the credential on release.',
  ],
  notes: [
    'The figure on this page is a credential, not a student, and the difference is the whole point. Pricing the student is the arithmetic a donor would reach for and it is the one we refuse: $323,788 of 2025 program spending against the "OVER 4,300" students the same return reports reads as about $75 for a year of seminary study, which would be the most flattering number in this directory and the least true. MINTS states that its centres and its personnel pay for themselves, so that division prices a head office and silently excludes almost everything it costs to teach these students. A donor comparing $75 here with a four-figure cost elsewhere in this category would be comparing an administrative overhead with a full programme cost. Dividing by the credentials MINTS itself awards does not fix that — the same exclusion applies — but it at least names a unit the reported money can plausibly be said to have produced.',
    'For scale, from the filed returns: 2025 revenue $470,691 against expenses of $377,426, net assets $401,044; 2024 revenue $500,812 against $473,172; 2023 revenue $479,061 against $438,696. Contributions were 95.9% of 2025 revenue and program service revenue was $0, which is consistent with a seminary that charges students nothing centrally. The 2025 return also reports its own prior-year contributions as $451,363, identical to the current year and $49,449 away from what the 2024 return reported.',
    'The March 2025 newsletter is the single most informative document MINTS publishes and it is an image-only PDF with no text layer; we read it by rendering the pages and reading them as images. It contains the 2024 graduate table by country — Venezuela 63, Mexico 33, Colombia 31, El Salvador 19, Chile 18, the Dominican Republic 8, the United States 3, Panama 2, Peru 2, Cuba 2, Argentina 1, Ecuador 1 — with no total row printed. It sums to 183, against the 298 the 2024 return reports globally, which is the one place two MINTS documents corroborate each other: the newsletter covers the Spanish-language programme, so a Spanish-side 183 inside a global 298 is exactly what the return’s own split into English and Spanish programmes implies.',
    'MINTS is unusually honest about the limits of what it offers. It states that it is not CHEA-accredited and why, that its degree does not qualify anyone to be a minister, that it does not ordain, and that it cannot promise an employer or another institution will accept the credential. Ministries in this theme more often blur that line than state it.',
    'We list Latin America and Mexico as the places to price this work because that is where the countable programme is. The thirteen languages include Amharic, Telugu, Turkish and Russian, but no student or centre counts are published for any of them.',
  ],
  siteUrl: 'https://www.mints.edu/',
  giveUrl: 'https://www.mints.edu/give-new',
  sources: [
    {
      id: 'mints-site',
      label: 'Homepage',
      url: 'https://www.mints.edu/',
      publisher: 'MINTS International Seminary',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: 'Source of the 5,290 graduates figure, the thirteen languages claim, the 95% statistic, the Florida CIE authorisation wording, the self-supported-missionary statement and the self-sustaining-centres statement. Footer reads ©2022.',
    },
    {
      id: 'mints-accreditation',
      label: 'MINTS Accreditation',
      url: 'https://www.mints.edu/accreditation',
      publisher: 'MINTS International Seminary',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: 'States that MINTS is not accredited by any CHEA-recognised body and why, that its degree does not qualify a graduate to be a minister, and that "our graduates are our best accreditation". Also the source of the "over 4500 students" figure, which appears character-identically in Appendix B of the 2025 catalog.',
    },
    {
      id: 'mints-catalog',
      label: '2025 Catalog',
      url: 'https://www.mints.edu/_files/ugd/9743d0_30d77e05ca1f4a1dbde27c337e5e7928.pdf',
      publisher: 'MINTS International Seminary',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: 'Source of the theological stance (trustees subscribing verbally to one or more of four Reformed confessions), the Florida registration wording, the board of trustees list, the nineteen cooperating organisations, the thirteen language coordinators with four slots blank, and the sentence about pursuing recognition with "ARTS, which is CHIA certified".',
    },
    {
      id: 'mints-cie',
      label: 'Commission for Independent Education annual verification letter, 8 August 2025',
      url: 'https://www.mints.edu/_files/ugd/9743d0_8e7c36f0b21a479ab5ae206fdebc9edb.pdf',
      publisher: 'Florida Department of Education, Commission for Independent Education',
      documentType: 'third-party',
      retrieved: '2026-09-19',
      fiscalYear: '2025',
      note: 'Published by MINTS itself. Confirms acceptance of a sworn affidavit granting exemption from the Commission’s jurisdiction, and states that the institution is not subject to governmental oversight from 7/30/2025 to 7/31/2026.',
    },
    {
      id: 'mints-newsletter',
      label: 'MINTS Refresh Newsletter, March 2025',
      url: 'https://www.mints.edu/_files/ugd/9743d0_65003e8f6a6c4d1a971809f8abd603f6.pdf',
      publisher: 'MINTS International Seminary',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      fiscalYear: '2024',
      note: 'An image-only PDF with no text layer; we rendered the pages and read them as images rather than extracting text. Source of the MINTS Español enrolment change from 4,610 to 4,704, the 2024 graduate table by country, the prison programmes in Chile and Ecuador, and the ECFA accreditation claim and badge.',
    },
    {
      id: 'mints-study',
      label: 'Study at MINTS',
      url: 'https://www.mints.edu/study',
      publisher: 'MINTS International Seminary',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: 'Degree structure and admissions. No enrolment counts or fees.',
    },
    {
      id: 'mints-propublica',
      label: 'Miami International Seminary Inc — IRS filings',
      url: 'https://projects.propublica.org/nonprofits/organizations/912132082',
      publisher: 'ProPublica Nonprofit Explorer',
      documentType: 'form-990',
      retrieved: '2026-09-19',
      fiscalYear: '2025',
      note: 'Where we found the filing history. Calendar 2025: revenue $470,691, expenses $377,426, net assets $401,044. Calendar 2024: revenue $500,812 against $473,172. Calendar 2023: $479,061 against $438,696. ProPublica notes that the IRS designates this a religious organisation not required to file, yet returns are present through 2025. Registered address Sugar Land, Texas; the website gives Miami, Florida.',
    },
    {
      id: 'mints-990-25',
      label: '2025 Form 990, as e-filed (full return)',
      url: 'https://projects.propublica.org/nonprofits/organizations/912132082/202611339349309956/full',
      publisher: 'Internal Revenue Service, via ProPublica Nonprofit Explorer',
      documentType: 'form-990',
      retrieved: '2026-09-19',
      fiscalYear: '2025',
      note: 'Calendar 2025, submitted 13 May 2026, and the source of both halves of the cost model. Part IX: $323,788 program, $52,687 management and general, $951 fundraising, $377,426 total — of which $232,991 of the program column is officer and key-employee compensation and $46,261 is a line called "PROGRAM EXPENSES". Part III 4a: the 110 centres, the 40 countries, the "OVER 4,300" enrolment and the "OVER 300" credentials, reported against $323,788 of expenses "including grants of $46,261". Part VII: officer pay of $79,500 in total, seven independent board members at zero. Part I: no employees. Schedule F: $43,481 of grants to individuals in five regions, sixteen agents or contractors, no recipient counts. Schedule I filed blank. Schedule O: the 1099-contractor statement and the Florida prison figures. MINTS does not post this return; the em dashes in its Part III narrative were lost in the filing itself, so the text reads "DEGREESINCLUDING" and "QUALIFICATIONSFROM" — we quote only the parts that are unaffected.',
    },
    {
      id: 'mints-990-24',
      label: '2024 Form 990, as e-filed (full return)',
      url: 'https://projects.propublica.org/nonprofits/organizations/912132082/202542069349300929/full',
      publisher: 'Internal Revenue Service, via ProPublica Nonprofit Explorer',
      documentType: 'form-990',
      retrieved: '2026-09-19',
      fiscalYear: '2024',
      note: 'Calendar 2024, read to check the 2025 counts against the year before. Part IX: $432,944 program, $36,702 management and general, $3,526 fundraising, $473,172 total, with $406,769 of the program column in a single line labelled "PROGRAM EXPENSES", nothing on either compensation line and no employees. Part III 4a reports the same $432,944 as "including grants of $406,769", which Part I does not, and carries the 60 centres, the 4,200 estimated enrolment, the 298 degrees and the 22 prison study centres.',
    },
  ],
};
