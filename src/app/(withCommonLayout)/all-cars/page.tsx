import MapParent from "@/components/Map/MapParent";
import React from "react";
import img from "../../../assets/car6.png";
import Image from "next/image";
import { CiStar } from "react-icons/ci";
import { GoLocation } from "react-icons/go";
import FilterBar from "@/components/FilterBar/FilterBar";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa6";
const AllCarsPage = () => {
  return (
    <div className="  my-10 font-lora px-5 mx-2 md:px-0">
      <FilterBar />

      <p className="text-[24px] font-semibold">200+ cars available</p>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-between mt-5 gap-5">
        <div className="">
          

          <div className="lg:grid lg:grid-cols-2 gap-4 ">
            <Link href={"/browse-by-destination/:id"}>
              <div className="  gap-4 border rounded-md">
                <Image alt="img" height={200} width={700} src={img} />
                <div className="space-y-4 p-3 ">
                  <div className="flex justify-between items-center">
                  <p className="text-[24px]">Mercedes-Benz E-Class 2017</p>
                  <span className="text-2xl text-[#0CFEE8]"><FaRegHeart /></span>
                  </div>
                  <p className=" flex justify-between items-center mt-2">
                    {/* <span className="bg-[#DFDEDE] px-4 py-1 rounded-full ">
                      luxury car
                    </span> */}
                    <span className="flex items-center gap-1 text-[#0CFEE8]">
                      <CiStar />
                      4.5
                    </span>
                    <p>£40/day</p>
                  </p>
                  <div className="flex justify-between">
                  <p className="flex items-center gap-1 mt-2">
                    <GoLocation /> London
                  </p>
                  
                  <p className="bg-[#E7EDF3] rounded-sm text-[#528AAE] inline-block mt-2 px-2 py-1">
                    3 day -10£
                  </p>
                  </div>
                </div>
              </div>
            </Link>
            <Link href={"/browse-by-destination/:id"}>
              <div className="  gap-4 border rounded-md">
                <Image alt="img" height={200} width={700}  src={img} />
                <div className="space-y-4 p-3 ">
                  <div className="flex justify-between items-center">
                  <p className="text-[24px]">Mercedes-Benz E-Class 2017</p>
                  <span className="text-2xl text-[#0CFEE8]"><FaRegHeart /></span>
                  </div>
                  <p className=" flex justify-between items-center mt-2">
                    {/* <span className="bg-[#DFDEDE] px-4 py-1 rounded-full ">
                      luxury car
                    </span> */}
                    <span className="flex items-center gap-1 text-[#0CFEE8]">
                      <CiStar />
                      4.5
                    </span>
                    <p>£40/day</p>
                  </p>
                  <div className="flex justify-between">
                  <p className="flex items-center gap-1 mt-2">
                    <GoLocation /> London
                  </p>
                  
                  <p className="bg-[#E7EDF3] rounded-sm text-[#528AAE] inline-block mt-2 px-2 py-1">
                    3 day -10£
                  </p>
                  </div>
                </div>
              </div>
            </Link>
            <Link href={"/browse-by-destination/:id"}>
              <div className="  gap-4 border rounded-md">
                <Image alt="img" height={200} width={700} src={img} />
                <div className="space-y-4 p-3 ">
                  <div className="flex justify-between items-center">
                  <p className="text-[24px]">Mercedes-Benz E-Class 2017</p>
                  <span className="text-2xl text-[#0CFEE8]"><FaRegHeart /></span>
                  </div>
                  <p className=" flex justify-between items-center mt-2">
                    {/* <span className="bg-[#DFDEDE] px-4 py-1 rounded-full ">
                      luxury car
                    </span> */}
                    <span className="flex items-center gap-1 text-[#0CFEE8]">
                      <CiStar />
                      4.5
                    </span>
                    <p>£40/day</p>
                  </p>
                  <div className="flex justify-between">
                  <p className="flex items-center gap-1 mt-2">
                    <GoLocation /> London
                  </p>
                  
                  <p className="bg-[#E7EDF3] rounded-sm text-[#528AAE] inline-block mt-2 px-2 py-1">
                    3 day -10£
                  </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="-z-10 ">
          <MapParent height={950} />
        </div>
      </div>
    </div>
  );
};

export default AllCarsPage;
