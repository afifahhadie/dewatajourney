import { createFileRoute } from "@tanstack/react-router";

import headerImg from "@/assets/Desa_Panglipuran.jpg.asset.json";
import { CtaBanner } from "@/components/CtaBanner";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeader } from "@/components/SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/cara-pesan")({
  component: CaraPesanPage,
  head: () => ({
    meta: [
      { title: "Cara Pesan | Dewata Journey" },
      {
        name: "description",
        content: "Pesan paket wisata Bali lewat WhatsApp tanpa daftar akun.",
      },
      { property: "og:title", content: "Cara Pesan | Dewata Journey" },
      {
        property: "og:description",
        content: "Pesan paket wisata Bali lewat WhatsApp tanpa daftar akun.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/cara-pesan" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/cara-pesan" }],
  }),
});

const STEPS = [
  {
    title: "Pilih Paket",
    text: "Lihat halaman Paket Wisata dan pilih destinasi yang kamu mau.",
  },
  {
    title: "Chat via WhatsApp",
    text: "Klik tombol Pesan via WA, pesannya sudah terisi otomatis.",
  },
  {
    title: "Kirim Info Perjalanan",
    text: "Isi tanggal, jumlah orang, dan area jemput.",
  },
  {
    title: "Konfirmasi dan Berangkat",
    text: "Kami konfirmasi jadwal dan detail pembayaran lewat chat, lalu kamu siap jalan.",
  },
];

const INFO_LIST = [
  "Nama",
  "Paket yang dipilih",
  "Tanggal trip",
  "Jumlah orang",
  "Area jemput atau nama hotel",
];

const FAQ = [
  {
    q: "Apa saja yang sudah termasuk di harga paket?",
    a: "Transport selama tour, guide, dan tiket masuk destinasi. Untuk Nusa Penida, speedboat pulang pergi juga sudah termasuk. Makan dan pengeluaran pribadi belum termasuk.",
  },
  {
    q: "Dijemput dari mana?",
    a: "Kami jemput dari Denpasar, Sanur, Kuta, Seminyak, Canggu, Nusa Dua, Jimbaran, dan Ubud. Area lain bisa ditanyakan lewat WhatsApp.",
  },
  {
    q: "Bagaimana cara pembayarannya?",
    a: "Detail pembayaran kami kirim lewat WhatsApp setelah jadwal dikonfirmasi.",
  },
  {
    q: "Bagaimana kalau cuaca buruk?",
    a: "Kalau cuaca atau kondisi laut tidak aman, kami kabari dan atur ulang jadwal bareng kamu.",
  },
  {
    q: "Boleh bawa anak kecil atau lansia?",
    a: "Boleh. Kabari kami saat chat supaya rute dan tempo perjalanan bisa disesuaikan. Untuk Nusa Penida, jalurnya cukup curam di beberapa titik.",
  },
  {
    q: "Bisa tour private?",
    a: "Semua paket bisa dibuat private untuk rombongan kamu. Tanyakan detailnya lewat WhatsApp.",
  },
];

function CaraPesanPage() {
  const revealRef = useReveal<HTMLDivElement>();

  return (
    <div ref={revealRef}>
      <PageHeader
        image={headerImg.url}
        title="Cara Pesan"
        subtitle="Tidak perlu daftar akun. Semua lewat WhatsApp."
      />

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <SectionHeader label="Booking" title="Empat Langkah Mudah" />
          <div className="reveal mt-10 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            {STEPS.map((step, i) => (
              <div key={step.title} className="relative text-center">
                <div className="mx-auto flex size-16 items-center justify-center rounded-full border border-border bg-card">
                  <span className="font-heading text-3xl text-accent">
                    {i + 1}
                  </span>
                </div>
                {i < STEPS.length - 1 ? (
                  <div
                    aria-hidden="true"
                    className="absolute left-[calc(50%+40px)] top-8 hidden w-[calc(100%-80px)] border-t border-dashed border-border md:block"
                  />
                ) : null}
                <h3 className="mt-4 font-heading text-xl text-foreground">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {step.text}
                </p>
              </div>
            ))}
          </div>

          <div className="reveal mx-auto mt-12 max-w-2xl rounded-2xl border border-border bg-card p-6">
            <h3 className="font-heading text-xl text-foreground">
              Info yang perlu kamu kirim
            </h3>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground">
              {INFO_LIST.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <SectionHeader label="FAQ" title="Pertanyaan yang Sering Ditanya" />
          <div className="reveal mx-auto mt-10 max-w-2xl rounded-2xl border border-border bg-card px-6">
            <Accordion type="single" collapsible>
              {FAQ.map((item, i) => (
                <AccordionItem key={item.q} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left text-base font-medium data-[state=open]:text-primary">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Siap booking?"
        text="Kirim tanggal dan jumlah orang, kami urus sisanya."
        buttonLabel="Chat via WhatsApp"
      />
    </div>
  );
}
