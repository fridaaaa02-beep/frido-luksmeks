import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export default function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("rounded-2xl border border-white/10 bg-moss/70 p-5 sm:p-6", className)} {...props} />;
}
