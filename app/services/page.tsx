import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import ServiceCard from "@/components/services/ServiceCard";
import { buildMetadata } from "@/lib/seo";
import { getServices } from "@/services/dataService";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description: "Réparation, maintenance, installation Windows et réseaux Wi-Fi, conseil informatique à Tunis.",
  path: "/services",
});

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <Section
      eyebrow="Ce que nous faisons"
      title="Services"
      subtitle="Nos services autour de votre équipement informatique."
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </Section>
  );
}
