import { Activity, BookOpen, CheckSquare, Home, Scissors, Shirt, Sparkles, Armchair } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface NavItem {
  href: string;
  label: string;
  blurb: string;
  icon: LucideIcon;
}

export const navItems: NavItem[] = [
  { href: "/", label: "Beranda", blurb: "Dasbor dan pengingat harian", icon: Home },
  { href: "/face", label: "Wajah & Perawatan Kulit", blurb: "Jenis kulit, rutinitas, tabir surya, dan pelindung kulit", icon: Sparkles },
  { href: "/hair", label: "Panduan Rambut", blurb: "12 pola rambut dan cara merawatnya", icon: Scissors },
  { href: "/posture", label: "Postur & Ergonomi", blurb: "Duduk, berdiri, dan menata meja dengan nyaman", icon: Armchair },
  { href: "/movement", label: "Aktivitas & Pemulihan", blurb: "Pemanasan, latihan kekuatan, kardio, istirahat, dan tidur", icon: Activity },
  { href: "/style", label: "Gaya Berpakaian", blurb: "Ukuran, warna, padu padan, dan lemari pakaian praktis", icon: Shirt },
  { href: "/habits", label: "Kebiasaan Harian", blurb: "Daftar kebiasaan sederhana yang diatur ulang setiap hari", icon: CheckSquare },
  { href: "/guides", label: "Pustaka Panduan", blurb: "Artikel dengan penjelasan yang jelas dan praktis", icon: BookOpen },
];
