import type { Metadata } from 'next';
import { Geist, Geist_Mono, Source_Serif_4 } from 'next/font/google';
import Link from 'next/link';
import './globals.css';
import { causes } from '@/data/causes';
import { lastRetrieved } from '@/lib/impact';
import { site } from '@/data/site';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });
/**
 * The reading face. Source Serif has a tall x-height and sturdy stems, which is
 * what makes it hold up at length and on the screens of readers who are not
 * twenty-five — the same reason the body sizes here start at 19px.
 */
const sourceSerif = Source_Serif_4({ variable: '--font-source-serif', subsets: ['latin'] });

export const metadata: Metadata = {
  title: `${site.name} — ${site.tagline}`,
  description: site.description,
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <header className="border-b border-black/10">
          <div className="mx-auto flex w-full max-w-5xl items-baseline gap-x-6 px-5 py-5">
            <Link href="/" className="font-serif text-2xl font-semibold tracking-tight">
              {site.name}
            </Link>
            {/* On a phone this wrapped to its own line and pushed the nav to a third
                row, spending a quarter of the screen before any content. The hero
                makes the same claim in bigger type. */}
            <p className="hidden text-base text-gray-700 md:block">{site.tagline}</p>
            <nav className="ml-auto flex gap-5 text-base">
              <Link
                href="/"
                className="text-accent underline decoration-accent/30 hover:decoration-accent"
              >
                Causes
              </Link>
              <Link
                href="/methodology"
                className="text-accent underline decoration-accent/30 hover:decoration-accent"
              >
                How we score
              </Link>
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="mt-16 border-t border-black/10 bg-white/50">
          <div className="mx-auto w-full max-w-5xl px-5 py-8">
            <div className="measure space-y-3 text-base text-gray-700">
              <p className="font-medium text-ink">{site.moneyPolicy}</p>
              <p>
                {causes.length} causes, researched from public documents, most recently read on{' '}
                {lastRetrieved(causes)}. No site visits and no calls yet, so nothing here is more
                than a desk review — read{' '}
                <Link href="/methodology" className="text-accent underline">
                  how we score
                </Link>{' '}
                before you rely on a number.
              </p>
              <p>
                Whatever the arithmetic says, God gives the growth. These pages measure money and
                delivery, not spiritual fruit.
              </p>
              <p>
                A figure here wrong, or a ministry missing?{' '}
                <a href={`mailto:${site.contact}`} className="text-accent underline">
                  {site.contact}
                </a>{' '}
                — a correction that comes with a source gets published.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
