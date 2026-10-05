import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck2,
  Compass,
  FileCheck2,
  Headphones,
  Mail,
  Map,
  MessageCircle,
  PlaneTakeoff,
  Route,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { EnquiryForm } from "@/components/enquiry-form";
import { assetPath, destinations, site, whatsappMessages, whatsappUrl } from "@/lib/site";

const benefits = [
  [Compass, "First-hand perspective", "Recommendations shaped by decades of international tour operations and traveller care."],
  [Route, "Built around you", "Journeys designed for your interests, pace, dates, comfort and budget—not a generic template."],
  [Headphones, "One expert throughout", "Speak directly with Naresh from the first idea through your pre-travel preparation."],
  [Users, "Every kind of traveller", "Thoughtful planning for couples, families, groups, seniors and first-time international travellers."],
];

const planningSteps = [
  [MessageCircle, "01", "Start with a conversation", "Share your destination, visa need, travel dates or even just the kind of holiday you imagine."],
  [Sparkles, "02", "Receive a personal plan", "Naresh brings the route, documentation, pacing and practical details into one clear direction."],
  [PlaneTakeoff, "03", "Travel prepared", "Move forward with one-to-one guidance, careful checks and someone experienced to call."],
];

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <Image
          className="hero-scene"
          src={assetPath("/images/destinations/europe.webp")}
          alt=""
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-wash" />
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="hero-kicker"><BadgeCheck size={18} /> 36+ years of travel expertise</p>
            <h1>Your world.<br /><span>Personally planned.</span></h1>
            <p className="hero-tagline">International holidays and end-to-end visa guidance, personally handled by Naresh Gadhiya.</p>
            <div className="button-row hero-actions">
              <a className="button button-coral" href={whatsappUrl(whatsappMessages.general)} target="_blank" rel="noreferrer">
                <MessageCircle size={19} /> Plan on WhatsApp
              </a>
              <a className="button button-glass" href={`mailto:${site.email}`}>
                <Mail size={18} /> Email Naresh
              </a>
            </div>
            <div className="hero-assurance">
              <span><ShieldCheck size={17} /> Personal guidance</span>
              <span><CalendarCheck2 size={17} /> By appointment</span>
              <span><Map size={17} /> Across India</span>
            </div>
          </div>
          <div className="hero-profile">
            <div className="hero-profile-image">
              <Image
                src={assetPath("/images/naresh-gadhiya-portrait.webp")}
                alt="Naresh Gadhiya, international travel and visa consultant"
                width={1000}
                height={1000}
                priority
                sizes="(max-width: 900px) 82vw, 36vw"
              />
            </div>
            <div className="hero-profile-caption">
              <span>Your travel professional</span>
              <strong>Naresh Gadhiya</strong>
              <small>Navi Mumbai · Available across India</small>
            </div>
            <div className="experience-seal"><strong>36+</strong><span>Years</span></div>
          </div>
        </div>
        <div className="hero-scroll">Explore the journey <ArrowRight size={16} /></div>
      </section>

      <section className="trust-bar" aria-label="Professional experience">
        <div className="shell trust-bar-inner">
          <p>Professional experience shaped across</p>
          <div>
            <span>SOTC / Kuoni</span>
            <span>Thomas Cook India</span>
            <span>Star Tours UK</span>
            <span>Kesari Tours</span>
          </div>
          <small>Previous professional experience only; no current affiliation implied.</small>
        </div>
      </section>

      <section className="section services-section">
        <div className="shell">
          <div className="section-heading centered-wide">
            <p className="eyebrow">Two services. One experienced advisor.</p>
            <h2>Clarity before you travel.<br />Confidence when you do.</h2>
            <p>Whether the journey starts with paperwork or a dream destination, every detail receives personal attention.</p>
          </div>
          <div className="service-showcase">
            <article className="service-feature service-visa">
              <div className="service-icon"><FileCheck2 /></div>
              <p className="service-number">01</p>
              <h3>End-to-End<br />Visa Consultancy</h3>
              <p>Clear, careful support from your initial consultation and documentation checklist through application readiness.</p>
              <ul>
                <li>Personalized document guidance</li>
                <li>Application preparation support</li>
                <li>Pre-submission review</li>
              </ul>
              <Link href="/visa-consultancy">Explore visa services <ArrowRight size={18} /></Link>
            </article>
            <article className="service-feature service-travel">
              <div className="service-icon"><Map /></div>
              <p className="service-number">02</p>
              <h3>Customized Travel<br />& Tour Packages</h3>
              <p>International holidays designed around who you are, how you like to travel and what matters most.</p>
              <ul>
                <li>Personal itinerary design</li>
                <li>Flights, hotels and routing</li>
                <li>Families, couples, groups and seniors</li>
              </ul>
              <Link href="/custom-travel-tours">Design my holiday <ArrowRight size={18} /></Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section about-home">
        <div className="shell about-home-grid">
          <div className="about-collage">
            <div className="about-collage-scene">
              <Image src={assetPath("/images/destinations/far-east-asia.webp")} alt="International travel destination" fill sizes="(max-width: 760px) 100vw, 48vw" />
            </div>
            <div className="about-collage-portrait">
              <Image src={assetPath("/images/naresh-gadhiya-portrait.webp")} alt="Naresh Gadhiya" width={1000} height={1000} sizes="(max-width: 760px) 62vw, 23vw" />
            </div>
            <div className="about-collage-note"><Compass /><span><strong>Europe specialist</strong> with worldwide experience</span></div>
          </div>
          <div className="about-home-copy">
            <p className="eyebrow">Meet your travel professional</p>
            <h2>Experience is the difference between a booking and a well-planned journey.</h2>
            <p className="lead">Since 1990, Naresh&apos;s career has crossed international tour management, group travel, customer service, destination consulting, business development and visa support.</p>
            <p>Today, that depth becomes something personal: direct advice from the professional who listens, plans and remains available throughout your journey.</p>
            <div className="about-signature">
              <strong>Naresh Gadhiya</strong>
              <span>Independent Travel & Visa Consultant</span>
            </div>
            <Link className="text-link" href="/about">Discover Naresh&apos;s journey <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>

      <section className="section destinations-home">
        <div className="shell">
          <div className="section-heading destinations-heading">
            <div>
              <p className="eyebrow">A world of possibilities</p>
              <h2>Where will your next story begin?</h2>
            </div>
            <Link className="text-link" href="/destinations">View every destination <ArrowRight size={18} /></Link>
          </div>
          <div className="destination-grid destination-grid-featured">
            {destinations.slice(0, 6).map((destination, index) => (
              <Link key={destination.slug} className={`destination-card destination-${index + 1}`} href={`/destinations/${destination.slug}`}>
                <Image src={assetPath(destination.image)} alt="" fill sizes="(max-width: 760px) 100vw, 33vw" />
                <span className="destination-overlay" />
                <div>
                  <p className="eyebrow">{destination.eyebrow}</p>
                  <h3>{destination.name}</h3>
                  <span className="destination-explore">Explore <ArrowRight size={16} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="shell">
          <div className="section-heading center">
            <p className="eyebrow">Simple, personal, considered</p>
            <h2>From first conversation to take-off.</h2>
          </div>
          <div className="process-grid">
            {planningSteps.map(([Icon, number, title, copy]) => (
              <article className="process-card" key={String(number)}>
                <span className="process-number">{String(number)}</span>
                <div className="process-icon"><Icon /></div>
                <h3>{String(title)}</h3>
                <p>{String(copy)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section benefits-section">
        <div className="shell">
          <div className="section-heading center">
            <p className="eyebrow">Why travellers choose personal guidance</p>
            <h2>Professional depth.<br />Human attention.</h2>
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

      <section className="section enquiry-section" id="start-planning">
        <div className="shell enquiry-layout">
          <div className="enquiry-intro">
            <p className="eyebrow">Your journey starts here</p>
            <h2>Tell Naresh what you have in mind.</h2>
            <p>Share a few practical details and the website will prepare a structured WhatsApp message. Nothing is stored.</p>
            <div className="direct-contact-card">
              <span>Prefer to speak directly?</span>
              <a href={whatsappUrl(whatsappMessages.general)} target="_blank" rel="noreferrer"><MessageCircle /> {site.phoneDisplay}</a>
              <a href={`mailto:${site.email}`}><Mail /> {site.email}</a>
            </div>
          </div>
          <EnquiryForm />
        </div>
      </section>
    </>
  );
}
