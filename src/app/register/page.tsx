"use client"
import { Checkbox, Form, FormProps, Input, message } from 'antd';
import Image from 'next/image';
import React from 'react';
import img from '../../assets/logo.png';
import Link from 'next/link';
import { useRegisterMutation } from '@/redux/Api/user';

type FieldType = {
    username?: string;
    email?: string;
    phone_number?:number;
    password?:string;
    confirmPassword:string;
    remember?: string;
  };


const RegisterPage = () => {
   

    const [register, { isLoading }] = useRegisterMutation();
    const handleFinish : FormProps<FieldType>['onFinish'] = async (values) => {
        try {
            const response = await register({
                name: values.username, 
                email: values.email,
                phone_number: values.phone_number, 
                password: values.password,
                confirmPassword: values.confirmPassword,
                role: "USER",
            }).unwrap();
            console.log("Registration Successful:", response);
            if (response?.success) {
                message.success(response.message);
            } else {
                message.error("Registration failed! Please try again.");
            }
        } catch (err) {
            console.error("Registration Error:", err);
            // message.error(err?.data?.message || "Registration failed!");
        }
    };

    return (
        <div className='px-10 flex items-center justify-center gap-20 min-h-screen'>
            <div className='hidden md:block'>
                <Image alt='logo' height={600} width={600} src={img} />
            </div>
            <div>
                <p className='font-lora text-[25px] md:text-[50px] font-medium'>Welcome Back</p>
                <p className='mb-10 font-lora'>Enter your email and password to access your account</p>

                <Form layout='vertical' onFinish={handleFinish}>
                    <Form.Item<FieldType>
                        name="email"
                        label="Email"
                        rules={[{ required: true, message: 'Please enter your email!' }]}>
                        <Input placeholder='Enter Email' className='p-2' />
                    </Form.Item>

                    <Form.Item<FieldType>
                        name="username"
                        label="User Name"
                        rules={[{ required: true, message: 'Please enter your username!' }]}>
                        <Input placeholder='Enter User Name' className='p-2' />
                    </Form.Item>

                    {/* Added Phone Number field */}
                    <Form.Item<FieldType>
                        name="phone_number"
                        label="Phone Number"
                        rules={[{ required: true, message: 'Please enter your phone number!' }]}>
                        <Input placeholder='Enter Phone Number' className='p-2' />
                    </Form.Item>

                    <Form.Item<FieldType>
                        name="password"
                        label="Password"
                        rules={[{ required: true, message: 'Please enter your password!' }]}>
                        <Input.Password placeholder='Enter Password' className='p-2' />
                    </Form.Item>

                    <Form.Item<FieldType>
                        name="confirmPassword"
                        label="Confirm Password"
                        rules={[
                            { required: true, message: 'Please confirm your password!' },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('Passwords do not match!'));
                                },
                            }),
                        ]}>
                        <Input.Password placeholder='Enter Confirm Password' className='p-2' />
                    </Form.Item>

                    <div className='flex justify-between items-center pb-5'>
                        <Form.Item<FieldType> name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>
                        <p className='font-medium font-lora'>Forget Password?</p>
                    </div>

                    <Form.Item>
                        <button
                            type="submit"
                            className='bg-black w-full text-white rounded-md py-2 font-lora'
                            disabled={isLoading}>
                            {isLoading ? "Signing up..." : "Sign up"}
                        </button>
                    </Form.Item>
                </Form>

                <p className='text-center mt-8'>Already have an account? <Link href={'/login'} className='font-semibold'>Sign In</Link></p>
            </div>
        </div>
    );
};

export default RegisterPage;
