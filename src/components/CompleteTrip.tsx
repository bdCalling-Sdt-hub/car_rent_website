"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa6";
import img from "../assets/car.jpg";
import img1 from "../assets/driver.png";
import { Form, Modal, Input } from "antd";

const { TextArea } = Input;
const CompleteTrip = () => {
  const [openModal, setOpenModal] = useState(false);
  const [rating, setRating] = useState(0);
  // handle rating function
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleStarClick = (starValue: number) => {
    setRating(starValue);
  };

  //   console.log(rating);
  const handleRatingSubmit = (value: string) => {
    console.log(value);
  };
  return (
    <div>
      <div className=" ">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 font-lora   ">
          <div className="col-span-6  md:flex items-center gap-5">
            <Image
              alt="img"
              src={img}
              className="rounded-md w-full"
              height={200}
              width={200}
            />
          </div>
          <div className="col-span-6 ">
            <div className="">
              {/*Host details  */}
              <div className="flex justify-between">
                <div className="shadow-md px-10 rounded-md py-5">
                  <p className="font-semibold">Hosted By :</p>
                  <div className="flex items-center gap-2">
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

                {/* Complete and rating */}
                <div>
                  <p className="mb-2">Date : 05/12/2024</p>
                  <div className="">
                    <p className="bg-[#34C759] px-4 py-2 rounded-sm text-white inline-block">
                      Complete Order
                    </p>
                  </div>
                  <div className="">
                    <p
                      onClick={() => handleOpenModal()}
                      className="bg-[black] px-4 py-2 rounded-sm cursor-pointer text-white inline-block mt-5 text-end"
                    >
                      rating
                    </p>
                  </div>
                </div>
              </div>

              {/* Details */}
              <p className="mt-8 text-[#272121] ">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which See more...
              </p>
            </div>

            <div className="col-span-4 text-[#272121] space-y-2 mt-10">
              <p className="font-semibold text-xs">PICKUP AT CAR LOCATION</p>
              <p className="text-sm">New York City, USA</p>
              <p className="text-sm">
                Statue of Liberty, Times Square, Central Park, Empire State
                Building
              </p>
            </div>

            <div className="mt-10">
              <p className="font-sm text-[16px] text-[#272121]">
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
        open={openModal}
        centered
        onCancel={() => setOpenModal(false)}
        footer={false}
      >
        <h1 className="text-2xl font-semibold text-center">
          Write your feedback
        </h1>
        <div className="flex justify-center gap-2 mt-10 cursor-pointer">
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star} onClick={() => handleStarClick(star)}>
              {star <= rating ? (
                <FaStar size={25} className="text-black" />
              ) : (
                <FaRegStar size={25} className="text-black" />
              )}
            </span>
          ))}
        </div>

        <Form onFinish={handleRatingSubmit}>
          <Form.Item name={"review"} className="mt-5">
            <TextArea
              placeholder="write your thinks..."
              autoSize={{ minRows: 3, maxRows: 5 }}
            />
          </Form.Item>
          <div className="flex justify-center">
            <button className="bg-black text-white px-5 py-2 rounded-md shadow-md">Send</button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default CompleteTrip;
