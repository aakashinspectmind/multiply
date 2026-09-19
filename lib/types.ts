/**
 * Data model for the cause directory.
 *
 * Rule that shapes everything here: a number is only shown to a donor if we can
 * point at the document it came from. Every figure is attached to a `Source`,
 * and anything we could not verify is written down explicitly in `notVerified`.
 */

export const CATEGORIES = [
  'scripture',
  'church-planting',
  'persecuted-church',
  'health',
  'water',
  'justice',
  'media',
  'children',
  'church-fund',
] as const;
export type Category = (typeof CATEGORIES)[number];

export const CATEGORY_LABELS: Record<Category, string> = {
  scripture: 'Scripture & discipleship',
  'church-planting': 'Church planting',
  'persecuted-church': 'Persecuted church',
  health: 'Health & surgery',
  water: 'Safe water',
  justice: 'Justice & anti-trafficking',
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
