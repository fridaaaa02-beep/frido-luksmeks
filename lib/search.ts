import { guides } from "@/data/guides";
import { hairTopics, hairTypes } from "@/data/hair-types";
import { habitGroups } from "@/data/habits";
import { movementTopics } from "@/data/movement";
import { postureTopics } from "@/data/posture";
import { skinTopics, skinTypes } from "@/data/skincare";
import { styleTopics } from "@/data/style";

export interface SearchEntry {
  id: string;
  title: string;
  description: string;
  href: string;
  section: string;
  haystack: string;
}

function make(id: string, title: string, description: string, href: string, section: string, extra: string): SearchEntry {
  return { id, title, description, href, section, haystack: `${title} ${description} ${extra}`.toLowerCase() };
}

const entries: SearchEntry[] = [
  ...skinTypes.map((s) => make(`skin-${s.id}`, `Kulit ${s.name.toLowerCase()}`, s.tagline, "/face", "Wajah & Perawatan Kulit", [...s.signs, ...s.lookFor].join(" "))),
  ...skinTopics.map((t) => make(`face-${t.id}`, t.title, t.summary, "/face", "Wajah & Perawatan Kulit", t.points.join(" "))),
  ...hairTypes.map((h) => make(`hair-${h.id}`, `Jenis rambut ${h.id}: ${h.name}`, h.pattern, "/hair", "Panduan Rambut", [...h.characteristics, ...h.care].join(" "))),
  ...hairTopics.map((t) => make(`hairtopic-${t.id}`, t.title, t.summary, "/hair", "Panduan Rambut", t.points.join(" "))),
  ...postureTopics.map((t) => make(`posture-${t.id}`, t.title, t.summary, "/posture", "Postur & Ergonomi", t.points.join(" "))),
  ...movementTopics.map((t) => make(`move-${t.id}`, t.title, t.summary, "/movement", "Aktivitas & Pemulihan", t.points.join(" "))),
  ...styleTopics.map((t) => make(`style-${t.id}`, t.title, t.summary, "/style", "Gaya Berpakaian", t.points.join(" "))),
  ...habitGroups.map((g) => make(`habit-${g.id}`, g.title, g.description, "/habits", "Kebiasaan Harian", g.items.map((i) => i.label).join(" "))),
  ...guides.map((g) => make(`guide-${g.slug}`, g.title, g.excerpt, `/guides/${g.slug}`, "Pustaka Panduan", g.sections.map((s) => s.heading).join(" "))),
];

export function search(query: string, limit = 12): SearchEntry[] {
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  if (terms.length === 0) return [];
  return entries
    .map((e) => {
      const title = e.title.toLowerCase();
      let score = 0;
      for (const t of terms) {
        if (title.includes(t)) score += 3;
        else if (e.haystack.includes(t)) score += 1;
        else return { e, score: 0 };
      }
      return { e, score };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((r) => r.e);
}
