"use client";

import { AlertCircle, RefreshCw, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function MaterialesError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-36 sm:px-6 lg:px-8">
      <div className="flex min-h-[500px] items-center justify-center">
        <div className="max-w-md text-center">
          <AlertCircle className="mx-auto mb-6 h-20 w-20 text-red-500" />
          <h2 className="mb-4 text-2xl font-bold text-gray-100">
            Error al Cargar Materiales
          </h2>
          <p className="mb-6 text-gray-400">
            Hubo un problema al conectar con el servidor. Por favor, intenta
            nuevamente.
          </p>

          <div className="mb-6 rounded-lg border border-red-800 bg-red-900/20 p-4 text-left">
            <p className="mb-2 text-sm font-medium text-red-400">
              Detalles técnicos:
            </p>
            <p className="font-mono text-sm text-red-300">{error.message}</p>
            {error.digest && (
              <p className="mt-2 text-xs text-red-400">ID: {error.digest}</p>
            )}
          </div>

          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Button onClick={reset} className="bg-blue-600 hover:bg-blue-700">
              <RefreshCw className="mr-2 h-4 w-4" />
              Reintentar
            </Button>
            <Link href="/">
              <Button
                variant="outline"
                className="border-gray-600 bg-transparent text-gray-300 hover:bg-gray-700"
              >
                <Home className="mr-2 h-4 w-4" />
                Ir al Inicio
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
