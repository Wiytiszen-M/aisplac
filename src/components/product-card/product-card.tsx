import { Product } from "@/app/types";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white border-gray-200 rounded-lg overflow-hidden h-full transition-all duration-300 hover:scale-[1.02]">
      <div className="relative h-64">
        <Image
          src={product.imageUrl || "/placeholder.svg"}
          alt={product.description}
          fill
          className="object-contain"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>
      <div className="flex flex-col p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-black font-bold text-lg">{product.title}</h3>
        </div>
        <p className="text-sm text-gray-500 mb-1">{product.description}</p>
        <p className="text-sm text-gray-500 mb-3">SKU: {product.sku}</p>
      </div>
    </div>
  );
}
