import { landing } from "@/content/landing";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { IconFacebook, IconInstagram } from "@/components/ui/icons";

export function Footer() {
  const { copyright, legal } = landing.footer;

  return (
    <footer className="border-t border-mesocore-gray-100 bg-mesocore-gray-50 py-8">
      <Container>
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex gap-4 text-mesocore-gray-500">
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
          <Logo variant="dark" />
          <p className="text-center text-xs text-mesocore-gray-500 md:text-right">
            {copyright}
            <br />
            {legal}
          </p>
        </div>
      </Container>
    </footer>
  );
}
