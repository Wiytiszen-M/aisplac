import { NextResponse } from "next/server";
import "server-only";

import type {
  ProductoCotizacion,
  DatosCotizacion,
  GestionNikRequest,
  GestionNikResponse,
  EnvioResult,
} from "@/types";

interface CotizacionData {
  items: ProductoCotizacion[];
  datosCotizacion: DatosCotizacion;
  subtotal: number;
  total: number;
  fecha: string;
}

function formatearFecha(fecha: Date): string {
  const y = fecha.getFullYear();
  const m = String(fecha.getMonth() + 1).padStart(2, "0");
  const d = String(fecha.getDate()).padStart(2, "0");
  return `${y}${m}${d}`;
}
function formatearHora(fecha: Date): string {
  const h = String(fecha.getHours()).padStart(2, "0");
  const min = String(fecha.getMinutes()).padStart(2, "0");
  return `${h}:${min}`;
}
function generarId(): string {
  return Date.now().toString();
}

function construirJsonGestionNik(
  cotizacion: CotizacionData,
  token: string
): GestionNikRequest {
  const ahora = new Date();
  const productos = cotizacion.items.map((item) => ({
    CodProducto: item.codigo,
    CodSku: item.codigo,
    Detalle: item.descripcion,
    Cantidad: item.cantidad.toString(),
    UnitBruto: item.precio.toFixed(2),
    DesPor: "0.00",
    UnitNeto: item.precio.toFixed(2),
  }));

  return {
    Id: generarId(),
    TipoComp: "COT",
    Nombre:
      cotizacion.datosCotizacion.nombreEmpresa ||
      cotizacion.datosCotizacion.contacto,
    Telefono: cotizacion.datosCotizacion.telefono,
    Latitud: "0",
    Longitud: "0",
    Direccion: cotizacion.datosCotizacion.direccion,
    Localidad: "General Pico",
    Provincia: "La Pampa",
    email: cotizacion.datosCotizacion.email,
    CodPostal: cotizacion.datosCotizacion.codigoPostal,
    Fecha: formatearFecha(ahora),
    FechaEntrega: formatearFecha(ahora),
    Hora: formatearHora(ahora),
    DniCuit: "0",
    CodCliente: "0",
    Moneda: "PESOS",
    VerifStock: "NO",
    IdApExterna: "AisplacApp",
    Nota:
      cotizacion.datosCotizacion.observaciones ||
      "Cotización generada desde Aisplac App",
    Token: token, // <- viene del server env
    Productos: productos,
    Servicios: [],
  };
}

function interpretarError(codigo: string): string {
  const errores: Record<string, string> = {
    "-1": "La moneda no fue encontrada",
    "-2": "La provincia no fue encontrada",
    "-3": "La provincia no contiene la localidad especificada",
    "-4": "Cliente no encontrado",
    "-5": "No se ha encontrado un cliente CONSUMIDOR FINAL",
    "-6": "Fecha no válida",
    "-7": "Error al guardar el encabezado del comprobante",
    "-8": "Error al guardar los productos del comprobante",
    "-9": "Error al guardar los servicios del comprobante",
    "-10": "La Localidad no puede quedar en blanco",
    "1": "La moneda no fue encontrada",
    "2": "La provincia no fue encontrada",
    "3": "La provincia no contiene la localidad especificada",
    "4": "Cliente no encontrado",
    "5": "No se ha encontrado un cliente CONSUMIDOR FINAL",
    "6": "Fecha no válida",
    "7": "Error al guardar el encabezado del comprobante",
    "8": "Error al guardar los productos del comprobante",
    "9": "Error al guardar los servicios del comprobante",
    "10": "La Localidad no puede quedar en blanco",
  };
  return errores[codigo] || `Error desconocido (código: ${codigo})`;
}

export async function POST(req: Request) {
  try {
    const NIK_TOKEN = process.env.NIK_TOKEN;
    if (!NIK_TOKEN) {
      return NextResponse.json<EnvioResult>(
        { success: false, error: "NIK_TOKEN no configurado en el servidor" },
        { status: 500 }
      );
    }

    const cotizacion = (await req.json()) as CotizacionData;

    if (!cotizacion.datosCotizacion.email) {
      return NextResponse.json<EnvioResult>(
        {
          success: false,
          error: "El email es requerido para enviar la cotización",
        },
        { status: 400 }
      );
    }
    if (cotizacion.items.length === 0) {
      return NextResponse.json<EnvioResult>(
        { success: false, error: "No hay productos en la cotización" },
        { status: 400 }
      );
    }

    const payload = construirJsonGestionNik(cotizacion, NIK_TOKEN);
    const encoded = encodeURIComponent(JSON.stringify(payload));
    const url = `https://aisplacsrl.gestionnik.com/aisplacsrl/SaveOrder/${encoded}`;

    const res = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "User-Agent": "Aisplac-App/1.0",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      return NextResponse.json<EnvioResult>(
        { success: false, error: `HTTP ${res.status}: ${res.statusText}` },
        { status: res.status }
      );
    }

    const text = await res.text();
    let data: GestionNikResponse;
    try {
      data = JSON.parse(text) as GestionNikResponse;
    } catch {
      return NextResponse.json<EnvioResult>(
        { success: false, error: "Respuesta inválida del servidor" },
        { status: 502 }
      );
    }

    if (data.Error === "SI") {
      const msg = interpretarError(data.Codigo);
      return NextResponse.json<EnvioResult>(
        { success: false, error: `${msg}: ${data.Descripcion}` },
        { status: 400 }
      );
    }

    if (data.Error === "NO" && data.Codigo === "200") {
      return NextResponse.json<EnvioResult>({ success: true, data });
    }

    return NextResponse.json<EnvioResult>(
      { success: false, error: `Respuesta inesperada: ${data.Descripcion}` },
      { status: 500 }
    );
  } catch (err) {
    const message =
      err instanceof Error
        ? err.name === "AbortError"
          ? "Tiempo de espera agotado. Intenta nuevamente."
          : err.message
        : "Error desconocido al enviar cotización";

    return NextResponse.json<EnvioResult>(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
