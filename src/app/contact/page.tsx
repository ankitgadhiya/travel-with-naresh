import type { Metadata } from "next";
import { EnquiryForm } from "@/components/enquiry-form";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = { title: "Contact & Start Planning", description: "Contact Naresh Gadhiya by WhatsApp or email for international travel planning and visa consultancy.", alternates: { canonical: "/contact" } };

export default function ContactPage() {
  return <><PageHero eyebrow="One conversation can clarify the journey" title="How Can I Help You?" description="Choose the service you need, share a few practical details and send them directly to Naresh on WhatsApp." /><section className="section section-soft"><div className="shell"><EnquiryForm /></div></section></>;
}
