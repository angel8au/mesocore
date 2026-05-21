import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { terms } from "@/content/terms";

export const metadata: Metadata = {
  title: "Términos y condiciones | MESOCORE",
  description: "Términos y condiciones de uso del sitio web MESOCORE.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-mesocore-background">
      <header className="border-b border-mesocore-gray-100 py-8">
        <Container>
          <Link href="/" className="inline-block">
            <Logo variant="primary" />
          </Link>
        </Container>
      </header>

      <main className="py-12 md:py-16">
        <Container>
          <p className="mb-2 text-sm text-mesocore-gray-500">
            Última actualización: {terms.lastUpdated}
          </p>
          <h1 className="font-title mb-8 text-3xl text-mesocore-gray-900 md:text-4xl">
            {terms.title}
          </h1>
          <p className="mb-10 max-w-3xl text-base leading-relaxed font-light text-mesocore-gray-500">
            {terms.intro}
          </p>

          <div className="max-w-3xl space-y-8">
            {terms.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-title mb-3 text-xl text-mesocore-gray-900">
                  {section.heading}
                </h2>
                <p className="text-base leading-relaxed font-light text-mesocore-gray-500">
                  {section.body}
                </p>
              </section>
            ))}
          </div>

          <p className="mt-12">
            <Link
              href="/"
              className="text-sm text-primary underline-offset-4 hover:underline"
            >
              Volver al inicio
            </Link>
          </p>
        </Container>
      </main>
    </div>
  );
}
