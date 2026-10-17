import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { FaWhatsapp } from "react-icons/fa";

import headerImg from "@/assets/Nusa_Penida.jpg.asset.json";
import { PackageCard } from "@/components/PackageCard";
import { PackageDialog } from "@/components/PackageDialog";
import { PageHeader } from "@/components/PageHeader";
import { packages, type TourPackage } from "@/data/packages";
import { useReveal } from "@/hooks/use-reveal";
import { buildWaLink, generalMessage } from "@/lib/whatsapp";

export const Route = createFileRoute("/paket-wisata")({
  component: PaketWisataPage,
  head: () => ({
    meta: [
      { title: "Paket Wisata Bali | Dewata Journey" },
      {
        name: "description",
        content:
          "Empat paket day trip di Bali dengan transport, guide, dan tiket masuk. Harga per orang.",
      },
      { property: "og:title", content: "Paket Wisata Bali | Dewata Journey" },
      {
        property: "og:description",
        content:
          "Empat paket day trip di Bali dengan transport, guide, dan tiket masuk. Harga per orang.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/paket-wisata" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/paket-wisata" }],
  }),
});

function PaketWisataPage() {
  const [selected, setSelected] = useState<TourPackage | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const revealRef = useReveal<HTMLDivElement>();

  const openDetail = (pkg: TourPackage) => {
    setSelected(pkg);
    setDialogOpen(true);
  };

  return (
    <div ref={revealRef}>
      <PageHeader
        image={headerImg.url}
        title="Paket Wisata"
        subtitle="Empat day trip pilihan di Bali. Harga per orang, sudah termasuk transport, guide, dan tiket masuk."
      />

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="reveal grid grid-cols-1 gap-6 md:grid-cols-2">
            {packages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} onDetail={openDetail} />
            ))}
          </div>
          <p className="reveal mt-8 text-center text-sm text-muted-foreground">
            Harga adalah estimasi dan bisa berubah. Konfirmasi final lewat
            WhatsApp.
          </p>
        </div>
      </section>

      <section className="bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="reveal rounded-3xl bg-primary px-6 py-12 text-center md:px-12 md:py-16">
            <h2 className="font-heading text-3xl text-primary-foreground md:text-4xl">
              Mau gabung beberapa destinasi?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-primary-foreground/90">
              Chat kami, nanti kita susun paket custom sesuai waktu liburanmu.
            </p>
            <a
              href={buildWaLink(generalMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex h-11 items-center gap-2 rounded-full bg-accent px-6 text-sm font-medium text-accent-foreground transition-colors duration-150 hover:bg-accent/90"
            >
              <FaWhatsapp className="size-[18px]" aria-hidden="true" />
              Tanya Paket Custom
            </a>
          </div>
        </div>
      </section>

      <PackageDialog
        pkg={selected}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </div>
  );
}
