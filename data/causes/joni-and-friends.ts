import type { Cause } from '@/lib/types';

export const joniAndFriends: Cause = {
  slug: 'joni-and-friends',
  name: 'Joni and Friends',
  legalName: 'Joni and Friends',
  ein: '95-3402002',
  tagline:
    'Collects used wheelchairs, has prisoners restore them, and sends volunteer teams to fit them overseas.',
  category: 'disability',
  countries: ['Global', 'United States'],
  whatTheyDo:
    'Joni and Friends was founded by Joni Eareckson Tada, a quadriplegic since 1967, and works on disability and the church. Wheels for the World collects donated manual wheelchairs in the United States, has them restored by inmates in prison-based restoration centres, and sends volunteer teams to hand-deliver and custom-fit them overseas with a Bible in the recipient’s language. Joni’s House runs centres for disabled children and families in several countries. The largest share of the budget, though, is domestic: retreats for families affected by disability in the United States, radio, and church training.',
  accreditations: [],
  verification: 'self-reported',
  biblicalAlignment: {
    mandate:
      'The guest list Christ names for the banquet is the poor, the crippled, the lame and the blind — the people who cannot repay. Scripture treats the exclusion of the disabled as the thing to be undone, not the disability itself, and it puts the body of Christ under obligation to the members it is tempted to treat as dispensable. A wheelchair, and a church that expects its user to be there, is that obligation in a concrete form.',
    scriptures: [
      {
        ref: 'Luke 14:13–14',
        text:
          'But when you give a feast, invite the poor, the crippled, the lame, the blind, and you will be blessed, because they cannot repay you.',
      },
      {
        ref: '1 Corinthians 12:22–23',
        text:
          'On the contrary, the parts of the body that seem to be weaker are indispensable, and the parts that we think are less honourable we clothe with greater honour.',
      },
      {
        ref: 'Proverbs 31:8–9',
        text:
          'Open your mouth for the mute, for the rights of all who are destitute. Open your mouth, judge righteously, defend the rights of the poor and needy.',
      },
    ],
    doctrine: {
      label: 'What We Believe, a published statement of belief',
      sourceId: 'jaf-believe',
    },
    concerns: [
      'Most of the money is spent in the United States. The FY2025 Form 990 reports $22,688,206 on the retreat and family programmes — chiefly American — against $7,498,028 for Wheels for the World and $4,536,973 for Joni’s House. A donor giving because of the overseas wheelchair work should know it is the smaller part of the ministry.',
      'The two sets of accounts do not agree about the size of the programmes. The FY2025 audited statements report program services of $54,365,860; the FY2025 Form 990 reports total program service expenses of $38,759,679. That is a $15.6M difference in the same year, and neither document reconciles it for the reader.',
      'Donated wheelchair inventory was written down by $1,870,483 in a restatement disclosed in the FY2025 statements, reducing total assets and unrestricted net assets by the same amount. The valuation of donated chairs is the number the whole gifts-in-kind story rests on, and it moved by nearly two million dollars.',
      'Two legal entities file under this name — Joni and Friends (EIN 95-3402002) and the Joni and Friends Foundation (EIN 30-0815226) — with separate audits and separate 990s. Figures on this page are the operating ministry’s only.',
      'Wheelchairs are restored by inmates in United States prisons. The ministry frames this as redemptive purpose for the inmates, and it may well be, but prison labour in a charitable supply chain is a question a donor is entitled to ask about — terms, pay, voluntariness — and the site does not address it.',
    ],
  },
  roi: {
    levers: ['durable-asset', 'volunteer-leverage', 'existing-network'],
    reason:
      'The chair itself is free: it is donated by an American family that no longer needs it, and it would otherwise have gone to landfill. Restoration labour is donated too. Volunteers collect, store and transport the chairs, and volunteer teams do the overseas fitting, so paid staff mostly coordinate rather than deliver. Delivery runs through local churches, which the ministry names as the connection point for each recipient. What a dollar buys here is logistics on top of donated goods and donated hours, which is a genuinely different cost structure from buying a new chair — but the ministry publishes no annual count, so we cannot show you what that structure costs per chair.',
  },
  ministryClaims: [
    {
      quote:
        'By fitting a person with a disability to a customized wheelchair, Wheels for the World provides hope for children and adults with disabilities in developing nations.',
      sourceId: 'jaf-wheels',
    },
    {
      quote:
        'Each recipient receives a custom-fit wheelchair and hears the Gospel message. Recipients also receive a Bible in their language, get training in wheelchair use and upkeep, and have the opportunity to connect with a local Christ-honoring church.',
      sourceId: 'jaf-wheels',
    },
    {
      quote:
        'Each year dedicated Joni and Friends volunteers collect thousands of used manual wheelchairs and other mobility equipment that would otherwise end up in landfills.',
      sourceId: 'jaf-wheels',
    },
  ],
  scores: {
    gospelCentrality: {
      value: 3,
      note:
        'A statement of belief is published, the programme descriptions are written in gospel terms, every wheelchair is delivered with a Bible and a church connection, and the founder’s public writing is unambiguously Christian. This is not a ministry whose faith has to be inferred.',
    },
    localLeadership: {
      value: 1,
      note:
        'Collection, restoration, governance and most spending are American, and the overseas distributions are done by volunteer teams travelling out from the United States rather than by local staff. Joni’s House operations are locally staffed, but they are the smallest of the three program lines.',
    },
    financialTransparency: {
      value: 3,
      note:
        'Audited statements and Form 990s for both legal entities are posted on the ministry’s own financial documents page for every year from 2021 through 2025, including the restatement disclosure. The documents are complete; what they do not do is reconcile to each other.',
    },
    outcomeEvidence: {
      value: 0,
      note:
        'This is a finding, not an absence of effort on our part. The ministry’s largest overseas programme is counted in wheelchairs, and no annual wheelchair figure is published on the programme page, in the audited statements, in the Form 990, or anywhere else we could find. The programme page says only “thousands”.',
    },
    costEvidence: {
      value: 0,
      note:
        'Spending is published to the line. There is no denominator at all, so there is nothing to divide. No cost per wheelchair, per recipient or per retreat family is advertised either.',
    },
  },
  notVerified: [
    'How many wheelchairs were delivered in FY2025, or in any year. This is the number the overseas programme turns on and we could not find it published anywhere. Without it there is no cost per chair on this page.',
    'How many people the retreat programme served, which is the largest single expense line at $22,688,206. No family count, no retreat count and no attendance figure is published with it.',
    'Why audited program services ($54,365,860) exceed 990 program service expenses ($38,759,679) by $15.6M in the same fiscal year. Different reporting rules can produce a gap this large; the documents do not say which ones apply here.',
    'What caused the $1,870,483 restatement of donated wheelchair inventory, and whether the valuation method for donated chairs has changed going forward.',
    'How donated wheelchairs are valued at all. Gifts in kind are the core of this model and the basis of valuation drives both the program total and the apparent efficiency of the ministry.',
    'The terms on which inmates restore the chairs — whether the work is paid, and how voluntary it is.',
    'Whether anyone outside the ministry has followed up a delivered chair. Nothing is published on how many are still in use after three to five years, which for a restored second-hand chair is the question that matters most.',
  ],
  notes: [
    'We deliberately did not build a cost per wheelchair. We could have divided the $7,498,028 Wheels for the World program line by a chair count, and there is no chair count to divide it by; inventing one from the ministry’s “thousands” would be putting a number on the page that nobody has published.',
    'FY2025 audited figures for the operating ministry, year ended 31 December 2025: program services $54,365,860, management and administrative $6,031,130, fundraising $7,463,887, total expenses $67,860,877. Program services fell from $56,088,937 the year before.',
    'The FY2025 Form 990 Part III program lines are $22,688,206 (including $733,782 of grants) for the retreat and family programmes, $7,498,028 (including $6,845,984 of grants) for Wheels for the World, and $4,536,973 (including $1,401,950 of grants) for Joni’s House. Note that Wheels for the World is almost entirely grants out — the ministry funds partners to do the work rather than doing it on its own books.',
    'The wheelchair distribution model is unusual enough to be worth stating plainly: the chair is donated by an American household, restored by an inmate, flown or shipped out, and fitted by a volunteer. Very little of a donor’s dollar buys the chair itself; almost all of it buys the movement of the chair.',
  ],
  siteUrl: 'https://www.joniandfriends.org/',
  giveUrl: 'https://www.joniandfriends.org/donate/',
  sources: [
    {
      id: 'jaf-site',
      label: 'Homepage',
      url: 'https://www.joniandfriends.org/',
      publisher: 'Joni and Friends',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'jaf-believe',
      label: 'What we believe',
      url: 'https://www.joniandfriends.org/who-we-are/what-we-believe/',
      publisher: 'Joni and Friends',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
    {
      id: 'jaf-wheels',
      label: 'Wheels for the World',
      url: 'https://www.joniandfriends.org/our-work/wheels-for-the-world/',
      publisher: 'Joni and Friends',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note:
        'Describes the collection, prison restoration and volunteer distribution model, and what each recipient receives. Publishes no annual wheelchair count.',
    },
    {
      id: 'jaf-financials',
      label: 'Financial documents',
      url: 'https://joniandfriends.org/financial-documents/',
      publisher: 'Joni and Friends',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
      note: 'Posts audited statements and Form 990s for both Joni and Friends and the Joni and Friends Foundation, 2021 through 2025.',
    },
    {
      id: 'jaf-audit-25',
      label: 'FY2025 audited financial statements',
      url: 'https://joniandfriends.org/wp-content/uploads/2026/06/JAF-2025-FS-Final.pdf',
      publisher: 'Joni and Friends',
      documentType: 'audited-financials',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note:
        'Year ended 31 December 2025. Program services $54,365,860, management and administrative $6,031,130, fundraising $7,463,887. Also discloses the $1,870,483 restatement of donated wheelchair inventory.',
    },
    {
      id: 'jaf-990-25',
      label: 'FY2025 Form 990',
      url: 'https://joniandfriends.org/wp-content/uploads/2026/08/2025-JAF-990-Public-Copy.pdf',
      publisher: 'Joni and Friends',
      documentType: 'form-990',
      retrieved: '2026-09-18',
      fiscalYear: '2025',
      note:
        'Part III gives the three program lines and Part III line 4e gives total program service expenses of $38,759,679 — $15.6M below the audited figure for the same year.',
    },
    {
      id: 'jaf-propublica',
      label: 'IRS filings for Joni and Friends, EIN 95-3402002',
      url: 'https://projects.propublica.org/nonprofits/organizations/953402002',
      publisher: 'ProPublica Nonprofit Explorer',
      documentType: 'third-party',
      retrieved: '2026-09-18',
    },
  ],
};
