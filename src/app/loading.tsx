import { LoadingSpinner } from "@/components/loading-spinner";

export default function Loading() {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 bg-white bg-opacity-80 z-50 flex items-center justify-center transition-opacity duration-300">
        <LoadingSpinner size={60} className="text-black mb-2" />
      </div>
    </div>
  );
}
