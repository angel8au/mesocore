import { landing } from "@/content/landing";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TechnicalSection() {
  const { title, subtitle, quote } = landing.technical;

  return (
    <section className="gradient-technical py-20 md:py-28">
      <Container className="flex flex-col items-center text-center">
        <SectionHeading title={title} subtitle={subtitle} align="center" />
        <blockquote className="mt-12 max-w-2xl text-xl italic leading-relaxed text-mesocore-gray-900 md:text-2xl">
          &ldquo;{quote}&rdquo;
        </blockquote>
      </Container>
    </section>
  );
}
