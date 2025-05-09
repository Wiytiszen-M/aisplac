"use client";
import TripleArrowLeft from "@/app/assets/icons/triple-arrow-left";
import OutstandingProducts from "@/components/AISButton/outstanding-products/outstanding-products";
import FiltersPanel from "@/components/filter-panel/filter-panel";
import Header from "@/components/header/header";
import ProductGrid from "@/components/product-grid/product-grid";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Product {
  id: string;
  title: string;
  description: string;
  sku: string;
  imageUrl: string;
}

export default function Category() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/fakedata/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error cargando novedades:", err));
  }, []);

  if (!products.length) return null;
  console.log("products", products);

  return (
    <section className="min-h-screen relative">
      <div
        className="absolute -z-10 top-0 flex justify-center items-center min-h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/steelframe-bg.webp')" }}
      />
      <div
        className="absolute bottom-0 w-full h-full -z-10"
        style={{
          background: "linear-gradient(transparent 60%, #1c1936 78%)",
        }}
      />

      <div className="flex flex-col justify-center gap-24 px-[144px] mt-[240px] z-10">
        <Link href="/steelframe" className="flex items-center gap-4 text-white">
          <TripleArrowLeft />
          Nombre de la categoría
        </Link>

        <div className="flex flex-col gap-32 w-full">
          <div className="flex gap-8">
            <div className="md:w-1/4">
              <FiltersPanel />
            </div>
            <div className="md:max-h-[1000px] overflow-auto md:w-3/4">
              <ProductGrid
                products={products}
                onAddToCart={(id) => console.log("add", id)}
              />
            </div>
          </div>

          <OutstandingProducts />
        </div>
      </div>
    </section>
  );
}
