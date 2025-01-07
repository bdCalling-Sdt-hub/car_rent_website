"use client";
import OTPInput from "react-otp-input";
import Image from "next/image";
import React, { useState } from "react";
import img from "../../../assets/login.png";
import Link from "next/link";
import { useActiveAccountOtpMutation } from "@/redux/Api/authApi";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const Otp = () => {
  const [sendOtp] = useActiveAccountOtpMutation();
  const [otp, setOtp] = useState("");
  const router = useRouter()
  const handleSendOtpCode = () => {
    const data = {
      email: localStorage.getItem("email"),
      activationCode: otp,
    };
    sendOtp(data)
      .unwrap()
      .then((payload) => {
        toast?.success(payload?.message);
        if (payload?.data?.accessToken) {
          localStorage.removeItem("email");
          localStorage.setItem("_token", payload?.data?.accessToken);
          router.push('/')
        }
      })
      .catch((error) => toast?.error(error?.data?.message));
  };

  return (
    <div className="px-10 flex items-center justify-center gap-20 min-h-screen">
      <div className="hidden md:block">
        <Image alt="logo" height={600} width={600} src={img} />
      </div>
      <div>
        <p className="font-lora text-[25px] md:text-[50px] font-medium">
          Welcome Back
        </p>
        <p className="mb-10 font-lora">
          Enter your email and password to access your account
        </p>

        <div className="flex flex-col justify-center mb-5">
          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderSeparator={<span className="mx-1"></span>}
            renderInput={(props) => (
              <input
                {...props}
                className="w-full h-16 text-center bg-white text-lg border  rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                style={{ width: "40px", height: "50px" }}
              />
            )}
          />
          <button
            onClick={() => handleSendOtpCode()}
            className="bg-black mt-5  text-white rounded-md py-2 font-lora"
          >
            Send Otp
          </button>
        </div>
        <p className="text-center mt-8">
          Already have an account?{" "}
          <Link href={"/login"} className="font-semibold">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Otp;
