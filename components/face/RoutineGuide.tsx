"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { morningRoutine, nightRoutine } from "@/data/skincare";
import { cn } from "@/lib/utils";

export default function RoutineGuide() {
  const [mode, setMode] = useState<"morning" | "night">("morning");
  const steps = mode === "morning" ? morningRoutine : nightRoutine;

  return (
    <div>
      <div className="inline-flex rounded-xl border border-white/10 bg-ink-800 p-1" role="group" aria-label="Waktu rutinitas">
        {([
          { id: "morning", label: "Pagi", Icon: Sun },
          { id: "night", label: "Malam", Icon: Moon },
        ] as const).map(({ id, label, Icon }) => (
          <button
            key={id}
            type="button"
            aria-pressed={mode === id}
            onClick={() => setMode(id)}
            className={cn("flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium", mode === id ? "bg-lime text-ink" : "text-bone/80")}
          >
            <Icon className="h-4 w-4" aria-hidden /> {label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.ol
          key={mode}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="mt-5 space-y-3"
        >
          {steps.map((s, i) => (
            <li key={s.title} className="flex gap-4 rounded-2xl border border-white/10 bg-moss/70 p-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lime/15 font-display text-sm text-lime">{i + 1}</span>
              <div>
                <h4 className="font-display text-lg">
                  {s.title}
                  {s.optional && <span className="ml-2 rounded-full bg-white/10 px-2 py-0.5 align-middle text-xs text-mute">opsional</span>}
                </h4>
                <p className="mt-1 text-sm text-bone/85">{s.detail}</p>
              </div>
            </li>
          ))}
        </motion.ol>
      </AnimatePresence>
    </div>
  );
}
