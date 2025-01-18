"use client";
import dynamic from "next/dynamic";
const LeafletMap = dynamic(() => import("./MapChildren"), { ssr: false });
interface MapParentProps {
  height: number;
  cars?: {
    _id: string;
    carAddress: string;
    location: {
      coordinates: [number, number]; 
    };
  }[];
}
const MapParent: React.FC<MapParentProps> = ({ height, cars }) => {
  if (typeof window === "undefined") {
    return <></>;
  }

  return (
    <div>
      <LeafletMap height={height} cars={cars ?? []} />
    </div>
  );
};

export default MapParent;
