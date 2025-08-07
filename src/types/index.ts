// Tipos principales de la aplicación

export interface Categoria {
  codigo: string;
  descripcion: string;
  urlimg: string;
}

export interface ProductoRelacionado extends Partial<Producto> {
  codigo: string;
  personal: string;
  descripcion: string;
  urlimg: string;
}

export interface Producto {
  codigo: string;
  personal: string;
  descripcion: string;
  unmedida: string;
  precio: number;
  codcategoria: string;
  pesogramos: number;
  codsubcategoria: string;
  uxb: number;
  stock: number;
  activo: boolean;
  timestamp: string;
  uxf: string;
  urlimg: string;
  Fotos: { urlimg: string }[];
  ProdRelacionados: ProductoRelacionado[];
}

export interface ProductoCotizacion {
  codigo: string;
  descripcion: string;
  precio: number;
  unmedida: string;
  urlimg: string;
  cantidad: number;
  codcategoria: string;
  observaciones?: string;
}

export interface DatosCotizacion {
  nombreEmpresa: string;
  contacto: string;
  email: string;
  telefono: string;
  codigoPostal: string;
  direccion: string;
  observaciones: string;
  fechaVencimiento: string;
}

export interface ApiResponse<T> {
  data: T | null;
  error: string | null;
}

// Tipos para respuestas de Gestion-Nik
export interface GestionNikResponse {
  Error: string;
  Tipo?: string;
  Codigo: string;
  Descripcion: string;
  Referencia?: string;
  Comprobante?: string;
  StockDisponible?: string;
  Producto?: string;
}

export interface GestionNikRequest {
  Id: string;
  TipoComp: string;
  Nombre: string;
  Telefono: string;
  Latitud: string;
  Longitud: string;
  Direccion: string;
  Localidad: string;
  Provincia: string;
  email: string;
  CodPostal: string;
  Fecha: string;
  FechaEntrega: string;
  Hora: string;
  DniCuit: string;
  CodCliente: string;
  Moneda: string;
  VerifStock: string;
  IdApExterna: string;
  Nota: string;
  Token: string | undefined;
  Productos: GestionNikProducto[];
  Servicios: GestionNikServicio[];
}

export interface GestionNikProducto {
  CodProducto: string;
  CodSku: string;
  Detalle: string;
  Cantidad: string;
  UnitBruto: string;
  DesPor: string;
  UnitNeto: string;
}

export interface GestionNikServicio {
  CodServicio: string;
  CodSku: string;
  Detalle: string;
  Cantidad: string;
  Unitario: string;
}

// Tipos para el estado de la aplicación
export interface CotizacionState {
  items: ProductoCotizacion[];
  datosCotizacion: DatosCotizacion;
  subtotal: number;
  total: number;
  enviando: boolean;
  ultimoEnvio: string | null;
  errorEnvio: string | null;
  referenciaGestionNik: string | null;
  urlComprobante: string | null;
  cotizacionEnviada: boolean;
  resetearEstadoExito: () => void;
}

// Props de componentes
export interface CategoryCardProps {
  categoria: Categoria;
}

export interface CategoriasClientProps {
  categorias: Categoria[];
}

export interface ProductosClientProps {
  productos: Producto[];
  codigoCategoria: string;
}

export interface ProductosServerProps {
  codigoCategoria: string;
}

export interface AgregarCotizacionButtonProps {
  producto: Omit<ProductoCotizacion, "cantidad" | "observaciones">;
  showQuantityControls?: boolean;
}

export interface SearchInputProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  className?: string;
}

export interface EnvioResult {
  success: boolean;
  data?: GestionNikResponse;
  error?: string;
}

// Tipos para acciones del store
export interface CotizacionActions {
  // Acciones para productos
  agregarProducto: (
    producto: Omit<ProductoCotizacion, "cantidad" | "observaciones">,
    cantidad?: number
  ) => void;
  removerProducto: (codigo: string) => void;
  actualizarCantidad: (codigo: string, cantidad: number) => void;
  actualizarObservaciones: (codigo: string, observaciones: string) => void;

  // Acciones para datos de cotización
  actualizarDatosCotizacion: (datos: Partial<DatosCotizacion>) => void;

  // Acciones para descuentos y totales
  calcularTotales: () => void;

  // Acciones para envío
  enviarCotizacion: () => Promise<boolean>;
  setEnviando: (enviando: boolean) => void;
  setErrorEnvio: (error: string | null) => void;

  // Utilidades
  limpiarCotizacion: () => void;
  obtenerCantidadProducto: (codigo: string) => number;
  estaEnCotizacion: (codigo: string) => boolean;
  exportarCotizacion: () => void;
}

// Tipo combinado para el store
export type CotizacionStore = CotizacionState & CotizacionActions;

// Props para páginas
export interface PageProps {
  params: {
    codigo: string;
    categoria?: string;
  };
  searchParams?: {
    categoria?: string;
    [key: string]: string | string[] | undefined;
  };
}

export interface CategoriaPageProps {
  params: {
    categoria: string;
  };
}

export interface ProductoPageProps {
  params: {
    codigo: string;
  };
  searchParams: {
    categoria?: string;
  };
}

// Props para componentes de error
export interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

import type { Image as SanityImage, PortableTextBlock, Slug } from "sanity";

// Interfaz para los campos de imagen personalizados
export interface ImageWithAlt extends SanityImage {
  alt?: string;
  caption?: string;
}

// Interfaz para los bloques de video embebido en el contenido
export interface VideoEmbedBlock {
  _type: "videoEmbed";
  _key: string;
  url: string;
  caption?: string;
  aspectRatio?: "16:9" | "9:16" | "1:1";
}

// Interfaz para los bloques de separador en el contenido
export interface SeparatorBlock {
  _type: "separator";
  _key: string;
  style?: "line" | "thick" | "dots";
}

// Interfaz para las imágenes dentro del contenido
export interface ContentImageBlock extends ImageWithAlt {
  _type: "image";
  _key: string;
  size?: "small" | "medium" | "large" | "full";
  alignment?: "left" | "center" | "right";
}

// Unión de todos los tipos de bloques de contenido posibles
export type ArticleContent = Array<
  PortableTextBlock | ContentImageBlock | VideoEmbedBlock | SeparatorBlock
>;

// Interfaz para un artículo completo (usado en la página de detalle)
export interface Article {
  _id: string;
  title: string;
  subtitle?: string;
  slug: Slug;
  author?: string;
  mainImage: ImageWithAlt;
  content: ArticleContent;
  gallery?: ImageWithAlt[];
  publishedAt: string;
  featured?: boolean;
}

// Interfaz para la previsualización de un artículo (usado en la página de listado)
export interface ArticlePreview {
  _id: string;
  title: string;
  subtitle?: string;
  slug: string;
  mainImage: ImageWithAlt;
  publishedAt: string;
}
