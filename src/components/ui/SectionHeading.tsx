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
  const labelColor = variant === "light" ? "text-white/70" : "text-primary";

  return (
    <div className={`max-w-3xl ${alignClass}`}>
      {label && (
        <p
          className={`mb-3 text-xs font-semibold tracking-[0.2em] uppercase ${labelColor}`}
        >
          {label}
        </p>
      )}
      <h2
        className={`font-title text-2xl leading-tight md:text-3xl lg:text-4xl ${titleColor}`}
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
