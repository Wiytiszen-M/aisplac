"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"
import { enviarCotizacionGestionNik } from "@/lib/gestion-nik-api"
import type { DatosCotizacion, CotizacionStore } from "@/types"

const datosCotizacionIniciales: DatosCotizacion = {
  nombreEmpresa: "",
  contacto: "",
  email: "",
  telefono: "",
  codigoPostal: "",
  direccion: "",
  observaciones: "",
  fechaVencimiento: "",
}

export const useCotizacionStore = create<CotizacionStore>()(
  persist(
    (set, get) => ({
      items: [],
      datosCotizacion: datosCotizacionIniciales,
      subtotal: 0,
      total: 0,
      enviando: false,
      ultimoEnvio: null,
      errorEnvio: null,
      referenciaGestionNik: null,
      urlComprobante: null,
      cotizacionEnviada: false,


      agregarProducto: (producto, cantidad = 1) => {
        const { items } = get()
        const existingItem = items.find((item) => item.codigo === producto.codigo)

        if (existingItem) {
          set((state) => ({
            items: state.items.map((item) =>
              item.codigo === producto.codigo ? { ...item, cantidad: item.cantidad + cantidad } : item,
            ),
          }))
        } else {
          set((state) => ({
            items: [...state.items, { ...producto, cantidad, observaciones: "" }],
          }))
        }
        if (get().cotizacionEnviada) {
          set({ cotizacionEnviada: false })
        }

        get().calcularTotales()
      },

      removerProducto: (codigo) => {
        set((state) => ({
          items: state.items.filter((item) => item.codigo !== codigo),
        }))
        get().calcularTotales()
      },

      actualizarCantidad: (codigo, cantidad) => {
        if (cantidad <= 0) {
          get().removerProducto(codigo)
          return
        }

        set((state) => ({
          items: state.items.map((item) => (item.codigo === codigo ? { ...item, cantidad } : item)),
        }))
        get().calcularTotales()
      },

      actualizarObservaciones: (codigo, observaciones) => {
        set((state) => ({
          items: state.items.map((item) => (item.codigo === codigo ? { ...item, observaciones } : item)),
        }))
      },

      actualizarDatosCotizacion: (datos) => {
        set((state) => ({
          datosCotizacion: { ...state.datosCotizacion, ...datos },
        }))
      },

      calcularTotales: () => {
        const { items } = get()
        const subtotal = items.reduce((sum, item) => {
          return sum + item.precio * item.cantidad
        }, 0)
        set({ subtotal, total: subtotal })
      },

      enviarCotizacion: async () => {
        const state = get()

        try {
          set({ enviando: true, errorEnvio: null })

          const cotizacionData = {
            items: state.items,
            datosCotizacion: state.datosCotizacion,
            subtotal: state.subtotal,
            total: state.total,
            fecha: new Date().toISOString(),
          }

          console.log("📤 Enviando cotización a Gestion-Nik...")

          // Enviar a Gestion-Nik
          const resultado = await enviarCotizacionGestionNik(cotizacionData)

          if (resultado.success && resultado.data) {
            set({
              ultimoEnvio: new Date().toISOString(),
              errorEnvio: null,
              referenciaGestionNik: resultado.data.Referencia || null,
              urlComprobante: resultado.data.Comprobante || null,
              cotizacionEnviada: true,
              // Resetear productos después del envío exitoso
              items: [],
              subtotal: 0,
              total: 0,
            })

            console.log("✅ Cotización enviada exitosamente:", {
              referencia: resultado.data.Referencia,
              comprobante: resultado.data.Comprobante,
            })

            return true
          } else {
            throw new Error(resultado.error || "Error desconocido al enviar cotización")
          }
        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : "Error desconocido"
          console.error("❌ Error al enviar cotización:", errorMessage)
          set({ errorEnvio: errorMessage })
          return false
        } finally {
          set({ enviando: false })
        }
      },
      nuevaCotizacion: () => {
        set({
          items: [],
          subtotal: 0,
          total: 0,
          errorEnvio: null,
          referenciaGestionNik: null,
          urlComprobante: null,
          cotizacionEnviada: false,
          ultimoEnvio: null,
          // Mantener datosCotizacion para facilitar nuevas cotizaciones
        })
      },

      setEnviando: (enviando) => set({ enviando }),
      setErrorEnvio: (errorEnvio) => set({ errorEnvio }),

      limpiarCotizacion: () => {
        set({
          items: [],
          datosCotizacion: datosCotizacionIniciales,
          subtotal: 0,
          total: 0,
          errorEnvio: null,
          referenciaGestionNik: null,
          urlComprobante: null,
          cotizacionEnviada: false,
          ultimoEnvio: null,
        })
      },

      resetearEstadoExito: () => {
        set({ cotizacionEnviada: false })
      },

      obtenerCantidadProducto: (codigo) => {
        const { items } = get()
        const item = items.find((item) => item.codigo === codigo)
        return item?.cantidad || 0
      },

      estaEnCotizacion: (codigo) => {
        const { items } = get()
        return items.some((item) => item.codigo === codigo)
      },

      exportarCotizacion: () => {
        const state = get()
        return {
          items: state.items,
          datosCotizacion: state.datosCotizacion,
          subtotal: state.subtotal,
          total: state.total,
          fecha: new Date().toISOString(),
          referenciaGestionNik: state.referenciaGestionNik,
          urlComprobante: state.urlComprobante,
        }
      },
    }),
    {
      name: "cotizacion-storage",
    },
  ),
)
