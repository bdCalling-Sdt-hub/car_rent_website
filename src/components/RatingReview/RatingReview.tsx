import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { imageUrl } from "@/redux/baseApi";
const RatingReview = ({ rating }: { rating: any }) => {
  return (
    <div className="mt-10">
      <p className="text-xl font-medium">Rating and Review</p>
      {rating?.map((rat: any) => {

        return (
          <div
            key={rat?._id}
            className="flex items-center gap-5 mt-5  border-b  py-10"
          >
            <Image
              alt="img"
              className="h-14 w-14 rounded-full"
              height={200}
              width={200}
              src={`${imageUrl}/${rat?.user?.profile_image}`}
            />
            <div className="space-y-2  ">
              <div className="flex">
                {/* Render stars dynamically based on the rating */}
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={
                      index < rat?.rating ? "text-[#0CFEE8]" : "text-gray-400"
                    }
                  />
                ))}
              </div>
              
              <p>
                <span className="font-semibold text-xl">{rat?.user?.name}</span>{" "}
                <span className="font-thin">
                  {rat?.createdAt?.split("T")[0]}
                </span>
              </p>
              <p>{rat?.review} </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RatingReview;
