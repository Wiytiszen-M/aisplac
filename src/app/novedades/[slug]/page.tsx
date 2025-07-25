import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import PortableText from "@/components/portable-text";

import type { ImageWithAlt } from "@/types";
import { formatDate } from "@/lib/utils";
import { articleSlugsQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/sanity.client";
import { getArticle } from "@/sanity/lib/sanity.api";
import { urlForImage } from "@/sanity/lib/sanity.image";

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
            className="inline-flex items-center gap-2 text-sm font-medium hover:text-gray-900 transition-colors duration-200 group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
            Volver a todos los artículos
          </Link>
        </div>

        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4">
            {article.title}
          </h1>
          {article.subtitle && (
            <p className="text-xl  mb-6">{article.subtitle}</p>
          )}
          <div className="text-md text-gray-400">
            <span>Por {article.author || "Aisplac"}</span>
            <span className="mx-2">•</span>
            <span>{formatDate(article.publishedAt)}</span>
          </div>
        </header>

        {mainImageUrl ? (
          <div className="relative h-64  md:h-96 w-full mb-12 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={mainImageUrl || "/placeholder.svg"}
              alt={article.mainImage?.alt || "Imagen principal del artículo"}
              fill
              className="object-contain"
              priority
            />
          </div>
        ) : (
          <div className="h-64 md:h-96 w-full mb-12 rounded-lg bg-gray-200 flex items-center justify-center">
            <div className="text-gray-400 text-center">
              <svg
                className="w-16 h-16 mx-auto mb-4"
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

        <div className="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-primary hover:prose-a:underline">
          <PortableText value={article.content} />
        </div>

        {article.gallery && article.gallery.length > 0 && (
          <section className="mt-16 border-t pt-12">
            <h2 className="text-3xl font-bold text-center mb-8">Galería</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {article.gallery.map((image: ImageWithAlt, index) => {
                const galleryImageUrl = urlForImage(image)
                  ?.width(600)
                  .height(600)
                  .url();

                return (
                  <div
                    key={index}
                    className="relative h-52 md:h-64 rounded-lg overflow-hidden group bg-gray-200"
                  >
                    {galleryImageUrl ? (
                      <Image
                        src={galleryImageUrl || "/placeholder.svg"}
                        alt={image.alt || "Imagen de la galería"}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full text-gray-400">
                        <svg
                          className="w-8 h-8"
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

        <div className="mt-16 pt-8 border-t text-center">
          <Link
            href="/novedades"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4" />
            Ver más artículos
          </Link>
        </div>
      </div>
    </article>
  );
}
