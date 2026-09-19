import type { Cause } from '@/lib/types';

export const hopeInternational: Cause = {
  slug: 'hope-international',
  name: 'HOPE International',
  legalName: 'HOPE International',
  ein: '23-2836648',
  tagline:
    'Lends and teaches saving through local churches, and is one of the few ministries that publishes both its repayment rate and its loan losses.',
  category: 'livelihood',
  countries: [
    'Benin',
    'Burundi',
    'Dominican Republic',
    'Haiti',
    'Kenya',
    'Malawi',
    'Republic of Congo',
    'Rwanda',
    'Tanzania',
    'Ukraine',
    'Zambia',
    'Zimbabwe',
  ],
  whatTheyDo:
    'HOPE International runs two very different things out of one budget. The first is savings groups: 15 to 25 neighbours, usually gathered through a local church, who save their own money in a box, lend it to each other and keep the interest. HOPE pays for the trainer and the curriculum, not the capital. The second is microfinance — regulated lending institutions that HOPE owns or part-owns in Rwanda, the Republic of Congo, Kenya, the Dominican Republic and Ukraine, which make small business loans and take deposits. It began in 1997 with 12 loans in Ukraine, funded by Jeff Rutt, a Pennsylvania homebuilder who had concluded that the relief shipments he was sending were making things worse. Peter Greer has led it since 2004.',
  accreditations: [
    { label: 'ECFA accredited', sourceId: 'hope-financials' },
    {
      label: 'Charity Navigator four-star rating, 17 consecutive years',
      sourceId: 'hope-financials',
    },
  ],
  verification: 'documents-reviewed',
  biblicalAlignment: {
    mandate:
      'The law did not tell Israel to hand the poor a harvested sheaf. It told the owner to stop harvesting at the edge of his field and leave what grew there, so that the poor person came and gathered it himself and ate his own work. That is a deliberately awkward arrangement: the giver gives up yield and gains no gratitude, and the receiver keeps his standing as a worker. Paul puts the same thing positively — the former thief works with his hands so that he has something to share — and Proverbs makes the cost of the alternative plain, that whoever oppresses a poor man insults his Maker.',
    scriptures: [
      {
        ref: 'Leviticus 19:9–10',
        text: 'When you reap the harvest of your land, you shall not reap your field right up to its edge, neither shall you gather the gleanings after your harvest. And you shall not strip your vineyard bare, neither shall you gather the fallen grapes of your vineyard. You shall leave them for the poor and for the sojourner.',
      },
      {
        ref: 'Ephesians 4:28',
        text: 'Let the thief no longer steal, but rather let him labour, doing honest work with his own hands, so that he may have something to share with anyone in need.',
      },
      {
        ref: 'Proverbs 14:31',
        text: 'Whoever oppresses a poor man insults his Maker, but he who is generous to the needy honours him.',
      },
    ],
    doctrine: {
      label:
        '"We are a group of Christ followers motivated by the Great Commission and the Greatest Commandment to love God, love our neighbour, and make disciples of all nations." That is the whole of it — the identity statement is explicit about Christ and about discipleship, but HOPE publishes no doctrinal articles, and the URL that reads like a statement of faith serves the general About Us page.',
      sourceId: 'hope-about',
    },
    concerns: [
      "The randomised evidence on microcredit is not kind to it. The six large trials published in 2015 found expanded borrowing and some business activity, but little or no effect on household income, consumption or schooling — and that is the fair summary of the best evidence there is on the second half of HOPE's model. The savings-group half has a better literature behind it, and it is also the half where the client supplies the capital. A donor should know which one they are funding.",
      "HOPE's own institutions take deposits as well as making loans: $41,979,516 of client deposits sat on the 2025 balance sheet. The audit discloses that some of that is compulsory savings pledged against loans and can be applied to a balance in default. That is standard microfinance practice and it is also the mechanism by which a struggling borrower loses the savings she was told to build. HOPE does not publish how often it happens.",
      "Lending to the poor at interest is the part of this model Christians argue about, and the arguments in Exodus 22:25 and Leviticus 25:35–37 are not frivolous. HOPE's institutions charge interest; we found no page where HOPE engages that objection scripturally.",
      'The board policy is that "up to 10% of designated gifts" may be redirected to administration. A designated gift is therefore only 90% designated, which is defensible but worth knowing before you designate one.',
    ],
  },
  roi: {
    levers: ['local-cost-base', 'local-workers', 'existing-network', 'multiplication'],
    reason:
      'The savings-group half of this ministry is the genuinely unusual ROI story in Christian giving, and it is worth stating precisely. The donor does not fund the loan fund. The members fund the loan fund, out of their own pockets — HOPE reports an average of $56.55 saved per member in 2025 — and the donor pays only for a trainer and a curriculum. When the training ends the group keeps running on its own money, which is why the cost per member is low and why it stays low. The savings-group entities in the audit spent $7,045,559 across their seven countries against 173,551 new members reported for the year, and delivery runs through churches that already exist and already have someone standing at the front. The microfinance half is different: it needs permanent capital, it employs regulated staff, and it is priced against economies where income per person is a tenth to a fiftieth of the United States rather than against a donated training budget.',
  },
  costModel: {
    outcome: 'new saver or borrower reached in a year',
    outcomePlural: 'new savers and borrowers reached in a year',
    spend: {
      amount: 52289043,
      basis: 'program-services',
      fiscalYear: '2025',
      sourceId: 'hope-audit-25',
    },
    count: {
      amount: 273209,
      label: 'new savings group members and new microfinance clients served',
      fiscalYear: '2025',
      sourceId: 'hope-ar-25',
    },
    attribution: 'all-program-spend',
    caveat:
      "An upper bound, and the reasons matter more than the figure. First, the count is of new people only — 173,551 new savings group members plus 99,658 new microfinance clients — while the spending also served everyone who joined in earlier years and is still being served, so the true cost of adding one person is lower than this. Second, $7,698,955 of the program total went out as grants to partner organisations whose clients are not in this count at all. Third, the two halves cost wildly different amounts per person and averaging them hides that: see the notes. Fourth, the savings group figure carries HOPE's own footnote that it covers HOPE-led programmes only. And this is a count of people reached, not of incomes raised — nothing in it says a business survived.",
    alternates: [
      {
        label: 'new savings group members only',
        count: 173551,
        note: 'HOPE footnotes this number "*HOPE-led programs only," so it excludes members reached through network partners. Against all program spending it is the wrong pairing — most of that spending is microfinance — but it is the count that matches the cheap half of the model.',
      },
      {
        label: 'new microfinance clients only',
        count: 99658,
        note: 'Loans disbursed, not businesses that survived. HOPE publishes $148M disbursed against this figure and no follow-up on what happened to the borrowers.',
      },
    ],
  },
  ministryClaims: [
    {
      quote:
        "At HOPE International, we invest in the dreams of families in the world's underserved communities as we proclaim and live the Gospel.",
      sourceId: 'hope-about',
    },
    {
      quote: '97.1% repayment rate',
      sourceId: 'hope-ar-25',
    },
    {
      quote: '$148M disbursed in loans',
      sourceId: 'hope-ar-25',
    },
    {
      quote: '$56.55 average savings per member',
      sourceId: 'hope-ar-25',
    },
    {
      quote:
        'As a Christ-centered organization, HOPE International is committed to integrity, transparency, and wise stewardship of every donation.',
      sourceId: 'hope-financials',
    },
    {
      quote:
        "To best steward HOPE's resources, it is our board-approved policy to allocate up to 10% of designated gifts toward administrative expenses if needed.",
      sourceId: 'hope-financials',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 3,
      note: 'The mission statement names the Gospel and says HOPE proclaims it, not merely lives it. Savings groups are gathered through local churches and HOPE counts churches equipped — 2,114 new ones in 2025 — as a headline result of its own work. It publishes no doctrinal articles, which is the only thing holding this short of an unqualified 3, but the Christian identity is not in doubt anywhere in its materials.',
    },
    localLeadership: {
      value: 2,
      note: 'The audit shows overseas entities spending $32,453,435 against $19,835,608 in the United States, and the operating institutions are locally incorporated and locally staffed with local boards. Governance, the CEO and the fundraising base are in Lancaster, Pennsylvania, and HOPE itself describes its leadership as a team of U.S. and international leaders.',
    },
    financialTransparency: {
      value: 3,
      note: "The strongest in this batch by a distance. Audited consolidated statements with a consolidating column per country group, a loan portfolio disclosed by country, an allowance-for-loan-loss roll-forward showing what was actually written off, nonperforming loans stated, ECFA accreditation and Form 990s. Marked down nowhere except that the annual report's figures do not agree with the audit's, which is in notVerified.",
    },
    outcomeEvidence: {
      value: 2,
      note: "New members and new clients are counted and published annually with a churches-equipped figure alongside. What is missing is the thing that matters: no published measure of whether any borrower's income rose or any funded business was still trading a year later. Clients served is not incomes raised, and HOPE reports the former.",
    },
    costEvidence: {
      value: 3,
      note: "Both halves of the division come from documents HOPE publishes itself, and the audit's consolidating columns let us divide the savings-group programme separately from the whole. Very few ministries make this possible.",
    },
  },
  notVerified: [
    'The 97.1% repayment rate. HOPE publishes it as a single number with no definition — we could not tell whether it is a portfolio-at-risk measure, an on-time collection rate, a cure rate, or an average across institutions, and those give very different answers. It is one of the few repayment rates published anywhere in Christian microfinance, and it still cannot be checked.',
    'Whether any income actually rose. There is no published income study, no control group, no survival rate for funded businesses. A loan disbursed is not a business that worked.',
    'The annual report and the audit do not agree. The annual report shows program services of $55,230,459 and total expenses of $61,105,842; the audit shows $52,289,043 and $61,701,807. Total assets are $129,693,666 in one and $129,232,224 in the other. The annual report states it is unaudited, which explains that it can differ but not why it does.',
    'Which countries the 30 in "serves in 30 countries" are. The audit names 12; the rest are reached through network partners that are not listed. The country list on this page is only the named ones.',
    'The cumulative claim that HOPE "has equipped 3,621,069 families" since 1997. Nothing published lets an outsider reconstruct it, and cumulative counts over 28 years double-count anyone served in more than one year unless the methodology says otherwise. It does not.',
    'What happens to compulsory savings when a borrower defaults. The audit says those savings can be applied to the outstanding balance. HOPE publishes no figure for how much client savings were absorbed this way.',
    'HOPE has no statement of faith or doctrinal articles that we could find. Several plausible URLs — /about-us/what-we-believe among them — quietly serve the general About Us page rather than returning a 404, so an absent page looks like a present one.',
  ],
  notes: [
    'This is the rare lending ministry that lets you check the "capital comes back" story instead of asking you to take it. The 2025 audit shows an allowance for loan losses of $2,161,006 against a gross portfolio of $54,580,357, a provision of $1,327,822 charged during the year, $1,039,283 of loans written off, and $904,921 nonperforming. The year before, $4,617,617 was written off. So the capital mostly does come back — and roughly 2% to 8% of it, depending on the year, does not. Anyone who tells you a revolving fund lends your $100 again and again without mentioning that is selling you something.',
    "The two halves of HOPE cost very different amounts. Dividing the savings-group entities' own program services from the audit, $7,045,559, by the 173,551 new savings group members in the annual report gives about $41 per new member — and the members, not the donor, put up every dollar that gets lent. The microfinance half carries a $52M loan book, regulated staff and a provision expense. If you want the cheap mechanism, the savings groups are it; if you want the balance sheet, the microfinance institutions are it.",
    "The members' own money is not money the donor gave. Client deposits were $41,979,516 at year end and the network reports more than $60.6M in savings. None of that is donated capital and none of it should be read as impact a donor bought. It is evidence that poor households save when there is somewhere to put it.",
    'Ukraine is still in the loan book at $2,958,548 — the country HOPE started in, lending through a war. Rwanda is now much the largest exposure at $29,535,495 of the $54,580,357 gross portfolio, so a donor to HOPE is carrying more Rwandan credit and currency risk than anything else.',
    'The EIN circulating for HOPE International in some directories, 52-2035089, matches no organisation in the IRS data. The correct one is 23-2836648.',
  ],
  siteUrl: 'https://www.hopeinternational.org/',
  giveUrl: 'https://www.hopeinternational.org/give',
  sources: [
    {
      id: 'hope-site',
      label: 'Homepage',
      url: 'https://www.hopeinternational.org/',
      publisher: 'HOPE International',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'hope-about',
      label: 'About us',
      url: 'https://www.hopeinternational.org/about-us/',
      publisher: 'HOPE International',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Source of the mission statement and the "group of Christ followers" identity paragraph. Note that /about-us/what-we-believe, /about-us/guiding-statements and other invented paths all serve this same page with a 200, so the absence of a statement of faith is easy to miss.',
    },
    {
      id: 'hope-financials',
      label: 'Financials and accountability',
      url: 'https://www.hopeinternational.org/about-us/financials',
      publisher: 'HOPE International',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Displays ECFA accreditation and the 17-year Charity Navigator four-star record, and links the audited statements, annual reports and Form 990s.',
    },
    {
      id: 'hope-audit-25',
      label: '2025 audited consolidated financial statements',
      url: 'https://www.hopeinternational.org/documents/financials/HOPE_International_Financial_Statements_-_Final.pdf',
      publisher: 'HOPE International',
      documentType: 'audited-financials',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note: 'Program services $52,289,043 of $61,701,807 total expenses. Consolidating columns separate the savings group programmes ($7,045,559 of program services) from the microfinance institutions, and the notes give the loan portfolio by country, the allowance roll-forward and client deposits. The financials page also links this same document under a 2025 annual report filename; the designed annual report is a separate file.',
    },
    {
      id: 'hope-ar-25',
      label: '2025 annual report',
      url: 'https://www.hopeinternational.org/documents/financials/2025_Annual_Report.pdf',
      publisher: 'HOPE International',
      documentType: 'annual-report',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note: 'Source of every outcome count used here: 173,551 new savings group members, 2,114 new local churches equipped, $56.55 average savings per member, 99,658 new microfinance clients, $148M disbursed and the 97.1% repayment rate. The report states its financial figures are unaudited, and they differ from the audit.',
    },
    {
      id: 'hope-propublica',
      label: 'IRS filings for Hope International, EIN 23-2836648',
      url: 'https://projects.propublica.org/nonprofits/organizations/232836648',
      publisher: 'ProPublica Nonprofit Explorer',
      documentType: 'third-party',
      retrieved: '2026-09-18',
      note: 'Used to confirm the EIN and the legal name, since the EIN quoted in some directories is wrong.',
    },
  ],
};
