"use client"
import React, { useState } from 'react'
import HeadingTitle from '../shared/HeadingTitle'
import { Checkbox } from '../ui/checkbox';
const features = [
    "All-wheel drive", "AUX input", "Blind spot warning", "Convertible", "Keyless entry", "Snow tires", "USB Charger",
    "Android Auto", "Backup camera", "Bluetooth", "GPS", "Pet friendly", "Sunroof", "USB input",
    "Apple CarPlay", "Bike Rack", "Child seats", "Heated seats", "Ski rack", "Toll pass", "Wheelchair accessible",
];
const CarDetails = () => {
    const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
    const handleCheckboxChange = (feature: string) => {
        setSelectedFeatures(prev =>
            prev.includes(feature)
                ? prev.filter(f => f !== feature)
                : [...prev, feature]
        );
    };
    return (
        <div >
            <HeadingTitle title="Car Details" />
            <div className="container mx-auto py-4">
                <h2 className="text-xl  mb-4">Car Features</h2>
                <div className="grid grid-cols-3 gap-4">
                    {features.map((feature, index) => (
                        <label key={index} className="flex items-center space-x-2">
                            <Checkbox
                                value={feature}
                                checked={selectedFeatures.includes(feature)}
                                onChange={() => handleCheckboxChange(feature)}
                                className="h-4 w-4 "
                            />
                            <span className="text-gray-700">{feature}</span>
                        </label>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CarDetails