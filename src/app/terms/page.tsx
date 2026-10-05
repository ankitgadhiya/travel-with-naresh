import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = { title: "Terms & Visa Disclaimer", robots: { index: true, follow: true } };

export default function TermsPage() {
  return <><PageHero eyebrow="Important information" title="Terms & Visa Disclaimer" description="The boundaries of travel-planning and visa-consultancy support." /><section className="section"><article className="shell legal-copy"><p>Last updated: 5 October 2026</p><h2>Visa decisions</h2><p>Visa decisions are made solely by the respective embassy, consulate or immigration authority. Travel with Naresh Gadhiya provides professional guidance and application support, but does not guarantee approval, processing times or outcomes.</p><h2>Travel arrangements</h2><p>Availability, fares, entry requirements, schedules and supplier terms may change. Final arrangements, prices, cancellation conditions and responsibilities will be confirmed for each engagement before purchase.</p><h2>Professional history</h2><p>References to previous employers describe Naresh Gadhiya&apos;s professional experience only. They do not imply that those organizations currently endorse, sponsor, partner with or are affiliated with this independent business.</p><h2>Website content</h2><p>Destination information is general guidance and should not replace current advice from governments, airlines, insurers, healthcare professionals or other relevant authorities.</p></article></section></>;
}
