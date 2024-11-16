'use client';
import dynamic from 'next/dynamic';
const LeafletMap = dynamic(() => import('./MapChildren'), { ssr: false });
const MapParent: React.FC = () => {
    if (typeof window === 'undefined') {
        return <></>
    }

    return (
        <div>
            <LeafletMap />
        </div>
    );
};

export default MapParent;
