import { Producto } from "@/types";
import Image from "next/image";

interface ProductCardProps {
  product: Producto;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white border-gray-200 rounded-lg overflow-hidden h-full transition-all duration-300 hover:scale-[1.02]">
      <div className="relative h-64">
        <Image
          src={product.urlimg || "/placeholder.svg"}
          alt={product.descripcion || "Producto"}
          fill
          className="object-contain"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>
      <div className="flex flex-col p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-black font-bold text-lg">
            {product.descripcion}
          </h3>
        </div>
      </div>
    </div>
  );
}
