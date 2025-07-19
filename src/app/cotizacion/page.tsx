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
    <div className="max-w-7xl mx-auto space-y-8  py-36">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-white mb-4">Mi Cotización</h1>
        <p className="text-gray-300">
          Revisa los productos seleccionados y completa tus datos para enviar la
          cotización.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Lista de productos */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">
                Productos Seleccionados ({items.length})
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.codigo}
                  className="flex gap-4 p-4 bg-gray-700 rounded-lg"
                >
                  <div className="w-16 h-16 bg-gray-600 rounded-lg overflow-hidden flex-shrink-0">
                    {item.urlimg ? (
                      <Image
                        src={item.urlimg || "/placeholder.svg"}
                        alt={item.descripcion}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <FileText className="h-6 w-6 text-gray-400" />
                      </div>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-white truncate">
                      {item.descripcion}
                    </h3>
                    <p className="text-sm text-gray-400">
                      Código: {item.codigo}
                    </p>

                    <div className="flex items-center gap-4 mt-3">
                      <div className="flex items-center gap-2">
                        <Label className="text-sm text-gray-300">
                          Cantidad:
                        </Label>
                        <div className="flex items-center border border-gray-600 rounded-lg overflow-hidden bg-gray-600">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              decrementarCantidad(item.codigo, item.cantidad)
                            }
                            disabled={item.cantidad <= 1}
                            className="h-8 w-8 p-0 text-gray-300 hover:text-white hover:bg-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="px-3 py-1 text-white text-sm min-w-[40px] text-center border-x border-gray-500">
                            {item.cantidad}
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              incrementarCantidad(item.codigo, item.cantidad)
                            }
                            className="h-8 w-8 p-0 text-gray-300 hover:text-white hover:bg-gray-500"
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        <span className="text-sm text-gray-400">
                          {item.unmedida}
                        </span>
                      </div>

                      {item.precio > 0 && (
                        <div className="text-sm">
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

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removerProducto(item.codigo)}
                    className="text-red-400 hover:text-red-300 hover:bg-red-900/20 self-start"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}

              {/* Total */}
              {total > 0 && (
                <div className="border-t border-gray-600 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-medium text-white">
                      Total:
                    </span>
                    <span className="text-2xl font-bold text-green-400">
                      ${total.toLocaleString("es-AR")}
                    </span>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Datos del cliente y envío */}
        <div className="space-y-6">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Datos del Cliente</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label className="text-gray-300">Nombre de la Empresa</Label>
                <Input
                  value={datosCotizacion.nombreEmpresa}
                  onChange={(e) =>
                    actualizarDatosCotizacion({ nombreEmpresa: e.target.value })
                  }
                  className="bg-gray-700 border-gray-600 text-white"
                  placeholder="Nombre de tu empresa"
                />
              </div>

              <div>
                <Label className="text-gray-300">Contacto</Label>
                <Input
                  value={datosCotizacion.contacto}
                  onChange={(e) =>
                    actualizarDatosCotizacion({ contacto: e.target.value })
                  }
                  className="bg-gray-700 border-gray-600 text-white"
                  placeholder="Nombre del contacto"
                />
              </div>

              <div>
                <Label className="text-gray-300">Email *</Label>
                <Input
                  type="email"
                  value={datosCotizacion.email}
                  onChange={(e) => {
                    actualizarDatosCotizacion({ email: e.target.value });
                    setEmailError("");
                  }}
                  className="bg-gray-700 border-gray-600 text-white"
                  placeholder="tu@email.com"
                />
                {emailError && (
                  <p className="text-red-400 text-sm mt-1">{emailError}</p>
                )}
              </div>

              <div>
                <Label className="text-gray-300">Teléfono</Label>
                <Input
                  value={datosCotizacion.telefono}
                  onChange={(e) =>
                    actualizarDatosCotizacion({ telefono: e.target.value })
                  }
                  className="bg-gray-700 border-gray-600 text-white"
                  placeholder="Número de teléfono"
                />
              </div>

              <div>
                <Label className="text-gray-300">Código Postal</Label>
                <Input
                  value={datosCotizacion.codigoPostal}
                  onChange={(e) =>
                    actualizarDatosCotizacion({ codigoPostal: e.target.value })
                  }
                  className="bg-gray-700 border-gray-600 text-white"
                  placeholder="Código postal"
                />
              </div>

              <div>
                <Label className="text-gray-300">Dirección</Label>
                <Input
                  value={datosCotizacion.direccion}
                  onChange={(e) =>
                    actualizarDatosCotizacion({ direccion: e.target.value })
                  }
                  className="bg-gray-700 border-gray-600 text-white"
                  placeholder="Dirección completa"
                />
              </div>

              <div>
                <Label className="text-gray-300">Observaciones</Label>
                <Textarea
                  value={datosCotizacion.observaciones}
                  onChange={(e) =>
                    actualizarDatosCotizacion({ observaciones: e.target.value })
                  }
                  className="bg-gray-700 border-gray-600 text-white"
                  placeholder="Observaciones adicionales..."
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>
          {errorEnvio && (
            <Card className="bg-red-900/20 border-red-700">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 text-red-400 mb-2">
                  <AlertCircle className="h-5 w-5" />
                  <span className="font-medium">Error al enviar</span>
                </div>
                <p className="text-sm text-red-300">{errorEnvio}</p>
              </CardContent>
            </Card>
          )}

          {/* Botones de acción */}
          <div className="space-y-3">
            <Button
              onClick={handleEnviarCotizacion}
              disabled={enviando || items.length === 0}
              className="w-full bg-orange-600 hover:bg-orange-700 text-white"
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
              className="w-full border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
            >
              Limpiar Cotización
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
