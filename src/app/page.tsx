import Image from "next/image";
import { Buy, ShoppingCart, User } from "./assets/icons";
import Navigation from "@/components/navigation/navigation";
import ValuesSection from "@/components/values-section/values-section";
import SteelframeSection from "@/components/steelframe-section/steelframe-section";
import ModularSection from "@/components/modular-section/modular-section";
import MapSection from "@/components/map-section/map-section";
import SolarEnergySection from "@/components/solar-energy-section/solar-energy-section";
import News from "@/components/news/news";
import PVCSection from "@/components/pvc-section/pvc-section";

export default function Home() {
  return (
    <>
      <main className="relative min-h-screen w-full  flex flex-col items-center justify-center  text-center">
        <div className="absolute top-16 right-44 flex gap-3 justify-end z-10">
          <ShoppingCart className="w-12 h-12" />
          <Buy className="w-12 h-12" />
          <User className="w-12 h-12" />
        </div>
        <Navigation className="absolute left-0 top-[329px]" />
        <div
          className="-z-10 relative mb-44 flex flex-col w-full h-full justify-center items-center"
          style={{
            backgroundImage: "url(/bg.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Image
            src="/logo.svg"
            width={486}
            height={277}
            alt="logo"
            className="mt-[430px] z-30"
            style={{ width: "486px", height: "277px" }}
          />
          <div className="flex flex-col justify-center items-center gap-12 mt-[530px] mb-44 w-[876px]">
            <p className="text-3xl mt-[300px]">
              Somos una empresa familiar Pampeana fundada en el año 2000.
              Nuestra misión, desde nuestros inicios, es proporcionar soluciones
              integrales para la construcción en seco, con un enfoque en la
              eficiencia y la sostenibilidad.
            </p>
            <button className="font-bold bg-[#A9B0C3] py-4 rounded-lg w-[232px]   text-[#3E3E5E]">
              LEER MÁS
            </button>
          </div>
          <div
            className="absolute bottom-0 w-full h-full z-10"
            style={{
              background: "linear-gradient(transparent 90%, #1c1936 100%)",
            }}
          />
        </div>
        <ValuesSection />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <iframe
            width="1441"
            height="584"
            src="https://www.youtube.com/embed/{VIDEO_ID}"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full relative mt-[115px]">
          <Image
            src="/pvc-tables.png"
            alt="pvc-tables-bg"
            width={827}
            height={654}
            className="absolute h-[814px] z-10 -top-[33px]"
          />
          <PVCSection />
          <SteelframeSection />
        </div>
        <SolarEnergySection className="mt-36" />
        <ModularSection />
        <News />
        <MapSection />
      </main>
    </>
  );
}
