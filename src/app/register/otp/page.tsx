"use client";
import OTPInput from "react-otp-input";
import Image from 'next/image';
import React, { useState } from 'react';
import img from '../../../assets/login.png';
import Link from 'next/link';





const Otp = () => {
   
    const [otp, setOtp] = useState("");


    return (
        <div className='px-10 flex items-center justify-center gap-20 min-h-screen'>
            <div className='hidden md:block'>
                <Image alt='logo' height={600} width={600} src={img} />
            </div>
            <div>
                <p className='font-lora text-[25px] md:text-[50px] font-medium'>Welcome Back</p>
                <p className='mb-10 font-lora'>Enter your email and password to access your account</p>

                <div className="flex justify-center mb-5">
            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderSeparator={<span className="mx-1"></span>}
              renderInput={(props) => (
                <input
                  {...props}
                  className="w-16 h-16 text-center bg-white text-lg border  rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  style={{ width: "40px", height: "50px" }}
                />
              )}
            />
          </div>
                <p className='text-center mt-8'>Already have an account? <Link href={'/login'} className='font-semibold'>Sign In</Link></p>
            </div>
        </div>
    );
};

export default Otp;
