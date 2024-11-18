'use client'
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";
import { useState } from "react";
import {europeanCountries} from '../../../../public/countryData'
import Link from "next/link";
interface Country {
    name: string;
    dial_code: string;
    code: string;
}
const GetApprovedDriverPage = () => {
    const [selectedCountry, setSelectedCountry] = useState<Country>(europeanCountries[0]);

    const handleCountryChange = (code: string) => {
        const country = europeanCountries.find((country) => country.code === code);
        if (country) setSelectedCountry(country);
    };
    return (
        <div className='max-w-4xl mx-auto my-8 font-lora'>
            <p className='text-4xl font-semibold'>Get approved to drive</p>
            <p className='text-sm'>Since this is your first trip, you ll need to provide us with some information before you can check out</p>

            <div className=" mx-auto p-4 space-y-6 mt-10">
                {/* Email Verification */}
                <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-medium text-lg">Verify your email</span>
                    <span className="text-green-600 text-lg">✔</span>
                </div>

                {/* Mobile Number Section */}
                <div className="space-y-4">
                    <h2 className="font-medium text-lg">Mobile Number</h2>
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Country Code
                        </label>
                        <Select onValueChange={handleCountryChange} defaultValue={selectedCountry.code}>
                            <SelectTrigger className="w-full">{selectedCountry.name}</SelectTrigger>
                            <SelectContent>
                                {europeanCountries.map((country) => (
                                    <SelectItem key={country.code} value={country.code}>
                                        {country.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="pb-8">
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Phone Number
                        </label>
                        <div className="flex space-x-2">
                            <Input
                                value={selectedCountry.dial_code}
                                readOnly
                                className="w-1/4 bg-gray-100"
                            />
                            <Input placeholder="Phone Number" className="w-3/4" />
                        </div>
                    </div>
                    <Link href={'/license-verification'} className="w-full bg-[#6A6A6A]  px-10 py-2 rounded-md text-white">Continue</Link>
                </div>

                {/* Driver's License */}
                <div className="border-t pt-4">
                    <h2 className="font-medium text-lg">Drivers License</h2>
                </div>

                {/* Payment Method */}
                <div className="border-t pt-4">
                    <h2 className="font-medium text-lg">Payment Method</h2>
                </div>
            </div>
        </div>
    )
}

export default GetApprovedDriverPage