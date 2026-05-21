import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { landing } from "@/content/landing";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: landing.metadata.title,
  description: landing.metadata.description,
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
    <html lang="es" className={`${dmSans.variable} antialiased`}>
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
