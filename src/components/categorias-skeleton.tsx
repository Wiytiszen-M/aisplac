import { Package } from "lucide-react";

export function CategoriasSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="bg-gray-800 border border-gray-700 rounded-lg p-6 animate-pulse"
        >
          <div className="aspect-square bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
            <Package className="h-16 w-16 text-gray-600" />
          </div>
          <div className="h-6 bg-gray-700 rounded mb-2"></div>
          <div className="h-4 bg-gray-700 rounded w-16 mx-auto"></div>
        </div>
      ))}
    </div>
  );
}
