import { NewsCard } from "@/components/news/news-card"
import { FeaturedNewsItem } from "@/components/news/featured-news-item"
import type { NewsItem } from "@/lib/sanity"

type NewsListProps = {
  news: NewsItem[]
}

export function NewsList({ news }: NewsListProps) {
  // Si no hay noticias, no renderizamos nada
  if (news.length === 0) return null

  // Separamos la primera noticia para destacarla
  const [featuredNews, ...restNews] = news

  return (
    <div>
      {/* Noticia destacada */}
      <FeaturedNewsItem newsItem={featuredNews} />

      {/* Separador visual */}
      <div className="my-8 border-t border-gray-200"></div>

      {/* Resto de noticias en grid */}
      {restNews.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-6">Más noticias</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {restNews.map((item) => (
              <NewsCard key={item.slug} newsItem={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
