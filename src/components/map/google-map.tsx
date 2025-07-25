'use client';

import { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { LoadingSpinner } from '@/components/loading-spinner';

// Definir tipos para las ubicaciones
export interface Location {
  id: string;
  name: string;
  address: string;
  position: {
    lat: number;
    lng: number;
  };
  type: 'office' | 'factory' | 'store';
  phone?: string;
  hours?: string;
  url?: string;
}

interface GoogleMapProps {
  apiKey: string;
  locations: Location[];
  defaultCenter?: { lat: number; lng: number };
  defaultZoom?: number;
  height?: string;
  width?: string;
  className?: string;
}

export function GoogleMap({
  apiKey,
  locations,
  defaultCenter = { lat: -35.6566, lng: -63.7568 }, // Centro aproximado de La Pampa, Argentina
  defaultZoom = 14,
  height = '500px',
  width = '100%',
  className = '',
}: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [infoWindow, setInfoWindow] = useState<google.maps.InfoWindow | null>(
    null
  );

  useEffect(() => {
    if (!apiKey) {
      console.error('Google Maps API key is required');
      setLoading(false);
      return;
    }

    // Calcular el centro del mapa basado en las ubicaciones
    const calculateCenter = () => {
      if (locations.length === 0) return defaultCenter;
      if (locations.length === 1) return locations[0].position;

      // Si hay múltiples ubicaciones, calcular el centro
      const bounds = new google.maps.LatLngBounds();
      locations.forEach((location) => {
        bounds.extend(location.position);
      });

      return {
        lat: (bounds.getNorthEast().lat() + bounds.getSouthWest().lat()) / 2,
        lng: (bounds.getNorthEast().lng() + bounds.getSouthWest().lng()) / 2,
      };
    };

    const loader = new Loader({
      apiKey,
      version: 'weekly',
      libraries: ['places', 'marker'],
    });

    loader
      .load()
      .then(() => {
        if (mapRef.current) {
          // Crear el mapa
          const mapInstance = new google.maps.Map(mapRef.current, {
            center: defaultCenter,
            zoom: defaultZoom,
            mapTypeControl: true,
            streetViewControl: true,
            fullscreenControl: true,
            zoomControl: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [
              {
                featureType: 'poi',
                elementType: 'labels',
                stylers: [{ visibility: 'on' }],
              },
            ],
          });

          // Crear una ventana de información
          const infoWindowInstance = new google.maps.InfoWindow();
          setInfoWindow(infoWindowInstance);

          // Añadir marcadores para cada ubicación
          const bounds = new google.maps.LatLngBounds();

          locations.forEach((location) => {
            const marker = new google.maps.Marker({
              position: location.position,
              map: mapInstance,
              title: location.name,
              animation: google.maps.Animation.DROP,
              icon: {
                url: getMarkerIcon(location.type),
                scaledSize: new google.maps.Size(32, 32),
              },
            });

            // Extender los límites para incluir este marcador
            bounds.extend(location.position);

            // Añadir evento de clic al marcador
            marker.addListener('click', () => {
              infoWindowInstance.setContent(createInfoWindowContent(location));
              infoWindowInstance.open(mapInstance, marker);
            });
          });

          // Ajustar el mapa para mostrar todos los marcadores
          if (locations.length > 1) {
            mapInstance.fitBounds(bounds);
            // Asegurar un nivel de zoom razonable
            const listener = google.maps.event.addListener(
              mapInstance,
              'idle',
              () => {
                if (mapInstance.getZoom()! > 16) {
                  mapInstance.setZoom(16);
                }
                google.maps.event.removeListener(listener);
              }
            );
          } else if (locations.length === 1) {
            mapInstance.setCenter(locations[0].position);
            mapInstance.setZoom(16);
          }

          setMap(mapInstance);
        }
      })
      .catch((error) => {
        console.error('Error loading Google Maps:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [apiKey, locations, defaultCenter, defaultZoom]);

  // Función para obtener el icono del marcador según el tipo de ubicación
  const getMarkerIcon = (type: string): string => {
    switch (type) {
      case 'office':
        return 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png';
      case 'factory':
        return 'https://maps.google.com/mapfiles/ms/icons/red-dot.png';
      case 'store':
        return 'https://maps.google.com/mapfiles/ms/icons/green-dot.png';
      default:
        return 'https://maps.google.com/mapfiles/ms/icons/purple-dot.png';
    }
  };

  // Función para crear el contenido de la ventana de información
  const createInfoWindowContent = (location: Location): string => {
    return `
      <div style="max-width: 300px; padding: 10px;">
        <h3 style="margin: 0 0 8px; font-size: 16px; font-weight: bold;">${location.name}</h3>
        <p style="margin: 0 0 5px; font-size: 14px;">${location.address}</p>
        ${location.phone ? `<p style="margin: 0 0 5px; font-size: 14px;"><strong>Teléfono:</strong> ${location.phone}</p>` : ''}
        ${location.hours ? `<p style="margin: 0 0 5px; font-size: 14px;"><strong>Horario:</strong> ${location.hours}</p>` : ''}
        ${location.url ? `<p style="margin: 8px 0 0;"><a href="${location.url}" target="_blank" style="color: #1D6191; text-decoration: none;">Ver en Google Maps</a></p>` : ''}
      </div>
    `;
  };

  return (
    <div className={`relative ${className}`} style={{ height, width }}>
      {loading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-gray-100 bg-opacity-50">
          <LoadingSpinner />
        </div>
      )}
      <div ref={mapRef} className="h-full w-full rounded-lg shadow-md" />
    </div>
  );
}
