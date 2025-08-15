"use client";

import { useEffect } from "react";
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
import { useForm, SubmitHandler } from "react-hook-form";

// Define form fields type
interface ClienteForm {
  nombreEmpresa: string;
  contacto: string;
  email: string;
  telefono: string;
  codigoPostal: string;
  direccion: string;
  observaciones: string;
}

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

  // Initialize form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ClienteForm>({
    defaultValues: {
      nombreEmpresa: datosCotizacion.nombreEmpresa,
      contacto: datosCotizacion.contacto,
      email: datosCotizacion.email,
      telefono: datosCotizacion.telefono,
      codigoPostal: datosCotizacion.codigoPostal,
      direccion: datosCotizacion.direccion,
      observaciones: datosCotizacion.observaciones,
    },
  });

  // Reset success on unmount
  useEffect(() => {
    return () => {
      if (cotizacionEnviada) {
        resetearEstadoExito();
      }
    };
  }, [cotizacionEnviada, resetearEstadoExito]);

  // Submit handler
  const onSubmit: SubmitHandler<ClienteForm> = async (data) => {
    // Sync form data to store
    actualizarDatosCotizacion({ nombreEmpresa: data.nombreEmpresa });
    actualizarDatosCotizacion({ contacto: data.contacto });
    actualizarDatosCotizacion({ email: data.email });
    actualizarDatosCotizacion({ telefono: data.telefono });
    actualizarDatosCotizacion({ codigoPostal: data.codigoPostal });
    actualizarDatosCotizacion({ direccion: data.direccion });
    actualizarDatosCotizacion({ observaciones: data.observaciones });
    // Send quotation
    await enviarCotizacion();
  };

  const handleSeguirComprando = () => {
    resetearEstadoExito();
    router.push("/");
  };

  const formatearFecha = (fecha: string) =>
    new Date(fecha).toLocaleString("es-AR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });

  const incrementarCantidad = (codigo: string, cantidad: number) =>
    actualizarCantidad(codigo, cantidad + 1);
  const decrementarCantidad = (codigo: string, cantidad: number) =>
    cantidad > 1 && actualizarCantidad(codigo, cantidad - 1);

  // Success state
  if (cotizacionEnviada && ultimoEnvio) {
    scrollToTop();
    return (
      <div className="mx-auto max-w-7xl space-y-8 px-1 py-36 text-center">
        <div className="rounded-lg border-2 border-blue-300 p-8">
          <CheckCircle className="mx-auto mb-4 h-16 w-16 text-blue-300" />
          <h1 className="mb-4 text-3xl font-bold text-white">
            ¡Cotización Enviada Exitosamente!
          </h1>
          <div className="space-y-4 text-gray-300">
            <p className="text-lg">
              Tu cotización ha sido enviada correctamente y se encuentra en
              proceso de revisión.
            </p>
            <div className="space-y-2 rounded-lg bg-gray-800 p-4">
              <div className="flex items-center justify-center gap-2 text-white">
                <Mail className="h-5 w-5" />
                <span className="font-medium">
                  Recibirás un email de confirmación
                </span>
              </div>
              <p className="text-sm text-gray-400">
                Enviado a:{" "}
                <span className="font-medium text-white">
                  {datosCotizacion.email}
                </span>
              </p>
            </div>
            <div className="space-y-2 rounded-lg p-4">
              <div className="flex items-center justify-center gap-2 text-blue-400">
                <Phone className="h-5 w-5" />
                <span className="font-medium">
                  Nos comunicaremos contigo pronto
                </span>
              </div>
            </div>
            <div className="space-y-1 text-sm text-gray-400">
              <p className="space-y-1 text-sm text-gray-400">
                Fecha de envío: {formatearFecha(ultimoEnvio)}
              </p>
              {referenciaGestionNik && (
                <p className="space-y-1 text-sm text-gray-400">
                  Referencia:{" "}
                  <span className="rounded bg-gray-700 px-2 py-1 font-mono text-white">
                    {referenciaGestionNik}
                  </span>
                </p>
              )}
            </div>
          </div>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
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

  // Empty state
  if (items.length === 0) {
    scrollToTop();
    return (
      <div className="py-60 text-center">
        <FileText className="mx-auto mb-4 h-16 w-16" />
        <h2 className="mb-2 font-bold text-gray-100">
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
  console.log(items);

  return (
    <div className="mx-auto max-w-7xl space-y-6 px-4 py-36 sm:space-y-8 sm:px-6">
      <div className="text-center">
        <h1 className="mb-2 text-2xl font-bold text-white sm:mb-4 sm:text-3xl">
          Mi Cotización
        </h1>
        <p className="text-sm text-gray-300 sm:text-base">
          Revisa los productos seleccionados y completa tus datos para enviar la
          cotización.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-3 lg:gap-8">
        {/* Lista de productos */}
        <div className="space-y-4 sm:space-y-6 lg:col-span-2">
          <Card className="border-gray-700 bg-gray-800">
            <CardHeader className="pb-3 sm:pb-4">
              <CardTitle className="text-base text-white sm:text-lg">
                Productos Seleccionados ({items.length})
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 p-1 sm:space-y-4">
              {items.map((item) => (
                <div
                  key={item.codigo}
                  className="flex gap-3 rounded-lg bg-gray-700 p-3 sm:gap-4 sm:p-4"
                >
                  {/* Imagen - siempre a la izquierda, tamaño reducido en móvil */}
                  <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg bg-gray-600 sm:h-16 sm:w-16">
                    <Image
                      src={item.urlimg || item.Fotos[0]?.urlimg || "/logo.svg"}
                      alt={item.descripcion}
                      width={64}
                      height={64}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  {/* Contenido - siempre a la derecha */}
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate text-sm font-medium text-white sm:text-base">
                      {item.descripcion}
                    </h3>
                    <p className="text-xs text-gray-400 sm:text-sm">
                      Código: {item.codigo}
                    </p>

                    <div className="mt-2 flex flex-col gap-2 sm:mt-3">
                      {/* Controles de cantidad */}
                      <div className="flex items-center gap-2">
                        <Label className="whitespace-nowrap text-xs text-gray-300 sm:text-sm">
                          Cantidad:
                        </Label>
                        <div className="flex items-center overflow-hidden rounded-md border border-gray-600 bg-gray-600">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              decrementarCantidad(item.codigo, item.cantidad)
                            }
                            disabled={item.cantidad <= 1}
                            className="h-6 w-6 p-0 text-gray-300 hover:bg-gray-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-50 sm:h-8 sm:w-8"
                          >
                            <Minus className="h-2 w-2 sm:h-3 sm:w-3" />
                          </Button>
                          <span className="min-w-[30px] border-x border-gray-500 px-2 py-1 text-center text-xs text-white sm:min-w-[40px] sm:px-3 sm:text-sm">
                            {item.cantidad}
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              incrementarCantidad(item.codigo, item.cantidad)
                            }
                            className="h-6 w-6 p-0 text-gray-300 hover:bg-gray-500 hover:text-white sm:h-8 sm:w-8"
                          >
                            <Plus className="h-2 w-2 sm:h-3 sm:w-3" />
                          </Button>
                        </div>
                        <span className="whitespace-nowrap text-xs text-gray-400 sm:text-sm">
                          {item.unmedida}
                        </span>
                      </div>

                      {/* Subtotal */}
                      {item.precio > 0 && (
                        <div className="text-xs sm:text-sm">
                          <span className="text-gray-400">Subtotal: </span>
                          <span className="font-medium text-green-400">
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
                    className="h-6 w-6 self-start p-0 text-red-400 hover:bg-red-900/20 hover:text-red-300 sm:h-8 sm:w-8"
                  >
                    <Trash2 className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                </div>
              ))}

              {/* Total */}
              {total > 0 && (
                <div className="border-t border-gray-600 pt-3 sm:pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-base font-medium text-white sm:text-lg">
                      Total:
                    </span>
                    <span className="text-xl font-bold text-green-400 sm:text-2xl">
                      ${total.toLocaleString("es-AR")}
                    </span>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Formulario de datos del cliente */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 sm:space-y-6"
        >
          <Card className="border-gray-700 bg-gray-800">
            <CardHeader className="pb-3 sm:pb-4">
              <CardTitle className="text-base text-white sm:text-lg">
                Datos del Cliente
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4">
              <div>
                <Label className="text-sm text-gray-300">
                  Nombre de la Empresa *
                </Label>
                <Input
                  {...register("nombreEmpresa", {
                    required: "Nombre de empresa es requerido",
                    onChange: (e) =>
                      actualizarDatosCotizacion({
                        nombreEmpresa: e.target.value,
                      }),
                  })}
                  className="h-9 border-gray-600 bg-gray-700 text-sm text-white sm:h-10"
                  placeholder="Nombre de tu empresa"
                />
                {errors.nombreEmpresa && (
                  <p className="mt-1 text-xs text-red-400">
                    {errors.nombreEmpresa.message}
                  </p>
                )}
              </div>

              <div>
                <Label className="text-sm text-gray-300">Contacto</Label>
                <Input
                  {...register("contacto", {
                    onChange: (e) =>
                      actualizarDatosCotizacion({ contacto: e.target.value }),
                  })}
                  className="h-9 border-gray-600 bg-gray-700 text-sm text-white sm:h-10"
                  placeholder="Nombre del contacto"
                />
              </div>

              <div>
                <Label className="text-sm text-gray-300">Email *</Label>
                <Input
                  type="email"
                  {...register("email", {
                    required: "El email es requerido",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Ingresa un email válido",
                    },
                    onChange: (e) =>
                      actualizarDatosCotizacion({ email: e.target.value }),
                  })}
                  className="h-9 border-gray-600 bg-gray-700 text-sm text-white sm:h-10"
                  placeholder="tu@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <Label className="text-sm text-gray-300">Teléfono</Label>
                <Input
                  {...register("telefono", {
                    onChange: (e) =>
                      actualizarDatosCotizacion({ telefono: e.target.value }),
                  })}
                  className="h-9 border-gray-600 bg-gray-700 text-sm text-white sm:h-10"
                  placeholder="Número de teléfono"
                />
              </div>

              <div>
                <Label className="text-sm text-gray-300">Código Postal *</Label>
                <Input
                  {...register("codigoPostal", {
                    required: "Código postal es requerido",
                    onChange: (e) =>
                      actualizarDatosCotizacion({
                        codigoPostal: e.target.value,
                      }),
                  })}
                  className="h-9 border-gray-600 bg-gray-700 text-sm text-white sm:h-10"
                  placeholder="Código postal"
                />
                {errors.codigoPostal && (
                  <p className="mt-1 text-xs text-red-400">
                    {errors.codigoPostal.message}
                  </p>
                )}
              </div>

              <div>
                <Label className="text-sm text-gray-300">Dirección</Label>
                <Input
                  {...register("direccion", {
                    onChange: (e) =>
                      actualizarDatosCotizacion({ direccion: e.target.value }),
                  })}
                  className="h-9 border-gray-600 bg-gray-700 text-sm text-white sm:h-10"
                  placeholder="Dirección completa"
                />
              </div>

              <div>
                <Label className="text-sm text-gray-300">Observaciones</Label>
                <Textarea
                  {...register("observaciones", {
                    onChange: (e) =>
                      actualizarDatosCotizacion({
                        observaciones: e.target.value,
                      }),
                  })}
                  className="min-h-[60px] border-gray-600 bg-gray-700 text-sm text-white sm:min-h-[80px]"
                  placeholder="Observaciones adicionales..."
                  rows={2}
                />
              </div>
            </CardContent>

            {errorEnvio && (
              <Card className="border-red-700 bg-red-900/20">
                <CardContent className="pt-4 sm:pt-6">
                  <div className="mb-2 flex items-center gap-2 text-red-400">
                    <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="text-sm font-medium sm:text-base">
                      Error al enviar
                    </span>
                  </div>
                  <p className="text-xs text-red-300 sm:text-sm">
                    {errorEnvio}
                  </p>
                </CardContent>
              </Card>
            )}

            <div className="sticky bottom-4 space-y-3 rounded-t-lg border-t border-gray-700 bg-gray-900 p-3 sm:static sm:mx-0 sm:rounded-none sm;border-t-0 sm:bg-transparent  ">
              <Button
                type="submit"
                disabled={enviando || items.length === 0}
                className="w-full"
              >
                {enviando ? (
                  "Enviando..."
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Enviar Cotización
                  </>
                )}
              </Button>
              <Button
                onClick={limpiarCotizacion}
                variant="outline"
                className="h-9 w-full border-gray-600 bg-transparent text-sm text-gray-300 hover:bg-gray-700 sm:h-10"
              >
                Limpiar Cotización
              </Button>
            </div>
          </Card>
        </form>
      </div>
    </div>
  );
}
