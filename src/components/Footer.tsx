import { Link } from "@tanstack/react-router";
import { FaWhatsapp } from "react-icons/fa";

import { buildWaLink, generalMessage, WA_DISPLAY } from "@/lib/whatsapp";

const NAV_ITEMS = [
  { to: "/", label: "Home" },
  { to: "/paket-wisata", label: "Paket Wisata" },
  { to: "/cara-pesan", label: "Cara Pesan" },
  { to: "/tentang-kami", label: "Tentang Kami" },
  { to: "/kontak", label: "Kontak" },
] as const;

export function Footer() {
  return (
    <footer className="bg-footer text-background/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-3 md:px-6">
        <div>
          <p className="font-heading text-[28px] leading-tight">
            <span className="text-background">Dewata</span>{" "}
            <span className="text-accent">Journey</span>
          </p>
          <p className="mt-1 text-sm font-medium text-accent">Bali Tour &amp; Travel</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Day trip di Bali dengan transport, guide, dan tiket masuk yang sudah
            diatur.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Menu
          </h3>
          <ul className="mt-4 space-y-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm transition-colors duration-150 hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Kontak
          </h3>
          <a
            href={buildWaLink(generalMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm transition-colors duration-150 hover:text-accent"
          >
            <FaWhatsapp className="size-4" aria-hidden="true" />
            {WA_DISPLAY}
          </a>
          <p className="mt-2 text-sm">Bali, Indonesia</p>
        </div>
      </div>

      <div className="border-t border-background/15">
        <p className="mx-auto max-w-6xl px-4 py-5 text-center text-xs md:px-6">
          © 2026 Dewata Journey
        </p>
      </div>
    </footer>
  );
}
