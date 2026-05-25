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
    <section className="overflow-hidden bg-primary">
      <Container className="pb-0">
        <div className="grid min-h-[480px] gap-2 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:min-h-[520px] md:gap-10 lg:min-h-[560px] lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:gap-16">
          <div className="flex w-full max-w-xl flex-col justify-center pt-12 pb-0 md:max-w-none md:pe-8 lg:py-16 lg:pe-12">
            <p className="text-eyebrow text-eyebrow-on-dark mb-3">{label}</p>
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
