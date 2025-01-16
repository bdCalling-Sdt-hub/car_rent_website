"use client"
import React from 'react'
import Image from 'next/image'
import { CiStar } from 'react-icons/ci'
import Link from 'next/link'
import { IoAdd } from 'react-icons/io5'
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import HostCars from '@/components/HostCars/HostCars'
import HostOrder from '@/components/HostOrder/HostOrder'
import HostHistoryInfo from '@/components/HostHistoryInfo/HostHistoryInfo'
import HostEarning from '@/components/HostEarning/HostEarning'
import { useGetProfileQuery } from '@/redux/Api/authApi'
import { imageUrl } from '@/redux/baseApi'

const HostHistoryPage = () => {
    const {data: getProfile} = useGetProfileQuery(undefined);
    console.log(getProfile?.data);
   
    return (
        <div className='my-10 container mx-auto px-2 md:px-0'>
            <div className='md:flex items-center  justify-between '>
                <div className='flex items-center gap-5'>
                    <Image className='rounded-full h-20 w-20 object-cover' src={`${imageUrl}/${getProfile?.data?.profile_image}`} height={200} width={200} alt='img' />
                    <div className='font-lora space-y-1'>
                        <p className='font-medium text-[24px]'>{getProfile?.data?.name}</p>
                        <p className='font-medium '>{getProfile?.data?.email}</p>
                        <p className='flex items-center gap-1'><CiStar size={22}/> {getProfile?.data?.rating}</p>
                        <p>Total Car : {getProfile?.data?.carCount}</p>
                    </div>
                </div>
                <div>
                    <Link className='flex items-center bg-black text-white px-4 py-2 rounded-sm gap-1 justify-center  mt-5 md:mt-0' href={''} >Add a new car <IoAdd /> </Link>
                </div>
            </div>

            <div className='mt-10'>
                <Tabs defaultValue="car" className="w-full">
                    <TabsList className="grid grid-cols-4 md:w-[70%] w-full gap-5 mb-10">
                        <TabsTrigger value="car" className='bg-white data-[state=active]:text-black  data-[state=active]:bg-[#0CFEE8]'>Car</TabsTrigger>
                        <TabsTrigger value="order" className='bg-white data-[state=active]:text-black  data-[state=active]:bg-[#0CFEE8]'>Order</TabsTrigger>
                        <TabsTrigger value="history" className='bg-white data-[state=active]:text-black  data-[state=active]:bg-[#0CFEE8]'>History</TabsTrigger>
                        <TabsTrigger value="earning" className='bg-white data-[state=active]:text-black  data-[state=active]:bg-[#0CFEE8]'>Earning</TabsTrigger>
                    </TabsList>
                    <TabsContent value="car">

                        <HostCars />

                    </TabsContent>
                    <TabsContent value="order">
                        <HostOrder/>
                    </TabsContent>
                    <TabsContent value="history">
                        <HostHistoryInfo/>
                    </TabsContent>
                    <TabsContent value="earning">
                       <HostEarning/>
                    </TabsContent>
                </Tabs>
            </div>


        </div>
    )
}

export default HostHistoryPage