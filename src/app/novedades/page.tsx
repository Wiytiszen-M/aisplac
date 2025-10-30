export const revalidate = 600;

import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ArticlePreview } from "@/types";
import { getAllArticles } from "@/sanity/lib/sanity.api";
import { urlForImage } from "@/sanity/lib/sanity.image";
import { MoveRight } from "lucide-react";
import { BackButton } from "@/components/back-button";

export default async function NovedadesPage() {
  const articles: ArticlePreview[] = await getAllArticles();

  // Separamos el primer artículo del resto
  const [featuredArticle, ...remainingArticles] = articles;

  return (
    <main className="container mx-auto min-h-screen p-4 py-36">
      <div className="mb-8">
        <BackButton text="Volver a home" url="/" />
      </div>
      <header className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
          Novedades
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Mantente al día con nuestros últimos artículos y noticias.
        </p>
      </header>

      {/* Artículo destacado - Layout horizontal */}
      {featuredArticle && (
        <div className="mb-16">
          <Link href={`/novedades/${featuredArticle.slug}`}>
            <div className="group overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:bg-white/15 hover:shadow-2xl">
              <div className="flex flex-col lg:flex-row">
                {/* Imagen - Lado izquierdo */}
                <div className="relative h-64 lg:h-96 lg:w-1/2">
                  {featuredArticle.mainImage &&
                  urlForImage(featuredArticle.mainImage)
                    ?.width(800)
                    .height(600)
                    .url() ? (
                    <Image
                      src={
                        urlForImage(featuredArticle.mainImage)
                          ?.width(800)
                          .height(600)
                          .url() || "/placeholder.svg"
                      }
                      alt={
                        featuredArticle.mainImage?.alt ||
                        "Imagen del artículo destacado"
                      }
                      fill
                      className="object-cover"
                      priority
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-gray-800/50 text-gray-400">
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

                {/* Contenido - Lado derecho */}
                <div className="flex flex-col justify-center p-8 lg:w-1/2 lg:p-12">
                  <div className="space-y-4">
                    <p className="text-sm font-semibold uppercase tracking-wide text-blue-400">
                      {new Date(featuredArticle.publishedAt).toLocaleDateString(
                        "es-AR",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </p>

                    <h2 className="text-3xl font-bold leading-tight text-white transition-colors duration-200 group-hover:text-blue-300 lg:text-4xl">
                      {featuredArticle.title}
                    </h2>

                    {featuredArticle.subtitle && (
                      <p className="line-clamp-3 text-lg leading-relaxed text-gray-300">
                        {featuredArticle.subtitle}
                      </p>
                    )}

                    <div className="pt-4">
                      <span className="inline-flex items-center font-medium text-blue-400 transition-colors duration-200 group-hover:text-blue-300">
                        Leer más
                        <MoveRight className="ml-2 " />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      )}

      {/* Resto de artículos - Grid normal */}
      {remainingArticles.length > 0 && (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {remainingArticles.map((article) => {
            const imageUrl = article.mainImage
              ? urlForImage(article.mainImage)?.width(600).height(400).url()
              : null;

            return (
              <Link href={`/novedades/${article.slug}`} key={article._id}>
                <Card className="h-full overflow-hidden border border-white/20 bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/15 hover:shadow-2xl">
                  <CardHeader className="p-0">
                    <div className="relative h-56 w-full bg-gray-800/50">
                      {imageUrl ? (
                        <Image
                          src={imageUrl || "/placeholder.svg"}
                          alt={article.mainImage?.alt || "Imagen del artículo"}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-gray-400">
                          <svg
                            className="h-12 w-12"
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
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="mb-2 text-sm text-gray-400">
                      {new Date(article.publishedAt).toLocaleDateString(
                        "es-AR",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </p>
                    <CardTitle className="text-xl font-semibold text-white transition-colors duration-200 hover:text-blue-300">
                      {article.title}
                    </CardTitle>
                    <p className="line-clamp-3 text-lg leading-relaxed text-gray-300">
                      {article.subtitle}
                    </p>
                    <div className="flex justify-end items-end pt-4">
                      <span className="inline-flex items-center font-medium text-blue-400 transition-colors duration-200 group-hover:text-blue-300">
                        Leer más
                        <MoveRight className="ml-2 " />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      )}

      {/* Mensaje cuando no hay artículos */}
      {articles.length === 0 && (
        <div className="py-16 text-center">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-12">
            <svg
              className="mx-auto mb-4 h-16 w-16 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>
            <h3 className="mb-2 text-xl font-semibold text-white">
              No hay artículos disponibles
            </h3>
            <p className="text-gray-400">
              Vuelve pronto para ver nuestras últimas novedades.
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
