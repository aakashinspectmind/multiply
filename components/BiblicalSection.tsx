import { SourceLink } from './SourceLink';
import type { Cause } from '@/lib/types';

export function BiblicalSection({ cause }: { cause: Cause }) {
  const { biblicalAlignment: alignment } = cause;

  return (
    <section className="rounded-xl border border-black/10 bg-white p-6">
      <h2 className="text-2xl font-semibold tracking-tight">Why this is the church’s work</h2>
      <div className="longform mt-3">
        <p>{alignment.mandate}</p>
      </div>

      {/* Scripture in the reading face, at the measure the rest of the argument uses. */}
      <ul className="mt-6 space-y-5">
        {alignment.scriptures.map((scripture) => (
          <li key={scripture.ref} className="border-l-2 border-accent/40 pl-4">
            <p className="measure font-serif text-lg leading-relaxed text-gray-800">
              “{scripture.text}”
            </p>
            <p className="mt-1 text-base font-medium text-gray-700">{scripture.ref}</p>
          </li>
        ))}
      </ul>

      {alignment.doctrine && (
        <p className="measure mt-5 text-base text-gray-700">
          Doctrinal position we read: {alignment.doctrine.label} —{' '}
          <SourceLink cause={cause} id={alignment.doctrine.sourceId} />
        </p>
      )}

      {alignment.concerns.length > 0 && (
        <div className="mt-6 border-t border-black/10 pt-5">
          <h3 className="text-lg font-semibold">Our reservations</h3>
          <div className="longform mt-2">
            <ul className="list-disc pl-5">
              {alignment.concerns.map((concern) => (
                <li key={concern}>{concern}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <p className="measure mt-6 text-base text-gray-700">
        A judgement about the work, not a measurement of its results. We do not score souls.
      </p>
    </section>
  );
}
