import { landing } from "@/content/landing";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/ui/ContactForm";

export function FinalCtaSection() {
  const { title, subtitle } = landing.finalCta;

  return (
    <section className="bg-white py-16 md:py-24">
      <Container className="flex flex-col items-center text-center">
        <SectionHeading title={title} subtitle={subtitle} align="center" />
        <div className="mt-10 flex w-full justify-center">
          <ContactForm variant="light" />
        </div>
      </Container>
    </section>
  );
}
