import type { Cause } from '@/lib/types';

export const thirdmill: Cause = {
  slug: 'thirdmill',
  name: 'Thirdmill',
  legalName: 'Third Millennium Ministries, Inc.',
  ein: '31-1598585',
  tagline:
    'Gives away a full seminary curriculum in 28 languages, taught by local leaders through 651 partner organisations.',
  category: 'scripture',
  countries: ['Global', 'Mongolia', 'Zambia'],
  whatTheyDo:
    'Thirdmill writes and films a complete seminary-level theological curriculum — Old and New Testament, systematic theology, hermeneutics, ministry skills — and gives it away. Nothing is sold and nothing is charged to the student. The material is produced in English and translated into 28 languages, distributed online and packaged for offline use where internet access is absent or censored, and handed to whoever will teach it: denominational training arms, Bible colleges, local churches and independent ministries, which Thirdmill calls the Thirdmill Global Network. Its own Thirdmill Institute runs a structured three-certificate pathway on top of the same material, supervised by local leaders, ending in a Diploma in Christian Ministry. A separately named partner, Thirdmill Seminary, offers accredited degrees. The ministry has been doing this since 1997 and is run from Casselberry, Florida.',
  accreditations: [
    {
      label: 'Member, Evangelical Council for Financial Accountability',
      sourceId: 'tm-ecfa',
    },
  ],
  verification: 'documents-reviewed',
  biblicalAlignment: {
    mandate:
      'Paul’s instruction to Timothy is the whole business model stated in one verse: what you were taught, teach to reliable men who will teach others. Four generations of teaching are named in a single sentence, and only the first is paid for. Scripture is also blunt about the cost of the alternative — a people destroyed for lack of knowledge, and an elder who cannot hold to sound doctrine because nobody ever gave it to him. Writing the curriculum once and giving it away is that command taken at its most literal.',
    scriptures: [
      {
        ref: '2 Timothy 2:2',
        text:
          'And what you have heard from me in the presence of many witnesses entrust to faithful men who will be able to teach others also.',
      },
      {
        ref: 'Titus 1:9',
        text:
          'He must hold firm to the trustworthy word as taught, so that he may be able to give instruction in sound doctrine and also to rebuke those who contradict it.',
      },
      {
        ref: 'Hosea 4:6',
        text: 'My people are destroyed for lack of knowledge.',
      },
      {
        ref: 'Ephesians 4:11–12',
        text:
          'And he gave the apostles, the prophets, the evangelists, the shepherds and teachers, to equip the saints for the work of ministry, for building up the body of Christ.',
      },
    ],
    doctrine: {
      label: 'Statement of Faith — Historic Evangelical Doctrines',
      sourceId: 'tm-faith',
    },
    concerns: [
      'Thirdmill publishes no dollar figures anywhere. The annual report gives a program-spending percentage and nothing else; the financial page of the 2022-2023 report ends by asking readers to email the VP of Operations & Finance for "a copy of our latest financial information." Every number in the division below had to come from the Form 990 as transcribed by ProPublica, not from the ministry. For a $6.5 million organisation that is a real gap, and it is the reason this cause scores 1 on transparency despite ECFA membership.',
      'The curriculum is explicitly confessional. Its doctrinal standards are the Westminster Confession of Faith, so a donor is funding Reformed theological education, taught worldwide, in Reformed categories. That is not a fault — it is a clearly declared position, which is better than a vague one — but a donor from another tradition should know it before giving.',
      'Once the curriculum is handed to a partner, Thirdmill does not teach the class. The 2022-2023 report says "all students learn under the supervision of local leaders," which is an assurance about who is in the room, not a control over what is taught or whether anyone finishes. The count the ministry reports is a count its partners send back to it.',
      'The 2023-2024 report describes a pastor training cohort in Zambia and says "As a result, 158 people professed faith in Jesus Christ." We do not treat professions of faith as a measurable outcome and have not counted it. It is quoted here as the ministry’s claim, not as a result.',
    ],
  },
  roi: {
    levers: ['digital-distribution', 'existing-network', 'multiplication', 'local-workers'],
    reason:
      'A filmed lecture is written and translated once and then costs essentially nothing to copy, which is why the same budget can serve a Mongolian house church and a Zambian institute in the same year. The second lever is the network: 651 educational partners were already teaching, already staffed and already paying their own rent before Thirdmill arrived, so the gift is not buying a campus, a faculty or a channel — it is buying the material those partners lacked. The third is that the model is explicitly recursive. Students in the Institute are taught to lead their own study groups and pastor churches where they live, so the teaching is meant to be repeated by people the ministry never pays.',
  },
  costModel: {
    outcome: 'newly reported student',
    outcomePlural: 'newly reported students',
    spend: {
      amount: 6499734,
      basis: 'total-expenses',
      fiscalYear: '2022-2023',
      sourceId: 'tm-propublica',
    },
    count: {
      amount: 172265,
      label: 'reported students added across all distribution channels',
      fiscalYear: '2022-2023',
      sourceId: 'tm-ar-2223',
    },
    attribution: 'all-program-spend',
    caveat:
      'An upper bound on the cost of a very weak unit. A "reported student" is somebody a partner organisation told Thirdmill was using the curriculum — it is an access count, not a trained pastor, and the same bucket holds a person in an eighteen-month three-certificate cohort and a person who watched one lesson on YouTube. The numerator is every dollar Thirdmill spent that year, including curriculum production, translation into 28 languages, fundraising and administration, so it charges the full cost of building the library to the students who happened to be added that year rather than to the years of students who will use it afterwards. Read it as what a year of the whole organisation cost per new person reported as reached, which is what it is.',
    alternates: [
      {
        label: 'students served by the Thirdmill Institute in its first two years',
        count: 9034,
        note:
          'The Institute is the only pathway where students are enrolled, supervised by local leaders and working toward a named certificate, so it is the denominator closest to an actual trained leader. It is cumulative over two years rather than one, and dividing a single year of spending by it puts the figure near $720.',
      },
      {
        label: 'certificates and diplomas the Thirdmill Institute had awarded in total',
        count: 429,
        note:
          'The strictest defensible denominator: 347 Foundations, 62 Biblical Studies and 20 Theological Studies certificates, plus 20 complete Diplomas in Christian Ministry. Cumulative since the Institute began, and a certificate is one of three stages rather than a finished qualification. It puts the figure above $15,000, which is the honest ceiling of the range.',
      },
    ],
  },
  ministryClaims: [
    {
      quote:
        'This year, we added an astounding 172,265 reported students across all of our distribution channels (Thirdmill direct, educational institutions, denominational ministries, local churches, and independent ministries).',
      sourceId: 'tm-ar-2223',
    },
    {
      quote:
        'We are committed to financial transparency and accountability. In 2022-2023, we allocated 84% of our funds directly to program expenses, ensuring that the majority of our resources are used to develop and deliver high-quality theological education. The remaining 16% was dedicated to administrative costs and fundraising efforts.',
      sourceId: 'tm-ar-2223',
    },
    {
      quote:
        'The TGN currently has 651 educational partners and more than two million students (cumulatively).',
      sourceId: 'tm-ar-2324',
    },
    {
      quote:
        'Thirdmill’s vision to train four million pastors within five years is well on its way to becoming a reality.',
      sourceId: 'tm-ar-2324',
    },
    {
      quote: 'As a result, 158 people professed faith in Jesus Christ.',
      sourceId: 'tm-ar-2324',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 3,
      note:
        'The product is theology. The statement of faith affirms the inerrancy of Scripture, the Trinity, the full deity and humanity of Christ, his substitutionary atonement and bodily resurrection, the regenerating work of the Spirit and a final judgement to eternal punishment or eternal life, and names the Westminster Confession as its fuller doctrinal standard. There is no ambiguity to score down.',
    },
    localLeadership: {
      value: 2,
      note:
        'Teaching happens through 651 partner organisations in the countries themselves, and the Institute states that all students learn under the supervision of local leaders — the Mongolian translation work in the 2023-2024 report was done by a Mongolian translator and his team. But the curriculum is written, filmed and governed from Florida, and the decisions about what the world’s pastors are taught are made there.',
    },
    financialTransparency: {
      value: 1,
      note:
        'ECFA membership is real and the Form 990 is public through the IRS. But Thirdmill’s own site posts no audited statements, no 990 and no dollar figures at all — only a percentage in the annual report and an email address to request financial information. An outsider cannot check the 84% claim against anything the ministry published.',
    },
    outcomeEvidence: {
      value: 1,
      note:
        'The headline number is large, annual and explicitly labelled "reported" — Thirdmill is counting what its partners told it, and nothing defines what a reported student did. The Institute’s own figures are much better: enrolments, languages, offline learners and certificates awarded are all counted precisely. They are also cumulative, and they cover about 5% of the headline.',
    },
    costEvidence: {
      value: 1,
      note:
        'Both halves of a division exist, which is why this cause has a cost model at all, but only one of them came from Thirdmill. The spending is a Form 990 total transcribed by a third party and the count is a marketing figure from a designed annual report, and the two documents never appear together. Thirdmill publishes no cost per student of its own for us to check ours against.',
    },
  },
  notVerified: [
    'What a "reported student" is. Nothing in any Thirdmill document defines the unit — no minimum lessons, no enrolment, no completion. Across five distribution channels, one person studying with a local church and also watching the YouTube channel could plausibly be counted twice, and nothing tells us whether the channels de-duplicate.',
    'Who counted. The 172,265 is a figure partner organisations reported to Thirdmill. Nobody outside the network has checked it, and Thirdmill does not say how a partner is expected to count.',
    'The 84% program share. It is a percentage with no dollar figures attached, published in a report that directs readers to email for the actual financials. We could not verify it, which is why the division above uses total expenses rather than a program subtotal.',
    'Whether the two halves cover the same period. Thirdmill’s year ends 30 June, and the 990 for the tax period ending June 2023 matches the fiscal year the report calls 2022-2023 — but because the report prints no dollars, there is no overlap between the documents to confirm that.',
    'Why there is no newer figure. The 2023-2024 report dropped the annual student count and replaced it with "more than two million students (cumulatively)", which cannot be divided by one year of spending. Our figure is therefore from the most recent year in which Thirdmill published a countable annual number, not from the most recent year.',
    'The gap between a seminar and a degree. Thirdmill’s own material shows both inside one organisation — an eighteen-month cohort of 15 pastors in Zambia working through three certificates, and a five-month training in Uganda run by a partner using the curriculum. Both feed the same student total. Any per-student figure therefore averages across wildly different amounts of teaching, and the ministry does not break the total down.',
    'The "four million pastors within five years" target. There is no published baseline, no definition of a trained pastor, no start date for the five years and no progress measure, so the claim cannot be tracked.',
    'Which legal entity spends what. Thirdmill, the Thirdmill Institute and Thirdmill Seminary are described as distinct — the Seminary as "a founding partner in the Thirdmill Global Network" — and the 990 we used covers Third Millennium Ministries, Inc. We could not establish whether spending behind the student count sits partly in an entity that return does not cover.',
    'Total expenses rose from $4,568,333 in the year to June 2021 to $5,615,717 in 2022 and $6,499,734 in 2023 — 42% in two years. No published document explains the growth or what the additional money bought.',
    'The 158 professions of faith in Zambia, and the claim that the number of people who can explain Scripture rises after training. We do not count spiritual results, and we did not attempt to verify them.',
  ],
  notes: [
    'The cheapest-looking number in this directory is also the weakest. $37.73 per newly reported student is arithmetically correct and close to meaningless as a price for a trained pastor — the alternates are there precisely so the range from $38 to over $15,000 is visible on the same page. The honest reading is that Thirdmill produces curriculum very cheaply and does not know, in any checkable way, how many people are being trained with it.',
    'The 2023-2024 report says Thirdmill Seminary received formal accreditation from the Distance Education Accrediting Commission, for a Graduate Certificate and a Master of Arts in Christian Studies in English and Spanish. That accreditation belongs to the Seminary, which is presented as a partner entity rather than as Thirdmill itself, so it is not listed as an accreditation of this cause.',
    'Offline delivery is a deliberate design choice, not a fallback. Of the 9,034 Institute students in the 2022-2023 report, 7,127 studied offline and 7,161 studied in a language other than English — materials are formatted specifically for absent internet or government censorship.',
    'Donation sources in 2022-2023 were 50% individuals, 29% foundations, 18% churches and 3% other institutions, and more than 1,110 financial partners joined that year. This is a broadly funded ministry rather than one resting on a single foundation.',
  ],
  siteUrl: 'https://thirdmill.org/',
  giveUrl: 'https://thirdmill.org/give.asp',
  sources: [
    {
      id: 'tm-site',
      label: 'Homepage',
      url: 'https://thirdmill.org/',
      publisher: 'Thirdmill',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'tm-faith',
      label: 'Statement of Faith',
      url: 'https://thirdmill.org/mission/faith.asp',
      publisher: 'Thirdmill',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note:
        'Five paragraphs of historic evangelical doctrine, with the Westminster Confession of Faith named as the fuller doctrinal standard.',
    },
    {
      id: 'tm-annual-reports',
      label: 'Annual Reports index',
      url: 'https://thirdmill.org/dev/annualreports.asp',
      publisher: 'Thirdmill',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note:
        'The only financial disclosure on the site. Links the annual report PDFs; no audited statements or Form 990s are posted.',
    },
    {
      id: 'tm-ar-2223',
      label: 'Annual Report 2022-2023',
      url: 'https://thirdmill.org/dev/annualreports/IIIM%20Annual%20Report%202022-2023.pdf',
      publisher: 'Thirdmill',
      documentType: 'annual-report',
      retrieved: '2026-09-18',
      fiscalYear: '2022-2023',
      note:
        'Source of the 172,265 reported students added, the 9,034 Institute students in 103 countries, the 429 certificates and diplomas awarded, and the 84% program-spending claim. The certificate counts and the donation-source percentages are set as graphics; we read them from the rendered page rather than from extracted text.',
    },
    {
      id: 'tm-ar-2324',
      label: 'Annual Report 2023-2024',
      url: 'https://thirdmill.org/dev/annualreports/IIIM%20Annual%20Report%202023-2024.pdf',
      publisher: 'Thirdmill',
      documentType: 'annual-report',
      retrieved: '2026-09-18',
      fiscalYear: '2023-2024',
      note:
        'Source of the 651 educational partners, the 178 countries and 28 languages, the "more than two million students (cumulatively)" claim, the Mongolia and Zambia accounts, the DEAC accreditation of Thirdmill Seminary and the 80% program-spending figure for that year. Contains no annual student count.',
    },
    {
      id: 'tm-propublica',
      label: 'Third Millennium Ministries Inc — Form 990 data',
      url: 'https://projects.propublica.org/nonprofits/organizations/311598585',
      publisher: 'ProPublica Nonprofit Explorer',
      documentType: 'form-990',
      retrieved: '2026-09-18',
      fiscalYear: '2022-2023',
      note:
        'Total functional expenses of $6,499,734 on revenue of $7,074,250 for the tax period ending June 2023, plus the earlier years quoted above. ProPublica transcribes the filed Form 990; Thirdmill does not post the return itself, so this is a third-party rendering of a primary document rather than the document as the ministry published it.',
    },
    {
      id: 'tm-ecfa',
      label: 'ECFA member profile — Third Millennium Ministries',
      url: 'https://www.ecfa.org/MemberProfile.aspx?ID=16352',
      publisher: 'Evangelical Council for Financial Accountability',
      documentType: 'third-party',
      retrieved: '2026-09-18',
    },
  ],
};
