"use client";
import HeadingTitle from "@/components/shared/HeadingTitle";
import TakenDateTime from "@/components/TakenDateTime/TakenDateTime";
import React from "react";
import Image from "next/image";
import { FaCar, FaStar } from "react-icons/fa6";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { LuDoorClosed, LuFuel } from "react-icons/lu";
import { RiShoppingBagLine } from "react-icons/ri";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import HitRoad from "@/components/HitRoad/HitRoad";
import MapParent from "@/components/Map/MapParent";
import TopHostedCar from "@/components/TopHostedCar/TopHostedCar";
import { useSearchParams } from "next/navigation";
import { useGetBrowseByDestinationQuery } from "@/redux/Api/carsApi";
import { imageUrl } from "@/redux/baseApi";



interface Location {
    coordinates: [number, number];
    type: "Point";
  }
  
  interface Car {
    _id: string;
    avgRating: number;
    bags: number;
    carAddress: string;
    carType: string;
    car_image: string[];
    createdAt: string;
    deliveryFee: number;
    description: string;
    destination: string;
    discountAmount: number;
    discountDays: number;
    doors: number;
    features: string[];
    finePerKm: number;
    fuelType: string;
    hostFirstName: string;
    hostLastName: string;
    hostLicenseDateOfBirth: string;
    hostLicenseExpiryDate: string;
    hostLicenseNumber: string;
    isElectric: boolean;
    licensePlateNum: string;
    location: Location;
    make: string;
    maxTravelDistancePerDay: number;
    model: string;
    pricePerDay: number;
    rating: number;
    seats: number;
    status: string;
    transmission: string;
    updatedAt: string;
    user: string;
    vehicleType: string;
    year: number;
    __v: number;
  }
  




const BrowseByDestinationPage = () => {
  const searchParams = useSearchParams();
  const destination = searchParams.get("destination") || "london";

  const today = new Date();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const year = today.getFullYear();
  const fromDate = `${month}/${day}/${year}`;
  const fromTime = today.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const toMonth = String(tomorrow.getMonth() + 1).padStart(2, "0");
  const toDay = String(tomorrow.getDate()).padStart(2, "0");
  const toYear = today.getFullYear();
  const toDate = `${toMonth}/${toDay}/${toYear}`;
  const toTime = tomorrow.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const { data: getAllCars } = useGetBrowseByDestinationQuery({
    fromDate,
    fromTime,
    toDate,
    toTime,
    destination,
  });

  // console.log("des",destination);

  // const {data : topHostedCar} = useGetTopHostedCarQuery(destination);
  // console.log(getAllCars?.data?.availableCars);



  return (
    <div className="container mx-auto my-10 font-lora px-2 md:px-0">
      <div className="text-center">
        <HeadingTitle title="Rent cars in United Kingdom, HI" />
        <p className="mt-12 font-lora">
          Discover the Nardo car rental marketplace
        </p>
      </div>
      <TakenDateTime />

      <div className="my-5">
        <p className="md:text-[32px] text-[18px] mb-20 md:mb-0 font-semibold">
          Top rated rental cars in {destination}
        </p>
      </div>
      <Carousel>
        <CarouselContent>
          {getAllCars?.data?.availableCars?.map((car : Car) => 
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
            <CarouselItem key={car?._id} className="md:basis-1/4 basic-1/2">
              <div className="bg-[#F9F9F9] p-4 rounded-md space-y-4">
                <Image src={`${imageUrl}/${car?.car_image[0]}`} height={300} width={300} alt="img" />
                <div className="flex items-center gap-2">
                  <p className="bg-[#BCBABA26] px-2 py-1 rounded-full">
                    {car?.carType}
                  </p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-[#0CFEE8]" /> <span>{car?.rating}</span>
                  </div>
                </div>
                <p className="font-semibold text-xl capitalize">{car?.make} {car?.model} {car?.year}</p>
                <div className="flex items-center justify-between text-[#528AAE]">
                  <p className="flex items-center gap-2">
                    <FaCar /> {car?.seats} Passenger
                  </p>
                  <p className="flex items-center gap-2">
                    <LuDoorClosed />{car?.doors} Door
                  </p>
                </div>
                <div className="flex items-center justify-between text-[#528AAE] border-b pb-4">
                  <p className="flex items-center gap-2">
                    {" "}
                    <LuFuel />
                    {car?.fuelType}
                  </p>
                  <p className="flex items-center gap-2">
                    {" "}
                    <RiShoppingBagLine />
                    
                    {car?.bags} Bags
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p>
                    <span className="font-semibold">£{car?.pricePerDay} </span>/ per day
                  </p>
                  <Link
                    className="bg-[#0CFEE8] text-white p-3 rounded-full"
                    href={`/browse-by-destination/${car?._id}`}
                  >
                    <MdArrowOutward />
                  </Link>
                </div>
              </div>
            </CarouselItem>
           )} 
        </CarouselContent>
        <CarouselPrevious className="-top-8 right-12 " />
        <CarouselNext className="-top-8 right-1 " />
      </Carousel>

      <div className="my-16">
        <div className="text-center">
          <HeadingTitle title={`Top hosts in ${destination}`} />
        </div>
        <TopHostedCar />
      </div>

      <HitRoad />
      <div>
        <p className="py-5 text-2xl text-center">Rental Car in {destination}</p>
        <div className="">
          <MapParent height={500} cars={getAllCars?.data?.availableCars} />
        </div>
      </div>
    </div>
  );
};

export default BrowseByDestinationPage;
