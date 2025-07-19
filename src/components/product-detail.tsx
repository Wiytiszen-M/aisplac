"use client";

import { useState } from "react";
import Image from "next/image";
import { Minus, Plus, Share2, Copy, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCotizacionStore } from "@/stores/cotizacion-store";
import { useClickProtection } from "@/hooks/use-click-protection";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import type { Producto } from "@/types";
import { Separator } from "@radix-ui/react-separator";

interface ProductDetailProps {
  producto: Producto;
  codigoCategoria?: string;
}

export default function ProductDetail({ producto }: ProductDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [urlCopiada, setUrlCopiada] = useState(false);

  const { agregarProducto } = useCotizacionStore();
  const { isProcessing, executeWithProtection, canClick } = useClickProtection({
    cooldownMs: 1200, // 1.2 segundos de cooldown para la página de detalle
    maxClicksPerSecond: 1,
  });

  // Generate multiple views of the product image
  const productImages = [producto?.urlimg || "/logo.svg"];

  const incrementQuantity = () => {
    setQuantity((prev) => Math.min(prev + 1, producto?.stock || 999));
  };

  const decrementQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
    }).format(price);
  };

  const handleAgregarACotizacion = async () => {
    const success = await executeWithProtection(async () => {
      const productoParaCotizacion = {
        codigo: producto.codigo,
        descripcion: producto.descripcion,
        precio: producto.precio,
        unmedida: producto.unmedida,
        urlimg: producto.urlimg,
        codcategoria: producto.codcategoria,
      };

      // Agregar la cantidad seleccionada (se suma a la existente)
      agregarProducto(productoParaCotizacion, quantity);

      // Resetear cantidad a 1 después de agregar
      setQuantity(1);

      // Opcional: mostrar feedback de éxito
      console.log(
        `Agregado: ${quantity} ${producto.unmedida} de ${producto.descripcion}`
      );
    });

    if (!success && !isProcessing) {
      console.log("Click bloqueado por protección - demasiado rápido");
    }
  };

  // Funciones de compartir
  const getShareData = () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const title = producto.descripcion;
    const price =
      producto.precio > 0 ? formatPrice(producto.precio) : "Consultar precio";
    const text = `🏗️ ${title}\n💰 ${price}\n📦 SKU: ${producto.codigo}\n\n¡Mira este producto de construcción!`;

    return { url, title, text, price };
  };

  const compartirWhatsApp = () => {
    const { url, text } = getShareData();
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
      `${text}\n\n${url}`
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const copiarUrl = async () => {
    const { url } = getShareData();

    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(url);
      } else {
        // Fallback para navegadores más antiguos
        const textArea = document.createElement("textarea");
        textArea.value = url;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }

      setUrlCopiada(true);
      setTimeout(() => setUrlCopiada(false), 2000);
    } catch (err) {
      console.error("Error al copiar URL:", err);
      alert("No se pudo copiar la URL");
    }
  };

  return (
    <div className="min-h-screen  p-4 md:p-8  text-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Gallery Section */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square bg-white rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={productImages[currentImageIndex] || "/placeholder.svg"}
                alt={producto.descripcion}
                fill
                className="object-cover"
                priority
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/logo.svg";
                }}
              />
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-3">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative aspect-square bg-white rounded-lg overflow-hidden transition-all duration-200 ${
                    currentImageIndex === index
                      ? "ring-3 ring-blue-400 ring-offset-2 ring-offset-slate-900"
                      : "hover:ring-2 hover:ring-blue-300 hover:ring-offset-1 hover:ring-offset-slate-900"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${producto.descripcion} vista ${index + 1}`}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder.svg?height=100&width=100";
                    }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Information Section */}
          <div className="text-white space-y-6">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <h1 className="text-3xl md:text-4xl font-bold tracking-wide flex-1">
                  {producto.descripcion}
                </h1>

                {/* Share Button con Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-blue-200 hover:text-white hover:bg-blue-800/30 transition-colors ml-4"
                    >
                      <Share2 className="w-4 h-4 mr-2" />
                      <span className="text-sm">Compartir</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="w-56 bg-slate-800 border-slate-700"
                  >
                    <DropdownMenuItem
                      onClick={compartirWhatsApp}
                      className="text-green-400 hover:text-green-300 hover:bg-slate-700 cursor-pointer"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z" />
                      </svg>
                      Compartir en WhatsApp
                    </DropdownMenuItem>

                    <DropdownMenuSeparator className="bg-slate-700" />

                    <DropdownMenuItem
                      onClick={copiarUrl}
                      className="text-blue-400 hover:text-blue-300 hover:bg-slate-700 cursor-pointer"
                    >
                      {urlCopiada ? (
                        <Check className="w-4 h-4 mr-2 text-green-400" />
                      ) : (
                        <Copy className="w-4 h-4 mr-2" />
                      )}
                      {urlCopiada ? "¡URL Copiada!" : "Copiar URL"}
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              {/* Price */}
              {producto.precio && producto.precio > 0 ? (
                <div className="text-2xl md:text-3xl font-bold text-blue-300">
                  {formatPrice(producto.precio)}
                </div>
              ) : (
                <div className="text-2xl md:text-3xl font-bold text-orange-300">
                  CONSULTAR PRECIO
                </div>
              )}
              <Separator className="h-[1px] bg-[#A7A7A7] my-4" />

              <div className="space-y-2 text-blue-200">
                <p className="text-sm uppercase tracking-wider">
                  <span className="font-semibold">SKU</span> {producto.codigo}
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Unidad:</span>{" "}
                  {producto.unmedida}
                </p>
                {producto.pesogramos > 0 && (
                  <p className="text-sm">
                    <span className="font-semibold">Peso:</span>{" "}
                    {producto.pesogramos}g
                  </p>
                )}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                {/* Quantity Selector */}
                <div className="flex items-center border border-[#A7A7A7] rounded-lg overflow-hidden">
                  <button
                    onClick={decrementQuantity}
                    className="p-3  hover:bg-blue-400/20 transition-colors disabled:opacity-50"
                    disabled={quantity <= 1}
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-6 py-3  min-w-[60px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={incrementQuantity}
                    className="p-3 hover:bg-blue-400/20 transition-colors disabled:opacity-50"
                    disabled={quantity >= (producto.stock || 999)}
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                {/* Add to Cart Button - Usando el componente existente */}
                <div className="flex-1">
                  <Button
                    onClick={handleAgregarACotizacion}
                    className="w-full"
                    size="lg"
                    disabled={isProcessing || !canClick}
                  >
                    {isProcessing ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      </>
                    ) : (
                      <>Agregar a Cotización</>
                    )}
                  </Button>
                </div>
              </div>

              {/* Total Price */}
              {producto.precio > 0 && (
                <div className="text-right text-blue-200">
                  <span className="text-sm">Total: </span>
                  <span className="text-xl font-bold text-white">
                    {formatPrice(producto.precio * quantity)}
                  </span>
                </div>
              )}

              {isProcessing && (
                <div className="text-center">
                  <p className="text-xs text-blue-400">
                    Procesando solicitud...
                  </p>
                </div>
              )}
            </div>
            <Separator className="h-[1px] bg-[#A7A7A7] my-4" />

            {/* Product Details */}
            <div className="space-y-4 pt-6">
              <h3 className="text-2xl font-semibold">DETALLES DEL PRODUCTO</h3>
              <div className="space-y-2 text-blue-100">
                <p className="text-2xl">
                  <span className="font-light">Descripción:</span>{" "}
                  {producto.descripcion}
                </p>
                {producto.uxb > 0 && (
                  <p className="text-2xl">
                    <span className="font-light">Unidades por bulto:</span>{" "}
                    {producto.uxb}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
