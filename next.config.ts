import { networkInterfaces } from "node:os";
import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

/**
 * IP(s) locales du poste (ex. Wi-Fi), recalculées à chaque démarrage — évite
 * de devoir mettre à jour manuellement `allowedDevOrigins` quand le routeur
 * attribue une nouvelle adresse (bail DHCP, reconnexion Wi-Fi, etc.).
 */
function getLocalNetworkIPs(): string[] {
  const ips: string[] = [];
  for (const addresses of Object.values(networkInterfaces())) {
    for (const address of addresses ?? []) {
      if (address.family === "IPv4" && !address.internal) {
        ips.push(address.address);
      }
    }
  }
  return ips;
}

const nextConfig: NextConfig = {
  // Sortie autonome pour un déploiement Node.js classique (hors Vercel).
  output: "standalone",

  // Autorise l'accès à `npm run dev` depuis un autre appareil du réseau local
  // (ex. tester sur mobile via l'IP du PC). Next.js bloque sinon les requêtes
  // vers ses ressources de dev par sécurité — sans ça, le JS ne charge jamais
  // sur l'appareil distant et le site paraît entièrement figé (rien de cliquable).
  // N'affecte pas la production (`next start`) ; se met à jour automatiquement
  // à chaque redémarrage de `npm run dev`, même si l'IP locale change.
  allowedDevOrigins: getLocalNetworkIPs(),

  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
