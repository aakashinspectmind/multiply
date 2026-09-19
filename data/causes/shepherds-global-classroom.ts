import type { Cause } from '@/lib/types';

export const shepherdsGlobalClassroom: Cause = {
  slug: 'shepherds-global-classroom',
  name: 'Shepherds Global Classroom',
  legalName: 'Shepherds Global Classroom Inc',
  ein: '47-3994581',
  tagline:
    'Gives away a twenty-course theological curriculum in dozens of languages and asks local churches to teach it themselves. Counts downloads, not students.',
  category: 'training',
  countries: ['Global'],
  whatTheyDo:
    'SGC writes a foundational theological curriculum — doctrine, Bible survey, hermeneutics, Christian leadership, evangelism and discipleship, the Christian family, church history, apologetics — translates it, and publishes it free. It is explicit that it is not a school: it hands the material to local churches, denominations and partner ministries and expects them to run the classes themselves, in homes, sanctuaries and cafés, governed and paid for locally. The whole organisation is small — $762,201 of expenses in 2024 — and most of what it does is translation management: more than sixty translators and editors working across dozens of languages, with over a hundred translation projects in motion at once. Founded by Tim Keep, who is still president, and run from Cincinnati, Ohio.',
  accreditations: [
    {
      label: 'Candid Platinum Transparency Seal 2025',
      sourceId: 'sgc-candid',
    },
  ],
  verification: 'self-reported',
  biblicalAlignment: {
    mandate:
      'This is 2 Timothy 2:2 stripped to the minimum: write it once, give it to faithful men, let them teach others. SGC does not even keep the teaching — it gives away the syllabus. Ephesians 4 is the shape of what it is trying to restore, teachers given to equip the saints; Titus 1:9 is the standard it is aiming at, an elder able to instruct and to correct because somebody handed him the trustworthy word in his own language. Hosea 4:6 is its stated diagnosis, and the ministry puts a number on it: 85% of pastors untrained.',
    scriptures: [
      {
        ref: '2 Timothy 2:2',
        text: 'And what you have heard from me in the presence of many witnesses entrust to faithful men who will be able to teach others also.',
      },
      {
        ref: 'Ephesians 4:11–13',
        text: 'And he gave the apostles, the prophets, the evangelists, the shepherds and teachers, to equip the saints for the work of ministry, for building up the body of Christ, until we all attain to the unity of the faith and of the knowledge of the Son of God.',
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
      label: 'Statement of Faith',
      sourceId: 'sgc-faith',
    },
    concerns: [
      'The headline impact number on the homepage is generated in the browser, not measured. The page ships a JavaScript function named fakeSeed() that estimates a download count from hours elapsed since 1 January plus a random offset, uses it as the starting value, and increments it once per tick between server calls. A comment in the ministry’s own source code instructs the page to keep the synthesised seed whenever the upstream figure comes back as zero, so that the homepage never displays a zero download count for the year. Both live endpoints did respond when we checked, so in normal operation the figure is corrected to a real number after the first fetch — but the number a visitor sees first is synthesised, and the code exists precisely to prevent an honest zero from being displayed. For a ministry whose only published outcome measure is a download count, that is a serious problem.',
      'No financial document of any kind is published. There is no financials page, no annual report, no audit and no Form 990 on the site; /financials, /annual-report, /transparency and /990 all return 404. The entire financial disclosure on shepherdsglobal.org is the EIN and a statement that gifts are tax-deductible, under a heading reading "Trusted & Transparent".',
      'Founder concentration with no visible board. Tim Keep is founder and president; the last two returns list only two officers, both at $0 of compensation, and we found no published board roster. Major, legacy and non-cash gifts are routed to the president personally by name, phone number and email address rather than to a finance function.',
      'The organisation ran deficits in 2022 (−$122,500) and 2023 (−$35,029) and ended 2024 with net assets of $198,241 against $762,201 of annual spending — roughly three months of operating cost. No reserve policy is published. In 2021 it reported $268,926 of revenue against $43,955 of expenses, which suggests the ministry was barely operating four years before the download figures it now publishes.',
      'Site-wide structured data points donors at the wrong organisation. The JSON-LD on every page lists a GuideStar profile for EIN 46-4634126, which is not SGC’s EIN; the giving page correctly states 47-3994581. The same JSON-LD gives a founding date of 2013 and a phone number that differs from the one in the visible footer, while the IRS records tax exemption from February 2019.',
    ],
  },
  roi: {
    levers: ['digital-distribution', 'local-workers', 'existing-network', 'multiplication'],
    reason:
      'A translated course is written once and copied for nothing, which is the whole economic case: SGC’s marginal cost of a new student is zero, and its actual budget is spent on translation rather than delivery. Everything downstream is carried locally and deliberately so — SGC calls its classrooms "locally governed, locally structured, and locally financed" and says plainly that it is not a training institution, so there is no faculty, no campus and no tuition anywhere in the model. Distribution rides on 38 partner ministries that were already teaching. And the translators and editors are themselves mostly local language workers, so even the money that is spent is spent at local rates. The honest counterweight is that a model this cheap also tells you almost nothing about whether anybody learned.',
  },
  ministryClaims: [
    {
      quote:
        'Our free, 21-course curriculum tools in 35 majority world languages, are turning homes, sanctuaries, cafés, and even shade trees into locally governed, locally structured, and locally financed theological classrooms.',
      sourceId: 'sgc-site',
    },
    {
      quote:
        'SGC curriculum provides 20 foundational, 15-week courses, covering a broad range of biblical theology, for a robust 2-3 year training program.',
      sourceId: 'sgc-about',
    },
    {
      quote:
        "Every download on this map represents someone, somewhere, studying God's Word — from a course library covering 21 languages.",
      sourceId: 'sgc-map',
    },
    {
      quote: 'SGC curriculum has been downloaded and is being used in over 160 countries.',
      sourceId: 'sgc-faq',
    },
    {
      quote:
        'Shaded wherever courses have been downloaded — 806 areas in all, including 636 states and provinces inside the largest countries.',
      sourceId: 'sgc-map',
    },
    {
      quote: 'We now work with more than 65 translators and editors across 41 languages.',
      sourceId: 'sgc-newsletter',
    },
    {
      quote:
        'At midyear, 138 translation projects are in motion, from initial translation to final corrections and publication. We hope to begin another 74 additional projects in the next six months.',
      sourceId: 'sgc-newsletter',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 3,
      note: 'The page title of the site is "Christ-Centered. Training. Everywhere." The statement of faith affirms the eternal and only begotten Son become man without ceasing to be God, the virgin birth, a sinless life, the cross as the one sufficient sacrifice for sin, and the sixty-six books of Scripture as inerrant in the original writings. The product is doctrine and the doctrine is stated.',
    },
    localLeadership: {
      value: 2,
      note: 'The classrooms genuinely are local: SGC states it is not a training institution, and the courses are taught, governed and financed by the churches that download them, through 38 partner ministries. More than sixty translators and editors work in the languages themselves. The curriculum is still written and controlled from Ohio, and the president is the founder, so what is decided about the content is not decided locally.',
    },
    financialTransparency: {
      value: 1,
      note: 'SGC publishes no financial document on its own site and files nothing there for a donor to read. It does hold and display a Candid Platinum Transparency Seal, which requires uploading financial data to Candid, and its Form 990 is filed and reaches the IRS digitised dataset — so the information exists, one click away, through two third parties. A transparency badge displayed above an empty financials page is the reason this is a 1 rather than a 2.',
    },
    outcomeEvidence: {
      value: 0,
      note: 'The only quantity SGC publishes is downloads, and every version of it is unusable. The homepage counter is seeded in the browser. The map total of 659,254 carries no period. The country figure is 89 on one page, "over 160" on another and 211 on a third — there are fewer than 211 countries in the world, so that figure is counting something else. Courses are 20 or 21 depending on the page; languages are 21, "over 30", 35, "over 35" or 41 across five pages against 39 actually listed in the site’s own language picker. A zero here is a finding: nothing published can be used as a count of anything.',
    },
    costEvidence: {
      value: 0,
      note: 'No cost per course, per translation, per language or per learner is published, and there is no dated count of anything to put under a year of spending. The one costed statement we found is a fundraising target of $50,000 to complete translations, with no list of what it completes.',
    },
  },
  notVerified: [
    'Whether a download is a person. SGC’s map says every download "represents someone, somewhere, studying God’s Word". A download is a file transfer: one teacher preparing a 15-week course may take twenty files, a curious visitor may take one and never open it, and an app install may fetch a library at once. Nothing in any SGC document defines the unit, deduplicates by user, or reports opens, completions or classes held. This is the single most important gap on this page, because downloads are the only number the ministry publishes.',
    'What period the 659,254 downloads covers. The figure is presented with no start date. The homepage counter next to it is explicitly year-to-date. The two cannot both be what they appear to be.',
    'The 211 countries. There are fewer than 211 countries in the world, so the figure is almost certainly geo-IP resolution artefacts counted as countries. The same page also blends 636 sub-national states and provinces into a total of "806 areas", which is a reach metric built from two different kinds of unit.',
    'How many people have actually been taught. SGC states it is not a training institution and that classrooms are locally governed, which means nobody in the model is responsible for counting students. That is a defensible design choice and it leaves the outcome question permanently unanswerable from published data.',
    'How many courses and how many languages. The site says 20 courses in one place and 21 in two others; languages are given as 21, "over 30", 35, "over 35" and 41 on five different pages, while the language picker lists 39. None of the figures is dated, so we cannot even tell which are stale and which are wrong.',
    'The program, administration and fundraising split. SGC posts no 990 or audited statement, and the functional expense breakdown is not available in the extracted IRS data we could reach. We do not know what share of $762,201 went to translation.',
    'Who governs. Only two officers appear on the returns, both uncompensated, and no board roster is published. We could not establish whether an independent board exists, how often it meets, or who sets the president’s compensation — reported as $0, which for a full-time founder-president raises its own question we could not answer.',
    'Whether the ministry is in ECFA. It makes no such claim, and ECFA’s directory cannot be queried without a browser session, so we can say only that SGC does not assert membership.',
    'The 85% untrained-pastors figure on the homepage. No source is given. Other ministries in this theme publish 80% and 95% for the same claim, all uncited.',
    'What the deficits of 2022 and 2023 were, and whether the 2024 surplus is durable. Revenue jumped from $542,530 to $856,237 in a single year with no published explanation.',
    'Which of the 38 partner ministries do what. The partner page gives a count and shows 24 of the 38; it does not say which partners actually run classes, how many classes, or in which of the 89 countries it claims.',
  ],
  notes: [
    'We deliberately did not build a cost per learner here, and this is the clearest case in this theme of why. The numerator is fine — $762,201 of 2024 expenses. The denominator on offer is 659,254 downloads, which would produce about $1.16 "per download" and would be the sort of number that gets quoted in a fundraising letter. It would be meaningless twice over: the download total has no period, so it may be spread across several years of spending, and a download is not a learner. Free-curriculum ministries count users, not students, and the honest thing is to say so rather than to divide.',
    'For scale, from IRS data: 2024 revenue $856,237 against expenses of $762,201, net assets $198,241; 2023 $542,530 against $577,559; 2022 $309,221 against $431,721. Salaries and wages were $583,898 in 2024 — 77% of all spending — with executive compensation reported as $0.',
    'The July 2026 newsletter is the best evidence SGC publishes, and it is about inputs rather than outputs: more than 65 translators and editors, 138 translation projects in motion at midyear, 74 more hoped for in six months, eight new translation teams onboarded and six new languages approved. Those are countable, dated and specific. If SGC applied the same discipline to learners as it applies to translation projects, this page would look very different.',
    'The curriculum design is unusually well specified for a free product: twenty foundational courses of fifteen weeks each, described as a two-to-three-year programme. That is a real theological education on paper, which is exactly why "downloads" is such a poor proxy for it — the gap between taking a file and completing 300 weeks of study is the entire question.',
  ],
  siteUrl: 'https://shepherdsglobal.org/',
  giveUrl: 'https://shepherdsglobal.org/give/',
  sources: [
    {
      id: 'sgc-site',
      label: 'Homepage',
      url: 'https://shepherdsglobal.org/',
      publisher: 'Shepherds Global Classroom',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: 'Source of the "Christ-Centered. Training. Everywhere." title, the 85% untrained-pastors claim, the 21-course / 35-language sentence, and the live "course downloads in 2026" counter. The inline JavaScript that seeds that counter — including the fakeSeed() function and the comment about not displaying a zero — is in the page source of this URL. The JSON-LD on this page also carries a GuideStar link for EIN 46-4634126, which is not SGC’s EIN.',
    },
    {
      id: 'sgc-about',
      label: 'About',
      url: 'https://shepherdsglobal.org/about/',
      publisher: 'Shepherds Global Classroom',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: 'Source of the twenty 15-week courses and the "2-3 year training program" description, the "over 30 languages" figure, and the statement that all twenty courses exist in English, Mandarin, Spanish, Arabic, French and Russian.',
    },
    {
      id: 'sgc-faith',
      label: 'Statement of Faith',
      url: 'https://shepherdsglobal.org/statement-of-faith/',
      publisher: 'Shepherds Global Classroom',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
    },
    {
      id: 'sgc-map',
      label: 'Where We’re Read — downloads map',
      url: 'https://shepherdsglobal.org/downloads-map/',
      publisher: 'Shepherds Global Classroom',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: 'Stat block reads 659,254 Downloads, 211 Countries reached, 10,473 Cities reached, with a heat-map note covering 806 areas including 636 states and provinces. No period is given for any of them.',
    },
    {
      id: 'sgc-faq',
      label: 'FAQ',
      url: 'https://shepherdsglobal.org/faq/',
      publisher: 'Shepherds Global Classroom',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: 'Source of the "over 160 countries" figure and the "over 35 languages" figure.',
    },
    {
      id: 'sgc-partners',
      label: 'Partner Ministries',
      url: 'https://shepherdsglobal.org/partner-ministries/',
      publisher: 'Shepherds Global Classroom',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: 'Stat block reads 38 partner ministries and 89 countries served; the list itself shows 24 of the 38.',
    },
    {
      id: 'sgc-team',
      label: 'Our Team',
      url: 'https://shepherdsglobal.org/our-team/',
      publisher: 'Shepherds Global Classroom',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: 'Names Tim Keep as founder and president. No board of directors is listed anywhere on the site.',
    },
    {
      id: 'sgc-give',
      label: 'Give',
      url: 'https://shepherdsglobal.org/give/',
      publisher: 'Shepherds Global Classroom',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: 'The only financial disclosure on the site: the EIN and a tax-deductibility statement under a "Trusted & Transparent" heading. Legacy, major and non-cash gifts are directed to the president by name, direct phone and personal email.',
    },
    {
      id: 'sgc-newsletter',
      label: 'Newsletter, July 2026',
      url: 'https://shepherdsglobal.org/wp-content/uploads/2026/07/jul-2026-newsletter.pdf',
      publisher: 'Shepherds Global Classroom',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      fiscalYear: '2026',
      note: 'Source of the 65 translators and editors, 41 languages, 138 translation projects in motion at midyear, 74 planned, six newly approved languages and the $50,000 translation appeal. The only SGC document that attaches a period to anything.',
    },
    {
      id: 'sgc-propublica',
      label: 'Shepherds Global Classroom Inc — IRS filings',
      url: 'https://projects.propublica.org/nonprofits/organizations/473994581',
      publisher: 'ProPublica Nonprofit Explorer',
      documentType: 'form-990',
      retrieved: '2026-09-19',
      fiscalYear: '2024',
      note: 'Every financial figure on this page. Calendar 2024: revenue $856,237, expenses $762,201, net income $94,036, net assets $198,241, other salaries and wages $583,898, executive compensation $0. Prior years: 2023 $542,530 / $577,559; 2022 $309,221 / $431,721. Tax exemption issued February 2019. ProPublica transcribes the filed return; SGC does not post it, and ProPublica blocks automated PDF retrieval, so we read the extracted figures rather than the return.',
    },
    {
      id: 'sgc-candid',
      label: 'Candid profile — Shepherds Global Classroom',
      url: 'https://app.candid.org/profile/9766776/shepherds-global-classroom-inc-47-3994581/?pkId=b7f21c59-ead6-4253-9bca-b408965ed654',
      publisher: 'Candid',
      documentType: 'third-party',
      retrieved: '2026-09-19',
      note: 'The destination of the Platinum Transparency Seal 2025 displayed in the footer of every page of shepherdsglobal.org.',
    },
  ],
};
