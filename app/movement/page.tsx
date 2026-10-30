import type { Metadata } from "next";
import { Activity } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import Disclaimer from "@/components/ui/Disclaimer";
import SectionTitle from "@/components/ui/SectionTitle";
import TopicAccordion from "@/components/ui/TopicAccordion";
import SessionPlanner from "@/components/movement/SessionPlanner";
import { movementTopics } from "@/data/movement";

export const metadata: Metadata = { title: "Aktivitas & Pemulihan" };

export default function MovementPage() {
  return (
    <>
      <PageHeader icon={Activity} title="Aktivitas & Pemulihan" description="Bangun kebiasaan bergerak yang berkelanjutan: lakukan pemanasan, tingkatkan kekuatan, nikmati kardio, dan beri tubuh waktu untuk beristirahat." />
      <Disclaimer>
        Sesuaikan aktivitas dengan usia dan hindari tantangan ekstrem. Jika memiliki kondisi kesehatan, cedera, atau kekhawatiran, konsultasikan dengan dokter sebelum mengubah aktivitas.
      </Disclaimer>

      <SectionTitle title="Perencana sesi latihan" description="Pilih fokus dan waktu yang tersedia untuk melihat sesi latihan sederhana dan seimbang." />
      <SessionPlanner />

      <SectionTitle title="Topik aktivitas dan pemulihan" />
      <TopicAccordion topics={movementTopics} defaultOpen="benefits" />
    </>
  );
}
