import type { Cause } from '@/lib/types';

export const the500k: Cause = {
  slug: 'the500k',
  name: 'The 500K',
  legalName: '500k',
  ein: '83-1375770',
  tagline:
    'Sends its entire budget as a single annual grant to a British sister charity, which pays unnamed Indian partners to send village church planters at $80 a month.',
  category: 'evangelism',
  countries: ['India'],
  whatTheyDo:
    'The name is a count of villages, not of dollars or of workers. The ministry states it plainly on its 2022 cycle-ride page: “there are as many as 500,000 villages in India with no Christian presence… 500,000 Churches. One for each of the nation’s unreached villages.” To get there it funds Indian church planters through Indian partner organisations, and employs nobody — not in India, not in the United States, not in Britain. There are three entities. US donors give to 500k, a Phoenix 501(c)(3) with no staff and a five-man volunteer board, which in 2024 sent its whole $269,000 programme budget abroad as one grant. The recipient is 500K International, a British charity in Cambridge, which in the same year granted £1,074,313 to fourteen partner organisations in South Asia whose names it withholds. A third entity, the original 500k Trust, was winding down through 2024 and paid 60% of that year’s expenses. The founder is a British doctor who visited South Asia in 2010 as a medical student, worked out that his UK salary could support “15, 30, even 60 of these national workers”, and built a giving community around that arithmetic.',
  accreditations: [],
  verification: 'self-reported',
  biblicalAlignment: {
    mandate:
      'Paul’s question in Romans is the ministry’s entire business plan read backwards: people cannot call on someone they have not heard of, they cannot hear without a preacher, and a preacher does not arrive unless someone sends him. The 500K does one thing — it pays for the sending. Its whole budget is labourers, and the same apostle who asked the question also warned that money collected for distant saints has to be handled so that nobody can question it.',
    scriptures: [
      {
        ref: 'Romans 10:14–15',
        text: 'How then will they call on him in whom they have not believed? And how are they to believe in him of whom they have never heard? And how are they to hear without someone preaching? And how are they to preach unless they are sent?',
      },
      {
        ref: 'Matthew 9:37–38',
        text: 'The harvest is plentiful, but the labourers are few; therefore pray earnestly to the Lord of the harvest to send out labourers into his harvest.',
      },
      {
        ref: '2 Corinthians 8:20–21',
        text: 'We take this course so that no one should blame us about this generous gift that is being administered by us, for we aim at what is honourable not only in the Lord’s sight but also in the sight of man.',
      },
    ],
    concerns: [
      'The American entity is one man with a volunteer board, and its own tax return says so. Christian Hidden is President, the books are kept in his care, and the telephone number on the Form 990 is his. Five unpaid directors give an hour a week each. Nobody is employed, no fundraising cost is reported, the accounts are kept on a cash basis, and the return answers “no” to whether the financial statements were audited, reviewed or compiled by an accountant. Part VI reports that the Form 990 is not provided to the governing body before filing and that there is no document retention policy, and the Schedule O answer on which governing documents are available to the public reads in full: “NO DOCUMENTS AVAILABLE TO THE PUBLIC”. The controls disclosed around a $269,000 wire transfer are thinner than the transfer.',
      'Nothing the American entity funds happens where it can see it. Its whole programme figure is a single foreign grant, and its own Schedule F says what that grant may pay for: “THESE FUNDS MAY BE USED TO FUND EITHER THE OPERATIONS OF THE GRANTEE IN THE EXISTING SUPPORT GEOGRAPHIES OR TO COVER ANY ADMINISTRATIVE OR FUNDRAISING COSTS INCURRED BY THE OPERATIONS OF 500K INTERNATIONAL IN THE UK OR ELSEWHERE.” A donor reading “over 95% of the funds we raise makes it to our partners on the ground” is funding an unrestricted general-support grant that is expressly permitted to pay British overheads.',
      'Not one Indian partner is named by any of the three entities, and the British accounts say why: the charity has used a Charities SORP exemption “and has not disclosed names of some grant receiving institutions as they operate in territories where Christians are persecuted; the disclosure of this information would be prejudicial.” That is a real reason and we do not dispute it. It is also the reason nobody outside the organisation can check a single thing about where the money lands, and it sits alongside a second withheld document: the accounts of the old 500k Trust, which paid most of 2024’s costs, cannot be downloaded from the register at all.',
      'The British statutory accounts — the most substantial document either side of the Atlantic publishes — were filed in a state no reviewer should have signed off. Every page of the trustees’ report is headed “DRAFT AS AT 25th AUGUST 2023” for a year ended 31 December 2024, the independent examiner’s report is headed “DRAFT AS AT 31ST AUGUST 2016”, the contents page and each page of the trustees’ report carry unresolved “#REF!” spreadsheet errors, and the trustees’ approval block has the name, role and date left blank. The note on donations totals £752,498 against £750,246 on the face of the statement of financial activities. The examination itself is an independent examination by an AAT-qualified examiner, not an audit, which is lawful at this size and is not the same assurance.',
      'The gospel is named on the fundraiser pages and nowhere near the money. “Every person in India should have access to the good news of Jesus” appears on the run page; the homepage speaks only of “the love of God”, “faith communities” and “God’s story of generosity”, and the Form 990 describes the mission as “CHARITABLE, EDUCATIONAL, AND RELIGIOUS PURPOSES.” Neither entity publishes a statement of faith or a doctrinal basis. For workers in Indian villages the reticence may be protective; it means the category on this page rests on the ministry’s fundraising copy rather than on anything it has committed to in writing.',
    ],
  },
  roi: {
    levers: ['local-workers', 'local-cost-base', 'existing-network', 'multiplication'],
    reason:
      'A church planter who already lives in the district needs no visa, no airfare, no relocation allowance and no home-country cost of living, so the support figure is an Indian wage rather than a Western one — the ministry advertises $80 a month, against an Indian gross national income per head of about $2,760. Nothing is spent building a channel: fourteen partner organisations already recruit, train and supervise the workers, and the American entity reports no employees and no fundraising cost at all. The fourth lever is the one the ministry is moving towards rather than the one it mostly runs: its British trustees report four “bivocational training programmes” in 2024 and describe the model they are investing in as “a one-off training cost and ongoing follow-up costs, but it will not require the ongoing payment of salaries to fieldworkers, as do our current programmes.” Set against all of this, three legal entities and at least one currency conversion sit between the donor and the village, and no document published by any of them says what share of a dollar survives the trip.',
  },
  ministryClaims: [
    {
      quote:
        '500k is a charity that sends Indian people to plant churches in unreached villages of India. The name comes from the need: there are as many as 500,000 villages in India with no Christian presence. So that’s the requirement for everyone to have a chance to meet with Jesus. 500,000 Churches. One for each of the nation’s unreached villages.',
      sourceId: '500k-ride',
    },
    {
      quote:
        'Now here’s the fun part: it only costs us $80 a month ($960 a year) to send each of these missionaries.',
      sourceId: '500k-ride',
      impliedCostPerOutcome: 960,
      impliedOutcome: 'field worker sent for a year',
    },
    {
      quote: 'Amazingly, the cost of sending a full-time worker is only $80 per month.',
      sourceId: '500k-site',
    },
    {
      quote:
        'This means that over 95% of the funds we raise makes it to our partners on the ground.',
      sourceId: '500k-site',
    },
    {
      quote:
        'In 2024, 99.5% (£1,072,813) of all expenditure was spent on grants to partner organisations in South Asia, with 0.5% being spent on UK based overheads. However, since 60% of the year’s expenses were paid by the old 500k Trust, in reality UK based overheads should have been closer to 1.2% of total expenditure.',
      sourceId: '500k-uk-accounts-24',
    },
    {
      quote:
        'With the support of our 14 partner organisations, the number of workers increased by 17%, enabling greater reach and impact.',
      sourceId: '500k-uk-accounts-24',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 2,
      note: 'The only product is church planting and evangelism, and the fundraiser pages name Jesus explicitly: “every person in India should have access to the good news of Jesus”. Marked down because the homepage and the tax return both avoid it — “the love of God”, “faith communities”, “RELIGIOUS PURPOSES” — and neither the American nor the British entity publishes a statement of faith. The British charity’s registered object, “to advance the Christian religion throughout the world”, is the nearest thing to a doctrinal commitment we could find.',
    },
    localLeadership: {
      value: 3,
      note: 'There is no expatriate layer to mark down. Every funded worker is Indian, recruited and supervised by Indian partner leaders, and both funding entities report zero employees. The ministry describes its own role as backing “inspirational local leaders” who organise the workers. Grant decisions and both boards are Western, but no Western salary is charged to the field.',
    },
    financialTransparency: {
      value: 1,
      note: 'Three years of American Form 990s and two years of British statutory accounts are obtainable — from the IRS and the Charity Commission, not from the ministry, which publishes nothing financial on either of its websites. There is no audit anywhere: the 990 reports no audit, review or compilation and cash-basis accounting, and the British accounts are an independent examination. The 990’s own answer on public documents is “NO DOCUMENTS AVAILABLE TO THE PUBLIC”, there is no accreditation, and the British accounts as filed still carry “DRAFT” headers and “#REF!” errors.',
    },
    outcomeEvidence: {
      value: 0,
      note: 'A finding, not an absence. Part III of both Form 990s reports only that funds “HAVE BEEN DISPENSED… IN ACCORDANCE WITH GRANT APPLICATIONS” — no worker count, no village count, no country. The British trustees name the two things they measure, “the number of villages that have been influenced and the number of people who have interacted with each faith community and each field worker”, and publish neither. The only quantity in the report is a 17% increase off a base that appears nowhere.',
    },
    costEvidence: {
      value: 1,
      note: 'One clean spending figure and no denominator to put under it. The 2024 Form 990 gives a single unambiguous programme line of $269,000, and the ministry advertises $80 a month, but no document from any of the three entities states how many workers were supported in any year, so the price cannot be checked against the spending. Dividing the two would only return their own advertised figure.',
    },
  },
  notVerified: [
    'How many field workers are supported. This is the number the whole model turns on and no entity publishes it. Part III of the 2023 and 2024 Form 990s carries no count. The British trustees’ report gives a 17% increase with no base, and adds that even that figure is blended across two charities: “the operations reported here relate to those achieved through the grants of both the 500k CIO and the 500k Trust for 2024.” The counts plainly exist internally — the homepage promises each giver “the life-story, vision and photo of the worker(s) their giving is being directed towards”, and the trustees say sponsors were sent reports twice during the year. None of it is aggregated in public.',
    'Whether $80 a month is a full living wage or a top-up. The ministry’s own British report describes two different cost structures inside one advertised price: the model it is investing in needs “a one-off training cost and ongoing follow-up costs, but it will not require the ongoing payment of salaries to fieldworkers, as do our current programmes”. Nothing published says how many workers are on which basis, or what the one-off cost is.',
    'The 95% pass-through claim, which is true or false depending on the denominator nobody specifies. Against 2024 expenditure the American entity granted out $269,000 of $275,494 spent, which is 97.6%. Against funds raised it granted $269,000 of $428,602 received, which is 62.8%. Across 2022–2024 it raised $1,028,682 and granted $828,000, which is 80.5%. The British reserves note explains the 2024 gap as deliberate timing — “some funds raised in the USA in 2024 have not been transferred to 500k International (the UK charity), as in 2025 we intend to start sending funds to our South Asian partners directly from the US” — and we accept that explanation, but it is published by a different charity in a different country, and the two documents only reconcile because we read both.',
    'How money reaches workers in India lawfully. India regulates foreign contributions to associations with religious objects under the Foreign Contribution (Regulation) Act, which requires the Indian recipient to hold current FCRA registration and to receive funds through a designated bank account. Not one of the three entities mentions the FCRA, names an FCRA-registered recipient, or describes the route at all. The British cash analysis carries a line for “Indian Rupee deposits”, nil at the year end, and the 2025 plan is to wire from the United States directly to South Asian partners — a different legal route again, with nothing published about either version.',
    'Which partner organisations receive the money, and whether any of them is audited. Fourteen are referred to and none is named, under a Charities SORP exemption for territories where Christians are persecuted. The British trustees say grants go only to “fully-vetted partner organisations, after a detailed due diligence process including interviews with UK trustees”, and that “high levels of evidence are required of partners”. No sample, no finding and no partner audit is published, so the vetting is described but not evidenced.',
    'The accounts of the old 500k Trust, registered charity 1147772, which the register shows took £234,677 and spent £645,912 in 2024 and which the trustees say paid 60% of that year’s expenses. The register offers no downloadable accounts for it. Most of last year’s combined grant flow therefore passed through an entity whose statements a donor cannot read, and the merger note says the remaining funds move across during 2025.',
    'Anything audited. The Form 990 answers “no” to audit, review and compilation and reports cash-basis accounting; the British accounts are an independent examination by an AAT-qualified examiner. Every figure on this page came from a tax authority or a charity regulator, because neither entity publishes a financial statement, an annual report or an accreditation on its own website.',
    'Who runs it, according to the ministry. The websites never name the founder — he is “the 500k founder”, “a UK doctor” — while the Form 990 names Christian Hidden as President and lists five directors. The British charity names eight trustees and a chief executive serving at 60% of full time in a voluntary capacity. None of that comes from the ministry’s own pages, and no safeguarding or child-protection policy is published by either entity.',
    'How concentrated the funding is. Schedule A reports $1,328,094 of total support for 2020–2024, of which $784,904 was excluded as the excess given by substantial contributors, leaving public support at 40.9%. The organisation passes the public support test comfortably, and roughly three-fifths of five years of giving still came from a handful of donors. If one of them stops, the field consequence is immediate and nothing published says how large the affected group of workers would be.',
    'Whether the workers counted are church planters only. The homepage also describes a humanitarian fund that “Provides basic supplies for the poor”, “Cares for orphans and widows” and “Provides entrepreneurial training”, and the British charity’s objects cover poverty, sickness and education as well as religion. No split of spending between evangelism and relief is published in either country.',
  ],
  notes: [
    'Why there is no cost per outcome on this page. Both halves of a division need a document, and only the numerator has one. The 2024 Form 990 reports a single programme figure of $269,000; no year’s filing, report or web page from any of the three entities states how many workers that supported. Dividing $269,000 by the advertised $960 a year returns about 280 worker-years, and printing that would hand the ministry’s own marketing back to a donor dressed as a check on it. The counts that do exist are the wrong kind: 45 workers sent after the 2021 run and 50 targeted in 2022 are fundraising figures, and “100+ unreached villages” and “the number of people who have interacted with each faith community” are reach estimates produced by partners whose budgets are not in the numerator.',
    'The 2024 Form 990, for calendar 2024, filed 17 September 2025: revenue $428,602, all of it contributions; total expenses $275,494, being programme $269,000, management and general $6,494 and fundraising nil; no employees, five volunteers; net assets up from $79,061 to $232,169. The whole programme figure is the foreign grant. Part III says only: “THE ORGANIZATION HAS RAISED FUNDS FOR THE ESTABLISHMENT OF FAITH COMMUNITIES ACROSS THE WORLD. THESE FUNDS HAVE BEEN DISPENSED IN 2024 IN ACCORDANCE WITH GRANT APPLICATIONS.”',
    'The pattern is the same a year earlier. For calendar 2023: revenue $379,836, total expenses $318,251, and a single $315,000 grant, again coded to Europe for general support, again to 500K International. Contributions have risen every year since 2020 — $142,254, $157,158, $220,244, $379,836, $428,602.',
    'The British side is the larger of the two, which is why no outcome can be attributed to American money alone. 500K International, registered charity 1195636, reported 2024 income of £1,304,932 — £750,246 of donations, £2,252 of restricted charitable-activities income and £552,434 transferred in from the old 500k Trust — against expenditure of £1,080,174, of which £1,074,313 was grants, £4,961 administration and £900 accountancy. It held £505,921 of cash against £303,076 of creditors, £302,176 of that being grants due. The American grant is a minority share of a pool that also holds British and other giving.',
    'The three entities, so a reader can follow the money: 500k, EIN 83-1375770, an Arizona 501(c)(3) ruled exempt in June 2019 and registered at a Phoenix address; 500K International, a British charitable incorporated organisation numbered 1195636, registered 25 August 2021 in Coton, Cambridge; and 500K INTERNATIONAL, charity 1147772, the original trust, now removed from the register and winding down. The Form 990 still lists the website as THE500K.COM, which redirects to the British site.',
    'The name is used two ways, and only one of them is the mission. “500,000 villages” is the goal. The “500k ride” and “500k run” are 500 kilometres, which the ride page cheerfully admits: “500k for 500k. It was destiny.”',
    'We read three Form 990s and two years of British statutory accounts for this entry, so the verification level here is not a measure of how little we looked. It stays at ministry figures only because that level is defined by whether a division can be shown, and none can.',
  ],
  siteUrl: 'https://www.the500k.us/',
  giveUrl: 'https://www.the500k.us/#donate',
  sources: [
    {
      id: '500k-site',
      label: 'the500k USA homepage',
      url: 'https://www.the500k.us/',
      publisher: '500k',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: 'A single scrolling page carrying the strategy, the $80 per month and 95% claims, the humanitarian fund and the founder’s story. It does not name the founder, state a worker count or mention the British charity that receives the money.',
    },
    {
      id: '500k-ride',
      label: '500k Ride',
      url: 'https://www.the500k.us/500kride',
      publisher: '500k',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: 'The only page on either website that explains what the name means, and the only one that states the annual figure of $960. A 2022 fundraiser page: it is in the sitemap and reachable from the footer, but not from the main navigation.',
    },
    {
      id: '500k-run',
      label: '500k Run',
      url: 'https://www.the500k.us/500krun',
      publisher: '500k',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: 'Names India and Jesus explicitly, repeats the 500,000 unreached villages figure, and gives the only worker counts published anywhere: 45 sent after the inaugural event and 50 targeted for the following year.',
    },
    {
      id: '500k-990-24',
      label: '2024 Form 990',
      url: 'https://projects.propublica.org/nonprofits/organizations/831375770/202532609349300133/full',
      publisher: 'Internal Revenue Service',
      documentType: 'form-990',
      retrieved: '2026-09-19',
      fiscalYear: '2024',
      note: 'Read as the IRS e-file XML, object ID 202532609349300133, from the IRS Tax Exempt Organization Search bulk release; ProPublica renders the same return for a reader. Source of the $269,000 programme line, the Schedule F grant purpose, the Schedule A support history, the governance answers and the officer names.',
    },
    {
      id: '500k-990-23',
      label: '2023 Form 990',
      url: 'https://apps.irs.gov/pub/epostcard/cor/831375770_202312_990_2025013123062556.pdf',
      publisher: 'Internal Revenue Service',
      documentType: 'form-990',
      retrieved: '2026-09-19',
      fiscalYear: '2023',
      note: 'The IRS public copy is an image-only scan with no text layer, so the figures quoted here were read from the e-file XML for the same return, object ID 202432579349300423. The scan confirms the principal officer, the Tempe address used that year and the $315,000 grant.',
    },
    {
      id: '500k-propublica',
      label: 'IRS filings for 500k, EIN 83-1375770',
      url: 'https://projects.propublica.org/nonprofits/organizations/831375770',
      publisher: 'ProPublica Nonprofit Explorer',
      documentType: 'third-party',
      retrieved: '2026-09-19',
      note: 'Index of the filings and the source for the June 2019 ruling date and the NTEE code. Its extracted financial series stopped at 2023 when we read it, a year behind the filing the organisation had already lodged.',
    },
    {
      id: '500k-uk-accounts-24',
      label:
        '500K International, trustees’ annual report and accounts for the year ended 31 December 2024',
      url: 'https://register-of-charities.charitycommission.gov.uk/en/charity-search/-/charity-details/5181413/accounts-and-annual-returns',
      publisher: 'Charity Commission for England and Wales',
      documentType: 'annual-report',
      retrieved: '2026-09-19',
      fiscalYear: '2024',
      note: 'Downloaded as a PDF from this tab of the register. It carries full financial statements, but they are independently examined rather than audited. Source of the 14 partners, the 17% growth figure, the 99.5% overhead claim, the grant total, the SORP non-disclosure of partner names and the reserves note about routing 2025 funds direct from the United States. Filed carrying “DRAFT” page headers and unresolved “#REF!” errors.',
    },
    {
      id: '500k-uk-register',
      label: '500K International, registered charity 1195636',
      url: 'https://register-of-charities.charitycommission.gov.uk/en/charity-search/-/charity-details/5181413/charity-overview',
      publisher: 'Charity Commission for England and Wales',
      documentType: 'third-party',
      retrieved: '2026-09-19',
      note: 'Registration date, Cambridge address, trustee list and objects. The register records the charity as operating “Throughout England, United States” and helping by making grants to organisations; India is not listed.',
    },
    {
      id: '500k-uk-trust',
      label: '500K INTERNATIONAL, registered charity 1147772 (removed)',
      url: 'https://register-of-charities.charitycommission.gov.uk/en/charity-search/-/charity-details/5028121/charity-overview',
      publisher: 'Charity Commission for England and Wales',
      documentType: 'third-party',
      retrieved: '2026-09-19',
      note: 'The original trust, now removed. The register shows 2024 income of £234,677 against expenditure of £645,912 and offers no downloadable accounts for any year.',
    },
  ],
};
