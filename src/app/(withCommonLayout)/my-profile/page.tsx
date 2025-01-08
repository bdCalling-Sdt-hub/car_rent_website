"use client"
import HeadingTitle from '@/components/shared/HeadingTitle'
import React from 'react'
import bg from '../../../assets/back.jpg'
import profile from '../../../assets/profile.png'
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import Image from 'next/image'


import { Form, Input } from 'antd'
import {  useGetProfileQuery } from '@/redux/Api/authApi'


type TPassword ={
    oldPassword : string,
    newPassword : string,
    confirmPassword :  string
} 

const MyProfilePage = () => {
    const [form] = Form.useForm()
 
    const {data : getProfile , isLoading , isError} = useGetProfileQuery(undefined)
    // const [updatePassword] =  useChangePasswordMutation()

    if(isLoading){
        return <div>Loading...</div>
    }
    if (isError) {
        return <div>Error loading profile</div>;
    }


    const handleUpdatePassword=(values : TPassword)=>{
        console.log(values);

    }

   


    return (
        <div className='container mx-auto px-2 md:px-0'>
            <div className='my-10'>
                <HeadingTitle title="My Profile" />
            </div>
            <div className='flex items-center justify-center' style={{ backgroundImage: `url(${bg.src})`, backgroundSize: 'cover', height: '300px' }}>
                <div className='md:max-w-[40%] max-w-[100%] mx-auto md:flex   items-center gap-5'>
                    <div className='flex items-center justify-center'>
                        <Image height={200} width={200} className='h-24 w-24 ' src={profile} alt='profile' />
                    </div>
                    <div>
                        <p className='text-center md:text-left'>Hello</p>
                        <p className='font-semibold text-[24px]'>{getProfile?.data?.name}</p>
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
                            <Form layout='vertical' form={form}  initialValues={{
                                    name :  getProfile.data.name || "",
                                    email :  getProfile.data.email || "",
                                    phone_number: getProfile?.data?.phone_number || ""

                                } } >
                                <Form.Item label="User Name" name={"name"} >
                                    <Input placeholder="User Name" />
                                </Form.Item>
                                <Form.Item label="Email" name={'email'} >
                                    <Input placeholder="example@gmail.com" />
                                </Form.Item>
                                <Form.Item label="Contact Number" name={'phone_number'}>
                                    <Input placeholder="+99999000455" />
                                </Form.Item>
                                <Form.Item label="Address" name={'address'}>
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
                                onFinish={handleUpdatePassword}
                               
                            >

                                <Form.Item label="Current Password" name={'oldPassword'}>
                                    <Input.Password placeholder='Current Password' className='p-2' />
                                </Form.Item>
                                <Form.Item label="New Password" name={'newPassword'}>
                                    <Input.Password placeholder='New Password' className='p-2' />
                                </Form.Item>
                                <Form.Item label="Confirm Password" name={'confirmPassword'}>
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