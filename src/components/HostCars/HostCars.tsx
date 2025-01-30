import React from "react";
import Image from "next/image";
import { CiEdit, CiLocationOn, CiStar } from "react-icons/ci";
import Link from "next/link";
import { useGetMyCarsQuery } from "@/redux/Api/hostHistoryApi";
import { CarData } from "@/type";
import { imageUrl } from "@/redux/baseApi";
const HostCars = () => {
  // All APIs
  const { data: getMyAllCars } = useGetMyCarsQuery({});
  
  return (
    <div className="space-y-5">
      {getMyAllCars?.data?.map((car : CarData) => {
        return (
          <div key={car?._id} className="grid grid-cols-1 md:grid-cols-12 gap-5 border p-4 rounded-md font-lora">
            <div className="md:col-span-4  col-span-1 ">
              <Image
                alt="car"
                className="w-full h-full max-h-[260px] object-cover rounded-sm"
                src={`${imageUrl}/${car?.car_image[0]}`}
                height={300}
                width={300}
              />
            </div>
            <div className="md:col-span-8 col-span-1 space-y-2">
              <div className="md:flex justify-between">
                <div>
                  <p className="text-[24px]">{car?.make} {car?.model} {car?.year}</p>
                  <div className="flex items-center gap-2">
                    <p className="bg-[#E3E1E1] px-4 py-1 rounded-full">
                      {car?.carType}
                    </p>
                    <p className="flex items-center gap-1">
                      <CiStar /> {car?.rating}
                    </p>
                    <p className="flex items-center gap-1">
                      {" "}
                      <CiLocationOn />
                      {car?.destination}
                    </p>
                  </div>
                </div>
                <div>
                  <Link
                    href={`/host-history/${car?._id}`}
                    className="bg-[#6A6A6A] px-4 py-2 rounded-md text-white flex justify-center my-5 items-center gap-1"
                  >
                    Edit <CiEdit size={20} />
                  </Link>
                </div>
              </div>
              <p>{car?.discountDays} days Discount {car?.discountAmount}£</p>
              <p>£{car?.pricePerDay}/Per day</p>
              <p className="font-semibold">Description :</p>
              <p className="leading-8">
                {car?.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HostCars;
