import { FaWhatsapp } from "react-icons/fa";

import { buildWaLink, generalMessage } from "@/lib/whatsapp";

type Props = {
  title: string;
  text: string;
  buttonLabel: string;
};

export function CtaBanner({ title, text, buttonLabel }: Props) {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="reveal rounded-3xl bg-primary px-6 py-12 text-center md:px-12 md:py-16">
          <h2 className="font-heading text-3xl text-primary-foreground md:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-primary-foreground/90">
            {text}
          </p>
          <a
            href={buildWaLink(generalMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex h-11 items-center gap-2 rounded-full bg-accent px-6 text-sm font-medium text-accent-foreground transition-colors duration-150 hover:bg-accent/90"
          >
            <FaWhatsapp className="size-[18px]" aria-hidden="true" />
            {buttonLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
