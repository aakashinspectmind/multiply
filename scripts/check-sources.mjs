/**
 * Integrity check for the directory.
 *
 * 1. Every sourceId referenced by a figure resolves to a real source.
 * 2. Every source URL still answers (the whole site rests on those links).
 * 3. Any cause with a cost model actually has both halves of the division.
 * 4. Every cause states its biblical mandate and why a dollar goes further,
 *    and every country it names has a cost base to compare.
 *
 * Run: npm run check:sources        (add --offline to skip the network)
 */
import { causes } from '../data/causes.ts';
import { COST_BASE_SOURCE } from '../data/cost-base.ts';
import { ROI_LEVERS } from '../lib/types.ts';
import { costBaseRows } from '../lib/roi.ts';

const offline = process.argv.includes('--offline');
const problems = [];

for (const cause of causes) {
  const ids = new Set(cause.sources.map((source) => source.id));

  const referenced = [
    ...cause.accreditations.map((a) => a.sourceId),
    ...cause.ministryClaims.map((c) => c.sourceId),
    ...(cause.costModel ? [cause.costModel.spend.sourceId, cause.costModel.count.sourceId] : []),
    ...(cause.biblicalAlignment.doctrine ? [cause.biblicalAlignment.doctrine.sourceId] : []),
    ...(cause.roi.comparison ? [cause.roi.comparison.benchmarkSourceId] : []),
  ];
  for (const id of referenced) {
    if (!ids.has(id)) problems.push(`${cause.slug}: references unknown source "${id}"`);
  }

  for (const source of cause.sources) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(source.retrieved)) {
      problems.push(`${cause.slug}: source "${source.id}" has a bad retrieved date`);
    }
  }

  if (cause.costModel) {
    const { spend, count, caveat } = cause.costModel;
    if (!(spend.amount > 0)) problems.push(`${cause.slug}: spend must be positive`);
    if (!(count.amount > 0)) problems.push(`${cause.slug}: outcome count must be positive`);
    if (!caveat.trim()) problems.push(`${cause.slug}: cost model needs a caveat`);
    if (cause.verification === 'self-reported' || cause.verification === 'unreviewed') {
      problems.push(
        `${cause.slug}: has a cost model but is marked "${cause.verification}" — a division we did ourselves is at least documents-reviewed`,
      );
    }
  } else if (cause.notVerified.length === 0) {
    problems.push(`${cause.slug}: no cost model and no gaps listed — say what is missing`);
  }

  for (const claim of cause.ministryClaims) {
    if (!claim.quote.trim()) problems.push(`${cause.slug}: a ministry claim has no quote`);
    // With no cost model there is no documented outcome name to fall back on,
    // so an advertised figure has to name what it buys.
    if (claim.impliedCostPerOutcome && !cause.costModel && !claim.impliedOutcome) {
      problems.push(
        `${cause.slug}: claim "${claim.quote.slice(0, 40)}…" implies a unit cost but names no outcome`,
      );
    }
  }

  const { mandate, scriptures } = cause.biblicalAlignment;
  if (!mandate.trim()) problems.push(`${cause.slug}: biblicalAlignment needs a mandate`);
  if (scriptures.length === 0) {
    problems.push(`${cause.slug}: biblicalAlignment needs at least one passage`);
  }
  for (const scripture of scriptures) {
    if (!scripture.ref.trim() || !scripture.text.trim()) {
      problems.push(`${cause.slug}: a scripture is missing its reference or its text`);
    }
  }

  const { levers, reason } = cause.roi;
  if (!reason.trim()) problems.push(`${cause.slug}: roi needs a reason, not just levers`);
  if (levers.length === 0) problems.push(`${cause.slug}: roi needs at least one lever`);
  for (const lever of levers) {
    if (!ROI_LEVERS.includes(lever)) problems.push(`${cause.slug}: unknown roi lever "${lever}"`);
  }
  if (new Set(levers).size !== levers.length) {
    problems.push(`${cause.slug}: roi levers are duplicated`);
  }

  // Throws on a country with no cost base and no REGIONS entry — usually a typo.
  try {
    costBaseRows(cause.countries);
  } catch (error) {
    problems.push(`${cause.slug}: ${error.message}`);
  }
}

async function fetchOk(target) {
  try {
    const response = await fetch(target.url, {
      method: 'GET',
      headers: { 'user-agent': 'multiply-source-check' },
      signal: AbortSignal.timeout(30_000),
    });
    if (!response.ok) {
      problems.push(`${target.cause}: ${target.what} → HTTP ${response.status} ${target.url}`);
    }
  } catch (error) {
    problems.push(`${target.cause}: ${target.what} → ${error.message} ${target.url}`);
  }
}

if (!offline) {
  const targets = [
    { cause: '(site)', what: 'cost base source', url: COST_BASE_SOURCE.url },
    ...causes.flatMap((cause) => [
      ...cause.sources.map((source) => ({ cause: cause.slug, what: source.id, url: source.url })),
      { cause: cause.slug, what: 'giveUrl', url: cause.giveUrl },
      { cause: cause.slug, what: 'siteUrl', url: cause.siteUrl },
    ]),
  ];

  // Serial on purpose: a few dozen links, and hammering ministry sites is rude.
  for (const target of targets) await fetchOk(target);
}

if (problems.length > 0) {
  console.error(`\n${problems.length} problem(s):\n`);
  for (const problem of problems) console.error(`  ✗ ${problem}`);
  process.exit(1);
}

console.log(`✓ ${causes.length} causes check out${offline ? ' (offline: links not fetched)' : ''}`);
