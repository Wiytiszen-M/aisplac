"use client";

import { FileText, X, Plus, Minus, Send, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCotizacionStore } from "@/stores/cotizacion-store";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export function CotizacionWidget() {
  const { items, total, removerProducto, actualizarCantidad } =
    useCotizacionStore();
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

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

  if (cantidadTotal === 0) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50">
      {/* Botón flotante de cotización */}
      <Button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-full w-14 h-14 shadow-lg bg-orange-600 hover:bg-orange-700"
      >
        <FileText className="h-5 w-5" />
        {cantidadTotal > 0 && (
          <Badge className="absolute -top-2 -right-2 bg-red-500 text-white">
            {cantidadTotal}
          </Badge>
        )}
      </Button>

      {/* Panel de cotización */}
      {isOpen && (
        <Card
          ref={popoverRef}
          className="absolute bottom-16 left-0 w-96 max-h-[500px] overflow-hidden shadow-xl bg-gray-800 border-gray-700"
        >
          <CardHeader className="pb-3 bg-orange-900/20 border-b border-gray-700">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg text-white flex items-center gap-2">
                Cotización
              </CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleClosePopover}
                className="text-gray-400 hover:text-gray-200"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="space-y-3 max-h-80 overflow-y-auto p-4">
            {items.map((item) => (
              <div
                key={item.codigo}
                className="flex items-start gap-3 p-3 border rounded-lg bg-gray-700 border-gray-600"
              >
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate text-gray-100">
                    {item.descripcion}
                  </p>
                  <p className="text-xs text-gray-400 mb-1">{item.unmedida}</p>
                  <p className="text-xs text-white font-medium">
                    ${item.precio.toLocaleString()} x {item.cantidad} = $
                    {(item.precio * item.cantidad).toLocaleString()}
                  </p>
                </div>

                <div className="flex flex-col items-center gap-1">
                  <div className="flex items-center gap-1">
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-6 w-6 p-0 bg-transparent border-gray-600 text-gray-300"
                      onClick={() =>
                        actualizarCantidad(item.codigo, item.cantidad - 1)
                      }
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="text-sm w-8 text-center font-medium text-gray-100">
                      {item.cantidad}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-6 w-6 p-0 bg-transparent border-gray-600 text-gray-300"
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

          <div className="p-4 border-t bg-orange-900/20 border-gray-700">
            <div className="flex justify-between items-center mb-3">
              <span className="font-semibold text-white">Total:</span>
              <span className="font-bold text-xl text-blue-300">
                ${total.toLocaleString()}
              </span>
            </div>

            <div className="flex gap-2">
              <Link
                href="/cotizacion"
                className="flex-1"
                onClick={handleClosePopover}
              >
                <Button className="w-full" size="default">
                  <Send className="h-4 w-4 mr-2" />
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
