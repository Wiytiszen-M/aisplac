import { Skeleton } from "@/components/ui/skeleton";

export default function ProductDetailSkeleton() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Gallery Skeleton */}
          <div className="space-y-4">
            {/* Main Image Skeleton */}
            <div className="relative aspect-square bg-white/10 rounded-2xl overflow-hidden">
              <Skeleton className="w-full h-full bg-white/20" />
            </div>

            {/* Thumbnail Images Skeleton */}
            <div className="grid grid-cols-4 gap-3">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="relative aspect-square bg-white/10 rounded-lg overflow-hidden"
                >
                  <Skeleton className="w-full h-full bg-white/20" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Information Skeleton */}
          <div className="text-white space-y-6">
            {/* Header Skeleton */}
            <div className="space-y-4">
              <Skeleton className="h-12 w-64 bg-white/20" />

              <div className="space-y-2">
                <Skeleton className="h-4 w-24 bg-blue-200/20" />
                <Skeleton className="h-4 w-32 bg-blue-200/20" />
              </div>

              {/* Share Button Skeleton */}
              <Skeleton className="h-6 w-20 bg-blue-200/20" />
            </div>

            {/* Size Selection Skeleton */}
            <div className="space-y-3">
              <Skeleton className="h-6 w-12 bg-white/20" />
              <div className="flex gap-3">
                <Skeleton className="h-10 w-16 bg-blue-300/20 rounded-lg" />
                <Skeleton className="h-10 w-16 bg-blue-300/20 rounded-lg" />
              </div>
            </div>

            {/* Quantity and Add to Cart Skeleton */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                {/* Quantity Selector Skeleton */}
                <div className="flex items-center border-2 border-[#A7A7A7] rounded-lg overflow-hidden">
                  <Skeleton className="w-12 h-12 bg-blue-400/20" />
                  <Skeleton className="w-16 h-12 bg-blue-300/20" />
                  <Skeleton className="w-12 h-12 bg-blue-400/20" />
                </div>

                {/* Add to Cart Button Skeleton */}
                <Skeleton className="flex-1 h-12 bg-blue-600/30 rounded-lg" />
              </div>
            </div>

            {/* Characteristics Skeleton */}
            <div className="space-y-4 pt-6 border-t border-blue-300/20">
              <Skeleton className="h-6 w-48 bg-white/20" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full bg-blue-100/20" />
                <Skeleton className="h-4 w-3/4 bg-blue-100/20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
