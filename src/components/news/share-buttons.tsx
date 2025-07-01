"use client"

import { Facebook, Linkedin, Share2, Twitter } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

type ShareButtonsProps = {
  url: string
  title: string
}

export function ShareButtons({ url, title }: ShareButtonsProps) {
  const [isOpen, setIsOpen] = useState(false)

  const shareToFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "_blank")
  }

  const shareToTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      "_blank",
    )
  }

  const shareToLinkedin = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, "_blank")
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url)
    toast.success("Enlace copiado al portapapeles")
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Compartir:</span>

        <button
          onClick={shareToFacebook}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          aria-label="Compartir en Facebook"
        >
          <Facebook className="h-4 w-4" />
        </button>

        <button
          onClick={shareToTwitter}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          aria-label="Compartir en Twitter"
        >
          <Twitter className="h-4 w-4" />
        </button>

        <button
          onClick={shareToLinkedin}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          aria-label="Compartir en LinkedIn"
        >
          <Linkedin className="h-4 w-4" />
        </button>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          aria-label="Más opciones para compartir"
        >
          <Share2 className="h-4 w-4" />
        </button>
      </div>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border overflow-hidden">
          <div className="py-1">
            <button
              onClick={copyToClipboard}
              className="flex items-center gap-2 w-full px-4 py-2 text-sm text-left hover:bg-gray-100"
            >
              Copiar enlace
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
