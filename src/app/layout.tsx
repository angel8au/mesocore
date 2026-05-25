import type { Metadata } from "next";
import { Inter, Rethink_Sans } from "next/font/google";
import "./globals.css";
import { landing } from "@/content/landing";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const rethinkSans = Rethink_Sans({
  variable: "--font-rethink-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: landing.metadata.title,
  description: landing.metadata.description,
  appleWebApp: {
    title: "Mesocore",
  },
  openGraph: {
    title: landing.metadata.title,
    description: landing.metadata.description,
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${rethinkSans.variable} antialiased`}
    >
      <body className="min-h-screen font-body font-light">{children}</body>
    </html>
  );
}
