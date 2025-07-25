import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ArticlePreview } from "@/types";
import { getAllArticles } from "@/sanity/lib/sanity.api";
import { urlForImage } from "@/sanity/lib/sanity.image";

export const revalidate = 3600;

export default async function NovedadesPage() {
  const articles: ArticlePreview[] = await getAllArticles();

  // Separamos el primer artículo del resto
  const [featuredArticle, ...remainingArticles] = articles;

  return (
    <main className="container min-h-screen py-36 mx-auto p-4 ">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
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
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-white/15 hover:shadow-2xl hover:scale-[1.02] group">
              <div className="flex flex-col lg:flex-row">
                {/* Imagen - Lado izquierdo */}
                <div className="lg:w-1/2 relative h-64 lg:h-96">
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
                    <div className="flex items-center justify-center h-full bg-gray-800/50 text-gray-400">
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

                {/* Contenido - Lado derecho */}
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="space-y-4">
                    <p className="text-sm text-blue-400 font-semibold uppercase tracking-wide">
                      {new Date(featuredArticle.publishedAt).toLocaleDateString(
                        "es-AR",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </p>

                    <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight group-hover:text-blue-300 transition-colors duration-200">
                      {featuredArticle.title}
                    </h2>

                    {featuredArticle.subtitle && (
                      <p className="text-lg text-gray-300 leading-relaxed line-clamp-3">
                        {featuredArticle.subtitle}
                      </p>
                    )}

                    <div className="pt-4">
                      <span className="inline-flex items-center text-blue-400 font-medium group-hover:text-blue-300 transition-colors duration-200">
                        Leer artículo completo
                        <svg
                          className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {remainingArticles.map((article) => {
            const imageUrl = article.mainImage
              ? urlForImage(article.mainImage)?.width(600).height(400).url()
              : null;

            return (
              <Link href={`/novedades/${article.slug}`} key={article._id}>
                <Card className="h-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15">
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
                        <div className="flex items-center justify-center h-full text-gray-400">
                          <svg
                            className="w-12 h-12"
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
                    <p className="text-sm text-gray-400 mb-2">
                      {new Date(article.publishedAt).toLocaleDateString(
                        "es-AR",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </p>
                    <CardTitle className="text-xl font-semibold text-white hover:text-blue-300 transition-colors duration-200">
                      {article.title}
                    </CardTitle>
                    <p className="mt-2 text-gray-300 line-clamp-3">
                      {article.subtitle}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      )}

      {/* Mensaje cuando no hay artículos */}
      {articles.length === 0 && (
        <div className="text-center py-16">
          <div className="bg-white/5 rounded-2xl p-12 border border-white/10">
            <svg
              className="w-16 h-16 mx-auto mb-4 text-gray-500"
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
            <h3 className="text-xl font-semibold text-white mb-2">
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
