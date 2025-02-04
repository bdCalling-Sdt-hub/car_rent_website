"use client";
import { Checkbox, Form, Input } from "antd";
import Image from "next/image";
import React from "react";
import img from "../../assets/login.png";
import Link from "next/link";
import { useRegisterUserMutation } from "@/redux/Api/authApi";
import { toast } from "sonner";
import { useRouter } from "next/navigation";


type FieldType = {
    username?: string;
    email?: string;
    phone_number?:number;
    password?:string;
    confirmPassword:string;
    age : number,
    remember?: string;
  };

const RegisterPage = () => {
  const [userRegistration] = useRegisterUserMutation();
  const router = useRouter()
  const handleRegisterUser = (data: FieldType) => {
    const value = {
      ...data,
      role: "USER",
    };



    userRegistration(value)
      .unwrap()
      .then((payload) => {
        toast.success(payload?.message)
        router.push('/register/otp')
        if (data.email) {
          localStorage.setItem('email', data.email);
        } else {
          console.error('Email is undefined');
        }
      })
      .catch((error) => toast.error(error?.data?.message));
  };
  return (
    <div className="px-10 flex items-center justify-center gap-20 min-h-screen">
      <div className="hidden md:block">
        <Image alt="logo" height={600} width={600} src={img} />
      </div>
      <div>
        <p className="font-lora text-[25px]  md:text-[50px] font-medium">
          Welcome Back
        </p>
        <p className="mb-10 font-lora">
          Enter your email and password to access your account
        </p>

        <Form layout="vertical" onFinish={handleRegisterUser}>
          <Form.Item label="Email" name={"email"}>
            <Input placeholder="Enter Email" className="p-2" />
          </Form.Item>
          <Form.Item label="User Name" name={"name"}>
            <Input placeholder="Enter User Name" className="p-2" />
          </Form.Item>
          <Form.Item
            name="phone_number"
            label="Phone Number"
            rules={[
              { required: true, message: "Please enter your phone number!" },
            ]}
          >
            <Input placeholder="Enter Phone Number" className="p-2" />
          </Form.Item>
          <Form.Item label="Password" name={"password"}>
            <Input.Password placeholder="Enter Password" className="p-2" />
          </Form.Item>
          <Form.Item label="Confirm Password" name={"confirmPassword"}>
            <Input.Password
              placeholder="Enter Confirm Password"
              className="p-2"
            />
          </Form.Item>
          <Form.Item label="Age" name={"age"}>
            <Input.Password
              placeholder="Enter Your Age"
              className="p-2"
            />
          </Form.Item>
          <div className="flex justify-between items-center pb-5">
            <Checkbox>Remember me</Checkbox>
            <p className="font-medium font-lora">Forget Password?</p>
          </div>
          <Form.Item>
            <button className="bg-black w-full text-white rounded-md py-2 font-lora">
              Sign up
            </button>
          </Form.Item>
        </Form>
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

export default RegisterPage;
