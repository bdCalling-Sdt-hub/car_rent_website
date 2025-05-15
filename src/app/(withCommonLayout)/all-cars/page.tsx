"use client";
import MapParent from "@/components/Map/MapParent";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { CiStar } from "react-icons/ci";
import { GoLocation } from "react-icons/go";
// import FilterBar from "@/components/FilterBar/FilterBar";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  useGetFilteredCarQuery,
  useGetMakeModelYearQuery,
} from "@/redux/Api/carsApi";
import { imageUrl } from "@/redux/baseApi";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Slider } from "antd";
import TakenDateTime from "@/components/TakenDateTime/TakenDateTime";

const AllCarsPage = () => {
  // Retrieve query parameters
  const searchParams = useSearchParams();
  const [sliderValue, setSliderValue] = useState([20, 100]);
  const [maxPrice, setMaxPrice] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [selectedMake, setSelectedMake] = useState<string>("");
  const [selectedYear, setSelectedYear] = useState<string>("");
  const [selectedModel, setSelectedModel] = useState<string>("");
  const [seat, setSeat] = useState<string>("");
  const [isElectric, setIsElectric] = useState(false);

  const location = searchParams.get("location");
  const pickupDate = searchParams.get("pickupDate");
  const returnDate = searchParams.get("returnDate");
  const pickupTime = searchParams.get("pickupTime");
  const returnTime = searchParams.get("returnTime");

  // Debugging: Log the parameters

  //---------------ALl APIs-----------//
  const { data: getAllCarLocation } = useGetFilteredCarQuery({
    location,
    pickupDate,
    returnDate,
    pickupTime,
    returnTime,
    maxPrice,
    minPrice,
    selectedVehicle,
    selectedMake,
    selectedYear,
    selectedModel,
    seat,
    isElectric,
  });

  // Get make model year api integrate
  const { data: getMakeModelYear } = useGetMakeModelYearQuery({});

  const handleSelectChange = (value: string) => {
    setSelectedVehicle(value);
  };
  const makeArray = getMakeModelYear?.data[0]?.make || [];
  const makeYearArray = getMakeModelYear?.data[0]?.year || [];
  // const makeModelArray = getMakeModelYear?.data[0]?.model || [];
  const [sortedYear, setSortedYear] = useState<number[]>([]);

  useEffect(() => {
    const sortYear = [...makeYearArray].sort((a: any, b: any) => b - a);
    setSortedYear(sortYear);
  }, [getMakeModelYear]);

  // Price range slider function
  const handleSliderChange = (value: any) => {
    setSliderValue(value);
    setMaxPrice(value[1]);
    setMinPrice(value[0]);
  };

  const handleMakeChange = (value: string) => {
    setSelectedMake(value);
  };

  // Handle year change
  const handleYearChange = (value: string) => {
    setSelectedYear(value);
  };
  // Handle Model change
  // const handleModelChange = (value: string) => {
  //   setSelectedModel(value);
  // };

  // Handle Seat change
  const handleSeatChange = (value: string) => {
    setSeat(value);
  };

  const resetFilters = () => {
    setMaxPrice("");
    setMinPrice("");
    setSelectedVehicle("");
    setSelectedModel("");
    setSelectedMake("");
    setSelectedYear("");
    setSeat("");
  };
  return (
    <div className=" font-lora px-5 mx-2 md:px-0">
      {/* <FilterBar /> */}

      <div className="flex justify-start w-[50%]">
        <TakenDateTime className={"py-2"} />
      </div>

      <div className="grid grid-cols-2 justify-center md:grid-cols-12 gap-2 mb-2 ">
        {/* Daily Price */}
        <Select>
          <SelectTrigger className="select-trigger">
            <span>Select Price Range</span>
          </SelectTrigger>
          <SelectContent className="select-content">
            <div style={{ padding: "10px", width: "200px" }}>
              <p>Price Range</p>
              <Slider
                range
                min={10}
                max={500}
                defaultValue={sliderValue}
                onChange={handleSliderChange}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "5px",
                }}
              >
                <span>£{sliderValue[0]}</span>
                <span>£{sliderValue[1]}</span>
              </div>
            </div>
          </SelectContent>
        </Select>
        {/* Vehicle Type */}
        <Select onValueChange={(value) => handleSelectChange(value)}>
          <SelectTrigger className="">
            {" "}
            {selectedVehicle ? selectedVehicle : "Vehicle Type"}{" "}
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="car">Car</SelectItem>
            <SelectItem value="suv">Suv</SelectItem>
            <SelectItem value="bus">Bus</SelectItem>
            <SelectItem value="minivan">Minivan</SelectItem>
            <SelectItem value="truck">Truck</SelectItem>
            <SelectItem value="van">Van</SelectItem>
            <SelectItem value="cargo-van">cargo-van</SelectItem>
          </SelectContent>
        </Select>

        {/* Make */}

        <Select onValueChange={handleMakeChange}>
          <SelectTrigger className="px-4 py-2 border rounded-md text-left capitalize">
            {selectedMake || "Select Make"}
          </SelectTrigger>
          <SelectContent>
            {makeArray
              .filter((make : any) => make.trim() !== "") 
              .map(
                (
                  make: string,
                  index: number 
                ) => (
                  <SelectItem key={index} value={make} className="capitalize">
                    {make}
                  </SelectItem>
                )
              )}
          </SelectContent>
        </Select>

        {/* Year */}
        <Select onValueChange={handleYearChange}>
          <SelectTrigger className=" py-1 border rounded-md text-left">
            {selectedYear || "Select Year"}
          </SelectTrigger>
          <SelectContent>
            {sortedYear.map((year: any, index: any) => (
              <SelectItem key={index} value={year}>
                {year || "Unknown"}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {/* Model */}
        {/* <Select onValueChange={handleModelChange}>
          <SelectTrigger className="px-4 py-2 border rounded-md text-left z-30">
            {selectedModel || "Select Model"}
          </SelectTrigger>
          <SelectContent>
            {makeModelArray.map((model: string, index: string) => (
              <SelectItem key={index} value={model}>
                {model || "Unknown"}
              </SelectItem>
            ))}
          </SelectContent>
        </Select> */}

        {/* Seats */}
        <Select onValueChange={(value) => handleSeatChange(value)}>
          <SelectTrigger className="">{seat || "Seats"}</SelectTrigger>
          <SelectContent>
            {Array.from({ length: 20 }, (_, index) => (
              <SelectItem key={index + 1} value={String(index + 1)}>
                {index + 1}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Electric Button */}
        <Button
          className={`bg-white text-black border hover:text-white ${
            isElectric && "bg-black text-white"
          }`}
          onClick={() => setIsElectric(!isElectric)}
        >
          Electric
        </Button>

        {/* All Filters Button */}
        <Button
          className="flex items-center  bg-gray-200 hover:bg-[#0CFEE8] transition-all duration-200 text-gray-800"
          onClick={() => resetFilters()}
        >
          <span className="text-sm ">
            {/* All Filters ({Object.values(filters).filter((val) => val).length}) */}
            Reset All Filters
          </span>
        </Button>
      </div>

      {/* Get all cars */}

      <div className="grid grid-cols-1 md:grid-cols-2 justify-between  gap-5">
        <div>
          <p className="text-[24px] font-semibold">
            {getAllCarLocation?.data?.availableCars?.length || 0}+ cars
            available
          </p>
          <p className="text-sm mb-8">
            These cars are located in and around London
          </p>
          <div>
            {getAllCarLocation?.data?.availableCars?.length === 0 && (
              <p className="flex justify-center items-center  text-[#0CFEE8] mt-28 font-semibold text-[28px]">
                No cars available at the moment.
              </p>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 overflow-y-auto ">
            {getAllCarLocation?.data?.availableCars?.map((car: any) => {
              return (
                <Link
                  key={car?._id}
                  href={`/browse-by-destination/${car?._id}`}
                >
                  <div className="md:flex  items-center gap-4 border rounded-md shadow-sm p-3">
                    <Image
                      alt="img"
                      height={200}
                      width={300}
                      className="w-full md:w-[50%] object-cover rounded-sm md:h-[250px] "
                      src={`${imageUrl}/${car?.car_image[0]}`}
                    />
                    <div className="space-y-4 p-2 md:p-0">
                      <p className="md:text-18px capitalize inline-block">
                        {car?.make} {car?.model} {car?.year}
                      </p>
                      <p className=" flex-col md:flex   gap-5 mt-2">
                        <span className="bg-[#DFDEDE] px-4 py-1 rounded-full w-[100px] text-center ">
                          {car?.carType}
                        </span>{" "}
                        <span className="flex items-center gap-1 text-[#0CFEE8]">
                          <CiStar />
                          {car?.rating}
                        </span>
                      </p>
                      <p className="flex items-center gap-1 mt-2">
                        <GoLocation /> {car?.destination}
                      </p>
                      <p>£{car?.pricePerDay}/day</p>
                      <p className="bg-[#DFDEDE] rounded-sm  inline-block mt-2 px-2">
                        {car?.discountDays} day - £{car?.discountAmount}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <div className=" mt-20 z-10 ">
          <MapParent
            height={920}
            cars={getAllCarLocation?.data?.availableCars}
          />
        </div>
      </div>
    </div>
  );
};

export default AllCarsPage;
