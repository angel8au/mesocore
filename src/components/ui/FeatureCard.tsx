import { type ReactNode } from "react";

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  variant?: "inline" | "stacked";
};

export function FeatureCard({
  icon,
  title,
  description,
  variant = "stacked",
}: FeatureCardProps) {
  if (variant === "inline") {
    return (
      <div className="flex flex-col items-center text-center">
        <div className="mb-3 text-mesocore-gray-900">{icon}</div>
        <p className="text-sm font-semibold text-mesocore-gray-900">{title}</p>
        {description ? (
          <p className="mt-1 text-xs text-mesocore-gray-500">{description}</p>
        ) : null}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center text-center px-4">
      <div className="mb-4 text-mesocore-gray-900">{icon}</div>
      <h3 className="text-title-3 mb-2 text-mesocore-gray-900">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-mesocore-gray-500">
        {description}
      </p>
    </div>
  );
}
