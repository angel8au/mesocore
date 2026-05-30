import Link from "next/link";
import { landing } from "@/content/landing";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { IconFacebook, IconInstagram } from "@/components/ui/icons";

export function Footer() {
  const { copyright, legal, termsLabel, termsHref } = landing.footer;

  return (
    <footer className="border-t border-mesocore-gray-100 bg-surface py-8 md:py-10">
      <Container className="flex flex-col">
        <div className="grid grid-cols-1 items-center gap-6 pb-8 md:grid-cols-3 md:pb-10">
          {/* Móvil: logo → redes → términos */}
          <div className="order-2 flex justify-center gap-4 text-mesocore-gray-500 md:order-1 md:justify-start">
            <a
              href="#"
              aria-label="Facebook de MESOCORE"
              className="transition-colors hover:text-mesocore-gray-900"
            >
              <IconFacebook />
            </a>
            <a
              href="#"
              aria-label="Instagram de MESOCORE"
              className="transition-colors hover:text-mesocore-gray-900"
            >
              <IconInstagram />
            </a>
          </div>

          <div className="order-1 flex justify-center md:order-2">
            <Link href="/" aria-label="MESOCORE inicio">
              <Logo variant="primary" />
            </Link>
          </div>

          <div className="order-3 flex justify-center md:justify-end">
            <Link
              href={termsHref}
              className="text-xs text-mesocore-gray-900 underline-offset-4 transition-colors hover:text-primary hover:underline"
            >
              {termsLabel}
            </Link>
          </div>
        </div>

        <div className="border-t-1 border-[#B97C4B] pt-6 text-center text-xs text-mesocore-gray-500">
          <p>{copyright}</p>
          <p className="mt-1">{legal}</p>
        </div>
      </Container>
    </footer>
  );
}
