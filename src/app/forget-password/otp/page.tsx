"use client";
import OtpInput from "react-otp-input";
import React, { useState } from "react";
import { useSendOtpMutation } from "@/redux/Api/authApi";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const Otp = () => {
  const [otp, setOtp] = useState("");
  const [sendOtp] = useSendOtpMutation();

  const navigate = useRouter()
  const handleVerifyOtp = () => {
    const email = localStorage.getItem("forgetPass");
    const data = {
      email: email,
      code: otp,
    };
    sendOtp(data)
      .unwrap()
      .then((payload) => {
        toast.success(payload?.message)
        navigate.push("/forget-password/change-password")
      })
      .catch((error) => toast.error(error?.data?.message));
  };

  return (
    <div className="flex items-center justify-center bg-[#EBEBEB] py-10 min-h-[100vh]">
      <div
        style={{
          width: "630px",
          background: "white",
          padding: "90px 57px",
          borderRadius: "12px",
        }}
      >
        <h1
          style={{
            fontSize: "32px",
            color: "#6A6D7C",
            marginBottom: "13px",
            textAlign: "center",
          }}
        >
          Check your email
        </h1>
        <p
          style={{ width: "380px", color: "#B8B8B8", margin: "0 auto 0 auto" }}
        >
          We sent a reset link to{" "}
          <span style={{ color: "#545454" }}> contact@dscode...com </span>
          enter 6 digit code that mentioned in the email
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "30px",
          }}
          className="py-7"
        >
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            inputStyle={{
              height: "44px",
              width: "44px",
              borderRadius: "8px",
              marginRight: "16px",
              fontSize: "20px",
              border: "1px solid #A9A9A9",
              color: "#2B2A2A",
              outline: "none",
            }}
            renderInput={(props) => <input {...props} />}
          />
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => handleVerifyOtp()}
            className="bg-black text-white py-2 px-5 rounded-md"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Otp;
