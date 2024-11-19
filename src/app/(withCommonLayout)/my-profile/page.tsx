"use client"
import HeadingTitle from '@/components/shared/HeadingTitle'
import React from 'react'
import bg from '../../../assets/profilebg.png'
import profile from '../../../assets/profile.png'
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import Image from 'next/image'

import { Form, Input } from 'antd'
const MyProfilePage = () => {
    return (
        <div className='container mx-auto px-2 md:px-0'>
            <div className='my-10'>
                <HeadingTitle title="My Profile" />
            </div>
            <div className='flex items-center justify-center' style={{ backgroundImage: `url(${bg.src})`, backgroundSize: 'contain', height: '300px' }}>
                <div className='md:max-w-[40%] max-w-[100%] mx-auto md:flex   items-center gap-5'>
                    <div className='flex items-center justify-center'>
                        <Image height={200} width={200} className='h-24 w-24 ' src={profile} alt='profile' />
                    </div>
                    <div>
                        <p className='text-center md:text-left'>Hello</p>
                        <p className='font-semibold text-[24px]'>Rudaba jaman</p>
                    </div>
                </div>


            </div>

            <div className='md:max-w-xl w-full  mx-auto mt-10'>
                <Tabs defaultValue="account" className="w-full">
                    <TabsList className="grid md:w-[60%] grid-cols-2 gap-5 mb-10">
                        <TabsTrigger value="account" className='px-20'>Edit Profile</TabsTrigger>
                        <TabsTrigger value="password" className='px-20'>Change Password</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account">
                        <div className=' font-lora  my-10'>
                            <p className='text-center text-[#555555] text-[24px]'>Edit Your Profile</p>
                            <Form layout='vertical' >
                                <Form.Item label="User Name">
                                    <Input placeholder="User Name" />
                                </Form.Item>
                                <Form.Item label="Email">
                                    <Input placeholder="example@gmail.com" />
                                </Form.Item>
                                <Form.Item label="Contact Number">
                                    <Input placeholder="+99999000455" />
                                </Form.Item>
                                <Form.Item label="Address">
                                    <Input placeholder="68/Joker vita, gotham city" />
                                </Form.Item>

                                <Form.Item className=' text-center'>
                                    <button className='bg-black  text-white px-4 py-2 rounded-sm'>Save Changes</button>
                                </Form.Item>

                            </Form>
                        </div>
                    </TabsContent>
                    <TabsContent value="password">
                        <div>
                            {/* <CompleteTrip/> */}
                            <p className='text-center text-[#555555] text-[24px]'>Change Password</p>

                            <Form
                                layout='vertical'
                            >

                                <Form.Item label="Current Password">
                                    <Input.Password placeholder='Current Password' className='p-2' />
                                </Form.Item>
                                <Form.Item label="New Password">
                                    <Input.Password placeholder='New Password' className='p-2' />
                                </Form.Item>
                                <Form.Item label="Confirm Password">
                                    <Input.Password placeholder='Confirm Password' className='p-2' />
                                </Form.Item>

                                <Form.Item className='text-center'>
                                    <button className='bg-black  text-white rounded-sm px-4 py-2 font-lora'>Save Changes</button>
                                </Form.Item>
                            </Form>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>

        </div>
    )
}

export default MyProfilePage