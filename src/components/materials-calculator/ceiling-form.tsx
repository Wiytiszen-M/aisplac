"use client"

import type React from "react"

type CeilingFormProps = {
  formData: {
    ceilingArea: string
    ceilingType: string
  }
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
}

export function CeilingForm({ formData, onChange }: CeilingFormProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Datos del Cielorraso</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="ceilingArea" className="block text-sm font-medium mb-1">
            Área (m²)
          </label>
          <div className="relative">
            <input
              type="number"
              id="ceilingArea"
              name="ceilingArea"
              value={formData.ceilingArea}
              onChange={onChange}
              min="1"
              step="0.01"
              placeholder="Ej: 24.5"
              className="w-full p-2 border border-gray-600 rounded-md bg-[#2a2845] text-white focus:outline-none focus:ring-2 focus:ring-[#1D6191] focus:border-[#1D6191] transition-colors"
              required
            />
            <span className="absolute right-3 top-2 text-gray-300">m²</span>
          </div>
          <p className="text-xs text-gray-300 mt-1">Ingresa el área total del cielorraso</p>
        </div>

        <div>
          <label htmlFor="ceilingType" className="block text-sm font-medium mb-1">
            Tipo de Cielorraso
          </label>
          <select
            id="ceilingType"
            name="ceilingType"
            value={formData.ceilingType}
            onChange={onChange}
            className="w-full p-2 border border-gray-600 rounded-md bg-[#2a2845] text-white focus:outline-none focus:ring-2 focus:ring-[#1D6191] focus:border-[#1D6191] transition-colors"
          >
            <option value="standard">Estándar</option>
            <option value="acoustic">Acústico</option>
            <option value="moisture">Resistente a la Humedad</option>
            <option value="fire">Resistente al Fuego</option>
          </select>
        </div>
      </div>

      <div className="bg-[#252142] p-4 rounded-md border border-[#3d3a5a]">
        <h4 className="text-sm font-medium text-[#1D6191] mb-1">Consejo</h4>
        <p className="text-sm text-gray-300">
          Para calcular el área, multiplica el largo por el ancho de la habitación. Si la forma es irregular, divide en
          rectángulos y suma las áreas.
        </p>
      </div>
    </div>
  )
}
