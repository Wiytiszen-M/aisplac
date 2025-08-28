import type { Metadata } from "next";
import "./globals.css";

import { Raleway } from "next/font/google";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Link from "next/link";

import { CotizacionWidget } from "@/components/cotizacion-widget";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from "react-icons/ai";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

const siteUrl = "https://aisplac.com.ar";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AISPLAC — Construcción en seco y Paneles de PVC",
    template: "%s | AISPLAC",
  },
  description:
    "Empresa líder en construcción en seco. Fabricantes de Paneles de PVC hace 24 años. Steel Frame, Drywall, cielorrasos PVC y más.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "AISPLAC — Construcción en seco y Paneles de PVC",
    description:
      "Soluciones constructivas innovadoras y sustentables: Steel Frame, Drywall, cielorrasos PVC y más.",
    url: "/",
    siteName: "AISPLAC",
    type: "website",
    images: [
      { url: "/og-default.png", width: 1200, height: 630, alt: "AISPLAC" },
    ],
    locale: "es_AR",
  },
  twitter: {
    card: "summary_large_image",
    title: "AISPLAC",
    description:
      "Fabricación y comercialización de materiales para construcción en seco.",
    images: ["/og-default.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Header />

        <main className="relative">
          {children}
          <div className="absolute bottom-0 flex w-full items-center justify-center gap-2 py-10 md:gap-4">
            <Link
              href="https://www.youtube.com/@aisplacsrl"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <AiOutlineYoutube className="h-14 w-14 hover:text-[#c4302b]" />
            </Link>
            <Link
              href="https://ar.linkedin.com/company/aisplac-srl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineLinkedin className="h-14 w-14 hover:text-[#0e76a8]" />
            </Link>
            <Link
              href="https://www.instagram.com/aisplacsrl/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineInstagram className="h-14 w-14 hover:text-[#E1306C]" />
            </Link>
            <Link
              href="https://www.facebook.com/Aisplac"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineFacebook className="h-14 w-14 hover:text-[#39569c]" />
            </Link>
          </div>
        </main>
        <CotizacionWidget />

        <Footer />
      </body>
    </html>
  );
}
