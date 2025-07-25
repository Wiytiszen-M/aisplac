'use client';

import { useState, useMemo } from 'react';
import { ShoppingBag } from 'lucide-react';
import { ProductCard } from '@/components/product-card';
import { SearchInput } from '@/components/search-input';
import { Producto } from '@/types';

interface ProductosClientProps {
  productos: Producto[];
  codigoCategoria: string;
}

export function ProductosClient({
  productos,
  codigoCategoria,
}: ProductosClientProps) {
  const [searchQuery, setSearchQuery] = useState('');

  // Filtrar productos basado en la búsqueda
  const filteredProductos = useMemo(() => {
    if (!searchQuery || searchQuery.length < 3) {
      return productos;
    }

    const query = searchQuery.toLowerCase().trim();

    return productos.filter((producto) => {
      const descripcion = producto.descripcion.toLowerCase();
      const codigo = producto.codigo.toLowerCase();
      const personal = producto.personal?.toLowerCase() || '';

      // Buscar en descripción, código y código personal
      return (
        descripcion.includes(query) ||
        codigo.includes(query) ||
        personal.includes(query)
      );
    });
  }, [productos, searchQuery]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  if (!productos || productos.length === 0) {
    return (
      <div className="py-12 text-center">
        <ShoppingBag className="mx-auto mb-4 h-16 w-16 text-gray-500" />
        <h3 className="mb-2 text-lg font-medium text-gray-100">
          No hay productos disponibles
        </h3>
        <p className="text-gray-400">
          Esta categoría no tiene productos en este momento.
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
          placeholder="Buscar productos por nombre o código..."
        />
      </div>

      {/* Resultados de búsqueda */}
      {searchQuery &&
      searchQuery.length >= 3 &&
      filteredProductos.length === 0 ? (
        <div className="py-12 text-center">
          <ShoppingBag className="mx-auto mb-4 h-16 w-16 text-gray-500" />
          <h3 className="mb-2 text-lg font-medium text-gray-100">
            No se encontraron productos
          </h3>
          <p className="text-gray-400">No hay productos que coincidan</p>
          <p className="mt-2 text-sm text-gray-500">
            Intenta con otros términos de búsqueda
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProductos.map((producto) => (
            <ProductCard
              key={producto.codigo}
              producto={producto}
              codigoCategoria={codigoCategoria}
            />
          ))}
        </div>
      )}
    </>
  );
}
