import { Loader2, Package } from "lucide-react";

export default function MaterialesLoading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-36">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-100 mb-4">
          Materiales de Construcción en Seco
        </h1>
        <p className="text-lg text-gray-400">
          Cargando categorías disponibles...
        </p>
      </div>

      {/* Loading state para categorías */}
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-blue-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-100 mb-2">
            Cargando categorías...
          </h3>
          <p className="text-gray-400">
            Por favor, espera mientras se cargan los datos.
          </p>
        </div>
      </div>

      {/* Skeleton para categorías */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="bg-gray-800 border border-gray-700 rounded-lg p-6 animate-pulse"
          >
            <div className="aspect-square bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
              <Package className="h-16 w-16 text-gray-600" />
            </div>
            <div className="h-6 bg-gray-700 rounded mb-2"></div>
            <div className="h-4 bg-gray-700 rounded w-16 mx-auto"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
