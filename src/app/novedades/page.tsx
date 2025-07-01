import { NewsList } from "@/components/news/news-list"
import { getNews } from "@/lib/sanity"

export const metadata = {
  title: "Novedades | AISPLAC",
  description: "Últimas noticias y novedades de AISPLAC",
}

export default async function NewsPage() {
  // Obtener las noticias desde Sanity
  const news = await getNews()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Novedades</h1>
          <p className="text-gray-600">Mantente al día con las últimas noticias y novedades de AISPLAC</p>
        </div>

        {news.length === 0 ? (
          <div className="text-center py-12 border rounded-lg">
            <p className="text-xl text-gray-500">No hay novedades disponibles en este momento</p>
          </div>
        ) : (
          <NewsList news={news} />
        )}
      </div>
    </div>
  )
}
