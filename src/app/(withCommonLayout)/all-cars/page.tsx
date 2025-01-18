"use client";
import MapParent from "@/components/Map/MapParent";
import React from "react";
import Image from "next/image";
import { CiStar } from "react-icons/ci";
import { GoLocation } from "react-icons/go";
import FilterBar from "@/components/FilterBar/FilterBar";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useGetFilteredCarQuery } from "@/redux/Api/carsApi";
import { imageUrl } from "@/redux/baseApi";
const AllCarsPage = () => {
  // Retrieve query parameters
  const searchParams = useSearchParams();

  const location = searchParams.get("location");
  const pickupDate = searchParams.get("pickupDate");
  const returnDate = searchParams.get("returnDate");
  const pickupTime = searchParams.get("pickupTime");
  const returnTime = searchParams.get("returnTime");

  // Debugging: Log the parameters
  console.log({ location, pickupDate, returnDate, pickupTime, returnTime });

  //---------------ALl APIs-----------//
  const { data: getAllCarLocation } = useGetFilteredCarQuery({
    location,
    pickupDate,
    returnDate,
    pickupTime,
    returnTime,
  });
  // console.log(getAllCarLocation?.data?.availableCars);

  return (
    <div className="my-10 font-lora px-5 mx-2 md:px-0">
      <FilterBar />
      <div className="grid grid-cols-1 md:grid-cols-2 justify-between  gap-5">
        <div>
          <p className="text-[24px] font-semibold">
            {getAllCarLocation?.data?.availableCars?.length || 0}+ cars
            available
          </p>
          <p className="text-sm mb-8">
            These cars are located in and around London
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
            {getAllCarLocation?.data?.availableCars?.map((car: any) => {
              return (
                <Link key={car?._id} href={"/browse-by-destination/:id"}>
                  <div className="mt-5  md:flex md:h-full items-center gap-4 border rounded-md">
                    <Image
                      alt="img"
                      height={200}
                      width={300}
                      className="w-full md:w-[50%] h-[100%]"
                      src={`${imageUrl}/${car?.car_image[0]}`}
                    />
                    <div className="space-y-4 p-2 md:p-0">
                      <p className="md:text-18px capitalize">
                        {car?.make} {car?.model} {car?.year}
                      </p>
                      <p className=" flex-col md:flex items-center gap-5 mt-2">
                        <span className="bg-[#DFDEDE] px-4 py-1 rounded-full ">
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
                      <p className="bg-[#E7EDF3] rounded-sm text-[#528AAE] inline-block mt-2 px-2">
                        {car?.discountDays} day -{car?.discountAmount}£
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="-z-10 mt-20 ">
          <MapParent
            height={950}
            cars={getAllCarLocation?.data?.availableCars}
          />
        </div>
      </div>
    </div>
  );
};

export default AllCarsPage;
