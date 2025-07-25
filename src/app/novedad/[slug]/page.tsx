import Image from "next/image";
import { notFound } from "next/navigation";
import PortableText from "@/components/portable-text";

import type { ImageWithAlt } from "@/types";
import { formatDate } from "@/lib/utils";
import { client } from "@/sanity/lib/sanity.client";
import { articleSlugsQuery } from "@/sanity/lib/queries";
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

  return (
    <article className="bg-white px-4 py-16 sm:py-24">
      {/* Contenedor principal que define el ancho máximo para todo el artículo */}
      <div className="mx-auto max-w-4xl">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4">
            {article.title}
          </h1>
          <p className="text-xl text-gray-600 mb-6">{article.subtitle}</p>
          <div className="text-md text-gray-500">
            <span>Por {article.author || "Aisplac"}</span>
            <span className="mx-2">•</span>
            <span>{formatDate(article.publishedAt)}</span>
          </div>
        </header>

        <div className="relative h-64 md:h-96 w-full mb-12 rounded-lg overflow-hidden shadow-lg">
          <Image
            src={
              urlForImage(article.mainImage).width(1200).height(800).url() ||
              "/placeholder.svg"
            }
            alt={article.mainImage.alt || "Imagen principal del artículo"}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* El contenedor de 'prose' ahora ocupa el ancho del padre ('max-w-4xl') */}
        <div className="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-primary hover:prose-a:underline">
          <PortableText value={article.content} />
        </div>

        {article.gallery && article.gallery.length > 0 && (
          <section className="mt-16 border-t pt-12">
            <h2 className="text-3xl font-bold text-center mb-8">Galería</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {article.gallery.map((image: ImageWithAlt, index) => (
                <div
                  key={index}
                  className="relative h-52 md:h-64 rounded-lg overflow-hidden group"
                >
                  <Image
                    src={
                      urlForImage(image).width(600).height(600).url() ||
                      "/placeholder.svg"
                    }
                    alt={image.alt || "Imagen de la galería"}
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
