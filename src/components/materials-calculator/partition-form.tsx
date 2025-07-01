"use client"

import type React from "react"

type PartitionFormProps = {
  formData: {
    partitionLength: string
    partitionHeight: string
    partitionThickness: string
    includeInsulation: boolean
  }
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
}

export function PartitionForm({ formData, onChange }: PartitionFormProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Datos del Tabique</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="partitionLength" className="block text-sm font-medium mb-1">
            Largo (m)
          </label>
          <div className="relative">
            <input
              type="number"
              id="partitionLength"
              name="partitionLength"
              value={formData.partitionLength}
              onChange={onChange}
              min="0.1"
              step="0.01"
              placeholder="Ej: 3.5"
              className="w-full p-2 border border-gray-600 rounded-md bg-[#2a2845] text-white focus:outline-none focus:ring-2 focus:ring-[#1D6191] focus:border-[#1D6191] transition-colors"
              required
            />
            <span className="absolute right-3 top-2 text-gray-300">m</span>
          </div>
        </div>

        <div>
          <label htmlFor="partitionHeight" className="block text-sm font-medium mb-1">
            Altura (m)
          </label>
          <div className="relative">
            <input
              type="number"
              id="partitionHeight"
              name="partitionHeight"
              value={formData.partitionHeight}
              onChange={onChange}
              min="0.1"
              step="0.01"
              placeholder="Ej: 2.4"
              className="w-full p-2 border border-gray-600 rounded-md bg-[#2a2845] text-white focus:outline-none focus:ring-2 focus:ring-[#1D6191] focus:border-[#1D6191] transition-colors"
              required
            />
            <span className="absolute right-3 top-2 text-gray-300">m</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="partitionThickness" className="block text-sm font-medium mb-1">
            Espesor de la Estructura
          </label>
          <select
            id="partitionThickness"
            name="partitionThickness"
            value={formData.partitionThickness}
            onChange={onChange}
            className="w-full p-2 border border-gray-600 rounded-md bg-[#2a2845] text-white focus:outline-none focus:ring-2 focus:ring-[#1D6191] focus:border-[#1D6191] transition-colors"
          >
            <option value="48">48mm</option>
            <option value="70">70mm</option>
            <option value="90">90mm</option>
            <option value="100">100mm</option>
          </select>
        </div>

        <div className="flex items-center h-full pt-6">
          <input
            type="checkbox"
            id="includeInsulation"
            name="includeInsulation"
            checked={formData.includeInsulation}
            onChange={onChange}
            className="h-4 w-4 text-[#1D6191] rounded border-gray-500 focus:ring-[#1D6191] focus:ring-opacity-50 bg-[#2a2845]"
          />
          <label htmlFor="includeInsulation" className="ml-2 block text-sm">
            Incluir aislamiento acústico
          </label>
        </div>
      </div>

      <div className="bg-[#252142] p-4 rounded-md border border-[#3d3a5a]">
        <h4 className="text-sm font-medium text-[#1D6191] mb-1">Consejo</h4>
        <p className="text-sm text-gray-300">
          Recuerda que el tabique tendrá placas en ambas caras. Para tabiques más altos de 3m, considera usar montantes
          reforzados.
        </p>
      </div>
    </div>
  )
}
