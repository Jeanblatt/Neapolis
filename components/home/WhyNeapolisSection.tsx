import Section from "@/components/ui/Section";
import { ICON_MAP } from "@/components/ui/icons";
import { WHY_NEAPOLIS_FEATURES } from "@/lib/constants";

export default function WhyNeapolisSection() {
  return (
    <Section
      background="muted"
      eyebrow="Pourquoi Néapolis"
      title="Un partenaire de confiance"
      subtitle="Ce qui fait la différence quand vous achetez chez nous."
    >
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {WHY_NEAPOLIS_FEATURES.map((feature) => {
          const Icon = ICON_MAP[feature.icon];

          return (
            <div key={feature.title} className="flex flex-col items-start gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary dark:bg-primary/20">
                {Icon && <Icon className="h-5 w-5" />}
              </div>
              <p className="font-semibold">{feature.title}</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
