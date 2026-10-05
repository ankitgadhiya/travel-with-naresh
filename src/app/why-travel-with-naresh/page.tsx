import type { Metadata } from "next";
import { Compass, HeartHandshake, MapPinned, MessageCircle, Route, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = { title: "Why Travel with Naresh", description: "Direct, experienced and personal international travel and visa guidance without call centres.", alternates: { canonical: "/why-travel-with-naresh" } };
const reasons = [[Compass, "36+ years of experience", "Travel-industry perspective developed continuously since around 1990."], [MapPinned, "First-hand destination knowledge", "Practical insight from international tours and group travel."], [Route, "Personally designed journeys", "Itineraries guided by your people, pace, interests and budget."], [ShieldCheck, "End-to-end visa support", "Structured guidance without false promises of approval."], [MessageCircle, "Direct access", "Speak with Naresh—not a call centre or rotating agent."], [HeartHandshake, "Personal attention", "Support before travel and a relationship built around trust."]];

export default function WhyPage() {
  return <><PageHero eyebrow="The difference" title="Experience You Can Travel With." description="Professional depth and personal attention, brought together in one direct relationship." /><section className="section"><div className="shell content-grid">{reasons.map(([Icon, title, copy]) => <article className="card icon-card" key={String(title)}><Icon /><h3>{String(title)}</h3><p>{String(copy)}</p></article>)}</div></section></>;
}
