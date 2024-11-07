import React from 'react'
import img from '../../assets/logo.png'
import Image from 'next/image'
import { IoLocationOutline, IoLogoFacebook, IoLogoYoutube } from "react-icons/io5";
import { FaSquareInstagram } from 'react-icons/fa6';
import { RiTwitterXFill } from 'react-icons/ri';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { LuPhone } from 'react-icons/lu';
const Footer = () => {
    return (
        <div className=' bg-gradient-to-b from-[#060606] to-[#505050] py-20'>
            <div className='container grid grid-cols-1 md:grid-cols-2 pl-10 lg:pl-0  lg:grid-cols-4 justify-between items-center mx-auto  w-full text-white'>
                <div>
                    <div className='flex items-center gap-2 '>
                        <p className='font-bold text-[49px]'>NARDO</p>
                        <Image height={50} width={50} alt='logo' src={img} />
                    </div>
                    <p className='max-w-[80%]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
                </div>
                <div className='space-y-6'>
                    <p className='font-bold text-[20px] '>Contact Info</p>
                    <p className='flex items-center gap-2'><HiOutlineMailOpen /> Contact@gmail.com</p>
                    <p  className='flex items-center gap-2'><LuPhone /> 302-158-125</p>
                    <p className='flex items-center gap-2'><IoLocationOutline /> 3651 25th st, Milami, Florida, USA</p>
                </div>
                <div className='space-y-4'>
                    <p className='font-bold text-[20px] '>Useful Link</p>
                    <p >About Us</p>
                    <p>contact Us</p>
                    <p>Privacy Policy</p>
                    <p>Terms & Condition</p>
                </div>
                <div className='space-y-4'>
                    <p className='font-bold text-[20px] '>Social Media Links</p>
                    <p className='flex items-center gap-2'><IoLogoFacebook />Facebook</p>
                    <p className='flex items-center gap-2'> <FaSquareInstagram /> Instagram</p>
                    <p className='flex items-center gap-2'> <RiTwitterXFill /> Twitter</p>
                    <p className='flex items-center gap-2'><IoLogoYoutube /> You tube</p>
                </div>
                <div>

                </div>
            </div>
        </div>

    )
}

export default Footer