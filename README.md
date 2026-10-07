# Travel with Naresh Gadhiya

Production-oriented website and simple mobile CMS for Naresh Gadhiya's independent international travel and visa consultancy.

Website: <https://travelwithnaresh.com/>

## Architecture

- Next.js App Router, React, TypeScript and Tailwind CSS
- Supabase Auth, PostgreSQL and Storage
- GitHub Pages static deployment with custom domain
- WhatsApp-first enquiry conversion
- Privacy-conscious aggregate site-view counter

The detailed sitemap, wireframe, design system, content model, deployment plan and cost model are in [`docs/launch-plan.md`](docs/launch-plan.md).

## Local development

```powershell
Copy-Item .env.example .env.local
npm install
npm run dev
```

Open `http://localhost:3000`. The public website works without Supabase. `/admin` displays setup instructions until the environment variables are configured.

## Configure the CMS

1. Create a Supabase project.
2. Run `supabase/schema.sql` in the Supabase SQL Editor.
3. Create Naresh's administrator account in **Authentication → Users**.
4. Replace `ADMIN_EMAIL_HERE` in the final SQL comment and run that one authorization statement.
5. Copy the project URL and public anon key into `.env.local` and the Vercel environment settings.
6. Keep email self-registration disabled. Only the explicitly authorized user can write content.

Direct media uploads accept JPG, PNG, WebP, MP4 and MOV files up to 25 MB. Longer videos should use YouTube or another hosted video URL.

## Deployment

1. Create a private GitHub repository and push this project.
2. Import it into Vercel.
3. Configure the three variables from `.env.example`.
4. Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS domain.
5. Attach the domain in Vercel, then apply the DNS records at the registrar.

Before launch, replace the proposed domain if a different name is purchased, add genuine travel media, confirm every career detail with Naresh, and publish testimonials only with customer consent.

The GitHub Pages workflow publishes the public website at the custom domain and intentionally excludes `/admin`, because GitHub Pages cannot run the authenticated server-side CMS. A future Vercel deployment can provide the private CMS.
