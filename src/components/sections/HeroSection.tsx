import Image from "next/image";
import { landing } from "@/content/landing";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export function HeroSection() {
  const { modelImage, label, title, subtitle } = landing.hero;

  return (
    <section className="hero-section flex flex-col">
      <Container className="flex shrink-0 justify-center pt-6 md:pt-8">
        <Logo variant="light" />
      </Container>

      <Container className="flex flex-1 flex-col md:flex-row md:items-center md:gap-6 lg:max-w-[88rem] lg:gap-10">
        <div className="@container mt-12 mx-auto flex w-full max-w-lg flex-col items-center gap-3 text-center md:mx-0 md:mt-0 md:min-w-0 md:max-w-none md:flex-1 md:items-start md:gap-4 md:text-left">
          <h1 className="text-title-1 text-pretty break-words text-white text-[clamp(1.625rem,10cqi,4.25rem)] leading-[1.1]">
            {title}
          </h1>
          <p className="text-eyebrow text-eyebrow-on-dark mt-3">{label}</p>
          <p className="max-w-prose text-base leading-relaxed text-mesocore-pearl md:text-[0.95rem] md:leading-relaxed lg:text-[1.0625rem]">
            {subtitle}
          </p>
        </div>

        <div className="mt-6 flex items-end justify-center md:mt-0 md:shrink-0 md:self-stretch md:justify-end">
          <div className="relative aspect-[1331/1727] h-[340px] w-auto md:h-[460px] lg:h-[600px] xl:h-[680px]">
            <Image
              src={modelImage}
              alt="Modelo profesional representando mesoterapia avanzada MESOCORE"
              fill
              priority
              className="object-contain object-bottom"
              sizes="(max-width: 767px) 260px, (max-width: 1023px) 354px, 524px"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
