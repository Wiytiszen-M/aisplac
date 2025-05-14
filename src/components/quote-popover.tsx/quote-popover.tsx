"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FileText, X, ShoppingBag } from "lucide-react";
import { useQuote } from "@/context/quote-context";

export function QuotePopover() {
  const [isOpen, setIsOpen] = useState(false);
  const { items, removeItem, totalItems } = useQuote();
  const popoverRef = useRef<HTMLDivElement>(null);

  // Close popover when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={popoverRef}>
      {/* Quote Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 p-2 rounded-md hover:bg-[#1D6191]"
        aria-label="Ver cotización"
      >
        <FileText className="h-6 w-6" />
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 bg-[#1D6191] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>

      {/* Popover Content */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-96 bg-white rounded-md shadow-lg z-50 border">
          <div className="p-4 border-b">
            <div className="flex justify-between items-center">
              <h3 className="text-gray-700 font-medium">Tu Cotización</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-black hover:text-gray-700"
                aria-label="Cerrar"
              >
                <X className="h-8 w-8" />
              </button>
            </div>
          </div>

          {items.length === 0 ? (
            <div className="p-6 text-center">
              <ShoppingBag className="h-12 w-12 mx-auto text-gray-300 mb-2" />
              <p className="text-gray-500">Tu cotización está vacía</p>
            </div>
          ) : (
            <>
              <div className="max-h-80 overflow-y-auto p-4 space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <div className="relative h-16 w-16 flex-shrink-0 rounded overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium">{item.name}</h4>
                      <div className="flex items-center mt-1">
                        <span className="text-sm text-gray-500">
                          Cant: {item.quantity}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-gray-400 hover:text-gray-600"
                      aria-label="Eliminar"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t">
                <Link
                  href="/quote"
                  className="block w-full bg-black text-white text-center py-2 rounded-md hover:bg-gray-800 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Ver Cotización Completa
                </Link>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
