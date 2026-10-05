type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="shell narrow">
        <p className="eyebrow gold">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-intro">{description}</p>
      </div>
    </section>
  );
}
