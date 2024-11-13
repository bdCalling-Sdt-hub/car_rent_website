"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import HeadingTitle from "../shared/HeadingTitle";
import { Input } from "../ui/input";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import DriverLicense from "../DriverLicense/DriverLicense";
import CarDetails from "../CarDetails/CarDetails";
import CarPhoto from "../CarPhoto/CarPhoto";


const TotalSteps = 7;

const MultiStepForm = () => {
    const [currentStep, setCurrentStep] = useState(1);

    // Calculate progress based on current step
    const progress = (currentStep / TotalSteps) * 100;

    const handleNext = () => {
        if (currentStep < TotalSteps) {
            setCurrentStep((prev) => prev + 1);
        }
    };

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep((prev) => prev - 1);
        }
    };
    return (
        <div className="container mx-auto py-10 font-lora">
            {/* Progress bar */}
            <div>
                <p>List your car</p>
                <div className="flex gap-5 my-5">
                    <p className="border-r-2 pr-3">{`Step ${currentStep} of ${TotalSteps}`}</p>
                    <p className="border-r-2 pr-3">Next Car availability</p>
                    <p className="text-[#1E3F66]">Start over</p>
                </div>
            </div>
            <div className="flex items-center justify-between mb-4 gap-5">
                <div className="relative w-full h-4 bg-[#DDEDFC] rounded-full overflow-hidden">
                    <div
                        className="h-full bg-[#528AAE] transition-all duration-300"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
                <Button variant="outline">View all Steps</Button>
            </div>

            {/* Conditional rendering for each form step */}
            <div className=" ">
                {currentStep === 1 && (
                    <Step1 />
                )}
                {currentStep === 2 && (
                    <Step2 />
                )}
                {currentStep === 3 && (
                    <Step3 />
                )}
                {currentStep === 4 && (
                    <Step4 />
                )}
                {currentStep === 5 && (
                    <DriverLicense />
                )}
                {currentStep === 6 && (
                    <CarDetails />
                )}
                {currentStep === 7 && (
                    <CarPhoto />
                )}

            </div>

            {/* Navigation controls */}
            <div className=" mt-4">

                <Button className="bg-[#6A6A6A] px-10" onClick={handleNext} disabled={currentStep === TotalSteps}>
                    Continue
                </Button>
            </div>
        </div>
    )
}
const Step2 = () => (
    <div className="max-w-[60%]">
        <HeadingTitle title="License Plate" />
        <p className="mt-5">Your license plate information won t be publicly visible</p>
        <p className="mt-10 pb-2">Plate Number</p>
        <Input placeholder="Enter your plate number" />
    </div>
);

const Step1 = () => (
    <div className="max-w-[60%]">
        <HeadingTitle title="Location" />
        <p className="mt-10 mb-1">Where is your car located?</p>
        <Input placeholder="Where your car located?" />
        <div className="w-full">
            <p className="my-2">Select City</p>
            <Select>
                <SelectTrigger className="w-[100%]">
                    <SelectValue placeholder="Select a timezone" />
                </SelectTrigger>
                <SelectContent className="h-full">
                    <SelectGroup>
                        <SelectLabel>North America</SelectLabel>
                        <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                        <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
                        <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
                        <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                        <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
                        <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
                    </SelectGroup>
                    <SelectGroup>
                        <SelectLabel>Europe & Africa</SelectLabel>
                        <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
                        <SelectItem value="cet">Central European Time (CET)</SelectItem>
                        <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
                        <SelectItem value="west">
                            Western European Summer Time (WEST)
                        </SelectItem>
                        <SelectItem value="cat">Central Africa Time (CAT)</SelectItem>
                        <SelectItem value="eat">East Africa Time (EAT)</SelectItem>
                    </SelectGroup>
                    <SelectGroup>
                        <SelectLabel>Asia</SelectLabel>
                        <SelectItem value="msk">Moscow Time (MSK)</SelectItem>
                        <SelectItem value="ist">India Standard Time (IST)</SelectItem>
                        <SelectItem value="cst_china">China Standard Time (CST)</SelectItem>
                        <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
                        <SelectItem value="kst">Korea Standard Time (KST)</SelectItem>
                        <SelectItem value="ist_indonesia">
                            Indonesia Central Standard Time (WITA)
                        </SelectItem>
                    </SelectGroup>
                    <SelectGroup>
                        <SelectLabel>Australia & Pacific</SelectLabel>
                        <SelectItem value="awst">
                            Australian Western Standard Time (AWST)
                        </SelectItem>
                        <SelectItem value="acst">
                            Australian Central Standard Time (ACST)
                        </SelectItem>
                        <SelectItem value="aest">
                            Australian Eastern Standard Time (AEST)
                        </SelectItem>
                        <SelectItem value="nzst">New Zealand Standard Time (NZST)</SelectItem>
                        <SelectItem value="fjt">Fiji Time (FJT)</SelectItem>
                    </SelectGroup>
                    <SelectGroup>
                        <SelectLabel>South America</SelectLabel>
                        <SelectItem value="art">Argentina Time (ART)</SelectItem>
                        <SelectItem value="bot">Bolivia Time (BOT)</SelectItem>
                        <SelectItem value="brt">Brasilia Time (BRT)</SelectItem>
                        <SelectItem value="clt">Chile Standard Time (CLT)</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    </div>
);

const Step3 = () => (
    <div className="max-w-[60%]">
        <HeadingTitle title="Make and model" />

        <div className="w-full mt-5">
            <p className="my-2">Year</p>
            <Select>
                <SelectTrigger className="w-[100%]">
                    <SelectValue placeholder="Enter year" />
                </SelectTrigger>
                <SelectContent className="h-full">
                    <SelectGroup>
                        <SelectItem value="est">2012</SelectItem>
                        <SelectItem value="cst">2013</SelectItem>
                        <SelectItem value="mst">2014</SelectItem>
                        <SelectItem value="mst">2015</SelectItem>
                        <SelectItem value="mst">2016</SelectItem>
                    </SelectGroup>


                </SelectContent>
            </Select>
        </div>
        <div className="w-full mt-5">
            <p className="my-2">Make</p>
            <Select>
                <SelectTrigger className="w-[100%]">
                    <SelectValue placeholder="Enter year" />
                </SelectTrigger>
                <SelectContent className="h-full">
                    <SelectGroup>
                        <SelectItem value="est">2012</SelectItem>
                        <SelectItem value="cst">2013</SelectItem>
                        <SelectItem value="mst">2014</SelectItem>
                        <SelectItem value="mst">2015</SelectItem>
                        <SelectItem value="mst">2016</SelectItem>
                    </SelectGroup>


                </SelectContent>
            </Select>
        </div>
        <div className="w-full mt-5">
            <p className="my-2">Model</p>
            <Select>
                <SelectTrigger className="w-[100%]">
                    <SelectValue placeholder="Enter year" />
                </SelectTrigger>
                <SelectContent className="h-full">
                    <SelectGroup>
                        <SelectItem value="est">Acura</SelectItem>
                        <SelectItem value="cst">Audi</SelectItem>
                        <SelectItem value="mst">Cadilac</SelectItem>
                        <SelectItem value="mst">Ford</SelectItem>
                        <SelectItem value="mst">Fiat</SelectItem>
                    </SelectGroup>


                </SelectContent>
            </Select>
        </div>
    </div>
)

const Step4 = () => (
    <div>
        <HeadingTitle title="Transmission" />
        <div className="mt-10">
            <p className="pb-2">Transmission</p>
            <RadioGroup defaultValue="option-one" className="flex gap-10">
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-one" id="option-one" />
                    <Label htmlFor="option-one">Automatic</Label>
                </div>
                <div className="flex items-center space-x-2 mt-2">
                    <RadioGroupItem value="option-two" id="option-two" />
                    <Label htmlFor="option-two">Manual</Label>
                </div>
            </RadioGroup>
        </div>
        <div className="mt-10">
            <p className="pb-3">Electric Vehicle</p>
            <RadioGroup defaultValue="option-one" className="flex gap-10">
                <div className="flex items-center space-x-2 mt-2">
                    <RadioGroupItem value="option-one" id="option-one" />
                    <Label htmlFor="option-one">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-two" id="option-two" />
                    <Label htmlFor="option-two">No</Label>
                </div>
            </RadioGroup>
        </div>
        <div className="mt-10">
            <p className="pb-2">Car Type</p>
            <RadioGroup defaultValue="option-one" className="flex gap-10">
                <div className="flex items-center space-x-2 mt-2">
                    <RadioGroupItem value="option-one" id="option-one" />
                    <Label htmlFor="option-one">Luxury</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-two" id="option-two" />
                    <Label htmlFor="option-two">Economy</Label>
                </div>
            </RadioGroup>
        </div>
        <div className="mt-10 mb-5">
            <p className="pb-2">Vehicle type</p>
            <RadioGroup defaultValue="option-one" className="flex gap-10">
                <div className="flex items-center space-x-2 mt-2">
                    <RadioGroupItem value="option-one" id="option-one" />
                    <Label htmlFor="option-one">Car</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-two" id="option-two" />
                    <Label htmlFor="option-two">SUV</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="minivans" id="minivans" />
                    <Label htmlFor="option-two">Minivans</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="trucks" id="trucks" />
                    <Label htmlFor="option-two">Trucks</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="cargo" id="cargo" />
                    <Label htmlFor="option-two">Cargo Vans</Label>
                </div>
            </RadioGroup>
        </div>
    </div>
)

export default MultiStepForm