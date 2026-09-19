import type { Cause } from '@/lib/types';

export const anglicanReliefDevelopmentFund: Cause = {
  slug: 'anglican-relief-development-fund',
  name: 'Anglican Relief and Development Fund',
  ein: '20-8954604',
  tagline:
    'Global South archbishops decide which Anglican dioceses get funded; North American Anglicans raise the money and publish the grant on each project’s page.',
  category: 'church-fund',
  countries: [
    'Angola',
    'Argentina',
    'Brazil',
    'Burundi',
    'Cameroon',
    'Chile',
    'DR Congo',
    'Ethiopia',
    'Ghana',
    'Guatemala',
    'India',
    'Israel',
    'Kenya',
    'Madagascar',
    'Malawi',
    'Mozambique',
    'Myanmar',
    'Nepal',
    'Nigeria',
    'Pakistan',
    'Paraguay',
    'Peru',
    'Rwanda',
    'South Sudan',
    'Sudan',
    'Tanzania',
    'Thailand',
    'Uganda',
    'Ukraine',
    'United States',
    'West Bank and Gaza',
  ],
  whatTheyDo:
    'An Anglican diocese somewhere in the Global South applies with a project it wants built — a secondary school, a poultry centre, a well, a health clinic, a church that doubles as an earthquake shelter. An outside researcher looks at it, the American board recommends it, and a Global Council made up of archbishops from Uganda, Rwanda, Kenya, Egypt, Myanmar, Chile, Sydney and elsewhere approves it. Then the fund raises the money in North America, wires it in tranches against agreed milestones, and puts the project on its website with the grant amount printed on the page. There is a second, smaller track for ACNA congregations that already have an overseas partner, and a US disaster arm that in this fiscal year bought relief trailers for churches hit by Hurricane Helene. In the year to June 2025 it sent $2,090,100 overseas in 61 grants to 51 organisations, and $255,326 to churches and dioceses at home.',
  accreditations: [
    {
      label: 'Charity Navigator four stars, score 93 of 100',
      sourceId: 'ardf-cn',
    },
    {
      label:
        'Evangelical Council for Financial Accountability — claimed on its own site, not independently confirmed',
      sourceId: 'ardf-financials',
    },
  ],
  verification: 'documents-reviewed',
  biblicalAlignment: {
    mandate:
      'Paul spent years carrying a collection from Greek churches to Jerusalem, and he described it as the Gentiles owing a debt to the church that had given them the gospel. This fund runs that transaction in the direction history has now reversed: churches in the countries that once sent missionaries raise money, and bishops in the countries that received them decide where it goes. The instruction underneath it is the one about the body — that the parts with plenty and the parts with need belong to each other and cannot disown one another.',
    scriptures: [
      {
        ref: 'Romans 15:26–27',
        text: 'For Macedonia and Achaia have been pleased to make some contribution for the poor among the saints at Jerusalem. For they were pleased to do it, and indeed they owe it to them. For if the Gentiles have come to share in their spiritual blessings, they ought also to be of service to them in material blessings.',
      },
      {
        ref: '2 Corinthians 8:13–14',
        text: 'For I do not mean that others should be eased and you burdened, but that as a matter of fairness your abundance at the present time should supply their need, so that their abundance may supply your need, that there may be fairness.',
      },
      {
        ref: '1 Corinthians 12:25–26',
        text: 'That there may be no division in the body, but that the members may have the same care for one another. If one member suffers, all suffer together; if one member is honored, all rejoice together.',
      },
    ],
    concerns: [
      'The fund withholds the name of every overseas grantee on its tax return. All 61 lines of Schedule F have the organisation-name column blank, so the filing tells a reader how much went to Sub-Saharan Africa and nothing about who received it. The website fills part of the gap — about thirty project pages name a diocese and print its grant — but nothing connects those pages to the 61 lines, and many of the smaller relief grants are attached to no name anywhere: $70,000 for Myanmar earthquake relief, $20,000 for Israel war relief, $10,000 for cholera relief, $10,000 for a community kitchen. Some of that is security in places where being the Anglican recipient of American money is dangerous, and the fund does not say that is the reason, or which lines it applies to.',
      'The donor-facing number and the audited number describe different things and a donor is likely to conflate them. Three separate places on the financials page promise a 10% administrative fee, stated as a fee levied on designated gifts. The organisation’s actual non-programme share is 16.4% of spending on the filed return, $575,458 of $3,513,607, and 18% in its own annual report pie. Neither figure is hidden and neither is false; the 10% simply is not the overhead ratio, and the page does not say so.',
      'Every claim that a project worked rests on a document the fund does not publish. Its own Schedule F says that on completion of each project “AN INDEPENDENT RESEARCH AGENCY COMPARES EXPECTED RESULTS WITH ACTUAL RESULTS AND DOCUMENTS ITS FINDINGS IN A IMPACT ASSESSMENT REPORT.” Not one such report is public, and the independent agency is never named. The one durability claim — over 90% of projects funded since 2004 still functioning — rests on a survey of a “well-rounded sample” with no sample size, no sampling frame and no published method.',
      'The headline metric on every project page is “Lives Impacted”, and on older pages the same field reads “ANTICIPATED LIVES IMPACTED”. The fund never defines it, never sums it, and never revises it after the project finishes. A well in South Sudan is credited with 60,012 and classrooms in Paraguay with 220, so the figure is not one unit at all, and at least some of the numbers on the current pages are forecasts printed as results.',
      'Churches are a minority of the money. The fund’s own annual report puts individuals at 74% of revenue and churches at 23% — and 91% of donors are individuals against 8% churches. This is a church network by governance rather than by collection plate: the archbishops approve the projects and the congregations are one funding channel among others, which is a different thing from a congregation raising an offering and sending it out.',
      'The overseas grantee is a diocese, and a diocese is a bishop. That is the fund’s great strength — real institutions with real accountability, already in the village before the grant and still there after it — and it concentrates a lot of discretion in one office in places with thin civil oversight. Nothing published describes what happens when a project stalls, what the fund has clawed back, or whether it has ever refused a second grant to a diocese that mishandled a first.',
    ],
  },
  roi: {
    levers: ['local-cost-base', 'local-workers', 'existing-network', 'durable-asset'],
    reason:
      'Almost everything here is a building or a productive asset put up by local labour at local prices, on land a diocese already owns, run afterwards by staff the diocese already pays: four secondary classrooms in Wanyjok, a poultry centre in Gulu, a pig farm and butchery in Kagera, a demonstration farm and a well in Port Sudan, a rural health centre in Madudu. The grants are large enough to finish something — mostly $70,000 to $200,000, the biggest $305,556 — and small enough that the diocese, not the fund, carries the running cost. The channel costs nothing to build because the Anglican Communion is already there, with a bishop, a parish network and a school or clinic in most of these places. What the fund cannot show is what any of it delivers per dollar: its only outcome metric is an undefined and sometimes forecast count of “Lives Impacted”, so the mechanism is clear and the multiplier is not published.',
  },
  costModel: {
    outcome: 'overseas organisation funded for a year',
    outcomePlural: 'overseas organisations funded for a year',
    spend: {
      amount: 2090100,
      basis: 'program-services',
      fiscalYear: 'FY2025',
      sourceId: 'ardf-990-25',
    },
    count: {
      amount: 51,
      label: 'overseas organisations receiving grants',
      fiscalYear: 'FY2025',
      sourceId: 'ardf-990-25',
    },
    attribution: 'single-program-line',
    caveat:
      'Both halves are printed in the same filed return and the fund defines the denominator itself, which is rarer than it sounds. Part IX line 3 reports $2,090,100 of grants to foreign organisations; Schedule F Part II lists 61 grant lines and reports 51 on line 2, and the return’s own Part V note explains why the two differ — “THERE ARE SOME ORGANIZATIONS LISTED MORE THAN ONCE DUE TO MULTIPLE GRANTS IN DIFFERENT REGIONS OR FOR DIFFERENT PURPOSES. THOSE ORGANIZATIONS WILL ONLY BE REPORTED ONCE IN LINE 2.” So 51 is the fund’s own count of distinct overseas recipients. What $40,982 cannot tell you is what any of them did with it. An organisation funded for a year is a grant, not an outcome, and these grants are not alike: the largest single project on the website is $305,556 for a church in Naypyidaw that became a humanitarian hub after the March 2025 earthquake, and some Schedule F lines are $7,500 for mpox supplies. Four limits beyond that. We do not divide by the number the fund leads with — its headline metric is “Lives Impacted” on each project page, which it never defines, never totals, and on older pages labels “ANTICIPATED”, so there is no aggregate outcome count on this page at all, and there should not be. The numerator is the foreign grants line only: it excludes the $255,326 that went to US churches and dioceses for Helene and wildfire relief, and it excludes the project research, monitoring and evaluation that make up the difference between $2,345,426 of grants and $2,938,149 of programme spending. The 51 organisations are unnamed on the filing, so no reader can check the count against a roster. And this was an unusually large year: grants rose 41% from $1,658,493, so the average is pulled by a bigger denominator and a bigger numerator than the fund’s recent norm.',
    alternates: [
      {
        label:
          'the 61 separate overseas grants made, rather than the organisations that received them',
        count: 61,
        note: 'About $34,264 per grant. This is the number of lines the fund actually filed on Schedule F, before its own note collapses the repeats, and it is the better unit if you want to know what one funding decision costs rather than what one relationship costs for a year. Ten of the 61 are second or third grants to an organisation already counted.',
      },
      {
        label: 'all grants paid, against the overseas and domestic organisations funded together',
        count: 60,
        spend: 2345426,
        note: 'About $39,090, and the widest honest view of the fund’s grantmaking: $2,090,100 overseas plus $255,326 at home, against 51 overseas organisations and the 9 US churches, dioceses and nonprofits named on Schedule I. The 9 is a floor rather than a count — it is only the domestic grantees above the $5,000 reporting threshold, and $30,160 of domestic grants went to recipients below it — so the true denominator is a little larger and the true figure a little lower.',
      },
      {
        label: 'all program spending charged to the 51 overseas organisations',
        count: 51,
        spend: 2938149,
        note: 'About $57,611, and the number to use if you think a donor is buying the whole apparatus rather than the wire transfer: it adds the outside project research, the milestone monitoring and the impact assessments the fund says it commissions on every completed project. It overstates, because the same programme budget also paid for the US disaster grants.',
      },
    ],
  },
  ministryClaims: [
    {
      quote:
        'We in North America are not the ones deciding which projects to fund. Instead, a board of global Anglican leaders from the Global South approve our largest projects.',
      sourceId: 'ardf-mission',
    },
    {
      quote:
        'In order to keep our organization running, 10% of all donations designated for development projects or relief efforts go towards ARDF administrative purposes. We want our partners and their communities to thrive, and a healthy ARDF enables us to resource our partners with excellence.',
      sourceId: 'ardf-financials',
    },
    {
      quote:
        'ARDF assesses a fee of 10% on all donations to support ongoing operations. Administrative fees support ARDF communications, church and donor support, and expenses related to managing projects and relief, such as bank wiring fees.',
      sourceId: 'ardf-financials',
    },
    {
      quote:
        'ARDF connects Anglican churches with resources as they meet the needs of their communities through relief and development work, expanding the Kingdom of Christ through tangible acts of compassion.',
      sourceId: 'ardf-financials',
    },
    {
      quote:
        'Last year ARDF celebrated 20 years. After surveying a well-rounded sample of projects funded by ARDF since 2004, we were encouraged to discover that over 90% of these projects were still functioning: buildings are still in use, income generation is ongoing, and ministry continues to expand.',
      sourceId: 'ardf-ar-25',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 3,
      note: 'The mission statement on the tax return itself ends “EXPANDING THE KINGDOM OF CHRIST THROUGH TANGIBLE WORKS OF COMPASSION”, the grantees are Anglican dioceses and churches, the governing body is a council of archbishops, and the funded list includes church buildings, ministry-capacity grants and, in Santiago, “tailored evangelistic programs”. The compassion work and the church are the same institution here rather than two partners.',
    },
    localLeadership: {
      value: 3,
      note: 'The strongest in this category and one of the strongest on the site. The fund says in its own words that North Americans do not decide which projects are funded and that a board of Global South Anglican leaders approves the largest ones; the named Global Council includes the archbishops of Uganda, Rwanda, Kenya, Myanmar, Chile and Egypt. Every overseas recipient is a diocese or church already rooted where the work happens.',
    },
    financialTransparency: {
      value: 2,
      note: 'It posts its complete Form 990 — Schedules F, I and O included — on its own website, is audited annually by Capin Crouse, and carries a Charity Navigator four-star rating we verified independently at 93 of 100. Marked down because the name of every one of the 61 overseas grantees is blank on the filing, no audited statement is posted despite the return confirming one exists, the annual report and the return disagree by $119,279 on total expenses, the “10% administrative fee” sits where a donor will read it as an overhead ratio that is really 16.4%, and the financials page contradicts itself on whether it is listed with GuideStar or Candid.',
    },
    outcomeEvidence: {
      value: 1,
      note: 'The measurement machinery is described on the tax return and none of its output is published. The fund states that an independent research agency compares expected against actual results for every completed project and documents them in an impact assessment report; no report is public and the agency is unnamed. What a donor gets is “Lives Impacted” per project — undefined, never totalled, ranging from 220 to 60,012, and labelled “ANTICIPATED” on older pages, which means at least some of these are forecasts.',
    },
    costEvidence: {
      value: 2,
      note: 'Unusually good and still short of a price. A spending figure and a recipient count sit in the same filed return, with the fund’s own note explaining how to reconcile 61 grants to 51 organisations, and about thirty project pages publish a named diocese, a place and an exact grant amount — the only fund in this category that prices individual projects in public. Marked down because those project pages span six fiscal vintages and reconcile to no filing, because the Schedule F recipients are unnamed, and because nothing published converts a grant into a cost per person taught, treated or fed.',
    },
  },
  notVerified: [
    'Who received $2,090,100. Every one of the 61 overseas grant lines on Schedule F has the recipient-name column blank. Roughly thirty project pages on the website name a diocese and print a grant, and no document connects those pages to those lines, so the roster below is assembled from marketing material rather than from the filing.',
    'The impact assessment reports. The fund’s own Schedule F says one is produced for every completed project by an independent research agency. None is published, the agency is never named, and the same is true of the “third-party consultant” the annual report says monitors and evaluates projects.',
    'What “Lives Impacted” counts. No definition, no statement of whether it is measured or projected, no deduplication, and no post-completion revision. Older pages call the same field “ANTICIPATED LIVES IMPACTED”, so the metric is at least sometimes a forecast presented in the past tense.',
    'The 90% durability claim. A survey of a “well-rounded sample” of projects funded since 2004 found over 90% still functioning. No sample size, no sampling frame, no response rate, no date, and the survey itself is not published. For a fund whose whole case is that buildings last, that is the claim.',
    'The audited financial statements. The return confirms they exist, were audited on a separate basis with an audit committee overseeing them, and reconciles total revenue per the audited statements at $3,632,091 against $3,622,950 on the return. The statements are not posted, and the financials page says only that the fund “maintain[s] annually audited financial statements”.',
    'Why the annual report and the tax return disagree. The report gives FY2025 revenue $3,626,922 and expenses $3,394,328; the return gives $3,622,950 and $3,513,607, a $119,279 difference in expenses. The report carries its own warning that “Numbers may change slightly once our annual audit is completed in late 2025”, and no corrected report has been issued.',
    'ECFA membership. The financials page names the Evangelical Council for Financial Accountability alongside Charity Navigator and GuideStar — and in a second, otherwise identical paragraph names Candid instead of GuideStar. We could not confirm the ECFA listing through any channel available to us, so we have recorded it as a claim rather than an accreditation. The Charity Navigator rating we did confirm: four stars, 93 of 100, published 13 September 2026 — and Charity Navigator scored the fund on leadership, governance, accountability and financial health while leaving its Impact and cost-effectiveness score null.',
    'Written selection criteria. The process is published — applications from dioceses, research by an external consultant, recommendation by the US board, approval by the Global Council, then fundraising — and the criteria are not. Both Schedule F and Schedule I answer “Yes” to maintaining records of the selection criteria used; those records are not public, and neither is a decline rate, a grant-size policy, or a renewal or exit rule.',
    'No consolidated register of a year’s grants with recipient and amount exists anywhere. The project gallery is a marketing page mixing vintages, including projects still fundraising, and its sub-pages resolve back to the gallery rather than to detail pages.',
    'What the 10% fee actually covers, and what happens to a gift that arrives after a project is fully funded. The page says an over-funded gift is applied “to a similar project or where needed the most”, and the fee is levied on all donations including pass-throughs. No figure is published for fees collected in a year.',
  ],
  notes: [
    'This cause is the strongest evidence that the church-led fund category is not structurally unverifiable. Be Rich is a church network raising its own offering, and because the IRS designates the church a church there is no return, no audit and no per-project amount. This fund does the same work through a separate 501(c)(3) governed by archbishops: it files a full 990 with Schedules F and I, posts it, and prints a grant amount on each project page. What it withholds — the overseas grantee names — it withholds by choice, not by exemption.',
    'FY2025 runs 1 July 2024 to 30 June 2025. From the return: revenue $3,622,950, expenses $3,513,607, surplus $109,343, programme $2,938,149 of spending or 83.6%, management $296,313, fundraising $279,145, net assets $1,944,639. Grants of $2,345,426 split $2,090,100 overseas and $255,326 domestic. Prior year: revenue $2,721,827, expenses $2,765,459, grants $1,658,493 — so grants rose 41% in a year.',
    'Where the overseas money went, by region: Sub-Saharan Africa $1,497,436, South America $200,614, East Asia and Pacific $200,100, Middle East and North Africa $105,000, Russia and neighbouring states $52,500, South Asia $19,450, Central America and Caribbean $15,000.',
    'The US disaster arm is small, local and fully named — the one part of the roster the filing discloses in full. Nine grantees, $225,166 above the reporting threshold: $53,316 to the Diocese of the Carolinas for Helene relief and a new roof, $43,640 to Redeemer Anglican Church in Asheville, $35,750 to the Fuller Center for Housing, $30,000 to the Diocese of the Western Gulf Coast, $25,330 to Vintage Church Pasadena for California wildfire relief, $14,000 to Adventures in Missions, and three relief trailers at $6,300 to $8,690 each.',
    'The project pages are the fund’s real disclosure. Summing the stated ARDF grant on the roughly thirty pages published as of September 2026 comes to about $4.43 million — but those projects span vintages from 2021 to 2026 and include some still fundraising, so that total belongs to no fiscal year and is not used as a figure on this page.',
    'For contrast inside the same tradition: Covenant World Relief and Development does the same kind of regranting for the Evangelical Covenant Church, with 235 church partners genuinely taking up the offering, and publishes no financial statement, no grantee list and no amount for any partner — because the denomination is the fundraising body and claims church exemption. Its most recent published regranting figure, $1.6 million, is from the year to June 2019.',
    'The donor base is small and individual: 2,697 donors in FY2025, 91% of them individuals giving 74% of the money, churches 8% of donors giving 23%.',
  ],
  portfolio: [
    {
      name: 'Province of Myanmar, with the Diocese of Cascadia',
      place: 'Naypyidaw, Myanmar',
      work: 'A church for 400 worshippers that became a humanitarian hub after the March 2025 earthquake. $305,556 — the largest single grant the fund publishes.',
    },
    {
      name: 'Anglican Diocese of Zambezia',
      place: 'Milange, Mozambique',
      work: 'Saint Nicholas Community School. $195,797.',
    },
    {
      name: 'Diocese of Matana',
      place: 'Matana, Burundi',
      work: 'Expansion of the Ecole Fondamentale de Matana primary school and a diocesan guesthouse. $198,491.',
    },
    {
      name: 'Diocese of Sebei',
      place: 'Sebei, Uganda',
      work: 'A health clinic, to reduce deaths from treatable illness. $199,604.',
    },
    {
      name: 'Diocese of Bukavu',
      place: 'Bukavu, DR Congo',
      work: 'A vocational centre teaching masonry, sewing and carpentry to young people including former child soldiers. $194,635.',
    },
    {
      name: 'Diocese of Goma',
      place: 'Ndosho, Goma, DR Congo',
      work: 'Relaunching two Anglican schools for more than 1,300 students. $183,333.',
    },
    {
      name: 'Diocese of Northern Uganda',
      place: 'Gulu, Uganda',
      work: 'A poultry centre for income generation and food security, following an earlier farming initiative. $173,927.',
    },
    {
      name: 'Episcopal Diocese of Wanyjok',
      place: 'Wanyjok, South Sudan',
      work: 'Four secondary classrooms, doubling the school’s capacity. $171,852.',
    },
    {
      name: 'Diocese of Divine Hope',
      place: 'Jacare, Angola',
      work: 'Expanding a school with hundreds of children on the waiting list. $158,889.',
    },
    {
      name: 'Anglican Diocese of Singapore, Karen border churches',
      place: 'Thai–Myanmar border',
      work: 'A ministry centre for the displaced Karen community. $150,836.',
    },
    {
      name: 'Anglican Diocese of the Horn of Africa',
      place: 'Tigray, Ethiopia',
      work: 'Trauma healing for displaced people at the Ella camp. $148,172.',
    },
    {
      name: 'Diocese of Gambella',
      place: 'Gambella, Ethiopia',
      work: 'Clean-water wells. $143,000.',
    },
    {
      name: 'Diocese of Kigeme',
      place: 'Kigeme, Rwanda',
      work: 'Farming methods, agricultural training and malnutrition work. $115,214.',
    },
    {
      name: 'Diocese of Mukono',
      place: 'Madudu, Uganda',
      work: 'A rural community health centre. $108,521.',
    },
    {
      name: 'Diocese of Port Sudan',
      place: 'Port Sudan, Sudan',
      work: 'A demonstration farm and a new well. $104,903.',
    },
    {
      name: 'Anglican Diocese of Lake Malawi',
      place: 'Malawi',
      work: 'A secondary school, with advocacy against early marriage. $102,560.',
    },
    {
      name: 'LifeNet International',
      place: 'Ghana and Uganda',
      work: 'Clinic capacity building at six Anglican church-owned facilities. $331,052 over three years — the fund’s one non-diocesan overseas grantee of scale.',
    },
    {
      name: 'Diocese of Kagera',
      place: 'Kagera, Tanzania',
      work: 'Doubling a pig farm and adding a feed mill, a hygienic butchery and farmer business training. $73,333.',
    },
    {
      name: 'Diocese of the Carolinas and Redeemer Anglican Church',
      place: 'North and South Carolina, United States',
      work: 'The largest domestic grants of the year: $53,316 for Hurricane Helene relief, a new roof and a relief trailer, and $43,640 for a relief trailer and an art studio rebuild in Asheville.',
    },
  ],
  siteUrl: 'https://ardf.org/',
  giveUrl: 'https://ardf.org/donate',
  sources: [
    {
      id: 'ardf-990-25',
      label: 'Form 990 for the year ended 30 June 2025',
      url: 'https://ardf.org/s/2024-ARDF-Public-Copy-990.pdf',
      publisher: 'Anglican Relief and Development Fund',
      documentType: 'form-990',
      retrieved: '2026-09-19',
      fiscalYear: 'FY2025',
      note: 'Forty-two pages, posted by the fund itself and richer than any extracted copy — it includes Schedules F, I and O, which the public data sets do not. Part IX line 3 gives foreign grants $2,090,100 and line 1 domestic grants $255,326; Part III splits programme spending into $2,015,013 of development and $923,136 of relief; Schedule F Part II lists 61 grant lines with the recipient-name column blank on every one and reports 51 organisations on line 2, with Part V explaining the difference; Schedule I names 9 domestic grantees totalling $225,166. Prepared by Capin Crouse and signed by the board chairman on 31 October 2025.',
    },
    {
      id: 'ardf-ar-25',
      label: '2025 Annual Report',
      url: 'https://ardf.org/s/ARDF_Annual_Report_2025.pdf',
      publisher: 'Anglican Relief and Development Fund',
      documentType: 'annual-report',
      retrieved: '2026-09-19',
      fiscalYear: 'FY2025',
      note: 'Source of the Global Council roster, the six-year revenue history, the donor split and the durability claim. Its financial figures are set as pie-chart labels and differ from the filed return — revenue $3,626,922 and expenses $3,394,328 against $3,622,950 and $3,513,607 — with the report’s own footnote saying numbers may change once the audit is complete. The 90% sentence is broken across five short lines in a sidebar and has been reflowed here with no words changed.',
    },
    {
      id: 'ardf-financials',
      label: 'Our Financials, with the administrative-fee policy and accreditation claims',
      url: 'https://ardf.org/our-financials',
      publisher: 'Anglican Relief and Development Fund',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: 'States the 10% fee three separate times, in three different wordings, in the FAQ blocks on this page. Two near-identical paragraphs list the fund’s evaluators, one naming GuideStar and the other Candid.',
    },
    {
      id: 'ardf-mission',
      label: 'Our Mission, with the Global Council’s role in approvals',
      url: 'https://ardf.org/our-mission',
      publisher: 'Anglican Relief and Development Fund',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
    },
    {
      id: 'ardf-apply',
      label: 'Apply for an ARDF grant — the two grant tracks',
      url: 'https://ardf.org/apply-for-an-ardf-grant',
      publisher: 'Anglican Relief and Development Fund',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: 'Distinguishes International Development Grants, researched by the fund and approved by the Global Council in six named sectors, from Church to Church Grants for ACNA congregations that already have an overseas partner.',
    },
    {
      id: 'ardf-projects',
      label: 'Project gallery',
      url: 'https://ardf.org/current-projects-1',
      publisher: 'Anglican Relief and Development Fund',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: 'The index to the individual project pages, each of which prints a grant amount and a “Lives Impacted” figure. It is a gallery rather than a register: it mixes project vintages from 2021 to 2026, includes projects still fundraising, and its sub-paths resolve back to this page rather than to detail pages.',
    },
    {
      id: 'ardf-myanmar-2025',
      label: 'Myanmar 2025 project page — $305,556',
      url: 'https://ardf.org/project-myanmar-2025',
      publisher: 'Anglican Relief and Development Fund',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      note: 'The largest published grant. Representative of the page format: grant amount, undefined “Lives Impacted”, sector tags and a narrative.',
    },
    {
      id: 'ardf-gulu-2025',
      label: 'Northern Uganda 2025 project page — $173,927',
      url: 'https://ardf.org/project-uganda-gulu-2025',
      publisher: 'Anglican Relief and Development Fund',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
    },
    {
      id: 'ardf-drc-2026',
      label: 'Goma 2026 project page — $183,333',
      url: 'https://ardf.org/project-drc-2026',
      publisher: 'Anglican Relief and Development Fund',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
    },
    {
      id: 'ardf-cn',
      label: 'Charity Navigator rating for EIN 20-8954604',
      url: 'https://www.charitynavigator.org/ein/208954604',
      publisher: 'Charity Navigator',
      documentType: 'third-party',
      retrieved: '2026-09-19',
      note: 'Encompass rating 2.1.1, four of four stars, score 93, published 13 September 2026. Financial health, leadership, governance and accountability all score 1.00; the Impact and cost-effectiveness component is null and carries zero weight, meaning Charity Navigator did not assess cost per outcome here either.',
    },
    {
      id: 'ardf-propublica',
      label: 'IRS filings for The Anglican Relief and Development Fund, EIN 20-8954604',
      url: 'https://projects.propublica.org/nonprofits/organizations/208954604',
      publisher: 'ProPublica Nonprofit Explorer',
      documentType: 'third-party',
      retrieved: '2026-09-19',
      note: 'Confirms a normal 501(c)(3) filer with an IRS ruling date of October 2008, NTEE Q33, and thirteen years of returns — in contrast to the church-exempt bodies elsewhere in this category, which have none.',
    },
  ],
};
