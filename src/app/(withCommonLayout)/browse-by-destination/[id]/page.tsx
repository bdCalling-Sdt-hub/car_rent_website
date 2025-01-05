import React from 'react'
import img from '../../../../assets/car0.png'
import img2 from '../../../../assets/car.jpg'
import img3 from '../../../../assets/carD.png'
import img4 from '../../../../assets/driver.png'
import Image from 'next/image'
import { IoIosStar } from 'react-icons/io'
import { FaCar } from 'react-icons/fa6'
import { LuDoorClosed, LuFuel } from 'react-icons/lu'
import { RiShoppingBagLine } from 'react-icons/ri'
import { CiHeart, CiStar } from 'react-icons/ci'
import RatingReview from '@/components/RatingReview/RatingReview'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import TakenDateTime from '@/components/TakenDateTime/TakenDateTime'
import Link from 'next/link'
const CarDetailsPage = () => {
    return (
        <div className='container mx-auto my-10 font-lora px-2 md:px-0'>
            <TakenDateTime />
            <p className='pb-2'><span className='text-sm text-[#B0B0B0] '>Home </span>/ Service details</p>
            <p className='text-2xl font-medium mb-5'>Details</p>
            <div className='grid grid-cols-1 md:grid-cols-12 gap-5 '>
                <div className='md:col-span-7 '>
                    <Image alt='img' className='w-full h-full' src={img2} height={1200} width={1200} />
                </div>
                <div className='md:col-span-5 space-y-4'>
                    <Image alt='img' className='w-full ' src={img} height={300} width={300} />
                    <Image alt='img' className='w-full ' src={img3} height={300} width={300} />

                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2  justify-between mt-10 gap-20'>
                <div className='col-span-1'>
                    <h1 className='font-bold text-[48px]'>BMW M2 Car  2017</h1>
                    <div className='flex gap-2 '>
                        <p className='bg-[#BCBABA26] px-4 py-2 rounded-full ' >luxury car</p>
                        <div className='flex items-center gap-1'>
                            <IoIosStar /> 4.5
                        </div>
                    </div>
                    <div className='flex items-center justify-between mt-5 max-w-xl text-[#525252]'>
                        <p className='flex items-center gap-2'><FaCar /> 4 Passenger</p>
                        <p className='flex items-center gap-2' ><LuDoorClosed />4 Door</p>
                    </div>
                    <div className='flex items-center justify-between  mt-5  pb-4  max-w-xl'>
                        <p className='flex items-center gap-2 text-[#525252]'> <LuFuel />petrol</p>
                        <p className='flex items-center gap-2 text-[#525252]'> <RiShoppingBagLine />Auto</p>
                    </div>
                    <p>Hosted By</p>
                    <div className='my-5 flex items-center gap-5'>
                        <Image alt='img' height={200} width={200} className='h-14 w-14' src={img4} />
                        <div>
                            <p>Hasan</p>
                            <p className='flex items-center gap-1'><CiStar /> 4.5 </p>
                            <p>120 trips, joined Aug 2017</p>
                        </div>
                    </div>
                    <p>Description : </p>
                    <p className='mt-5 font-thin leading-8'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn t anything embarrassing hidden in the middle of text.</p>
                </div>
                <div className='col-span-1'>
                    <p className='text-5xl'><span className='font-bold'>£280</span> <span className='text-[#525252]'>/ day</span></p>
                    <div className="mx-auto p-4 space-y-6">
                        {/* Trip Start */}
                        <div className="space-y-4">
                            <h2 className="font-medium text-lg">Trip Start</h2>
                            <div className="flex space-x-4">
                                <Input type="date" placeholder="Date" className="w-1/2" />
                                <Input type="time" placeholder="Time" className="w-1/2" />
                            </div>
                        </div>

                        {/* Trip End */}
                        <div className="space-y-4">
                            <h2 className="font-medium text-lg">Trip End</h2>
                            <div className="flex space-x-4">
                                <Input type="date" placeholder="Date" className="w-1/2" />
                                <Input type="time" placeholder="Time" className="w-1/2" />
                            </div>
                        </div>

                        {/* Pickup and Return */}
                        <div className="space-y-4">
                            <div className="flex items-center space-x-2">
                                <Checkbox
                                    id="pickup" />
                                <label htmlFor="pickup" className="text-sm text-gray-600">
                                    Pick up at car location (free)
                                </label>
                            </div>
                            <Input placeholder="Type pickup location" />
                            <Input placeholder="Type return location" />
                        </div>

                        {/* Discount */}
                        <div className="flex justify-between items-center p-2 border border-gray-300 rounded-lg bg-[#0CFEE8]">
                            <span>3 Days discount</span>
                            <span className="font-semibold">£10</span>
                        </div>

                        {/* Continue Button */}
                        <div className='text-center'> <Link href={'/get-approved-driver'} className="w-full bg-[#0CFEE8]  px-16 rounded-md  py-2 ">Continue</Link></div>

                        {/* Breakdown */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span>£69.00 * 3 days</span>
                                <span>£207.00</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className=" underline cursor-pointer">
                                    Delivery fee
                                </span>
                                <span>£49.16</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>600 total miles</span>
                                <span>FREE</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>3+ days discount</span>
                                <span className="">-£10.35</span>
                            </div>
                            <div className="flex justify-between items-center  bg-[#BCBABA26]  px-4 rounded-md py-2">
                                <span className="font-bold">Total</span>
                                <span className="font-bold text-lg">£356.47</span>
                            </div>
                        </div>

                        {/* Additional Info */}
                        <div className="space-y-2 border-t border-gray-300 pt-4">
                            <div className="text-sm text-gray-600">
                                <span className="font-semibold">Free cancellation</span> <br />
                                <span className="cursor-pointer">
                                    Contact host
                                </span>
                            </div>
                            <div className="text-sm text-gray-600">
                                <div className='flex justify-between pb-2'>
                                    <span className='text-2xl'>Distance included</span>

                                    <span className="font-semibold">200 mi</span>
                                </div>
                                <span>£0.25/mi fee for additional miles driven</span>
                            </div>
                        </div>

                        {/* Add to Favorites Button */}
                        <div className='text-center'>
                            <Button variant="outline" className="">
                                Add to favorites <CiHeart />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <RatingReview />

        </div>
    )
}

export default CarDetailsPage