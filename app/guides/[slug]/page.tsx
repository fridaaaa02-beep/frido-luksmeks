import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";
import { getGuide, guideCategoryLabel, guideMinutes, guides } from "@/data/guides";
import GuideCard from "@/components/ui/GuideCard";
import Disclaimer from "@/components/ui/Disclaimer";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const guide = getGuide(params.slug);
  return guide ? { title: guide.title, description: guide.excerpt } : { title: "Artikel tidak ditemukan" };
}

export default function GuidePage({ params }: Props) {
  const guide = getGuide(params.slug);
  if (!guide) notFound();

  const related = guide.related.map((s) => getGuide(s)).filter((g): g is NonNullable<typeof g> => Boolean(g));

  return (
    <article>
      <Link href="/guides" className="mb-6 inline-flex items-center gap-2 text-sm text-mute hover:text-lime">
        <ArrowLeft className="h-4 w-4" aria-hidden />         Semua artikel
      </Link>
      <header className="max-w-3xl">
        <span className="rounded-full bg-lime/15 px-3 py-1 text-xs font-medium text-lime">{guideCategoryLabel(guide.category)}</span>
        <h1 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">{guide.title}</h1>
        <p className="mt-3 text-lg text-mute">{guide.excerpt}</p>
        <p className="mt-4 inline-flex items-center gap-2 text-sm text-mute">
          <Clock className="h-4 w-4" aria-hidden /> {guideMinutes(guide)} menit membaca
        </p>
      </header>

      <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_16rem]">
        <div className="max-w-3xl">
          {guide.sections.map((s, i) => (
            <section key={s.heading} id={`section-${i}`} className="mb-10 scroll-mt-24">
              <h2 className="font-display text-2xl font-semibold">{s.heading}</h2>
              {s.body.map((p) => (
                <p key={p} className="mt-3 text-base leading-relaxed text-bone/90">{p}</p>
              ))}
            </section>
          ))}
          <Disclaimer>Artikel ini berisi informasi edukasi umum, bukan saran medis. Konsultasikan masalah kesehatan dengan tenaga kesehatan yang kompeten.</Disclaimer>
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <h2 className="font-display text-lg font-semibold">Dalam artikel ini</h2>
          <ul className="mt-3 space-y-2 border-l border-white/10 pl-4 text-sm">
            {guide.sections.map((s, i) => (
              <li key={s.heading}><a href={`#section-${i}`} className="text-mute hover:text-lime">{s.heading}</a></li>
            ))}
          </ul>
        </aside>
      </div>

      {related.length > 0 && (
        <section className="mt-6">
          <h2 className="mb-5 font-display text-2xl font-semibold">Artikel terkait</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((g) => <GuideCard key={g.slug} guide={g} />)}
          </div>
        </section>
      )}
    </article>
  );
}
