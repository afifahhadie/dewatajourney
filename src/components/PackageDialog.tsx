import { Check, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import {
  formatPrice,
  PICKUP_AREAS,
  type TourPackage,
} from "@/data/packages";
import { buildWaLink, packageMessage } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

type Props = {
  pkg: TourPackage | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function PackageDialog({ pkg, open, onOpenChange }: Props) {
  if (!pkg) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="block max-h-[90vh] w-[calc(100%-2rem)] max-w-2xl overflow-x-hidden overflow-y-auto rounded-2xl p-0 sm:rounded-2xl">
        <div className="w-full overflow-hidden rounded-t-2xl">
          <img
            src={pkg.image}
            alt={`Foto destinasi ${pkg.name}`}
            className="block aspect-[16/9] w-full object-cover"
          />
        </div>
        <div className="min-w-0 space-y-4 break-words p-6">
          <DialogHeader className="text-left">
            <DialogTitle className="font-heading text-2xl leading-snug text-foreground">
              {pkg.name}
            </DialogTitle>
          </DialogHeader>

          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-primary">
              {pkg.duration}
            </span>
            <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-primary">
              {pkg.location}
            </span>
          </div>

          <p className="font-heading text-2xl text-primary">
            {formatPrice(pkg.price)}{" "}
            <span className="font-sans text-sm font-normal text-muted-foreground">
              / orang
            </span>
          </p>
          <DialogDescription className="text-sm leading-relaxed text-muted-foreground">
            {pkg.tagline}
          </DialogDescription>

          <section className="space-y-2">
          <h3 className="font-heading text-xl text-foreground">Highlights</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {pkg.highlights.map((h) => (
              <span
                key={h}
                className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-primary"
              >
                {h}
              </span>
            ))}
          </div>
          </section>

          <section className="space-y-2">
          <h3 className="font-heading text-xl text-foreground">Itinerary</h3>
          <ul className="mt-2 divide-y divide-border">
            {pkg.itinerary.map((item) => (
              <li key={item.time} className="flex gap-4 py-2 text-sm">
                <span className="w-12 shrink-0 font-medium text-primary">
                  {item.time}
                </span>
                <span className="text-foreground">{item.activity}</span>
              </li>
            ))}
          </ul>
          </section>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="font-heading text-xl text-foreground">
                Sudah Termasuk
              </h3>
              <ul className="mt-2 space-y-2">
                {pkg.included.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <Check
                      className="mt-0.5 size-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-xl text-foreground">
                Belum Termasuk
              </h3>
              <ul className="mt-2 space-y-2">
                {pkg.excluded.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <X
                      className="mt-0.5 size-4 shrink-0 text-muted-foreground"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <section className="space-y-2">
          <h3 className="font-heading text-xl text-foreground">Catatan</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground">
            {pkg.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
          </section>

          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Area jemput:</span>{" "}
            {PICKUP_AREAS.join(", ")}. Area lain bisa ditanyakan lewat WhatsApp.
          </p>

          <Button asChild className="h-auto min-h-11 w-full whitespace-normal rounded-full bg-accent px-4 py-3 text-sm font-medium text-accent-foreground shadow-none hover:bg-accent/90">
          <a
            href={buildWaLink(packageMessage(pkg.name))}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="size-[18px]" aria-hidden="true" />
            Pesan Paket Ini via WhatsApp
          </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
