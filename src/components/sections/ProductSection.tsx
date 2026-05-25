import Image from "next/image";
import { landing } from "@/content/landing";
import { Container } from "@/components/ui/Container";
import { ProductEnzymeDetails } from "@/components/ui/ProductEnzymeDetails";

export function ProductSection() {
  const { name, tagline, composition, presentation, summary, enzymeAction } =
    landing.product;

  return (
    <section className="bg-mesocore-background py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
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
          <div className="md:max-w-none lg:max-w-2xl xl:max-w-3xl">
            <h2 className="text-title-2 text-mesocore-gray-900">{name}</h2>
            <p className="mt-4 text-base leading-relaxed text-mesocore-gray-900 md:text-lg">
              {tagline}
            </p>
            <dl className="mt-6 space-y-3 text-base leading-relaxed text-mesocore-gray-500 md:text-lg">
              <div>
                <dt className="font-semibold text-mesocore-gray-900">
                  Composición:
                </dt>
                <dd>{composition}</dd>
              </div>
              <div>
                <dt className="font-semibold text-mesocore-gray-900">
                  Presentación:
                </dt>
                <dd>{presentation}</dd>
              </div>
            </dl>
            <p className="mt-6 text-base leading-relaxed text-mesocore-gray-500 md:text-lg">
              {summary}
            </p>
            <ProductEnzymeDetails {...enzymeAction} />
          </div>
        </div>
      </Container>
    </section>
  );
}
