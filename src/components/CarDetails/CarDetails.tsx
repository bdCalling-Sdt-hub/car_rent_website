"use client";
import React, { useState } from "react";
import HeadingTitle from "../shared/HeadingTitle";
import { Checkbox } from "../ui/checkbox";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Step2Props } from "@/type";
import { useAddCarDetailsMutation } from "@/redux/Api/registerCarApi";
import { toast } from "sonner";
const features = [
  "All-wheel drive",
  "AUX input",
  "Blind spot warning",
  "Convertible",
  "Keyless entry",
  "Snow tires",
  "USB Charger",
  "Android Auto",
  "Backup camera",
  "Bluetooth",
  "GPS",
  "Pet friendly",
  "Sunroof",
  "USB input",
  "Apple CarPlay",
  "Bike Rack",
  "Child seats",
  "Heated seats",
  "Ski rack",
  "Toll pass",
  "Wheelchair accessible",
];
const CarDetails: React.FC<Step2Props> = ({ handleNext }) => {
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [description, setDescription] = useState("");

  // Car details apis
  const [addCarDetails] = useAddCarDetailsMutation();

  // Checkbox all data function
  const handleCheckboxChange = (feature: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((f) => f !== feature)
        : [...prev, feature]
    );
  };

 
  const handleContinue = () => {
    const data = {
      carId: localStorage.getItem("carId"),
      features: selectedFeatures,
      description: description,
    };
    addCarDetails(data)
      .unwrap()
      .then((payload) => {
        toast.success(payload?.message)
        handleNext()
      })
      .catch((error) => toast.error(error?.data?.error));
  };
  return (
    <div>
      <HeadingTitle title="Car Details" />
      <div className="container mx-auto py-4">
        <h2 className="text-xl  mb-4">Car Features</h2>
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
        <p className="text-sm text-gray-600 mt-5">
          Apple CarPlay is a registrar trademark of apple inc. Android is a
          trademark of google LLC.{" "}
        </p>
        {/* Description Section */}
        <div className="mt-10">
          <h3 className="text-lg font-semibold">Description</h3>
          <p className="text-sm text-gray-600">
            Tell guests what makes your car unique and why they love driving it.
          </p>
          <Textarea
            onChange={(e) => setDescription(e.target.value)}
            placeholder="No need to include your contact info or pickup instructions. Guests will receive those once they book your car."
            className="mt-2 max-w-6xl"
            rows={5}
          />
        </div>

        <Button
          className="bg-[#0CFEE8] hover:bg-[#0CFEE8] text-black px-10 mt-5"
          onClick={handleContinue}
          //   disabled={currentStep === TotalSteps}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default CarDetails;
