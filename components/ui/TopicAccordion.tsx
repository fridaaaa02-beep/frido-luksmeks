import type { Topic } from "@/types";
import Accordion from "./Accordion";
import BulletList from "./BulletList";

export default function TopicAccordion({ topics, defaultOpen }: { topics: Topic[]; defaultOpen?: string }) {
  const items = topics.map((t) => ({
    id: t.id,
    title: t.title,
    summary: t.summary,
    content: (
      <div className="space-y-4">
        <BulletList items={t.points} />
        {t.tip && (
          <p className="rounded-lg border-l-2 border-lime bg-ink/50 px-4 py-3 text-sm text-bone/90">
            <span className="font-medium text-lime">Perlu diketahui: </span>
            {t.tip}
          </p>
        )}
      </div>
    ),
  }));
  return <Accordion items={items} defaultOpen={defaultOpen} />;
}
