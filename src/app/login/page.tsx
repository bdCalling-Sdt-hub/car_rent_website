"use client"
import React from 'react'
import img from '../../assets/login.png'
import Image from 'next/image'
import { Checkbox, Form, Input } from 'antd'
const LoginPage = () => {
  return (
      <div className='px-10 flex items-center justify-center gap-20 min-h-screen'>
        <div className='hidden md:block'>
          <Image alt='logo' height={600} width={600} src={img} />
        </div>
        <div>
          <p className='font-lora text-[25px]  md:text-[50px] font-medium'>Welcome Back</p>
          <p className='mb-10 font-lora'>Enter your email and password to access your account</p>

          <Form
            layout='vertical'
          >
            <Form.Item label="Email">
              <Input placeholder='Enter Email' className='p-2' />
            </Form.Item>
            <Form.Item label="Password">
              <Input.Password placeholder='Enter Email' className='p-2' />
            </Form.Item>
            <div className='flex justify-between items-center pb-5'>
              <Checkbox  >Remember me</Checkbox>
              <p className='font-medium font-lora'>Forget Password?</p>
            </div>
            <Form.Item>
              <button className='bg-black w-full text-white rounded-md py-2 font-lora'>Sign in</button>
            </Form.Item>
          </Form>
          <p className='text-center mt-8'>Don't have an account? <span className='font-semibold'>Sign Up</span></p>
        </div>
      </div>
  )
}

export default LoginPage