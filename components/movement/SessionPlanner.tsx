"use client";

import { useMemo, useState } from "react";
import { buildSession, sessionFocuses } from "@/data/movement";
import Chip from "@/components/ui/Chip";

const durations = [10, 20, 30, 45];

export default function SessionPlanner() {
  const [focusId, setFocusId] = useState(sessionFocuses[0].id);
  const [total, setTotal] = useState(20);
  const blocks = useMemo(() => buildSession(focusId, total), [focusId, total]);
  const focus = sessionFocuses.find((f) => f.id === focusId) ?? sessionFocuses[0];

  return (
    <div className="rounded-2xl border border-white/10 bg-moss/70 p-5 sm:p-6">
      <div className="grid gap-5 sm:grid-cols-2">
        <fieldset>
          <legend className="mb-2 text-sm font-medium text-lime">Fokus</legend>
          <div className="flex flex-wrap gap-2">
            {sessionFocuses.map((f) => (
              <Chip key={f.id} active={f.id === focusId} onClick={() => setFocusId(f.id)}>{f.name}</Chip>
            ))}
          </div>
          <p className="mt-2 text-sm text-mute">{focus.description}</p>
        </fieldset>
        <fieldset>
          <legend className="mb-2 text-sm font-medium text-lime">Waktu tersedia</legend>
          <div className="flex flex-wrap gap-2">
            {durations.map((d) => (
              <Chip key={d} active={d === total} onClick={() => setTotal(d)}>{d} menit</Chip>
            ))}
          </div>
        </fieldset>
      </div>

      <div className="mt-6 flex h-3 overflow-hidden rounded-full bg-ink/60" aria-hidden>
        {blocks.map((b, i) => (
          <div key={b.label} style={{ width: `${(b.minutes / total) * 100}%` }} className={i === 1 ? "bg-lime" : "bg-lime/40"} />
        ))}
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-3">
        {blocks.map((b) => (
          <div key={b.label} className="rounded-xl bg-ink/50 p-4">
            <div className="flex items-baseline justify-between">
              <h4 className="font-display text-lg">{b.label}</h4>
              <span className="text-sm text-lime">{b.minutes} menit</span>
            </div>
            <ul className="mt-2 space-y-1 text-sm text-bone/85">
              {b.ideas.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-mute">Gunakan ini sebagai titik awal yang ringan. Pilih aktivitas yang terasa nyaman, berhenti jika terasa sakit, dan tanyakan kepada tenaga profesional jika ragu.</p>
    </div>
  );
}
