export default function SectionTitle({ title, description, id }: { title: string; description?: string; id?: string }) {
  return (
    <div className="mb-5 mt-12" id={id}>
      <h2 className="font-display text-2xl font-semibold tracking-tight">{title}</h2>
      {description && <p className="mt-1 max-w-2xl text-mute">{description}</p>}
    </div>
  );
}
