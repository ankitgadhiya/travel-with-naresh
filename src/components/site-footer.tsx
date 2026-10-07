import Link from "next/link";
import { BriefcaseBusiness, Mail, MapPin, MessageCircle } from "lucide-react";
import { site, whatsappMessages, whatsappUrl } from "@/lib/site";
import { SiteVisitCounter } from "@/components/site-visit-counter";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <p className="eyebrow gold">Travel with Naresh Gadhiya</p>
          <h2>{site.tagline}</h2>
          <p className="muted-light">Personal international travel planning and professional visa-application guidance, built on more than three decades of industry experience.</p>
        </div>
        <div>
          <h3>Start a conversation</h3>
          <a href={whatsappUrl(whatsappMessages.general)} target="_blank" rel="noreferrer"><MessageCircle size={18} /> {site.phoneDisplay}</a>
          <a href={`mailto:${site.email}`}><Mail size={18} /> {site.email}</a>
          <span><MapPin size={18} /> {site.location}</span>
          <a href={site.linkedin} target="_blank" rel="noreferrer"><BriefcaseBusiness size={18} /> LinkedIn profile</a>
        </div>
        <div>
          <h3>Information</h3>
          <Link href="/about">About Naresh Gadhiya</Link>
          <Link href="/travel-stories">Travel stories & gallery</Link>
          <Link href="/customer-experiences">Customer experiences</Link>
          <Link href="/faq">Frequently asked questions</Link>
          <Link href="/privacy">Privacy policy</Link>
          <Link href="/terms">Terms & visa disclaimer</Link>
          {process.env.GITHUB_PAGES !== "true" && <Link href="/admin">Administrator</Link>}
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} {site.name}</span>
        <span>Serving travellers across India through personalized remote consultation.</span>
        <SiteVisitCounter />
      </div>
    </footer>
  );
}
