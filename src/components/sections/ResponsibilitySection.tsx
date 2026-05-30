import Image from "next/image";
import { landing } from "@/content/landing";
import { Container } from "@/components/ui/Container";
import { commitmentIcons } from "@/components/ui/icons";

export function ResponsibilitySection() {
  const { title, intro, commitments, modelImage } = landing.responsibility;

  return (
    <section className="overflow-hidden bg-surface">
      <Container className="pb-0">
        <div className="grid grid-cols-1 items-center gap-8 pt-12 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:min-h-[520px] md:gap-10 md:pt-0 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:min-h-[560px] lg:gap-16">
          <div className="flex flex-col justify-center md:py-12 md:pe-8 lg:py-16 lg:pe-12">
            <h2 className="text-title-2 text-mesocore-gray-900">{title}</h2>
            <p className="text-eyebrow mt-6 text-mesocore-gray-500">{intro}</p>
            <ul className="mt-6 space-y-3 text-base leading-relaxed text-mesocore-text-secondary md:text-lg">
              {commitments.map((item) => {
                const Icon = commitmentIcons[item.icon];
                return (
                  <li key={item.text} className="flex items-start gap-3">
                    <Icon className="mt-0.5 shrink-0 text-mesocore-gray-900" />
                    <span>{item.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex h-full items-end justify-center md:justify-end">
            <div className="relative aspect-[2/3] h-[360px] w-auto md:aspect-auto md:h-full md:w-full">
              <Image
                src={modelImage}
                alt="Modelo representando estética y responsabilidad técnica MESOCORE"
                fill
                className="object-contain object-bottom"
                sizes="(max-width: 767px) 240px, (max-width: 1023px) 45vw, 40vw"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
