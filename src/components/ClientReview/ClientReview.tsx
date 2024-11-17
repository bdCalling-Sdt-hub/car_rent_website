import React from 'react'
import HeadingTitle from '../shared/HeadingTitle'
import img from '../../assets/chat.png'
import img1 from '../../assets/chat2.png'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'
import { IoIosStar } from 'react-icons/io'
const ClientReview = () => {
    return (
        <div className='font-lora container mx-auto'>
            <div className='text-center my-14'>
                <HeadingTitle title={'Client Review'} />
                <p className='mt-2'>Testimonials</p>
            </div>

            <Carousel>
                <CarouselContent>
                    <CarouselItem className="basis-1/3">
                        <div className='bg-[#F9F9F9] p-4 rounded-md space-y-4'>
                            <div className='flex gap-5'>
                                <Image src={img} height={300} width={300} className='h-20 w-20' alt="img" />
                                <div className='space-y-1'>
                                    <p className='font-semibold  text-xl'>MD Hasan</p>
                                    <p>Bangladesh</p>
                                    <p>Nov 6 , 2024</p>
                                    <div className='flex items-center'>
                                        <IoIosStar />
                                        <IoIosStar />
                                        <IoIosStar />
                                        <IoIosStar />
                                        <IoIosStar />
                                    </div>
                                </div>

                            </div>
                            <p className='leading-6'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal Read more</p>

                        </div>
                    </CarouselItem>
                    <CarouselItem className="basis-1/3">
                        <div className='bg-[#F9F9F9] p-4 rounded-md space-y-4'>
                            <div className='flex gap-5'>
                                <Image src={img1} height={300} width={300} className='h-20 w-20' alt="img" />
                                <div className='space-y-1'>
                                    <p className='font-semibold  text-xl'>MD Hasan</p>
                                    <p>Bangladesh</p>
                                    <p>Nov 6 , 2024</p>
                                    <div className='flex items-center'>
                                        <IoIosStar />
                                        <IoIosStar />
                                        <IoIosStar />
                                        <IoIosStar />
                                        <IoIosStar />
                                    </div>
                                </div>

                            </div>
                            <p className='leading-6'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal Read more</p>

                        </div>
                    </CarouselItem>
                    <CarouselItem className="basis-1/3">
                        <div className='bg-[#F9F9F9] p-4 rounded-md space-y-4'>
                            <div className='flex gap-5'>
                                <Image src={img} height={300} width={300} className='h-20 w-20' alt="img" />
                                <div className='space-y-1'>
                                    <p className='font-semibold  text-xl'>MD Hasan</p>
                                    <p>Bangladesh</p>
                                    <p>Nov 6 , 2024</p>
                                    <div className='flex items-center'>
                                        <IoIosStar />
                                        <IoIosStar />
                                        <IoIosStar />
                                        <IoIosStar />
                                        <IoIosStar />
                                    </div>
                                </div>

                            </div>
                            <p className='leading-6'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal Read more</p>

                        </div>
                    </CarouselItem>
                    <CarouselItem className="basis-1/3">
                        <div className='bg-[#F9F9F9] p-4 rounded-md space-y-4'>
                            <div className='flex gap-5'>
                                <Image src={img1} height={300} width={300} className='h-20 w-20' alt="img" />
                                <div className='space-y-1'>
                                    <p className='font-semibold  text-xl'>MD Hasan</p>
                                    <p>Bangladesh</p>
                                    <p>Nov 6 , 2024</p>
                                    <div className='flex items-center'>
                                        <IoIosStar />
                                        <IoIosStar />
                                        <IoIosStar />
                                        <IoIosStar />
                                        <IoIosStar />
                                    </div>
                                </div>

                            </div>
                            <p className='leading-6 '>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal Read more</p>

                        </div>
                    </CarouselItem>



                </CarouselContent>
                <CarouselPrevious className="-top-8 right-12 " />
                <CarouselNext className="-top-8 right-1 " />
            </Carousel>
        </div>
    )
}

export default ClientReview