import React from 'react'
import overview from '../../assets/overview.png'
import Image from 'next/image'
import { MdArrowForwardIos } from 'react-icons/md'

const Overview = () => {
    return (
        <div className='md:pb-20 pb-8 relative '>
            <div className=''>
                <Image height={800} width={1500} src={overview} className='w-[100%]  object-contain md:h-[95vh] h-[80vh] ' alt='over' />
            </div>
            <div className='absolute top-28 md:top-1/3 left-10 md:left-1/3'>
                <h1 className='text-[#528AAE] font-semibold md:text-[40px] text-18px mt-5 flex items-center '>Book a car <MdArrowForwardIos /></h1>
                <p className='max-w-xs mt-2'>Down the street or across the
                    country, find the perfect vehicle
                    for your next adventure.</p>
            </div>
            <div className='absolute md:top-2/4 md:right-1/4 ml-10 md:ml-0  top-1/3 '>
                <h1 className='text-[#528AAE] font-semibold md:text-[40px] text-18px  mt-20 flex items-center '>Become a host<MdArrowForwardIos /></h1>
                <p className='max-w-xs mt-2'>Accelerate your entrepreneurship and start building a small car sharing business on website</p>
            </div>
        </div>
    )
}

export default Overview