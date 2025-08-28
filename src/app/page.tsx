import Navigation from "@/components/navigation/navigation";
import ValuesSection from "@/components/values-section/values-section";
import SteelframeSection from "@/components/steelframe-section/steelframe-section";
import ModularSection from "@/components/modular-section/modular-section";
import MapSection from "@/components/map-section/map-section";
import SolarEnergySection from "@/components/solar-energy-section/solar-energy-section";
import News from "@/components/news/news";
import PVCSection from "@/components/pvc-section/pvc-section";
import HeroSection from "@/components/hero-section/hero-section";
import VideoInstitucional from "@/components/video-inst";
import { FadeIn } from "@/components/fade-in";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construcción en seco y Paneles de PVC | AISPLAC",
  description:
    "Empresa pampeana fundada en 2000. Soluciones en construcción en seco: Paneles de PVC, Steel Frame, Drywall y más. Presupuestos y asesoramiento.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <div className=" relative min-h-dvh w-full">
        {/* Navigation solo visible en lg+ */}
        <div className="absolute left-0 top-[329px] hidden md:block">
          <Navigation />
        </div>
        <h1 className="sr-only">
          Construcción en seco y Paneles de PVC en Argentina — AISPLAC
        </h1>

        <HeroSection />

        <div className="flex flex-col items-center text-center">
          <ValuesSection />

          <div className="mx-auto mb-[115px] flex w-full max-w-7xl items-center justify-center">
            <VideoInstitucional />
          </div>

          <FadeIn>
            <PVCSection />
          </FadeIn>

          <FadeIn>
            <SteelframeSection />
          </FadeIn>

          <FadeIn>
            <SolarEnergySection />
          </FadeIn>
          <FadeIn>
            <ModularSection />
          </FadeIn>
          <FadeIn>
            <News />
          </FadeIn>

          <MapSection />
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "AISPLAC SRL",
            legalName: "Aisplac SRL",
            url: "https://aisplac.com.ar/",
            logo: "https://aisplac.com.ar/logo.svg",
            foundingDate: "2000",
            description:
              "Empresa líder en la fabricación y comercialización de materiales para la construcción en seco. Fabricantes de Paneles de PVC desde hace 24 años.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "José Viscardis 345 - Parque Industrial",
              addressLocality: "General Pico",
              addressRegion: "La Pampa",
              addressCountry: "AR",
            },
            sameAs: [
              "https://www.youtube.com/@aisplacsrl",
              "https://ar.linkedin.com/company/aisplac-srl",
              "https://www.instagram.com/aisplacsrl/",
              "https://www.facebook.com/Aisplac",
            ],
          }),
        }}
      />
    </>
  );
}
