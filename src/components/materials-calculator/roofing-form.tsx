"use client"

import type React from "react"

type RoofingFormProps = {
  formData: {
    roofingArea: string
    roofingType: string
    roofingMaterial: string
    roofSlope: string
    includeRainGutters: boolean
  }
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
}

export function RoofingForm({ formData, onChange }: RoofingFormProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Datos de la Cubierta</h3>

      <div>
        <label htmlFor="roofingArea" className="block text-sm font-medium mb-1">
          Área de la Cubierta (m²)
        </label>
        <div className="relative">
          <input
            type="number"
            id="roofingArea"
            name="roofingArea"
            value={formData.roofingArea}
            onChange={onChange}
            min="0.1"
            step="0.01"
            placeholder="Ej: 150.5"
            className="w-full p-2 border border-gray-600 rounded-md bg-[#2a2845] text-white focus:outline-none focus:ring-2 focus:ring-[#1D6191] focus:border-[#1D6191] transition-colors"
            required
          />
          <span className="absolute right-3 top-2 text-gray-300">m²</span>
        </div>
        <p className="text-xs text-gray-300 mt-1">Ingresa el área total de la cubierta</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="roofingType" className="block text-sm font-medium mb-1">
            Tipo de Cubierta
          </label>
          <select
            id="roofingType"
            name="roofingType"
            value={formData.roofingType}
            onChange={onChange}
            className="w-full p-2 border border-gray-600 rounded-md bg-[#2a2845] text-white focus:outline-none focus:ring-2 focus:ring-[#1D6191] focus:border-[#1D6191] transition-colors"
          >
            <option value="flat">Plana</option>
            <option value="pitched">Inclinada</option>
          </select>
        </div>

        <div>
          <label htmlFor="roofingMaterial" className="block text-sm font-medium mb-1">
            Material Principal
          </label>
          <select
            id="roofingMaterial"
            name="roofingMaterial"
            value={formData.roofingMaterial}
            onChange={onChange}
            className="w-full p-2 border border-gray-600 rounded-md bg-[#2a2845] text-white focus:outline-none focus:ring-2 focus:ring-[#1D6191] focus:border-[#1D6191] transition-colors"
          >
            <option value="membrane">Membrana Asfáltica</option>
            <option value="metal">Chapa Metálica</option>
            <option value="tile">Tejas</option>
            <option value="pvc">Lámina PVC</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="roofSlope" className="block text-sm font-medium mb-1">
            Pendiente (%)
          </label>
          <select
            id="roofSlope"
            name="roofSlope"
            value={formData.roofSlope}
            onChange={onChange}
            className="w-full p-2 border border-gray-600 rounded-md bg-[#2a2845] text-white focus:outline-none focus:ring-2 focus:ring-[#1D6191] focus:border-[#1D6191] transition-colors"
          >
            <option value="1">1%</option>
            <option value="2">2%</option>
            <option value="5">5%</option>
            <option value="10">10%</option>
            <option value="15">15%</option>
            <option value="20">20%</option>
            <option value="30">30%</option>
            <option value="45">45%</option>
          </select>
        </div>

        <div className="flex items-center h-full pt-6">
          <input
            type="checkbox"
            id="includeRainGutters"
            name="includeRainGutters"
            checked={formData.includeRainGutters}
            onChange={onChange}
            className="h-4 w-4 text-[#1D6191] rounded border-gray-500 focus:ring-[#1D6191] focus:ring-opacity-50 bg-[#2a2845]"
          />
          <label htmlFor="includeRainGutters" className="ml-2 block text-sm">
            Incluir canaletas y bajantes
          </label>
        </div>
      </div>

      <div className="bg-[#252142] p-4 rounded-md border border-[#3d3a5a]">
        <h4 className="text-sm font-medium text-[#1D6191] mb-1">Consejo</h4>
        <p className="text-sm text-gray-300">
          Para cubiertas planas, se recomienda una pendiente mínima del 2% para garantizar el drenaje. Las canaletas son
          esenciales para dirigir el agua de lluvia y evitar filtraciones.
        </p>
      </div>
    </div>
  )
}
