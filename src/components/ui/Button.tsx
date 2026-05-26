import { type AnchorHTMLAttributes, type ReactNode } from "react";

export type ButtonProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "className"
> & {
  children: ReactNode;
  href: string;
  className?: string;
};

export function Button({
  children,
  href,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <a
      href={href}
      className={`text-actionable text-actionable-on-dark inline-flex min-h-12 items-center justify-center rounded-sm bg-primary px-8 font-medium transition-colors hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:bg-primary-hover ${className}`.trim()}
      {...props}
    >
      {children}
    </a>
  );
}
