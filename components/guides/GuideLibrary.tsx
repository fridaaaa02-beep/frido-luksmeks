"use client";

import { useMemo, useState } from "react";
import { guideCategories, guides } from "@/data/guides";
import type { GuideCategory } from "@/types";
import Chip from "@/components/ui/Chip";
import SearchInput from "@/components/ui/SearchInput";
import EmptyState from "@/components/ui/EmptyState";
import GuideCard from "@/components/ui/GuideCard";

export default function GuideLibrary() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<"All" | GuideCategory>("All");

  const results = useMemo(() => {
    const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
    return guides.filter((g) => {
      if (category !== "All" && g.category !== category) return false;
      const hay = [g.title, g.excerpt, g.category, ...g.sections.flatMap((s) => [s.heading, ...s.body])].join(" ").toLowerCase();
      return terms.every((t) => hay.includes(t));
    });
  }, [query, category]);

  return (
    <div>
      <SearchInput value={query} onChange={setQuery} placeholder="Cari artikel, misalnya sunscreen, postur, tidur" label="Cari artikel" />
      <div className="mt-3 flex flex-wrap gap-2">
        {(["All", ...guideCategories] as const).map((c) => (
          <Chip key={c} active={category === c} onClick={() => setCategory(c)}>{categoryLabels[c]}</Chip>
        ))}
      </div>
      <p className="mt-3 text-sm text-mute" aria-live="polite">{results.length} artikel</p>
      <div className="mt-4">
        {results.length === 0 ? (
          <EmptyState title="Artikel tidak ditemukan" hint="Coba kata kunci lain atau hapus filter." onReset={() => { setQuery(""); setCategory("All"); }} />
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((g) => <GuideCard key={g.slug} guide={g} />)}
          </div>
        )}
      </div>
    </div>
  );
}

const categoryLabels: Record<"All" | GuideCategory, string> = {
  All: "Semua",
  Face: "Wajah",
  Hair: "Rambut",
  Posture: "Postur",
  Movement: "Aktivitas",
  Style: "Gaya",
  Habits: "Kebiasaan",
};
