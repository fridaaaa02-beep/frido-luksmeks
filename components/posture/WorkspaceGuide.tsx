"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { workspaceChecks } from "@/data/posture";
import ProgressBar from "@/components/ui/ProgressBar";
import BulletList from "@/components/ui/BulletList";
import { cn } from "@/lib/utils";

export default function WorkspaceGuide() {
  const [activeId, setActiveId] = useState(workspaceChecks[0].id);
  const [done, setDone] = useState<Record<string, boolean>>({});
  const active = workspaceChecks.find((c) => c.id === activeId) ?? workspaceChecks[0];
  const count = Object.values(done).filter(Boolean).length;
  const pct = (count / workspaceChecks.length) * 100;

  return (
    <div className="rounded-2xl border border-white/10 bg-moss/70 p-5 sm:p-6">
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm text-mute">
          <span className="font-display text-lg text-bone">{count}</span> dari {workspaceChecks.length} penyesuaian ditandai
        </p>
        <button type="button" onClick={() => setDone({})} className="text-sm text-lime hover:underline">Atur ulang</button>
      </div>
      <div className="mt-3"><ProgressBar value={pct} label="Progres penataan ruang kerja" /></div>

      <div className="mt-6 grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
        <ul className="space-y-2">
          {workspaceChecks.map((c) => (
            <li key={c.id} className="flex items-center gap-2">
              <button
                type="button"
                role="checkbox"
                aria-checked={!!done[c.id]}
                aria-label={`Tandai ${c.title} selesai`}
                onClick={() => setDone((d) => ({ ...d, [c.id]: !d[c.id] }))}
                className={cn(
                  "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border",
                  done[c.id] ? "border-lime bg-lime text-ink" : "border-white/25"
                )}
              >
                {done[c.id] && <Check className="h-4 w-4" aria-hidden />}
              </button>
              <button
                type="button"
                onClick={() => setActiveId(c.id)}
                aria-current={c.id === activeId}
                className={cn(
                  "flex-1 rounded-xl border px-3 py-2.5 text-left text-sm",
                  c.id === activeId ? "border-lime/60 bg-lime/10" : "border-white/10 hover:border-lime/40"
                )}
              >
                {c.title}
              </button>
            </li>
          ))}
        </ul>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="rounded-xl bg-ink/50 p-5"
          >
            <h3 className="font-display text-xl font-semibold">{active.title}</h3>
            <p className="mt-1 text-sm text-lime">Sasaran: {active.target}</p>
            <div className="mt-4"><BulletList items={active.how} /></div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
