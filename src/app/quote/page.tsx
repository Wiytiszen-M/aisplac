"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2, ArrowLeft, Send } from "lucide-react";
import { useQuote } from "@/context/quote-context";

export default function QuotePage() {
  const { items, removeItem, updateQuantity, clearQuote } = useQuote();
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setCustomerInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Here you would send the quote to your backend
    // For now, we'll simulate a successful submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      clearQuote();
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center p-8 border rounded-lg">
          <h1 className="text-2xl font-bold mb-4">¡Cotización Enviada!</h1>
          <p className="mb-6">
            Gracias por tu solicitud. Nos pondremos en contacto contigo pronto.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2  py-2 px-4 rounded-md"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a la tienda
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container min-h-screen mx-auto px-4 pt-36 pb-20">
      <h1 className="text-3xl font-bold mb-8">Tu Cotización</h1>

      {items.length === 0 ? (
        <div className="text-center py-12">
          <p className="mb-6">Tu cotización está vacía</p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white py-2 px-4 rounded-md hover:bg-[#1D6191] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a la tienda
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {/* Quote Items */}
          <div className="md:col-span-2">
            <div className="border rounded-lg overflow-hidden">
              <div className=" p-4 border-b">
                <h2 className="font-medium">Productos a Cotizar</h2>
              </div>
              <div className="divide-y">
                {items.map((item) => (
                  <div key={item.id} className="p-4 flex gap-4">
                    <div className="relative h-20 w-20 flex-shrink-0 rounded overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <div className="flex items-center mt-2 gap-4">
                        <div className="flex items-center border rounded-md">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="px-2 py-1 border-r hover:bg-gray-100"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="px-3 py-1">{item.quantity}</span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="px-2 py-1 border-l hover:bg-gray-100"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className=" hover:text-red-500 flex items-center gap-1"
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="text-sm">Eliminar</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center py-12">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-white py-2 px-4 rounded-md hover:bg-[#1D6191] transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Seguir comprando
              </Link>
            </div>
          </div>

          {/* Customer Information Form */}
          <div className="md:col-span-1">
            <div className="border rounded-lg overflow-hidden">
              <div className=" p-4 border-b">
                <h2 className="font-medium">Información de Contacto</h2>
              </div>
              <form onSubmit={handleSubmit} className="p-4 space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1"
                  >
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={customerInfo.name}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={customerInfo.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-1"
                  >
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={customerInfo.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium mb-1"
                  >
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={customerInfo.company}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-1"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={customerInfo.message}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full p-2 border rounded-md"
                    placeholder="Detalles adicionales o requerimientos especiales..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-[#1D6191] text-white py-3 px-6 rounded-md hover:bg-gray-800 transition-colors disabled:bg-gray-400"
                >
                  {isSubmitting ? (
                    <span>Enviando...</span>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Enviar Cotización
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
