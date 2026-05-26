import type { IconProps } from "@phosphor-icons/react";
import {
  ArrowsClockwise,
  Asclepius,
  CaretDown,
  Crosshair,
  Drop,
  Flask,
  FacebookLogo,
  InstagramLogo,
  ShieldCheck,
  Sparkle,
  Star,
  Target,
  Waves,
} from "@phosphor-icons/react/ssr";
import type { ComponentType } from "react";

export const PHOSPHOR_ICON_SIZE = 24;
export const PHOSPHOR_VALUE_ICON_SIZE = 32;
export const PHOSPHOR_ICON_WEIGHT = "regular" as const;

type MesocoreIconProps = {
  className?: string;
};

type PhosphorIconComponent = ComponentType<IconProps>;

function createIcon(
  PhosphorIcon: PhosphorIconComponent,
  size: number = PHOSPHOR_ICON_SIZE,
): ComponentType<MesocoreIconProps> {
  function MesocoreIcon({ className }: MesocoreIconProps) {
    return (
      <PhosphorIcon
        size={size}
        weight={PHOSPHOR_ICON_WEIGHT}
        className={className}
        aria-hidden
      />
    );
  }

  MesocoreIcon.displayName = PhosphorIcon.displayName ?? "MesocoreIcon";

  return MesocoreIcon;
}

/** Valores — aplicación localizada */
export const IconLocalized = createIcon(Crosshair, PHOSPHOR_VALUE_ICON_SIZE);

/** Valores — integración en protocolos */
export const IconProtocols = createIcon(ArrowsClockwise, PHOSPHOR_VALUE_ICON_SIZE);

/** Valores — formulación avanzada */
export const IconPipette = createIcon(Flask, PHOSPHOR_VALUE_ICON_SIZE);

/** Valores — uso profesional */
export const IconProfessional = createIcon(Asclepius, PHOSPHOR_VALUE_ICON_SIZE);

/** Compromisos — calidad */
export const IconQuality = createIcon(Star);

/** Compromisos — uso responsable */
export const IconShield = createIcon(ShieldCheck);

/** Compromisos — precisión */
export const IconPrecision = createIcon(Target);

/** UI — acordeón */
export const IconChevronDown = createIcon(CaretDown);

/** Footer — redes */
export const IconFacebook = createIcon(FacebookLogo);
export const IconInstagram = createIcon(InstagramLogo);

/** Producto (legacy) */
export const IconDroplet = createIcon(Drop);
export const IconWaves = createIcon(Waves);
export const IconSparkle = createIcon(Sparkle);

export const valueIcons = {
  localized: IconLocalized,
  protocols: IconProtocols,
  pipette: IconPipette,
  professional: IconProfessional,
} as const;

export const commitmentIcons = {
  quality: IconQuality,
  shield: IconShield,
  precision: IconPrecision,
} as const;

export const productIcons = {
  droplet: IconDroplet,
  waves: IconWaves,
  sparkle: IconSparkle,
} as const;
