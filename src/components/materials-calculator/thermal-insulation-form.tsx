"use client"

import type React from "react"

type ThermalInsulationFormProps = {
  formData: {
    insulationArea: string
    insulationType: string
    insulationMaterial: string
    insulationThickness: string
  }
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
}

export function ThermalInsulationForm({ formData, onChange }: ThermalInsulationFormProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Datos del Aislamiento Térmico</h3>

      <div>
        <label htmlFor="insulationArea" className="block text-sm font-medium mb-1">
          Área a Aislar (m²)
        </label>
        <div className="relative">
          <input
            type="number"
            id="insulationArea"
            name="insulationArea"
            value={formData.insulationArea}
            onChange={onChange}
            min="0.1"
            step="0.01"
            placeholder="Ej: 85.2"
            className="w-full p-2 border border-gray-600 rounded-md bg-[#2a2845] text-white focus:outline-none focus:ring-2 focus:ring-[#1D6191] focus:border-[#1D6191] transition-colors"
            required
          />
          <span className="absolute right-3 top-2 text-gray-300">m²</span>
        </div>
        <p className="text-xs text-gray-300 mt-1">Ingresa el área total a aislar térmicamente</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="insulationType" className="block text-sm font-medium mb-1">
            Tipo de Aplicación
          </label>
          <select
            id="insulationType"
            name="insulationType"
            value={formData.insulationType}
            onChange={onChange}
            className="w-full p-2 border border-gray-600 rounded-md bg-[#2a2845] text-white focus:outline-none focus:ring-2 focus:ring-[#1D6191] focus:border-[#1D6191] transition-colors"
          >
            <option value="wall">Muros</option>
            <option value="ceiling">Techos</option>
            <option value="floor">Pisos</option>
            <option value="duct">Conductos</option>
          </select>
        </div>

        <div>
          <label htmlFor="insulationMaterial" className="block text-sm font-medium mb-1">
            Material Aislante
          </label>
          <select
            id="insulationMaterial"
            name="insulationMaterial"
            value={formData.insulationMaterial}
            onChange={onChange}
            className="w-full p-2 border border-gray-600 rounded-md bg-[#2a2845] text-white focus:outline-none focus:ring-2 focus:ring-[#1D6191] focus:border-[#1D6191] transition-colors"
          >
            <option value="mineral-wool">Lana Mineral</option>
            <option value="polystyrene">Poliestireno Expandido</option>
            <option value="polyurethane">Poliuretano</option>
            <option value="fiberglass">Fibra de Vidrio</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="insulationThickness" className="block text-sm font-medium mb-1">
          Espesor del Aislante (mm)
        </label>
        <select
          id="insulationThickness"
          name="insulationThickness"
          value={formData.insulationThickness}
          onChange={onChange}
          className="w-full p-2 border border-gray-600 rounded-md bg-[#2a2845] text-white focus:outline-none focus:ring-2 focus:ring-[#1D6191] focus:border-[#1D6191] transition-colors"
        >
          <option value="30">30mm</option>
          <option value="50">50mm</option>
          <option value="75">75mm</option>
          <option value="100">100mm</option>
          <option value="150">150mm</option>
        </select>
      </div>

      <div className="bg-[#252142] p-4 rounded-md border border-[#3d3a5a]">
        <h4 className="text-sm font-medium text-[#1D6191] mb-1">Consejo</h4>
        <p className="text-sm text-gray-300">
          El espesor del aislante afecta directamente su eficiencia térmica. Para climas extremos, recomendamos
          espesores de 100mm o más. La lana mineral ofrece buen aislamiento térmico y acústico.
        </p>
      </div>
    </div>
  )
}
