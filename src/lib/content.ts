import { createSupabaseServerClient } from "@/lib/supabase/server";

export type TravelStory = {
  id: string;
  title: string;
  destination: string | null;
  country: string | null;
  travel_year: number | null;
  description: string | null;
  media_url: string | null;
  media_type: "image" | "video" | "link";
};

export type Testimonial = {
  id: string;
  customer_name: string;
  destination: string | null;
  service_type: string | null;
  feedback: string | null;
  rating: number | null;
  video_url: string | null;
  travel_year: number | null;
};

export async function getPublicStories(limit?: number) {
  const supabase = await createSupabaseServerClient();
  if (!supabase) return [] as TravelStory[];
  let query = supabase.from("travel_stories").select("id,title,destination,country,travel_year,description,media_url,media_type").eq("published", true).order("featured", { ascending: false }).order("created_at", { ascending: false });
  if (limit) query = query.limit(limit);
  const { data, error } = await query;
  if (error) {
    console.error("Unable to load public travel stories", error.message);
    return [];
  }
  return (data ?? []) as TravelStory[];
}

export async function getPublicTestimonials(limit?: number) {
  const supabase = await createSupabaseServerClient();
  if (!supabase) return [] as Testimonial[];
  let query = supabase.from("testimonials").select("id,customer_name,destination,service_type,feedback,rating,video_url,travel_year").eq("published", true).eq("consent_confirmed", true).order("featured", { ascending: false }).order("created_at", { ascending: false });
  if (limit) query = query.limit(limit);
  const { data, error } = await query;
  if (error) {
    console.error("Unable to load public testimonials", error.message);
    return [];
  }
  return (data ?? []) as Testimonial[];
}
