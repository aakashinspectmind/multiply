/**
 * Integrity check for the directory.
 *
 * 1. Every sourceId referenced by a figure resolves to a real source.
 * 2. Every source URL still answers (the whole site rests on those links).
 * 3. Any cause with a cost model actually has both halves of the division.
 *
 * Run: npm run check:sources        (add --offline to skip the network)
 */
import { causes } from '../data/causes.ts';

const offline = process.argv.includes('--offline');
const problems = [];

for (const cause of causes) {
  const ids = new Set(cause.sources.map((source) => source.id));

  const referenced = [
    ...cause.accreditations.map((a) => a.sourceId),
    ...cause.ministryClaims.map((c) => c.sourceId),
    ...(cause.costModel ? [cause.costModel.spend.sourceId, cause.costModel.count.sourceId] : []),
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
}

if (!offline) {
  const checks = causes.flatMap((cause) =>
    [
      ...cause.sources.map((source) => ({ cause: cause.slug, what: source.id, url: source.url })),
      { cause: cause.slug, what: 'giveUrl', url: cause.giveUrl },
      { cause: cause.slug, what: 'siteUrl', url: cause.siteUrl },
    ].map((target) => async () => {
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
    }),
  );

  // Serial on purpose: a few dozen links, and hammering ministry sites is rude.
  for (const check of checks) await check();
}

if (problems.length > 0) {
  console.error(`\n${problems.length} problem(s):\n`);
  for (const problem of problems) console.error(`  ✗ ${problem}`);
  process.exit(1);
}

console.log(`✓ ${causes.length} causes check out${offline ? ' (offline: links not fetched)' : ''}`);
