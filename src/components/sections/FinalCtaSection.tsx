import { landing } from "@/content/landing";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FinalCtaSection() {
  const { title, subtitle, cta, email } = landing.finalCta;

  return (
    <section className="bg-mesocore-background py-16 md:py-24">
      <Container className="flex flex-col items-center text-center">
        <SectionHeading title={title} subtitle={subtitle} align="center" />
        <div className="mt-10 flex w-full justify-center">
          <a
            href={`mailto:${email}`}
            className="inline-flex min-h-12 items-center justify-center bg-primary px-8 text-xs font-semibold tracking-wider text-white uppercase transition-colors hover:bg-primary-hover focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:outline-none"
          >
            {cta}
          </a>
        </div>
      </Container>
    </section>
  );
}
