import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { faqs } from "@/lib/site";

export const metadata: Metadata = { title: "Frequently Asked Questions", description: "Answers about visa consultancy, customized international holidays, Europe travel and consultations with Naresh Gadhiya.", alternates: { canonical: "/faq" } };

export default function FaqPage() {
  return <><PageHero eyebrow="Useful answers" title="Frequently Asked Questions" description="A clear starting point for planning your visa application support or international journey." /><section className="section"><div className="shell faq-list">{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div></section></>;
}
