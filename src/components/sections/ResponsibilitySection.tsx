import Image from "next/image";
import { landing } from "@/content/landing";
import { Container } from "@/components/ui/Container";

export function ResponsibilitySection() {
  const { title, intro, commitments, modelImage } = landing.responsibility;

  return (
    <section className="overflow-hidden bg-mesocore-gray-100 pt-16 md:pt-0">
      <Container className="pb-0">
        <div className="grid min-h-[480px] gap-2 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:min-h-[520px] md:gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:min-h-[560px] lg:gap-16">
          <div className="flex w-full max-w-xl flex-col justify-center pb-0 md:max-w-none md:py-12 md:pe-8 lg:py-16 lg:pe-12">
            <h2 className="text-title-2 text-mesocore-gray-900">{title}</h2>
            <p className="mt-4 text-base leading-relaxed text-mesocore-gray-900 md:text-lg">
              {intro}
            </p>
            <ul className="mt-6 list-disc space-y-3 pl-5 text-base leading-relaxed text-mesocore-text-secondary md:text-lg">
              {commitments.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="flex min-h-[300px] items-end justify-center md:min-h-0 md:h-full md:justify-end">
            <div className="relative h-full w-full max-w-lg md:max-w-none">
              <Image
                src={modelImage}
                alt="Modelo representando estética y responsabilidad técnica MESOCORE"
                fill
                className="object-contain object-bottom md:object-right-bottom"
                sizes="(max-width: 767px) 100vw, (max-width: 1023px) 55vw, 50vw"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
