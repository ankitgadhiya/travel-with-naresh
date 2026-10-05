import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { destinations, whatsappMessages, whatsappUrl } from "@/lib/site";

export function generateStaticParams() {
  return destinations.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const destination = destinations.find((item) => item.slug === slug);
  if (!destination) return {};
  return { title: `${destination.name} Travel Planning`, description: destination.description, alternates: { canonical: `/destinations/${slug}` } };
}

export default async function DestinationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const destination = destinations.find((item) => item.slug === slug);
  if (!destination) notFound();
  return (
    <>
      <PageHero eyebrow={destination.eyebrow} title={destination.name} description={destination.description} />
      <section className="section">
        <div className="shell split">
          <div><p className="eyebrow gold">Personal destination consultation</p><h2>Start with the journey you imagine.</h2><p className="support-copy">Share who is travelling, your preferred dates, interests, pace and budget. Naresh can help turn those inputs into a practical international itinerary.</p></div>
          <div className="card"><h3>Coming to this destination guide</h3><ul className="check-list"><li>Naresh&apos;s recommendations</li><li>Sample itinerary ideas</li><li>Practical travel tips</li><li>Original photos and travel stories</li><li>Relevant, consented customer experiences</li></ul><div className="button-row"><a className="button button-navy" href={whatsappUrl(whatsappMessages.travel)} target="_blank" rel="noreferrer">Discuss {destination.name}</a></div></div>
        </div>
      </section>
    </>
  );
}
