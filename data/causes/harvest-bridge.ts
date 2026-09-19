import type { Cause } from '@/lib/types';

export const harvestBridge: Cause = {
  slug: 'harvest-bridge',
  name: 'Harvest Bridge',
  legalName: 'Harvest Bridge',
  ein: '26-3403493',
  tagline:
    'A six-person office in Pennsylvania wiring grants to South Asian partners who support missionaries and plant churches.',
  category: 'church-planting',
  countries: ['India', 'Nepal', 'Bhutan', 'Bangladesh', 'Myanmar'],
  whatTheyDo:
    'Harvest Bridge describes itself as equipping South Asian Christians to serve their communities, and in practice it is a grantmaker: six staff in Grove City, Pennsylvania, twenty volunteers, and $728,171 of the year\'s $853,797 programme spend wired to partner organisations in India, Nepal, Bhutan, Bangladesh and Myanmar. The audited statements break those grants into seven purposes, so a donor can see exactly how much went to church planting rather than to relief or child sponsorship — which is rarer than it should be. The partners support missionaries, plant churches and house fellowships, run health camps and respond to floods, earthquakes and persecution.',
  accreditations: [],
  verification: 'documents-reviewed',
  biblicalAlignment: {
    mandate:
      'Paul told the Corinthians the point of giving was fairness — that their abundance at the present time should supply another\'s need — and told Timothy to entrust what he had heard to faithful men who would teach others. Harvest Bridge is a small structure built to do only those two things: move money to the faithful man who is already there, and let him do the work.',
    scriptures: [
      {
        ref: 'Matthew 28:19–20',
        text:
          'Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all that I have commanded you.',
      },
      {
        ref: '2 Corinthians 8:13–14',
        text:
          'I do not mean that others should be eased and you burdened, but that there should be fairness. Your abundance at the present time should supply their need.',
      },
      {
        ref: '2 Timothy 2:2',
        text:
          'And what you have heard from me in the presence of many witnesses entrust to faithful men, who will be able to teach others also.',
      },
    ],
    doctrine: { label: 'Statement of Faith (Apostles\' Creed)', sourceId: 'hb-faith' },
    concerns: [
      'The statement of faith is the Apostles\' Creed and nothing else, introduced as "the nonsectarian beliefs articulated in the Apostles\' Creed". The Creed is orthodox and ancient, but it is deliberately the minimum: there is no statement on Scripture, on the gospel, or on how a person is saved. A donor funding church planting is funding churches whose doctrinal floor is not stated anywhere.',
      'Two different disaster-relief counts appear in the same paragraph of the same Form 990 — "more than 25,200 people received relief" and "Over 33,371 people received disaster relief" — with overlapping descriptions. Whichever is right, nobody proofread the numbers before filing.',
      'About 30% of total support came from two contributors in 2025, and about 40% in 2024. The auditors say plainly that losing that support could impair the organisation\'s ability to continue its activities. A donor should understand that this ministry is two relationships away from a different size.',
      'Schedule F names not one grantee. Sixteen grant lines are disclosed with amounts, all coded "South Asia", every recipient name left blank. Some of these countries punish conversion and church planting, so anonymity may well be protection — but the schedule\'s own Part I region table and its Part V monitoring disclosure are both entirely blank, and those are where the IRS asks how foreign money is watched.',
      'The narrative on Form 990 Part III is written as what the partners "accomplished", not what Harvest Bridge verified. Every count on this page originates with the organisation receiving the grant.',
    ],
  },
  roi: {
    levers: ['local-workers', 'local-cost-base', 'existing-network'],
    reason:
      'Nothing is sent but money. 85.3% of the year\'s grant spending left the United States by wire to organisations already operating in South Asia, where a missionary\'s support, a church building and a pastor\'s living costs are priced in rupees, taka and kyat rather than dollars. The US structure that makes this happen is six people and a post-office box. The trade-off is that the same anonymity that protects workers in Bhutan and Myanmar also means a donor cannot look up who received the grant.',
  },
  costModel: {
    outcome: 'church or house fellowship planted',
    outcomePlural: 'churches and house fellowships planted',
    spend: {
      amount: 317960,
      basis: 'program-services',
      fiscalYear: '2025',
      sourceId: 'hb-audit-25',
    },
    count: {
      amount: 274,
      label: 'churches and house fellowships planted',
      fiscalYear: '2025',
      sourceId: 'hb-990-25',
    },
    attribution: 'single-program-line',
    caveat:
      'This uses the one audited grant line named "Church Planting and Evangelism" rather than all programme spending, so it excludes relief, child sponsorship, job training and health work. It still over-attributes in two directions. The line pays for evangelism as well as planting, and the same grants that produced 274 churches also supported 253 missionaries whose year of ministry was not only church planting — the two outcomes share one budget line and cannot be separated from the outside. It also carries none of the $105,753 of administration or the $63,971 of fundraising that raised the money, and none of the $125,626 of programme cost that is not grants.',
    alternates: [
      {
        label: 'missionaries supported during the year',
        count: 253,
        note:
          'The same $317,960 line gives $1,256.76 per supported missionary-year. Both this and the church figure are true of the same money, which is why neither should be read as the price of one thing.',
      },
      {
        label: 'churches planted charged against all grants made',
        count: 274,
        note:
          'Charging the whole $728,171 of grants to the church count gives $2,657.56, the honest upper bound if you believe the relief and development work exists to open the door for the church planting.',
      },
    ],
  },
  ministryClaims: [
    {
      quote: '274 churches and house fellowships were planted.',
      sourceId: 'hb-990-25',
    },
    {
      quote: '253 missionaries were supported in their ongoing ministries.',
      sourceId: 'hb-990-25',
    },
    {
      quote: '1,502 people began a relationship with Jesus.',
      sourceId: 'hb-990-25',
    },
    {
      quote:
        'Harvest Bridge shares the nonsectarian beliefs articulated in the Apostles’ Creed:',
      sourceId: 'hb-faith',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 2,
      note:
        'Christ is named throughout and the largest grant purpose is church planting and evangelism, so this is unmistakably Christian work. Held at 2 because the doctrinal statement is the Apostles\' Creed presented as "nonsectarian", with nothing said about Scripture or the gospel, and because more than half the grant budget is relief and development rather than gospel work.',
    },
    localLeadership: {
      value: 3,
      note:
        'The entire field operation is partner organisations in South Asia. Harvest Bridge employs six people, all in Pennsylvania, and sends no one.',
    },
    financialTransparency: {
      value: 2,
      note:
        'Audited financial statements and the Form 990 are both published, and the audit breaks grants into seven named purposes — better disclosure than most ministries this size. Marked down because the two documents are served from download links whose labels are swapped, the Schedule F region and monitoring tables are blank, and nothing is posted on any visible page: we found the financial documents only through the site\'s download-manager sitemap.',
    },
    outcomeEvidence: {
      value: 1,
      note:
        'Counts are published for the same year as the audit, in a filed federal return, which is worth something. Against that: every figure comes from the grantee, no definition of a church or a fellowship is given, the relief count appears twice with two different values, and no external party has checked anything.',
    },
    costEvidence: {
      value: 3,
      note:
        'The rarest combination in this category — an audited grant line for church planting specifically, and a count for the same calendar year in a filed return. The division needs no estimate on either side. Harvest Bridge publishes no cost per church itself.',
    },
  },
  notVerified: [
    'What a "church or house fellowship" is. Harvest Bridge gives no definition, no minimum size and no leadership requirement, and counts churches and house fellowships as one number, so a donor cannot tell what share of the 274 are gatherings in a living room and what share are established congregations.',
    'How many of the 274 still meet. No retention figure, no survival rate and no self-sustainability figure is published. This is a cost per church planted, not a cost per church that lasts.',
    'Whether the 274 churches and the 253 missionaries overlap. Both counts come out of the same $317,960 grant line and the same narrative paragraph, and nothing published says how many of the churches were planted by the supported missionaries.',
    'Which disaster-relief figure is correct, 25,200 or 33,371. Both are in the same paragraph of the same return.',
    'Who the partners are. Sixteen grant lines from $6,153 to $170,957 are disclosed with no recipient named, and Schedule F Part V — the section asking how the organisation monitors the use of foreign grants — is blank.',
    'Whether the partners are themselves audited. Nothing is published about their books, and 85.3% of programme spending is grants to them.',
    'The 1,502 people who "began a relationship with Jesus". Quoted as the ministry\'s claim and excluded from every calculation here. We do not treat a profession of faith as a delivered unit.',
    'What the churches believe. With a doctrinal statement limited to the Apostles\' Creed and described as nonsectarian, there is no published standard the planted churches are held to.',
  ],
  notes: [
    'Audited functional expenses for the year ended 31 December 2025: mission programmes $853,797, general and administrative $105,753, fundraising $63,971, total $1,023,521. Grants of $728,171 sit inside the programme figure. That is 83.4% to programme.',
    'The 2025 grant purposes in full: church planting and evangelism $317,960; disaster relief and rehabilitation $195,202; economic development and job training $91,132; health and community development $71,086; child sponsorship $28,520; pastor education $17,475; other children\'s programmes $6,796.',
    'Church planting and evangelism was $302,719 of $700,917 in 2024, so the allocation is stable year to year rather than a one-off.',
    'Harvest Bridge\'s two download links are mislabelled. The page at /download/2025_financial_statements/ serves the Form 990, and /download/2025_form_990/ serves the audited financial statements — the served documents carry each other\'s titles. Each source below cites the URL that actually delivers the document described.',
    'Neither document is linked from the About page, the Give page or anywhere else we could find; /financials returns nothing. We located them through the site\'s download-manager sitemap.',
    'Form 990 Part III reports programme expenses of $853,796 where the audit says $853,797. A one-dollar rounding difference, noted only because it is the kind of thing worth checking.',
  ],
  siteUrl: 'https://harvestbridge.org/',
  giveUrl: 'https://harvestbridge.org/give/',
  sources: [
    {
      id: 'hb-site',
      label: 'Homepage',
      url: 'https://harvestbridge.org/',
      publisher: 'Harvest Bridge',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Names the five countries used as this cause\'s country list.',
    },
    {
      id: 'hb-about',
      label: 'About Harvest Bridge',
      url: 'https://harvestbridge.org/about/',
      publisher: 'Harvest Bridge',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Links no financial documents. Neither the audit nor the Form 990 is reachable from any visible page.',
    },
    {
      id: 'hb-faith',
      label: 'Statement of Faith',
      url: 'https://harvestbridge.org/statement-of-faith/',
      publisher: 'Harvest Bridge',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'The Apostles\' Creed, introduced as nonsectarian, with no further doctrinal statement.',
    },
    {
      id: 'hb-ministries',
      label: 'Ministries',
      url: 'https://harvestbridge.org/ministries/',
      publisher: 'Harvest Bridge',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'hb-audit-25',
      label: 'Audited financial statements, year ended 31 December 2025',
      url: 'https://harvestbridge.org/download/2025_form_990/',
      publisher: 'Harvest Bridge',
      documentType: 'audited-financials',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note:
        'This URL is labelled "2025 Form 990" but serves the audited financial statements — the delivered file is titled 2025_Financial_Statements. Source of the functional expense split and of Note 7, which breaks $728,171 of grants into seven purposes including church planting and evangelism at $317,960. Note 8 discloses the two-contributor concentration.',
    },
    {
      id: 'hb-990-25',
      label: 'Form 990 for calendar year 2025',
      url: 'https://harvestbridge.org/download/2025_financial_statements/',
      publisher: 'Harvest Bridge',
      documentType: 'form-990',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note:
        'This URL is labelled "2025 Financial Statements" but serves the Form 990 — the delivered file is titled 2025_Form_990. Part III carries the outcome counts, including 274 churches and house fellowships planted and 253 missionaries supported. Schedule F Part II lists sixteen South Asia grant lines with every recipient name blank; Part I\'s region table and Part V\'s monitoring disclosure are empty.',
    },
    {
      id: 'hb-propublica',
      label: 'IRS filings for Harvest Bridge, EIN 26-3403493',
      url: 'https://projects.propublica.org/nonprofits/organizations/263403493',
      publisher: 'ProPublica Nonprofit Explorer',
      documentType: 'third-party',
      retrieved: '2026-09-18',
      note: 'Used to confirm the EIN and filing history.',
    },
  ],
};
