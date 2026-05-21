import { type ReactNode } from "react";

type ValueFeatureProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export function ValueFeature({ icon, title, description }: ValueFeatureProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="shrink-0 text-mesocore-gray-900">{icon}</div>
      <div className="min-w-0">
        <h3 className="font-title mb-2 text-base leading-snug text-mesocore-gray-900">
          {title}
        </h3>
        <p className="text-sm leading-relaxed font-light text-mesocore-gray-500">
          {description}
        </p>
      </div>
    </div>
  );
}
