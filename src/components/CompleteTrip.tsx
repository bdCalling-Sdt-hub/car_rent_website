import Image from "next/image";
import React, { useState } from "react";
import { FaRegStar } from "react-icons/fa6";
import img from "../assets/car.jpg";
import img4 from "../assets/histori1.png";
import img5 from "../assets/histori2.png";
import img1 from "../assets/driver.png";
import Link from "next/link";
import { IoChatbubbleOutline } from "react-icons/io5";
import { Modal, Rate, Select } from "antd";

import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { MdOutlineStar } from "react-icons/md";
import { RiGalleryLine } from "react-icons/ri";
const CompleteTrip = () => {
  const [openModal, setOpenModal] = useState(false);

  const [openModal1, setOpenModal1] = useState(false);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 font-lora ">
        <div className="md:col-span-6 col-span-1 gap-5">
          <div className="relative group  w-full flex items-center justify-center overflow-hidden">
            <Image alt="img" src={img} className="" height={200} width={1000} />

            <button
              className="absolute bottom-11 flex gap-2 items-center bg-white text-black p-2 px-6 rounded z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              onClick={() => setOpenModal1(true)}
            >
              {" "}
              <RiGalleryLine className="text-xl" />
              View 12 Photo
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <Image
              alt="img"
              src={img4}
              className=""
              height={200}
              width={1000}
            />
            <Image
              alt="img"
              src={img5}
              className=""
              height={200}
              width={1000}
            />
            <Image
              alt="img"
              src={img5}
              className=""
              height={200}
              width={1000}
            />
            <Image
              alt="img"
              src={img4}
              className=""
              height={200}
              width={1000}
            />
          </div>
        </div>
        <div className="md:col-span-6  col-span-1  gap-5">
          <div>
            <div className="md:flex justify-between ">
              <div className=" p-2 py-4 shadow-md">
                <p className="font-semibold">Hosted By :</p>
                <div className="flex   gap-2">
                  <Image
                    alt="img"
                    className="h-10 w-10"
                    src={img1}
                    height={200}
                    width={200}
                  />
                  <div>
                    <p className="font-medium">Hasan</p>
                    <p className="flex items-center gap-2">
                      <FaRegStar /> 4.0{" "}
                    </p>
                    <p>120 trips. Joined Aug 2017</p>
                  </div>
                </div>
              </div>
              <div className="">
                <Link
                  className="bg-[#34C759] mb-5 text-white px-1 w-full md:px-4 md:text-sm text-xs  justify-center  flex items-center gap-2 rounded-sm py-3"
                  href={"/conversationChat"}
                >
                  Complete Order
                </Link>
                <div className="flex justify-end">
                  <button
                    onClick={() => setOpenModal(true)}
                    className="flex gap-2 items-center bg-[#0CFEE8] px-4 py-3"
                  >
                    Ratting <MdOutlineStar />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-6 text-[#272121]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which See more...
          </p>

          <div className=" mt-10 ">
            <div className="">
              <p className="font-semibold">BMW M2 Car 2017</p>
              <div className="flex items-center gap-5 my-2">
                <p className="   font-thin">
                  <p className="flex items-center gap-2 ">
                    <FaRegStar className="text-[#0CFEE8]" /> (4.0)
                  </p>
                </p>
                <p>
                  <span className="font-semibold">£280 </span>/ 1 Day
                </p>
              </div>
              <div className="py-2">
                <span className="font-semibold">Trip Start </span>{" "}
                <span className="text-[#525252]">
                  {" "}
                  Date: 10/23/2024 Time: 12:30 AM
                </span>
              </div>
              <div>
                <span className="font-semibold">Trip End </span>{" "}
                <span className="text-[#525252]">
                  {" "}
                  Date: 10/23/2024 Time: 12:30 AM
                </span>
              </div>
            </div>
            <div className=" text-[#272121] space-y-2 mt-7">
              <p className="font-semibold">PICKUP AT CAR LOCATION</p>
              <p className="text-sm">New York City, USA</p>
              <p className="text-sm">
                Statue of Liberty, Times Square, Central Park, Empire State
                Building
              </p>
            </div>
            <div className="">
              <p className="font-semibold text-[16px] mt-7 text-[#272121]">
                Delivery Location
              </p>
              <p className="text-xl my-2 font-light">
                Detroit Metropolitan Wayne County Airport
              </p>
              <p className="text-sm mb-2">
                Stephen will unlock the car remotely for you.{" "}
              </p>
              <div className="flex justify-between items-center mb-2">
                <p>£69.00 * 3 days</p>
                <p>£207.00</p>
              </div>

              <div className="flex justify-between items-center mb-2">
                <p>Trip fee</p>
                <p>£24.50</p>
              </div>
              <div className="flex justify-between items-center mb-2">
                <p>600 total miles</p>
                <p>FREE</p>
              </div>
              <div className="flex justify-between items-center">
                <p>3+ days discount</p>
                <p>-£10.35</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        width={500}
        centered
        footer={false}
        open={openModal}
        onCancel={() => setOpenModal(false)}
      >
        <p className="text-center font-medium text-2xl mb-5">
          Write Your Feedback
        </p>
        <div className="flex justify-center ">
          <Rate />
        </div>

        <div className="mt-5">
          <label htmlFor="">
            Comments
            <textarea className="w-full border h-44 " name="" id=""></textarea>
          </label>
        </div>

        <div className="flex justify-center mt-5">
          <button className="bg-black text-white px-6 py-2 ">Send</button>
        </div>
      </Modal>

      <Modal
        width={900}
        centered
        footer={false}
        open={openModal1}
        onCancel={() => setOpenModal1(false)}
      >
         <p className="text-center font-medium text-xl mb-5">All Images</p>
        <div className="grid grid-cols-2 gap-5">
          <div className="space-y-5">
          <Image alt='img' className='w-full h-full' src={img} height={1200} width={1200} />
          </div>
          <div className="space-y-5">
          <Image alt='img' className='w-full h-full' src={img} height={1200} width={1200} />
          </div>
          <div className="space-y-5">
          <Image alt='img' className='w-full h-full' src={img} height={1200} width={1200} />
          </div>
          <div className="space-y-5">
          <Image alt='img' className='w-full h-full' src={img} height={1200} width={1200} />
          </div>
          <div className="space-y-5">
          <Image alt='img' className='w-full h-full' src={img} height={1200} width={1200} />
          </div>
          <div className="space-y-5">
          <Image alt='img' className='w-full h-full' src={img} height={1200} width={1200} />
          </div>
          <div className="space-y-5">
          <Image alt='img' className='w-full h-full' src={img} height={1200} width={1200} />
          </div>
          <div className="space-y-5">
          <Image alt='img' className='w-full h-full' src={img} height={1200} width={1200} />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CompleteTrip;
