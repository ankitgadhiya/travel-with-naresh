import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy", robots: { index: true, follow: true } };

export default function PrivacyPage() {
  return <><PageHero eyebrow="Your information" title="Privacy Policy" description="A plain-language summary of how website and enquiry information is handled." /><section className="section"><article className="shell legal-copy"><p>Last updated: 5 October 2026</p><h2>Information you choose to share</h2><p>The smart enquiry form creates a message on your device and opens WhatsApp. This website does not store that form submission. Information sent through WhatsApp or email is handled within those services and used to respond to your enquiry.</p><h2>Website administration</h2><p>Administrator authentication and approved media may be processed by our managed technology providers. Public testimonials are published only after customer consent is confirmed.</p><h2>Analytics and cookies</h2><p>No advertising cookies are enabled by default. If privacy-respecting analytics are added later, this policy will be updated before activation.</p><h2>Your choices</h2><p>You may request correction or deletion of information shared directly with the business by emailing <a href={`mailto:${site.email}`}>{site.email}</a>.</p></article></section></>;
}
