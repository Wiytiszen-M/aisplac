"use client";

import { Product } from "@/app/types";
import { ProductCard } from "@/components/product-card/product-card";
import { ProductFilter } from "@/components/product-filter/product-filter";
import { ChevronsLeft } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { ProductFilterSkeleton } from "@/components/product-filter/product-filter-skeleton";
import { ProductSkeleton } from "@/components/product-card/product-card-skeleton";

export default function Category() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setIsLoading(true);

    fetch("/fakedata/products.json")
      .then((res) => res.json())
      .then((data) => {
        setFilteredProducts(data);
        setProducts(data);
      })
      .catch((err) => console.error("Error cargando novedades:", err));
    setIsLoading(false);
  }, []);

  const handleFilterChange = useCallback(
    (filtered: Product[]) => {
      // If still loading, don't update filtered products
      if (isLoading) return;

      setFilteredProducts(filtered);
    },
    [isLoading]
  );
  return (
    <div className="container mx-auto pb-36 min-h-screen relative">
      <div
        className="absolute -z-10 top-0 flex justify-center items-center min-h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/steelframe-bg.webp')" }}
      />
      <div className="md:pt-32 pt-20">
        <section id="products" className="mb-12">
          <Link
            href="/steelframe"
            className="inline-flex items-center gap-2 mb-20 hover:underline transition-all duration-300"
          >
            <p className="flex font-bold gap-4">
              <ChevronsLeft className="h-8 w-8" />
              Volver a Categorias
            </p>
          </Link>
          {/* Product Filter - Only show when products are loaded */}
          {isLoading ? (
            <ProductFilterSkeleton />
          ) : (
            <ProductFilter
              products={products}
              onFilterChange={handleFilterChange}
            />
          )}

          {/* Loading Skeletons */}
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, index) => (
                <ProductSkeleton key={index} />
              ))}
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="text-center py-12 border rounded-lg">
              <p>No se encontraron productos que coincidan con tu búsqueda</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <Link key={product.id} href={`/product/${product.id}`}>
                  <ProductCard product={product} />
                </Link>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
