"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { search } from "@/lib/search";

export default function SearchDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const results = useMemo(() => search(query), [query]);

  useEffect(() => {
    if (open) {
      setQuery("");
      const t = window.setTimeout(() => inputRef.current?.focus(), 50);
      return () => window.clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-start justify-center bg-black/70 px-4 pt-[10vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Cari di LOOKSMAX"
            className="w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-ink-800 shadow-2xl"
            initial={{ y: -12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -12, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-white/10 px-4">
              <Search className="h-4 w-4 text-mute" aria-hidden />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && results[0]) {
                    router.push(results[0].href);
                    onClose();
                  }
                }}
                placeholder="Cari jenis kulit, pola rambut, artikel panduan..."
                aria-label="Cari"
                className="w-full bg-transparent py-4 text-sm text-bone placeholder:text-mute focus:outline-none"
              />
              <button type="button" onClick={onClose} aria-label="Tutup pencarian" className="rounded p-1 hover:bg-white/10">
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="max-h-[60vh] overflow-y-auto p-2">
              {query.trim() === "" && <p className="px-3 py-6 text-center text-sm text-mute">Ketik untuk mencari di semua bagian. Tekan Esc untuk menutup.</p>}
              {query.trim() !== "" && results.length === 0 && (
                <p className="px-3 py-6 text-center text-sm text-mute">Tidak ada hasil untuk “{query}”. Coba kata yang lebih singkat atau berbeda.</p>
              )}
              <ul>
                {results.map((r) => (
                  <li key={r.id}>
                    <Link href={r.href} onClick={onClose} className="block rounded-xl px-3 py-2.5 hover:bg-white/5">
                      <span className="flex items-center justify-between gap-3">
                        <span className="text-sm font-medium text-bone">{r.title}</span>
                        <span className="shrink-0 text-xs text-lime">{r.section}</span>
                      </span>
                      <span className="mt-0.5 line-clamp-1 block text-xs text-mute">{r.description}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
