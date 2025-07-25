'use client';

import { useState } from 'react';
import { FileText, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useCotizacionStore } from '@/stores/cotizacion-store';
import type { AgregarCotizacionButtonProps } from '@/types';

export function AgregarCotizacionButton({
  producto,
  showQuantityControls = false,
}: AgregarCotizacionButtonProps) {
  const { agregarProducto, estaEnCotizacion } = useCotizacionStore();
  const [cantidad, setCantidad] = useState(1);

  const handleAgregarACotizacion = () => {
    agregarProducto(producto, cantidad);
    // Resetear cantidad después de agregar (opcional)
    if (showQuantityControls) {
      setCantidad(1);
    }
  };

  const incrementarCantidad = () => {
    setCantidad((prev) => prev + 1);
  };

  const decrementarCantidad = () => {
    setCantidad((prev) => Math.max(1, prev - 1));
  };

  const handleCantidadChange = (value: string) => {
    const newValue = Number.parseInt(value) || 1;
    setCantidad(Math.max(1, newValue));
  };

  const enCotizacion = estaEnCotizacion(producto.codigo);

  if (showQuantityControls) {
    return (
      <div className="space-y-4 rounded-lg border border-gray-700 bg-gray-800 p-4">
        <div>
          <Label className="text-sm font-medium text-gray-300">
            cantidad a agregar
          </Label>
          <div className="mt-2 flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={decrementarCantidad}
              className="border-gray-600 bg-transparent text-gray-300 hover:bg-gray-700"
            >
              <Minus className="h-4 w-4" />
            </Button>
            <Input
              type="number"
              value={cantidad}
              onChange={(e) => handleCantidadChange(e.target.value)}
              className="w-20 border-gray-600 bg-gray-700 text-center text-gray-100"
              min="1"
            />
            <Button
              variant="outline"
              size="sm"
              onClick={incrementarCantidad}
              className="border-gray-600 bg-transparent text-gray-300 hover:bg-gray-700"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <p className="mt-1 text-xs text-gray-500">por {producto.unmedida}</p>
        </div>

        <Button
          onClick={handleAgregarACotizacion}
          className="w-full bg-orange-600 text-white hover:bg-orange-700"
          size="lg"
        >
          <FileText className="mr-2 h-4 w-4" />
          {enCotizacion
            ? `agregar ${cantidad} dffdfmás`
            : `agregar ${cantidad} a cotización`}
        </Button>

        {enCotizacion && (
          <p className="text-center text-xs text-orange-400">
            este producto ya está en tu cotización
          </p>
        )}
      </div>
    );
  }
}
