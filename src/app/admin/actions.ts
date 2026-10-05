"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { createSupabaseServerClient } from "@/lib/supabase/server";

const storySchema = z.object({
  title: z.string().trim().min(2).max(120),
  destination: z.string().trim().max(80),
  country: z.string().trim().max(80),
  travelYear: z.coerce.number().int().min(1950).max(2100).optional(),
  description: z.string().trim().max(3000),
  mediaLink: z.union([z.literal(""), z.string().url()]),
});

const testimonialSchema = z.object({
  customerName: z.string().trim().min(2).max(100),
  destination: z.string().trim().max(80),
  serviceType: z.string().trim().max(80),
  feedback: z.string().trim().max(3000),
  rating: z.coerce.number().int().min(1).max(5).optional(),
  travelYear: z.coerce.number().int().min(1950).max(2100).optional(),
  videoUrl: z.union([z.literal(""), z.string().url()]),
  consent: z.literal("on"),
});

function text(formData: FormData, key: string) {
  return String(formData.get(key) ?? "");
}

async function authenticatedClient() {
  const supabase = await createSupabaseServerClient();
  if (!supabase) throw new Error("Supabase is not configured.");
  const { data, error } = await supabase.auth.getUser();
  if (error || !data.user) throw new Error("Your administrator session has expired.");
  return { supabase, user: data.user };
}

async function uploadMedia(formData: FormData, userId: string, supabase: NonNullable<Awaited<ReturnType<typeof createSupabaseServerClient>>>) {
  const file = formData.get("media");
  if (!(file instanceof File) || file.size === 0) return null;
  const allowed = ["image/jpeg", "image/png", "image/webp", "video/mp4", "video/quicktime"];
  if (!allowed.includes(file.type)) throw new Error("Use a JPG, PNG, WebP, MP4 or MOV file.");
  if (file.size > 25 * 1024 * 1024) throw new Error("Media must be 25 MB or smaller.");
  const extension = file.name.split(".").pop()?.replace(/[^a-z0-9]/gi, "").toLowerCase() || "bin";
  const path = `${userId}/${crypto.randomUUID()}.${extension}`;
  const { error } = await supabase.storage.from("media").upload(path, file, { contentType: file.type, upsert: false });
  if (error) throw new Error(`Upload failed: ${error.message}`);
  return supabase.storage.from("media").getPublicUrl(path).data.publicUrl;
}

export async function login(formData: FormData) {
  const supabase = await createSupabaseServerClient();
  if (!supabase) redirect("/admin?error=Supabase%20is%20not%20configured");
  const email = text(formData, "email").trim();
  const password = text(formData, "password");
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) redirect(`/admin?error=${encodeURIComponent("Unable to sign in. Check the email and password.")}`);
  redirect("/admin");
}

export async function logout() {
  const supabase = await createSupabaseServerClient();
  if (supabase) await supabase.auth.signOut();
  redirect("/admin");
}

export async function createStory(formData: FormData) {
  const { supabase, user } = await authenticatedClient();
  const parsed = storySchema.safeParse({
    title: text(formData, "title"),
    destination: text(formData, "destination"),
    country: text(formData, "country"),
    travelYear: text(formData, "travelYear") || undefined,
    description: text(formData, "description"),
    mediaLink: text(formData, "mediaLink"),
  });
  if (!parsed.success) throw new Error(parsed.error.issues[0]?.message ?? "Please check the story details.");
  const uploadedUrl = await uploadMedia(formData, user.id, supabase);
  const mediaUrl = uploadedUrl ?? (parsed.data.mediaLink || null);
  const file = formData.get("media");
  const mediaType = file instanceof File && file.size > 0 ? (file.type.startsWith("video/") ? "video" : "image") : "link";
  const { error } = await supabase.from("travel_stories").insert({
    title: parsed.data.title,
    destination: parsed.data.destination || null,
    country: parsed.data.country || null,
    travel_year: parsed.data.travelYear ?? null,
    description: parsed.data.description || null,
    media_url: mediaUrl,
    media_type: mediaType,
    featured: formData.get("featured") === "on",
    published: formData.get("published") === "on",
    created_by: user.id,
  });
  if (error) throw new Error(`Story could not be saved: ${error.message}`);
  revalidatePath("/");
  revalidatePath("/travel-stories");
  redirect("/admin?success=Travel%20story%20saved");
}

export async function createTestimonial(formData: FormData) {
  const { supabase, user } = await authenticatedClient();
  const parsed = testimonialSchema.safeParse({
    customerName: text(formData, "customerName"),
    destination: text(formData, "destination"),
    serviceType: text(formData, "serviceType"),
    feedback: text(formData, "feedback"),
    rating: text(formData, "rating") || undefined,
    travelYear: text(formData, "travelYear") || undefined,
    videoUrl: text(formData, "videoUrl"),
    consent: text(formData, "consent"),
  });
  if (!parsed.success) throw new Error(parsed.error.issues[0]?.message ?? "Please check the customer feedback.");
  const { error } = await supabase.from("testimonials").insert({
    customer_name: parsed.data.customerName,
    destination: parsed.data.destination || null,
    service_type: parsed.data.serviceType || null,
    feedback: parsed.data.feedback || null,
    rating: parsed.data.rating ?? null,
    video_url: parsed.data.videoUrl || null,
    travel_year: parsed.data.travelYear ?? null,
    consent_confirmed: true,
    featured: formData.get("featured") === "on",
    published: formData.get("published") === "on",
    created_by: user.id,
  });
  if (error) throw new Error(`Feedback could not be saved: ${error.message}`);
  revalidatePath("/");
  revalidatePath("/customer-experiences");
  redirect("/admin?success=Customer%20feedback%20saved");
}

export async function updateContentState(formData: FormData) {
  const { supabase } = await authenticatedClient();
  const table = text(formData, "table");
  if (table !== "travel_stories" && table !== "testimonials") throw new Error("Unsupported content type.");
  const id = z.string().uuid().parse(text(formData, "id"));
  const { error } = await supabase.from(table).update({
    featured: formData.get("featured") === "on",
    published: formData.get("published") === "on",
  }).eq("id", id);
  if (error) throw new Error(`Content could not be updated: ${error.message}`);
  revalidatePath("/");
  revalidatePath(table === "travel_stories" ? "/travel-stories" : "/customer-experiences");
  redirect("/admin?success=Visibility%20updated");
}

export async function deleteContent(formData: FormData) {
  const { supabase } = await authenticatedClient();
  const table = text(formData, "table");
  if (table !== "travel_stories" && table !== "testimonials") throw new Error("Unsupported content type.");
  const id = z.string().uuid().parse(text(formData, "id"));
  const { error } = await supabase.from(table).delete().eq("id", id);
  if (error) throw new Error(`Content could not be deleted: ${error.message}`);
  revalidatePath("/");
  revalidatePath(table === "travel_stories" ? "/travel-stories" : "/customer-experiences");
  redirect("/admin?success=Content%20deleted");
}
