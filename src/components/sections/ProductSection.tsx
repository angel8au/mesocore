import Image from "next/image";
import { landing } from "@/content/landing";
import { Container } from "@/components/ui/Container";
import { ProductFeature } from "@/components/ui/ProductFeature";

export function ProductSection() {
  const { name, description, features, footnote } = landing.product;

  return (
    <section className="bg-mesocore-background py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="flex justify-center">
            <div className="relative aspect-[391/399] w-full max-w-[230px] lg:max-w-[390.34px]">
              <Image
                src="/images/product-vials.png"
                alt="Tres viales EnzyCore 1500 de MESOCORE con etiqueta Enzimas Cocktail"
                width={391}
                height={399}
                unoptimized
                className="h-full w-full object-contain object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
          <div>
            <h2 className="text-title-2 mb-4 text-mesocore-gray-900">
              {name}
            </h2>
            <p className="mb-10 max-w-lg text-base leading-relaxed text-mesocore-gray-500">
              {description}
            </p>
            <div className="grid grid-cols-3 gap-6 sm:gap-8">
              {features.map((feature) => (
                <ProductFeature
                  key={feature.id}
                  imageSrc={feature.image}
                  imageAlt={feature.imageAlt}
                  line1={feature.line1}
                  line2={feature.line2}
                />
              ))}
            </div>
            <p className="mt-8 text-left text-xs leading-relaxed text-mesocore-gray-500">
              {footnote}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
