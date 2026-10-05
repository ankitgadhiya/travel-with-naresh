import type { MetadataRoute } from "next";
import { destinations, site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/visa-consultancy", "/custom-travel-tours", "/destinations", "/travel-stories", "/customer-experiences", "/why-travel-with-naresh", "/faq", "/contact", "/privacy", "/terms"];
  return [...pages.map((path) => ({ url: `${site.url}${path}`, lastModified: new Date(), changeFrequency: path === "" ? "weekly" as const : "monthly" as const, priority: path === "" ? 1 : .7 })), ...destinations.map(({ slug }) => ({ url: `${site.url}/destinations/${slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: .6 }))];
}
