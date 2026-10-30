import { Search } from "lucide-react";

interface Props {
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  label: string;
}

export default function SearchInput({ value, onChange, placeholder, label }: Props) {
  return (
    <label className="relative block">
      <span className="sr-only">{label}</span>
      <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-mute" aria-hidden />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-ink-800 py-3 pl-10 pr-4 text-sm text-bone placeholder:text-mute focus:border-lime/60 focus:outline-none"
      />
    </label>
  );
}
