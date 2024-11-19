import BrowseDestination from '@/components/BrowseDestination/BrowseDestination'
import ClientReview from '@/components/ClientReview/ClientReview'
import Faqs from '@/components/Faqs/Faqs'
import HeadingTitle from '@/components/shared/HeadingTitle'
import TakenDateTime from '@/components/TakenDateTime/TakenDateTime'
import React from 'react'
import img from '../../../assets/topCar.png'
import img1 from '../../../assets/topCar1.png'
import Image from 'next/image'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { FaCar, FaStar } from 'react-icons/fa6'
import { LuDoorClosed, LuFuel } from 'react-icons/lu'
import { RiShoppingBagLine } from 'react-icons/ri'
import Link from 'next/link'
import { MdArrowOutward } from 'react-icons/md'

const BrowseByBrandPage = () => {
    return (
        <div className='container mx-auto my-10 font-lora px-2 md:px-0'>
            <div className='text-center'>
                <HeadingTitle title='Rent a Tesla' />
                <p className='mt-4 mb-14'>Discover the Nardo car rental marketplace</p>
            </div>
            <TakenDateTime />
            <div>
                <Carousel>
                    <CarouselContent>
                        <CarouselItem className="md:basis-1/4 basic-1/2">
                            <div className='bg-[#F9F9F9] p-4 rounded-md space-y-4'>
                                <Image src={img} height={300} width={300} alt="img" />
                                <div className='flex items-center gap-2'>
                                    <p className='bg-[#BCBABA26] px-2 py-1 rounded-full'>luxury car</p>
                                    <div className='flex items-center gap-1'>
                                        <FaStar /> <span>4.5</span>
                                    </div>
                                </div>
                                <p className='font-semibold text-xl'>BMW M2 Car 2017</p>
                                <div className='flex items-center justify-between text-[#528AAE]'>
                                    <p className='flex items-center gap-2'><FaCar /> 4 Passenger</p>
                                    <p className='flex items-center gap-2' ><LuDoorClosed />4 Door</p>
                                </div>
                                <div className='flex items-center justify-between text-[#528AAE] border-b pb-4'>
                                    <p className='flex items-center gap-2'> <LuFuel />petrol</p>
                                    <p className='flex items-center gap-2'> <RiShoppingBagLine />Auto</p>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <p><span className='font-semibold'>£280 </span>/  per day</p>
                                    <Link className='bg-[#528AAE] text-white p-3 rounded-full' href={`/browse-by-destination/:id`}><MdArrowOutward /></Link>
                                </div>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/4 basic-1/2">
                            <div className='bg-[#F9F9F9] p-4 rounded-md space-y-4'>
                                <Image src={img1} height={300} width={300} alt="img" />
                                <div className='flex items-center gap-2'>
                                    <p className='bg-[#BCBABA26] px-2 py-1 rounded-full'>luxury car</p>
                                    <div className='flex items-center gap-1'>
                                        <FaStar /> <span>4.5</span>
                                    </div>
                                </div>
                                <p className='font-semibold text-xl'>BMW M2 Car 2017</p>
                                <div className='flex items-center justify-between text-[#528AAE]'>
                                    <p className='flex items-center gap-2'><FaCar /> 4 Passenger</p>
                                    <p className='flex items-center gap-2' ><LuDoorClosed />4 Door</p>
                                </div>
                                <div className='flex items-center justify-between text-[#528AAE] border-b pb-4'>
                                    <p className='flex items-center gap-2'> <LuFuel />petrol</p>
                                    <p className='flex items-center gap-2'> <RiShoppingBagLine />Auto</p>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <p><span className='font-semibold'>£280 </span>/  per day</p>
                                    <Link className='bg-[#528AAE] text-white p-3 rounded-full' href={'/'}><MdArrowOutward /></Link>
                                </div>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/4 basic-1/2">
                            <div className='bg-[#F9F9F9] p-4 rounded-md space-y-4'>
                                <Image src={img} height={300} width={300} alt="img" />
                                <div className='flex items-center gap-2'>
                                    <p className='bg-[#BCBABA26] px-2 py-1 rounded-full'>luxury car</p>
                                    <div className='flex items-center gap-1'>
                                        <FaStar /> <span>4.5</span>
                                    </div>
                                </div>
                                <p className='font-semibold text-xl'>BMW M2 Car 2017</p>
                                <div className='flex items-center justify-between text-[#528AAE]'>
                                    <p className='flex items-center gap-2'><FaCar /> 4 Passenger</p>
                                    <p className='flex items-center gap-2' ><LuDoorClosed />4 Door</p>
                                </div>
                                <div className='flex items-center justify-between text-[#528AAE] border-b pb-4'>
                                    <p className='flex items-center gap-2'> <LuFuel />petrol</p>
                                    <p className='flex items-center gap-2'> <RiShoppingBagLine />Auto</p>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <p><span className='font-semibold'>£280 </span>/  per day</p>
                                    <Link className='bg-[#528AAE] text-white p-3 rounded-full' href={'/'}><MdArrowOutward /></Link>
                                </div>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/4 basic-1/2">
                            <div className='bg-[#F9F9F9] p-4 rounded-md space-y-4'>
                                <Image src={img1} height={300} width={300} alt="img" />
                                <div className='flex items-center gap-2'>
                                    <p className='bg-[#BCBABA26] px-2 py-1 rounded-full'>luxury car</p>
                                    <div className='flex items-center gap-1'>
                                        <FaStar /> <span>4.5</span>
                                    </div>
                                </div>
                                <p className='font-semibold text-xl'>BMW M2 Car 2017</p>
                                <div className='flex items-center justify-between text-[#528AAE]'>
                                    <p className='flex items-center gap-2'><FaCar /> 4 Passenger</p>
                                    <p className='flex items-center gap-2' ><LuDoorClosed />4 Door</p>
                                </div>
                                <div className='flex items-center justify-between text-[#528AAE] border-b pb-4'>
                                    <p className='flex items-center gap-2'> <LuFuel />petrol</p>
                                    <p className='flex items-center gap-2'> <RiShoppingBagLine />Auto</p>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <p><span className='font-semibold'>£280 </span>/  per day</p>
                                    <Link className='bg-[#528AAE] text-white p-3 rounded-full' href={'/'}><MdArrowOutward /></Link>
                                </div>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/4 basic-1/2">
                            <div className='bg-[#F9F9F9] p-4 rounded-md space-y-4'>
                                <Image src={img} height={300} width={300} alt="img" />
                                <div className='flex items-center gap-2'>
                                    <p className='bg-[#BCBABA26] px-2 py-1 rounded-full'>luxury car</p>
                                    <div className='flex items-center gap-1'>
                                        <FaStar /> <span>4.5</span>
                                    </div>
                                </div>
                                <p className='font-semibold text-xl'>BMW M2 Car 2017</p>
                                <div className='flex items-center justify-between text-[#528AAE]'>
                                    <p className='flex items-center gap-2'><FaCar /> 4 Passenger</p>
                                    <p className='flex items-center gap-2' ><LuDoorClosed />4 Door</p>
                                </div>
                                <div className='flex items-center justify-between text-[#528AAE] border-b pb-4'>
                                    <p className='flex items-center gap-2'> <LuFuel />petrol</p>
                                    <p className='flex items-center gap-2'> <RiShoppingBagLine />Auto</p>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <p><span className='font-semibold'>£280 </span>/  per day</p>
                                    <Link className='bg-[#528AAE] text-white p-3 rounded-full' href={`/browse-by-destination/:id`}><MdArrowOutward /></Link>
                                </div>
                            </div>
                        </CarouselItem>

                    </CarouselContent>
                    <CarouselPrevious className="-top-8 right-12 " />
                    <CarouselNext className="-top-8 right-1 " />
                </Carousel>
            </div>
            <div>
                <ClientReview />
            </div>
            <BrowseDestination />
            <Faqs />
        </div>
    )
}

export default BrowseByBrandPage