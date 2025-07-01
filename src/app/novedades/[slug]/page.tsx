import { NewsDetail } from "@/components/news/news-detail"
import { getNewsItem, getNewsSlugs } from "@/lib/sanity"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  const slugs = await getNewsSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const newsItem = await getNewsItem(params.slug)

  if (!newsItem) {
    return {
      title: "Noticia no encontrada | AISPLAC",
      description: "La noticia que buscas no existe o ha sido eliminada",
    }
  }

  return {
    title: `${newsItem.title} | AISPLAC`,
    description: newsItem.excerpt,
    openGraph: {
      title: newsItem.title,
      description: newsItem.excerpt,
      images: [{ url: newsItem.mainImage }],
    },
  }
}

export default async function NewsItemPage({ params }: { params: { slug: string } }) {
  const newsItem = await getNewsItem(params.slug)

  if (!newsItem) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <NewsDetail newsItem={newsItem} />
      </div>
    </div>
  )
}
