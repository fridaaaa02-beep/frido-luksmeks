"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Logo from "./Logo";
import NavList from "./NavList";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function Sidebar({ open, onClose }: Props) {
  return (
    <>
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-72 flex-col gap-8 border-r border-white/10 bg-ink-800/80 p-6 backdrop-blur lg:flex">
        <Logo />
        <NavList idPrefix="desktop" />
        <p className="mt-auto text-xs leading-relaxed text-mute">
          Konten edukasi umum, bukan pengganti saran medis profesional. Setiap orang berbeda.
        </p>
      </aside>

      <AnimatePresence>
        {open && (
          <div className="lg:hidden">
            <motion.div
              className="fixed inset-0 z-40 bg-black/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              aria-hidden
            />
            <motion.aside
              role="dialog"
              aria-modal="true"
              aria-label="Menu navigasi"
              className="fixed inset-y-0 left-0 z-50 flex w-72 max-w-[85vw] flex-col gap-8 bg-ink-800 p-6"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.22 }}
            >
              <div className="flex items-start justify-between">
                <Logo />
                <button type="button" onClick={onClose} aria-label="Tutup menu" className="rounded-lg p-2 hover:bg-white/10">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <NavList idPrefix="mobile" />
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
