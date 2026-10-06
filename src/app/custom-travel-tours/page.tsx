import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, Gauge, Heart, IndianRupee, MapPinned, UsersRound } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { destinations, whatsappMessages, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Customized Travel & Tour Packages",
  description: "Personalized international holidays, Europe tours, family travel, honeymoon, senior citizen and group itineraries from Navi Mumbai.",
  alternates: { canonical: "/custom-travel-tours" },
};

const inputs = [[UsersRound, "Who is travelling"], [Heart, "Interests & travel style"], [CalendarDays, "Dates & duration"], [Gauge, "Comfortable pace"], [MapPinned, "Destinations"], [IndianRupee, "Budget"]];

export default function ToursPage() {
  return (
    <>
      <PageHero eyebrow="Spotlight service" title="Customized Travel & Tour Packages" description="Your journey should fit the people taking it—not the other way around." />
      <section className="section">
        <div className="shell">
          <div className="section-heading center"><p className="eyebrow gold">Designed around you</p><h2>Six details shape a better journey.</h2></div>
          <div className="benefit-grid">{inputs.map(([Icon, title]) => <article className="benefit center-benefit" key={String(title)}><Icon /><h3>{String(title)}</h3></article>)}</div>
        </div>
      </section>
      <section className="section section-soft">
        <div className="shell split">
          <div><p className="eyebrow gold">Travel your way</p><h2>From a first idea to a coherent itinerary.</h2><p className="support-copy">Naresh Gadhiya can help plan Europe packages, family holidays, couple and honeymoon travel, senior citizen journeys, friends and family groups, special-interest tours and complex multi-city international itineraries.</p><p className="support-copy">His extensive worldwide professional network can support local coordination across popular destinations. Indian and Jain meal planning—including destination kitchen or chef arrangements—may be explored where available and confirmed with local suppliers.</p></div>
          <div className="card"><h3>Planning may include</h3><ul className="check-list"><li>Destination consultation and itinerary design</li><li>International flights and route guidance</li><li>Hotels and accommodation</li><li>Travel insurance assistance</li><li>Ground arrangements through destination connections</li><li>Indian and Jain meal coordination in select destinations</li><li>Pre-travel guidance and personal consultation</li></ul><div className="button-row"><a className="button button-navy" href={whatsappUrl(whatsappMessages.travel)} target="_blank" rel="noreferrer">Plan my holiday</a></div></div>
        </div>
      </section>
      <section className="section">
        <div className="shell">
          <div className="section-heading centered-wide"><p className="eyebrow">Ideas to make your own</p><h2>More than twenty sample journeys across the world.</h2><p>Compare realistic routes and durations, then ask Naresh Gadhiya to adjust the pace, cities, experiences, accommodation style and meal arrangements around your travellers.</p></div>
          <div className="itinerary-region-grid">
            {destinations.map((destination) => (
              <Link href={`/destinations/${destination.slug}`} key={destination.slug}>
                <span>{destination.itineraries.length} sample {destination.itineraries.length === 1 ? "route" : "routes"}</span>
                <h3>{destination.name}</h3>
                <p>{destination.itineraries.map((itinerary) => itinerary.title).join(" · ")}</p>
                <strong>Explore itineraries <ArrowRight size={16} /></strong>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
