"use client";
import HeadingTitle from "@/components/shared/HeadingTitle";
import React, { useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import img from "../../../assets/car.jpg";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import Link from "next/link";
import { IoChatbubbleOutline } from "react-icons/io5";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CompleteTrip from "@/components/CompleteTrip";
import { useGetMyTripsQuery } from "@/redux/Api/tripManagementApi";
import { imageUrl } from "@/redux/baseApi";
import { Trip } from "@/type";
import RequestedTrip from "@/components/ui/RequestedTrip/RequestedTrip";
import { useAcceptCarRentRequestMutation } from "@/redux/Api/hostHistoryApi";
import { toast } from "sonner";
import CancelTrips from "@/components/CancelTrips/CancelTrips";

const MyTripPage = () => {
  const [trip, setTrip] = useState("requested");
  const [updateCarStatus] = useAcceptCarRentRequestMutation();

  const { data: getMyTrips } = useGetMyTripsQuery(trip);
  console.log(getMyTrips?.data?.trips);

  const handleValueChange = (value: string) => {
    const data = {
      tripId: value,
      status: "completed",
    };

    updateCarStatus(data)
      .unwrap()
      .then((payload) => {
        toast.success(payload?.message);
      })
      .catch((error) => toast.success(error?.data?.message));
  };

  return (
    <div className="container mx-auto px-2 md:px-0">
      <div className="md:py-10 py-2">
        <HeadingTitle title="My Trip" />
      </div>
      <div className="md:my-10 my-5">
        <Tabs defaultValue="requested" className="w-full">
          <TabsList className="grid w-[100%] md:w-[30%] grid-cols-4 gap-5 mb-10">
            <TabsTrigger
              onClick={() => setTrip("requested")}
              value="requested"
              className=""
            >
              Requested
            </TabsTrigger>
            <TabsTrigger
              onClick={() => setTrip("ongoing")}
              value="account"
              className=""
            >
              Current
            </TabsTrigger>

            <TabsTrigger
              onClick={() => setTrip("canceled")}
              value="canceled"
              className=""
            >
              Canceled
            </TabsTrigger>
            <TabsTrigger onClick={() => setTrip("completed")} value="password">
              Complete Trip
            </TabsTrigger>
          </TabsList>

          <TabsContent value="requested">
            <RequestedTrip myTrip={getMyTrips?.data?.trips} />
          </TabsContent>
          <TabsContent value="account">
            {getMyTrips?.data?.trips?.map((trip: Trip) => (
              <>
                <div
                  key={trip?._id}
                  className="grid grid-cols-1 md:grid-cols-12 gap-5 font-lora "
                >
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
                        <div>
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
                                <FaStar className="text-[#0CFEE8]" />{" "}
                                {trip?.host?.rating}{" "}
                              </p>
                              <p>
                                {trip?.host?.trip} trips. Joined{" "}
                                {trip?.host?.createdAt?.split("T")[0]}
                              </p>
                            </div>
                          </div>
                        </div>
                        
                      </div>

                      <div>
                        <p className="mb-2">Date : {trip?.tripStartDate}</p>
                        <div className="space-y-2 ">
                          <Link
                            className="bg-[#313131] text-white px-1 w-full md:px-4 md:text-sm text-xs  justify-center  flex items-center gap-2 rounded-sm py-3"
                            href={`/conversationChat?senderId=${trip?.user?._id}&receiverId=${trip?.host?._id}`}
                          >
                            Chat With Host <IoChatbubbleOutline />
                          </Link>
                          <Select onValueChange={handleValueChange}>
                            <SelectTrigger className="w-[180px] bg-[#0CFEE8]">
                              <SelectValue placeholder={"Ongoing"} />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectItem value={trip?._id}>
                                  Completed
                                </SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    <p className="mt-4 text-[#272121]">
                      {trip?.car?.description}
                    </p>

                    <div className="mt-10">
                      <p className="font-semibold ">
                        {trip?.car?.make} {trip?.car?.model} {trip?.car?.year}
                      </p>
                      <div className="flex items-center gap-5 my-2">
                        <p>
                          <span className="font-semibold">
                            £ {trip?.car?.pricePerDay}{" "}
                          </span>
                          / 1 Day
                        </p>
                      </div>
                      <div className="py-2">
                        <span className="font-semibold">Trip Start </span>{" "}
                        <span className="text-[#525252]">
                          {" "}
                          Date: {trip?.tripStartDate} Time:{" "}
                          {
                            trip?.tripStartDateTime
                              ?.split("T")[1]
                              ?.split(".")[0]
                          }
                        </span>
                      </div>
                      <div>
                        <span className="font-semibold">Trip End </span>{" "}
                        <span className="text-[#525252]">
                          {" "}
                          Date: {trip?.tripEndDate} Time:{" "}
                          {trip?.tripEndDateTime?.split("T")[1]?.split(".")[0]}
                        </span>
                      </div>
                    </div>

                    {/* Pick up location */}
                    <div className="mt-5 text-[#272121] space-y-2">
                      <p className="font-semibold">PICKUP AT CAR LOCATION</p>
                      <p className="text-sm">
                        {trip?.pickupLocation
                          ? trip?.pickupLocation
                          : "Not Available"}
                      </p>
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
                        <p>£69.00 * 3 days</p>
                        <p>£207.00</p>
                      </div>

                      <div className="flex justify-between items-center mb-2">
                        <p>Trip fee</p>
                        <p>£24.50</p>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <p>600 total miles</p>
                        <p>FREE</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <p>3+ days discount</p>
                        <p>-£10.35</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 mt-10 "></div>
              </>
            ))}
          </TabsContent>
          <TabsContent value="password">
            <div>
              <CompleteTrip trip={getMyTrips?.data?.trips} />
            </div>
          </TabsContent>
          <TabsContent value="canceled">
            <CancelTrips trip={getMyTrips?.data?.trips} />
          </TabsContent>
        </Tabs>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
    // </div>
  );
};

export default MyTripPage;
