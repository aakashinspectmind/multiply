/**
 * What the directory currently contains, and where ministry advertising and
 * ministry financials disagree.
 *
 * This exists so the prose in README.md and on the methodology page can be
 * checked against the data instead of remembered. Run it after adding causes;
 * if a sentence in the README no longer matches the output, the sentence is
 * wrong.
 *
 * Run: npm run stats
 */
import { causes } from '../data/causes';
import { costPerOutcome, formatMoney } from '../lib/impact';
import { CATEGORY_LABELS, type Category, VERIFICATION_LABELS } from '../lib/types';

const withModel = causes.filter((cause) => cause.costModel);
const advertising = causes.filter((cause) =>
  cause.ministryClaims.some((claim) => claim.impliedCostPerOutcome !== undefined),
);

type Gap = { slug: string; claimed: number; ours: number; ratio: number };
const gaps: Gap[] = [];
for (const cause of causes) {
  if (!cause.costModel) continue;
  const ours = costPerOutcome(cause.costModel);
  // Only claims about the same unit — the rule the cause pages use. A price per
  // Bible and a cost per evangelist-year are both true and do not check each
  // other. The cheapest comparable figure is the one a donor will have seen.
  const claims = cause.ministryClaims
    .filter((claim) => claim.sameUnitAsCostModel)
    .map((claim) => claim.impliedCostPerOutcome)
    .filter((value): value is number => value !== undefined);
  if (claims.length === 0) continue;
  const claimed = Math.min(...claims);
  gaps.push({ slug: cause.slug, claimed, ours, ratio: ours / claimed });
}
gaps.sort((a, b) => b.ratio - a.ratio);

const understated = gaps.filter((gap) => gap.ratio >= 2);
const overstated = gaps.filter((gap) => gap.ratio <= 0.5);

const byCategory = new Map<Category, number>();
for (const cause of causes)
  byCategory.set(cause.category, (byCategory.get(cause.category) ?? 0) + 1);

const byVerification = new Map<string, number>();
for (const cause of causes) {
  byVerification.set(cause.verification, (byVerification.get(cause.verification) ?? 0) + 1);
}

const sum = (pick: (cause: (typeof causes)[number]) => number) =>
  causes.reduce((total, cause) => total + pick(cause), 0);

console.log(`causes                     ${causes.length}`);
console.log(`cost per outcome divided   ${withModel.length}`);
console.log(`nothing here to divide     ${causes.length - withModel.length}`);
console.log(`advertise a cost figure    ${advertising.length}`);
console.log(`  …and can be checked      ${gaps.length}`);
console.log(`  advertise ≥2× too cheap  ${understated.length}`);
console.log(`  advertise ≥2× too dear   ${overstated.length}`);
console.log(`countries and regions      ${new Set(causes.flatMap((c) => c.countries)).size}`);
console.log(`sources cited              ${sum((c) => c.sources.length)}`);
console.log(`open questions written up  ${sum((c) => c.notVerified.length)}`);
console.log(`doctrinal concerns raised  ${sum((c) => c.biblicalAlignment.concerns.length)}`);

console.log('\nreview depth');
for (const [level, count] of byVerification) {
  console.log(`  ${VERIFICATION_LABELS[level as keyof typeof VERIFICATION_LABELS]}: ${count}`);
}

console.log(`\ncategories (${byCategory.size})`);
for (const [category, count] of [...byCategory].sort((a, b) => b[1] - a[1])) {
  console.log(`  ${CATEGORY_LABELS[category]}: ${count}`);
}

console.log('\nadvertised vs divided, widest gap first');
for (const gap of gaps) {
  const direction = gap.ratio >= 1 ? 'cheaper than' : 'dearer than';
  const multiple = gap.ratio >= 1 ? gap.ratio : 1 / gap.ratio;
  console.log(
    `  ${gap.slug.padEnd(38)} advertises ${formatMoney(gap.claimed).padStart(8)}, ` +
      `we divide out ${formatMoney(gap.ours).padStart(8)}  (${multiple.toFixed(1)}× ${direction} its own books)`,
  );
}
