import type { Metadata } from "next";
import { Camera, LogOut, MessageSquareQuote, Settings2, Trash2 } from "lucide-react";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { createStory, createTestimonial, deleteContent, login, logout, updateContentState } from "./actions";

export const metadata: Metadata = { title: "Administrator", robots: { index: false, follow: false } };

type SearchParams = Promise<{ error?: string; success?: string }>;

export default async function AdminPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const supabase = await createSupabaseServerClient();
  if (!supabase) {
    return <AdminShell><div className="admin-card"><Settings2 /><h1>Connect the CMS</h1><p>Add the Supabase environment variables described in <code>.env.example</code>, then apply <code>supabase/schema.sql</code>.</p></div></AdminShell>;
  }
  const { data: authData } = await supabase.auth.getUser();
  if (!authData.user) {
    return (
      <AdminShell>
        <form className="admin-card admin-login" action={login}>
          <p className="eyebrow gold">Private dashboard</p><h1>Welcome, Naresh</h1><p>Sign in to add travel stories and genuine customer feedback.</p>
          {params.error && <p className="admin-alert error">{params.error}</p>}
          <label>Email<input name="email" type="email" autoComplete="email" required /></label>
          <label>Password<input name="password" type="password" autoComplete="current-password" required /></label>
          <button className="button button-gold" type="submit">Sign in securely</button>
        </form>
      </AdminShell>
    );
  }

  const [{ data: stories }, { data: testimonials }] = await Promise.all([
    supabase.from("travel_stories").select("id,title,published,featured,created_at").order("created_at", { ascending: false }).limit(25),
    supabase.from("testimonials").select("id,customer_name,published,featured,created_at").order("created_at", { ascending: false }).limit(25),
  ]);

  return (
    <AdminShell>
      <div className="admin-top"><div><p className="eyebrow gold">Private dashboard</p><h1>Welcome, Naresh</h1><p>Add and control website content from your phone.</p></div><form action={logout}><button className="button button-outline-light" type="submit"><LogOut size={18} /> Sign out</button></form></div>
      {params.success && <p className="admin-alert success">{params.success}</p>}
      <div className="admin-grid">
        <form className="admin-card admin-form" action={createStory}>
          <Camera /><h2>Add Travel Story</h2>
          <label>Story title<input name="title" required maxLength={120} /></label>
          <label>Photo or short video<input name="media" type="file" accept="image/jpeg,image/png,image/webp,video/mp4,video/quicktime" /></label>
          <label>Or video link<input name="mediaLink" type="url" placeholder="https://youtube.com/…" /></label>
          <div className="admin-row"><label>Destination<input name="destination" /></label><label>Country<input name="country" /></label></div>
          <label>Year<input name="travelYear" type="number" min="1950" max="2100" inputMode="numeric" /></label>
          <label>Caption / story<textarea name="description" rows={5} /></label>
          <label className="check"><input name="featured" type="checkbox" /> Feature on homepage</label>
          <label className="check"><input name="published" type="checkbox" /> Show publicly now</label>
          <button className="button button-gold" type="submit">Save travel story</button>
          <small>Maximum direct upload: 25 MB. Use a video link for longer videos.</small>
        </form>
        <form className="admin-card admin-form" action={createTestimonial}>
          <MessageSquareQuote /><h2>Add Customer Feedback</h2>
          <label>Customer name<input name="customerName" required maxLength={100} /></label>
          <div className="admin-row"><label>Destination<input name="destination" /></label><label>Service<input name="serviceType" placeholder="Travel or visa" /></label></div>
          <label>Written feedback<textarea name="feedback" rows={5} /></label>
          <div className="admin-row"><label>Rating (optional)<input name="rating" type="number" min="1" max="5" /></label><label>Travel year<input name="travelYear" type="number" min="1950" max="2100" /></label></div>
          <label>Video testimonial link<input name="videoUrl" type="url" placeholder="https://…" /></label>
          <label className="check consent"><input name="consent" type="checkbox" required /> I confirm the customer has consented to public use.</label>
          <label className="check"><input name="featured" type="checkbox" /> Feature on homepage</label>
          <label className="check"><input name="published" type="checkbox" /> Show publicly now</label>
          <button className="button button-gold" type="submit">Save customer feedback</button>
        </form>
      </div>
      <section className="admin-manage">
        <h2>Manage Website Content</h2>
        <div className="admin-list">
          {[...(stories ?? []).map((item) => ({ ...item, label: item.title, table: "travel_stories" })), ...(testimonials ?? []).map((item) => ({ ...item, label: item.customer_name, table: "testimonials" }))].map((item) => (
            <article key={`${item.table}-${item.id}`}>
              <div><strong>{item.label}</strong><small>{item.table === "travel_stories" ? "Travel story" : "Customer feedback"}</small></div>
              <form action={updateContentState}>
                <input type="hidden" name="id" value={item.id} /><input type="hidden" name="table" value={item.table} />
                <label className="check"><input name="featured" type="checkbox" defaultChecked={item.featured} /> Featured</label>
                <label className="check"><input name="published" type="checkbox" defaultChecked={item.published} /> Public</label>
                <button className="small-action" type="submit">Update</button>
              </form>
              <form action={deleteContent}><input type="hidden" name="id" value={item.id} /><input type="hidden" name="table" value={item.table} /><button className="delete-action" type="submit" aria-label={`Delete ${item.label}`}><Trash2 size={18} /></button></form>
            </article>
          ))}
          {!stories?.length && !testimonials?.length && <p>No content has been added yet.</p>}
        </div>
      </section>
    </AdminShell>
  );
}

function AdminShell({ children }: { children: React.ReactNode }) {
  return <section className="admin-page"><div className="shell admin-shell">{children}</div></section>;
}
