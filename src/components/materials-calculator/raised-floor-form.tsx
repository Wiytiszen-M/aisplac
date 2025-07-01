"use client"

import type React from "react"

type RaisedFloorFormProps = {
  formData: {
    raisedFloorArea: string
    raisedFloorHeight: string
    raisedFloorFinish: string
    includeAntiStatic: boolean
  }
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
}

export function RaisedFloorForm({ formData, onChange }: RaisedFloorFormProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Datos del Piso Técnico</h3>

      <div>
        <label htmlFor="raisedFloorArea" className="block text-sm font-medium mb-1">
          Área del Piso (m²)
        </label>
        <div className="relative">
          <input
            type="number"
            id="raisedFloorArea"
            name="raisedFloorArea"
            value={formData.raisedFloorArea}
            onChange={onChange}
            min="0.1"
            step="0.01"
            placeholder="Ej: 45.8"
            className="w-full p-2 border border-gray-600 rounded-md bg-[#2a2845] text-white focus:outline-none focus:ring-2 focus:ring-[#1D6191] focus:border-[#1D6191] transition-colors"
            required
          />
          <span className="absolute right-3 top-2 text-gray-300">m²</span>
        </div>
        <p className="text-xs text-gray-300 mt-1">Ingresa el área total del piso técnico</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="raisedFloorHeight" className="block text-sm font-medium mb-1">
            Altura del Piso (mm)
          </label>
          <select
            id="raisedFloorHeight"
            name="raisedFloorHeight"
            value={formData.raisedFloorHeight}
            onChange={onChange}
            className="w-full p-2 border border-gray-600 rounded-md bg-[#2a2845] text-white focus:outline-none focus:ring-2 focus:ring-[#1D6191] focus:border-[#1D6191] transition-colors"
          >
            <option value="50">50mm</option>
            <option value="100">100mm</option>
            <option value="150">150mm</option>
            <option value="200">200mm</option>
            <option value="300">300mm</option>
            <option value="500">500mm</option>
          </select>
        </div>

        <div>
          <label htmlFor="raisedFloorFinish" className="block text-sm font-medium mb-1">
            Acabado Superior
          </label>
          <select
            id="raisedFloorFinish"
            name="raisedFloorFinish"
            value={formData.raisedFloorFinish}
            onChange={onChange}
            className="w-full p-2 border border-gray-600 rounded-md bg-[#2a2845] text-white focus:outline-none focus:ring-2 focus:ring-[#1D6191] focus:border-[#1D6191] transition-colors"
          >
            <option value="vinyl">Vinilo</option>
            <option value="laminate">Laminado</option>
            <option value="carpet">Moqueta</option>
            <option value="ceramic">Cerámico</option>
          </select>
        </div>
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          id="includeAntiStatic"
          name="includeAntiStatic"
          checked={formData.includeAntiStatic}
          onChange={onChange}
          className="h-4 w-4 text-[#1D6191] rounded border-gray-500 focus:ring-[#1D6191] focus:ring-opacity-50 bg-[#2a2845]"
        />
        <label htmlFor="includeAntiStatic" className="ml-2 block text-sm">
          Incluir tratamiento antiestático
        </label>
      </div>

      <div className="bg-[#252142] p-4 rounded-md border border-[#3d3a5a]">
        <h4 className="text-sm font-medium text-[#1D6191] mb-1">Consejo</h4>
        <p className="text-sm text-gray-300">
          Para salas de servidores o centros de datos, recomendamos usar tratamiento antiestático. La altura del piso
          dependerá del cableado y sistemas que necesites ocultar debajo.
        </p>
      </div>
    </div>
  )
}
