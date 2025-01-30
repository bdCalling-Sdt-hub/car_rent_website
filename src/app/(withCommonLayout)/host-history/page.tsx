"use client";
import React from "react";
import Image from "next/image";
import { CiStar } from "react-icons/ci";
import Link from "next/link";
import { IoAdd } from "react-icons/io5";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HostCars from "@/components/HostCars/HostCars";
import HostOrder from "@/components/HostOrder/HostOrder";
import HostHistoryInfo from "@/components/HostHistoryInfo/HostHistoryInfo";
import HostEarning from "@/components/HostEarning/HostEarning";
import { useGetProfileQuery } from "@/redux/Api/authApi";
import { imageUrl } from "@/redux/baseApi";
import OngoingOrder from "@/components/OngoingOrder/OngoingOrder";
import CancelOrder from "@/components/CancelOrder/CancelOrder";
import CompleteOrder from "@/components/CompleteOrder/CompleteOrder";
import withRoleAuth from "@/components/whitRoleAuth/whitRoleAuth";
const HostHistoryPage = () => {
  const { data: getProfile } = useGetProfileQuery(undefined);

  return (
    <div className="my-10 container mx-auto px-2 md:px-0">
      <div className="md:flex items-center  justify-between ">
        <div className="flex items-center gap-5">
          <Image
            className="rounded-full h-20 w-20 object-cover"
            src={`${imageUrl}/${getProfile?.data?.profile_image}`}
            height={200}
            width={200}
            alt="img"
          />
          <div className="font-lora space-y-1">
            <p className="font-medium text-[24px]">{getProfile?.data?.name}</p>
            <p className="font-medium ">{getProfile?.data?.email}</p>
            <p className="flex items-center gap-1">
              <CiStar size={22} /> {getProfile?.data?.rating}
            </p>
            <p>Total Car : {getProfile?.data?.carCount}</p>
          </div>
        </div>
        <div>
          <Link
            className="flex items-center bg-black text-white px-4 py-2 rounded-sm gap-1 justify-center  mt-5 md:mt-0"
            href={"/host-home/License-plate"}
          >
            Add a new car <IoAdd />{" "}
          </Link>
        </div>
      </div>

      <div className="mt-10 ">
        <Tabs defaultValue="car" className="w-full">
          <TabsList className="grid grid-cols-3 md:grid-cols-6  w-full gap-5 mb-20">
            <TabsTrigger
              value="car"
              className="bg-white data-[state=active]:text-black  data-[state=active]:bg-[#0CFEE8]"
            >
              My Car
            </TabsTrigger>
            <TabsTrigger
              value="requested"
              className="bg-white data-[state=active]:text-black  data-[state=active]:bg-[#0CFEE8]"
            >
              Requested
            </TabsTrigger>
            <TabsTrigger
            
              value="ongoing"
              className="bg-white data-[state=active]:text-black  data-[state=active]:bg-[#0CFEE8]"
            >
              Ongoing
            </TabsTrigger>
            <TabsTrigger
              value="canceled"
              className="bg-white data-[state=active]:text-black  data-[state=active]:bg-[#0CFEE8]"
            >
              Canceled
            </TabsTrigger>
            <TabsTrigger
              value="completed"
              className="bg-white data-[state=active]:text-black  data-[state=active]:bg-[#0CFEE8]"
            >
              Completed
            </TabsTrigger>
            <TabsTrigger
              value="earning"
              className="bg-white data-[state=active]:text-black  data-[state=active]:bg-[#0CFEE8]"
            >
              Earning
            </TabsTrigger>
          </TabsList>
          <TabsContent value="car">
            <HostCars />
          </TabsContent>
          <TabsContent value="requested">
            <HostOrder />
          </TabsContent>
          <TabsContent value="ongoing">
            <OngoingOrder/>
          </TabsContent>
          <TabsContent value="canceled">
            <CancelOrder/>
          </TabsContent>
          <TabsContent value="completed">
            <CompleteOrder/>
          </TabsContent>
          <TabsContent value="history">
            <HostHistoryInfo />
          </TabsContent>
          <TabsContent value="earning">
            <HostEarning />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default withRoleAuth(HostHistoryPage , "HOST");
