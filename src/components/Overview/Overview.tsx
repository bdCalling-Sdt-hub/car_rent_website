import React from 'react'
import overview from '../../assets/car20.png'
import Image from 'next/image'
import back from "../../assets/group.png";
const Overview = () => {
    return (
        <div className="pb-8 px-4 md:px-0 container mx-auto">
        <div className="lg:flex justify-center lg:justify-between gap-6 mt-10">
          {/* Section 1 */}
          <div className="relative w-full sm:w-[100%] lg:w-[632px] flex items-center justify-center">
            <div className="w-full">
              <Image
                src={back}
                alt="background"
                width={700}
                height={0}
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="absolute px-11 sm:px-10 md:px-20 text-center z-10">
              <h1 className="text-[#528AAE] font-semibold text-[20px] sm:text-[24px] md:text-[32px]">
                {`  “Become a host”`}
              </h1>
              <p className="mt-2 text-sm sm:text-base">
                Kickstart your entrepreneurial journey by launching a small
                car-sharing business on Nardo.
              </p>
            </div>
          </div>
  
          {/* Section 2 */}
          <div className="relative w-full sm:w-[100%] lg:w-[632px] mt-16 lg:mt-0 flex items-center justify-center">
            <div className="w-full">
              <Image
                src={back}
                alt="background"
                width={700}
                height={0}
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="absolute px-11 sm:px-10 md:px-20 text-center z-10">
              <h1 className="text-[#528AAE] font-semibold text-[20px] sm:text-[24px] md:text-[32px]">
                “Income here”
              </h1>
              <p className="mt-2 text-sm sm:text-base">
                {`Fuel your financial goals! There's no better feeling than seeing
                extra income coming into your bank accounts.`}
              </p>
            </div>
          </div>
        </div>
  
        {/* Large Image */}
        <div className="hidden lg:block mt-10">
          <div className="w-[100%] mx-auto flex justify-center items-center">
            <Image
              src={overview}
              alt="overview"
              width={900}
              height={300}
              className=" h-auto object-contain"
            />
          </div>
        </div>
  
        {/* Section 3 */}
        <div className="flex justify-center mt-16">
          <div className="relative w-full sm:w-[100%] lg:w-[632px] flex items-center justify-center">
            <div className="w-full">
              <Image
                src={back}
                alt="background"
                width={700}
                height={0}
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="absolute px-11 sm:px-10 md:px-20 text-center z-10">
              <h1 className="text-[#528AAE] font-semibold text-[20px] sm:text-[24px] md:text-[32px]">
                “Book a car”
              </h1>
              <p className="mt-2 text-sm sm:text-base">
                Down the street or across the country, find the perfect vehicle
                for your next adventure.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Overview