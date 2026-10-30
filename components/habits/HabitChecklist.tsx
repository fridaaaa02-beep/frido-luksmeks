"use client";

import { Activity, Bath, Check, Droplets, Monitor, Moon, RotateCcw, Scissors, Sparkles, Sun, Utensils } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { habitGroups } from "@/data/habits";
import type { HabitGroup } from "@/types";
import { useHabits } from "@/lib/useHabits";
import ProgressBar from "@/components/ui/ProgressBar";
import { cn } from "@/lib/utils";

const icons: Record<HabitGroup["icon"], LucideIcon> = {
  sun: Sun, sparkles: Sparkles, scissors: Scissors, droplets: Droplets, utensils: Utensils,
  activity: Activity, monitor: Monitor, moon: Moon, bath: Bath,
};

const total = habitGroups.reduce((n, g) => n + g.items.length, 0);

export default function HabitChecklist() {
  const { checked, toggle, reset, doneCount } = useHabits();
  const pct = (doneCount / total) * 100;
  const complete = doneCount === total;

  return (
    <div>
      <div className="rounded-2xl border border-white/10 bg-moss/70 p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="font-display text-3xl font-semibold">{Math.round(pct)}%</p>
            <p className="text-sm text-mute" aria-live="polite">
              {complete ? "Semua kebiasaan hari ini selesai. Bagus!" : `${doneCount} dari ${total} kebiasaan selesai hari ini`}
            </p>
          </div>
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-4 py-2 text-sm hover:border-lime/50"
          >
            <RotateCcw className="h-4 w-4" aria-hidden /> Atur ulang hari ini
          </button>
        </div>
        <div className="mt-4"><ProgressBar value={pct} label="Progres kebiasaan harian" /></div>
        <p className="mt-3 text-xs text-mute">Data hanya disimpan di peramban ini dan dihapus setiap hari. Tidak masalah jika melewatkan kebiasaan. Lakukan yang realistis untukmu.</p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {habitGroups.map((g) => {
          const Icon = icons[g.icon];
          const groupDone = g.items.filter((i) => checked[i.id]).length;
          return (
            <section key={g.id} className="rounded-2xl border border-white/10 bg-moss/70 p-5">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime/15 text-lime">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-semibold">{g.title}</h3>
                  <p className="text-xs text-mute">{g.description}</p>
                </div>
                <span className="text-xs text-mute">{groupDone}/{g.items.length}</span>
              </div>
              <ul className="mt-4 space-y-2">
                {g.items.map((item) => {
                  const on = !!checked[item.id];
                  return (
                    <li key={item.id}>
                      <label className={cn("flex cursor-pointer gap-3 rounded-xl border p-3 transition-colors", on ? "border-lime/50 bg-lime/10" : "border-white/10 hover:border-lime/30")}>
                        <input type="checkbox" checked={on} onChange={() => toggle(item.id)} className="peer sr-only" />
                        <span
                          className={cn(
                            "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-lime",
                            on ? "border-lime bg-lime text-ink" : "border-white/30"
                          )}
                          aria-hidden
                        >
                          {on && <Check className="h-3.5 w-3.5" />}
                        </span>
                        <span>
                          <span className={cn("block text-sm", on && "text-mute line-through")}>{item.label}</span>
                          <span className="block text-xs text-mute">{item.tip}</span>
                        </span>
                      </label>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}
      </div>
    </div>
  );
}
