import { Loader2, Package } from "lucide-react";

export default function MaterialesLoading() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-36 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="mb-4 text-3xl font-bold text-gray-100">
          CARGANDO CATEGORIA PVC
        </h1>
        <p className="text-lg text-gray-400">
          Cargando categorías disponibles...
        </p>
      </div>

      {/* Loading state para categorías */}
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="text-center">
          <Loader2 className="mx-auto mb-4 h-12 w-12 animate-spin text-blue-400" />
          <h3 className="mb-2 text-lg font-medium text-gray-100">
            Cargando categorías...
          </h3>
          <p className="text-gray-400">
            Por favor, espera mientras se cargan los datos.
          </p>
        </div>
      </div>

      {/* Skeleton para categorías */}
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="animate-pulse rounded-lg border border-gray-700 bg-gray-800 p-6"
          >
            <div className="mb-4 flex aspect-square items-center justify-center rounded-lg bg-gray-700">
              <Package className="h-16 w-16 text-gray-600" />
            </div>
            <div className="mb-2 h-6 rounded bg-gray-700"></div>
            <div className="mx-auto h-4 w-16 rounded bg-gray-700"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
