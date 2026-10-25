import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarCheck, Car, MessageCircle, Ticket } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import hero from "@/assets/Hero.jpg";
import { CtaBanner } from "@/components/CtaBanner";
import { PackageCard } from "@/components/PackageCard";
import { PackageDialog } from "@/components/PackageDialog";
import { SectionHeader } from "@/components/SectionHeader";
import { packages, type TourPackage } from "@/data/packages";
import { useReveal } from "@/hooks/use-reveal";
import { buildWaLink, generalMessage } from "@/lib/whatsapp";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Dewata Journey | Bali Tour & Travel" },
      {
        name: "description",
        content:
          "Day trip di Bali ke Nusa Penida, Ulun Danu Bratan, Uluwatu, dan Penglipuran. Pesan lewat WhatsApp.",
      },
      { property: "og:title", content: "Dewata Journey | Bali Tour & Travel" },
      {
        property: "og:description",
        content:
          "Day trip di Bali ke Nusa Penida, Ulun Danu Bratan, Uluwatu, dan Penglipuran. Pesan lewat WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const ADVANTAGES = [
  {
    icon: Car,
    title: "Transport & Guide",
    text: "Dijemput dari hotel dan ditemani guide selama perjalanan.",
  },
  {
    icon: Ticket,
    title: "Tiket Masuk Included",
    text: "Tiket destinasi sudah masuk di harga paket.",
  },
  {
    icon: CalendarCheck,
    title: "Jadwal Fleksibel",
    text: "Tanggal dan jam jemput bisa kita atur bareng.",
  },
  {
    icon: MessageCircle,
    title: "Booking Gampang",
    text: "Cukup chat WhatsApp, tanpa daftar akun.",
  },
];

const STEPS = [
  {
    title: "Pilih Paket",
    text: "Lihat detail tiap paket dan pilih yang cocok.",
  },
  {
    title: "Chat via WhatsApp",
    text: "Kirim tanggal, jumlah orang, dan area jemput.",
  },
  {
    title: "Berangkat",
    text: "Kami konfirmasi jadwalnya, kamu tinggal siap jalan.",
  },
];

function HomePage() {
  const [selected, setSelected] = useState<TourPackage | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const revealRef = useReveal<HTMLDivElement>();

  const openDetail = (pkg: TourPackage) => {
    setSelected(pkg);
    setDialogOpen(true);
  };

  return (
    <div ref={revealRef}>
      {/* Hero: tinggi mengikuti sisa layar di bawah navbar, gambar proporsional */}
      <section className="relative flex flex-col overflow-hidden bg-footer min-h-[calc(100svh-64px)] md:min-h-[calc(100svh-72px)]">
          <img
            src={hero}
            alt="Pantai dan tebing di Bali dengan laut biru"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(15,58,74,0) 45%, rgba(15,58,74,0.8) 100%)",
            }}
            aria-hidden="true"
          />
          <div className="relative flex flex-1 items-end md:pt-6 pb-12 md:pb-16">
          <div className="relative mx-auto w-full max-w-6xl px-4 pb-16 pt-12 text-center md:px-6 md:pb-24 md:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary-foreground drop-shadow-sm md:text-base">
              Bali Tour &amp; Travel
            </p>
            <h1 className="mt-3 font-heading text-4xl leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
              Explore Bali Bareng Dewata Journey
            </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-primary-foreground/90 md:mx-0">
            Day trip ke Nusa Penida, Ulun Danu Bratan, Uluwatu, dan Penglipuran.
            Transport, guide, dan tiket masuk sudah kami urus.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:justify-start">
            <Link
              to="/paket-wisata"
              className="inline-flex h-11 items-center justify-center rounded-full bg-accent px-6 text-sm font-medium text-accent-foreground transition-colors duration-150 hover:bg-accent/90"
            >
              Lihat Paket Wisata
            </Link>
            <a
              href={buildWaLink(generalMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full border-[1.5px] border-primary-foreground px-6 text-sm font-medium text-primary-foreground transition-colors duration-150 hover:bg-primary-foreground hover:text-primary"
            >
              <FaWhatsapp className="size-[18px]" aria-hidden="true" />
              Pesan via WhatsApp
            </a>
          </div>
          </div>
        </div>
      </section>

      {/* Keunggulan */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="reveal grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {ADVANTAGES.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-card p-6"
              >
                <div className="flex size-12 items-center justify-center rounded-full bg-secondary">
                  <item.icon className="size-7 text-primary" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-heading text-xl text-foreground">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Paket Wisata */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <SectionHeader
            label="Day Trip"
            title="Pilih Paket Kamu"
            subtitle="Empat destinasi favorit di Bali. Harga per orang."
          />
          <div className="reveal mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {packages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} onDetail={openDetail} />
            ))}
          </div>
          <div className="reveal mt-10 text-center">
            <Link
              to="/paket-wisata"
              className="inline-flex h-11 items-center justify-center rounded-full border-[1.5px] border-primary px-6 text-sm font-medium text-primary transition-colors duration-150 hover:bg-primary hover:text-primary-foreground"
            >
              Lihat Semua Paket
            </Link>
          </div>
        </div>
      </section>

      {/* Cara Pesan Singkat */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <SectionHeader
            label="Cara Pesan"
            title="Tiga Langkah, Langsung Jalan"
          />
          <div className="reveal mt-10 grid gap-8 md:grid-cols-3">
            {STEPS.map((step, i) => (
              <div key={step.title} className="text-center">
                <div className="mx-auto flex size-16 items-center justify-center rounded-full border border-border">
                  <span className="font-heading text-3xl text-accent">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-4 font-heading text-xl text-foreground">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Masih bingung pilih paket?"
        text="Chat aja dulu, kami bantu pilihkan sesuai waktu dan budget kamu."
        buttonLabel="Chat Sekarang"
      />

      <PackageDialog
        pkg={selected}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </div>
  );
}
