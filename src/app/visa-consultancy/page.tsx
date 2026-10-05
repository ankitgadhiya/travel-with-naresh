import type { Metadata } from "next";
import Link from "next/link";
import { ClipboardCheck, FileSearch, MessagesSquare, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { whatsappMessages, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "End-to-End Visa Consultancy",
  description: "Professional visa guidance in Navi Mumbai for USA, Canada, UK, Schengen, Australia, New Zealand and other destinations.",
  alternates: { canonical: "/visa-consultancy" },
};

const stages = [
  [MessagesSquare, "Understand your journey", "Initial consultation covering travel purpose, destination, timing and individual circumstances."],
  [ClipboardCheck, "Prepare the checklist", "Clear guidance on requirements and a personalized documentation checklist."],
  [FileSearch, "Review and prepare", "Document review, form or application assistance, appointment support and pre-submission checks."],
  [ShieldCheck, "Stay travel-ready", "Interview preparation where applicable, personalized follow-up and travel-document readiness."],
];

export default function VisaPage() {
  return (
    <>
      <PageHero eyebrow="Spotlight service" title="End-to-End Visa Consultancy" description="Experience, preparation, documentation and personal attention throughout your application journey." />
      <section className="section">
        <div className="shell">
          <div className="section-heading"><p className="eyebrow gold">A considered process</p><h2>Professional support at every practical step.</h2><p>Visa requirements can feel fragmented. Naresh helps you understand the process, organize the right information and approach submission with greater clarity.</p></div>
          <div className="content-grid">
            {stages.map(([Icon, title, copy]) => <article className="card icon-card" key={String(title)}><Icon /><h3>{String(title)}</h3><p>{String(copy)}</p></article>)}
          </div>
          <div className="notice"><strong>Visa disclaimer:</strong> Visa decisions are made solely by the respective embassy, consulate or immigration authority. Our role is to provide professional guidance and application support.</div>
        </div>
      </section>
      <section className="section section-soft">
        <div className="shell split">
          <div><p className="eyebrow gold">Destination guidance</p><h2>Support for major international destinations.</h2></div>
          <div><ul className="check-list"><li>USA and Canada</li><li>UK and Schengen / Europe</li><li>Australia and New Zealand</li><li>Middle East and other international destinations</li></ul><div className="button-row"><a className="button button-navy" href={whatsappUrl(whatsappMessages.visa)} target="_blank" rel="noreferrer">Get visa assistance</a><Link className="button button-outline" href="/faq">Read visa FAQs</Link></div></div>
        </div>
      </section>
    </>
  );
}
