create extension if not exists "pgcrypto";

create table if not exists public.admin_users (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (select 1 from public.admin_users where user_id = auth.uid());
$$;

create table if not exists public.site_settings (
  key text primary key,
  value jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

create table if not exists public.travel_stories (
  id uuid primary key default gen_random_uuid(),
  title text not null check (char_length(title) between 2 and 120),
  destination text,
  country text,
  travel_year integer check (travel_year between 1950 and 2100),
  description text,
  media_url text,
  media_type text not null default 'image' check (media_type in ('image', 'video', 'link')),
  featured boolean not null default false,
  published boolean not null default false,
  created_by uuid not null references auth.users(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.testimonials (
  id uuid primary key default gen_random_uuid(),
  customer_name text not null check (char_length(customer_name) between 2 and 100),
  customer_photo_url text,
  destination text,
  service_type text,
  feedback text,
  rating integer check (rating between 1 and 5),
  video_url text,
  travel_year integer check (travel_year between 1950 and 2100),
  consent_confirmed boolean not null default false,
  featured boolean not null default false,
  published boolean not null default false,
  created_by uuid not null references auth.users(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint testimonial_has_content check (feedback is not null or video_url is not null)
);

create table if not exists public.destinations (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  summary text,
  content jsonb not null default '{}'::jsonb,
  featured boolean not null default false,
  published boolean not null default false,
  display_order integer not null default 0,
  updated_at timestamptz not null default now()
);

create table if not exists public.timeline_entries (
  id uuid primary key default gen_random_uuid(),
  period text not null,
  organization text not null,
  role text not null,
  display_order integer not null default 0,
  published boolean not null default true
);

create table if not exists public.proof_points (
  id uuid primary key default gen_random_uuid(),
  value text not null,
  label text not null,
  evidence_confirmed boolean not null default false,
  published boolean not null default false,
  display_order integer not null default 0,
  constraint proof_requires_evidence check (not published or evidence_confirmed)
);

alter table public.admin_users enable row level security;
alter table public.site_settings enable row level security;
alter table public.travel_stories enable row level security;
alter table public.testimonials enable row level security;
alter table public.destinations enable row level security;
alter table public.timeline_entries enable row level security;
alter table public.proof_points enable row level security;

create policy "Admins can view admin users" on public.admin_users for select using (public.is_admin());
create policy "Public settings are readable" on public.site_settings for select using (true);
create policy "Admins manage settings" on public.site_settings for all using (public.is_admin()) with check (public.is_admin());
create policy "Published stories are public" on public.travel_stories for select using (published or public.is_admin());
create policy "Admins manage stories" on public.travel_stories for all using (public.is_admin()) with check (public.is_admin());
create policy "Consented published testimonials are public" on public.testimonials for select using ((published and consent_confirmed) or public.is_admin());
create policy "Admins manage testimonials" on public.testimonials for all using (public.is_admin()) with check (public.is_admin());
create policy "Published destinations are public" on public.destinations for select using (published or public.is_admin());
create policy "Admins manage destinations" on public.destinations for all using (public.is_admin()) with check (public.is_admin());
create policy "Published timeline is public" on public.timeline_entries for select using (published or public.is_admin());
create policy "Admins manage timeline" on public.timeline_entries for all using (public.is_admin()) with check (public.is_admin());
create policy "Confirmed proof points are public" on public.proof_points for select using ((published and evidence_confirmed) or public.is_admin());
create policy "Admins manage proof points" on public.proof_points for all using (public.is_admin()) with check (public.is_admin());

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('media', 'media', true, 26214400, array['image/jpeg','image/png','image/webp','video/mp4','video/quicktime'])
on conflict (id) do update set public = excluded.public, file_size_limit = excluded.file_size_limit, allowed_mime_types = excluded.allowed_mime_types;

create policy "Public media is readable" on storage.objects for select using (bucket_id = 'media');
create policy "Admins upload media" on storage.objects for insert with check (bucket_id = 'media' and public.is_admin() and (storage.foldername(name))[1] = auth.uid()::text);
create policy "Admins update own media" on storage.objects for update using (bucket_id = 'media' and public.is_admin() and owner_id = auth.uid()::text);
create policy "Admins delete own media" on storage.objects for delete using (bucket_id = 'media' and public.is_admin() and owner_id = auth.uid()::text);

-- After creating Naresh's Auth user in the Supabase dashboard, authorize it once:
-- insert into public.admin_users (user_id) select id from auth.users where email = 'ADMIN_EMAIL_HERE';
