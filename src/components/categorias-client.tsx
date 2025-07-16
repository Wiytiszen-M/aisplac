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

  const baseUrl = pathname.includes("/steelframe") ? "/steelframe" : "/pvc";

  // Filtrar categorías basado en la búsqueda
  const filteredCategorias = useMemo(() => {
    if (!searchQuery || searchQuery.length < 3) {
      return categorias;
    }

    const query = searchQuery.toLowerCase().trim();

    return categorias.filter((categoria) => {
      const descripcion = categoria.descripcion.toLowerCase();
      const codigo = categoria.codigo.toLowerCase();

      // Buscar en descripción y código
      return descripcion.includes(query) || codigo.includes(query);
    });
  }, [categorias, searchQuery]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

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

  return (
    <>
      {/* Buscador */}
      <div className="mb-6">
        <SearchInput
          onSearch={handleSearch}
          placeholder="Buscar categorías por nombre o código..."
        />
      </div>

      {/* Resultados de búsqueda */}
      {searchQuery &&
      searchQuery.length >= 3 &&
      filteredCategorias.length === 0 ? (
        <div className="text-center py-12">
          <Layers className="h-16 w-16 text-gray-500 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-100 mb-2">
            No se encontraron categorías
          </h3>
          <p className="text-gray-400">No hay categorías que coincidan</p>
          <p className="text-sm text-gray-500 mt-2">
            Intenta con otros términos de búsqueda
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
