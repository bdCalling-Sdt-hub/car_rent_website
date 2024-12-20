"use client";
import HeadingTitle from "@/components/shared/HeadingTitle";
import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import img from "../../../assets/car.jpg";
import img1 from "../../../assets/driver.png";
import Image from "next/image";
import { FaRegStar } from "react-icons/fa6";
import Link from "next/link";
import { IoChatbubbleOutline } from "react-icons/io5";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CompleteTrip from "@/components/CompleteTrip";
import { MdOutlineStar } from "react-icons/md";

const MyTripPage = () => {
  return (
    <div className="container mx-auto px-2 md:px-0">
      <div className="md:py-8 py-2">
        <HeadingTitle title="My Trip" />
      </div>
      <div className="md:my-8 my-5">
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="grid w-[100%] md:w-[30%] grid-cols-2 gap-5 mb-6">
            <TabsTrigger value="account" className="">
              Current Trip
            </TabsTrigger>
            <TabsTrigger value="password">History</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 font-lora ">
              <div className="md:col-span-6 col-span-1 gap-5">
                <Image
                  alt="img"
                  src={img}
                  className=""
                  height={200}
                  width={1000}
                />
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
                      <p className="mb-2">Date : 05/12/2024</p>
                      <Link
                        className="bg-[#313131] mb-5 text-white px-1 w-full md:px-4 md:text-sm text-xs  justify-center  flex items-center gap-2 rounded-sm py-3"
                        href={"/conversationChat"}
                      >
                        Chat With Host <IoChatbubbleOutline />
                      </Link>
                      <Select>
                        <SelectTrigger className="md:w-[180px] bg-[#0CFEE8]">
                          <SelectValue placeholder="Status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="apple">Order Start</SelectItem>
                            <SelectItem value="banana">
                              In Progress Order
                            </SelectItem>
                            <SelectItem value="blueberry">
                              Complete order
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <p className="mt-6 text-[#272121]">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which See
                  more...
                </p>

                <div className=" mt-10 ">
                  <div className="">
                    <p className="font-semibold">BMW M2 Car 2017</p>
                    <div className="flex items-center gap-5 my-2">
                      <p className="   font-thin">
                        <p className="flex items-center gap-2 ">
                          <MdOutlineStar  className="text-[#0CFEE8]" /> (4.0)
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
                      Statue of Liberty, Times Square, Central Park, Empire
                      State Building
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
          </TabsContent>
          <TabsContent value="password">
            <div>
              <CompleteTrip />
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default MyTripPage;
