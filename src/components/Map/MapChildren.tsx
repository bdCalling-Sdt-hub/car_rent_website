"use client";

import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const fixLeafletIcons = () => {
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  });
};

interface LeafletMapProps {
  height: number;
  cars: {
    _id: string;
    carAddress: string;
    location: {
      coordinates: [number, number]; 
    };
  }[];
}

const LeafletMap: React.FC<LeafletMapProps> = ({ height, cars }) => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const leafletMap = useRef<L.Map | null>(null);

  console.log(cars);

  useEffect(() => {
    fixLeafletIcons();

    if (mapRef.current && !leafletMap.current) {
      leafletMap.current = L.map(mapRef.current);

      // Add tile layer
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(leafletMap.current);
    }

    if (leafletMap.current) {
      const bounds = L.latLngBounds([]);

      // Add markers for each car
      cars?.forEach((car) => {
        const [lng, lat] = car.location.coordinates; 

        L.marker([lat, lng])
          .addTo(leafletMap.current!)
          .bindPopup(`<strong>${car.carAddress}</strong>`);

        // Extend bounds to include this marker
        bounds.extend([lat, lng]);
      });

      // Adjust the map view to fit all markers
      if (bounds.isValid()) {
        leafletMap.current.fitBounds(bounds, { padding: [50, 50] });
      } else {
        leafletMap.current.setView([0, 0], 2); 
      }
    }

    // Cleanup map on unmount
    return () => {
      if (leafletMap.current) {
        leafletMap.current.remove();
        leafletMap.current = null;
      }
    };
  }, [cars]);

  return (
    <div
      ref={mapRef}
      style={{
        height: `${height}px`,
        width: "100%",
      }}
    />
  );
};

export default LeafletMap;
