'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FadeIn } from '../fade-in';
import { Button } from '../ui/button';

export default function HeroSection() {
  return (
    <div className="relative w-full">
      <div
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage: 'url(/bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-center px-4 text-center">
        <FadeIn className="mt-[180px] w-full max-w-[486px] px-4 md:mt-[430px]">
          <div className="relative aspect-[486/277] w-full">
            <Image
              src="/logo.svg"
              alt="logo"
              fill
              sizes="(max-width: 640px) 100vw, 486px"
              className="object-contain"
            />
          </div>
        </FadeIn>
        <div className="mb-44 mt-[250px] flex w-full max-w-[876px] flex-col items-center justify-center gap-12 md:mt-[530px]">
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
                className="mt-7 w-[250px] md:mt-14"
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
        className="absolute bottom-0 -z-10 h-full w-full"
        style={{
          background: 'linear-gradient(transparent 82%, #1c1936 91%)',
        }}
      />
    </div>
  );
}
