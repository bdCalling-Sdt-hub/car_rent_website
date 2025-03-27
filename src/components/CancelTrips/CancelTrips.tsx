"use client";
import Image from "next/image";
import React from "react";
import { FaRegStar } from "react-icons/fa6";
import { imageUrl } from "@/redux/baseApi";

const CompleteTrip = ({ trip }: { trip: any }) => {
  return (
    <div>
      <div className=" ">
        {trip?.map((car: any) => {
          return (
            <div
              key={car?._id}
              className="grid grid-cols-1 md:grid-cols-12 gap-5 font-lora mb-5  "
            >
              <div className="col-span-6  md:flex  gap-5">
                <Image
                  alt="img"
                  src={`${imageUrl}/${car?.car?.car_image[0]}`}
                  className="rounded-md w-full"
                  height={200}
                  width={200}
                />
              </div>
              <div className="col-span-6 ">
                <div className="">
                  {/*Host details  */}
                  <div className="flex justify-between">
                    <div className="shadow-md px-10 rounded-md py-5">
                      <p className="font-semibold">Hosted Bysssss :</p>
                      <div className="flex items-center gap-2">
                        <Image
                          alt="img"
                          className="h-10 w-10 rounded-full"
                          src={`${imageUrl}/${car?.host?.profile_image}`}
                          height={200}
                          width={200}
                        />
                        <div>
                          <p className="font-medium">{car?.host?.name}</p>
                          <p className="flex items-center gap-2">
                            <FaRegStar /> {car?.host?.rating}{" "}
                          </p>
                          <p>
                            {car?.host?.trip} trips. Joined{" "}
                            {new Date(car?.host?.createdAt).toLocaleDateString(
                              "en-GB",
                              {
                                day: "2-digit",
                                month: "2-digit",
                                year: "numeric",
                              }
                            )}
                            {/* {car?.host?.createdAt?.split("T")[0]} */}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Details */}
                  <p className="mt-8 text-[#272121] ">
                    {car?.car?.description}
                  </p>
                </div>

                <div className="col-span-4 text-[#272121] space-y-2 mt-10">
                  <p className="font-semibold text-xs">
                    PICKUP AT CAR LOCATION
                  </p>

                  <p className="text-sm">
                    {car?.pickupLocation || "Not Available"}
                  </p>
                </div>

                <div className="mt-10">
                  <p className="font-sm text-[16px] text-[#272121]">
                    Delivery Location
                  </p>
                  <p className="text-xl my-2 font-light">
                    {car?.returnLocation}
                  </p>
                  <p className="text-sm mb-2">
                    Stephen will unlock the car remotely for you.{" "}
                  </p>
                  {/* <div className="flex justify-between items-center mb-2">
                    <p>£69.00 * 3 days</p>
                    <p>£207.00</p>
                  </div> */}

                  <div className="flex justify-between items-center mb-2">
                    <p>Trip fee</p>
                    <p>£{car?.tripPrice}</p>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <p>{car?.maxTripDistance} total miles</p>
                    <p>FREE</p>
                  </div>
                  {/* <div className="flex justify-between items-center">
                    <p>3+ days discount</p>
                    <p>-£10.35</p>
                  </div> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CompleteTrip;
