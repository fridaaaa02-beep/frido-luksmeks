import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { navItems } from "@/data/nav";

export default function CategoryGrid() {
  const items = navItems.filter((n) => n.href !== "/");
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            className="group flex flex-col rounded-2xl border border-white/10 bg-moss/70 p-5 transition-colors hover:border-lime/50"
          >
            <span className="flex items-center justify-between">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime/15 text-lime"><Icon className="h-5 w-5" aria-hidden /></span>
              <ArrowUpRight className="h-4 w-4 text-mute transition-colors group-hover:text-lime" aria-hidden />
            </span>
            <h3 className="mt-4 font-display text-lg font-semibold">{item.label}</h3>
            <p className="mt-1 text-sm text-mute">{item.blurb}</p>
          </Link>
        );
      })}
    </div>
  );
}
