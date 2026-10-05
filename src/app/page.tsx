import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, FileCheck2, Globe2, Handshake, Map, MessageCircle, Route, Users } from "lucide-react";
import { EnquiryForm } from "@/components/enquiry-form";
import { destinations, site, whatsappMessages, whatsappUrl } from "@/lib/site";

const benefits = [
  [Globe2, "First-hand international insight", "Recommendations shaped by decades of travel operations—not just online searches."],
  [Route, "Personally designed itineraries", "Journeys built around your interests, pace, dates and budget."],
  [Handshake, "Direct access to Naresh", "One-to-one guidance without call centres or anonymous hand-offs."],
  [Users, "Experienced group handling", "Practical understanding of families, groups and senior travellers."],
];

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow gold">International Travel & Visa Consultancy</p>
            <h1>Travel with<br /><em>Naresh Gadhiya</em></h1>
            <p className="hero-tagline">{site.tagline}</p>
            <div className="hero-proof"><strong>36+</strong><span>Years of travel & tourism expertise</span></div>
            <div className="button-row">
              <a className="button button-gold" href={whatsappUrl(whatsappMessages.general)} target="_blank" rel="noreferrer"><MessageCircle size={18} /> WhatsApp Naresh</a>
              <Link className="button button-outline-light" href="/contact">Start planning</Link>
            </div>
          </div>
          <div className="hero-portrait">
            <Image src="/images/naresh-gadhiya-portrait.webp" alt="Naresh Gadhiya, international travel and visa consultant" width={1000} height={1000} priority sizes="(max-width: 760px) 94vw, 48vw" />
            <div className="portrait-badge"><Compass /><span><strong>Europe</strong> Travel Specialist</span></div>
          </div>
        </div>
      </section>

      <section className="service-overlap" aria-label="Primary services">
        <div className="shell pillar-grid">
          <article className="pillar">
            <FileCheck2 />
            <p className="eyebrow">Spotlight service</p>
            <h2>End-to-End<br />Visa Consultancy</h2>
            <p>Personal guidance from initial consultation and document review through application preparation and pre-submission readiness.</p>
            <Link href="/visa-consultancy">Get visa assistance <ArrowRight size={17} /></Link>
          </article>
          <article className="pillar">
            <Map />
            <p className="eyebrow">Designed for you</p>
            <h2>Customized Travel<br />& Tour Packages</h2>
            <p>International holidays shaped around who is travelling, what matters to you, your pace, dates and budget.</p>
            <Link href="/custom-travel-tours">Plan my holiday <ArrowRight size={17} /></Link>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="shell stats" aria-label="Experience in numbers">
          <div className="stat"><strong>36+</strong><span>Years in travel & tourism</span></div>
          <div className="stat"><strong>Since 1990</strong><span>International tour experience</span></div>
          <div className="stat"><strong>1-to-1</strong><span>Personal consultation</span></div>
        </div>
      </section>

      <section className="section">
        <div className="shell split">
          <div className="portrait-frame">
            <Image src="/images/naresh-gadhiya-portrait.webp" alt="Professional portrait of Naresh Gadhiya" width={1000} height={1000} sizes="(max-width: 760px) 94vw, 44vw" />
          </div>
          <div className="split-copy">
            <p className="eyebrow gold">More than 36 years around the world</p>
            <h2>Advice backed by experience.</h2>
            <p>Naresh Gadhiya&apos;s career has crossed international tour management, group travel, sales, business development, destination consulting, customer service and visa support.</p>
            <p>Today, that experience becomes something refreshingly personal: direct guidance from the professional responsible for understanding your journey.</p>
            <p className="career-note">Previous professional experience includes roles associated with Kavita Tours, Krishna Tours, SOTC / Kuoni India, Thomas Cook India, Star Tours UK and Kesari Tours.</p>
            <div className="button-row"><Link className="button button-navy" href="/about">Meet Naresh</Link></div>
          </div>
        </div>
      </section>

      <section className="section europe-feature">
        <div className="shell europe-inner">
          <div>
            <p className="eyebrow gold">Specialist destination</p>
            <h2>Europe,<br />planned with perspective.</h2>
          </div>
          <div>
            <p>Years of professional experience involving European tours and international groups bring practical judgment to routing, pacing and the details that make a complex trip feel effortless.</p>
            <Link href="/destinations/europe">Explore Europe expertise <ArrowRight size={17} /></Link>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow gold">Destination experience</p>
            <h2>A world of possibilities, made personal.</h2>
            <p>Begin with where you want to go—or simply how you want the journey to feel.</p>
          </div>
          <div className="destination-grid">
            {destinations.map((destination) => (
              <Link key={destination.slug} className="destination-card" href={`/destinations/${destination.slug}`}>
                <p className="eyebrow">{destination.eyebrow}</p>
                <h3>{destination.name}</h3>
                <p>{destination.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-heading center">
            <p className="eyebrow gold">Experience you can travel with</p>
            <h2>Professional depth. Personal attention.</h2>
          </div>
          <div className="benefit-grid">
            {benefits.map(([Icon, title, copy]) => (
              <article className="benefit" key={String(title)}>
                <Icon />
                <h3>{String(title)}</h3>
                <p>{String(copy)}</p>
              </article>
            ))}
          </div>
          <div className="center-link"><Link href="/why-travel-with-naresh">Why travel with Naresh <ArrowRight size={17} /></Link></div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="shell">
          <div className="section-heading center">
            <p className="eyebrow gold">Genuine stories, added by Naresh</p>
            <h2 className="light-heading">Around the world with Naresh</h2>
            <p>Travel photographs, destination memories and customer experiences will appear here as genuine, consented content is added through the private dashboard.</p>
          </div>
          <div className="coming-grid">
            <Link href="/travel-stories"><span>Travel stories</span><strong>Photos, videos & memories</strong><ArrowRight /></Link>
            <Link href="/customer-experiences"><span>Customer experiences</span><strong>Verified traveller feedback</strong><ArrowRight /></Link>
          </div>
        </div>
      </section>

      <section className="section section-soft" id="start-planning">
        <div className="shell">
          <div className="section-heading center">
            <p className="eyebrow gold">Start planning</p>
            <h2>Tell Naresh what you need.</h2>
            <p>A few useful details create a ready-to-send WhatsApp message, so your first conversation can be productive.</p>
          </div>
          <EnquiryForm />
        </div>
      </section>
    </>
  );
}
