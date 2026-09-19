import type { Cause } from '@/lib/types';

export const christianAidMission: Cause = {
  slug: 'christian-aid-mission',
  name: 'Christian Aid Mission',
  tagline: 'Funds indigenous ministries in their own countries instead of sending missionaries.',
  category: 'church-planting',
  countries: [
    'Africa',
    'East Asia',
    'Eurasia',
    'Europe',
    'Latin America',
    'Middle East & North Africa',
    'South Asia',
    'Southeast Asia',
  ],
  whatTheyDo:
    'Christian Aid Mission finds established indigenous ministries in unreached regions and channels support to them — the premise being that local believers already speak the language, carry no visa risk and cost far less to keep in the field than sent workers.',
  accreditations: [
    { label: 'ECFA member', sourceId: 'cam-site' },
    { label: 'Candid seal 2026', sourceId: 'cam-site' },
  ],
  verification: 'self-reported',
  biblicalAlignment: {
    mandate:
      'Jesus’ diagnosis of the problem is a shortage of workers, not a shortage of harvest, and his instruction is to pray for labourers to be sent into it. John commends supporting travelling workers so that the supporter becomes a fellow worker in the truth — the New Testament’s clearest warrant for funding someone else’s ministry rather than running your own.',
    scriptures: [
      {
        ref: 'Matthew 9:37–38',
        text:
          'The harvest is plentiful, but the laborers are few; therefore pray earnestly to the Lord of the harvest to send out laborers into his harvest.',
      },
      { ref: 'Luke 10:7', text: 'The laborer deserves his wages.' },
      {
        ref: '3 John 5–8',
        text:
          'Beloved, it is a faithful thing you do in all your efforts for these brothers… You will do well to send them on their way in a manner worthy of God… so that we may be fellow workers for the truth.',
      },
    ],
    concerns: [
      'Christian Aid Mission funds indigenous ministries it does not control and mostly does not name, for security reasons. The model’s strength — local autonomy — is also the reason a donor cannot inspect the work.',
      'We found no audited statements and no cost per worker on the site, so the efficiency argument here is structural rather than demonstrated.',
    ],
  },
  roi: {
    levers: ['local-workers', 'local-cost-base', 'multiplication'],
    reason:
      'This is the single largest structural multiplier in the directory, and the reason the whole “a dollar goes further” idea holds up. An indigenous missionary already speaks the language, already understands the culture, needs no visa, no relocation, no furlough and no home-country cost of living — and is paid against a local cost base that in South Asia and much of Africa is 30 to 150 times below the United States. A Western worker in the same field carries all of those costs and still has to learn the language. Nothing published lets us turn that into a per-worker figure.',
  },
  ministryClaims: [],
  scores: {
    gospelCentrality: { value: 3, note: 'Evangelism and church planting among unreached peoples is the stated purpose.' },
    localLeadership: {
      value: 3,
      note: 'The entire model is funding nationals. Structurally the strongest score in the directory on this dimension.',
    },
    financialTransparency: {
      value: 2,
      note: 'ECFA and Candid seals displayed; no statements, ratios or figures on the pages we read.',
    },
    outcomeEvidence: { value: 0, note: 'No counts of ministries supported, workers funded or churches planted published on the site.' },
    costEvidence: { value: 0, note: 'Nothing to divide.' },
  },
  notVerified: [
    'All of it, numerically. The site states a commitment to integrity and efficiency without publishing a single figure.',
    'Recipient ministries are often unnamed for security, so a donor cannot trace a gift to a specific work. Ask what reporting a donor actually receives.',
    'This is the model Gospel for Asia also claimed, and that ministry settled a $37 million US class action over misdirected funds. The model is sound; it also has the weakest natural feedback loop of any in this directory, which raises the bar on the diligence.',
  ],
  siteUrl: 'https://www.christianaid.org/',
  giveUrl: 'https://www.christianaid.org/donate/',
  sources: [
    {
      id: 'cam-site',
      label: 'Homepage',
      url: 'https://www.christianaid.org/',
      publisher: 'Christian Aid Mission',
      documentType: 'ministry-website',
      retrieved: '2026-09-18',
    },
  ],
};
