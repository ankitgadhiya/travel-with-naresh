import type { Metadata } from "next";
import { MessageSquareQuote } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { getPublicTestimonials } from "@/lib/content";

export const metadata: Metadata = { title: "Customer Experiences", description: "Genuine written and video feedback shared with consent by travellers assisted by Naresh Gadhiya.", alternates: { canonical: "/customer-experiences" } };

export default async function TestimonialsPage() {
  const testimonials = await getPublicTestimonials();
  return (
    <>
      <PageHero eyebrow="What travellers say" title="Customer Experiences" description="Genuine written and video feedback, published only when supplied and approved by the customer." />
      <section className="section">
        {testimonials.length ? <div className="shell testimonial-grid">{testimonials.map((item) => <figure className="testimonial-card" key={item.id}><MessageSquareQuote /><blockquote>{item.feedback ?? "Video testimonial"}</blockquote><figcaption><strong>{item.customer_name}</strong><span>{[item.destination, item.service_type, item.travel_year].filter(Boolean).join(" · ")}</span></figcaption>{item.video_url && <a href={item.video_url} target="_blank" rel="noreferrer">Watch video testimonial</a>}</figure>)}</div> : <div className="shell empty-state"><MessageSquareQuote size={42} /><h2>No invented reviews. Ever.</h2><p>Naresh&apos;s historical feedback archive will be reviewed and added with appropriate customer consent. This page will publish only genuine experiences enabled by the administrator.</p></div>}
      </section>
    </>
  );
}
