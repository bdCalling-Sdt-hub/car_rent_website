"use client";

import React, { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

interface MapProps {
  center?: [number, number];
  zoom?: number;
}

const Map: React.FC<MapProps> = ({ center = [51.505, -0.09], zoom = 13 }) => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    const map = new maplibregl.Map({
      container: mapContainerRef.current, // Container ID
      style: "https://demotiles.maplibre.org/style.json", // Map style URL
      center: center, // Initial map center
      zoom: zoom, // Initial zoom level
    });

    // Add navigation controls
    map.addControl(new maplibregl.NavigationControl(), "top-right");

    return () => {
      map.remove(); // Clean up the map on component unmount
    };
  }, [center, zoom]);

  return (
    <div
      ref={mapContainerRef}
      style={{ height: "400px", width: "100%" }}
    />
  );
};

export default Map;
