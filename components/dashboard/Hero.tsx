"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { habitGroups } from "@/data/habits";
import { useHabits } from "@/lib/useHabits";
import ProgressBar from "@/components/ui/ProgressBar";

const total = habitGroups.reduce((n, g) => n + g.items.length, 0);

export default function Hero() {
  const { doneCount } = useHabits();
  return (
    <section className="grid gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-moss-500/80 via-moss to-ink-800 p-6 sm:gap-8 sm:p-10 lg:grid-cols-[minmax(0,1fr)_minmax(240px,0.7fr)]">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM-BkISBwgIm09RiZkVu0PaZV1RZQJjDICuLB6a1PgyA&s=10"
        alt="Chico Lachowski"
        referrerPolicy="no-referrer"
        className="order-1 mx-auto h-52 w-40 rounded-2xl border border-white/10 object-cover object-top shadow-lg sm:h-64 sm:w-48 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mx-0 lg:h-full lg:max-h-[34rem] lg:w-full"
      />
      <div className="order-2 lg:col-start-1 lg:row-start-1">
        <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
          Nyamanlah dengan kulit, rambut, dan tubuhmu.
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-bone/80 sm:text-lg">
          FREDMAXXING adalah WEB panduan basic buat merawat kulit dan rambut, menjaga postur, bergerak aktif, berpakaian, dan membangun kebiasaan harian. Setiap orang berbeda, dan rutinitas sehat bisa tetap sederhana.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link href="/habits" className="inline-flex items-center gap-2 rounded-xl bg-lime px-5 py-3 text-sm font-medium text-ink hover:bg-lime-dim">
            Mulai daftar hari ini <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <Link href="/hair" className="rounded-xl border border-white/20 px-5 py-3 text-sm hover:border-lime/60">
            Jelajahi panduan rambut
          </Link>
        </div>
      </div>
      <div className="order-3 rounded-2xl border border-white/10 bg-ink/60 p-5 lg:col-start-1 lg:row-start-2">
        <p className="text-sm text-mute">Hari ini</p>
        <p className="mt-1 font-display text-4xl font-semibold">{doneCount}<span className="text-xl text-mute"> / {total}</span></p>
        <p className="mb-3 text-sm text-bone/80">kebiasaan harian selesai</p>
        <ProgressBar value={(doneCount / total) * 100} label="Progres kebiasaan hari ini" />
        <Link href="/habits" className="mt-4 inline-block text-sm text-lime hover:underline">Buka daftar kebiasaan</Link>
      </div>
    </section>
  );
}
