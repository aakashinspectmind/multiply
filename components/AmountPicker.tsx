'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { GIFT_AMOUNTS, MAX_AMOUNT, clampAmount, formatMoney } from '@/lib/impact';

const CHIP = 'min-h-[44px] rounded-lg px-5 pt-2.5 text-lg font-medium ring-1';
const CHIP_ON = `${CHIP} bg-accent text-white ring-accent`;
const CHIP_OFF = `${CHIP} bg-white text-ink ring-black/15 hover:ring-accent`;

/**
 * Presets are links so an amount is shareable and works without JavaScript.
 * The free field is for everything else — any whole dollar amount up to a
 * million, because "what does my gift do" should answer for the gift the person
 * actually has in mind.
 */
export function AmountPicker({ slug, amount }: { slug: string; amount: number }) {
  const router = useRouter();
  const [custom, setCustom] = useState('');
  const isPreset = (GIFT_AMOUNTS as readonly number[]).includes(amount);

  return (
    <div className="flex flex-wrap items-center gap-2">
      {GIFT_AMOUNTS.map((value) => (
        <Link
          key={value}
          href={{ pathname: `/causes/${slug}`, query: { amount: value } }}
          className={value === amount ? CHIP_ON : CHIP_OFF}
        >
          ${value}
        </Link>
      ))}

      {!isPreset && <span className={CHIP_ON}>{formatMoney(amount)}</span>}

      <form
        onSubmit={(event) => {
          event.preventDefault();
          const next = clampAmount(Number(custom));
          setCustom('');
          router.replace(`/causes/${slug}?amount=${next}`, { scroll: false });
        }}
        className="flex min-h-[44px] items-center gap-2 rounded-lg px-3 ring-1 ring-black/15 focus-within:ring-accent"
      >
        <span className="text-lg text-gray-700">$</span>
        <input
          type="number"
          min={1}
          max={MAX_AMOUNT}
          step={1}
          inputMode="numeric"
          value={custom}
          placeholder="other"
          onChange={(event) => setCustom(event.target.value)}
          className="w-28 bg-transparent text-lg outline-none"
          aria-label="Any other amount"
        />
        {custom !== '' && (
          <button type="submit" className="text-base font-medium text-accent">
            Use
          </button>
        )}
      </form>
    </div>
  );
}
