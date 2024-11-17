'use client';
import dynamic from 'next/dynamic';
const LeafletMap = dynamic(() => import('./MapChildren'), { ssr: false });
interface MapParentProps {
    height: number;
}
const MapParent: React.FC<MapParentProps> = ({height}) => {
    if (typeof window === 'undefined') {
        return <></>
    }

    return (
        <div>
            <LeafletMap height={height} />
        </div>
    );
};

export default MapParent;
