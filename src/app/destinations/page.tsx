import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { assetPath, destinations } from "@/lib/site";

export const metadata: Metadata = {
  title: "International Destination Experience",
  description: "Explore Naresh Gadhiya's destination experience across Europe, USA, Canada, UK, Australia, New Zealand, Asia, Middle East and South Africa.",
  alternates: { canonical: "/destinations" },
};

export default function DestinationsPage() {
  return (
    <>
      <PageHero eyebrow="First-hand perspective" title="Destination Experience" description="Practical international insight developed through decades of tour management, group travel and personal consultation." />
      <section className="section section-soft">
        <div className="shell destination-grid">
          {destinations.map((destination) => (
            <Link key={destination.slug} className="destination-card" href={`/destinations/${destination.slug}`}>
              <Image src={assetPath(destination.image)} alt="" fill sizes="(max-width: 760px) 100vw, 25vw" />
              <span className="destination-overlay" />
              <div><p className="eyebrow">{destination.eyebrow}</p><h3>{destination.name}</h3><p>{destination.description}</p></div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
