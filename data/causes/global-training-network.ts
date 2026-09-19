import type { Cause } from '@/lib/types';

export const globalTrainingNetwork: Cause = {
  slug: 'global-training-network',
  name: 'Global Training Network',
  legalName: 'Global Training Network',
  ein: '68-0586399',
  tagline:
    'Sends American pastors and professors to run on-site doctrine conferences for pastors in 90 countries. Posts its own 990s and audits; its only annual count of pastors trained is one sentence in a donor newsletter.',
  category: 'training',
  countries: ['Global'],
  whatTheyDo:
    'GTN flies teachers to pastors. Its work is described on its own Form 990 in one sentence — it holds pastors’ training conferences throughout the world — and the conferences are intensive, on-site and taught in essential Christian doctrine: Scripture, theology, preaching, church leadership. Invitations come from national churches and denominations, GTN’s staff travel to them, teach for a period of days, and come home. The ministry started in 2004 with Paul and Lisa Madson and now reports more than 180 staff, nearly all of them American couples who raise their own support. It is run from Peoria, Arizona. It does not grant degrees, does not maintain campuses, and — per Part IX of its 990 — does not send money to any organisation outside the United States.',
  accreditations: [
    {
      label: 'Member, Evangelical Council for Financial Accountability',
      sourceId: 'gtn-ecfa',
    },
  ],
  verification: 'documents-reviewed',
  biblicalAlignment: {
    mandate:
      'Paul tells Timothy to entrust what he was taught to men who will teach others, and tells Titus that an elder must hold to the trustworthy word so that he can give instruction in sound doctrine. GTN takes the second half of Titus 1:9 as its diagnosis: a pastor who was never taught cannot teach, and a congregation with an untaught pastor is the people Hosea describes as destroyed for lack of knowledge. The ministry’s own vision page reaches for Titus 2:1 and Galatians 1:8 — the risk it names is not ignorance but a different gospel.',
    scriptures: [
      {
        ref: '2 Timothy 2:2',
        text: 'And what you have heard from me in the presence of many witnesses entrust to faithful men who will be able to teach others also.',
      },
      {
        ref: 'Titus 1:9',
        text: 'He must hold firm to the trustworthy word as taught, so that he may be able to give instruction in sound doctrine and also to rebuke those who contradict it.',
      },
      {
        ref: 'Ephesians 4:11–13',
        text: 'And he gave the apostles, the prophets, the evangelists, the shepherds and teachers, to equip the saints for the work of ministry, for building up the body of Christ, until we all attain to the unity of the faith and of the knowledge of the Son of God.',
      },
      {
        ref: 'Hosea 4:6',
        text: 'My people are destroyed for lack of knowledge.',
      },
    ],
    doctrine: {
      label: 'Statement of Beliefs',
      sourceId: 'gtn-beliefs',
    },
    concerns: [
      'This is a sent-expatriate model, and the money says so. Of $9,518,467 in expenses in 2025, $4,551,088 went to salaries, benefits and payroll taxes and $1,354,876 went to travel; the line for grants to foreign organisations is zero. Nothing about that is dishonest — GTN describes its work as sending teachers — but a donor should not assume the usual "your dollar goes further overseas" arithmetic applies. The dominant cost here is American labour and international airfare, both priced in US dollars.',
      'The "90 nations" are not all poor. The list on GTN’s own nations page includes Australia, England, France, Italy, Japan, the Netherlands, Poland, Portugal, Spain, Sweden, South Korea, Israel, Qatar, the United Arab Emirates and Bahrain — fifteen high-income countries inside a figure presented as the reach of a Majority World ministry.',
      'Founder concentration. Paul Madson founded GTN in 2004, is still Founder and President, and the ministry’s history, vision and twentieth-anniversary pages are written in his and his wife’s voice. We did not find a published board roster with tenure or independence disclosed.',
      'The multiplication figure is an assumption presented as reach. The multiply page states that each trained pastor "impacts 100 people in their congregation" and that each of those people has "a network of family and friends of approximately 10 people", and the vision page then converts 345,000 pastors into "an estimated 34.5 million people". That is 345,000 multiplied by 100. It is a model, not a measurement, and it is the largest number on the site.',
      'The vision page says congregations have been "saved, discipled, and taught the Word of God" and that villages have been transformed. We do not treat spiritual results as measurable outcomes and have not counted them.',
    ],
  },
  roi: {
    levers: ['multiplication', 'existing-network'],
    reason:
      'Two levers apply here and the usual third does not. Multiplication is real and structural: every person in the room is already pastoring a congregation, so teaching one of them is meant to reach a church that exists whether GTN comes or not, and GTN says its aim is pastors who train others. The network is also already built — the invitation, the venue, the host denomination and the students’ salaries all belong to churches in the country, so a gift buys teaching rather than institutional overhead. But the low-cost-base lever that makes most majority-world giving efficient is absent by design. GTN’s costs are American staff support and international travel, and it sends no funds to foreign organisations, so the money is spent at United States prices even though the teaching happens in Uganda or Cambodia.',
  },
  costModel: {
    outcome: 'pastor or church leader trained for a year',
    outcomePlural: 'pastors and church leaders trained for a year',
    spend: {
      amount: 8732187,
      basis: 'program-services',
      fiscalYear: '2025',
      sourceId: 'gtn-990',
    },
    count: {
      amount: 10000,
      label: 'indigenous pastors and leaders who received training',
      fiscalYear: '2025',
      sourceId: 'gtn-newsletter-feb26',
    },
    attribution: 'all-program-spend',
    caveat:
      'This page said for a long time that GTN published no annual count of anyone trained. It now does, in one place: the February 2026 newsletter, under "Update from the President", reports that in 2025 "Over 10,000 indigenous pastors and leaders received training from our highly experienced, well-educated staff team." That is an annual figure, for the same calendar year as the Form 990 GTN posts, describing training delivered by GTN’s own staff — which is why it can be divided and the cumulative totals cannot. Four things make $873 an estimate. It charges every program dollar to the training, and program spending also covers the staff support, travel, housing allowances and home-office work of roughly 180 people across a whole year, so this is an upper bound rather than the cost of a seat in a conference. The count is rounded to a floor — "over 10,000" — so the true cost per pastor is lower than $873, by an unknown amount. It appears once, in a fundraising letter, rather than in the audit or the return, and "trained" is nowhere defined: no minimum days, no completion standard, and no statement of whether a pastor attending in three successive years is counted once or three times. And it does not reconcile with GTN’s own cumulative claims — 345,000 over twenty-two years averages nearly 16,000 a year, which is more than the ministry reports for its largest year to date. We do not divide by the number GTN leads with. The 345,000 cumulative total and the 34.5 million people it is multiplied into are in the alternates below, where a reader can see what they would produce.',
    alternates: [
      {
        label: 'the same 10,000, against all $9,518,467 of expenses',
        count: 10000,
        spend: 9518467,
        note: 'About $952, adding the $346,321 of management and general and the $439,959 of fundraising back in. This is the figure a donor is actually funding, because a gift pays for the overhead too.',
      },
      {
        label: 'the "over 345,000" pastors trained since 2004, against the same program spending',
        count: 345000,
        spend: 8732187,
        note: 'About $25, and the number GTN leads with on its vision page. It would be the cheapest figure in this directory and it is meaningless: one year of spending against twenty-two years of output. It is here to show why the annual count matters, not as a defensible price.',
      },
      {
        label: 'the "estimated 34.5 million people" served, against the same program spending',
        count: 34500000,
        spend: 8732187,
        note: 'About $0.25. GTN reaches this figure by multiplying its cumulative pastor count by an assumed congregation of 100, which its own multiply page states as an average and an approximation. No congregation was counted, so this is a model output and not a denominator.',
      },
    ],
  },
  ministryClaims: [
    {
      quote:
        'In 2025, God continued by His grace to grow GTN in both breadth and depth. We added more new staff and expanded our work for God’s Kingdom globally. Over 10,000 indigenous pastors and leaders received training from our highly experienced, well-educated staff team.',
      sourceId: 'gtn-newsletter-feb26',
    },
    {
      quote:
        'Over the last two decades, God has added over 180 staff members to our original two. He’s expanded GTN’s reach and influence to 84 nations and training to over 330,000 indigenous pastors and leaders.',
      sourceId: 'gtn-20years',
    },
    {
      quote: 'Train over 345,000 pastors and Christian leaders around the world.',
      sourceId: 'gtn-vision',
    },
    {
      quote:
        'Teach and serve an estimated 34.5 million people through the pastors trained by GTN (each pastor serves a church of approximately 100).',
      sourceId: 'gtn-vision',
    },
    {
      quote: 'Currently involved in 90 nations around the world.',
      sourceId: 'gtn-site',
    },
    {
      quote: '80% of Majority World pastors have no formal biblical training.',
      sourceId: 'gtn-site',
    },
    {
      quote:
        'In the U.S. there is 1 trained pastor per 250 people. Around the world, there is 1 trained pastor per 450,000 people.',
      sourceId: 'gtn-site',
    },
    {
      quote: '93% Frontline Ministry',
      sourceId: 'gtn-stewardship',
    },
    {
      quote: 'GLOBAL TRAINING NETWORK HOLD PASTORS TRAINING CONFERENCES THROUGHTOUT THE WORLD',
      sourceId: 'gtn-990',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 3,
      note: 'Doctrine is the product. The beliefs page affirms the Trinity, the full deity of Christ, his sinless life, substitutionary death, bodily resurrection and return, salvation as a gift rather than by works, and Scripture as truth without any mixture of error. The stated purpose of the training is sound doctrine, and the stated risk it exists to prevent is a false gospel.',
    },
    localLeadership: {
      value: 1,
      note: 'The students are national pastors and the invitations come from national churches, which is genuine. The delivery is not local: roughly 180 mostly American staff travel to teach, 48% of the budget is compensation and 14% is travel, and zero dollars go to organisations abroad. GTN says the most effective way to reach a nation is to train its own pastors; the teaching itself is still done by outsiders who fly in.',
    },
    financialTransparency: {
      value: 2,
      note: 'The best disclosure in this theme. GTN posts three consecutive years of Form 990s and independent audits on its own stewardship page — most training ministries post nothing. Two things hold it short of a 3: the published "93% Frontline Ministry / 7% Administrative" split does not match the 990 it links on the same page, which reports 91.7% program and 8.3% combined administration and fundraising; and the PDF return GTN posts is missing the Schedule O page that itemises "All other expenses" of $3,162,431, a third of all spending. That itemisation does exist — it is in the return as GTN filed it electronically, where line 24e breaks down into housing allowance $2,024,114, training $664,547 and others $473,770 — so the gap is in the copy on GTN’s own website rather than in the filing.',
    },
    outcomeEvidence: {
      value: 2,
      note: 'An annual, dated count now exists: over 10,000 pastors and leaders trained in 2025 by GTN’s own staff, in the February 2026 newsletter. That is the number this page needed and could not previously find. It is held at 2 rather than 3 because it is a rounded floor published once in a fundraising letter, because "trained" is still undefined, because the cumulative claims on the website disagree with each other — "over 330,000" on the anniversary page against "over 345,000" on the vision page — and because 345,000 spread over twenty-two years averages more per year than the ministry reports for 2025.',
    },
    costEvidence: {
      value: 2,
      note: 'The numerator is as good as it gets in this theme: GTN posts both its audit and its Form 990, so $8,732,187 of 2025 program spending is checkable by anyone. The denominator is the weak half — an annual count, for the matching calendar year, describing training GTN’s own staff delivered, but rounded to "over 10,000" and published in a president’s letter rather than in the audit, the return or an annual report. A 2 reflects a strong numerator paired with a soft denominator, not a strong division.',
    },
  },
  notVerified: [
    'How firm the 10,000 is. It is the only annual training count GTN publishes, it appears once, in the president’s letter in the February 2026 newsletter, and it is rounded upward to "over 10,000". Nothing states how it was compiled, whether conferences submitted attendance sheets, or what the exact figure was. The audit and the Form 990 for the same year contain no count at all.',
    'Why the annual and cumulative counts do not reconcile. The vision page claims "over 345,000" pastors trained since 2004 — an average of nearly 16,000 a year over twenty-two years — while the newsletter reports over 10,000 in 2025, a year GTN describes as growth in "both breadth and depth" and in which it spent more than in any previous year. Either the cumulative total is overstated, or the earlier years were larger than the present one, and nothing published resolves it.',
    'Which cumulative total is right. The twentieth-anniversary page says "over 330,000" pastors and leaders in 84 nations; the vision page says "over 345,000" and "more than 87 countries"; the homepage says 90 nations; the nations page lists 90 currently being trained plus 9 more that have invited GTN. Four nation counts and two training totals, none dated, none reconciled.',
    'What "trained" means. GTN describes intensive on-site conferences without stating how many days, hours or modules a pastor must attend to be counted, whether a pastor attending in three successive years counts once or three times, or whether spouses and lay leaders sitting in are included. A figure that spans a single afternoon and a multi-year cohort cannot be priced.',
    'The 93% / 7% stewardship claim. The 990 linked on the same page reports program service expenses of $8,732,187 against total functional expenses of $9,518,467 — 91.7% — with $346,321 management and general and $439,959 fundraising. GTN does not say what basis produces 93%.',
    'Why the return on GTN’s own website is missing a page. "All other expenses" of $3,162,431 is 33% of total expenses, and the IRS requires line 24e to be itemised on Schedule O when it exceeds 10% of the total. GTN did itemise it — the electronically filed return breaks it into housing allowance $2,024,114, training $664,547 and others $473,770 — but that Schedule O page is not in the PDF posted on the stewardship page, so a donor reading the document the ministry hands them cannot see where a third of the money went. We read the itemisation in the filed return instead.',
    'Whether conference costs are counted at all. GTN reports $0 of grants and other assistance to foreign organisations, governments and individuals. If host churches pay for venues, meals, translation and student travel out of their own funds, then the real cost of the training is larger than the audited figure and part of it is being borne by some of the poorest churches in the world. We could not establish who pays for what.',
    'The "1 trained pastor per 450,000 people" statistic on the homepage. No source is given. The adjacent 80% figure is attributed to Langham Partnership on the vision page but carries no attribution on the homepage, where a donor is most likely to read it.',
    'The 34.5 million people served. It is stated as an estimate and derived by multiplying the pastor count by an assumed congregation of 100. No congregation sizes were counted and no confidence interval or sensitivity is offered.',
    'Whether GTN returns to the same places. The founder says "over and over, when we go back to many of these same cities and villages, we see pastors that are more mature" — there is no follow-up study, retention rate, or post-training assessment published to support it.',
    'Governance detail. We did not find a published board roster with names, terms, independence or compensation policy, nor any disclosure of how the founder’s compensation is set. Officer compensation of $435,229 appears on the 990 as a total.',
    'Why revenue nearly doubled. Contributions on Schedule A run $6,625,553 (2021), $7,031,388 (2022), $7,954,666 (2023), $9,289,181 (2024) and $9,946,486 (2025) — 50% growth in four years with no published account of what the additional $3.3 million a year is buying.',
    'Global Justice Mission is described as a branch of GTN. We did not establish whether its spending sits inside this return or what share of the total it represents.',
  ],
  notes: [
    'The annual count that makes this page possible is not on GTN’s website. Every page of the site gives cumulative totals since 2004, and an earlier version of this page said the annual figure did not exist in any document, published or filed. It does exist, in a PDF newsletter under /s/ that nothing on the site indexes as a report: the February 2026 letter from the founder, which says over 10,000 pastors and leaders were trained in 2025. The April, June and August 2026 newsletters in the same folder give no comparable figure. A donor would not find this by looking for it.',
    'For scale: 2025 revenue of $9,946,486 against $9,518,467 of expenses, with net assets rising from $4,680,402 to $5,276,819. Program services were $8,732,187, management and general $346,321, fundraising $439,959.',
    'GTN is one of very few ministries in this theme that posts both its audits and its 990s on its own website, for three consecutive years, without a request form. That is worth saying plainly even while the outcome side of the page is this thin. The gap is a counting gap, not a disclosure gap.',
    'The 2025 audit report GTN posts is a scanned document with no text layer, so the figures cited here were read from the Form 990 the ministry posts beside it rather than from the audit.',
  ],
  siteUrl: 'https://gtn.org/',
  giveUrl: 'https://gtn.org/give',
  sources: [
    {
      id: 'gtn-site',
      label: 'Homepage',
      url: 'https://gtn.org/',
      publisher: 'Global Training Network',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Source of the "90 nations", the 80% untrained-pastors figure and the 1-per-450,000 statistic, none of which carry a citation on this page.',
    },
    {
      id: 'gtn-vision',
      label: 'Vision',
      url: 'https://gtn.org/vision',
      publisher: 'Global Training Network',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Source of the "over 345,000 pastors" and "estimated 34.5 million people" claims, the "more than 87 countries" figure, the Langham attribution for the 80% statistic and the founder quotation.',
    },
    {
      id: 'gtn-20years',
      label: '20 Years',
      url: 'https://gtn.org/20years',
      publisher: 'Global Training Network',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'The anniversary page, written by the founder. Source of the "over 330,000" figure, the 84 nations figure and the 180 staff figure.',
    },
    {
      id: 'gtn-multiply',
      label: 'The Multiplication Effect',
      url: 'https://gtn.org/multiply',
      publisher: 'Global Training Network',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Sets out the 1 → 100 → 1,000 model explicitly as an average and an approximation, which is how we know the 34.5 million figure is derived rather than counted.',
    },
    {
      id: 'gtn-nations',
      label: 'Nations of Involvement',
      url: 'https://gtn.org/nations',
      publisher: 'Global Training Network',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Headlined "90 Nations of Involvement". We counted 90 countries under "Currently Training" and 9 more under "Invited to Train"; fifteen of the 90 are high-income countries.',
    },
    {
      id: 'gtn-beliefs',
      label: 'Statement of Beliefs',
      url: 'https://gtn.org/beliefs',
      publisher: 'Global Training Network',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'gtn-stewardship',
      label: 'Stewardship',
      url: 'https://gtn.org/stewardship',
      publisher: 'Global Training Network',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Claims a 93% / 7% split and links three years of 990s and audits. The linked 2025 return reports 91.7% program.',
    },
    {
      id: 'gtn-990',
      label: 'GTN’s 2025 IRS Report (990)',
      url: 'https://gtn.org/s/GTN-990-2025.pdf',
      publisher: 'Global Training Network',
      documentType: 'form-990',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note: 'Calendar year 2025. Total functional expenses $9,518,467; program services $8,732,187; management and general $346,321; fundraising $439,959; revenue $9,946,486; net assets $4,680,402 rising to $5,276,819. Officer compensation $435,229, other salaries $3,246,001, benefits $329,226, payroll taxes $540,632, travel $1,354,876, "all other expenses" $3,162,431, grants to foreign organisations $0. Part III describes the whole program in one sentence and gives no counts.',
    },
    {
      id: 'gtn-990-efile',
      label: 'GTN’s 2025 Form 990 as electronically filed, including Schedule O',
      url: 'https://projects.propublica.org/nonprofits/organizations/680586399/202622049349301607/full',
      publisher: 'ProPublica Nonprofit Explorer',
      documentType: 'form-990',
      retrieved: '2026-09-19',
      fiscalYear: '2025',
      note: 'The complete filed return, which contains the Schedule O itemisation of Part IX line 24e missing from the PDF on GTN’s stewardship page: housing allowance $2,024,114, training $664,547, others $473,770, summing to the $3,162,431 on the face of the return. The viewer renders in a browser; we read the figures out of the underlying IRS e-file XML for the same filing.',
    },
    {
      id: 'gtn-newsletter-feb26',
      label: 'Reflect & Refocus — newsletter, February 2026',
      url: 'https://gtn.org/s/February-2026-Newsletter-for-Web.pdf',
      publisher: 'Global Training Network',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      fiscalYear: '2025',
      note: 'The only document in which GTN gives an annual training count. The figure is in the founder’s "Update from the President" column and reads "Over 10,000 indigenous pastors and lead-ers received training from our highly experienced, well-educated staff team." We have closed the typesetting hyphen and changed nothing else. The newsletter is a PDF under gtn.org/s/ and is not indexed as a report anywhere on the site.',
    },
    {
      id: 'gtn-newsletter',
      label: 'Newsletters',
      url: 'https://gtn.org/newsletter',
      publisher: 'Global Training Network',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: 'The index we worked back from. We also read the April, June and August 2026 newsletters from the same folder; none of them gives an annual count of pastors trained.',
    },
    {
      id: 'gtn-audit',
      label: 'GTN’s 2025 Financials (independent audit)',
      url: 'https://gtn.org/s/2025-GTN-Audit-Report.pdf',
      publisher: 'Global Training Network',
      documentType: 'audited-financials',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note: 'Posted by the ministry on its stewardship page. The file is a scan with no extractable text layer, so we did not read figures out of it; the financial figures on this page come from the Form 990 posted beside it.',
    },
    {
      id: 'gtn-propublica',
      label: 'Global Training Network — IRS filings',
      url: 'https://projects.propublica.org/nonprofits/organizations/680586399',
      publisher: 'ProPublica Nonprofit Explorer',
      documentType: 'third-party',
      retrieved: '2026-09-18',
      note: 'Used to confirm the filing history and prior-year totals against the returns GTN posts itself.',
    },
    {
      id: 'gtn-ecfa',
      label: 'ECFA member profile — Global Training Network',
      url: 'https://www.ecfa.org/MemberProfile.aspx?ID=20448',
      publisher: 'Evangelical Council for Financial Accountability',
      documentType: 'third-party',
      retrieved: '2026-09-18',
    },
    {
      id: 'gtn-who',
      label: 'Who We Are',
      url: 'https://gtn.org/who-we-are',
      publisher: 'Global Training Network',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Founding account: GTN began in spring 2004 with Paul Madson, then a senior pastor in suburban Phoenix, and his wife Lisa.',
    },
  ],
};
