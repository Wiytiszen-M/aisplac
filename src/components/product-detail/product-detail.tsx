"use client";

import { useState } from "react";
import Image from "next/image";
import { Minus, Plus, FileText } from "lucide-react";
import { useQuote, type QuoteItem } from "@/context/quote-context";
import { ShareDropdown } from "../dropdown-share/dropdown-share";
import { Product } from "@/app/types";

type ProductDetailProps = {
  product: {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    features?: string[];
    referencia?: string;
    sap?: string;
    stock?: number;
    relatedProducts?: Product[];
  };
};

export function ProductDetail({ product }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useQuote();
  const [addedToQuote, setAddedToQuote] = useState(false);

  // Default stock value if not provided
  const stockAvailable = product.stock !== undefined ? product.stock : 5;

  const incrementQuantity = () => {
    if (quantity < stockAvailable) {
      setQuantity((prev) => prev + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToQuote = () => {
    const quoteItem: QuoteItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      image: product.image,
    };

    addItem(quoteItem);
    setAddedToQuote(true);

    // Reset notification after 3 seconds
    setTimeout(() => {
      setAddedToQuote(false);
    }, 3000);
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Product Image */}
      <div className="relative bg-white h-[678px] rounded-lg overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-col">
        <h2 className="font-bold mb-2">{product.name}</h2>

        {/* Product metadata */}
        <div className="flex flex-wrap gap-4 mb-4">
          {product.referencia && (
            <span className="text-sm  py-1 rounded-full">
              Ref: {product.referencia}
            </span>
          )}
          {product.sap && (
            <span className="text-sm  py-1 rounded-full">
              SAP: {product.sap}
            </span>
          )}
        </div>

        {/* Stock and Share */}
        <div className="flex justify-between items-center mb-4">
          <div className="text-sm font-medium">
            {stockAvailable > 0 ? (
              <span className="text-green-600">
                {stockAvailable} EN EXISTENCIA
              </span>
            ) : (
              <span className="text-red-600">AGOTADO</span>
            )}
          </div>
          <ShareDropdown
            title={product.name}
            url={typeof window !== "undefined" ? window.location.href : ""}
          />
        </div>

        <p className="mb-6">{product.description}</p>

        {/* Features */}
        {product.features && product.features.length > 0 && (
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">Características</h3>
            <ul className="text-2xl list-disc pl-5 space-y-1">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Quantity Selector */}
        <div className="flex items-center gap-5 mb-6">
          <div className="flex items-center border rounded-md">
            <button
              onClick={decrementQuantity}
              className="px-3 py-2 border-r hover:bg-gray-100 disabled:opacity-50 disabled:hover:bg-transparent transition-colors"
              aria-label="Decrease quantity"
              disabled={quantity <= 1}
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="px-4 py-2">{quantity}</span>
            <button
              onClick={incrementQuantity}
              className="px-3 py-2 border-l hover:bg-gray-100 disabled:opacity-50 disabled:hover:bg-transparent transition-colors"
              aria-label="Increase quantity"
              disabled={quantity >= stockAvailable}
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>

          {/* Add to Quote Button */}
          <button
            onClick={handleAddToQuote}
            className="flex items-center justify-center gap-2 bg-[#1D6191] text-white py-3 px-6 rounded-md hover:bg-gray-800 transition-colors"
          >
            <FileText className="h-5 w-5" />
            Agregar a Cotización
          </button>
        </div>

        {/* Added to Quote Notification */}
        {addedToQuote && (
          <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-md">
            ¡Producto agregado a tu cotización!
          </div>
        )}
      </div>
    </div>
  );
}
