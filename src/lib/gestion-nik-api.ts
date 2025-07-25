import type {
  ProductoCotizacion,
  DatosCotizacion,
  GestionNikRequest,
  GestionNikResponse,
  GestionNikProducto,
  EnvioResult,
} from "@/types";

interface CotizacionData {
  items: ProductoCotizacion[];
  datosCotizacion: DatosCotizacion;
  subtotal: number;
  total: number;
  fecha: string;
}

// Función para formatear fecha a AAAAMMDD
function formatearFecha(fecha: Date): string {
  const year = fecha.getFullYear();
  const month = String(fecha.getMonth() + 1).padStart(2, "0");
  const day = String(fecha.getDate()).padStart(2, "0");
  return `${year}${month}${day}`;
}

// Función para formatear hora a HH:MM
function formatearHora(fecha: Date): string {
  const hours = String(fecha.getHours()).padStart(2, "0");
  const minutes = String(fecha.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
}

// Función para generar ID único basado en timestamp
function generarId(): string {
  return Date.now().toString();
}

// Función para construir el JSON de Gestion-Nik
function construirJsonGestionNik(
  cotizacion: CotizacionData
): GestionNikRequest {
  const ahora = new Date();
  const fechaFormateada = formatearFecha(ahora);
  const horaFormateada = formatearHora(ahora);

  // Convertir productos a formato Gestion-Nik
  const productos: GestionNikProducto[] = cotizacion.items.map((item) => ({
    CodProducto: item.codigo,
    CodSku: item.codigo, // Usar el mismo código como SKU
    Detalle: item.descripcion,
    Cantidad: item.cantidad.toString(),
    UnitBruto: item.precio.toFixed(2),
    DesPor: "0.00", // Sin descuento
    UnitNeto: item.precio.toFixed(2),
  }));

  return {
    Id: generarId(),
    TipoComp: "COT", // Cotización
    Nombre:
      cotizacion.datosCotizacion.nombreEmpresa ||
      cotizacion.datosCotizacion.contacto,
    Telefono: cotizacion.datosCotizacion.telefono,
    Latitud: "0", // No disponible
    Longitud: "0", // No disponible
    Direccion: cotizacion.datosCotizacion.direccion,
    Localidad: "General Pico", // Por defecto
    Provincia: "La Pampa", // Por defecto
    email: cotizacion.datosCotizacion.email,
    CodPostal: cotizacion.datosCotizacion.codigoPostal,
    Fecha: fechaFormateada,
    FechaEntrega: fechaFormateada,
    Hora: horaFormateada,
    DniCuit: "0", // No disponible
    CodCliente: "0", // Usar CONSUMIDOR FINAL
    Moneda: "PESOS",
    VerifStock: "NO", // No verificar stock
    IdApExterna: "AisplacApp",
    Nota:
      cotizacion.datosCotizacion.observaciones ||
      "Cotización generada desde Aisplac App",
    Token: process.env.NIK_TOKEK,
    Productos: productos,
    Servicios: [], // Sin servicios por ahora
  };
}

// Función para interpretar errores de Gestion-Nik
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

// Función principal para enviar cotización
export async function enviarCotizacionGestionNik(
  cotizacion: CotizacionData
): Promise<EnvioResult> {
  try {
    // Validaciones básicas
    if (!cotizacion.datosCotizacion.email) {
      return {
        success: false,
        error: "El email es requerido para enviar la cotización",
      };
    }

    if (cotizacion.items.length === 0) {
      return {
        success: false,
        error: "No hay productos en la cotización",
      };
    }

    // Construir JSON para Gestion-Nik
    const jsonRequest = construirJsonGestionNik(cotizacion);

    // Convertir a JSON string y codificar para URL
    const jsonString = JSON.stringify(jsonRequest);
    const encodedJson = encodeURIComponent(jsonString);

    // Construir URL
    const url = `https://aisplacsrl.gestionnik.com/aisplacsrl/SaveOrder/${encodedJson}`;

    console.log("🔗 URL de envío:", url.substring(0, 200) + "...");
    console.log("📋 Datos enviados:", jsonRequest);

    // Realizar petición
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "User-Agent": "Aisplac-App/1.0",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const responseText = await response.text();
    console.log("📥 Respuesta cruda:", responseText);

    // Parsear respuesta
    let responseData: GestionNikResponse;

    try {
      responseData = JSON.parse(responseText);
    } catch {
      return {
        success: false,
        error: "Respuesta inválida del servidor",
      };
    }

    // Verificar si hay error
    if (responseData.Error === "SI") {
      const errorMessage = interpretarError(responseData.Codigo);
      return {
        success: false,
        error: `${errorMessage}: ${responseData.Descripcion}`,
      };
    }

    // Verificar éxito
    if (responseData.Error === "NO" && responseData.Codigo === "200") {
      return {
        success: true,
        data: responseData,
      };
    }

    // Caso no contemplado
    return {
      success: false,
      error: `Respuesta inesperada: ${responseData.Descripcion}`,
    };
  } catch (error) {
    console.error("❌ Error en enviarCotizacionGestionNik:", error);

    if (error instanceof Error) {
      if (error.name === "AbortError") {
        return {
          success: false,
          error: "Tiempo de espera agotado. Intenta nuevamente.",
        };
      }

      return {
        success: false,
        error: error.message,
      };
    }

    return {
      success: false,
      error: "Error desconocido al enviar cotización",
    };
  }
}
