"use client";
import ProductCard from "../product-card/product-card";

const ProductGrid = () => {
  return (
    <div className="min-h-screen bg-navy-900 p-5 pt-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <ProductCard
            key={i}
            name="Product Name"
            description="Product Description"
            sku="SKU123456"
            imageUrl="/image1.png"
            price="$19.99"
            onAddToCart={() => {}}
            className="w-[365px] h-[498px]"
          />
        ))}
      </div>
      <div className="bg-navy-900 p-4 w-full flex justify-center">
        <nav className="flex space-x-4" aria-label="Pagination">
          {[1, 2, 3, 4, 5].map((page, index) => (
            <button
              key={page}
              className={`px-1 text-sm transition-colors duration-200 ${
                page === 1
                  ? "text-white border-b-2 border-white"
                  : "text-gray-400 hover:text-gray-300"
              }`}
              aria-current={page === 1 ? "page" : undefined}
            >
              {page}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default ProductGrid;
