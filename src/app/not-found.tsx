import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { Footer } from "@/components/sections/Footer";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-mesocore-background">
      <header className="border-b border-mesocore-gray-100 py-8">
        <Container>
          <Link href="/" className="inline-block">
            <Logo variant="primary" />
          </Link>
        </Container>
      </header>

      <main className="flex flex-1 items-center py-16">
        <Container>
          <div className="mx-auto flex max-w-xl flex-col items-center text-center">
            <h1 className="text-title-2 text-mesocore-gray-900">Página no encontrada</h1>
            <p className="mt-3 text-base leading-relaxed font-light text-mesocore-gray-500">
              La página que buscas no existe o fue movida.
            </p>
            <Link
              href="/"
              className="mt-8 inline-flex rounded-sm bg-primary px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-hover"
            >
              Volver al inicio
            </Link>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}

