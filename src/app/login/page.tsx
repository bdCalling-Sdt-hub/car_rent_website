"use client";
import React from "react";
import img from "../../assets/login.png";
import Image from "next/image";
import { Checkbox, Form, Input } from "antd";
import { useLoginUserMutation } from "@/redux/Api/authApi";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Link from "next/link";

type TLoginProps = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const router = useRouter()
  const [loginUser] = useLoginUserMutation();

  const handleLogin = (values: TLoginProps) => {
    const data = {
      email: values?.email,
      password: values?.password,
    };

    console.log(data);
    loginUser(data)
      .unwrap()
      .then((payload) => {
        toast.success(payload?.message)
        if(payload?.success){
          localStorage.setItem('_token', payload?.data?.accessToken)
          router.push('/')
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

        <Form layout="vertical" onFinish={handleLogin}>
          <Form.Item label="Email" name={"email"}>
            <Input placeholder="Enter Email" className="p-2" />
          </Form.Item>
          <Form.Item label="Password" name={"password"}>
            <Input.Password placeholder="Enter Email" className="p-2" />
          </Form.Item>
          <div className="flex justify-between items-center pb-5">
            <Checkbox>Remember me</Checkbox>
            <Link href={'/forget-password'} className="font-medium font-lora cursor-pointer">Forget Password?</Link>
          </div>
          <Form.Item>
            <button className="bg-black w-full text-white rounded-md py-2 font-lora">
              Sign in
            </button>
          </Form.Item>
        </Form>
        <p className="text-center mt-8">
          Don&apos;t have an account?{" "}
          <Link href={'/register'} className="font-semibold">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
