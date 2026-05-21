import Image from "next/image";
import { landing } from "@/content/landing";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { ContactForm } from "@/components/ui/ContactForm";

export function HeroSection() {
  const { title, subtitle } = landing.hero;

  return (
    <section className="bg-mesocore-black text-white">
      <Container className="py-8 md:py-10">
        <Logo variant="light" />
      </Container>
      <Container className="pb-16 md:pb-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-8">
            <h1 className="text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
              {title}
            </h1>
            <p className="max-w-lg text-base leading-relaxed text-white/80 md:text-lg">
              {subtitle}
            </p>
            <ContactForm variant="dark" />
          </div>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md lg:max-w-none lg:mx-0">
            <Image
              src="/images/hero-model.svg"
              alt="Modelo profesional representando estética aplicada con inteligencia"
              fill
              priority
              className="object-contain object-bottom"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
