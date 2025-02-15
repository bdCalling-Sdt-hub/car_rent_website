"use client";
import React from "react";
import overview from "../../assets/car20.png";
import Image from "next/image";
import back from "../../assets/group.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Overview = () => {
  return (
    <div className="pb-8 px-4 md:px-0 container mx-auto">
      <div className="lg:flex justify-center lg:justify-between gap-6 mt-10">
        {/* Section 1 - Slide from Left */}
        <SectionAnimation direction="left">
          <h1 className="text-black font-semibold text-[20px] sm:text-[24px] md:text-[32px]">
            {`  “Become a host”`}
          </h1>
          <p className="mt-2 text-sm sm:text-base">
            Kickstart your entrepreneurial journey by launching a small
            car-sharing business on Nardo.
          </p>
        </SectionAnimation>

        {/* Section 2 - Slide from Right */}
        <SectionAnimation direction="right">
          <h1 className="font-semibold text-[20px] sm:text-[20px] md:text-[32px]">
            “EARN AN INCOME”
          </h1>
          <p className="mt-2 text-sm sm:text-base">
            {`Fuel your financial goals! There's no better feeling than seeing extra
            income coming into your bank accounts.`}
          </p>
        </SectionAnimation>
      </div>

      {/* Large Image */}
      <div className="hidden lg:block mt-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-[100%] mx-auto flex justify-center items-center"
        >
          <Image
            src={overview}
            alt="overview"
            width={900}
            height={300}
            className="h-auto object-contain"
          />
        </motion.div>
      </div>

      {/* Section 3 - Slide from Left */}
      <div className="flex justify-center mt-16">
        <SectionAnimation direction="left">
          <h1 className="font-semibold text-[20px] sm:text-[24px] md:text-[32px]">
            “Book a car”
          </h1>
          <p className="mt-2 text-sm sm:text-base">
            Down the street or across the country, find the perfect vehicle for
            your next adventure.
          </p>
        </SectionAnimation>
      </div>
    </div>
  );
};

/**
 * Reusable Component for Animating Sections
 */
const SectionAnimation = ({ children, direction }: { children: React.ReactNode; direction: "left" | "right" }) => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 1, x: direction === "left" ? -100 : 100 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative w-full sm:w-[100%] lg:w-[632px] flex items-center justify-center"
    >
      <div className="w-full">
        <Image src={back} alt="background" width={700} height={0} className="w-full h-auto object-contain" />
      </div>
      <div className="absolute px-11 sm:px-10 md:px-20 text-center z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default Overview;
