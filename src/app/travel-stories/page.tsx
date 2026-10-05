import type { Metadata } from "next";
import Image from "next/image";
import { Camera, Video } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { getPublicStories } from "@/lib/content";

export const metadata: Metadata = { title: "Travel Stories & Gallery", description: "Original destination photographs, videos and travel memories from Naresh Gadhiya.", alternates: { canonical: "/travel-stories" } };

export default async function StoriesPage() {
  const stories = await getPublicStories();
  return (
    <>
      <PageHero eyebrow="Around the world with Naresh" title="Travel Stories" description="A growing collection of original photographs, destination memories, videos and lessons from journeys around the world." />
      <section className="section">
        {stories.length ? <div className="shell story-grid">{stories.map((story) => <article className="story-card" key={story.id}>{story.media_url && story.media_type === "image" ? <Image src={story.media_url} alt={`${story.title}${story.destination ? ` in ${story.destination}` : ""}`} width={800} height={600} /> : <div className="media-placeholder"><Video /></div>}<div><p className="eyebrow gold">{[story.destination, story.country, story.travel_year].filter(Boolean).join(" · ")}</p><h2>{story.title}</h2>{story.description && <p>{story.description}</p>}{story.media_url && story.media_type !== "image" && <a href={story.media_url} target="_blank" rel="noreferrer">Watch video</a>}</div></article>)}</div> : <div className="shell empty-state"><Camera size={38} /><Video size={38} /><h2>Genuine stories are being prepared.</h2><p>This gallery intentionally remains empty until Naresh uploads his own travel media and captions through the private dashboard. No stock memories or invented stories will be presented as personal experience.</p></div>}
      </section>
    </>
  );
}
