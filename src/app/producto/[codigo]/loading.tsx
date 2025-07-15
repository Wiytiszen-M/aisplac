import { Package } from "lucide-react";

import Link from "next/link";
import { BackButton } from "@/components/back-button";

export default function ProductoLoading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link href={"/"} className="mb-8">
          <BackButton text="Volver a Productos" />
        </Link>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Skeleton imagen */}
          <div className="aspect-square bg-gray-700 rounded-lg animate-pulse flex items-center justify-center">
            <Package className="h-32 w-32 text-gray-600" />
          </div>

          {/* Skeleton información */}
          <div className="space-y-6 animate-pulse">
            <div>
              <div className="h-8 bg-gray-700 rounded mb-2"></div>
              <div className="flex gap-2">
                <div className="h-6 bg-gray-700 rounded w-24"></div>
                <div className="h-6 bg-gray-700 rounded w-20"></div>
              </div>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg">
              <div className="h-6 bg-gray-700 rounded mb-2"></div>
              <div className="h-8 bg-gray-700 rounded w-32"></div>
            </div>

            <div className="h-12 bg-gray-700 rounded"></div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="h-4 bg-gray-700 rounded mb-2"></div>
                <div className="h-6 bg-gray-700 rounded w-16"></div>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="h-4 bg-gray-700 rounded mb-2"></div>
                <div className="h-6 bg-gray-700 rounded w-20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
