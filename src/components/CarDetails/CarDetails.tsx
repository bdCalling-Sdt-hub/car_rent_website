"use client"
import React, { useState } from 'react'
import HeadingTitle from '../shared/HeadingTitle'
import { Checkbox } from '../ui/checkbox';
import { Textarea } from '../ui/textarea';
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
                                onCheckedChange={() => handleCheckboxChange(feature)}
                                className="h-4 w-4 "
                            />
                            <span className="text-gray-700">{feature}</span>
                        </label>
                    ))}
                </div>
                    <p className='text-sm text-gray-600 mt-5'>Apple CarPlay is a registrar trademark of apple inc. Android is a trademark of google LLC.  </p>
                {/* Description Section */}
                <div className='mt-10'>
                    <h3 className="text-lg font-semibold">Description</h3>
                    <p className="text-sm text-gray-600">
                        Tell guests what makes your car unique and why they'll love driving it.
                    </p>
                    <Textarea
                        placeholder="No need to include your contact info or pickup instructions. Guests will receive those once they book your car."
                        className="mt-2 max-w-6xl"
                        rows={5}
                    />
                </div>
            </div>
        </div>
    )
}

export default CarDetails