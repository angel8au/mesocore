import Image from "next/image";
import { landing } from "@/content/landing";
import { Container } from "@/components/ui/Container";

export function OriginSection() {
  const {
    label,
    title,
    descriptionBefore,
    descriptionBold,
    descriptionAfter,
  } = landing.origin;

  return (
    <section className="overflow-hidden bg-copper">
      <Container className="pb-0">
        <div className="grid min-h-[480px] gap-8 lg:grid-cols-2 lg:min-h-[560px] lg:gap-16">
          <div className="flex max-w-xl flex-col justify-center py-12 lg:py-16">
            <p className="mb-3 text-xs font-medium tracking-[0.2em] text-white/80 uppercase">
              {label}
            </p>
            <h2 className="text-title-2 text-white">
              {title}
            </h2>
            <p className="mt-4 text-base leading-relaxed font-light text-white/90 md:text-lg">
              {descriptionBefore}
              <strong className="font-semibold text-white">
                {descriptionBold}
              </strong>
              {descriptionAfter}
            </p>
          </div>

          <div className="flex min-h-[300px] items-end justify-center lg:min-h-0 lg:h-full lg:justify-end">
            <div className="relative h-full w-full max-w-lg">
              <Image
                src="/images/mode-origen.png"
                alt="Modelo en sección de formulación de origen europeo MESOCORE"
                fill
                className="object-contain object-bottom"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
