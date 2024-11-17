'use client';

import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const fixLeafletIcons = () => {
    L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
        iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    });
};
interface LeafletMapProps {
    height: number;
}

const LeafletMap: React.FC<LeafletMapProps> = ({height}) => {
    const mapRef = useRef<HTMLDivElement | null>(null);
    const leafletMap = useRef<L.Map | null>(null); 

    useEffect(() => {
        fixLeafletIcons();
        if (mapRef.current && !leafletMap.current) {
            leafletMap.current = L.map(mapRef.current).setView([51.505, -0.09], 13);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            }).addTo(leafletMap.current);
            L.marker([51.505, -0.09])
                .addTo(leafletMap.current)
                .bindPopup('A pretty CSS3 popup.<br />Easily customizable.')
                .openPopup();
        }

        // Cleanup map on unmount
        // return () => {
        //     leafletMap.current?.remove();
        // };
    }, []);

    return <div ref={mapRef}  style={{
        height: `${height}px`,
        width: '100%',
    }} />;
};

export default LeafletMap;
