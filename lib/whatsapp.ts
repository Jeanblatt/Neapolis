import { CONTACT_INFO, DEFAULT_WHATSAPP_MESSAGE } from "@/lib/constants";

export function getWhatsAppLink(message: string = DEFAULT_WHATSAPP_MESSAGE): string {
  return `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** Messages pré-remplis, centralisés pour rester cohérents partout où ils sont utilisés. */
export const whatsappMessages = {
  product: (name: string) => `Bonjour, je suis intéressé par le produit : ${name}.`,
  service: (title: string) => `Bonjour, je souhaite demander le service : ${title}.`,
  quoteFollowUp: (need: string, message: string) => `Bonjour, je souhaite un devis pour : ${need}. ${message}`.trim(),
};
