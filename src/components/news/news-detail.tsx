"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, User } from "lucide-react"
import { ShareButtons } from "@/components/news/share-buttons"
import type { NewsItem } from "@/lib/sanity"
import { useEffect, useState } from "react"

type NewsDetailProps = {
  newsItem: NewsItem
}

export function NewsDetail({ newsItem }: NewsDetailProps) {
  const [currentUrl, setCurrentUrl] = useState("")

  // Obtener la URL actual para compartir
  useEffect(() => {
    setCurrentUrl(window.location.href)
  }, [])

  // Formatear la fecha
  const formattedDate = new Date(newsItem.publishedAt).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <article className="bg-white rounded-lg overflow-hidden">
      {/* Botón de volver */}
      <Link href="/novedades" className="inline-flex items-center gap-2 mb-6 text-gray-600 hover:text-black">
        <ArrowLeft className="h-4 w-4" />
        Volver a novedades
      </Link>

      {/* Imagen principal */}
      <div className="relative h-[400px] w-full mb-6 rounded-lg overflow-hidden">
        <Image
          src={newsItem.mainImage || "/placeholder.svg?height=800&width=1200&query=news"}
          alt={newsItem.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Encabezado */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-3">{newsItem.title}</h1>

        <div className="flex flex-wrap items-center text-sm text-gray-500 gap-4 mb-4">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{formattedDate}</span>
          </div>

          {newsItem.author && (
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              <span>{newsItem.author}</span>
            </div>
          )}
        </div>

        {/* Botones para compartir */}
        <ShareButtons url={currentUrl} title={newsItem.title} />
      </div>

      {/* Contenido */}
      <div className="prose max-w-none mb-8">
        {/* Mostrar el contenido como HTML */}
        <div dangerouslySetInnerHTML={{ __html: newsItem.content }} />
      </div>

      {/* Etiquetas */}
      {newsItem.tags && newsItem.tags.length > 0 && (
        <div className="mt-8 pt-4 border-t">
          <div className="flex flex-wrap gap-2">
            {newsItem.tags.map((tag) => (
              <span key={tag} className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </article>
  )
}
