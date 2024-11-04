import Image from "next/image";
import Link from "next/link";
import { Buy, Facebook, Instagram, ShoppingCart, User } from "./assets/icons";
import Footer from "@/components/footer/footer";
import News from "@/components/news/news";
import Navigation from "@/components/navigation/navigation";
import ValuesSection from "@/components/values-section/values-section";
import SteelframeSection from "@/components/steelframe-section/steelframe-section";
import SolarEnergy from "@/components/solar-energy/solar-energy";
import ModularSection from "@/components/modular-section/modular-section";

export default function Home() {
  return (
    <>
      <main className="relative min-h-screen w-full  flex flex-col items-center justify-center  text-center ">
        <div className="absolute top-16 right-44 flex gap-3 justify-end">
          <ShoppingCart className="w-12 h-12" />
          <Buy className="w-12 h-12" />
          <User className="w-12 h-12" />
        </div>
        <Navigation className="absolute left-0 top-[329px]" />
        <div className="mb-44 flex flex-col w-full h-full justify-center items-center">
          <Image
            src="/logo.svg"
            width={486}
            height={277}
            alt="logo"
            className="mt-[430px]"
          />
          <div className="flex flex-col justify-center items-center gap-12 mt-[530px] w-[876px]">
            <p className="text-3xl mt-[300px]">
              Somos una empresa familiar Pampeana fundada en el año 2000.
              Nuestra misión, desde nuestros inicios, es proporcionar soluciones
              integrales para la construcción en seco, con un enfoque en la
              eficiencia y la sostenibilidad.
            </p>
            <button className="font-bold bg-[#A9B0C3] py-4 rounded-lg w-[232px] text-[#3E3E5E]">
              LEER MÁS
            </button>
          </div>
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
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <SteelframeSection />
        <SolarEnergy className="mt-36" />
        <ModularSection />
        <News />
        <div className="flex justify-center  py-10 items-center gap-4">
          <Link
            href="https://www.instagram.com/aisplacsrl/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="w-20 h-20 hover:text-red" />
          </Link>
          <Link
            href="https://www.facebook.com/Aisplac"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="w-20 h-20" />
          </Link>
        </div>
        <Footer />
      </main>
    </>
  );
}
