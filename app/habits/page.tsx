import type { Metadata } from "next";
import { CheckSquare } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import HabitChecklist from "@/components/habits/HabitChecklist";

export const metadata: Metadata = { title: "Kebiasaan Harian" };

export default function HabitsPage() {
  return (
    <>
      <PageHeader icon={CheckSquare} title="Kebiasaan Harian" description="Daftar sederhana untuk kebersihan diri, perawatan kulit, minum, makan, aktivitas, istirahat dari layar, dan tidur. Ini panduan, bukan ujian." />
      <HabitChecklist />
    </>
  );
}
