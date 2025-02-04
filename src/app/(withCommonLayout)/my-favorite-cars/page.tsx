"use client"
import Link from "next/link";
import React from "react";
import { FaCar, FaStar } from "react-icons/fa6";
import { LuDoorClosed, LuFuel } from "react-icons/lu";
import { MdArrowOutward } from "react-icons/md";
import { RiShoppingBagLine } from "react-icons/ri";

const MyFavorite = () =>{
    return (
        <div className="bg-[#F9F9F9] p-4 rounded-md space-y-4">
                {/* <Image src={`${imageUrl}/${car?.car_image[0]}`} className="w-full max-h-[200px]" height={300} width={300} alt="img" /> */}
                <div className="flex items-center gap-2">
                  <p className="bg-[#BCBABA26] px-2 py-1 rounded-full">
                    {/* {car?.carType} */}
                  </p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-[#0CFEE8]" /> <span>
                        {/* {car?.rating} */}
                        1.5
                        </span>
                  </div>
                </div>
                <p className="font-semibold text-xl capitalize">
                    BMW
                {/* {car?.make} {car?.model} {car?.year} */}
                </p>
                <div className="flex items-center justify-between text-[#528AAE]">
                  <p className="flex items-center gap-2">
                    <FaCar /> 
                    {/* {car?.seats} */}
                     Passenger
                  </p>
                  <p className="flex items-center gap-2">
                    <LuDoorClosed />
                    {/* {car?.doors} */}
                     Door
                  </p>
                </div>
                <div className="flex items-center justify-between text-[#528AAE] border-b pb-4">
                  <p className="flex items-center gap-2">
                    {" "}
                    <LuFuel />

                    {/* {car?.fuelType} */}
                  </p>
                  <p className="flex items-center gap-2">
                    {" "}
                    <RiShoppingBagLine />
                    
                    {/* {car?.bags}  */}
                    Bags
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p>
                    <span className="font-semibold">£
                        {/* {car?.pricePerDay}  */}
                        </span>/ per day
                  </p>
                  <Link
                    className="bg-[#0CFEE8] hover:rotate-45 duration-300 cursor-pointer text-white p-3 rounded-full"
                    href={`/browse-by-destination/:id`}
                  >
                    {/* ${car?._id} */}
                    <MdArrowOutward />
                  </Link>
                </div>
              </div>
    )
}
export default MyFavorite;