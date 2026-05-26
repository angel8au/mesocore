import Image from "next/image";

/** Proporción del SVG: 232 × 32 */
export const LOGO_WIDTH = 232;
export const LOGO_HEIGHT = 32;

type LogoVariant = "light" | "primary" | "text";

type LogoProps = {
  /** light = blanco, primary = #314C54, text = #3A3F42 (cuerpo) */
  variant?: LogoVariant;
  className?: string;
};

const LOGO_SOURCES: Record<LogoVariant, string> = {
  light: "/logo-white.svg",
  primary: "/logo-primary.svg",
  text: "/logo-text.svg",
};

export function Logo({ variant = "primary", className = "" }: LogoProps) {
  return (
    <Image
      src={LOGO_SOURCES[variant]}
      alt="MESOCORE"
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      className={`h-8 w-auto ${className}`}
      priority={variant === "light"}
    />
  );
}
