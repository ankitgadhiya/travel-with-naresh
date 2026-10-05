import { MessageCircle } from "lucide-react";
import { whatsappMessages, whatsappUrl } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
    <a
      className="floating-whatsapp"
      href={whatsappUrl(whatsappMessages.general)}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Naresh on WhatsApp"
    >
      <MessageCircle aria-hidden="true" />
      <span>WhatsApp Naresh</span>
    </a>
  );
}
