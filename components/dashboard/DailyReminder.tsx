"use client";

import { useEffect, useState } from "react";
import { RefreshCw } from "lucide-react";
import { dailyReminders } from "@/data/habits";

export default function DailyReminder() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const start = new Date(new Date().getFullYear(), 0, 0).getTime();
    const day = Math.floor((Date.now() - start) / 86400000);
    setIndex(day % dailyReminders.length);
  }, []);

  return (
    <div className="flex h-full flex-col rounded-2xl border border-lime/30 bg-lime/5 p-6">
      <h3 className="font-display text-lg font-semibold">Pengingat hari ini</h3>
      <p className="mt-3 flex-1 text-lg leading-snug" aria-live="polite">{dailyReminders[index]}</p>
      <button
        type="button"
        onClick={() => setIndex((i) => (i + 1) % dailyReminders.length)}
        className="mt-5 inline-flex w-fit items-center gap-2 text-sm text-lime hover:underline"
      >
        <RefreshCw className="h-4 w-4" aria-hidden /> Tampilkan pengingat lain
      </button>
    </div>
  );
}
