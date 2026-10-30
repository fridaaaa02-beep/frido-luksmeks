import type { Metadata } from "next";
import { Shirt } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import SectionTitle from "@/components/ui/SectionTitle";
import TopicAccordion from "@/components/ui/TopicAccordion";
import OutfitGallery from "@/components/style/OutfitGallery";
import { colorCombos, styleTopics } from "@/data/style";

export const metadata: Metadata = { title: "Gaya Berpakaian" };

export default function StylePage() {
  return (
    <>
      <PageHeader icon={Shirt} title="Gaya Berpakaian" description="Gaya adalah cara mengekspresikan diri. Pelajari dasar ukuran, warna, dan padu padan, lalu bangun lemari pakaian yang sesuai dengan keseharianmu." />

      <SectionTitle title="Ide padu padan" description="Saring berdasarkan tingkat formalitas. Setiap kartu menampilkan palet warna, pakaian utama, dan tips penataan." />
      <OutfitGallery />

      <SectionTitle title="Kombinasi warna yang serasi" />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {colorCombos.map((c) => (
          <div key={c.name} className="rounded-2xl border border-white/10 bg-moss/70 p-4">
            <div className="flex h-16 overflow-hidden rounded-xl" aria-hidden>
              {c.colors.map((col) => <div key={col.hex} className="flex-1" style={{ backgroundColor: col.hex }} />)}
            </div>
            <h3 className="mt-3 font-display text-lg">{c.name}</h3>
            <p className="mt-1 text-sm text-mute">{c.why}</p>
          </div>
        ))}
      </div>

      <SectionTitle title="Dasar-dasar gaya" />
      <TopicAccordion topics={styleTopics} defaultOpen="fit" />
    </>
  );
}
