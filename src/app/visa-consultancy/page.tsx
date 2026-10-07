import type { Metadata } from "next";
import Link from "next/link";
import { ClipboardCheck, ExternalLink, FileSearch, MessagesSquare, ShieldCheck } from "lucide-react";
import { EnquiryForm } from "@/components/enquiry-form";
import { PageHero } from "@/components/page-hero";
import { visaInformationLinks, whatsappMessages, whatsappUrl } from "@/lib/site";

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
      <PageHero eyebrow="Primary specialist service" title="End-to-End Visa Consultancy" description="Personal guidance from document planning and application review through interview preparation and submission readiness." />
      <section className="section">
        <div className="shell">
          <div className="section-heading"><p className="eyebrow gold">Experience-led. Detail-focused.</p><h2>Strong applications begin with careful preparation—not promises.</h2><p>Naresh Gadhiya follows a meticulous, case-by-case approach designed to identify documentation gaps early, reduce avoidable errors and help each applicant present a clear, consistent and well-supported application. Every case receives individual attention rather than a generic checklist.</p></div>
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
      <section className="section">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow gold">Authoritative starting points</p>
            <h2>Official visitor-visa information and document guidance.</h2>
            <p>Requirements, fees and processes change. These links lead to government sources; Naresh Gadhiya can then help translate the relevant requirements into a personalized preparation checklist.</p>
          </div>
          <div className="visa-resource-grid">
            {visaInformationLinks.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer"><span>{link.destination}</span><ExternalLink size={17} /></a>)}
          </div>
          <div className="notice"><strong>Important:</strong> Careful preparation can improve application quality, but no consultant can promise or guarantee visa approval. Every decision, processing time and request for further information remains solely with the embassy, consulate or immigration authority.</div>
        </div>
      </section>
      <section className="section enquiry-section">
        <div className="shell enquiry-layout">
          <div className="enquiry-intro"><p className="eyebrow">Request a visa consultation</p><h2>Send your case directly to Naresh Gadhiya on WhatsApp.</h2><p>Complete the form with your destination, visa type and key dates. Submitting opens a structured WhatsApp message; the website does not store your details.</p></div>
          <EnquiryForm />
        </div>
      </section>
    </>
  );
}
