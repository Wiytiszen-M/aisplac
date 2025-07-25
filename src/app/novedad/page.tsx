import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import type { ArticlePreview } from "@/types";
import { getAllArticles } from "@/sanity/lib/sanity.api";
import { urlForImage } from "@/sanity/lib/sanity.image";

export const revalidate = 3600;

export default async function NovedadesPage() {
  const articles: ArticlePreview[] = await getAllArticles();

  return (
    <main className="container mx-auto py-36">
      <header className="container mx-auto px-4 py-12 text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight ">
          Novedades
        </h1>
        <p className="mt-4 text-lg ">
          Mantente al día con nuestros últimos artículos y noticias.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <Link href={`/novedades/${article.slug}`} key={article._id}>
            <Card className="h-full overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader className="p-0">
                <div className="relative h-56 w-full">
                  <Image
                    src={
                      urlForImage(article.mainImage)
                        .width(600)
                        .height(400)
                        .url() || "/placeholder.svg"
                    }
                    alt={article.mainImage.alt || "Imagen del artículo"}
                    fill
                    className="object-contain"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-sm text-gray-500 mb-2">
                  {new Date(article.publishedAt).toLocaleDateString("es-AR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <CardTitle className="text-xl font-semibold text-gray-800 hover:text-blue-600">
                  {article.title}
                </CardTitle>
                <p className="mt-2 text-gray-600 line-clamp-3">
                  {article.subtitle}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}
