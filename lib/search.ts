import { CATEGORY_LABELS, type Category, type Cause } from './types';

/**
 * Plain-language search over the directory: "clean water in Africa", "kids with
 * disabilities", "help persecuted Christians in Iran".
 *
 * Runs in the browser over the causes already on the page. No model, no API
 * key, no server — the directory is small enough that word matching with a
 * handful of synonyms answers the question, and every match can be explained by
 * pointing at the words on the cause's own card.
 */

/** Words that say how someone is asking, not what they are asking for. */
const STOPWORDS = new Set([
  'a',
  'about',
  'an',
  'and',
  'any',
  'are',
  'around',
  'at',
  'be',
  'by',
  'can',
  'cause',
  'causes',
  'charity',
  'charities',
  'christian',
  'christians',
  'church',
  'churches',
  'do',
  'donate',
  'donating',
  'find',
  'for',
  'from',
  'fund',
  'give',
  'giving',
  'help',
  'helping',
  'helps',
  'human',
  'i',
  'in',
  'into',
  'is',
  'it',
  'like',
  'looking',
  'me',
  'ministry',
  'ministries',
  'money',
  'my',
  'need',
  'of',
  'on',
  'or',
  'our',
  'people',
  'please',
  'show',
  'some',
  'something',
  'support',
  'supporting',
  'supports',
  'that',
  'the',
  'their',
  'them',
  'those',
  'to',
  'us',
  'want',
  'we',
  'where',
  'which',
  'who',
  'with',
  'work',
  'working',
  'world',
  'would',
]);

/**
 * Everyday words that should find a kind of work even when a ministry's own
 * copy uses a different one. Keys and values are pre-stemmed by `stem`.
 */
const SYNONYMS: Record<string, string[]> = {
  kid: ['child', 'children', 'orphan'],
  child: ['children', 'orphan'],
  children: ['child', 'orphan'],
  orphan: ['child', 'children', 'orphanage'],
  youth: ['child', 'children', 'student'],
  famil: ['family', 'families', 'child'],
  hunger: ['food', 'nutrition', 'feed', 'malnutrition'],
  hungry: ['food', 'nutrition', 'feed', 'malnutrition'],
  food: ['nutrition', 'feed', 'farm', 'meal'],
  farm: ['agricultur', 'food', 'farmer'],
  well: ['water', 'borehole'],
  water: ['well', 'borehole', 'sanitation'],
  clean: ['water', 'sanitation'],
  doctor: ['health', 'medical', 'hospital', 'surgery', 'clinic'],
  medical: ['health', 'hospital', 'surgery', 'clinic'],
  medicine: ['health', 'medical', 'hospital', 'clinic'],
  hospital: ['health', 'medical', 'surgery', 'clinic'],
  surgery: ['surgical', 'surgeries', 'hospital'],
  sick: ['health', 'medical', 'hospital', 'clinic'],
  disabilit: ['disability', 'disabled', 'wheelchair', 'deaf', 'blind'],
  disabled: ['disability', 'wheelchair'],
  wheelchair: ['disability', 'mobility'],
  bible: ['scripture', 'translation', 'bibles'],
  scripture: ['bible', 'bibles'],
  translat: ['translation', 'language', 'bible'],
  pastor: ['training', 'leader', 'seminary', 'theological'],
  seminary: ['theological', 'training', 'pastor'],
  school: ['education', 'student', 'literacy', 'teacher'],
  education: ['school', 'student', 'literacy'],
  read: ['literacy', 'reader'],
  literacy: ['reader', 'reading', 'education'],
  job: ['livelihood', 'business', 'employment', 'microfinance', 'loan'],
  poverty: ['livelihood', 'poor', 'income', 'business'],
  poor: ['poverty', 'livelihood', 'income'],
  business: ['livelihood', 'entrepreneur', 'loan'],
  traffick: ['trafficking', 'slavery', 'exploitation', 'justice'],
  slavery: ['trafficking', 'justice'],
  abuse: ['justice', 'violence', 'protection'],
  justice: ['trafficking', 'legal', 'violence'],
  persecut: ['persecuted', 'persecution', 'prisoner', 'martyr'],
  refugee: ['displaced', 'relief', 'refugees', 'displacement'],
  disaster: ['relief', 'emergency', 'earthquake', 'flood', 'hurricane'],
  war: ['conflict', 'relief', 'displaced', 'refugee'],
  plane: ['aviation', 'flight', 'pilot'],
  radio: ['media', 'broadcast'],
  film: ['media', 'video'],
  missionar: ['missionary', 'missionaries', 'sending', 'evangelism'],
  evangel: ['evangelism', 'evangelist', 'gospel'],
  gospel: ['evangelism', 'evangelist'],
  plant: ['church-planting', 'planting'],
};

/** Words that name a kind of work outright. A hit here is a strong signal. */
const CATEGORY_WORDS: Record<Category, string[]> = {
  translation: ['translation', 'translat', 'language'],
  scripture: ['scripture', 'bible', 'discipleship'],
  'church-planting': ['planting', 'plant'],
  evangelism: ['evangelism', 'evangel', 'missionar', 'sending'],
  training: ['pastor', 'seminary', 'theological', 'training'],
  'persecuted-church': ['persecut', 'persecuted', 'persecution'],
  health: ['health', 'medical', 'surgery', 'hospital', 'doctor', 'clinic'],
  disability: ['disabilit', 'disability', 'disabled', 'wheelchair', 'deaf', 'blind'],
  water: ['water', 'well', 'sanitation'],
  food: ['food', 'hunger', 'nutrition', 'farm', 'agricultur'],
  education: ['education', 'school', 'literacy'],
  livelihood: ['livelihood', 'job', 'business', 'poverty'],
  justice: ['justice', 'traffick', 'trafficking', 'slavery'],
  relief: ['relief', 'disaster', 'refugee', 'displaced', 'emergency'],
  logistics: ['aviation', 'logistics', 'plane'],
  media: ['media', 'radio', 'film', 'broadcast'],
  children: ['child', 'children', 'orphan', 'kid', 'famil'],
  'church-fund': ['fund'],
};

/**
 * Regions a reader names that the data records country by country. Matched as
 * phrases before the query is split into words.
 */
const REGIONS: { phrases: string[]; countries: string[] }[] = [
  {
    phrases: ['sub-saharan africa', 'east africa', 'west africa', 'southern africa', 'africa'],
    countries: [
      'Africa',
      'Angola',
      'Benin',
      'Burkina Faso',
      'Burundi',
      'Cameroon',
      'Central African Republic',
      'Chad',
      "Côte d'Ivoire",
      'DR Congo',
      'Egypt',
      'Eswatini',
      'Ethiopia',
      'Gabon',
      'Ghana',
      'Guinea-Bissau',
      'Kenya',
      'Lesotho',
      'Liberia',
      'Madagascar',
      'Malawi',
      'Mali',
      'Middle East & North Africa',
      'Mozambique',
      'Namibia',
      'Niger',
      'Nigeria',
      'Republic of Congo',
      'Rwanda',
      'Senegal',
      'Sierra Leone',
      'South Africa',
      'South Sudan',
      'Sudan',
      'Tanzania',
      'Togo',
      'Uganda',
      'Zambia',
      'Zimbabwe',
    ],
  },
  {
    phrases: ['southeast asia', 'south asia', 'east asia', 'central asia', 'asia'],
    countries: [
      'Afghanistan',
      'Bangladesh',
      'Bhutan',
      'Cambodia',
      'Central Asia',
      'China',
      'East Asia',
      'Hong Kong',
      'India',
      'Indonesia',
      'Japan',
      'Kazakhstan',
      'Kyrgyzstan',
      'Laos',
      'Mongolia',
      'Myanmar',
      'Nepal',
      'Pakistan',
      'Philippines',
      'South Asia',
      'South Korea',
      'Southeast Asia',
      'Sri Lanka',
      'Thailand',
      'Vietnam',
    ],
  },
  {
    phrases: ['latin america', 'south america', 'central america', 'caribbean'],
    countries: [
      'Argentina',
      'Bolivia',
      'Brazil',
      'Chile',
      'Colombia',
      'Costa Rica',
      'Cuba',
      'Dominican Republic',
      'Ecuador',
      'El Salvador',
      'Guatemala',
      'Haiti',
      'Honduras',
      'Jamaica',
      'Latin America',
      'Mexico',
      'Nicaragua',
      'Panama',
      'Paraguay',
      'Peru',
      'Trinidad and Tobago',
    ],
  },
  {
    phrases: ['middle east', 'north africa', 'arab world'],
    countries: [
      'Egypt',
      'Iran',
      'Iraq',
      'Israel',
      'Jordan',
      'Lebanon',
      'Middle East & North Africa',
      'Syria',
      'Turkey',
      'West Bank and Gaza',
    ],
  },
  {
    phrases: ['eastern europe', 'europe'],
    countries: [
      'Albania',
      'Austria',
      'Belgium',
      'Bulgaria',
      'Croatia',
      'Czechia',
      'England',
      'Eurasia',
      'Europe',
      'France',
      'Georgia',
      'Germany',
      'Greece',
      'Hungary',
      'Ireland',
      'Italy',
      'Kosovo',
      'Latvia',
      'Malta',
      'Moldova',
      'Netherlands',
      'North Macedonia',
      'Poland',
      'Portugal',
      'Romania',
      'Russia',
      'Serbia',
      'Slovakia',
      'Spain',
      'Sweden',
      'Switzerland',
      'Ukraine',
      'United Kingdom',
    ],
  },
  { phrases: ['usa', 'america', 'united states', 'u.s.'], countries: ['United States'] },
  { phrases: ['uk', 'britain', 'united kingdom'], countries: ['United Kingdom', 'England'] },
  { phrases: ['congo'], countries: ['DR Congo', 'Republic of Congo'] },
  { phrases: ['gaza', 'palestine', 'west bank'], countries: ['West Bank and Gaza'] },
];

/** Where in a cause a word was found, and how much that should count. */
const WEIGHTS = { name: 5, category: 4, place: 4, tagline: 3, body: 1 } as const;

function normalize(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

/**
 * Crude, symmetric stemming: the same rule runs over the query and the text, so
 * "orphans" meets "orphan" and "disabilities" meets "disability" without a
 * dictionary. Wrong on some words, but wrong the same way on both sides.
 */
export function stem(word: string): string {
  if (word.length > 4 && word.endsWith('ies')) return word.slice(0, -3) + 'y';
  if (word.length > 5 && word.endsWith('ing')) return word.slice(0, -3);
  if (word.length > 4 && word.endsWith('es') && !word.endsWith('ses')) return word.slice(0, -2);
  if (word.length > 3 && word.endsWith('s') && !word.endsWith('ss')) return word.slice(0, -1);
  return word;
}

function words(text: string): string[] {
  return normalize(text)
    .split(/[^a-z0-9-]+/)
    .flatMap((w) => (w.includes('-') ? [w, ...w.split('-')] : [w]))
    .filter(Boolean)
    .map(stem);
}

/** One thing the reader asked for, with the other words that count as it. */
type Term =
  | { kind: 'word'; text: string; alternatives: string[] }
  | { kind: 'place'; text: string; countries: Set<string> };

export function parseQuery(query: string): Term[] {
  let rest = ` ${normalize(query)} `;
  const terms: Term[] = [];

  for (const region of REGIONS) {
    const phrase = region.phrases.find((p) =>
      new RegExp(`[^a-z]${p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[^a-z]`).test(rest),
    );
    if (!phrase) continue;
    terms.push({ kind: 'place', text: phrase, countries: new Set(region.countries) });
    rest = rest.replace(phrase, ' ');
  }

  const seen = new Set<string>();
  for (const word of words(rest)) {
    if (word.length < 2 || STOPWORDS.has(word) || seen.has(word)) continue;
    seen.add(word);
    terms.push({ kind: 'word', text: word, alternatives: [word, ...(SYNONYMS[word] ?? [])] });
  }
  return terms;
}

/** A query word matches a text word exactly, or as the start of a longer one. */
function hits(alternatives: string[], haystack: Set<string>): boolean {
  for (const alt of alternatives) {
    if (haystack.has(alt)) return true;
    if (alt.length < 4) continue;
    for (const word of haystack) if (word.startsWith(alt)) return true;
  }
  return false;
}

type Indexed = {
  cause: Cause;
  name: Set<string>;
  tagline: Set<string>;
  body: Set<string>;
  places: Set<string>;
  category: Set<string>;
};

function index(cause: Cause): Indexed {
  const portfolio = (cause.portfolio ?? []).map((p) => `${p.name} ${p.place} ${p.work}`).join(' ');
  return {
    cause,
    name: new Set(words(`${cause.name} ${cause.legalName ?? ''}`)),
    tagline: new Set(words(cause.tagline)),
    body: new Set(words(`${cause.whatTheyDo} ${portfolio}`)),
    places: new Set(words(cause.countries.join(' '))),
    category: new Set([
      ...CATEGORY_WORDS[cause.category],
      ...words(CATEGORY_LABELS[cause.category]),
    ]),
  };
}

function termScore(term: Term, entry: Indexed): number {
  if (term.kind === 'place') {
    return entry.cause.countries.some((c) => term.countries.has(c)) ? WEIGHTS.place : 0;
  }
  const alts = term.alternatives;
  if (hits(alts, entry.name)) return WEIGHTS.name;
  if (hits([term.text], entry.category) || hits(alts, entry.category)) return WEIGHTS.category;
  if (hits([term.text], entry.places)) return WEIGHTS.place;
  if (hits(alts, entry.tagline)) return WEIGHTS.tagline;
  if (hits(alts, entry.body)) return WEIGHTS.body;
  return 0;
}

export type SearchResult = {
  /** Best match first. Ties keep the order the causes came in. */
  causes: Cause[];
  /** What we understood the reader to be asking for, for display. */
  understood: string[];
  /**
   * True when no cause matched every part of the query, so these are the
   * causes that matched the most parts. The page has to say so.
   */
  partial: boolean;
};

function scoreAll(causes: Cause[], terms: Term[]) {
  return causes.map(index).map((entry, order) => {
    const scores = terms.map((term) => termScore(term, entry));
    return {
      cause: entry.cause,
      order,
      matched: scores.filter((s) => s > 0).length,
      score: scores.reduce((sum, s) => sum + s, 0),
    };
  });
}

/**
 * The share of the query's parts each cause matched by word, 0 to 1. The
 * meaning-based search leans on this a little, so that "jobs" still reaches
 * the livelihood ministries when the model is unsure.
 */
export function keywordCoverage(causes: Cause[], query: string): Map<string, number> {
  const terms = parseQuery(query);
  if (terms.length === 0) return new Map();
  return new Map(scoreAll(causes, terms).map((s) => [s.cause.slug, s.matched / terms.length]));
}

export function searchCauses(causes: Cause[], query: string): SearchResult {
  const terms = parseQuery(query);
  const understood = terms.map((t) => t.text);
  if (terms.length === 0) return { causes, understood, partial: false };

  const scored = scoreAll(causes, terms);

  const best = Math.max(...scored.map((s) => s.matched));
  if (best === 0) return { causes: [], understood, partial: false };

  return {
    causes: scored
      .filter((s) => s.matched === best)
      .sort((a, b) => b.score - a.score || a.order - b.order)
      .map((s) => s.cause),
    understood,
    partial: best < terms.length,
  };
}
