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

export default function Home() {
  return (
    <>
      <div className="relative min-h-dvh w-full">
        {/* Navigation solo visible en lg+ */}
        <div className="hidden md:block absolute left-0 top-[329px]">
          <Navigation />
        </div>

        <HeroSection />

        <div className="flex flex-col items-center text-center">
          <ValuesSection />

          <div className="max-w-7xl mx-auto flex mb-[115px] justify-center items-center w-full">
            <VideoInstitucional />
          </div>

          <FadeIn delay={300}>
            <PVCSection />
          </FadeIn>

          <FadeIn delay={300}>
            <SteelframeSection />
          </FadeIn>

          <FadeIn delay={300}>
            <SolarEnergySection className="mt-10" />
          </FadeIn>
          <FadeIn delay={300}>
            <ModularSection />
          </FadeIn>
          <FadeIn delay={300}>
            <News />
          </FadeIn>

          <MapSection />
        </div>
      </div>
    </>
  );
}
