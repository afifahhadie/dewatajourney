type Props = {
  label: string;
  title: string;
  subtitle?: string;
};

export function SectionHeader({ label, title, subtitle }: Props) {
  return (
    <div className="reveal mx-auto max-w-2xl text-center">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold-text">
        {label}
      </p>
      <h2 className="mt-2 font-heading text-3xl text-primary md:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
