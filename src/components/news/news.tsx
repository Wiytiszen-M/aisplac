"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import Image from "next/image";

const News = () => {
  const slides = [
    {
      title: "Primera Noticia",
      date: "12 de Septiembre 2024",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      img: "/image-2.png",
    },
    {
      title: "Segunda Noticia",
      date: "15 de Septiembre 2024",
      description: "Another short description...",
      img: "/image-2.png",
    },
    {
      title: "Tercera Noticia",
      date: "20 de Septiembre 2024",
      description: "Another short description...",
      img: "/image-2.png",
    },
  ];

  return (
    <div className="min-h-screen mt-[116px] w-[75%] py-8">
      <h2 className="text-center font-bold mb-8 md:mb-20">NOVEDADES</h2>
      <Swiper
        modules={[Navigation, EffectCoverflow]}
        loop={true} // loop infinito
        centeredSlides={true} // siempre centra el activo
        slidesPerView={"auto"}
        spaceBetween={50}
        effect="coverflow"
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        initialSlide={1} // arranca en el segundo slide
        navigation
        className="px-8"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="max-w-xs md:max-w-sm">
            <div className="bg-white rounded-lg overflow-hidden shadow-xl">
              <Image
                width={622}
                height={519}
                src={slide.img}
                alt={slide.title}
                className="object-cover"
              />
              <div className="p-4 text-[#1C1936]">
                <p className="text-xs mb-2">{slide.date}</p>
                <h3 className="text-lg font-bold mb-2">{slide.title}</h3>
                <p className="text-sm">{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default News;
