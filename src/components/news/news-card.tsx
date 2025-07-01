import Image from "next/image"
import Link from "next/link"
import { Calendar } from "lucide-react"
import type { NewsItem } from "@/lib/sanity"

type NewsCardProps = {
  newsItem: NewsItem
}

export function NewsCard({ newsItem }: NewsCardProps) {
  // Formatear la fecha
  const formattedDate = new Date(newsItem.publishedAt).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <Link href={`/novedades/${newsItem.slug}`}>
      <div className="border rounded-lg overflow-hidden h-full transition-all duration-300 hover:shadow-md hover:border-gray-400">
        <div className="relative h-48 w-full">
          <Image
            src={newsItem.mainImage || "/placeholder.svg?height=400&width=600&query=news"}
            alt={newsItem.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-4">
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{formattedDate}</span>
          </div>
          <h3 className="font-bold text-lg mb-2 line-clamp-2">{newsItem.title}</h3>
          <p className="text-gray-600 text-sm line-clamp-3">{newsItem.excerpt}</p>
          <div className="mt-3 text-sm font-medium text-[#1D6191]">Leer más</div>
        </div>
      </div>
    </Link>
  )
}
