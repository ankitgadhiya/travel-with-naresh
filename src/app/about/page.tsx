import type { Metadata } from "next";
import Image from "next/image";
import { BriefcaseBusiness } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { careerTimeline, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Naresh Gadhiya",
  description: "Discover Naresh Gadhiya's 36+ year career across international tour management, travel consulting, business development and visa support.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About Naresh" title="More Than 36 Years Around the World" description="A career built through people, places and the practical responsibility of helping travellers feel prepared." />
      <section className="section">
        <div className="shell split">
          <div className="portrait-frame"><Image src="/images/naresh-gadhiya-portrait.webp" alt="Naresh Gadhiya" width={1000} height={1000} priority /></div>
          <div className="split-copy">
            <p className="eyebrow gold">A personal travel professional</p>
            <h2>Experience earned journey by journey.</h2>
            <p>Beginning around 1990, Naresh&apos;s career developed through international tour management, group operations, customer service, sales leadership, business development, destination consultation and visa assistance.</p>
            <p>His work has involved travellers across Europe, the UK, USA, Canada, Australia, New Zealand, the Middle East, South-East Asia, China, South Africa and other international destinations.</p>
            <p>The result is a style of advice grounded in first-hand professional context: practical, attentive and focused on the individual traveller.</p>
            <a className="button button-navy" href={site.linkedin} target="_blank" rel="noreferrer"><BriefcaseBusiness size={18} /> Connect with Naresh</a>
          </div>
        </div>
      </section>
      <section className="section section-soft">
        <div className="shell">
          <div className="section-heading center"><p className="eyebrow gold">Professional journey</p><h2>A career in travel</h2><p>Organizations below represent previous professional experience. They do not imply current endorsement, partnership or affiliation.</p></div>
          <div className="timeline">
            {careerTimeline.map((item, index) => (
              <div className="timeline-item" key={`${item.company}-${index}`}>
                <time>{item.period}</time>
                <div><h3>{item.company}</h3><p>{item.role}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
