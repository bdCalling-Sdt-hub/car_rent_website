import React from 'react'
import img from '../../assets/chat2.png'
import Image from 'next/image'
import { FaStar } from 'react-icons/fa6'
const RatingReview = () => {
    return (
        <div className='mt-10'>
            <p className='text-xl font-medium'>Rating and Review</p>
            <div className='flex items-center gap-5 mt-5  border-b  py-10'>
                <Image alt='img' className='h-14 w-14' height={200} width={200} src={img} />
                <div className='space-y-2  ' >
                    <div className='flex items-center gap-1 text-[#0CFEE8]'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                    <p><span className='font-semibold text-xl'>Zubayer</span> <span className='font-thin'>October 24, 2024</span></p>
                    <p>Great and convenient experience. Car worked great and did the job. </p>
                </div>
            </div>
            <div className='flex items-center gap-5 mt-5  border-b  py-10'>
                <Image alt='img' className='h-14 w-14' height={200} width={200} src={img} />
                <div className='space-y-2  ' >
                    <div className='flex items-center gap-1 text-[#0CFEE8]'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                    <p><span className='font-semibold text-xl'>Zubayer</span> <span className='font-thin'>October 24, 2024</span></p>
                    <p>Great and convenient experience. Car worked great and did the job. </p>
                </div>
            </div>
            <div className='flex items-center gap-5 mt-5  border-b  py-10'>
                <Image alt='img' className='h-14 w-14' height={200} width={200} src={img} />
                <div className='space-y-2  ' >
                    <div className='flex items-center gap-1 text-[#0CFEE8]'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                    <p><span className='font-semibold text-xl'>Zubayer</span> <span className='font-thin'>October 24, 2024</span></p>
                    <p>Great and convenient experience. Car worked great and did the job. </p>
                </div>
            </div>
        </div>
    )
}

export default RatingReview