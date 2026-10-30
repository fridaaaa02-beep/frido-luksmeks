import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import type { Guide } from "@/types";
import { guideCategoryLabel, guideMinutes } from "@/data/guides";

export default function GuideCard({ guide }: { guide: Guide }) {
  return (
    <Link
      href={`/guides/${guide.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-white/10 bg-moss/70 p-5 transition-colors hover:border-lime/50"
    >
      <span className="w-fit rounded-full bg-lime/15 px-2.5 py-0.5 text-xs font-medium text-lime">{guideCategoryLabel(guide.category)}</span>
      <h3 className="mt-3 font-display text-lg font-semibold leading-snug">{guide.title}</h3>
      <p className="mt-2 flex-1 text-sm text-mute">{guide.excerpt}</p>
      <div className="mt-4 flex items-center justify-between text-sm text-mute">
        <span className="inline-flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5" aria-hidden /> {guideMinutes(guide)} menit membaca
        </span>
        <ArrowRight className="h-4 w-4 text-lime transition-transform group-hover:translate-x-1" aria-hidden />
      </div>
    </Link>
  );
}
