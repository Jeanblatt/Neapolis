import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import ServiceCard from "@/components/services/ServiceCard";
import { getServices } from "@/services/dataService";

export default async function ServicesPreviewSection() {
  const services = await getServices();

  return (
    <Section
      background="muted"
      eyebrow="Ce que nous faisons"
      title="Nos services"
      subtitle="Un accompagnement complet, avant et après votre achat."
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Reveal key={service.id} delay={index * 60} className="h-full">
            <ServiceCard service={service} />
          </Reveal>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Button href="/services" variant="secondary">
          Voir tous nos services
        </Button>
      </div>
    </Section>
  );
}
