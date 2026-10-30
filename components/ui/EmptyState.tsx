import { SearchX } from "lucide-react";

interface Props {
  title: string;
  hint: string;
  onReset?: () => void;
}

export default function EmptyState({ title, hint, onReset }: Props) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-dashed border-white/15 px-6 py-12 text-center">
      <SearchX className="h-8 w-8 text-lime" aria-hidden />
      <h3 className="mt-3 font-display text-lg">{title}</h3>
      <p className="mt-1 max-w-sm text-sm text-mute">{hint}</p>
      {onReset && (
        <button type="button" onClick={onReset} className="mt-4 rounded-lg bg-lime px-4 py-2 text-sm font-medium text-ink hover:bg-lime-dim">
          Hapus filter
        </button>
      )}
    </div>
  );
}
