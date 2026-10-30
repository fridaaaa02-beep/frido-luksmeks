import Link from "next/link";
import Hero from "@/components/dashboard/Hero";
import CategoryGrid from "@/components/dashboard/CategoryGrid";
import DailyReminder from "@/components/dashboard/DailyReminder";
import GuideCard from "@/components/ui/GuideCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { guideCategoryLabel, guideMinutes, guides } from "@/data/guides";

export default function OverviewPage() {
  const featured = [guides[0], guides[3]];
  const latest = guides.slice(-6).reverse();

  return (
    <>
      <Hero />

      <SectionTitle title="Jelajahi kategori" description="Tujuh bidang perawatan diri sehari-hari dengan penjelasan praktis dan alat interaktif." />
      <CategoryGrid />

      <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <div>
          <h2 className="mb-5 font-display text-2xl font-semibold tracking-tight">Panduan pilihan</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {featured.map((g) => <GuideCard key={g.slug} guide={g} />)}
          </div>
        </div>
        <DailyReminder />
      </div>

      <SectionTitle title="Artikel terbaru" />
      <ul className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-moss/50">
        {latest.map((g) => (
          <li key={g.slug}>
            <Link href={`/guides/${g.slug}`} className="flex items-center justify-between gap-4 px-5 py-4 hover:bg-white/5">
              <span>
                <span className="block font-medium">{g.title}</span>
                <span className="block text-sm text-mute">{g.excerpt}</span>
              </span>
              <span className="shrink-0 text-sm text-mute">{guideCategoryLabel(g.category)} · {guideMinutes(g)} menit</span>
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm"><Link href="/guides" className="text-lime hover:underline">Jelajahi semua panduan</Link></p>
    </>
  );
}
