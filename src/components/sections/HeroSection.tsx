import Image from "next/image";
import { landing } from "@/content/landing";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export function HeroSection() {
  const { title, subtitle } = landing.hero;

  return (
    <section className="hero-section flex flex-col">
      <div className="relative z-10 flex min-h-0 flex-1 flex-col">
        <Container className="flex shrink-0 justify-center pt-8 md:pt-10">
          <Logo variant="light" />
        </Container>
        <Container className="mt-12 flex min-h-0 flex-1 flex-col pb-0 lg:mt-0">
          <div className="flex h-full min-h-0 flex-1 flex-col items-center gap-2 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
            <div className="flex w-full max-w-lg flex-col items-center gap-6 pb-4 text-center lg:items-start lg:justify-center lg:pb-0 lg:text-left">
              <h1 className="text-title-1 text-white">{title}</h1>
              <p className="max-w-lg text-base leading-relaxed text-mesocore-pearl md:text-lg">
                {subtitle}
              </p>
            </div>
            <div className="flex w-full justify-center lg:h-full lg:min-h-0 lg:items-end">
              <div className="relative aspect-[571/1024] h-[min(52vh,480px)] w-full max-w-[280px] sm:max-w-xs lg:h-full lg:max-h-[620px] lg:max-w-sm">
                <Image
                  src="/images/modelo-hero.png"
                  alt="Modelo profesional representando estética aplicada con inteligencia"
                  fill
                  priority
                  className="object-contain object-bottom"
                  sizes="(max-width: 1024px) 280px, 50vw"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
