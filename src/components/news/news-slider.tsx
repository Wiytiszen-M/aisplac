"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import type { ArticlePreview } from "@/types";
import { urlForImage } from "@/sanity/lib/sanity.image";

export default function NewsSlider({
  articles,
}: {
  articles: ArticlePreview[];
}) {
  // Mostramos hasta 5 artículos en el slider
  const recentArticles = articles.slice(0, 5);

  // Si no hay artículos, no renderizamos nada
  if (recentArticles.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">
          No hay artículos disponibles para mostrar.
        </p>
      </div>
    );
  }

  return (
    <Swiper
      modules={[Navigation, EffectCoverflow]}
      loop={recentArticles.length > 1} // Solo hacer loop si hay más de un artículo
      slidesPerView="auto"
      spaceBetween={50}
      effect="coverflow"
      coverflowEffect={{
        rotate: 30,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      navigation
      className="w-full py-8"
    >
      {recentArticles.map((article) => {
        // Generamos la URL de la imagen de forma segura
        const imageUrlBuilder = article.mainImage
          ? urlForImage(article.mainImage)
          : null;
        const imageUrl = imageUrlBuilder
          ? imageUrlBuilder.width(622).height(519).url()
          : null;

        return (
          <SwiperSlide key={article._id} className="max-w-xs md:max-w-sm">
            <div className="bg-white rounded-lg overflow-hidden shadow-xl relative h-[520px] group">
              {/* Contenedor de la imagen */}
              <div className="relative h-[320px] w-full bg-gray-200">
                {imageUrl ? (
                  <Image
                    src={imageUrl || "/placeholder.svg"}
                    alt={article.mainImage?.alt || article.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400">
                    <svg
                      className="w-16 h-16"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                )}
              </div>

              {/* Contenido del artículo */}
              <div className="absolute bottom-0 min-h-[200px] bg-white w-full p-4 text-[#1C1936] transition-all duration-300 group-hover:min-h-[220px]">
                <p className="text-xs font-bold mb-2 text-gray-500">
                  {formatDate(article.publishedAt)}
                </p>
                <h3 className="text-lg font-bold mb-2 uppercase line-clamp-2">
                  {article.title}
                </h3>
                {article.subtitle && (
                  <p className="text-sm text-gray-500 line-clamp-3 mb-4">
                    {article.subtitle}
                  </p>
                )}
                <Link
                  href={`/novedades/${article.slug}`}
                  className="absolute bottom-5 right-5 text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
                >
                  Leer más
                </Link>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
