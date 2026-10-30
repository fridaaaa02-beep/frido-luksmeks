export default function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed text-bone/90">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lime" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
