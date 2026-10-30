import type { Metadata } from "next";
import { Sparkles } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import Disclaimer from "@/components/ui/Disclaimer";
import SectionTitle from "@/components/ui/SectionTitle";
import TopicAccordion from "@/components/ui/TopicAccordion";
import SkinExplorer from "@/components/face/SkinExplorer";
import RoutineGuide from "@/components/face/RoutineGuide";
import { skinMistakes, skinTopics } from "@/data/skincare";

export const metadata: Metadata = { title: "Wajah & Perawatan Kulit" };

export default function FacePage() {
  return (
    <>
      <PageHeader icon={Sparkles} title="Wajah & Perawatan Kulit" description="Kenali jenis kulitmu, susun rutinitas sederhana, dan pahami hal yang penting: membersihkan dengan lembut, menjaga kelembapan, dan melindungi kulit dari matahari." />
      <Disclaimer />

      <SectionTitle title="Jenis kulit" description="Pilih jenis kulit untuk melihat ciri umum dan saran perawatan. Kondisi kulit dapat berubah, jadi gunakan informasi ini sebagai panduan awal." />
      <SkinExplorer />

      <SectionTitle title="Rutinitas dasar" description="Rutinitas singkat lebih mudah dijalankan. Langkah tambahan hanya diperlukan jika memang dibutuhkan." />
      <RoutineGuide />

      <SectionTitle title="Perawatan kulit lebih mendalam" description="Buka topik untuk membaca selengkapnya." />
      <TopicAccordion topics={skinTopics} defaultOpen="spf" />

      <SectionTitle title="Kesalahan umum dalam merawat kulit" description="Kebiasaan yang mudah diperbaiki." />
      <div className="grid gap-3 md:grid-cols-2">
        {skinMistakes.map((m) => (
          <div key={m.mistake} className="rounded-xl border border-white/10 bg-moss/60 p-4">
            <p className="font-medium">{m.mistake}</p>
            <p className="mt-1 text-sm text-mute"><span className="text-lime">Coba lakukan: </span>{m.fix}</p>
          </div>
        ))}
      </div>
    </>
  );
}
