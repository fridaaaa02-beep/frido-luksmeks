"use client";

import { useCallback, useEffect, useState } from "react";

function todayKey(): string {
  const d = new Date();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `looksmax-habits-${d.getFullYear()}-${m}-${day}`;
}

/** Daily habit state. Lives in the browser only (localStorage) and resets each new day. */
export function useHabits() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(todayKey());
      if (raw) setChecked(JSON.parse(raw) as Record<string, boolean>);
    } catch {
      /* storage unavailable: state stays in memory */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      window.localStorage.setItem(todayKey(), JSON.stringify(checked));
    } catch {
      /* ignore */
    }
  }, [checked, ready]);

  const toggle = useCallback((id: string) => setChecked((c) => ({ ...c, [id]: !c[id] })), []);
  const reset = useCallback(() => setChecked({}), []);
  const doneCount = Object.values(checked).filter(Boolean).length;

  return { checked, toggle, reset, doneCount, ready };
}
