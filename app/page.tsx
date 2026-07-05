import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import ServicesPreviewSection from "@/components/home/ServicesPreviewSection";
import FeaturedProductsSection from "@/components/home/FeaturedProductsSection";
import WhyNeapolisSection from "@/components/home/WhyNeapolisSection";
import ContactCtaSection from "@/components/home/ContactCtaSection";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({ path: "/" });

export default function Home() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <ServicesPreviewSection />
      <FeaturedProductsSection />
      <WhyNeapolisSection />
      <ContactCtaSection />
    </>
  );
}
