import { FaWhatsapp } from "react-icons/fa";

import { buildWaLink, generalMessage } from "@/lib/whatsapp";

export function WhatsAppFloat() {
  return (
    <a
      href={buildWaLink(generalMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat Dewata Journey via WhatsApp"
      className="group fixed right-4 bottom-[calc(16px+env(safe-area-inset-bottom))] z-50 md:right-6 md:bottom-6"
    >
      <span className="pointer-events-none absolute -left-44 top-1/2 hidden -translate-y-1/2 rounded-full bg-card px-4 py-2 text-sm font-medium text-foreground opacity-0 shadow-md transition-opacity duration-150 group-hover:opacity-100 md:block">
        Chat via WhatsApp
      </span>
      <span
        aria-hidden="true"
        className="wa-ping absolute inset-0 rounded-full bg-whatsapp/40 animate-ping"
      />
      <span className="wa-wiggle relative flex size-14 items-center justify-center rounded-full bg-whatsapp shadow-[0_8px_20px_rgba(37,211,102,0.35)] transition-transform duration-200 group-hover:scale-110 group-active:scale-95 md:size-[60px]">
        <FaWhatsapp className="size-[30px] text-card" aria-hidden="true" />
      </span>
    </a>
  );
}
