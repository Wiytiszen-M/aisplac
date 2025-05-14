import { Skeleton } from "@/components/ui/skeleton";

export function ProductSkeleton() {
  return (
    <div className="border rounded-lg overflow-hidden h-full">
      {/* Image skeleton */}
      <Skeleton className="h-64 w-full" />

      {/* Content skeleton */}
      <div className="p-4">
        {/* Title skeleton */}
        <Skeleton className="h-6 w-3/4 mb-2" />

        {/* Metadata skeleton */}
        <Skeleton className="h-4 w-1/3 mb-1" />
        <Skeleton className="h-4 w-1/4 mb-3" />

        {/* Price skeleton */}
        <Skeleton className="h-5 w-1/3" />
      </div>
    </div>
  );
}
