import { Skeleton } from "@/components/ui/skeleton";

export function ProductDetailSkeleton() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Image skeleton */}
      <Skeleton className="h-[400px] rounded-lg" />

      {/* Content skeleton */}
      <div className="space-y-4">
        <Skeleton className="h-8 w-3/4" />
        <div className="flex gap-2">
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-6 w-20 rounded-full" />
        </div>
        <Skeleton className="h-6 w-1/4" />
        <Skeleton className="h-20" />
        <Skeleton className="h-6 w-1/3" />
        <div className="space-y-2">
          <Skeleton className="h-4" />
          <Skeleton className="h-4" />
          <Skeleton className="h-4" />
        </div>
        <Skeleton className="h-10 w-1/2" />
        <Skeleton className="h-12" />
      </div>
    </div>
  );
}
