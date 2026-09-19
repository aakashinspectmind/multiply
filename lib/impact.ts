import type { Category, Cause, CostModel, ScoreDimension, Source } from './types';
import { CATEGORIES, SCORE_DIMENSIONS, VERIFICATION_LEVELS } from './types';

export const GIFT_AMOUNTS = [1, 5, 10, 50, 100, 500] as const;
export const DEFAULT_AMOUNT = 50;
/** Any amount is allowed up to this. A dollar and a million both have to work. */
export const MAX_AMOUNT = 1_000_000;

/**
 * The one place a gift amount becomes trustworthy. Whole dollars only, because
 * every figure downstream is an average and cents imply a precision the
 * underlying documents do not have.
 */
export function clampAmount(value: number): number {
  if (!Number.isFinite(value) || value <= 0) return DEFAULT_AMOUNT;
  return Math.min(Math.floor(value), MAX_AMOUNT);
}

export function sourceById(cause: Cause, id: string): Source {
  const source = cause.sources.find((s) => s.id === id);
  if (!source) {
    throw new Error(`Cause "${cause.slug}" references missing source "${id}"`);
  }
  return source;
}

/** Dollars per outcome, from the two sourced numbers and nothing else. */
export function costPerOutcome(model: CostModel): number {
  if (model.count.amount <= 0) {
    throw new Error('Outcome count must be greater than zero');
  }
  return model.spend.amount / model.count.amount;
}

export type Impact =
  | { kind: 'funds'; whole: number; sharePercent: number }
  | { kind: 'pooled'; giversNeeded: number; sharePercent: number };

/**
 * What a single gift of `amount` does against a cost per outcome.
 *
 * Below the cost of one outcome we do not round up to "1" — we say how many
 * gifts of that size it takes, which is the honest version of the same fact and
 * the whole reason small gifts are worth pooling.
 */
export function impactOfGift(amount: number, perOutcome: number): Impact {
  if (amount <= 0) throw new Error('Gift amount must be greater than zero');
  if (perOutcome <= 0) throw new Error('Cost per outcome must be greater than zero');

  const units = amount / perOutcome;
  const sharePercent = units * 100;
  if (units >= 1) {
    return { kind: 'funds', whole: Math.floor(units), sharePercent };
  }
  return { kind: 'pooled', giversNeeded: Math.ceil(perOutcome / amount), sharePercent };
}

export function formatMoney(value: number): string {
  if (Number.isInteger(value)) {
    return `$${value.toLocaleString('en-US')}`;
  }
  if (value >= 100) {
    return `$${Math.round(value).toLocaleString('en-US')}`;
  }
  return `$${value.toFixed(2)}`;
}

export function formatCount(value: number): string {
  return value.toLocaleString('en-US');
}

export function formatSharePercent(value: number): string {
  if (value >= 10) return `${Math.round(value)}%`;
  if (value >= 1) return `${value.toFixed(1)}%`;
  return `${value.toFixed(2)}%`;
}

/** Donor-facing sentence for one cause at one gift size. */
export function impactSentence(amount: number, model: CostModel): string {
  const impact = impactOfGift(amount, costPerOutcome(model));
  if (impact.kind === 'funds') {
    const noun = impact.whole === 1 ? model.outcome : model.outcomePlural;
    return `${formatMoney(amount)} covers about ${formatCount(impact.whole)} ${noun}.`;
  }
  return `It takes about ${formatCount(impact.giversNeeded)} gifts of ${formatMoney(
    amount,
  )} to cover one ${model.outcome}. Yours is ${formatSharePercent(impact.sharePercent)} of one.`;
}

export type GiftLine = {
  cause: Cause;
  model: CostModel;
  perOutcome: number;
  impact: Impact;
};

/**
 * What one gift does across every cause whose arithmetic is complete, most per
 * dollar first.
 *
 * The order does not change when the amount does — outcomes per dollar is a
 * property of the ministry, not of the gift — but the *lines* do, and the lines
 * are the point: a person wants to know what their $50 buys, not what a
 * denominator is.
 *
 * Causes with nothing to divide are absent rather than last. They have not
 * failed a comparison; they never entered one.
 */
export function rankByGift(causes: Cause[], amount: number): GiftLine[] {
  const lines: GiftLine[] = [];
  for (const cause of causes) {
    if (!cause.costModel) continue;
    const perOutcome = costPerOutcome(cause.costModel);
    lines.push({
      cause,
      model: cause.costModel,
      perOutcome,
      impact: impactOfGift(amount, perOutcome),
    });
  }
  return lines.sort((a, b) => {
    if (a.perOutcome !== b.perOutcome) return a.perOutcome - b.perOutcome;
    return a.cause.name.localeCompare(b.cause.name);
  });
}

/**
 * The most a gift buys in each kind of work — one line per category, in
 * category order.
 *
 * Deliberately not one global winner. Ranking a Bible against a spinal surgery
 * produces a champion that means nothing, because the cheap outcome wins every
 * time and cheapness is not the same as need. Inside a category the comparison
 * is between ministries doing comparable work, which is a question arithmetic
 * can actually help with.
 */
export function bestPerCategory(causes: Cause[], amount: number): GiftLine[] {
  const ranked = rankByGift(causes, amount);
  const best = new Map<Category, GiftLine>();
  for (const line of ranked) {
    if (!best.has(line.cause.category)) best.set(line.cause.category, line);
  }
  return CATEGORIES.map((category) => best.get(category)).filter(
    (line): line is GiftLine => line !== undefined,
  );
}

/** Terse version of what a gift buys, for a dense row rather than a card. */
export function buysPhrase(line: GiftLine): string {
  if (line.impact.kind === 'funds') {
    const noun = line.impact.whole === 1 ? line.model.outcome : line.model.outcomePlural;
    return `${formatCount(line.impact.whole)} ${noun}`;
  }
  return `${formatSharePercent(line.impact.sharePercent)} of one ${line.model.outcome}`;
}

export function scoreTotal(cause: Cause): number {
  return SCORE_DIMENSIONS.reduce((sum, dimension: ScoreDimension) => {
    const value = cause.scores[dimension].value;
    return sum + (value ?? 0);
  }, 0);
}

export const MAX_SCORE = SCORE_DIMENSIONS.length * 3;

export type SortKey = 'review' | 'cost';

/**
 * `review` puts the causes we can actually stand behind first.
 * `cost` is only meaningful inside one category — the UI says so out loud.
 */
export function sortCauses(causes: Cause[], key: SortKey): Cause[] {
  const sorted = [...causes];
  if (key === 'cost') {
    return sorted.sort((a, b) => {
      const aCost = a.costModel ? costPerOutcome(a.costModel) : Infinity;
      const bCost = b.costModel ? costPerOutcome(b.costModel) : Infinity;
      if (aCost !== bCost) return aCost - bCost;
      return a.name.localeCompare(b.name);
    });
  }
  return sorted.sort((a, b) => {
    const rank =
      VERIFICATION_LEVELS.indexOf(b.verification) - VERIFICATION_LEVELS.indexOf(a.verification);
    if (rank !== 0) return rank;
    const score = scoreTotal(b) - scoreTotal(a);
    if (score !== 0) return score;
    return a.name.localeCompare(b.name);
  });
}
