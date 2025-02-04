"use client";
import React from "react";
import Image from "next/image";
import Chart from "../Chart/Chart";
import {
  useGetHostIncomeQuery,
  useGetHostTripsQuery,
} from "@/redux/Api/hostHistoryApi";
import { imageUrl } from "@/redux/baseApi";
const HostEarning = () => {
  // All APIs
  const { data: getAllIncome } = useGetHostIncomeQuery({});
  const { data: getHosOngoingTrip } = useGetHostTripsQuery("ongoing");

  return (
    <div className="font-lora ">
      <div className="md:flex justify-between  gap-16 space-y-4 md:space-y-0 ">
        <div
          className=" w-full text-center rounded-sm text-[28px] font-medium bg-black text-white py-5"
          
        >
          <div>
            <p>Total Income</p>
            <p>£ {getAllIncome?.data?.totalIncome || 0}</p>
          </div>
        </div>

        <div
          className=" w-full text-center rounded-sm text-[28px]  font-medium bg-black text-white py-5" 
         
        >
          <div>
            <p>Total Monthly Income</p>
            <p>£ {getAllIncome?.data?.averageMonthlyIncome || 0}</p>
          </div>
        </div>
        <div
          className=" w-full text-center rounded-sm text-[28px]  font-medium bg-black text-white py-5"
         
        >
          <div>
            <p>Total Yearly Income</p>
            <p>£ {getAllIncome?.data?.averageYearlyIncome || 0}</p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <Chart />
      </div>

      <div className="mt-10 space-y-10">
        <p className=" text-[18px] md:text-[30px]  ">Income-In-Progress</p>

        {getHosOngoingTrip?.data?.trips?.map((trip: any) => {
          return (
            <div key={trip?._id} className="grid  grid-cols-1 md:grid-cols-12 items-center gap-5 bg-[#BCBABA26] rounded-sm ">
              <div className="col-span-4">
                <Image
                  alt="img"
                  className="w-full h-60"
                  height={600}
                  width={600}
                  src={`${imageUrl}/${trip?.car_image?.[0]}`}
                />
              </div>
              <div className="col-span-4 ">
                <div className="space-y-2">
                  <p className="text-xl font-medium">
                    {trip?.car?.make} {trip?.car?.model} {trip?.car?.year}
                  </p>
                  <p>Start Date : {trip?.tripStartDateTime?.split("T")[0]} Time : {trip?.tripStartTime}</p>
                  <p>End Date : {trip?.tripEndDateTime?.split("T")[0]} Time : {trip?.tripEndTime}</p>
                  <p>
                    Duration : 1 days{" "}
                    <span className=" ml-2">Price : £{trip?.tripPrice} Pending</span>
                  </p>
                </div>
                <div className="mt-5">
                  <p>Renter:</p>
                  <div className="flex mt-2 gap-2">
                    <Image
                      alt="img"
                      className="h-12 w-12 rounded-full"
                      height={300}
                      width={300}
                      src={`${imageUrl}/${trip?.user?.profile_image}`}
                    />
                    <div>
                      <p>{trip?.user?.name}</p>
                      <p className="flex items-center gap-2">
                         {trip?.user?.email}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-4 text-center text-[18px] md:text-[32px]  ">
                <p>Price :</p>
                <p> £{trip?.tripPrice} Pending</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HostEarning;
