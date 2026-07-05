export const SITE_NAME = "Néapolis";

export const SITE_DESCRIPTION =
  "Néapolis, votre boutique informatique en Tunisie : vente de matériel, services et conseils.";

export const NAV_LINKS = [
  { label: "Accueil", href: "/" },
  { label: "Produits", href: "/produits" },
  { label: "Services", href: "/services" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
  { label: "Demande de devis", href: "/devis" },
];

export const CONTACT_INFO = {
  phone: "+216 98 331 289",
  whatsapp: "21698331289",
  email: "contact@neapolis.tn",
  address: "Avenue Habib Bourguiba, Tunis, Tunisie",
};

export const DEFAULT_WHATSAPP_MESSAGE = "Bonjour, je suis intéressé par vos services Néapolis.";

export const WHATSAPP_LINK = `https://wa.me/${CONTACT_INFO.whatsapp}`;

export const OPENING_HOURS = [
  { days: "Lundi - Vendredi", hours: "09:00 - 18:00" },
  { days: "Samedi", hours: "09:00 - 13:00" },
  { days: "Dimanche", hours: "Fermé" },
];

export const WHY_NEAPOLIS_FEATURES = [
  {
    icon: "shield-check",
    title: "Garantie & confiance",
    description: "Produits garantis et service après-vente réactif.",
  },
  {
    icon: "truck",
    title: "Livraison en Tunisie",
    description: "Livraison rapide partout dans le pays.",
  },
  {
    icon: "badge-percent",
    title: "Prix compétitifs",
    description: "Le meilleur rapport qualité-prix du marché.",
  },
  {
    icon: "headphones",
    title: "Support technique",
    description: "Une équipe disponible pour vous conseiller.",
  },
];
