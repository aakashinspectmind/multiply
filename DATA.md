# Adding or changing a cause

`data/causes.ts` is the product. Treat an edit to it like an edit to a financial statement.

## Rules

1. **Every number carries a `sourceId`.** If you cannot link the document, the number does not go
   in.
2. **Quotes are verbatim.** `ministryClaims[].quote` is copied character for character, including
   the ministry's own capitalisation and punctuation. Never paraphrase a claim you are about to
   check.
3. **A gap goes in `notVerified`, never into a figure.** Missing denominator, undefined unit,
   unexplained variance between two documents — write it down in donor-facing language. These lists
   are the most valuable part of the page.
4. **`costModel` requires a `caveat`.** Say what the division over-attributes. Every cost per
   outcome built from all program spending is an upper bound, and the page must say so.
5. **Verification level is earned, not assigned.**
   - `self-reported` — you read the ministry's pages. No division shown.
   - `documents-reviewed` — you pulled spending and counts out of an annual report, audited
     statement or Form 990 yourself.
   - `field-verified` — someone independent of the ministry counted a sample of the outcome. No
     cause has reached this. Do not use it without naming who verified and how.
6. **Scores are a desk review.** 0–3 per dimension with a note explaining the number. If you did not
   look, use `null`, not `0`. `0` is a finding; `null` is an absence.
7. **`retrieved` is the date you actually opened the document**, `YYYY-MM-DD`.

## Adding one

```bash
# 1. Find the money. In order of preference:
#    audited financial statements → annual report → Form 990 (ProPublica Nonprofit Explorer)
# 2. Find a count of what was delivered in the same fiscal year.
# 3. If both exist, add a costModel and set verification to documents-reviewed.
#    If not, leave costModel out and list what is missing in notVerified.
npm run check:sources:offline   # structural rules
npm test                        # every sourceId resolves, arithmetic holds
npm run check:sources           # every URL still answers
```

Large PDFs are easiest to read with `pdftotext -layout report.pdf report.txt`. Note in the source's
`note` field when a figure came out of a chart image rather than printed text — that happened with
CURE's cost-per-surgery trend, and a reader deserves to know.

## Questions worth asking a ministry directly

These are the ones public documents almost never answer:

- How do you define the unit you count? Does a person counted twice in a year count twice?
- What does your advertised per-unit price include, and what does it exclude?
- What share of this year's spending bought capacity for future years rather than this year's
  outcomes?
- Who outside your organisation has checked the outcome count?
- For water, buildings and equipment: what share is still working after three to five years?

An answer in writing moves a cause up a level. Silence is also information, and belongs in
`notVerified`.
