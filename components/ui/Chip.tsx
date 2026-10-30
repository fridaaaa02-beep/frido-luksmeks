import { cn } from "@/lib/utils";

interface Props {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

export default function Chip({ active, onClick, children }: Props) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        "rounded-full border px-4 py-1.5 text-sm transition-colors",
        active ? "border-lime bg-lime text-ink" : "border-white/15 text-bone/80 hover:border-lime/50 hover:text-bone"
      )}
    >
      {children}
    </button>
  );
}
