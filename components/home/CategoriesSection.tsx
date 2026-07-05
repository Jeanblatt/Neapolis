import Section from "@/components/ui/Section";
import CategoryCard from "@/components/products/CategoryCard";
import { getCategories } from "@/services/dataService";

export default async function CategoriesSection() {
  const categories = await getCategories();

  return (
    <Section eyebrow="Catalogue" title="Nos catégories" subtitle="Trouvez rapidement ce qu'il vous faut.">
      <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </Section>
  );
}
