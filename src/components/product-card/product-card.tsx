"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { IProductCard } from "@/app/types";
import Link from "next/link";
import AISButton from "../AISButton/AISButton";

export default function ProductCard({
  name,
  description,
  sku,
  imageUrl,
  onAddToCart,
  price,
  className,
}: IProductCard) {
  return (
    <Link href={`/product/${sku}`} passHref>
      <div
        className={`w-[457px] h-[575px] rounded-lg overflow-hidden shadow-md bg-white flex flex-col ${className}`}
      >
        <div className="relative w-full flex-1">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 p-4 bg-gradient-to-b from-black/50 to-transparent">
            <h2 className="text-xl font-bold text-white">{name}</h2>
            <p className="text-sm text-gray-200">{description}</p>
            <p className="text-xs text-gray-300">SKU: {sku}</p>
          </div>
        </div>

        {price && (
          <div className="px-4 py-2">
            <p className="font-semibold text-gray-800">{price}</p>
          </div>
        )}

        <div className="p-4  px-10 mx-auto mt-auto">
          <AISButton
            onClick={(e) => {
              e?.preventDefault();
              onAddToCart();
            }}
            text="AGREGAR AL CARRITO"
            color="secondary"
          />
        </div>
      </div>
    </Link>
  );
}
