import Image from "next/image";

export default function ModularFeatures() {
  return (
    <div className="w-full bg-[#1a1333] py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          {/* Primer módulo - Sostenibilidad */}
          <div className="w-full md:w-1/3 ">
            <div className="flex flex-col items-center justify-center p-6 text-center text-white">
              <div className="mb-4 flex justify-center">
                <div className="relative w-12 h-12">
                  <Image
                    src="/modular/handheart.svg"
                    alt="Sostenibilidad"
                    fill
                    className="object-contain opacity-80"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sostenibilidad</h3>
              <p className="text-sm opacity-80">
                Construcción con materiales ecológicos y sostenibles. Reducimos
                el impacto ambiental en nuestros proyectos y viviendas. Los
                materiales son reciclables y eco-amigables.
              </p>
            </div>
          </div>

          {/* Segundo módulo - Construcción Modular (enfocado) */}
          <div className="w-full md:w-1/3 md:scale-105 md:z-10">
            <div className="flex flex-col items-center justify-center p-6 text-center text-white">
              <div className="mb-4 flex justify-center">
                <div className="relative w-12 h-12">
                  <Image
                    src="/modular/home.svg"
                    alt="Construcción Modular"
                    fill
                    className="object-contain opacity-80"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Construcción Modular
              </h3>
              <p className="text-sm opacity-80">
                Construcción en plazos ajustados mediante módulos prefabricados,
                recientemente innovadores, de obra. Servicios de reformas
                integrales. Soluciones constructivas eficientes.
              </p>
            </div>
          </div>

          {/* Tercer módulo - Automatización */}
          <div className="w-full md:w-1/3">
            <div className="flex flex-col items-center justify-center p-6 text-center text-white">
              <div className="mb-4 flex justify-center">
                <div className="relative w-12 h-12">
                  <Image
                    src="/modular/fileedit.svg"
                    alt="Automatización"
                    fill
                    className="object-contain opacity-80"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Automatización</h3>
              <p className="text-sm opacity-80">
                Implementación de sistemas de automatización y control
                electrónico en construcción. Soluciones inteligentes para el
                hogar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
