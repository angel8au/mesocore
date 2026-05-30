import Image from "next/image";
import { landing } from "@/content/landing";
import { Container } from "@/components/ui/Container";

export function InnovationsSection() {
  const { label, title, badge, items } = landing.innovations;

  return (
    <section className="bg-background py-10 md:py-24">
      <Container>
        <div className="mx-auto mb-8 max-w-3xl text-center md:mb-14">
          <p className="text-eyebrow text-[0.8125rem] tracking-[0.18em] text-mesocore-gray-500 md:text-base md:tracking-[0.2em]">
            {label}
          </p>
          <h2 className="text-title-2 mt-2 text-mesocore-gray-900 md:mt-3">{title}</h2>
        </div>

        <ul className="grid grid-cols-2 gap-x-2.5 gap-y-8 pt-2 md:gap-x-4 md:gap-y-10 md:pt-3 lg:grid-cols-4 lg:gap-5">
          {items.map((item) => (
            <li
              key={item.id}
              className="relative flex flex-col rounded-sm bg-surface"
            >
              <span className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2 rounded-sm bg-badge-coming-soon-bg px-1.5 py-px text-[0.5625rem] font-medium uppercase tracking-[0.12em] text-badge-coming-soon-fg md:px-2 md:py-0.5 md:text-[0.625rem] md:tracking-[0.14em] lg:px-3 lg:py-1 lg:text-[0.6875rem] lg:tracking-[0.16em]">
                {badge}
              </span>
              <div className="flex flex-col items-center px-1.5 pb-2 pt-5 md:px-2 md:pb-3 md:pt-6 lg:px-4 lg:pb-4 lg:pt-8">
                <div className="relative aspect-square w-full max-w-[200px]">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-contain object-center"
                    sizes="(max-width: 1023px) 42vw, 240px"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col px-2 pb-3 pt-0 md:px-3 md:pb-4 md:pt-1 lg:px-5 lg:pb-6 lg:pt-2">
                <h3 className="text-title-3 text-center text-mesocore-gray-900">
                  {item.name}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-mesocore-gray-500 max-md:mt-1.5 max-md:text-[0.6875rem] max-md:leading-snug lg:mt-3">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
