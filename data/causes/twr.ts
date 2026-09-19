import type { Cause } from '@/lib/types';

export const twr: Cause = {
  slug: 'twr',
  name: 'TWR',
  legalName: 'Trans World Radio',
  ein: '22-1690564',
  tagline:
    'Seventy years of shortwave and satellite broadcasting into closed countries — and a donation page that prices a soul at a penny.',
  category: 'media',
  countries: ['Global'],
  whatTheyDo:
    'TWR has broadcast Christian radio since 1954 and now describes itself as a network of partnerships reaching 190 countries in more than 200 languages, on shortwave and AM transmitters, on satellite, online, and through local follow-up. It spent $33,190,823 on programme activity in the year to 30 September 2025. Because the IRS classifies TWR as a church it files no Form 990, so there is no public schedule of its foreign offices, staff or grants.',
  accreditations: [
    {
      label: 'ECFA accredited, member since 1 October 1987',
      sourceId: 'twr-ecfa',
    },
  ],
  verification: 'self-reported',
  biblicalAlignment: {
    mandate:
      'TWR’s own doctrinal statement ends on Mark 16:15, and the logic of Romans 10 is the logic of a transmitter: faith comes by hearing, hearing requires a preacher, and a preacher requires sending. A radio signal crosses a closed border that a missionary cannot. Where a government forbids preaching and a Bible is contraband, broadcast is one of very few forms the command can still take.',
    scriptures: [
      {
        ref: 'Mark 16:15',
        text: 'Go into all the world and proclaim the gospel to the whole creation.',
      },
      {
        ref: 'Romans 10:14–15',
        text: 'How are they to believe in him of whom they have never heard? And how are they to hear without someone preaching? And how are they to preach unless they are sent?',
      },
      {
        ref: 'Isaiah 55:11',
        text: 'So shall my word be that goes out from my mouth; it shall not return to me empty, but it shall accomplish that which I purpose.',
      },
    ],
    doctrine: { label: 'Doctrine and Values', sourceId: 'twr-doctrine' },
    concerns: [
      'TWR’s donation page tells a donor what their gift buys, and the number is one cent per person. Enter the default $100 and the page reads “You could reach 10,000 people with this gift”. Nothing published anywhere explains it. Run it against TWR’s own audited spending and it implies that $40,446,157 of expenses reached roughly four billion people in one year — about half the population of the earth. The arithmetic is almost certainly a transmitter’s potential coverage area, which is not a count of anyone. A ministry with this much real work behind it does not need a number like that on its giving page, and we would not divide anything by it.',
      'There is no financial document on twr.org. We tried eight plausible paths — financials, annual report, accountability, stewardship, transparency and others — and every one returned a 404. Because the IRS designates TWR a church it is not required to file a Form 990 and does not, so there is no Schedule F either. Everything a donor can check about a $40 million ministry comes from a third party, ECFA, summarising statements the public never sees.',
      'TWR does publish counts — on a page headed “Measuring Our Impact in 2025” — and they are the wrong shape to price. The global figures are “2.4+ million engagements with people via letters, calls, emails, text and messaging apps”, “156,000+ radios, media players, Bibles, discipleship materials, and other items distributed” and “106+ million social media interactions”. Every one is a rounded floor at one or two significant figures. Every one is attributed to the international network, while the only spending figure in existence anywhere is the US entity’s. None is defined: nothing says whether an engagement is a letter a listener sent or a message TWR pushed. And the two units a radio ministry could count exactly — programme hours produced and broadcast hours aired — still appear nowhere.',
      'ECFA’s description of the ministry says it works to “help lead people from doubt to decision to discipleship”. We quote that as their aim and we do not treat decisions or discipleship as measurable outcomes; nobody can count them, TWR does not claim to, and a directory that priced them would be lying.',
    ],
  },
  roi: {
    levers: ['existing-network', 'digital-distribution'],
    reason:
      'The transmitters, satellite capacity and language services already exist and have for decades, so a gift buys airtime and programming rather than infrastructure. Broadcast has the one genuinely unusual economic property in this directory: the cost of a transmission does not rise with the number of people who hear it. That is a real lever and it is the reason this sector can make claims no other sector can. We have deliberately not claimed the two levers that would matter most to a donor — local workers and a local cost base — because with no Form 990 there is no Schedule F, and therefore no document showing what share of the $33,190,823 is spent abroad, by whom, or at whose wages.',
  },
  ministryClaims: [
    {
      quote: 'You could reach 10,000 people with this gift',
      sourceId: 'twr-give',
      impliedCostPerOutcome: 0.01,
      impliedOutcome: 'person reached',
    },
    {
      quote:
        'Broadcasting since 1954, we are a global network of partnerships using media to take God’s Word to nations, tongues and tribes around the world. Now, the gospel speaks 200+ languages on air, online and on the ground in 190 countries thanks to the Lord’s work in our ministry!',
      sourceId: 'twr-about',
    },
    {
      quote:
        '2.4+ million engagements with people via letters, calls, emails, text and messaging apps',
      sourceId: 'twr-impact',
    },
    {
      quote:
        '156,000+ radios, media players, Bibles, discipleship materials, and other items distributed',
      sourceId: 'twr-impact',
    },
    {
      quote:
        'In 2025, more than 3 million people from around the world visited TWR360 — watching, listening, and engaging nearly 58 million times.',
      sourceId: 'twr-impact',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 3,
      note: 'A full doctrinal statement is published and closes on the Great Commission. The product is the gospel itself — there is no other programme here to weigh it against.',
    },
    localLeadership: {
      value: 1,
      note: 'TWR calls itself “a global network of partnerships” and says the gospel goes out “on the ground” in 190 countries. The about page carries a National Partners directory, but it is script-populated: served as HTML it reads “0 National Partners” for every region and “Page 1 of 10”, so no partner is readable. With no Form 990 there is also no Schedule F, no list of foreign offices or agents, and no grant table. This score reflects what is documented, which is almost nothing — it is not a judgement on the partners themselves.',
    },
    financialTransparency: {
      value: 1,
      note: 'ECFA publishes three years of TWR’s functional expenses, revenue, assets and liabilities, stated to be taken from the organisation’s financial statements, and TWR has been accredited since 1987. That is the whole of it. TWR’s own site posts no audit, no annual report and no filing, and the church exemption means none is required.',
    },
    outcomeEvidence: {
      value: 1,
      note: 'TWR counts something, which is the difference between a 1 and a 0: engagements, items distributed, social interactions and TWR360 visits for 2025, with regional breakdowns for the Arabic ministry, Central Asia, Africa, Honduras and Ukraine. Not one figure is exact — they are all “+” floors at one or two significant figures — none is defined, and all are attributed to the international network rather than to the entity whose accounts exist. Programme hours produced and broadcast hours aired, the two things a broadcaster can count precisely, are still absent.',
    },
    costEvidence: {
      value: 1,
      note: 'TWR advertises a price of one cent per person reached, with no basis, no year and no definition of “reached”. The impact page does now publish counts that could in principle sit under a division, which is why this is no longer a zero, but none of them shares a scope or a period with the only spending figure in existence — ECFA’s summary of statements the public cannot read, for a year ended 30 September. A published price with no arithmetic behind it is still worse than no price.',
    },
  },
  notVerified: [
    'What an “engagement” is. The 2.4 million figure puts “letters, calls, emails, text and messaging apps” in one total. Nothing says whether it counts contacts that came in from listeners or messages TWR sent out, whether an automated push notification qualifies, or whether one person writing four times is one engagement or four. The unit that would be divisible — a listener response that somebody answered — is buried inside that number and cannot be separated from it.',
    'Whose work the 2025 figures describe. The page presents them as TWR’s global impact and breaks out the Arabic ministry, Central Asia, Africa, Honduras and Ukraine, so they belong to the international network. The only financial figure that exists anywhere is Trans World Radio’s, the US entity, in ECFA’s summary. No consolidated statement for the network is published, so there is no numerator that matches these counts and no honest way to construct one.',
    'Whether the counts and the money cover the same twelve months. The impact page is explicitly calendar 2025. TWR’s fiscal year ends 30 September. The periods overlap by nine months and neither document acknowledges the other.',
    'What the 156,000 items were. Radios, media players, Bibles, discipleship materials “and other items” are added into one total, and the total is a floor. A solar radio and a tract are not the same gift, and no split is published.',
    'How the 2025 impact figures were compiled. The page gives no methodology, no definitions, no source systems and no comparison with any earlier year, and the figures appear nowhere in a financial document.',
    'Whether anyone is reached. “People reached” in broadcasting is a coverage estimate — how many people live inside a signal footprint — not a count of listeners. We will not build a cost model on potential audience, at any price. A fraction-of-a-cent cost per person would look like the best value in this directory and would mean nothing, and a number like that discredits every honest figure standing next to it.',
    'What is behind the one-cent figure. TWR does not say whether it comes from population data, a listener survey, a media-research estimate or an internal rule of thumb, or what year it refers to. The same widget sits on the impact page under the words “See Calculation in:”, which turns out to be a currency selector — 100 people per dollar, 111 per euro, 77 per Singapore dollar, 68 per Australian dollar, 6 per rand — and not a link to any calculation. The closest thing to an explanation TWR offers explains nothing.',
    'Where the money goes. $33,190,823 of programme spending is a single line in ECFA’s summary. Nothing splits it between US operations, transmitter costs, satellite capacity and payments to national partners.',
    'What the audited statements actually say. ECFA reports figures “per the organization’s financial statements”; those statements are not published, so we are reading a third party’s summary of a document we cannot open.',
    'What $12,290,148 of “other revenue” is. It is a third of TWR’s FY2025 income of $37,856,064 and nothing explains it — earned income, contributions from affiliated national offices, gains on assets, and grants would all be reported this way.',
    'Why FY2025 ran a deficit of $2,590,093 on revenue of $37,856,064, after a surplus of $2,229,406 the year before. Net assets remain $41,335,862 against total assets of $55,600,027, so this is not distress, but no explanation is offered.',
    'Whether the “190 countries” and “200+ languages” figures are current. They appear on the about page with no year attached, and the 190-country figure counts places a signal can be received, not places TWR works.',
    'Who receives TWR money overseas, and whether those organisations are audited. TWR withholds this, and for broadcasting into closed countries that withholding may well be right — see the note below.',
  ],
  notes: [
    'We did not build a cost per outcome, and the reason is narrower than it used to be. TWR does count things it did — 2.4 million engagements by letter, call, email and messaging app, 156,000 items distributed — and some of those are exactly the kind of delivered unit this directory wants in the media category. What is missing is the other half. The counts belong to the global network and to calendar 2025; the only money figure in existence belongs to the US entity, for a fiscal year ended 30 September, and reaches us through ECFA’s summary of statements the public cannot read. Dividing one by the other would credit a gift in Cary, North Carolina with work the national offices paid for, and would divide a rounded floor by an unconsolidated numerator. The other available division — spending over potential audience — is the calculation we exist to refuse.',
    'Two kinds of silence are being confused on this page, and they are not equally defensible. TWR broadcasts into countries where a named local partner could be arrested, so not publishing partners, locations or photographs is a reasonable security posture and we do not hold it against them. Not publishing audited financial statements is a separate decision with no security rationale — the numbers would be aggregate and the organisation is in Cary, North Carolina. Security explains the first silence; nothing explains the second.',
    'The church exemption is legitimate and widely used by broadcast ministries, but a donor should understand its effect: no Form 990 means no public functional expense breakdown, no executive compensation disclosure, no foreign-grant schedule, and no independent index like ProPublica holding a copy. ProPublica’s page for the EIN says only that the organisation “is not required to submit tax filings because the IRS designates it as a church”.',
    'For scale across three years, from ECFA: programme spending was $34,503,888 in FY2023, $32,112,013 in FY2024 and $33,190,823 in FY2025. Total expenses were $41,165,600, $38,696,870 and $40,446,157. The FY2025 split is 82.1% programme, 6.9% administration and 11.1% fundraising, which is a respectable ratio by any standard.',
    'Founded in 1952 and based in Cary, North Carolina. Andy Schick is listed as the top leader on the ECFA profile.',
  ],
  siteUrl: 'https://twr.org/',
  giveUrl: 'https://twr.org/give',
  sources: [
    {
      id: 'twr-site',
      label: 'Homepage',
      url: 'https://twr.org/',
      publisher: 'TWR',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'twr-about',
      label: 'About Us',
      url: 'https://twr.org/about-us',
      publisher: 'TWR',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Source of the 190 countries and 200+ languages claims. Neither is dated.',
    },
    {
      id: 'twr-doctrine',
      label: 'Doctrine and Values',
      url: 'https://twr.org/doctrine-values',
      publisher: 'TWR',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Full evangelical doctrinal statement, closing on Mark 16:15.',
    },
    {
      id: 'twr-give',
      label: 'Give',
      url: 'https://twr.org/give',
      publisher: 'TWR',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'The donation widget generates its message from a template — “You could reach {$total} people with this gift” — with a multiplier of 100 people per dollar and a default gift of $100, so the page displays “You could reach 10,000 people with this gift”. We read the multiplier out of the page’s own configuration; it is not printed anywhere as text, and no basis for it is given.',
    },
    {
      id: 'twr-impact',
      label: 'Measuring Our Impact in 2025',
      url: 'https://twr.org/our-impact',
      publisher: 'TWR',
      documentType: 'ministry-website',
      retrieved: '2026-09-19',
      fiscalYear: '2025',
      note: 'The only page on twr.org that counts anything. Global totals for calendar 2025: “2.4+ million engagements with people via letters, calls, emails, text and messaging apps”, “156,000+ radios, media players, Bibles, discipleship materials, and other items distributed”, “106+ million social media interactions”, and “In 2025, more than 3 million people from around the world visited TWR360 — watching, listening, and engaging nearly 58 million times.” Regional figures follow: 342,000+ plays of Arabic video and audio streams and 421,000+ Arabic web and app engagements; more than 7 million Instagram engagements, 21 million TikTok interactions and 407,000 Telegram messages in Central Asia; more than 315,000 texts, 108,000 in-person visits and 165,000 WhatsApp interactions in Africa; more than 50,000 phone calls, 30,000 audience visits and 250,000 WhatsApp connections in Honduras; 3.7 million YouTube views and 189,000+ direct messages, letters, calls and emails in Ukraine. The page splits each figure across separate elements for the digits and the magnitude — “2.4” then “+ million” — and we have joined them as they read on screen and changed nothing else. No money appears on the page, no methodology is given, and no figure is attributed to a legal entity.',
    },
    {
      id: 'twr-partner',
      label: 'Partner with TWR',
      url: 'https://twr.org/partner',
      publisher: 'TWR',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'twr-ecfa',
      label: 'ECFA member profile and comparative financial data, Trans World Radio',
      url: 'https://www.ecfa.org/ComparativeFinancialData.aspx?ID=6921',
      publisher: 'ECFA',
      documentType: 'third-party',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note: 'The only financial figures we could obtain for TWR anywhere. ECFA states they are taken from the organisation’s financial statements, for fiscal years ended 30 September 2023, 2024 and 2025. FY2025: programme $33,190,823, administration $2,784,357, fundraising $4,470,977, total $40,446,157; revenue $37,856,064; net assets $41,335,862. The underlying statements are not public.',
    },
    {
      id: 'twr-ecfa-profile',
      label: 'ECFA member profile, Trans World Radio',
      url: 'https://www.ecfa.org/MemberProfile.aspx?ID=6921',
      publisher: 'ECFA',
      documentType: 'third-party',
      retrieved: '2026-09-18',
      note: 'Accredited since 1 October 1987. Founded 1952, Cary NC. Contains the “from doubt to decision to discipleship” description of the ministry.',
    },
    {
      id: 'twr-propublica',
      label: 'IRS filing status for Trans World Radio, EIN 22-1690564',
      url: 'https://projects.propublica.org/nonprofits/organizations/221690564',
      publisher: 'ProPublica Nonprofit Explorer',
      documentType: 'third-party',
      retrieved: '2026-09-18',
      note: 'No financial data. The page states that the organisation “is not required to submit tax filings because the IRS designates it as a church”.',
    },
  ],
};
