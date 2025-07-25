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
        <div className="absolute left-0 top-[329px] hidden md:block">
          <Navigation />
        </div>

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
    </>
  );
}
