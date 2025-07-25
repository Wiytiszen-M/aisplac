import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import PortableText from '@/components/portable-text';

import type { ImageWithAlt } from '@/types';
import { formatDate } from '@/lib/utils';
import { articleSlugsQuery } from '@/sanity/lib/queries';
import { client } from '@/sanity/lib/sanity.client';
import { getArticle } from '@/sanity/lib/sanity.api';
import { urlForImage } from '@/sanity/lib/sanity.image';

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const slugs = await client.fetch<string[]>(articleSlugsQuery);
  return slugs.map((slug) => ({ slug }));
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = params;
  const article = await getArticle(slug);

  if (!article) {
    notFound();
  }

  const mainImageUrl = article.mainImage
    ? urlForImage(article.mainImage)?.width(1200).height(800).url()
    : null;

  return (
    <article className="px-4 py-36">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <Link
            href="/novedades"
            className="group inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200 hover:text-gray-900"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
            Volver a todos los artículos
          </Link>
        </div>

        <header className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tighter md:text-6xl">
            {article.title}
          </h1>
          {article.subtitle && (
            <p className="mb-6 text-xl">{article.subtitle}</p>
          )}
          <div className="text-md text-gray-400">
            <span>Por {article.author || 'Aisplac'}</span>
            <span className="mx-2">•</span>
            <span>{formatDate(article.publishedAt)}</span>
          </div>
        </header>

        {mainImageUrl ? (
          <div className="relative mb-12 h-64 w-full overflow-hidden rounded-lg shadow-lg md:h-96">
            <Image
              src={mainImageUrl || '/placeholder.svg'}
              alt={article.mainImage?.alt || 'Imagen principal del artículo'}
              fill
              className="object-contain"
              priority
            />
          </div>
        ) : (
          <div className="mb-12 flex h-64 w-full items-center justify-center rounded-lg bg-gray-200 md:h-96">
            <div className="text-center text-gray-400">
              <svg
                className="mx-auto mb-4 h-16 w-16"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                  clipRule="evenodd"
                />
              </svg>
              <p>Imagen no disponible</p>
            </div>
          </div>
        )}

        <div className="prose prose-lg prose-headings:font-bold prose-a:text-primary hover:prose-a:underline max-w-none">
          <PortableText value={article.content} />
        </div>

        {article.gallery && article.gallery.length > 0 && (
          <section className="mt-16 border-t pt-12">
            <h2 className="mb-8 text-center text-3xl font-bold">Galería</h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {article.gallery.map((image: ImageWithAlt, index) => {
                const galleryImageUrl = urlForImage(image)
                  ?.width(600)
                  .height(600)
                  .url();

                return (
                  <div
                    key={index}
                    className="group relative h-52 overflow-hidden rounded-lg bg-gray-200 md:h-64"
                  >
                    {galleryImageUrl ? (
                      <Image
                        src={galleryImageUrl || '/placeholder.svg'}
                        alt={image.alt || 'Imagen de la galería'}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-gray-400">
                        <svg
                          className="h-8 w-8"
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
                );
              })}
            </div>
          </section>
        )}

        <div className="mt-16 border-t pt-8 text-center">
          <Link
            href="/novedades"
            className="inline-flex items-center gap-2 rounded-lg bg-gray-100 px-6 py-3 font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-200"
          >
            <ArrowLeft className="h-4 w-4" />
            Ver más artículos
          </Link>
        </div>
      </div>
    </article>
  );
}
