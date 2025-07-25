'use client';

import { useState } from 'react';
import { IframeMap } from '@/components/map/iframe-map';

// Ubicaciones de AISPLAC
const aisplacLocations = [
  {
    id: 'oficinas',
    name: 'Oficinas AISPLAC SRL',
    address: 'José Viscardis 345, Gral. Pico, La Pampa, Argentina',
    position: { lat: -35.6566, lng: -63.7568 },
    type: 'office',
    phone: '+54 2302 42-1234', // Reemplazar con el teléfono real
    hours: 'Lunes a Viernes: 8:00 - 18:00',
    url: 'https://maps.app.goo.gl/u3cEEHNonN3GuoAY7',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3222.176491024029!2d-63.75930!3d-35.65661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95c37d405e71b2e9%3A0x2c5b4b3d4a3b5f7!2sJos%C3%A9%20Viscardis%20345%2C%20L6360%20Gral.%20Pico%2C%20La%20Pampa!5e0!3m2!1ses!2sar!4v1621234567890!5m2!1ses!2sar',
  },
  {
    id: 'fabrica',
    name: 'Fábrica AISPLAC SRL',
    address: 'José Viscardis 1050, Gral. Pico, La Pampa, Argentina',
    position: { lat: -35.658, lng: -63.759 },
    type: 'factory',
    phone: '+54 2302 42-5678', // Reemplazar con el teléfono real
    hours: 'Lunes a Viernes: 7:00 - 17:00',
    url: 'https://maps.app.goo.gl/z2nFgnnmjQ7y3i92A',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3222.176491024029!2d-63.75901!3d-35.65801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95c37d405e71b2e9%3A0x2c5b4b3d4a3b5f7!2sJos%C3%A9%20Viscardis%201050%2C%20L6360%20Gral.%20Pico%2C%20La%20Pampa!5e0!3m2!1ses!2sar!4v1621234567890!5m2!1ses!2sar',
  },
  {
    id: 'modular-solar',
    name: 'Arquitectura Modular - Energía Solar',
    address:
      'Sampayo N° 90 - Parque Industrial Gral. Pico, La Pampa, Argentina',
    position: { lat: -35.6816315, lng: -63.7814777 },
    type: 'store',
    phone: '+54 02302 204056',
    hours: 'Lunes a Viernes: 8:00 - 17:00',
    url: 'https://www.google.com.ar/maps/place/Aisplac+SRL.+Arquitectura+Modular+-+Solar/@-35.6816556,-63.7820771,441m/data=!3m1!1e3!4m6!3m5!1s0x95c36368e2bc86b3:0xec4f330bd58ea45a!8m2!3d-35.6816315!4d-63.7814777!16s%2Fg%2F11xm1057nq?entry=ttu&g_ep=EgoyMDI1MDcyMC4wIKXMDSoASAFQAw%3D%3D',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1611.1!2d-63.7820771!3d-35.6816556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95c36368e2bc86b3:0xec4f330bd58ea45a!2sAisplac+SRL.+Arquitectura+Modular+-+Solar!5e0!3m2!1ses!2sar!4v1621234567890!5m2!1ses!2sar',
  },
];

// URL para el mapa que muestra ambas ubicaciones
const combinedMapUrl =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3222.176491024029!2d-63.75901!3d-35.65801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95c37d405e71b2e9%3A0x2c5b4b3d4a3b5f7!2sJos%C3%A9%20Viscardis%201050%2C%20L6360%20Gral.%20Pico%2C%20La%20Pampa!5e0!3m2!1ses!2sar!4v1621234567890!5m2!1ses!2sar';

export default function MapSection() {
  const [focusedLocation, setFocusedLocation] = useState<string | null>(null);

  const currentMapUrl = focusedLocation
    ? aisplacLocations.find((loc) => loc.id === focusedLocation)?.mapUrl ||
      combinedMapUrl
    : combinedMapUrl;

  // Función para enfocar una ubicación
  const focusLocation = (locationId: string) => {
    setFocusedLocation(locationId);
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-52">
      <h2 className="mb-24 font-bold">Nuestras Ubicaciones</h2>

      {/* Contenedor principal con diseño de dos columnas */}
      <div className="flex flex-col gap-6 lg:flex-row">
        {/* Columna izquierda: Lista de ubicaciones */}
        <div className="flex w-full flex-col gap-4 lg:w-1/3">
          <div className="space-y-4">
            {aisplacLocations.map((location) => (
              <div
                key={location.id}
                onClick={() => focusLocation(location.id)}
                className={`rounded-lg border bg-white p-4 shadow-sm ${
                  focusedLocation === location.id
                    ? 'border-2 border-[#1D6191]'
                    : 'border-gray-200'
                } cursor-pointer transition-all hover:shadow-md`}
              >
                <div className="flex items-start">
                  {/* Icono según el tipo de ubicación */}
                  <div className="mr-3 text-[#1D6191]">
                    {(() => {
                      switch (location.type) {
                        case 'office':
                          return (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <rect
                                x="4"
                                y="2"
                                width="16"
                                height="20"
                                rx="2"
                                ry="2"
                              ></rect>
                              <line x1="12" y1="6" x2="12" y2="6.01"></line>
                              <line x1="12" y1="10" x2="12" y2="16"></line>
                            </svg>
                          );
                        case 'factory':
                          return (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
                            </svg>
                          );
                        case 'store':
                          return (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                              <polyline points="9 22 9 12 15 12 15 22"></polyline>
                            </svg>
                          );
                        default:
                          return (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <circle cx="12" cy="12" r="10"></circle>
                              <path d="M12 6v6l4 2"></path>
                            </svg>
                          );
                      }
                    })()}
                  </div>

                  <div className="flex-1 text-left">
                    <h2 className="text-lg font-semibold text-black">
                      {location.name}
                    </h2>
                    <p className="text-sm text-gray-600">{location.address}</p>

                    <div className="mt-2 text-sm text-gray-500">
                      {location.hours}
                    </div>

                    <div className="mt-3">
                      <a
                        href={location.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-[#1D6191] hover:text-[#174d77]"
                        onClick={(e) => e.stopPropagation()} // Evitar que el clic en el enlace active la tarjeta
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-1 h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Google Maps
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Columna derecha: Mapa */}
        <div className="w-full lg:w-2/3">
          <div className="top-4 overflow-hidden rounded-lg border border-gray-200 shadow-md">
            <IframeMap
              src={currentMapUrl}
              height="600px"
              className="w-full"
              title={
                focusedLocation
                  ? `Ubicación: ${
                      aisplacLocations.find((loc) => loc.id === focusedLocation)
                        ?.name
                    }`
                  : 'Ubicaciones de AISPLAC'
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
