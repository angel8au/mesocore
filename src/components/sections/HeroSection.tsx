import Image from "next/image";
import { landing } from "@/content/landing";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { ContactForm } from "@/components/ui/ContactForm";

export function HeroSection() {
  const { title, subtitle } = landing.hero;

  return (
    <section className="hero-section flex flex-col overflow-hidden bg-mesocore-black text-white">
      <Container className="shrink-0 pt-8 md:pt-10">
        <Logo variant="light" />
      </Container>
      <Container className="flex min-h-0 flex-1 flex-col pb-0">
        <div className="grid h-full min-h-0 flex-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center gap-6 py-8 lg:py-0">
            <h1 className="font-title text-display">
              {title}
            </h1>
            <p className="max-w-lg text-base leading-relaxed text-white/80 md:text-lg">
              {subtitle}
            </p>
            <ContactForm variant="dark" />
          </div>
          <div className="flex min-h-[280px] items-end justify-center lg:min-h-0 lg:h-full">
            <div className="relative h-full w-full max-w-sm">
              <Image
                src="/images/model-hero.png"
                alt="Modelo profesional representando estética aplicada con inteligencia"
                fill
                priority
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
