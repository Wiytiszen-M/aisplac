import Image from 'next/image';
import Link from 'next/link';
import { Calendar } from 'lucide-react';
import type { NewsItem } from '@/lib/sanity';

type NewsCardProps = {
  newsItem: NewsItem;
};

export function NewsCard({ newsItem }: NewsCardProps) {
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
    <Link href={`/novedades/${newsItem.slug}`}>
      <div className="h-full overflow-hidden rounded-lg border transition-all duration-300 hover:border-gray-400 hover:shadow-md">
        <div className="relative h-48 w-full">
          <Image
            src={
              newsItem.mainImage ||
              '/placeholder.svg?height=400&width=600&query=news'
            }
            alt={newsItem.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-4">
          <div className="mb-2 flex items-center text-sm text-gray-500">
            <Calendar className="mr-1 h-4 w-4" />
            <span>{formattedDate}</span>
          </div>
          <h3 className="mb-2 line-clamp-2 text-lg font-bold">
            {newsItem.title}
          </h3>
          <p className="line-clamp-3 text-sm text-gray-600">
            {newsItem.excerpt}
          </p>
          <div className="mt-3 text-sm font-medium text-[#1D6191]">
            Leer más
          </div>
        </div>
      </div>
    </Link>
  );
}
