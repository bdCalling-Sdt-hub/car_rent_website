"use client";
import HeadingTitle from "@/components/shared/HeadingTitle";
import Link from "next/link";
import React from "react";
import img from "../../../assets/hostHome.jpg";
import img2 from "../../../assets/hostimg3.jpg";
// import img2 from "../../../assets/newCar.png";
import Image from "next/image";
import CreateBusiness from "@/components/CreateBusiness/CreateBusiness";
import AnimateButton from "@/components/AnimateButton/AnimateButton";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
// import SectionAnimation from "@/components/SectionAnimation/SectionAnimation";
/**
 * Reusable Component for Animating Sections
 */
// SectionAnimation component with animations
// export const SectionAnimation = ({
//   children,
//   direction,
// }: {
//   children: React.ReactNode;
//   direction: "left" | "right";
// }) => {
//   const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
//   const animationDistance = typeof window !== "undefined" && window.innerWidth < 768 ? 200 : 800;

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 1, x: direction === "left" ? -animationDistance : animationDistance }}
//       animate={inView ? { opacity: 1, x: 0 } : {}}
//       transition={{
//         duration: 1,
//         ease: "easeInOut",
//         type: "spring",
//         dumping: 20,
//       }}
//     >
//       {children}
//     </motion.div>
//   );
// };

const HostHomePage = () => {
  const SectionAnimation = ({
    children,
    direction,
  }: {
    children: React.ReactNode;
    direction: "left" | "right";
  }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
    const animationDistance =
      typeof window !== "undefined" && window.innerWidth < 768 ? 200 : 800;
    return (
      <motion.div
        ref={ref}
        initial={{
          opacity: 1,
          x: direction === "left" ? -animationDistance : animationDistance,
        }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{
          duration: 1,
          ease: "easeInOut",
          type: "spring",
          damping: 20,
        }}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <div className="container mx-auto py-10 px-2 md:px-0 overflow-hidden">
      <SectionAnimation direction="right">
        <div className="relative">
          <div className="absolute top-0 p-10">
            <p className="mb-5">FIND YOUR DRIVE</p>
            <p className="md:text-5xl text-xl md:font-bold font-semibold  text-black relative z-10 font-lora">Start a car sharing</p>
            {/* <HeadingTitle title="Start a car sharing" /> */}
            <div className="  h-full mt-20 md:mt-0">
              <p className="pt-5 text-4xl font-medium pb-8  hidden md:block md:text-black z-10 ">
                business on Nardo
              </p>
              <AnimateButton>
                <Link
                  href="/host-home/License-plate"
                  // className="bg-[#8D8D8D] text-white px-8 py-4 rounded-sm shadow-md "
                >
                  Get Start
                </Link>
              </AnimateButton>
            </div>
          </div>
          <div className="absolute inset-0 bg-black opacity-25 z-0 pointer-events-none "></div>
          <div className="mt-10 ">
            <Image
              src={img}
              alt="img"
              height={1600}
              width={1600}
              className="w-full  object-cover h-[72vh]"
            />
          </div>
        </div>
      </SectionAnimation>
      <div className="max-w-5xl mx-auto space-y-10 mt-10">
        <p className="">
          Seize control of your financial future and fuel your entrepreneurial
          drive with Nardo, the worlds largest car-sharing marketplace.
        </p>
        <p>
          Nardo equips aspiring entrepreneurs with the resources to build a
          successful car-sharing portfolio and the potential to significantly
          boost their annual income.
        </p>
        <p>
          Start by listing your first car today, then design your business plan
          and scale your portfolio quickly!
        </p>
      </div>

      <div>
        <div className="flex justify-center my-8 ">
          <AnimateButton>
            <Link href="/host-home/License-plate">
              <button
              //  className="bg-[#0CFEE8] py-2 px-8 rounded shadow-md"
              >
                Get Start
              </button>
            </Link>
          </AnimateButton>
        </div>
        <div className="mt-20 text-center">
          <HeadingTitle title="Create a buisiness that is..." />
          {/* <p className='pt-5 text-5xl font-bold pb-8'>welcome</p> */}
        </div>
        <CreateBusiness />
      </div>
      <div className="mt-20 text-center">
        <HeadingTitle title="Aspiring and seasoned entrepreneurs welcome" />
        {/* <p className='pt-5 text-5xl font-bold pb-8'>welcome</p> */}
        <p className="mt-20 max-w-3xl mx-auto leading-8 ">
          Whether you want to host a few cars to earn extra income to pay for
          life expenses, or build a small shop with a portfolio of cars, start
          with one car and scale how you want.
        </p>
      </div>
      <SectionAnimation direction="left">
        <div className=" mt-10 relative">
          <div className="absolute flex items-center justify-center z-20  h-full w-full">
            <div className="text-center space-y-4 text-white ">
              <p className="font-bold text-4xl font-lora">NARDO</p>
              <p className=" text-xl md:text-4xl">You could earn</p>
              <p className="font-lora text-sm md:text-2xl pb-5 md:pb-10">
                an average of £40 per day
              </p>
              <AnimateButton>
                <Link
                  href="/host-home/License-plate"
                >
                  Get Start
                </Link>
              </AnimateButton>
            </div>
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-40 z-0 pointer-events-none "></div>

          <div className=" mt-8 md:mt-0 ">
            <Image
              src={img2}
              alt="img"
              className="w-full h-[400px] md:h-[600px] object-center object-cover"
              height={1500}
              width={1500}
            />
          </div>

        </div>
      </SectionAnimation>

      <div className="text-center mt-20 max-w-xl mx-auto space-y-4">
        <p className="text-4xl font-bold">Start building your business plan</p>
        <p className="pb-10">
          List your first car to get started today and build your plan to take
          control of your financial future tomorrow.
        </p>
        <AnimateButton>
          <Link
            href="/host-home/License-plate"
            // className="bg-[#0CFEE8]  px-8 py-3 rounded-sm shadow-md "
          >
            Get Start
          </Link>
        </AnimateButton>
      </div>
    </div>
  );
};

export default HostHomePage;
