# Multiply

**Worship him with your money.** That is the mission. Everything below is the instrument.

A directory of Christian ministries where cost per outcome is divided out in public — the ministry's
own audited spending over its own reported outcome count, both halves linked to the document they
came from, and left blank when those numbers do not exist. Giving is worship, worship deserves care,
and care here means arithmetic a giver can check.

Which cuts both ways, and the second way is the one to keep hold of when editing: the board ranks
cost per outcome, so it is permanently one careless sentence away from implying that a cheaper
outcome is a holier gift. It is not. Nothing computed here can weigh what a gift costs the person
giving it, and that was the only quantity Jesus was counting in Mark 12:41–44. Copy that blurs this
is a bug, not a tone question.

Live pages: the directory and gift board (`/`), one page per cause (`/causes/[slug]`), and the method
(`/methodology`).

## Why it is built this way

"See what $20 does" cannot be sourced from ministry marketing. Run `npm run stats` for the current
count; as of 19 September 2026, of 94 ministries researched across 131 countries, on 668 cited
documents:

- **66** publish a spending figure and an outcome count from the same year that can be divided into
  each other. **28** do not, and those pages say so instead of estimating.
- **33** advertise a cost per outcome. Only **17** of those advertise it per the same unit we can
  divide out — and of those 17, **6** advertise a figure at least twice as cheap as their own books
  support. Christian Health Service Corps advertises "less than $100 per surgery"; its own programme
  budget over its own surgical count is $4,098.
- Exactly **one** advertised price survives contact with the ministry's own filing. African Mission
  Healthcare publishes $430 per sponsored surgery; its Form 990 reports $1,404,561 for the programme
  and 3,294 surgeries in the same return, which is $426. Nothing else in the directory reconciles
  like that.
- The remaining 16 advertise a figure about something else entirely. Asia Harvest advertises $3.00
  per Bible printed and we divide out $833 per evangelist supported for a year. Both are true and
  neither checks the other, so the site refuses to compare them. That refusal is a design decision
  with a flag behind it — see `sameUnitAsCostModel` in `lib/types.ts`.

Some of what turns up is worse than optimistic. Shepherds Global Classroom's only published outcome
measure is a download counter on its homepage, and the page ships a JavaScript function named
`fakeSeed()` that synthesises the opening value from the hours elapsed since 1 January plus a random
offset, with a comment instructing it to keep the synthesised number rather than display a zero.

International Christian Concern's annual report prints its 2025 functional expenses as programme
$3,598,260.87, general and administrative $388,448.62 and fundraising $102,223.32. Those are exactly
88.000%, 9.500% and 2.500% of the $4,088,932.81 total, to the cent, and they sum to it exactly.
Measured expenses do not land on three round percentages at once — that is a total apportioned by
target ratio and presented as measurement, and ECFA's audited splits for the same ministry are not
round in any year (programme was 80.9% in 2024). So this page divides by total expenses rather than
the programme line it publishes, which is the less flattering of the two, and the programme-based
figure sits in the alternates where the reader can see both.

The harder problem is subtler, and it is ours rather than the ministries'. A ministry's headline count
is almost always its softest — reach, not delivery — and the gift board picks the cheapest unit in
each category, so a soft denominator does not sit quietly on one cause page. It heads the category.
Eight cost models have been rebuilt for this reason. Literacy & Evangelism International was $11.37
per new reader taught by partner organisations whose budgets are nowhere in the numerator, and is now
$813 per teacher it trained itself. AMG was $40.42 per undefined "student impacted" and is now $72 per
child in a Bible Club it runs. Thirdmill was $37.73 per student a partner said was watching, and is
now $1,341 per student enrolled in its own Institute. Medical Teams was $11.15 per person with
_access_ to a clinic, and is now $703 per child actually treated for malnutrition. Also: Every Home
for Christ, Bible League, Growing Hope Globally and African Mission Healthcare. Every displaced
headline is still on its page as a sourced alternate, so the range stays visible — and
`npm run board` prints what the front page currently claims, which is the check that found all eight.

African Mission Healthcare is the one that ran the other way, and it is the reason the rule is about
pairing rather than about ministries being optimistic. The page used to divide all $11.7 million of
programme spending by all 5,942 surgeries, print $1,962, and flag the ministry's advertised $430 as
"4.6× cheaper than its own books" — while its own `notVerified` list explained that the gap is the
partner hospital's century-old subsidy and not an overstatement. Ninety-six percent of that budget is
grants to hospitals with their own surgeons and their own donors. Dividing the named SAFE line by the
SAFE surgeries instead gives $426, which agrees with the advertised price to within 1%. We were the
ones getting it wrong.

Two more of our own errors, found by re-reading pages rather than by adding new ones. This repo told
you for months that TWR publishes no outcome counts; it publishes them at `twr.org/our-impact`, and
the page now quotes three of them and says instead why they still cannot be divided — the counts are
the global network's, the only financial figure that exists is the US entity's, and the years do not
line up. And the page for The 500K said the name was a goal of 500,000 full-time workers. It is not:
the only page on the site that explains the name says there are "as many as 500,000 villages in India
with no Christian presence… 500,000 Churches. One for each of the nation's unreached villages." A
directory that exists to check other people's numbers has to check its own claims about them too.

All eighteen kinds of work now price at least two ministries, which was not true earlier and is worth
recording as a property of the board rather than a milestone. Two categories used to print no row at
all — the persecuted church and church-led funds — and two more called a single entrant the furthest
its money goes. The board says both things out loud when they are true, in `unpricedCategories` and
`soleCandidateCategories`, and the methodology page derives its counts from the directory rather than
stating them in prose. All three admissions currently render nothing. They are kept because the
condition they describe is the normal state of a growing directory, not an anomaly that has now been
fixed, and a disclosure that has to be remembered is a disclosure that will be forgotten.

So the product is not a payment platform. It is the arithmetic, shown:

- **Every figure has a source.** No number renders without a `sourceId` pointing at an audited
  statement, annual report, Form 990 or ministry page, with the date it was read.
- **No figure is invented.** A cause with no published spending-and-count pair shows "nothing here
  to divide" rather than a guess.
- **Any amount, from $1 to $1,000,000.** Below the cost of one outcome the site says how many gifts
  of that size it takes rather than rounding up to one — the pooling that makes small gifts add up,
  stated accurately.
- **Furthest is not best, and the site says so.** The gift board shows the furthest-going ministry
  _per kind of work_, never one global winner, because a single ranking hands first place to the
  cheapest unit and the cheapest unit is a meal, not a heart operation. Cost per outcome only
  compares between ministries doing the same kind of thing.
- **Every cause says why it is the church's work, and why a dollar goes further.** The biblical
  mandate with the passages quoted, plus the mechanism behind the leverage — local wages, a durable
  asset, multiplication — and the one number that is sourceable everywhere: World Bank national
  income per person against the United States. 370× lower in Burundi, 148× in Malawi, 79× in Uganda.
- **We never touch the money.** Give buttons go to the ministry's own donation page. No custody, no
  cut, no international-transfer or tax-receipt exposure.

## Run it

```bash
npm install
npm run dev                      # http://localhost:3000
npm run typecheck                # tsc --noEmit
npm test                         # arithmetic + directory integrity
npm run check:sources            # fetch every source, donate and site URL (serial per host)
npm run check:sources:offline    # same integrity rules, no network
npm run stats                    # what the directory holds, and where claims and books disagree
npm run board                    # what the front page claims: cheapest unit per kind of work
npm run build
```

`check:sources` is the one that matters. If a ministry moves a PDF, the page that cites it is lying
until the link is fixed.

Two data files are generated — never hand-edit them:

```bash
npm run causes:index             # data/causes/index.ts, from the files in data/causes
npm run cost-base                # data/cost-base.ts, from the World Bank API (207 countries)
```

`causes:index` also runs as `prebuild`, so a cause file cannot ship without being wired into the
directory. It was possible to forget, and it happened, and then a researched ministry sat in the
repo invisible to every visitor.

## Layout

| Path                        | What                                                                                        |
| --------------------------- | ------------------------------------------------------------------------------------------- |
| `data/causes/`              | The directory. One file per cause — every figure, every source.                             |
| `data/causes/index.ts`      | Generated manifest. `npm run causes:index` after adding a file.                             |
| `data/cost-base.ts`         | Generated. World Bank income per person, plus the region names that deliberately have none. |
| `data/site.ts`              | Name, tagline, money policy. Rename the project here.                                       |
| `lib/types.ts`              | The data contract, including what each verification level is allowed to mean.               |
| `lib/impact.ts`             | The arithmetic: cost per outcome, gift impact, pooling, ranking, sorting.                   |
| `lib/roi.ts`                | Cost-base ratios against the benchmark country.                                             |
| `components/GiftBoard.tsx`  | The furthest an amount goes, one line per kind of work.                                     |
| `components/StatementLine.tsx` | One label-and-figure line of a division. Shared so columns of money cannot drift apart.  |
| `app/globals.css`           | The type system. Read the next section before changing prose styling.                        |
| `scripts/check-sources.mjs` | Integrity and link checks.                                                                  |
| `app/methodology/page.tsx`  | Scoring rubric and the limits we state out loud.                                            |

Adding or editing a cause: read `DATA.md` first.

## Type and layout

Three typefaces, one job each, so a page says what kind of thing you are reading before you read
it. Serif is the argument — headings and running prose. Sans is the instruments — nav, buttons,
labels, table rows, badges. Mono is the figures, wherever a number is meant to be checked.

Two classes carry it, both in `app/globals.css`:

- **`.longform`** on a wrapper, not a paragraph. Sets the reading face, 19px, and a 68ch measure on
  every `p` and `li` inside. Use it for any block of argument. It replaced about twenty-five copies
  of the same utility string, and it is why prose is consistent.
- **`.measure`** for prose that is not inside a `.longform` — the 68ch limit alone.

Three things that will bite:

- **Do not put `.measure` on an element that already has a `max-w-*` utility.** Tailwind 4 orders
  utilities after components, so the utility wins and the measure silently does nothing. Nest a div.
- **Body text floors are load-bearing, not taste.** Readers are largely older church and
  construction professionals. Never below `text-base` for anything read, never lighter than
  `text-gray-600` for secondary prose. `/tmp` audit aside, the rule is in `CLAUDE.md`.
- **Prose colour is `--color-prose`, not `var(--color-gray-800)`.** Tailwind 4 only emits the theme
  variables it sees used, so reading a Tailwind grey from CSS breaks the moment the last utility
  using it leaves the codebase — and an undefined var drops the whole declaration with no error.

## What is deliberately not here

- **No donation processing.** Adding custody means nonprofit counsel, sanctions screening,
  international grant compliance and tax receipts. Prove the directory is useful first.
- **No pooled fund, no recurring portfolio.** Both need a fiscal sponsor or a qualified charity
  behind them.
- **No accounts, no database.** The dataset is a TypeScript file, reviewed like code.
- **No claims about spiritual fruit.** Money and delivery are measurable; the harvest is God's.
- **No global "best cause" ranking.** See above. The arithmetic is not the discernment.
- **No ministries whose own case is not that a dollar goes further.** Hope For New York was
  researched, written and then dropped, and it is the useful precedent. Its evidence was the best in
  the church-led fund category — Schedule I of its FY2025 return names all 46 grantees with cash and
  non-cash amounts summing exactly to $2,230,008 — and its own page said why it did not belong:
  "there is no multiplier to claim and one reason for it: all of this money is spent in New York City,
  where a dollar buys less than almost anywhere on earth." A directory organised around cost per
  outcome would have listed it as a place to send money for cost reasons it does not claim. Good
  documents are not the admission criterion.

## Next, in order

1. **Close the reconciliations already flagged** — CURE's annual report vs its Form 990, Bible
   League's $2.50 Bible claim against its own materials count, and whether The Timothy Initiative
   publishes audited financials anywhere at all. These need phone calls, not more searching. Add to
   the list: ask International Christian Concern how three functional-expense figures came to be
   exactly 88.000%, 9.500% and 2.500% of the total, and ask Global Training Network for the count of
   pastors trained in 2025 in something other than a fundraising letter — it is the only source for a
   number that now heads a category, and it is a rounded floor.
2. **Ask each ministry to define its outcome unit in writing.** "People engaged in God's Word",
   "students impacted", "active language engagement" and "people reached" are the load-bearing
   words, and not one of them is defined by the ministry that publishes it.
3. **Two known rule-5 violations with no fix available from the documents.** Food for the Hungry
   publishes three counts — 1,754,292 "reached", 10,222,078 "served", 1,117,833 with "better access
   to" — and not one is a thing delivered. Lifesong for Orphans has only two undated website
   counters, and its own page says they cannot be combined. Neither page can be fixed by choosing a
   different number already on it; both need the ministry to answer. Until then they are the two
   cost models on the site that the site's own rule disallows.
4. **A judgement call for a human: "active language engagement."** The Seed Company and Wycliffe USA
   both divide by it, and it is undefined. It counts translation projects their money funds for a
   year, which is the same shape as "evangelist-year" or "missionary-year" — units this directory
   accepts throughout — so they were left alone. But the word "engagement" is the same word the rule
   was written against, and the Bible-translation board line moves roughly 18× depending on the
   answer ($49,316 per engagement, or $906,700 per first Scripture completed). Decide it on purpose.
5. **Type the denominator.** Rule 5 in `DATA.md` is currently enforced by reading `npm run board` and
   thinking, which is how the eight soft headlines got in. A required
   `denominator: 'delivered' | 'reach'` on `CostModel` would let a test refuse a `reach` unit as a
   primary figure outright. It means revisiting all 66 cost models, so it is a deliberate next step
   rather than a patch.
6. **Get one number field-verified.** Nothing in the directory is above `documents-reviewed`, and
   nothing reaches `field-verified` from a desk.
7. **Then, and only then, consider taking gifts.**

Deploy is a stock Next.js build (Vercel, Amplify, anywhere). Nothing to configure — there are no
environment variables and no external services.
