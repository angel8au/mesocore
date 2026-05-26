import Image from "next/image";
import { IconChevronDown } from "@/components/ui/icons";

type EnzymeBullet = {
  icon: string;
  iconAlt: string;
  text: string;
};

type ProductEnzymeDetailsProps = {
  trigger: string;
  intro: string;
  bullets: readonly EnzymeBullet[];
  closing: string;
};

export function ProductEnzymeDetails({
  trigger,
  intro,
  bullets,
  closing,
}: ProductEnzymeDetailsProps) {
  return (
    <details className="group mt-8 overflow-hidden rounded-sm border border-mesocore-border-secondary transition-colors hover:border-primary hover:bg-primary-subtle/40">
      <summary className="group/summary text-actionable text-actionable-on-light flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-4 text-left text-base transition-colors hover:text-primary-hover md:px-5 md:text-lg [&::-webkit-details-marker]:hidden">
        <span>{trigger}</span>
        <IconChevronDown className="size-6 shrink-0 text-primary transition-[transform,color] duration-200 group-open:rotate-180 group-hover/summary:text-primary-hover" />
      </summary>
      <div className="space-y-6 border-t border-mesocore-border-secondary px-4 pb-6 pt-5 text-base leading-relaxed text-mesocore-text-secondary md:px-6 md:pb-8 md:pt-6 md:text-lg">
        <p>{intro}</p>
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
          {bullets.map((item) => (
            <li
              key={item.text}
              className="flex flex-col items-center gap-3 text-center text-sm md:text-base"
            >
              <div className="relative h-16 w-16 md:h-20 md:w-20">
                <Image
                  src={item.icon}
                  alt={item.iconAlt}
                  fill
                  className="object-contain mix-blend-darken"
                  sizes="80px"
                />
              </div>
              <span className="leading-snug">{item.text}</span>
            </li>
          ))}
        </ul>
        <p className="text-center">{closing}</p>
      </div>
    </details>
  );
}
