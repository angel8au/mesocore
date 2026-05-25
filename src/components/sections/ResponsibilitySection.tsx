import Image from "next/image";
import { landing } from "@/content/landing";
import { Container } from "@/components/ui/Container";

export function ResponsibilitySection() {
  const { title, intro, commitments, modelImage } = landing.responsibility;

  return (
    <section className="overflow-hidden bg-mesocore-gray-100 py-16 md:py-24">
      <Container className="pb-0">
        <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
          <div className="flex flex-col justify-center md:max-w-xl lg:max-w-2xl">
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

          <div className="flex min-h-[360px] items-end justify-center md:min-h-[480px] md:justify-end lg:min-h-[560px]">
            <div className="relative aspect-[1333/2000] h-[min(52vh,480px)] w-full max-w-[280px] md:h-full md:max-h-[560px] md:max-w-[400px] lg:max-w-[460px]">
              <Image
                src={modelImage}
                alt="Modelo representando estética y responsabilidad técnica MESOCORE"
                fill
                className="object-contain object-bottom"
                sizes="(max-width: 1024px) 280px, 460px"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
