type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  variant?: "light" | "dark";
  label?: string;
};

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  variant = "dark",
  label,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const titleColor =
    variant === "light" ? "text-white" : "text-mesocore-gray-900";
  const subtitleColor =
    variant === "light" ? "text-white/80" : "text-mesocore-gray-500";
  const eyebrowTone =
    variant === "light" ? "text-eyebrow-on-dark" : "text-eyebrow-on-light";

  return (
    <div className={`max-w-3xl ${alignClass}`}>
      {label && (
        <p className={`text-eyebrow mb-3 ${eyebrowTone}`}>{label}</p>
      )}
      <h2
        className={`text-title-2 ${titleColor}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base leading-relaxed md:text-lg ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
