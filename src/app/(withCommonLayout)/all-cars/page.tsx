import MapParent from "@/components/Map/MapParent";
import React from "react";
import img from '../../../assets/car6.png'
import Image from "next/image";
import { CiStar } from "react-icons/ci";
import { GoLocation } from "react-icons/go";
import FilterBar from "@/components/FilterBar/FilterBar";
const AllCarsPage = () => {
  return (
    <div className="container mx-auto my-10 font-lora">
      <FilterBar/>
      <div className="grid grid-cols-2 justify-between gap-5">
        <div>
          <p className="text-[24px] font-semibold">200+ cars available</p>
          <p className="text-sm mb-8">These cars are located in and around London</p>
          <div className="mt-5 flex items-center gap-4 border rounded-md">
            <Image alt="img" height={200} width={300} src={img}  />
            <div className="space-y-4">
              <p className="text-[24px]">Mercedes-Benz E-Class 2017</p>
              <p className="flex items-center gap-5 mt-2"><span className="bg-[#DFDEDE] px-4 py-1 rounded-full ">luxury car</span> <span className="flex items-center gap-1"><CiStar />4.5</span></p>
              <p className="flex items-center gap-1 mt-2"><GoLocation /> London</p>
              <p>£40/day</p>
              <p className="bg-[#E7EDF3] rounded-sm text-[#528AAE] inline-block mt-2 px-2">3 day -10$</p>
            </div>
          </div>
          <div className="mt-5 flex items-center gap-4 border rounded-md">
            <Image alt="img" height={200} width={300} src={img}  />
            <div className="space-y-4">
              <p className="text-[24px]">Mercedes-Benz E-Class 2017</p>
              <p className="flex items-center gap-5 mt-2"><span className="bg-[#DFDEDE] px-4 py-1 rounded-full ">luxury car</span> <span className="flex items-center gap-1"><CiStar />4.5</span></p>
              <p className="flex items-center gap-1 mt-2"><GoLocation /> London</p>
              <p>£40/day</p>
              <p className="bg-[#E7EDF3] rounded-sm text-[#528AAE] inline-block mt-2 px-2">3 day -10$</p>
            </div>
          </div>
          <div className="mt-5 flex items-center gap-4 border rounded-md">
            <Image alt="img" height={200} width={300} src={img}  />
            <div className="space-y-4">
              <p className="text-[24px]">Mercedes-Benz E-Class 2017</p>
              <p className="flex items-center gap-5 mt-2"><span className="bg-[#DFDEDE] px-4 py-1 rounded-full ">luxury car</span> <span className="flex items-center gap-1"><CiStar />4.5</span></p>
              <p className="flex items-center gap-1 mt-2"><GoLocation /> London</p>
              <p>£40/day</p>
              <p className="bg-[#E7EDF3] rounded-sm text-[#528AAE] inline-block mt-2 px-2">3 day -10$</p>
            </div>
          </div>
        </div>
        <div className="-z-10 ">
          <MapParent />
        </div>

      </div>
    </div>
  )
}

export default AllCarsPage