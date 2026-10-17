import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import logoAsset from "@/assets/Logo.png.asset.json";
import { buildWaLink, generalMessage } from "@/lib/whatsapp";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const NAV_ITEMS = [
  { to: "/", label: "Home" },
  { to: "/paket-wisata", label: "Paket Wisata" },
  { to: "/cara-pesan", label: "Cara Pesan" },
  { to: "/tentang-kami", label: "Tentang Kami" },
  { to: "/kontak", label: "Kontak" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const isActive = (to: string) =>
    to === "/" ? pathname === "/" : pathname.startsWith(to);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:h-[72px] md:px-6">
        <Link to="/" aria-label="Dewata Journey, kembali ke beranda">
          <img
            src={logoAsset.url}
            alt="Logo Dewata Journey"
            className="h-10 w-auto md:h-12"
          />
        </Link>

        <nav
          className="hidden items-center gap-6 md:flex"
          aria-label="Navigasi utama"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`relative py-1 text-sm font-medium text-foreground transition-colors duration-150 hover:text-primary ${
                isActive(item.to)
                  ? "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:bg-accent"
                  : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={buildWaLink(generalMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-11 items-center gap-2 rounded-full bg-accent px-6 text-sm font-medium text-accent-foreground transition-colors duration-150 hover:bg-accent/90 md:inline-flex"
          >
            <FaWhatsapp className="size-[18px]" aria-hidden="true" />
            Pesan via WA
          </a>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                className="inline-flex size-11 items-center justify-center rounded-lg text-foreground md:hidden"
                aria-label="Buka menu"
              >
                <Menu className="size-6" aria-hidden="true" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background">
              <SheetHeader>
                <SheetTitle className="text-left font-heading text-xl">
                  Dewata Journey
                </SheetTitle>
              </SheetHeader>
              <nav
                className="flex flex-col gap-1 px-4"
                aria-label="Navigasi utama"
              >
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={`rounded-lg px-3 py-3 text-lg font-medium transition-colors duration-150 hover:text-primary ${
                      isActive(item.to)
                        ? "text-primary underline decoration-accent decoration-2 underline-offset-8"
                        : "text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto p-4">
                <a
                  href={buildWaLink(generalMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-full items-center justify-center gap-2 rounded-full bg-accent px-6 text-sm font-medium text-accent-foreground transition-colors duration-150 hover:bg-accent/90"
                >
                  <FaWhatsapp className="size-[18px]" aria-hidden="true" />
                  Pesan via WA
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
