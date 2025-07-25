import { LoadingSpinner } from '@/components/loading-spinner';

export default function MaterialesLoading() {
  return (
    <div className="relative min-h-screen py-36">
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-80 transition-opacity duration-300">
        <LoadingSpinner size={60} className="mb-2 text-black" />
      </div>
    </div>
  );
}
