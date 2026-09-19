import { sourceById } from '@/lib/impact';
import type { Cause } from '@/lib/types';

export function SourceLink({ cause, id }: { cause: Cause; id: string }) {
  const source = sourceById(cause, id);
  return (
    <a
      href={source.url}
      target="_blank"
      rel="noreferrer noopener"
      className="text-base text-accent underline decoration-accent/40 hover:decoration-accent"
    >
      {source.label}
    </a>
  );
}
