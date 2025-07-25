'use client';

import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { Product } from '@/app/types';

type ProductFilterProps = {
  products: Product[];
  onFilterChange: (filteredProducts: Product[]) => void;
};

export function ProductFilter({
  products,
  onFilterChange,
}: ProductFilterProps) {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter products when search term changes
  useEffect(() => {
    // Create a copy of the filtered products to avoid reference issues
    const filteredProducts = products.filter((product) => {
      // Search term filter (check description and reference)
      return (
        searchTerm === '' ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });

    onFilterChange(filteredProducts);
  }, [searchTerm, products, onFilterChange]);

  return (
    <div className="mb-6 rounded-lg">
      {/* Search input */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          className="w-full rounded-md border p-2 pl-10 text-black placeholder-gray-400"
          placeholder="Buscar por descripción o referencia..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
}
