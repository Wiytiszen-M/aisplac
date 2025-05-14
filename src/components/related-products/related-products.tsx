import Link from "next/link";
import { ProductCard } from "../product-card/product-card";
import { Product } from "@/app/types";

interface RelatedProductsProps {
  relatedProducts: Product[];
}

export function RelatedProducts({ relatedProducts }: RelatedProductsProps) {
  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <div className="text-white py-12 px-4 mt-12 -mx-4">
      <div className="container mx-auto">
        <h2 className="mb-8">PRODUCTOS RELACIONADOS</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedProducts.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <div className="bg-white rounded-lg overflow-hidden">
                <ProductCard product={product} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
