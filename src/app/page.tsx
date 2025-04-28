import Navigation from "@/components/navigation/navigation";
import ValuesSection from "@/components/values-section/values-section";
import SteelframeSection from "@/components/steelframe-section/steelframe-section";
import ModularSection from "@/components/modular-section/modular-section";
import MapSection from "@/components/map-section/map-section";
import SolarEnergySection from "@/components/solar-energy-section/solar-energy-section";
import News from "@/components/news/news";
import PVCSection from "@/components/pvc-section/pvc-section";
import HeroSection from "@/components/hero-section/hero-section";

export default function Home() {
  return (
    <>
      <div className="relative min-h-screen w-full">
        {/* Navigation solo visible en lg+ */}
        <div className="hidden md:block absolute left-0 top-[329px]">
          <Navigation />
        </div>

        <HeroSection />

        <div className="flex flex-col items-center text-center">
          <ValuesSection />

          <div className="flex mb-[115px] justify-center items-center w-full">
            <iframe
              width="1441"
              height="584"
              src="https://www.youtube.com/embed/{VIDEO_ID}"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <PVCSection />
          <SteelframeSection />

          <SolarEnergySection className="mt-10" />
          <ModularSection />
          <News />
          <MapSection />
        </div>
      </div>
    </>
  );
}
