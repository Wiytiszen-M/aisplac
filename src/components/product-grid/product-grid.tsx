import ProductCard from "../product-card/product-card";

interface Product {
  id: string;
  title: string;
  description: string;
  sku: string;
  imageUrl: string;
}

interface ProductGridProps {
  products: Product[];
  onAddToCart?: (productId: string) => void;
}

export default function ProductGrid({
  products,
  onAddToCart = () => {},
}: ProductGridProps) {
  return (
    <div className="px-2 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          {...product}
          onAddToCart={() => onAddToCart(product.id)}
        />
      ))}
    </div>
  );
}
