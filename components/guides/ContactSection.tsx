"use client";

import { useState } from "react";

const contacts = [
  {
    name: "Instagram",
    username: "@fridvnoo",
    href: "https://www.instagram.com/fridvnoo/",
    label: "Hubungi lewat Instagram",
    icon: "instagram",
  },
  {
    name: "WhatsApp",
    username: "+62 821-9786-0612",
    href: "https://wa.me/6282197860612",
    label: "Kirim pesan lewat WhatsApp",
    icon: "whatsapp",
  },
] as const;

export default function ContactSection() {
  const [copyStatus, setCopyStatus] = useState("");

  async function copyDiscordUsername() {
    try {
      await navigator.clipboard.writeText("frido5073");
      setCopyStatus("Username Discord berhasil disalin.");
    } catch {
      setCopyStatus("Tidak dapat menyalin otomatis. Username: frido5073");
    }
  }

  return (
    <section className="border-t border-white/10 pt-5">
      <h2 className="text-sm font-semibold">Menemukan kesalahan informasi?</h2>
      <p className="mt-1 text-xs leading-relaxed text-mute">Hubungi kami untuk memberi tahu.</p>
      <div className="mt-3 space-y-1">
        {contacts.map((contact) => (
          <a
            key={contact.name}
            href={contact.href}
            target="_blank"
            rel="noreferrer"
            aria-label={contact.label}
            className="flex items-center gap-3 rounded-lg px-2 py-2 text-sm transition-colors hover:bg-white/5"
          >
            <BrandIcon name={contact.icon} />
            <span className="min-w-0">
              <span className="block font-medium">{contact.name}</span>
              <span className="block truncate text-xs text-mute">{contact.username}</span>
            </span>
          </a>
        ))}
        <div className="flex items-center gap-3 rounded-lg px-2 py-2">
          <BrandIcon name="discord" />
          <span className="min-w-0 flex-1">
            <span className="block text-sm font-medium">Discord</span>
            <span className="block text-xs text-mute">@frido5073</span>
          </span>
          <button
            type="button"
            onClick={copyDiscordUsername}
            className="rounded-md border border-white/10 px-2 py-1 text-xs transition-colors hover:border-lime/50"
          >
            Salin
          </button>
        </div>
      </div>
      <p className="mt-1 min-h-4 text-xs text-lime" role="status" aria-live="polite">{copyStatus}</p>
    </section>
  );
}

function BrandIcon({ name }: { name: "instagram" | "whatsapp" | "discord" }) {
  const paths = {
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="18" cy="6" r="0.8" fill="currentColor" stroke="none" />
      </>
    ),
    whatsapp: (
      <>
        <path d="M20.5 11.8a8.4 8.4 0 0 1-12.4 7.4L3 20.5l1.3-4.9a8.4 8.4 0 1 1 16.2-3.8Z" />
        <path d="M8.2 8.1c.2-.5.5-.5.8-.5h.5c.2 0 .4.1.5.4l.8 1.8c.1.2.1.4 0 .6l-.6.7c-.2.2-.2.4 0 .6.5.9 1.3 1.6 2.2 2.1.2.1.4.1.6-.1l.8-.9c.2-.2.4-.2.6-.1l1.7.8c.3.1.4.3.4.5 0 .3-.2 1.2-.8 1.7-.5.5-1.3.8-2.1.7-1.3-.2-2.8-.9-4.3-2.3-1.2-1.1-2.1-2.5-2.4-3.7-.3-.9.1-1.8.5-2.3.3-.3.7-.1 1.1 0Z" />
      </>
    ),
    discord: (
      <>
        <path d="M19.7 5.3a18 18 0 0 0-4.4-1.4l-.6 1.2a16.6 16.6 0 0 0-5.4 0l-.6-1.2a18 18 0 0 0-4.4 1.4C1.5 9.4.7 13.4 1.1 17.4a18 18 0 0 0 5.4 2.7l1.2-1.9-1.9-.9.5-.4a12.8 12.8 0 0 0 11.4 0l.5.4-1.9.9 1.2 1.9a18 18 0 0 0 5.4-2.7c.5-4.7-.8-8.7-3.2-12.1ZM8.8 14.7c-1 0-1.8-.9-1.8-1.9s.8-1.9 1.8-1.9 1.8.9 1.8 1.9-.8 1.9-1.8 1.9Zm6.4 0c-1 0-1.8-.9-1.8-1.9s.8-1.9 1.8-1.9 1.8.9 1.8 1.9-.8 1.9-1.8 1.9Z" />
      </>
    ),
  } as const;

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6 shrink-0 text-lime"
    >
      {paths[name]}
    </svg>
  );
}
