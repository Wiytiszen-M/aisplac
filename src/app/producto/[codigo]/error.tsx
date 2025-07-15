"use client";

import { AlertCircle, RefreshCw, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BackButton } from "@/components/back-button";
import Link from "next/link";

export default function ProductoError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href={"/"} className="mb-8">
        <BackButton text="Volver a Productos" />
      </Link>

      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center max-w-md">
          <AlertCircle className="h-20 w-20 text-red-500 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-gray-100 mb-4">
            Error al Cargar Producto
          </h2>
          <p className="text-gray-400 mb-6">
            No se pudo cargar la información del producto. Verifica tu conexión
            e intenta nuevamente.
          </p>

          <div className="bg-red-900/20 border border-red-800 p-4 rounded-lg mb-6 text-left">
            <p className="text-sm text-red-400 font-medium mb-2">
              Detalles del error:
            </p>
            <p className="text-sm text-red-300 font-mono">{error.message}</p>
            {error.digest && (
              <p className="text-xs text-red-400 mt-2">ID: {error.digest}</p>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button onClick={reset} className="bg-blue-600 hover:bg-blue-700">
              <RefreshCw className="h-4 w-4 mr-2" />
              Reintentar
            </Button>
            <Button
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
