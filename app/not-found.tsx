import Link from 'next/link';

/**
 * Our own not-found page, which also closes a real defect. Next's built-in 404
 * carries a `prefers-color-scheme: dark` rule that paints the body black, while
 * the header and footer wrapped around it keep their light-mode ink — so a
 * reader on a dark-mode machine who mistyped a cause URL got 16px text at
 * 1.17:1 against black. Defining this file stops that default from rendering at
 * all, and says something useful instead.
 */
export default function NotFound() {
  return (
    <div className="mx-auto w-full max-w-5xl px-5 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">No page here</h1>
      <div className="longform mt-3">
        <p>
          Either a cause we have not published, or one whose address has changed. Every cause we
          have priced is on the home page.
        </p>
      </div>
      <div className="mt-6 flex flex-wrap gap-5 text-base">
        <Link
          href="/"
          className="font-medium text-accent underline decoration-accent/40 hover:decoration-accent"
        >
          See every cause
        </Link>
        <Link
          href="/methodology"
          className="text-gray-700 underline decoration-gray-400 hover:text-ink"
        >
          How we score
        </Link>
      </div>
    </div>
  );
}
