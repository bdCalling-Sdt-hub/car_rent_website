"use client";
import { useState } from "react";
import TripStartDataAndEndTime from "../TripStartDataAndEndTime/TripStartDataAndEndTime";
import { IoIosStar } from "react-icons/io";
import { FaCar } from "react-icons/fa6";
import { LuDoorClosed, LuFuel } from "react-icons/lu";
import { RiShoppingBagLine } from "react-icons/ri";
import Image from "next/image";
import { imageUrl } from "@/redux/baseApi";
import { CiStar } from "react-icons/ci";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Checkbox } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import {
  useAddTripsMutation,
} from "@/redux/Api/tripManagementApi";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useGetProfileQuery } from "@/redux/Api/authApi";

const formatTime = (time: string) => {
  const [hour, minute] = time?.split(":").map(Number);
  const period = hour >= 12 ? "PM" : "AM";
  const formattedHour = hour % 12 || 12;
  return `${formattedHour}:${minute?.toString()?.padStart(2, "0")} ${period}`;
};

// Helper function to format date in MM/DD/YYYY
const formatDate = (date: string) => {
  const [year, month, day] = date?.split("-");
  return `${month}/${day}/${year}`;
};

const calculateTotalDays = (startDate: string, endDate: string) => {
  if (!startDate || !endDate) return 0;

  const start = new Date(startDate);
  const end = new Date(endDate);

  // Calculate the difference in milliseconds
  const diffInMs = end?.getTime() - start?.getTime();

  // Convert milliseconds to days
  const totalDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

  // If dates are the same, return 1
  return totalDays === 0 ? 1 : totalDays;
};

type ClientCarDetailsProps = {
  cars: any;
};

// -----------Car details function -------------------//
const ClientCarDetails: React.FC<ClientCarDetailsProps> = ({ cars }) => {
  const router = useRouter();
  const [returnLocation, setReturnLocation] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  // ALL API
  const [addTripInfo] = useAddTripsMutation();
  // const [addFavorite] = useAddFavoriteMutation();

  // console.log(cars?.youngDriverFee);
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({
    startDate: "",
    startTime: "",
    endDate: "",
    endTime: "",
  });
  const handleInputChange = (data: {
    startDate?: string;
    startTime?: string;
    endDate?: string;
    endTime?: string;
  }) => {
    setFormData((prev) => ({
      ...prev,
      ...data,
    }));
  };

  const totalDays = calculateTotalDays(formData.startDate, formData.endDate);

  const totalCarFee = cars?.pricePerDay * totalDays;
  let totalPrice = totalCarFee + cars?.deliveryFee;
  if (cars?.discountDays <= totalDays) {
    totalPrice = totalPrice - cars?.discountAmount;
  }

  //  Cleaning fee calculation
  if(cars?.cleaningFee){
    totalPrice = totalPrice + cars?.cleaningFee
  }





  const handleCheckboxChange = (e: CheckboxChangeEvent) => {
    setIsChecked(e.target.checked);
  };


  //   Handle booking car function
  const handleBookCar = () => {
    // console.log(formData);
    const formattedStartDate = formatDate(formData?.startDate);
    const formattedEndDate = formatDate(formData?.endDate);
    const formattedStartTime = formatTime(formData?.startTime);
    const formattedEndTime = formatTime(formData?.endTime);

    const data = {
      carId: cars?._id,
      hostId: cars?.user?._id,
      tripStartDate: formattedStartDate,
      tripStartTime: formattedStartTime,
      tripEndDate: formattedEndDate,
      tripEndTime: formattedEndTime,
      returnLocation: returnLocation,
      tripPrice: totalPrice,
      maxTripDistance: cars?.maxTravelDistancePerDay,
    } as {
      carId: any;
      hostId: any;
      tripStartDate: string;
      tripStartTime: string;
      tripEndDate: string;
      tripEndTime: string;
      returnLocation: string;
      tripPrice: any;
      maxTripDistance: any;
      isPickupAtLocation?: boolean;
      pickupLocation?: string;
    };
    if (isChecked) {
      data.isPickupAtLocation = true;
    }
    if (pickupLocation) {
      data.pickupLocation = pickupLocation;
    }

    if( getProfile?.data?.address &&
      getProfile?.data?.phone_number &&
      getProfile?.data?.licenseFrontImage &&
      getProfile?.data?.licenseBackImage){
        addTripInfo(data)
        .unwrap()
        .then((payload) => {
          // console.log(payload);
          toast.success(payload?.message);
          localStorage.setItem("carId", cars?._id);
          localStorage.setItem("amount", totalPrice);
          localStorage.setItem("tripId", payload?.data?._id);
          router.push("/get-approved-driver");
        })
        .catch((error) => {
          toast.error(error?.data?.message);
        });
      }
      else{
        // toast.error("Please Update Your Profile!")
        router.push("/my-profile");
      }
   
  };

  // const handleAddFavorite = (id: string) => {
  //   // console.log(id);
  //   addFavorite(id)
  //     .unwrap()
  //     .then((payload) =>{
  //       toast.success(payload?.message)
  //     })
  //     .catch((error) => toast.error(error?.data?.message));
  // };


  const { data: getProfile } = useGetProfileQuery(undefined);

 

  return (
    <div className="grid grid-cols-1 md:grid-cols-2  justify-between mt-10 gap-20  ">
      <div className="col-span-1">
        <h1 className="font-bold text-[48px] capitalize">
          {cars?.make} {cars?.model} {cars?.year}
        </h1>
        <div className="flex gap-2 ">
          <p className="bg-[#BCBABA26] px-4 py-2 rounded-full ">
            {cars?.carType}
          </p>
          <div className="flex items-center gap-1">
            <IoIosStar /> {cars?.rating}
          </div>
        </div>
        <div className="flex items-center justify-between mt-5 max-w-xl text-[#525252]">
          <p className="flex items-center gap-2">
            <FaCar /> {cars?.seats} Passenger
          </p>
          <p className="flex items-center gap-2">
            <LuDoorClosed />
            {cars?.doors} Door
          </p>
        </div>
      <div className="flex items-center justify-between  mt-5  pb-10  max-w-xl border-b border-1 pb-">
          <p className="flex items-center gap-2 text-[#525252]">
            {" "}
            <LuFuel />
            {cars?.fuelType}
          </p>
          <p className="flex items-center gap-2 text-[#525252]">
            {" "}
            <RiShoppingBagLine />
            {cars?.bags}
          </p>
        </div>
        <p className="mt-5">Hosted By</p>
        <div className="my-5 flex items-center gap-5">
          <Image
            alt="img"
            height={200}
            width={200}
            className="h-14 w-14 rounded-full"
            src={`${imageUrl}/${cars?.user?.profile_image}`}
          />
          <div>
            <p>{cars?.data?.user?.name}</p>
            <p className="flex items-center gap-1">
              <CiStar /> {cars?.user?.rating}
            </p>
            <p>
              {cars?.user?.trip} trips, joined{" "}
              {cars?.user?.updatedAt?.split("T")[0]}
            </p>
          </div>
        </div>
        <p>Description : </p>
        <p className="mt-5 font-thin leading-8">{cars?.description}</p>
      </div>
      <div className="col-span-1 border border-1  p-2 rounded-sm shadow-md">
        <p className="text-5xl">
          <span className="font-bold">£{cars?.pricePerDay}</span>{" "}
          <span className="text-[#525252]">/ days</span>
        </p>
        <div className="mx-auto p-4 space-y-6">
          <TripStartDataAndEndTime onChange={handleInputChange} />
          <Checkbox checked={isChecked} onChange={handleCheckboxChange}>
            Pick up at car location (free)
          </Checkbox>
          

          {/* Pickup and Return */}
          <div className="space-y-4">
            {!isChecked && (
              <Input
                onChange={(e) => setPickupLocation(e.target.value)}
                placeholder="Type pickup location"
              />
            )}
            <Input
              onChange={(e) => setReturnLocation(e.target.value)}
              placeholder="Type return location"
            />
          </div>

          {/* Discount */}

        

          {cars?.discountDays && (
            <div className="flex justify-between items-center p-2 border border-gray-300 rounded-lg bg-[#0CFEE8]">
              <span>{cars?.discountDays} Days discount</span>
              <span className="font-semibold">£ {cars?.discountAmount}</span>
            </div>
          )}

          {/* Continue Button */}
          <div className="text-center">
            {" "}
            <Button
              onClick={() => handleBookCar()}
              className="w-full bg-[#0CFEE8]  px-16 rounded-md  py-2 text-black hover:bg-[#0CFEE8]"
            >
              Continue
            </Button>
          </div>

          {/* Breakdown */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>
                £ {cars?.pricePerDay} * {totalDays} days
              </span>
              <span>£ {totalCarFee}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className=" underline cursor-pointer">Delivery fee</span>
              <span>£{cars?.deliveryFee}</span>
            </div>
            {/* <div className="flex justify-between items-center">
                                <span>600 total miles</span>
                                <span>FREE</span>
                            </div> */}

            {cars?.discountDays <= totalDays && (
              <div className="flex justify-between items-center">
                <span>{cars?.discountDays}+ days discount</span>
                <span className="">- £{cars?.discountAmount}</span>
              </div>
            )}

            {
              cars?.cleaningFee &&  <div className="flex justify-between items-center">
              <span>Cleaning Fee</span>
              <span className="">£{cars?.cleaningFee}</span>
            </div>
 
            }
           

            <div className="flex justify-between items-center  bg-[#BCBABA26]  px-4 rounded-md py-2">
              <span className="font-bold">Total</span>
              <span className="font-bold text-lg">£ {totalPrice}</span>
            </div>
          </div>

          {/* Additional Info */}
          <div className="space-y-2 border-t border-gray-300 pt-4">
            <div className="text-sm text-gray-600">
              <span className="font-semibold">Free cancellation</span> <br />
              <span className="cursor-pointer">Contact host</span>
            </div>
            <div className="text-sm text-gray-600">
              <div className="flex justify-between pb-2">
                <span className="text-2xl">Distance included</span>

                {/* <span className="font-semibold">200 mi</span> */}
              </div>
              <span>
                £ {cars?.finePerKm}/mi fee for additional miles driven
              </span>
            </div>
          </div>

          {/* Add to Favorites Button */}
          {/* <div className="text-center">
            <Button
              onClick={() => handleAddFavorite(cars?._id)}
              variant="outline"
              className=""
            >
              Add to favorites <CiHeart />
            </Button>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default ClientCarDetails;
