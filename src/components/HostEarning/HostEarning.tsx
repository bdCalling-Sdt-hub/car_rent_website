import React from "react";
import img from "../../assets/car.jpg";
import img1 from "../../assets/car1.png";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import Chart from "../Chart/Chart";
import back from "../../assets/backh.png";
const HostEarning = () => {
  return (
    <div className="font-lora ">
      <div className="md:flex justify-between  gap-20 space-y-4 md:space-y-0">
        <div
          className=" w-full text-center rounded-sm text-[32px] font-medium"
          style={{
            backgroundImage: `url(${back.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "330px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center", 
          }}
        >
          <div>
            <p>Total Income</p>
            <p>$15,836</p>
          </div>
        </div>

        <div
          className=" w-full text-center rounded-sm text-[32px] font-medium"
          style={{
            backgroundImage: `url(${back.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "330px",
            display: "flex",
            alignItems: "center", 
            justifyContent: "center", 
          }}
        >
          <div>
            <p>Total Income</p>
            <p>$15,836</p>
          </div>
        </div>
        <div
          className=" w-full text-center rounded-sm text-[32px] font-medium"
          style={{
            backgroundImage: `url(${back.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "330px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>
            <p>Total Income</p>
            <p>$15,836</p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <Chart />
      </div>

      <div className="mt-10 space-y-10">
        <p className=" text-[18px] md:text-[30px]  ">Income-In-Progress</p>

        <div className="grid  grid-cols-1 md:grid-cols-12 items-center gap-5 bg-[#BCBABA26] rounded-sm ">
          <div className="col-span-4">
            <Image
              alt="img"
              className="w-full h-60"
              height={600}
              width={600}
              src={img}
            />
          </div>
          <div className="col-span-4 ">
            <div className="space-y-2">
              <p className="text-xl font-medium">Mercedes-Benz E-Class 2017</p>
              <p>Start Date : 05-12-2024 Time : 07 : 30 AM</p>
              <p>End Date : 05-12-2024 Time : 07 : 30 AM</p>
              <p>
                Duration : 1 days{" "}
                <span className=" ml-2">
                  Price : £125.00 Pending
                </span>
              </p>
            </div>
            <div className="mt-5">
              <p>Renter:</p>
              <div className="flex mt-2 gap-2">
                <Image
                  alt="img"
                  className="h-12 w-12 rounded-full"
                  height={300}
                  width={300}
                  src={img1}
                />
                <div>
                  <p>MD: Jahid Hasan</p>
                  <p className="flex items-center gap-2">
                    <CiLocationOn /> London
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4 text-center text-[18px] md:text-[32px]  ">
            <p>Price :</p>
            <p> £125.00 Pending</p>
          </div>
        </div>
        <div className="grid  grid-cols-1 md:grid-cols-12 items-center gap-5 bg-[#BCBABA26] rounded-sm ">
          <div className="col-span-4">
            <Image
              alt="img"
              className="w-full h-60"
              height={600}
              width={600}
              src={img}
            />
          </div>
          <div className="col-span-4 ">
            <div className="space-y-2">
              <p className="text-xl font-medium">Mercedes-Benz E-Class 2017</p>
              <p>Start Date : 05-12-2024 Time : 07 : 30 AM</p>
              <p>End Date : 05-12-2024 Time : 07 : 30 AM</p>
              <p>
                Duration : 1 days{" "}
                <span className=" ml-2">
                  Price : £125.00 Pending
                </span>
              </p>
            </div>
            <div className="mt-5">
              <p>Renter:</p>
              <div className="flex mt-2 gap-2">
                <Image
                  alt="img"
                  className="h-12 w-12 rounded-full"
                  height={300}
                  width={300}
                  src={img1}
                />
                <div>
                  <p>MD: Jahid Hasan</p>
                  <p className="flex items-center gap-2">
                    <CiLocationOn /> London
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4 text-center text-[18px] md:text-[32px]  ">
            <p>Price :</p>
            <p> £125.00 Pending</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostEarning;
