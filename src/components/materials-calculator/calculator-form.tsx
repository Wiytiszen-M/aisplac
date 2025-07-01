"use client";

import type React from "react";

import { useState } from "react";
import { CalculatorResults } from "@/components/materials-calculator/calculator-results";
import { ProjectTypeSelector } from "@/components/materials-calculator/project-type-selector";
import { CeilingForm } from "@/components/materials-calculator/ceiling-form";
import { PartitionForm } from "@/components/materials-calculator/partition-form";
import { CladdingForm } from "@/components/materials-calculator/cladding-form";
import { FacadeForm } from "@/components/materials-calculator/facade-form";
import { RaisedFloorForm } from "@/components/materials-calculator/raised-floor-form";
import { ThermalInsulationForm } from "@/components/materials-calculator/thermal-insulation-form";
import { RoofingForm } from "@/components/materials-calculator/roofing-form";
import { toast } from "sonner";
import { CustomButton } from "../ui/custom-button";

export type ProjectType =
  | "ceiling"
  | "partition"
  | "cladding"
  | "facade"
  | "raised-floor"
  | "thermal-insulation"
  | "roofing";

export type MaterialsResult = {
  name: string;
  quantity: number;
  unit: string;
  referencia: string;
  price: number;
};

export function CalculatorForm() {
  const [projectType, setProjectType] = useState<ProjectType | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [results, setResults] = useState<MaterialsResult[] | null>(null);
  const [formData, setFormData] = useState({
    // Ceiling fields
    ceilingArea: "",
    ceilingType: "standard",

    // Partition fields
    partitionLength: "",
    partitionHeight: "",
    partitionThickness: "70",
    includeInsulation: true,

    // Cladding fields
    claddingArea: "",
    claddingType: "exterior",
    claddingMaterial: "steel",

    // Facade fields
    facadeArea: "",
    facadeType: "ventilated",
    facadeMaterial: "fiber-cement",
    includeWaterproofing: true,

    // Raised Floor fields
    raisedFloorArea: "",
    raisedFloorHeight: "100",
    raisedFloorFinish: "vinyl",
    includeAntiStatic: false,

    // Thermal Insulation fields
    insulationArea: "",
    insulationType: "wall",
    insulationMaterial: "mineral-wool",
    insulationThickness: "50",

    // Roofing fields
    roofingArea: "",
    roofingType: "flat",
    roofingMaterial: "membrane",
    roofSlope: "2",
    includeRainGutters: true,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    // Handle checkbox inputs
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validateForm = () => {
    if (!projectType) {
      toast.error("Por favor selecciona un tipo de proyecto", {
        style: {
          background: "#2a2845",
          color: "white",
          border: "1px solid #3d3a5a",
        },
      });
      return false;
    }

    switch (projectType) {
      case "ceiling":
        if (!formData.ceilingArea) {
          toast.error("Por favor ingresa el área del cielorraso", {
            style: {
              background: "#2a2845",
              color: "white",
              border: "1px solid #3d3a5a",
            },
          });
          return false;
        }
        break;
      case "partition":
        if (!formData.partitionLength || !formData.partitionHeight) {
          toast.error("Por favor ingresa todas las dimensiones del tabique", {
            style: {
              background: "#2a2845",
              color: "white",
              border: "1px solid #3d3a5a",
            },
          });
          return false;
        }
        break;
      case "cladding":
        if (!formData.claddingArea) {
          toast.error("Por favor ingresa el área del revestimiento", {
            style: {
              background: "#2a2845",
              color: "white",
              border: "1px solid #3d3a5a",
            },
          });
          return false;
        }
        break;
      case "facade":
        if (!formData.facadeArea) {
          toast.error("Por favor ingresa el área de la fachada", {
            style: {
              background: "#2a2845",
              color: "white",
              border: "1px solid #3d3a5a",
            },
          });
          return false;
        }
        break;
      case "raised-floor":
        if (!formData.raisedFloorArea) {
          toast.error("Por favor ingresa el área del piso técnico", {
            style: {
              background: "#2a2845",
              color: "white",
              border: "1px solid #3d3a5a",
            },
          });
          return false;
        }
        break;
      case "thermal-insulation":
        if (!formData.insulationArea) {
          toast.error("Por favor ingresa el área del aislamiento térmico", {
            style: {
              background: "#2a2845",
              color: "white",
              border: "1px solid #3d3a5a",
            },
          });
          return false;
        }
        break;
      case "roofing":
        if (!formData.roofingArea) {
          toast.error("Por favor ingresa el área de la cubierta", {
            style: {
              background: "#2a2845",
              color: "white",
              border: "1px solid #3d3a5a",
            },
          });
          return false;
        }
        break;
    }

    return true;
  };

  const calculateMaterials = () => {
    if (!validateForm()) return;

    setIsCalculating(true);

    // Simulate API call or calculation process
    setTimeout(() => {
      let calculatedResults: MaterialsResult[] = [];

      switch (projectType) {
        case "ceiling":
          calculatedResults = calculateCeilingMaterials(
            Number.parseFloat(formData.ceilingArea),
            formData.ceilingType
          );
          break;
        case "partition":
          calculatedResults = calculatePartitionMaterials(
            Number.parseFloat(formData.partitionLength),
            Number.parseFloat(formData.partitionHeight),
            formData.partitionThickness,
            formData.includeInsulation
          );
          break;
        case "cladding":
          calculatedResults = calculateCladdingMaterials(
            Number.parseFloat(formData.claddingArea),
            formData.claddingType,
            formData.claddingMaterial
          );
          break;
        case "facade":
          calculatedResults = calculateFacadeMaterials(
            Number.parseFloat(formData.facadeArea),
            formData.facadeType,
            formData.facadeMaterial,
            formData.includeWaterproofing
          );
          break;
        case "raised-floor":
          calculatedResults = calculateRaisedFloorMaterials(
            Number.parseFloat(formData.raisedFloorArea),
            formData.raisedFloorHeight,
            formData.raisedFloorFinish,
            formData.includeAntiStatic
          );
          break;
        case "thermal-insulation":
          calculatedResults = calculateThermalInsulationMaterials(
            Number.parseFloat(formData.insulationArea),
            formData.insulationType,
            formData.insulationMaterial,
            formData.insulationThickness
          );
          break;
        case "roofing":
          calculatedResults = calculateRoofingMaterials(
            Number.parseFloat(formData.roofingArea),
            formData.roofingType,
            formData.roofingMaterial,
            formData.roofSlope,
            formData.includeRainGutters
          );
          break;
      }

      setResults(calculatedResults);
      setIsCalculating(false);
      toast.success("Cálculo completado", {
        style: {
          background: "#2a2845",
          color: "white",
          border: "1px solid #3d3a5a",
        },
      });
    }, 1500);
  };

  const resetCalculator = () => {
    setResults(null);
    setProjectType(null);
    setFormData({
      ceilingArea: "",
      ceilingType: "standard",
      partitionLength: "",
      partitionHeight: "",
      partitionThickness: "70",
      includeInsulation: true,
      claddingArea: "",
      claddingType: "exterior",
      claddingMaterial: "steel",
      facadeArea: "",
      facadeType: "ventilated",
      facadeMaterial: "fiber-cement",
      includeWaterproofing: true,
      raisedFloorArea: "",
      raisedFloorHeight: "100",
      raisedFloorFinish: "vinyl",
      includeAntiStatic: false,
      insulationArea: "",
      insulationType: "wall",
      insulationMaterial: "mineral-wool",
      insulationThickness: "50",
      roofingArea: "",
      roofingType: "flat",
      roofingMaterial: "membrane",
      roofSlope: "2",
      includeRainGutters: true,
    });
  };

  return (
    <div className="bg-[#2a2845] rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">Calculadora de Materiales</h2>

      {!results ? (
        <>
          <ProjectTypeSelector
            selectedType={projectType}
            onSelectType={setProjectType}
          />

          {projectType && (
            <div className="mt-6">
              {projectType === "ceiling" && (
                <CeilingForm formData={formData} onChange={handleInputChange} />
              )}

              {projectType === "partition" && (
                <PartitionForm
                  formData={formData}
                  onChange={handleInputChange}
                />
              )}

              {projectType === "cladding" && (
                <CladdingForm
                  formData={formData}
                  onChange={handleInputChange}
                />
              )}

              {projectType === "facade" && (
                <FacadeForm formData={formData} onChange={handleInputChange} />
              )}

              {projectType === "raised-floor" && (
                <RaisedFloorForm
                  formData={formData}
                  onChange={handleInputChange}
                />
              )}

              {projectType === "thermal-insulation" && (
                <ThermalInsulationForm
                  formData={formData}
                  onChange={handleInputChange}
                />
              )}

              {projectType === "roofing" && (
                <RoofingForm formData={formData} onChange={handleInputChange} />
              )}

              <div className="mt-8">
                <CustomButton
                  variant="primary"
                  onClick={calculateMaterials}
                  loading={isCalculating}
                  disabled={isCalculating}
                  className="w-full bg-[#1D6191] hover:bg-[#1a5580] text-white"
                >
                  {isCalculating ? "Calculando..." : "Calcular Materiales"}
                </CustomButton>
              </div>
            </div>
          )}
        </>
      ) : (
        <CalculatorResults
          results={results}
          projectType={projectType!}
          onReset={resetCalculator}
        />
      )}
    </div>
  );
}

// Helper functions for material calculations
function calculateCeilingMaterials(area: number): MaterialsResult[] {
  // These are simplified calculations - in a real app, you would have more precise formulas
  const soleras = Math.ceil(area * 0.7);
  const montantes = Math.ceil(area * 2.5);
  const placas = Math.ceil(area / 2.88);
  const tornillos = Math.ceil(placas * 30);
  const masilla = Math.ceil(placas * 0.5);

  return [
    {
      name: "Soleras 35mm",
      quantity: soleras,
      unit: "m",
      referencia: "SOL-35",
      price: 450,
    },
    {
      name: "Montantes 34mm",
      quantity: montantes,
      unit: "m",
      referencia: "MON-34",
      price: 520,
    },
    {
      name: "Placas de Yeso 9.5mm",
      quantity: placas,
      unit: "un",
      referencia: "PY-9.5",
      price: 1200,
    },
    {
      name: "Tornillos T1",
      quantity: tornillos,
      unit: "un",
      referencia: "T1-25",
      price: 2,
    },
    {
      name: "Masilla",
      quantity: masilla,
      unit: "kg",
      referencia: "MAS-5",
      price: 800,
    },
  ];
}

function calculatePartitionMaterials(
  length: number,
  height: number,
  thickness: string,
  includeInsulation: boolean
): MaterialsResult[] {
  const area = length * height;

  const soleras = Math.ceil(length * 2);
  const montantes = Math.ceil(length / 0.4 + 1);
  const placas = Math.ceil((area * 2) / 2.88); // Ambas caras
  const tornillos = Math.ceil(placas * 30);
  const masilla = Math.ceil(placas * 0.5);

  const results: MaterialsResult[] = [
    {
      name: `Soleras ${thickness}mm`,
      quantity: soleras,
      unit: "m",
      referencia: `SOL-${thickness}`,
      price: 550,
    },
    {
      name: `Montantes ${thickness}mm`,
      quantity: montantes,
      unit: "m",
      referencia: `MON-${thickness}`,
      price: 620,
    },
    {
      name: "Placas de Yeso 12.5mm",
      quantity: placas,
      unit: "un",
      referencia: "PY-12.5",
      price: 1500,
    },
    {
      name: "Tornillos T1",
      quantity: tornillos,
      unit: "un",
      referencia: "T1-25",
      price: 2,
    },
    {
      name: "Masilla",
      quantity: masilla,
      unit: "kg",
      referencia: "MAS-5",
      price: 800,
    },
  ];

  if (includeInsulation) {
    const lanaMineral = Math.ceil(area / 10); // Paneles de 10m²
    results.push({
      name: `Lana Mineral ${thickness}mm`,
      quantity: lanaMineral,
      unit: "paq",
      referencia: `LM-${thickness}`,
      price: 3500,
    });
  }

  return results;
}

function calculateCladdingMaterials(
  area: number,
  type: string,
  material: string
): MaterialsResult[] {
  const perfilOmega = Math.ceil(area * 2);
  const tornillos = Math.ceil(area * 15);

  let placas = 0;
  let nombrePlaca = "";
  let referencia = "";
  let precio = 0;

  if (material === "steel") {
    placas = Math.ceil(area / 2.5);
    nombrePlaca = type === "exterior" ? "Placa Cementicia" : "Placa de Acero";
    referencia = type === "exterior" ? "PC-8" : "PA-6";
    precio = type === "exterior" ? 2200 : 1800;
  } else {
    placas = Math.ceil(area / 2.88);
    nombrePlaca =
      type === "exterior" ? "Placa Resistente Humedad" : "Placa Estándar";
    referencia = type === "exterior" ? "PRH-12.5" : "PE-12.5";
    precio = type === "exterior" ? 1700 : 1500;
  }

  return [
    {
      name: "Perfil Omega",
      quantity: perfilOmega,
      unit: "m",
      referencia: "PO-20",
      price: 480,
    },
    {
      name: nombrePlaca,
      quantity: placas,
      unit: "un",
      referencia: referencia,
      price: precio,
    },
    {
      name: "Tornillos Autoperforantes",
      quantity: tornillos,
      unit: "un",
      referencia: "TAP-14",
      price: 3,
    },
    {
      name: "Masilla",
      quantity: Math.ceil(placas * 0.5),
      unit: "kg",
      referencia: "MAS-5",
      price: 800,
    },
  ];
}

function calculateFacadeMaterials(
  area: number,
  type: string,
  material: string,
  includeWaterproofing: boolean
): MaterialsResult[] {
  // Estructura base
  const perfilVertical = Math.ceil(area * 1.5);
  const perfilHorizontal = Math.ceil(area * 0.8);
  const escuadras = Math.ceil(area * 4);
  const tornillos = Math.ceil(area * 25);

  let paneles = 0;
  let nombrePanel = "";
  let referencia = "";
  let precio = 0;

  // Determinar tipo de panel según material
  if (material === "fiber-cement") {
    paneles = Math.ceil(area / 1.44); // Paneles de 1.2m x 1.2m
    nombrePanel = "Panel Fibrocemento";
    referencia = "PFC-12";
    precio = 2800;
  } else if (material === "aluminum") {
    paneles = Math.ceil(area / 1.0); // Paneles de 1m x 1m
    nombrePanel = "Panel Aluminio Compuesto";
    referencia = "PAC-10";
    precio = 3500;
  } else if (material === "ceramic") {
    paneles = Math.ceil(area / 0.36); // Piezas de 60cm x 60cm
    nombrePanel = "Placa Cerámica";
    referencia = "PCE-60";
    precio = 1800;
  } else {
    paneles = Math.ceil(area / 2.0); // Paneles de 2m²
    nombrePanel = "Panel HPL";
    referencia = "HPL-20";
    precio = 4200;
  }

  const results: MaterialsResult[] = [
    {
      name: "Perfil Vertical",
      quantity: perfilVertical,
      unit: "m",
      referencia: "PV-50",
      price: 680,
    },
    {
      name: "Perfil Horizontal",
      quantity: perfilHorizontal,
      unit: "m",
      referencia: "PH-40",
      price: 580,
    },
    {
      name: "Escuadras de Fijación",
      quantity: escuadras,
      unit: "un",
      referencia: "EF-10",
      price: 120,
    },
    {
      name: nombrePanel,
      quantity: paneles,
      unit: "un",
      referencia: referencia,
      price: precio,
    },
    {
      name: "Tornillos y Fijaciones",
      quantity: tornillos,
      unit: "un",
      referencia: "TF-30",
      price: 5,
    },
  ];

  // Agregar impermeabilización si se requiere
  if (includeWaterproofing) {
    results.push({
      name: "Membrana Impermeable",
      quantity: Math.ceil(area * 1.1),
      unit: "m²",
      referencia: "MI-10",
      price: 350,
    });

    results.push({
      name: "Cinta Selladora",
      quantity: Math.ceil(area * 0.5),
      unit: "m",
      referencia: "CS-50",
      price: 180,
    });
  }

  // Agregar elementos específicos según el tipo de fachada
  if (type === "ventilated") {
    results.push({
      name: "Separadores",
      quantity: Math.ceil(area * 4),
      unit: "un",
      referencia: "SEP-20",
      price: 45,
    });
  } else if (type === "curtain-wall") {
    results.push({
      name: "Perfiles de Aluminio",
      quantity: Math.ceil(area * 2),
      unit: "m",
      referencia: "PA-60",
      price: 950,
    });

    results.push({
      name: "Juntas de Silicona",
      quantity: Math.ceil(area * 3),
      unit: "m",
      referencia: "JS-10",
      price: 120,
    });
  }

  return results;
}

function calculateRaisedFloorMaterials(
  area: number,
  height: string,
  finish: string,
  includeAntiStatic: boolean
): MaterialsResult[] {
  // Cálculos base
  const paneles = Math.ceil(area / 0.36); // Paneles de 60cm x 60cm
  const pedestales = Math.ceil(area * 3.5); // Aproximadamente 3.5 pedestales por m²
  const travesanos = Math.ceil(area * 2.8); // Aproximadamente 2.8 travesaños por m²

  let nombrePanel = "";
  let referencia = "";
  let precio = 0;

  // Determinar tipo de panel según acabado
  if (finish === "vinyl") {
    nombrePanel = "Panel con Vinilo";
    referencia = "PV-60";
    precio = 1800;
  } else if (finish === "laminate") {
    nombrePanel = "Panel Laminado";
    referencia = "PL-60";
    precio = 2200;
  } else if (finish === "carpet") {
    nombrePanel = "Panel con Moqueta";
    referencia = "PM-60";
    precio = 1950;
  } else {
    nombrePanel = "Panel Cerámico";
    referencia = "PC-60";
    precio = 2500;
  }

  // Ajustar precio de pedestales según altura
  const heightValue = Number.parseInt(height);
  let precioBase = 350;
  if (heightValue > 200) {
    precioBase = 550;
  } else if (heightValue > 100) {
    precioBase = 450;
  }

  const results: MaterialsResult[] = [
    {
      name: nombrePanel,
      quantity: paneles,
      unit: "un",
      referencia: referencia,
      price: precio,
    },
    {
      name: `Pedestales ${height}mm`,
      quantity: pedestales,
      unit: "un",
      referencia: `PED-${height}`,
      price: precioBase,
    },
    {
      name: "Travesaños",
      quantity: travesanos,
      unit: "un",
      referencia: "TR-30",
      price: 280,
    },
    {
      name: "Tornillos de Nivelación",
      quantity: pedestales,
      unit: "un",
      referencia: "TN-10",
      price: 25,
    },
  ];

  // Agregar elementos antiestáticos si se requiere
  if (includeAntiStatic) {
    results.push({
      name: "Lámina Antiestática",
      quantity: Math.ceil(area),
      unit: "m²",
      referencia: "LA-10",
      price: 450,
    });

    results.push({
      name: "Conectores de Puesta a Tierra",
      quantity: Math.ceil(area / 10),
      unit: "un",
      referencia: "CPT-5",
      price: 180,
    });
  }

  // Agregar elementos de acabado
  results.push({
    name: "Zócalos Perimetrales",
    quantity: Math.ceil(Math.sqrt(area) * 4), // Perímetro aproximado
    unit: "m",
    referencia: "ZP-10",
    price: 120,
  });

  return results;
}

function calculateThermalInsulationMaterials(
  area: number,
  type: string,
  material: string,
  thickness: string
): MaterialsResult[] {
  // Cálculos base
  let paneles = 0;
  let nombrePanel = "";
  let referencia = "";
  let precio = 0;

  // Determinar tipo de panel según material y espesor
  if (material === "mineral-wool") {
    paneles = Math.ceil(area / 0.6); // Paneles de 0.6m²
    nombrePanel = `Lana Mineral ${thickness}mm`;
    referencia = `LM-${thickness}`;
    precio = Number.parseInt(thickness) * 40; // Precio base por espesor
  } else if (material === "polystyrene") {
    paneles = Math.ceil(area / 0.5); // Paneles de 0.5m²
    nombrePanel = `Poliestireno Expandido ${thickness}mm`;
    referencia = `PE-${thickness}`;
    precio = Number.parseInt(thickness) * 30;
  } else if (material === "polyurethane") {
    paneles = Math.ceil(area / 0.75); // Paneles de 0.75m²
    nombrePanel = `Poliuretano ${thickness}mm`;
    referencia = `PU-${thickness}`;
    precio = Number.parseInt(thickness) * 50;
  } else {
    paneles = Math.ceil(area / 0.8); // Paneles de 0.8m²
    nombrePanel = `Fibra de Vidrio ${thickness}mm`;
    referencia = `FV-${thickness}`;
    precio = Number.parseInt(thickness) * 35;
  }

  const results: MaterialsResult[] = [
    {
      name: nombrePanel,
      quantity: paneles,
      unit: "un",
      referencia: referencia,
      price: precio,
    },
    {
      name: "Cinta Adhesiva",
      quantity: Math.ceil(area * 0.8),
      unit: "m",
      referencia: "CA-50",
      price: 120,
    },
  ];

  // Agregar elementos específicos según el tipo de aplicación
  if (type === "wall") {
    results.push({
      name: "Fijaciones para Muro",
      quantity: Math.ceil(area * 5),
      unit: "un",
      referencia: "FM-10",
      price: 15,
    });

    results.push({
      name: "Perfiles de Sujeción",
      quantity: Math.ceil(area * 1.2),
      unit: "m",
      referencia: "PS-30",
      price: 180,
    });
  } else if (type === "ceiling") {
    results.push({
      name: "Fijaciones para Techo",
      quantity: Math.ceil(area * 6),
      unit: "un",
      referencia: "FT-10",
      price: 18,
    });

    results.push({
      name: "Alambre Galvanizado",
      quantity: Math.ceil(area * 2),
      unit: "m",
      referencia: "AG-10",
      price: 45,
    });
  } else if (type === "floor") {
    results.push({
      name: "Film Barrera de Vapor",
      quantity: Math.ceil(area * 1.1),
      unit: "m²",
      referencia: "FBV-100",
      price: 85,
    });
  }

  // Barrera de vapor para todos los tipos
  results.push({
    name: "Barrera de Vapor",
    quantity: Math.ceil(area * 1.1),
    unit: "m²",
    referencia: "BV-100",
    price: 120,
  });

  return results;
}

function calculateRoofingMaterials(
  area: number,
  type: string,
  material: string,
  slope: string,
  includeRainGutters: boolean
): MaterialsResult[] {
  // Cálculos base
  const perimetro = Math.ceil(Math.sqrt(area) * 4); // Perímetro aproximado

  let nombreMaterial = "";
  let referencia = "";
  let precio = 0;
  let cantidadMaterial = 0;

  // Determinar material de cubierta
  if (material === "membrane") {
    nombreMaterial = "Membrana Asfáltica";
    referencia = "MA-40";
    precio = 450;
    cantidadMaterial = Math.ceil(area * 1.15); // 15% adicional para solapes
  } else if (material === "metal") {
    nombreMaterial = "Chapa Metálica";
    referencia = "CM-06";
    precio = 1200;
    cantidadMaterial = Math.ceil(area * 1.05); // 5% adicional para solapes
  } else if (material === "tile") {
    nombreMaterial = "Tejas Cerámicas";
    referencia = "TC-10";
    precio = 85; // Precio por unidad
    cantidadMaterial = Math.ceil(area * 10); // Aproximadamente 10 tejas por m²
  } else {
    nombreMaterial = "Lámina PVC";
    referencia = "PVC-15";
    precio = 650;
    cantidadMaterial = Math.ceil(area * 1.1); // 10% adicional para solapes
  }

  const results: MaterialsResult[] = [
    {
      name: nombreMaterial,
      quantity: cantidadMaterial,
      unit: material === "tile" ? "un" : "m²",
      referencia: referencia,
      price: precio,
    },
    {
      name: "Aislante Térmico",
      quantity: Math.ceil(area),
      unit: "m²",
      referencia: "AT-50",
      price: 380,
    },
    {
      name: "Barrera de Vapor",
      quantity: Math.ceil(area),
      unit: "m²",
      referencia: "BV-100",
      price: 120,
    },
  ];

  // Agregar elementos específicos según el tipo de cubierta
  if (type === "flat") {
    results.push({
      name: "Hormigón de Pendiente",
      quantity: Math.ceil(area * 0.05), // 5cm de espesor promedio
      unit: "m³",
      referencia: "HP-05",
      price: 12000,
    });

    results.push({
      name: "Sellador Perimetral",
      quantity: perimetro,
      unit: "m",
      referencia: "SP-10",
      price: 180,
    });
  } else if (type === "pitched") {
    results.push({
      name: "Estructura de Madera",
      quantity: Math.ceil(area * 0.8),
      unit: "m",
      referencia: "EM-10",
      price: 450,
    });

    results.push({
      name: "Clavos y Fijaciones",
      quantity: Math.ceil(area * 20),
      unit: "un",
      referencia: "CF-05",
      price: 2,
    });

    // Agregar cumbrera para techos inclinados
    results.push({
      name: "Cumbrera",
      quantity: Math.ceil(Math.sqrt(area)), // Longitud aproximada
      unit: "m",
      referencia: "CUM-30",
      price: 280,
    });
  }

  // Agregar canaletas si se requiere
  if (includeRainGutters) {
    results.push({
      name: "Canaletas",
      quantity: Math.ceil(perimetro * 0.5), // Aproximadamente en la mitad del perímetro
      unit: "m",
      referencia: "CAN-10",
      price: 320,
    });

    results.push({
      name: "Bajantes",
      quantity: Math.ceil(perimetro / 10), // Aproximadamente una cada 10m de perímetro
      unit: "m",
      referencia: "BAJ-10",
      price: 280,
    });

    results.push({
      name: "Accesorios de Canaleta",
      quantity: Math.ceil(perimetro / 5), // Aproximadamente uno cada 5m
      unit: "un",
      referencia: "ACC-10",
      price: 150,
    });
  }

  return results;
}
