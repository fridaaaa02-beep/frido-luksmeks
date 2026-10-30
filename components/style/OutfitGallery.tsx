"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { outfits } from "@/data/style";
import Chip from "@/components/ui/Chip";

const levels = ["All", "Casual", "Smart casual", "Formal"] as const;
const levelLabels: Record<(typeof levels)[number], string> = {
  All: "Semua",
  Casual: "Santai",
  "Smart casual": "Santai rapi",
  Formal: "Formal",
};

export default function OutfitGallery() {
  const [level, setLevel] = useState<(typeof levels)[number]>("All");
  const shown = outfits.filter((o) => level === "All" || o.level === level);

  return (
    <div>
      <div className="mb-5 flex flex-wrap gap-2">
        {levels.map((l) => (
          <Chip key={l} active={level === l} onClick={() => setLevel(l)}>{levelLabels[l]}</Chip>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {shown.map((o) => (
            <motion.article
              layout
              key={o.id}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              className="overflow-hidden rounded-2xl border border-white/10 bg-moss/70"
            >
              <div className="flex h-24" aria-hidden>
                {o.palette.map((c) => <div key={c} className="flex-1" style={{ backgroundColor: c }} />)}
              </div>
              <div className="p-5">
                <span className="rounded-full bg-lime/15 px-2.5 py-0.5 text-xs font-medium text-lime">{levelLabels[o.level]}</span>
                <h3 className="mt-2 font-display text-xl font-semibold">{o.name}</h3>
                <p className="text-sm text-mute">{o.occasion}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {o.pieces.map((p) => <li key={p} className="rounded-lg bg-ink/60 px-2.5 py-1 text-xs">{p}</li>)}
                </ul>
                <p className="mt-3 text-sm text-bone/85">{o.notes}</p>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
