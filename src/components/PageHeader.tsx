type Props = {
  image: string;
  title: string;
  subtitle: string;
};

export function PageHeader({ image, title, subtitle }: Props) {
  return (
    <section className="relative flex h-[280px] items-center justify-center overflow-hidden md:h-[360px]">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 size-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(15, 58, 74, 0.55)" }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-2xl px-4 text-center md:px-6">
        <h1 className="font-heading text-4xl text-primary-foreground md:text-5xl">
          {title}
        </h1>
        <p className="mt-3 text-base leading-relaxed text-primary-foreground/90">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
