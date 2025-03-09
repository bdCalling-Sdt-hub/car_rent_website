import React from 'react'
import img from '../../assets/logo.png'
import Image from 'next/image'
import {  IoLogoFacebook, IoLogoYoutube } from "react-icons/io5";
import { FaSquareInstagram } from 'react-icons/fa6';
import { RiTwitterXFill } from 'react-icons/ri';
import { HiOutlineMailOpen } from 'react-icons/hi';
import Link from 'next/link';
const Footer = () => {
    return (
        <div className=' bg-[#F9F9F9] py-20'>
            <div className='container grid grid-cols-1 md:grid-cols-2 pl-10 lg:pl-0  lg:grid-cols-4 justify-between mx-auto  w-full '>
                <div>
                    <div className='flex items-center gap-2 '>
                        <p className='font-bold text-[49px]'>NARDO</p>
                        <Image height={50} width={50} alt='logo' src={img} />
                    </div>
                    {/* <p className='max-w-[80%]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p> */}
                </div>
                <div className='space-y-2 mb-5'>
                    <p className='font-bold text-[20px] '>Contact Info</p>
                    <p className='flex items-center gap-2 '><HiOutlineMailOpen />nardolimited@gmail.com</p>
                    {/* <p  className='flex items-center gap-2'><LuPhone /> 302-158-125</p>
                    <p className='flex items-center gap-2'><IoLocationOutline /> 3651 25th st, Milami, Florida, USA</p> */}
                </div>
                <div className='space-y-4 flex flex-col'>
                    <p className='font-bold text-[20px] '>Useful Link</p>
                    <Link href={'/about-us'} >About Us</Link>
                    <Link href={'/Contact-us'}>Contact Us</Link>
                    <Link href={'/privacy-policy'}>Privacy Policy</Link>
                    <Link href={'/terms-condition'}>Terms & Condition</Link>
                </div>
                <div className='space-y-4'>
                    <p className='font-bold text-[20px] '>Social Media Links</p>
                    <p className='flex items-center gap-2'><IoLogoFacebook />Facebook</p>
                    <p className='flex items-center gap-2'> <a className='flex items-center gap-2' href="https://www.instagram.com/nardo.app/?igsh=MThoY2o4Y2lyem54cQ%3D%3D&utm_source=qr#" target="_blank" rel="noopener noreferrer"><FaSquareInstagram /> Instagram</a></p>
                    {/* <Link href={""}></Link> */}
                    <p className='flex items-center gap-2'> <RiTwitterXFill />  X</p>
                    <p className='flex items-center gap-2'><IoLogoYoutube /> Youtube</p>
                </div>
                <div>

                </div>
            </div>
        </div>

    )
}

export default Footer