/**
 * Data model for the cause directory.
 *
 * Rule that shapes everything here: a number is only shown to a donor if we can
 * point at the document it came from. Every figure is attached to a `Source`,
 * and anything we could not verify is written down explicitly in `notVerified`.
 */

/**
 * The kinds of work, and the unit of comparison on the home page.
 *
 * Cost per outcome only means something between ministries doing the same kind
 * of thing, so a category that lumps a microloan in with a trafficking
 * interception is not a labelling problem — it is a wrong comparison presented
 * as a right one. Split a category as soon as it starts holding two units.
 */
export const CATEGORIES = [
  'scripture',
  'church-planting',
  'evangelism',
  'training',
  'persecuted-church',
  'health',
  'disability',
  'water',
  'food',
  'education',
  'livelihood',
  'justice',
  'relief',
  'media',
  'children',
  'church-fund',
] as const;
export type Category = (typeof CATEGORIES)[number];

export const CATEGORY_LABELS: Record<Category, string> = {
  scripture: 'Scripture & discipleship',
  'church-planting': 'Church planting',
  evangelism: 'Evangelism & sending',
  training: 'Pastors & theological training',
  'persecuted-church': 'Persecuted church',
  health: 'Health & surgery',
  disability: 'Disability',
  water: 'Safe water',
  food: 'Food & farming',
  education: 'Schools & literacy',
  livelihood: 'Work & livelihoods',
  justice: 'Justice & anti-trafficking',
  relief: 'Disaster & displacement',
  media: 'Gospel media',
  children: 'Children & families',
  'church-fund': 'Church-led fund',
};

/**
 * How much work we have actually done on a cause. Nothing starts above
 * `self-reported`, and nothing reaches `field-verified` from a desk.
 */
export const VERIFICATION_LEVELS = [
  'unreviewed',
  'self-reported',
  'documents-reviewed',
  'field-verified',
] as const;
export type VerificationLevel = (typeof VERIFICATION_LEVELS)[number];

export const VERIFICATION_LABELS: Record<VerificationLevel, string> = {
  unreviewed: 'Not yet reviewed',
  'self-reported': 'Ministry figures only',
  'documents-reviewed': 'Financial documents reviewed',
  'field-verified': 'Independently verified on site',
};

export const VERIFICATION_MEANING: Record<VerificationLevel, string> = {
  unreviewed: 'Listed for research. No figures checked yet.',
  'self-reported':
    'We read the ministry’s own pages and accreditations. We have not found published numbers we can divide, so no cost per outcome is shown.',
  'documents-reviewed':
    'We pulled the spending and outcome counts out of the ministry’s audited statements or annual report ourselves and did the division in public.',
  'field-verified':
    'The outcome counts were checked by someone independent of the ministry. No cause has reached this level yet.',
};

export type DocumentType =
  | 'audited-financials'
  | 'annual-report'
  | 'form-990'
  | 'ministry-website'
  | 'third-party';

export type Source = {
  id: string;
  label: string;
  url: string;
  publisher: string;
  documentType: DocumentType;
  /** ISO date we read the document. */
  retrieved: string;
  fiscalYear?: string;
  /** Set when the document is a PDF we had to read rather than a page a donor can skim. */
  note?: string;
};

export type SpendBasis = 'program-services' | 'total-expenses';

export const SPEND_BASIS_LABELS: Record<SpendBasis, string> = {
  'program-services': 'program spending',
  'total-expenses': 'total spending',
};

/** The numerator of the division we show. */
export type Spend = {
  amount: number;
  basis: SpendBasis;
  fiscalYear: string;
  sourceId: string;
};

/** The denominator of the division we show. */
export type OutcomeCount = {
  amount: number;
  /** Plural noun for the thing counted, e.g. "surgeries performed". */
  label: string;
  fiscalYear: string;
  sourceId: string;
};

export type CostModel = {
  /** Singular, donor-facing: "a surgery for a child". */
  outcome: string;
  /** Plural, donor-facing: "surgeries for children". */
  outcomePlural: string;
  spend: Spend;
  count: OutcomeCount;
  /**
   * `all-program-spend` means every program dollar is charged to this one
   * outcome, which overstates the cost of that outcome whenever the ministry
   * also does other things. Always disclosed to the donor.
   */
  attribution: 'all-program-spend' | 'single-program-line';
  /** Required. The reason this number is an estimate and not a price. */
  caveat: string;
  /** Other defensible denominators, so the reader can see the range. */
  alternates?: { label: string; count: number; note: string }[];
};

/** A cost-per-outcome figure the ministry itself advertises. */
export type MinistryClaim = {
  quote: string;
  sourceId: string;
  /** Dollars per outcome implied by the quote, when it implies one. */
  impliedCostPerOutcome?: number;
  /**
   * What the advertised figure buys. Required alongside
   * `impliedCostPerOutcome` on a cause with no cost model, where there is no
   * documented outcome name to fall back on.
   */
  impliedOutcome?: string;
};

export const SCORE_DIMENSIONS = [
  'gospelCentrality',
  'localLeadership',
  'financialTransparency',
  'outcomeEvidence',
  'costEvidence',
] as const;
export type ScoreDimension = (typeof SCORE_DIMENSIONS)[number];

export const SCORE_DIMENSION_LABELS: Record<ScoreDimension, string> = {
  gospelCentrality: 'Gospel centrality',
  localLeadership: 'Local leadership',
  financialTransparency: 'Financial transparency',
  outcomeEvidence: 'Evidence of outcomes',
  costEvidence: 'Cost per outcome is computable',
};

export const SCORE_DIMENSION_QUESTIONS: Record<ScoreDimension, string> = {
  gospelCentrality:
    'Is the gospel named and central, rather than implied by the ministry’s history?',
  localLeadership:
    'Is the work led and staffed by believers from the place it serves?',
  financialTransparency:
    'Can an outsider find audited statements, a Form 990, and accreditation?',
  outcomeEvidence:
    'Does the ministry publish counts of what was delivered, defined clearly enough to check?',
  costEvidence:
    'Are both a spending figure and an outcome count published, so cost per outcome can be divided out?',
};

/** 0–3, or null when we have not looked. */
export type Score = {
  value: 0 | 1 | 2 | 3 | null;
  note: string;
};

/**
 * Why this work is a biblical mandate, and what we checked doctrinally.
 *
 * A judgement, not a measurement. It carries no claim about spiritual results —
 * that is God's to give and not ours to score (1 Corinthians 3:6–7).
 */
export type BiblicalAlignment = {
  /** The mandate in one or two sentences, in plain words. */
  mandate: string;
  /** The passages the work sits on. Reference plus the words being leaned on. */
  scriptures: { ref: string; text: string }[];
  /** A statement of faith or doctrinal position we actually read. */
  doctrine?: { label: string; sourceId: string };
  /** Honest reservations. Empty only when we genuinely have none. */
  concerns: string[];
};

/**
 * The mechanism that makes a dollar buy more here than the same dollar at home.
 * Each lever is a structural reason, not a quality judgement.
 */
export const ROI_LEVERS = [
  'local-cost-base',
  'local-workers',
  'multiplication',
  'durable-asset',
  'digital-distribution',
  'existing-network',
  'volunteer-leverage',
] as const;
export type RoiLever = (typeof ROI_LEVERS)[number];

export const ROI_LEVER_LABELS: Record<RoiLever, string> = {
  'local-cost-base': 'Low local cost base',
  'local-workers': 'Local workers, not sent staff',
  multiplication: 'Multiplies without more money',
  'durable-asset': 'Builds something that lasts',
  'digital-distribution': 'Costs almost nothing to copy',
  'existing-network': 'Rides an existing network',
  'volunteer-leverage': 'Paid staff unlock unpaid hands',
};

export const ROI_LEVER_EXPLANATIONS: Record<RoiLever, string> = {
  'local-cost-base':
    'Wages, rent, fuel and materials are priced to the local economy, so the same work costs a fraction of what it costs in a high-income country.',
  'local-workers':
    'The work is done by believers who already live there. No relocation, no expatriate salary, no home-country cost of living to cover.',
  multiplication:
    'The thing funded goes on to produce more of itself — a church that plants churches, a leader who trains leaders — so later results are not paid for again.',
  'durable-asset':
    'The money buys a well, a building or a piece of equipment that keeps delivering for years after the gift.',
  'digital-distribution':
    'Once made, each additional copy or viewing costs close to nothing, so cost per person falls as reach grows.',
  'existing-network':
    'Delivery runs through churches, schools or clinics that already exist and are already staffed, so the gift is not paying to build the channel.',
  'volunteer-leverage':
    'A small amount of paid coordination puts a much larger number of unpaid hours to work.',
};

/**
 * Why a dollar goes further here. About the cost of delivering the work, and
 * nothing else — we do not claim a return on a soul.
 */
export type Roi = {
  levers: RoiLever[];
  /** The mechanism in plain words. Required: a lever never stands on its own. */
  reason: string;
  /**
   * A sourced comparison against the same thing bought in a high-cost country.
   * Only set when both sides have a source. Otherwise the reader gets the
   * mechanism and no multiplier, which is usually the honest outcome.
   */
  comparison?: {
    /** What the work costs where it happens, e.g. '$795 per child per year'. */
    here: string;
    /** The high-cost equivalent, with who says so. */
    benchmark: string;
    benchmarkSourceId: string;
    /** Multiple of the benchmark over here. Rendered as 'about Nx'. */
    multiple: number;
    caveat: string;
  };
};

export type Cause = {
  slug: string;
  /** Ministry or fund name as it appears on its own materials. */
  name: string;
  /** Legal name when it differs from the operating name. */
  legalName?: string;
  tagline: string;
  category: Category;
  countries: string[];
  whatTheyDo: string;
  ein?: string;
  /** Accreditations we saw displayed, with the page we saw them on. */
  accreditations: { label: string; sourceId: string }[];
  verification: VerificationLevel;
  /** Why the work is a biblical mandate. Required on every cause. */
  biblicalAlignment: BiblicalAlignment;
  /** Why a dollar goes further here. Required on every cause. */
  roi: Roi;
  costModel?: CostModel;
  ministryClaims: MinistryClaim[];
  scores: Record<ScoreDimension, Score>;
  /** Open questions. Written for a donor, not for us. */
  notVerified: string[];
  /** Things worth knowing that are neither a score nor a gap. */
  notes?: string[];
  /** Partner roster, for funds that regrant to other ministries. */
  portfolio?: { name: string; place: string; work: string }[];
  siteUrl: string;
  giveUrl: string;
  sources: Source[];
};
