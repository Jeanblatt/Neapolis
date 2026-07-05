import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { ICON_MAP } from "@/components/ui/icons";
import { getWhatsAppLink } from "@/lib/whatsapp";
import type { ServiceItem } from "@/types";

export default function ServiceCard({ service }: { service: ServiceItem }) {
  const Icon = ICON_MAP[service.icon];
  const whatsappMessage = `Bonjour, je souhaite demander le service : ${service.title}.`;

  return (
    <Card className="flex flex-col">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary dark:bg-primary/20">
        {Icon && <Icon className="h-5 w-5" />}
      </div>
      <h3 className="mt-4 font-semibold">{service.title}</h3>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{service.description}</p>
      <div className="mt-auto pt-4">
        <Button
          href={getWhatsAppLink(whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          variant="secondary"
          className="w-full"
        >
          Demander ce service
        </Button>
      </div>
    </Card>
  );
}
