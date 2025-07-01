"use client"

import type React from "react"

type FacadeFormProps = {
  formData: {
    facadeArea: string
    facadeType: string
    facadeMaterial: string
    includeWaterproofing: boolean
  }
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
}

export function FacadeForm({ formData, onChange }: FacadeFormProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Datos de la Fachada</h3>

      <div>
        <label htmlFor="facadeArea" className="block text-sm font-medium mb-1">
          Área de Fachada (m²)
        </label>
        <div className="relative">
          <input
            type="number"
            id="facadeArea"
            name="facadeArea"
            value={formData.facadeArea}
            onChange={onChange}
            min="0.1"
            step="0.01"
            placeholder="Ej: 120.5"
            className="w-full p-2 border border-gray-600 rounded-md bg-[#2a2845] text-white focus:outline-none focus:ring-2 focus:ring-[#1D6191] focus:border-[#1D6191] transition-colors"
            required
          />
          <span className="absolute right-3 top-2 text-gray-300">m²</span>
        </div>
        <p className="text-xs text-gray-300 mt-1">Ingresa el área total de la fachada</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="facadeType" className="block text-sm font-medium mb-1">
            Tipo de Fachada
          </label>
          <select
            id="facadeType"
            name="facadeType"
            value={formData.facadeType}
            onChange={onChange}
            className="w-full p-2 border border-gray-600 rounded-md bg-[#2a2845] text-white focus:outline-none focus:ring-2 focus:ring-[#1D6191] focus:border-[#1D6191] transition-colors"
          >
            <option value="ventilated">Fachada Ventilada</option>
            <option value="curtain-wall">Muro Cortina</option>
            <option value="composite">Fachada Compuesta</option>
            <option value="traditional">Fachada Tradicional</option>
          </select>
        </div>

        <div>
          <label htmlFor="facadeMaterial" className="block text-sm font-medium mb-1">
            Material Principal
          </label>
          <select
            id="facadeMaterial"
            name="facadeMaterial"
            value={formData.facadeMaterial}
            onChange={onChange}
            className="w-full p-2 border border-gray-600 rounded-md bg-[#2a2845] text-white focus:outline-none focus:ring-2 focus:ring-[#1D6191] focus:border-[#1D6191] transition-colors"
          >
            <option value="fiber-cement">Fibrocemento</option>
            <option value="aluminum">Aluminio Compuesto</option>
            <option value="ceramic">Cerámica</option>
            <option value="hpl">Panel HPL</option>
          </select>
        </div>
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          id="includeWaterproofing"
          name="includeWaterproofing"
          checked={formData.includeWaterproofing}
          onChange={onChange}
          className="h-4 w-4 text-[#1D6191] rounded border-gray-500 focus:ring-[#1D6191] focus:ring-opacity-50 bg-[#2a2845]"
        />
        <label htmlFor="includeWaterproofing" className="ml-2 block text-sm">
          Incluir impermeabilización
        </label>
      </div>

      <div className="bg-[#252142] p-4 rounded-md border border-[#3d3a5a]">
        <h4 className="text-sm font-medium text-[#1D6191] mb-1">Consejo</h4>
        <p className="text-sm text-gray-300">
          Las fachadas ventiladas proporcionan un mejor aislamiento térmico y acústico. Para zonas con alta exposición a
          la lluvia, recomendamos incluir impermeabilización adicional.
        </p>
      </div>
    </div>
  )
}
