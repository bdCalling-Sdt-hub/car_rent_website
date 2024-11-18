import React from 'react'
import heroImage from '../../assets/heroImg.jpg'
import Image from 'next/image'
import { MdArrowOutward, MdDirectionsCar } from 'react-icons/md'
const Hero = () => {
    return (
        <div className='relative'>
            <div >
                <Image height={800} width={1600} className='w-[100%] h-[70vh] object-cover bg-black ' alt='hero image' src={heroImage} />
            </div>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className='absolute top-0 left-0  w-full h-full flex flex-col items-center justify-center text-white'>
                <p className='flex items-center  gap-2'><MdDirectionsCar className='text-white' /> Welcome to Nardo</p>
                <p className=' font-lora md:font-bold text-[30px]  lg:text-[64px] max-w-screen-sm text-center'>Hassle-Free Rides Every Time</p>
                {/* <p className='font-bold text-[64px] pt-0'></p> */}
                <p className='max-w-screen-md text-center text-[10px] md:text-[18px] font-lora'>Whether you are planning a weekend getaway, a business trip, or just need a reliable ride for the day, we offers a wide range of vehicles to suit your needs.</p>

                <div className='flex items-center cursor-pointer '>
                    <p className='bg-[#272121] mt-5 md:py-4 py-2  rounded-full px-4 md:px-8 text-[10px] md:text-[18px] font-lora '>Whether you are planning a weekend getaway </p>
                    <div className='bg-[#272121] mt-5 md:p-4 p-2 transform transition-transform rounded-full hover:rotate-45 duration-300'>
                        <MdArrowOutward  className=' text-white ' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero