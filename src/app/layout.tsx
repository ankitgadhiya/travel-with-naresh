import type { Metadata, Viewport } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { assetPath, site } from "@/lib/site";
import "./globals.css";
import "./premium.css";

const display = Playfair_Display({ subsets: ["latin"], variable: "--font-display", weight: ["600", "700", "800"] });
const sans = Montserrat({ subsets: ["latin"], variable: "--font-sans", weight: ["400", "500", "600", "700", "800"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | International Travel & Visa Consultancy`, template: `%s | ${site.shortName}` },
  description: "Personalized international holidays and end-to-end visa consultancy from Naresh Gadhiya, a Navi Mumbai travel professional with 36+ years of experience.",
  keywords: ["Travel Consultant Navi Mumbai", "Visa Consultancy Navi Mumbai", "Europe Travel Specialist Mumbai", "Customized International Tour Packages Mumbai", "Naresh Gadhiya Travel"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: site.name,
    description: `${site.descriptor} · ${site.experience}`,
    url: site.url,
    siteName: site.name,
    locale: "en_IN",
    images: [{ url: assetPath("/images/travel-with-naresh-social.jpg"), width: 1200, height: 671, alt: `${site.name} — ${site.descriptor}` }],
  },
  twitter: { card: "summary_large_image", title: site.name, description: `${site.descriptor} · ${site.experience}`, images: [assetPath("/images/travel-with-naresh-social.jpg")] },
};

export const viewport: Viewport = { themeColor: "#071a33", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: site.name,
    description: site.descriptor,
    url: site.url,
    email: site.email,
    telephone: site.phoneDisplay,
    areaServed: "India",
    address: { "@type": "PostalAddress", addressLocality: "Navi Mumbai", addressRegion: "Maharashtra", addressCountry: "IN" },
    founder: { "@type": "Person", name: "Naresh Gadhiya", sameAs: [site.linkedin] },
  };

  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <FloatingWhatsApp />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  );
}
