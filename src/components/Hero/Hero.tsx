"use client";
import React from "react";
import heroImage from "../../assets/heroImg.jpg";
import Image from "next/image";
import { MdArrowOutward, MdDirectionsCar } from "react-icons/md";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Image */}
      <div>
        <motion.div
         initial={{ scale: 1.2 }}
         animate={{ scale: 1, opacity: 1 }}
         transition={{ duration: 10, ease: "easeOut", repeat : Infinity , repeatType :'reverse' }}
        >
          <Image
            height={800}
            width={1600}
            className="w-full h-[80vh] overflow-hidden object-cover bg-black"
            alt="hero image"
            src={heroImage}
          />
        </motion.div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white">
        {/* Animated Small Text */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-2"
        >
          <MdDirectionsCar className="text-white" /> Welcome to Nardo
        </motion.p>

        {/* Animated Heading with Color Animation */}
        <motion.p
          initial={{   scale: 0.8 , }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 4 }}
          className="font-lora md:font-bold text-[30px] lg:text-[64px] max-w-screen-sm text-center"
        >
          Hassle-Free Rides Every Time
        </motion.p>

        {/* Animated Description with Color Change */}
        <p
         
          className="max-w-screen-md text-center text-[10px] md:text-[18px] font-lora"
        >
          Whether you are planning a weekend getaway, a business trip, or just
          need a reliable ride for the day, we offer a wide range of vehicles to
          suit your needs.
        </p>

        {/* Animated Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex items-center cursor-pointer"
        >
          <motion.p
            whileHover={{ scale: 1.05 }}
            className="bg-[#272121] mt-5 md:py-4 py-2 rounded-full px-4 md:px-8 text-[10px] md:text-[18px] font-lora"
          >
            Whether you are planning a weekend getaway
          </motion.p>

          <motion.div
            whileHover={{ rotate: 45 }}
            transition={{ duration: 0.3 }}
            className="bg-[#272121] mt-5 md:p-4 p-2 transform transition-transform rounded-full"
          >
            <MdArrowOutward className="text-white" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
