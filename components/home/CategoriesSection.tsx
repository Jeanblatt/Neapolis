import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import CategoryCard from "@/components/products/CategoryCard";
import { getCategories } from "@/services/dataService";

export default async function CategoriesSection() {
  const categories = await getCategories();

  return (
    <Section eyebrow="Catalogue" title="Nos catégories" subtitle="Trouvez rapidement ce qu'il vous faut.">
      <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
        {categories.map((category, index) => (
          <Reveal key={category.id} delay={index * 60} className="h-full">
            <CategoryCard category={category} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
