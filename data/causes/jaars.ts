import type { Cause } from '@/lib/types';

export const jaars: Cause = {
  slug: 'jaars',
  name: 'JAARS',
  legalName: 'JAARS, Inc.',
  ein: '56-0818833',
  tagline:
    'Flies, trains and equips the aviation that Bible translation runs on — and more than half of what it spends is donated labour.',
  category: 'logistics',
  countries: ['Papua New Guinea', 'Cameroon', 'Peru', 'Brazil', 'Gabon'],
  whatTheyDo:
    'JAARS was founded by William Cameron Townsend, who also founded Wycliffe Bible Translators and SIL, to solve the transport problem underneath translation work. It flies aircraft and helicopters for translators and local churches in places with no roads — 6,203 flight hours in the year to September 2025 — trains and deploys pilots and mechanics from a base in Waxhaw, North Carolina, builds flight-operations software used by other mission aviation programmes, and runs land and sea transport as well as air. In 2025 it trained 79 individuals, sent 12 aviation personnel overseas, and ran off-base training in Peru, Cameroon, Brazil and Gabon.',
  accreditations: [
    { label: 'ECFA accredited since 1989', sourceId: 'jaars-financial' },
    { label: 'Candid / GuideStar Gold Seal 2024', sourceId: 'jaars-financial' },
    {
      label: 'Charity Navigator, perfect finance and accountability score',
      sourceId: 'jaars-financial',
    },
  ],
  verification: 'documents-reviewed',
  biblicalAlignment: {
    mandate:
      'A translated Bible has to be carried to the village that speaks the language, and the people doing the carrying have to get there themselves. JAARS’ own mission statement puts it as reducing barriers and delivering God’s Word so that the gospel is proclaimed to the whole creation — the same phrase Christ uses in Mark. This is the logistics behind Romans 10: not the preaching, but the sending that has to happen before anyone can preach.',
    scriptures: [
      {
        ref: 'Mark 16:15',
        text: 'Go into all the world and proclaim the gospel to the whole creation.',
      },
      {
        ref: 'Romans 10:14–15',
        text: 'How are they to hear without someone preaching? And how are they to preach unless they are sent?',
      },
      {
        ref: 'Isaiah 40:3',
        text: 'A voice cries: “In the wilderness prepare the way of the Lord; make straight in the desert a highway for our God.”',
      },
    ],
    doctrine: { label: 'Our Beliefs', sourceId: 'jaars-about' },
    concerns: [
      'The board that governs JAARS is drawn partly from the organisations JAARS serves and depends on: the vice chair is a board member of Wycliffe USA, the treasurer is an associate executive director of SIL Global, and another director is a consultant to the Wycliffe Global Alliance. That is a coherent family and it is also a small circle. The audit discloses that $6,812,876 of the $8,682,165 of donated services came from a related party — the labour of staff supported through Wycliffe’s donor base. A donor should understand that the people overseeing JAARS, the people paying for much of its labour, and the people using its aircraft substantially overlap.',
      '“Roughly 1/3 of all global mission aviation relies on our 77 years of remote missions experience” is the headline claim of the annual report’s air operations section, and there is no way to check it. It has no source, no definition of what “relies on” means, and no measure of global mission aviation to be a third of.',
      'The flight statistics appear under a heading about the impact of “the JAARS Alliance”, in a column beside a separate box of larger numbers belonging to other operators using JAARS software. Numbers that could be mistaken for each other should not be laid out side by side, and one of them is the denominator on this page.',
      'JAARS spent $1,057,823 more than it took in during 2025, after a $3,391,230 surplus the year before, and the report does not explain the swing. Net assets remain $15,394,659, so this is a shift rather than distress.',
    ],
  },
  roi: {
    levers: ['volunteer-leverage', 'existing-network', 'durable-asset'],
    reason:
      'The dominant lever here is unusual and it is documented in the audit: $8,682,165 of the $20,109,305 JAARS spent in 2025 was donated services — supported staff whose living comes from other donors through Wycliffe, plus volunteer labour. Inside the air, land and sea operations line specifically, donated services are $3,965,728 of $7,077,271, so 56% of that work is paid for by someone other than the person giving cash today. Second, JAARS does not fly for itself: it exists so that dozens of translation and church-planting organisations can reach remote areas without each buying an aircraft, and in Papua New Guinea alone it says ten mission organisations rely on its crew. Third, aircraft and hangars are bought once and fly for decades. What is not a lever is a low local wage bill: the base, the training and most of the personnel are American.',
  },
  costModel: {
    outcome: 'flight hour',
    outcomePlural: 'flight hours',
    spend: {
      amount: 7077271,
      basis: 'program-services',
      fiscalYear: '2025',
      sourceId: 'jaars-audit-25',
    },
    count: {
      amount: 6203,
      label: 'flight hours',
      fiscalYear: '2025',
      sourceId: 'jaars-ar-25',
    },
    attribution: 'single-program-line',
    caveat:
      'This divides one programme line rather than all programme spending, which is the better attribution — but that line is “Transportation Solutions” in the audit and “Air, Sea, Land Operations” in the annual report, so it pays for boats and vehicles as well as aircraft, and the flight hours do not carry the land and sea part of the cost. Two further warnings. First, 56% of the line — $3,965,728 — is donated services rather than cash, so a cash gift is buying roughly 44% of this figure: about $502 of cash per flight hour, with the rest covered by supported staff and volunteers whose living other donors pay for. Second, the 6,203 hours are published under a heading about the impact of “the JAARS Alliance”, and JAARS does not state whether the figure covers its own aircraft only. Read this as the full accounting cost of JAARS’ transport programme per hour flown, which is an upper bound on both counts.',
    alternates: [
      {
        label: 'passengers flown',
        count: 21049,
        note: 'About $336 a passenger on the same accounting basis, or roughly $148 of cash once donated services are stripped out. A passenger is a journey, not a person — a translator flying in and out counts twice.',
      },
    ],
  },
  ministryClaims: [
    {
      quote:
        'We reduce barriers, ease burdens and deliver God’s Word. We do that by training, equipping, deploying and sustaining individuals, teams and stations to aid in the work of the Bible translation movement in proclaiming the gospel to the whole creation.',
      sourceId: 'jaars-about',
    },
    {
      quote:
        'Roughly 1/3 of all global mission aviation relies on our 77 years of remote missions experience',
      sourceId: 'jaars-ar-25',
    },
    {
      quote:
        'Throughout Papua New Guinea, 10 mission organizations continually rely on our aviation crew to reach the island nation’s large population of remote, unreached people groups.',
      sourceId: 'jaars-ar-25',
    },
    {
      quote:
        'Non-cash contributions include a labor grant for supported staff—supported by the financial and prayer contributions of friends and churches through Wycliffe Bible Translators—plus donated labor from volunteers; both are also recognized as expenses.',
      sourceId: 'jaars-ar-25',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 3,
      note: 'A full statement of beliefs is published, and the mission statement ends on proclaiming the gospel to the whole creation. The work itself is aircraft maintenance and flight training, which is about as far from a pulpit as ministry gets, but every stated purpose of it is Bible translation and church planting.',
    },
    localLeadership: {
      value: 2,
      note: 'The point of JAARS is to enable other people to fly, and in 2025 that included training 31 nationals in Cameroon, 18 in Peru, 13 in Brazil and 6 in Gabon, and enabling 11 local mission groups. Held at 2 because the base, the fleet, the training programme and most of the personnel are American, and the organisation describes sending 12 aviation personnel overseas rather than employing crews from the countries served.',
    },
    financialTransparency: {
      value: 3,
      note: 'Audited statements from Capin Crouse break programme spending into four named lines and — rarely — disclose how much of each line is donated services rather than cash, which is the only reason the caveat on this page could be written. The annual report publishes a financial summary that explains the non-cash contributions in plain language instead of hiding them, and ECFA accreditation goes back to 1989.',
    },
    outcomeEvidence: {
      value: 2,
      note: 'Flight hours, passengers, pounds of cargo, training hours, people trained and personnel deployed are all counted to the unit for a stated year. Marked down because they are printed under an “Alliance” heading beside another organisation’s numbers with no statement of scope, and because nobody outside JAARS has checked the flight logs.',
    },
    costEvidence: {
      value: 2,
      note: 'A single named programme line divided by that programme’s own activity count, both from the same fiscal year — the cleanest attribution in this batch. Marked down because the line covers land and sea transport too, because the accounting cost and the cash cost differ by more than half, and because JAARS publishes no cost per flight hour of its own to check ours against.',
    },
  },
  notVerified: [
    'Whether the 6,203 flight hours are JAARS’ own aircraft. They are printed under “THE IMPACT OF THE JAARS ALLIANCE”, and the box beside them reports 17,030 missions, 52,080 passengers and 5,944,017 pounds of cargo from other operators using JAARS’ FlightSpan software. We read the smaller column as JAARS’ own flying, because an alliance-wide figure should exceed the software subset rather than fall below it — but JAARS does not say so. If we are wrong, the true cost per hour is higher than this page shows, not lower.',
    'How the transport line splits between air, land and sea. The audit calls it Transportation Solutions, the annual report calls it Air, Sea, Land Operations, and nothing separates the aircraft from the boats and vehicles.',
    'What the donated labour would cost in cash. The audit values $8,682,165 of donated services, $6,812,876 of it from a related party, but does not state the hours behind the valuation or the rates used.',
    'What the Wycliffe relationship commits either side to. The labour grant is the single largest non-cash item in JAARS’ accounts and comes through Wycliffe Bible Translators, with Wycliffe and SIL officers on the JAARS board; no agreement, term or termination condition is described.',
    'Where the aircraft are based and how many there are. JAARS publishes flight hours but no fleet count, no aircraft list and no country-by-country breakdown of flying.',
    'What the training produced. Seventy-nine individuals trained and 12 personnel sent overseas are counted; nothing states how many are still serving.',
    'Why operations swung from a $3,391,230 surplus in 2024 to a $1,057,823 loss in 2025, while programme spending rose from $14,895,974 to $17,657,746.',
    'Where in Cameroon the crew works. The report says they discreetly equip local missionaries in sensitive locations, and withholds the places and the people. That is the right call — naming them could get local believers killed — and it means a donor is trusting JAARS on that part of the work rather than checking it.',
  ],
  notes: [
    'Two numbers, one flight hour. On the audited accounting basis a JAARS flight hour costs $1,140.94; strip out the donated services inside the same line and the cash cost is about $502. Both are true and they answer different questions. The first is what the hour really costs the kingdom; the second is closer to what a new dollar buys, because the labour half is already funded by other people’s giving.',
    'Programme spending in 2025: Air, Sea, Land Operations $7,077,271, Base Operations $5,866,050, Technology Solutions $2,455,114 and International Operations $2,259,311 — $17,657,746 in total, against $1,570,613 of management and $880,946 of fundraising. That is 87.8% programme, 7.8% management and 4.4% fundraising, and the fundraising ratio is the lowest of any cause in this batch.',
    'The software is becoming a product in its own right. FlightSpan, JAARS’ flight-operations tool, is used by other mission aviation programmes — MAF’s vice president of aviation is quoted in the annual report calling it “the backbone of our operational ecosystem” — which means part of what a donor funds is infrastructure for other ministries rather than flights for translators.',
    'Founded by William Cameron Townsend, who also founded Wycliffe Bible Translators and SIL. The 2025 leadership is Steve Russell as president and CEO, with Andrew J. Hood as board chair.',
  ],
  siteUrl: 'https://www.jaars.org/',
  giveUrl: 'https://www.jaars.org/give',
  sources: [
    {
      id: 'jaars-site',
      label: 'Homepage',
      url: 'https://www.jaars.org/',
      publisher: 'JAARS',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'jaars-about',
      label: 'About Us',
      url: 'https://www.jaars.org/about-us',
      publisher: 'JAARS',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Carries the mission statement and the full statement of beliefs under “Our Beliefs”.',
    },
    {
      id: 'jaars-financial',
      label: 'Financial Reporting',
      url: 'https://www.jaars.org/financial-reporting',
      publisher: 'JAARS',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'States ECFA accreditation since 1989, displays the Candid Gold Seal for 2024, and reports a perfect Charity Navigator finance and accountability score. Links the audited statements and the annual report.',
    },
    {
      id: 'jaars-audit-25',
      label: 'Audited financial statements, years ended 30 September 2025 and 2024',
      url: 'https://cdn.prod.website-files.com/6797f5bb02c311a3bdec9ca9/698618e86e3b639b99f7f92a_JAARS%2025%20FS%20Final.pdf',
      publisher: 'JAARS / Capin Crouse LLP',
      documentType: 'audited-financials',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note: 'Programme expenses $17,657,746 of $20,109,305 total, split into Base Operations $5,866,050, International Operations $2,259,311, Technology Solutions $2,455,114 and Transportation Solutions $7,077,271. The functional statement discloses $8,682,165 of donated services by line, including $3,965,728 inside Transportation Solutions, and the non-financial assets note attributes $6,812,876 of the donated services to a related party.',
    },
    {
      id: 'jaars-ar-25',
      label: 'JAARS Annual Report 2025',
      url: 'https://cdn.prod.website-files.com/6797f5bb02c311a3bdec9ca9/69f234823c09cd261cb1e3f7_JAARS_AnnualReport_2025.pdf',
      publisher: 'JAARS',
      documentType: 'annual-report',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note: 'Source of the operational counts — 6,203 flight hours, 21,049 passengers flown, 2,366,192 lbs of cargo, 1,810.4 training flight hours, 79 individuals trained, 12 personnel sent overseas, 11 local mission groups enabled, and off-base training in Peru, Cameroon, Brazil and Gabon. The flight figures are set as graphics in a two-column spread that also carries separate FlightSpan totals for other operators. The financial summary reports total income of $19,051,482 including $8,694,829 of non-cash contributions, an operating loss of $1,057,823, and ending net assets of $15,394,659.',
    },
    {
      id: 'jaars-ecfa',
      label: 'ECFA member profile and comparative financial data, JAARS',
      url: 'https://www.ecfa.org/ComparativeFinancialData.aspx?ID=10597',
      publisher: 'ECFA',
      documentType: 'third-party',
      retrieved: '2026-09-18',
    },
    {
      id: 'jaars-propublica',
      label: 'IRS filings for JAARS, Inc., EIN 56-0818833',
      url: 'https://projects.propublica.org/nonprofits/organizations/560818833',
      publisher: 'ProPublica Nonprofit Explorer',
      documentType: 'third-party',
      retrieved: '2026-09-18',
    },
  ],
};
