import React from 'react'
import img from '../../../../assets/car0.png'
import img2 from '../../../../assets/car.png'
import img3 from '../../../../assets/carD.png'
import Image from 'next/image'
import { IoIosStar } from 'react-icons/io'
import { FaCar } from 'react-icons/fa6'
import { LuDoorClosed, LuFuel } from 'react-icons/lu'
import { RiShoppingBagLine } from 'react-icons/ri'
const CarDetailsPage = () => {
    return (
        <div className='container mx-auto my-10 font-lora'>
            <p className='text-2xl font-medium mb-10'>Details</p>
            <div className='grid grid-cols-12 gap-5 '>
                <div className='col-span-7'>
                    <Image alt='img' className='w-full h-full ' src={img2} height={1200} width={1200} />
                </div>
                <div className='col-span-5 space-y-4'>
                    <Image alt='img' className='w-full ' src={img} height={300} width={300} />
                    <Image alt='img' className='w-full ' src={img3} height={300} width={300} />

                </div>
            </div>
            <div className='grid grid-cols-2  justify-between mt-10 gap-20'>
                <div className='col-span-1'>
                    <h1 className='font-bold text-[48px]'>BMW M2 Car 2017</h1>
                    <div className='flex gap-2 '>
                        <p className='bg-[#BCBABA26] px-4 py-2 rounded-full ' >luxury car</p>
                        <div className='flex items-center gap-1'>
                            <IoIosStar /> 4.5
                        </div>
                    </div>
                    <div className='flex items-center justify-between mt-5 max-w-xl'>
                                <p className='flex items-center gap-2'><FaCar /> 4 Passenger</p>
                                <p className='flex items-center gap-2' ><LuDoorClosed />4 Door</p>
                            </div>
                            <div className='flex items-center justify-between mt-5  pb-4  max-w-xl'>
                                <p className='flex items-center gap-2'> <LuFuel />petrol</p>
                                <p className='flex items-center gap-2'> <RiShoppingBagLine />Auto</p>
                            </div>
                </div>
                <div className='col-span-1'>
                    <p className='text-5xl'><span className='font-bold'>£280</span> / day</p>
                </div>
            </div>

        </div>
    )
}

export default CarDetailsPage