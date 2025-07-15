import { Layers } from "lucide-react";
import { getCategorias } from "@/lib/api";
import { CategoriasClient } from "@/components/categorias-client";

export async function CategoriasGrid() {
  const { data: categorias, error } = await getCategorias();

  if (error) {
    throw new Error(error); // Esto activará error.tsx
  }

  if (!categorias || categorias.length === 0) {
    return (
      <div className="text-center py-12">
        <Layers className="h-16 w-16 text-gray-500 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-100 mb-2">
          No se encontraron categorías
        </h3>
        <p className="text-gray-400">
          No hay categorías disponibles en este momento.
        </p>
      </div>
    );
  }

  return <CategoriasClient categorias={categorias} />;
}
