import React from "react";
import HeadingTitle from "../shared/HeadingTitle";
import img from "../../assets/chat.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { IoIosStar } from "react-icons/io";

interface User {
    name : string,
    address :  string,
    profile_image :  string
}

interface review {
    _id : string,
    user : User,
    car : string,
    rating : number,
    review : string,
    createdAt: string;
    updatedAt: string;

}
const ClientReview = async () => {
  const response = await fetch(
    "http://178.128.174.197:8001/review/get-all-review?sort=-rating&limit=20",
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const reviews = await response.json();
  return (
    <div className="font-lora container mx-auto px-2 ">
      <div className="text-center my-5 md:my-14">
        <HeadingTitle title={"Client Review"} />
        <p className="mt-2">Testimonials</p>
      </div>

      <Carousel>
        <CarouselContent>
          {reviews?.data?.result?.map((review : review) => {
            return (
              <CarouselItem key={review?._id} className="md:basis-1/3 basis-1/1">
                <div className="bg-[#F9F9F9] p-4 rounded-md space-y-4">
                  <div className="flex gap-5">
                    <Image
                      src={img}
                      height={300}
                      width={300}
                      className="h-20 w-20"
                      alt="img"
                    />
                    <div className="space-y-1">
                      <p className="font-semibold  text-xl">{review?.user?.name}</p>
                      <p>{review?.user?.address}</p>
                      <p>{review?.createdAt?.split("T")[0]}</p>
                      <div className="flex items-center">
                        {
                            Array.from({length : review?.rating},(_,index)=>(
                                <IoIosStar key={index} size={22} />

                            ))
                        }
                      </div>
                    </div>
                  </div>
                  <p className="leading-7 text-[#525252] w-52 md:w-full">
                    {review?.review}
                  </p>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="-top-8 right-12 " />
        <CarouselNext className="-top-8 right-1 " />
      </Carousel>
    </div>
  );
};

export default ClientReview;
