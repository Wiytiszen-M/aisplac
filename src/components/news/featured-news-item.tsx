import Image from 'next/image';
import Link from 'next/link';
import { Calendar } from 'lucide-react';
import type { NewsItem } from '@/lib/sanity';

type FeaturedNewsItemProps = {
  newsItem: NewsItem;
};

export function FeaturedNewsItem({ newsItem }: FeaturedNewsItemProps) {
  // Formatear la fecha
  const formattedDate = new Date(newsItem.publishedAt).toLocaleDateString(
    'es-ES',
    {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }
  );

  return (
    <div className="mb-12 overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-lg">
      <Link href={`/novedades/${newsItem.slug}`} className="block">
        <div className="flex flex-col md:flex-row">
          {/* Imagen a la izquierda en desktop, arriba en móvil */}
          <div className="relative md:w-1/2">
            <div className="relative h-64 min-h-[300px] w-full md:h-full">
              <Image
                src={
                  newsItem.mainImage ||
                  '/placeholder.svg?height=600&width=800&query=featured news'
                }
                alt={newsItem.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* Contenido a la derecha en desktop, abajo en móvil */}
          <div className="flex flex-col justify-between p-6 md:w-1/2 md:p-8">
            <div>
              <div className="mb-3 flex items-center text-sm text-gray-500">
                <Calendar className="mr-1 h-4 w-4" />
                <span>{formattedDate}</span>
              </div>
              <h2 className="mb-4 line-clamp-3 text-2xl font-bold text-gray-800 md:text-3xl">
                {newsItem.title}
              </h2>
              <p className="mb-6 line-clamp-4 text-gray-600 md:line-clamp-6">
                {newsItem.excerpt}
              </p>
            </div>
            <div className="flex items-center font-medium text-[#1D6191]">
              Leer artículo completo
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1 h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
