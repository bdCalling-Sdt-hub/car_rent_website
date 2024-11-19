import React from 'react'
import overview from '../../assets/overview2.jpg'
import Image from 'next/image'
import { MdArrowForwardIos } from 'react-icons/md'

const Overview = () => {
    return (
        <div className=' pb-8 relative container mx-auto px-2 md:px-0'>
            <div className=''>
                <Image height={800} width={1500} src={overview} className='w-[55%] mx-auto  object-contain md:h-[95vh] h-[50vh] ' alt='over' />
            </div>
            <div className='absolute top-0 md:top-[15%]  md:left-[5%]'>
                <h1 className='text-[#528AAE] font-semibold md:text-[40px] text-18px mt-5 flex items-center '>Book a car <MdArrowForwardIos /></h1>
                <p className='max-w-xs mt-2'>Down the street or across the
                    country, find the perfect vehicle
                    for your next adventure.</p>
            </div>
            <div className='absolute md:bottom-[5%] bottom-[10%] md:right-[5%]   md:ml-0 '>
                <h1 className='text-[#528AAE] font-semibold md:text-[40px] text-18px  mt-20 flex items-center '>Become a host<MdArrowForwardIos /></h1>
                <p className='max-w-xs mt-2'>Accelerate your entrepreneurship and start building a small car sharing business on website</p>
            </div>
        </div>
    )
}

export default Overview