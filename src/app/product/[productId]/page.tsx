"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProductGrid from "@/components/product-grid/product-grid";

const product = {
  title: "PRODUCTO",
  sku: "0000",
  stock: 5,
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  images: ["/steelframe/item.png", "/image-1.png", "/image-2.png"],
  sizes: ['8"', '10"'],
  relatedProducts: [
    {
      id: "1",
      title: "Related Product 1",
      image: "/image-1.png",
      price: "$20.00",
      description: "Description for Related Product 1",
      sku: "RP0001",
      imageUrl: "/image-1.png",
    },
    {
      id: "2",
      title: "Related Product 2",
      image: "/image-2.png",
      price: "$25.00",
      description: "Description for Related Product 2",
      sku: "RP0002",
      imageUrl: "/image-2.png",
    },
    {
      id: "3",
      title: "Related Product 3",
      image: "/image-3.png",
      price: "$30.00",
      description: "Description for Related Product 3",
      sku: "RP0003",
      imageUrl: "/image-3.png",
    },
  ],
};

export default function ProductDetail() {
  const [activeImage, setActiveImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);

  return (
    <section className="px-8 py-12 pb-[150px] max-w-7xl mx-auto text-white">
      <div className="mb-8">
        <button className="flex items-center gap-2 text-white hover:underline">
          ← Nombre de la categoría
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Galería */}
        <div>
          <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-4">
            <div className="w-full h-[500px] relative mb-4">
              <Image
                key={activeImage}
                src={activeImage}
                alt="Producto"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="flex gap-4">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                className={`relative w-20 aspect-square border-2 rounded overflow-hidden ${
                  activeImage === img ? "border-white" : "border-transparent"
                }`}
                onClick={() => setActiveImage(img)}
              >
                <Image
                  src={img}
                  alt={`Miniatura ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Detalle del producto */}
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-sm text-slate-300">SKU: {product.sku}</p>
          <p className="text-sm text-green-400">{product.stock} en stock</p>

          <div>
            <p className="text-slate-400 mb-1">Tamaño</p>
            <div className="flex gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className="px-4 py-1 border border-white rounded hover:bg-white hover:text-black transition"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Selector de cantidad */}
          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center border rounded overflow-hidden">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-3 py-1 bg-slate-800"
              >
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-3 py-1 bg-slate-800"
              >
                +
              </button>
            </div>

            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6">
              ADD TO CART
            </Button>
          </div>

          {/* Características */}
          <div className="mt-6">
            <h2 className="font-bold text-lg">CARACTERISTICAS</h2>
            <p className="text-sm mt-1">{product.description}</p>
          </div>
        </div>
      </div>
      <div>
        <ProductGrid products={product.relatedProducts} />
      </div>
    </section>
  );
}
