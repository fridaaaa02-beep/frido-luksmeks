import type { Metadata } from "next";
import { Scissors } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import Disclaimer from "@/components/ui/Disclaimer";
import SectionTitle from "@/components/ui/SectionTitle";
import TopicAccordion from "@/components/ui/TopicAccordion";
import HairExplorer from "@/components/hair/HairExplorer";
import { hairTopics } from "@/data/hair-types";

export const metadata: Metadata = { title: "Panduan Rambut" };

export default function HairPage() {
  return (
    <>
      <PageHeader icon={Scissors} title="Panduan Rambut" description="Jelajahi 12 pola rambut umum, dari lurus 1A hingga keriting rapat 4C, dan pelajari hubungan pola, porositas, kepadatan, serta kesehatan kulit kepala." />
      <Disclaimer>
        Sistem 1A hingga 4C adalah panduan umum untuk pola ikal, bukan ukuran kualitas rambut. Semua jenis rambut bisa sehat. Konsultasikan nyeri kulit kepala, luka, atau kerontokan mendadak dengan tenaga kesehatan.
      </Disclaimer>

      <SectionTitle title="Jelajahi Jenis Rambut" description="Cari, saring berdasarkan kelompok, lalu pilih pola untuk membaca panduan perawatannya." />
      <HairExplorer />

      <SectionTitle title="Lebih dari sekadar pola" description="Pola hanyalah salah satu aspek rambut. Topik berikut memberi gambaran yang lebih lengkap." />
      <TopicAccordion topics={hairTopics} defaultOpen="typing-limits" />
    </>
  );
}
