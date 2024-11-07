import React from 'react'
import overview from '../../assets/overview.png'
import Image from 'next/image'
import { MdArrowForwardIos } from 'react-icons/md'

const Overview = () => {
    return (
        <div className='pb-20 relative'>
            <Image height={800} width={1500} src={overview} className='w-full h-[90vh] ' alt='over' />
            <div className='absolute top-1/3 left-1/3'>
                <h1 className='text-[#528AAE] font-semibold text-[40px] mt-5 flex items-center '>Book a car <MdArrowForwardIos /></h1>
                <p className='max-w-xs mt-2'>Down the street or across the
                    country, find the perfect vehicle
                    for your next adventure.</p>
            </div>
            <div className='absolute top-2/4 right-1/4'>
                <h1 className='text-[#528AAE] font-semibold text-[40px] mt-20 flex items-center '>Become a host<MdArrowForwardIos /></h1>
                <p className='max-w-xs mt-2'>Accelerate your entrepreneurship and start building a small car sharing business on website</p>
            </div>
        </div>
    )
}

export default Overview