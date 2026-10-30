export default function Loading() {
  return (
    <div className="space-y-4" role="status" aria-label="Memuat">
      <div className="h-10 w-2/3 animate-pulse rounded-xl bg-moss" />
      <div className="h-5 w-1/2 animate-pulse rounded-lg bg-moss/70" />
      <div className="grid gap-4 pt-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-36 animate-pulse rounded-2xl bg-moss/70" />
        ))}
      </div>
    </div>
  );
}
