import Image from "next/image";
import { landing } from "@/content/landing";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function OriginSection() {
  const { label, title, description } = landing.origin;

  return (
    <section className="bg-copper py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            label={label}
            title={title}
            subtitle={description}
            align="left"
            variant="light"
          />
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md lg:max-w-none">
            <Image
              src="/images/origin-model.svg"
              alt="Modelo en sección de formulación europea MESOCORE"
              fill
              className="object-contain object-bottom"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
