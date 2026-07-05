import { CONTACT_INFO, DEFAULT_WHATSAPP_MESSAGE } from "@/lib/constants";

export function getWhatsAppLink(message: string = DEFAULT_WHATSAPP_MESSAGE): string {
  return `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
}
