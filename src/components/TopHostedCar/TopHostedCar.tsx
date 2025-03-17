import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Image from "next/image";
import { FaCar, FaStar } from "react-icons/fa6";
import { LuDoorClosed, LuFuel } from "react-icons/lu";
import { RiShoppingBagLine } from "react-icons/ri";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { useGetTopHostedCarQuery } from "@/redux/Api/carsApi";
import { imageUrl } from "@/redux/baseApi";
const TopHostedCar = () => {
  const { data: getTopHost } = useGetTopHostedCarQuery("london");

  return (
    <div className="md:my-20 my-10">
      {getTopHost?.data?.topHostsInDestination
        ?.slice(0, 2)
        ?.map((host: any) => {
          return (
            <div key={host?._id} className="grid grid-cols-1 md:grid-cols-2  gap-5 px-2 md:px-0 mb-16">
              <div className="col-span-1 md:mt-20">
                <div className="flex items-center gap-5">
                  <Image
                    src={`${imageUrl}/${host?.profile_image}`}
                    height={300}
                    className="h-14 w-14 rounded-full"
                    width={300}
                    alt="img"
                  />
                  <div>
                    <p className="capitalize">{host?.name}</p>
                    <div className="flex items-center gap-2">
                      <FaStar className="text-[#0CFEE8]" />
                      <span>{host?.rating}</span>
                    </div>
                    <p>
                      {" "}
                      {host?.trip} trips, joined{" "}
                        {new Date(host?.createdAt).toLocaleDateString(
                          "en-GB",
                          {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                          }
                        )}
                      {/* {host?.createdAt?.split("T")[0]} */}
                    </p>
                  </div>
                </div>

                {host?.topReviews?.map((review: any , i : any) => {
                  const rating = review?.rating || 0;
                  const stars = Array.from({ length: 5 }, (_, i) => i + 1);
                  return (
                    <div key={i+1}>
                      <div className="flex items-center gap-1 mt-10">
                        {stars.map((star) => (
                          <FaStar
                            key={star}
                            className={
                              star <= rating
                                ? "text-[#0CFEE8]"
                                : "text-gray-300"
                            }
                          />
                        ))}
                      </div>
                      <p className="max-w-xl leading-8 mt-5">
                        {review?.review}
                      </p>
                      <p className="mt-5">{review?.createdAt?.split("T")[0]}</p>
                      <p>
                        {new Date(review?.createdAt).toLocaleDateString(
                          "en-GB",
                          {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                          }
                        )}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="col-span-1">
                <p className="text-xl mb-10 font-semibold capitalize">
                 {host?.name}
                </p>
                <Carousel>
                  <CarouselContent>
                    {host?.cars?.map((car: any) => {
                      return (
                        <CarouselItem key={car?._id} className="md:basis-1/2">
                          <div className="bg-[#F9F9F9] p-4 rounded-md space-y-4">
                            <Image
                              className="h-60"
                              src={`${imageUrl}/${car?.car_image[0]}`}
                              height={300}
                              width={300}
                              alt="img"
                            />
                            <div className="flex items-center gap-2">
                              <p className="bg-[#BCBABA26] px-2 py-1 rounded-full">
                                {car?.carType}
                              </p>
                              <div className="flex items-center gap-1">
                                <FaStar className="text-[#0CFEE8]" />{" "}
                                <span></span>
                              </div>
                            </div>
                            <p className="font-semibold text-xl capitalize">
                              {car?.make} {car?.model} {car?.year}
                            </p>
                            <div className="flex items-center justify-between text-[#528AAE]">
                              <p className="flex items-center gap-2">
                                <FaCar /> {car?.seats} Passenger
                              </p>
                              <p className="flex items-center gap-2">
                                <LuDoorClosed />
                                {car?.doors} Door
                              </p>
                            </div>
                            <div className="flex items-center justify-between text-[#528AAE] border-b pb-4">
                              <p className="flex items-center gap-2">
                                {" "}
                                <LuFuel />
                                {car?.fuelType}
                              </p>
                              <p className="flex items-center gap-2">
                                {" "}
                                <RiShoppingBagLine />
                                {car?.bags}
                              </p>
                            </div>
                            <div className="flex items-center justify-between">
                              <p>
                                <span className="font-semibold">
                                  £{car?.pricePerDay}{" "}
                                </span>
                                / per day
                              </p>
                              <Link
                                className="bg-[#0CFEE8] text-white p-3 hover:rotate-45 duration-300 cursor-pointer rounded-full"
                                href={`/browse-by-destination/${car?._id}`}
                              >
                                <MdArrowOutward />
                              </Link>
                            </div>
                          </div>
                        </CarouselItem>
                      );
                    })}
                  </CarouselContent>
                  <CarouselPrevious className="-top-8 right-12 " />
                  <CarouselNext className="-top-8 right-1 " />
                </Carousel>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default TopHostedCar;
