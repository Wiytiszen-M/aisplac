"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Trash2,
  FileText,
  Send,
  CheckCircle,
  AlertCircle,
  Plus,
  Minus,
  Phone,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCotizacionStore } from "@/stores/cotizacion-store";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { scrollToTop } from "@/lib/utils";

export default function CotizacionPage() {
  const router = useRouter();
  const {
    items,
    datosCotizacion,
    total,
    enviando,
    ultimoEnvio,
    errorEnvio,
    referenciaGestionNik,
    urlComprobante,
    actualizarCantidad,
    removerProducto,
    actualizarDatosCotizacion,
    enviarCotizacion,
    limpiarCotizacion,
    cotizacionEnviada,
    resetearEstadoExito,
  } = useCotizacionStore();

  const [emailError, setEmailError] = useState("");

  // Resetear el estado de éxito cuando el componente se desmonta (usuario navega fuera)
  useEffect(() => {
    return () => {
      if (cotizacionEnviada) {
        resetearEstadoExito();
      }
    };
  }, [cotizacionEnviada, resetearEstadoExito]);

  const handleEnviarCotizacion = async () => {
    // Validar email
    if (!datosCotizacion.email) {
      setEmailError("El email es requerido");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(datosCotizacion.email)) {
      setEmailError("Ingresa un email válido");
      return;
    }

    setEmailError("");
    await enviarCotizacion();
  };

  const handleSeguirComprando = () => {
    resetearEstadoExito();
    router.push("/");
  };

  const formatearFecha = (fecha: string) => {
    return new Date(fecha).toLocaleString("es-AR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const incrementarCantidad = (codigo: string, cantidadActual: number) => {
    actualizarCantidad(codigo, cantidadActual + 1);
  };

  const decrementarCantidad = (codigo: string, cantidadActual: number) => {
    if (cantidadActual > 1) {
      actualizarCantidad(codigo, cantidadActual - 1);
    }
  };

  // Si la cotización fue enviada exitosamente, mostrar mensaje de confirmación
  if (cotizacionEnviada && ultimoEnvio) {
    scrollToTop();
    return (
      <div className="max-w-7xl mx-auto space-y-8 px-1 py-36 text-center ">
        <div className=" border-2 border-blue-300 rounded-lg p-8">
          <CheckCircle className="h-16 w-16 text-blue-300 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-white mb-4">
            ¡Cotización Enviada Exitosamente!
          </h1>

          <div className="space-y-4 text-gray-300">
            <p className="text-lg">
              Tu cotización ha sido enviada correctamente y se encuentra en
              proceso de revisión.
            </p>

            <div className="bg-gray-800 rounded-lg p-4 space-y-2">
              <div className="flex items-center justify-center gap-2 text-white">
                <Mail className="h-5 w-5" />
                <span className="font-medium">
                  Recibirás un email de confirmación
                </span>
              </div>
              <p className="text-sm text-gray-400">
                Enviado a:{" "}
                <span className="text-white font-medium">
                  {datosCotizacion.email}
                </span>
              </p>
            </div>

            <div className=" rounded-lg p-4 space-y-2">
              <div className="flex items-center justify-center gap-2 text-blue-400">
                <Phone className="h-5 w-5" />
                <span className="font-medium">
                  Nos comunicaremos contigo pronto
                </span>
              </div>
            </div>

            <div className="text-sm text-gray-400 space-y-1">
              <p className="text-sm text-gray-400 space-y-1">
                Fecha de envío: {formatearFecha(ultimoEnvio)}
              </p>
              {referenciaGestionNik && (
                <p className="text-sm text-gray-400 space-y-1">
                  Referencia:{" "}
                  <span className="font-mono bg-gray-700 px-2 py-1 rounded text-white">
                    {referenciaGestionNik}
                  </span>
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            {urlComprobante && (
              <Button variant="outline">
                <a
                  href={urlComprobante}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver Comprobante
                </a>
              </Button>
            )}

            <Button onClick={handleSeguirComprando}>Explorar Catálogo</Button>
          </div>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    scrollToTop();
    return (
      <div className="text-center py-60">
        <FileText className="h-16 w-16 mx-auto mb-4" />
        <h2 className="font-bold text-gray-100 mb-2">
          Tu cotización está vacía
        </h2>
        <p className="mb-6">
          Agrega productos desde el catálogo para crear una cotización.
        </p>
        <Button>
          <Link href="/">Explorar Catálogo</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8 px-4 sm:px-6 py-36">
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-4">
          Mi Cotización
        </h1>
        <p className="text-sm sm:text-base text-gray-300">
          Revisa los productos seleccionados y completa tus datos para enviar la
          cotización.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {/* Lista de productos */}
        <div className="lg:col-span-2 space-y-4 sm:space-y-6">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="pb-3 sm:pb-4">
              <CardTitle className="text-base sm:text-lg text-white">
                Productos Seleccionados ({items.length})
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4 p-1">
              {items.map((item) => (
                <div
                  key={item.codigo}
                  className="flex gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-700 rounded-lg"
                >
                  {/* Imagen - siempre a la izquierda, tamaño reducido en móvil */}
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-600 rounded-lg overflow-hidden flex-shrink-0">
                    {item.urlimg ? (
                      <Image
                        src={item.urlimg || "/placeholder.svg"}
                        alt={item.descripcion}
                        width={64}
                        height={64}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <FileText className="h-4 w-4 sm:h-6 sm:w-6 text-gray-400" />
                      </div>
                    )}
                  </div>

                  {/* Contenido - siempre a la derecha */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base font-medium text-white truncate">
                      {item.descripcion}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400">
                      Código: {item.codigo}
                    </p>

                    <div className="flex flex-col gap-2 mt-2 sm:mt-3">
                      {/* Controles de cantidad */}
                      <div className="flex items-center gap-2">
                        <Label className="text-xs sm:text-sm text-gray-300 whitespace-nowrap">
                          Cantidad:
                        </Label>
                        <div className="flex items-center border border-gray-600 rounded-md overflow-hidden bg-gray-600">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              decrementarCantidad(item.codigo, item.cantidad)
                            }
                            disabled={item.cantidad <= 1}
                            className="h-6 w-6 sm:h-8 sm:w-8 p-0 text-gray-300 hover:text-white hover:bg-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <Minus className="h-2 w-2 sm:h-3 sm:w-3" />
                          </Button>
                          <span className="px-2 sm:px-3 py-1 text-white text-xs sm:text-sm min-w-[30px] sm:min-w-[40px] text-center border-x border-gray-500">
                            {item.cantidad}
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              incrementarCantidad(item.codigo, item.cantidad)
                            }
                            className="h-6 w-6 sm:h-8 sm:w-8 p-0 text-gray-300 hover:text-white hover:bg-gray-500"
                          >
                            <Plus className="h-2 w-2 sm:h-3 sm:w-3" />
                          </Button>
                        </div>
                        <span className="text-xs sm:text-sm text-gray-400 whitespace-nowrap">
                          {item.unmedida}
                        </span>
                      </div>

                      {/* Subtotal */}
                      {item.precio > 0 && (
                        <div className="text-xs sm:text-sm">
                          <span className="text-gray-400">Subtotal: </span>
                          <span className="text-green-400 font-medium">
                            $
                            {(item.precio * item.cantidad).toLocaleString(
                              "es-AR"
                            )}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Botón eliminar */}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removerProducto(item.codigo)}
                    className="text-red-400 hover:text-red-300 hover:bg-red-900/20 self-start h-6 w-6 sm:h-8 sm:w-8 p-0"
                  >
                    <Trash2 className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                </div>
              ))}

              {/* Total */}
              {total > 0 && (
                <div className="border-t border-gray-600 pt-3 sm:pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-base sm:text-lg font-medium text-white">
                      Total:
                    </span>
                    <span className="text-xl sm:text-2xl font-bold text-green-400">
                      ${total.toLocaleString("es-AR")}
                    </span>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Datos del cliente y envío */}
        <div className="space-y-4 sm:space-y-6">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="pb-3 sm:pb-4">
              <CardTitle className="text-base sm:text-lg text-white">
                Datos del Cliente
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4">
              <div>
                <Label className="text-sm text-gray-300">
                  Nombre de la Empresa
                </Label>
                <Input
                  value={datosCotizacion.nombreEmpresa}
                  onChange={(e) =>
                    actualizarDatosCotizacion({ nombreEmpresa: e.target.value })
                  }
                  className="bg-gray-700 border-gray-600 text-white text-sm h-9 sm:h-10"
                  placeholder="Nombre de tu empresa"
                />
              </div>

              <div>
                <Label className="text-sm text-gray-300">Contacto</Label>
                <Input
                  value={datosCotizacion.contacto}
                  onChange={(e) =>
                    actualizarDatosCotizacion({ contacto: e.target.value })
                  }
                  className="bg-gray-700 border-gray-600 text-white text-sm h-9 sm:h-10"
                  placeholder="Nombre del contacto"
                />
              </div>

              <div>
                <Label className="text-sm text-gray-300">Email *</Label>
                <Input
                  type="email"
                  value={datosCotizacion.email}
                  onChange={(e) => {
                    actualizarDatosCotizacion({ email: e.target.value });
                    setEmailError("");
                  }}
                  className="bg-gray-700 border-gray-600 text-white text-sm h-9 sm:h-10"
                  placeholder="tu@email.com"
                />
                {emailError && (
                  <p className="text-red-400 text-xs mt-1">{emailError}</p>
                )}
              </div>

              <div>
                <Label className="text-sm text-gray-300">Teléfono</Label>
                <Input
                  value={datosCotizacion.telefono}
                  onChange={(e) =>
                    actualizarDatosCotizacion({ telefono: e.target.value })
                  }
                  className="bg-gray-700 border-gray-600 text-white text-sm h-9 sm:h-10"
                  placeholder="Número de teléfono"
                />
              </div>

              <div>
                <Label className="text-sm text-gray-300">Código Postal</Label>
                <Input
                  value={datosCotizacion.codigoPostal}
                  onChange={(e) =>
                    actualizarDatosCotizacion({ codigoPostal: e.target.value })
                  }
                  className="bg-gray-700 border-gray-600 text-white text-sm h-9 sm:h-10"
                  placeholder="Código postal"
                />
              </div>

              <div>
                <Label className="text-sm text-gray-300">Dirección</Label>
                <Input
                  value={datosCotizacion.direccion}
                  onChange={(e) =>
                    actualizarDatosCotizacion({ direccion: e.target.value })
                  }
                  className="bg-gray-700 border-gray-600 text-white text-sm h-9 sm:h-10"
                  placeholder="Dirección completa"
                />
              </div>

              <div>
                <Label className="text-sm text-gray-300">Observaciones</Label>
                <Textarea
                  value={datosCotizacion.observaciones}
                  onChange={(e) =>
                    actualizarDatosCotizacion({ observaciones: e.target.value })
                  }
                  className="bg-gray-700 border-gray-600 text-white text-sm min-h-[60px] sm:min-h-[80px]"
                  placeholder="Observaciones adicionales..."
                  rows={2}
                />
              </div>
            </CardContent>
          </Card>

          {errorEnvio && (
            <Card className="bg-red-900/20 border-red-700">
              <CardContent className="pt-4 sm:pt-6">
                <div className="flex items-center gap-2 text-red-400 mb-2">
                  <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-sm sm:text-base font-medium">
                    Error al enviar
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-red-300">{errorEnvio}</p>
              </CardContent>
            </Card>
          )}

          {/* Botones de acción */}
          <div className="space-y-3 sticky bottom-4 sm:static bg-gray-900 sm:bg-transparent p-3 sm:p-0 -mx-4 sm:mx-0 rounded-t-lg sm:rounded-none border-t sm:border-t-0 border-gray-700">
            <Button
              onClick={handleEnviarCotizacion}
              disabled={enviando || items.length === 0}
              className="w-full bg-orange-600 hover:bg-orange-700 text-white h-10 sm:h-11 text-sm sm:text-base"
              size="lg"
            >
              {enviando ? (
                <>Enviando...</>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Enviar Cotización
                </>
              )}
            </Button>

            <Button
              onClick={limpiarCotizacion}
              variant="outline"
              className="w-full border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent h-9 sm:h-10 text-sm"
            >
              Limpiar Cotización
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
