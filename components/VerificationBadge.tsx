import { VERIFICATION_LABELS, type VerificationLevel } from '@/lib/types';

const STYLES: Record<VerificationLevel, string> = {
  unreviewed: 'bg-gray-100 text-gray-700 ring-gray-300',
  'self-reported': 'bg-flag-soft text-flag ring-flag/30',
  'documents-reviewed': 'bg-accent-soft text-accent ring-accent/30',
  'field-verified': 'bg-accent text-white ring-accent',
};

export function VerificationBadge({ level }: { level: VerificationLevel }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ring-1 ${STYLES[level]}`}
    >
      {VERIFICATION_LABELS[level]}
    </span>
  );
}
