"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItem {
  id: string;
  title: string;
  summary?: string;
  content: ReactNode;
}

export default function Accordion({ items, defaultOpen }: { items: AccordionItem[]; defaultOpen?: string }) {
  const [open, setOpen] = useState<string | null>(defaultOpen ?? null);

  return (
    <div className="space-y-2">
      {items.map((item) => {
        const isOpen = open === item.id;
        return (
          <div key={item.id} className="overflow-hidden rounded-xl border border-white/10 bg-moss/60">
            <button
              type="button"
              id={`acc-btn-${item.id}`}
              aria-expanded={isOpen}
              aria-controls={`acc-panel-${item.id}`}
              onClick={() => setOpen(isOpen ? null : item.id)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span>
                <span className="block font-display text-lg text-bone">{item.title}</span>
                {item.summary && <span className="mt-0.5 block text-sm text-mute">{item.summary}</span>}
              </span>
              <ChevronDown className={cn("h-5 w-5 shrink-0 text-lime transition-transform", isOpen && "rotate-180")} aria-hidden />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`acc-panel-${item.id}`}
                  role="region"
                  aria-labelledby={`acc-btn-${item.id}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.22 }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5">{item.content}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
