'use client';

import { useMemo, useState } from 'react';
import { CauseCard } from './CauseCard';
import { GiftBoard } from './GiftBoard';
import {
  DEFAULT_AMOUNT,
  GIFT_AMOUNTS,
  MAX_AMOUNT,
  clampAmount,
  formatMoney,
  sortCauses,
  type SortKey,
} from '@/lib/impact';
import { CATEGORY_LABELS, type Cause, type Category } from '@/lib/types';

const SORT_LABELS: Record<SortKey, string> = {
  review: 'How far our review got',
  cost: 'Lowest cost per outcome',
};

export function CauseExplorer({ causes }: { causes: Cause[] }) {
  const [amount, setAmount] = useState<number>(DEFAULT_AMOUNT);
  const [custom, setCustom] = useState('');
  const [category, setCategory] = useState<Category | 'all'>('all');
  const [sort, setSort] = useState<SortKey>('review');

  const categories = useMemo(
    () =>
      Array.from(new Set(causes.map((c) => c.category))).sort((a, b) =>
        CATEGORY_LABELS[a].localeCompare(CATEGORY_LABELS[b]),
      ),
    [causes],
  );

  const shown = useMemo(() => {
    const filtered = category === 'all' ? causes : causes.filter((c) => c.category === category);
    return sortCauses(filtered, sort);
  }, [causes, category, sort]);

  return (
    <div>
      <div className="rounded-xl border border-black/10 bg-white p-5">
        <fieldset>
          <legend className="text-lg font-semibold">I want to give</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {GIFT_AMOUNTS.map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => {
                  setAmount(value);
                  setCustom('');
                }}
                className={`min-h-[44px] rounded-lg px-5 text-lg font-medium ring-1 ${
                  amount === value && custom === ''
                    ? 'bg-accent text-white ring-accent'
                    : 'bg-white text-ink ring-black/15 hover:ring-accent'
                }`}
              >
                ${value}
              </button>
            ))}
            <label
              className={`flex min-h-[44px] items-center gap-2 rounded-lg px-3 ring-1 ${
                custom === '' ? 'ring-black/15' : 'ring-accent'
              } focus-within:ring-accent`}
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
                onChange={(event) => {
                  const next = event.target.value;
                  setCustom(next);
                  setAmount(clampAmount(Number(next)));
                }}
                className="w-28 bg-transparent text-lg outline-none"
              />
            </label>
          </div>
          {custom !== '' && clampAmount(Number(custom)) !== Number(custom) && (
            <p className="mt-3 text-base text-gray-700">
              Showing {formatMoney(amount)} — whole dollars, up to {formatMoney(MAX_AMOUNT)}.
            </p>
          )}
        </fieldset>

        <GiftBoard causes={causes} amount={amount} />
      </div>

      <div className="mt-6 rounded-xl border border-black/10 bg-white p-5">
        <div className="flex flex-wrap gap-6">
          <label className="text-base text-gray-700">
            <span className="mr-2">Cause</span>
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value as Category | 'all')}
              className="min-h-[36px] rounded-lg bg-white px-3 text-base text-ink ring-1 ring-black/15"
            >
              <option value="all">All</option>
              {categories.map((value) => (
                <option key={value} value={value}>
                  {CATEGORY_LABELS[value]}
                </option>
              ))}
            </select>
          </label>

          <label className="text-base text-gray-700">
            <span className="mr-2">Order by</span>
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value as SortKey)}
              className="min-h-[36px] rounded-lg bg-white px-3 text-base text-ink ring-1 ring-black/15"
            >
              {(Object.keys(SORT_LABELS) as SortKey[]).map((key) => (
                <option key={key} value={key}>
                  {SORT_LABELS[key]}
                </option>
              ))}
            </select>
          </label>
        </div>

        {sort === 'cost' && (
          <p className="mt-4 rounded-lg bg-flag-soft px-4 py-3 text-base text-flag">
            A Bible and a surgery are not the same purchase. This order is only meaningful inside one
            cause type — filter first, then compare.
          </p>
        )}
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {shown.map((cause) => (
          <CauseCard key={cause.slug} cause={cause} amount={amount} />
        ))}
      </div>
    </div>
  );
}
