import { Mail, MessageCircle, Phone } from "lucide-react";
import { site, whatsappMessages, whatsappUrl } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
    <aside className="contact-dock" aria-label="Quick contact">
      <a className="dock-email" href={`mailto:${site.email}`} aria-label="Email Naresh">
        <Mail aria-hidden="true" /><span>Email</span>
      </a>
      <a className="dock-phone" href={`tel:+${site.phone}`} aria-label={`Call ${site.phoneDisplay}`}>
        <Phone aria-hidden="true" /><span>Call</span>
      </a>
      <a
        className="dock-whatsapp"
        href={whatsappUrl(whatsappMessages.general)}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Naresh on WhatsApp"
      >
        <MessageCircle aria-hidden="true" />
        <span>WhatsApp</span>
      </a>
    </aside>
  );
}
