import type { Category, Product, ServiceItem } from "@/types";

/**
 * Couche de données centralisée : point d'entrée unique pour tous les composants.
 * Ces fonctions retournent des données mock locales. Lors de l'intégration Google
 * Sheets, seule cette couche sera remplacée — aucun composant UI ne doit changer.
 */

const mockCategories: Category[] = [
  { id: "1", name: "PC portables", description: "Ordinateurs portables pour tous les usages", icon: "laptop" },
  { id: "2", name: "PC bureau", description: "Postes de bureau performants", icon: "computer" },
  { id: "3", name: "Composants", description: "Stockage, mémoire, cartes", icon: "cpu" },
  { id: "4", name: "Écrans", description: "Moniteurs et affichage", icon: "monitor" },
  { id: "5", name: "Imprimantes", description: "Impression et scan", icon: "printer" },
  { id: "6", name: "Réseaux", description: "Routeurs, switches, câblage", icon: "router" },
  { id: "7", name: "Accessoires", description: "Claviers, souris et périphériques", icon: "package" },
];

const mockProducts: Product[] = [
  {
    id: "1",
    name: "Ordinateur portable 15\"",
    description: "Ordinateur portable polyvalent pour le bureau et les études, autonomie longue durée.",
    category: "PC portables",
    price: 1899,
    images: ["placeholder-1", "placeholder-2"],
    stockStatus: "in_stock",
  },
  {
    id: "2",
    name: "PC de bureau performant",
    description: "Unité centrale prête à l'emploi pour la bureautique et le multimédia.",
    category: "PC bureau",
    price: 2199,
    images: ["placeholder-1"],
    stockStatus: "in_stock",
  },
  {
    id: "3",
    name: "Disque SSD 1To",
    description: "Stockage rapide pour accélérer le démarrage et le chargement de vos applications.",
    category: "Composants",
    price: 289,
    images: ["placeholder-1"],
    stockStatus: "in_stock",
  },
  {
    id: "4",
    name: "Écran 24 pouces Full HD",
    description: "Moniteur 24\" idéal pour le travail bureautique et la navigation quotidienne.",
    category: "Écrans",
    price: 549,
    images: ["placeholder-1", "placeholder-2"],
    stockStatus: "on_order",
  },
  {
    id: "5",
    name: "Imprimante laser multifonction",
    description: "Impression, scan et copie pour un usage professionnel ou personnel.",
    category: "Imprimantes",
    price: 649,
    images: ["placeholder-1"],
    stockStatus: "in_stock",
  },
  {
    id: "6",
    name: "Routeur Wi-Fi 6",
    description: "Routeur nouvelle génération pour une couverture réseau optimale.",
    category: "Réseaux",
    price: 219,
    images: ["placeholder-1"],
    stockStatus: "in_stock",
  },
  {
    id: "7",
    name: "Clavier + souris sans fil",
    description: "Pack clavier et souris sans fil, confortable et silencieux.",
    category: "Accessoires",
    price: 129,
    images: ["placeholder-1"],
    stockStatus: "out_of_stock",
  },
];

const mockServices: ServiceItem[] = [
  {
    id: "1",
    title: "Réparation d'ordinateurs",
    description: "Diagnostic et réparation de vos ordinateurs portables et de bureau.",
    icon: "wrench",
  },
  {
    id: "2",
    title: "Maintenance informatique",
    description: "Entretien préventif et curatif pour prolonger la durée de vie de votre matériel.",
    icon: "settings",
  },
  {
    id: "3",
    title: "Installation Windows et logiciels",
    description: "Installation et configuration de Windows et de vos logiciels métier.",
    icon: "monitor",
  },
  {
    id: "4",
    title: "Installation réseaux Wi-Fi",
    description: "Mise en place et sécurisation de votre réseau Wi-Fi, domestique ou professionnel.",
    icon: "wifi",
  },
  {
    id: "5",
    title: "Conseil informatique",
    description: "Accompagnement dans le choix de vos équipements et solutions informatiques.",
    icon: "message-circle",
  },
  {
    id: "6",
    title: "Vente et installation de matériel",
    description: "Fourniture et installation de matériel informatique adapté à vos besoins.",
    icon: "package",
  },
];

export async function getProducts(): Promise<Product[]> {
  return mockProducts;
}

export async function getProductById(id: string): Promise<Product | undefined> {
  return mockProducts.find((product) => product.id === id);
}

export async function getServices(): Promise<ServiceItem[]> {
  return mockServices;
}

export async function getCategories(): Promise<Category[]> {
  return mockCategories;
}
