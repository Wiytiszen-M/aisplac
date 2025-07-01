import Link from "next/link"

export default function NewsNotFound() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Noticia no encontrada</h1>
        <p className="text-gray-600 mb-8">Lo sentimos, la noticia que estás buscando no existe o ha sido eliminada.</p>
        <Link
          href="/novedades"
          className="inline-block bg-black text-white py-2 px-6 rounded-md hover:bg-gray-800 transition-colors"
        >
          Ver todas las novedades
        </Link>
      </div>
    </div>
  )
}
