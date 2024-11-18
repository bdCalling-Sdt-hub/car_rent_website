"use client"
import HeadingTitle from '@/components/shared/HeadingTitle'
import React from 'react'

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import img from '../../../assets/car.jpg'
import img1 from '../../../assets/driver.png'
import Image from 'next/image'
import { FaRegStar } from 'react-icons/fa6'
import Link from 'next/link'
import { IoChatbubbleOutline } from 'react-icons/io5'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import CompleteTrip from '@/components/CompleteTrip'


const MyTripPage = () => {
    return (
        <div className='container mx-auto'>
            <div className='py-10'>
                <HeadingTitle title='My Trip' />
            </div>
            <div className='my-10'>
                <Tabs defaultValue="account" className="w-full">
                    <TabsList className="grid w-[30%] grid-cols-2 gap-5 mb-10">
                        <TabsTrigger value="account" className=''>Current Trip</TabsTrigger>
                        <TabsTrigger value="password">Complete Trip</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account">
                        <div className='grid grid-cols-12 gap-5 font-lora '>
                            <div className='col-span-8  flex items-center gap-5'>
                                <Image alt='img' src={img} className='h-52 w-64' height={200} width={200} />
                                <div className=''>
                                    <p className='font-semibold'>Hosted By :</p>
                                    <div className='flex items-center gap-2'>
                                        <Image alt='img' className='h-10 w-10' src={img1} height={200} width={200} />
                                        <div>
                                            <p className='font-medium'>Hasan</p>
                                            <p className='flex items-center gap-2'><FaRegStar /> 4.0 </p>
                                            <p>120 trips. Joined Aug 2017</p>

                                        </div>
                                    </div>
                                    <p className='mt-2 text-[#272121]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which See more...</p>
                                </div>
                            </div>
                            <div className='col-span-4   gap-5'>
                                <div>
                                    <p className='mb-2'>Date : 05/12/2024</p>
                                    <div className='flex gap-5'>
                                        <Link className='bg-[#313131] text-white px-4  flex items-center gap-2 rounded-sm py-2' href={'/conversationChat'}>Chat With Host <IoChatbubbleOutline /></Link>
                                        <Select>
                                            <SelectTrigger className="w-[180px]">
                                                <SelectValue placeholder="Status" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectItem value="apple">Order Start</SelectItem>
                                                    <SelectItem value="banana">In Progress Order</SelectItem>
                                                    <SelectItem value="blueberry">Complete order</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='grid grid-cols-12 mt-10 '>
                            <div className='col-span-4'>
                                <p className='font-semibold'>BMW M2 Car 2017</p>
                                <div className='flex items-center gap-5 my-2'>
                                    <p className='bg-[#BCBABA26] rounded-full px-4 font-thin'>luxury</p>
                                    <p><span className='font-semibold'>£280 </span>/ 1 Day</p>

                                </div>
                                <div className='py-2'><span className='font-semibold'>Trip Start  </span> <span className='text-[#525252]'>  Date: 10/23/2024 Time: 12:30 AM</span></div>
                                <div><span className='font-semibold'>Trip End  </span> <span className='text-[#525252]'>  Date: 10/23/2024 Time: 12:30 AM</span></div>
                            </div>
                            <div className='col-span-4 text-[#272121] space-y-2'>
                                <p className="font-semibold">PICKUP AT CAR LOCATION</p>
                                <p className='text-sm'>New York City, USA</p>
                                <p className='text-sm'>Statue of Liberty, Times Square, Central Park, Empire State Building</p>
                            </div>
                            <div className='col-span-4'>
                                <p className='font-semibold text-[16px] text-[#272121]'>Delivery Location</p>
                                <p className='text-xl my-2 font-light'>Detroit Metropolitan Wayne County Airport</p>
                                <p className='text-sm mb-2'>Stephen will unlock the car
                                    remotely for you. </p>
                                <div className='flex justify-between items-center mb-2'>
                                    <p>£69.00 * 3 days</p>
                                    <p>£207.00</p>
                                </div>

                                <div className='flex justify-between items-center mb-2'>
                                    <p>Trip fee</p>
                                    <p>£24.50</p>
                                </div>
                                <div className='flex justify-between items-center mb-2'>
                                    <p>600 total miles</p>
                                    <p>FREE</p>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <p>3+ days discount</p>
                                    <p>-£10.35</p>
                                </div>
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="password">
                        <div>
                            <CompleteTrip/>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
            <div >
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default MyTripPage