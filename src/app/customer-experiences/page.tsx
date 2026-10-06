import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Camera, MessageSquareQuote, ShieldCheck, Video } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { getPublicTestimonials } from "@/lib/content";

export const metadata: Metadata = { title: "Customer Experiences", description: "Genuine written and video feedback shared with consent by travellers assisted by Naresh Gadhiya.", alternates: { canonical: "/customer-experiences" } };

export default async function TestimonialsPage() {
  const testimonials = await getPublicTestimonials();
  return (
    <>
      <PageHero eyebrow="What travellers say" title="Customer Experiences" description="Genuine written and video feedback, published only when supplied and approved by the customer." />
      <section className="section">
        {testimonials.length ? <div className="shell testimonial-grid">{testimonials.map((item) => <figure className="testimonial-card" key={item.id}><MessageSquareQuote /><blockquote>{item.feedback ?? "Video testimonial"}</blockquote><figcaption><strong>{item.customer_name}</strong><span>{[item.destination, item.service_type, item.travel_year].filter(Boolean).join(" · ")}</span></figcaption>{item.video_url && <a href={item.video_url} target="_blank" rel="noreferrer">Watch video testimonial</a>}</figure>)}</div> : <div className="shell empty-state"><MessageSquareQuote size={42} /><h2>No invented reviews. Ever.</h2><p>Naresh Gadhiya&apos;s historical feedback archive will be reviewed and added with appropriate customer consent. This page will publish only genuine experiences approved for public use.</p></div>}
      </section>
      <section className="section section-soft">
        <div className="shell story-information-grid">
          <article><ShieldCheck /><h3>Published with permission</h3><p>Feedback is displayed only after consent for public use has been confirmed.</p></article>
          <article><Video /><h3>Written or video feedback</h3><p>Experiences may be shared as written comments or links to customer-supplied videos.</p></article>
          <article><Camera /><h3>Looking for travel media?</h3><p>Photographs and destination stories have their own dedicated gallery.</p><Link href="/travel-stories">Visit travel stories <ArrowRight size={17} /></Link></article>
        </div>
      </section>
    </>
  );
}
