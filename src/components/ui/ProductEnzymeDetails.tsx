import { IconChevronDown } from "@/components/ui/icons";

type ProductEnzymeDetailsProps = {
  trigger: string;
  intro: string;
  bullets: readonly string[];
  closing: string;
};

export function ProductEnzymeDetails({
  trigger,
  intro,
  bullets,
  closing,
}: ProductEnzymeDetailsProps) {
  return (
    <details className="group mt-8 overflow-hidden rounded-sm border border-mesocore-border-secondary">
      <summary className="text-actionable text-actionable-on-light flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-4 text-left text-base transition-colors hover:text-primary-hover md:px-5 md:text-lg [&::-webkit-details-marker]:hidden">
        <span>{trigger}</span>
        <IconChevronDown className="size-6 shrink-0 text-mesocore-gray-900 transition-transform duration-200 group-open:rotate-180" />
      </summary>
      <div className="space-y-4 border-t border-mesocore-border-secondary px-4 pb-4 pt-4 text-base leading-relaxed text-mesocore-text-secondary md:px-5 md:pb-5 md:text-lg">
        <p>{intro}</p>
        <ul className="list-disc space-y-2 pl-5">
          {bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>{closing}</p>
      </div>
    </details>
  );
}
