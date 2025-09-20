"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Trash2, Plus, FileText, Calculator, Loader2 } from "lucide-react";
import { useCotizacionStore } from "@/stores/cotizacion-store";
import { useClickProtection } from "@/hooks/use-click-protection";
import { getPVCProducts } from "@/lib/product-search";
import type { Producto } from "@/types";
import Image from "next/image";

export type PVCColor = {
  id: string;
  name: string;
  code: string;
  description: string;
  image: string;
  producto?: Producto;
};

export type Room = {
  id: string;
  name: string;
  width: string;
  length: string;
  colorId: string;
  calculationDetails?: CalculationDetails;
  materials?: Material[];
};

export type Material = {
  id: string;
  code: string;
  description: string;
  quantity: number;
  unit: string;
  price?: number;
  total?: number;
  producto?: Producto;
};

type CalculationDetails = {
  mo: number;
  ma: number;
  vr: number;
  totalPerfileriaMF: number;
  pr: number;
  prUnits: number;
  pvcCount: number;
  pvcLength: number;
  pvcTotal: number;
  t1Calculation1: number;
  t1Calculation2: number;
  t1Total: number;
  t1A1: number;
  t1A2: number;
  t1ATotal: number;
  t3A: number;
  t3ATotal: number;
  fijaciones: number;
  fijacionesTotal: number;
};

const PVC_COLORS: PVCColor[] = [
  {
    id: "white",
    name: "Blanco",
    code: "685",
    description: "PANEL PVC 200 X 10MM (BLANCO)",
    image: "/logo.svg",
  },
  {
    id: "fresno",
    name: "Fresno Almendro",
    code: "1543",
    description: "PANEL PVC 200 X 10 (FRESNO ALMENDRO)",
    image: "/logo.svg",
  },
  {
    id: "negro",
    name: "Negro",
    code: "1907",
    description: "PANEL PVC 200 X 10 (NEGRO)",
    image: "/logo.svg",
  },
  {
    id: "valencia",
    name: "Valencia",
    code: "1847",
    description: "PANEL PVC 200 X 10 (VALENCIA)",
    image: "/logo.svg",
  },
];

export function PVCCeilingCalculator() {
  const [rooms, setRooms] = useState<Room[]>([
    {
      id: "1",
      name: "Ambiente 1",
      width: "0",
      length: "0",
      colorId: "white",
    },
  ]);
  const [isCalculating, setIsCalculating] = useState(false);
  const [calculationDone, setCalculationDone] = useState(false);
  const [selectedTab, setSelectedTab] = useState<string>("1");
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [pvcColors, setPvcColors] = useState<PVCColor[]>(PVC_COLORS);
  const [productsLoaded, setProductsLoaded] = useState(false);

  const { agregarProducto } = useCotizacionStore();
  const { isProcessing, executeWithProtection } = useClickProtection({
    cooldownMs: 1000,
    maxClicksPerSecond: 1,
  });

  const MODULACION = 0.6;
  const MAESTRAS = 1.2;
  const V_RIGIDA = 0.5;

  useEffect(() => {
    const loadProducts = async () => {
      setLoadingProducts(true);
      try {
        const productosEncontrados = await getPVCProducts();
        const coloresActualizados = pvcColors.map((color) => {
          const producto = productosEncontrados.get(color.code);
          if (producto) {
            console.log("🔍 Productos en el if", producto);

            return {
              ...color,
              description: producto.descripcion,
              image: producto.Fotos[0].urlimg || color.image,
              producto: producto,
            };
          }
          return color;
        });

        setPvcColors(coloresActualizados);
        setProductsLoaded(true);
      } catch (error) {
        console.error("❌ Error cargando productos PVC:", error);
      } finally {
        setLoadingProducts(false);
      }
    };

    if (!productsLoaded) {
      loadProducts();
    }
  }, [productsLoaded, pvcColors]);

  const addRoom = () => {
    if (rooms.length >= 10) {
      return;
    }

    const newRoom: Room = {
      id: Date.now().toString(),
      name: `Ambiente ${rooms.length + 1}`,
      width: "4",
      length: "9",
      colorId: "white",
    };

    setRooms([...rooms, newRoom]);
    setSelectedTab(newRoom.id);
  };

  const removeRoom = (id: string) => {
    if (rooms.length === 1) {
      return;
    }

    const filteredRooms = rooms.filter((room) => room.id !== id);
    setRooms(filteredRooms);

    if (selectedTab === id) {
      setSelectedTab(filteredRooms[0].id);
    }
  };

  const updateRoom = (id: string, field: keyof Room, value: string) => {
    setRooms(
      rooms.map((room) => {
        if (room.id === id) {
          return { ...room, [field]: value };
        }
        return room;
      })
    );
    setCalculationDone(false);
  };

  const calculateMaterials = async () => {
    setIsCalculating(true);

    const invalidRooms = rooms.filter((room) => {
      const width = Number.parseFloat(room.width);
      const length = Number.parseFloat(room.length);
      return isNaN(width) || width <= 0 || isNaN(length) || length <= 0;
    });

    if (invalidRooms.length > 0) {
      setIsCalculating(false);
      return;
    }

    try {
      const updatedRooms = await Promise.all(
        rooms.map(async (room) => {
          const width = Number.parseFloat(room.width);
          const length = Number.parseFloat(room.length);

          const mo = Math.ceil(((width / MODULACION) * length) / 4);
          const ma = Math.ceil(((length / MAESTRAS) * width) / 4);
          const vr = Math.ceil(
            (((width / MODULACION) * length +
              (length / MAESTRAS) * width * V_RIGIDA) *
              0.22) /
              4
          );
          const totalPerfileriaMF = mo + ma + vr;

          const pr = Math.ceil((width + length) * 2);
          const prUnits = Math.ceil(pr / 2.6);

          const pvcCount = Math.ceil(length / 0.2);
          const pvcLength = width + 0.05;
          const pvcTotal = pvcCount * pvcLength;

          const t1Calculation1 = Math.ceil(
            (width / MODULACION + length / MAESTRAS) * 2
          );
          const t1Calculation2 = Math.ceil(
            (width / MODULACION) * length +
              (length / MAESTRAS) * width * 0.22 * 4
          );
          const t1Total = Math.ceil(t1Calculation1 + t1Calculation2);

          const t1A1 = pvcCount;
          const t1A2 = Math.ceil(width / MODULACION);
          const t1ATotal = t1A1 * t1A2;

          const t3A = (width / MODULACION) * (length / MAESTRAS);
          const t3ATotal = Math.ceil(t3A);

          const fijaciones = prUnits * 5;
          const fijacionesTotal = Math.ceil(fijaciones);

          const calculationDetails: CalculationDetails = {
            mo,
            ma,
            vr,
            totalPerfileriaMF,
            pr,
            prUnits,
            pvcCount,
            pvcLength,
            pvcTotal,
            t1Calculation1,
            t1Calculation2,
            t1Total,
            t1A1,
            t1A2,
            t1ATotal,
            t3A,
            t3ATotal,
            fijaciones,
            fijacionesTotal,
          };

          const productosReales = await getPVCProducts();

          const materials: Material[] = [
            {
              id: "1.1",
              code: pvcColors.find((c) => c.id === room.colorId)?.code || "685",
              description:
                pvcColors.find((c) => c.id === room.colorId)?.description ||
                "PANEL PVC 200 X 10MM (BLANCO)",
              quantity: Math.ceil(pvcTotal),
              unit: "MTS",
              producto: productosReales.get(
                pvcColors.find((c) => c.id === room.colorId)?.code || "685"
              ),
              price:
                productosReales.get(
                  pvcColors.find((c) => c.id === room.colorId)?.code || "685"
                )?.precio || 0,
            },
            {
              id: "1.2",
              code:
                room.colorId === "white"
                  ? "141"
                  : room.colorId === "fresno"
                    ? "1554"
                    : room.colorId === "negro"
                      ? "1908"
                      : "141",
              description:
                room.colorId === "white"
                  ? "PERFIL DE BORDE DE 10MM X 3 MT"
                  : room.colorId === "fresno"
                    ? "PERFIL DE BORDE DE 10MM X 3MT (FRESNO ALMENDRO)"
                    : room.colorId === "negro"
                      ? "PERFIL DE BORDE DE 10MM X 3MT (NEGRO)"
                      : "PERFIL DE BORDE DE 10MM X 3 MT",
              quantity: Math.ceil(pr / 3),
              unit: "UND",
              producto: productosReales.get(
                room.colorId === "white"
                  ? "141"
                  : room.colorId === "fresno"
                    ? "1554"
                    : room.colorId === "negro"
                      ? "1908"
                      : "141"
              ),
              price:
                productosReales.get(
                  room.colorId === "white"
                    ? "141"
                    : room.colorId === "fresno"
                      ? "1554"
                      : room.colorId === "negro"
                        ? "1908"
                        : "141"
                )?.precio || 0,
            },
            {
              id: "1.3",
              code: "167",
              description: "F-47 X 4,00 ML",
              quantity: totalPerfileriaMF,
              unit: "UND",
              producto: productosReales.get("167"),
              price: productosReales.get("167")?.precio || 0,
            },
            {
              id: "1.4",
              code: "85",
              description: "PERFIL U X 2,60 ML",
              quantity: prUnits,
              unit: "UND",
              producto: productosReales.get("85"),
              price: productosReales.get("85")?.precio || 0,
            },
            {
              id: "1.5",
              code: "373",
              description: "TORNILLO T1 MECHA 8X9/16 CORTO",
              quantity: t1Total,
              unit: "UND",
              producto: productosReales.get("373"),
              price: productosReales.get("373")?.precio || 0,
            },
            {
              id: "1.6",
              code: "385",
              description: "TORNILLO T1 AGUJA- 8 X 9/16 BRILLANTE",
              quantity: t1ATotal,
              unit: "UND",
              producto: productosReales.get("385"),
              price: productosReales.get("385")?.precio || 0,
            },
            {
              id: "1.7",
              code: "379",
              description: "TORNILLO T3 MECHA",
              quantity: t3ATotal,
              unit: "UND",
              producto: productosReales.get("379"),
              price: productosReales.get("379")?.precio || 0,
            },
            {
              id: "1.8",
              code: "388",
              description: "TORNILLO 8MM. - MADERA 8 X 1 3/4",
              quantity: Math.ceil(fijacionesTotal / 2),
              unit: "UND",
              producto: productosReales.get("388"),
              price: productosReales.get("388")?.precio || 0,
            },
            {
              id: "1.9",
              code: "456",
              description: "TARUGO 6MM. C/ TOPE",
              quantity: Math.ceil(fijacionesTotal / 2),
              unit: "UND",
              producto: productosReales.get("456"),
              price: productosReales.get("456")?.precio || 0,
            },
          ];

          return {
            ...room,
            calculationDetails,
            materials,
          };
        })
      );

      setTimeout(() => {
        setRooms(updatedRooms);
        setIsCalculating(false);
        setCalculationDone(true);
      }, 800);
    } catch (error) {
      console.error("Error en cálculo:", error);
      setIsCalculating(false);
    }
  };

  const addToQuote = async () => {
    const success = await executeWithProtection(async () => {
      const calculatedRooms = rooms.filter(
        (room) => room.materials && room.calculationDetails
      );

      if (calculatedRooms.length === 0) {
        return;
      }

      let totalItemsAdded = 0;

      calculatedRooms.forEach((room) => {
        if (room.materials) {
          room.materials.forEach((material) => {
            const producto = material.producto && {
              codigo: material.producto.codigo,
              descripcion: `${material.producto.descripcion} - ${room.name}`,
              precio: material.producto.precio,
              unmedida: material.producto.unmedida,
              urlimg: material.producto.urlimg,
              Fotos: material.producto.Fotos,
              codcategoria: material.producto.codcategoria,
            };

            if (producto) {
              agregarProducto(producto, material.quantity);
              totalItemsAdded++;
            }
          });
        }
      });

      console.log(`${totalItemsAdded} materiales agregados a la cotización`);
    });

    if (success) {
      console.log("Materiales agregados exitosamente");
    }
  };

  const activeRoom = rooms.find((room) => room.id === selectedTab) || rooms[0];

  return (
    <div className="space-y-8">
      <div>
        {loadingProducts && (
          <div className="mb-6 rounded-md border border-blue-600 bg-blue-900/20 p-4">
            <div className="flex items-center gap-2 text-blue-400">
              <Loader2 className="h-5 w-5 animate-spin" />
              <span className="font-medium">
                Cargando información de productos...
              </span>
            </div>
            <p className="mt-1 text-sm text-blue-300">
              Obteniendo precios e imágenes reales del catálogo
            </p>
          </div>
        )}

        <div className="mb-6 border-b border-gray-700">
          <div className="flex overflow-x-auto pb-1">
            {rooms.map((room) => (
              <button
                key={room.id}
                className={`mr-2 shrink-0 rounded-t-lg px-4 py-2 text-sm font-medium transition-colors ${
                  selectedTab === room.id
                    ? "border-blue-300-500 border-b-2 bg-gray-800"
                    : "bg-gray-900 text-gray-300 hover:bg-gray-800"
                }`}
                onClick={() => setSelectedTab(room.id)}
              >
                {room.name}
              </button>
            ))}
            {rooms.length < 10 && (
              <button
                onClick={addRoom}
                className="mr-2 flex items-center rounded-t-lg bg-gray-900 px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:bg-gray-800"
              >
                <Plus className="mr-1 h-4 w-4" />
                Nuevo
              </button>
            )}
          </div>
        </div>

        <div className="rounded-lg border border-gray-700 bg-gray-800 p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-medium">{activeRoom.name}</h3>
            <button
              onClick={() => removeRoom(activeRoom.id)}
              className="text-gray-400 transition-colors hover:text-red-500"
              disabled={rooms.length === 1}
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>

          <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor={`width-${activeRoom.id}`}
                className="mb-2 block text-sm font-medium"
              >
                Ancho (en metros)
              </label>
              <input
                type="number"
                id={`width-${activeRoom.id}`}
                value={activeRoom.width}
                onChange={(e) =>
                  updateRoom(activeRoom.id, "width", e.target.value)
                }
                min="0.1"
                step="0.1"
                className="w-full rounded-md border border-gray-600 bg-gray-700 p-3 transition-colors focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div>
              <label
                htmlFor={`length-${activeRoom.id}`}
                className="mb-2 block text-sm font-medium"
              >
                Largo (en metros)
              </label>
              <input
                type="number"
                id={`length-${activeRoom.id}`}
                value={activeRoom.length}
                onChange={(e) =>
                  updateRoom(activeRoom.id, "length", e.target.value)
                }
                min="0.1"
                step="0.1"
                className="w-full rounded-md border border-gray-600 bg-gray-700 p-3 transition-colors focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
          </div>

          <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div>
              <label className="mb-2 block text-sm font-medium">
                Modulación
              </label>
              <div className="rounded-md border border-gray-600 bg-gray-700 p-3">
                {MODULACION} MTS
              </div>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">Maestras</label>
              <div className="rounded-md border border-gray-600 bg-gray-700 p-3">
                {MAESTRAS} MTS
              </div>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">
                V. Rígida (Alto)
              </label>
              <div className="rounded-md border border-gray-600 bg-gray-700 p-3">
                {V_RIGIDA} MTS
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label className="mb-3 block text-sm font-medium">
              Color de PVC
            </label>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {pvcColors.map((color) => (
                <div
                  key={color.id}
                  className={`cursor-pointer overflow-hidden rounded-lg border transition-all ${
                    activeRoom.colorId === color.id
                      ? "border-blue-300 ring-2 ring-blue-300"
                      : "border-gray-600 hover:border-gray-400"
                  }`}
                  onClick={() => updateRoom(activeRoom.id, "colorId", color.id)}
                >
                  <div className="relative h-24 w-full">
                    <Image
                      src={color.image}
                      alt={color.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="bg-gray-700 p-2 text-center">
                    <span className="text-sm font-medium">{color.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {calculationDone && (
            <div className="mt-6">
              <h4 className="mb-4 text-lg font-medium">
                Resumen de todos los ambientes:
              </h4>

              {/* Consolidar materiales de todos los ambientes */}
              {(() => {
                // Consolidar todos los materiales de todos los ambientes calculados
                const allMaterials = new Map<
                  string,
                  Material & { totalQuantity: number; rooms: string[] }
                >();

                rooms.forEach((room) => {
                  if (room.materials && room.calculationDetails) {
                    room.materials.forEach((material) => {
                      const key = material.code;
                      if (allMaterials.has(key)) {
                        const existing = allMaterials.get(key)!;
                        existing.totalQuantity += material.quantity;
                        existing.rooms.push(room.name);
                      } else {
                        allMaterials.set(key, {
                          ...material,
                          totalQuantity: material.quantity,
                          rooms: [room.name],
                        });
                      }
                    });
                  }
                });

                const consolidatedMaterials = Array.from(allMaterials.values());

                return (
                  <>
                    {/* Detalles de cálculo por ambiente */}
                    <div className="mb-6 rounded-md border border-gray-700 bg-gray-900 p-4 text-sm">
                      <details>
                        <summary className="mb-3 cursor-pointer font-medium text-blue-300">
                          Ver detalle del proceso de cálculo por ambiente
                        </summary>
                        <div className="mt-4 space-y-6">
                          {rooms
                            .filter((room) => room.calculationDetails)
                            .map((room) => (
                              <div
                                key={room.id}
                                className="border-b border-gray-700 pb-4 last:border-b-0"
                              >
                                <h5 className="mb-3 text-lg font-medium">
                                  {room.name}
                                </h5>
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                  <div>
                                    <h6 className="mb-2 font-medium">
                                      Perfilería (M - F)
                                    </h6>
                                    <p className="text-gray-300 text-sm">
                                      Montantes (MO):{" "}
                                      {room.calculationDetails!.mo} UND
                                    </p>
                                    <p className="text-gray-300 text-sm">
                                      Maestras (MA):{" "}
                                      {room.calculationDetails!.ma} UND
                                    </p>
                                    <p className="text-gray-300 text-sm">
                                      Varillas rígidas (VR):{" "}
                                      {room.calculationDetails!.vr} UND
                                    </p>
                                    <p className="font-medium text-sm">
                                      Total:{" "}
                                      {
                                        room.calculationDetails!
                                          .totalPerfileriaMF
                                      }{" "}
                                      UND
                                    </p>
                                  </div>
                                  <div>
                                    <h6 className="mb-2 font-medium">
                                      Perfilería (S - U)
                                    </h6>
                                    <p className="text-gray-300 text-sm">
                                      Perímetro (PR):{" "}
                                      {room.calculationDetails!.pr} MTS
                                    </p>
                                    <p className="text-gray-300 text-sm">
                                      Unidades:{" "}
                                      {room.calculationDetails!.prUnits} UND
                                    </p>
                                  </div>
                                  <div>
                                    <h6 className="mb-2 font-medium">PVC</h6>
                                    <p className="text-gray-300 text-sm">
                                      Cantidad:{" "}
                                      {room.calculationDetails!.pvcCount} UND
                                    </p>
                                    <p className="text-gray-300 text-sm">
                                      Longitud:{" "}
                                      {room.calculationDetails!.pvcLength.toFixed(
                                        2
                                      )}{" "}
                                      MTS
                                    </p>
                                    <p className="font-medium text-sm">
                                      Total:{" "}
                                      {room.calculationDetails!.pvcTotal.toFixed(
                                        2
                                      )}{" "}
                                      MTS
                                    </p>
                                    <p className="text-sm text-blue-300">
                                      Color:{" "}
                                      {
                                        pvcColors.find(
                                          (c) => c.id === room.colorId
                                        )?.name
                                      }
                                    </p>
                                  </div>
                                  <div>
                                    <h6 className="mb-2 font-medium">
                                      Tornillos y Fijaciones
                                    </h6>
                                    <p className="text-gray-300 text-sm">
                                      T1 CORTO:{" "}
                                      {room.calculationDetails!.t1Total} UND
                                    </p>
                                    <p className="text-gray-300 text-sm">
                                      T1 AGUJA:{" "}
                                      {room.calculationDetails!.t1ATotal} UND
                                    </p>
                                    <p className="text-gray-300 text-sm">
                                      T3 MECHA:{" "}
                                      {room.calculationDetails!.t3ATotal} UND
                                    </p>
                                    <p className="text-gray-300 text-sm">
                                      FIJACIONES:{" "}
                                      {room.calculationDetails!.fijacionesTotal}{" "}
                                      UND
                                    </p>
                                  </div>
                                </div>
                              </div>
                            ))}
                        </div>
                      </details>
                    </div>

                    <h4 className="mb-3 text-lg font-medium">
                      Materiales necesarios (Total consolidado):
                    </h4>
                    <div className="overflow-x-auto rounded-lg border border-gray-600">
                      <table className="min-w-full shrink-0 divide-y divide-gray-700">
                        <thead className="bg-gray-900">
                          <tr>
                            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-300">
                              Código
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-300">
                              Descripción
                            </th>
                            <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-300">
                              Cantidad Total
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-300">
                              Unidad
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-300">
                              Ambientes
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-700 bg-gray-800">
                          {consolidatedMaterials.map((material) => (
                            <tr
                              key={material.code}
                              className="transition-colors hover:bg-gray-700"
                            >
                              <td className="whitespace-nowrap px-4 py-3 font-mono text-sm text-blue-300">
                                {material.code}
                              </td>
                              <td className="px-4 py-3 text-sm">
                                {material.producto?.descripcion ||
                                  material.description}
                              </td>
                              <td className="whitespace-nowrap px-4 py-3 text-right text-sm">
                                {material.id === "1.1" ? (
                                  <span className="font-bold">
                                    {material.totalQuantity.toFixed(2)}
                                  </span>
                                ) : (
                                  material.totalQuantity
                                )}
                              </td>
                              <td className="whitespace-nowrap px-4 py-3 text-sm">
                                {material.producto?.unmedida || material.unit}
                              </td>
                              {/* <td className="whitespace-nowrap px-4 py-3 text-right text-sm">
                                {material.price && material.price > 0 ? (
                                  <span className="text-blue-300">
                                    ${material.price.toLocaleString("es-AR")}
                                  </span>
                                ) : (
                                  <span className="text-xs text-orange-400">
                                    Consultar
                                  </span>
                                )}
                              </td> */}
                              {/* <td className="whitespace-nowrap px-4 py-3 text-right text-sm">
                                {material.price && material.price > 0 ? (
                                  <span className="font-medium text-green-400">
                                    $
                                    {(
                                      material.price * material.totalQuantity
                                    ).toLocaleString("es-AR")}
                                  </span>
                                ) : (
                                  <span className="text-xs text-orange-400">
                                    Consultar
                                  </span>
                                )}
                              </td> */}
                              <td className="px-4 py-3 text-xs text-gray-400">
                                {material.rooms.join(", ")}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Total estimado consolidado */}
                    {(() => {
                      const totalConsolidado = consolidatedMaterials.reduce(
                        (sum, material) => {
                          if (material.price && material.price > 0) {
                            return (
                              sum + material.price * material.totalQuantity
                            );
                          }
                          return sum;
                        },
                        0
                      );

                      return totalConsolidado > 0 ? (
                        <div className="mt-4 rounded-md border border-green-600 bg-green-900/20 p-4">
                          {/* <div className="flex items-center justify-between">
                            <span className="text-lg font-medium">
                              Total Estimado (Todos los ambientes):
                            </span>
                            <span className="text-2xl font-bold text-green-400">
                              ${totalConsolidado.toLocaleString("es-AR")}
                            </span>
                          </div>
                          <p className="mt-1 text-sm text-green-300">
                            * Precios sujetos a cambios. Algunos productos
                            requieren consulta.
                          </p> */}
                          <p className="text-sm text-green-300">
                            Ambientes calculados:{" "}
                            {rooms
                              .filter((r) => r.calculationDetails)
                              .map((r) => r.name)
                              .join(", ")}
                          </p>
                        </div>
                      ) : null;
                    })()}
                  </>
                );
              })()}
            </div>
          )}
        </div>

        <div className="mt-6 rounded-md border border-yellow-600 bg-yellow-900/20 p-4">
          <p className="text-sm font-medium text-yellow-300">
            EL CÁLCULO ES ESTIMATIVO, PUEDE VARIAR SEGÚN FORMA DE COLOCACIÓN.
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row">
          <Button
            onClick={calculateMaterials}
            disabled={isCalculating || loadingProducts}
            className="flex-1"
          >
            {isCalculating ? (
              <>
                <Calculator className="mr-2 h-5 w-5 animate-spin" />
                Calculando...
              </>
            ) : (
              <>
                <Calculator className="mr-2 h-5 w-5" />
                Calcular Materiales
              </>
            )}
          </Button>

          {calculationDone && (
            <Button
              onClick={addToQuote}
              disabled={isProcessing}
              variant="outline"
              className="flex-1 border-gray-600 bg-transparent hover:bg-gray-800"
            >
              {isProcessing ? (
                <>
                  <FileText className="mr-2 h-5 w-5 animate-spin" />
                  Agregando...
                </>
              ) : (
                <>
                  <FileText className="mr-2 h-5 w-5" />
                  Agregar a Cotización
                </>
              )}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
