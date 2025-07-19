"use client";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "../fade-in";
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <div className="relative w-full">
      <div
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage: "url(/bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="max-w-[1440px] mx-auto flex flex-col justify-center items-center text-center px-4">
        <FadeIn className="w-full max-w-[486px] px-4 mt-[180px] md:mt-[430px]">
          <div className="relative w-full aspect-[486/277]">
            <Image
              src="/logo.svg"
              alt="logo"
              fill
              sizes="(max-width: 640px) 100vw, 486px"
              className="object-contain"
            />
          </div>
        </FadeIn>
        <div className="flex flex-col justify-center items-center gap-12 mt-[250px] md:mt-[530px] mb-44 w-full max-w-[876px]">
          <FadeIn delay={200}>
            <p>
              Somos una empresa familiar Pampeana fundada en el año 2000.
              Nuestra misión, desde nuestros inicios, es proporcionar soluciones
              integrales para la construcción en seco, con un enfoque en la
              eficiencia y la sostenibilidad.
            </p>
            <Link href="/about">
              <Button
                variant="secundary"
                type="button"
                className="w-[250px] mt-7 md:mt-14"
                size="lg"
              >
                LEER MÁS
              </Button>
            </Link>
          </FadeIn>
        </div>
      </div>

      {/* Gradiente para terminar el fondo */}
      <div
        className="absolute bottom-0 w-full h-full -z-10"
        style={{
          background: "linear-gradient(transparent 82%, #1c1936 91%)",
        }}
      />
    </div>
  );
}
