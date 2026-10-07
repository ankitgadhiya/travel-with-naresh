import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy", robots: { index: true, follow: true } };

export default function PrivacyPage() {
  return <><PageHero eyebrow="Your information" title="Privacy Policy" description="A plain-language summary of how website and enquiry information is handled." /><section className="section"><article className="shell legal-copy"><p>Last updated: 6 October 2026</p><h2>Information you choose to share</h2><p>The smart enquiry form creates a message on your device and opens WhatsApp. This website does not store that form submission. Information sent through WhatsApp or email is handled within those services and used to respond to your enquiry.</p><h2>Website administration</h2><p>Administrator authentication and approved media may be processed by our managed technology providers. Public testimonials are published only after customer consent is confirmed.</p><h2>Site view counter and cookies</h2><p>The footer loads a small counter image from VisitorBadge.io to display an aggregate number of page views. The request is sent without the page referrer. According to the provider, the counter does not place cookies or identify individual visitors. No advertising cookies are enabled by this website.</p><h2>Your choices</h2><p>You may request correction or deletion of information shared directly with the business by emailing <a href={`mailto:${site.email}`}>{site.email}</a>.</p></article></section></>;
}
