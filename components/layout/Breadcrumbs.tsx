"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { navItems } from "@/data/nav";
import { getGuide } from "@/data/guides";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const crumbs = [{ href: "/", label: "Beranda" }];
  let href = "";
  segments.forEach((seg, i) => {
    href += `/${seg}`;
    const nav = navItems.find((n) => n.href === href);
    const guide = segments[0] === "guides" && i === 1 ? getGuide(seg) : undefined;
    crumbs.push({ href, label: nav?.label ?? guide?.title ?? seg });
  });

  if (crumbs.length === 1) return <span className="text-sm text-mute">Beranda</span>;

  return (
    <nav aria-label="Navigasi lokasi" className="min-w-0">
      <ol className="flex items-center gap-1.5 text-sm text-mute">
        {crumbs.map((c, i) => {
          const last = i === crumbs.length - 1;
          return (
            <li key={c.href} className="flex min-w-0 items-center gap-1.5">
              {i > 0 && <ChevronRight className="h-3.5 w-3.5 shrink-0" aria-hidden />}
              {last ? (
                <span aria-current="page" className="truncate text-bone">{c.label}</span>
              ) : (
                <Link href={c.href} className="hover:text-lime">{c.label}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
