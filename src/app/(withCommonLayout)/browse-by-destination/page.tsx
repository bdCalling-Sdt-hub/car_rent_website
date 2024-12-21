import HeadingTitle from "@/components/shared/HeadingTitle";
import TakenDateTime from "@/components/TakenDateTime/TakenDateTime";
import React from "react";
import img from "../../../assets/topCar.png";
import Image from "next/image";
import { FaCar, FaRegHeart, FaStar } from "react-icons/fa6";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { LuDoorClosed, LuFuel } from "react-icons/lu";
import { RiShoppingBagLine } from "react-icons/ri";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import HitRoad from "@/components/HitRoad/HitRoad";
import MapParent from "@/components/Map/MapParent";
import TopHostedCar from "@/components/TopHostedCar/TopHostedCar";

const BrowseByDestinationPage = () => {
  return (
    <div className="container mx-auto my-10 font-lora px-2 md:px-0">
      <div className="text-center">
        <HeadingTitle title="Rent cars in United Kingdom, HI" />
        <p className="mt-12 font-lora">
          Discover the Nardo car rental marketplace
        </p>
      </div>
      <TakenDateTime />

      <div className="my-5">
        <p className="md:text-[32px] text-[18px] mb-20 md:mb-0 font-semibold">
          Top rated rental cars in Los Angeles, CA
        </p>
      </div>
      <Carousel>
        <CarouselContent>
          <CarouselItem className="md:basis-1/4 basic-1/2">
            <div className="bg-[#F9F9F9] p-4 rounded-md space-y-4">
              <div className="relative">
                <Image src={img} height={300} width={300} alt="img" />
                <span className="absolute top-2 right-2 text-[#0CFEE8] text-2xl">
                  <FaRegHeart />
                </span>
              </div>
              <div className="flex items-center gap-2">
                <p className="bg-[#BCBABA26] px-2 py-1 rounded-full">
                  luxury car
                </p>
                <div className="flex items-center gap-1">
                  <FaStar className="text-[#0CFEE8]" /> <span>4.5</span>
                </div>
              </div>
              <p className="font-semibold text-xl">BMW M2 Car 2017</p>
              <div className="flex items-center justify-between ">
                <p className="flex items-center gap-2">
                  <FaCar /> 4 Passenger
                </p>
                <p className="flex items-center gap-2">
                  <LuDoorClosed />4 Door
                </p>
              </div>
              <div className="flex items-center justify-between  border-b pb-4">
                <p className="flex items-center gap-2">
                  {" "}
                  <LuFuel />
                  petrol
                </p>
                <p className="flex items-center gap-2">
                  {" "}
                  <RiShoppingBagLine />
                  Auto
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p>
                  <span className="font-semibold">£280 </span>/ per day
                </p>
                <Link
                  className="bg-[#0CFEE8] text-white p-3 rounded-full"
                  href={`/browse-by-destination/:id`}
                >
                  <MdArrowOutward />
                </Link>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/4 basic-1/2">
            <div className="bg-[#F9F9F9] p-4 rounded-md space-y-4">
              <div className="relative">
                <Image src={img} height={300} width={300} alt="img" />
                <span className="absolute top-2 right-2 text-[#0CFEE8] text-2xl">
                  <FaRegHeart />
                </span>
              </div>
              <div className="flex items-center gap-2">
                <p className="bg-[#BCBABA26] px-2 py-1 rounded-full">
                  luxury car
                </p>
                <div className="flex items-center gap-1">
                  <FaStar className="text-[#0CFEE8]" /> <span>4.5</span>
                </div>
              </div>
              <p className="font-semibold text-xl">BMW M2 Car 2017</p>
              <div className="flex items-center justify-between ">
                <p className="flex items-center gap-2">
                  <FaCar /> 4 Passenger
                </p>
                <p className="flex items-center gap-2">
                  <LuDoorClosed />4 Door
                </p>
              </div>
              <div className="flex items-center justify-between  border-b pb-4">
                <p className="flex items-center gap-2">
                  {" "}
                  <LuFuel />
                  petrol
                </p>
                <p className="flex items-center gap-2">
                  {" "}
                  <RiShoppingBagLine />
                  Auto
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p>
                  <span className="font-semibold">£280 </span>/ per day
                </p>
                <Link
                  className="bg-[#0CFEE8] text-white p-3 rounded-full"
                  href={`/browse-by-destination/:id`}
                >
                  <MdArrowOutward />
                </Link>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/4 basic-1/2">
            <div className="bg-[#F9F9F9] p-4 rounded-md space-y-4">
              <div className="relative">
                <Image src={img} height={300} width={300} alt="img" />
                <span className="absolute top-2 right-2 text-[#0CFEE8] text-2xl">
                  <FaRegHeart />
                </span>
              </div>
              <div className="flex items-center gap-2">
                <p className="bg-[#BCBABA26] px-2 py-1 rounded-full">
                  luxury car
                </p>
                <div className="flex items-center gap-1">
                  <FaStar className="text-[#0CFEE8]" /> <span>4.5</span>
                </div>
              </div>
              <p className="font-semibold text-xl">BMW M2 Car 2017</p>
              <div className="flex items-center justify-between ">
                <p className="flex items-center gap-2">
                  <FaCar /> 4 Passenger
                </p>
                <p className="flex items-center gap-2">
                  <LuDoorClosed />4 Door
                </p>
              </div>
              <div className="flex items-center justify-between  border-b pb-4">
                <p className="flex items-center gap-2">
                  {" "}
                  <LuFuel />
                  petrol
                </p>
                <p className="flex items-center gap-2">
                  {" "}
                  <RiShoppingBagLine />
                  Auto
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p>
                  <span className="font-semibold">£280 </span>/ per day
                </p>
                <Link
                  className="bg-[#0CFEE8] text-white p-3 rounded-full"
                  href={`/browse-by-destination/:id`}
                >
                  <MdArrowOutward />
                </Link>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/4 basic-1/2">
            <div className="bg-[#F9F9F9] p-4 rounded-md space-y-4">
              <div className="relative">
                <Image src={img} height={300} width={300} alt="img" />
                <span className="absolute top-2 right-2 text-[#0CFEE8] text-2xl">
                  <FaRegHeart />
                </span>
              </div>
              <div className="flex items-center gap-2">
                <p className="bg-[#BCBABA26] px-2 py-1 rounded-full">
                  luxury car
                </p>
                <div className="flex items-center gap-1">
                  <FaStar className="text-[#0CFEE8]" /> <span>4.5</span>
                </div>
              </div>
              <p className="font-semibold text-xl">BMW M2 Car 2017</p>
              <div className="flex items-center justify-between ">
                <p className="flex items-center gap-2">
                  <FaCar /> 4 Passenger
                </p>
                <p className="flex items-center gap-2">
                  <LuDoorClosed />4 Door
                </p>
              </div>
              <div className="flex items-center justify-between  border-b pb-4">
                <p className="flex items-center gap-2">
                  {" "}
                  <LuFuel />
                  petrol
                </p>
                <p className="flex items-center gap-2">
                  {" "}
                  <RiShoppingBagLine />
                  Auto
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p>
                  <span className="font-semibold">£280 </span>/ per day
                </p>
                <Link
                  className="bg-[#0CFEE8] text-white p-3 rounded-full"
                  href={`/browse-by-destination/:id`}
                >
                  <MdArrowOutward />
                </Link>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/4 basic-1/2">
            <div className="bg-[#F9F9F9] p-4 rounded-md space-y-4">
              <div className="relative">
                <Image src={img} height={300} width={300} alt="img" />
                <span className="absolute top-2 right-2 text-[#0CFEE8] text-2xl">
                  <FaRegHeart />
                </span>
              </div>
              <div className="flex items-center gap-2">
                <p className="bg-[#BCBABA26] px-2 py-1 rounded-full">
                  luxury car
                </p>
                <div className="flex items-center gap-1">
                  <FaStar className="text-[#0CFEE8]" /> <span>4.5</span>
                </div>
              </div>
              <p className="font-semibold text-xl">BMW M2 Car 2017</p>
              <div className="flex items-center justify-between ">
                <p className="flex items-center gap-2">
                  <FaCar /> 4 Passenger
                </p>
                <p className="flex items-center gap-2">
                  <LuDoorClosed />4 Door
                </p>
              </div>
              <div className="flex items-center justify-between  border-b pb-4">
                <p className="flex items-center gap-2">
                  {" "}
                  <LuFuel />
                  petrol
                </p>
                <p className="flex items-center gap-2">
                  {" "}
                  <RiShoppingBagLine />
                  Auto
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p>
                  <span className="font-semibold">£280 </span>/ per day
                </p>
                <Link
                  className="bg-[#0CFEE8] text-white p-3 rounded-full"
                  href={`/browse-by-destination/:id`}
                >
                  <MdArrowOutward />
                </Link>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="-top-8 right-12 " />
        <CarouselNext className="-top-8 right-1 " />
      </Carousel>

      <div className="my-16">
        <div className="text-center">
          <HeadingTitle title="Top hosts in London" />
        </div>
        <TopHostedCar />
      </div>

      <HitRoad />
      <div>
        <p className="py-5 text-2xl text-center">Rental Car in London</p>
        <div className="">
          <MapParent height={500} />
        </div>
      </div>
    </div>
  );
};

export default BrowseByDestinationPage;
