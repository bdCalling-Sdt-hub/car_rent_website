import React from "react";
import img from "../../assets/car.jpg";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import {
  useAcceptCarRentRequestMutation,
  useGetHostTripsQuery,
} from "@/redux/Api/hostHistoryApi";
import { imageUrl } from "@/redux/baseApi";
import { toast } from "sonner";
const HostOrder = () => {
  // ALL APIs
  const { data: getHosOngoingTrip } = useGetHostTripsQuery("requested");
  const [acceptCarRequest] = useAcceptCarRentRequestMutation();


//   Handle accept car request
  const handleAcceptCarRequest = (value: any) => {
    const data = {
      tripId: value,
      status: "ongoing",
    };
    acceptCarRequest(data)
      .unwrap()
      .then((payload) => {
        toast.success(payload?.message)
      })
      .catch((error) => toast.error(error?.data?.message));
  };


//   Handle reject car request
const handleCancelRequest =(id : string)=>{
    const data = {
        tripId: id,
        status: "canceled",
      };
      acceptCarRequest(data)
        .unwrap()
        .then((payload) => {
          toast.success(payload?.message)
        })
        .catch((error) => toast.error(error?.data?.message));
}

  return (
    <div className="font-lora">
      <p className="pb-5">Request order </p>
      {getHosOngoingTrip?.data?.trips?.map((order: any) => {
        return (
          <div key={order?._id} className="grid grid-cols-1 md:grid-cols-6 gap-10 border-b pb-8 mb-8">
            <div className="col-span-1">
              <Image
                alt="img"
                className="w-full"
                height={300}
                width={300}
                src={img}
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
            <div className=" col-span-1 space-x-2">
              <p
                className="bg-[#91BAD6] inline-block px-4 py-2 rounded-sm cursor-pointer"
                onClick={() => handleAcceptCarRequest(order?._id)}
              >
                {order?.status}
              </p>
              <p onClick={()=>handleCancelRequest(order?._id)} className="bg-red-500 text-white inline-block px-4 py-2 rounded-sm cursor-pointer ">Cancel</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HostOrder;
