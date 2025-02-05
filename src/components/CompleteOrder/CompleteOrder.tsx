import React from "react";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import {
  useGetHostTripsQuery,
} from "@/redux/Api/hostHistoryApi";
import { imageUrl } from "@/redux/baseApi";
const CompleteOrder = () => {
  // ALL APIs
  const { data: getHosOngoingTrip } = useGetHostTripsQuery("completed");


    // console.log(getHosOngoingTrip?.data?.trips);



  return (
    <div className="font-lora">
      <p className="pb-5">Completed order </p>
      {getHosOngoingTrip?.data?.trips?.map((order: any) => {
        // console.log(order?.car?.);
        return (
          <div key={order?._id} className="grid grid-cols-1 md:grid-cols-6 gap-10 border-b pb-8 mb-8">
            <div className="col-span-1 bg-red-400">
              <Image
                alt="img"
                className="w-full h-full"
                height={300}
                width={300}
                src={`${imageUrl}/${order?.car?.car_image[0]}`}
              />
            </div>
            <div className="md:col-span-4 col-span-1">
              <div className="md:flex  gap-10">
                <div className="space-y-2">
                  <p className="text-xl font-medium">
                    {order?.car?.make} {order?.car?.model} {order?.car?.year}
                  </p>
                  <p>
                    Start Date : {order?.tripEndDate} Time :{" "}
                    {order?.tripEndDateTime?.split("T")[1]}
                  </p>
                  <p>
                    End Date : {order?.tripStartDate} Time :{" "}
                    {order?.tripStartDateTime?.split("T")[1]}
                  </p>
                  <p>
                    <span className="text-[#528AAE] ml-2">
                      Price : £ {order?.tripPrice}
                    </span>
                  </p>
                </div>
                <div>
                  <p>Renter:</p>
                  <div className="flex mt-2 gap-2">
                    <Image
                      alt="img"
                      className="h-12 w-12 rounded-full"
                      height={300}
                      width={300}
                      src={`${imageUrl}/${order?.user?.profile_image}`}
                    />
                    <div>
                      <p>{order?.user?.name}</p>
                      <p className="flex items-center gap-2">
                        <CiLocationOn /> {order?.user?.address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 space-y-3">
                <p>
                  Delivery Location :{" "}
                  <span>{order?.pickupLocation || "Not Available"}</span>
                </p>
                <p>
                  Return Location : <span>{order?.returnLocation}</span>
                </p>
              </div>
            </div>
           
          </div>
        );
      })}
    </div>
  );
};

export default CompleteOrder;
