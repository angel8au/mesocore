import { landing } from "@/content/landing";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { valueIcons } from "@/components/ui/icons";

export function ValuesSection() {
  const { title, subtitle, items } = landing.values;

  return (
    <section className="bg-mesocore-gray-50 py-16 md:py-24">
      <Container>
        <div className="mb-14 flex justify-center">
          <SectionHeading title={title} subtitle={subtitle} align="center" />
        </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {items.map((item) => {
            const Icon = valueIcons[item.icon];
            return (
              <FeatureCard
                key={item.id}
                icon={<Icon />}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
}
