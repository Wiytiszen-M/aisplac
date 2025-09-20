"use client";

import { FileText, X, Plus, Minus, Send, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCotizacionStore } from "@/stores/cotizacion-store";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function CotizacionWidget() {
  const { items, removerProducto, actualizarCantidad } = useCotizacionStore();
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  const cantidadTotal = items.length;

  // Cerrar popover cuando se hace click fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        popoverRef.current &&
        buttonRef.current &&
        !popoverRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isOpen]);

  // Cerrar popover con tecla Escape
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => {
        document.removeEventListener("keydown", handleEscape);
      };
    }
  }, [isOpen]);

  const handleClosePopover = () => {
    setIsOpen(false);
  };

  if (cantidadTotal === 0 || pathname.includes("/cotizacion")) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50">
      {/* Botón flotante de cotización */}
      <Button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="h-14 w-14 rounded-full bg-blue-500 shadow-lg hover:bg-blue-800"
      >
        <FileText className="h-5 w-5" />
        {cantidadTotal > 0 && (
          <Badge className="absolute -right-2 -top-2 bg-red-500 text-white">
            {cantidadTotal}
          </Badge>
        )}
      </Button>

      {/* Panel de cotización */}
      {isOpen && (
        <Card
          ref={popoverRef}
          className="w-[95vw] md:max-w-[500px] absolute bottom-16 left-0 max-h-[500px] overflow-hidden border-gray-700 bg-gray-800 shadow-xl"
        >
          <CardHeader className="border-b border-gray-700 pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2 text-lg text-white">
                Cotización
              </CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleClosePopover}
                className="text-white hover:text-gray-200"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="max-h-80 space-y-3 overflow-y-auto p-4">
            {items.map((item) => (
              <div
                key={item.codigo}
                className="flex items-start gap-3 rounded-lg border border-gray-600 bg-gray-700 p-3"
              >
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-gray-100">
                    {item.descripcion}
                  </p>
                  <p className="mb-1 text-xs text-gray-400">{item.unmedida}</p>
                  {/* <p className="text-xs font-medium text-white">
                    ${item.precio.toLocaleString()} x {item.cantidad} = $
                    {(item.precio * item.cantidad).toLocaleString()}
                  </p> */}
                </div>

                <div className="flex flex-col items-center gap-1">
                  <div className="flex items-center gap-1">
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-6 w-6 border-gray-600 bg-transparent p-0 text-gray-300"
                      onClick={() =>
                        actualizarCantidad(item.codigo, item.cantidad - 1)
                      }
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-8 text-center text-sm font-medium text-gray-100">
                      {item.cantidad}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-6 w-6 border-gray-600 bg-transparent p-0 text-gray-300"
                      onClick={() =>
                        actualizarCantidad(item.codigo, item.cantidad + 1)
                      }
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 w-6 p-0 text-red-400 hover:text-red-300"
                    onClick={() => removerProducto(item.codigo)}
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>

          <div className="border-t border-gray-700 p-4">
            {/* <div className="mb-3 flex items-center justify-between">
              <span className="font-semibold text-white">Total:</span>
              <span className="text-xl font-bold text-blue-300">
                ${total.toLocaleString()}
              </span>
            </div> */}

            <div className="flex gap-2">
              <Link
                href="/cotizacion"
                className="flex-1"
                onClick={handleClosePopover}
              >
                <Button className="w-full" size="default">
                  <Send className="mr-2 h-4 w-4" />
                  Finalizar cotización
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}
