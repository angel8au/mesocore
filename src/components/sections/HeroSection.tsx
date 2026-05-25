import Image from "next/image";
import { landing } from "@/content/landing";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export function HeroSection() {
  const { modelImage, label, title, subtitle } = landing.hero;

  return (
    <section className="hero-section flex flex-col overflow-hidden">
      <div className="relative z-10 flex min-h-0 flex-1 flex-col">
        <Container className="flex shrink-0 justify-center pt-8 md:pt-10">
          <Logo variant="light" />
        </Container>
        <Container className="mt-8 flex min-h-0 flex-1 flex-col pb-0 md:mt-6 lg:max-w-[88rem]">
          <div className="flex h-full min-h-0 flex-1 flex-col items-center gap-2 md:grid md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:items-stretch md:gap-8 lg:grid-cols-[minmax(0,1.22fr)_minmax(0,0.78fr)] lg:gap-10 xl:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] xl:gap-12">
            <div className="flex w-full max-w-lg flex-col items-center gap-4 pb-4 text-center md:max-w-none md:items-start md:justify-center md:pb-0 md:pe-6 md:text-left lg:w-full lg:max-w-[40rem] lg:pe-4 xl:max-w-[44rem] xl:pe-6">
              <h1 className="text-title-1 max-w-none text-pretty text-white">{title}</h1>
              <p className="text-eyebrow text-eyebrow-on-dark mt-3">{label}</p>
              <p className="max-w-lg text-base leading-relaxed text-mesocore-pearl md:max-w-none md:text-lg lg:text-[1.125rem] lg:leading-relaxed xl:text-xl xl:leading-relaxed">
                {subtitle}
              </p>
            </div>
            <div className="mt-auto flex w-full min-h-0 justify-center md:mt-0 md:h-full md:items-end md:justify-end md:self-stretch">
              <div className="relative aspect-[1331/2000] h-[min(54vh,520px)] w-full max-w-[280px] md:aspect-auto md:h-full md:max-h-full md:w-[min(100%,340px)] lg:aspect-[1331/2000] lg:h-[819px] lg:w-[545px] lg:max-w-none lg:shrink-0">
                <Image
                  src={modelImage}
                  alt="Modelo profesional representando mesoterapia avanzada MESOCORE"
                  fill
                  priority
                  className="object-contain object-bottom"
                  sizes="(max-width: 767px) 280px, (max-width: 1023px) 340px, 545px"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
