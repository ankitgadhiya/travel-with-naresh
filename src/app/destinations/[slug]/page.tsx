import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, ExternalLink, MapPinned, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { destinations, whatsappUrl } from "@/lib/site";

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
          <div><p className="eyebrow gold">Personal destination consultation</p><h2>Start with the journey you imagine.</h2><p className="support-copy">Share who is travelling, your preferred dates, interests, pace and budget. Naresh Gadhiya can turn those inputs into a practical international itinerary, supported by a worldwide network developed across decades in travel.</p></div>
          <div className="card"><h3>Planning can include</h3><ul className="check-list"><li>Route, pacing and stay recommendations</li><li>Flights, hotels and ground arrangements</li><li>Visa-document guidance</li><li>Family, group and senior-travel considerations</li><li>Indian or Jain meal coordination in select destinations, subject to availability</li></ul><div className="button-row"><a className="button button-navy" href={whatsappUrl(`Hello Mr. Gadhiya, I would like to customize a ${destination.name} itinerary.`)} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Discuss {destination.name}</a></div></div>
        </div>
      </section>
      <section className="section section-soft">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow gold">Starting points, not fixed packages</p>
            <h2>Sample {destination.name} itineraries.</h2>
            <p>These original planning examples are informed by Naresh Gadhiya&apos;s previous international tour-management experience, including career chapters with Thomas Cook India and Star Tours UK. They are not copied packages and do not imply any current affiliation with a former employer.</p>
          </div>
          <div className="itinerary-grid">
            {destination.itineraries.map((itinerary) => (
              <article className="itinerary-card" key={itinerary.title}>
                <div className="itinerary-top"><MapPinned /><span>{itinerary.duration}</span></div>
                <h3>{itinerary.title}</h3>
                <ol>{itinerary.route.map((stop, index) => <li key={stop}><span>{index + 1}</span>{stop}</li>)}</ol>
                <a href={whatsappUrl(`Hello Mr. Gadhiya, I am interested in the ${itinerary.title} sample itinerary for ${destination.name}. Please help me customize it.`)} target="_blank" rel="noreferrer">Customize this route <ArrowRight size={17} /></a>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section visa-link-section">
        <div className="shell visa-link-layout">
          <div><p className="eyebrow gold">Visa and entry information</p><h2>Start with official requirements. Continue with personal guidance.</h2><p>Government requirements can change. Use the official links below as the authoritative starting point, then contact Naresh Gadhiya for a personalized document checklist and application-readiness review.</p></div>
          <div className="official-link-card">
            {destination.visaLinks.length ? destination.visaLinks.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label}<ExternalLink size={16} /></a>) : <p>Visa requirements depend on the country selected. Contact Naresh Gadhiya for the appropriate official source and a personalized checklist.</p>}
            <a className="button button-coral" href={whatsappUrl(`Hello Mr. Gadhiya, I need visa guidance and a document checklist for ${destination.name}.`)} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Request visa checklist</a>
          </div>
        </div>
      </section>
    </>
  );
}
