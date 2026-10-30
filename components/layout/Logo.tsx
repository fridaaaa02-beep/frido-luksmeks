import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="block">
      <span className="font-display text-2xl font-bold tracking-tight">
        FRED<span className="text-lime">MAXXING</span>
      </span>
      <span className="block text-xs text-mute">Panduan Perawatan Diri Sehat</span>
    </Link>
  );
}
