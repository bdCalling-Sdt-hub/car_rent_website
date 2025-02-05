"use client";
import React from "react";
import { Form, Input } from "antd";
import { useForgetPasswordMutation } from "@/redux/Api/authApi";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const ForgetPasswordPage = () => {
  const [sendOtpCode] = useForgetPasswordMutation()
  const navigate = useRouter() 

  const handleLogin = (values:{ email :  string}) => {
    sendOtpCode(values).unwrap()
    .then((payload) =>{
      toast.success(payload?.message)
      localStorage.setItem("forgetPass", values?.email)
      navigate.push('/forget-password/otp')
    })
    .catch((error) => toast.error(error?.data?.message));
  };
  return (
    <div className="px-10 flex items-center justify-center gap-20 min-h-screen">
      
      <div className="bg-gray-100 p-14 rounded-md shadow-md">
        <p className="font-lora text-[25px]  md:text-[50px] font-medium">
          Forget Password?
        </p>

        <p className="text-center mb-5">Please enter your email to get verification code</p>
        <Form layout="vertical" onFinish={handleLogin}>
          <Form.Item label="Email" name={"email"}>
            <Input placeholder="Enter Email" className="p-2" />
          </Form.Item>

          <Form.Item className="flex justify-center">
            <button   className="bg-black w-full text-white  px-5 rounded-md py-2 font-lora">
              Send Otp
            </button>
          </Form.Item>
        </Form>
        {/* <p className="text-center mt-8">
          Don&apos;t have an account?{" "}
          <span className="font-semibold">Sign Up</span>
        </p> */}
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
