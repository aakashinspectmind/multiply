# Multiply

A directory of Christian ministries where cost per outcome is divided out in public — the
ministry's own audited spending over its own reported outcome count, with both halves linked to the
document they came from, and left blank when those numbers do not exist.

Live pages: the cause list (`/`), one page per cause (`/causes/[slug]`), and the method
(`/methodology`).

## Why it is built this way

The premise — "see what $20 does" — cannot be sourced from ministry marketing. Of ten
ministries researched on 18 September 2026, **four** advertise something resembling a cost per
outcome, and only **two** of those survive contact with their own financials. One advertises a
figure about 4× cheaper than its own annual report implies — 8× if you divide by the Bibles it
actually reports placing. The gap between what ministries advertise and what their financial
statements support is the thing worth building around.

So the product is not a payment platform. It is the arithmetic, shown:

- **Every figure has a source.** No number renders without a `sourceId` pointing at an audited
  statement, annual report, Form 990 or ministry page, with the date it was read.
- **No figure is invented.** A cause with no published spending-and-count pair shows
  "nothing here to divide" rather than a guess. Six of ten currently do.
- **Any amount, from $1 to $1,000,000.** Below the cost of one outcome the site says how many gifts
  of that size it takes rather than rounding up to one — the pooling that makes small gifts add up,
  stated accurately.
- **Every cause says why it is the church's work, and why a dollar goes further.** The biblical
  mandate with the passages quoted, plus the mechanism behind the leverage — local wages, a durable
  asset, multiplication — and the one number that is sourceable everywhere: World Bank national
  income per person against the United States. 148× lower in Malawi, 79× in Uganda.
- **We never touch the money.** Give buttons go to the ministry's own donation page. No custody, no
  cut, no international-transfer or tax-receipt exposure.

## Run it

```bash
npm install
npm run dev                      # http://localhost:3000
npm run typecheck                # tsc --noEmit
npm test                         # arithmetic + directory integrity
npm run check:sources            # fetch every source, donate and site URL (~45 requests, serial)
npm run check:sources:offline    # same integrity rules, no network
npm run build
```

`check:sources` is the one that matters. If a ministry moves a PDF, the page that cites it is
lying until the link is fixed.

## Layout

| Path | What |
| --- | --- |
| `data/causes.ts` | The directory. Every cause, every figure, every source. |
| `data/cost-base.ts` | World Bank income per person, and the region names that deliberately have none. |
| `data/site.ts` | Name, tagline, money policy. Rename the project here. |
| `lib/types.ts` | The data contract, including what each verification level is allowed to mean. |
| `lib/impact.ts` | The arithmetic: cost per outcome, gift impact, pooling, sorting. |
| `lib/roi.ts` | Cost-base ratios against the benchmark country. |
| `scripts/check-sources.mjs` | Integrity and link checks. |
| `app/methodology/page.tsx` | Scoring rubric and the limits we state out loud. |

Adding or editing a cause: read `DATA.md` first.

## What is deliberately not here

- **No donation processing.** Adding custody means nonprofit counsel, sanctions screening,
  international grant compliance and tax receipts. Prove the directory is useful first.
- **No pooled fund, no recurring portfolio.** Both need a fiscal sponsor or a qualified charity
  behind them.
- **No accounts, no database.** The dataset is a TypeScript file, reviewed like code.
- **No claims about spiritual fruit.** Money and delivery are measurable; the harvest is God's.

## Next, in order

1. **Close the three reconciliations already flagged** — CURE's annual report vs its Form 990, Bible
   League's $2.50 Bible claim, and whether TTI publishes audited financials anywhere at all.
2. **Ask each ministry to define its outcome unit in writing.** "People engaged in God's Word" and
   "people served" are the load-bearing words, and neither is defined by the ministry that
   publishes it.
3. **Add the ministries this version is missing** — small indigenous ministries with the lowest
   costs and the least documentation. They are the reason a directory like this needs a human
   operator, not a scraper.
4. **Then, and only then, consider taking gifts.**

Deploy is a stock Next.js build (Vercel, Amplify, anywhere). Nothing to configure — there are no
environment variables and no external services.
