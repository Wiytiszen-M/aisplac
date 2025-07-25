'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import Image from 'next/image';
import Link from 'next/link';
import { formatDate } from '@/lib/utils';
import type { ArticlePreview } from '@/types';
import { urlForImage } from '@/sanity/lib/sanity.image';

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
      <div className="py-12 text-center">
        <p className="text-lg text-gray-500">
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
            <div className="group relative h-[520px] overflow-hidden rounded-lg bg-white shadow-xl">
              {/* Contenedor de la imagen */}
              <div className="relative h-[320px] w-full bg-gray-200">
                {imageUrl ? (
                  <Image
                    src={imageUrl || '/placeholder.svg'}
                    alt={article.mainImage?.alt || article.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-gray-400">
                    <svg
                      className="h-16 w-16"
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
              <div className="absolute bottom-0 min-h-[200px] w-full bg-white p-4 text-[#1C1936] transition-all duration-300 group-hover:min-h-[220px]">
                <p className="mb-2 text-xs font-bold text-gray-500">
                  {formatDate(article.publishedAt)}
                </p>
                <h3 className="mb-2 line-clamp-2 text-lg font-bold uppercase">
                  {article.title}
                </h3>
                {article.subtitle && (
                  <p className="mb-4 line-clamp-3 text-sm text-gray-500">
                    {article.subtitle}
                  </p>
                )}
                <Link
                  href={`/novedades/${article.slug}`}
                  className="absolute bottom-5 right-5 text-sm font-medium text-blue-600 transition-colors duration-200 hover:text-blue-800 hover:underline"
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
