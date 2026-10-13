type PageHeaderProps = {
  kicker: string;
  title: string;
  lede: string;
};

export function PageHeader({ kicker, title, lede }: PageHeaderProps) {
  return (
    <header className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-deep">{kicker}</p>
      <h1 className="mt-3 font-serif text-4xl tracking-tight text-forest sm:text-5xl">{title}</h1>
      <p className="mt-4 text-lg leading-relaxed text-moss">{lede}</p>
    </header>
  );
}
