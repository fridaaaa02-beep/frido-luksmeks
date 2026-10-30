"use client";

import { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, Search } from "lucide-react";
import Sidebar from "./Sidebar";
import Breadcrumbs from "./Breadcrumbs";
import SearchDialog from "./SearchDialog";
import Logo from "./Logo";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [navOpen, setNavOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();
  const closeSearch = useCallback(() => setSearchOpen(false), []);

  useEffect(() => setNavOpen(false), [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="min-h-screen">
      <Sidebar open={navOpen} onClose={() => setNavOpen(false)} />
      <div className="lg:pl-72">
        <div className="sticky top-0 z-20 flex items-center gap-3 border-b border-white/10 bg-ink/85 px-4 py-3 backdrop-blur sm:px-8">
          <button type="button" onClick={() => setNavOpen(true)} aria-label="Buka menu" className="rounded-lg p-2 hover:bg-white/10 lg:hidden">
            <Menu className="h-5 w-5" />
          </button>
          <div className="lg:hidden"><Logo /></div>
          <div className="hidden min-w-0 flex-1 lg:block"><Breadcrumbs /></div>
          <div className="flex-1 lg:hidden" />
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-ink-800 px-3 py-2 text-sm text-mute hover:border-lime/50 hover:text-bone"
          >
            <Search className="h-4 w-4" aria-hidden />
            <span className="hidden sm:inline">Cari</span>
            <kbd className="hidden rounded bg-white/10 px-1.5 text-xs sm:inline">Ctrl K</kbd>
          </button>
        </div>
        <div className="border-b border-white/5 px-4 py-2 sm:px-8 lg:hidden"><Breadcrumbs /></div>
        <main className="mx-auto max-w-6xl px-4 py-8 sm:px-8 sm:py-12">{children}</main>
        <footer className="border-t border-white/10 px-4 py-8 text-sm text-mute sm:px-8">
          <p className="mx-auto max-w-6xl">
            LOOKSMAX membagikan edukasi umum tentang perawatan diri. Situs ini tidak memberi peringkat pada penampilan dan bukan pengganti saran medis.
          </p>
        </footer>
      </div>
      <SearchDialog open={searchOpen} onClose={closeSearch} />
    </div>
  );
}
