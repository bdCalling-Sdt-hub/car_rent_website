"use client";

import React, { useEffect, useRef, useState } from "react";
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
import AddPaymentInfo from "../AddPaymentInfo/AddPaymentInfo";
import CarPhoto from "../CarPhoto/CarPhoto";
import ViewStep from "../ViewStep/ViewStep";
import {
  useAddCarLocationMutation,
  useAddCarTransmissionMutation,
  useAddLicensePlateMutation,
  useAddMakeModelYearMutation,
  useGetCityQuery,
  useGetMakeYearQuery,
  useGetModelYearQuery,
  useGetPaymentInfoQuery,
} from "@/redux/Api/registerCarApi";
import { location, Step2Props } from "@/type";
import { toast } from "sonner";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const customSpinner = <LoadingOutlined style={{ fontSize: 18, color: "black" }} spin />;


const TotalSteps = 8;
const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState<number>(() => {
    if (typeof window !== "undefined") {
      const storedStep = localStorage.getItem("currentStep");
      return storedStep ? Number(storedStep) : 1;
    }

    return 1;
  });

  // Calculate progress based on current step
  const progress = (currentStep / TotalSteps) * 100;

  const handleNext = () => {
    if (currentStep < TotalSteps) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  // Update local storage when currentStep changes
  useEffect(() => {
    localStorage.setItem("currentStep", currentStep.toString());
  }, [currentStep]);

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
        {currentStep === 4 && (
          <Step4 handleNext={handleNext} currentStep={currentStep} />
        )}
        {currentStep === 5 && (
          <AddPaymentInfo handleNext={handleNext} currentStep={currentStep} />
        )}
        {currentStep === 6 && (
          <DriverLicense handleNext={handleNext} currentStep={currentStep} />
        )}
        {currentStep === 7 && (
          <CarDetails handleNext={handleNext} currentStep={currentStep} />
        )}
        {currentStep === 8 && <CarPhoto />}
      </div>
    </div>
  );
};

interface LatLng {
  lat: number;
  lng: number;
}

const Step1: React.FC<Step2Props> = ({ handleNext, currentStep }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { data: getCity } = useGetCityQuery({});
  const [addCarLocation] = useAddCarLocationMutation();

  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState<
    { description: string; place_id: string }[]
  >([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedPlaceId, setSelectedPlaceId] = useState<string | null>(null);
  const [latLng, setLatLng] = useState<LatLng>({ lat: 0, lng: 0 });
  const [destination, setDestination] = useState("");

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (inputValue.length > 2) {
        try {
          const response = await fetch(
            `/api/location-data?input=${inputValue}`
          );
          const text = await response.text();
          const json = JSON.parse(
            text.replace(/^\?\(/, "").replace(/\);$/, "")
          );
          const predictions = json?.predictions || [];
          setSuggestions(
            predictions.map((p: any) => ({
              description: p.description,
              place_id: p.place_id,
            }))
          );
          setShowSuggestions(true);
        } catch (error) {
          console.error("Error fetching suggestions:", error);
        }
      }
    };

    // Add debounce to prevent too many API calls
    const debounceTimer = setTimeout(fetchSuggestions, 300);
    return () => clearTimeout(debounceTimer);
  }, [inputValue]);

  const handleSelectSuggestion = (suggestion: {
    description: string;
    place_id: string;
  }) => {
    setInputValue(suggestion.description);
    setSelectedPlaceId(suggestion.place_id);
    setShowSuggestions(false);

    if (inputRef.current) {
      inputRef.current.blur();
    }
  };

  // const handleContinue = () => {
  //   handleNext();
  // };

  useEffect(() => {
    const fetchCarData = async () => {
      try {
        const response = await fetch(
          `/api/lat-log?place_id=${selectedPlaceId}`
        );
        const text = await response.text();
        const json = JSON.parse(text.replace(/^\?\(/, "").replace(/\);$/, ""));

        setLatLng(json?.result?.geometry?.location);
      } catch (error) {
        console.error("Error fetching car data:", error);
      }
    };

    fetchCarData();
  }, [selectedPlaceId]);

  const handleAddCarLocation = () => {
    const data = {
      carAddress: inputValue,
      longitude: latLng?.lng,
      latitude: latLng?.lat,
      destination: destination,
    };
    addCarLocation(data)
      .unwrap()
      .then((payload) => {
        localStorage.setItem("carId", payload?.data?._id)
        toast.success(payload?.message)
        handleNext();
      })
      .catch((error) => {
        const errorMessage = error?.data?.message ?? "";
        if (errorMessage.includes("ERR_CAR_SUBMISSION_INCOMPLETE")) {
          const match = errorMessage?.match(/ID: ([a-f0-9]+)/);
          // console.log(match);
          if (match && match[1]) {
            const id = match[1];

            // Save the ID to localStorage
            localStorage.setItem("carId", id);
            toast.success("Please Submit Incomplete car!")
            handleNext();
          }
        }else{
          toast.error(error?.data?.message)
        }
      });
  };

  return (
    <div className="md:max-w-[60%] w-full ">
      <HeadingTitle title="Location" />
      <p className="mt-10 mb-1">Where is your car located?</p>
      <div className="relative">
        <Input
          ref={inputRef}
          placeholder="Where your car located?"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
        />

        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg">
            {suggestions.map((suggestion, index) => (
              <div
                key={index}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handleSelectSuggestion(suggestion)}
              >
                {suggestion.description}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="w-full">
        <p className="my-2">Select City</p>
        <Select onValueChange={(value) => setDestination(value)}>
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
          onClick={() => handleAddCarLocation()}
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
      carId: localStorage.getItem("carId"),
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



const Step3: React.FC<Step2Props> = ({ handleNext, currentStep }) => {
  const [addMakeModelYear , {isLoading}] = useAddMakeModelYearMutation();
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear.toString());
  const [selectedMake, setSelectedMake] = useState<string>();
  const [selectedModel, setSelectedModel] = useState<string>();
  const years = Array.from({ length: currentYear - 1940 }, (_, i) => 1941 + i);
 

  const { data: getMakeYear } = useGetMakeYearQuery(selectedYear);
  const { data: getModelYear } = useGetModelYearQuery({
    year: selectedYear,
    make: selectedMake,
  });




  

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
      carId: localStorage.getItem("carId"),
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
  };

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
              {getMakeYear?.result?.res?.Makes?.map((car: any) => (
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
              {getModelYear?.result?.res?.Models?.map((model: any) => (
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
          {isLoading ?  <Spin indicator={customSpinner} className="px-[19px]" /> : "Continue"}
        </Button>
      </div>
    </div>
  );
};

const Step4: React.FC<Step2Props> = ({ handleNext, currentStep }) => {


  const [addCarTransmission , {isLoading}] = useAddCarTransmissionMutation();
  const [stripeAccount , setStripeAccount] = useState("")
  const {data : getPaymentInfo} = useGetPaymentInfoQuery({})
  const [formValues, setFormValues] = useState({
    transmission: "automatic",
    isElectric: "yes",
    carType: "luxury",
    vehicleType: "car",
  });


  useEffect(()=>{
    setStripeAccount(getPaymentInfo?.data?.stripe_account_id)
  },[getPaymentInfo])



  const handleChange = (field: string, value: string) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [field]: value,
    }));
  };
  const handleContinue = () => {
    const data = {
      carId: localStorage.getItem("carId"),
      ...formValues,
    };
    addCarTransmission(data)
      .unwrap()
      .then((payload) => {
        toast.success(payload?.message);
        handleNext();
        if (stripeAccount) {
          handleNext();
        }
      })
      .catch((error) => toast.error(error?.data?.message));
  };

  return (
    <div>
      <HeadingTitle title="Transmission" />
      <div className="mt-10">
        <p className="pb-2">Transmission</p>
        <RadioGroup
          value={formValues.transmission}
          onValueChange={(value) => handleChange("transmission", value)}
          className="flex gap-10"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="automatic" id="automatic" />
            <Label htmlFor="automatic">Automatic</Label>
          </div>
          <div className="flex items-center space-x-2 mt-2">
            <RadioGroupItem value="manual" id="manual" />
            <Label htmlFor="manual">Manual</Label>
          </div>
        </RadioGroup>
      </div>
      <div className="mt-10">
        <p className="pb-3">Electric Vehicle</p>
        <RadioGroup
          value={formValues.isElectric}
          onValueChange={(value) => handleChange("isElectric", value)}
          className="flex gap-10"
        >
          <div className="flex items-center space-x-2 mt-2">
            <RadioGroupItem value="yes" id="electric-yes" />
            <Label htmlFor="yes">Yes</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="electric-no" />
            <Label htmlFor="no">No</Label>
          </div>
        </RadioGroup>
      </div>
      <div className="mt-10">
        <p className="pb-2">Car Type</p>
        <RadioGroup
          value={formValues.carType}
          onValueChange={(value) => handleChange("carType", value)}
          className="flex gap-10"
        >
          <div className="flex items-center space-x-2 mt-2">
            <RadioGroupItem value="luxury" id="luxury" />
            <Label htmlFor="luxury">Luxury</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="standard" id="standard" />
            <Label htmlFor="standard">Standard</Label>
          </div>
        </RadioGroup>
      </div>
      <div className="mt-10 mb-5">
        <p className="pb-2">Vehicle type</p>
        <RadioGroup
          value={formValues.vehicleType}
          onValueChange={(value) => handleChange("vehicleType", value)}
          className="md:flex gap-10"
        >
          <div className="flex items-center space-x-2 mt-2">
            <RadioGroupItem value="car" id="car" />
            <Label htmlFor="car">Car</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="suv" id="suv" />
            <Label htmlFor="suv">SUV</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="bus" id="bus" />
            <Label htmlFor="bus">BUS</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="minivan" id="minivan" />
            <Label htmlFor="minivan">Minivan</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="truck" id="truck" />
            <Label htmlFor="truck">Truck</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="cargo-van" id="cargo-van" />
            <Label htmlFor="cargo-van">Cargo Vans</Label>
          </div>
        </RadioGroup>
      </div>
      <Button
        className="bg-[#0CFEE8] hover:bg-[#0CFEE8] text-black px-10 mt-5"
        onClick={handleContinue}
        disabled={currentStep === TotalSteps}
      >
        {isLoading ?  <Spin indicator={customSpinner} className="px-[19px]" /> : "Continue"}
      </Button>
    </div>
  );
};

export default MultiStepForm;
