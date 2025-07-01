"use client"

import type { ProjectType } from "@/components/materials-calculator/calculator-form"

type ProjectTypeSelectorProps = {
  selectedType: ProjectType | null
  onSelectType: (type: ProjectType) => void
}

export function ProjectTypeSelector({ selectedType, onSelectType }: ProjectTypeSelectorProps) {
  return (
    <div>
      <h3 className="text-lg font-medium mb-3">Selecciona el tipo de proyecto:</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <button
          type="button"
          onClick={() => onSelectType("ceiling")}
          className={`p-4 border rounded-lg text-center transition-all focus:outline-none focus:ring-2 focus:ring-[#1D6191] focus:ring-opacity-50 ${
            selectedType === "ceiling"
              ? "border-[#1D6191] bg-[#1D6191] text-white"
              : "border-gray-600 hover:border-[#1D6191] hover:bg-[#252142] text-white"
          }`}
        >
          <div className="text-3xl mb-2">🔝</div>
          <div className="font-medium">Cielorraso</div>
        </button>

        <button
          type="button"
          onClick={() => onSelectType("partition")}
          className={`p-4 border rounded-lg text-center transition-all focus:outline-none focus:ring-2 focus:ring-[#1D6191] focus:ring-opacity-50 ${
            selectedType === "partition"
              ? "border-[#1D6191] bg-[#1D6191] text-white"
              : "border-gray-600 hover:border-[#1D6191] hover:bg-[#252142] text-white"
          }`}
        >
          <div className="text-3xl mb-2">🧱</div>
          <div className="font-medium">Tabique</div>
        </button>

        <button
          type="button"
          onClick={() => onSelectType("cladding")}
          className={`p-4 border rounded-lg text-center transition-all focus:outline-none focus:ring-2 focus:ring-[#1D6191] focus:ring-opacity-50 ${
            selectedType === "cladding"
              ? "border-[#1D6191] bg-[#1D6191] text-white"
              : "border-gray-600 hover:border-[#1D6191] hover:bg-[#252142] text-white"
          }`}
        >
          <div className="text-3xl mb-2">🏠</div>
          <div className="font-medium">Revestimiento</div>
        </button>

        <button
          type="button"
          onClick={() => onSelectType("facade")}
          className={`p-4 border rounded-lg text-center transition-all focus:outline-none focus:ring-2 focus:ring-[#1D6191] focus:ring-opacity-50 ${
            selectedType === "facade"
              ? "border-[#1D6191] bg-[#1D6191] text-white"
              : "border-gray-600 hover:border-[#1D6191] hover:bg-[#252142] text-white"
          }`}
        >
          <div className="text-3xl mb-2">🏢</div>
          <div className="font-medium">Fachada</div>
        </button>

        <button
          type="button"
          onClick={() => onSelectType("raised-floor")}
          className={`p-4 border rounded-lg text-center transition-all focus:outline-none focus:ring-2 focus:ring-[#1D6191] focus:ring-opacity-50 ${
            selectedType === "raised-floor"
              ? "border-[#1D6191] bg-[#1D6191] text-white"
              : "border-gray-600 hover:border-[#1D6191] hover:bg-[#252142] text-white"
          }`}
        >
          <div className="text-3xl mb-2">🔲</div>
          <div className="font-medium">Piso Técnico</div>
        </button>

        <button
          type="button"
          onClick={() => onSelectType("thermal-insulation")}
          className={`p-4 border rounded-lg text-center transition-all focus:outline-none focus:ring-2 focus:ring-[#1D6191] focus:ring-opacity-50 ${
            selectedType === "thermal-insulation"
              ? "border-[#1D6191] bg-[#1D6191] text-white"
              : "border-gray-600 hover:border-[#1D6191] hover:bg-[#252142] text-white"
          }`}
        >
          <div className="text-3xl mb-2">❄️</div>
          <div className="font-medium">Aislamiento Térmico</div>
        </button>

        <button
          type="button"
          onClick={() => onSelectType("roofing")}
          className={`p-4 border rounded-lg text-center transition-all focus:outline-none focus:ring-2 focus:ring-[#1D6191] focus:ring-opacity-50 ${
            selectedType === "roofing"
              ? "border-[#1D6191] bg-[#1D6191] text-white"
              : "border-gray-600 hover:border-[#1D6191] hover:bg-[#252142] text-white"
          }`}
        >
          <div className="text-3xl mb-2">🏛️</div>
          <div className="font-medium">Cubierta</div>
        </button>
      </div>
    </div>
  )
}
