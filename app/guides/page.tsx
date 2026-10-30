import type { Metadata } from "next";
import { BookOpen } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import GuideLibrary from "@/components/guides/GuideLibrary";

export const metadata: Metadata = { title: "Pustaka Panduan" };

export default function GuidesPage() {
  return (
    <>
      <PageHeader icon={BookOpen} title="Pustaka Panduan" description="Artikel yang jelas dan praktis tentang perawatan kulit dan rambut, postur, aktivitas, gaya berpakaian, serta kebiasaan. Cari dengan kata kunci atau saring berdasarkan kategori." />
      <GuideLibrary />
    </>
  );
}
