interface Props {
  value: number; // 0 - 100
  label?: string;
}

export default function ProgressBar({ value, label }: Props) {
  const pct = Math.min(100, Math.max(0, Math.round(value)));
  return (
    <div role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label={label ?? "Progres"}>
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-ink/70">
        <div className="h-full rounded-full bg-lime transition-all duration-500" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
