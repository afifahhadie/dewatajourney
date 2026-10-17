import { FaWhatsapp } from "react-icons/fa";

import { formatPrice, type TourPackage } from "@/data/packages";
import { buildWaLink, packageMessage } from "@/lib/whatsapp";

type Props = {
  pkg: TourPackage;
  onDetail: (pkg: TourPackage) => void;
};

export function PackageCard({ pkg, onDetail }: Props) {
  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={pkg.image}
          alt={`Foto destinasi ${pkg.name}`}
          loading="lazy"
          className="size-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="space-y-3 p-5">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-primary">
            {pkg.duration}
          </span>
          <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-primary">
            {pkg.location}
          </span>
        </div>
        <h3 className="font-heading text-xl text-foreground">{pkg.name}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {pkg.tagline}
        </p>
        <p className="font-heading text-2xl text-primary">
          {formatPrice(pkg.price)}{" "}
          <span className="font-sans text-sm font-normal text-muted-foreground">
            / orang
          </span>
        </p>
        <div className="flex flex-col gap-2 sm:flex-row">
          <button
            type="button"
            onClick={() => onDetail(pkg)}
            className="inline-flex h-11 w-full items-center justify-center rounded-full border-[1.5px] border-primary px-6 text-sm font-medium text-primary transition-colors duration-150 hover:bg-primary hover:text-primary-foreground sm:w-auto sm:flex-1"
          >
            Lihat Detail
          </button>
          <a
            href={buildWaLink(packageMessage(pkg.name))}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-accent px-6 text-sm font-medium text-accent-foreground transition-colors duration-150 hover:bg-accent/90 sm:w-auto sm:flex-1"
          >
            <FaWhatsapp className="size-[18px]" aria-hidden="true" />
            Pesan via WA
          </a>
        </div>
      </div>
    </article>
  );
}
