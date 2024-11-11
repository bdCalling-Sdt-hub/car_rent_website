import Image from 'next/image'
import React from 'react'
import { FaRegStar } from 'react-icons/fa6'
import img from '../assets/car.png'
import img1 from '../assets/driver.png'
const CompleteTrip = () => {
    return (
        <div>
            <div className='border-b pb-8'>
                <div className='grid grid-cols-12 gap-5 font-lora  '>
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
                    <div className='col-span-4'>
                        <p className='mb-2'>Date : 05/12/2024</p>
                        <div className=''>
                            <p className='bg-[#34C759] px-4 py-2 rounded-sm text-white inline-block'>Complete Order</p>
                        </div>
                        <div className=''>
                            <p className='bg-[black] px-4 py-2 rounded-sm text-white inline-block mt-5 text-end'>rating</p>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-12 mt-10 gap-10 '>

                    <div className='col-span-4 text-[#272121] space-y-2'>
                        <p className="font-semibold text-xs">PICKUP AT CAR LOCATION</p>
                        <p className='text-sm'>New York City, USA</p>
                        <p className='text-sm'>Statue of Liberty, Times Square, Central Park, Empire State Building</p>
                    </div>
                    <div className='col-span-4'>
                        <p className='font-sm text-[16px] text-[#272121]'>Delivery Location</p>
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
                    <div className='col-span-4'>
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
            </div>




            <div className='border-b pb-8 pt-10'>
            <div className='grid grid-cols-12 gap-5 font-lora  '>
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
                <div className='col-span-4'>
                    <p className='mb-2'>Date : 05/12/2024</p>
                    <div className=''>
                        <p className='bg-[#34C759] px-4 py-2 rounded-sm text-white inline-block'>Complete Order</p>
                    </div>
                    <div className=''>
                        <p className='bg-[black] px-4 py-2 rounded-sm text-white inline-block mt-5 text-end'>rating</p>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-12 mt-10 gap-10 '>
               
                <div className='col-span-4 text-[#272121] space-y-2'>
                    <p className="font-semibold text-xs">PICKUP AT CAR LOCATION</p>
                    <p className='text-sm'>New York City, USA</p>
                    <p className='text-sm'>Statue of Liberty, Times Square, Central Park, Empire State Building</p>
                </div>
                <div className='col-span-4'>
                    <p className='font-sm text-[16px] text-[#272121]'>Delivery Location</p>
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
                <div className='col-span-4'>
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
        </div>





        <div className='border-b pb-8 pt-10'>
            <div className='grid grid-cols-12 gap-5 font-lora  '>
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
                <div className='col-span-4'>
                    <p className='mb-2'>Date : 05/12/2024</p>
                    <div className=''>
                        <p className='bg-[#34C759] px-4 py-2 rounded-sm text-white inline-block'>Complete Order</p>
                    </div>
                    <div className=''>
                        <p className='bg-[black] px-4 py-2 rounded-sm text-white inline-block mt-5 text-end'>rating</p>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-12 mt-10 gap-10 '>
               
                <div className='col-span-4 text-[#272121] space-y-2'>
                    <p className="font-semibold text-xs">PICKUP AT CAR LOCATION</p>
                    <p className='text-sm'>New York City, USA</p>
                    <p className='text-sm'>Statue of Liberty, Times Square, Central Park, Empire State Building</p>
                </div>
                <div className='col-span-4'>
                    <p className='font-sm text-[16px] text-[#272121]'>Delivery Location</p>
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
                <div className='col-span-4'>
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
        </div>
        </div>
    )
}

export default CompleteTrip