import type { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function PageHeader({ title, description, icon: Icon }: Props) {
  return (
    <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-start">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-lime text-ink">
        <Icon className="h-6 w-6" aria-hidden />
      </span>
      <div>
        <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>
        <p className="mt-2 max-w-2xl text-mute">{description}</p>
      </div>
    </header>
  );
}
