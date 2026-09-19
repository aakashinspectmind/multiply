/**
 * What the front page actually says, one line per kind of work.
 *
 * Run this after adding or editing any cost model. The board shows the
 * cheapest unit in each category, which means a soft denominator does not sit
 * quietly on one cause page — it heads the category, in the largest type on the
 * site. Every headline fixed so far was found this way: Literacy & Evangelism
 * International at $11.37 a reader its partners taught, AMG at $40.42 a
 * "student impacted" with no definition, Thirdmill at $37.73 a student who may
 * have watched one video, Medical Teams at $11.15 a person who had access to a
 * clinic they never entered. Read the outcome column and ask whether the
 * ministry's own money delivered that thing. See rule 5 in DATA.md.
 */
import { causes } from '@/data/causes';
import { bestPerCategory, formatMoney } from '@/lib/impact';
import { CATEGORY_LABELS } from '@/lib/types';

for (const line of bestPerCategory(causes, 50)) {
  console.log(
    CATEGORY_LABELS[line.cause.category].padEnd(32),
    formatMoney(line.perOutcome).padStart(9),
    line.cause.slug.padEnd(34),
    line.model.outcome,
  );
}
