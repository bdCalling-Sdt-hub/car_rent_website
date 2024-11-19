import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import Image from 'next/image'
import { FaCar, FaStar } from 'react-icons/fa6'
import { LuDoorClosed, LuFuel } from 'react-icons/lu'
import { RiShoppingBagLine } from 'react-icons/ri'
import Link from 'next/link'
import { MdArrowOutward } from 'react-icons/md'
import img from '../../assets/topCar.png'
import img1 from '../../assets/topCar1.png'
import img2 from '../../assets/driver.png'
import img3 from '../../assets/driver2.png'
import { CiStar } from 'react-icons/ci'
const TopHostedCar = () => {
    return (
        <div className='md:my-20 my-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 px-2 md:px-0'>
                <div className='col-span-1'>
                    <div className='flex items-center gap-5'>
                        <Image src={img2} height={300} className='h-14 w-14' width={300} alt="img" />
                        <div>
                            <p>MD. Hasan</p>
                            <div className='flex items-center gap-2'>
                                <CiStar />
                                <span>4.5</span>
                            </div>
                            <p>120trips, joined Aug 2017</p>
                        </div>
                    </div>
                    <div>
                        <div className='flex items-center gap-1 mt-10'>
                            <CiStar /><CiStar /><CiStar /><CiStar /><CiStar />
                        </div>
                        <p className='max-w-xl leading-8 mt-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
                        <p className='mt-5'>Ameer S - October 20,2024</p>

                    </div>
                    <div>
                        <div className='flex items-center gap-1 mt-10'>
                            <CiStar /><CiStar /><CiStar /><CiStar /><CiStar />
                        </div>
                        <p className='max-w-xl leading-8 mt-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
                        <p className='mt-5'>Ameer S - October 20,2024</p>

                    </div>
                </div>
                <div className='col-span-1'>
                    <p className='text-xl mb-10 font-semibold '>MD. Hasan vehicles</p>
                    <Carousel>
                        <CarouselContent>
                            <CarouselItem className="md:basis-1/2">
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
                            <CarouselItem className="md:basis-1/2">
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
                            <CarouselItem className="md:basis-1/2">
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
                            <CarouselItem className="md:basis-1/2">
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
                            <CarouselItem className="md:basis-1/2">
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
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-20 px-2 md:px-0 '>
                <div className='col-span-1'>
                    <div className='flex items-center gap-5'>
                        <Image src={img3} height={300} className='h-14 w-14' width={300} alt="img" />
                        <div>
                            <p>MD. Hasan</p>
                            <div className='flex items-center gap-2'>
                                <CiStar />
                                <span>4.5</span>
                            </div>
                            <p>120trips, joined Aug 2017</p>
                        </div>
                    </div>
                    <div>
                        <div className='flex items-center gap-1 mt-10'>
                            <CiStar /><CiStar /><CiStar /><CiStar /><CiStar />
                        </div>
                        <p className='max-w-xl leading-8 mt-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
                        <p className='mt-5'>Ameer S - October 20,2024</p>

                    </div>
                    <div>
                        <div className='flex items-center gap-1 mt-10'>
                            <CiStar /><CiStar /><CiStar /><CiStar /><CiStar />
                        </div>
                        <p className='max-w-xl leading-8 mt-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
                        <p className='mt-5'>Ameer S - October 20,2024</p>

                    </div>
                </div>
                <div className='col-span-1'>
                    <p className='text-xl mb-2 font-semibold'>Techia M.s vehicles</p>
                    <Carousel>
                        <CarouselContent>
                            <CarouselItem className="md:basis-1/2">
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
                            <CarouselItem className="md:basis-1/2">
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
                            <CarouselItem className="md:basis-1/2">
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
                            <CarouselItem className="md:basis-1/2">
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
                            <CarouselItem className="md:basis-1/2">
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
            </div>
        </div>
    )
}

export default TopHostedCar