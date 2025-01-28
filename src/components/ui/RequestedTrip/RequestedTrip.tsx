"use client";
import Image from "next/image";
import React from "react";
import {  FaStar } from "react-icons/fa6";
import { imageUrl } from "@/redux/baseApi";

const RequestedTrip = ({ myTrip }: any) => {
  return (
    <div>
      <div className="">
        {myTrip?.map((trip: any) => {

          return (
            <div key={trip?._id} className="grid grid-cols-1 md:grid-cols-12 gap-5 font-lora border-b pt-10 ">
                <div className="md:col-span-6 col-span-1">
                  <Image
                    src={`${imageUrl}/${trip?.car?.car_image[0]}`}
                    alt="img"
                    className="w-full rounded-md"
                    height={600}
                    width={600}
                  />


                </div>



                <div className="md:col-span-6  col-span-1  gap-5  ">
                  <div className="flex justify-between">
                    <div className="">
                      <p className="font-semibold">Hosted By :</p>
                      <div className="flex  items-center gap-2 shadow-md p-4 rounded-md">
                        <Image
                          alt="img"
                          className="h-10 w-10 rounded-full "
                          src={`${imageUrl}/${trip?.host?.profile_image}`}
                          height={200}
                          width={200}
                        />
                        <div>
                          <p className="font-medium">{trip?.host?.name}</p>
                          <p className="flex items-center gap-2">
                            <FaStar className="text-[#0CFEE8]" /> {trip?.host?.rating}{" "}
                          </p>
                          <p>{trip?.host?.trip} trips. Joined {trip?.host?.createdAt?.split("T")[0]}</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      
                    </div>
                  </div>

                  <p className="mt-4 text-[#272121]">
                    {trip?.car?.description}
                  </p>

                  <div className="mt-10">
                    <p className="font-semibold ">{trip?.car?.make} {trip?.car?.model} {trip?.car?.year}</p>
                    <div className="flex items-center gap-5 my-2">
                      <p>
                        <span className="font-semibold">£ {trip?.car?.pricePerDay} </span>/  Day
                      </p>
                    </div>
                    <div className="py-2">
                      <span className="font-semibold">Trip Start </span>{" "}
                      <span className="text-[#525252]">
                        {" "}
                        Date: {trip?.tripStartDate} Time: {trip?.tripStartDateTime?.split("T")[1]?.split(".")[0]}
                      </span>
                    </div>
                    <div>
                      <span className="font-semibold">Trip End </span>{" "}
                      <span className="text-[#525252]">
                        {" "}
                        Date: {trip?.tripEndDate} Time: {trip?.tripEndDateTime?.split("T")[1]?.split(".")[0]}
                      </span>
                    </div>
                  </div>

                  {/* Pick up location */}
                  <div className="mt-5 text-[#272121] space-y-2">
                    <p className="font-semibold">PICKUP AT CAR LOCATION</p>
                    <p className="text-sm">{trip?.pickupLocation ? trip?.pickupLocation :  "Not Available"}</p>
                    {/* <p className="text-sm">
                      Statue of Liberty, Times Square, Central Park, Empire
                      State Building
                    </p> */}
                  </div>

                  {/* delivery location */}

                  <div className="mt-5">
                  <p className="font-semibold text-[16px] text-[#272121]">
                    Delivery Location
                  </p>
                  <p className="text-xl my-2 font-light">
                    {trip?.returnLocation}
                  </p>
                  {/* <p className="text-sm mb-2">
                    Stephen will unlock the car remotely for you.{" "}
                  </p> */}
                  <div className="flex justify-between items-center mb-2">
                    <p>Total Rent</p>
                    <p>£ {trip?.tripPrice}</p>
                  </div>

                  <div className="flex justify-between items-center mb-2">
                    <p>Trip fee</p>
                    <p>£ {trip?.car?.deliveryFee}</p>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <p>{trip?.maxTripDistance} total miles</p>
                    <p>FREE</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p>discount</p>
                    <p>£ {trip?.car?.discountAmount}</p>
                  </div>
                </div>


                </div>
              </div>
          );
        })}
      </div>
    </div>
  );
};

export default RequestedTrip;
