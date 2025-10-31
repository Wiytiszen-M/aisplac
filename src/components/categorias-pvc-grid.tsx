import { Layers } from "lucide-react";
import { getCategoriasPVC } from "@/lib/api";
import { CategoriasClient } from "@/components/categorias-client";

export async function CategoriasPVCGrid() {
  const { data: categorias, error } = await getCategoriasPVC();

  if (error) {
    throw new Error(error); // Esto activará error.tsx
  }

  if (!categorias || categorias.length === 0) {
    return (
      <div className="mx-auto py-12 text-center">
        <Layers className="mx-auto mb-4 h-16 w-16 text-gray-500" />
        <h3 className="mb-2 text-lg font-medium text-gray-100">
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
