"use client";

import { useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { hairGroups, hairTypes } from "@/data/hair-types";
import type { HairType } from "@/types";
import Chip from "@/components/ui/Chip";
import SearchInput from "@/components/ui/SearchInput";
import EmptyState from "@/components/ui/EmptyState";
import BulletList from "@/components/ui/BulletList";
import { cn } from "@/lib/utils";

type Filter = "All" | (typeof hairGroups)[number];
const groupLabels: Record<Filter, string> = {
  All: "Semua",
  Lurus: "Lurus",
  Bergelombang: "Bergelombang",
  Keriting: "Keriting",
  "Keriting rapat": "Keriting rapat",
};

function matches(h: HairType, q: string): boolean {
  if (!q) return true;
  const hay = [h.id, h.name, h.group, h.pattern, ...h.characteristics, ...h.care, ...h.styling].join(" ").toLowerCase();
  return q
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .every((t) => hay.includes(t));
}

export default function HairExplorer() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("All");
  const [selectedId, setSelectedId] = useState<string>("3B");
  const panelRef = useRef<HTMLDivElement>(null);

  const visible = useMemo(
    () => hairTypes.filter((h) => (filter === "All" || h.group === filter) && matches(h, query)),
    [query, filter]
  );
  const selected = hairTypes.find((h) => h.id === selectedId) ?? hairTypes[0];

  const select = (id: string) => {
    setSelectedId(id);
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      window.setTimeout(() => panelRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
    }
  };
  const reset = () => {
    setQuery("");
    setFilter("All");
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
      <div>
        <SearchInput value={query} onChange={setQuery} placeholder="Cari pola, misalnya mengembang, 3B, mengurai kusut" label="Cari jenis rambut" />
        <div className="mt-3 flex flex-wrap gap-2">
          {(["All", ...hairGroups] as Filter[]).map((g) => (
            <Chip key={g} active={filter === g} onClick={() => setFilter(g)}>
              {groupLabels[g]}
            </Chip>
          ))}
        </div>
        <p className="mt-3 text-sm text-mute" aria-live="polite">
          Menampilkan {visible.length} dari {hairTypes.length} pola
        </p>

        {visible.length === 0 ? (
          <div className="mt-4">
            <EmptyState title="Pola rambut tidak ditemukan" hint="Coba kata lain atau hapus filter." onReset={reset} />
          </div>
        ) : (
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
            {visible.map((h) => (
              <motion.button
                layout
                key={h.id}
                type="button"
                aria-pressed={h.id === selectedId}
                onClick={() => select(h.id)}
                className={cn(
                  "rounded-2xl border p-4 text-left transition-colors",
                  h.id === selectedId ? "border-lime bg-lime/10 shadow-glow" : "border-white/10 bg-moss/70 hover:border-lime/50"
                )}
              >
                <span className="font-display text-3xl font-semibold text-lime">{h.id}</span>
                <span className="mt-1 block text-sm font-medium">{h.name}</span>
                <span className="block text-xs text-mute">{h.group}</span>
              </motion.button>
            ))}
          </div>
        )}
      </div>

      <div ref={panelRef} className="scroll-mt-24 lg:sticky lg:top-24 lg:self-start">
        <AnimatePresence mode="wait">
          <motion.div
            key={selected.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="rounded-2xl border border-white/10 bg-moss/70 p-6 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto"
          >
            <div className="flex items-baseline gap-3">
              <span className="font-display text-5xl font-semibold text-lime">{selected.id}</span>
              <div>
                <h3 className="font-display text-xl font-semibold">{selected.name}</h3>
                <p className="text-sm text-mute">Rambut {selected.group.toLowerCase()}</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-bone/90">{selected.pattern}</p>

            <div className="mt-6 space-y-5">
                <Section title="Ciri umum"><BulletList items={selected.characteristics} /></Section>
                <Section title="Perawatan umum"><BulletList items={selected.care} /></Section>
                <Section title="Memilih sampo"><p className="text-sm text-bone/90">{selected.shampoo}</p></Section>
                <Section title="Kondisioner"><p className="text-sm text-bone/90">{selected.conditioner}</p></Section>
                <Section title="Saran penataan"><BulletList items={selected.styling} /></Section>
                <Section title="Mengurai kusut"><p className="text-sm text-bone/90">{selected.detangling}</p></Section>
                <Section title="Kesalahan umum"><BulletList items={selected.mistakes} /></Section>
                <Section title="Tips perawatan"><BulletList items={selected.maintenance} /></Section>
            </div>
            <p className="mt-6 text-xs text-mute">
              Klasifikasi rambut adalah titik awal. Porositas, kepadatan, ketebalan, kondisi kulit kepala, dan gaya hidup juga berpengaruh.
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h4 className="mb-2 font-medium text-lime">{title}</h4>
      {children}
    </section>
  );
}
