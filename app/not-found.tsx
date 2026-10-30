import Link from "next/link";
import { Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center py-24 text-center">
      <Compass className="h-10 w-10 text-lime" aria-hidden />
      <h1 className="mt-4 font-display text-4xl font-semibold">Halaman ini tidak ditemukan</h1>
      <p className="mt-2 max-w-md text-mute">Tautan mungkin rusak atau halaman telah dipindahkan. Kembali ke beranda atau jelajahi pustaka panduan.</p>
      <div className="mt-6 flex gap-3">
        <Link href="/" className="rounded-xl bg-lime px-5 py-2.5 text-sm font-medium text-ink hover:bg-lime-dim">Kembali ke beranda</Link>
        <Link href="/guides" className="rounded-xl border border-white/15 px-5 py-2.5 text-sm hover:border-lime/50">Jelajahi panduan</Link>
      </div>
    </div>
  );
}
