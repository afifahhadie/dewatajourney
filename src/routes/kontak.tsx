import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Clock, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import headerImg from "@/assets/Tari_Kecak_Uluwatu.jpg";
import { PageHeader } from "@/components/PageHeader";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { packages } from "@/data/packages";
import { useReveal } from "@/hooks/use-reveal";
import { buildWaLink, generalMessage, WA_DISPLAY } from "@/lib/whatsapp";

export const Route = createFileRoute("/kontak")({
  component: KontakPage,
  head: () => ({
    meta: [
      { title: "Kontak | Dewata Journey" },
      {
        name: "description",
        content:
          "Hubungi Dewata Journey lewat WhatsApp untuk tanya paket, jadwal, dan jemputan.",
      },
      { property: "og:title", content: "Kontak | Dewata Journey" },
      {
        property: "og:description",
        content:
          "Hubungi Dewata Journey lewat WhatsApp untuk tanya paket, jadwal, dan jemputan.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/kontak" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/kontak" }],
  }),
});

const PACKAGE_OPTIONS = [...packages.map((p) => p.name), "Paket Custom"];

type Errors = {
  nama?: string;
  paket?: string;
  jumlah?: string;
};

function KontakPage() {
  const revealRef = useReveal<HTMLDivElement>();
  const [nama, setNama] = useState("");
  const [paket, setPaket] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [area, setArea] = useState("");
  const [catatan, setCatatan] = useState("");
  const [errors, setErrors] = useState<Errors>({});

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const next: Errors = {};
    if (!nama.trim()) next.nama = "Nama wajib diisi.";
    if (!paket) next.paket = "Pilih salah satu paket.";
    const jumlahNum = Number(jumlah);
    if (!jumlah || !Number.isFinite(jumlahNum) || jumlahNum < 1)
      next.jumlah = "Jumlah orang minimal 1.";

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const lines = [
      `Halo Dewata Journey, saya mau pesan paket ${paket}.`,
      `Nama: ${nama.trim()}`,
    ];
    if (tanggal) lines.push(`Tanggal: ${tanggal}`);
    lines.push(`Jumlah orang: ${jumlahNum}`);
    if (area.trim()) lines.push(`Area jemput: ${area.trim()}`);
    if (catatan.trim()) lines.push(`Catatan: ${catatan.trim()}`);

    window.open(buildWaLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  };

  const inputClass =
    "h-11 rounded-lg border-border bg-card focus-visible:ring-2 focus-visible:ring-ring";

  return (
    <div ref={revealRef}>
      <PageHeader
        image={headerImg}
        title="Kontak"
        subtitle="Tanya paket, jadwal, atau jemputan. Kami balas lewat WhatsApp."
      />

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:px-6">
          {/* Info kontak */}
          <div className="reveal space-y-4">
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex size-12 items-center justify-center rounded-full bg-secondary">
                <FaWhatsapp className="size-7 text-primary" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-heading text-xl text-foreground">
                WhatsApp
              </h3>
              <a
                href={buildWaLink(generalMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block text-sm font-medium text-primary transition-colors duration-150 hover:text-teal-deep"
              >
                {WA_DISPLAY}
              </a>
              <a
                href={buildWaLink(generalMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex h-11 items-center gap-2 rounded-full bg-accent px-6 text-sm font-medium text-accent-foreground transition-colors duration-150 hover:bg-accent/90"
              >
                <FaWhatsapp className="size-[18px]" aria-hidden="true" />
                Chat Sekarang
              </a>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex size-12 items-center justify-center rounded-full bg-secondary">
                <Clock className="size-7 text-primary" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-heading text-xl text-foreground">
                Jam Balas
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Setiap hari, 08.00 sampai 21.00 WITA
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex size-12 items-center justify-center rounded-full bg-secondary">
                <MapPin className="size-7 text-primary" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-heading text-xl text-foreground">
                Area Layanan
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Bali, Indonesia
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="reveal rounded-2xl border border-border bg-card p-6">
            <h2 className="font-heading text-2xl text-foreground">
              Kirim Pesan via WhatsApp
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Isi form ini, pesannya langsung tersusun dan terbuka di WhatsApp.
            </p>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
              <div>
                <Label htmlFor="nama">Nama</Label>
                <Input
                  id="nama"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  className={inputClass}
                  placeholder="Nama kamu"
                />
                {errors.nama ? (
                  <p className="mt-1 text-sm text-destructive">{errors.nama}</p>
                ) : null}
              </div>

              <div>
                <Label htmlFor="paket">Paket</Label>
                <Select value={paket} onValueChange={setPaket}>
                  <SelectTrigger id="paket" className={inputClass}>
                    <SelectValue placeholder="Pilih paket" />
                  </SelectTrigger>
                  <SelectContent>
                    {PACKAGE_OPTIONS.map((name) => (
                      <SelectItem key={name} value={name}>
                        {name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.paket ? (
                  <p className="mt-1 text-sm text-destructive">{errors.paket}</p>
                ) : null}
              </div>

              <div>
                <Label htmlFor="tanggal">Tanggal trip</Label>
                <Input
                  id="tanggal"
                  type="date"
                  value={tanggal}
                  onChange={(e) => setTanggal(e.target.value)}
                  className={inputClass}
                />
              </div>

              <div>
                <Label htmlFor="jumlah">Jumlah orang</Label>
                <Input
                  id="jumlah"
                  type="number"
                  min={1}
                  value={jumlah}
                  onChange={(e) => setJumlah(e.target.value)}
                  className={inputClass}
                  placeholder="Contoh: 2"
                />
                {errors.jumlah ? (
                  <p className="mt-1 text-sm text-destructive">
                    {errors.jumlah}
                  </p>
                ) : null}
              </div>

              <div>
                <Label htmlFor="area">Area jemput</Label>
                <Input
                  id="area"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className={inputClass}
                  placeholder="Contoh: Seminyak atau nama hotel"
                />
              </div>

              <div>
                <Label htmlFor="catatan">Catatan (opsional)</Label>
                <Textarea
                  id="catatan"
                  value={catatan}
                  onChange={(e) => setCatatan(e.target.value)}
                  className="rounded-lg border-border bg-card focus-visible:ring-2 focus-visible:ring-ring"
                  placeholder="Contoh: ada anak kecil, alergi makanan, dll."
                />
              </div>

              <button
                type="submit"
                className="flex h-11 w-full items-center justify-center gap-2 rounded-full bg-accent px-6 text-sm font-medium text-accent-foreground transition-colors duration-150 hover:bg-accent/90"
              >
                <FaWhatsapp className="size-[18px]" aria-hidden="true" />
                Kirim via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
