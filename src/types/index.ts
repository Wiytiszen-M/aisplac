// Tipos principales de la aplicación

export interface Categoria {
  codigo: string
  descripcion: string
  img: string
}

export interface Producto {
  codigo: string
  personal: string
  descripcion: string
  unmedida: string
  precio: number
  codcategoria: string
  pesogramos: number
  codsubcategoria: string
  uxb: number
  stock: number
  activo: boolean
  timestamp: string
  uxf: string
  urlimg: string
}

export interface ProductoCotizacion {
  codigo: string
  descripcion: string
  precio: number
  unmedida: string
  urlimg: string
  cantidad: number
  codcategoria: string
  observaciones?: string
}

export interface DatosCotizacion {
  nombreEmpresa: string
  contacto: string
  email: string
  telefono: string
  codigoPostal: string
  direccion: string
  observaciones: string
  fechaVencimiento: string
}

export interface ApiResponse<T> {
  data: T | null
  error: string | null
}

// Tipos para respuestas de Gestion-Nik
export interface GestionNikResponse {
  Error: string
  Tipo?: string
  Codigo: string
  Descripcion: string
  Referencia?: string
  Comprobante?: string
  StockDisponible?: string
  Producto?: string
}

export interface GestionNikRequest {
  Id: string
  TipoComp: string
  Nombre: string
  Telefono: string
  Latitud: string
  Longitud: string
  Direccion: string
  Localidad: string
  Provincia: string
  email: string
  CodPostal: string
  Fecha: string
  FechaEntrega: string
  Hora: string
  DniCuit: string
  CodCliente: string
  Moneda: string
  VerifStock: string
  IdApExterna: string
  Nota: string
  Token: string
  Productos: GestionNikProducto[]
  Servicios: GestionNikServicio[]
}

export interface GestionNikProducto {
  CodProducto: string
  CodSku: string
  Detalle: string
  Cantidad: string
  UnitBruto: string
  DesPor: string
  UnitNeto: string
}

export interface GestionNikServicio {
  CodServicio: string
  CodSku: string
  Detalle: string
  Cantidad: string
  Unitario: string
}

// Tipos para el estado de la aplicación
export interface CotizacionState {
  items: ProductoCotizacion[]
  datosCotizacion: DatosCotizacion
  subtotal: number
  total: number
  enviando: boolean
  ultimoEnvio: string | null
  errorEnvio: string | null
  referenciaGestionNik: string | null
  urlComprobante: string | null
  cotizacionEnviada: boolean
  resetearEstadoExito: () => void

}

// Props de componentes
export interface CategoryCardProps {
  categoria: Categoria
}

export interface ProductCardProps {
  producto: Producto
  codigoCategoria: string
}

export interface CategoriasClientProps {
  categorias: Categoria[]
}

export interface ProductosClientProps {
  productos: Producto[]
  codigoCategoria: string
}

export interface ProductosServerProps {
  codigoCategoria: string
}

export interface ProductosRelacionadosProps {
  codigoCategoria: string
  codigoProductoActual: string
  limite?: number
}

export interface AgregarCotizacionButtonProps {
  producto: Omit<ProductoCotizacion, "cantidad" | "observaciones">
  showQuantityControls?: boolean
}

export interface SearchInputProps {
  onSearch: (query: string) => void
  placeholder?: string
  className?: string
}


export interface EnvioResult {
  success: boolean
  data?: GestionNikResponse
  error?: string
}

// Tipos para acciones del store
export interface CotizacionActions {
  // Acciones para productos
  agregarProducto: (producto: Omit<ProductoCotizacion, "cantidad" | "observaciones">, cantidad?: number) => void
  removerProducto: (codigo: string) => void
  actualizarCantidad: (codigo: string, cantidad: number) => void
  actualizarObservaciones: (codigo: string, observaciones: string) => void

  // Acciones para datos de cotización
  actualizarDatosCotizacion: (datos: Partial<DatosCotizacion>) => void

  // Acciones para descuentos y totales
  calcularTotales: () => void

  // Acciones para envío
  enviarCotizacion: () => Promise<boolean>
  setEnviando: (enviando: boolean) => void
  setErrorEnvio: (error: string | null) => void

  // Utilidades
  limpiarCotizacion: () => void
  obtenerCantidadProducto: (codigo: string) => number
  estaEnCotizacion: (codigo: string) => boolean
  exportarCotizacion: () => void
}

// Tipo combinado para el store
export type CotizacionStore = CotizacionState & CotizacionActions

// Props para páginas
export interface PageProps {
  params: {
    codigo: string
    categoria?: string
  }
  searchParams?: {
    categoria?: string
    [key: string]: string | string[] | undefined
  }
}

export interface CategoriaPageProps {
  params: {
    categoria: string
  }
}

export interface ProductoPageProps {
  params: {
    codigo: string
  }
  searchParams: {
    categoria?: string
  }
}

// Props para componentes de error
export interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}
