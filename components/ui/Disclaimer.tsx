import { Info } from "lucide-react";

export default function Disclaimer({ children }: { children?: React.ReactNode }) {
  return (
    <aside className="mb-8 flex gap-3 rounded-xl border border-lime/25 bg-lime/5 p-4 text-sm text-bone/90">
      <Info className="mt-0.5 h-4 w-4 shrink-0 text-lime" aria-hidden />
      <p>
        {children ??
          "Halaman ini hanya memberikan informasi edukasi umum dan bukan saran medis. Setiap orang berbeda. Konsultasikan masalah kesehatan dengan tenaga kesehatan yang kompeten."}
      </p>
    </aside>
  );
}
