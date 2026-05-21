import Image from "next/image";
import { landing } from "@/content/landing";
import { Container } from "@/components/ui/Container";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { productIcons } from "@/components/ui/icons";

export function ProductSection() {
  const { name, description, features } = landing.product;

  return (
    <section className="bg-mesocore-gray-50 py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative aspect-[4/3] w-full max-w-lg mx-auto lg:max-w-none">
            <Image
              src="/images/product-vials.svg"
              alt="Tres viales EnzyCore 1500 de MESOCORE"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-mesocore-gray-900 md:text-3xl">
              {name}
            </h2>
            <p className="mb-10 max-w-lg text-base leading-relaxed text-mesocore-gray-500">
              {description}
            </p>
            <div className="grid grid-cols-3 gap-6">
              {features.map((feature) => {
                const Icon = productIcons[feature.icon];
                return (
                  <FeatureCard
                    key={feature.id}
                    variant="inline"
                    icon={<Icon />}
                    title={feature.label}
                    description=""
                  />
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
