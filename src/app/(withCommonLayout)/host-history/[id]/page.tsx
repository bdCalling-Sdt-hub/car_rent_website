"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import img from '../../../../assets/car.jpg'
// import img1 from '../../../../assets/car0.png'
import img2 from '../../../../assets/car0.png'
import img3 from '../../../../assets/car4.jpg'
import img4 from '../../../../assets/car7.png'
import img5 from '../../../../assets/car8.jpg'
import img6 from '../../../../assets/car9.jpg'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Textarea } from '@/components/ui/textarea'

const features = [
    "All-wheel drive", "AUX input", "Blind spot warning", "Convertible", "Keyless entry", "Snow tires", "USB Charger",
    "Android Auto", "Backup camera", "Bluetooth", "GPS", "Pet friendly", "Sunroof", "USB input",
    "Apple CarPlay", "Bike Rack", "Child seats", "Heated seats", "Ski rack", "Toll pass", "Wheelchair accessible",
];
const EditHostCarPage = () => {
    const monthNames = Array.from({ length: 12 }, (_, i) =>
        new Date(0, i).toLocaleString("default", { month: "long" })
    );

    const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
    const handleCheckboxChange = (feature: string) => {
        setSelectedFeatures(prev =>
            prev.includes(feature)
                ? prev.filter(f => f !== feature)
                : [...prev, feature]
        );
    };
    return (
        <div className='container mx-auto my-10 font-lora px-2 md:px-0'>
            <div className='grid grid-cols-1  md:grid-cols-2 gap-5 '>
                <div className='space-y-4'>
                    <Image alt='img' className='w-full h-[40vh] rounded-md' height={800} width={800} src={img} />
                    <Image alt='img' className='w-full h-[40vh] rounded-md' height={800} width={800} src={img2} />
                    <Image alt='img' className='w-full h-[40vh] rounded-md' height={800} width={800} src={img3} />
                </div>
                <div className='space-y-4'>
                    <Image alt='img' className='w-full h-[40vh] rounded-md' height={800} width={800} src={img4} />
                    <Image alt='img' className='w-full h-[40vh] rounded-md' height={800} width={800} src={img5} />
                    <Image alt='img' className='w-full h-[40vh] rounded-md' height={800} width={800} src={img6} />
                </div>
            </div>



            <div className="max-w-4xl  space-y-8 mt-10">
                <div className="space-y-4">
                    <h2 className="text-lg font-semibold">Where is your car located?</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <Input placeholder="Enter your car's location" />
                        <Input placeholder="Enter car plate number" />
                    </div>
                </div>

                <div className="space-y-4 ">
                    <h2 className="text-lg font-semibold">Make and model</h2>
                    <div className="space-y-4">
                        <Input placeholder="Year" />
                        <Input placeholder="Make" />
                        <Input placeholder="Model" />
                    </div>
                </div>

                <div className="space-y-4">
                    <h2 className="text-lg font-semibold">Transmission</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-2">Transmission</label>
                            <div className="flex items-center space-x-4">
                                <Checkbox id="automatic" />
                                <label htmlFor="automatic" className="text-sm">Automatic</label>
                                <Checkbox id="manual" />
                                <label htmlFor="manual" className="text-sm">Manual</label>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Electric Vehicle</label>
                            <div className="flex items-center space-x-4">
                                <Checkbox id="electric-yes" />
                                <label htmlFor="electric-yes" className="text-sm">Yes</label>
                                <Checkbox id="electric-no" />
                                <label htmlFor="electric-no" className="text-sm">No</label>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Car Type</label>
                            <div className="flex items-center space-x-4">
                                <Checkbox id="luxury" />
                                <label htmlFor="luxury" className="text-sm">Luxury</label>
                                <Checkbox id="economy" />
                                <label htmlFor="economy" className="text-sm">Economy</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <h2 className="text-lg font-semibold">Driver license</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-2">Driving License Number</label>
                            <Input placeholder="Driver's license number" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">License Date of Birth</label>
                            <div className="grid grid-cols-3 gap-2">
                                <Select>
                                    <SelectTrigger>Month</SelectTrigger>
                                    <SelectContent>
                                        {monthNames.map((month, i) => (
                                            <SelectItem key={i} value={month}>{month}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <Select>
                                    <SelectTrigger>Day</SelectTrigger>
                                    <SelectContent>
                                        {Array.from({ length: 31 }, (_, i) => (
                                            <SelectItem key={i} value={`${i + 1}`}>{i + 1}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <Select>
                                    <SelectTrigger>Year</SelectTrigger>
                                    <SelectContent>
                                        {Array.from({ length: 100 }, (_, i) => (
                                            <SelectItem key={i} value={`${2024 - i}`}>{2024 - i}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-2">Price per day</label>
                            <Input placeholder="Driver's license number" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">License Expiration Date</label>
                            <div className="grid grid-cols-3 gap-2">
                                <Select>
                                    <SelectTrigger>Month</SelectTrigger>
                                    <SelectContent>
                                        {monthNames.map((month, i) => (
                                            <SelectItem key={i} value={month}>{month}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <Select>
                                    <SelectTrigger>Day</SelectTrigger>
                                    <SelectContent>
                                        {Array.from({ length: 31 }, (_, i) => (
                                            <SelectItem key={i} value={`${i + 1}`}>{i + 1}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <Select>
                                    <SelectTrigger>Year</SelectTrigger>
                                    <SelectContent>
                                        {Array.from({ length: 100 }, (_, i) => (
                                            <SelectItem key={i} value={`${2024 - i}`}>{2024 - i}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='md:flex items-center gap-4'>
                    <div className='w-full'>
                        <label className="block text-sm font-medium mb-2">maximum travel distance for one day</label>
                        <Input placeholder="Type here"  />
                    </div>
                    <div className='w-full'>
                        <label className="block text-sm font-medium mb-2">Per kilometer charge after crossing maximum distance  </label>
                        <Input placeholder="Type here" />
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <div >
                        <label className="block text-sm font-medium mb-2">Discount</label>
                        <Input placeholder="Type day"  />
                    </div>
                    <div >
                        <label className="block text-sm font-medium mb-2">Discount amount</label>
                        <Input placeholder="Type here" />
                    </div>
                </div>

                <p className='text-4xl font-semibold'>Car Details</p>                        
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
                <div className='mt-10'>
                    <h3 className="text-lg font-semibold">Description</h3>
                    <p className="text-sm text-gray-600">
                        Tell guests what makes your car unique and why they ll love driving it.
                    </p>
                    <Textarea
                        placeholder="No need to include your contact info or pickup instructions. Guests will receive those once they book your car."
                        className="mt-2 max-w-6xl"
                        rows={5}
                    />
                </div>
                <div className='flex items-center gap-4'>
                    <div className='w-full'>
                        <label className="block text-sm font-medium mb-2">Seats</label>
                        <Input placeholder="Type day"  />
                    </div>
                    <div className='w-full'>
                        <label className="block text-sm font-medium mb-2">Bags</label>
                        <Input placeholder="Type here" />
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <div className='w-full'>
                        <label className="block text-sm font-medium mb-2">Door</label>
                        <Input placeholder="Type day"  />
                    </div>
                    <div className='w-full'>
                        <label className="block text-sm font-medium mb-2">Fuel type</label>
                        <Input placeholder="Type here" />
                    </div>
                </div>

                <Button className="w-full bg-gray-800 text-white">Update</Button>
            </div>
        </div>
    )
}

export default EditHostCarPage