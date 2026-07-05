# Néapolis

Site vitrine e-commerce pour Néapolis, boutique informatique en Tunisie (Next.js App Router, React, TypeScript, Tailwind CSS).

## Prérequis

- Node.js 20+
- npm

## Développement

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production |
| `npm run start` | Démarre le serveur de production (après `build`) |
| `npm run lint` | Vérification ESLint |
| `npm run type-check` | Vérification TypeScript (`tsc --noEmit`) |

## Variables d'environnement

Copier `.env.example` en `.env.local` et adapter :

| Variable | Description |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL publique du site (utilisée pour les métadonnées SEO, le sitemap et les canonicals) |

## Architecture

- `app/` — pages et routes (App Router)
- `components/` — composants React, organisés par domaine (`ui`, `layout`, `home`, `products`, `services`, `devis`, `contact`, `seo`)
- `services/` — couche de données et d'envoi de formulaires ; `services/dataService.ts` est le point d'entrée unique pour les produits, catégories et services (données mock, prêtes à être remplacées par une vraie source — ex. Google Sheets — sans changer les composants UI)
- `types/` — types TypeScript partagés
- `lib/` — constantes, helpers (WhatsApp, SEO, affichage produit)

## Déploiement (hébergement Node.js)

Le projet est configuré en `output: "standalone"` (voir `next.config.ts`), adapté à un hébergement Node.js classique (VPS, Topnet, etc.) sans dépendre de Vercel.

```bash
npm run build
cp -r public .next/standalone/
cp -r .next/static .next/standalone/.next/
node .next/standalone/server.js
```

Le serveur écoute par défaut sur le port 3000 ; définir `PORT` et `HOSTNAME` si besoin :

```bash
PORT=8080 HOSTNAME=0.0.0.0 node .next/standalone/server.js
```

Avant la mise en ligne, vérifier :

- `npm run lint`, `npm run type-check`, `npm run build` sans erreur.
- `NEXT_PUBLIC_SITE_URL` défini avec le vrai nom de domaine.
- Le numéro WhatsApp et les coordonnées dans `lib/constants.ts`.
