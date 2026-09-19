<!-- BEGIN:nextjs-agent-rules -->
@AGENTS.md
<!-- END:nextjs-agent-rules -->

# Multiply

Directory of Christian ministries with cost per outcome divided out in public. Next.js 16 App
Router, TypeScript strict, Tailwind 4. No database, no auth, no environment variables, and no
donation processing — gifts go to each ministry's own page.

## Commands

```bash
npm run dev
npm run typecheck
npm test                      # arithmetic + directory integrity (tsx --test)
npm run check:sources         # fetch every source/donate/site URL
npm run build
```

## Rules that are not negotiable

- **No figure without a source.** Every number shown to a donor resolves to a `Source` in
  `data/causes.ts`. See `DATA.md` before touching the data.
- **No invented numbers, no fallbacks.** A missing denominator renders as "nothing here to divide".
  Do not estimate, interpolate, or carry a figure over from a prior year.
- **Caveats ship with the figure.** `costModel.caveat` is required and is rendered, not hidden
  behind a tooltip.
- **Never claim spiritual outcomes.** The site measures money and delivery. Conversions,
  discipleship and fruit are God's work and are out of scope — `/methodology` says so and should
  keep saying so.
- **No payment custody.** Do not add checkout, pooled funds, or anything that receives a donor's
  money without nonprofit counsel first.

## Style

- Accessibility first: body copy ≥ `text-base`, secondary text ≥ `text-gray-700`, hit targets
  ≥ 44px. Many readers are older donors.
- Terse copy. The honesty notes are load-bearing; everything else should be shorter.
