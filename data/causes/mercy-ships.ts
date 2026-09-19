import type { Cause } from '@/lib/types';

export const mercyShips: Cause = {
  slug: 'mercy-ships',
  name: 'Mercy Ships',
  legalName: 'Mercy Ships International',
  ein: '26-2414132',
  tagline: 'Two hospital ships that dock in West and East Africa and operate for free.',
  category: 'health',
  countries: ['Madagascar', 'Sierra Leone'],
  whatTheyDo:
    'Mercy Ships owns and runs the Africa Mercy and the Global Mercy, the two largest civilian hospital ships in the world. Each spends about ten months alongside in one African port, screening patients and performing free surgery — cleft lip, cataract, obstetric fistula, tumour removal, orthopaedics — while training local surgeons, anaesthetists, nurses and biomedical technicians. In 2025 the ships served Sierra Leone and Madagascar. The crew are volunteers, most of whom raise their own support to be there.',
  accreditations: [{ label: 'ECFA accredited', sourceId: 'ms-about' }],
  verification: 'documents-reviewed',
  biblicalAlignment: {
    mandate:
      'Christ went to the places the sick were and touched what nobody else would touch — the facial tumour, the fistula, the blind eye. A ship that sails to a country with three surgeons for two million people and operates on the people at the very back of the queue is doing the plainest possible version of that. The ministry itself puts the mandate in one sentence on its tax return: it follows the model of Jesus.',
    scriptures: [
      {
        ref: 'Matthew 9:35–36',
        text:
          'And Jesus went throughout all the cities and villages, teaching in their synagogues and proclaiming the gospel of the kingdom and healing every disease and every affliction. When he saw the crowds, he had compassion for them, because they were harassed and helpless, like sheep without a shepherd.',
      },
      {
        ref: 'Luke 4:18',
        text:
          'The Spirit of the Lord is upon me, because he has anointed me to proclaim good news to the poor. He has sent me to proclaim liberty to the captives and recovering of sight to the blind, to set at liberty those who are oppressed.',
      },
      {
        ref: 'Isaiah 58:10',
        text:
          'If you pour yourself out for the hungry and satisfy the desire of the afflicted, then shall your light rise in the darkness and your gloom be as the noonday.',
      },
    ],
    concerns: [
      'A ship is the most expensive way to deliver surgery that anyone has built. The 2025 consolidated statements charge $216,523,697 to ship and field operations against 5,019 surgeries. Depreciation alone was $12,198,475, dry docking $3,472,957 and fuel and lube oil $5,313,572. None of that is wasted — a floating operating theatre needs a hull, and the hull needs a dry dock — but a donor should understand that a large share of the gift pays for a vessel rather than for an operation.',
      'The ship leaves. Mercy Ships is explicit that it trains local clinicians precisely so that capacity remains, and 1,061 healthcare professionals were trained in 2025. It is still the case that when the hospital sails, the surgical follow-up for thousands of patients passes to a health system that was short of surgeons before the ship arrived. Nothing published tracks what happens to those patients afterwards, and this is the oldest and most substantial criticism Christian surgeons make of the model.',
      'The faith commitment is real but deliberately loose. The Form 990 mission statement names Jesus; the volunteer pages say the community includes "a diversity of Christian faith traditions" and adds "We also welcome those who don’t share Christian faith to serve with us." There is no statement of faith. For a hospital ship that is a defensible staffing decision and it is also a genuine difference from the ministries in this category that require one.',
      '$11,270,585 of advertising and marketing and $3,179,253 of postage and printing are charged to the programme column rather than to fundraising. Mercy Ships recruits volunteer crew and patients through media, so some of that allocation is arguable. It is also $14.4 million that a donor would not naturally describe as ship and field operations.',
      'The ministry took in $74,333,478 more than it spent in 2025 and holds $606,063,874 of net assets. Ships are capital-heavy and a third vessel is a plausible use for it, but no reserve policy or capital plan is published in either document.',
    ],
  },
  roi: {
    levers: ['volunteer-leverage', 'durable-asset', 'multiplication'],
    reason:
      'We want to be honest about this one, because Mercy Ships is where the usual argument for giving overseas breaks down. A ship does not make a surgery cheaper — it makes a surgery possible in a country that had no functioning capacity for it. The real leverage here is volunteer time: $54,129,447 of the year’s programme cost is contributed salary expense, the value of clinical work given free by 2,176 volunteer crew from 75 nations, and $63,127,000 of contributed nonfinancial assets in total. Add 689 national day crew hired in Sierra Leone and Madagascar, and 1,061 African healthcare professionals trained over 305,400 training hours, and the durable output is a trained surgeon who will still be operating in twenty years. The correct comparison for this cause is not a cheaper surgical ministry; it is whether the operation would have happened at all.',
  },
  costModel: {
    outcome: 'surgery',
    outcomePlural: 'surgeries',
    spend: {
      amount: 216523697,
      basis: 'program-services',
      fiscalYear: '2025',
      sourceId: 'ms-audit-25',
    },
    count: {
      amount: 5019,
      label: 'total surgeries',
      fiscalYear: '2025',
      sourceId: 'ms-ar-25',
    },
    attribution: 'all-program-spend',
    caveat:
      'The highest cost per surgery in this directory by a factor of twenty, and the number needs three warnings. It is an upper bound: the same $216.5 million paid for 9,731 dental visits, 31,863 dental procedures, 1,061 clinicians trained, two ships kept in class, and patient screening and accommodation. It contains $54,129,447 of donated clinical labour that no donor’s cash bought — on cash alone the figure falls to about $32,400. And the ships spend part of each year sailing, refitting and in dry dock rather than operating, so a full year of costs is being charged to less than a full year of surgery. Read it as the cost of running two hospital ships divided by the surgeries they performed, which is exactly what it is.',
    alternates: [
      {
        label: 'total surgical procedures',
        count: 6860,
        note:
          'Mercy Ships states that "A patient often has multiple procedures as part of a single surgery or dental visit and may also have multiple surgeries or dental visits." A procedure is therefore a smaller unit than a surgery, which is a smaller unit than a patient.',
      },
      {
        label: 'total unique surgical patients',
        count: 4554,
        note: 'The narrowest count of people rather than events: about $47,500 per patient.',
      },
      {
        label: 'surgical and dental procedures together',
        count: 38723,
        note:
          'The broadest defensible denominator, at about $5,600 each. It puts 31,863 dental procedures alongside maxillofacial tumour removals, which is the kind of blending this site exists to stop.',
      },
    ],
  },
  ministryClaims: [
    {
      quote:
        'MERCY SHIPS FOLLOWS THE 2,000-YEAR-OLD MODEL OF JESUS, BRINGING HOPE AND HEALING TO THE FORGOTTEN POOR.',
      sourceId: 'ms-990-25',
    },
    {
      quote:
        'Mercy Ships follows the model of Jesus, bringing hope and healing. Our unique community includes people from many different backgrounds, including a diversity of Christian faith traditions.',
      sourceId: 'ms-volunteer',
    },
    {
      quote:
        'NOTE: A patient often has multiple procedures as part of a single surgery or dental visit and may also have multiple surgeries or dental visits.',
      sourceId: 'ms-ar-25',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 2,
      note:
        'Jesus is named in the mission statement on the tax return and throughout the volunteer material, the ships hold chapel and prayer, and ECFA accreditation requires an evangelical doctrinal basis. Marked down because no statement of faith is published and the ministry explicitly welcomes crew who do not share Christian faith.',
    },
    localLeadership: {
      value: 1,
      note:
        'The surgery is performed mostly by international volunteer crew from 75 nations. Against that, 689 national day crew were employed in the two host countries and 1,061 African healthcare professionals were trained from 18 nations — the training is the part of this model that transfers leadership, and it is real. Governance is in Texas and the ships are foreign-flagged.',
    },
    financialTransparency: {
      value: 2,
      note:
        'Consolidated audited statements with a full functional expense matrix and the complete Form 990 are both posted, and the audit consolidates the international affiliates rather than stopping at the US border. Marked down because the annual report contains no financial statements at all, so a reader who only opens the report sees 5,019 surgeries and no costs, and because the US 990 and the consolidated audit describe very different-sized organisations with no reconciliation between them.',
    },
    outcomeEvidence: {
      value: 3,
      note:
        'The best outcome reporting in this category. Unique patients, surgeries and procedures are counted separately for both surgery and dentistry, surgeries are broken down by specialty and the seven specialty figures sum exactly to 5,019, and the report prints its own warning that patients and procedures are not the same unit. Very few ministries publish the caveat that makes their own headline number smaller.',
    },
    costEvidence: {
      value: 2,
      note:
        'Both halves are audited or published for the same calendar year and the functional matrix is detailed enough to separate donated labour from cash. Marked down because Mercy Ships publishes no cost per surgery of its own, and because there is no split between spending on this year’s patients and spending on the ships.',
    },
  },
  notVerified: [
    'Mercy Ships publishes no cost per surgery, and the two documents it does publish imply very different ones. The consolidated audit charges $216,523,697 of ship and field operations to 5,019 surgeries — about $43,100 each. The US Form 990 for the same year end reports $149,634,312 of program service expenses, which against the same 5,019 surgeries is about $29,800. Neither document reconciles the US entity to the consolidated group, and the difference is not explained.',
    'How much of the $216.5 million is the ship and how much is the patient. Depreciation, dry docking, fuel, repairs and crew support are separable in the functional matrix but nothing published apportions them between this year’s surgeries and the vessel’s future years.',
    'What happens to patients after the ship sails. No follow-up data, complication rate or reoperation rate is published for any year.',
    'Whether the 1,061 clinicians trained are still practising in their own countries. Mercy Ships reports training hours, not retention, and retention is the entire argument for training as a durable output.',
    'The volunteer crew count differs between documents: the annual report says 2,176 unique volunteer crew, the Form 990 says 2,152. Neither defines the counting period.',
    'Why $11,270,585 of advertising and marketing sits in the programme column. The audit gives no allocation methodology.',
    'The ministry holds $606,063,874 of net assets after a $74,333,478 surplus. No reserve policy, capital plan or explanation of the surplus appears in the audit, the 990 or the annual report.',
    'There is no statement of faith, and no written policy on how faith is presented to patients who come for surgery.',
  ],
  notes: [
    'Two sets of books, both worth knowing about. The consolidated and combined statements for Mercy Ships and Affiliates (calendar 2025) show $346,553,067 of support and revenue, $272,508,894 of expenses — ship and field operations $216,523,697, general and administrative $17,048,009, fundraising $38,937,188 — and $606,063,874 of net assets. The US Form 990 for Mercy Ships International alone shows $250,375,032 of revenue, $191,394,677 of expenses and $429,951,707 of net assets. The figures on this page are the consolidated ones, because that is where the ships and the surgery are.',
    'The EIN commonly quoted for Mercy Ships in third-party lists is wrong. The correct number is 26-2414132, confirmed in the 2025 annual report and on the ministry’s own site; the alternative we were given does not resolve to any organisation on ProPublica.',
    '2025 dental output was larger than surgical: 5,117 unique dental patients, 9,731 visits and 31,863 procedures. Dentistry is genuinely part of the mission — untreated dental infection kills — but it is the reason "patients served" totals for Mercy Ships run far ahead of the surgical count.',
    'For a sense of scale in the other direction: African Mission Healthcare, which funds surgery at existing African mission hospitals, lands at about $1,960 of programme spending per surgery. Mercy Ships is roughly twenty-two times that. The two are not competing to do the same thing, and the gap is the price of bringing the hospital with you.',
  ],
  siteUrl: 'https://www.mercyships.org/',
  giveUrl: 'https://give.mercyships.org/',
  sources: [
    {
      id: 'ms-about',
      label: 'About Us',
      url: 'https://www.mercyships.org/about-us/',
      publisher: 'Mercy Ships',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Where the financial documents are posted and ECFA accreditation is claimed.',
    },
    {
      id: 'ms-mission',
      label: 'Our Mission',
      url: 'https://www.mercyships.org/our-mission/',
      publisher: 'Mercy Ships',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'ms-volunteer',
      label: 'Volunteer with Mercy Ships',
      url: 'https://volunteer.mercyships.org/',
      publisher: 'Mercy Ships',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note:
        'The clearest statement of the ministry’s faith posture anywhere on its sites, under the heading "The model of Jesus".',
    },
    {
      id: 'ms-audit-25',
      label: 'Consolidated and combined financial statements, 31 December 2025',
      url: 'https://www.mercyships.org/wp-content/uploads/2026/05/MS-25-Consolidated-and-Combined-FS-Final.pdf',
      publisher: 'Mercy Ships',
      documentType: 'audited-financials',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note:
        'Mercy Ships and Affiliates. Ship and field operations $216,523,697 of $272,508,894 total expenses, with a line-by-line functional matrix that isolates $54,129,447 of contributed salary expense, $12,198,475 of depreciation and $3,472,957 of dry docking.',
    },
    {
      id: 'ms-990-25',
      label: 'Form 990 for Mercy Ships International, calendar 2025',
      url: 'https://www.mercyships.org/wp-content/uploads/2026/08/MSI-2025-990-Public.pdf',
      publisher: 'Mercy Ships',
      documentType: 'form-990',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note:
        'A scanned return with an incomplete text layer. We rendered and read Part I, Part III and Part IX as images; the mission statement quoted here is from Part III.',
    },
    {
      id: 'ms-ar-25',
      label: '2025 Annual Report',
      url: 'https://www.mercyships.org/wp-content/uploads/2026/05/2025-Annual-Report.pdf',
      publisher: 'Mercy Ships',
      documentType: 'annual-report',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note:
        'Contains no financial statements. Every count on the "2025 By the Numbers" pages is set as a graphic and was read from the rendered page rather than from extracted text.',
    },
    {
      id: 'ms-propublica',
      label: 'IRS filings for Mercy Ships International, EIN 26-2414132',
      url: 'https://projects.propublica.org/nonprofits/organizations/262414132',
      publisher: 'ProPublica Nonprofit Explorer',
      documentType: 'third-party',
      retrieved: '2026-09-18',
    },
  ],
};
