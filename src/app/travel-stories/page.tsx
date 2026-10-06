import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera, MessageSquareQuote, Video } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { getPublicStories } from "@/lib/content";

export const metadata: Metadata = { title: "Travel Stories & Gallery", description: "Original destination photographs, videos and travel memories from Naresh Gadhiya.", alternates: { canonical: "/travel-stories" } };

export default async function StoriesPage() {
  const stories = await getPublicStories();
  return (
    <>
      <PageHero eyebrow="Around the world with Naresh" title="Travel Stories & Gallery" description="The public home for Naresh Gadhiya's original photographs, destination memories, short videos and first-hand travel notes." />
      <section className="section">
        {stories.length ? <div className="shell story-grid">{stories.map((story) => <article className="story-card" key={story.id}>{story.media_url && story.media_type === "image" ? <Image src={story.media_url} alt={`${story.title}${story.destination ? ` in ${story.destination}` : ""}`} width={800} height={600} /> : <div className="media-placeholder"><Video /></div>}<div><p className="eyebrow gold">{[story.destination, story.country, story.travel_year].filter(Boolean).join(" · ")}</p><h2>{story.title}</h2>{story.description && <p>{story.description}</p>}{story.media_url && story.media_type !== "image" && <a href={story.media_url} target="_blank" rel="noreferrer">Watch video</a>}</div></article>)}</div> : <div className="shell empty-state"><Camera size={38} /><Video size={38} /><h2>Genuine stories are being prepared.</h2><p>This gallery intentionally remains empty until Naresh Gadhiya supplies and approves his own travel media and captions for publication. No stock memories or invented stories will be presented as personal experience.</p></div>}
      </section>
      <section className="section section-soft">
        <div className="shell story-information-grid">
          <article><Camera /><h3>Original photographs</h3><p>Destination images from Naresh Gadhiya&apos;s personal and professional travel archive, accompanied by useful context.</p></article>
          <article><Video /><h3>Short travel videos</h3><p>Selected clips or externally hosted videos that can help travellers understand places and experiences.</p></article>
          <article><MessageSquareQuote /><h3>Traveller feedback</h3><p>Customer comments are kept in a separate consent-controlled section so stories and testimonials are never confused.</p><Link href="/customer-experiences">See customer experiences <ArrowRight size={17} /></Link></article>
        </div>
      </section>
    </>
  );
}
