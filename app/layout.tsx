import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Link from 'next/link';
import './globals.css';
import { site } from '@/data/site';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  title: `${site.name} — ${site.tagline}`,
  description: site.description,
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <header className="border-b border-black/10">
          <div className="mx-auto flex w-full max-w-5xl flex-wrap items-baseline gap-x-6 gap-y-2 px-5 py-5">
            <Link href="/" className="text-2xl font-semibold tracking-tight">
              {site.name}
            </Link>
            <p className="text-base text-gray-700">{site.tagline}</p>
            <nav className="ml-auto flex gap-5 text-base">
              <Link href="/" className="text-accent underline decoration-accent/30 hover:decoration-accent">
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
          <div className="mx-auto w-full max-w-5xl space-y-3 px-5 py-8 text-base text-gray-700">
            <p className="font-medium text-ink">{site.moneyPolicy}</p>
            <p>
              Eight causes, researched from public documents on 18 September 2026. No site visits and
              no calls yet, so nothing here is more than a desk review — read{' '}
              <Link href="/methodology" className="text-accent underline">
                how we score
              </Link>{' '}
              before you rely on a number.
            </p>
            <p>
              Whatever the arithmetic says, God gives the growth. These pages measure money and
              delivery, not spiritual fruit.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
