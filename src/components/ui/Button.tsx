import { type AnchorHTMLAttributes, type ReactNode } from "react";

type ButtonVariant = "primary";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-primary hover:bg-primary-hover focus:ring-primary",
};

const baseClasses =
  "text-actionable text-actionable-on-dark inline-flex min-h-12 items-center justify-center rounded-sm px-8 text-base transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none";

export type ButtonProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "className"
> & {
  children: ReactNode;
  href: string;
  variant?: ButtonVariant;
  className?: string;
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`.trim();

  return (
    <a href={href} className={classes} {...props}>
      {children}
    </a>
  );
}
