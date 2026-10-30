"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { navItems } from "@/data/nav";
import { cn } from "@/lib/utils";

export default function NavList({ idPrefix }: { idPrefix: string }) {
  const pathname = usePathname();
  return (
    <nav aria-label="Navigasi utama">
      <ul className="space-y-1">
        {navItems.map((item) => {
          const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
          const Icon = item.icon;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors",
                  active ? "text-ink" : "text-bone/80 hover:bg-white/5 hover:text-bone"
                )}
              >
                {active && (
                  <motion.span layoutId={`${idPrefix}-active`} className="absolute inset-0 rounded-xl bg-lime" transition={{ type: "spring", stiffness: 400, damping: 34 }} />
                )}
                <Icon className="relative h-4 w-4" aria-hidden />
                <span className="relative font-medium">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
