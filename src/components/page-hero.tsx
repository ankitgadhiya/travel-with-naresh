import Image from "next/image";
import { assetPath } from "@/lib/site";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="page-hero">
      <Image className="page-hero-image" src={assetPath("/images/destinations/europe.webp")} alt="" fill priority sizes="100vw" />
      <div className="shell narrow">
        <p className="eyebrow gold">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-intro">{description}</p>
      </div>
    </section>
  );
}
