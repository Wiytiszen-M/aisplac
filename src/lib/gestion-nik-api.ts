import type { EnvioResult } from "@/types";

import type { ProductoCotizacion, DatosCotizacion } from "@/types";

interface CotizacionData {
  items: ProductoCotizacion[];
  datosCotizacion: DatosCotizacion;
  subtotal: number;
  total: number;
  fecha: string;
}

export async function enviarCotizacionGestionNik(
  cotizacion: CotizacionData
): Promise<EnvioResult> {
  const resp = await fetch("/api/cotizacion", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cotizacion),
  });

  if (!resp.ok) {
    return {
      success: false,
      error: `HTTP ${resp.status}: ${resp.statusText}`,
    };
  }

  const data = (await resp.json()) as EnvioResult;
  return data;
}
