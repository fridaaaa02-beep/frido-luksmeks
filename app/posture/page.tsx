import type { Metadata } from "next";
import { Armchair } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import Disclaimer from "@/components/ui/Disclaimer";
import SectionTitle from "@/components/ui/SectionTitle";
import TopicAccordion from "@/components/ui/TopicAccordion";
import WorkspaceGuide from "@/components/posture/WorkspaceGuide";
import { postureTopics } from "@/data/posture";

export const metadata: Metadata = { title: "Postur & Ergonomi" };

export default function PosturePage() {
  return (
    <>
      <PageHeader icon={Armchair} title="Postur & Ergonomi" description="Pelajari cara duduk, berdiri, dan berjalan dengan nyaman, serta menata ruang kerja agar mendukung tubuh." />
      <Disclaimer>
        Informasi ini hanya untuk edukasi umum. Nyeri, mati rasa, kesemutan, atau kelemahan yang menetap sebaiknya diperiksa tenaga kesehatan.
      </Disclaimer>

      <SectionTitle title="Panduan menata ruang kerja" description="Pilih penyesuaian untuk melihat caranya, lalu tandai setelah selesai." />
      <WorkspaceGuide />

      <SectionTitle title="Topik postur dan ergonomi" />
      <TopicAccordion topics={postureTopics} defaultOpen="basics" />
    </>
  );
}
