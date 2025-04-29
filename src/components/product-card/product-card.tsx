"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

interface ProductCardProps {
  title: string;
  description: string;
  sku: string;
  imageUrl: string;
  onAddToCart?: () => void;
}

export default function ProductCard({
  title,
  description,
  sku,
  imageUrl,
  onAddToCart = () => {},
}: ProductCardProps) {
  return (
    <div className="h-full overflow-hidden flex flex-col bg-slate-100 rounded-lg shadow">
      <div className="p-4 pb-2 space-y-1">
        <h3 className="font-bold text-xl text-indigo-950">{title}</h3>
        <p className="text-sm text-slate-700">{description}</p>
        <p className="text-xs text-slate-500">SKU: {sku}</p>
      </div>
      <div className="p-0 flex-grow relative">
        <div className="relative w-full aspect-square">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </div>
      <div className="p-4 pt-2">
        <Button
          onClick={onAddToCart}
          className="w-full bg-slate-400 hover:bg-slate-500 text-slate-800"
        >
          AGREGAR AL CARRITO
        </Button>
      </div>
    </div>
  );
}
