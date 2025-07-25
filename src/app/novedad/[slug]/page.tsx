import Image from 'next/image';
import { notFound } from 'next/navigation';
import PortableText from '@/components/portable-text';

import type { ImageWithAlt } from '@/types';
import { formatDate } from '@/lib/utils';
import { client } from '@/sanity/lib/sanity.client';
import { articleSlugsQuery } from '@/sanity/lib/queries';
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

  return (
    <article className="bg-white px-4 py-16 sm:py-24">
      {/* Contenedor principal que define el ancho máximo para todo el artículo */}
      <div className="mx-auto max-w-4xl">
        <header className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tighter md:text-6xl">
            {article.title}
          </h1>
          <p className="mb-6 text-xl text-gray-600">{article.subtitle}</p>
          <div className="text-md text-gray-500">
            <span>Por {article.author || 'Aisplac'}</span>
            <span className="mx-2">•</span>
            <span>{formatDate(article.publishedAt)}</span>
          </div>
        </header>

        <div className="relative mb-12 h-64 w-full overflow-hidden rounded-lg shadow-lg md:h-96">
          <Image
            src={
              urlForImage(article.mainImage).width(1200).height(800).url() ||
              '/placeholder.svg'
            }
            alt={article.mainImage.alt || 'Imagen principal del artículo'}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* El contenedor de 'prose' ahora ocupa el ancho del padre ('max-w-4xl') */}
        <div className="prose prose-lg prose-headings:font-bold prose-a:text-primary hover:prose-a:underline max-w-none">
          <PortableText value={article.content} />
        </div>

        {article.gallery && article.gallery.length > 0 && (
          <section className="mt-16 border-t pt-12">
            <h2 className="mb-8 text-center text-3xl font-bold">Galería</h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {article.gallery.map((image: ImageWithAlt, index) => (
                <div
                  key={index}
                  className="group relative h-52 overflow-hidden rounded-lg md:h-64"
                >
                  <Image
                    src={
                      urlForImage(image).width(600).height(600).url() ||
                      '/placeholder.svg'
                    }
                    alt={image.alt || 'Imagen de la galería'}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
