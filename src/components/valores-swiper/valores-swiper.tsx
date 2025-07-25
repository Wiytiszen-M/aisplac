// app/about/components/ValoresSwiper.tsx
'use client';

import { Swiper, SwiperSlide, useSwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const valores = [
  'CONSTRUCCIÓN',
  'SUSTENTABILIDAD',
  'CONFIANZA',
  'COMPROMISO',
  'APRENDIZAJE',
  'REFLEXIONES',
  'UNIÓN',
  'DIGNIFICAR',
];

// Componente interno para saber si este slide es el activo
function Slide({ texto }: { texto: string }) {
  const swiperSlide = useSwiperSlide();
  return (
    <h2
      className={`flex h-12 items-center justify-center font-bold transition-opacity ${swiperSlide.isActive ? 'opacity-100' : 'opacity-30'}`}
    >
      {texto}
    </h2>
  );
}

export default function ValoresSwiper() {
  return (
    // Altura = 3 ×  h-12  = h-36
    <div className="h-40 w-full overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        direction="vertical"
        slidesPerView={3} // muestro 3 slides
        centeredSlides={true}
        spaceBetween={50}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        observer={true}
        observeParents={true}
        className="h-full"
      >
        {valores.map((v) => (
          <SwiperSlide key={v}>
            <Slide texto={v} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
