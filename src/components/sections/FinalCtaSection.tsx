import { landing } from "@/content/landing";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FinalCtaSection() {
  const { title, subtitle, cta } = landing.finalCta;
  const { contactEmail } = landing;

  return (
    <section className="bg-mesocore-background-subtle py-16 md:py-24">
      <Container className="flex flex-col items-center text-center">
        <SectionHeading title={title} subtitle={subtitle} align="center" />
        <div className="mt-10 flex w-full justify-center">
          <Button href={`mailto:${contactEmail}`}>{cta}</Button>
        </div>
      </Container>
    </section>
  );
}
