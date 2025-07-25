import { Layers } from 'lucide-react';
import { getCategorias } from '@/lib/api';
import { CategoriasClient } from '@/components/categorias-client';

export async function CategoriasGrid() {
  const { data: categorias, error } = await getCategorias();

  if (error) {
    throw new Error(error); // Esto activará error.tsx
  }

  if (!categorias || categorias.length === 0) {
    return (
      <div className="py-12 text-center">
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
