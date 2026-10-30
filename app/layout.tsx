import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import AppShell from "@/components/layout/AppShell";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = Instrument_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  title: { default: "LOOKSMAX - Panduan Perawatan Diri Sehat", template: "%s | LOOKSMAX" },
  description: "Platform edukasi tentang perawatan kulit dan rambut, postur, aktivitas fisik, gaya berpakaian, dan kebiasaan sehari-hari.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${display.variable} ${body.variable}`}>
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
