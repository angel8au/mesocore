import { HeroSection } from "@/components/sections/HeroSection";
import { ProductSection } from "@/components/sections/ProductSection";
import { TechnicalSection } from "@/components/sections/TechnicalSection";
import { OriginSection } from "@/components/sections/OriginSection";
import { ValuesSection } from "@/components/sections/ValuesSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProductSection />
      <ValuesSection />
      <OriginSection />
      <TechnicalSection />
      <FinalCtaSection />
      <Footer />
    </main>
  );
}
