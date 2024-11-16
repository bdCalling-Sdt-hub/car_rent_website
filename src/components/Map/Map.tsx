"use client";

import React, { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

interface MapProps {
  center?: [number, number];
  zoom?: number;
}

const Map: React.FC<MapProps> = ({ center = [51.5074, -0.1278], zoom = 12 }) => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Initialize the map
    const map = new maplibregl.Map({
      container: mapContainerRef.current,
      style: "https://demotiles.maplibre.org/style.json",
      center: center,
      zoom: zoom,
    });

    // Add navigation controls
    map.addControl(new maplibregl.NavigationControl(), "top-right");

    // Add a sample GeoJSON route
    const routeGeoJSON: GeoJSON.FeatureCollection<GeoJSON.LineString> = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: {
            type: "LineString",
            coordinates: [
              [-0.1278, 51.5074],
              [-0.1425, 51.515],
              [-0.161, 51.525],
            ],
          },
          properties: {
            name: "London Route",
          },
        },
      ],
    };

    map.on("load", () => {
      // Add the GeoJSON source
      map.addSource("route", {
        type: "geojson",
        data: routeGeoJSON,
      });

      // Add the route as a layer
      map.addLayer({
        id: "route-layer",
        type: "line",
        source: "route",
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#FF0000",
          "line-width": 4,
        },
      });
    });

    return () => {
      // Cleanup the map instance
      map.remove();
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
