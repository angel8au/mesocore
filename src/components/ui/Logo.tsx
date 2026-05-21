type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

export function Logo({ variant = "dark", className = "" }: LogoProps) {
  const color = variant === "light" ? "text-white" : "text-mesocore-gray-900";

  return (
    <span
      className={`inline-block text-sm font-semibold tracking-[0.35em] ${color} ${className}`}
      aria-label="MESOCORE"
    >
      MESOCORE
    </span>
  );
}
