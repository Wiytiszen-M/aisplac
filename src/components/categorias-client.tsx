"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Layers } from "lucide-react";
import { SearchInput } from "@/components/search-input";
import { CategoryCard } from "@/components/category-card";
import { usePathname } from "next/navigation";

interface Categoria {
  codigo: string;
  descripcion: string;
  urlimg: string;
}

interface CategoriasClientProps {
  categorias: Categoria[];
}

export function CategoriasClient({ categorias }: CategoriasClientProps) {
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState("");

  const onSteelframe = pathname.startsWith("/steelframe");
  const baseUrl = onSteelframe ? "/steelframe" : "/pvc";

  const filteredCategorias = useMemo(() => {
    // 1) Base: si estamos en /steelframe, excluir código "26"
    const base = onSteelframe
      ? categorias.filter((c) => c.codigo !== "26")
      : categorias;

    // 2) Sin búsqueda (o menos de 3 chars): devolver base tal cual
    if (!searchQuery || searchQuery.length < 3) {
      return base;
    }

    // 3) Con búsqueda: filtrar por descripción o código
    const q = searchQuery.toLowerCase().trim();
    return base.filter((c) => {
      const descripcion = c.descripcion.toLowerCase();
      const codigo = c.codigo.toLowerCase();
      return descripcion.includes(q) || codigo.includes(q);
    });
  }, [categorias, searchQuery, onSteelframe, pathname]);

  const handleSearch = (query: string) => setSearchQuery(query);

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

  return (
    <>
      <div className="mb-6">
        <SearchInput
          onSearch={handleSearch}
          placeholder="Buscar categorías por nombre o código..."
        />
      </div>

      {searchQuery &&
      searchQuery.length >= 3 &&
      filteredCategorias.length === 0 ? (
        <div className="py-12 text-center">
          <Layers className="mx-auto mb-4 h-16 w-16 text-gray-500" />
          <h3 className="mb-2 text-lg font-medium text-gray-100">
            No se encontraron categorías
          </h3>
          <p className="text-gray-400">No hay categorías que coincidan</p>
          <p className="mt-2 text-sm text-gray-500">
            Intenta con otros términos de búsqueda
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredCategorias.map((categoria) => {
            const isPinturas = categoria.codigo === "11";
            const linkHref = isPinturas
              ? "/pinturas"
              : `${baseUrl}/${categoria.codigo}`;

            return (
              <Link key={categoria.codigo} href={linkHref} className="group">
                <CategoryCard categoria={categoria} />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}
