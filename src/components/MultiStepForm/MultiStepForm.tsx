"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import HeadingTitle from "../shared/HeadingTitle";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import DriverLicense from "../DriverLicense/DriverLicense";
import CarDetails from "../CarDetails/CarDetails";
import CarPhoto from "../CarPhoto/CarPhoto";
import ViewStep from "../ViewStep/ViewStep";
import Link from "next/link";
import {
  useAddLicensePlateMutation,
  useAddMakeModelYearMutation,
  useGetCityQuery,
} from "@/redux/Api/registerCarApi";
import { CarModel, location, Step2Props } from "@/type";
import { toast } from "sonner";

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

  return (
    <div className="container mx-auto py-10 font-lora px-2 md:px-0">
      {/* Progress bar */}
      <div>
        <p>List your car</p>
        <div className="md:flex gap-5 my-5">
          <p className="md:border-r-2 pr-3">{`Step ${currentStep} of ${TotalSteps}`}</p>
          <p className="md:border-r-2 pr-3">Next Car availability</p>
          <p className="text-[#1E3F66]">Start over</p>
        </div>
      </div>
      <div className="flex items-center justify-between mb-4 gap-5">
        <div className="relative w-full h-4 bg-[#DDEDFC] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#0CFEE8] transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <ViewStep />
      </div>

      {/* Conditional rendering for each form step */}
      <div className=" ">
        {currentStep === 1 && (
          <Step1 handleNext={handleNext} currentStep={currentStep} />
        )}
        {currentStep === 2 && (
          <Step2 handleNext={handleNext} currentStep={currentStep} />
        )}
        {currentStep === 3 && (
          <Step3 handleNext={handleNext} currentStep={currentStep} />
        )}
        {currentStep === 4 && <Step4 />}
        {currentStep === 5 && <DriverLicense />}
        {currentStep === 6 && <CarDetails />}
        {currentStep === 7 && <CarPhoto />}
      </div>

      {/* Navigation controls */}
      <div className=" mt-4">
        {currentStep === 7 && (
          <Link
            href={"/host-history"}
            className="bg-[#0CFEE8] py-2 rounded-md  px-10"
          >
            Send Request
          </Link>
        )}
      </div>
    </div>
  );
};

const Step1: React.FC<Step2Props> = ({ handleNext, currentStep }) => {
  // const [location, setLocation] = useState<string | undefined>()
  // const {data : getLocation} = useGetLocationQuery(location)
  // console.log(getLocation);
  // Get city api
  const { data: getCity } = useGetCityQuery({});
  //   console.log(getCity?.data?.destinations);
  const handleContinue = () => {
    console.log("License Plate:");
    handleNext();
  };

  return (
    <div className="md:max-w-[60%] w-full ">
      <HeadingTitle title="Location" />
      <p className="mt-10 mb-1">Where is your car located?</p>
      <Input placeholder="Where your car located?" />
      <div className="w-full">
        <p className="my-2">Select City</p>
        <Select>
          <SelectTrigger className="w-[100%]">
            <SelectValue placeholder="Select a city" />
          </SelectTrigger>
          <SelectContent className="h-full">
            <SelectGroup>
              {getCity?.data?.destinations?.map((city: location) => (
                <SelectItem key={city?._id} value={city?.name}>
                  {city?.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Button
          className="bg-[#0CFEE8] hover:bg-[#0CFEE8] text-black px-10 mt-5"
          onClick={handleContinue}
          disabled={currentStep === TotalSteps}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

const Step2: React.FC<Step2Props> = ({ handleNext, currentStep }) => {
  const [addLicensePlateNumber] = useAddLicensePlateMutation();
  const [licensePlate, setLicensePlate] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLicensePlate(e.target.value);
  };

  const handleContinue = () => {
    const data = {
      carId: "67849009decda04907565f36",
      licensePlateNum: licensePlate,
    };

    addLicensePlateNumber(data)
      .unwrap()
      .then((payload) => {
        toast.success(payload?.message);
        handleNext();
      })
      .catch((error) => toast.error(error?.data?.message));
  };

  return (
    <div className="md:max-w-[60%] w-full ">
      <HeadingTitle title="License Plate" />
      <p className="mt-5">
        Your Licence plate information won t be publicly visible
      </p>
      <p className="mt-10 pb-2">Plate Number</p>
      <Input
        onChange={handleInputChange}
        placeholder="Enter your plate number"
      />
      <Button
        className="bg-[#0CFEE8] hover:bg-[#0CFEE8] text-black px-10 mt-5"
        onClick={handleContinue}
        disabled={currentStep === TotalSteps}
      >
        Continue
      </Button>
    </div>
  );
};

interface CarMake {
  make_id: string;
  make_display: string;
}

const Step3: React.FC<Step2Props> = ({ handleNext, currentStep }) => {
  const [addMakeModelYear] = useAddMakeModelYearMutation();

  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear.toString());
  const [selectedMake, setSelectedMake] = useState<string>();
  const [selectedModel, setSelectedModel] = useState<string>();
  const years = Array.from({ length: currentYear - 1940 }, (_, i) => 1941 + i);
  const [carMakes, setCarMakes] = useState<CarMake[]>([]);
  const [carModels, setCarModels] = useState<CarModel[]>([]);

  useEffect(() => {
    const fetchCarData = async () => {
      try {
        const response = await fetch(`/api/car-data?year=${selectedYear}`);
        const text = await response.text();
        const json = JSON.parse(text.replace(/^\?\(/, "").replace(/\);$/, ""));
        setCarMakes(json.Makes || []);
      } catch (error) {
        console.error("Error fetching car data:", error);
      }
    };

    fetchCarData();
  }, [selectedYear]);

  useEffect(() => {
    const fetchCarModels = async () => {
      try {
        const response = await fetch(
          `/api/car-models?make=${selectedMake}&year=${selectedYear}`
        );

        if (!response.ok) {
          console.error("Error fetching car models:", response.statusText);
          return;
        }

        const text = await response.text();
        const json = JSON.parse(text.replace(/^\?\(/, "").replace(/\);$/, ""));
        setCarModels(json.Models || []);
      } catch (error) {
        console.error("Error fetching car models:", error);
      }
    };

    fetchCarModels();
  }, [selectedMake, selectedYear]);

  //   console.log(selectedMake);
  console.log(carModels);

  // Handle year selection
  const handleYearChange = (value: string) => {
    setSelectedYear(value);
  };

  const handleMakeChange = (value: string) => {
    setSelectedMake(value);
  };
  const handleModelChange = (value: string) => {
    setSelectedModel(value);
  };
  const handleContinue = () => {
    const data = {
      carId: "67849009decda04907565f36",
      make: selectedMake,
      model: selectedModel,
      year: selectedYear,
    };
    addMakeModelYear(data)
      .unwrap()
      .then((payload) => {
        toast.success(payload?.message);
        handleNext();
      })
      .catch((error) => toast.error(error?.data?.message));

    // console.log(selectedModel);
    // console.log(selectedMake);
    // console.log(selectedYear);
  };
//   console.log(selectedModel);

  return (
    <div className="md:max-w-[60%] w-full">
      <HeadingTitle title="Make and model" />

      <div className="w-full mt-5">
        <p className="my-2">Year</p>
        <Select value={selectedYear} onValueChange={handleYearChange}>
          <SelectTrigger className="w-[100%]">
            <SelectValue placeholder="Enter year" />
          </SelectTrigger>
          <SelectContent className="h-full">
            <SelectGroup>
              {years?.map((year) => (
                <SelectItem key={year} value={year?.toString()}>
                  {year}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="w-full mt-5">
        <p className="my-2">Make</p>
        <Select onValueChange={handleMakeChange}>
          <SelectTrigger className="w-[100%]">
            <SelectValue placeholder="Enter year" />
          </SelectTrigger>
          <SelectContent className="h-full">
            <SelectGroup>
              {carMakes?.map((car) => (
                <SelectItem key={car?.make_id} value={car?.make_id}>
                  {car?.make_id}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="w-full mt-5">
        <p className="my-2">Model</p>
        <Select onValueChange={handleModelChange}>
          <SelectTrigger className="w-[100%]">
            <SelectValue placeholder="Enter year" />
          </SelectTrigger>
          <SelectContent className="h-full">
            <SelectGroup>
              {carModels?.map((model) => (
                <SelectItem key={model?.model_name} value={model?.model_name}>
                  {model?.model_name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button
          className="bg-[#0CFEE8] hover:bg-[#0CFEE8] text-black px-10 mt-5"
          onClick={handleContinue}
          disabled={currentStep === TotalSteps}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

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
      <RadioGroup defaultValue="option-one" className="md:flex gap-10">
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
);

export default MultiStepForm;
