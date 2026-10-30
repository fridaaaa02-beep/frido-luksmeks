"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { skinTypes } from "@/data/skincare";
import BulletList from "@/components/ui/BulletList";
import { cn } from "@/lib/utils";

export default function SkinExplorer() {
  const [activeId, setActiveId] = useState(skinTypes[0].id);
  const active = skinTypes.find((s) => s.id === activeId) ?? skinTypes[0];

  return (
    <div>
      <div role="tablist" aria-label="Jenis kulit" className="flex flex-wrap gap-2">
        {skinTypes.map((s) => (
          <button
            key={s.id}
            role="tab"
            type="button"
            aria-selected={s.id === activeId}
            onClick={() => setActiveId(s.id)}
            className={cn(
              "rounded-xl border px-4 py-2.5 text-sm font-medium transition-colors",
              s.id === activeId ? "border-lime bg-lime text-ink" : "border-white/15 bg-moss/60 hover:border-lime/50"
            )}
          >
            {s.name}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          role="tabpanel"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2 }}
          className="mt-5 rounded-2xl border border-white/10 bg-moss/70 p-6"
        >
          <h3 className="font-display text-2xl font-semibold">Kulit {active.name.toLowerCase()}</h3>
          <p className="mt-1 text-mute">{active.tagline}</p>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Block title="Ciri umum" items={active.signs} />
            <Block title="Tujuan perawatan" items={active.goals} />
            <Block title="Hal yang bisa membantu" items={active.lookFor} />
            <Block title="Hal yang perlu diperhatikan" items={active.watchOut} />
          </div>
          <p className="mt-6 rounded-lg border-l-2 border-lime bg-ink/50 px-4 py-3 text-sm">{active.tip}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function Block({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="mb-2 font-medium text-lime">{title}</h4>
      <BulletList items={items} />
    </div>
  );
}
