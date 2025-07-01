"use client"

import type React from "react"

type CladdingFormProps = {
  formData: {
    claddingArea: string
    claddingType: string
    claddingMaterial: string
  }
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
}

export function CladdingForm({ formData, onChange }: CladdingFormProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Datos del Revestimiento</h3>

      <div>
        <label htmlFor="claddingArea" className="block text-sm font-medium mb-1">
          Área a Revestir (m²)
        </label>
        <div className="relative">
          <input
            type="number"
            id="claddingArea"
            name="claddingArea"
            value={formData.claddingArea}
            onChange={onChange}
            min="0.1"
            step="0.01"
            placeholder="Ej: 15.75"
            className="w-full p-2 border border-gray-600 rounded-md bg-[#2a2845] text-white focus:outline-none focus:ring-2 focus:ring-[#1D6191] focus:border-[#1D6191] transition-colors"
            required
          />
          <span className="absolute right-3 top-2 text-gray-300">m²</span>
        </div>
        <p className="text-xs text-gray-300 mt-1">Ingresa el área total a revestir</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="claddingType" className="block text-sm font-medium mb-1">
            Tipo de Revestimiento
          </label>
          <select
            id="claddingType"
            name="claddingType"
            value={formData.claddingType}
            onChange={onChange}
            className="w-full p-2 border border-gray-600 rounded-md bg-[#2a2845] text-white focus:outline-none focus:ring-2 focus:ring-[#1D6191] focus:border-[#1D6191] transition-colors"
          >
            <option value="interior">Interior</option>
            <option value="exterior">Exterior</option>
          </select>
        </div>

        <div>
          <label htmlFor="claddingMaterial" className="block text-sm font-medium mb-1">
            Material
          </label>
          <select
            id="claddingMaterial"
            name="claddingMaterial"
            value={formData.claddingMaterial}
            onChange={onChange}
            className="w-full p-2 border border-gray-600 rounded-md bg-[#2a2845] text-white focus:outline-none focus:ring-2 focus:ring-[#1D6191] focus:border-[#1D6191] transition-colors"
          >
            <option value="drywall">Placa de Yeso</option>
            <option value="steel">Placa Cementicia</option>
          </select>
        </div>
      </div>

      <div className="bg-[#252142] p-4 rounded-md border border-[#3d3a5a]">
        <h4 className="text-sm font-medium text-[#1D6191] mb-1">Consejo</h4>
        <p className="text-sm text-gray-300">
          Para revestimientos exteriores, recomendamos usar placas cementicias resistentes a la intemperie. Para áreas
          húmedas interiores, utiliza placas resistentes a la humedad.
        </p>
      </div>
    </div>
  )
}
