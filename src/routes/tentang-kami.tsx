import { createFileRoute } from "@tanstack/react-router";
import { HeartHandshake, MapPin, Sparkles } from "lucide-react";

import headerImg from "@/assets/Pura_Ulun_Danu_Bratan.jpg.asset.json";
import { CtaBanner } from "@/components/CtaBanner";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeader } from "@/components/SectionHeader";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/tentang-kami")({
  component: TentangKamiPage,
  head: () => ({
    meta: [
      { title: "Tentang Kami | Dewata Journey" },
      {
        name: "description",
        content:
          "Dewata Journey adalah layanan tour harian di Bali dengan paket yang simpel dan jelas.",
      },
      { property: "og:title", content: "Tentang Kami | Dewata Journey" },
      {
        property: "og:description",
        content:
          "Dewata Journey adalah layanan tour harian di Bali dengan paket yang simpel dan jelas.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/tentang-kami" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/tentang-kami" }],
  }),
});

const VALUES = [
  {
    icon: Sparkles,
    title: "Simple",
    text: "Paket jelas dan harga per orang.",
  },
  {
    icon: HeartHandshake,
    title: "Local Touch",
    text: "Guide yang paham cerita di balik setiap tempat.",
  },
  {
    icon: MapPin,
    title: "Fleksibel",
    text: "Jadwal dan jemputan bisa disesuaikan.",
  },
];

function TentangKamiPage() {
  const revealRef = useReveal<HTMLDivElement>();

  return (
    <div ref={revealRef}>
      <PageHeader
        image={headerImg.url}
        title="Tentang Kami"
        subtitle="Day trip di Bali, dibuat simpel."
      />

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2 md:px-6">
          <div className="reveal overflow-hidden rounded-2xl">
            <img
              src={headerImg.url}
              alt="Pura Ulun Danu Bratan di tepi danau Bedugul"
              loading="lazy"
              className="size-full object-cover"
            />
          </div>
          <div className="reveal">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold-text">
              Cerita Kami
            </p>
            <h2 className="mt-2 font-heading text-3xl text-primary md:text-4xl">
              Tentang Dewata Journey
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Dewata Journey adalah layanan tour harian di Bali. Nama kami
              diambil dari &quot;Dewata&quot;, sebutan untuk Bali sebagai Pulau
              Dewata. Kami menyiapkan paket sederhana ke destinasi yang paling
              sering dicari wisatawan, dengan transport, guide, dan tiket masuk
              yang sudah diatur supaya kamu bisa fokus menikmati perjalanan.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Tidak ada paket yang ribet. Kamu pilih destinasinya, kirim tanggal
              lewat WhatsApp, dan sisanya kami urus.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <SectionHeader label="Nilai Kami" title="Yang Kami Pegang" />
          <div className="reveal mt-10 grid gap-6 md:grid-cols-3">
            {VALUES.map((item) => (
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

      <CtaBanner
        title="Mau ngobrol dulu?"
        text="Tanya apa aja soal paket, jadwal, atau area jemput."
        buttonLabel="Chat via WhatsApp"
      />
    </div>
  );
}
